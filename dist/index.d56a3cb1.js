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
})({"3KXv7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "b5b6c481d56a3cb1";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5HwUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Styles
var _mainScss = require("./style/main.scss");
// Scripts
var _initiateJs = require("./scripts/initiate.js");
var _initiateJsDefault = parcelHelpers.interopDefault(_initiateJs);
const app = ()=>{
    _initiateJsDefault.default.init();
};
app();

},{"./style/main.scss":"6tjlZ","./scripts/initiate.js":"baY8S","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6tjlZ":[function() {},{}],"baY8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Components
var _loaderJs = require("../components/loader.js");
var _loaderJsDefault = parcelHelpers.interopDefault(_loaderJs);
var _headerJs = require("../components/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _navJs = require("../components/nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
// Scripts
var _routerJs = require("./router.js");
var _animationsJs = require("./animations.js");
var _menuJs = require("./menu.js");
const initiateApp = {
    init: async function() {
        await initiateLoader();
        await initiateMenu();
        initiateNav();
    }
};
const initiateLoader = async ()=>{
    document.querySelector('main').innerHTML = await _loaderJsDefault.default();
    let loader = document.querySelector('#loader');
    let progress = document.querySelector('#progress');
    progress.addEventListener('animationend', ()=>{
        loader.style.opacity = '0';
    });
    loader.addEventListener('transitionend', async ()=>{
        await loader.remove();
        _routerJs.loadView();
    });
};
const initiateMenu = async ()=>{
    document.getElementById('header').innerHTML = await _headerJsDefault.default();
    document.getElementById('menu').addEventListener('click', _menuJs.toggleMenu);
};
const initiateNav = async ()=>{
    document.getElementById('nav').innerHTML = await _navJsDefault.default();
    let links = document.querySelectorAll('a');
    links.forEach((link)=>{
        link.addEventListener('click', (e)=>{
            let desiredRoute = link.getAttribute('href');
            let currentRoute = window.location.pathname;
            e.preventDefault();
            if (desiredRoute !== currentRoute) {
                history.pushState(null, '', `${desiredRoute}`);
                _menuJs.toggleMenu();
                _animationsJs.animate('out');
                setTimeout(()=>{
                    _routerJs.loadView();
                }, 1000);
            } else _menuJs.toggleMenu();
        });
    });
    // Handle back and forward navigation
    window.onpopstate = ()=>{
        _animationsJs.animate('out');
        setTimeout(()=>{
            _routerJs.loadView();
        }, 1000);
    };
};
exports.default = initiateApp;

},{"../components/loader.js":"9sMSq","../components/header.js":"cQglc","../components/nav.js":"5KBRd","./router.js":"9l80V","./animations.js":"6S3X3","./menu.js":"fzcL3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9sMSq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = ()=>`
  <div id='loader' class='loader'>
    <div class='loading-bar'>
      <div class='loading-progress' id='progress'></div>
    </div>
  </div>
`
;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"cQglc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = ()=>`
  <h1 id='name'>Huxley</h1>
  <div class='menu' id='menu'>
    <span class='line'></span>
    <span class='line'></span>
    <span class='line'></span>
  </div>
`
;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5KBRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = ()=>`
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
`
;
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9l80V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadView", ()=>loadView
);
var _viewsJs = require("./views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
var _animationsJs = require("./animations.js");
var _pageJs = require("./page.js");
var _pageJsDefault = parcelHelpers.interopDefault(_pageJs);
async function loadView() {
    const route = window.location.pathname;
    const container = document.querySelector('main');
    switch(route){
        case '/':
            container.innerHTML = await _pageJsDefault.default({
                layout: 'hero',
                view: _viewsJsDefault.default.home
            });
            break;
        case '/entrepreneur':
            container.innerHTML = await _pageJsDefault.default({
                layout: 'standard',
                view: _viewsJsDefault.default.entrpreneur
            });
            _viewsJsDefault.default.entrpreneur.loadIdeas();
            break;
        case '/investor':
            container.innerHTML = await _pageJsDefault.default({
                layout: 'standard',
                view: _viewsJsDefault.default.investor
            });
            _viewsJsDefault.default.investor.loadInvestments();
            break;
        case '/developer':
            container.innerHTML = await _pageJsDefault.default({
                layout: 'standard',
                view: _viewsJsDefault.default.developer
            });
            _viewsJsDefault.default.developer.loadDomainNames();
            break;
        case '/connect':
            container.innerHTML = await _pageJsDefault.default({
                layout: 'connect',
                view: _viewsJsDefault.default.connect
            });
            break;
        default:
            container.innerHTML = await _pageJsDefault.default({
                layout: 'lost',
                view: _viewsJsDefault.default.lost
            });
            break;
    }
    _animationsJs.animate('in');
}

},{"./views.js":"9eQAB","./animations.js":"6S3X3","./page.js":"cx0pW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9eQAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _domainJs = require("../components/domain.js");
var _domainJsDefault = parcelHelpers.interopDefault(_domainJs);
var _investmentJs = require("../components/investment.js");
var _investmentJsDefault = parcelHelpers.interopDefault(_investmentJs);
var _itemJs = require("../components/item.js");
var _itemJsDefault = parcelHelpers.interopDefault(_itemJs);
const views = {
    home: {
        title: "Make epic sh<span class='accent'>*</span>t.",
        description: "I'm Chris Huxley, a software developer, investor, and entrepreneur based in D.C."
    },
    entrpreneur: {
        title: 'Entrepreneur',
        description: 'en<span>&#183;</span>tre<span>&#183;</span>pre<span>&#183;</span>neur, <span>noun</span> : a person in the pursuit of opportunity at the expense of an average life.',
        content: "As an entrepreneur, I spend my time <span class='underline'>dreaming</span>, <span class='underline'>planning</span>, <span class='underline'>building</span>, and <span class='underline'>launching</span> my own ideas through <em>Huxley Studios</em>, my personal venture studio. To help bring these ideas to life, I'm always seeking to collaborate with amazing people.",
        subtitle: 'Collaboration Opportunities',
        subcontent: 'If any of the collaboration opportunities below are of interest, let\'s connect.',
        selector: 'ideas',
        ideas: [
            'Illustrating a children\'s book',
            'Designing podcast cover art',
            'Creating animations',
            'Co-founding a new type of design studio',
            'Innovating a particular automotive operation',
            'Innovating the hiring process',
            'Fundraising for the culinary arts',
            'Co-hosting a podcast',
            'Launching a new type of puzzle company'
        ],
        loadIdeas: function() {
            this.ideas.forEach((idea)=>{
                document.querySelector('#ideas').appendChild(_itemJsDefault.default(idea));
            });
        }
    },
    investor: {
        title: 'Investor',
        description: 'in<span>&#183;</span>ves<span>&#183;</span>tor, <span>noun</span> : a person who deploys their capital to help others pursue their dreams.',
        content: 'Being an investor has a lot of rewards.',
        subtitle: 'My Portfolio',
        subcontent: 'Below is a curated list of my active investments.',
        selector: 'investments',
        investments: [
            {
                name: 'NowRx',
                link: 'https://nowrx.com/'
            },
            {
                name: 'Miso Robotics',
                link: 'https://misorobotics.com'
            },
            {
                name: 'Winc',
                link: 'https://www.winc.com/'
            }
        ],
        loadInvestments: function() {
            this.investments.forEach((investment)=>{
                document.querySelector('#investments').appendChild(_investmentJsDefault.default(investment.name, investment.link));
            });
        }
    },
    developer: {
        title: 'Developer',
        description: 'de<span>&#183;</span>vel<span>&#183;</span>op<span>&#183;</span>er, <span>noun</span> : a person who arranges 1s and 0s in a particular way that creates value in the world.',
        content: 'It\'s not about what you make. It\'s about what you make happen. There\'s something so beautiful about bringing an idea to life. What was once a distant thought, a voice in your head, is now tangible. It\'s a gamechanging product, an innovative technology, or a ledgendary movement.',
        subtitle: 'Domain Names',
        subcontent: 'Below is a curated list of domains I own. If any of them inspire an idea, let\'s connect.',
        selector: 'domains',
        domainNames: [
            'campuscreatives.com',
            'riddlemethat.org',
            'netwerking.co',
            'something2believe.in',
            'somethingtobelieve.in',
            'toldby.us',
            'undergroundstudios.org',
            'valorpublishing.com'
        ],
        loadDomainNames: function() {
            this.domainNames.forEach((domain)=>{
                document.querySelector('#domains').appendChild(_domainJsDefault.default(domain));
            });
        }
    },
    connect: {
        title: 'Connect',
        description: 'con<span>&#183;</span>nect, <span>verb</span> : something we all fail to do enough.',
        content: 'If you made it this far, you might as well reach out. Even if it\'s just to say hello.'
    },
    lost: {
        title: 'You seem to have lost your way.',
        description: 'Select the menu to get back on track.'
    }
};
exports.default = views;

},{"../components/domain.js":"eydxi","../components/investment.js":"4LrPc","../components/item.js":"hmniZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eydxi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Domain = (domain)=>{
    const template = document.createElement('template');
    template.innerHTML = `
    <li class='list-item'>
      ${domain}
    </li>
  `;
    return template.content.cloneNode(true);
};
exports.default = Domain;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4LrPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Investment = (name, link)=>{
    const template = document.createElement('template');
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hmniZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Item = (item)=>{
    const template = document.createElement('template');
    template.innerHTML = `
    <li class='list-item'>
      <span class='bullet'>/ </span>
      ${item}
    </li>
  `;
    return template.content.cloneNode(true);
};
exports.default = Item;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6S3X3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate
);
function animate(type) {
    let name = document.getElementById('name');
    let menuIcon = document.getElementById('menu');
    let title = document.querySelector('.title');
    let subtitle = document.querySelector('.subtitle');
    let description = document.querySelector('.description');
    let content = document.querySelector('.content');
    let subcontent = document.querySelector('.subcontent');
    let listItems = document.querySelectorAll('.list-item');
    let line = document.querySelector('hr');
    if (type === 'in') {
        setTimeout(()=>{
            title.classList.toggle('fade');
        }, 100);
        setTimeout(()=>{
            description.classList.toggle('fade');
            if (line) line.classList.toggle('fade');
            if (content) content.classList.toggle('fade');
        }, 500);
        if (subtitle && subcontent) setTimeout(()=>{
            subtitle.classList.toggle('fade');
            subcontent.classList.toggle('fade');
        }, 1000);
        // also on each investment and adds margin bottom
        if (listItems) listItems.forEach((item, index)=>{
            setTimeout(()=>{
                item.classList.toggle('fade');
            }, index * 200 + 1100);
        });
    }
    if (type === 'out') {
        if (listItems) listItems.forEach((item, index)=>{
            setTimeout(()=>{
                item.classList.toggle('fade');
            }, index * 100 + 100);
        });
        if (subtitle && subcontent) setTimeout(()=>{
            subtitle.classList.toggle('fade');
            subcontent.classList.toggle('fade');
        }, 100);
        setTimeout(()=>{
            if (content) content.classList.toggle('fade');
        }, 150);
        setTimeout(()=>{
            if (line) line.classList.toggle('fade');
            description.classList.toggle('fade');
        }, 200);
        setTimeout(()=>{
            title.classList.toggle('fade');
        }, 250);
    }
    setTimeout(()=>{
        name.classList.toggle('loaded');
        menuIcon.classList.toggle('loaded');
    }, 700);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cx0pW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Page = ({ layout , view  })=>{
    switch(layout){
        case 'hero':
            return templateOne(view);
        case 'standard':
            return templateTwo(view);
        case 'connect':
            return templateThree(view);
        default:
            return templateFour(view);
    }
};
// HERO
let templateOne = (view)=>`
  <section class='home'>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
  </section>
`
;
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
`
;
// CONNECT
let templateThree = (view)=>`
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
    <p class='content'>${view.content}</p>
  </section>
`
;
// LOST
let templateFour = (view)=>`
  <section>
    <h2 class='title'>${view.title}</h2>
    <p class='description'>${view.description}</p>
  </section>
`
;
exports.default = Page;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fzcL3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleMenu", ()=>toggleMenu
);
function toggleMenu() {
    const menuIcon = document.getElementById('menu');
    const navView = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.link');
    menuIcon.classList.toggle('active');
    navView.classList.toggle('active');
    navLinks.forEach((link, index)=>{
        setTimeout(()=>{
            link.classList.toggle('active');
        }, index * 200 + 500);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["3KXv7","5HwUs"], "5HwUs", "parcelRequire23ff")

//# sourceMappingURL=index.d56a3cb1.js.map
