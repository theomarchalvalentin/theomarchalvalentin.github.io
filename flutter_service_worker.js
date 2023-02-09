'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9cdd3e719edc29d08c2dfc7c739e20bf",
"index.html": "e8a591b9a52812f35e3c019143438cc9",
"/": "e8a591b9a52812f35e3c019143438cc9",
"theomarchalvalentin.github.io/.git/config": "c62a6938aa48aac3e3a50510eb24c690",
"theomarchalvalentin.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"theomarchalvalentin.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"theomarchalvalentin.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"theomarchalvalentin.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"theomarchalvalentin.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"theomarchalvalentin.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"theomarchalvalentin.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"theomarchalvalentin.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"theomarchalvalentin.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"theomarchalvalentin.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"theomarchalvalentin.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"theomarchalvalentin.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"theomarchalvalentin.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"theomarchalvalentin.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"theomarchalvalentin.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"theomarchalvalentin.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"main.dart.js": "845920b41b0534923365411200412559",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b33300b9e5696873eac5f9f3f2bc12b3",
"assets/AssetManifest.json": "729799dcc9e466489706b7be974426d7",
"assets/NOTICES": "da65561811c5755792d7c748d388ecba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ftx.jpg": "e42ccb56c13c9ea912b97254fbb1ac2d",
"assets/assets/images/renault.jpg": "e97e96a911e0d3b87f1979afc7e36fee",
"assets/assets/images/fixedincome.png": "e20c0036daed6ed6424d52aab9c1d9c5",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/quotes.png.png": "4f403ddc113264e4c2fff90bb87270b7",
"assets/assets/images/stocks.png": "25153362d9d425fae9f59a2343595ae8",
"assets/assets/images/productnotfound.png": "41204c2263d1774343d9e8eaa7d96c75",
"assets/assets/images/city.jpg": "923b1b1edcfac18b2940760b0d002a6e",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/isharespng.png": "eebaf2267bf3ab4a808ab2db4ba6d205",
"assets/assets/images/landingpage.png": "a3307383dcad5b1364e6dd54a64781de",
"assets/assets/images/How-to-invest-in-share-market.jpg": "36e87eae8b173fffcd784bb0d92eb988",
"assets/assets/images/teslajpg.jpg": "77d73aa98ff1febd75d0c17250d6a9eb",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/trader.jpg": "72435ae0109d16bcd41333220e3ebff7",
"assets/assets/images/background.jpg": "fb42a80de877e26990e08387e286ec0c",
"assets/assets/images/landinganim.gif": "96d488e91fbc0828460f717a2a65973b",
"assets/assets/images/etf.jpg": "5fc434686f4af10c5c3b19b64b831e5b",
"assets/assets/images/fxcar.jpg": "72ce73ae9fcd8d4d1c0627e9f2d091a5",
"assets/assets/images/Dogecoin_logo.jpg": "52adeefa61b9430ac9101a4f9fd4f884",
"assets/assets/images/trader_large.png": "e8c2c735598158b21c4c6649244009a6",
"assets/assets/images/pfizer.png": "f4da2e1445da027c70caa7e7ea046f8d",
"assets/assets/images/creditsuisse.png": "be38314ea508d5e9f57d5f45b98535dc",
"assets/assets/images/fx.png": "33afdf790b1935813f39dd4c7ddf39ba",
"assets/assets/images/lottielib.json": "3711fa04389e563771c59b26df4e76ac",
"assets/assets/images/bondscar.jpeg": "6a71cc03f0766538940e9287aa498f39",
"assets/assets/images/landinganim.mp4": "986978aa3c9f0b52ed3238ba94ced287",
"assets/assets/images/indexes.png": "165081806df20ea6b6452bf453af7509",
"assets/assets/images/stockscar.jpg": "b8a8766081baa4eb5aaa7bafeb5b69f5",
"assets/assets/images/lottie.json": "3ab5aa7419274ed465c58d172759dbcf",
"assets/assets/images/Euronext_logo.png": "822c70497d97aa2bfe715dc5e27b55e7",
"assets/assets/images/euronaze.png": "1f4aed9fdedb43db82a0a2aab222e32b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
