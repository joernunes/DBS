import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// CONFIGURAÇÃO SUPABASE
// 1. Crie um projeto em https://supabase.com
// 2. Copie a URL e a API Key (anon public) nas configurações do projeto
// 3. Substitua abaixo
// ------------------------------------------------------------------

const SUPABASE_URL = 'https://pjrihgjehzvvtckiejzn.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcmloZ2plaHp2dnRja2llanpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzODk2MTAsImV4cCI6MjA4MDk2NTYxMH0.a2YzjdBHT8zJQw_xdn9G9S1rBJlCwNRaJWvC3aj2tnY';

// Verificação de segurança simples para avisar no console
if (SUPABASE_URL.includes('seu-projeto')) {
    console.error("⚠️ SUPABASE NÃO CONFIGURADO: Edite o arquivo services/firebase.ts com suas credenciais.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
