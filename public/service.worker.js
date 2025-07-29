// public/service-worker.js
const CACHE_NAME = 'react-offline-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/src/App.jsx',
  // Add more paths as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
