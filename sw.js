self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("glitch-in-bio-pwa").then(cache => {
        return cache.addAll([
          "/", 
          "/styles/style.css",
          "/styles/themes/glitch.css"
        ]);
      })
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });
  