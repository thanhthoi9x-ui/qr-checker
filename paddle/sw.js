const CACHE='qr-paddle-v2';
const ASSETS=[
 "./",
 "./manifest.json",
 "../vendor/paddle-iife.js",
 "../vendor/ort/ort-wasm-simd-threaded.jsep.mjs",
 "../vendor/ort/ort-wasm-simd-threaded.jsep.wasm",
 "../vendor/ppmodels/PP-OCRv6_tiny_det_onnx_infer.tar",
 "../vendor/ppmodels/PP-OCRv6_tiny_rec_onnx_infer.tar"
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