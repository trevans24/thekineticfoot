"use strict";var precacheConfig=[["/thekineticfoot/index.html","8a7883629ff8fd79ad416d4d41ab3524"],["/thekineticfoot/static/css/main.4e4516a4.css","c187bb7e69b8821ede78a2dec2055092"],["/thekineticfoot/static/js/main.327d2328.js","761baf612e171e25871dc977e8901312"],["/thekineticfoot/static/media/doctor.30368a31.svg","30368a31a3c78378b630ac64ddebf0be"],["/thekineticfoot/static/media/facebook.c0cd1382.svg","c0cd138271276bb33a87c2d174015455"],["/thekineticfoot/static/media/hands.2e725054.svg","2e7250547bd93678305aa6cdc2d84127"],["/thekineticfoot/static/media/heart.24fcca9b.svg","24fcca9b7ab70458bd29a7aacc1567b7"],["/thekineticfoot/static/media/hero.b429b20b.jpg","b429b20bdd16c1d62a9bc9d999b281fb"],["/thekineticfoot/static/media/instagram.b1c58ee1.svg","b1c58ee19d1e2c38b29ae86f3174f2e4"],["/thekineticfoot/static/media/linkedin.4b475fb3.svg","4b475fb3f54b3e35daa04295ec48df4c"],["/thekineticfoot/static/media/location-pin.57e78a23.svg","57e78a235912aae15433fdf0bde5e70e"],["/thekineticfoot/static/media/marker.51119220.svg","51119220b4d6926ca626db8b30b56728"],["/thekineticfoot/static/media/twitter.182d5ef4.svg","182d5ef4d173a3cd93897242a6fd56a5"],["/thekineticfoot/static/media/youtube.a6372485.svg","a6372485318244c18a497ae9a9b62467"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/thekineticfoot/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});