javascript // Service Worker for My Diary PWA const CACHE_NAME =
'my-diary-v1'; const urlsToCache
=[
/
'/static/js/
bundle.js',
'/static/css/
main.css',
manifest.json' ]; // Install event self. addEventListener('install',
(event) =>
event.waitUntil(
open (CACHE_NAME )
caches.
• then ( (ca
che) => {
return
cache.addA11(urlsToCache) ;
}) ); );
// Fetch event
self addEventListener('fetch',
(event) =>
  event.respondWith(
s.match (event. request)
cache
•th
en ((response) => {
//
Return cached version or fetch from network
return
response
fetch (event. request);
) ); 3);
); }); /I Activate event self.addEventListener( 'activate' , (event) =>
{ event.waitUntil(
caches.
keys ().then ( (cacheNames) =>
return
Promise.all(
cache-
Names.map ( (cacheName) =>
if (cacheName !==
CACHE_NAME) {
return
caches.delete (cacheName) ;
} )
) 
} )
