// Offline support: everything is cached on install, then served from cache while
// a fresh copy is fetched in the background (so updates show up on the next launch).
const CACHE = 'ctfl-study-v7';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './data/data.js',
  './data/diagram_examA_23.png',
  './data/diagram_examB_23.png',
  './data/diagram_examC_23.png',
  './data/diagram_examC_31.png',
  './data/diagram_examC_32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  // cache: 'reload' skips the browser's HTTP cache so a new version never installs stale files.
  const fresh = ASSETS.map(url => new Request(url, { cache: 'reload' }));
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(fresh)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req;
  event.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(key, { ignoreSearch: true });
    const network = fetch(req, { cache: 'no-cache' })
      .then(res => {
        if (res.ok) cache.put(key, res.clone());
        return res;
      })
      .catch(() => cached);
    if (cached) {
      event.waitUntil(network);
      return cached;
    }
    return network;
  }));
});
