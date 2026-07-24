const CACHE='qr-tess-v2';
const ASSETS=[
 "./",
 "./manifest.json",
 "../vendor/tesseract/tesseract.min.js",
 "../vendor/tesseract/worker.min.js",
 "../vendor/tesseract/tesseract-core-simd-lstm.wasm.js",
 "../vendor/tesseract/tesseract-core-simd-lstm.wasm",
 "../vendor/tesseract/tesseract-core-lstm.wasm.js",
 "../vendor/tesseract/tesseract-core-lstm.wasm",
 "../vendor/tessdata/eng.traineddata.gz"
];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.pathname.includes('/vendor/')){
    e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{const c2=r.clone();caches.open(CACHE).then(c=>c.put(e.request,c2)).catch(()=>{});return r;})));
  }else{
    e.respondWith(fetch(e.request).then(r=>{const c2=r.clone();caches.open(CACHE).then(c=>c.put(e.request,c2)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));
  }
});