// Service worker mínimo — necesario para que Android permita instalar la app como PWA.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // sin caché especial, deja pasar todas las peticiones
