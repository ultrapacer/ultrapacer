var Qg = Object.defineProperty;
var Vg = (f, i, r) => i in f ? Qg(f, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : f[i] = r;
var Xo = (f, i, r) => (Vg(f, typeof i != "symbol" ? i + "" : i, r), r);
var $n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ys(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Dr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Dr.exports;
(function(f, i) {
  (function() {
    var r, o = "4.17.21", l = 200, d = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", p = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", b = 500, C = "__lodash_placeholder__", v = 1, T = 2, D = 4, N = 1, I = 2, O = 1, $ = 2, j = 4, X = 8, nt = 16, bt = 32, St = 64, Pt = 128, Gt = 256, te = 512, Ht = 30, Mn = "...", qn = 800, $r = 16, Cn = 1, Gn = 2, zr = 3, Me = 1 / 0, ge = 9007199254740991, Hn = 17976931348623157e292, Ce = NaN, R = 4294967295, z = R - 1, q = R >>> 1, lt = [
      ["ary", Pt],
      ["bind", O],
      ["bindKey", $],
      ["curry", X],
      ["curryRight", nt],
      ["flip", te],
      ["partial", bt],
      ["partialRight", St],
      ["rearg", Gt]
    ], tt = "[object Arguments]", ft = "[object Array]", at = "[object AsyncFunction]", ut = "[object Boolean]", mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", _e = "[object GeneratorFunction]", gt = "[object Map]", Rt = "[object Number]", Le = "[object Null]", wt = "[object Object]", Bt = "[object Promise]", le = "[object Proxy]", ee = "[object RegExp]", ht = "[object Set]", ve = "[object String]", Kn = "[object Symbol]", _u = "[object Undefined]", xn = "[object WeakMap]", vu = "[object WeakSet]", An = "[object ArrayBuffer]", sn = "[object DataView]", qr = "[object Float32Array]", Gr = "[object Float64Array]", Hr = "[object Int8Array]", Kr = "[object Int16Array]", Jr = "[object Int32Array]", Zr = "[object Uint8Array]", Yr = "[object Uint8ClampedArray]", jr = "[object Uint16Array]", Xr = "[object Uint32Array]", yu = /\b__p \+= '';/g, mu = /\b(__p \+=) '' \+/g, wu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bs = /&(?:amp|lt|gt|quot|#39);/g, Ms = /[&<>"']/g, bu = RegExp(bs.source), Mu = RegExp(Ms.source), Cu = /<%-([\s\S]+?)%>/g, xu = /<%([\s\S]+?)%>/g, Cs = /<%=([\s\S]+?)%>/g, Au = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Su = /^\w*$/, Pu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Tu = RegExp(Qr.source), Vr = /^\s+/, Eu = /\s/, Iu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ou = /\{\n\/\* \[wrapped with (.+)\] \*/, Fu = /,? & /, Ru = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Lu = /[()=,{}\[\]\/\s]/, ku = /\\(\\)?/g, Du = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xs = /\w*$/, Nu = /^[-+]0x[0-9a-f]+$/i, Wu = /^0b[01]+$/i, Bu = /^\[object .+?Constructor\]$/, Uu = /^0o[0-7]+$/i, $u = /^(?:0|[1-9]\d*)$/, zu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Jn = /($^)/, qu = /['\n\r\u2028\u2029\\]/g, Zn = "\\ud800-\\udfff", Gu = "\\u0300-\\u036f", Hu = "\\ufe20-\\ufe2f", Ku = "\\u20d0-\\u20ff", As = Gu + Hu + Ku, Ss = "\\u2700-\\u27bf", Ps = "a-z\\xdf-\\xf6\\xf8-\\xff", Ju = "\\xac\\xb1\\xd7\\xf7", Zu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Yu = "\\u2000-\\u206f", ju = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ts = "A-Z\\xc0-\\xd6\\xd8-\\xde", Es = "\\ufe0e\\ufe0f", Is = Ju + Zu + Yu + ju, ti = "['’]", Xu = "[" + Zn + "]", Os = "[" + Is + "]", Yn = "[" + As + "]", Fs = "\\d+", Qu = "[" + Ss + "]", Rs = "[" + Ps + "]", Ls = "[^" + Zn + Is + Fs + Ss + Ps + Ts + "]", ei = "\\ud83c[\\udffb-\\udfff]", Vu = "(?:" + Yn + "|" + ei + ")", ks = "[^" + Zn + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ri = "[\\ud800-\\udbff][\\udc00-\\udfff]", an = "[" + Ts + "]", Ds = "\\u200d", Ns = "(?:" + Rs + "|" + Ls + ")", tc = "(?:" + an + "|" + Ls + ")", Ws = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", Bs = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", Us = Vu + "?", $s = "[" + Es + "]?", ec = "(?:" + Ds + "(?:" + [ks, ni, ri].join("|") + ")" + $s + Us + ")*", nc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", zs = $s + Us + ec, ic = "(?:" + [Qu, ni, ri].join("|") + ")" + zs, sc = "(?:" + [ks + Yn + "?", Yn, ni, ri, Xu].join("|") + ")", ac = RegExp(ti, "g"), oc = RegExp(Yn, "g"), ii = RegExp(ei + "(?=" + ei + ")|" + sc + zs, "g"), uc = RegExp([
      an + "?" + Rs + "+" + Ws + "(?=" + [Os, an, "$"].join("|") + ")",
      tc + "+" + Bs + "(?=" + [Os, an + Ns, "$"].join("|") + ")",
      an + "?" + Ns + "+" + Ws,
      an + "+" + Bs,
      rc,
      nc,
      Fs,
      ic
    ].join("|"), "g"), cc = RegExp("[" + Ds + Zn + As + Es + "]"), lc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, fc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], hc = -1, ct = {};
    ct[qr] = ct[Gr] = ct[Hr] = ct[Kr] = ct[Jr] = ct[Zr] = ct[Yr] = ct[jr] = ct[Xr] = !0, ct[tt] = ct[ft] = ct[An] = ct[ut] = ct[sn] = ct[mt] = ct[Ft] = ct[Wt] = ct[gt] = ct[Rt] = ct[wt] = ct[ee] = ct[ht] = ct[ve] = ct[xn] = !1;
    var ot = {};
    ot[tt] = ot[ft] = ot[An] = ot[sn] = ot[ut] = ot[mt] = ot[qr] = ot[Gr] = ot[Hr] = ot[Kr] = ot[Jr] = ot[gt] = ot[Rt] = ot[wt] = ot[ee] = ot[ht] = ot[ve] = ot[Kn] = ot[Zr] = ot[Yr] = ot[jr] = ot[Xr] = !0, ot[Ft] = ot[Wt] = ot[xn] = !1;
    var pc = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, dc = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, gc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, _c = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, vc = parseFloat, yc = parseInt, qs = typeof $n == "object" && $n && $n.Object === Object && $n, mc = typeof self == "object" && self && self.Object === Object && self, Tt = qs || mc || Function("return this")(), si = i && !i.nodeType && i, Je = si && !0 && f && !f.nodeType && f, Gs = Je && Je.exports === si, ai = Gs && qs.process, ne = function() {
      try {
        var y = Je && Je.require && Je.require("util").types;
        return y || ai && ai.binding && ai.binding("util");
      } catch {
      }
    }(), Hs = ne && ne.isArrayBuffer, Ks = ne && ne.isDate, Js = ne && ne.isMap, Zs = ne && ne.isRegExp, Ys = ne && ne.isSet, js = ne && ne.isTypedArray;
    function Jt(y, x, M) {
      switch (M.length) {
        case 0:
          return y.call(x);
        case 1:
          return y.call(x, M[0]);
        case 2:
          return y.call(x, M[0], M[1]);
        case 3:
          return y.call(x, M[0], M[1], M[2]);
      }
      return y.apply(x, M);
    }
    function wc(y, x, M, L) {
      for (var G = -1, et = y == null ? 0 : y.length; ++G < et; ) {
        var Mt = y[G];
        x(L, Mt, M(Mt), y);
      }
      return L;
    }
    function re(y, x) {
      for (var M = -1, L = y == null ? 0 : y.length; ++M < L && x(y[M], M, y) !== !1; )
        ;
      return y;
    }
    function bc(y, x) {
      for (var M = y == null ? 0 : y.length; M-- && x(y[M], M, y) !== !1; )
        ;
      return y;
    }
    function Xs(y, x) {
      for (var M = -1, L = y == null ? 0 : y.length; ++M < L; )
        if (!x(y[M], M, y))
          return !1;
      return !0;
    }
    function ke(y, x) {
      for (var M = -1, L = y == null ? 0 : y.length, G = 0, et = []; ++M < L; ) {
        var Mt = y[M];
        x(Mt, M, y) && (et[G++] = Mt);
      }
      return et;
    }
    function jn(y, x) {
      var M = y == null ? 0 : y.length;
      return !!M && on(y, x, 0) > -1;
    }
    function oi(y, x, M) {
      for (var L = -1, G = y == null ? 0 : y.length; ++L < G; )
        if (M(x, y[L]))
          return !0;
      return !1;
    }
    function pt(y, x) {
      for (var M = -1, L = y == null ? 0 : y.length, G = Array(L); ++M < L; )
        G[M] = x(y[M], M, y);
      return G;
    }
    function De(y, x) {
      for (var M = -1, L = x.length, G = y.length; ++M < L; )
        y[G + M] = x[M];
      return y;
    }
    function ui(y, x, M, L) {
      var G = -1, et = y == null ? 0 : y.length;
      for (L && et && (M = y[++G]); ++G < et; )
        M = x(M, y[G], G, y);
      return M;
    }
    function Mc(y, x, M, L) {
      var G = y == null ? 0 : y.length;
      for (L && G && (M = y[--G]); G--; )
        M = x(M, y[G], G, y);
      return M;
    }
    function ci(y, x) {
      for (var M = -1, L = y == null ? 0 : y.length; ++M < L; )
        if (x(y[M], M, y))
          return !0;
      return !1;
    }
    var Cc = li("length");
    function xc(y) {
      return y.split("");
    }
    function Ac(y) {
      return y.match(Ru) || [];
    }
    function Qs(y, x, M) {
      var L;
      return M(y, function(G, et, Mt) {
        if (x(G, et, Mt))
          return L = et, !1;
      }), L;
    }
    function Xn(y, x, M, L) {
      for (var G = y.length, et = M + (L ? 1 : -1); L ? et-- : ++et < G; )
        if (x(y[et], et, y))
          return et;
      return -1;
    }
    function on(y, x, M) {
      return x === x ? Nc(y, x, M) : Xn(y, Vs, M);
    }
    function Sc(y, x, M, L) {
      for (var G = M - 1, et = y.length; ++G < et; )
        if (L(y[G], x))
          return G;
      return -1;
    }
    function Vs(y) {
      return y !== y;
    }
    function ta(y, x) {
      var M = y == null ? 0 : y.length;
      return M ? hi(y, x) / M : Ce;
    }
    function li(y) {
      return function(x) {
        return x == null ? r : x[y];
      };
    }
    function fi(y) {
      return function(x) {
        return y == null ? r : y[x];
      };
    }
    function ea(y, x, M, L, G) {
      return G(y, function(et, Mt, st) {
        M = L ? (L = !1, et) : x(M, et, Mt, st);
      }), M;
    }
    function Pc(y, x) {
      var M = y.length;
      for (y.sort(x); M--; )
        y[M] = y[M].value;
      return y;
    }
    function hi(y, x) {
      for (var M, L = -1, G = y.length; ++L < G; ) {
        var et = x(y[L]);
        et !== r && (M = M === r ? et : M + et);
      }
      return M;
    }
    function pi(y, x) {
      for (var M = -1, L = Array(y); ++M < y; )
        L[M] = x(M);
      return L;
    }
    function Tc(y, x) {
      return pt(x, function(M) {
        return [M, y[M]];
      });
    }
    function na(y) {
      return y && y.slice(0, aa(y) + 1).replace(Vr, "");
    }
    function Zt(y) {
      return function(x) {
        return y(x);
      };
    }
    function di(y, x) {
      return pt(x, function(M) {
        return y[M];
      });
    }
    function Sn(y, x) {
      return y.has(x);
    }
    function ra(y, x) {
      for (var M = -1, L = y.length; ++M < L && on(x, y[M], 0) > -1; )
        ;
      return M;
    }
    function ia(y, x) {
      for (var M = y.length; M-- && on(x, y[M], 0) > -1; )
        ;
      return M;
    }
    function Ec(y, x) {
      for (var M = y.length, L = 0; M--; )
        y[M] === x && ++L;
      return L;
    }
    var Ic = fi(pc), Oc = fi(dc);
    function Fc(y) {
      return "\\" + _c[y];
    }
    function Rc(y, x) {
      return y == null ? r : y[x];
    }
    function un(y) {
      return cc.test(y);
    }
    function Lc(y) {
      return lc.test(y);
    }
    function kc(y) {
      for (var x, M = []; !(x = y.next()).done; )
        M.push(x.value);
      return M;
    }
    function gi(y) {
      var x = -1, M = Array(y.size);
      return y.forEach(function(L, G) {
        M[++x] = [G, L];
      }), M;
    }
    function sa(y, x) {
      return function(M) {
        return y(x(M));
      };
    }
    function Ne(y, x) {
      for (var M = -1, L = y.length, G = 0, et = []; ++M < L; ) {
        var Mt = y[M];
        (Mt === x || Mt === C) && (y[M] = C, et[G++] = M);
      }
      return et;
    }
    function Qn(y) {
      var x = -1, M = Array(y.size);
      return y.forEach(function(L) {
        M[++x] = L;
      }), M;
    }
    function Dc(y) {
      var x = -1, M = Array(y.size);
      return y.forEach(function(L) {
        M[++x] = [L, L];
      }), M;
    }
    function Nc(y, x, M) {
      for (var L = M - 1, G = y.length; ++L < G; )
        if (y[L] === x)
          return L;
      return -1;
    }
    function Wc(y, x, M) {
      for (var L = M + 1; L--; )
        if (y[L] === x)
          return L;
      return L;
    }
    function cn(y) {
      return un(y) ? Uc(y) : Cc(y);
    }
    function fe(y) {
      return un(y) ? $c(y) : xc(y);
    }
    function aa(y) {
      for (var x = y.length; x-- && Eu.test(y.charAt(x)); )
        ;
      return x;
    }
    var Bc = fi(gc);
    function Uc(y) {
      for (var x = ii.lastIndex = 0; ii.test(y); )
        ++x;
      return x;
    }
    function $c(y) {
      return y.match(ii) || [];
    }
    function zc(y) {
      return y.match(uc) || [];
    }
    var qc = function y(x) {
      x = x == null ? Tt : ln.defaults(Tt.Object(), x, ln.pick(Tt, fc));
      var M = x.Array, L = x.Date, G = x.Error, et = x.Function, Mt = x.Math, st = x.Object, _i = x.RegExp, Gc = x.String, ie = x.TypeError, Vn = M.prototype, Hc = et.prototype, fn = st.prototype, tr = x["__core-js_shared__"], er = Hc.toString, it = fn.hasOwnProperty, Kc = 0, oa = function() {
        var t = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), nr = fn.toString, Jc = er.call(st), Zc = Tt._, Yc = _i(
        "^" + er.call(it).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), rr = Gs ? x.Buffer : r, We = x.Symbol, ir = x.Uint8Array, ua = rr ? rr.allocUnsafe : r, sr = sa(st.getPrototypeOf, st), ca = st.create, la = fn.propertyIsEnumerable, ar = Vn.splice, fa = We ? We.isConcatSpreadable : r, Pn = We ? We.iterator : r, Ze = We ? We.toStringTag : r, or = function() {
        try {
          var t = Ve(st, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), jc = x.clearTimeout !== Tt.clearTimeout && x.clearTimeout, Xc = L && L.now !== Tt.Date.now && L.now, Qc = x.setTimeout !== Tt.setTimeout && x.setTimeout, ur = Mt.ceil, cr = Mt.floor, vi = st.getOwnPropertySymbols, Vc = rr ? rr.isBuffer : r, ha = x.isFinite, tl = Vn.join, el = sa(st.keys, st), Ct = Mt.max, It = Mt.min, nl = L.now, rl = x.parseInt, pa = Mt.random, il = Vn.reverse, yi = Ve(x, "DataView"), Tn = Ve(x, "Map"), mi = Ve(x, "Promise"), hn = Ve(x, "Set"), En = Ve(x, "WeakMap"), In = Ve(st, "create"), lr = En && new En(), pn = {}, sl = tn(yi), al = tn(Tn), ol = tn(mi), ul = tn(hn), cl = tn(En), fr = We ? We.prototype : r, On = fr ? fr.valueOf : r, da = fr ? fr.toString : r;
      function u(t) {
        if (_t(t) && !H(t) && !(t instanceof Q)) {
          if (t instanceof se)
            return t;
          if (it.call(t, "__wrapped__"))
            return _o(t);
        }
        return new se(t);
      }
      var dn = /* @__PURE__ */ function() {
        function t() {
        }
        return function(e) {
          if (!dt(e))
            return {};
          if (ca)
            return ca(e);
          t.prototype = e;
          var n = new t();
          return t.prototype = r, n;
        };
      }();
      function hr() {
      }
      function se(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Cu,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: xu,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Cs,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = hr.prototype, u.prototype.constructor = u, se.prototype = dn(hr.prototype), se.prototype.constructor = se;
      function Q(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = R, this.__views__ = [];
      }
      function ll() {
        var t = new Q(this.__wrapped__);
        return t.__actions__ = Ut(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ut(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ut(this.__views__), t;
      }
      function fl() {
        if (this.__filtered__) {
          var t = new Q(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function hl() {
        var t = this.__wrapped__.value(), e = this.__dir__, n = H(t), s = e < 0, a = n ? t.length : 0, c = Af(0, a, this.__views__), h = c.start, g = c.end, m = g - h, A = s ? g : h - 1, S = this.__iteratees__, P = S.length, F = 0, k = It(m, this.__takeCount__);
        if (!n || !s && a == m && k == m)
          return Wa(t, this.__actions__);
        var B = [];
        t:
          for (; m-- && F < k; ) {
            A += e;
            for (var J = -1, U = t[A]; ++J < P; ) {
              var Y = S[J], V = Y.iteratee, Xt = Y.type, Dt = V(U);
              if (Xt == Gn)
                U = Dt;
              else if (!Dt) {
                if (Xt == Cn)
                  continue t;
                break t;
              }
            }
            B[F++] = U;
          }
        return B;
      }
      Q.prototype = dn(hr.prototype), Q.prototype.constructor = Q;
      function Ye(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      function pl() {
        this.__data__ = In ? In(null) : {}, this.size = 0;
      }
      function dl(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e;
      }
      function gl(t) {
        var e = this.__data__;
        if (In) {
          var n = e[t];
          return n === w ? r : n;
        }
        return it.call(e, t) ? e[t] : r;
      }
      function _l(t) {
        var e = this.__data__;
        return In ? e[t] !== r : it.call(e, t);
      }
      function vl(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = In && e === r ? w : e, this;
      }
      Ye.prototype.clear = pl, Ye.prototype.delete = dl, Ye.prototype.get = gl, Ye.prototype.has = _l, Ye.prototype.set = vl;
      function xe(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      function yl() {
        this.__data__ = [], this.size = 0;
      }
      function ml(t) {
        var e = this.__data__, n = pr(e, t);
        if (n < 0)
          return !1;
        var s = e.length - 1;
        return n == s ? e.pop() : ar.call(e, n, 1), --this.size, !0;
      }
      function wl(t) {
        var e = this.__data__, n = pr(e, t);
        return n < 0 ? r : e[n][1];
      }
      function bl(t) {
        return pr(this.__data__, t) > -1;
      }
      function Ml(t, e) {
        var n = this.__data__, s = pr(n, t);
        return s < 0 ? (++this.size, n.push([t, e])) : n[s][1] = e, this;
      }
      xe.prototype.clear = yl, xe.prototype.delete = ml, xe.prototype.get = wl, xe.prototype.has = bl, xe.prototype.set = Ml;
      function Ae(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var s = t[e];
          this.set(s[0], s[1]);
        }
      }
      function Cl() {
        this.size = 0, this.__data__ = {
          hash: new Ye(),
          map: new (Tn || xe)(),
          string: new Ye()
        };
      }
      function xl(t) {
        var e = Ar(this, t).delete(t);
        return this.size -= e ? 1 : 0, e;
      }
      function Al(t) {
        return Ar(this, t).get(t);
      }
      function Sl(t) {
        return Ar(this, t).has(t);
      }
      function Pl(t, e) {
        var n = Ar(this, t), s = n.size;
        return n.set(t, e), this.size += n.size == s ? 0 : 1, this;
      }
      Ae.prototype.clear = Cl, Ae.prototype.delete = xl, Ae.prototype.get = Al, Ae.prototype.has = Sl, Ae.prototype.set = Pl;
      function je(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.__data__ = new Ae(); ++e < n; )
          this.add(t[e]);
      }
      function Tl(t) {
        return this.__data__.set(t, w), this;
      }
      function El(t) {
        return this.__data__.has(t);
      }
      je.prototype.add = je.prototype.push = Tl, je.prototype.has = El;
      function he(t) {
        var e = this.__data__ = new xe(t);
        this.size = e.size;
      }
      function Il() {
        this.__data__ = new xe(), this.size = 0;
      }
      function Ol(t) {
        var e = this.__data__, n = e.delete(t);
        return this.size = e.size, n;
      }
      function Fl(t) {
        return this.__data__.get(t);
      }
      function Rl(t) {
        return this.__data__.has(t);
      }
      function Ll(t, e) {
        var n = this.__data__;
        if (n instanceof xe) {
          var s = n.__data__;
          if (!Tn || s.length < l - 1)
            return s.push([t, e]), this.size = ++n.size, this;
          n = this.__data__ = new Ae(s);
        }
        return n.set(t, e), this.size = n.size, this;
      }
      he.prototype.clear = Il, he.prototype.delete = Ol, he.prototype.get = Fl, he.prototype.has = Rl, he.prototype.set = Ll;
      function ga(t, e) {
        var n = H(t), s = !n && en(t), a = !n && !s && qe(t), c = !n && !s && !a && yn(t), h = n || s || a || c, g = h ? pi(t.length, Gc) : [], m = g.length;
        for (var A in t)
          (e || it.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          c && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          Ee(A, m))) && g.push(A);
        return g;
      }
      function _a(t) {
        var e = t.length;
        return e ? t[Ii(0, e - 1)] : r;
      }
      function kl(t, e) {
        return Sr(Ut(t), Xe(e, 0, t.length));
      }
      function Dl(t) {
        return Sr(Ut(t));
      }
      function wi(t, e, n) {
        (n !== r && !pe(t[e], n) || n === r && !(e in t)) && Se(t, e, n);
      }
      function Fn(t, e, n) {
        var s = t[e];
        (!(it.call(t, e) && pe(s, n)) || n === r && !(e in t)) && Se(t, e, n);
      }
      function pr(t, e) {
        for (var n = t.length; n--; )
          if (pe(t[n][0], e))
            return n;
        return -1;
      }
      function Nl(t, e, n, s) {
        return Be(t, function(a, c, h) {
          e(s, a, n(a), h);
        }), s;
      }
      function va(t, e) {
        return t && me(e, At(e), t);
      }
      function Wl(t, e) {
        return t && me(e, zt(e), t);
      }
      function Se(t, e, n) {
        e == "__proto__" && or ? or(t, e, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : t[e] = n;
      }
      function bi(t, e) {
        for (var n = -1, s = e.length, a = M(s), c = t == null; ++n < s; )
          a[n] = c ? r : es(t, e[n]);
        return a;
      }
      function Xe(t, e, n) {
        return t === t && (n !== r && (t = t <= n ? t : n), e !== r && (t = t >= e ? t : e)), t;
      }
      function ae(t, e, n, s, a, c) {
        var h, g = e & v, m = e & T, A = e & D;
        if (n && (h = a ? n(t, s, a, c) : n(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var S = H(t);
        if (S) {
          if (h = Pf(t), !g)
            return Ut(t, h);
        } else {
          var P = Ot(t), F = P == Wt || P == _e;
          if (qe(t))
            return $a(t, g);
          if (P == wt || P == tt || F && !a) {
            if (h = m || F ? {} : ao(t), !g)
              return m ? _f(t, Wl(h, t)) : gf(t, va(h, t));
          } else {
            if (!ot[P])
              return a ? t : {};
            h = Tf(t, P, g);
          }
        }
        c || (c = new he());
        var k = c.get(t);
        if (k)
          return k;
        c.set(t, h), Do(t) ? t.forEach(function(U) {
          h.add(ae(U, e, n, U, t, c));
        }) : Lo(t) && t.forEach(function(U, Y) {
          h.set(Y, ae(U, e, n, Y, t, c));
        });
        var B = A ? m ? $i : Ui : m ? zt : At, J = S ? r : B(t);
        return re(J || t, function(U, Y) {
          J && (Y = U, U = t[Y]), Fn(h, Y, ae(U, e, n, Y, t, c));
        }), h;
      }
      function Bl(t) {
        var e = At(t);
        return function(n) {
          return ya(n, t, e);
        };
      }
      function ya(t, e, n) {
        var s = n.length;
        if (t == null)
          return !s;
        for (t = st(t); s--; ) {
          var a = n[s], c = e[a], h = t[a];
          if (h === r && !(a in t) || !c(h))
            return !1;
        }
        return !0;
      }
      function ma(t, e, n) {
        if (typeof t != "function")
          throw new ie(p);
        return Bn(function() {
          t.apply(r, n);
        }, e);
      }
      function Rn(t, e, n, s) {
        var a = -1, c = jn, h = !0, g = t.length, m = [], A = e.length;
        if (!g)
          return m;
        n && (e = pt(e, Zt(n))), s ? (c = oi, h = !1) : e.length >= l && (c = Sn, h = !1, e = new je(e));
        t:
          for (; ++a < g; ) {
            var S = t[a], P = n == null ? S : n(S);
            if (S = s || S !== 0 ? S : 0, h && P === P) {
              for (var F = A; F--; )
                if (e[F] === P)
                  continue t;
              m.push(S);
            } else
              c(e, P, s) || m.push(S);
          }
        return m;
      }
      var Be = Ka(ye), wa = Ka(Ci, !0);
      function Ul(t, e) {
        var n = !0;
        return Be(t, function(s, a, c) {
          return n = !!e(s, a, c), n;
        }), n;
      }
      function dr(t, e, n) {
        for (var s = -1, a = t.length; ++s < a; ) {
          var c = t[s], h = e(c);
          if (h != null && (g === r ? h === h && !jt(h) : n(h, g)))
            var g = h, m = c;
        }
        return m;
      }
      function $l(t, e, n, s) {
        var a = t.length;
        for (n = K(n), n < 0 && (n = -n > a ? 0 : a + n), s = s === r || s > a ? a : K(s), s < 0 && (s += a), s = n > s ? 0 : Wo(s); n < s; )
          t[n++] = e;
        return t;
      }
      function ba(t, e) {
        var n = [];
        return Be(t, function(s, a, c) {
          e(s, a, c) && n.push(s);
        }), n;
      }
      function Et(t, e, n, s, a) {
        var c = -1, h = t.length;
        for (n || (n = If), a || (a = []); ++c < h; ) {
          var g = t[c];
          e > 0 && n(g) ? e > 1 ? Et(g, e - 1, n, s, a) : De(a, g) : s || (a[a.length] = g);
        }
        return a;
      }
      var Mi = Ja(), Ma = Ja(!0);
      function ye(t, e) {
        return t && Mi(t, e, At);
      }
      function Ci(t, e) {
        return t && Ma(t, e, At);
      }
      function gr(t, e) {
        return ke(e, function(n) {
          return Ie(t[n]);
        });
      }
      function Qe(t, e) {
        e = $e(e, t);
        for (var n = 0, s = e.length; t != null && n < s; )
          t = t[we(e[n++])];
        return n && n == s ? t : r;
      }
      function Ca(t, e, n) {
        var s = e(t);
        return H(t) ? s : De(s, n(t));
      }
      function Lt(t) {
        return t == null ? t === r ? _u : Le : Ze && Ze in st(t) ? xf(t) : Nf(t);
      }
      function xi(t, e) {
        return t > e;
      }
      function zl(t, e) {
        return t != null && it.call(t, e);
      }
      function ql(t, e) {
        return t != null && e in st(t);
      }
      function Gl(t, e, n) {
        return t >= It(e, n) && t < Ct(e, n);
      }
      function Ai(t, e, n) {
        for (var s = n ? oi : jn, a = t[0].length, c = t.length, h = c, g = M(c), m = 1 / 0, A = []; h--; ) {
          var S = t[h];
          h && e && (S = pt(S, Zt(e))), m = It(S.length, m), g[h] = !n && (e || a >= 120 && S.length >= 120) ? new je(h && S) : r;
        }
        S = t[0];
        var P = -1, F = g[0];
        t:
          for (; ++P < a && A.length < m; ) {
            var k = S[P], B = e ? e(k) : k;
            if (k = n || k !== 0 ? k : 0, !(F ? Sn(F, B) : s(A, B, n))) {
              for (h = c; --h; ) {
                var J = g[h];
                if (!(J ? Sn(J, B) : s(t[h], B, n)))
                  continue t;
              }
              F && F.push(B), A.push(k);
            }
          }
        return A;
      }
      function Hl(t, e, n, s) {
        return ye(t, function(a, c, h) {
          e(s, n(a), c, h);
        }), s;
      }
      function Ln(t, e, n) {
        e = $e(e, t), t = lo(t, e);
        var s = t == null ? t : t[we(ue(e))];
        return s == null ? r : Jt(s, t, n);
      }
      function xa(t) {
        return _t(t) && Lt(t) == tt;
      }
      function Kl(t) {
        return _t(t) && Lt(t) == An;
      }
      function Jl(t) {
        return _t(t) && Lt(t) == mt;
      }
      function kn(t, e, n, s, a) {
        return t === e ? !0 : t == null || e == null || !_t(t) && !_t(e) ? t !== t && e !== e : Zl(t, e, n, s, kn, a);
      }
      function Zl(t, e, n, s, a, c) {
        var h = H(t), g = H(e), m = h ? ft : Ot(t), A = g ? ft : Ot(e);
        m = m == tt ? wt : m, A = A == tt ? wt : A;
        var S = m == wt, P = A == wt, F = m == A;
        if (F && qe(t)) {
          if (!qe(e))
            return !1;
          h = !0, S = !1;
        }
        if (F && !S)
          return c || (c = new he()), h || yn(t) ? ro(t, e, n, s, a, c) : Mf(t, e, m, n, s, a, c);
        if (!(n & N)) {
          var k = S && it.call(t, "__wrapped__"), B = P && it.call(e, "__wrapped__");
          if (k || B) {
            var J = k ? t.value() : t, U = B ? e.value() : e;
            return c || (c = new he()), a(J, U, n, s, c);
          }
        }
        return F ? (c || (c = new he()), Cf(t, e, n, s, a, c)) : !1;
      }
      function Yl(t) {
        return _t(t) && Ot(t) == gt;
      }
      function Si(t, e, n, s) {
        var a = n.length, c = a, h = !s;
        if (t == null)
          return !c;
        for (t = st(t); a--; ) {
          var g = n[a];
          if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++a < c; ) {
          g = n[a];
          var m = g[0], A = t[m], S = g[1];
          if (h && g[2]) {
            if (A === r && !(m in t))
              return !1;
          } else {
            var P = new he();
            if (s)
              var F = s(A, S, m, t, e, P);
            if (!(F === r ? kn(S, A, N | I, s, P) : F))
              return !1;
          }
        }
        return !0;
      }
      function Aa(t) {
        if (!dt(t) || Ff(t))
          return !1;
        var e = Ie(t) ? Yc : Bu;
        return e.test(tn(t));
      }
      function jl(t) {
        return _t(t) && Lt(t) == ee;
      }
      function Xl(t) {
        return _t(t) && Ot(t) == ht;
      }
      function Ql(t) {
        return _t(t) && Fr(t.length) && !!ct[Lt(t)];
      }
      function Sa(t) {
        return typeof t == "function" ? t : t == null ? qt : typeof t == "object" ? H(t) ? Ea(t[0], t[1]) : Ta(t) : Yo(t);
      }
      function Pi(t) {
        if (!Wn(t))
          return el(t);
        var e = [];
        for (var n in st(t))
          it.call(t, n) && n != "constructor" && e.push(n);
        return e;
      }
      function Vl(t) {
        if (!dt(t))
          return Df(t);
        var e = Wn(t), n = [];
        for (var s in t)
          s == "constructor" && (e || !it.call(t, s)) || n.push(s);
        return n;
      }
      function Ti(t, e) {
        return t < e;
      }
      function Pa(t, e) {
        var n = -1, s = $t(t) ? M(t.length) : [];
        return Be(t, function(a, c, h) {
          s[++n] = e(a, c, h);
        }), s;
      }
      function Ta(t) {
        var e = qi(t);
        return e.length == 1 && e[0][2] ? uo(e[0][0], e[0][1]) : function(n) {
          return n === t || Si(n, t, e);
        };
      }
      function Ea(t, e) {
        return Hi(t) && oo(e) ? uo(we(t), e) : function(n) {
          var s = es(n, t);
          return s === r && s === e ? ns(n, t) : kn(e, s, N | I);
        };
      }
      function _r(t, e, n, s, a) {
        t !== e && Mi(e, function(c, h) {
          if (a || (a = new he()), dt(c))
            tf(t, e, h, n, _r, s, a);
          else {
            var g = s ? s(Ji(t, h), c, h + "", t, e, a) : r;
            g === r && (g = c), wi(t, h, g);
          }
        }, zt);
      }
      function tf(t, e, n, s, a, c, h) {
        var g = Ji(t, n), m = Ji(e, n), A = h.get(m);
        if (A) {
          wi(t, n, A);
          return;
        }
        var S = c ? c(g, m, n + "", t, e, h) : r, P = S === r;
        if (P) {
          var F = H(m), k = !F && qe(m), B = !F && !k && yn(m);
          S = m, F || k || B ? H(g) ? S = g : vt(g) ? S = Ut(g) : k ? (P = !1, S = $a(m, !0)) : B ? (P = !1, S = za(m, !0)) : S = [] : Un(m) || en(m) ? (S = g, en(g) ? S = Bo(g) : (!dt(g) || Ie(g)) && (S = ao(m))) : P = !1;
        }
        P && (h.set(m, S), a(S, m, s, c, h), h.delete(m)), wi(t, n, S);
      }
      function Ia(t, e) {
        var n = t.length;
        if (n)
          return e += e < 0 ? n : 0, Ee(e, n) ? t[e] : r;
      }
      function Oa(t, e, n) {
        e.length ? e = pt(e, function(c) {
          return H(c) ? function(h) {
            return Qe(h, c.length === 1 ? c[0] : c);
          } : c;
        }) : e = [qt];
        var s = -1;
        e = pt(e, Zt(W()));
        var a = Pa(t, function(c, h, g) {
          var m = pt(e, function(A) {
            return A(c);
          });
          return { criteria: m, index: ++s, value: c };
        });
        return Pc(a, function(c, h) {
          return df(c, h, n);
        });
      }
      function ef(t, e) {
        return Fa(t, e, function(n, s) {
          return ns(t, s);
        });
      }
      function Fa(t, e, n) {
        for (var s = -1, a = e.length, c = {}; ++s < a; ) {
          var h = e[s], g = Qe(t, h);
          n(g, h) && Dn(c, $e(h, t), g);
        }
        return c;
      }
      function nf(t) {
        return function(e) {
          return Qe(e, t);
        };
      }
      function Ei(t, e, n, s) {
        var a = s ? Sc : on, c = -1, h = e.length, g = t;
        for (t === e && (e = Ut(e)), n && (g = pt(t, Zt(n))); ++c < h; )
          for (var m = 0, A = e[c], S = n ? n(A) : A; (m = a(g, S, m, s)) > -1; )
            g !== t && ar.call(g, m, 1), ar.call(t, m, 1);
        return t;
      }
      function Ra(t, e) {
        for (var n = t ? e.length : 0, s = n - 1; n--; ) {
          var a = e[n];
          if (n == s || a !== c) {
            var c = a;
            Ee(a) ? ar.call(t, a, 1) : Ri(t, a);
          }
        }
        return t;
      }
      function Ii(t, e) {
        return t + cr(pa() * (e - t + 1));
      }
      function rf(t, e, n, s) {
        for (var a = -1, c = Ct(ur((e - t) / (n || 1)), 0), h = M(c); c--; )
          h[s ? c : ++a] = t, t += n;
        return h;
      }
      function Oi(t, e) {
        var n = "";
        if (!t || e < 1 || e > ge)
          return n;
        do
          e % 2 && (n += t), e = cr(e / 2), e && (t += t);
        while (e);
        return n;
      }
      function Z(t, e) {
        return Zi(co(t, e, qt), t + "");
      }
      function sf(t) {
        return _a(mn(t));
      }
      function af(t, e) {
        var n = mn(t);
        return Sr(n, Xe(e, 0, n.length));
      }
      function Dn(t, e, n, s) {
        if (!dt(t))
          return t;
        e = $e(e, t);
        for (var a = -1, c = e.length, h = c - 1, g = t; g != null && ++a < c; ) {
          var m = we(e[a]), A = n;
          if (m === "__proto__" || m === "constructor" || m === "prototype")
            return t;
          if (a != h) {
            var S = g[m];
            A = s ? s(S, m, g) : r, A === r && (A = dt(S) ? S : Ee(e[a + 1]) ? [] : {});
          }
          Fn(g, m, A), g = g[m];
        }
        return t;
      }
      var La = lr ? function(t, e) {
        return lr.set(t, e), t;
      } : qt, of = or ? function(t, e) {
        return or(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: is(e),
          writable: !0
        });
      } : qt;
      function uf(t) {
        return Sr(mn(t));
      }
      function oe(t, e, n) {
        var s = -1, a = t.length;
        e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var c = M(a); ++s < a; )
          c[s] = t[s + e];
        return c;
      }
      function cf(t, e) {
        var n;
        return Be(t, function(s, a, c) {
          return n = e(s, a, c), !n;
        }), !!n;
      }
      function vr(t, e, n) {
        var s = 0, a = t == null ? s : t.length;
        if (typeof e == "number" && e === e && a <= q) {
          for (; s < a; ) {
            var c = s + a >>> 1, h = t[c];
            h !== null && !jt(h) && (n ? h <= e : h < e) ? s = c + 1 : a = c;
          }
          return a;
        }
        return Fi(t, e, qt, n);
      }
      function Fi(t, e, n, s) {
        var a = 0, c = t == null ? 0 : t.length;
        if (c === 0)
          return 0;
        e = n(e);
        for (var h = e !== e, g = e === null, m = jt(e), A = e === r; a < c; ) {
          var S = cr((a + c) / 2), P = n(t[S]), F = P !== r, k = P === null, B = P === P, J = jt(P);
          if (h)
            var U = s || B;
          else
            A ? U = B && (s || F) : g ? U = B && F && (s || !k) : m ? U = B && F && !k && (s || !J) : k || J ? U = !1 : U = s ? P <= e : P < e;
          U ? a = S + 1 : c = S;
        }
        return It(c, z);
      }
      function ka(t, e) {
        for (var n = -1, s = t.length, a = 0, c = []; ++n < s; ) {
          var h = t[n], g = e ? e(h) : h;
          if (!n || !pe(g, m)) {
            var m = g;
            c[a++] = h === 0 ? 0 : h;
          }
        }
        return c;
      }
      function Da(t) {
        return typeof t == "number" ? t : jt(t) ? Ce : +t;
      }
      function Yt(t) {
        if (typeof t == "string")
          return t;
        if (H(t))
          return pt(t, Yt) + "";
        if (jt(t))
          return da ? da.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -Me ? "-0" : e;
      }
      function Ue(t, e, n) {
        var s = -1, a = jn, c = t.length, h = !0, g = [], m = g;
        if (n)
          h = !1, a = oi;
        else if (c >= l) {
          var A = e ? null : wf(t);
          if (A)
            return Qn(A);
          h = !1, a = Sn, m = new je();
        } else
          m = e ? [] : g;
        t:
          for (; ++s < c; ) {
            var S = t[s], P = e ? e(S) : S;
            if (S = n || S !== 0 ? S : 0, h && P === P) {
              for (var F = m.length; F--; )
                if (m[F] === P)
                  continue t;
              e && m.push(P), g.push(S);
            } else
              a(m, P, n) || (m !== g && m.push(P), g.push(S));
          }
        return g;
      }
      function Ri(t, e) {
        return e = $e(e, t), t = lo(t, e), t == null || delete t[we(ue(e))];
      }
      function Na(t, e, n, s) {
        return Dn(t, e, n(Qe(t, e)), s);
      }
      function yr(t, e, n, s) {
        for (var a = t.length, c = s ? a : -1; (s ? c-- : ++c < a) && e(t[c], c, t); )
          ;
        return n ? oe(t, s ? 0 : c, s ? c + 1 : a) : oe(t, s ? c + 1 : 0, s ? a : c);
      }
      function Wa(t, e) {
        var n = t;
        return n instanceof Q && (n = n.value()), ui(e, function(s, a) {
          return a.func.apply(a.thisArg, De([s], a.args));
        }, n);
      }
      function Li(t, e, n) {
        var s = t.length;
        if (s < 2)
          return s ? Ue(t[0]) : [];
        for (var a = -1, c = M(s); ++a < s; )
          for (var h = t[a], g = -1; ++g < s; )
            g != a && (c[a] = Rn(c[a] || h, t[g], e, n));
        return Ue(Et(c, 1), e, n);
      }
      function Ba(t, e, n) {
        for (var s = -1, a = t.length, c = e.length, h = {}; ++s < a; ) {
          var g = s < c ? e[s] : r;
          n(h, t[s], g);
        }
        return h;
      }
      function ki(t) {
        return vt(t) ? t : [];
      }
      function Di(t) {
        return typeof t == "function" ? t : qt;
      }
      function $e(t, e) {
        return H(t) ? t : Hi(t, e) ? [t] : go(rt(t));
      }
      var lf = Z;
      function ze(t, e, n) {
        var s = t.length;
        return n = n === r ? s : n, !e && n >= s ? t : oe(t, e, n);
      }
      var Ua = jc || function(t) {
        return Tt.clearTimeout(t);
      };
      function $a(t, e) {
        if (e)
          return t.slice();
        var n = t.length, s = ua ? ua(n) : new t.constructor(n);
        return t.copy(s), s;
      }
      function Ni(t) {
        var e = new t.constructor(t.byteLength);
        return new ir(e).set(new ir(t)), e;
      }
      function ff(t, e) {
        var n = e ? Ni(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength);
      }
      function hf(t) {
        var e = new t.constructor(t.source, xs.exec(t));
        return e.lastIndex = t.lastIndex, e;
      }
      function pf(t) {
        return On ? st(On.call(t)) : {};
      }
      function za(t, e) {
        var n = e ? Ni(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      }
      function qa(t, e) {
        if (t !== e) {
          var n = t !== r, s = t === null, a = t === t, c = jt(t), h = e !== r, g = e === null, m = e === e, A = jt(e);
          if (!g && !A && !c && t > e || c && h && m && !g && !A || s && h && m || !n && m || !a)
            return 1;
          if (!s && !c && !A && t < e || A && n && a && !s && !c || g && n && a || !h && a || !m)
            return -1;
        }
        return 0;
      }
      function df(t, e, n) {
        for (var s = -1, a = t.criteria, c = e.criteria, h = a.length, g = n.length; ++s < h; ) {
          var m = qa(a[s], c[s]);
          if (m) {
            if (s >= g)
              return m;
            var A = n[s];
            return m * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - e.index;
      }
      function Ga(t, e, n, s) {
        for (var a = -1, c = t.length, h = n.length, g = -1, m = e.length, A = Ct(c - h, 0), S = M(m + A), P = !s; ++g < m; )
          S[g] = e[g];
        for (; ++a < h; )
          (P || a < c) && (S[n[a]] = t[a]);
        for (; A--; )
          S[g++] = t[a++];
        return S;
      }
      function Ha(t, e, n, s) {
        for (var a = -1, c = t.length, h = -1, g = n.length, m = -1, A = e.length, S = Ct(c - g, 0), P = M(S + A), F = !s; ++a < S; )
          P[a] = t[a];
        for (var k = a; ++m < A; )
          P[k + m] = e[m];
        for (; ++h < g; )
          (F || a < c) && (P[k + n[h]] = t[a++]);
        return P;
      }
      function Ut(t, e) {
        var n = -1, s = t.length;
        for (e || (e = M(s)); ++n < s; )
          e[n] = t[n];
        return e;
      }
      function me(t, e, n, s) {
        var a = !n;
        n || (n = {});
        for (var c = -1, h = e.length; ++c < h; ) {
          var g = e[c], m = s ? s(n[g], t[g], g, n, t) : r;
          m === r && (m = t[g]), a ? Se(n, g, m) : Fn(n, g, m);
        }
        return n;
      }
      function gf(t, e) {
        return me(t, Gi(t), e);
      }
      function _f(t, e) {
        return me(t, io(t), e);
      }
      function mr(t, e) {
        return function(n, s) {
          var a = H(n) ? wc : Nl, c = e ? e() : {};
          return a(n, t, W(s, 2), c);
        };
      }
      function gn(t) {
        return Z(function(e, n) {
          var s = -1, a = n.length, c = a > 1 ? n[a - 1] : r, h = a > 2 ? n[2] : r;
          for (c = t.length > 3 && typeof c == "function" ? (a--, c) : r, h && kt(n[0], n[1], h) && (c = a < 3 ? r : c, a = 1), e = st(e); ++s < a; ) {
            var g = n[s];
            g && t(e, g, s, c);
          }
          return e;
        });
      }
      function Ka(t, e) {
        return function(n, s) {
          if (n == null)
            return n;
          if (!$t(n))
            return t(n, s);
          for (var a = n.length, c = e ? a : -1, h = st(n); (e ? c-- : ++c < a) && s(h[c], c, h) !== !1; )
            ;
          return n;
        };
      }
      function Ja(t) {
        return function(e, n, s) {
          for (var a = -1, c = st(e), h = s(e), g = h.length; g--; ) {
            var m = h[t ? g : ++a];
            if (n(c[m], m, c) === !1)
              break;
          }
          return e;
        };
      }
      function vf(t, e, n) {
        var s = e & O, a = Nn(t);
        function c() {
          var h = this && this !== Tt && this instanceof c ? a : t;
          return h.apply(s ? n : this, arguments);
        }
        return c;
      }
      function Za(t) {
        return function(e) {
          e = rt(e);
          var n = un(e) ? fe(e) : r, s = n ? n[0] : e.charAt(0), a = n ? ze(n, 1).join("") : e.slice(1);
          return s[t]() + a;
        };
      }
      function _n(t) {
        return function(e) {
          return ui(Jo(Ko(e).replace(ac, "")), t, "");
        };
      }
      function Nn(t) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
            case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var n = dn(t.prototype), s = t.apply(n, e);
          return dt(s) ? s : n;
        };
      }
      function yf(t, e, n) {
        var s = Nn(t);
        function a() {
          for (var c = arguments.length, h = M(c), g = c, m = vn(a); g--; )
            h[g] = arguments[g];
          var A = c < 3 && h[0] !== m && h[c - 1] !== m ? [] : Ne(h, m);
          if (c -= A.length, c < n)
            return Va(
              t,
              e,
              wr,
              a.placeholder,
              r,
              h,
              A,
              r,
              r,
              n - c
            );
          var S = this && this !== Tt && this instanceof a ? s : t;
          return Jt(S, this, h);
        }
        return a;
      }
      function Ya(t) {
        return function(e, n, s) {
          var a = st(e);
          if (!$t(e)) {
            var c = W(n, 3);
            e = At(e), n = function(g) {
              return c(a[g], g, a);
            };
          }
          var h = t(e, n, s);
          return h > -1 ? a[c ? e[h] : h] : r;
        };
      }
      function ja(t) {
        return Te(function(e) {
          var n = e.length, s = n, a = se.prototype.thru;
          for (t && e.reverse(); s--; ) {
            var c = e[s];
            if (typeof c != "function")
              throw new ie(p);
            if (a && !h && xr(c) == "wrapper")
              var h = new se([], !0);
          }
          for (s = h ? s : n; ++s < n; ) {
            c = e[s];
            var g = xr(c), m = g == "wrapper" ? zi(c) : r;
            m && Ki(m[0]) && m[1] == (Pt | X | bt | Gt) && !m[4].length && m[9] == 1 ? h = h[xr(m[0])].apply(h, m[3]) : h = c.length == 1 && Ki(c) ? h[g]() : h.thru(c);
          }
          return function() {
            var A = arguments, S = A[0];
            if (h && A.length == 1 && H(S))
              return h.plant(S).value();
            for (var P = 0, F = n ? e[P].apply(this, A) : S; ++P < n; )
              F = e[P].call(this, F);
            return F;
          };
        });
      }
      function wr(t, e, n, s, a, c, h, g, m, A) {
        var S = e & Pt, P = e & O, F = e & $, k = e & (X | nt), B = e & te, J = F ? r : Nn(t);
        function U() {
          for (var Y = arguments.length, V = M(Y), Xt = Y; Xt--; )
            V[Xt] = arguments[Xt];
          if (k)
            var Dt = vn(U), Qt = Ec(V, Dt);
          if (s && (V = Ga(V, s, a, k)), c && (V = Ha(V, c, h, k)), Y -= Qt, k && Y < A) {
            var yt = Ne(V, Dt);
            return Va(
              t,
              e,
              wr,
              U.placeholder,
              n,
              V,
              yt,
              g,
              m,
              A - Y
            );
          }
          var de = P ? n : this, Fe = F ? de[t] : t;
          return Y = V.length, g ? V = Wf(V, g) : B && Y > 1 && V.reverse(), S && m < Y && (V.length = m), this && this !== Tt && this instanceof U && (Fe = J || Nn(Fe)), Fe.apply(de, V);
        }
        return U;
      }
      function Xa(t, e) {
        return function(n, s) {
          return Hl(n, t, e(s), {});
        };
      }
      function br(t, e) {
        return function(n, s) {
          var a;
          if (n === r && s === r)
            return e;
          if (n !== r && (a = n), s !== r) {
            if (a === r)
              return s;
            typeof n == "string" || typeof s == "string" ? (n = Yt(n), s = Yt(s)) : (n = Da(n), s = Da(s)), a = t(n, s);
          }
          return a;
        };
      }
      function Wi(t) {
        return Te(function(e) {
          return e = pt(e, Zt(W())), Z(function(n) {
            var s = this;
            return t(e, function(a) {
              return Jt(a, s, n);
            });
          });
        });
      }
      function Mr(t, e) {
        e = e === r ? " " : Yt(e);
        var n = e.length;
        if (n < 2)
          return n ? Oi(e, t) : e;
        var s = Oi(e, ur(t / cn(e)));
        return un(e) ? ze(fe(s), 0, t).join("") : s.slice(0, t);
      }
      function mf(t, e, n, s) {
        var a = e & O, c = Nn(t);
        function h() {
          for (var g = -1, m = arguments.length, A = -1, S = s.length, P = M(S + m), F = this && this !== Tt && this instanceof h ? c : t; ++A < S; )
            P[A] = s[A];
          for (; m--; )
            P[A++] = arguments[++g];
          return Jt(F, a ? n : this, P);
        }
        return h;
      }
      function Qa(t) {
        return function(e, n, s) {
          return s && typeof s != "number" && kt(e, n, s) && (n = s = r), e = Oe(e), n === r ? (n = e, e = 0) : n = Oe(n), s = s === r ? e < n ? 1 : -1 : Oe(s), rf(e, n, s, t);
        };
      }
      function Cr(t) {
        return function(e, n) {
          return typeof e == "string" && typeof n == "string" || (e = ce(e), n = ce(n)), t(e, n);
        };
      }
      function Va(t, e, n, s, a, c, h, g, m, A) {
        var S = e & X, P = S ? h : r, F = S ? r : h, k = S ? c : r, B = S ? r : c;
        e |= S ? bt : St, e &= ~(S ? St : bt), e & j || (e &= ~(O | $));
        var J = [
          t,
          e,
          a,
          k,
          P,
          B,
          F,
          g,
          m,
          A
        ], U = n.apply(r, J);
        return Ki(t) && fo(U, J), U.placeholder = s, ho(U, t, e);
      }
      function Bi(t) {
        var e = Mt[t];
        return function(n, s) {
          if (n = ce(n), s = s == null ? 0 : It(K(s), 292), s && ha(n)) {
            var a = (rt(n) + "e").split("e"), c = e(a[0] + "e" + (+a[1] + s));
            return a = (rt(c) + "e").split("e"), +(a[0] + "e" + (+a[1] - s));
          }
          return e(n);
        };
      }
      var wf = hn && 1 / Qn(new hn([, -0]))[1] == Me ? function(t) {
        return new hn(t);
      } : os;
      function to(t) {
        return function(e) {
          var n = Ot(e);
          return n == gt ? gi(e) : n == ht ? Dc(e) : Tc(e, t(e));
        };
      }
      function Pe(t, e, n, s, a, c, h, g) {
        var m = e & $;
        if (!m && typeof t != "function")
          throw new ie(p);
        var A = s ? s.length : 0;
        if (A || (e &= ~(bt | St), s = a = r), h = h === r ? h : Ct(K(h), 0), g = g === r ? g : K(g), A -= a ? a.length : 0, e & St) {
          var S = s, P = a;
          s = a = r;
        }
        var F = m ? r : zi(t), k = [
          t,
          e,
          n,
          s,
          a,
          S,
          P,
          c,
          h,
          g
        ];
        if (F && kf(k, F), t = k[0], e = k[1], n = k[2], s = k[3], a = k[4], g = k[9] = k[9] === r ? m ? 0 : t.length : Ct(k[9] - A, 0), !g && e & (X | nt) && (e &= ~(X | nt)), !e || e == O)
          var B = vf(t, e, n);
        else
          e == X || e == nt ? B = yf(t, e, g) : (e == bt || e == (O | bt)) && !a.length ? B = mf(t, e, n, s) : B = wr.apply(r, k);
        var J = F ? La : fo;
        return ho(J(B, k), t, e);
      }
      function eo(t, e, n, s) {
        return t === r || pe(t, fn[n]) && !it.call(s, n) ? e : t;
      }
      function no(t, e, n, s, a, c) {
        return dt(t) && dt(e) && (c.set(e, t), _r(t, e, r, no, c), c.delete(e)), t;
      }
      function bf(t) {
        return Un(t) ? r : t;
      }
      function ro(t, e, n, s, a, c) {
        var h = n & N, g = t.length, m = e.length;
        if (g != m && !(h && m > g))
          return !1;
        var A = c.get(t), S = c.get(e);
        if (A && S)
          return A == e && S == t;
        var P = -1, F = !0, k = n & I ? new je() : r;
        for (c.set(t, e), c.set(e, t); ++P < g; ) {
          var B = t[P], J = e[P];
          if (s)
            var U = h ? s(J, B, P, e, t, c) : s(B, J, P, t, e, c);
          if (U !== r) {
            if (U)
              continue;
            F = !1;
            break;
          }
          if (k) {
            if (!ci(e, function(Y, V) {
              if (!Sn(k, V) && (B === Y || a(B, Y, n, s, c)))
                return k.push(V);
            })) {
              F = !1;
              break;
            }
          } else if (!(B === J || a(B, J, n, s, c))) {
            F = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), F;
      }
      function Mf(t, e, n, s, a, c, h) {
        switch (n) {
          case sn:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            t = t.buffer, e = e.buffer;
          case An:
            return !(t.byteLength != e.byteLength || !c(new ir(t), new ir(e)));
          case ut:
          case mt:
          case Rt:
            return pe(+t, +e);
          case Ft:
            return t.name == e.name && t.message == e.message;
          case ee:
          case ve:
            return t == e + "";
          case gt:
            var g = gi;
          case ht:
            var m = s & N;
            if (g || (g = Qn), t.size != e.size && !m)
              return !1;
            var A = h.get(t);
            if (A)
              return A == e;
            s |= I, h.set(t, e);
            var S = ro(g(t), g(e), s, a, c, h);
            return h.delete(t), S;
          case Kn:
            if (On)
              return On.call(t) == On.call(e);
        }
        return !1;
      }
      function Cf(t, e, n, s, a, c) {
        var h = n & N, g = Ui(t), m = g.length, A = Ui(e), S = A.length;
        if (m != S && !h)
          return !1;
        for (var P = m; P--; ) {
          var F = g[P];
          if (!(h ? F in e : it.call(e, F)))
            return !1;
        }
        var k = c.get(t), B = c.get(e);
        if (k && B)
          return k == e && B == t;
        var J = !0;
        c.set(t, e), c.set(e, t);
        for (var U = h; ++P < m; ) {
          F = g[P];
          var Y = t[F], V = e[F];
          if (s)
            var Xt = h ? s(V, Y, F, e, t, c) : s(Y, V, F, t, e, c);
          if (!(Xt === r ? Y === V || a(Y, V, n, s, c) : Xt)) {
            J = !1;
            break;
          }
          U || (U = F == "constructor");
        }
        if (J && !U) {
          var Dt = t.constructor, Qt = e.constructor;
          Dt != Qt && "constructor" in t && "constructor" in e && !(typeof Dt == "function" && Dt instanceof Dt && typeof Qt == "function" && Qt instanceof Qt) && (J = !1);
        }
        return c.delete(t), c.delete(e), J;
      }
      function Te(t) {
        return Zi(co(t, r, mo), t + "");
      }
      function Ui(t) {
        return Ca(t, At, Gi);
      }
      function $i(t) {
        return Ca(t, zt, io);
      }
      var zi = lr ? function(t) {
        return lr.get(t);
      } : os;
      function xr(t) {
        for (var e = t.name + "", n = pn[e], s = it.call(pn, e) ? n.length : 0; s--; ) {
          var a = n[s], c = a.func;
          if (c == null || c == t)
            return a.name;
        }
        return e;
      }
      function vn(t) {
        var e = it.call(u, "placeholder") ? u : t;
        return e.placeholder;
      }
      function W() {
        var t = u.iteratee || ss;
        return t = t === ss ? Sa : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ar(t, e) {
        var n = t.__data__;
        return Of(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
      }
      function qi(t) {
        for (var e = At(t), n = e.length; n--; ) {
          var s = e[n], a = t[s];
          e[n] = [s, a, oo(a)];
        }
        return e;
      }
      function Ve(t, e) {
        var n = Rc(t, e);
        return Aa(n) ? n : r;
      }
      function xf(t) {
        var e = it.call(t, Ze), n = t[Ze];
        try {
          t[Ze] = r;
          var s = !0;
        } catch {
        }
        var a = nr.call(t);
        return s && (e ? t[Ze] = n : delete t[Ze]), a;
      }
      var Gi = vi ? function(t) {
        return t == null ? [] : (t = st(t), ke(vi(t), function(e) {
          return la.call(t, e);
        }));
      } : us, io = vi ? function(t) {
        for (var e = []; t; )
          De(e, Gi(t)), t = sr(t);
        return e;
      } : us, Ot = Lt;
      (yi && Ot(new yi(new ArrayBuffer(1))) != sn || Tn && Ot(new Tn()) != gt || mi && Ot(mi.resolve()) != Bt || hn && Ot(new hn()) != ht || En && Ot(new En()) != xn) && (Ot = function(t) {
        var e = Lt(t), n = e == wt ? t.constructor : r, s = n ? tn(n) : "";
        if (s)
          switch (s) {
            case sl:
              return sn;
            case al:
              return gt;
            case ol:
              return Bt;
            case ul:
              return ht;
            case cl:
              return xn;
          }
        return e;
      });
      function Af(t, e, n) {
        for (var s = -1, a = n.length; ++s < a; ) {
          var c = n[s], h = c.size;
          switch (c.type) {
            case "drop":
              t += h;
              break;
            case "dropRight":
              e -= h;
              break;
            case "take":
              e = It(e, t + h);
              break;
            case "takeRight":
              t = Ct(t, e - h);
              break;
          }
        }
        return { start: t, end: e };
      }
      function Sf(t) {
        var e = t.match(Ou);
        return e ? e[1].split(Fu) : [];
      }
      function so(t, e, n) {
        e = $e(e, t);
        for (var s = -1, a = e.length, c = !1; ++s < a; ) {
          var h = we(e[s]);
          if (!(c = t != null && n(t, h)))
            break;
          t = t[h];
        }
        return c || ++s != a ? c : (a = t == null ? 0 : t.length, !!a && Fr(a) && Ee(h, a) && (H(t) || en(t)));
      }
      function Pf(t) {
        var e = t.length, n = new t.constructor(e);
        return e && typeof t[0] == "string" && it.call(t, "index") && (n.index = t.index, n.input = t.input), n;
      }
      function ao(t) {
        return typeof t.constructor == "function" && !Wn(t) ? dn(sr(t)) : {};
      }
      function Tf(t, e, n) {
        var s = t.constructor;
        switch (e) {
          case An:
            return Ni(t);
          case ut:
          case mt:
            return new s(+t);
          case sn:
            return ff(t, n);
          case qr:
          case Gr:
          case Hr:
          case Kr:
          case Jr:
          case Zr:
          case Yr:
          case jr:
          case Xr:
            return za(t, n);
          case gt:
            return new s();
          case Rt:
          case ve:
            return new s(t);
          case ee:
            return hf(t);
          case ht:
            return new s();
          case Kn:
            return pf(t);
        }
      }
      function Ef(t, e) {
        var n = e.length;
        if (!n)
          return t;
        var s = n - 1;
        return e[s] = (n > 1 ? "& " : "") + e[s], e = e.join(n > 2 ? ", " : " "), t.replace(Iu, `{
/* [wrapped with ` + e + `] */
`);
      }
      function If(t) {
        return H(t) || en(t) || !!(fa && t && t[fa]);
      }
      function Ee(t, e) {
        var n = typeof t;
        return e = e ?? ge, !!e && (n == "number" || n != "symbol" && $u.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }
      function kt(t, e, n) {
        if (!dt(n))
          return !1;
        var s = typeof e;
        return (s == "number" ? $t(n) && Ee(e, n.length) : s == "string" && e in n) ? pe(n[e], t) : !1;
      }
      function Hi(t, e) {
        if (H(t))
          return !1;
        var n = typeof t;
        return n == "number" || n == "symbol" || n == "boolean" || t == null || jt(t) ? !0 : Su.test(t) || !Au.test(t) || e != null && t in st(e);
      }
      function Of(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ki(t) {
        var e = xr(t), n = u[e];
        if (typeof n != "function" || !(e in Q.prototype))
          return !1;
        if (t === n)
          return !0;
        var s = zi(n);
        return !!s && t === s[0];
      }
      function Ff(t) {
        return !!oa && oa in t;
      }
      var Rf = tr ? Ie : cs;
      function Wn(t) {
        var e = t && t.constructor, n = typeof e == "function" && e.prototype || fn;
        return t === n;
      }
      function oo(t) {
        return t === t && !dt(t);
      }
      function uo(t, e) {
        return function(n) {
          return n == null ? !1 : n[t] === e && (e !== r || t in st(n));
        };
      }
      function Lf(t) {
        var e = Ir(t, function(s) {
          return n.size === b && n.clear(), s;
        }), n = e.cache;
        return e;
      }
      function kf(t, e) {
        var n = t[1], s = e[1], a = n | s, c = a < (O | $ | Pt), h = s == Pt && n == X || s == Pt && n == Gt && t[7].length <= e[8] || s == (Pt | Gt) && e[7].length <= e[8] && n == X;
        if (!(c || h))
          return t;
        s & O && (t[2] = e[2], a |= n & O ? 0 : j);
        var g = e[3];
        if (g) {
          var m = t[3];
          t[3] = m ? Ga(m, g, e[4]) : g, t[4] = m ? Ne(t[3], C) : e[4];
        }
        return g = e[5], g && (m = t[5], t[5] = m ? Ha(m, g, e[6]) : g, t[6] = m ? Ne(t[5], C) : e[6]), g = e[7], g && (t[7] = g), s & Pt && (t[8] = t[8] == null ? e[8] : It(t[8], e[8])), t[9] == null && (t[9] = e[9]), t[0] = e[0], t[1] = a, t;
      }
      function Df(t) {
        var e = [];
        if (t != null)
          for (var n in st(t))
            e.push(n);
        return e;
      }
      function Nf(t) {
        return nr.call(t);
      }
      function co(t, e, n) {
        return e = Ct(e === r ? t.length - 1 : e, 0), function() {
          for (var s = arguments, a = -1, c = Ct(s.length - e, 0), h = M(c); ++a < c; )
            h[a] = s[e + a];
          a = -1;
          for (var g = M(e + 1); ++a < e; )
            g[a] = s[a];
          return g[e] = n(h), Jt(t, this, g);
        };
      }
      function lo(t, e) {
        return e.length < 2 ? t : Qe(t, oe(e, 0, -1));
      }
      function Wf(t, e) {
        for (var n = t.length, s = It(e.length, n), a = Ut(t); s--; ) {
          var c = e[s];
          t[s] = Ee(c, n) ? a[c] : r;
        }
        return t;
      }
      function Ji(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
          return t[e];
      }
      var fo = po(La), Bn = Qc || function(t, e) {
        return Tt.setTimeout(t, e);
      }, Zi = po(of);
      function ho(t, e, n) {
        var s = e + "";
        return Zi(t, Ef(s, Bf(Sf(s), n)));
      }
      function po(t) {
        var e = 0, n = 0;
        return function() {
          var s = nl(), a = $r - (s - n);
          if (n = s, a > 0) {
            if (++e >= qn)
              return arguments[0];
          } else
            e = 0;
          return t.apply(r, arguments);
        };
      }
      function Sr(t, e) {
        var n = -1, s = t.length, a = s - 1;
        for (e = e === r ? s : e; ++n < e; ) {
          var c = Ii(n, a), h = t[c];
          t[c] = t[n], t[n] = h;
        }
        return t.length = e, t;
      }
      var go = Lf(function(t) {
        var e = [];
        return t.charCodeAt(0) === 46 && e.push(""), t.replace(Pu, function(n, s, a, c) {
          e.push(a ? c.replace(ku, "$1") : s || n);
        }), e;
      });
      function we(t) {
        if (typeof t == "string" || jt(t))
          return t;
        var e = t + "";
        return e == "0" && 1 / t == -Me ? "-0" : e;
      }
      function tn(t) {
        if (t != null) {
          try {
            return er.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Bf(t, e) {
        return re(lt, function(n) {
          var s = "_." + n[0];
          e & n[1] && !jn(t, s) && t.push(s);
        }), t.sort();
      }
      function _o(t) {
        if (t instanceof Q)
          return t.clone();
        var e = new se(t.__wrapped__, t.__chain__);
        return e.__actions__ = Ut(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
      }
      function Uf(t, e, n) {
        (n ? kt(t, e, n) : e === r) ? e = 1 : e = Ct(K(e), 0);
        var s = t == null ? 0 : t.length;
        if (!s || e < 1)
          return [];
        for (var a = 0, c = 0, h = M(ur(s / e)); a < s; )
          h[c++] = oe(t, a, a += e);
        return h;
      }
      function $f(t) {
        for (var e = -1, n = t == null ? 0 : t.length, s = 0, a = []; ++e < n; ) {
          var c = t[e];
          c && (a[s++] = c);
        }
        return a;
      }
      function zf() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var e = M(t - 1), n = arguments[0], s = t; s--; )
          e[s - 1] = arguments[s];
        return De(H(n) ? Ut(n) : [n], Et(e, 1));
      }
      var qf = Z(function(t, e) {
        return vt(t) ? Rn(t, Et(e, 1, vt, !0)) : [];
      }), Gf = Z(function(t, e) {
        var n = ue(e);
        return vt(n) && (n = r), vt(t) ? Rn(t, Et(e, 1, vt, !0), W(n, 2)) : [];
      }), Hf = Z(function(t, e) {
        var n = ue(e);
        return vt(n) && (n = r), vt(t) ? Rn(t, Et(e, 1, vt, !0), r, n) : [];
      });
      function Kf(t, e, n) {
        var s = t == null ? 0 : t.length;
        return s ? (e = n || e === r ? 1 : K(e), oe(t, e < 0 ? 0 : e, s)) : [];
      }
      function Jf(t, e, n) {
        var s = t == null ? 0 : t.length;
        return s ? (e = n || e === r ? 1 : K(e), e = s - e, oe(t, 0, e < 0 ? 0 : e)) : [];
      }
      function Zf(t, e) {
        return t && t.length ? yr(t, W(e, 3), !0, !0) : [];
      }
      function Yf(t, e) {
        return t && t.length ? yr(t, W(e, 3), !0) : [];
      }
      function jf(t, e, n, s) {
        var a = t == null ? 0 : t.length;
        return a ? (n && typeof n != "number" && kt(t, e, n) && (n = 0, s = a), $l(t, e, n, s)) : [];
      }
      function vo(t, e, n) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = n == null ? 0 : K(n);
        return a < 0 && (a = Ct(s + a, 0)), Xn(t, W(e, 3), a);
      }
      function yo(t, e, n) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s - 1;
        return n !== r && (a = K(n), a = n < 0 ? Ct(s + a, 0) : It(a, s - 1)), Xn(t, W(e, 3), a, !0);
      }
      function mo(t) {
        var e = t == null ? 0 : t.length;
        return e ? Et(t, 1) : [];
      }
      function Xf(t) {
        var e = t == null ? 0 : t.length;
        return e ? Et(t, Me) : [];
      }
      function Qf(t, e) {
        var n = t == null ? 0 : t.length;
        return n ? (e = e === r ? 1 : K(e), Et(t, e)) : [];
      }
      function Vf(t) {
        for (var e = -1, n = t == null ? 0 : t.length, s = {}; ++e < n; ) {
          var a = t[e];
          s[a[0]] = a[1];
        }
        return s;
      }
      function wo(t) {
        return t && t.length ? t[0] : r;
      }
      function th(t, e, n) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = n == null ? 0 : K(n);
        return a < 0 && (a = Ct(s + a, 0)), on(t, e, a);
      }
      function eh(t) {
        var e = t == null ? 0 : t.length;
        return e ? oe(t, 0, -1) : [];
      }
      var nh = Z(function(t) {
        var e = pt(t, ki);
        return e.length && e[0] === t[0] ? Ai(e) : [];
      }), rh = Z(function(t) {
        var e = ue(t), n = pt(t, ki);
        return e === ue(n) ? e = r : n.pop(), n.length && n[0] === t[0] ? Ai(n, W(e, 2)) : [];
      }), ih = Z(function(t) {
        var e = ue(t), n = pt(t, ki);
        return e = typeof e == "function" ? e : r, e && n.pop(), n.length && n[0] === t[0] ? Ai(n, r, e) : [];
      });
      function sh(t, e) {
        return t == null ? "" : tl.call(t, e);
      }
      function ue(t) {
        var e = t == null ? 0 : t.length;
        return e ? t[e - 1] : r;
      }
      function ah(t, e, n) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s;
        return n !== r && (a = K(n), a = a < 0 ? Ct(s + a, 0) : It(a, s - 1)), e === e ? Wc(t, e, a) : Xn(t, Vs, a, !0);
      }
      function oh(t, e) {
        return t && t.length ? Ia(t, K(e)) : r;
      }
      var uh = Z(bo);
      function bo(t, e) {
        return t && t.length && e && e.length ? Ei(t, e) : t;
      }
      function ch(t, e, n) {
        return t && t.length && e && e.length ? Ei(t, e, W(n, 2)) : t;
      }
      function lh(t, e, n) {
        return t && t.length && e && e.length ? Ei(t, e, r, n) : t;
      }
      var fh = Te(function(t, e) {
        var n = t == null ? 0 : t.length, s = bi(t, e);
        return Ra(t, pt(e, function(a) {
          return Ee(a, n) ? +a : a;
        }).sort(qa)), s;
      });
      function hh(t, e) {
        var n = [];
        if (!(t && t.length))
          return n;
        var s = -1, a = [], c = t.length;
        for (e = W(e, 3); ++s < c; ) {
          var h = t[s];
          e(h, s, t) && (n.push(h), a.push(s));
        }
        return Ra(t, a), n;
      }
      function Yi(t) {
        return t == null ? t : il.call(t);
      }
      function ph(t, e, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n && typeof n != "number" && kt(t, e, n) ? (e = 0, n = s) : (e = e == null ? 0 : K(e), n = n === r ? s : K(n)), oe(t, e, n)) : [];
      }
      function dh(t, e) {
        return vr(t, e);
      }
      function gh(t, e, n) {
        return Fi(t, e, W(n, 2));
      }
      function _h(t, e) {
        var n = t == null ? 0 : t.length;
        if (n) {
          var s = vr(t, e);
          if (s < n && pe(t[s], e))
            return s;
        }
        return -1;
      }
      function vh(t, e) {
        return vr(t, e, !0);
      }
      function yh(t, e, n) {
        return Fi(t, e, W(n, 2), !0);
      }
      function mh(t, e) {
        var n = t == null ? 0 : t.length;
        if (n) {
          var s = vr(t, e, !0) - 1;
          if (pe(t[s], e))
            return s;
        }
        return -1;
      }
      function wh(t) {
        return t && t.length ? ka(t) : [];
      }
      function bh(t, e) {
        return t && t.length ? ka(t, W(e, 2)) : [];
      }
      function Mh(t) {
        var e = t == null ? 0 : t.length;
        return e ? oe(t, 1, e) : [];
      }
      function Ch(t, e, n) {
        return t && t.length ? (e = n || e === r ? 1 : K(e), oe(t, 0, e < 0 ? 0 : e)) : [];
      }
      function xh(t, e, n) {
        var s = t == null ? 0 : t.length;
        return s ? (e = n || e === r ? 1 : K(e), e = s - e, oe(t, e < 0 ? 0 : e, s)) : [];
      }
      function Ah(t, e) {
        return t && t.length ? yr(t, W(e, 3), !1, !0) : [];
      }
      function Sh(t, e) {
        return t && t.length ? yr(t, W(e, 3)) : [];
      }
      var Ph = Z(function(t) {
        return Ue(Et(t, 1, vt, !0));
      }), Th = Z(function(t) {
        var e = ue(t);
        return vt(e) && (e = r), Ue(Et(t, 1, vt, !0), W(e, 2));
      }), Eh = Z(function(t) {
        var e = ue(t);
        return e = typeof e == "function" ? e : r, Ue(Et(t, 1, vt, !0), r, e);
      });
      function Ih(t) {
        return t && t.length ? Ue(t) : [];
      }
      function Oh(t, e) {
        return t && t.length ? Ue(t, W(e, 2)) : [];
      }
      function Fh(t, e) {
        return e = typeof e == "function" ? e : r, t && t.length ? Ue(t, r, e) : [];
      }
      function ji(t) {
        if (!(t && t.length))
          return [];
        var e = 0;
        return t = ke(t, function(n) {
          if (vt(n))
            return e = Ct(n.length, e), !0;
        }), pi(e, function(n) {
          return pt(t, li(n));
        });
      }
      function Mo(t, e) {
        if (!(t && t.length))
          return [];
        var n = ji(t);
        return e == null ? n : pt(n, function(s) {
          return Jt(e, r, s);
        });
      }
      var Rh = Z(function(t, e) {
        return vt(t) ? Rn(t, e) : [];
      }), Lh = Z(function(t) {
        return Li(ke(t, vt));
      }), kh = Z(function(t) {
        var e = ue(t);
        return vt(e) && (e = r), Li(ke(t, vt), W(e, 2));
      }), Dh = Z(function(t) {
        var e = ue(t);
        return e = typeof e == "function" ? e : r, Li(ke(t, vt), r, e);
      }), Nh = Z(ji);
      function Wh(t, e) {
        return Ba(t || [], e || [], Fn);
      }
      function Bh(t, e) {
        return Ba(t || [], e || [], Dn);
      }
      var Uh = Z(function(t) {
        var e = t.length, n = e > 1 ? t[e - 1] : r;
        return n = typeof n == "function" ? (t.pop(), n) : r, Mo(t, n);
      });
      function Co(t) {
        var e = u(t);
        return e.__chain__ = !0, e;
      }
      function $h(t, e) {
        return e(t), t;
      }
      function Pr(t, e) {
        return e(t);
      }
      var zh = Te(function(t) {
        var e = t.length, n = e ? t[0] : 0, s = this.__wrapped__, a = function(c) {
          return bi(c, t);
        };
        return e > 1 || this.__actions__.length || !(s instanceof Q) || !Ee(n) ? this.thru(a) : (s = s.slice(n, +n + (e ? 1 : 0)), s.__actions__.push({
          func: Pr,
          args: [a],
          thisArg: r
        }), new se(s, this.__chain__).thru(function(c) {
          return e && !c.length && c.push(r), c;
        }));
      });
      function qh() {
        return Co(this);
      }
      function Gh() {
        return new se(this.value(), this.__chain__);
      }
      function Hh() {
        this.__values__ === r && (this.__values__ = No(this.value()));
        var t = this.__index__ >= this.__values__.length, e = t ? r : this.__values__[this.__index__++];
        return { done: t, value: e };
      }
      function Kh() {
        return this;
      }
      function Jh(t) {
        for (var e, n = this; n instanceof hr; ) {
          var s = _o(n);
          s.__index__ = 0, s.__values__ = r, e ? a.__wrapped__ = s : e = s;
          var a = s;
          n = n.__wrapped__;
        }
        return a.__wrapped__ = t, e;
      }
      function Zh() {
        var t = this.__wrapped__;
        if (t instanceof Q) {
          var e = t;
          return this.__actions__.length && (e = new Q(this)), e = e.reverse(), e.__actions__.push({
            func: Pr,
            args: [Yi],
            thisArg: r
          }), new se(e, this.__chain__);
        }
        return this.thru(Yi);
      }
      function Yh() {
        return Wa(this.__wrapped__, this.__actions__);
      }
      var jh = mr(function(t, e, n) {
        it.call(t, n) ? ++t[n] : Se(t, n, 1);
      });
      function Xh(t, e, n) {
        var s = H(t) ? Xs : Ul;
        return n && kt(t, e, n) && (e = r), s(t, W(e, 3));
      }
      function Qh(t, e) {
        var n = H(t) ? ke : ba;
        return n(t, W(e, 3));
      }
      var Vh = Ya(vo), tp = Ya(yo);
      function ep(t, e) {
        return Et(Tr(t, e), 1);
      }
      function np(t, e) {
        return Et(Tr(t, e), Me);
      }
      function rp(t, e, n) {
        return n = n === r ? 1 : K(n), Et(Tr(t, e), n);
      }
      function xo(t, e) {
        var n = H(t) ? re : Be;
        return n(t, W(e, 3));
      }
      function Ao(t, e) {
        var n = H(t) ? bc : wa;
        return n(t, W(e, 3));
      }
      var ip = mr(function(t, e, n) {
        it.call(t, n) ? t[n].push(e) : Se(t, n, [e]);
      });
      function sp(t, e, n, s) {
        t = $t(t) ? t : mn(t), n = n && !s ? K(n) : 0;
        var a = t.length;
        return n < 0 && (n = Ct(a + n, 0)), Rr(t) ? n <= a && t.indexOf(e, n) > -1 : !!a && on(t, e, n) > -1;
      }
      var ap = Z(function(t, e, n) {
        var s = -1, a = typeof e == "function", c = $t(t) ? M(t.length) : [];
        return Be(t, function(h) {
          c[++s] = a ? Jt(e, h, n) : Ln(h, e, n);
        }), c;
      }), op = mr(function(t, e, n) {
        Se(t, n, e);
      });
      function Tr(t, e) {
        var n = H(t) ? pt : Pa;
        return n(t, W(e, 3));
      }
      function up(t, e, n, s) {
        return t == null ? [] : (H(e) || (e = e == null ? [] : [e]), n = s ? r : n, H(n) || (n = n == null ? [] : [n]), Oa(t, e, n));
      }
      var cp = mr(function(t, e, n) {
        t[n ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function lp(t, e, n) {
        var s = H(t) ? ui : ea, a = arguments.length < 3;
        return s(t, W(e, 4), n, a, Be);
      }
      function fp(t, e, n) {
        var s = H(t) ? Mc : ea, a = arguments.length < 3;
        return s(t, W(e, 4), n, a, wa);
      }
      function hp(t, e) {
        var n = H(t) ? ke : ba;
        return n(t, Or(W(e, 3)));
      }
      function pp(t) {
        var e = H(t) ? _a : sf;
        return e(t);
      }
      function dp(t, e, n) {
        (n ? kt(t, e, n) : e === r) ? e = 1 : e = K(e);
        var s = H(t) ? kl : af;
        return s(t, e);
      }
      function gp(t) {
        var e = H(t) ? Dl : uf;
        return e(t);
      }
      function _p(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Rr(t) ? cn(t) : t.length;
        var e = Ot(t);
        return e == gt || e == ht ? t.size : Pi(t).length;
      }
      function vp(t, e, n) {
        var s = H(t) ? ci : cf;
        return n && kt(t, e, n) && (e = r), s(t, W(e, 3));
      }
      var yp = Z(function(t, e) {
        if (t == null)
          return [];
        var n = e.length;
        return n > 1 && kt(t, e[0], e[1]) ? e = [] : n > 2 && kt(e[0], e[1], e[2]) && (e = [e[0]]), Oa(t, Et(e, 1), []);
      }), Er = Xc || function() {
        return Tt.Date.now();
      };
      function mp(t, e) {
        if (typeof e != "function")
          throw new ie(p);
        return t = K(t), function() {
          if (--t < 1)
            return e.apply(this, arguments);
        };
      }
      function So(t, e, n) {
        return e = n ? r : e, e = t && e == null ? t.length : e, Pe(t, Pt, r, r, r, r, e);
      }
      function Po(t, e) {
        var n;
        if (typeof e != "function")
          throw new ie(p);
        return t = K(t), function() {
          return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n;
        };
      }
      var Xi = Z(function(t, e, n) {
        var s = O;
        if (n.length) {
          var a = Ne(n, vn(Xi));
          s |= bt;
        }
        return Pe(t, s, e, n, a);
      }), To = Z(function(t, e, n) {
        var s = O | $;
        if (n.length) {
          var a = Ne(n, vn(To));
          s |= bt;
        }
        return Pe(e, s, t, n, a);
      });
      function Eo(t, e, n) {
        e = n ? r : e;
        var s = Pe(t, X, r, r, r, r, r, e);
        return s.placeholder = Eo.placeholder, s;
      }
      function Io(t, e, n) {
        e = n ? r : e;
        var s = Pe(t, nt, r, r, r, r, r, e);
        return s.placeholder = Io.placeholder, s;
      }
      function Oo(t, e, n) {
        var s, a, c, h, g, m, A = 0, S = !1, P = !1, F = !0;
        if (typeof t != "function")
          throw new ie(p);
        e = ce(e) || 0, dt(n) && (S = !!n.leading, P = "maxWait" in n, c = P ? Ct(ce(n.maxWait) || 0, e) : c, F = "trailing" in n ? !!n.trailing : F);
        function k(yt) {
          var de = s, Fe = a;
          return s = a = r, A = yt, h = t.apply(Fe, de), h;
        }
        function B(yt) {
          return A = yt, g = Bn(Y, e), S ? k(yt) : h;
        }
        function J(yt) {
          var de = yt - m, Fe = yt - A, jo = e - de;
          return P ? It(jo, c - Fe) : jo;
        }
        function U(yt) {
          var de = yt - m, Fe = yt - A;
          return m === r || de >= e || de < 0 || P && Fe >= c;
        }
        function Y() {
          var yt = Er();
          if (U(yt))
            return V(yt);
          g = Bn(Y, J(yt));
        }
        function V(yt) {
          return g = r, F && s ? k(yt) : (s = a = r, h);
        }
        function Xt() {
          g !== r && Ua(g), A = 0, s = m = a = g = r;
        }
        function Dt() {
          return g === r ? h : V(Er());
        }
        function Qt() {
          var yt = Er(), de = U(yt);
          if (s = arguments, a = this, m = yt, de) {
            if (g === r)
              return B(m);
            if (P)
              return Ua(g), g = Bn(Y, e), k(m);
          }
          return g === r && (g = Bn(Y, e)), h;
        }
        return Qt.cancel = Xt, Qt.flush = Dt, Qt;
      }
      var wp = Z(function(t, e) {
        return ma(t, 1, e);
      }), bp = Z(function(t, e, n) {
        return ma(t, ce(e) || 0, n);
      });
      function Mp(t) {
        return Pe(t, te);
      }
      function Ir(t, e) {
        if (typeof t != "function" || e != null && typeof e != "function")
          throw new ie(p);
        var n = function() {
          var s = arguments, a = e ? e.apply(this, s) : s[0], c = n.cache;
          if (c.has(a))
            return c.get(a);
          var h = t.apply(this, s);
          return n.cache = c.set(a, h) || c, h;
        };
        return n.cache = new (Ir.Cache || Ae)(), n;
      }
      Ir.Cache = Ae;
      function Or(t) {
        if (typeof t != "function")
          throw new ie(p);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, e[0]);
            case 2:
              return !t.call(this, e[0], e[1]);
            case 3:
              return !t.call(this, e[0], e[1], e[2]);
          }
          return !t.apply(this, e);
        };
      }
      function Cp(t) {
        return Po(2, t);
      }
      var xp = lf(function(t, e) {
        e = e.length == 1 && H(e[0]) ? pt(e[0], Zt(W())) : pt(Et(e, 1), Zt(W()));
        var n = e.length;
        return Z(function(s) {
          for (var a = -1, c = It(s.length, n); ++a < c; )
            s[a] = e[a].call(this, s[a]);
          return Jt(t, this, s);
        });
      }), Qi = Z(function(t, e) {
        var n = Ne(e, vn(Qi));
        return Pe(t, bt, r, e, n);
      }), Fo = Z(function(t, e) {
        var n = Ne(e, vn(Fo));
        return Pe(t, St, r, e, n);
      }), Ap = Te(function(t, e) {
        return Pe(t, Gt, r, r, r, e);
      });
      function Sp(t, e) {
        if (typeof t != "function")
          throw new ie(p);
        return e = e === r ? e : K(e), Z(t, e);
      }
      function Pp(t, e) {
        if (typeof t != "function")
          throw new ie(p);
        return e = e == null ? 0 : Ct(K(e), 0), Z(function(n) {
          var s = n[e], a = ze(n, 0, e);
          return s && De(a, s), Jt(t, this, a);
        });
      }
      function Tp(t, e, n) {
        var s = !0, a = !0;
        if (typeof t != "function")
          throw new ie(p);
        return dt(n) && (s = "leading" in n ? !!n.leading : s, a = "trailing" in n ? !!n.trailing : a), Oo(t, e, {
          leading: s,
          maxWait: e,
          trailing: a
        });
      }
      function Ep(t) {
        return So(t, 1);
      }
      function Ip(t, e) {
        return Qi(Di(e), t);
      }
      function Op() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return H(t) ? t : [t];
      }
      function Fp(t) {
        return ae(t, D);
      }
      function Rp(t, e) {
        return e = typeof e == "function" ? e : r, ae(t, D, e);
      }
      function Lp(t) {
        return ae(t, v | D);
      }
      function kp(t, e) {
        return e = typeof e == "function" ? e : r, ae(t, v | D, e);
      }
      function Dp(t, e) {
        return e == null || ya(t, e, At(e));
      }
      function pe(t, e) {
        return t === e || t !== t && e !== e;
      }
      var Np = Cr(xi), Wp = Cr(function(t, e) {
        return t >= e;
      }), en = xa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? xa : function(t) {
        return _t(t) && it.call(t, "callee") && !la.call(t, "callee");
      }, H = M.isArray, Bp = Hs ? Zt(Hs) : Kl;
      function $t(t) {
        return t != null && Fr(t.length) && !Ie(t);
      }
      function vt(t) {
        return _t(t) && $t(t);
      }
      function Up(t) {
        return t === !0 || t === !1 || _t(t) && Lt(t) == ut;
      }
      var qe = Vc || cs, $p = Ks ? Zt(Ks) : Jl;
      function zp(t) {
        return _t(t) && t.nodeType === 1 && !Un(t);
      }
      function qp(t) {
        if (t == null)
          return !0;
        if ($t(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || qe(t) || yn(t) || en(t)))
          return !t.length;
        var e = Ot(t);
        if (e == gt || e == ht)
          return !t.size;
        if (Wn(t))
          return !Pi(t).length;
        for (var n in t)
          if (it.call(t, n))
            return !1;
        return !0;
      }
      function Gp(t, e) {
        return kn(t, e);
      }
      function Hp(t, e, n) {
        n = typeof n == "function" ? n : r;
        var s = n ? n(t, e) : r;
        return s === r ? kn(t, e, r, n) : !!s;
      }
      function Vi(t) {
        if (!_t(t))
          return !1;
        var e = Lt(t);
        return e == Ft || e == Kt || typeof t.message == "string" && typeof t.name == "string" && !Un(t);
      }
      function Kp(t) {
        return typeof t == "number" && ha(t);
      }
      function Ie(t) {
        if (!dt(t))
          return !1;
        var e = Lt(t);
        return e == Wt || e == _e || e == at || e == le;
      }
      function Ro(t) {
        return typeof t == "number" && t == K(t);
      }
      function Fr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ge;
      }
      function dt(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      function _t(t) {
        return t != null && typeof t == "object";
      }
      var Lo = Js ? Zt(Js) : Yl;
      function Jp(t, e) {
        return t === e || Si(t, e, qi(e));
      }
      function Zp(t, e, n) {
        return n = typeof n == "function" ? n : r, Si(t, e, qi(e), n);
      }
      function Yp(t) {
        return ko(t) && t != +t;
      }
      function jp(t) {
        if (Rf(t))
          throw new G(d);
        return Aa(t);
      }
      function Xp(t) {
        return t === null;
      }
      function Qp(t) {
        return t == null;
      }
      function ko(t) {
        return typeof t == "number" || _t(t) && Lt(t) == Rt;
      }
      function Un(t) {
        if (!_t(t) || Lt(t) != wt)
          return !1;
        var e = sr(t);
        if (e === null)
          return !0;
        var n = it.call(e, "constructor") && e.constructor;
        return typeof n == "function" && n instanceof n && er.call(n) == Jc;
      }
      var ts = Zs ? Zt(Zs) : jl;
      function Vp(t) {
        return Ro(t) && t >= -ge && t <= ge;
      }
      var Do = Ys ? Zt(Ys) : Xl;
      function Rr(t) {
        return typeof t == "string" || !H(t) && _t(t) && Lt(t) == ve;
      }
      function jt(t) {
        return typeof t == "symbol" || _t(t) && Lt(t) == Kn;
      }
      var yn = js ? Zt(js) : Ql;
      function td(t) {
        return t === r;
      }
      function ed(t) {
        return _t(t) && Ot(t) == xn;
      }
      function nd(t) {
        return _t(t) && Lt(t) == vu;
      }
      var rd = Cr(Ti), id = Cr(function(t, e) {
        return t <= e;
      });
      function No(t) {
        if (!t)
          return [];
        if ($t(t))
          return Rr(t) ? fe(t) : Ut(t);
        if (Pn && t[Pn])
          return kc(t[Pn]());
        var e = Ot(t), n = e == gt ? gi : e == ht ? Qn : mn;
        return n(t);
      }
      function Oe(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = ce(t), t === Me || t === -Me) {
          var e = t < 0 ? -1 : 1;
          return e * Hn;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var e = Oe(t), n = e % 1;
        return e === e ? n ? e - n : e : 0;
      }
      function Wo(t) {
        return t ? Xe(K(t), 0, R) : 0;
      }
      function ce(t) {
        if (typeof t == "number")
          return t;
        if (jt(t))
          return Ce;
        if (dt(t)) {
          var e = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = dt(e) ? e + "" : e;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = na(t);
        var n = Wu.test(t);
        return n || Uu.test(t) ? yc(t.slice(2), n ? 2 : 8) : Nu.test(t) ? Ce : +t;
      }
      function Bo(t) {
        return me(t, zt(t));
      }
      function sd(t) {
        return t ? Xe(K(t), -ge, ge) : t === 0 ? t : 0;
      }
      function rt(t) {
        return t == null ? "" : Yt(t);
      }
      var ad = gn(function(t, e) {
        if (Wn(e) || $t(e)) {
          me(e, At(e), t);
          return;
        }
        for (var n in e)
          it.call(e, n) && Fn(t, n, e[n]);
      }), Uo = gn(function(t, e) {
        me(e, zt(e), t);
      }), Lr = gn(function(t, e, n, s) {
        me(e, zt(e), t, s);
      }), od = gn(function(t, e, n, s) {
        me(e, At(e), t, s);
      }), ud = Te(bi);
      function cd(t, e) {
        var n = dn(t);
        return e == null ? n : va(n, e);
      }
      var ld = Z(function(t, e) {
        t = st(t);
        var n = -1, s = e.length, a = s > 2 ? e[2] : r;
        for (a && kt(e[0], e[1], a) && (s = 1); ++n < s; )
          for (var c = e[n], h = zt(c), g = -1, m = h.length; ++g < m; ) {
            var A = h[g], S = t[A];
            (S === r || pe(S, fn[A]) && !it.call(t, A)) && (t[A] = c[A]);
          }
        return t;
      }), fd = Z(function(t) {
        return t.push(r, no), Jt($o, r, t);
      });
      function hd(t, e) {
        return Qs(t, W(e, 3), ye);
      }
      function pd(t, e) {
        return Qs(t, W(e, 3), Ci);
      }
      function dd(t, e) {
        return t == null ? t : Mi(t, W(e, 3), zt);
      }
      function gd(t, e) {
        return t == null ? t : Ma(t, W(e, 3), zt);
      }
      function _d(t, e) {
        return t && ye(t, W(e, 3));
      }
      function vd(t, e) {
        return t && Ci(t, W(e, 3));
      }
      function yd(t) {
        return t == null ? [] : gr(t, At(t));
      }
      function md(t) {
        return t == null ? [] : gr(t, zt(t));
      }
      function es(t, e, n) {
        var s = t == null ? r : Qe(t, e);
        return s === r ? n : s;
      }
      function wd(t, e) {
        return t != null && so(t, e, zl);
      }
      function ns(t, e) {
        return t != null && so(t, e, ql);
      }
      var bd = Xa(function(t, e, n) {
        e != null && typeof e.toString != "function" && (e = nr.call(e)), t[e] = n;
      }, is(qt)), Md = Xa(function(t, e, n) {
        e != null && typeof e.toString != "function" && (e = nr.call(e)), it.call(t, e) ? t[e].push(n) : t[e] = [n];
      }, W), Cd = Z(Ln);
      function At(t) {
        return $t(t) ? ga(t) : Pi(t);
      }
      function zt(t) {
        return $t(t) ? ga(t, !0) : Vl(t);
      }
      function xd(t, e) {
        var n = {};
        return e = W(e, 3), ye(t, function(s, a, c) {
          Se(n, e(s, a, c), s);
        }), n;
      }
      function Ad(t, e) {
        var n = {};
        return e = W(e, 3), ye(t, function(s, a, c) {
          Se(n, a, e(s, a, c));
        }), n;
      }
      var Sd = gn(function(t, e, n) {
        _r(t, e, n);
      }), $o = gn(function(t, e, n, s) {
        _r(t, e, n, s);
      }), Pd = Te(function(t, e) {
        var n = {};
        if (t == null)
          return n;
        var s = !1;
        e = pt(e, function(c) {
          return c = $e(c, t), s || (s = c.length > 1), c;
        }), me(t, $i(t), n), s && (n = ae(n, v | T | D, bf));
        for (var a = e.length; a--; )
          Ri(n, e[a]);
        return n;
      });
      function Td(t, e) {
        return zo(t, Or(W(e)));
      }
      var Ed = Te(function(t, e) {
        return t == null ? {} : ef(t, e);
      });
      function zo(t, e) {
        if (t == null)
          return {};
        var n = pt($i(t), function(s) {
          return [s];
        });
        return e = W(e), Fa(t, n, function(s, a) {
          return e(s, a[0]);
        });
      }
      function Id(t, e, n) {
        e = $e(e, t);
        var s = -1, a = e.length;
        for (a || (a = 1, t = r); ++s < a; ) {
          var c = t == null ? r : t[we(e[s])];
          c === r && (s = a, c = n), t = Ie(c) ? c.call(t) : c;
        }
        return t;
      }
      function Od(t, e, n) {
        return t == null ? t : Dn(t, e, n);
      }
      function Fd(t, e, n, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : Dn(t, e, n, s);
      }
      var qo = to(At), Go = to(zt);
      function Rd(t, e, n) {
        var s = H(t), a = s || qe(t) || yn(t);
        if (e = W(e, 4), n == null) {
          var c = t && t.constructor;
          a ? n = s ? new c() : [] : dt(t) ? n = Ie(c) ? dn(sr(t)) : {} : n = {};
        }
        return (a ? re : ye)(t, function(h, g, m) {
          return e(n, h, g, m);
        }), n;
      }
      function Ld(t, e) {
        return t == null ? !0 : Ri(t, e);
      }
      function kd(t, e, n) {
        return t == null ? t : Na(t, e, Di(n));
      }
      function Dd(t, e, n, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : Na(t, e, Di(n), s);
      }
      function mn(t) {
        return t == null ? [] : di(t, At(t));
      }
      function Nd(t) {
        return t == null ? [] : di(t, zt(t));
      }
      function Wd(t, e, n) {
        return n === r && (n = e, e = r), n !== r && (n = ce(n), n = n === n ? n : 0), e !== r && (e = ce(e), e = e === e ? e : 0), Xe(ce(t), e, n);
      }
      function Bd(t, e, n) {
        return e = Oe(e), n === r ? (n = e, e = 0) : n = Oe(n), t = ce(t), Gl(t, e, n);
      }
      function Ud(t, e, n) {
        if (n && typeof n != "boolean" && kt(t, e, n) && (e = n = r), n === r && (typeof e == "boolean" ? (n = e, e = r) : typeof t == "boolean" && (n = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = Oe(t), e === r ? (e = t, t = 0) : e = Oe(e)), t > e) {
          var s = t;
          t = e, e = s;
        }
        if (n || t % 1 || e % 1) {
          var a = pa();
          return It(t + a * (e - t + vc("1e-" + ((a + "").length - 1))), e);
        }
        return Ii(t, e);
      }
      var $d = _n(function(t, e, n) {
        return e = e.toLowerCase(), t + (n ? Ho(e) : e);
      });
      function Ho(t) {
        return rs(rt(t).toLowerCase());
      }
      function Ko(t) {
        return t = rt(t), t && t.replace(zu, Ic).replace(oc, "");
      }
      function zd(t, e, n) {
        t = rt(t), e = Yt(e);
        var s = t.length;
        n = n === r ? s : Xe(K(n), 0, s);
        var a = n;
        return n -= e.length, n >= 0 && t.slice(n, a) == e;
      }
      function qd(t) {
        return t = rt(t), t && Mu.test(t) ? t.replace(Ms, Oc) : t;
      }
      function Gd(t) {
        return t = rt(t), t && Tu.test(t) ? t.replace(Qr, "\\$&") : t;
      }
      var Hd = _n(function(t, e, n) {
        return t + (n ? "-" : "") + e.toLowerCase();
      }), Kd = _n(function(t, e, n) {
        return t + (n ? " " : "") + e.toLowerCase();
      }), Jd = Za("toLowerCase");
      function Zd(t, e, n) {
        t = rt(t), e = K(e);
        var s = e ? cn(t) : 0;
        if (!e || s >= e)
          return t;
        var a = (e - s) / 2;
        return Mr(cr(a), n) + t + Mr(ur(a), n);
      }
      function Yd(t, e, n) {
        t = rt(t), e = K(e);
        var s = e ? cn(t) : 0;
        return e && s < e ? t + Mr(e - s, n) : t;
      }
      function jd(t, e, n) {
        t = rt(t), e = K(e);
        var s = e ? cn(t) : 0;
        return e && s < e ? Mr(e - s, n) + t : t;
      }
      function Xd(t, e, n) {
        return n || e == null ? e = 0 : e && (e = +e), rl(rt(t).replace(Vr, ""), e || 0);
      }
      function Qd(t, e, n) {
        return (n ? kt(t, e, n) : e === r) ? e = 1 : e = K(e), Oi(rt(t), e);
      }
      function Vd() {
        var t = arguments, e = rt(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2]);
      }
      var tg = _n(function(t, e, n) {
        return t + (n ? "_" : "") + e.toLowerCase();
      });
      function eg(t, e, n) {
        return n && typeof n != "number" && kt(t, e, n) && (e = n = r), n = n === r ? R : n >>> 0, n ? (t = rt(t), t && (typeof e == "string" || e != null && !ts(e)) && (e = Yt(e), !e && un(t)) ? ze(fe(t), 0, n) : t.split(e, n)) : [];
      }
      var ng = _n(function(t, e, n) {
        return t + (n ? " " : "") + rs(e);
      });
      function rg(t, e, n) {
        return t = rt(t), n = n == null ? 0 : Xe(K(n), 0, t.length), e = Yt(e), t.slice(n, n + e.length) == e;
      }
      function ig(t, e, n) {
        var s = u.templateSettings;
        n && kt(t, e, n) && (e = r), t = rt(t), e = Lr({}, e, s, eo);
        var a = Lr({}, e.imports, s.imports, eo), c = At(a), h = di(a, c), g, m, A = 0, S = e.interpolate || Jn, P = "__p += '", F = _i(
          (e.escape || Jn).source + "|" + S.source + "|" + (S === Cs ? Du : Jn).source + "|" + (e.evaluate || Jn).source + "|$",
          "g"
        ), k = "//# sourceURL=" + (it.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++hc + "]") + `
`;
        t.replace(F, function(U, Y, V, Xt, Dt, Qt) {
          return V || (V = Xt), P += t.slice(A, Qt).replace(qu, Fc), Y && (g = !0, P += `' +
__e(` + Y + `) +
'`), Dt && (m = !0, P += `';
` + Dt + `;
__p += '`), V && (P += `' +
((__t = (` + V + `)) == null ? '' : __t) +
'`), A = Qt + U.length, U;
        }), P += `';
`;
        var B = it.call(e, "variable") && e.variable;
        if (!B)
          P = `with (obj) {
` + P + `
}
`;
        else if (Lu.test(B))
          throw new G(_);
        P = (m ? P.replace(yu, "") : P).replace(mu, "$1").replace(wu, "$1;"), P = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (m ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var J = Zo(function() {
          return et(c, k + "return " + P).apply(r, h);
        });
        if (J.source = P, Vi(J))
          throw J;
        return J;
      }
      function sg(t) {
        return rt(t).toLowerCase();
      }
      function ag(t) {
        return rt(t).toUpperCase();
      }
      function og(t, e, n) {
        if (t = rt(t), t && (n || e === r))
          return na(t);
        if (!t || !(e = Yt(e)))
          return t;
        var s = fe(t), a = fe(e), c = ra(s, a), h = ia(s, a) + 1;
        return ze(s, c, h).join("");
      }
      function ug(t, e, n) {
        if (t = rt(t), t && (n || e === r))
          return t.slice(0, aa(t) + 1);
        if (!t || !(e = Yt(e)))
          return t;
        var s = fe(t), a = ia(s, fe(e)) + 1;
        return ze(s, 0, a).join("");
      }
      function cg(t, e, n) {
        if (t = rt(t), t && (n || e === r))
          return t.replace(Vr, "");
        if (!t || !(e = Yt(e)))
          return t;
        var s = fe(t), a = ra(s, fe(e));
        return ze(s, a).join("");
      }
      function lg(t, e) {
        var n = Ht, s = Mn;
        if (dt(e)) {
          var a = "separator" in e ? e.separator : a;
          n = "length" in e ? K(e.length) : n, s = "omission" in e ? Yt(e.omission) : s;
        }
        t = rt(t);
        var c = t.length;
        if (un(t)) {
          var h = fe(t);
          c = h.length;
        }
        if (n >= c)
          return t;
        var g = n - cn(s);
        if (g < 1)
          return s;
        var m = h ? ze(h, 0, g).join("") : t.slice(0, g);
        if (a === r)
          return m + s;
        if (h && (g += m.length - g), ts(a)) {
          if (t.slice(g).search(a)) {
            var A, S = m;
            for (a.global || (a = _i(a.source, rt(xs.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(S); )
              var P = A.index;
            m = m.slice(0, P === r ? g : P);
          }
        } else if (t.indexOf(Yt(a), g) != g) {
          var F = m.lastIndexOf(a);
          F > -1 && (m = m.slice(0, F));
        }
        return m + s;
      }
      function fg(t) {
        return t = rt(t), t && bu.test(t) ? t.replace(bs, Bc) : t;
      }
      var hg = _n(function(t, e, n) {
        return t + (n ? " " : "") + e.toUpperCase();
      }), rs = Za("toUpperCase");
      function Jo(t, e, n) {
        return t = rt(t), e = n ? r : e, e === r ? Lc(t) ? zc(t) : Ac(t) : t.match(e) || [];
      }
      var Zo = Z(function(t, e) {
        try {
          return Jt(t, r, e);
        } catch (n) {
          return Vi(n) ? n : new G(n);
        }
      }), pg = Te(function(t, e) {
        return re(e, function(n) {
          n = we(n), Se(t, n, Xi(t[n], t));
        }), t;
      });
      function dg(t) {
        var e = t == null ? 0 : t.length, n = W();
        return t = e ? pt(t, function(s) {
          if (typeof s[1] != "function")
            throw new ie(p);
          return [n(s[0]), s[1]];
        }) : [], Z(function(s) {
          for (var a = -1; ++a < e; ) {
            var c = t[a];
            if (Jt(c[0], this, s))
              return Jt(c[1], this, s);
          }
        });
      }
      function gg(t) {
        return Bl(ae(t, v));
      }
      function is(t) {
        return function() {
          return t;
        };
      }
      function _g(t, e) {
        return t == null || t !== t ? e : t;
      }
      var vg = ja(), yg = ja(!0);
      function qt(t) {
        return t;
      }
      function ss(t) {
        return Sa(typeof t == "function" ? t : ae(t, v));
      }
      function mg(t) {
        return Ta(ae(t, v));
      }
      function wg(t, e) {
        return Ea(t, ae(e, v));
      }
      var bg = Z(function(t, e) {
        return function(n) {
          return Ln(n, t, e);
        };
      }), Mg = Z(function(t, e) {
        return function(n) {
          return Ln(t, n, e);
        };
      });
      function as(t, e, n) {
        var s = At(e), a = gr(e, s);
        n == null && !(dt(e) && (a.length || !s.length)) && (n = e, e = t, t = this, a = gr(e, At(e)));
        var c = !(dt(n) && "chain" in n) || !!n.chain, h = Ie(t);
        return re(a, function(g) {
          var m = e[g];
          t[g] = m, h && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (c || A) {
              var S = t(this.__wrapped__), P = S.__actions__ = Ut(this.__actions__);
              return P.push({ func: m, args: arguments, thisArg: t }), S.__chain__ = A, S;
            }
            return m.apply(t, De([this.value()], arguments));
          });
        }), t;
      }
      function Cg() {
        return Tt._ === this && (Tt._ = Zc), this;
      }
      function os() {
      }
      function xg(t) {
        return t = K(t), Z(function(e) {
          return Ia(e, t);
        });
      }
      var Ag = Wi(pt), Sg = Wi(Xs), Pg = Wi(ci);
      function Yo(t) {
        return Hi(t) ? li(we(t)) : nf(t);
      }
      function Tg(t) {
        return function(e) {
          return t == null ? r : Qe(t, e);
        };
      }
      var Eg = Qa(), Ig = Qa(!0);
      function us() {
        return [];
      }
      function cs() {
        return !1;
      }
      function Og() {
        return {};
      }
      function Fg() {
        return "";
      }
      function Rg() {
        return !0;
      }
      function Lg(t, e) {
        if (t = K(t), t < 1 || t > ge)
          return [];
        var n = R, s = It(t, R);
        e = W(e), t -= R;
        for (var a = pi(s, e); ++n < t; )
          e(n);
        return a;
      }
      function kg(t) {
        return H(t) ? pt(t, we) : jt(t) ? [t] : Ut(go(rt(t)));
      }
      function Dg(t) {
        var e = ++Kc;
        return rt(t) + e;
      }
      var Ng = br(function(t, e) {
        return t + e;
      }, 0), Wg = Bi("ceil"), Bg = br(function(t, e) {
        return t / e;
      }, 1), Ug = Bi("floor");
      function $g(t) {
        return t && t.length ? dr(t, qt, xi) : r;
      }
      function zg(t, e) {
        return t && t.length ? dr(t, W(e, 2), xi) : r;
      }
      function qg(t) {
        return ta(t, qt);
      }
      function Gg(t, e) {
        return ta(t, W(e, 2));
      }
      function Hg(t) {
        return t && t.length ? dr(t, qt, Ti) : r;
      }
      function Kg(t, e) {
        return t && t.length ? dr(t, W(e, 2), Ti) : r;
      }
      var Jg = br(function(t, e) {
        return t * e;
      }, 1), Zg = Bi("round"), Yg = br(function(t, e) {
        return t - e;
      }, 0);
      function jg(t) {
        return t && t.length ? hi(t, qt) : 0;
      }
      function Xg(t, e) {
        return t && t.length ? hi(t, W(e, 2)) : 0;
      }
      return u.after = mp, u.ary = So, u.assign = ad, u.assignIn = Uo, u.assignInWith = Lr, u.assignWith = od, u.at = ud, u.before = Po, u.bind = Xi, u.bindAll = pg, u.bindKey = To, u.castArray = Op, u.chain = Co, u.chunk = Uf, u.compact = $f, u.concat = zf, u.cond = dg, u.conforms = gg, u.constant = is, u.countBy = jh, u.create = cd, u.curry = Eo, u.curryRight = Io, u.debounce = Oo, u.defaults = ld, u.defaultsDeep = fd, u.defer = wp, u.delay = bp, u.difference = qf, u.differenceBy = Gf, u.differenceWith = Hf, u.drop = Kf, u.dropRight = Jf, u.dropRightWhile = Zf, u.dropWhile = Yf, u.fill = jf, u.filter = Qh, u.flatMap = ep, u.flatMapDeep = np, u.flatMapDepth = rp, u.flatten = mo, u.flattenDeep = Xf, u.flattenDepth = Qf, u.flip = Mp, u.flow = vg, u.flowRight = yg, u.fromPairs = Vf, u.functions = yd, u.functionsIn = md, u.groupBy = ip, u.initial = eh, u.intersection = nh, u.intersectionBy = rh, u.intersectionWith = ih, u.invert = bd, u.invertBy = Md, u.invokeMap = ap, u.iteratee = ss, u.keyBy = op, u.keys = At, u.keysIn = zt, u.map = Tr, u.mapKeys = xd, u.mapValues = Ad, u.matches = mg, u.matchesProperty = wg, u.memoize = Ir, u.merge = Sd, u.mergeWith = $o, u.method = bg, u.methodOf = Mg, u.mixin = as, u.negate = Or, u.nthArg = xg, u.omit = Pd, u.omitBy = Td, u.once = Cp, u.orderBy = up, u.over = Ag, u.overArgs = xp, u.overEvery = Sg, u.overSome = Pg, u.partial = Qi, u.partialRight = Fo, u.partition = cp, u.pick = Ed, u.pickBy = zo, u.property = Yo, u.propertyOf = Tg, u.pull = uh, u.pullAll = bo, u.pullAllBy = ch, u.pullAllWith = lh, u.pullAt = fh, u.range = Eg, u.rangeRight = Ig, u.rearg = Ap, u.reject = hp, u.remove = hh, u.rest = Sp, u.reverse = Yi, u.sampleSize = dp, u.set = Od, u.setWith = Fd, u.shuffle = gp, u.slice = ph, u.sortBy = yp, u.sortedUniq = wh, u.sortedUniqBy = bh, u.split = eg, u.spread = Pp, u.tail = Mh, u.take = Ch, u.takeRight = xh, u.takeRightWhile = Ah, u.takeWhile = Sh, u.tap = $h, u.throttle = Tp, u.thru = Pr, u.toArray = No, u.toPairs = qo, u.toPairsIn = Go, u.toPath = kg, u.toPlainObject = Bo, u.transform = Rd, u.unary = Ep, u.union = Ph, u.unionBy = Th, u.unionWith = Eh, u.uniq = Ih, u.uniqBy = Oh, u.uniqWith = Fh, u.unset = Ld, u.unzip = ji, u.unzipWith = Mo, u.update = kd, u.updateWith = Dd, u.values = mn, u.valuesIn = Nd, u.without = Rh, u.words = Jo, u.wrap = Ip, u.xor = Lh, u.xorBy = kh, u.xorWith = Dh, u.zip = Nh, u.zipObject = Wh, u.zipObjectDeep = Bh, u.zipWith = Uh, u.entries = qo, u.entriesIn = Go, u.extend = Uo, u.extendWith = Lr, as(u, u), u.add = Ng, u.attempt = Zo, u.camelCase = $d, u.capitalize = Ho, u.ceil = Wg, u.clamp = Wd, u.clone = Fp, u.cloneDeep = Lp, u.cloneDeepWith = kp, u.cloneWith = Rp, u.conformsTo = Dp, u.deburr = Ko, u.defaultTo = _g, u.divide = Bg, u.endsWith = zd, u.eq = pe, u.escape = qd, u.escapeRegExp = Gd, u.every = Xh, u.find = Vh, u.findIndex = vo, u.findKey = hd, u.findLast = tp, u.findLastIndex = yo, u.findLastKey = pd, u.floor = Ug, u.forEach = xo, u.forEachRight = Ao, u.forIn = dd, u.forInRight = gd, u.forOwn = _d, u.forOwnRight = vd, u.get = es, u.gt = Np, u.gte = Wp, u.has = wd, u.hasIn = ns, u.head = wo, u.identity = qt, u.includes = sp, u.indexOf = th, u.inRange = Bd, u.invoke = Cd, u.isArguments = en, u.isArray = H, u.isArrayBuffer = Bp, u.isArrayLike = $t, u.isArrayLikeObject = vt, u.isBoolean = Up, u.isBuffer = qe, u.isDate = $p, u.isElement = zp, u.isEmpty = qp, u.isEqual = Gp, u.isEqualWith = Hp, u.isError = Vi, u.isFinite = Kp, u.isFunction = Ie, u.isInteger = Ro, u.isLength = Fr, u.isMap = Lo, u.isMatch = Jp, u.isMatchWith = Zp, u.isNaN = Yp, u.isNative = jp, u.isNil = Qp, u.isNull = Xp, u.isNumber = ko, u.isObject = dt, u.isObjectLike = _t, u.isPlainObject = Un, u.isRegExp = ts, u.isSafeInteger = Vp, u.isSet = Do, u.isString = Rr, u.isSymbol = jt, u.isTypedArray = yn, u.isUndefined = td, u.isWeakMap = ed, u.isWeakSet = nd, u.join = sh, u.kebabCase = Hd, u.last = ue, u.lastIndexOf = ah, u.lowerCase = Kd, u.lowerFirst = Jd, u.lt = rd, u.lte = id, u.max = $g, u.maxBy = zg, u.mean = qg, u.meanBy = Gg, u.min = Hg, u.minBy = Kg, u.stubArray = us, u.stubFalse = cs, u.stubObject = Og, u.stubString = Fg, u.stubTrue = Rg, u.multiply = Jg, u.nth = oh, u.noConflict = Cg, u.noop = os, u.now = Er, u.pad = Zd, u.padEnd = Yd, u.padStart = jd, u.parseInt = Xd, u.random = Ud, u.reduce = lp, u.reduceRight = fp, u.repeat = Qd, u.replace = Vd, u.result = Id, u.round = Zg, u.runInContext = y, u.sample = pp, u.size = _p, u.snakeCase = tg, u.some = vp, u.sortedIndex = dh, u.sortedIndexBy = gh, u.sortedIndexOf = _h, u.sortedLastIndex = vh, u.sortedLastIndexBy = yh, u.sortedLastIndexOf = mh, u.startCase = ng, u.startsWith = rg, u.subtract = Yg, u.sum = jg, u.sumBy = Xg, u.template = ig, u.times = Lg, u.toFinite = Oe, u.toInteger = K, u.toLength = Wo, u.toLower = sg, u.toNumber = ce, u.toSafeInteger = sd, u.toString = rt, u.toUpper = ag, u.trim = og, u.trimEnd = ug, u.trimStart = cg, u.truncate = lg, u.unescape = fg, u.uniqueId = Dg, u.upperCase = hg, u.upperFirst = rs, u.each = xo, u.eachRight = Ao, u.first = wo, as(u, function() {
        var t = {};
        return ye(u, function(e, n) {
          it.call(u.prototype, n) || (t[n] = e);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), re(["drop", "take"], function(t, e) {
        Q.prototype[t] = function(n) {
          n = n === r ? 1 : Ct(K(n), 0);
          var s = this.__filtered__ && !e ? new Q(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = It(n, s.__takeCount__) : s.__views__.push({
            size: It(n, R),
            type: t + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, Q.prototype[t + "Right"] = function(n) {
          return this.reverse()[t](n).reverse();
        };
      }), re(["filter", "map", "takeWhile"], function(t, e) {
        var n = e + 1, s = n == Cn || n == zr;
        Q.prototype[t] = function(a) {
          var c = this.clone();
          return c.__iteratees__.push({
            iteratee: W(a, 3),
            type: n
          }), c.__filtered__ = c.__filtered__ || s, c;
        };
      }), re(["head", "last"], function(t, e) {
        var n = "take" + (e ? "Right" : "");
        Q.prototype[t] = function() {
          return this[n](1).value()[0];
        };
      }), re(["initial", "tail"], function(t, e) {
        var n = "drop" + (e ? "" : "Right");
        Q.prototype[t] = function() {
          return this.__filtered__ ? new Q(this) : this[n](1);
        };
      }), Q.prototype.compact = function() {
        return this.filter(qt);
      }, Q.prototype.find = function(t) {
        return this.filter(t).head();
      }, Q.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Q.prototype.invokeMap = Z(function(t, e) {
        return typeof t == "function" ? new Q(this) : this.map(function(n) {
          return Ln(n, t, e);
        });
      }), Q.prototype.reject = function(t) {
        return this.filter(Or(W(t)));
      }, Q.prototype.slice = function(t, e) {
        t = K(t);
        var n = this;
        return n.__filtered__ && (t > 0 || e < 0) ? new Q(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== r && (e = K(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n);
      }, Q.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Q.prototype.toArray = function() {
        return this.take(R);
      }, ye(Q.prototype, function(t, e) {
        var n = /^(?:filter|find|map|reject)|While$/.test(e), s = /^(?:head|last)$/.test(e), a = u[s ? "take" + (e == "last" ? "Right" : "") : e], c = s || /^find/.test(e);
        a && (u.prototype[e] = function() {
          var h = this.__wrapped__, g = s ? [1] : arguments, m = h instanceof Q, A = g[0], S = m || H(h), P = function(Y) {
            var V = a.apply(u, De([Y], g));
            return s && F ? V[0] : V;
          };
          S && n && typeof A == "function" && A.length != 1 && (m = S = !1);
          var F = this.__chain__, k = !!this.__actions__.length, B = c && !F, J = m && !k;
          if (!c && S) {
            h = J ? h : new Q(this);
            var U = t.apply(h, g);
            return U.__actions__.push({ func: Pr, args: [P], thisArg: r }), new se(U, F);
          }
          return B && J ? t.apply(this, g) : (U = this.thru(P), B ? s ? U.value()[0] : U.value() : U);
        });
      }), re(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var e = Vn[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var a = arguments;
          if (s && !this.__chain__) {
            var c = this.value();
            return e.apply(H(c) ? c : [], a);
          }
          return this[n](function(h) {
            return e.apply(H(h) ? h : [], a);
          });
        };
      }), ye(Q.prototype, function(t, e) {
        var n = u[e];
        if (n) {
          var s = n.name + "";
          it.call(pn, s) || (pn[s] = []), pn[s].push({ name: e, func: n });
        }
      }), pn[wr(r, $).name] = [{
        name: "wrapper",
        func: r
      }], Q.prototype.clone = ll, Q.prototype.reverse = fl, Q.prototype.value = hl, u.prototype.at = zh, u.prototype.chain = qh, u.prototype.commit = Gh, u.prototype.next = Hh, u.prototype.plant = Jh, u.prototype.reverse = Zh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Yh, u.prototype.first = u.prototype.head, Pn && (u.prototype[Pn] = Kh), u;
    }, ln = qc();
    Je ? ((Je.exports = ln)._ = ln, si._ = ln) : Tt._ = ln;
  }).call($n);
})(Dr, Dr.exports);
var t0 = Dr.exports;
const E = /* @__PURE__ */ ys(t0), e0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function n0(f, i) {
  (i === null || typeof i > "u") && (i = e0);
  let r = 0;
  return Array.isArray(f) ? r = (f[0] + f[1]) / 2 : r = f, r <= i.th ? 1 : (1 + i.rate / i.span / 100) ** (r - i.th);
}
const Qo = {
  baseline: 0,
  // baseline darkness impact at full dark
  terrainScale: 1
  // scaling of terrain factor at full dark
};
function Nt(f, i = 0) {
  return Math.round(f * 10 ** i) / 10 ** i;
}
function nn(f, i, r, o, l) {
  return r + (l - f) / (i - f) * (o - r);
}
function su(f, i, r) {
  let o = 0, l = 0;
  const d = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < f[l])
      d.push(i[l]);
    else {
      for (; l < f.length - 1 && f[l + 1] <= r[o]; )
        l++;
      l === f.length - 1 || r[o] === f[l] ? d.push(i[l]) : d.push(nn(f[l], f[l + 1], i[l], i[l + 1], r[o]));
    }
  return d;
}
function au(f) {
  let i, r, o, l, d = 0, p = 0, _ = 0, w = 0, b = 0;
  for (i = 0; i < f.length; i++)
    r = f[i][0], o = f[i][1], l = f[i][2], b += l, d += l * r, _ += l * (r * r), p += l * o, w += l * (r * o);
  const C = (p * _ - d * w) / (b * _ - d * d);
  return [(b * w - d * p) / (b * _ - d * d), C];
}
function ou(f, i, r, o) {
  let l = 0, d = 0;
  const p = [];
  return r.forEach((_) => {
    for (; f[l] < _ - o; )
      l++;
    for (l > 0 && f[l] >= _ && l--; d < f.length - 1 && f[d + 1] <= _ + o; )
      d++;
    d < f.length - 1 && f[d] <= _ && d++;
    const w = Math.max(o, Math.abs(_ - f[l]) + 1e-3, Math.abs(_ - f[d]) + 1e-3), b = [];
    let C = 0;
    for (let v = l; v <= d; v++)
      C = (1 - (Math.abs(_ - f[v]) / w) ** 3) ** 3, b.push([f[v], i[v], C]);
    p.push(au(b));
  }), p;
}
function ps(f, i, r) {
  return Nt(f, r) < Nt(i, r);
}
function r0(f, i, r) {
  return Nt(f, r) > Nt(i, r);
}
function Nr(f, i, r) {
  return Nt(f, r) <= Nt(i, r);
}
function Br(f, i, r) {
  return Nt(f, r) >= Nt(i, r);
}
function He(f, i, r) {
  return Nt(f, r) === Nt(i, r);
}
const $0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: nn,
  interpArray: su,
  linearRegression: au,
  req: He,
  rgt: r0,
  rgte: Br,
  rlt: ps,
  rlte: Nr,
  round: Nt,
  wlslr: ou
}, Symbol.toStringTag, { value: "Module" }));
function i0(f, i) {
  function r(o) {
    return o < f.noon ? o + 86400 : o;
  }
  return i >= f.sunrise && i <= f.sunset ? 0 : !isNaN(f.dawn) && !isNaN(f.dusk) && (i <= f.dawn || i >= f.dusk) ? 1 : r(i) >= r(f.nadir) ? nn(
    r(isNaN(f.dawn) ? f.nadir : f.dawn),
    r(f.sunrise),
    1,
    0,
    r(i)
  ) : nn(
    r(f.sunset),
    r(isNaN(f.dusk) ? f.nadir : f.dusk),
    0,
    1,
    r(i)
  );
}
function s0({ timeOfDaySeconds: f, terrainFactor: i, sun: r, model: o = Qo }) {
  if (i === 1 || f >= r.sunrise && f <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = Qo);
  const l = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), d = (o.terrainScale * (i - 1) + o.baseline) * l, p = i0(r, f);
  return 1 + d * p;
}
const Re = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
class Ur {
  constructor(i) {
    Object.defineProperty(this, "_data", { value: {} }), Object.defineProperty(this, "_cache", { value: {} }), Re.forEach((r) => {
      Object.defineProperty(this, r, {
        enumerable: !0,
        get() {
          return this._data[r] || 1;
        },
        set(o) {
          o !== 1 ? this._data[r] = o : delete this._data[r], delete this._cache.combined;
        }
      });
    }), Object.assign(this, i);
  }
  get combined() {
    return E.has(this._cache, "combined") || (this._cache.combined = Re.reduce((i, r) => i * this[r], 1)), this._cache.combined;
  }
}
const a0 = {
  // f = a*x^2 + b*x
  // goes linear at lower and upper bounds
  a: 21e-4,
  b: 0.034,
  lower: {
    lim: -22,
    m: -0.0584,
    b: -0.0164
  },
  upper: {
    lim: 16,
    m: 0.1012,
    b: 0.4624
  }
};
function o0(f, i) {
  return (i === null || typeof i > "u") && (i = a0), f < i.lower.lim ? i.lower.m * f + i.lower.b : f > i.upper.lim ? i.upper.m * f + i.upper.b : i.a * f ** 2 + i.b * f + 1;
}
function u0({ point: f, model: i } = {}) {
  if (!i)
    return 1;
  const r = f.tod;
  let o = 1;
  if (r > i.start && r < i.stop) {
    const l = (r - i.start) / (i.stop - i.start) * Math.PI;
    o += (i.max - i.baseline) * Math.sin(l) / 100;
  }
  return o += i.baseline / 100, o;
}
function c0({ point: f, course: i }) {
  const r = E.findLast(i.terrainFactors, (o) => Nr(o.start, f.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
function l0(f, i) {
  let r = 0, o = 0;
  return f.forEach((l, d) => {
    const p = d === f.length - 1 ? i : f[d + 1].onset, _ = l.type === "linear" ? l.value / 2 : l.value;
    o += (r + _) * (p - l.onset), r += l.value;
  }), o / i;
}
function f0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function h0(f, i, r) {
  let o = -l0(i, r);
  return i.forEach((l, d) => {
    if (f >= l.onset) {
      if (l.type === "step")
        o += l.value;
      else if (l.type === "linear") {
        const p = d === i.length - 1 ? r : i[d + 1].onset;
        f > p ? o += l.value : o += l.value * (f - l.onset) / (p - l.onset);
      }
    }
  }), o;
}
class p0 {
  constructor(i = {}) {
    if (Object.defineProperty(this, "__class", { value: "Strategy", enumerable: !1 }), i.__class === "Strategy")
      Object.assign(this, E.cloneDeep(i));
    else {
      if (!i.length)
        throw new Error("length required");
      if (this.length = i.length, E.isNumber(i.values))
        this.values = [{ onset: 0, value: i.values, type: "linear" }];
      else if (E.isArray(i.values))
        this.values = E.cloneDeep(i.values);
      else {
        if (i.values)
          throw new Error(`bad values input: ${JSON.stringify(i.values)}`);
        this.values = [{ onset: 0, value: f0(this.length), type: "linear" }];
      }
    }
  }
  /**
   * Returns strategy factor at location.
   *
   * @param {Number} loc - The location (in km) to determine value.
   * @return {Number} The strategy factor at input location.
   */
  at(i) {
    return 1 + h0(i, this.values, this.length) / 100;
  }
  addValue(i) {
    const r = this.values.findIndex((o) => o.onset >= i.onset);
    r >= 0 ? this.values.splice(r, 0, i) : this.values.push(i);
  }
}
function d0(f, i) {
  return (f - 1) * i + 1;
}
function ds(f, { plan: i, course: r }) {
  r || (r = i.course), f.factors || (f.factors = new Ur()), Object.assign(f.factors, {
    grade: o0(f.grade),
    altitude: n0(f.alt),
    terrain: c0({ point: f, course: r })
  }), i && (Object.assign(f.factors, {
    strategy: i.strategy.at(f.loc)
  }), typeof f.tod < "u" && Object.assign(f.factors, {
    heat: i.heatModel ? u0({ point: f, model: i.heatModel }) : 1,
    dark: i.event.sun ? s0({
      timeOfDaySeconds: f.tod,
      terrainFactor: f.factors.terrain,
      sun: i.event.sun
    }) : 1
  }));
  const o = {};
  r != null && r.scales && Object.assign(o, r.scales), i != null && i.scales && Object.assign(o, i.scales), Object.keys(o).filter((l) => l !== 1 && f.factors[l]).forEach((l) => {
    f.factors[l] = d0(f.factors[l], o[l]);
  });
}
class uu {
  constructor(i) {
    Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, i);
  }
  set name(i) {
    this._data.name = i;
  }
  get name() {
    var i;
    return this._data.name || ((i = this.waypoint) == null ? void 0 : i.name) || void 0;
  }
  get start() {
    return this.end - this.len;
  }
  get pace() {
    if (E.isNumber(this.time))
      return this.time ? this.time / this.len : 0;
  }
  // time based fields require associated point1 & point2
  get delay() {
    var i, r, o, l;
    if (!(!E.isNumber((i = this.point1) == null ? void 0 : i.elapsed) || !E.isNumber((r = this.point2) == null ? void 0 : r.elapsed) || !E.isNumber((o = this.point1) == null ? void 0 : o.time) || !E.isNumber((l = this.point2) == null ? void 0 : l.time)))
      return this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time);
  }
  get elapsed() {
    var i;
    return (i = this.point2) == null ? void 0 : i.elapsed;
  }
  get time() {
    var i, r;
    if (!(!E.isNumber((i = this.point1) == null ? void 0 : i.time) || !E.isNumber((r = this.point2) == null ? void 0 : r.time)))
      return this.point2.time - this.point1.time;
  }
  get tod() {
    var i;
    return (i = this.point2) == null ? void 0 : i.tod;
  }
  // dummy setters, just in case:
  set delay(i) {
  }
  set pace(i) {
  }
  set elapsed(i) {
  }
  set time(i) {
  }
  set tod(i) {
  }
}
function g0(f, i) {
  return (typeof f == "object" ? String(f._id) : f) === (typeof i == "object" ? String(i._id) : i);
}
var gs = { exports: {} }, ls, Vo;
function _0() {
  if (Vo)
    return ls;
  Vo = 1;
  var f = 1e3, i = f * 60, r = i * 60, o = r * 24, l = o * 7, d = o * 365.25;
  ls = function(C, v) {
    v = v || {};
    var T = typeof C;
    if (T === "string" && C.length > 0)
      return p(C);
    if (T === "number" && isFinite(C))
      return v.long ? w(C) : _(C);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(C)
    );
  };
  function p(C) {
    if (C = String(C), !(C.length > 100)) {
      var v = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        C
      );
      if (v) {
        var T = parseFloat(v[1]), D = (v[2] || "ms").toLowerCase();
        switch (D) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return T * d;
          case "weeks":
          case "week":
          case "w":
            return T * l;
          case "days":
          case "day":
          case "d":
            return T * o;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return T * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return T * i;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return T * f;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return T;
          default:
            return;
        }
      }
    }
  }
  function _(C) {
    var v = Math.abs(C);
    return v >= o ? Math.round(C / o) + "d" : v >= r ? Math.round(C / r) + "h" : v >= i ? Math.round(C / i) + "m" : v >= f ? Math.round(C / f) + "s" : C + "ms";
  }
  function w(C) {
    var v = Math.abs(C);
    return v >= o ? b(C, v, o, "day") : v >= r ? b(C, v, r, "hour") : v >= i ? b(C, v, i, "minute") : v >= f ? b(C, v, f, "second") : C + " ms";
  }
  function b(C, v, T, D) {
    var N = v >= T * 1.5;
    return Math.round(C / T) + " " + D + (N ? "s" : "");
  }
  return ls;
}
function v0(f) {
  r.debug = r, r.default = r, r.coerce = w, r.disable = d, r.enable = l, r.enabled = p, r.humanize = _0(), r.destroy = b, Object.keys(f).forEach((C) => {
    r[C] = f[C];
  }), r.names = [], r.skips = [], r.formatters = {};
  function i(C) {
    let v = 0;
    for (let T = 0; T < C.length; T++)
      v = (v << 5) - v + C.charCodeAt(T), v |= 0;
    return r.colors[Math.abs(v) % r.colors.length];
  }
  r.selectColor = i;
  function r(C) {
    let v, T = null, D, N;
    function I(...O) {
      if (!I.enabled)
        return;
      const $ = I, j = Number(/* @__PURE__ */ new Date()), X = j - (v || j);
      $.diff = X, $.prev = v, $.curr = j, v = j, O[0] = r.coerce(O[0]), typeof O[0] != "string" && O.unshift("%O");
      let nt = 0;
      O[0] = O[0].replace(/%([a-zA-Z%])/g, (St, Pt) => {
        if (St === "%%")
          return "%";
        nt++;
        const Gt = r.formatters[Pt];
        if (typeof Gt == "function") {
          const te = O[nt];
          St = Gt.call($, te), O.splice(nt, 1), nt--;
        }
        return St;
      }), r.formatArgs.call($, O), ($.log || r.log).apply($, O);
    }
    return I.namespace = C, I.useColors = r.useColors(), I.color = r.selectColor(C), I.extend = o, I.destroy = r.destroy, Object.defineProperty(I, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => T !== null ? T : (D !== r.namespaces && (D = r.namespaces, N = r.enabled(C)), N),
      set: (O) => {
        T = O;
      }
    }), typeof r.init == "function" && r.init(I), I;
  }
  function o(C, v) {
    const T = r(this.namespace + (typeof v > "u" ? ":" : v) + C);
    return T.log = this.log, T;
  }
  function l(C) {
    r.save(C), r.namespaces = C, r.names = [], r.skips = [];
    let v;
    const T = (typeof C == "string" ? C : "").split(/[\s,]+/), D = T.length;
    for (v = 0; v < D; v++)
      T[v] && (C = T[v].replace(/\*/g, ".*?"), C[0] === "-" ? r.skips.push(new RegExp("^" + C.slice(1) + "$")) : r.names.push(new RegExp("^" + C + "$")));
  }
  function d() {
    const C = [
      ...r.names.map(_),
      ...r.skips.map(_).map((v) => "-" + v)
    ].join(",");
    return r.enable(""), C;
  }
  function p(C) {
    if (C[C.length - 1] === "*")
      return !0;
    let v, T;
    for (v = 0, T = r.skips.length; v < T; v++)
      if (r.skips[v].test(C))
        return !1;
    for (v = 0, T = r.names.length; v < T; v++)
      if (r.names[v].test(C))
        return !0;
    return !1;
  }
  function _(C) {
    return C.toString().substring(2, C.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function w(C) {
    return C instanceof Error ? C.stack || C.message : C;
  }
  function b() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var y0 = v0;
(function(f, i) {
  i.formatArgs = o, i.save = l, i.load = d, i.useColors = r, i.storage = p(), i.destroy = /* @__PURE__ */ (() => {
    let w = !1;
    return () => {
      w || (w = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), i.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function o(w) {
    if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + f.exports.humanize(this.diff), !this.useColors)
      return;
    const b = "color: " + this.color;
    w.splice(1, 0, b, "color: inherit");
    let C = 0, v = 0;
    w[0].replace(/%[a-zA-Z%]/g, (T) => {
      T !== "%%" && (C++, T === "%c" && (v = C));
    }), w.splice(v, 0, b);
  }
  i.log = console.debug || console.log || (() => {
  });
  function l(w) {
    try {
      w ? i.storage.setItem("debug", w) : i.storage.removeItem("debug");
    } catch {
    }
  }
  function d() {
    let w;
    try {
      w = i.storage.getItem("debug");
    } catch {
    }
    return !w && typeof process < "u" && "env" in process && (w = process.env.DEBUG), w;
  }
  function p() {
    try {
      return localStorage;
    } catch {
    }
  }
  f.exports = y0(i);
  const { formatters: _ } = f.exports;
  _.j = function(w) {
    try {
      return JSON.stringify(w);
    } catch (b) {
      return "[UnexpectedJSONParseError]: " + b.message;
    }
  };
})(gs, gs.exports);
var m0 = gs.exports;
const w0 = /* @__PURE__ */ ys(m0), fs = {};
function Ke(f) {
  if (!fs[f]) {
    const i = w0("ultraPacer:core");
    i(`loading debug for namespace "${f}"`), fs[f] = i.extend(f);
  }
  return fs[f];
}
function tu(f, i) {
  const r = f.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: i
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class rn extends Error {
  constructor(i, r) {
    super(i), this.name = "MissingDataError", this.field = r;
  }
}
const ms = Ke("geo"), _s = Re;
function b0(f) {
  const i = {};
  return _s.forEach((r) => {
    const o = {};
    o[r] = f, Object.assign(i, o);
  }), i;
}
function cu({ plan: f, course: i, breaks: r }) {
  var I;
  const o = ms.extend("calcSegments");
  o("exec"), E.isNumber(r[0]) && (r = r.filter((O) => O > 0 && ps(O, i.dist, 4)), r.unshift(0), r = r.map((O, $) => ({ start: O, end: r[$ + 1] || i.dist })));
  const l = f ? f.points : i.points;
  if (!(l != null && l.length))
    throw o(`${f ? "Plan" : "Course"} points are not defined.`), new rn((f ? "Plan" : "Course") + " points are not defined.", "points");
  const d = [];
  let p, _, w, b;
  const C = l[0].actual !== void 0 && l[l.length - 1].actual !== void 0;
  for (p = 0, _ = r.length; p < _; p++) {
    const O = r[p];
    He((I = r[p - 1]) == null ? void 0 : I.end, O.start, 4) ? w = b : w = f ? f.getPoint({ loc: O.start }) : i.getPoint({ loc: O.start }), b = f ? f.getPoint({ loc: O.end }) : i.getPoint({ loc: O.end });
    const $ = O.end - O.start, j = new uu({
      end: b.loc,
      len: $,
      gain: 0,
      loss: 0,
      alt: b.alt,
      // ending altitude
      grade: $ > 0 ? (b.alt - w.alt) / $ / 10 * (b.alt - w.alt > 0 ? i.gainScale : i.lossScale) : 0,
      delay: 0,
      factorsSum: b0(0),
      point1: w,
      point2: b
    });
    C && (j.actualTime = j.point2.actual.elapsed - j.point1.actual.elapsed, j.actualElapsed = j.point2.actual.elapsed), d.push(j);
  }
  const v = ({ seg: O, p1: $, p2: j }) => {
    const X = j.alt - $.alt;
    O[X > 0 ? "gain" : "loss"] += X * (X > 0 ? i.gainScale : i.lossScale), ds($, { plan: f, course: i });
    const nt = j.loc - $.loc;
    _s.forEach((bt) => {
      O.factorsSum[bt] += $.factors[bt] * nt;
    });
  };
  p = 1;
  let T, D, N;
  for (let O = 0; O < d.length; O++) {
    for (T = d[O]; Nr(l[p].loc, T.point1.loc, 4); )
      p++;
    for (D = T.point1; p < l.length && Nr(l[p].loc, T.point2.loc, 4); )
      N = l[p], v({ p1: D, p2: N, seg: T }), D = N, p++;
    v({ p1: D, p2: T.point2, seg: T }), f && (T.delay = f.delays.filter(($) => Br(T.point1.loc, $.loc, 4) && ps(T.point2.loc, $.loc, 4)).reduce(($, j) => $ + j, 0));
  }
  return d.forEach((O) => {
    O.factors = new Ur(
      Object.fromEntries(_s.map(($) => [$, O.factorsSum[$] / O.len]))
    );
  }), d;
}
function lu(f) {
  ms("createSegments"), f.plan && !f.course && (f.course = f.plan.course);
  const i = f.course.waypoints.filter((o) => o.tier < 3).sort((o, l) => o.loc - l.loc);
  f.breaks = i.map((o) => o.loc);
  const r = cu(f);
  if (!r.length)
    throw new Error("createSegments result is empty");
  return r.forEach((o, l) => {
    o.waypoint = i[l + 1];
  }), r;
}
function Wr(f) {
  ms(`createSplits:${f.unit}`), f.plan && !f.course && (f.course = f.plan.course);
  const i = f.unit === "kilometers" ? 1 : 0.621371, r = E.range(f.course.dist * i).map((l) => l / i);
  f.course.dist - E.last(r) > 1e-4 && r.push(f.course.dist), Object.assign(f, { breaks: r });
  const o = cu(f);
  if (!o.length)
    throw new Error("createSplits result is empty");
  return o;
}
class eu {
  constructor(i, r, o) {
    Object.defineProperty(this, "course", { writable: !0 }), this.point = r, this.course = i, this.loop = o;
  }
  get lat() {
    return this.point.lat;
  }
  get lon() {
    return this.point.lon;
  }
  get alt() {
    return this.point.alt;
  }
  get latlon() {
    return this.point.latlon;
  }
  // sgeo latlon object
  get grade() {
    return this.point.grade * (this.point.grade > 0 ? this.course.gainScale : this.course.lossScale);
  }
  get loc() {
    let i = this.point.loc * this.course.distScale;
    return this.loop && (i += this.course.loopDist * this.loop), i;
  }
}
var fu = { exports: {} };
(function(f, i) {
  (function() {
    var r = Math.PI, o = Math.sin, l = Math.cos, d = Math.tan, p = Math.asin, _ = Math.atan2, w = Math.acos, b = r / 180, C = 1e3 * 60 * 60 * 24, v = 2440588, T = 2451545;
    function D(R) {
      return R.valueOf() / C - 0.5 + v;
    }
    function N(R) {
      return new Date((R + 0.5 - v) * C);
    }
    function I(R) {
      return D(R) - T;
    }
    var O = b * 23.4397;
    function $(R, z) {
      return _(o(R) * l(O) - d(z) * o(O), l(R));
    }
    function j(R, z) {
      return p(o(z) * l(O) + l(z) * o(O) * o(R));
    }
    function X(R, z, q) {
      return _(o(R), l(R) * o(z) - d(q) * l(z));
    }
    function nt(R, z, q) {
      return p(o(z) * o(q) + l(z) * l(q) * l(R));
    }
    function bt(R, z) {
      return b * (280.16 + 360.9856235 * R) - z;
    }
    function St(R) {
      return R < 0 && (R = 0), 2967e-7 / Math.tan(R + 312536e-8 / (R + 0.08901179));
    }
    function Pt(R) {
      return b * (357.5291 + 0.98560028 * R);
    }
    function Gt(R) {
      var z = b * (1.9148 * o(R) + 0.02 * o(2 * R) + 3e-4 * o(3 * R)), q = b * 102.9372;
      return R + z + q + r;
    }
    function te(R) {
      var z = Pt(R), q = Gt(z);
      return {
        dec: j(q, 0),
        ra: $(q, 0)
      };
    }
    var Ht = {};
    Ht.getPosition = function(R, z, q) {
      var lt = b * -q, tt = b * z, ft = I(R), at = te(ft), ut = bt(ft, lt) - at.ra;
      return {
        azimuth: X(ut, tt, at.dec),
        altitude: nt(ut, tt, at.dec)
      };
    };
    var Mn = Ht.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    Ht.addTime = function(R, z, q) {
      Mn.push([R, z, q]);
    };
    var qn = 9e-4;
    function $r(R, z) {
      return Math.round(R - qn - z / (2 * r));
    }
    function Cn(R, z, q) {
      return qn + (R + z) / (2 * r) + q;
    }
    function Gn(R, z, q) {
      return T + R + 53e-4 * o(z) - 69e-4 * o(2 * q);
    }
    function zr(R, z, q) {
      return w((o(R) - o(z) * o(q)) / (l(z) * l(q)));
    }
    function Me(R) {
      return -2.076 * Math.sqrt(R) / 60;
    }
    function ge(R, z, q, lt, tt, ft, at) {
      var ut = zr(R, q, lt), mt = Cn(ut, z, tt);
      return Gn(mt, ft, at);
    }
    Ht.getTimes = function(R, z, q, lt) {
      lt = lt || 0;
      var tt = b * -q, ft = b * z, at = Me(lt), ut = I(R), mt = $r(ut, tt), Kt = Cn(0, tt, mt), Ft = Pt(Kt), Wt = Gt(Ft), _e = j(Wt, 0), gt = Gn(Kt, Ft, Wt), Rt, Le, wt, Bt, le, ee, ht = {
        solarNoon: N(gt),
        nadir: N(gt - 0.5)
      };
      for (Rt = 0, Le = Mn.length; Rt < Le; Rt += 1)
        wt = Mn[Rt], Bt = (wt[0] + at) * b, le = ge(Bt, tt, ft, _e, mt, Ft, Wt), ee = gt - (le - gt), ht[wt[1]] = N(ee), ht[wt[2]] = N(le);
      return ht;
    };
    function Hn(R) {
      var z = b * (218.316 + 13.176396 * R), q = b * (134.963 + 13.064993 * R), lt = b * (93.272 + 13.22935 * R), tt = z + b * 6.289 * o(q), ft = b * 5.128 * o(lt), at = 385001 - 20905 * l(q);
      return {
        ra: $(tt, ft),
        dec: j(tt, ft),
        dist: at
      };
    }
    Ht.getMoonPosition = function(R, z, q) {
      var lt = b * -q, tt = b * z, ft = I(R), at = Hn(ft), ut = bt(ft, lt) - at.ra, mt = nt(ut, tt, at.dec), Kt = _(o(ut), d(tt) * l(at.dec) - o(at.dec) * l(ut));
      return mt = mt + St(mt), {
        azimuth: X(ut, tt, at.dec),
        altitude: mt,
        distance: at.dist,
        parallacticAngle: Kt
      };
    }, Ht.getMoonIllumination = function(R) {
      var z = I(R || /* @__PURE__ */ new Date()), q = te(z), lt = Hn(z), tt = 149598e3, ft = w(o(q.dec) * o(lt.dec) + l(q.dec) * l(lt.dec) * l(q.ra - lt.ra)), at = _(tt * o(ft), lt.dist - tt * l(ft)), ut = _(l(q.dec) * o(q.ra - lt.ra), o(q.dec) * l(lt.dec) - l(q.dec) * o(lt.dec) * l(q.ra - lt.ra));
      return {
        fraction: (1 + l(at)) / 2,
        phase: 0.5 + 0.5 * at * (ut < 0 ? -1 : 1) / Math.PI,
        angle: ut
      };
    };
    function Ce(R, z) {
      return new Date(R.valueOf() + z * C / 24);
    }
    Ht.getMoonTimes = function(R, z, q, lt) {
      var tt = new Date(R);
      lt ? tt.setUTCHours(0, 0, 0, 0) : tt.setHours(0, 0, 0, 0);
      for (var ft = 0.133 * b, at = Ht.getMoonPosition(tt, z, q).altitude - ft, ut, mt, Kt, Ft, Wt, _e, gt, Rt, Le, wt, Bt, le, ee, ht = 1; ht <= 24 && (ut = Ht.getMoonPosition(Ce(tt, ht), z, q).altitude - ft, mt = Ht.getMoonPosition(Ce(tt, ht + 1), z, q).altitude - ft, Wt = (at + mt) / 2 - ut, _e = (mt - at) / 2, gt = -_e / (2 * Wt), Rt = (Wt * gt + _e) * gt + ut, Le = _e * _e - 4 * Wt * ut, wt = 0, Le >= 0 && (ee = Math.sqrt(Le) / (Math.abs(Wt) * 2), Bt = gt - ee, le = gt + ee, Math.abs(Bt) <= 1 && wt++, Math.abs(le) <= 1 && wt++, Bt < -1 && (Bt = le)), wt === 1 ? at < 0 ? Kt = ht + Bt : Ft = ht + Bt : wt === 2 && (Kt = ht + (Rt < 0 ? le : Bt), Ft = ht + (Rt < 0 ? Bt : le)), !(Kt && Ft)); ht += 2)
        at = mt;
      var ve = {};
      return Kt && (ve.rise = Ce(tt, Kt)), Ft && (ve.set = Ce(tt, Ft)), !Kt && !Ft && (ve[Rt > 0 ? "alwaysUp" : "alwaysDown"] = !0), ve;
    }, f.exports = Ht;
  })();
})(fu);
var M0 = fu.exports;
const C0 = /* @__PURE__ */ ys(M0), { getTimes: x0, getPosition: A0 } = C0;
class hu {
  constructor(i) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, i);
  }
  // lat and lon fields must be set before setting start
  set start(i) {
    this._data.start = i, Object.keys(this._cache).forEach((r) => {
      delete this._cache[r];
    });
  }
  get start() {
    return this._data.start;
  }
  get startTime() {
    return E.isNumber(this._cache.startTime) ? this._cache.startTime : (this._cache.startTime = tu(this.start, this.timezone), this._cache.startTime);
  }
  get hasTOD() {
    return this.start instanceof Date && !isNaN(this.start);
  }
  get sun() {
    if (this._cache.sun)
      return this._cache.sun;
    const i = x0(this.start, this.lat, this.lon), r = A0(i.nadir, this.lat, this.lon), o = {}, l = ["nadir", "dawn", "sunrise", "dusk", "sunset", "solarNoon"], d = ["nadir", "dawn", "sunrise", "dusk", "sunset", "noon"];
    return l.forEach((p, _) => {
      isNaN(i[p]) || (o[d[_]] = tu(i[p], this.timezone));
    }), o.nadirAltitude = r.altitude * 180 / Math.PI, this._cache.sun = o, this._cache.sun;
  }
  // return a date object at [seconds] from start
  dateAtElapsed(i) {
    const r = new Date(this.start);
    return r.setTime(r.getTime() + i * 1e3), r;
  }
  // return seconds since midnight for an input elapsed amount of time since start
  elapsedToTimeOfDay(i) {
    return (this.startTime + i) % 86400;
  }
  // return static object
  serialize() {
    return E.pick(this, ["start", "sun", "lat", "lon", "timezone"]);
  }
}
var bn = {};
(function(f) {
  f.parseDMS = function(r) {
    if (typeof l == "object")
      throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
    if (typeof r == "number" && isFinite(r))
      return Number(r);
    var o = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
    if (o[o.length - 1] == "" && o.splice(o.length - 1), o == "")
      return NaN;
    switch (o.length) {
      case 3:
        var l = o[0] / 1 + o[1] / 60 + o[2] / 3600;
        break;
      case 2:
        var l = o[0] / 1 + o[1] / 60;
        break;
      case 1:
        var l = o[0];
        break;
      default:
        return NaN;
    }
    return /^-|[WS]$/i.test(r.trim()) && (l = -l), Number(l);
  }, f.toDMS = function(r, o, l) {
    if (typeof r == "object")
      throw new TypeError("geo.toDMS - deg is [DOM?] object");
    if (isNaN(r))
      return null;
    if (typeof o > "u" && (o = "dms"), typeof l > "u")
      switch (o) {
        case "d":
          l = 4;
          break;
        case "dm":
          l = 2;
          break;
        case "dms":
          l = 0;
          break;
        default:
          o = "dms", l = 0;
      }
    switch (r = Math.abs(r), o) {
      case "d":
        _ = r.toFixed(l), _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), dms = _ + "°";
        break;
      case "dm":
        var d = (r * 60).toFixed(l), _ = Math.floor(d / 60), w = (d % 60).toFixed(l);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), w < 10 && (w = "0" + w), dms = _ + "°" + w + "′";
        break;
      case "dms":
        var p = (r * 3600).toFixed(l), _ = Math.floor(p / 3600), w = Math.floor(p / 60) % 60, b = (p % 60).toFixed(l);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), w < 10 && (w = "0" + w), b < 10 && (b = "0" + b), dms = _ + "°" + w + "′" + b + "″";
        break;
    }
    return dms;
  }, f.toLat = function(r, o, l) {
    var d = f.toDMS(r, o, l);
    return d == null ? "." : d.slice(1) + (r < 0 ? "S" : "N");
  }, f.toLon = function(r, o, l) {
    var d = f.toDMS(r, o, l);
    return d == null ? "." : d + (r < 0 ? "W" : "E");
  }, f.toBrng = function(r, o, l) {
    r = (Number(r) + 360) % 360;
    var d = f.toDMS(r, o, l);
    return d == null ? "." : d.replace("360", "0");
  };
  var i = 6371;
  f.latlon = function(r, o) {
    this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN;
  }, f.latlon.prototype.distanceTo = function(r, o) {
    typeof o > "u" && (o = 4);
    var l = this.distanceRadTo(r), d = i * l;
    return d.toPrecisionFixed(o);
  }, f.latlon.prototype.distanceRadTo = function(r) {
    var o = this.lat.toRad(), l = this.lng.toRad(), d = r.lat.toRad(), p = r.lng.toRad(), _ = d - o, w = p - l, b = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(o) * Math.cos(d) * Math.sin(w / 2) * Math.sin(w / 2), C = 2 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b));
    return C;
  }, f.latlon.prototype.bearingTo = function(r) {
    var o = this.bearingRadTo(r);
    return (o.toDeg() + 360) % 360;
  }, f.latlon.prototype.bearingRadTo = function(r) {
    var o = this.lat.toRad(), l = r.lat.toRad(), d = (r.lng - this.lng).toRad(), p = Math.cos(o) * Math.sin(l) - Math.sin(o) * Math.cos(l) * Math.cos(d), _ = Math.cos(l) * Math.sin(d), w = Math.atan2(_, p);
    return w;
  }, f.latlon.prototype.finalBearingTo = function(r) {
    var o = r.lat.toRad(), l = this.lat.toRad(), d = (this.lng - r.lng).toRad(), p = Math.sin(d) * Math.cos(l), _ = Math.cos(o) * Math.sin(l) - Math.sin(o) * Math.cos(l) * Math.cos(d), w = Math.atan2(p, _);
    return (w.toDeg() + 180) % 360;
  }, f.latlon.prototype.midpointTo = function(r) {
    var o = this.lat.toRad(), l = r.lat.toRad(), d = (r.lng - this.lng).toRad(), p = Math.cos(l) * Math.cos(d), _ = Math.cos(l) * Math.sin(d), w = this.lng.toRad(), b = Math.atan2(Math.sin(o) + Math.sin(l), Math.sqrt((Math.cos(o) + p) * (Math.cos(o) + p) + _ * _)), C = w + Math.atan2(_, Math.cos(o) + p);
    return C = (C + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(b.toDeg(), C.toDeg());
  }, f.midpoint = function(r) {
    var o = 0, l = 0, d = 0;
    for (var p in r) {
      var _ = r[p], w = _.lat * Math.PI / 180, b = _.lng * Math.PI / 180, C = Math.cos(w) * Math.cos(b), v = Math.cos(w) * Math.sin(b), T = Math.sin(w);
      o += C, l += v, d += T;
    }
    o = o / r.length, l = l / r.length, d = d / r.length;
    var D = Math.atan2(l, o), N = Math.sqrt(o * o + l * l), I = Math.atan2(d, N);
    return new f.latlon(I * 180 / Math.PI, D * 180 / Math.PI);
  }, f.latlon.prototype.interpolate = function(r, o) {
    var l = this.distanceRadTo(r), d = this.bearingRadTo(r), p = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var w = Math.sin(p), b = Math.cos(p), C = [], v = 0; v < o; v++) {
      var T = 1 / (o - 1) * v, D = l * T, N = Math.sin(D), I = Math.cos(D), O = Math.asin(w * I + b * N * Math.cos(d)), $ = _ + Math.atan2(Math.sin(d) * N * b, I - w * Math.sin(O)), j = O.toDeg(), X = $.toDeg();
      for (j > 90 && (j = 90), j < -90 && (j = -90); X > 180; )
        X -= 360;
      for (; X <= -180; )
        X += 360;
      C.push(new f.latlon(j, X));
    }
    return C;
  }, f.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / i, r = r.toRad();
    var l = this.lat.toRad(), d = this.lng.toRad(), p = Math.asin(Math.sin(l) * Math.cos(o) + Math.cos(l) * Math.sin(o) * Math.cos(r)), _ = d + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(l),
      Math.cos(o) - Math.sin(l) * Math.sin(p)
    );
    return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(p.toDeg(), _.toDeg());
  }, f.latlon.intersection = function(r, o, l, d) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, d = typeof d == "number" ? d : typeof d == "string" && trim(d) != "" ? +d : NaN;
    var p = r.lat.toRad(), _ = r.lng.toRad(), w = l.lat.toRad(), b = l.lng.toRad(), C = o.toRad(), v = d.toRad(), T = w - p, D = b - _, N = 2 * Math.asin(Math.sqrt(Math.sin(T / 2) * Math.sin(T / 2) + Math.cos(p) * Math.cos(w) * Math.sin(D / 2) * Math.sin(D / 2)));
    if (N == 0)
      return null;
    var I = Math.acos((Math.sin(w) - Math.sin(p) * Math.cos(N)) / (Math.sin(N) * Math.cos(p)));
    isNaN(I) && (I = 0);
    var O = Math.acos((Math.sin(p) - Math.sin(w) * Math.cos(N)) / (Math.sin(N) * Math.cos(w)));
    if (Math.sin(b - _) > 0)
      var $ = I, j = 2 * Math.PI - O;
    else
      $ = 2 * Math.PI - I, j = O;
    var X = (C - $ + Math.PI) % (2 * Math.PI) - Math.PI, nt = (j - v + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(X) == 0 && Math.sin(nt) == 0 || Math.sin(X) * Math.sin(nt) < 0)
      return null;
    var bt = Math.acos(-Math.cos(X) * Math.cos(nt) + Math.sin(X) * Math.sin(nt) * Math.cos(N)), St = Math.atan2(
      Math.sin(N) * Math.sin(X) * Math.sin(nt),
      Math.cos(nt) + Math.cos(X) * Math.cos(bt)
    ), Pt = Math.asin(Math.sin(p) * Math.cos(St) + Math.cos(p) * Math.sin(St) * Math.cos(C)), Gt = Math.atan2(
      Math.sin(C) * Math.sin(St) * Math.cos(p),
      Math.cos(St) - Math.sin(p) * Math.sin(Pt)
    ), te = _ + Gt;
    return te = (te + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(Pt.toDeg(), te.toDeg());
  }, f.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = i, l = this.lat.toRad(), d = r.lat.toRad(), p = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), w = Math.log(Math.tan(d / 2 + Math.PI / 4) / Math.tan(l / 2 + Math.PI / 4)), b = isFinite(p / w) ? p / w : Math.cos(l);
    Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
    var C = Math.sqrt(p * p + b * b * _ * _) * o;
    return C.toPrecisionFixed(4);
  }, f.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), l = r.lat.toRad(), d = (r.lng - this.lng).toRad(), p = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(d) > Math.PI && (d = d > 0 ? -(2 * Math.PI - d) : 2 * Math.PI + d);
    var _ = Math.atan2(d, p);
    return (_.toDeg() + 360) % 360;
  }, f.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var l = i, d = parseFloat(o) / l, p = this.lat.toRad(), _ = this.lng.toRad();
    r = r.toRad();
    var w = d * Math.cos(r);
    Math.abs(w) < 1e-10 && (w = 0);
    var b = p + w, C = Math.log(Math.tan(b / 2 + Math.PI / 4) / Math.tan(p / 2 + Math.PI / 4)), v = isFinite(w / C) ? w / C : Math.cos(p), T = d * Math.sin(r) / v;
    Math.abs(b) > Math.PI / 2 && (b = b > 0 ? Math.PI - b : -Math.PI - b);
    var D = (_ + T + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new f.latlon(b.toDeg(), D.toDeg());
  }, f.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), l = this.lng.toRad(), d = r.lat.toRad(), p = r.lng.toRad();
    Math.abs(p - l) > Math.PI && (l += 2 * Math.PI);
    var _ = (o + d) / 2, w = Math.tan(Math.PI / 4 + o / 2), b = Math.tan(Math.PI / 4 + d / 2), C = Math.tan(Math.PI / 4 + _ / 2), v = ((p - l) * Math.log(C) + l * Math.log(b) - p * Math.log(w)) / Math.log(b / w);
    return isFinite(v) || (v = (l + p) / 2), v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(_.toDeg(), v.toDeg());
  }, f.latlon.prototype.lat = function(r, o) {
    return typeof r > "u" ? this.lat : f.toLat(this.lat, r, o);
  }, f.latlon.prototype.lon = function(r, o) {
    return typeof r > "u" ? this.lng : f.toLon(this.lng, r, o);
  }, f.latlon.prototype.toString = function(r, o) {
    return typeof r > "u" && (r = "dms"), f.toLat(this.lat, r, o) + ", " + f.toLon(this.lng, r, o);
  }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
  }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
    var o = this.toPrecision(r);
    return o = o.replace(/(.+)e\+(.+)/, function(l, d, p) {
      d = d.replace(/\./, "");
      for (var _ = d.length - 1; p-- > _; )
        d = d + "0";
      return d;
    }), o = o.replace(/(.+)e-(.+)/, function(l, d, p) {
      for (d = d.replace(/\./, ""); p-- > 1; )
        d = "0" + d;
      return "0." + d;
    }), o;
  }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  });
})(bn);
class pu {
  constructor(i) {
    if (i.length === 3)
      [this.lat, this.lon, this.alt] = i;
    else if (i.length === 5)
      [this.loc, this.lat, this.lon, this.alt, this.grade] = i;
    else
      throw new Error("Point data invalid");
  }
  get __class() {
    return "Point";
  }
  get latlon() {
    return new bn.latlon(this.lat, this.lon);
  }
}
function vs(f, i, r) {
  const o = new pu([f.lat, f.lon, f.alt]);
  o.loc = r;
  const l = new bn.latlon(f.lat, f.lon), d = new bn.latlon(i.lat, i.lon), p = Math.abs(o.loc - f.loc), _ = l.bearingTo(d), w = l.destinationPoint(_, p);
  return o.lat = Number(w.lat), o.lon = Number(w.lng), ["grade"].forEach((v) => {
    o[v] = f[v];
  }), ["alt"].forEach((v) => {
    o[v] = nn(f.loc, i.loc, f[v], i[v], o.loc);
  }), o;
}
const S0 = Ke("models:Waypoint");
class nu {
  constructor(i) {
    Object.defineProperty(this, "_data", { value: {} }), i = E.defaults(i, { loop: 1 }), Object.assign(this, i);
  }
  get __class() {
    return "Waypoint";
  }
  get site() {
    return this._data.site;
  }
  set site(i) {
    if (i.__class !== "Site")
      throw new TypeError('Waypoint "site" field must be of "Site" class.');
    this._data.site = i;
  }
  get course() {
    return this.site.course;
  }
  get name() {
    return this.loop >= 2 && this.type !== "finish" ? `${this.site.name} ${this.loop}` : this.site.name;
  }
  get description() {
    return this.site.description;
  }
  get loc() {
    return (this.site.percent + this.loop - 1) * this.course.loopDist;
  }
  set loc(i) {
    if (!E.isNumber(i))
      throw new Error("Wrong format for Waypoint.loc");
    this.type === "start" ? this.site.percent = 0 : this.type === "finish" ? this.site.percent = 1 : this.site.percent = i / this.course.loopDist % 1;
  }
  get lat() {
    return E.isNumber(this.site.lat) || this.refreshLLA(), this.site.lat;
  }
  get lon() {
    return E.isNumber(this.site.lon) || this.refreshLLA(), this.site.lon;
  }
  get alt() {
    var i, r;
    return this.site.elevation === void 0 && ((r = (i = this.course) == null ? void 0 : i.track) != null && r.points) && this.refreshLLA(), this.site.elevation;
  }
  set lat(i) {
    this.site.lat = i;
  }
  set lon(i) {
    this.site.lon = i;
  }
  set alt(i) {
    this.site.elevation = i;
  }
  get tier() {
    return this.site.tier || 1;
  }
  get type() {
    return this.site.type;
  }
  get dropbags() {
    return this.site.dropbags || !1;
  }
  set dropbags(i) {
    this.site.dropbags = !!i;
  }
  get crew() {
    return this.site.crew || !1;
  }
  set crew(i) {
    this.site.crew = !!i;
  }
  get terrainFactor() {
    return this.site.terrainFactor;
  }
  get terrainType() {
    return this.site.terrainType;
  }
  len(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.len;
  }
  gain(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.gain;
  }
  loss(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.loss;
  }
  time(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.time;
  }
  pace(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.pace;
  }
  elapsed(i) {
    if (this.loc === 0)
      return 0;
    const r = this.matchingSegment(i);
    if (r)
      return r.elapsed;
  }
  get hasTypicalDelay() {
    return this.type === "aid" || this.type === "water" || this.loop >= 2 && this.type === "start";
  }
  delay(i, r) {
    console.warn('"Waypoint.delay" field is deprecated.');
    const o = r.find((l) => l.site === this.site._id && this.loop === l.loop);
    return o ? o.delay : this.hasTypicalDelay ? i : 0;
  }
  get cutoff() {
    var i;
    if (this.tier === 1) {
      const r = (i = this.site.cutoffs) == null ? void 0 : i.find((o) => o.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(i) {
    var o;
    const r = (o = this.site.cutoffs) == null ? void 0 : o.findIndex((l) => l.loop === this.loop);
    r >= 0 ? i ? this.site.cutoffs[r].time = i : this.site.cutoffs.splice(r, 1) : i && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: i, loop: this.loop }));
  }
  matchingSegment(i) {
    return i.find(
      (r) => r.waypoint.site._id === this.site._id && r.waypoint.loop === this.loop
    );
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    var d, p, _;
    if (S0("refreshLLA"), !((_ = (p = (d = this.course) == null ? void 0 : d.track) == null ? void 0 : p.points) != null && _.length))
      throw new rn("No track points defined", "points");
    let i, r, o, l;
    this.type === "start" ? { lat: i, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: i, lon: r, alt: o } = E.last(this.course.track.points) : { lat: i, lon: r, alt: o, ind: l } = this.course.track.getLLA(this.loc / this.course.distScale, {
      start: this.site.pointsIndex || 0
    }), this.lat = i, this.lon = r, this.alt = o, l && (this.site.pointsIndex = l), this.course.clearCache(1);
  }
  serialize() {
    const i = E.pick(this, [
      "loop",
      "name",
      "type",
      "cutoff",
      "loc",
      "lat",
      "lon",
      "alt",
      "tier",
      "crew",
      "dropbags",
      "terrainType",
      "terrainFactor"
    ]);
    return i.site = this.site._id, i;
  }
}
const kr = Ke("models:Waypoint");
class hs {
  constructor(i) {
    if (kr(`constructor: ${i.name || "unnamed"}`), Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), i = E.defaults(i, { cutoffs: [] }), !i.course)
      throw new Error('Site requires "course" field to be defined.');
    Object.assign(this, i);
  }
  clearCache() {
    kr(`clearCache: ${this.name}`), Object.keys(this._cache).forEach((i) => {
      delete this._cache[i];
    });
  }
  get __class() {
    return "Site";
  }
  get course() {
    return this._data.course;
  }
  set course(i) {
    if (i.__class !== "Course")
      throw new TypeError('Site "course" field must be of "Course" class.');
    this._data.course = i;
  }
  get percent() {
    switch (this.type) {
      case "start":
        return 0;
      case "finish":
        return 1;
      default:
        return this._data.percent;
    }
  }
  set percent(i) {
    this._data.percent = i;
  }
  get waypoints() {
    return this._cache.waypoints ? this._cache.waypoints : (kr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._cache.waypoints = [new nu({ site: this, loop: this.course.loops })] : this._cache.waypoints = E.range(this.course.loops).map(
      (i) => new nu({ site: this, loop: i + 1 })
    ), this._cache.waypoints);
  }
  serialize() {
    kr(`serialize: ${this.name}`);
    const i = Object.keys(this);
    return i.push("percent"), E.pick(this, i);
  }
}
const du = ({ points: f, locs: i, gt: r }) => {
  const o = ou(
    f.map((d) => d.loc),
    f.map((d) => d.alt),
    i,
    r
  ), l = [];
  return i.forEach((d, p) => {
    let _ = o[p][0] / 10;
    _ > 50 ? _ = 50 : _ < -50 && (_ = -50);
    const w = d * o[p][0] + o[p][1];
    l.push({
      grade: _,
      alt: w
    });
  }), l;
};
function P0(f) {
  const i = [];
  let r = 0;
  for (r = 0; r < f.length; r++)
    i.push(f[r].loc);
  const o = du({ points: f, locs: i, gt: 0.05 });
  f.forEach((l, d) => {
    l.grade = o[d].grade;
  });
}
const T0 = (f) => {
  let i = 0, r = 0;
  f[0].loc = 0;
  for (let o = 1, l = f.length; o < l; o++)
    i = Number(f[o - 1].latlon.distanceTo(f[o].latlon)), r += i, f[o].loc = r;
}, wn = Ke("models:Track");
class ws {
  constructor(i) {
    wn("Creating new Track object"), Object.defineProperty(this, "_data", { value: { stats: {} } }), Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "type", { value: "course", enumerable: !0, writable: !0 }), i.type && (this.type = i.type), wn(`Initializing fields: ${Object.keys(i).join(", ")}`), Object.assign(this, i);
  }
  get __class() {
    return "Track";
  }
  clearCache() {
    Object.keys(this._cache).forEach((i) => {
      delete this._cache[i];
    });
  }
  set points(i) {
    wn("set-points"), this.clearCache(), Array.isArray(i) || (i = i.lat.map((r, o) => [i.lat[o], i.lon[o], i.alt[o]])), i[0].__class !== "Point" && (i = i.map((r) => new pu(r))), T0(i), P0(i), this._data.points = i, wn(`set-points - ${i.length} points`);
  }
  get points() {
    return this._data.points;
  }
  set start(i) {
    this._data.start = i;
  }
  get start() {
    var r;
    const i = (r = this.points) != null && r[0] ? E.pick(this.points[0], ["lat", "lon"]) : this._data.start;
    if (!i)
      throw new rn("Neither start not track points are defined.", "points");
    return i;
  }
  set finish(i) {
    this._data.finish = i;
  }
  get finish() {
    var r;
    const i = (r = this.points) != null && r.length ? E.pick(E.last(this.points), ["lat", "lon"]) : this._data.finish;
    if (!i)
      throw new rn("Neither finish nor points points are defined.", "points");
    return i;
  }
  set stats(i) {
    Object.assign(this._data, i);
  }
  get stats() {
    if (this._cache.stats)
      return this._cache.stats;
    if (this.points) {
      wn("Calculating");
      const i = E.last(this.points).loc;
      let r = 0, o = 0, l = 0, d = this.points[0].alt;
      return this.points.forEach((p) => {
        l = p.alt - d, l < 0 ? o += l : r += l, d = p.alt;
      }), this._cache.stats = { gain: r, loss: o, dist: i }, this._cache.stats;
    }
    return this._data.stats;
  }
  get dist() {
    return this.stats.dist;
  }
  set dist(i) {
    this._data.stats.dist = i;
  }
  get gain() {
    return this.stats.gain;
  }
  set gain(i) {
    this._data.stats.gain = i;
  }
  get loss() {
    return this.stats.loss;
  }
  set loss(i) {
    this._data.stats.loss = i;
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(i, r = {}) {
    const o = Array.isArray(i), l = o ? [...i] : [i];
    l.forEach((C, v) => {
      C > this.dist && (l[v] = C % this.dist);
    });
    let d = l.length === 1 && r.start && r.start < this.points.length - 1 ? r.start : 0;
    const p = !!(d && this.points[d].loc > l[0]), _ = [], w = this.points.length - 1;
    i = l.shift();
    function b(C) {
      return p ? C + 1 : C - 1;
    }
    for (; d <= w && d >= 0; ) {
      let C, v;
      if (i === 0 ? (C = this.points[0], v = 0) : He(i, this.dist, 4) ? (C = E.last(this.points), v = this.points.length - 1) : !p && (d === w || this.points[d].loc >= i) || p && (d === 0 || this.points[d].loc <= i) ? this.points[d].loc === i || !p && d === w || p && d === 0 ? (C = this.points[d], v = d) : (C = vs(this.points[b(d)], this.points[d], i), v = d) : p ? d-- : d++, C) {
        const { lat: T, lon: D, alt: N, grade: I } = C;
        if (_.push({ lat: T, lon: D, alt: N, grade: I, ind: v }), i = l.shift(), i == null)
          break;
      }
    }
    return o ? _ : _[0];
  }
  getNearestPoint(i, r, o) {
    let d = this.points.findIndex((w) => w === r), p = this.points[d], _ = 0;
    for (; o > 0.025; ) {
      const w = o / 5, b = [p];
      for (let T = 1; T <= 5; T++) {
        const D = p.loc + w * T;
        if (D <= this.dist) {
          for (; this.points[d + 1].loc < D && d < this.points.length - 1; )
            d++;
          b.push(this.points[d]);
        }
      }
      const C = b.map((T) => Number(i.distanceTo(T.latlon)));
      _ = Math.min(...C);
      const v = C.findIndex((T) => T === _);
      p = b[v], o = o / 5;
    }
    return {
      point: p,
      delta: _
    };
  }
  /**
   * Returns nearest location to input lat/lon pair.
   *
   * @param {Number[]}  ll        [lat, lon] array.
   * @param {Number}    [start]   starting location in meters.
   * @param {Number}    [limit]   max distance it can move.
   * @return {Number}             The nearest location to input lat/lon pair.
   */
  getNearestLoc(i, r = null, o) {
    const d = new bn.latlon(i[0], i[1]);
    let p, _;
    const w = (b, C) => {
      for (_ = b; C > 0.025; ) {
        const v = C / 5;
        let T = [];
        for (let I = -5; I <= 5; I++) {
          const O = _ + v * I;
          O > 0 && O <= this.dist && T.push(Math.max(0, Math.min(O, this.dist)));
        }
        T = T.filter((I, O, $) => $.indexOf(I) === O);
        const D = this.getLLA(T);
        D.forEach((I) => {
          const O = new bn.latlon(I.lat, I.lon);
          I.dist = Number(d.distanceTo(O));
        }), p = D.reduce((I, O) => Math.min(I, O.dist), D[0].dist);
        const N = D.findIndex((I) => I.dist === p);
        _ = T[N], C = C / 5;
      }
    };
    if (r !== null) {
      r = Math.min(r, this.dist);
      const b = Math.max(0.5, 0.05 * this.dist);
      if (w(r, b), p < 0.1)
        return _;
    }
    return r = this.dist / 2, o = Math.max(this.dist - r, r), w(r, o), _;
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity({ spacing: i, length: r } = {}) {
    const o = wn.extend("reduceDensity");
    if (i || (i = 0.025), r || (r = this.points.length / 2), this.dist / i > r / 2)
      return o("Does not meet criteria"), this;
    const l = this.dist, d = Math.floor(l / i) + 1, p = Array(d).fill(0).map((v, T) => Nt(T++ * i, 3));
    p[p.length - 1] < l && p.push(l);
    const _ = du({ points: this.points, locs: p, gt: 2 * i }), w = this.getLLA(p, 0).map((v, T) => [
      Nt(v.lat, 6),
      Nt(v.lon, 6),
      Nt(_[T].alt, 2)
    ]), b = this.source, C = new ws({ source: b, points: w });
    return o(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
const be = Ke("models:Course");
class E0 {
  constructor(i) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.assign(this, i);
  }
  get __class() {
    return "CourseSplits";
  }
  get segments() {
    var i;
    return (i = this._cache.segments) != null && i.length || (this._cache.segments = lu({ course: this.course })), this._cache.segments;
  }
  set segments(i) {
    this._cache.segments = i;
  }
  get miles() {
    var i;
    return (i = this._cache.miles) != null && i.length || (this._cache.miles = Wr({ unit: "miles", course: this.course })), this._cache.miles;
  }
  set miles(i) {
    this._cache.miles = i;
  }
  get kilometers() {
    var i;
    return (i = this._cache.kilometers) != null && i.length || (this._cache.kilometers = Wr({ unit: "kilometers", course: this.course })), this._cache.kilometers;
  }
  set kilometers(i) {
    this._cache.kilometers = i;
  }
}
const I0 = ["cache", "distance"];
class z0 {
  constructor(i) {
    Object.defineProperty(this, "_data", {
      value: i._data || {
        sites: [
          new hs({
            course: this,
            _id: E.random(1e4, 2e4),
            name: "Start",
            type: "start",
            percent: 0
          }),
          new hs({
            course: this,
            _id: E.random(3e4, 4e4),
            name: "Finish",
            type: "finish",
            percent: 1
          })
        ]
      },
      enumerable: !0
    }), Object.defineProperty(this, "_cache", { value: {} });
    const r = Object.keys(i).filter((o) => !I0.includes(o));
    Object.assign(this, E.pick(i, r));
  }
  get __class() {
    return "Course";
  }
  get loops() {
    return this._data.loops || 1;
  }
  set loops(i) {
    i !== this._data.loops && (this._data.loops = i, this.clearCache(2));
  }
  get dist() {
    var i;
    return this._cache.dist || (this._cache.dist = this._data.dist || ((i = this.track) != null && i.dist ? this.track.dist * this.loops : void 0));
  }
  get gain() {
    var i;
    return this._cache.gain || (this._cache.gain = this._data.gain || ((i = this.track) != null && i.gain ? this.track.gain * this.loops : void 0));
  }
  get loss() {
    var i;
    return this._cache.loss || (this._cache.loss = this._data.loss || ((i = this.track) != null && i.loss ? this.track.loss * this.loops : void 0));
  }
  set dist(i) {
    He(i, this._data.dist, 6) || (be(`overriding dist to ${i}`), this._data.dist = i, this.clearCache(2));
  }
  set gain(i) {
    He(i, this._data.gain, 6) || (be(`overriding gain to ${i}`), this._data.gain = i, this.clearCache(2));
  }
  set loss(i) {
    He(i, this._data.loss, 6) || (be(`overriding loss to ${i}`), this._data.loss = i, this.clearCache(2));
  }
  get distScale() {
    return this._data.dist ? this._data.dist / (this.track.dist * this.loops) : 1;
  }
  get gainScale() {
    return this._data.gain ? this._data.gain / (this.track.gain * this.loops) : 1;
  }
  get lossScale() {
    return this._data.loss ? this._data.loss / (this.track.loss * this.loops) : 1;
  }
  get loopDist() {
    return this.dist / this.loops;
  }
  get loopGain() {
    return this.gain / this.loops;
  }
  get loopLoss() {
    return this.loss / this.loops;
  }
  // create waypoints from sites:
  get sites() {
    return this._data.sites;
  }
  set sites(i) {
    this._data.sites = i.map(
      (r) => r.__class === "Site" ? r : new hs(E.assign(r, { course: this }))
    ), this.clearCache(1);
  }
  clearCache(i = 1) {
    be(`clearCache-${i}`), (i === 1 ? ["waypoints", "terrainFactors", "cutoffs", "stats", "splits"] : Object.keys(this._cache)).forEach((o) => {
      delete this._cache[o];
    }), i === 2 && this.sites.forEach((o) => {
      o.clearCache();
    });
  }
  get waypoints() {
    var r;
    if (this._cache.waypoints)
      return this._cache.waypoints;
    if (!((r = this.track) != null && r.dist))
      return [];
    let i = [];
    return this.sites.forEach((o) => {
      i.push(...o.waypoints);
    }), i = i.sort((o, l) => o.loc - l.loc), this._cache.waypoints = i, this._cache.waypoints;
  }
  get track() {
    return this._data.track;
  }
  set track(i) {
    be("set-track"), i.__class === "Track" ? this._data.track = i : this._data.track = new ws(i), this.clearCache(2);
  }
  get points() {
    var i, r;
    if (this._cache.points)
      return this._cache.points;
    if (be("generating points array"), !((r = (i = this.track) == null ? void 0 : i.points) != null && r.length))
      throw new rn("Track points are not defined.", "points");
    this._cache.points = new Array(this.track.points.length * this.loops);
    for (let o = 0; o < this.loops; o++)
      for (let l = 0; l < this.track.points.length; l++)
        this.points[l + o * this.track.points.length] = new eu(
          this,
          this.track.points[l],
          o
        );
    return this._cache.points;
  }
  set points(i) {
    throw new Error("cannot set points directly");
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param {Number} args.loc - The location (in km) to determine value.
   * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
   * @return {CoursePoint} The CoursePoint at input location.
   */
  getPoint({ loc: i, insert: r = !1 }) {
    const o = this.points.findIndex((b) => Br(b.loc, i, 4)), l = this.points[o];
    if (He(l.loc, i, 4))
      return l;
    be(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${i}`);
    const d = o - 1, p = this.points[d], _ = vs(p.point, l.point, i % this.loopDist / this.distScale), w = new eu(this, _, Math.floor(i / this.loopDist));
    return p.actual && l.actual && (w.actual = vs(p.actual, l.actual, i), w.actual.elapsed = nn(p.loc, l.loc, p.actual.elapsed, l.actual.elapsed, w.loc)), r && this.points.splice(o, 0, w), w;
  }
  refreshWaypointLLAs() {
    this.waypoints.filter((i) => i.loop === 1 || i.type === "finish").forEach((i) => {
      i.refreshLLA();
    });
  }
  // terrainFactors: array of TerrainFactor objects only where actual terrain factor values exist
  get terrainFactors() {
    if (this._cache.terrainFactors)
      return this._cache.terrainFactors;
    be("regenerating terrainFactors");
    const i = this.waypoints.filter(
      (r, o) => {
        var l;
        return o === 0 || !E.isNil(r.terrainFactor) && r.terrainFactor !== ((l = this.waypoints[o - 1]) == null ? void 0 : l.terrainFactor);
      }
    );
    return this._cache.terrainFactors = i.map((r, o) => new F0({
      startWaypoint: r,
      endWaypoint: i[o + 1] || E.last(this.waypoints),
      value: r.terrainFactor
    })), this._cache.terrainFactors;
  }
  // terrainTypes: array of TerrainType objects only where actual terrain type changes exist
  get terrainTypes() {
    if (this._cache.terrainTypes)
      return this._cache.terrainTypes;
    be("regenerating terrainTypes");
    const i = this.waypoints.filter(
      (r, o) => {
        var l;
        return !E.isNil(r.terrainType) && r.terrainType !== ((l = this.waypoints[o - 1]) == null ? void 0 : l.terrainType);
      }
    );
    return this._cache.terrainTypes = i.map((r, o) => new R0({
      startWaypoint: r,
      endWaypoint: i[o + 1] || E.last(this.waypoints),
      value: r.terrainType
    })), this._cache.terrainTypes;
  }
  get cutoffs() {
    return this._cache.cutoffs ? this._cache.cutoffs : (this._cache.cutoffs = this.waypoints.filter((i) => i.cutoff).map((i) => new O0({ waypoint: i })), this._cache.cutoffs);
  }
  get splits() {
    return this._cache.splits || (this._cache.splits = new E0({ course: this })), this._cache.splits;
  }
  // calculate max and min values along course
  get stats() {
    if (this._cache.stats)
      return this._cache.stats;
    be("stats:calculate");
    const i = this.track.points.map((p) => p.alt), r = this.track.points.map((p) => p.grade), o = this.terrainFactors.map((p) => p.value / 100 + 1), l = {
      altitude: {
        avg: E.sum(
          this.track.points.map((p, _) => {
            var w;
            return p.alt * (p.loc - (((w = this.track.points[_ - 1]) == null ? void 0 : w.loc) || 0));
          })
        ) / this.track.dist,
        max: E.max(i),
        min: E.min(i)
      },
      grade: {
        avg: (E.last(this.track.points).alt - this.track.points[0].alt) / this.track.dist / 10,
        max: E.max(r),
        min: E.min(r)
      },
      terrain: {
        avg: (E.sumBy(this.terrainFactors, (p) => (p.end - p.start) * p.value) / this.dist + 100) / 100,
        max: E.max(o),
        min: E.min(o)
      }
    }, d = (p) => this.terrainFactors.reduce((_, w) => w.value / 100 + 1 === p ? _ + w.end - w.start : _, 0);
    return Object.assign(l.terrain, {
      maxDist: d(l.terrain.max),
      minDist: d(l.terrain.min)
    }), this._cache.stats = l, l;
  }
  set stats(i) {
    this._cache.stats = i;
  }
  set eventStart(i) {
    i ? this._data.eventStart = new Date(i) : delete this._data.eventStart, delete this._cache.event;
  }
  get eventStart() {
    return this._data.eventStart;
  }
  set eventTimezone(i) {
    i ? this._data.eventTimezone = i : delete this._data.eventTimezone, delete this._cache.event;
  }
  get eventTimezone() {
    return this._data.eventTimezone;
  }
  get event() {
    var o;
    if (this._cache.event)
      return this._cache.event;
    const i = this.eventStart || void 0, r = this.eventTimezone || void 0;
    return this._cache.event = i && r && ((o = this.track) != null && o.start) ? new hu({
      ...this.track.start,
      start: i,
      timezone: r
    }) : void 0, this._cache.event;
  }
}
class O0 {
  constructor(i) {
    Object.assign(this, i);
  }
  get loc() {
    return this.waypoint.loc;
  }
  get time() {
    return this.waypoint.cutoff;
  }
}
class F0 {
  constructor(i) {
    i = E.defaults(i, { value: 0 }), Object.assign(this, i);
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class R0 {
  constructor(i) {
    Object.assign(this, i);
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var zn = {};
(function(f) {
  (function() {
    var i = {
      not_string: /[^s]/,
      not_bool: /[^t]/,
      not_type: /[^T]/,
      not_primitive: /[^v]/,
      number: /[diefg]/,
      numeric_arg: /[bcdiefguxX]/,
      json: /[j]/,
      not_json: /[^j]/,
      text: /^[^\x25]+/,
      modulo: /^\x25{2}/,
      placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
      key: /^([a-z_][a-z_\d]*)/i,
      key_access: /^\.([a-z_][a-z_\d]*)/i,
      index_access: /^\[(\d+)\]/,
      sign: /^[+-]/
    };
    function r(_) {
      return l(p(_), arguments);
    }
    function o(_, w) {
      return r.apply(null, [_].concat(w || []));
    }
    function l(_, w) {
      var b = 1, C = _.length, v, T = "", D, N, I, O, $, j, X, nt;
      for (D = 0; D < C; D++)
        if (typeof _[D] == "string")
          T += _[D];
        else if (typeof _[D] == "object") {
          if (I = _[D], I.keys)
            for (v = w[b], N = 0; N < I.keys.length; N++) {
              if (v == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', I.keys[N], I.keys[N - 1]));
              v = v[I.keys[N]];
            }
          else
            I.param_no ? v = w[I.param_no] : v = w[b++];
          if (i.not_type.test(I.type) && i.not_primitive.test(I.type) && v instanceof Function && (v = v()), i.numeric_arg.test(I.type) && typeof v != "number" && isNaN(v))
            throw new TypeError(r("[sprintf] expecting number but found %T", v));
          switch (i.number.test(I.type) && (X = v >= 0), I.type) {
            case "b":
              v = parseInt(v, 10).toString(2);
              break;
            case "c":
              v = String.fromCharCode(parseInt(v, 10));
              break;
            case "d":
            case "i":
              v = parseInt(v, 10);
              break;
            case "j":
              v = JSON.stringify(v, null, I.width ? parseInt(I.width) : 0);
              break;
            case "e":
              v = I.precision ? parseFloat(v).toExponential(I.precision) : parseFloat(v).toExponential();
              break;
            case "f":
              v = I.precision ? parseFloat(v).toFixed(I.precision) : parseFloat(v);
              break;
            case "g":
              v = I.precision ? String(Number(v.toPrecision(I.precision))) : parseFloat(v);
              break;
            case "o":
              v = (parseInt(v, 10) >>> 0).toString(8);
              break;
            case "s":
              v = String(v), v = I.precision ? v.substring(0, I.precision) : v;
              break;
            case "t":
              v = String(!!v), v = I.precision ? v.substring(0, I.precision) : v;
              break;
            case "T":
              v = Object.prototype.toString.call(v).slice(8, -1).toLowerCase(), v = I.precision ? v.substring(0, I.precision) : v;
              break;
            case "u":
              v = parseInt(v, 10) >>> 0;
              break;
            case "v":
              v = v.valueOf(), v = I.precision ? v.substring(0, I.precision) : v;
              break;
            case "x":
              v = (parseInt(v, 10) >>> 0).toString(16);
              break;
            case "X":
              v = (parseInt(v, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          i.json.test(I.type) ? T += v : (i.number.test(I.type) && (!X || I.sign) ? (nt = X ? "+" : "-", v = v.toString().replace(i.sign, "")) : nt = "", $ = I.pad_char ? I.pad_char === "0" ? "0" : I.pad_char.charAt(1) : " ", j = I.width - (nt + v).length, O = I.width && j > 0 ? $.repeat(j) : "", T += I.align ? nt + v + O : $ === "0" ? nt + O + v : O + nt + v);
        }
      return T;
    }
    var d = /* @__PURE__ */ Object.create(null);
    function p(_) {
      if (d[_])
        return d[_];
      for (var w = _, b, C = [], v = 0; w; ) {
        if ((b = i.text.exec(w)) !== null)
          C.push(b[0]);
        else if ((b = i.modulo.exec(w)) !== null)
          C.push("%");
        else if ((b = i.placeholder.exec(w)) !== null) {
          if (b[2]) {
            v |= 1;
            var T = [], D = b[2], N = [];
            if ((N = i.key.exec(D)) !== null)
              for (T.push(N[1]); (D = D.substring(N[0].length)) !== ""; )
                if ((N = i.key_access.exec(D)) !== null)
                  T.push(N[1]);
                else if ((N = i.index_access.exec(D)) !== null)
                  T.push(N[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            b[2] = T;
          } else
            v |= 2;
          if (v === 3)
            throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          C.push(
            {
              placeholder: b[0],
              param_no: b[1],
              keys: b[2],
              sign: b[3],
              pad_char: b[4],
              align: b[5],
              width: b[6],
              precision: b[7],
              type: b[8]
            }
          );
        } else
          throw new SyntaxError("[sprintf] unexpected placeholder");
        w = w.substring(b[0].length);
      }
      return d[_] = C;
    }
    f.sprintf = r, f.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(zn);
class gu {
  /**
   *
   * @param {*} target target object
   * @param {[String]} events array of event names to map
   */
  constructor(i, r) {
    this._target = i, this._callbacks = E.fromPairs(r.map((o) => [o, []]));
  }
  /**
   * add a callback function to an event
   * @param {String} evt event name
   * @param {Function} fun callback function, first argument is target object
   */
  add(i, r) {
    if (!this._callbacks[i])
      throw new Error(`${i} is not a valid callback for object`);
    this._callbacks[i].find((o) => o === r) ? console.warn("callback already exists.") : this._callbacks[i].push(r);
  }
  /**
   * remove a callback function from event
   * @param {String} evt event name
   * @param {Function} fun callback function
   */
  remove(i, r) {
    if (!this._callbacks[i])
      throw new Error(`${i} is not a valid callback for object`);
    E.pull(this._callbacks[i], r);
  }
  /**
   * clear all callbacks from a target
   * @param {*} [evt] event to clear; if undefined all events will be cleared
   */
  clear(i) {
    (i ? [i] : Object.keys(this._callbacks)).forEach((o) => this._callbacks[o] = []);
  }
  /**
   * execute callbacks for an event
   * @param {String} event event name
   */
  execute(i) {
    this._callbacks[i].forEach((r) => r(this._target));
  }
}
const L0 = Ke("PaceChunk");
class ru {
  constructor(i = {}) {
    Xo(this, "l");
    if (!E.has(i, "points"))
      throw new Error('"points" required.');
    if (!E.has(i, "constraints"))
      throw new Error('"constraints" required.');
    Object.assign(this, i);
  }
  set elapsed(i) {
    this.constraints.elapsed = i;
  }
  get elapsed() {
    return (E.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.constraints[0];
  }
  get dist() {
    return E.last(this.points).loc - E.first(this.points).loc;
  }
  get pace() {
    return (this.elapsed - this.delay) / this.dist;
  }
  get np() {
    return this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.delay;
  }
  /**
   * apply pacing to chunk points, update factors
   */
  applyPacing() {
    delete this.plan.pacing._cache.factor;
    const i = this.points;
    i[0].elapsed = this.constraints[0], i[0].time = i[0].elapsed - E.sum(this.plan.pacing.chunks.filter((b) => b.points[0].loc < i[0].loc).map((b) => b.delay)), this.plan.event.start && (i[0].tod = this.plan.event.elapsedToTimeOfDay(i[0].elapsed));
    let r = i[0].elapsed, o = i[0].delay || 0, l = 0, d = 0, p = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, w = Object.fromEntries(Re.map((b) => [b, 0]));
    for (let b = 1, C = i.length; b < C; b++) {
      l = i[b].loc - i[b - 1].loc, ds(i[b - 1], { plan: this.plan }), Re.forEach((T) => {
        w[T] += i[b - 1].factors[T] * l;
      });
      const v = i[b - 1].factors.combined;
      p += v * l, d = _ * v * l, i[b].time = i[b - 1].time + d, o = i[b - 1].delay || 0, r += d + o, i[b].elapsed = r, this.plan.event.start && (i[b].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    ds(E.last(i), { plan: this.plan }), this.factors = new Ur(Object.fromEntries(Re.map((b) => [b, w[b] / this.dist]))), this.factor = p / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = L0.extend(
      zn.vsprintf("calculate:%.2f-%.2f", [E.first(this.points).loc, E.last(this.points).loc])
    );
    let l = this.factor || 0, d;
    const p = {};
    let _ = !1;
    for (d = 0; d < 20 && (this.applyPacing(), p.iterations = d >= 2, p.factor = !E.round(l - this.factor, 10), l = this.factor, p.target = Math.abs(
      (E.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - E.last(this.points).elapsed
    ) < 0.1, o(
      zn.vsprintf("%i|%s", [
        d,
        Object.keys(p).map((w) => zn.vsprintf("%s=%s", [w, p[w] ? "P" : "F"])).join("|")
      ])
    ), _ = !Object.keys(p).filter((w) => !p[w]).length, !_); d++)
      ;
    o("iteration complete"), this.status = {
      tests: p,
      success: _,
      iterations: d + 1
    };
  }
}
const Vt = Ke("Pacing");
class k0 {
  constructor(i = {}) {
    Object.defineProperty(this, "_cache", { value: {} }), this.callbacks = new gu(this, ["onUpdated", "onFail", "onInvalidated"]), Object.assign(this, i);
  }
  get __class() {
    return "Pacing";
  }
  clearCache() {
    Vt("clearCache"), Object.keys(this._cache).forEach((i) => {
      delete this._cache[i];
    });
  }
  invalidate() {
    Vt("invalidate"), this.chunks = [], this.clearCache(), this.callbacks.execute("onInvalidated");
  }
  get elapsed() {
    return Vt("elapsed:get"), this._cache.elapsed ? this._cache.elapsed : E.last(this.plan.points).elapsed;
  }
  get pace() {
    return Vt("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._cache.factor ? this._cache.factor : (Vt("factor:update"), this.chunks && (this._cache.factor = E.sum(this.chunks.map((i) => i.factor * i.dist)) / this.plan.course.dist), this._cache.factor || 1);
  }
  get factors() {
    if (Vt("factors:get"), !!this.chunks)
      return this._cache.factors ? this._cache.factors : (Vt("factors:update"), new Ur(
        Object.fromEntries(
          Re.map((i) => [
            i,
            E.sum(this.chunks.map((r) => r.factors[i] * r.dist)) / this.plan.course.dist
          ])
        )
      ));
  }
  get np() {
    return Vt("np:get"), this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.plan.delay;
  }
  get status() {
    var i, r, o;
    return {
      complete: ((i = this.chunks) == null ? void 0 : i.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((l) => {
        var d;
        return !((d = l.status) != null && d.success);
      }).length) === 0,
      chunks: ((o = this.chunks) == null ? void 0 : o.length) || 0
    };
  }
  calculate() {
    var o, l, d;
    const i = Vt.extend("calculate");
    if (i("exec"), !((o = this.plan.points) != null && o.length))
      throw i("calculate: error; no points"), new rn("Plan points are not defined.", "points");
    i("clearing cache"), this.clearCache(), i("adding points at each terrain factor break"), (l = this.plan.course.terrainFactors) == null || l.forEach(
      (p) => this.plan.getPoint({ loc: p.start, insert: !0 })
    ), i("adding points at each cutoff"), this.plan.adjustForCutoffs && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint({ loc: p.loc, insert: !0 });
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      delete p.delay;
    }), (d = this.plan.delays) == null || d.forEach((p) => {
      const _ = this.plan.getPoint({ loc: p.loc, insert: !0 });
      _.delay = p.delay;
    }), i("creating pace chunks"), this.initChunks();
    const r = E.reverse([...this.plan.cutoffs]);
    r.unshift(null), r.push(null), r.forEach((p) => {
      for (; this.chunks.find((_) => !_.status); )
        this.calcChunks(), this.validateChunks();
      if (!p)
        return !0;
      if (p.point.elapsed - p.time > 0.5) {
        i(`cutoff at ${p.loc} missed`);
        const _ = this.chunks[0];
        E.last(_.points) === p.point ? (i(`setting cutoff at ${p.loc}`), _.constraints = [0, p.time], delete _.status) : this.splitChunk(_, { point: p.point, elapsed: p.time });
      }
    }), E.isFunction(E.last(this.chunks).constraints[1]) && this.chunks.length > 2 && (i("rerunning last chunk"), E.last(this.chunks).calculate()), Vt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
  }
  /**
   * initialize pacing chunks array
   */
  initChunks() {
    let i;
    switch (this.plan.pacingMethod) {
      case "time":
        i = this.plan.pacingTarget;
        break;
      case "pace":
        i = this.plan.pacingTarget * this.plan.course.dist + this.plan.delay;
        break;
      case "np":
        i = () => this.plan.pacingTarget * (this.factor || 1) * this.plan.course.dist + this.plan.delay;
        break;
      default:
        throw new Error(`Incorrect pacing method ${this.plan.pacingMethod}`);
    }
    this.chunks = [
      new ru({
        plan: this.plan,
        points: this.plan.points,
        constraints: [0, i],
        delay: this.plan.delay
      })
    ], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    Vt("calcChunks"), this.clearCache(), this.chunks.filter((i) => !i.status).forEach((i) => i.calculate());
  }
  /**
   * make sure chunks nps increasing monotincally and merge if needed
   */
  validateChunks() {
    let i = 1;
    for (; i <= this.chunks.length - 1; )
      this.chunks[i].np < this.chunks[i - 1].np ? this.mergeChunks(this.chunks[i - 1], this.chunks[i]) : i++;
  }
  /**
   * split pacing chunk; mutates chunks array
   * @param {*} args
   * @param {PlanPoint} args.point    point to split at
   * @param {Number}    args.elapsed  elapsed time at split
   */
  splitChunk(i, { point: r, elapsed: o }) {
    Vt.extend("split")(`breaking chunks at ${r.loc} km`);
    const d = i.points.findIndex((w) => w === r), p = E.round(r.elapsed - r.time), _ = new ru({
      plan: this.plan,
      points: i.points.slice(0, d + 1),
      constraints: [0, o],
      delay: p
    });
    _.points.filter((w, b) => b < _.points.length - 1).forEach((w) => {
      w._chunk = _;
    }), this.chunks.unshift(_), i.constraints[0] = o, i.delay -= p, i.points = i.points.slice(d), delete i.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param {*} a first chunk
   * @param {*} b second chunk
   */
  mergeChunks(i, r) {
    const o = this.chunks.findIndex((d) => d === i), l = this.chunks.findIndex((d) => d === r);
    if (l - o !== 1)
      throw new Error("chunks must be sequential");
    Vt(zn.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, l, i.np, r.np)), i.points.pop(), i.points.push(...r.points), i.delay += r.delay, delete i.status, i.points.forEach((d) => {
      d._chunk = i;
    }), i.constraints = [i.constraints[0], r.constraints[1]], this.chunks.splice(l, 1);
  }
}
const D0 = ["lat", "lon", "alt", "latlon", "grade", "loc", "actual"];
class iu {
  constructor(i, r) {
    Object.defineProperty(this, "_plan", { value: i }), Object.defineProperty(this, "_point", { value: r }), Object.defineProperty(this, "_chunk", { writable: !0, enumerable: !1 }), D0.forEach((o) => {
      Object.defineProperty(this, o, {
        get() {
          return this._point[o];
        }
      });
    });
  }
  get __class() {
    return "PlanPoint";
  }
  /**
   * np for a point is the same as its parent chunk
   */
  get np() {
    return this._chunk.np;
  }
  get factor() {
    var i;
    return (i = this.factors) == null ? void 0 : i.combined;
  }
  get pace() {
    const { np: i, factor: r } = this;
    if (r && i)
      return r * i;
  }
}
const xt = Ke("models:Plan"), Ge = (f, i) => g0(f.site, i.site) && f.loop === i.loop;
class N0 {
  constructor(i) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, i);
  }
  get __class() {
    return "PlanSplits";
  }
  get segments() {
    var i;
    return (i = this._cache.segments) != null && i.length || (xt("calculating segments"), this.plan.checkPacing(), this._cache.segments = lu({ plan: this.plan })), this._cache.segments;
  }
  set segments(i) {
    this._cache.segments = i;
  }
  get miles() {
    var i;
    return (i = this._cache.miles) != null && i.length || (xt("calculating miles"), this.plan.checkPacing(), this._cache.miles = Wr({ unit: "miles", plan: this.plan })), this._cache.miles;
  }
  set miles(i) {
    this._cache.miles = i;
  }
  get kilometers() {
    var i;
    return (i = this._cache.kilometers) != null && i.length || (xt("calculating kilometers"), this.plan.checkPacing(), this._cache.kilometers = Wr({ unit: "kilometers", plan: this.plan })), this._cache.kilometers;
  }
  set kilometers(i) {
    this._cache.kilometers = i;
  }
}
class q0 {
  constructor(i) {
    if (Object.defineProperty(this, "pacing", { writable: !1, value: new k0({ plan: this }) }), Object.defineProperty(this, "_data", {
      value: {
        adjustForCutoffs: !0,
        delays: [],
        notes: []
      },
      enumerable: !1
    }), Object.defineProperty(this, "_cache", { value: {}, writable: !0 }), i.course)
      Object.defineProperty(this, "course", { writable: !1, value: i.course });
    else
      throw new Error("Course required");
    const r = ["course", "_data", "cache"];
    Object.keys(i).forEach((o) => {
      r.includes(o) || (this[o] = i[o]);
    }), Object.defineProperty(this, "callbacks", {
      writable: !1,
      value: new gu(this, ["onUpdated"])
    });
  }
  get __class() {
    return "Plan";
  }
  clearCache() {
    xt("clearCache"), this._cache = {};
  }
  set eventStart(i) {
    i ? this._data.eventStart = new Date(i) : delete this._data.eventStart, delete this._cache.event;
  }
  get eventStart() {
    return this._data.eventStart;
  }
  set eventTimezone(i) {
    i ? this._data.eventTimezone = i : delete this._data.eventTimezone, delete this._cache.event;
  }
  get eventTimezone() {
    return this._data.eventTimezone;
  }
  get event() {
    if (this._cache.event)
      return this._cache.event;
    let i = this.eventStart || this.course.eventStart;
    i || (console.warn("eventStart not defined in either plan or course, defaulting to zero."), i = /* @__PURE__ */ new Date(0));
    let r = this.eventTimezone || this.course.eventTimezone;
    return r || (console.warn("eventTimezone not defined in either plan or course, defaulting to UTC."), r = "UTC"), this._cache.event = new hu({ ...this.course.track.start, start: i, timezone: r }), this._cache.event;
  }
  get adjustForCutoffs() {
    return this._data.adjustForCutoffs;
  }
  set adjustForCutoffs(i) {
    xt("set:adjustForCutoffs"), this._data.adjustForCutoffs = i, delete this._cache.cutoffs;
  }
  get cutoffs() {
    if (this._cache.cutoffs)
      return this._cache.cutoffs;
    this._cache.cutoffs = this.adjustForCutoffs ? this.course.cutoffs.map(
      (r) => new B0({
        courseCutoff: r,
        plan: this,
        point: this.getPoint({ loc: r.loc, insert: !0 })
      })
    ) : [];
    let i = 0;
    for (; this._cache.cutoffs.length - 1 >= i; ) {
      const r = this._cache.cutoffs[i];
      this._cache.cutoffs.find((o, l) => l > i && o.time <= r.time) ? (xt(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cache.cutoffs.splice(i, 1)) : i++;
    }
    return this._cache.cutoffs;
  }
  get strategy() {
    return this._cache.strategy ? this._cache.strategy : (this._cache.strategy = new p0({ values: this._data.strategy, length: this.course.dist }), this._cache.strategy);
  }
  set strategy(i) {
    delete this._cache.strategy, E.isNil(i) ? this._data.strategy = void 0 : Array.isArray(i) && i.length && i.length === i.filter(
      (r) => E.isNumber(r.onset) && E.isNumber(r.value) && E.isString(r.type)
    ).length ? this._data.strategy = i : (this._data.strategy = void 0, xt('Plan "strategy" invalid.'));
  }
  get heatModel() {
    return this._cache.heatModel !== void 0 ? this._cache.heatModel : (this._data.heatModel ? this._cache.heatModel = Object.assign(
      {
        start: this.event.sun.sunrise + 1800,
        stop: this.event.sun.sunset + 7200
      },
      E.pick(this._data.heatModel, ["baseline", "max"])
    ) : this._cache.heatModel = null, this._cache.heatModel);
  }
  set heatModel(i) {
    this._data.heatModel = i;
  }
  get totalDelay() {
    return this.delays.reduce((i, r) => i + r.delay, 0);
  }
  get delays() {
    if (this._cache.delays)
      return this._cache.delays;
    const i = this.course.waypoints.map((o) => {
      var p;
      const l = (p = this._data.delays) == null ? void 0 : p.find((_) => Ge(_.waypoint, o)), d = l ? l.delay : o.hasTypicalDelay ? this.waypointDelay : 0;
      return new W0({ waypoint: o, delay: d });
    }).filter((o) => o.delay > 0).sort((o, l) => o.loc - l.loc);
    let r = 0;
    for (; i.length - 1 >= r; )
      r > 0 && i[r].loc === i[r - 1].loc ? (xt(`get delays: merging delay at ${i[r].loc} km`), i[r - 1].delay += i[r].delay, i.splice(r, 1)) : r++;
    return this._cache.delays = i, this._cache.delays;
  }
  set delays(i) {
    if (E.isUndefined(i))
      i = [];
    else if (!E.isArray(i))
      throw new Error('"delays" must be an array');
    this._data.delays = i, delete this._cache.delays;
  }
  get delay() {
    return this.totalDelay;
  }
  get notes() {
    return this._cache.notes ? this._cache.notes : (this._cache.notes = this._data.notes.map((i) => ({
      waypoint: this.course.waypoints.find((r) => Ge(i.waypoint, r)),
      text: i.text
    })), this._cache.notes);
  }
  set notes(i) {
    if (E.isUndefined(i))
      i = [];
    else if (!E.isArray(i))
      throw new Error('"notes" must be an array');
    this._data.notes = i, delete this._cache.notes;
  }
  get splits() {
    return this._cache.splits || (xt("creating splits"), this._cache.splits = new N0({ plan: this })), this._cache.splits;
  }
  getDelayAtWaypoint(i) {
    var r;
    return ((r = this.delays.find((o) => Ge(o.waypoint, i))) == null ? void 0 : r.delay) || 0;
  }
  getTypicalDelayAtWaypoint(i) {
    return i.hasTypicalDelay ? this.waypointDelay : 0;
  }
  getNoteAtWaypoint(i) {
    var r;
    return ((r = this.notes.find((o) => Ge(o.waypoint, i))) == null ? void 0 : r.text) || "";
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param {Number} args.loc - The location (in km) to determine value.
   * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
   * @return {PlanPoint} The PlanPoint at input location.
   */
  getPoint({ loc: i, insert: r = !1 }) {
    const o = this.points.findIndex((w) => Br(w.loc, i, 4)), l = this.points[o];
    if (He(l.loc, i, 4))
      return l;
    xt(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${i}`);
    const d = o - 1, p = this.points[d], _ = new iu(this, this.course.getPoint({ loc: i, insert: r }));
    if (!isNaN(p.time) && !isNaN(l.time)) {
      const w = l.elapsed - l.time - (p.elapsed - p.time);
      _.time = nn(p.loc, l.loc, p.time + w, l.time, l.loc), _.elapsed = l.elapsed - (l.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return r && this.points.splice(o, 0, _), _;
  }
  get points() {
    var i, r;
    if (!this._cache.points) {
      if (xt("creating points array"), !((r = (i = this.course) == null ? void 0 : i.points) != null && r.length))
        throw xt("cannot create points array; course points are not defined."), new rn("Course points are not defined.", "points");
      this._cache.points = this.course.points.map((o) => new iu(this, o));
    }
    return this._cache.points;
  }
  get events() {
    if (this._cache.events)
      return this._cache.events;
    xt("calculating events.sun");
    const i = [], r = ["dawn", "sunrise", "sunset", "dusk"], o = this.event.elapsedToTimeOfDay(0), l = Math.ceil((o + E.last(this.points).elapsed) / 86400);
    for (let d = 0; d < l; d++)
      r.forEach((p) => {
        const _ = this.event.sun[p] - o + 86400 * d;
        _ >= 0 && _ <= E.last(this.points).elapsed && i.push({ event: p, elapsed: _ });
      });
    return i.sort((d, p) => d.elapsed - p.elapsed), i.length && su(
      this.points.map((p) => p.elapsed),
      this.points.map((p) => p.loc),
      i.map((p) => p.elapsed)
    ).forEach((p, _) => {
      i[_].loc = p;
    }), this._cache.events = { sun: i }, this._cache.events;
  }
  get stats() {
    if (this._cache.stats)
      return this._cache.stats;
    xt("calculating stats.factors");
    const i = Object.fromEntries(
      Re.map((d) => {
        const p = this.points.map((_) => _.factors[d]);
        return [
          d,
          {
            min: E.min(p),
            max: E.max(p)
          }
        ];
      })
    );
    xt("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let o = 0, l = 0;
    return this.points.forEach((d, p) => {
      var _, w;
      o = d.loc - (((_ = this.points[p - 1]) == null ? void 0 : _.loc) || 0), l = d.elapsed - (((w = this.points[p - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (d.tod <= this.event.sun.dawn || d.tod >= this.event.sun.dusk) ? (r.dark.time += l, r.dark.dist += o) : d.tod < this.event.sun.sunrise || d.tod > this.event.sun.sunset ? (r.twilight.time += l, r.twilight.dist += o) : (r.day.time += l, r.day.dist += o);
    }), this._cache.stats = { factors: i, sun: r }, this._cache.stats;
  }
  /**
   * update Plan with key/value pairs
   * @param {*} params
   */
  update(i) {
    const r = xt.extend("update");
    r(`fields: ${Object.keys(i).join(", ")}`), E.forOwn(i, (o, l) => {
      switch (l) {
        case "_id":
        case "name":
        case "description":
          this[l] = o;
          break;
        case "delays": {
          this._data.delays = o, delete this._cache.delays, this.invalidatePacing();
          break;
        }
        case "delay": {
          let { delay: d, waypoint: p } = o;
          if (p = this.course.waypoints.find((w) => Ge(w, p)), !p)
            throw new Error("unknown waypoint");
          const _ = this._data.delays.findIndex((w) => Ge(w.waypoint, p));
          d !== this.getTypicalDelayAtWaypoint(p) ? _ >= 0 ? this._data.delays[_] = { waypoint: p, delay: d } : this._data.delays.push({ waypoint: p, delay: d }) : _ >= 0 && this._data.delays.splice(_, 1), delete this._cache.cutoffs, delete this._cache.delays, this.invalidatePacing();
          break;
        }
        case "note": {
          let { text: d, waypoint: p } = o;
          if (p = this.course.waypoints.find((w) => Ge(w, p)), !p)
            throw new Error("unknown waypoint");
          const _ = this._data.notes.findIndex((w) => Ge(w.waypoint, p));
          d ? _ >= 0 ? this._data.notes[_] = { waypoint: p, text: d } : this._data.notes.push({ waypoint: p, text: d }) : _ >= 0 && this._data.notes.splice(_, 1), delete this._cache.notes;
          break;
        }
        default:
          this[l] = o, r("clearCache, invalidatePacing"), this.clearCache(), this.invalidatePacing();
      }
    }), this.callbacks.execute("onUpdated");
  }
  invalidatePacing() {
    xt("invalidatePacing"), this.pacing.invalidate(), delete this._cache.splits;
  }
  checkPacing() {
    var i, r;
    if (xt("checkPacing"), (i = this.pacing.status) != null && i.complete || (xt("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length))
      throw new Error("No plan points");
    return !0;
  }
}
class W0 {
  constructor(i) {
    Object.assign(this, i);
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class B0 {
  constructor(i) {
    Object.assign(this, i);
  }
  get waypoint() {
    return this.courseCutoff.waypoint;
  }
  get loc() {
    return this.courseCutoff.loc;
  }
  get time() {
    return this.courseCutoff.time - Math.max(this.plan.cutoffMargin || 0, this.plan.getDelayAtWaypoint(this.waypoint));
  }
}
class G0 extends uu {
  constructor(i = []) {
    super({}), this.segments = i;
  }
  /**
   * Returns first segment in segments array.
   *
   * @return {Segment} The first segment in the segments array.
   */
  get first() {
    return this.segments[0];
  }
  /**
   * Returns last segment in segments array.
   *
   * @return {Segment} The last segment in the segments array.
   */
  get last() {
    return E.last(this.segments);
  }
  /**
   * Return sum of a field
   * @param {String}  field   Field to sum
   * @return {Number}         The sum
   */
  sum(i) {
    if (!this.segments.find((r) => !E.isNumber(r[i])))
      return E.sumBy(this.segments, i);
  }
  get start() {
    return this.segments[0].start;
  }
  get end() {
    return this.last.end;
  }
  get len() {
    return this.sum("len");
  }
  get gain() {
    return this.sum("gain");
  }
  get loss() {
    return this.sum("loss");
  }
  set grade(i) {
    this._data.grade = i;
  }
  get grade() {
    return E.isNumber(this._data.grade) || (this._data.grade = this.segments.reduce((i, r) => i + r.grade * r.len, 0) / this.len), this._data.grade;
  }
  get name() {
    return this.last.name;
  }
  get time() {
    return this.sum("time");
  }
  get elapsed() {
    return this.last.elapsed;
  }
  get actualElapsed() {
    return this.last.actualElapsed;
  }
  get actualTime() {
    return this.sum("actualTime");
  }
  get tod() {
    return this.last.tod;
  }
  get waypoint() {
    return this.last.waypoint;
  }
  /**
   * Returns factors for this SuperSegment.
   *
   * @return {Object} The pacing factors for this segment, including overall "combined" factor.
   */
  get factors() {
    const i = { combined: 1 };
    return Re.forEach((r) => {
      const o = this.segments.reduce((l, d) => l + d.len * d.factors[r], 0);
      isNaN(o) || (i[r] = o / this.len), i.combined *= i[r];
    }), i;
  }
  get status() {
    return this.last.status;
  }
  /**
   * Returns first point in the SuperSegment.
   *
   * @return {CoursePoint|PlanPoint} The first point in the SuperSegment.
   */
  get point1() {
    return this.first.point1;
  }
  /**
   * Returns last point in the SuperSegment.
   *
   * @return {CoursePoint|PlanPoint} The last point in the SuperSegment.
   */
  get point2() {
    return this.last.point2;
  }
}
export {
  z0 as Course,
  Ur as Factors,
  q0 as Plan,
  pu as Point,
  uu as Segment,
  hs as Site,
  p0 as Strategy,
  G0 as SuperSegment,
  ws as Track,
  nu as Waypoint,
  T0 as addLocations,
  l0 as adjustStrategy,
  cu as calcSegments,
  tu as dateToTODSeconds,
  Re as factorList,
  u0 as getHeatFactor,
  vs as interpolatePoint,
  $0 as math,
  i0 as scaleDark
};
