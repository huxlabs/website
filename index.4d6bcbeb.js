// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : {};
    /* eslint-enable no-undef */
  
    // Save the require from previous bundle to this closure if any
    var previousRequire =
      typeof globalObject[parcelRequireName] === 'function' &&
      globalObject[parcelRequireName];
  
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire =
      typeof module !== 'undefined' &&
      typeof module.require === 'function' &&
      module.require.bind(module);
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire =
            typeof globalObject[parcelRequireName] === 'function' &&
            globalObject[parcelRequireName];
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error("Cannot find module '" + name + "'");
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = (cache[name] = new newRequire.Module(name));
  
        modules[name][0].call(
          module.exports,
          localRequire,
          module,
          module.exports,
          this
        );
      }
  
      return cache[name].exports;
  
      function localRequire(x) {
        var res = localRequire.resolve(x);
        return res === false ? {} : newRequire(res);
      }
  
      function resolve(x) {
        var id = modules[name][1][x];
        return id != null ? id : x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [
        function (require, module) {
          module.exports = exports;
        },
        {},
      ];
    };
  
    Object.defineProperty(newRequire, 'root', {
      get: function () {
        return globalObject[parcelRequireName];
      },
    });
  
    globalObject[parcelRequireName] = newRequire;
  
    for (var i = 0; i < entry.length; i++) {
      newRequire(entry[i]);
    }
  
    if (mainEntry) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(mainEntry);
  
      // CommonJS
      if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = mainExports;
  
        // RequireJS
      } else if (typeof define === 'function' && define.amd) {
        define(function () {
          return mainExports;
        });
  
        // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  })({"e11Rl":[function(require,module,exports) {
  var global = arguments[3];
  var HMR_HOST = null;
  var HMR_PORT = null;
  var HMR_SECURE = false;
  var HMR_ENV_HASH = "d6ea1d42532a7575";
  module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
  "use strict";
  /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
  import type {
    HMRAsset,
    HMRMessage,
  } from '@parcel/reporter-dev-server/src/HMRServer.js';
  interface ParcelRequire {
    (string): mixed;
    cache: {|[string]: ParcelModule|};
    hotData: {|[string]: mixed|};
    Module: any;
    parent: ?ParcelRequire;
    isParcelRequire: true;
    modules: {|[string]: [Function, {|[string]: string|}]|};
    HMR_BUNDLE_ID: string;
    root: ParcelRequire;
  }
  interface ParcelModule {
    hot: {|
      data: mixed,
      accept(cb: (Function) => void): void,
      dispose(cb: (mixed) => void): void,
      // accept(deps: Array<string> | string, cb: (Function) => void): void,
      // decline(): void,
      _acceptCallbacks: Array<(Function) => void>,
      _disposeCallbacks: Array<(mixed) => void>,
    |};
  }
  interface ExtensionContext {
    runtime: {|
      reload(): void,
      getURL(url: string): string;
      getManifest(): {manifest_version: number, ...};
    |};
  }
  declare var module: {bundle: ParcelRequire, ...};
  declare var HMR_HOST: string;
  declare var HMR_PORT: string;
  declare var HMR_ENV_HASH: string;
  declare var HMR_SECURE: boolean;
  declare var chrome: ExtensionContext;
  declare var browser: ExtensionContext;
  declare var __parcel__import__: (string) => Promise<void>;
  declare var __parcel__importScripts__: (string) => Promise<void>;
  declare var globalThis: typeof self;
  declare var ServiceWorkerGlobalScope: Object;
  */ var OVERLAY_ID = "__parcel__error__overlay__";
  var OldModule = module.bundle.Module;
  function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
          data: module.bundle.hotData[moduleName],
          _acceptCallbacks: [],
          _disposeCallbacks: [],
          accept: function(fn) {
              this._acceptCallbacks.push(fn || function() {});
          },
          dispose: function(fn) {
              this._disposeCallbacks.push(fn);
          }
      };
      module.bundle.hotData[moduleName] = undefined;
  }
  module.bundle.Module = Module;
  module.bundle.hotData = {};
  var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
  function getHostname() {
      return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
  }
  function getPort() {
      return HMR_PORT || location.port;
  } // eslint-disable-next-line no-redeclare
  var parent = module.bundle.parent;
  if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
      var hostname = getHostname();
      var port = getPort();
      var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
      var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
      var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
      // eval may also be disabled via CSP, so do a quick check.
      var supportsSourceURL = false;
      try {
          (0, eval)('throw new Error("test"); //# sourceURL=test.js');
      } catch (err) {
          supportsSourceURL = err.stack.includes("test.js");
      } // $FlowFixMe
      ws.onmessage = async function(event) {
          checkedAssets = {} /*: {|[string]: boolean|} */ ;
          assetsToAccept = [];
          assetsToDispose = [];
          var data = JSON.parse(event.data);
          if (data.type === "update") {
              // Remove error overlay if there is one
              if (typeof document !== "undefined") removeErrorOverlay();
              let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
              let handled = assets.every((asset)=>{
                  return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
              });
              if (handled) {
                  console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                  if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                  await hmrApplyUpdates(assets); // Dispose all old assets.
                  let processedAssets = {} /*: {|[string]: boolean|} */ ;
                  for(let i = 0; i < assetsToDispose.length; i++){
                      let id = assetsToDispose[i][1];
                      if (!processedAssets[id]) {
                          hmrDispose(assetsToDispose[i][0], id);
                          processedAssets[id] = true;
                      }
                  } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                  processedAssets = {};
                  for(let i = 0; i < assetsToAccept.length; i++){
                      let id = assetsToAccept[i][1];
                      if (!processedAssets[id]) {
                          hmrAccept(assetsToAccept[i][0], id);
                          processedAssets[id] = true;
                      }
                  }
              } else fullReload();
          }
          if (data.type === "error") {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi){
                  let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                  console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
              }
              if (typeof document !== "undefined") {
                  // Render the fancy html overlay
                  removeErrorOverlay();
                  var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                  document.body.appendChild(overlay);
              }
          }
      };
      ws.onerror = function(e) {
          console.error(e.message);
      };
      ws.onclose = function() {
          console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
      };
  }
  function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
          overlay.remove();
          console.log("[parcel] ✨ Error resolved");
      }
  }
  function createErrorOverlay(diagnostics) {
      var overlay = document.createElement("div");
      overlay.id = OVERLAY_ID;
      let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
      for (let diagnostic of diagnostics){
          let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
              return `${p}
  <a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
  ${frame.code}`;
          }, "") : diagnostic.stack;
          errorHTML += `
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
            🚨 ${diagnostic.message}
          </div>
          <pre>${stack}</pre>
          <div>
            ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
          </div>
          ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
        </div>
      `;
      }
      errorHTML += "</div>";
      overlay.innerHTML = errorHTML;
      return overlay;
  }
  function fullReload() {
      if ("reload" in location) location.reload();
      else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
  }
  function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
      var modules = bundle.modules;
      if (!modules) return [];
      var parents = [];
      var k, d, dep;
      for(k in modules)for(d in modules[k][1]){
          dep = modules[k][1][d];
          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
              bundle,
              k
          ]);
      }
      if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
      return parents;
  }
  function updateLink(link) {
      var newLink = link.cloneNode();
      newLink.onload = function() {
          if (link.parentNode !== null) // $FlowFixMe
          link.parentNode.removeChild(link);
      };
      newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
      link.parentNode.insertBefore(newLink, link.nextSibling);
  }
  var cssTimeout = null;
  function reloadCSS() {
      if (cssTimeout) return;
      cssTimeout = setTimeout(function() {
          var links = document.querySelectorAll('link[rel="stylesheet"]');
          for(var i = 0; i < links.length; i++){
              // $FlowFixMe[incompatible-type]
              var href = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
              var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
          }
          cssTimeout = null;
      }, 50);
  }
  function hmrDownload(asset) {
      if (asset.type === "js") {
          if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject)=>{
                  var _document$head;
                  script.onload = ()=>resolve(script);
                  script.onerror = reject;
                  (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
              });
          } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
              else return new Promise((resolve, reject)=>{
                  try {
                      importScripts(asset.url + "?t=" + Date.now());
                      resolve();
                  } catch (err) {
                      reject(err);
                  }
              });
          }
      }
  }
  async function hmrApplyUpdates(assets) {
      global.parcelHotUpdate = Object.create(null);
      let scriptsToRemove;
      try {
          // If sourceURL comments aren't supported in eval, we need to load
          // the update from the dev server over HTTP so that stack traces
          // are correct in errors/logs. This is much slower than eval, so
          // we only do it if needed (currently just Safari).
          // https://bugs.webkit.org/show_bug.cgi?id=137297
          // This path is also taken if a CSP disallows eval.
          if (!supportsSourceURL) {
              let promises = assets.map((asset)=>{
                  var _hmrDownload;
                  return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                      // Web extension bugfix for Chromium
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                      if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                          if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                              extCtx.runtime.reload();
                              return;
                          }
                          asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                          return hmrDownload(asset);
                      }
                      throw err;
                  });
              });
              scriptsToRemove = await Promise.all(promises);
          }
          assets.forEach(function(asset) {
              hmrApply(module.bundle.root, asset);
          });
      } finally{
          delete global.parcelHotUpdate;
          if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
              if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
              }
          });
      }
  }
  function hmrApply(bundle, asset) {
      var modules = bundle.modules;
      if (!modules) return;
      if (asset.type === "css") reloadCSS();
      else if (asset.type === "js") {
          let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
          if (deps) {
              if (modules[asset.id]) {
                  // Remove dependencies that are removed and will become orphaned.
                  // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                  let oldDeps = modules[asset.id][1];
                  for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                      let id = oldDeps[dep];
                      let parents = getParents(module.bundle.root, id);
                      if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
              // support for source maps is better with eval.
              (0, eval)(asset.output);
               // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [
                  fn,
                  deps
              ];
          } else if (bundle.parent) hmrApply(bundle.parent, asset);
      }
  }
  function hmrDelete(bundle, id) {
      let modules = bundle.modules;
      if (!modules) return;
      if (modules[id]) {
          // Collect dependencies that will become orphaned when this module is deleted.
          let deps = modules[id][1];
          let orphans = [];
          for(let dep in deps){
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
          } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
          delete modules[id];
          delete bundle.cache[id]; // Now delete the orphans.
          orphans.forEach((id)=>{
              hmrDelete(module.bundle.root, id);
          });
      } else if (bundle.parent) hmrDelete(bundle.parent, id);
  }
  function hmrAcceptCheck(bundle, id, depsByBundle) {
      if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
       // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
      let parents = getParents(module.bundle.root, id);
      let accepted = false;
      while(parents.length > 0){
          let v = parents.shift();
          let a = hmrAcceptCheckOne(v[0], v[1], null);
          if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
          accepted = true;
          else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                  // If there are no parents, then we've reached an entry without accepting. Reload.
                  accepted = false;
                  break;
              }
              parents.push(...p);
          }
      }
      return accepted;
  }
  function hmrAcceptCheckOne(bundle, id, depsByBundle) {
      var modules = bundle.modules;
      if (!modules) return;
      if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
          // If we reached the root bundle without finding where the asset should go,
          // there's nothing to do. Mark as "accepted" so we don't reload the page.
          if (!bundle.parent) return true;
          return hmrAcceptCheck(bundle.parent, id, depsByBundle);
      }
      if (checkedAssets[id]) return true;
      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToDispose.push([
          bundle,
          id
      ]);
      if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
          assetsToAccept.push([
              bundle,
              id
          ]);
          return true;
      }
  }
  function hmrDispose(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData[id] = {};
      if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
      if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
          cb(bundle.hotData[id]);
      });
      delete bundle.cache[id];
  }
  function hmrAccept(bundle, id) {
      // Execute the module.
      bundle(id); // Run the accept callbacks in the new version of the module.
      var cached = bundle.cache[id];
      if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
          var assetsToAlsoAccept = cb(function() {
              return getParents(module.bundle.root, id);
          });
          if (assetsToAlsoAccept && assetsToAccept.length) {
              assetsToAlsoAccept.forEach(function(a) {
                  hmrDispose(a[0], a[1]);
              }); // $FlowFixMe[method-unbinding]
              assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
          }
      });
  }
  
  },{}],"gLLPy":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  var _mainScss = require("./assets/styles/main.scss");
  var _router = require("./router/router");
  var _routerDefault = parcelHelpers.interopDefault(_router);
  var _handleLoaderServiceJs = require("./services/handleLoader.service.js");
  var _handleLoaderServiceJsDefault = parcelHelpers.interopDefault(_handleLoaderServiceJs);
  var _renderHeaderServiceJs = require("./services/renderHeader.service.js");
  var _renderHeaderServiceJsDefault = parcelHelpers.interopDefault(_renderHeaderServiceJs);
  var _renderNavServiceJs = require("./services/renderNav.service.js");
  var _renderNavServiceJsDefault = parcelHelpers.interopDefault(_renderNavServiceJs);
  const createApp = async ()=>{
      await Promise.all([
          (0, _handleLoaderServiceJsDefault.default)(),
          (0, _renderHeaderServiceJsDefault.default)(),
          (0, _renderNavServiceJsDefault.default)()
      ]);
      await (0, _routerDefault.default)();
  };
  document.addEventListener("DOMContentLoaded", createApp);
  
  },{"./assets/styles/main.scss":"lonhQ","./router/router":"bo5Yw","./services/handleLoader.service.js":"6ukNc","./services/renderHeader.service.js":"gGg8E","./services/renderNav.service.js":"eDHxI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lonhQ":[function() {},{}],"bo5Yw":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  var _loadViewServiceJs = require("../services/loadView.service.js");
  var _loadViewServiceJsDefault = parcelHelpers.interopDefault(_loadViewServiceJs);
  var _toggleMenuServiceJs = require("../services/toggleMenu.service.js");
  var _toggleMenuServiceJsDefault = parcelHelpers.interopDefault(_toggleMenuServiceJs);
  var _animateServiceJs = require("../services/animate.service.js");
  var _animateServiceJsDefault = parcelHelpers.interopDefault(_animateServiceJs);
  function createRouter() {
      // Load the initiatl view based on current URL
      (0, _loadViewServiceJsDefault.default)();
      // Listen for changes to the URL
      handlePopstate();
      // Listen for link clicks
      handleLinkClick();
  }
  exports.default = createRouter;
  function handleLinkClick() {
      // Add a click event listener to the document
      document.addEventListener("click", (event)=>{
          // Get the clicked element
          const { target  } = event;
          if (target.innerText === "Huxley") {
              event.preventDefault();
              if (window.location.pathname !== "/") {
                  const desiredRoute = "/";
                  // Push the new route to the history API
                  history.pushState(null, "", desiredRoute);
                  // Animate the page transition
                  (0, _animateServiceJsDefault.default)("out");
                  // Load the new view after a delay
                  setTimeout(()=>{
                      (0, _loadViewServiceJsDefault.default)();
                  }, 1000);
              }
          }
          // Check if the clicked element is a link
          if (target.tagName === "A" && target.pathname.startsWith("/")) {
              event.preventDefault();
              // Get the desired and current routes
              const desiredRoute = target.pathname;
              const currentRoute = window.location.pathname;
              if (desiredRoute !== currentRoute) {
                  // Push the new route to the history API
                  history.pushState(null, "", desiredRoute);
                  // Close the menu
                  (0, _toggleMenuServiceJsDefault.default)();
                  // Animate the page transition
                  (0, _animateServiceJsDefault.default)("out");
                  // Load the new view after a delay
                  setTimeout(()=>{
                      (0, _loadViewServiceJsDefault.default)();
                  }, 1000);
              } else // Close the menu if the desired route is the same as the current route
              (0, _toggleMenuServiceJsDefault.default)();
          }
      });
  }
  function handlePopstate() {
      // Add a popstate event listener to the window
      window.addEventListener("popstate", ()=>{
          // Animate the page transition
          (0, _animateServiceJsDefault.default)("out");
          // Load the new view after a delay
          setTimeout(()=>{
              (0, _loadViewServiceJsDefault.default)();
          }, 1000);
      });
  }
  
  },{"../services/loadView.service.js":"kQFL7","../services/toggleMenu.service.js":"6oUqJ","../services/animate.service.js":"kbzyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQFL7":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  var _itemJs = require("../components/item.js");
  var _itemJsDefault = parcelHelpers.interopDefault(_itemJs);
  var _investmentJs = require("../components/investment.js");
  var _investmentJsDefault = parcelHelpers.interopDefault(_investmentJs);
  var _domainJs = require("../components/domain.js");
  var _domainJsDefault = parcelHelpers.interopDefault(_domainJs);
  // Views
  var _homeJs = require("../views/home.js");
  var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
  var _entrepreneurJs = require("../views/entrepreneur.js");
  var _entrepreneurJsDefault = parcelHelpers.interopDefault(_entrepreneurJs);
  var _investorJs = require("../views/investor.js");
  var _investorJsDefault = parcelHelpers.interopDefault(_investorJs);
  var _developerJs = require("../views/developer.js");
  var _developerJsDefault = parcelHelpers.interopDefault(_developerJs);
  var _connectJs = require("../views/connect.js");
  var _connectJsDefault = parcelHelpers.interopDefault(_connectJs);
  var _lostJs = require("../views/lost.js");
  var _lostJsDefault = parcelHelpers.interopDefault(_lostJs);
  // Services
  var _renderPageServiceJs = require("./renderPage.service.js");
  var _renderPageServiceJsDefault = parcelHelpers.interopDefault(_renderPageServiceJs);
  var _animateServiceJs = require("./animate.service.js");
  var _animateServiceJsDefault = parcelHelpers.interopDefault(_animateServiceJs);
  var _handleSubmitServiceJs = require("./handleSubmit.service.js");
  var _handleSubmitServiceJsDefault = parcelHelpers.interopDefault(_handleSubmitServiceJs);
  async function loadView() {
      const route = window.location.pathname;
      const container = document.querySelector("main");
      switch(route){
          case "/":
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "hero",
                  view: (0, _homeJsDefault.default)
              });
              break;
          case "/entrepreneur":
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "standard",
                  view: (0, _entrepreneurJsDefault.default)
              });
              (0, _entrepreneurJsDefault.default).ideas.forEach((idea)=>{
                  document.querySelector("#ideas").appendChild((0, _itemJsDefault.default)(idea));
              });
              break;
          case "/investor":
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "standard",
                  view: (0, _investorJsDefault.default)
              });
              break;
          case "/developer":
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "standard",
                  view: (0, _developerJsDefault.default)
              });
              (0, _developerJsDefault.default).domainNames.forEach((domain)=>{
                  document.querySelector("#domains").appendChild((0, _domainJsDefault.default)(domain));
              });
              break;
          case "/connect":
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "connect",
                  view: (0, _connectJsDefault.default)
              });
              const form = document.getElementById("my-form");
              if (form) {
                  console.log("yes");
                  form.addEventListener("submit", (0, _handleSubmitServiceJsDefault.default));
              }
              break;
          default:
              container.innerHTML = await (0, _renderPageServiceJsDefault.default)({
                  layout: "lost",
                  view: (0, _lostJsDefault.default)
              });
              break;
      }
      (0, _animateServiceJsDefault.default)("in");
  }
  exports.default = loadView;
  
  },{"../components/item.js":"klNFr","../components/investment.js":"5Si6N","../components/domain.js":"9gvRR","../views/home.js":"gpxkq","../views/entrepreneur.js":"4Yuze","../views/investor.js":"6wZbx","../views/developer.js":"bxoRh","../views/connect.js":"bWypU","../views/lost.js":"fQ1P4","./renderPage.service.js":"bAEz1","./animate.service.js":"kbzyp","./handleSubmit.service.js":"94VpK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"klNFr":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Item = (item)=>{
      const template = document.createElement("template");
      template.innerHTML = `
      <li class='list-item'>
        <span class='bullet'>/ </span>
        ${item}
      </li>
    `;
      return template.content.cloneNode(true);
  };
  exports.default = Item;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
  exports.interopDefault = function(a) {
      return a && a.__esModule ? a : {
          default: a
      };
  };
  exports.defineInteropFlag = function(a) {
      Object.defineProperty(a, "__esModule", {
          value: true
      });
  };
  exports.exportAll = function(source, dest) {
      Object.keys(source).forEach(function(key) {
          if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
          Object.defineProperty(dest, key, {
              enumerable: true,
              get: function() {
                  return source[key];
              }
          });
      });
      return dest;
  };
  exports.export = function(dest, destName, get) {
      Object.defineProperty(dest, destName, {
          enumerable: true,
          get: get
      });
  };
  
  },{}],"5Si6N":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Investment = (name, link)=>{
      const template = document.createElement("template");
      template.innerHTML = `
      <li class='list-item'>
        <a href=${link} target='_blank'>
          ${name}
        </a>
      </li>
    `;
      return template.content.cloneNode(true);
  };
  exports.default = Investment;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9gvRR":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Domain = (domain)=>{
      const template = document.createElement("template");
      template.innerHTML = `
      <li class='list-item'>
        ${domain}
      </li>
    `;
      return template.content.cloneNode(true);
  };
  exports.default = Domain;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpxkq":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const home = {
      title: "Make epic sh<span class='accent'>*</span>t.",
      description: "I'm Chris Huxley, a software developer, investor, and entrepreneur based around the world."
  };
  exports.default = home;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Yuze":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const entrepreneur = {
      title: "Entrepreneur",
      description: "en<span>&#183;</span>tre<span>&#183;</span>pre<span>&#183;</span>neur, <span>noun</span> : a person in the pursuit of opportunity at the expense of an average life.",
      content: "As an entrepreneur, I spend my time dreaming, planning, building, and launching my own ideas through Huxley Studios, my personal venture studio. To help bring these ideas to life, I'm always seeking to collaborate with amazing people.",
      subtitle: "Collaboration Opportunities",
      subcontent: "If any of the collaboration opportunities below are of interest, let's connect.",
      selector: "ideas",
      ideas: [
          "Illustrating a children's book",
          "Designing podcast cover art",
          "Creating animations",
          "Co-founding a new type of design studio",
          "Innovating a particular automotive operation",
          "Innovating the hiring process",
          "Fundraising for the culinary arts",
          "Co-hosting a podcast",
          "Launching a new type of puzzle company"
      ]
  };
  exports.default = entrepreneur;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wZbx":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const investor = {
      title: "Investor",
      description: "in<span>&#183;</span>ves<span>&#183;</span>tor, <span>noun</span> : a person who deploys their capital to help others pursue their dreams.",
      content: "Being an investor has a lot of rewards.",
      subtitle: "My Portfolio",
      subcontent: "Coming soon."
  };
  exports.default = investor;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxoRh":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const developer = {
      title: "Developer",
      description: "de<span>&#183;</span>vel<span>&#183;</span>op<span>&#183;</span>er, <span>noun</span> : a person who arranges 1s and 0s in a particular way that creates value in the world.",
      content: "It's not about what you make. It's about what you make happen. There's something so beautiful about bringing an idea to life. What was once a distant thought, a voice in your head, is now tangible. It's a gamechanging product, an innovative technology, or a ledgendary movement.",
      subtitle: "Domain Names",
      subcontent: "Below is a curated list of domains I own. If any of them inspire an idea, let's connect.",
      selector: "domains",
      domainNames: [
          "campuscreatives.com",
          "riddlemethat.org",
          "netwerking.co",
          "something2believe.in",
          "somethingtobelieve.in",
          "toldby.us",
          "undergroundstudios.org",
          "valorpublishing.com"
      ]
  };
  exports.default = developer;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWypU":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const connect = {
      title: "Connect",
      description: "con<span>&#183;</span>nect, <span>verb</span> : something we all fail to do enough.",
      content: "If you made it this far, you might as well reach out. Even if it's just to say hello."
  };
  exports.default = connect;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fQ1P4":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const lost = {
      title: "You seem to have lost your way.",
      description: "Select the menu to get back on track."
  };
  exports.default = lost;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAEz1":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  function renderPage({ layout , view  }) {
      switch(layout){
          case "hero":
              return templateOne(view);
          case "standard":
              return templateTwo(view);
          case "connect":
              return templateThree(view);
          default:
              return templateFour(view);
      }
  }
  exports.default = renderPage;
  // HERO
  let templateOne = (view)=>`
    <section class='home'>
      <h2 class='title'>${view.title}</h2>
      <p class='description'>${view.description}</p>
    </section>
  `;
  // MAIN
  let templateTwo = (view)=>`
    <section>
      <h2 class='title'>${view.title}</h2>
      <p class='description'>${view.description}</p>
      <hr>
      <p class='content'>${view.content}</p>
      <h3 class='subtitle'>${view.subtitle}</h3>
      <p class='subcontent'>${view.subcontent}</p>
      <ul id='${view.selector}' class='${view.selector}'></ul>
    </section>
  `;
  // CONNECT
  let templateThree = (view)=>`
    <section>
      <h2 class='title'>${view.title}</h2>
      <p class='description'>${view.description}</p>
      <hr>
      <p class='content'>${view.content}</p>
      <form id='contact-form'>
        <input type="text" name="_honey" style="display:none">
        <input type="text" name="name" id="name" placeholder="Name" required>
        <input type="email" name="email" id="email" placeholder="Email" required>
        <textarea name="message" id="message" rows="5" placeholder="Message" required></textarea>
        <button type="submit">Send Good Vibes</button>
  
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_template" value="box">
      </form>
    </section>
  `;
  // LOST
  let templateFour = (view)=>`
    <section>
      <h2 class='title'>${view.title}</h2>
      <p class='description'>${view.description}</p>
    </section>
  `;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbzyp":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  function animate(type) {
      let name = document.getElementById("name");
      let menuIcon = document.getElementById("menu");
      let title = document.querySelector(".title");
      let subtitle = document.querySelector(".subtitle");
      let description = document.querySelector(".description");
      let content = document.querySelector(".content");
      let subcontent = document.querySelector(".subcontent");
      let listItems = document.querySelectorAll(".list-item");
      let line = document.querySelector("hr");
      if (type === "in") {
          setTimeout(()=>{
              title.classList.toggle("fade");
          }, 100);
          setTimeout(()=>{
              description.classList.toggle("fade");
              if (line) line.classList.toggle("fade");
              if (content) content.classList.toggle("fade");
          }, 500);
          if (subtitle && subcontent) setTimeout(()=>{
              subtitle.classList.toggle("fade");
              subcontent.classList.toggle("fade");
          }, 1000);
          // also on each investment and adds margin bottom
          if (listItems) listItems.forEach((item, index)=>{
              setTimeout(()=>{
                  item.classList.toggle("fade");
              }, index * 200 + 1100);
          });
      }
      if (type === "out") {
          if (listItems) listItems.forEach((item, index)=>{
              setTimeout(()=>{
                  item.classList.toggle("fade");
              }, index * 100 + 100);
          });
          if (subtitle && subcontent) setTimeout(()=>{
              subtitle.classList.toggle("fade");
              subcontent.classList.toggle("fade");
          }, 100);
          setTimeout(()=>{
              if (content) content.classList.toggle("fade");
          }, 150);
          setTimeout(()=>{
              if (line) line.classList.toggle("fade");
              description.classList.toggle("fade");
          }, 200);
          setTimeout(()=>{
              title.classList.toggle("fade");
          }, 250);
      }
      setTimeout(()=>{
          name.classList.toggle("loaded");
          menuIcon.classList.toggle("loaded");
      }, 700);
  }
  exports.default = animate;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94VpK":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const FORMSUBMIT_URL = "https://formsubmit.co/ajax/";
  const EMAIL_STRING = "89e3ae8b5fd621573d8159600f104a09";
  const URL = `${FORMSUBMIT_URL}${EMAIL_STRING}`;
  const SUCCESS_MESSAGE = "Thank you for submitting the form!";
  async function handleSubmit(event) {
      // Prevent page reload
      event.preventDefault();
      // Add button loading state
      toggleButtonLoading(true);
      // Get form
      const form = document.getElementById("contact-form");
      try {
          // Send message
          await sendMessage(form);
          // Clear text in form inputs
          clearForm(form);
          // Display success message below form
          displaySuccessMessage(form);
      } catch (error) {
          // Log any errors to the console
          console.log(error);
      } finally{
          // Remove button loading state
          toggleButtonLoading(false);
      }
  }
  exports.default = handleSubmit;
  async function sendMessage(form) {
      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const message = form.querySelector("#message").value;
      return await fetch(URL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              name: name,
              email: email,
              message: message
          })
      });
  }
  function toggleButtonLoading(isLoading) {
      const button = document.querySelector('button[type="submit"]');
      if (isLoading) {
          button.classList.add("is-loading");
          button.disabled = true;
      } else {
          button.classList.remove("is-loading");
          button.disabled = false;
      }
  }
  function clearForm(form) {
      form.reset();
  }
  function displaySuccessMessage(form) {
      const message = document.createElement("p");
      message.textContent = SUCCESS_MESSAGE;
      form.appendChild(message);
  }
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oUqJ":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  function toggleMenu() {
      // Get the menu icon and navigation elements
      const menu = document.getElementById("menu");
      const nav = document.getElementById("nav");
      const links = document.querySelectorAll(".link");
      // Toggle the 'active' class on the menu icon and navigation elements
      menu.classList.toggle("active");
      nav.classList.toggle("active");
      // Loop through each navigation link and toggle the 'active' class with a staggered delay
      links.forEach((link, index)=>{
          setTimeout(()=>{
              link.classList.toggle("active");
          }, index * 200 + 500);
      });
  }
  exports.default = toggleMenu;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ukNc":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  var _theLoaderJs = require("../components/TheLoader.js");
  var _theLoaderJsDefault = parcelHelpers.interopDefault(_theLoaderJs);
  async function handleLoader() {
      addLoader();
      await removeLoader();
  }
  exports.default = handleLoader;
  function addLoader() {
      document.querySelector("main").innerHTML = (0, _theLoaderJsDefault.default)();
  }
  async function removeLoader() {
      const loader = document.querySelector("#loader");
      const progress = document.querySelector("#progress");
      await new Promise((resolve)=>{
          progress.addEventListener("animationend", ()=>{
              loader.style.opacity = "0";
          });
          loader.addEventListener("transitionend", ()=>{
              loader.remove();
              resolve();
          });
      });
  } // import Loader from '../components/loader.js'
   // export default function handleLoader() {
   //   document.querySelector('main').innerHTML = Loader();
   //   const loader = document.querySelector('#loader');
   //   const progress = document.querySelector('#progress');
   //   return new Promise((resolve) => {
   //     progress.addEventListener('animationend', () => {
   //       loader.style.opacity = '0';
   //     });
   //     loader.addEventListener('transitionend', () => {
   //       loader.remove();
   //       resolve();
   //     });
   //   });
   // };
  
  },{"../components/TheLoader.js":"fJKvt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJKvt":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Loader = ()=>`
    <div id='loader' class='loader'>
      <div class='loading-bar'>
        <div class='loading-progress' id='progress'></div>
      </div>
    </div>
  `;
  exports.default = Loader;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGg8E":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  var _theHeaderJs = require("../components/TheHeader.js");
  var _theHeaderJsDefault = parcelHelpers.interopDefault(_theHeaderJs);
  var _toggleMenuServiceJs = require("./toggleMenu.service.js");
  var _toggleMenuServiceJsDefault = parcelHelpers.interopDefault(_toggleMenuServiceJs);
  function renderHeader() {
      // Create custom header element
      createHeaderElement();
      // Add click event to menu icon
      attachMenuEvent();
      // Indicate that the function has finished executing
      return undefined;
  }
  exports.default = renderHeader;
  function createHeaderElement() {
      // Create header class
      class TheHeader extends HTMLElement {
          constructor(){
              super();
              this.innerHTML = (0, _theHeaderJsDefault.default)();
          }
      }
      // Create custom header element
      customElements.define("the-header", TheHeader);
  }
  function attachMenuEvent() {
      // Get the menu element from the DOM
      const menu = document.getElementById("menu");
      // Add an event listener to the menu element that calls toggleMenu when clicked
      menu.addEventListener("click", (0, _toggleMenuServiceJsDefault.default));
  } // export default function renderHeader() {
   //    // Get the header element from the DOM
   //   const header = document.getElementById('header');
   //   // Add the header HTML to the header element
   //   header.innerHTML = Header();
   //   // Get the menu element from the DOM
   //   const menu = document.getElementById('menu');
   //   // Add an event listener to the menu element that calls toggleMenu when clicked
   //   menu.addEventListener('click', toggleMenu);
   //   // Indicate that the function has finished executing
   //   return undefined;
   // }
  
  },{"../components/TheHeader.js":"3Cyq4","./toggleMenu.service.js":"6oUqJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Cyq4":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Header = ()=>`
    <header class='header'>
      <a href='/'>
        <h1 id='name'>Huxley</h1>
      </a>
      <div class='menu' id='menu'>
        <span class='line'></span>
        <span class='line'></span>
        <span class='line'></span>
      </div>
    </header>
  `;
  exports.default = Header;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDHxI":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  var _theNavJs = require("../components/TheNav.js");
  var _theNavJsDefault = parcelHelpers.interopDefault(_theNavJs);
  function renderNav() {
      // Create nav class
      class TheNav extends HTMLElement {
          constructor(){
              super();
              this.innerHTML = (0, _theNavJsDefault.default)();
          }
      }
      // Create custom nav element
      customElements.define("the-nav", TheNav);
      // Indicate that the function has finished executing
      return undefined;
  } // export default function renderNav() {
   //   // Get the nav element from the DOM
   //   const nav = document.getElementById('nav');
   //   // Add the navigation HTML to the nav element
   //   nav.innerHTML = Nav();
   //   // Indicate that the function has finished executing
   //   return undefined;
   // };
  exports.default = renderNav;
  
  },{"../components/TheNav.js":"arHz3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"arHz3":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);
  const Nav = ()=>`
    <nav id='nav'>
      <ul>
        <li class="link">
          <a href='/entrepreneur'>Entrepreneur</a>
        </li>
        <li class="link">
          <a href='/investor'>Investor</a>
        </li>
        <li class="link">
          <a href='/developer'>Developer</a>
        </li>
        <li class="link">
          <a href='/connect'>Connect</a>
        </li>
      </ul>
    </nav>
  `;
  exports.default = Nav;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["e11Rl","gLLPy"], "gLLPy", "parcelRequire9f42")
  
  //# sourceMappingURL=index.4d6bcbeb.js.map
  