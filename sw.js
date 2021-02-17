self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/BPCCC/',
      '/BPCCC/index.html',
      '/BPCCC/index.js',
       '/BPCCC/sketch.js',
        '/BPCCC/script.js',
      '/BPCCC/style.css',
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js',
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
