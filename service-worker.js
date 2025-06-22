const CACHE_NAME = 'sat-benchmark-cache-v1';
const assets = ['/', '/index.html', '/css/styles.css', '/js/theme-toggle.js', '/js/chart-render.js', '/js/search.js', '/js/sw-register.js', '/data/performance-data.json', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });