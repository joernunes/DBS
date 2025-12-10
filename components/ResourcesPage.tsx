import * as React from 'react';
import { useState, useEffect } from 'react';
import { Language, Resource } from '../types';
import { RESOURCES_UI } from '../constants';
import { db } from '../services/database';
import { IconArrowLeft, IconUpload, IconFile, IconLock, IconCheckCircle, IconX, IconTrash, IconClock, IconBookOpen, IconDownload, IconRotateCcw, IconHelpCircle } from './Icons';

interface ResourcesPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ language, setLanguage, onBack }) => {
    const [activeTab, setActiveTab] = useState<'library' | 'upload' | 'admin'>('library');
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState<string | null>(null);
    
    // Reader State
    const [activeResource, setActiveResource] = useState<Resource | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // Upload Form State
    const [uploadTitle, setUploadTitle] = useState('');
    const [uploadDesc, setUploadDesc] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [showConfigHelp, setShowConfigHelp] = useState(false);

    // Admin State
    const [adminPass, setAdminPass] = useState('');
    const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
    const [adminError, setAdminError] = useState(false);

    const ui = RESOURCES_UI[language];

    useEffect(() => {
        // Detect mobile user agent for PDF handling
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    // Load Data based on Tab
    const refreshData = async () => {
        setLoading(true);
        setFetchError(null);
        try {
            if (activeTab === 'library') {
                const data = await db.getPublicResources();
                setResources(data);
            } else if (activeTab === 'admin' && isAdminUnlocked) {
                const data = await db.getAllResources();
                setResources(data);
            }
        } catch (e: any) {
            console.error("Erro no refreshData:", e);
            let msg = e.message || "Erro desconhecido.";
            
            // Diagnóstico amigável
            if (msg.includes("relation") && msg.includes("does not exist")) {
                msg = "A tabela 'resources' não foi encontrada. Você rodou o Script SQL no Painel do Supabase?";
            }
            
            setFetchError(msg);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshData();
    }, [activeTab, isAdminUnlocked]);

    // Handle Upload
    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile || !uploadTitle) return;

        setUploadStatus('uploading');
        setErrorMessage('');
        setShowConfigHelp(false);

        try {
            await db.uploadResource(selectedFile, {
                title: uploadTitle,
                description: uploadDesc,
                uploader: 'Membro',
                category: 'book'
            });

            setUploadStatus('success');
            setTimeout(() => {
                setUploadStatus('idle');
                setUploadTitle('');
                setUploadDesc('');
                setSelectedFile(null);
                setActiveTab('library');
            }, 2000);
        } catch (error: any) {
            console.error("Erro capturado no componente:", error);
            setUploadStatus('error');
            
            let msg = error.message || "Erro desconhecido";
            
            if (msg.includes("row-level security")) {
                msg = "Erro de Permissão (RLS). Falta configurar a Policy para INSERT no Supabase.";
                setShowConfigHelp(true);
            } else if (msg.includes("bucket not found")) {
                msg = "Bucket 'uploads' não encontrado. Crie o bucket público no Storage.";
                setShowConfigHelp(true);
            } else if (msg.includes("new row violates")) {
                msg = "Erro na estrutura da tabela. Verifique se todas as colunas existem.";
            }

            setErrorMessage(msg);
        }
    };

    // Handle Admin Login
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (adminPass === '1234') { // Mock password
            setIsAdminUnlocked(true);
            setAdminError(false);
        } else {
            setAdminError(true);
        }
    };

    // Handle Admin Actions
    const handleApprove = async (id: string) => {
        await db.approveResource(id);
        refreshData();
    };

    const handleDelete = async (id: string) => {
        if(window.confirm('Tem certeza? Isso apagará o registro.')) {
            await db.deleteResource(id);
            refreshData();
        }
    };

    // NATIVE READER VIEW (OVERLAY)
    if (activeResource) {
        const isPdf = activeResource.fileType?.includes('pdf') || activeResource.fileName.endsWith('.pdf');
        
        // Mobile PDF Fix: Use Google Viewer if on mobile to avoid download forcing
        const pdfViewerUrl = isPdf && isMobile 
            ? `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(activeResource.fileUrl || '')}`
            : activeResource.fileUrl;

        return (
            <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in slide-in-from-bottom duration-300">
                {/* Floating Close Button - Top Right */}
                <button 
                    onClick={() => setActiveResource(null)} 
                    className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all shadow-lg border border-white/10"
                    aria-label="Fechar"
                >
                    <IconX className="w-6 h-6" />
                </button>

                <div className="flex-1 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                    {activeResource.fileUrl ? (
                        isPdf ? (
                            <iframe 
                                src={pdfViewerUrl} 
                                className="w-full h-full border-0"
                                title="PDF Reader"
                            />
                        ) : (
                            <img 
                                src={activeResource.fileUrl} 
                                alt={activeResource.title} 
                                className="max-w-full max-h-full object-contain"
                            />
                        )
                    ) : (
                        <div className="text-white">URL do arquivo não encontrada.</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-20 select-none">
             {/* Header */}
             <div className="bg-white border-b border-gray-100 p-4 sticky top-0 z-40 flex items-center justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
                    <IconArrowLeft className="w-5 h-5" />
                    <span className="hidden sm:inline">Voltar</span>
                </button>
                <h1 className="font-bold text-gray-900">{ui.pageTitle}</h1>
                <div className="w-8"></div> {/* Spacer */}
             </div>

             {/* Tabs */}
             <div className="flex p-4 gap-2 overflow-x-auto">
                 <button 
                    onClick={() => setActiveTab('library')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                        activeTab === 'library' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                 >
                    {ui.tabLibrary}
                 </button>
                 <button 
                    onClick={() => setActiveTab('upload')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                        activeTab === 'upload' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                 >
                    {ui.tabUpload}
                 </button>
                 <button 
                    onClick={() => setActiveTab('admin')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                        activeTab === 'admin' ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                 >
                    {ui.tabAdmin}
                 </button>
             </div>

             {/* Content Library */}
             {activeTab === 'library' && (
                 <div className="px-4 pb-12">
                     {loading ? (
                         <div className="text-center py-20 text-gray-400">Carregando biblioteca...</div>
                     ) : fetchError ? (
                         <div className="text-center py-20 text-red-500 max-w-md mx-auto">
                             <p className="mb-2 font-bold">Erro de Conexão</p>
                             <p className="text-sm">{fetchError}</p>
                         </div>
                     ) : resources.length === 0 ? (
                         <div className="text-center py-20 text-gray-400">
                             <IconBookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                             <p>{ui.emptyLibrary}</p>
                         </div>
                     ) : (
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                             {resources.map((res) => (
                                 <div 
                                    key={res.id} 
                                    onClick={() => setActiveResource(res)}
                                    className="group aspect-[3/4] relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer bg-gray-100"
                                 >
                                     {/* Cover / Preview */}
                                     <div className={`absolute inset-0 ${res.coverColor || 'bg-gray-700'} flex items-center justify-center p-4`}>
                                         {res.fileType?.includes('image') && res.fileUrl ? (
                                            <img src={res.fileUrl} alt={res.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                         ) : (
                                            <div className="text-white text-center">
                                                <IconBookOpen className="w-8 h-8 mx-auto mb-2 opacity-80" />
                                                <p className="text-xs font-serif italic line-clamp-3 opacity-90">{res.description}</p>
                                            </div>
                                         )}
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                     </div>

                                     {/* Info */}
                                     <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                         <p className="font-bold text-sm leading-tight mb-1 line-clamp-2">{res.title}</p>
                                         <p className="text-[10px] opacity-80 uppercase tracking-wide">{res.category || 'Livro'}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     )}
                 </div>
             )}

             {/* Content Upload */}
             {activeTab === 'upload' && (
                 <div className="px-4 max-w-lg mx-auto py-8">
                     <div className="text-center mb-8">
                         <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                             <IconUpload className="w-8 h-8" />
                         </div>
                         <h2 className="text-2xl font-bold text-gray-900">{ui.uploadTitle}</h2>
                         <p className="text-gray-500 mt-2">{ui.uploadDesc}</p>
                     </div>

                     {uploadStatus === 'success' ? (
                         <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center animate-in fade-in">
                             <IconCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                             <h3 className="font-bold text-green-800 text-lg">Enviado com Sucesso!</h3>
                             <p className="text-green-700 text-sm mt-2">Aguardando aprovação do moderador.</p>
                         </div>
                     ) : (
                         <form onSubmit={handleUpload} className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formTitle}</label>
                                 <input 
                                     type="text" 
                                     required
                                     value={uploadTitle}
                                     onChange={e => setUploadTitle(e.target.value)}
                                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                     placeholder="Ex: Guia de Estudo João"
                                 />
                             </div>

                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formDesc}</label>
                                 <textarea 
                                     rows={3}
                                     value={uploadDesc}
                                     onChange={e => setUploadDesc(e.target.value)}
                                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                     placeholder="Ex: Material complementar para o encontro..."
                                 />
                             </div>

                             <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formFile}</label>
                                 <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors relative">
                                     <input 
                                         type="file" 
                                         required
                                         onChange={e => setSelectedFile(e.target.files?.[0] || null)}
                                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                         accept=".pdf,image/*"
                                     />
                                     <IconFile className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                     <p className="text-sm text-gray-600 font-medium">
                                         {selectedFile ? selectedFile.name : "Clique para selecionar PDF ou Imagem"}
                                     </p>
                                 </div>
                             </div>

                             {uploadStatus === 'error' && (
                                 <div className="p-4 bg-red-50 text-red-700 text-sm rounded-lg flex items-start gap-3">
                                     <IconX className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                     <div>
                                         <p className="font-bold">Falha no envio</p>
                                         <p>{errorMessage}</p>
                                         {showConfigHelp && (
                                             <div className="mt-2 pt-2 border-t border-red-200">
                                                 <p className="text-xs font-mono bg-red-100 p-2 rounded">
                                                     SQL para corrigir no Supabase:<br/>
                                                     CREATE POLICY "Public Insert" ON resources FOR INSERT WITH CHECK (true);<br/>
                                                     CREATE POLICY "Public Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'uploads');
                                                 </p>
                                             </div>
                                         )}
                                     </div>
                                 </div>
                             )}

                             <button 
                                 type="submit" 
                                 disabled={uploadStatus === 'uploading'}
                                 className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                             >
                                 {uploadStatus === 'uploading' ? (
                                     <>
                                         <IconRotateCcw className="w-5 h-5 animate-spin" />
                                         Enviando...
                                     </>
                                 ) : (
                                     <>
                                         <IconUpload className="w-5 h-5" />
                                         {ui.btnUpload}
                                     </>
                                 )}
                             </button>
                         </form>
                     )}
                 </div>
             )}

             {/* Content Admin */}
             {activeTab === 'admin' && (
                 <div className="px-4 py-8 max-w-2xl mx-auto">
                     {!isAdminUnlocked ? (
                         <form onSubmit={handleAdminLogin} className="max-w-sm mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                             <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                 <IconLock className="w-6 h-6 text-gray-600" />
                             </div>
                             <h2 className="text-xl font-bold text-gray-900 mb-6">{ui.adminLogin}</h2>
                             
                             <input 
                                 type="password" 
                                 value={adminPass}
                                 onChange={e => setAdminPass(e.target.value)}
                                 className="w-full px-4 py-3 rounded-lg border border-gray-200 mb-4 text-center text-lg tracking-widest"
                                 placeholder="••••"
                                 autoFocus
                             />
                             {adminError && <p className="text-red-500 text-sm mb-4">Senha incorreta</p>}
                             
                             <button type="submit" className="w-full py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors">
                                 {ui.btnLogin}
                             </button>
                         </form>
                     ) : (
                         <div className="space-y-4">
                             <div className="flex items-center justify-between mb-6">
                                 <h2 className="text-xl font-bold text-gray-900">Gestão de Arquivos</h2>
                                 <button onClick={() => setIsAdminUnlocked(false)} className="text-sm text-red-500 hover:text-red-700 font-bold">Sair</button>
                             </div>

                             {loading ? (
                                 <div className="text-center py-10">Carregando...</div>
                             ) : (
                                 resources.map(res => (
                                     <div key={res.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-4">
                                         <div className="flex items-center gap-4 overflow-hidden">
                                             <div className={`w-12 h-12 ${res.coverColor} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                                                 <IconFile className="w-6 h-6" />
                                             </div>
                                             <div>
                                                 <p className="font-bold text-gray-900 truncate">{res.title}</p>
                                                 <div className="flex items-center gap-2 text-xs text-gray-500">
                                                     <span>{res.date}</span>
                                                     <span>•</span>
                                                     <span className={`uppercase font-bold ${res.status === 'approved' ? 'text-green-600' : 'text-orange-500'}`}>
                                                         {res.status === 'approved' ? ui.statusApproved : ui.statusPending}
                                                     </span>
                                                 </div>
                                             </div>
                                         </div>

                                         <div className="flex items-center gap-2">
                                             {res.status === 'pending' && (
                                                 <button 
                                                    onClick={() => handleApprove(res.id)}
                                                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                                                    title="Aprovar"
                                                 >
                                                     <IconCheckCircle className="w-5 h-5" />
                                                 </button>
                                             )}
                                             <button 
                                                onClick={() => handleDelete(res.id)}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                                                title="Excluir"
                                             >
                                                 <IconTrash className="w-5 h-5" />
                                             </button>
                                         </div>
                                     </div>
                                 ))
                             )}
                         </div>
                     )}
                 </div>
             )}
        </div>
    );
};

export default ResourcesPage;