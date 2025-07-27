javascript
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('bioworld-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/avatar.json',
                '/Assets/icon.png',
                '/Assets/verif/evil1.png',
                '/Assets/verif/evil2.png',
                '/Assets/verif/evil3.png',
                '/Assets/verif/good1.png',
                '/Assets/verif/good2.png',
                'https://cdn.jsdelivr.net/npm/chart.js',
                'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto+Mono:wght@400&display=swap'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
