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
        const isImage = activeResource.fileType?.includes('image') || activeResource.fileName.match(/\.(jpg|jpeg|png|gif)$/i);

        return (
            <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in slide-in-from-bottom duration-300">
                {/* Reader Header */}
                <div className="flex items-center justify-between p-4 bg-gray-900 text-white shrink-0">
                    <button onClick={() => setActiveResource(null)} className="p-2 -ml-2 hover:bg-white/10 rounded-full flex items-center gap-2">
                        <IconX className="w-6 h-6" />
                        <span className="font-medium hidden sm:inline">{ui.readerBack}</span>
                    </button>
                    <div className="text-sm font-bold uppercase tracking-widest truncate max-w-[200px]">
                        {activeResource.title}
                    </div>
                     <a 
                        href={activeResource.fileUrl} 
                        download={activeResource.fileName}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:bg-white/10 rounded-full text-teal-400"
                        title={ui.downloadBtn}
                    >
                        <IconDownload className="w-6 h-6" />
                    </a>
                </div>

                <div className="flex-1 bg-gray-800 flex items-center justify-center relative overflow-hidden">
                     {isPdf ? (
                        <iframe 
                            src={activeResource.fileUrl} 
                            className="w-full h-full border-0 bg-white" 
                            title="PDF Viewer"
                        />
                     ) : isImage ? (
                        <img 
                            src={activeResource.fileUrl} 
                            alt={activeResource.title} 
                            className="max-w-full max-h-full object-contain p-2"
                        />
                     ) : (
                        <div className="text-center text-gray-400 p-8">
                            <IconFile className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p>Visualização não suportada para este formato.</p>
                            <a href={activeResource.fileUrl} download className="text-teal-400 underline mt-2 block">Baixar Arquivo</a>
                        </div>
                     )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                         <button 
                            onClick={onBack}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
                        >
                            <IconArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="font-bold text-lg text-gray-800">{ui.pageTitle}</h1>
                        <div className="w-5"></div>
                    </div>
                    
                    <div className="flex gap-6 mt-2">
                        <button 
                            onClick={() => setActiveTab('library')}
                            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'library' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {ui.tabLibrary}
                        </button>
                        <button 
                            onClick={() => setActiveTab('upload')}
                            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'upload' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {ui.tabUpload}
                        </button>
                        <button 
                            onClick={() => setActiveTab('admin')}
                            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'admin' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {ui.tabAdmin}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                
                {/* LIBRARY TAB */}
                {activeTab === 'library' && (
                    <div className="space-y-4">
                        {fetchError && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-center animate-in fade-in">
                                <p className="font-bold flex items-center justify-center gap-2">
                                    <IconX className="w-4 h-4" /> Erro ao carregar biblioteca:
                                </p>
                                <p className="text-sm mt-1">{fetchError}</p>
                            </div>
                        )}

                        {loading ? (
                            <div className="text-center py-10 text-gray-400 flex flex-col items-center gap-2">
                                <IconRotateCcw className="w-6 h-6 animate-spin text-teal-600" />
                                Carregando Biblioteca...
                            </div>
                        ) : resources.length === 0 && !fetchError ? (
                            <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                                <IconBookOpen className="w-12 h-12 mx-auto text-gray-200 mb-4" />
                                <p className="text-gray-500">{ui.emptyLibrary}</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                                {resources.map(res => (
                                    <button 
                                        key={res.id} 
                                        onClick={() => setActiveResource(res)}
                                        className="group relative flex flex-col text-left focus:outline-none"
                                    >
                                        <div className={`aspect-[2/3] w-full rounded-r-lg rounded-l-sm shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${res.coverColor || 'bg-gray-700'}`}>
                                            <div className="absolute top-0 bottom-0 left-0 w-3 bg-white/20 backdrop-blur-sm border-r border-black/10 z-10"></div>
                                            <div className="absolute top-0 bottom-0 left-0 w-1 bg-black/20 z-20"></div>
                                            <div className="absolute inset-0 p-4 flex flex-col justify-between ml-2">
                                                <div className="text-white/90 font-serif font-bold text-lg leading-tight line-clamp-3 drop-shadow-md">
                                                    {res.title}
                                                </div>
                                                <div className="text-white/70 text-xs font-medium uppercase tracking-wider drop-shadow-sm">
                                                    {res.description}
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                                        </div>
                                        <div className="mt-3 px-1">
                                            <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-teal-700 transition-colors">{res.title}</h3>
                                            <p className="text-xs text-gray-500">{res.date}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* UPLOAD TAB */}
                {activeTab === 'upload' && (
                    <div className="max-w-xl mx-auto">
                        <div className="bg-teal-50 border border-teal-100 p-6 rounded-xl mb-8 text-center">
                            <IconUpload className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <h2 className="font-bold text-teal-800 text-lg mb-1">{ui.uploadTitle}</h2>
                            <p className="text-teal-600 text-sm">{ui.uploadDesc}</p>
                        </div>

                        {uploadStatus === 'success' ? (
                            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center animate-in fade-in zoom-in">
                                <IconCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-green-800">Sucesso!</h3>
                                <p className="text-green-600">Seu arquivo foi enviado para análise.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleUpload} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formTitle}</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                        value={uploadTitle}
                                        onChange={e => setUploadTitle(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formDesc}</label>
                                    <input 
                                        type="text"
                                        placeholder="Ex: Autor, Tema..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                        value={uploadDesc}
                                        onChange={e => setUploadDesc(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{ui.formFile}</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                                        <input 
                                            type="file" 
                                            required
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={e => setSelectedFile(e.target.files?.[0] || null)}
                                        />
                                        {selectedFile ? (
                                            <div className="text-teal-600 font-bold flex items-center justify-center gap-2">
                                                <IconFile className="w-5 h-5" />
                                                {selectedFile.name}
                                            </div>
                                        ) : (
                                            <span className="text-gray-400">Clique para selecionar PDF, JPG...</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 text-center">Suporta PDF, JPG, PNG</p>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={uploadStatus === 'uploading'}
                                    className={`w-full font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                                    ${uploadStatus === 'error' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                                >
                                    {uploadStatus === 'uploading' ? (
                                        <>
                                            <IconRotateCcw className="w-5 h-5 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : uploadStatus === 'error' ? (
                                        'Tentar Novamente'
                                    ) : (
                                        ui.btnUpload
                                    )}
                                </button>

                                {uploadStatus === 'error' && (
                                    <div className="bg-red-50 text-red-700 p-4 rounded-lg mt-4 text-sm border border-red-200 animate-in fade-in slide-in-from-top-2">
                                        <div className="flex items-start gap-2">
                                            <IconX className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold mb-1">Falha no Upload:</p>
                                                <p>{errorMessage}</p>
                                            </div>
                                        </div>
                                        
                                        {showConfigHelp && (
                                            <div className="mt-4 pt-4 border-t border-red-200 text-xs text-gray-700 bg-white p-3 rounded border border-gray-200">
                                                <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                                                    <IconHelpCircle className="w-4 h-4 text-blue-500" />
                                                    Configuração Supabase Necessária:
                                                </div>
                                                <ol className="list-decimal pl-4 space-y-1 mb-2">
                                                    <li>Crie um projeto em <a href="https://supabase.com" target="_blank" className="text-blue-600 underline">supabase.com</a></li>
                                                    <li>Crie um bucket público chamado <code>uploads</code> no menu Storage.</li>
                                                    <li>Crie uma tabela chamada <code>resources</code> no Table Editor.</li>
                                                    <li>Desative o RLS (Row Level Security) da tabela temporariamente ou adicione Policies para permitir INSERT/SELECT para "public".</li>
                                                    <li>Copie a URL e ANON KEY para o arquivo <code>services/firebase.ts</code>.</li>
                                                </ol>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                )}

                {/* ADMIN TAB */}
                {activeTab === 'admin' && (
                    !isAdminUnlocked ? (
                        <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center mt-10">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <IconLock className="w-8 h-8 text-gray-500" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">{ui.adminLogin}</h2>
                            <form onSubmit={handleAdminLogin} className="space-y-4">
                                <input 
                                    type="password" 
                                    placeholder={ui.adminPass}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center"
                                    value={adminPass}
                                    onChange={e => setAdminPass(e.target.value)}
                                />
                                {adminError && <p className="text-red-500 text-sm">Senha incorreta (Dica: 1234)</p>}
                                <button type="submit" className="w-full bg-gray-900 text-white font-bold py-2 rounded-lg">
                                    {ui.btnLogin}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-bold text-gray-700">Gestão de Arquivos (Supabase)</h2>
                                <button onClick={() => setIsAdminUnlocked(false)} className="text-xs text-red-500 font-bold uppercase">Sair</button>
                            </div>
                            
                            {resources.length === 0 ? (
                                <p className="text-center text-gray-400 py-10">Nada aqui.</p>
                            ) : (
                                resources.map(res => (
                                    <div key={res.id} className={`bg-white p-4 rounded-lg border flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center ${res.status === 'pending' ? 'border-orange-200 bg-orange-50/30' : 'border-gray-200'}`}>
                                        <div className="flex items-start gap-3">
                                            {res.status === 'pending' ? (
                                                <IconClock className="w-5 h-5 text-orange-500 mt-1" />
                                            ) : (
                                                <IconCheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            )}
                                            <div>
                                                <h3 className="font-bold text-gray-800">{res.title}</h3>
                                                <p className="text-xs text-gray-500">{res.date} • {res.uploader}</p>
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${res.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                                                    {res.status === 'pending' ? ui.statusPending : ui.statusApproved}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 w-full sm:w-auto">
                                            {res.status === 'pending' && (
                                                <button 
                                                    onClick={() => handleApprove(res.id)}
                                                    className="flex-1 sm:flex-none px-3 py-1.5 bg-green-500 text-white rounded text-xs font-bold hover:bg-green-600 flex items-center justify-center gap-1"
                                                >
                                                    <IconCheckCircle className="w-3 h-3" /> Aprovar
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => handleDelete(res.id)}
                                                className="flex-1 sm:flex-none px-3 py-1.5 bg-red-100 text-red-600 rounded text-xs font-bold hover:bg-red-200 flex items-center justify-center gap-1"
                                            >
                                                <IconTrash className="w-3 h-3" /> Deletar
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )
                )}

            </div>
        </div>
    );
};

export default ResourcesPage;