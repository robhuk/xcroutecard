const CACHE="route-card-pwa-v7";
const ASSETS=["./","./index.html","./manifest.json","./sw.js","./icon.jpeg","./xc-white-logo.png"];
self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached) return cached;
      return fetch(event.request).catch(()=>caches.match("./index.html"));
    })
  );
});
