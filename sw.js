const CACHE_NAME = 'dbs-app-v1';
const DYNAMIC_CACHE = 'dbs-dynamic-v1';

// Arquivos essenciais para cache inicial
// Nota: Em produção, isso seria gerado pelo build, aqui listamos o básico.
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/vite.svg'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estratégia de Fetch: Network First, Fallback to Cache
// Tenta buscar na rede para ter dados frescos. Se falhar (offline), usa o cache.
self.addEventListener('fetch', (event) => {
  // Ignora requisições que não sejam GET ou que sejam para outras origens (analytics, etc, opcional)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta for válida, clonamos e guardamos no cache dinâmico
        const resClone = response.clone();
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // Se falhar (offline), tenta retornar do cache
        return caches.match(event.request).then((cachedRes) => {
          if (cachedRes) {
            return cachedRes;
          }
          // Fallback final customizado (opcional), ex: página offline.html
        });
      })
  );
});