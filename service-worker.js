"use strict";var precacheConfig=[["/thekineticfoot/index.html","626a6dc7686017ee15858f00445cdeea"],["/thekineticfoot/static/css/main.3993656d.css","d79f86c31a8bb7b0b396051bc7f35e0e"],["/thekineticfoot/static/js/main.d4425961.js","e4ed650b163b43e44f5bf2b71c8206f3"],["/thekineticfoot/static/media/checked.184e8a4f.svg","184e8a4faf78f023b660ddf283395214"],["/thekineticfoot/static/media/doctor.8cc3ae2b.svg","8cc3ae2b0cd070573e90ecbd4c02230e"],["/thekineticfoot/static/media/facebook.c0cd1382.svg","c0cd138271276bb33a87c2d174015455"],["/thekineticfoot/static/media/hands.1841411b.svg","1841411bf161fff12f3639236dcf64e5"],["/thekineticfoot/static/media/heart.0d38b995.svg","0d38b99549edd7d14e93c843043374c4"],["/thekineticfoot/static/media/hero1.c6bba679.jpg","c6bba679d8d5aa34444680e5a9224096"],["/thekineticfoot/static/media/hero3.36cff0d5.jpg","36cff0d5feed4aee1f75ad49750d575a"],["/thekineticfoot/static/media/instagram.b1c58ee1.svg","b1c58ee19d1e2c38b29ae86f3174f2e4"],["/thekineticfoot/static/media/key.be0939f3.svg","be0939f3d4fedff507a6d0b61e2dac4b"],["/thekineticfoot/static/media/linkedin.4b475fb3.svg","4b475fb3f54b3e35daa04295ec48df4c"],["/thekineticfoot/static/media/location-pin.57e78a23.svg","57e78a235912aae15433fdf0bde5e70e"],["/thekineticfoot/static/media/marker.51119220.svg","51119220b4d6926ca626db8b30b56728"],["/thekineticfoot/static/media/team.ce737683.svg","ce73768320e524744a2b2fc162839871"],["/thekineticfoot/static/media/twitter.182d5ef4.svg","182d5ef4d173a3cd93897242a6fd56a5"],["/thekineticfoot/static/media/youtube.a6372485.svg","a6372485318244c18a497ae9a9b62467"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/thekineticfoot/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});