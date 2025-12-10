import { Resource } from '../types';
import { supabase } from './firebase'; // Importando o client do Supabase (arquivo mantido com nome antigo)

const TABLE_NAME = 'resources';
const BUCKET_NAME = 'uploads';

// Helper to get random cover color
const getRandomCover = () => {
    const colors = [
        'bg-blue-700', 'bg-red-700', 'bg-green-700', 'bg-indigo-700', 'bg-yellow-700', 'bg-purple-700', 'bg-teal-700', 'bg-orange-700'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const db = {
    // Get all approved resources (for members)
    getPublicResources: async (): Promise<Resource[]> => {
        try {
            const { data, error } = await supabase
                .from(TABLE_NAME)
                .select('*')
                .eq('status', 'approved');

            if (error) throw error;
            return data as Resource[];
        } catch (error: any) {
            // Log detalhado para debug no console
            console.error("Erro ao buscar recursos públicos:", error.message || error);
            // Lança o erro para que a interface possa mostrar a mensagem
            throw new Error(error.message || "Falha ao conectar com o banco de dados.");
        }
    },

    // Get all resources (for admin)
    getAllResources: async (): Promise<Resource[]> => {
        try {
            const { data, error } = await supabase
                .from(TABLE_NAME)
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            return data as Resource[];
        } catch (error: any) {
            console.error("Erro ao buscar todos recursos:", error.message || error);
            throw new Error(error.message || "Falha ao carregar lista administrativa.");
        }
    },

    // Upload a new resource (File + Metadata)
    uploadResource: async (file: File, metadata: { title: string, description: string, uploader: string, category: string }): Promise<void> => {
        try {
            // 1. Upload File to Supabase Storage
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            console.log("Iniciando upload para Supabase Storage...");
            
            const { error: uploadError } = await supabase.storage
                .from(BUCKET_NAME)
                .upload(filePath, file);

            if (uploadError) throw new Error(`Erro no Storage: ${uploadError.message}`);

            // Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from(BUCKET_NAME)
                .getPublicUrl(filePath);

            console.log("Upload concluído. URL:", publicUrl);

            // 2. Save Metadata to Database
            console.log("Salvando metadados na tabela...");
            
            const newResource = {
                title: metadata.title,
                description: metadata.description,
                date: new Date().toLocaleDateString(),
                status: 'pending',
                fileName: file.name,
                uploader: metadata.uploader,
                coverColor: getRandomCover(),
                category: metadata.category,
                fileUrl: publicUrl,
                fileType: file.type
            };

            const { error: dbError } = await supabase
                .from(TABLE_NAME)
                .insert([newResource]);

            if (dbError) throw new Error(`Erro no Banco: ${dbError.message}`);
            
            console.log("Recurso salvo completamente.");

        } catch (error) {
            console.error("Erro detalhado no uploadResource:", error);
            throw error;
        }
    },

    // Approve a resource
    approveResource: async (id: string): Promise<void> => {
        try {
            const { error } = await supabase
                .from(TABLE_NAME)
                .update({ status: 'approved' })
                .eq('id', id);
            
            if (error) throw error;
        } catch (error) {
            console.error("Erro ao aprovar:", error);
            throw error;
        }
    },

    // Reject/Delete a resource
    deleteResource: async (id: string): Promise<void> => {
        try {
            const { error } = await supabase
                .from(TABLE_NAME)
                .delete()
                .eq('id', id);

            if (error) throw error;
        } catch (error) {
            console.error("Erro ao deletar:", error);
            throw error;
        }
    }
};