self.addEventListener('install', (e) => {

  e.waitUntil(

    caches.open('fox-store').then((cache) => cache.addAll([

      '/BPCCC/',

      '/BPCCC/index.html',

      '/BPCCC/index.js',

      '/BPCCC/style.css',

'/BPCCC/script.js',
      '/BPCCC/sketch.js',
      '/BPCCC/p5.js',

    ])),

  );

});

self.addEventListener('fetch', (e) => {

  console.log(e.request.url);

  e.respondWith(

    caches.match(e.request).then((response) => response || fetch(e.request)),

  );

});
