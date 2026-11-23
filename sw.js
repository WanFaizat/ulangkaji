var C='ulangkaji-v5';var A=['bi.html','sains.html','bi-192.png','sains-192.png','splash.js','ramalan.js','diri.webp','keluarga2.webp','pasangan.webp'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(function(r){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k)});return r}).catch(function(){return caches.match(e.request)}))});
