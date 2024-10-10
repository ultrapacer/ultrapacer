var r0 = Object.defineProperty;
var i0 = (c, s, r) => s in c ? r0(c, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[s] = r;
var M = (c, s, r) => i0(c, typeof s != "symbol" ? s + "" : s, r);
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function au(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
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
(function(c, s) {
  (function() {
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", C = 500, b = "__lodash_placeholder__", w = 1, P = 2, O = 4, R = 1, F = 2, N = 1, K = 2, X = 4, Q = 8, et = 16, xt = 32, At = 64, It = 128, Ht = 256, tn = 512, qt = 30, Me = "...", He = 800, Ur = 16, Ce = 1, qe = 2, $r = 3, xn = 1 / 0, vn = 9007199254740991, Ke = 17976931348623157e292, Sn = NaN, k = 4294967295, z = k - 1, G = k >>> 1, ct = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", Q],
      ["curryRight", et],
      ["flip", tn],
      ["partial", xt],
      ["partialRight", At],
      ["rearg", Ht]
    ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", mt = "[object Date]", Kt = "[object DOMException]", Rt = "[object Error]", Wt = "[object Function]", wn = "[object GeneratorFunction]", _t = "[object Map]", kt = "[object Number]", Dn = "[object Null]", Mt = "[object Object]", Bt = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", yn = "[object String]", Ze = "[object Symbol]", Mu = "[object Undefined]", be = "[object WeakMap]", Cu = "[object WeakSet]", xe = "[object ArrayBuffer]", re = "[object DataView]", zr = "[object Float32Array]", Gr = "[object Float64Array]", Hr = "[object Int8Array]", qr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", bu = /\b__p \+= '';/g, xu = /\b(__p \+=) '' \+/g, Su = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Cs = /&(?:amp|lt|gt|quot|#39);/g, bs = /[&<>"']/g, Au = RegExp(Cs.source), Iu = RegExp(bs.source), Tu = /<%-([\s\S]+?)%>/g, Fu = /<%([\s\S]+?)%>/g, xs = /<%=([\s\S]+?)%>/g, Pu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eu = /^\w*$/, Ru = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, ku = RegExp(Qr.source), Vr = /^\s+/, Lu = /\s/, Ou = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Du = /\{\n\/\* \[wrapped with (.+)\] \*/, Nu = /,? & /, Wu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Bu = /[()=,{}\[\]\/\s]/, Uu = /\\(\\)?/g, $u = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ss = /\w*$/, zu = /^[-+]0x[0-9a-f]+$/i, Gu = /^0b[01]+$/i, Hu = /^\[object .+?Constructor\]$/, qu = /^0o[0-7]+$/i, Ku = /^(?:0|[1-9]\d*)$/, Zu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Je = /($^)/, Ju = /['\n\r\u2028\u2029\\]/g, Ye = "\\ud800-\\udfff", Yu = "\\u0300-\\u036f", Xu = "\\ufe20-\\ufe2f", Qu = "\\u20d0-\\u20ff", As = Yu + Xu + Qu, Is = "\\u2700-\\u27bf", Ts = "a-z\\xdf-\\xf6\\xf8-\\xff", Vu = "\\xac\\xb1\\xd7\\xf7", ju = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", tl = "\\u2000-\\u206f", nl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ps = "\\ufe0e\\ufe0f", Es = Vu + ju + tl + nl, jr = "['’]", el = "[" + Ye + "]", Rs = "[" + Es + "]", Xe = "[" + As + "]", ks = "\\d+", rl = "[" + Is + "]", Ls = "[" + Ts + "]", Os = "[^" + Ye + Es + ks + Is + Ts + Fs + "]", ti = "\\ud83c[\\udffb-\\udfff]", il = "(?:" + Xe + "|" + ti + ")", Ds = "[^" + Ye + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + Fs + "]", Ns = "\\u200d", Ws = "(?:" + Ls + "|" + Os + ")", sl = "(?:" + ie + "|" + Os + ")", Bs = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Us = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", $s = il + "?", zs = "[" + Ps + "]?", al = "(?:" + Ns + "(?:" + [Ds, ni, ei].join("|") + ")" + zs + $s + ")*", ol = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ul = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gs = zs + $s + al, ll = "(?:" + [rl, ni, ei].join("|") + ")" + Gs, fl = "(?:" + [Ds + Xe + "?", Xe, ni, ei, el].join("|") + ")", cl = RegExp(jr, "g"), hl = RegExp(Xe, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + fl + Gs, "g"), pl = RegExp([
      ie + "?" + Ls + "+" + Bs + "(?=" + [Rs, ie, "$"].join("|") + ")",
      sl + "+" + Us + "(?=" + [Rs, ie + Ws, "$"].join("|") + ")",
      ie + "?" + Ws + "+" + Bs,
      ie + "+" + Us,
      ul,
      ol,
      ks,
      ll
    ].join("|"), "g"), gl = RegExp("[" + Ns + Ye + As + Ps + "]"), dl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _l = [
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
    ], vl = -1, ft = {};
    ft[zr] = ft[Gr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[xe] = ft[lt] = ft[re] = ft[mt] = ft[Rt] = ft[Wt] = ft[_t] = ft[kt] = ft[Mt] = ft[nn] = ft[pt] = ft[yn] = ft[be] = !1;
    var ut = {};
    ut[nt] = ut[ht] = ut[xe] = ut[re] = ut[lt] = ut[mt] = ut[zr] = ut[Gr] = ut[Hr] = ut[qr] = ut[Kr] = ut[_t] = ut[kt] = ut[Mt] = ut[nn] = ut[pt] = ut[yn] = ut[Ze] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Rt] = ut[Wt] = ut[be] = !1;
    var wl = {
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
    }, yl = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ml = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ml = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Cl = parseFloat, bl = parseInt, Hs = typeof Ue == "object" && Ue && Ue.Object === Object && Ue, xl = typeof self == "object" && self && self.Object === Object && self, Tt = Hs || xl || Function("return this")(), ii = s && !s.nodeType && s, Zn = ii && !0 && c && !c.nodeType && c, qs = Zn && Zn.exports === ii, si = qs && Hs.process, en = function() {
      try {
        var v = Zn && Zn.require && Zn.require("util").types;
        return v || si && si.binding && si.binding("util");
      } catch {
      }
    }(), Ks = en && en.isArrayBuffer, Zs = en && en.isDate, Js = en && en.isMap, Ys = en && en.isRegExp, Xs = en && en.isSet, Qs = en && en.isTypedArray;
    function Zt(v, S, x) {
      switch (x.length) {
        case 0:
          return v.call(S);
        case 1:
          return v.call(S, x[0]);
        case 2:
          return v.call(S, x[0], x[1]);
        case 3:
          return v.call(S, x[0], x[1], x[2]);
      }
      return v.apply(S, x);
    }
    function Sl(v, S, x, L) {
      for (var H = -1, rt = v == null ? 0 : v.length; ++H < rt; ) {
        var Ct = v[H];
        S(L, Ct, x(Ct), v);
      }
      return L;
    }
    function rn(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L && S(v[x], x, v) !== !1; )
        ;
      return v;
    }
    function Al(v, S) {
      for (var x = v == null ? 0 : v.length; x-- && S(v[x], x, v) !== !1; )
        ;
      return v;
    }
    function Vs(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L; )
        if (!S(v[x], x, v))
          return !1;
      return !0;
    }
    function Nn(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length, H = 0, rt = []; ++x < L; ) {
        var Ct = v[x];
        S(Ct, x, v) && (rt[H++] = Ct);
      }
      return rt;
    }
    function Qe(v, S) {
      var x = v == null ? 0 : v.length;
      return !!x && se(v, S, 0) > -1;
    }
    function ai(v, S, x) {
      for (var L = -1, H = v == null ? 0 : v.length; ++L < H; )
        if (x(S, v[L]))
          return !0;
      return !1;
    }
    function gt(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length, H = Array(L); ++x < L; )
        H[x] = S(v[x], x, v);
      return H;
    }
    function Wn(v, S) {
      for (var x = -1, L = S.length, H = v.length; ++x < L; )
        v[H + x] = S[x];
      return v;
    }
    function oi(v, S, x, L) {
      var H = -1, rt = v == null ? 0 : v.length;
      for (L && rt && (x = v[++H]); ++H < rt; )
        x = S(x, v[H], H, v);
      return x;
    }
    function Il(v, S, x, L) {
      var H = v == null ? 0 : v.length;
      for (L && H && (x = v[--H]); H--; )
        x = S(x, v[H], H, v);
      return x;
    }
    function ui(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L; )
        if (S(v[x], x, v))
          return !0;
      return !1;
    }
    var Tl = li("length");
    function Fl(v) {
      return v.split("");
    }
    function Pl(v) {
      return v.match(Wu) || [];
    }
    function js(v, S, x) {
      var L;
      return x(v, function(H, rt, Ct) {
        if (S(H, rt, Ct))
          return L = rt, !1;
      }), L;
    }
    function Ve(v, S, x, L) {
      for (var H = v.length, rt = x + (L ? 1 : -1); L ? rt-- : ++rt < H; )
        if (S(v[rt], rt, v))
          return rt;
      return -1;
    }
    function se(v, S, x) {
      return S === S ? zl(v, S, x) : Ve(v, ta, x);
    }
    function El(v, S, x, L) {
      for (var H = x - 1, rt = v.length; ++H < rt; )
        if (L(v[H], S))
          return H;
      return -1;
    }
    function ta(v) {
      return v !== v;
    }
    function na(v, S) {
      var x = v == null ? 0 : v.length;
      return x ? ci(v, S) / x : Sn;
    }
    function li(v) {
      return function(S) {
        return S == null ? r : S[v];
      };
    }
    function fi(v) {
      return function(S) {
        return v == null ? r : v[S];
      };
    }
    function ea(v, S, x, L, H) {
      return H(v, function(rt, Ct, at) {
        x = L ? (L = !1, rt) : S(x, rt, Ct, at);
      }), x;
    }
    function Rl(v, S) {
      var x = v.length;
      for (v.sort(S); x--; )
        v[x] = v[x].value;
      return v;
    }
    function ci(v, S) {
      for (var x, L = -1, H = v.length; ++L < H; ) {
        var rt = S(v[L]);
        rt !== r && (x = x === r ? rt : x + rt);
      }
      return x;
    }
    function hi(v, S) {
      for (var x = -1, L = Array(v); ++x < v; )
        L[x] = S(x);
      return L;
    }
    function kl(v, S) {
      return gt(S, function(x) {
        return [x, v[x]];
      });
    }
    function ra(v) {
      return v && v.slice(0, oa(v) + 1).replace(Vr, "");
    }
    function Jt(v) {
      return function(S) {
        return v(S);
      };
    }
    function pi(v, S) {
      return gt(S, function(x) {
        return v[x];
      });
    }
    function Se(v, S) {
      return v.has(S);
    }
    function ia(v, S) {
      for (var x = -1, L = v.length; ++x < L && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function sa(v, S) {
      for (var x = v.length; x-- && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function Ll(v, S) {
      for (var x = v.length, L = 0; x--; )
        v[x] === S && ++L;
      return L;
    }
    var Ol = fi(wl), Dl = fi(yl);
    function Nl(v) {
      return "\\" + Ml[v];
    }
    function Wl(v, S) {
      return v == null ? r : v[S];
    }
    function ae(v) {
      return gl.test(v);
    }
    function Bl(v) {
      return dl.test(v);
    }
    function Ul(v) {
      for (var S, x = []; !(S = v.next()).done; )
        x.push(S.value);
      return x;
    }
    function gi(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L, H) {
        x[++S] = [H, L];
      }), x;
    }
    function aa(v, S) {
      return function(x) {
        return v(S(x));
      };
    }
    function Bn(v, S) {
      for (var x = -1, L = v.length, H = 0, rt = []; ++x < L; ) {
        var Ct = v[x];
        (Ct === S || Ct === b) && (v[x] = b, rt[H++] = x);
      }
      return rt;
    }
    function je(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = L;
      }), x;
    }
    function $l(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = [L, L];
      }), x;
    }
    function zl(v, S, x) {
      for (var L = x - 1, H = v.length; ++L < H; )
        if (v[L] === S)
          return L;
      return -1;
    }
    function Gl(v, S, x) {
      for (var L = x + 1; L--; )
        if (v[L] === S)
          return L;
      return L;
    }
    function oe(v) {
      return ae(v) ? ql(v) : Tl(v);
    }
    function hn(v) {
      return ae(v) ? Kl(v) : Fl(v);
    }
    function oa(v) {
      for (var S = v.length; S-- && Lu.test(v.charAt(S)); )
        ;
      return S;
    }
    var Hl = fi(ml);
    function ql(v) {
      for (var S = ri.lastIndex = 0; ri.test(v); )
        ++S;
      return S;
    }
    function Kl(v) {
      return v.match(ri) || [];
    }
    function Zl(v) {
      return v.match(pl) || [];
    }
    var Jl = function v(S) {
      S = S == null ? Tt : ue.defaults(Tt.Object(), S, ue.pick(Tt, _l));
      var x = S.Array, L = S.Date, H = S.Error, rt = S.Function, Ct = S.Math, at = S.Object, di = S.RegExp, Yl = S.String, sn = S.TypeError, tr = x.prototype, Xl = rt.prototype, le = at.prototype, nr = S["__core-js_shared__"], er = Xl.toString, st = le.hasOwnProperty, Ql = 0, ua = function() {
        var t = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), rr = le.toString, Vl = er.call(at), jl = Tt._, tf = di(
        "^" + er.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ir = qs ? S.Buffer : r, Un = S.Symbol, sr = S.Uint8Array, la = ir ? ir.allocUnsafe : r, ar = aa(at.getPrototypeOf, at), fa = at.create, ca = le.propertyIsEnumerable, or = tr.splice, ha = Un ? Un.isConcatSpreadable : r, Ae = Un ? Un.iterator : r, Jn = Un ? Un.toStringTag : r, ur = function() {
        try {
          var t = jn(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), nf = S.clearTimeout !== Tt.clearTimeout && S.clearTimeout, ef = L && L.now !== Tt.Date.now && L.now, rf = S.setTimeout !== Tt.setTimeout && S.setTimeout, lr = Ct.ceil, fr = Ct.floor, _i = at.getOwnPropertySymbols, sf = ir ? ir.isBuffer : r, pa = S.isFinite, af = tr.join, of = aa(at.keys, at), bt = Ct.max, Pt = Ct.min, uf = L.now, lf = S.parseInt, ga = Ct.random, ff = tr.reverse, vi = jn(S, "DataView"), Ie = jn(S, "Map"), wi = jn(S, "Promise"), fe = jn(S, "Set"), Te = jn(S, "WeakMap"), Fe = jn(at, "create"), cr = Te && new Te(), ce = {}, cf = te(vi), hf = te(Ie), pf = te(wi), gf = te(fe), df = te(Te), hr = Un ? Un.prototype : r, Pe = hr ? hr.valueOf : r, da = hr ? hr.toString : r;
      function u(t) {
        if (vt(t) && !q(t) && !(t instanceof j)) {
          if (t instanceof an)
            return t;
          if (st.call(t, "__wrapped__"))
            return vo(t);
        }
        return new an(t);
      }
      var he = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          if (!dt(n))
            return {};
          if (fa)
            return fa(n);
          t.prototype = n;
          var e = new t();
          return t.prototype = r, e;
        };
      }();
      function pr() {
      }
      function an(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Tu,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Fu,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: xs,
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
      }, u.prototype = pr.prototype, u.prototype.constructor = u, an.prototype = he(pr.prototype), an.prototype.constructor = an;
      function j(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
      }
      function _f() {
        var t = new j(this.__wrapped__);
        return t.__actions__ = Ut(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ut(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ut(this.__views__), t;
      }
      function vf() {
        if (this.__filtered__) {
          var t = new j(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function wf() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = q(t), i = n < 0, a = e ? t.length : 0, l = Pc(0, a, this.__views__), h = l.start, d = l.end, y = d - h, A = i ? d : h - 1, I = this.__iteratees__, T = I.length, E = 0, D = Pt(y, this.__takeCount__);
        if (!e || !i && a == y && D == y)
          return Ba(t, this.__actions__);
        var U = [];
        t:
          for (; y-- && E < D; ) {
            A += n;
            for (var J = -1, $ = t[A]; ++J < T; ) {
              var V = I[J], tt = V.iteratee, Qt = V.type, Dt = tt($);
              if (Qt == qe)
                $ = Dt;
              else if (!Dt) {
                if (Qt == Ce)
                  continue t;
                break t;
              }
            }
            U[E++] = $;
          }
        return U;
      }
      j.prototype = he(pr.prototype), j.prototype.constructor = j;
      function Yn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function yf() {
        this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
      }
      function mf(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function Mf(t) {
        var n = this.__data__;
        if (Fe) {
          var e = n[t];
          return e === m ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function Cf(t) {
        var n = this.__data__;
        return Fe ? n[t] !== r : st.call(n, t);
      }
      function bf(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Fe && n === r ? m : n, this;
      }
      Yn.prototype.clear = yf, Yn.prototype.delete = mf, Yn.prototype.get = Mf, Yn.prototype.has = Cf, Yn.prototype.set = bf;
      function An(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function xf() {
        this.__data__ = [], this.size = 0;
      }
      function Sf(t) {
        var n = this.__data__, e = gr(n, t);
        if (e < 0)
          return !1;
        var i = n.length - 1;
        return e == i ? n.pop() : or.call(n, e, 1), --this.size, !0;
      }
      function Af(t) {
        var n = this.__data__, e = gr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function If(t) {
        return gr(this.__data__, t) > -1;
      }
      function Tf(t, n) {
        var e = this.__data__, i = gr(e, t);
        return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
      }
      An.prototype.clear = xf, An.prototype.delete = Sf, An.prototype.get = Af, An.prototype.has = If, An.prototype.set = Tf;
      function In(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function Ff() {
        this.size = 0, this.__data__ = {
          hash: new Yn(),
          map: new (Ie || An)(),
          string: new Yn()
        };
      }
      function Pf(t) {
        var n = Ar(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Ef(t) {
        return Ar(this, t).get(t);
      }
      function Rf(t) {
        return Ar(this, t).has(t);
      }
      function kf(t, n) {
        var e = Ar(this, t), i = e.size;
        return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
      }
      In.prototype.clear = Ff, In.prototype.delete = Pf, In.prototype.get = Ef, In.prototype.has = Rf, In.prototype.set = kf;
      function Xn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new In(); ++n < e; )
          this.add(t[n]);
      }
      function Lf(t) {
        return this.__data__.set(t, m), this;
      }
      function Of(t) {
        return this.__data__.has(t);
      }
      Xn.prototype.add = Xn.prototype.push = Lf, Xn.prototype.has = Of;
      function pn(t) {
        var n = this.__data__ = new An(t);
        this.size = n.size;
      }
      function Df() {
        this.__data__ = new An(), this.size = 0;
      }
      function Nf(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Wf(t) {
        return this.__data__.get(t);
      }
      function Bf(t) {
        return this.__data__.has(t);
      }
      function Uf(t, n) {
        var e = this.__data__;
        if (e instanceof An) {
          var i = e.__data__;
          if (!Ie || i.length < f - 1)
            return i.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new In(i);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = Df, pn.prototype.delete = Nf, pn.prototype.get = Wf, pn.prototype.has = Bf, pn.prototype.set = Uf;
      function _a(t, n) {
        var e = q(t), i = !e && ne(t), a = !e && !i && qn(t), l = !e && !i && !a && _e(t), h = e || i || a || l, d = h ? hi(t.length, Yl) : [], y = d.length;
        for (var A in t)
          (n || st.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          En(A, y))) && d.push(A);
        return d;
      }
      function va(t) {
        var n = t.length;
        return n ? t[Fi(0, n - 1)] : r;
      }
      function $f(t, n) {
        return Ir(Ut(t), Qn(n, 0, t.length));
      }
      function zf(t) {
        return Ir(Ut(t));
      }
      function yi(t, n, e) {
        (e !== r && !gn(t[n], e) || e === r && !(n in t)) && Tn(t, n, e);
      }
      function Ee(t, n, e) {
        var i = t[n];
        (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && Tn(t, n, e);
      }
      function gr(t, n) {
        for (var e = t.length; e--; )
          if (gn(t[e][0], n))
            return e;
        return -1;
      }
      function Gf(t, n, e, i) {
        return $n(t, function(a, l, h) {
          n(i, a, e(a), h);
        }), i;
      }
      function wa(t, n) {
        return t && Mn(n, St(n), t);
      }
      function Hf(t, n) {
        return t && Mn(n, zt(n), t);
      }
      function Tn(t, n, e) {
        n == "__proto__" && ur ? ur(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[n] = e;
      }
      function mi(t, n) {
        for (var e = -1, i = n.length, a = x(i), l = t == null; ++e < i; )
          a[e] = l ? r : ts(t, n[e]);
        return a;
      }
      function Qn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function on(t, n, e, i, a, l) {
        var h, d = n & w, y = n & P, A = n & O;
        if (e && (h = a ? e(t, i, a, l) : e(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var I = q(t);
        if (I) {
          if (h = Rc(t), !d)
            return Ut(t, h);
        } else {
          var T = Et(t), E = T == Wt || T == wn;
          if (qn(t))
            return za(t, d);
          if (T == Mt || T == nt || E && !a) {
            if (h = y || E ? {} : oo(t), !d)
              return y ? Mc(t, Hf(h, t)) : mc(t, wa(h, t));
          } else {
            if (!ut[T])
              return a ? t : {};
            h = kc(t, T, d);
          }
        }
        l || (l = new pn());
        var D = l.get(t);
        if (D)
          return D;
        l.set(t, h), No(t) ? t.forEach(function($) {
          h.add(on($, n, e, $, t, l));
        }) : Oo(t) && t.forEach(function($, V) {
          h.set(V, on($, n, e, V, t, l));
        });
        var U = A ? y ? Ui : Bi : y ? zt : St, J = I ? r : U(t);
        return rn(J || t, function($, V) {
          J && (V = $, $ = t[V]), Ee(h, V, on($, n, e, V, t, l));
        }), h;
      }
      function qf(t) {
        var n = St(t);
        return function(e) {
          return ya(e, t, n);
        };
      }
      function ya(t, n, e) {
        var i = e.length;
        if (t == null)
          return !i;
        for (t = at(t); i--; ) {
          var a = e[i], l = n[a], h = t[a];
          if (h === r && !(a in t) || !l(h))
            return !1;
        }
        return !0;
      }
      function ma(t, n, e) {
        if (typeof t != "function")
          throw new sn(g);
        return We(function() {
          t.apply(r, e);
        }, n);
      }
      function Re(t, n, e, i) {
        var a = -1, l = Qe, h = !0, d = t.length, y = [], A = n.length;
        if (!d)
          return y;
        e && (n = gt(n, Jt(e))), i ? (l = ai, h = !1) : n.length >= f && (l = Se, h = !1, n = new Xn(n));
        t:
          for (; ++a < d; ) {
            var I = t[a], T = e == null ? I : e(I);
            if (I = i || I !== 0 ? I : 0, h && T === T) {
              for (var E = A; E--; )
                if (n[E] === T)
                  continue t;
              y.push(I);
            } else l(n, T, i) || y.push(I);
          }
        return y;
      }
      var $n = Za(mn), Ma = Za(Ci, !0);
      function Kf(t, n) {
        var e = !0;
        return $n(t, function(i, a, l) {
          return e = !!n(i, a, l), e;
        }), e;
      }
      function dr(t, n, e) {
        for (var i = -1, a = t.length; ++i < a; ) {
          var l = t[i], h = n(l);
          if (h != null && (d === r ? h === h && !Xt(h) : e(h, d)))
            var d = h, y = l;
        }
        return y;
      }
      function Zf(t, n, e, i) {
        var a = t.length;
        for (e = Z(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : Z(i), i < 0 && (i += a), i = e > i ? 0 : Bo(i); e < i; )
          t[e++] = n;
        return t;
      }
      function Ca(t, n) {
        var e = [];
        return $n(t, function(i, a, l) {
          n(i, a, l) && e.push(i);
        }), e;
      }
      function Ft(t, n, e, i, a) {
        var l = -1, h = t.length;
        for (e || (e = Oc), a || (a = []); ++l < h; ) {
          var d = t[l];
          n > 0 && e(d) ? n > 1 ? Ft(d, n - 1, e, i, a) : Wn(a, d) : i || (a[a.length] = d);
        }
        return a;
      }
      var Mi = Ja(), ba = Ja(!0);
      function mn(t, n) {
        return t && Mi(t, n, St);
      }
      function Ci(t, n) {
        return t && ba(t, n, St);
      }
      function _r(t, n) {
        return Nn(n, function(e) {
          return Rn(t[e]);
        });
      }
      function Vn(t, n) {
        n = Gn(n, t);
        for (var e = 0, i = n.length; t != null && e < i; )
          t = t[Cn(n[e++])];
        return e && e == i ? t : r;
      }
      function xa(t, n, e) {
        var i = n(t);
        return q(t) ? i : Wn(i, e(t));
      }
      function Lt(t) {
        return t == null ? t === r ? Mu : Dn : Jn && Jn in at(t) ? Fc(t) : zc(t);
      }
      function bi(t, n) {
        return t > n;
      }
      function Jf(t, n) {
        return t != null && st.call(t, n);
      }
      function Yf(t, n) {
        return t != null && n in at(t);
      }
      function Xf(t, n, e) {
        return t >= Pt(n, e) && t < bt(n, e);
      }
      function xi(t, n, e) {
        for (var i = e ? ai : Qe, a = t[0].length, l = t.length, h = l, d = x(l), y = 1 / 0, A = []; h--; ) {
          var I = t[h];
          h && n && (I = gt(I, Jt(n))), y = Pt(I.length, y), d[h] = !e && (n || a >= 120 && I.length >= 120) ? new Xn(h && I) : r;
        }
        I = t[0];
        var T = -1, E = d[0];
        t:
          for (; ++T < a && A.length < y; ) {
            var D = I[T], U = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(E ? Se(E, U) : i(A, U, e))) {
              for (h = l; --h; ) {
                var J = d[h];
                if (!(J ? Se(J, U) : i(t[h], U, e)))
                  continue t;
              }
              E && E.push(U), A.push(D);
            }
          }
        return A;
      }
      function Qf(t, n, e, i) {
        return mn(t, function(a, l, h) {
          n(i, e(a), l, h);
        }), i;
      }
      function ke(t, n, e) {
        n = Gn(n, t), t = co(t, n);
        var i = t == null ? t : t[Cn(ln(n))];
        return i == null ? r : Zt(i, t, e);
      }
      function Sa(t) {
        return vt(t) && Lt(t) == nt;
      }
      function Vf(t) {
        return vt(t) && Lt(t) == xe;
      }
      function jf(t) {
        return vt(t) && Lt(t) == mt;
      }
      function Le(t, n, e, i, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : tc(t, n, e, i, Le, a);
      }
      function tc(t, n, e, i, a, l) {
        var h = q(t), d = q(n), y = h ? ht : Et(t), A = d ? ht : Et(n);
        y = y == nt ? Mt : y, A = A == nt ? Mt : A;
        var I = y == Mt, T = A == Mt, E = y == A;
        if (E && qn(t)) {
          if (!qn(n))
            return !1;
          h = !0, I = !1;
        }
        if (E && !I)
          return l || (l = new pn()), h || _e(t) ? io(t, n, e, i, a, l) : Ic(t, n, y, e, i, a, l);
        if (!(e & R)) {
          var D = I && st.call(t, "__wrapped__"), U = T && st.call(n, "__wrapped__");
          if (D || U) {
            var J = D ? t.value() : t, $ = U ? n.value() : n;
            return l || (l = new pn()), a(J, $, e, i, l);
          }
        }
        return E ? (l || (l = new pn()), Tc(t, n, e, i, a, l)) : !1;
      }
      function nc(t) {
        return vt(t) && Et(t) == _t;
      }
      function Si(t, n, e, i) {
        var a = e.length, l = a, h = !i;
        if (t == null)
          return !l;
        for (t = at(t); a--; ) {
          var d = e[a];
          if (h && d[2] ? d[1] !== t[d[0]] : !(d[0] in t))
            return !1;
        }
        for (; ++a < l; ) {
          d = e[a];
          var y = d[0], A = t[y], I = d[1];
          if (h && d[2]) {
            if (A === r && !(y in t))
              return !1;
          } else {
            var T = new pn();
            if (i)
              var E = i(A, I, y, t, n, T);
            if (!(E === r ? Le(I, A, R | F, i, T) : E))
              return !1;
          }
        }
        return !0;
      }
      function Aa(t) {
        if (!dt(t) || Nc(t))
          return !1;
        var n = Rn(t) ? tf : Hu;
        return n.test(te(t));
      }
      function ec(t) {
        return vt(t) && Lt(t) == nn;
      }
      function rc(t) {
        return vt(t) && Et(t) == pt;
      }
      function ic(t) {
        return vt(t) && kr(t.length) && !!ft[Lt(t)];
      }
      function Ia(t) {
        return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? q(t) ? Pa(t[0], t[1]) : Fa(t) : Xo(t);
      }
      function Ai(t) {
        if (!Ne(t))
          return of(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function sc(t) {
        if (!dt(t))
          return $c(t);
        var n = Ne(t), e = [];
        for (var i in t)
          i == "constructor" && (n || !st.call(t, i)) || e.push(i);
        return e;
      }
      function Ii(t, n) {
        return t < n;
      }
      function Ta(t, n) {
        var e = -1, i = $t(t) ? x(t.length) : [];
        return $n(t, function(a, l, h) {
          i[++e] = n(a, l, h);
        }), i;
      }
      function Fa(t) {
        var n = zi(t);
        return n.length == 1 && n[0][2] ? lo(n[0][0], n[0][1]) : function(e) {
          return e === t || Si(e, t, n);
        };
      }
      function Pa(t, n) {
        return Hi(t) && uo(n) ? lo(Cn(t), n) : function(e) {
          var i = ts(e, t);
          return i === r && i === n ? ns(e, t) : Le(n, i, R | F);
        };
      }
      function vr(t, n, e, i, a) {
        t !== n && Mi(n, function(l, h) {
          if (a || (a = new pn()), dt(l))
            ac(t, n, h, e, vr, i, a);
          else {
            var d = i ? i(Ki(t, h), l, h + "", t, n, a) : r;
            d === r && (d = l), yi(t, h, d);
          }
        }, zt);
      }
      function ac(t, n, e, i, a, l, h) {
        var d = Ki(t, e), y = Ki(n, e), A = h.get(y);
        if (A) {
          yi(t, e, A);
          return;
        }
        var I = l ? l(d, y, e + "", t, n, h) : r, T = I === r;
        if (T) {
          var E = q(y), D = !E && qn(y), U = !E && !D && _e(y);
          I = y, E || D || U ? q(d) ? I = d : wt(d) ? I = Ut(d) : D ? (T = !1, I = za(y, !0)) : U ? (T = !1, I = Ga(y, !0)) : I = [] : Be(y) || ne(y) ? (I = d, ne(d) ? I = Uo(d) : (!dt(d) || Rn(d)) && (I = oo(y))) : T = !1;
        }
        T && (h.set(y, I), a(I, y, i, l, h), h.delete(y)), yi(t, e, I);
      }
      function Ea(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, En(n, e) ? t[n] : r;
      }
      function Ra(t, n, e) {
        n.length ? n = gt(n, function(l) {
          return q(l) ? function(h) {
            return Vn(h, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [Gt];
        var i = -1;
        n = gt(n, Jt(B()));
        var a = Ta(t, function(l, h, d) {
          var y = gt(n, function(A) {
            return A(l);
          });
          return { criteria: y, index: ++i, value: l };
        });
        return Rl(a, function(l, h) {
          return yc(l, h, e);
        });
      }
      function oc(t, n) {
        return ka(t, n, function(e, i) {
          return ns(t, i);
        });
      }
      function ka(t, n, e) {
        for (var i = -1, a = n.length, l = {}; ++i < a; ) {
          var h = n[i], d = Vn(t, h);
          e(d, h) && Oe(l, Gn(h, t), d);
        }
        return l;
      }
      function uc(t) {
        return function(n) {
          return Vn(n, t);
        };
      }
      function Ti(t, n, e, i) {
        var a = i ? El : se, l = -1, h = n.length, d = t;
        for (t === n && (n = Ut(n)), e && (d = gt(t, Jt(e))); ++l < h; )
          for (var y = 0, A = n[l], I = e ? e(A) : A; (y = a(d, I, y, i)) > -1; )
            d !== t && or.call(d, y, 1), or.call(t, y, 1);
        return t;
      }
      function La(t, n) {
        for (var e = t ? n.length : 0, i = e - 1; e--; ) {
          var a = n[e];
          if (e == i || a !== l) {
            var l = a;
            En(a) ? or.call(t, a, 1) : Ri(t, a);
          }
        }
        return t;
      }
      function Fi(t, n) {
        return t + fr(ga() * (n - t + 1));
      }
      function lc(t, n, e, i) {
        for (var a = -1, l = bt(lr((n - t) / (e || 1)), 0), h = x(l); l--; )
          h[i ? l : ++a] = t, t += e;
        return h;
      }
      function Pi(t, n) {
        var e = "";
        if (!t || n < 1 || n > vn)
          return e;
        do
          n % 2 && (e += t), n = fr(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function Y(t, n) {
        return Zi(fo(t, n, Gt), t + "");
      }
      function fc(t) {
        return va(ve(t));
      }
      function cc(t, n) {
        var e = ve(t);
        return Ir(e, Qn(n, 0, e.length));
      }
      function Oe(t, n, e, i) {
        if (!dt(t))
          return t;
        n = Gn(n, t);
        for (var a = -1, l = n.length, h = l - 1, d = t; d != null && ++a < l; ) {
          var y = Cn(n[a]), A = e;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return t;
          if (a != h) {
            var I = d[y];
            A = i ? i(I, y, d) : r, A === r && (A = dt(I) ? I : En(n[a + 1]) ? [] : {});
          }
          Ee(d, y, A), d = d[y];
        }
        return t;
      }
      var Oa = cr ? function(t, n) {
        return cr.set(t, n), t;
      } : Gt, hc = ur ? function(t, n) {
        return ur(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: rs(n),
          writable: !0
        });
      } : Gt;
      function pc(t) {
        return Ir(ve(t));
      }
      function un(t, n, e) {
        var i = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = x(a); ++i < a; )
          l[i] = t[i + n];
        return l;
      }
      function gc(t, n) {
        var e;
        return $n(t, function(i, a, l) {
          return e = n(i, a, l), !e;
        }), !!e;
      }
      function wr(t, n, e) {
        var i = 0, a = t == null ? i : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; i < a; ) {
            var l = i + a >>> 1, h = t[l];
            h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = l + 1 : a = l;
          }
          return a;
        }
        return Ei(t, n, Gt, e);
      }
      function Ei(t, n, e, i) {
        var a = 0, l = t == null ? 0 : t.length;
        if (l === 0)
          return 0;
        n = e(n);
        for (var h = n !== n, d = n === null, y = Xt(n), A = n === r; a < l; ) {
          var I = fr((a + l) / 2), T = e(t[I]), E = T !== r, D = T === null, U = T === T, J = Xt(T);
          if (h)
            var $ = i || U;
          else A ? $ = U && (i || E) : d ? $ = U && E && (i || !D) : y ? $ = U && E && !D && (i || !J) : D || J ? $ = !1 : $ = i ? T <= n : T < n;
          $ ? a = I + 1 : l = I;
        }
        return Pt(l, z);
      }
      function Da(t, n) {
        for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
          var h = t[e], d = n ? n(h) : h;
          if (!e || !gn(d, y)) {
            var y = d;
            l[a++] = h === 0 ? 0 : h;
          }
        }
        return l;
      }
      function Na(t) {
        return typeof t == "number" ? t : Xt(t) ? Sn : +t;
      }
      function Yt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return gt(t, Yt) + "";
        if (Xt(t))
          return da ? da.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -xn ? "-0" : n;
      }
      function zn(t, n, e) {
        var i = -1, a = Qe, l = t.length, h = !0, d = [], y = d;
        if (e)
          h = !1, a = ai;
        else if (l >= f) {
          var A = n ? null : Sc(t);
          if (A)
            return je(A);
          h = !1, a = Se, y = new Xn();
        } else
          y = n ? [] : d;
        t:
          for (; ++i < l; ) {
            var I = t[i], T = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, h && T === T) {
              for (var E = y.length; E--; )
                if (y[E] === T)
                  continue t;
              n && y.push(T), d.push(I);
            } else a(y, T, e) || (y !== d && y.push(T), d.push(I));
          }
        return d;
      }
      function Ri(t, n) {
        return n = Gn(n, t), t = co(t, n), t == null || delete t[Cn(ln(n))];
      }
      function Wa(t, n, e, i) {
        return Oe(t, n, e(Vn(t, n)), i);
      }
      function yr(t, n, e, i) {
        for (var a = t.length, l = i ? a : -1; (i ? l-- : ++l < a) && n(t[l], l, t); )
          ;
        return e ? un(t, i ? 0 : l, i ? l + 1 : a) : un(t, i ? l + 1 : 0, i ? a : l);
      }
      function Ba(t, n) {
        var e = t;
        return e instanceof j && (e = e.value()), oi(n, function(i, a) {
          return a.func.apply(a.thisArg, Wn([i], a.args));
        }, e);
      }
      function ki(t, n, e) {
        var i = t.length;
        if (i < 2)
          return i ? zn(t[0]) : [];
        for (var a = -1, l = x(i); ++a < i; )
          for (var h = t[a], d = -1; ++d < i; )
            d != a && (l[a] = Re(l[a] || h, t[d], n, e));
        return zn(Ft(l, 1), n, e);
      }
      function Ua(t, n, e) {
        for (var i = -1, a = t.length, l = n.length, h = {}; ++i < a; ) {
          var d = i < l ? n[i] : r;
          e(h, t[i], d);
        }
        return h;
      }
      function Li(t) {
        return wt(t) ? t : [];
      }
      function Oi(t) {
        return typeof t == "function" ? t : Gt;
      }
      function Gn(t, n) {
        return q(t) ? t : Hi(t, n) ? [t] : _o(it(t));
      }
      var dc = Y;
      function Hn(t, n, e) {
        var i = t.length;
        return e = e === r ? i : e, !n && e >= i ? t : un(t, n, e);
      }
      var $a = nf || function(t) {
        return Tt.clearTimeout(t);
      };
      function za(t, n) {
        if (n)
          return t.slice();
        var e = t.length, i = la ? la(e) : new t.constructor(e);
        return t.copy(i), i;
      }
      function Di(t) {
        var n = new t.constructor(t.byteLength);
        return new sr(n).set(new sr(t)), n;
      }
      function _c(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function vc(t) {
        var n = new t.constructor(t.source, Ss.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function wc(t) {
        return Pe ? at(Pe.call(t)) : {};
      }
      function Ga(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function Ha(t, n) {
        if (t !== n) {
          var e = t !== r, i = t === null, a = t === t, l = Xt(t), h = n !== r, d = n === null, y = n === n, A = Xt(n);
          if (!d && !A && !l && t > n || l && h && y && !d && !A || i && h && y || !e && y || !a)
            return 1;
          if (!i && !l && !A && t < n || A && e && a && !i && !l || d && e && a || !h && a || !y)
            return -1;
        }
        return 0;
      }
      function yc(t, n, e) {
        for (var i = -1, a = t.criteria, l = n.criteria, h = a.length, d = e.length; ++i < h; ) {
          var y = Ha(a[i], l[i]);
          if (y) {
            if (i >= d)
              return y;
            var A = e[i];
            return y * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function qa(t, n, e, i) {
        for (var a = -1, l = t.length, h = e.length, d = -1, y = n.length, A = bt(l - h, 0), I = x(y + A), T = !i; ++d < y; )
          I[d] = n[d];
        for (; ++a < h; )
          (T || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[d++] = t[a++];
        return I;
      }
      function Ka(t, n, e, i) {
        for (var a = -1, l = t.length, h = -1, d = e.length, y = -1, A = n.length, I = bt(l - d, 0), T = x(I + A), E = !i; ++a < I; )
          T[a] = t[a];
        for (var D = a; ++y < A; )
          T[D + y] = n[y];
        for (; ++h < d; )
          (E || a < l) && (T[D + e[h]] = t[a++]);
        return T;
      }
      function Ut(t, n) {
        var e = -1, i = t.length;
        for (n || (n = x(i)); ++e < i; )
          n[e] = t[e];
        return n;
      }
      function Mn(t, n, e, i) {
        var a = !e;
        e || (e = {});
        for (var l = -1, h = n.length; ++l < h; ) {
          var d = n[l], y = i ? i(e[d], t[d], d, e, t) : r;
          y === r && (y = t[d]), a ? Tn(e, d, y) : Ee(e, d, y);
        }
        return e;
      }
      function mc(t, n) {
        return Mn(t, Gi(t), n);
      }
      function Mc(t, n) {
        return Mn(t, so(t), n);
      }
      function mr(t, n) {
        return function(e, i) {
          var a = q(e) ? Sl : Gf, l = n ? n() : {};
          return a(e, t, B(i, 2), l);
        };
      }
      function pe(t) {
        return Y(function(n, e) {
          var i = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
          for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && Ot(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++i < a; ) {
            var d = e[i];
            d && t(n, d, i, l);
          }
          return n;
        });
      }
      function Za(t, n) {
        return function(e, i) {
          if (e == null)
            return e;
          if (!$t(e))
            return t(e, i);
          for (var a = e.length, l = n ? a : -1, h = at(e); (n ? l-- : ++l < a) && i(h[l], l, h) !== !1; )
            ;
          return e;
        };
      }
      function Ja(t) {
        return function(n, e, i) {
          for (var a = -1, l = at(n), h = i(n), d = h.length; d--; ) {
            var y = h[t ? d : ++a];
            if (e(l[y], y, l) === !1)
              break;
          }
          return n;
        };
      }
      function Cc(t, n, e) {
        var i = n & N, a = De(t);
        function l() {
          var h = this && this !== Tt && this instanceof l ? a : t;
          return h.apply(i ? e : this, arguments);
        }
        return l;
      }
      function Ya(t) {
        return function(n) {
          n = it(n);
          var e = ae(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? Hn(e, 1).join("") : n.slice(1);
          return i[t]() + a;
        };
      }
      function ge(t) {
        return function(n) {
          return oi(Jo(Zo(n).replace(cl, "")), t, "");
        };
      }
      function De(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var e = he(t.prototype), i = t.apply(e, n);
          return dt(i) ? i : e;
        };
      }
      function bc(t, n, e) {
        var i = De(t);
        function a() {
          for (var l = arguments.length, h = x(l), d = l, y = de(a); d--; )
            h[d] = arguments[d];
          var A = l < 3 && h[0] !== y && h[l - 1] !== y ? [] : Bn(h, y);
          if (l -= A.length, l < e)
            return to(
              t,
              n,
              Mr,
              a.placeholder,
              r,
              h,
              A,
              r,
              r,
              e - l
            );
          var I = this && this !== Tt && this instanceof a ? i : t;
          return Zt(I, this, h);
        }
        return a;
      }
      function Xa(t) {
        return function(n, e, i) {
          var a = at(n);
          if (!$t(n)) {
            var l = B(e, 3);
            n = St(n), e = function(d) {
              return l(a[d], d, a);
            };
          }
          var h = t(n, e, i);
          return h > -1 ? a[l ? n[h] : h] : r;
        };
      }
      function Qa(t) {
        return Pn(function(n) {
          var e = n.length, i = e, a = an.prototype.thru;
          for (t && n.reverse(); i--; ) {
            var l = n[i];
            if (typeof l != "function")
              throw new sn(g);
            if (a && !h && Sr(l) == "wrapper")
              var h = new an([], !0);
          }
          for (i = h ? i : e; ++i < e; ) {
            l = n[i];
            var d = Sr(l), y = d == "wrapper" ? $i(l) : r;
            y && qi(y[0]) && y[1] == (It | Q | xt | Ht) && !y[4].length && y[9] == 1 ? h = h[Sr(y[0])].apply(h, y[3]) : h = l.length == 1 && qi(l) ? h[d]() : h.thru(l);
          }
          return function() {
            var A = arguments, I = A[0];
            if (h && A.length == 1 && q(I))
              return h.plant(I).value();
            for (var T = 0, E = e ? n[T].apply(this, A) : I; ++T < e; )
              E = n[T].call(this, E);
            return E;
          };
        });
      }
      function Mr(t, n, e, i, a, l, h, d, y, A) {
        var I = n & It, T = n & N, E = n & K, D = n & (Q | et), U = n & tn, J = E ? r : De(t);
        function $() {
          for (var V = arguments.length, tt = x(V), Qt = V; Qt--; )
            tt[Qt] = arguments[Qt];
          if (D)
            var Dt = de($), Vt = Ll(tt, Dt);
          if (i && (tt = qa(tt, i, a, D)), l && (tt = Ka(tt, l, h, D)), V -= Vt, D && V < A) {
            var yt = Bn(tt, Dt);
            return to(
              t,
              n,
              Mr,
              $.placeholder,
              e,
              tt,
              yt,
              d,
              y,
              A - V
            );
          }
          var dn = T ? e : this, Ln = E ? dn[t] : t;
          return V = tt.length, d ? tt = Gc(tt, d) : U && V > 1 && tt.reverse(), I && y < V && (tt.length = y), this && this !== Tt && this instanceof $ && (Ln = J || De(Ln)), Ln.apply(dn, tt);
        }
        return $;
      }
      function Va(t, n) {
        return function(e, i) {
          return Qf(e, t, n(i), {});
        };
      }
      function Cr(t, n) {
        return function(e, i) {
          var a;
          if (e === r && i === r)
            return n;
          if (e !== r && (a = e), i !== r) {
            if (a === r)
              return i;
            typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Na(e), i = Na(i)), a = t(e, i);
          }
          return a;
        };
      }
      function Ni(t) {
        return Pn(function(n) {
          return n = gt(n, Jt(B())), Y(function(e) {
            var i = this;
            return t(n, function(a) {
              return Zt(a, i, e);
            });
          });
        });
      }
      function br(t, n) {
        n = n === r ? " " : Yt(n);
        var e = n.length;
        if (e < 2)
          return e ? Pi(n, t) : n;
        var i = Pi(n, lr(t / oe(n)));
        return ae(n) ? Hn(hn(i), 0, t).join("") : i.slice(0, t);
      }
      function xc(t, n, e, i) {
        var a = n & N, l = De(t);
        function h() {
          for (var d = -1, y = arguments.length, A = -1, I = i.length, T = x(I + y), E = this && this !== Tt && this instanceof h ? l : t; ++A < I; )
            T[A] = i[A];
          for (; y--; )
            T[A++] = arguments[++d];
          return Zt(E, a ? e : this, T);
        }
        return h;
      }
      function ja(t) {
        return function(n, e, i) {
          return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), i = i === r ? n < e ? 1 : -1 : kn(i), lc(n, e, i, t);
        };
      }
      function xr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = fn(n), e = fn(e)), t(n, e);
        };
      }
      function to(t, n, e, i, a, l, h, d, y, A) {
        var I = n & Q, T = I ? h : r, E = I ? r : h, D = I ? l : r, U = I ? r : l;
        n |= I ? xt : At, n &= ~(I ? At : xt), n & X || (n &= ~(N | K));
        var J = [
          t,
          n,
          a,
          D,
          T,
          U,
          E,
          d,
          y,
          A
        ], $ = e.apply(r, J);
        return qi(t) && ho($, J), $.placeholder = i, po($, t, n);
      }
      function Wi(t) {
        var n = Ct[t];
        return function(e, i) {
          if (e = fn(e), i = i == null ? 0 : Pt(Z(i), 292), i && pa(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
          }
          return n(e);
        };
      }
      var Sc = fe && 1 / je(new fe([, -0]))[1] == xn ? function(t) {
        return new fe(t);
      } : as;
      function no(t) {
        return function(n) {
          var e = Et(n);
          return e == _t ? gi(n) : e == pt ? $l(n) : kl(n, t(n));
        };
      }
      function Fn(t, n, e, i, a, l, h, d) {
        var y = n & K;
        if (!y && typeof t != "function")
          throw new sn(g);
        var A = i ? i.length : 0;
        if (A || (n &= ~(xt | At), i = a = r), h = h === r ? h : bt(Z(h), 0), d = d === r ? d : Z(d), A -= a ? a.length : 0, n & At) {
          var I = i, T = a;
          i = a = r;
        }
        var E = y ? r : $i(t), D = [
          t,
          n,
          e,
          i,
          a,
          I,
          T,
          l,
          h,
          d
        ];
        if (E && Uc(D, E), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], d = D[9] = D[9] === r ? y ? 0 : t.length : bt(D[9] - A, 0), !d && n & (Q | et) && (n &= ~(Q | et)), !n || n == N)
          var U = Cc(t, n, e);
        else n == Q || n == et ? U = bc(t, n, d) : (n == xt || n == (N | xt)) && !a.length ? U = xc(t, n, e, i) : U = Mr.apply(r, D);
        var J = E ? Oa : ho;
        return po(J(U, D), t, n);
      }
      function eo(t, n, e, i) {
        return t === r || gn(t, le[e]) && !st.call(i, e) ? n : t;
      }
      function ro(t, n, e, i, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), vr(t, n, r, ro, l), l.delete(n)), t;
      }
      function Ac(t) {
        return Be(t) ? r : t;
      }
      function io(t, n, e, i, a, l) {
        var h = e & R, d = t.length, y = n.length;
        if (d != y && !(h && y > d))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var T = -1, E = !0, D = e & F ? new Xn() : r;
        for (l.set(t, n), l.set(n, t); ++T < d; ) {
          var U = t[T], J = n[T];
          if (i)
            var $ = h ? i(J, U, T, n, t, l) : i(U, J, T, t, n, l);
          if ($ !== r) {
            if ($)
              continue;
            E = !1;
            break;
          }
          if (D) {
            if (!ui(n, function(V, tt) {
              if (!Se(D, tt) && (U === V || a(U, V, e, i, l)))
                return D.push(tt);
            })) {
              E = !1;
              break;
            }
          } else if (!(U === J || a(U, J, e, i, l))) {
            E = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), E;
      }
      function Ic(t, n, e, i, a, l, h) {
        switch (e) {
          case re:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case xe:
            return !(t.byteLength != n.byteLength || !l(new sr(t), new sr(n)));
          case lt:
          case mt:
          case kt:
            return gn(+t, +n);
          case Rt:
            return t.name == n.name && t.message == n.message;
          case nn:
          case yn:
            return t == n + "";
          case _t:
            var d = gi;
          case pt:
            var y = i & R;
            if (d || (d = je), t.size != n.size && !y)
              return !1;
            var A = h.get(t);
            if (A)
              return A == n;
            i |= F, h.set(t, n);
            var I = io(d(t), d(n), i, a, l, h);
            return h.delete(t), I;
          case Ze:
            if (Pe)
              return Pe.call(t) == Pe.call(n);
        }
        return !1;
      }
      function Tc(t, n, e, i, a, l) {
        var h = e & R, d = Bi(t), y = d.length, A = Bi(n), I = A.length;
        if (y != I && !h)
          return !1;
        for (var T = y; T--; ) {
          var E = d[T];
          if (!(h ? E in n : st.call(n, E)))
            return !1;
        }
        var D = l.get(t), U = l.get(n);
        if (D && U)
          return D == n && U == t;
        var J = !0;
        l.set(t, n), l.set(n, t);
        for (var $ = h; ++T < y; ) {
          E = d[T];
          var V = t[E], tt = n[E];
          if (i)
            var Qt = h ? i(tt, V, E, n, t, l) : i(V, tt, E, t, n, l);
          if (!(Qt === r ? V === tt || a(V, tt, e, i, l) : Qt)) {
            J = !1;
            break;
          }
          $ || ($ = E == "constructor");
        }
        if (J && !$) {
          var Dt = t.constructor, Vt = n.constructor;
          Dt != Vt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Vt == "function" && Vt instanceof Vt) && (J = !1);
        }
        return l.delete(t), l.delete(n), J;
      }
      function Pn(t) {
        return Zi(fo(t, r, mo), t + "");
      }
      function Bi(t) {
        return xa(t, St, Gi);
      }
      function Ui(t) {
        return xa(t, zt, so);
      }
      var $i = cr ? function(t) {
        return cr.get(t);
      } : as;
      function Sr(t) {
        for (var n = t.name + "", e = ce[n], i = st.call(ce, n) ? e.length : 0; i--; ) {
          var a = e[i], l = a.func;
          if (l == null || l == t)
            return a.name;
        }
        return n;
      }
      function de(t) {
        var n = st.call(u, "placeholder") ? u : t;
        return n.placeholder;
      }
      function B() {
        var t = u.iteratee || is;
        return t = t === is ? Ia : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ar(t, n) {
        var e = t.__data__;
        return Dc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function zi(t) {
        for (var n = St(t), e = n.length; e--; ) {
          var i = n[e], a = t[i];
          n[e] = [i, a, uo(a)];
        }
        return n;
      }
      function jn(t, n) {
        var e = Wl(t, n);
        return Aa(e) ? e : r;
      }
      function Fc(t) {
        var n = st.call(t, Jn), e = t[Jn];
        try {
          t[Jn] = r;
          var i = !0;
        } catch {
        }
        var a = rr.call(t);
        return i && (n ? t[Jn] = e : delete t[Jn]), a;
      }
      var Gi = _i ? function(t) {
        return t == null ? [] : (t = at(t), Nn(_i(t), function(n) {
          return ca.call(t, n);
        }));
      } : os, so = _i ? function(t) {
        for (var n = []; t; )
          Wn(n, Gi(t)), t = ar(t);
        return n;
      } : os, Et = Lt;
      (vi && Et(new vi(new ArrayBuffer(1))) != re || Ie && Et(new Ie()) != _t || wi && Et(wi.resolve()) != Bt || fe && Et(new fe()) != pt || Te && Et(new Te()) != be) && (Et = function(t) {
        var n = Lt(t), e = n == Mt ? t.constructor : r, i = e ? te(e) : "";
        if (i)
          switch (i) {
            case cf:
              return re;
            case hf:
              return _t;
            case pf:
              return Bt;
            case gf:
              return pt;
            case df:
              return be;
          }
        return n;
      });
      function Pc(t, n, e) {
        for (var i = -1, a = e.length; ++i < a; ) {
          var l = e[i], h = l.size;
          switch (l.type) {
            case "drop":
              t += h;
              break;
            case "dropRight":
              n -= h;
              break;
            case "take":
              n = Pt(n, t + h);
              break;
            case "takeRight":
              t = bt(t, n - h);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Ec(t) {
        var n = t.match(Du);
        return n ? n[1].split(Nu) : [];
      }
      function ao(t, n, e) {
        n = Gn(n, t);
        for (var i = -1, a = n.length, l = !1; ++i < a; ) {
          var h = Cn(n[i]);
          if (!(l = t != null && e(t, h)))
            break;
          t = t[h];
        }
        return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && kr(a) && En(h, a) && (q(t) || ne(t)));
      }
      function Rc(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function oo(t) {
        return typeof t.constructor == "function" && !Ne(t) ? he(ar(t)) : {};
      }
      function kc(t, n, e) {
        var i = t.constructor;
        switch (n) {
          case xe:
            return Di(t);
          case lt:
          case mt:
            return new i(+t);
          case re:
            return _c(t, e);
          case zr:
          case Gr:
          case Hr:
          case qr:
          case Kr:
          case Zr:
          case Jr:
          case Yr:
          case Xr:
            return Ga(t, e);
          case _t:
            return new i();
          case kt:
          case yn:
            return new i(t);
          case nn:
            return vc(t);
          case pt:
            return new i();
          case Ze:
            return wc(t);
        }
      }
      function Lc(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var i = e - 1;
        return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Ou, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Oc(t) {
        return q(t) || ne(t) || !!(ha && t && t[ha]);
      }
      function En(t, n) {
        var e = typeof t;
        return n = n ?? vn, !!n && (e == "number" || e != "symbol" && Ku.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ot(t, n, e) {
        if (!dt(e))
          return !1;
        var i = typeof n;
        return (i == "number" ? $t(e) && En(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function Hi(t, n) {
        if (q(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Eu.test(t) || !Pu.test(t) || n != null && t in at(n);
      }
      function Dc(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function qi(t) {
        var n = Sr(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var i = $i(e);
        return !!i && t === i[0];
      }
      function Nc(t) {
        return !!ua && ua in t;
      }
      var Wc = nr ? Rn : us;
      function Ne(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
        return t === e;
      }
      function uo(t) {
        return t === t && !dt(t);
      }
      function lo(t, n) {
        return function(e) {
          return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
        };
      }
      function Bc(t) {
        var n = Er(t, function(i) {
          return e.size === C && e.clear(), i;
        }), e = n.cache;
        return n;
      }
      function Uc(t, n) {
        var e = t[1], i = n[1], a = e | i, l = a < (N | K | It), h = i == It && e == Q || i == It && e == Ht && t[7].length <= n[8] || i == (It | Ht) && n[7].length <= n[8] && e == Q;
        if (!(l || h))
          return t;
        i & N && (t[2] = n[2], a |= e & N ? 0 : X);
        var d = n[3];
        if (d) {
          var y = t[3];
          t[3] = y ? qa(y, d, n[4]) : d, t[4] = y ? Bn(t[3], b) : n[4];
        }
        return d = n[5], d && (y = t[5], t[5] = y ? Ka(y, d, n[6]) : d, t[6] = y ? Bn(t[5], b) : n[6]), d = n[7], d && (t[7] = d), i & It && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function $c(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function zc(t) {
        return rr.call(t);
      }
      function fo(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var i = arguments, a = -1, l = bt(i.length - n, 0), h = x(l); ++a < l; )
            h[a] = i[n + a];
          a = -1;
          for (var d = x(n + 1); ++a < n; )
            d[a] = i[a];
          return d[n] = e(h), Zt(t, this, d);
        };
      }
      function co(t, n) {
        return n.length < 2 ? t : Vn(t, un(n, 0, -1));
      }
      function Gc(t, n) {
        for (var e = t.length, i = Pt(n.length, e), a = Ut(t); i--; ) {
          var l = n[i];
          t[i] = En(l, e) ? a[l] : r;
        }
        return t;
      }
      function Ki(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var ho = go(Oa), We = rf || function(t, n) {
        return Tt.setTimeout(t, n);
      }, Zi = go(hc);
      function po(t, n, e) {
        var i = n + "";
        return Zi(t, Lc(i, Hc(Ec(i), e)));
      }
      function go(t) {
        var n = 0, e = 0;
        return function() {
          var i = uf(), a = Ur - (i - e);
          if (e = i, a > 0) {
            if (++n >= He)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ir(t, n) {
        var e = -1, i = t.length, a = i - 1;
        for (n = n === r ? i : n; ++e < n; ) {
          var l = Fi(e, a), h = t[l];
          t[l] = t[e], t[e] = h;
        }
        return t.length = n, t;
      }
      var _o = Bc(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Ru, function(e, i, a, l) {
          n.push(a ? l.replace(Uu, "$1") : i || e);
        }), n;
      });
      function Cn(t) {
        if (typeof t == "string" || Xt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -xn ? "-0" : n;
      }
      function te(t) {
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
      function Hc(t, n) {
        return rn(ct, function(e) {
          var i = "_." + e[0];
          n & e[1] && !Qe(t, i) && t.push(i);
        }), t.sort();
      }
      function vo(t) {
        if (t instanceof j)
          return t.clone();
        var n = new an(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ut(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function qc(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = bt(Z(n), 0);
        var i = t == null ? 0 : t.length;
        if (!i || n < 1)
          return [];
        for (var a = 0, l = 0, h = x(lr(i / n)); a < i; )
          h[l++] = un(t, a, a += n);
        return h;
      }
      function Kc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[i++] = l);
        }
        return a;
      }
      function Zc() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = x(t - 1), e = arguments[0], i = t; i--; )
          n[i - 1] = arguments[i];
        return Wn(q(e) ? Ut(e) : [e], Ft(n, 1));
      }
      var Jc = Y(function(t, n) {
        return wt(t) ? Re(t, Ft(n, 1, wt, !0)) : [];
      }), Yc = Y(function(t, n) {
        var e = ln(n);
        return wt(e) && (e = r), wt(t) ? Re(t, Ft(n, 1, wt, !0), B(e, 2)) : [];
      }), Xc = Y(function(t, n) {
        var e = ln(n);
        return wt(e) && (e = r), wt(t) ? Re(t, Ft(n, 1, wt, !0), r, e) : [];
      });
      function Qc(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), un(t, n < 0 ? 0 : n, i)) : [];
      }
      function Vc(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function jc(t, n) {
        return t && t.length ? yr(t, B(n, 3), !0, !0) : [];
      }
      function th(t, n) {
        return t && t.length ? yr(t, B(n, 3), !0) : [];
      }
      function nh(t, n, e, i) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = a), Zf(t, n, e, i)) : [];
      }
      function wo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), Ve(t, B(n, 3), a);
      }
      function yo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i - 1;
        return e !== r && (a = Z(e), a = e < 0 ? bt(i + a, 0) : Pt(a, i - 1)), Ve(t, B(n, 3), a, !0);
      }
      function mo(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, 1) : [];
      }
      function eh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, xn) : [];
      }
      function rh(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : Z(n), Ft(t, n)) : [];
      }
      function ih(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
          var a = t[n];
          i[a[0]] = a[1];
        }
        return i;
      }
      function Mo(t) {
        return t && t.length ? t[0] : r;
      }
      function sh(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), se(t, n, a);
      }
      function ah(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 0, -1) : [];
      }
      var oh = Y(function(t) {
        var n = gt(t, Li);
        return n.length && n[0] === t[0] ? xi(n) : [];
      }), uh = Y(function(t) {
        var n = ln(t), e = gt(t, Li);
        return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? xi(e, B(n, 2)) : [];
      }), lh = Y(function(t) {
        var n = ln(t), e = gt(t, Li);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? xi(e, r, n) : [];
      });
      function fh(t, n) {
        return t == null ? "" : af.call(t, n);
      }
      function ln(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function ch(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i;
        return e !== r && (a = Z(e), a = a < 0 ? bt(i + a, 0) : Pt(a, i - 1)), n === n ? Gl(t, n, a) : Ve(t, ta, a, !0);
      }
      function hh(t, n) {
        return t && t.length ? Ea(t, Z(n)) : r;
      }
      var ph = Y(Co);
      function Co(t, n) {
        return t && t.length && n && n.length ? Ti(t, n) : t;
      }
      function gh(t, n, e) {
        return t && t.length && n && n.length ? Ti(t, n, B(e, 2)) : t;
      }
      function dh(t, n, e) {
        return t && t.length && n && n.length ? Ti(t, n, r, e) : t;
      }
      var _h = Pn(function(t, n) {
        var e = t == null ? 0 : t.length, i = mi(t, n);
        return La(t, gt(n, function(a) {
          return En(a, e) ? +a : a;
        }).sort(Ha)), i;
      });
      function vh(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var i = -1, a = [], l = t.length;
        for (n = B(n, 3); ++i < l; ) {
          var h = t[i];
          n(h, i, t) && (e.push(h), a.push(i));
        }
        return La(t, a), e;
      }
      function Ji(t) {
        return t == null ? t : ff.call(t);
      }
      function wh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Z(n), e = e === r ? i : Z(e)), un(t, n, e)) : [];
      }
      function yh(t, n) {
        return wr(t, n);
      }
      function mh(t, n, e) {
        return Ei(t, n, B(e, 2));
      }
      function Mh(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = wr(t, n);
          if (i < e && gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Ch(t, n) {
        return wr(t, n, !0);
      }
      function bh(t, n, e) {
        return Ei(t, n, B(e, 2), !0);
      }
      function xh(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = wr(t, n, !0) - 1;
          if (gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Sh(t) {
        return t && t.length ? Da(t) : [];
      }
      function Ah(t, n) {
        return t && t.length ? Da(t, B(n, 2)) : [];
      }
      function Ih(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 1, n) : [];
      }
      function Th(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : Z(n), un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Fh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, un(t, n < 0 ? 0 : n, i)) : [];
      }
      function Ph(t, n) {
        return t && t.length ? yr(t, B(n, 3), !1, !0) : [];
      }
      function Eh(t, n) {
        return t && t.length ? yr(t, B(n, 3)) : [];
      }
      var Rh = Y(function(t) {
        return zn(Ft(t, 1, wt, !0));
      }), kh = Y(function(t) {
        var n = ln(t);
        return wt(n) && (n = r), zn(Ft(t, 1, wt, !0), B(n, 2));
      }), Lh = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, zn(Ft(t, 1, wt, !0), r, n);
      });
      function Oh(t) {
        return t && t.length ? zn(t) : [];
      }
      function Dh(t, n) {
        return t && t.length ? zn(t, B(n, 2)) : [];
      }
      function Nh(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? zn(t, r, n) : [];
      }
      function Yi(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Nn(t, function(e) {
          if (wt(e))
            return n = bt(e.length, n), !0;
        }), hi(n, function(e) {
          return gt(t, li(e));
        });
      }
      function bo(t, n) {
        if (!(t && t.length))
          return [];
        var e = Yi(t);
        return n == null ? e : gt(e, function(i) {
          return Zt(n, r, i);
        });
      }
      var Wh = Y(function(t, n) {
        return wt(t) ? Re(t, n) : [];
      }), Bh = Y(function(t) {
        return ki(Nn(t, wt));
      }), Uh = Y(function(t) {
        var n = ln(t);
        return wt(n) && (n = r), ki(Nn(t, wt), B(n, 2));
      }), $h = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, ki(Nn(t, wt), r, n);
      }), zh = Y(Yi);
      function Gh(t, n) {
        return Ua(t || [], n || [], Ee);
      }
      function Hh(t, n) {
        return Ua(t || [], n || [], Oe);
      }
      var qh = Y(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, bo(t, e);
      });
      function xo(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Kh(t, n) {
        return n(t), t;
      }
      function Tr(t, n) {
        return n(t);
      }
      var Zh = Pn(function(t) {
        var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
          return mi(l, t);
        };
        return n > 1 || this.__actions__.length || !(i instanceof j) || !En(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
          func: Tr,
          args: [a],
          thisArg: r
        }), new an(i, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function Jh() {
        return xo(this);
      }
      function Yh() {
        return new an(this.value(), this.__chain__);
      }
      function Xh() {
        this.__values__ === r && (this.__values__ = Wo(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Qh() {
        return this;
      }
      function Vh(t) {
        for (var n, e = this; e instanceof pr; ) {
          var i = vo(e);
          i.__index__ = 0, i.__values__ = r, n ? a.__wrapped__ = i : n = i;
          var a = i;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = t, n;
      }
      function jh() {
        var t = this.__wrapped__;
        if (t instanceof j) {
          var n = t;
          return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
            func: Tr,
            args: [Ji],
            thisArg: r
          }), new an(n, this.__chain__);
        }
        return this.thru(Ji);
      }
      function tp() {
        return Ba(this.__wrapped__, this.__actions__);
      }
      var np = mr(function(t, n, e) {
        st.call(t, e) ? ++t[e] : Tn(t, e, 1);
      });
      function ep(t, n, e) {
        var i = q(t) ? Vs : Kf;
        return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
      }
      function rp(t, n) {
        var e = q(t) ? Nn : Ca;
        return e(t, B(n, 3));
      }
      var ip = Xa(wo), sp = Xa(yo);
      function ap(t, n) {
        return Ft(Fr(t, n), 1);
      }
      function op(t, n) {
        return Ft(Fr(t, n), xn);
      }
      function up(t, n, e) {
        return e = e === r ? 1 : Z(e), Ft(Fr(t, n), e);
      }
      function So(t, n) {
        var e = q(t) ? rn : $n;
        return e(t, B(n, 3));
      }
      function Ao(t, n) {
        var e = q(t) ? Al : Ma;
        return e(t, B(n, 3));
      }
      var lp = mr(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : Tn(t, e, [n]);
      });
      function fp(t, n, e, i) {
        t = $t(t) ? t : ve(t), e = e && !i ? Z(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), Lr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
      }
      var cp = Y(function(t, n, e) {
        var i = -1, a = typeof n == "function", l = $t(t) ? x(t.length) : [];
        return $n(t, function(h) {
          l[++i] = a ? Zt(n, h, e) : ke(h, n, e);
        }), l;
      }), hp = mr(function(t, n, e) {
        Tn(t, e, n);
      });
      function Fr(t, n) {
        var e = q(t) ? gt : Ta;
        return e(t, B(n, 3));
      }
      function pp(t, n, e, i) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), e = i ? r : e, q(e) || (e = e == null ? [] : [e]), Ra(t, n, e));
      }
      var gp = mr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function dp(t, n, e) {
        var i = q(t) ? oi : ea, a = arguments.length < 3;
        return i(t, B(n, 4), e, a, $n);
      }
      function _p(t, n, e) {
        var i = q(t) ? Il : ea, a = arguments.length < 3;
        return i(t, B(n, 4), e, a, Ma);
      }
      function vp(t, n) {
        var e = q(t) ? Nn : Ca;
        return e(t, Rr(B(n, 3)));
      }
      function wp(t) {
        var n = q(t) ? va : fc;
        return n(t);
      }
      function yp(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n);
        var i = q(t) ? $f : cc;
        return i(t, n);
      }
      function mp(t) {
        var n = q(t) ? zf : pc;
        return n(t);
      }
      function Mp(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Lr(t) ? oe(t) : t.length;
        var n = Et(t);
        return n == _t || n == pt ? t.size : Ai(t).length;
      }
      function Cp(t, n, e) {
        var i = q(t) ? ui : gc;
        return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
      }
      var bp = Y(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Ra(t, Ft(n, 1), []);
      }), Pr = ef || function() {
        return Tt.Date.now();
      };
      function xp(t, n) {
        if (typeof n != "function")
          throw new sn(g);
        return t = Z(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Io(t, n, e) {
        return n = e ? r : n, n = t && n == null ? t.length : n, Fn(t, It, r, r, r, r, n);
      }
      function To(t, n) {
        var e;
        if (typeof n != "function")
          throw new sn(g);
        return t = Z(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Xi = Y(function(t, n, e) {
        var i = N;
        if (e.length) {
          var a = Bn(e, de(Xi));
          i |= xt;
        }
        return Fn(t, i, n, e, a);
      }), Fo = Y(function(t, n, e) {
        var i = N | K;
        if (e.length) {
          var a = Bn(e, de(Fo));
          i |= xt;
        }
        return Fn(n, i, t, e, a);
      });
      function Po(t, n, e) {
        n = e ? r : n;
        var i = Fn(t, Q, r, r, r, r, r, n);
        return i.placeholder = Po.placeholder, i;
      }
      function Eo(t, n, e) {
        n = e ? r : n;
        var i = Fn(t, et, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function Ro(t, n, e) {
        var i, a, l, h, d, y, A = 0, I = !1, T = !1, E = !0;
        if (typeof t != "function")
          throw new sn(g);
        n = fn(n) || 0, dt(e) && (I = !!e.leading, T = "maxWait" in e, l = T ? bt(fn(e.maxWait) || 0, n) : l, E = "trailing" in e ? !!e.trailing : E);
        function D(yt) {
          var dn = i, Ln = a;
          return i = a = r, A = yt, h = t.apply(Ln, dn), h;
        }
        function U(yt) {
          return A = yt, d = We(V, n), I ? D(yt) : h;
        }
        function J(yt) {
          var dn = yt - y, Ln = yt - A, Qo = n - dn;
          return T ? Pt(Qo, l - Ln) : Qo;
        }
        function $(yt) {
          var dn = yt - y, Ln = yt - A;
          return y === r || dn >= n || dn < 0 || T && Ln >= l;
        }
        function V() {
          var yt = Pr();
          if ($(yt))
            return tt(yt);
          d = We(V, J(yt));
        }
        function tt(yt) {
          return d = r, E && i ? D(yt) : (i = a = r, h);
        }
        function Qt() {
          d !== r && $a(d), A = 0, i = y = a = d = r;
        }
        function Dt() {
          return d === r ? h : tt(Pr());
        }
        function Vt() {
          var yt = Pr(), dn = $(yt);
          if (i = arguments, a = this, y = yt, dn) {
            if (d === r)
              return U(y);
            if (T)
              return $a(d), d = We(V, n), D(y);
          }
          return d === r && (d = We(V, n)), h;
        }
        return Vt.cancel = Qt, Vt.flush = Dt, Vt;
      }
      var Sp = Y(function(t, n) {
        return ma(t, 1, n);
      }), Ap = Y(function(t, n, e) {
        return ma(t, fn(n) || 0, e);
      });
      function Ip(t) {
        return Fn(t, tn);
      }
      function Er(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new sn(g);
        var e = function() {
          var i = arguments, a = n ? n.apply(this, i) : i[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var h = t.apply(this, i);
          return e.cache = l.set(a, h) || l, h;
        };
        return e.cache = new (Er.Cache || In)(), e;
      }
      Er.Cache = In;
      function Rr(t) {
        if (typeof t != "function")
          throw new sn(g);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function Tp(t) {
        return To(2, t);
      }
      var Fp = dc(function(t, n) {
        n = n.length == 1 && q(n[0]) ? gt(n[0], Jt(B())) : gt(Ft(n, 1), Jt(B()));
        var e = n.length;
        return Y(function(i) {
          for (var a = -1, l = Pt(i.length, e); ++a < l; )
            i[a] = n[a].call(this, i[a]);
          return Zt(t, this, i);
        });
      }), Qi = Y(function(t, n) {
        var e = Bn(n, de(Qi));
        return Fn(t, xt, r, n, e);
      }), ko = Y(function(t, n) {
        var e = Bn(n, de(ko));
        return Fn(t, At, r, n, e);
      }), Pp = Pn(function(t, n) {
        return Fn(t, Ht, r, r, r, n);
      });
      function Ep(t, n) {
        if (typeof t != "function")
          throw new sn(g);
        return n = n === r ? n : Z(n), Y(t, n);
      }
      function Rp(t, n) {
        if (typeof t != "function")
          throw new sn(g);
        return n = n == null ? 0 : bt(Z(n), 0), Y(function(e) {
          var i = e[n], a = Hn(e, 0, n);
          return i && Wn(a, i), Zt(t, this, a);
        });
      }
      function kp(t, n, e) {
        var i = !0, a = !0;
        if (typeof t != "function")
          throw new sn(g);
        return dt(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), Ro(t, n, {
          leading: i,
          maxWait: n,
          trailing: a
        });
      }
      function Lp(t) {
        return Io(t, 1);
      }
      function Op(t, n) {
        return Qi(Oi(n), t);
      }
      function Dp() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function Np(t) {
        return on(t, O);
      }
      function Wp(t, n) {
        return n = typeof n == "function" ? n : r, on(t, O, n);
      }
      function Bp(t) {
        return on(t, w | O);
      }
      function Up(t, n) {
        return n = typeof n == "function" ? n : r, on(t, w | O, n);
      }
      function $p(t, n) {
        return n == null || ya(t, n, St(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var zp = xr(bi), Gp = xr(function(t, n) {
        return t >= n;
      }), ne = Sa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Sa : function(t) {
        return vt(t) && st.call(t, "callee") && !ca.call(t, "callee");
      }, q = x.isArray, Hp = Ks ? Jt(Ks) : Vf;
      function $t(t) {
        return t != null && kr(t.length) && !Rn(t);
      }
      function wt(t) {
        return vt(t) && $t(t);
      }
      function qp(t) {
        return t === !0 || t === !1 || vt(t) && Lt(t) == lt;
      }
      var qn = sf || us, Kp = Zs ? Jt(Zs) : jf;
      function Zp(t) {
        return vt(t) && t.nodeType === 1 && !Be(t);
      }
      function Jp(t) {
        if (t == null)
          return !0;
        if ($t(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || qn(t) || _e(t) || ne(t)))
          return !t.length;
        var n = Et(t);
        if (n == _t || n == pt)
          return !t.size;
        if (Ne(t))
          return !Ai(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function Yp(t, n) {
        return Le(t, n);
      }
      function Xp(t, n, e) {
        e = typeof e == "function" ? e : r;
        var i = e ? e(t, n) : r;
        return i === r ? Le(t, n, r, e) : !!i;
      }
      function Vi(t) {
        if (!vt(t))
          return !1;
        var n = Lt(t);
        return n == Rt || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !Be(t);
      }
      function Qp(t) {
        return typeof t == "number" && pa(t);
      }
      function Rn(t) {
        if (!dt(t))
          return !1;
        var n = Lt(t);
        return n == Wt || n == wn || n == ot || n == cn;
      }
      function Lo(t) {
        return typeof t == "number" && t == Z(t);
      }
      function kr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vn;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var Oo = Js ? Jt(Js) : nc;
      function Vp(t, n) {
        return t === n || Si(t, n, zi(n));
      }
      function jp(t, n, e) {
        return e = typeof e == "function" ? e : r, Si(t, n, zi(n), e);
      }
      function tg(t) {
        return Do(t) && t != +t;
      }
      function ng(t) {
        if (Wc(t))
          throw new H(p);
        return Aa(t);
      }
      function eg(t) {
        return t === null;
      }
      function rg(t) {
        return t == null;
      }
      function Do(t) {
        return typeof t == "number" || vt(t) && Lt(t) == kt;
      }
      function Be(t) {
        if (!vt(t) || Lt(t) != Mt)
          return !1;
        var n = ar(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && er.call(e) == Vl;
      }
      var ji = Ys ? Jt(Ys) : ec;
      function ig(t) {
        return Lo(t) && t >= -vn && t <= vn;
      }
      var No = Xs ? Jt(Xs) : rc;
      function Lr(t) {
        return typeof t == "string" || !q(t) && vt(t) && Lt(t) == yn;
      }
      function Xt(t) {
        return typeof t == "symbol" || vt(t) && Lt(t) == Ze;
      }
      var _e = Qs ? Jt(Qs) : ic;
      function sg(t) {
        return t === r;
      }
      function ag(t) {
        return vt(t) && Et(t) == be;
      }
      function og(t) {
        return vt(t) && Lt(t) == Cu;
      }
      var ug = xr(Ii), lg = xr(function(t, n) {
        return t <= n;
      });
      function Wo(t) {
        if (!t)
          return [];
        if ($t(t))
          return Lr(t) ? hn(t) : Ut(t);
        if (Ae && t[Ae])
          return Ul(t[Ae]());
        var n = Et(t), e = n == _t ? gi : n == pt ? je : ve;
        return e(t);
      }
      function kn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = fn(t), t === xn || t === -xn) {
          var n = t < 0 ? -1 : 1;
          return n * Ke;
        }
        return t === t ? t : 0;
      }
      function Z(t) {
        var n = kn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function Bo(t) {
        return t ? Qn(Z(t), 0, k) : 0;
      }
      function fn(t) {
        if (typeof t == "number")
          return t;
        if (Xt(t))
          return Sn;
        if (dt(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = dt(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = ra(t);
        var e = Gu.test(t);
        return e || qu.test(t) ? bl(t.slice(2), e ? 2 : 8) : zu.test(t) ? Sn : +t;
      }
      function Uo(t) {
        return Mn(t, zt(t));
      }
      function fg(t) {
        return t ? Qn(Z(t), -vn, vn) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Yt(t);
      }
      var cg = pe(function(t, n) {
        if (Ne(n) || $t(n)) {
          Mn(n, St(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Ee(t, e, n[e]);
      }), $o = pe(function(t, n) {
        Mn(n, zt(n), t);
      }), Or = pe(function(t, n, e, i) {
        Mn(n, zt(n), t, i);
      }), hg = pe(function(t, n, e, i) {
        Mn(n, St(n), t, i);
      }), pg = Pn(mi);
      function gg(t, n) {
        var e = he(t);
        return n == null ? e : wa(e, n);
      }
      var dg = Y(function(t, n) {
        t = at(t);
        var e = -1, i = n.length, a = i > 2 ? n[2] : r;
        for (a && Ot(n[0], n[1], a) && (i = 1); ++e < i; )
          for (var l = n[e], h = zt(l), d = -1, y = h.length; ++d < y; ) {
            var A = h[d], I = t[A];
            (I === r || gn(I, le[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), _g = Y(function(t) {
        return t.push(r, ro), Zt(zo, r, t);
      });
      function vg(t, n) {
        return js(t, B(n, 3), mn);
      }
      function wg(t, n) {
        return js(t, B(n, 3), Ci);
      }
      function yg(t, n) {
        return t == null ? t : Mi(t, B(n, 3), zt);
      }
      function mg(t, n) {
        return t == null ? t : ba(t, B(n, 3), zt);
      }
      function Mg(t, n) {
        return t && mn(t, B(n, 3));
      }
      function Cg(t, n) {
        return t && Ci(t, B(n, 3));
      }
      function bg(t) {
        return t == null ? [] : _r(t, St(t));
      }
      function xg(t) {
        return t == null ? [] : _r(t, zt(t));
      }
      function ts(t, n, e) {
        var i = t == null ? r : Vn(t, n);
        return i === r ? e : i;
      }
      function Sg(t, n) {
        return t != null && ao(t, n, Jf);
      }
      function ns(t, n) {
        return t != null && ao(t, n, Yf);
      }
      var Ag = Va(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = rr.call(n)), t[n] = e;
      }, rs(Gt)), Ig = Va(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = rr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, B), Tg = Y(ke);
      function St(t) {
        return $t(t) ? _a(t) : Ai(t);
      }
      function zt(t) {
        return $t(t) ? _a(t, !0) : sc(t);
      }
      function Fg(t, n) {
        var e = {};
        return n = B(n, 3), mn(t, function(i, a, l) {
          Tn(e, n(i, a, l), i);
        }), e;
      }
      function Pg(t, n) {
        var e = {};
        return n = B(n, 3), mn(t, function(i, a, l) {
          Tn(e, a, n(i, a, l));
        }), e;
      }
      var Eg = pe(function(t, n, e) {
        vr(t, n, e);
      }), zo = pe(function(t, n, e, i) {
        vr(t, n, e, i);
      }), Rg = Pn(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var i = !1;
        n = gt(n, function(l) {
          return l = Gn(l, t), i || (i = l.length > 1), l;
        }), Mn(t, Ui(t), e), i && (e = on(e, w | P | O, Ac));
        for (var a = n.length; a--; )
          Ri(e, n[a]);
        return e;
      });
      function kg(t, n) {
        return Go(t, Rr(B(n)));
      }
      var Lg = Pn(function(t, n) {
        return t == null ? {} : oc(t, n);
      });
      function Go(t, n) {
        if (t == null)
          return {};
        var e = gt(Ui(t), function(i) {
          return [i];
        });
        return n = B(n), ka(t, e, function(i, a) {
          return n(i, a[0]);
        });
      }
      function Og(t, n, e) {
        n = Gn(n, t);
        var i = -1, a = n.length;
        for (a || (a = 1, t = r); ++i < a; ) {
          var l = t == null ? r : t[Cn(n[i])];
          l === r && (i = a, l = e), t = Rn(l) ? l.call(t) : l;
        }
        return t;
      }
      function Dg(t, n, e) {
        return t == null ? t : Oe(t, n, e);
      }
      function Ng(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Oe(t, n, e, i);
      }
      var Ho = no(St), qo = no(zt);
      function Wg(t, n, e) {
        var i = q(t), a = i || qn(t) || _e(t);
        if (n = B(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = i ? new l() : [] : dt(t) ? e = Rn(l) ? he(ar(t)) : {} : e = {};
        }
        return (a ? rn : mn)(t, function(h, d, y) {
          return n(e, h, d, y);
        }), e;
      }
      function Bg(t, n) {
        return t == null ? !0 : Ri(t, n);
      }
      function Ug(t, n, e) {
        return t == null ? t : Wa(t, n, Oi(e));
      }
      function $g(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Wa(t, n, Oi(e), i);
      }
      function ve(t) {
        return t == null ? [] : pi(t, St(t));
      }
      function zg(t) {
        return t == null ? [] : pi(t, zt(t));
      }
      function Gg(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Qn(fn(t), n, e);
      }
      function Hg(t, n, e) {
        return n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), t = fn(t), Xf(t, n, e);
      }
      function qg(t, n, e) {
        if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = kn(t), n === r ? (n = t, t = 0) : n = kn(n)), t > n) {
          var i = t;
          t = n, n = i;
        }
        if (e || t % 1 || n % 1) {
          var a = ga();
          return Pt(t + a * (n - t + Cl("1e-" + ((a + "").length - 1))), n);
        }
        return Fi(t, n);
      }
      var Kg = ge(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? Ko(n) : n);
      });
      function Ko(t) {
        return es(it(t).toLowerCase());
      }
      function Zo(t) {
        return t = it(t), t && t.replace(Zu, Ol).replace(hl, "");
      }
      function Zg(t, n, e) {
        t = it(t), n = Yt(n);
        var i = t.length;
        e = e === r ? i : Qn(Z(e), 0, i);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function Jg(t) {
        return t = it(t), t && Iu.test(t) ? t.replace(bs, Dl) : t;
      }
      function Yg(t) {
        return t = it(t), t && ku.test(t) ? t.replace(Qr, "\\$&") : t;
      }
      var Xg = ge(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), Qg = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), Vg = Ya("toLowerCase");
      function jg(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        if (!n || i >= n)
          return t;
        var a = (n - i) / 2;
        return br(fr(a), e) + t + br(lr(a), e);
      }
      function td(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? t + br(n - i, e) : t;
      }
      function nd(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? br(n - i, e) + t : t;
      }
      function ed(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), lf(it(t).replace(Vr, ""), n || 0);
      }
      function rd(t, n, e) {
        return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n), Pi(it(t), n);
      }
      function id() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var sd = ge(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function ad(t, n, e) {
        return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? Hn(hn(t), 0, e) : t.split(n, e)) : [];
      }
      var od = ge(function(t, n, e) {
        return t + (e ? " " : "") + es(n);
      });
      function ud(t, n, e) {
        return t = it(t), e = e == null ? 0 : Qn(Z(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
      }
      function ld(t, n, e) {
        var i = u.templateSettings;
        e && Ot(t, n, e) && (n = r), t = it(t), n = Or({}, n, i, eo);
        var a = Or({}, n.imports, i.imports, eo), l = St(a), h = pi(a, l), d, y, A = 0, I = n.interpolate || Je, T = "__p += '", E = di(
          (n.escape || Je).source + "|" + I.source + "|" + (I === xs ? $u : Je).source + "|" + (n.evaluate || Je).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vl + "]") + `
`;
        t.replace(E, function($, V, tt, Qt, Dt, Vt) {
          return tt || (tt = Qt), T += t.slice(A, Vt).replace(Ju, Nl), V && (d = !0, T += `' +
__e(` + V + `) +
'`), Dt && (y = !0, T += `';
` + Dt + `;
__p += '`), tt && (T += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), A = Vt + $.length, $;
        }), T += `';
`;
        var U = st.call(n, "variable") && n.variable;
        if (!U)
          T = `with (obj) {
` + T + `
}
`;
        else if (Bu.test(U))
          throw new H(_);
        T = (y ? T.replace(bu, "") : T).replace(xu, "$1").replace(Su, "$1;"), T = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
        var J = Yo(function() {
          return rt(l, D + "return " + T).apply(r, h);
        });
        if (J.source = T, Vi(J))
          throw J;
        return J;
      }
      function fd(t) {
        return it(t).toLowerCase();
      }
      function cd(t) {
        return it(t).toUpperCase();
      }
      function hd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return ra(t);
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = hn(n), l = ia(i, a), h = sa(i, a) + 1;
        return Hn(i, l, h).join("");
      }
      function pd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, oa(t) + 1);
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = sa(i, hn(n)) + 1;
        return Hn(i, 0, a).join("");
      }
      function gd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(Vr, "");
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = ia(i, hn(n));
        return Hn(i, a).join("");
      }
      function dd(t, n) {
        var e = qt, i = Me;
        if (dt(n)) {
          var a = "separator" in n ? n.separator : a;
          e = "length" in n ? Z(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
        }
        t = it(t);
        var l = t.length;
        if (ae(t)) {
          var h = hn(t);
          l = h.length;
        }
        if (e >= l)
          return t;
        var d = e - oe(i);
        if (d < 1)
          return i;
        var y = h ? Hn(h, 0, d).join("") : t.slice(0, d);
        if (a === r)
          return y + i;
        if (h && (d += y.length - d), ji(a)) {
          if (t.slice(d).search(a)) {
            var A, I = y;
            for (a.global || (a = di(a.source, it(Ss.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var T = A.index;
            y = y.slice(0, T === r ? d : T);
          }
        } else if (t.indexOf(Yt(a), d) != d) {
          var E = y.lastIndexOf(a);
          E > -1 && (y = y.slice(0, E));
        }
        return y + i;
      }
      function _d(t) {
        return t = it(t), t && Au.test(t) ? t.replace(Cs, Hl) : t;
      }
      var vd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), es = Ya("toUpperCase");
      function Jo(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? Bl(t) ? Zl(t) : Pl(t) : t.match(n) || [];
      }
      var Yo = Y(function(t, n) {
        try {
          return Zt(t, r, n);
        } catch (e) {
          return Vi(e) ? e : new H(e);
        }
      }), wd = Pn(function(t, n) {
        return rn(n, function(e) {
          e = Cn(e), Tn(t, e, Xi(t[e], t));
        }), t;
      });
      function yd(t) {
        var n = t == null ? 0 : t.length, e = B();
        return t = n ? gt(t, function(i) {
          if (typeof i[1] != "function")
            throw new sn(g);
          return [e(i[0]), i[1]];
        }) : [], Y(function(i) {
          for (var a = -1; ++a < n; ) {
            var l = t[a];
            if (Zt(l[0], this, i))
              return Zt(l[1], this, i);
          }
        });
      }
      function md(t) {
        return qf(on(t, w));
      }
      function rs(t) {
        return function() {
          return t;
        };
      }
      function Md(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Cd = Qa(), bd = Qa(!0);
      function Gt(t) {
        return t;
      }
      function is(t) {
        return Ia(typeof t == "function" ? t : on(t, w));
      }
      function xd(t) {
        return Fa(on(t, w));
      }
      function Sd(t, n) {
        return Pa(t, on(n, w));
      }
      var Ad = Y(function(t, n) {
        return function(e) {
          return ke(e, t, n);
        };
      }), Id = Y(function(t, n) {
        return function(e) {
          return ke(t, e, n);
        };
      });
      function ss(t, n, e) {
        var i = St(n), a = _r(n, i);
        e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = _r(n, St(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
        return rn(a, function(d) {
          var y = n[d];
          t[d] = y, h && (t.prototype[d] = function() {
            var A = this.__chain__;
            if (l || A) {
              var I = t(this.__wrapped__), T = I.__actions__ = Ut(this.__actions__);
              return T.push({ func: y, args: arguments, thisArg: t }), I.__chain__ = A, I;
            }
            return y.apply(t, Wn([this.value()], arguments));
          });
        }), t;
      }
      function Td() {
        return Tt._ === this && (Tt._ = jl), this;
      }
      function as() {
      }
      function Fd(t) {
        return t = Z(t), Y(function(n) {
          return Ea(n, t);
        });
      }
      var Pd = Ni(gt), Ed = Ni(Vs), Rd = Ni(ui);
      function Xo(t) {
        return Hi(t) ? li(Cn(t)) : uc(t);
      }
      function kd(t) {
        return function(n) {
          return t == null ? r : Vn(t, n);
        };
      }
      var Ld = ja(), Od = ja(!0);
      function os() {
        return [];
      }
      function us() {
        return !1;
      }
      function Dd() {
        return {};
      }
      function Nd() {
        return "";
      }
      function Wd() {
        return !0;
      }
      function Bd(t, n) {
        if (t = Z(t), t < 1 || t > vn)
          return [];
        var e = k, i = Pt(t, k);
        n = B(n), t -= k;
        for (var a = hi(i, n); ++e < t; )
          n(e);
        return a;
      }
      function Ud(t) {
        return q(t) ? gt(t, Cn) : Xt(t) ? [t] : Ut(_o(it(t)));
      }
      function $d(t) {
        var n = ++Ql;
        return it(t) + n;
      }
      var zd = Cr(function(t, n) {
        return t + n;
      }, 0), Gd = Wi("ceil"), Hd = Cr(function(t, n) {
        return t / n;
      }, 1), qd = Wi("floor");
      function Kd(t) {
        return t && t.length ? dr(t, Gt, bi) : r;
      }
      function Zd(t, n) {
        return t && t.length ? dr(t, B(n, 2), bi) : r;
      }
      function Jd(t) {
        return na(t, Gt);
      }
      function Yd(t, n) {
        return na(t, B(n, 2));
      }
      function Xd(t) {
        return t && t.length ? dr(t, Gt, Ii) : r;
      }
      function Qd(t, n) {
        return t && t.length ? dr(t, B(n, 2), Ii) : r;
      }
      var Vd = Cr(function(t, n) {
        return t * n;
      }, 1), jd = Wi("round"), t0 = Cr(function(t, n) {
        return t - n;
      }, 0);
      function n0(t) {
        return t && t.length ? ci(t, Gt) : 0;
      }
      function e0(t, n) {
        return t && t.length ? ci(t, B(n, 2)) : 0;
      }
      return u.after = xp, u.ary = Io, u.assign = cg, u.assignIn = $o, u.assignInWith = Or, u.assignWith = hg, u.at = pg, u.before = To, u.bind = Xi, u.bindAll = wd, u.bindKey = Fo, u.castArray = Dp, u.chain = xo, u.chunk = qc, u.compact = Kc, u.concat = Zc, u.cond = yd, u.conforms = md, u.constant = rs, u.countBy = np, u.create = gg, u.curry = Po, u.curryRight = Eo, u.debounce = Ro, u.defaults = dg, u.defaultsDeep = _g, u.defer = Sp, u.delay = Ap, u.difference = Jc, u.differenceBy = Yc, u.differenceWith = Xc, u.drop = Qc, u.dropRight = Vc, u.dropRightWhile = jc, u.dropWhile = th, u.fill = nh, u.filter = rp, u.flatMap = ap, u.flatMapDeep = op, u.flatMapDepth = up, u.flatten = mo, u.flattenDeep = eh, u.flattenDepth = rh, u.flip = Ip, u.flow = Cd, u.flowRight = bd, u.fromPairs = ih, u.functions = bg, u.functionsIn = xg, u.groupBy = lp, u.initial = ah, u.intersection = oh, u.intersectionBy = uh, u.intersectionWith = lh, u.invert = Ag, u.invertBy = Ig, u.invokeMap = cp, u.iteratee = is, u.keyBy = hp, u.keys = St, u.keysIn = zt, u.map = Fr, u.mapKeys = Fg, u.mapValues = Pg, u.matches = xd, u.matchesProperty = Sd, u.memoize = Er, u.merge = Eg, u.mergeWith = zo, u.method = Ad, u.methodOf = Id, u.mixin = ss, u.negate = Rr, u.nthArg = Fd, u.omit = Rg, u.omitBy = kg, u.once = Tp, u.orderBy = pp, u.over = Pd, u.overArgs = Fp, u.overEvery = Ed, u.overSome = Rd, u.partial = Qi, u.partialRight = ko, u.partition = gp, u.pick = Lg, u.pickBy = Go, u.property = Xo, u.propertyOf = kd, u.pull = ph, u.pullAll = Co, u.pullAllBy = gh, u.pullAllWith = dh, u.pullAt = _h, u.range = Ld, u.rangeRight = Od, u.rearg = Pp, u.reject = vp, u.remove = vh, u.rest = Ep, u.reverse = Ji, u.sampleSize = yp, u.set = Dg, u.setWith = Ng, u.shuffle = mp, u.slice = wh, u.sortBy = bp, u.sortedUniq = Sh, u.sortedUniqBy = Ah, u.split = ad, u.spread = Rp, u.tail = Ih, u.take = Th, u.takeRight = Fh, u.takeRightWhile = Ph, u.takeWhile = Eh, u.tap = Kh, u.throttle = kp, u.thru = Tr, u.toArray = Wo, u.toPairs = Ho, u.toPairsIn = qo, u.toPath = Ud, u.toPlainObject = Uo, u.transform = Wg, u.unary = Lp, u.union = Rh, u.unionBy = kh, u.unionWith = Lh, u.uniq = Oh, u.uniqBy = Dh, u.uniqWith = Nh, u.unset = Bg, u.unzip = Yi, u.unzipWith = bo, u.update = Ug, u.updateWith = $g, u.values = ve, u.valuesIn = zg, u.without = Wh, u.words = Jo, u.wrap = Op, u.xor = Bh, u.xorBy = Uh, u.xorWith = $h, u.zip = zh, u.zipObject = Gh, u.zipObjectDeep = Hh, u.zipWith = qh, u.entries = Ho, u.entriesIn = qo, u.extend = $o, u.extendWith = Or, ss(u, u), u.add = zd, u.attempt = Yo, u.camelCase = Kg, u.capitalize = Ko, u.ceil = Gd, u.clamp = Gg, u.clone = Np, u.cloneDeep = Bp, u.cloneDeepWith = Up, u.cloneWith = Wp, u.conformsTo = $p, u.deburr = Zo, u.defaultTo = Md, u.divide = Hd, u.endsWith = Zg, u.eq = gn, u.escape = Jg, u.escapeRegExp = Yg, u.every = ep, u.find = ip, u.findIndex = wo, u.findKey = vg, u.findLast = sp, u.findLastIndex = yo, u.findLastKey = wg, u.floor = qd, u.forEach = So, u.forEachRight = Ao, u.forIn = yg, u.forInRight = mg, u.forOwn = Mg, u.forOwnRight = Cg, u.get = ts, u.gt = zp, u.gte = Gp, u.has = Sg, u.hasIn = ns, u.head = Mo, u.identity = Gt, u.includes = fp, u.indexOf = sh, u.inRange = Hg, u.invoke = Tg, u.isArguments = ne, u.isArray = q, u.isArrayBuffer = Hp, u.isArrayLike = $t, u.isArrayLikeObject = wt, u.isBoolean = qp, u.isBuffer = qn, u.isDate = Kp, u.isElement = Zp, u.isEmpty = Jp, u.isEqual = Yp, u.isEqualWith = Xp, u.isError = Vi, u.isFinite = Qp, u.isFunction = Rn, u.isInteger = Lo, u.isLength = kr, u.isMap = Oo, u.isMatch = Vp, u.isMatchWith = jp, u.isNaN = tg, u.isNative = ng, u.isNil = rg, u.isNull = eg, u.isNumber = Do, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = Be, u.isRegExp = ji, u.isSafeInteger = ig, u.isSet = No, u.isString = Lr, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = sg, u.isWeakMap = ag, u.isWeakSet = og, u.join = fh, u.kebabCase = Xg, u.last = ln, u.lastIndexOf = ch, u.lowerCase = Qg, u.lowerFirst = Vg, u.lt = ug, u.lte = lg, u.max = Kd, u.maxBy = Zd, u.mean = Jd, u.meanBy = Yd, u.min = Xd, u.minBy = Qd, u.stubArray = os, u.stubFalse = us, u.stubObject = Dd, u.stubString = Nd, u.stubTrue = Wd, u.multiply = Vd, u.nth = hh, u.noConflict = Td, u.noop = as, u.now = Pr, u.pad = jg, u.padEnd = td, u.padStart = nd, u.parseInt = ed, u.random = qg, u.reduce = dp, u.reduceRight = _p, u.repeat = rd, u.replace = id, u.result = Og, u.round = jd, u.runInContext = v, u.sample = wp, u.size = Mp, u.snakeCase = sd, u.some = Cp, u.sortedIndex = yh, u.sortedIndexBy = mh, u.sortedIndexOf = Mh, u.sortedLastIndex = Ch, u.sortedLastIndexBy = bh, u.sortedLastIndexOf = xh, u.startCase = od, u.startsWith = ud, u.subtract = t0, u.sum = n0, u.sumBy = e0, u.template = ld, u.times = Bd, u.toFinite = kn, u.toInteger = Z, u.toLength = Bo, u.toLower = fd, u.toNumber = fn, u.toSafeInteger = fg, u.toString = it, u.toUpper = cd, u.trim = hd, u.trimEnd = pd, u.trimStart = gd, u.truncate = dd, u.unescape = _d, u.uniqueId = $d, u.upperCase = vd, u.upperFirst = es, u.each = So, u.eachRight = Ao, u.first = Mo, ss(u, function() {
        var t = {};
        return mn(u, function(n, e) {
          st.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), rn(["drop", "take"], function(t, n) {
        j.prototype[t] = function(e) {
          e = e === r ? 1 : bt(Z(e), 0);
          var i = this.__filtered__ && !n ? new j(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = Pt(e, i.__takeCount__) : i.__views__.push({
            size: Pt(e, k),
            type: t + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, j.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), rn(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, i = e == Ce || e == $r;
        j.prototype[t] = function(a) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: B(a, 3),
            type: e
          }), l.__filtered__ = l.__filtered__ || i, l;
        };
      }), rn(["head", "last"], function(t, n) {
        var e = "take" + (n ? "Right" : "");
        j.prototype[t] = function() {
          return this[e](1).value()[0];
        };
      }), rn(["initial", "tail"], function(t, n) {
        var e = "drop" + (n ? "" : "Right");
        j.prototype[t] = function() {
          return this.__filtered__ ? new j(this) : this[e](1);
        };
      }), j.prototype.compact = function() {
        return this.filter(Gt);
      }, j.prototype.find = function(t) {
        return this.filter(t).head();
      }, j.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, j.prototype.invokeMap = Y(function(t, n) {
        return typeof t == "function" ? new j(this) : this.map(function(e) {
          return ke(e, t, n);
        });
      }), j.prototype.reject = function(t) {
        return this.filter(Rr(B(t)));
      }, j.prototype.slice = function(t, n) {
        t = Z(t);
        var e = this;
        return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Z(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
      }, j.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, j.prototype.toArray = function() {
        return this.take(k);
      }, mn(j.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), a = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
        a && (u.prototype[n] = function() {
          var h = this.__wrapped__, d = i ? [1] : arguments, y = h instanceof j, A = d[0], I = y || q(h), T = function(V) {
            var tt = a.apply(u, Wn([V], d));
            return i && E ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (y = I = !1);
          var E = this.__chain__, D = !!this.__actions__.length, U = l && !E, J = y && !D;
          if (!l && I) {
            h = J ? h : new j(this);
            var $ = t.apply(h, d);
            return $.__actions__.push({ func: Tr, args: [T], thisArg: r }), new an($, E);
          }
          return U && J ? t.apply(this, d) : ($ = this.thru(T), U ? i ? $.value()[0] : $.value() : $);
        });
      }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = tr[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var a = arguments;
          if (i && !this.__chain__) {
            var l = this.value();
            return n.apply(q(l) ? l : [], a);
          }
          return this[e](function(h) {
            return n.apply(q(h) ? h : [], a);
          });
        };
      }), mn(j.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var i = e.name + "";
          st.call(ce, i) || (ce[i] = []), ce[i].push({ name: n, func: e });
        }
      }), ce[Mr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = _f, j.prototype.reverse = vf, j.prototype.value = wf, u.prototype.at = Zh, u.prototype.chain = Jh, u.prototype.commit = Yh, u.prototype.next = Xh, u.prototype.plant = Vh, u.prototype.reverse = jh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = tp, u.prototype.first = u.prototype.head, Ae && (u.prototype[Ae] = Qh), u;
    }, ue = Jl();
    Zn ? ((Zn.exports = ue)._ = ue, ii._ = ue) : Tt._ = ue;
  }).call(Ue);
})(Dr, Dr.exports);
var ou = Dr.exports;
const W = /* @__PURE__ */ au(ou);
var gs = { exports: {} }, ls, Vo;
function s0() {
  if (Vo) return ls;
  Vo = 1;
  var c = 1e3, s = c * 60, r = s * 60, o = r * 24, f = o * 7, p = o * 365.25;
  ls = function(b, w) {
    w = w || {};
    var P = typeof b;
    if (P === "string" && b.length > 0)
      return g(b);
    if (P === "number" && isFinite(b))
      return w.long ? m(b) : _(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function g(b) {
    if (b = String(b), !(b.length > 100)) {
      var w = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (w) {
        var P = parseFloat(w[1]), O = (w[2] || "ms").toLowerCase();
        switch (O) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return P * p;
          case "weeks":
          case "week":
          case "w":
            return P * f;
          case "days":
          case "day":
          case "d":
            return P * o;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return P * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return P * s;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return P * c;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return P;
          default:
            return;
        }
      }
    }
  }
  function _(b) {
    var w = Math.abs(b);
    return w >= o ? Math.round(b / o) + "d" : w >= r ? Math.round(b / r) + "h" : w >= s ? Math.round(b / s) + "m" : w >= c ? Math.round(b / c) + "s" : b + "ms";
  }
  function m(b) {
    var w = Math.abs(b);
    return w >= o ? C(b, w, o, "day") : w >= r ? C(b, w, r, "hour") : w >= s ? C(b, w, s, "minute") : w >= c ? C(b, w, c, "second") : b + " ms";
  }
  function C(b, w, P, O) {
    var R = w >= P * 1.5;
    return Math.round(b / P) + " " + O + (R ? "s" : "");
  }
  return ls;
}
function a0(c) {
  r.debug = r, r.default = r, r.coerce = m, r.disable = p, r.enable = f, r.enabled = g, r.humanize = s0(), r.destroy = C, Object.keys(c).forEach((b) => {
    r[b] = c[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function s(b) {
    let w = 0;
    for (let P = 0; P < b.length; P++)
      w = (w << 5) - w + b.charCodeAt(P), w |= 0;
    return r.colors[Math.abs(w) % r.colors.length];
  }
  r.selectColor = s;
  function r(b) {
    let w, P = null, O, R;
    function F(...N) {
      if (!F.enabled)
        return;
      const K = F, X = Number(/* @__PURE__ */ new Date()), Q = X - (w || X);
      K.diff = Q, K.prev = w, K.curr = X, w = X, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
      let et = 0;
      N[0] = N[0].replace(/%([a-zA-Z%])/g, (At, It) => {
        if (At === "%%")
          return "%";
        et++;
        const Ht = r.formatters[It];
        if (typeof Ht == "function") {
          const tn = N[et];
          At = Ht.call(K, tn), N.splice(et, 1), et--;
        }
        return At;
      }), r.formatArgs.call(K, N), (K.log || r.log).apply(K, N);
    }
    return F.namespace = b, F.useColors = r.useColors(), F.color = r.selectColor(b), F.extend = o, F.destroy = r.destroy, Object.defineProperty(F, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => P !== null ? P : (O !== r.namespaces && (O = r.namespaces, R = r.enabled(b)), R),
      set: (N) => {
        P = N;
      }
    }), typeof r.init == "function" && r.init(F), F;
  }
  function o(b, w) {
    const P = r(this.namespace + (typeof w > "u" ? ":" : w) + b);
    return P.log = this.log, P;
  }
  function f(b) {
    r.save(b), r.namespaces = b, r.names = [], r.skips = [];
    let w;
    const P = (typeof b == "string" ? b : "").split(/[\s,]+/), O = P.length;
    for (w = 0; w < O; w++)
      P[w] && (b = P[w].replace(/\*/g, ".*?"), b[0] === "-" ? r.skips.push(new RegExp("^" + b.slice(1) + "$")) : r.names.push(new RegExp("^" + b + "$")));
  }
  function p() {
    const b = [
      ...r.names.map(_),
      ...r.skips.map(_).map((w) => "-" + w)
    ].join(",");
    return r.enable(""), b;
  }
  function g(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let w, P;
    for (w = 0, P = r.skips.length; w < P; w++)
      if (r.skips[w].test(b))
        return !1;
    for (w = 0, P = r.names.length; w < P; w++)
      if (r.names[w].test(b))
        return !0;
    return !1;
  }
  function _(b) {
    return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function m(b) {
    return b instanceof Error ? b.stack || b.message : b;
  }
  function C() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var o0 = a0;
(function(c, s) {
  s.formatArgs = o, s.save = f, s.load = p, s.useColors = r, s.storage = g(), s.destroy = /* @__PURE__ */ (() => {
    let m = !1;
    return () => {
      m || (m = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), s.colors = [
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
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
      return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return !1;
    let m;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function o(m) {
    if (m[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + m[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
      return;
    const C = "color: " + this.color;
    m.splice(1, 0, C, "color: inherit");
    let b = 0, w = 0;
    m[0].replace(/%[a-zA-Z%]/g, (P) => {
      P !== "%%" && (b++, P === "%c" && (w = b));
    }), m.splice(w, 0, C);
  }
  s.log = console.debug || console.log || (() => {
  });
  function f(m) {
    try {
      m ? s.storage.setItem("debug", m) : s.storage.removeItem("debug");
    } catch {
    }
  }
  function p() {
    let m;
    try {
      m = s.storage.getItem("debug");
    } catch {
    }
    return !m && typeof process < "u" && "env" in process && (m = process.env.DEBUG), m;
  }
  function g() {
    try {
      return localStorage;
    } catch {
    }
  }
  c.exports = o0(s);
  const { formatters: _ } = c.exports;
  _.j = function(m) {
    try {
      return JSON.stringify(m);
    } catch (C) {
      return "[UnexpectedJSONParseError]: " + C.message;
    }
  };
})(gs, gs.exports);
var u0 = gs.exports;
const l0 = /* @__PURE__ */ au(u0), fs = {};
function Kn(c) {
  if (!fs[c]) {
    const s = l0("ultraPacer:core");
    s(`loading debug for namespace "${c}"`), fs[c] = s.extend(c);
  }
  return fs[c];
}
function Nt(c, s = 0) {
  return Math.round(c * 10 ** s) / 10 ** s;
}
function we(c, s, r, o, f) {
  return r + (f - c) / (s - c) * (o - r);
}
function uu(c, s, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < c[f])
      p.push(s[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[o]; )
        f++;
      f === c.length - 1 || r[o] === c[f] ? p.push(s[f]) : p.push(we(c[f], c[f + 1], s[f], s[f + 1], r[o]));
    }
  return p;
}
function lu(c) {
  let s, r, o, f, p = 0, g = 0, _ = 0, m = 0, C = 0;
  for (s = 0; s < c.length; s++)
    r = c[s][0], o = c[s][1], f = c[s][2], C += f, p += f * r, _ += f * (r * r), g += f * o, m += f * (r * o);
  const b = (g * _ - p * m) / (C * _ - p * p);
  return [(C * m - p * g) / (C * _ - p * p), b];
}
function fu(c, s, r, o) {
  let f = 0, p = 0;
  const g = [];
  return r.forEach((_) => {
    for (; c[f] < _ - o; )
      f++;
    for (f > 0 && c[f] >= _ && f--; p < c.length - 1 && c[p + 1] <= _ + o; )
      p++;
    p < c.length - 1 && c[p] <= _ && p++;
    const m = Math.max(o, Math.abs(_ - c[f]) + 1e-3, Math.abs(_ - c[p]) + 1e-3), C = [];
    let b = 0;
    for (let w = f; w <= p; w++)
      b = (1 - (Math.abs(_ - c[w]) / m) ** 3) ** 3, C.push([c[w], s[w], b]);
    g.push(lu(C));
  }), g;
}
function ws(c, s, r) {
  return Nt(c, r) < Nt(s, r);
}
function f0(c, s, r) {
  return Nt(c, r) > Nt(s, r);
}
function ye(c, s, r) {
  return Nt(c, r) <= Nt(s, r);
}
function Br(c, s, r) {
  return Nt(c, r) >= Nt(s, r);
}
function Ge(c, s, r) {
  return Nt(c, r) === Nt(s, r);
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: we,
  interpArray: uu,
  linearRegression: lu,
  req: Ge,
  rgt: f0,
  rgte: Br,
  rlt: ws,
  rlte: ye,
  round: Nt,
  wlslr: fu
}, Symbol.toStringTag, { value: "Module" }));
class me extends Error {
  constructor(r, o) {
    super(r);
    M(this, "field");
    this.name = "MissingDataError", this.field = o;
  }
}
class bn {
  constructor(s) {
    M(this, "_altitude", 1);
    M(this, "_grade", 1);
    M(this, "_terrain", 1);
    M(this, "_heat", 1);
    M(this, "_dark", 1);
    M(this, "_fatigue", 1);
    M(this, "_strategy", 1);
    M(this, "_combined");
    Object.assign(this, s);
  }
  init(s) {
    return this._altitude = s, this._grade = s, this._terrain = s, this._heat = s, this._dark = s, this._fatigue = s, this._strategy = s, this;
  }
  get altitude() {
    return this._altitude;
  }
  set altitude(s) {
    this._altitude = s, delete this._combined;
  }
  get grade() {
    return this._grade;
  }
  set grade(s) {
    this._grade = s, delete this._combined;
  }
  get terrain() {
    return this._terrain;
  }
  set terrain(s) {
    this._terrain = s, delete this._combined;
  }
  get heat() {
    return this._heat;
  }
  set heat(s) {
    this._heat = s, delete this._combined;
  }
  get dark() {
    return this._dark;
  }
  set dark(s) {
    this._dark = s, delete this._combined;
  }
  get fatigue() {
    return this._fatigue;
  }
  set fatigue(s) {
    this._fatigue = s, delete this._combined;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(s) {
    this._strategy = s, delete this._combined;
  }
  get combined() {
    return this._combined === void 0 && (this._combined = this._altitude * this._grade * this._terrain * this._heat * this._dark * this._fatigue * this._strategy), this._combined;
  }
  /**
   * lookup a factor by name
   * @param name - factor name
   * @returns factor value
   */
  get(s) {
    switch (s) {
      case "altitude":
        return this.altitude;
      case "grade":
        return this.grade;
      case "terrain":
        return this.terrain;
      case "heat":
        return this.heat;
      case "dark":
        return this.dark;
      case "fatigue":
        return this.fatigue;
      case "strategy":
        return this.strategy;
      default:
        throw new Error(`${s} is not a valid factor`);
    }
  }
  /**
   * @param f - function to apply
   * @param factors - factor list to apply
   */
  applyEach(s, r) {
    this._altitude = s(this._altitude, r.altitude), this._grade = s(this._grade, r.grade), this._terrain = s(this._terrain, r.terrain), this._heat = s(this._heat, r.heat), this._dark = s(this._dark, r.dark), this._fatigue = s(this._fatigue, r.fatigue), this._strategy = s(this._strategy, r.strategy);
  }
  /**
   * scale each factor
   * @param scale - scale to apply
   */
  scaleEach(s) {
    return this._altitude *= s, this._grade *= s, this._terrain *= s, this._heat *= s, this._dark *= s, this._fatigue *= s, this._strategy *= s, delete this._combined, this;
  }
}
class jo {
  constructor(s, r, o) {
    M(this, "factors", new bn());
    M(this, "point");
    M(this, "course");
    M(this, "loop");
    Object.defineProperty(this, "course", { writable: !0 }), this.point = r, this.course = s, this.loop = o;
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
  get grade() {
    return this.point.grade * (this.point.grade > 0 ? this.course.gainScale : this.course.lossScale);
  }
  get loc() {
    let s = this.point.loc * this.course.distScale;
    return this.loop && (s += this.course.loopDist * this.loop), s;
  }
}
const c0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function h0(c, s) {
  (s === null || typeof s > "u") && (s = c0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const tu = {
  baseline: 0,
  terrainScale: 1
};
function p0(c, s) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return s >= c.sunrise && s <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (s <= c.dawn || s >= c.dusk) ? 1 : r(s) >= r(c.nadir) ? we(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(s)
  ) : we(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(s)
  );
}
function g0(c, s, r, o = tu) {
  if (s === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = tu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * f, g = p0(r, c);
  return 1 + p * g;
}
const d0 = {
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
function _0(c, s) {
  return (s === null || typeof s > "u") && (s = d0), c < s.lower.lim ? s.lower.m * c + s.lower.b : c > s.upper.lim ? s.upper.m * c + s.upper.b : s.a * c ** 2 + s.b * c + 1;
}
function v0(c, s) {
  if (!s) return 1;
  if (c.tod === void 0) throw new Error("tod is undefined");
  const r = c.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return o += s.baseline / 100, o;
}
function w0(c, s) {
  const r = W.findLast(s.terrainFactors, (o) => ye(o.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const cu = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function ys(c) {
  const s = new bn().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    s.applyEach((f, p) => f + o * p, r);
  }), s.scaleEach(1 / ou.sumBy(c, "dist")), s;
}
function y0(c, s) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const g = p === c.length - 1 ? s : c[p + 1].onset, _ = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + _) * (g - f.onset), r += f.value;
  }), o / s;
}
function m0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function M0(c, s, r) {
  let o = -y0(s, r);
  return s.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        o += f.value;
      else if (f.type === "linear") {
        const g = p === s.length - 1 ? r : s[p + 1].onset;
        c > g ? o += f.value : o += f.value * (c - f.onset) / (g - f.onset);
      }
    }
  }), o;
}
class ds {
  constructor(s, r) {
    M(this, "plan");
    M(this, "values");
    this.plan = s, this.values = r ? W.cloneDeep(r) : [{ onset: 0, value: m0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + M0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((o) => o.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function _s(c, s) {
  return (c - 1) * s + 1;
}
function ms(c, s) {
  c.factors || (c.factors = new bn()), Object.assign(c.factors, {
    grade: _0(c.grade),
    altitude: h0(c.alt),
    terrain: w0(c, s)
  });
}
function Nr(c, s) {
  if (c.factors || (c.factors = new bn()), ms(c, s.course), s) {
    if (c.factors === void 0) throw new Error("no factors");
    c.factors.strategy = s.strategy.at(c.loc), Object.assign(c.factors, {
      heat: s.heatModel ? v0(c, s.heatModel) : 1,
      dark: s.event.sun ? g0(c.tod, c.factors.terrain, s.event.sun) : 1
    });
  }
  c.factors.altitude = _s(c.factors.altitude, s.scales.altitude), c.factors.dark = _s(c.factors.dark, s.scales.dark);
}
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: bn,
  Strategy: ds,
  applyScale: _s,
  generateCourseFactors: ms,
  generatePlanFactors: Nr,
  list: cu,
  rollup: ys
}, Symbol.toStringTag, { value: "Module" }));
function hu(c) {
  switch (c) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function C0(c, s, r) {
  const o = c.filter(
    (p, g) => g >= c.findIndex((_) => _ === s) && g <= c.findIndex((_) => _ === r)
  ), f = o.map((p, g) => ({
    factors: p.factors,
    dist: g === o.length - 1 ? 0 : o[g + 1].loc - o[g].loc
  }));
  return f.pop(), ys(f);
}
class pu {
  constructor(s) {
    M(this, "point1");
    M(this, "point2");
    M(this, "gain");
    M(this, "loss");
    M(this, "grade");
    M(this, "waypoint");
    M(this, "_name");
    this.point1 = s.point1, this.point2 = s.point2, this.gain = s.gain, this.loss = s.loss, this.grade = s.grade, s.name && (this._name = s.name);
  }
  get name() {
    var s;
    return this._name || ((s = this.waypoint) == null ? void 0 : s.name) || void 0;
  }
  get start() {
    return this.point1.loc;
  }
  get len() {
    return this.point2.loc - this.point1.loc;
  }
  get dist() {
    return this.len;
  }
  get end() {
    return this.point2.loc;
  }
  get alt() {
    return this.point2.alt;
  }
}
class b0 extends pu {
  constructor(r, o) {
    super(o);
    M(this, "_course");
    M(this, "point1");
    M(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class x0 extends pu {
  constructor(r, o) {
    super(o);
    M(this, "_plan");
    M(this, "point1");
    M(this, "point2");
    M(this, "_factors");
    this._plan = r, this.point1 = o.point1, this.point2 = o.point2;
  }
  get pace() {
    if (W.isNumber(this.time))
      return this.time ? this.time / this.len : 0;
  }
  // time based fields require associated point1 & point2
  get delay() {
    if (!(!W.isNumber(this.point1.elapsed) || !W.isNumber(this.point2.elapsed) || !W.isNumber(this.point1.time) || !W.isNumber(this.point2.time)))
      return this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time);
  }
  get elapsed() {
    return this.point2.elapsed;
  }
  get time() {
    if (!(!W.isNumber(this.point1.time) || !W.isNumber(this.point2.time)))
      return this.point2.time - this.point1.time;
  }
  get tod() {
    return this.point2.tod;
  }
  // dummy setters, just in case:
  set delay(r) {
  }
  set pace(r) {
  }
  set elapsed(r) {
  }
  set time(r) {
  }
  set tod(r) {
  }
  get factors() {
    return this._factors || (this._factors = C0(this._plan.points, this.point1, this.point2));
  }
}
const cs = Kn("CourseSplits");
class S0 {
  constructor(s) {
    M(this, "_segments");
    M(this, "_miles");
    M(this, "_kilometers");
    M(this, "course");
    this.course = s;
  }
  get segments() {
    return this._segments || (this._segments = this.createSegments()), this._segments;
  }
  set segments(s) {
    this._segments = s;
  }
  get miles() {
    var s;
    return (s = this._miles) != null && s.length || (this._miles = this.createSplits("miles")), this._miles;
  }
  set miles(s) {
    this._miles = s;
  }
  get kilometers() {
    var s;
    return (s = this._kilometers) != null && s.length || (this._kilometers = this.createSplits("kilometers")), this._kilometers;
  }
  set kilometers(s) {
    this._kilometers = s;
  }
  createSegments() {
    cs("createSegments");
    const s = this.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    cs(`createSplits:${s}`);
    const r = hu(s), o = W.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var P;
    const r = cs.extend("calcSegments");
    r("exec");
    const o = this.course, f = o.points;
    if (!(f != null && f.length))
      throw r("Course points are not defined."), new me("Course points are not defined.", "points");
    const p = [], g = [];
    let _, m, C = o.points[0], b;
    for (_ = 0, m = s.length; _ < m; _++) {
      const O = s[_];
      b && Ge((P = s[_ - 1]) == null ? void 0 : P.end, O.start, 4) ? C = b : C = o.getPoint(O.start), b = o.getPoint(O.end);
      const R = O.end - O.start, F = new b0(this.course, {
        gain: 0,
        loss: 0,
        grade: R > 0 ? (b.alt - C.alt) / R / 10 * (b.alt - C.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: C,
        point2: b
      }), N = new bn().init(0);
      p.push(F), g.push(N);
    }
    const w = (O, R, F, N) => {
      const K = F.alt - R.alt;
      O[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), ms(R, o);
      const X = F.loc - R.loc;
      N.applyEach((Q, et) => Q + et * X, R.factors);
    };
    _ = 1;
    for (let O = 0; O < p.length; O++) {
      const R = p[O], F = g[O];
      for (; ye(f[_].loc, R.point1.loc, 4); ) _++;
      let N = R.point1;
      for (; _ < f.length && ye(f[_].loc, R.point2.loc, 4); ) {
        const K = f[_];
        w(R, N, K, F), N = K, _++;
      }
      w(R, N, R.point2, F);
    }
    return p;
  }
}
var gu = {};
(function(c) {
  c.parseDMS = function(r) {
    if (typeof f == "object") throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
    if (typeof r == "number" && isFinite(r)) return Number(r);
    var o = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
    if (o[o.length - 1] == "" && o.splice(o.length - 1), o == "") return NaN;
    switch (o.length) {
      case 3:
        var f = o[0] / 1 + o[1] / 60 + o[2] / 3600;
        break;
      case 2:
        var f = o[0] / 1 + o[1] / 60;
        break;
      case 1:
        var f = o[0];
        break;
      default:
        return NaN;
    }
    return /^-|[WS]$/i.test(r.trim()) && (f = -f), Number(f);
  }, c.toDMS = function(r, o, f) {
    if (typeof r == "object") throw new TypeError("geo.toDMS - deg is [DOM?] object");
    if (isNaN(r)) return null;
    if (typeof o > "u" && (o = "dms"), typeof f > "u")
      switch (o) {
        case "d":
          f = 4;
          break;
        case "dm":
          f = 2;
          break;
        case "dms":
          f = 0;
          break;
        default:
          o = "dms", f = 0;
      }
    switch (r = Math.abs(r), o) {
      case "d":
        _ = r.toFixed(f), _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), dms = _ + "°";
        break;
      case "dm":
        var p = (r * 60).toFixed(f), _ = Math.floor(p / 60), m = (p % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), m < 10 && (m = "0" + m), dms = _ + "°" + m + "′";
        break;
      case "dms":
        var g = (r * 3600).toFixed(f), _ = Math.floor(g / 3600), m = Math.floor(g / 60) % 60, C = (g % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), m < 10 && (m = "0" + m), C < 10 && (C = "0" + C), dms = _ + "°" + m + "′" + C + "″";
        break;
    }
    return dms;
  }, c.toLat = function(r, o, f) {
    var p = c.toDMS(r, o, f);
    return p == null ? "." : p.slice(1) + (r < 0 ? "S" : "N");
  }, c.toLon = function(r, o, f) {
    var p = c.toDMS(r, o, f);
    return p == null ? "." : p + (r < 0 ? "W" : "E");
  }, c.toBrng = function(r, o, f) {
    r = (Number(r) + 360) % 360;
    var p = c.toDMS(r, o, f);
    return p == null ? "." : p.replace("360", "0");
  };
  var s = 6371;
  c.latlon = function(r, o) {
    this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN;
  }, c.latlon.prototype.distanceTo = function(r, o) {
    typeof o > "u" && (o = 4);
    var f = this.distanceRadTo(r), p = s * f;
    return p.toPrecisionFixed(o);
  }, c.latlon.prototype.distanceRadTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), g = r.lng.toRad(), _ = p - o, m = g - f, C = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(o) * Math.cos(p) * Math.sin(m / 2) * Math.sin(m / 2), b = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
    return b;
  }, c.latlon.prototype.bearingTo = function(r) {
    var o = this.bearingRadTo(r);
    return (o.toDeg() + 360) % 360;
  }, c.latlon.prototype.bearingRadTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), m = Math.atan2(_, g);
    return m;
  }, c.latlon.prototype.finalBearingTo = function(r) {
    var o = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), g = Math.sin(p) * Math.cos(f), _ = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), m = Math.atan2(g, _);
    return (m.toDeg() + 180) % 360;
  }, c.latlon.prototype.midpointTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), m = this.lng.toRad(), C = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + g) * (Math.cos(o) + g) + _ * _)), b = m + Math.atan2(_, Math.cos(o) + g);
    return b = (b + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(C.toDeg(), b.toDeg());
  }, c.midpoint = function(r) {
    var o = 0, f = 0, p = 0;
    for (var g in r) {
      var _ = r[g], m = _.lat * Math.PI / 180, C = _.lng * Math.PI / 180, b = Math.cos(m) * Math.cos(C), w = Math.cos(m) * Math.sin(C), P = Math.sin(m);
      o += b, f += w, p += P;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var O = Math.atan2(f, o), R = Math.sqrt(o * o + f * f), F = Math.atan2(p, R);
    return new c.latlon(F * 180 / Math.PI, O * 180 / Math.PI);
  }, c.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), g = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var m = Math.sin(g), C = Math.cos(g), b = [], w = 0; w < o; w++) {
      var P = 1 / (o - 1) * w, O = f * P, R = Math.sin(O), F = Math.cos(O), N = Math.asin(m * F + C * R * Math.cos(p)), K = _ + Math.atan2(Math.sin(p) * R * C, F - m * Math.sin(N)), X = N.toDeg(), Q = K.toDeg();
      for (X > 90 && (X = 90), X < -90 && (X = -90); Q > 180; ) Q -= 360;
      for (; Q <= -180; ) Q += 360;
      b.push(new c.latlon(X, Q));
    }
    return b;
  }, c.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / s, r = r.toRad();
    var f = this.lat.toRad(), p = this.lng.toRad(), g = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), _ = p + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(f),
      Math.cos(o) - Math.sin(f) * Math.sin(g)
    );
    return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(g.toDeg(), _.toDeg());
  }, c.latlon.intersection = function(r, o, f, p) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
    var g = r.lat.toRad(), _ = r.lng.toRad(), m = f.lat.toRad(), C = f.lng.toRad(), b = o.toRad(), w = p.toRad(), P = m - g, O = C - _, R = 2 * Math.asin(Math.sqrt(Math.sin(P / 2) * Math.sin(P / 2) + Math.cos(g) * Math.cos(m) * Math.sin(O / 2) * Math.sin(O / 2)));
    if (R == 0) return null;
    var F = Math.acos((Math.sin(m) - Math.sin(g) * Math.cos(R)) / (Math.sin(R) * Math.cos(g)));
    isNaN(F) && (F = 0);
    var N = Math.acos((Math.sin(g) - Math.sin(m) * Math.cos(R)) / (Math.sin(R) * Math.cos(m)));
    if (Math.sin(C - _) > 0)
      var K = F, X = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - F, X = N;
    var Q = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (X - w + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(Q) == 0 && Math.sin(et) == 0 || Math.sin(Q) * Math.sin(et) < 0) return null;
    var xt = Math.acos(-Math.cos(Q) * Math.cos(et) + Math.sin(Q) * Math.sin(et) * Math.cos(R)), At = Math.atan2(
      Math.sin(R) * Math.sin(Q) * Math.sin(et),
      Math.cos(et) + Math.cos(Q) * Math.cos(xt)
    ), It = Math.asin(Math.sin(g) * Math.cos(At) + Math.cos(g) * Math.sin(At) * Math.cos(b)), Ht = Math.atan2(
      Math.sin(b) * Math.sin(At) * Math.cos(g),
      Math.cos(At) - Math.sin(g) * Math.sin(It)
    ), tn = _ + Ht;
    return tn = (tn + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(It.toDeg(), tn.toDeg());
  }, c.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = s, f = this.lat.toRad(), p = r.lat.toRad(), g = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), m = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(g / m) ? g / m : Math.cos(f);
    Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
    var b = Math.sqrt(g * g + C * C * _ * _) * o;
    return b.toPrecisionFixed(4);
  }, c.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
    var _ = Math.atan2(p, g);
    return (_.toDeg() + 360) % 360;
  }, c.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var f = s, p = parseFloat(o) / f, g = this.lat.toRad(), _ = this.lng.toRad();
    r = r.toRad();
    var m = p * Math.cos(r);
    Math.abs(m) < 1e-10 && (m = 0);
    var C = g + m, b = Math.log(Math.tan(C / 2 + Math.PI / 4) / Math.tan(g / 2 + Math.PI / 4)), w = isFinite(m / b) ? m / b : Math.cos(g), P = p * Math.sin(r) / w;
    Math.abs(C) > Math.PI / 2 && (C = C > 0 ? Math.PI - C : -Math.PI - C);
    var O = (_ + P + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new c.latlon(C.toDeg(), O.toDeg());
  }, c.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), g = r.lng.toRad();
    Math.abs(g - f) > Math.PI && (f += 2 * Math.PI);
    var _ = (o + p) / 2, m = Math.tan(Math.PI / 4 + o / 2), C = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + _ / 2), w = ((g - f) * Math.log(b) + f * Math.log(C) - g * Math.log(m)) / Math.log(C / m);
    return isFinite(w) || (w = (f + g) / 2), w = (w + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(_.toDeg(), w.toDeg());
  }, c.latlon.prototype.lat = function(r, o) {
    return typeof r > "u" ? this.lat : c.toLat(this.lat, r, o);
  }, c.latlon.prototype.lon = function(r, o) {
    return typeof r > "u" ? this.lng : c.toLon(this.lng, r, o);
  }, c.latlon.prototype.toString = function(r, o) {
    return typeof r > "u" && (r = "dms"), c.toLat(this.lat, r, o) + ", " + c.toLon(this.lng, r, o);
  }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
  }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
    var o = this.toPrecision(r);
    return o = o.replace(/(.+)e\+(.+)/, function(f, p, g) {
      p = p.replace(/\./, "");
      for (var _ = p.length - 1; g-- > _; ) p = p + "0";
      return p;
    }), o = o.replace(/(.+)e-(.+)/, function(f, p, g) {
      for (p = p.replace(/\./, ""); g-- > 1; ) p = "0" + p;
      return "0." + p;
    }), o;
  }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  });
})(gu);
class du {
  constructor(s, r, o) {
    M(this, "alt");
    M(this, "lat");
    M(this, "lon");
    this.lat = s, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new gu.latlon(this.lat, this.lon);
  }
}
class _u extends du {
  constructor(r, o, f, p, g) {
    super(r, o, f);
    M(this, "loc");
    M(this, "grade");
    this.loc = p, this.grade = g;
  }
}
function vu(c, s, r) {
  if (c.loc > s.loc && r > c.loc || s.loc > c.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(s.latlon), { lat: p, lng: g } = c.latlon.destinationPoint(f, o), _ = c.grade, m = we(c.loc, s.loc, c.alt, s.alt, r);
  return new _u(p, g, m, r, _);
}
function A0(c, s) {
  return (typeof c == "object" ? String(c._id) : c) === (typeof s == "object" ? String(s._id) : s);
}
function vs(c, s) {
  return !!(c && s && A0(c.site, s.site) && c.loop === s.loop);
}
class nu {
  constructor(s, r = 1) {
    M(this, "_data");
    M(this, "loop");
    M(this, "site");
    this._data = {}, this.site = s, this.loop = r;
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
  set loc(s) {
    if (!W.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
    this.type === "start" ? this.site.percent = 0 : this.type === "finish" ? this.site.percent = 1 : this.site.percent = s / this.course.loopDist % 1;
  }
  get lat() {
    return this.site.lat;
  }
  get lon() {
    return this.site.lon;
  }
  get alt() {
    return this.site.alt;
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
  set dropbags(s) {
    this.site.dropbags = !!s;
  }
  get crew() {
    return this.site.crew || !1;
  }
  set crew(s) {
    this.site.crew = !!s;
  }
  get terrainFactor() {
    return this.site.terrainFactor;
  }
  get terrainType() {
    return this.site.terrainType;
  }
  get hasTypicalDelay() {
    return this.type === "aid" || this.type === "water" || this.loop >= 2 && this.type === "start";
  }
  get cutoff() {
    var s;
    if (this.tier === 1) {
      const r = (s = this.site.cutoffs) == null ? void 0 : s.find((o) => o.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(s) {
    var o;
    const r = (o = this.site.cutoffs) == null ? void 0 : o.findIndex((f) => f.loop === this.loop);
    r >= 0 ? s ? this.site.cutoffs[r].time = s : this.site.cutoffs.splice(r, 1) : s && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: s, loop: this.loop }));
  }
  matchingSegment(s) {
    return s.find((r) => r.waypoint && vs(this, r.waypoint));
  }
  serialize() {
    return { ...W.pick(this, [
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
    ]), site: this.site._id };
  }
}
const $e = Kn("models:Waypoint");
class hs {
  constructor(s, r) {
    M(this, "_waypoints");
    M(this, "_lat");
    M(this, "_lon");
    M(this, "_alt");
    M(this, "_data");
    M(this, "_id");
    M(this, "course");
    M(this, "cutoffs", []);
    M(this, "name");
    M(this, "tier", 1);
    M(this, "type");
    M(this, "terrainFactor");
    M(this, "terrainType");
    M(this, "description");
    M(this, "pointsIndex");
    M(this, "dropbags");
    M(this, "crew");
    this._data = { percent: r.percent }, this.course = s, this._id = r._id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), this.crew = r.crew || !1, this.dropbags = r.dropbags || !1, $e(`constructor: ${this.name}`);
  }
  clearCache() {
    $e(`clearCache: ${this.name}`), delete this._waypoints, delete this._lat, delete this._lon, delete this._alt;
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
  set percent(s) {
    this._data.percent = s;
  }
  get waypoints() {
    return this._waypoints ? this._waypoints : ($e(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new nu(this, this.course.loops)] : this._waypoints = W.range(this.course.loops).map((s) => new nu(this, s + 1)), this._waypoints);
  }
  get lat() {
    return this._lat || this.refreshLLA(), this._lat;
  }
  get lon() {
    return this._lon || this.refreshLLA(), this._lon;
  }
  get alt() {
    return this._alt || this.refreshLLA(), this._alt;
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    var f, p, g;
    if ($e("refreshLLA"), !((g = (p = (f = this.course) == null ? void 0 : f.track) == null ? void 0 : p.points) != null && g.length))
      throw new me("No track points defined", "points");
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
  serialize() {
    $e(`serialize: ${this.name}`);
    const s = Object.keys(this);
    return s.push("percent"), W.pick(this, s);
  }
}
const On = Kn("models:Course"), I0 = ["track", "dist", "gain", "loss", "cache", "distance"];
class H0 {
  constructor(s, r) {
    M(this, "name");
    M(this, "_cache", {});
    M(this, "_loops", 1);
    M(this, "_distOverride");
    M(this, "_gainOverride");
    M(this, "_lossOverride");
    M(this, "_dist");
    M(this, "_gain");
    M(this, "_loss");
    M(this, "_sites", [
      new hs(this, {
        _id: String(W.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new hs(this, {
        _id: String(W.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ]);
    M(this, "_waypoints");
    M(this, "_track");
    M(this, "_points");
    // terrainFactors: array of TerrainFactor objects only where actual terrain factor values exist
    M(this, "_terrainFactors");
    // terrainTypes: array of TerrainType objects only where actual terrain type changes exist
    M(this, "_terrainTypes");
    M(this, "_cutoffs");
    M(this, "_splits");
    // calculate max and min values along course
    M(this, "_stats");
    this._track = s, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss);
    const o = Object.keys(r).filter((f) => !I0.includes(f));
    Object.assign(this, W.pick(r, o));
  }
  get loops() {
    return this._loops;
  }
  set loops(s) {
    this._loops = s, this.clearCache(2);
  }
  set dist(s) {
    On(`overriding dist to ${s}`), this._distOverride = s, this.clearCache(2);
  }
  set gain(s) {
    On(`overriding gain to ${s}`), this._gainOverride = s, this.clearCache(2);
  }
  set loss(s) {
    On(`overriding loss to ${s}`), this._lossOverride = s, this.clearCache(2);
  }
  get dist() {
    return this._dist || (this._dist = this._distOverride || this.track.dist * this.loops);
  }
  get gain() {
    return this.gain || (this._gain = this._gainOverride || this.track.gain * this.loops);
  }
  get loss() {
    return this._loss || (this._loss = this._lossOverride || this.track.loss * this.loops);
  }
  get distScale() {
    return this._distOverride ? this._distOverride / (this.track.dist * this.loops) : 1;
  }
  get gainScale() {
    return this._gainOverride ? this._gainOverride / (this.track.gain * this.loops) : 1;
  }
  get lossScale() {
    return this._lossOverride ? this._lossOverride / (this.track.loss * this.loops) : 1;
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
  get sites() {
    return this._sites;
  }
  set sites(s) {
    this._sites = s.map((r) => new hs(this, r)), this.clearCache(1);
  }
  clearCache(s = 1) {
    On(`clearCache-${s}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrainFactors, delete this._terrainTypes, delete this._waypoints, s === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
      r.clearCache();
    }));
  }
  get waypoints() {
    var r;
    if (this._waypoints) return this._waypoints;
    if (!((r = this.track) != null && r.dist)) return [];
    let s = [];
    return this.sites.forEach((o) => {
      s.push(...o.waypoints);
    }), s = s.sort((o, f) => o.loc - f.loc), this._waypoints = s, this._waypoints;
  }
  set track(s) {
    this._track = s, this.clearCache(2);
  }
  get track() {
    return this._track;
  }
  get points() {
    var s, r;
    if (this._points) return this._points;
    if (On("generating points array"), !((r = (s = this.track) == null ? void 0 : s.points) != null && r.length))
      throw new me("Track points are not defined.", "points");
    this._points = new Array(this.track.points.length * this.loops);
    for (let o = 0; o < this.loops; o++)
      for (let f = 0; f < this.track.points.length; f++)
        this.points[f + o * this.track.points.length] = new jo(
          this,
          this.track.points[f],
          o
        );
    return this._points;
  }
  set points(s) {
    throw new Error("cannot set points directly");
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The CoursePoint at input location.
   */
  getPoint(s, r = !1) {
    const o = this.points.findIndex((C) => Br(C.loc, s, 4)), f = this.points[o];
    if (Ge(f.loc, s, 4)) return f;
    On(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = o - 1, g = this.points[p], _ = vu(g.point, f.point, s % this.loopDist / this.distScale), m = new jo(this, _, Math.floor(s / this.loopDist));
    return r && this.points.splice(o, 0, m), m;
  }
  get terrainFactors() {
    if (this._terrainFactors) return this._terrainFactors;
    On("regenerating terrainFactors");
    const s = this.waypoints.filter(
      (r, o) => {
        var f;
        return o === 0 || !W.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainFactor);
      }
    );
    return this._terrainFactors = s.map((r, o) => new F0(r, s[o + 1] || W.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes) return this._terrainTypes;
    On("regenerating terrainTypes");
    const s = this.waypoints.filter(
      (r, o) => {
        var f;
        return !W.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainType);
      }
    );
    return this._terrainTypes = s.map((r, o) => new P0(r, s[o + 1] || W.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new T0(s)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new S0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    On("stats:calculate");
    const s = this.track.points.map((g) => g.alt), r = this.track.points.map((g) => g.grade), o = this.terrainFactors.map((g) => g.value / 100 + 1), f = {
      altitude: {
        avg: W.sum(
          this.track.points.map((g, _) => {
            var m;
            return g.alt * (g.loc - (((m = this.track.points[_ - 1]) == null ? void 0 : m.loc) || 0));
          })
        ) / this.track.dist,
        max: W.max(s) || 0,
        min: W.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: W.max(r) || 0,
        min: W.min(r) || 0
      },
      terrain: {
        avg: (W.sumBy(this.terrainFactors, (g) => (g.end - g.start) * g.value) / this.dist + 100) / 100,
        max: W.max(o) || 0,
        min: W.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (g) => this.terrainFactors.reduce((_, m) => m.value / 100 + 1 === g ? _ + m.end - m.start : _, 0);
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(s) {
    const r = s.filter((f) => f > 0 && ws(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class T0 {
  constructor(s) {
    M(this, "waypoint");
    this.waypoint = s;
  }
  get loc() {
    return this.waypoint.loc;
  }
  get time() {
    if (!this.waypoint.cutoff) throw new Error("Invalid cutoff");
    return this.waypoint.cutoff;
  }
}
class F0 {
  constructor(s, r, o = 0) {
    M(this, "value");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.value = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class P0 {
  constructor(s, r, o) {
    M(this, "type");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.type = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var wu = { exports: {} };
(function(c, s) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, g = Math.asin, _ = Math.atan2, m = Math.acos, C = r / 180, b = 1e3 * 60 * 60 * 24, w = 2440588, P = 2451545;
    function O(k) {
      return k.valueOf() / b - 0.5 + w;
    }
    function R(k) {
      return new Date((k + 0.5 - w) * b);
    }
    function F(k) {
      return O(k) - P;
    }
    var N = C * 23.4397;
    function K(k, z) {
      return _(o(k) * f(N) - p(z) * o(N), f(k));
    }
    function X(k, z) {
      return g(o(z) * f(N) + f(z) * o(N) * o(k));
    }
    function Q(k, z, G) {
      return _(o(k), f(k) * o(z) - p(G) * f(z));
    }
    function et(k, z, G) {
      return g(o(z) * o(G) + f(z) * f(G) * f(k));
    }
    function xt(k, z) {
      return C * (280.16 + 360.9856235 * k) - z;
    }
    function At(k) {
      return k < 0 && (k = 0), 2967e-7 / Math.tan(k + 312536e-8 / (k + 0.08901179));
    }
    function It(k) {
      return C * (357.5291 + 0.98560028 * k);
    }
    function Ht(k) {
      var z = C * (1.9148 * o(k) + 0.02 * o(2 * k) + 3e-4 * o(3 * k)), G = C * 102.9372;
      return k + z + G + r;
    }
    function tn(k) {
      var z = It(k), G = Ht(z);
      return {
        dec: X(G, 0),
        ra: K(G, 0)
      };
    }
    var qt = {};
    qt.getPosition = function(k, z, G) {
      var ct = C * -G, nt = C * z, ht = F(k), ot = tn(ht), lt = xt(ht, ct) - ot.ra;
      return {
        azimuth: Q(lt, nt, ot.dec),
        altitude: et(lt, nt, ot.dec)
      };
    };
    var Me = qt.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    qt.addTime = function(k, z, G) {
      Me.push([k, z, G]);
    };
    var He = 9e-4;
    function Ur(k, z) {
      return Math.round(k - He - z / (2 * r));
    }
    function Ce(k, z, G) {
      return He + (k + z) / (2 * r) + G;
    }
    function qe(k, z, G) {
      return P + k + 53e-4 * o(z) - 69e-4 * o(2 * G);
    }
    function $r(k, z, G) {
      return m((o(k) - o(z) * o(G)) / (f(z) * f(G)));
    }
    function xn(k) {
      return -2.076 * Math.sqrt(k) / 60;
    }
    function vn(k, z, G, ct, nt, ht, ot) {
      var lt = $r(k, G, ct), mt = Ce(lt, z, nt);
      return qe(mt, ht, ot);
    }
    qt.getTimes = function(k, z, G, ct) {
      ct = ct || 0;
      var nt = C * -G, ht = C * z, ot = xn(ct), lt = F(k), mt = Ur(lt, nt), Kt = Ce(0, nt, mt), Rt = It(Kt), Wt = Ht(Rt), wn = X(Wt, 0), _t = qe(Kt, Rt, Wt), kt, Dn, Mt, Bt, cn, nn, pt = {
        solarNoon: R(_t),
        nadir: R(_t - 0.5)
      };
      for (kt = 0, Dn = Me.length; kt < Dn; kt += 1)
        Mt = Me[kt], Bt = (Mt[0] + ot) * C, cn = vn(Bt, nt, ht, wn, mt, Rt, Wt), nn = _t - (cn - _t), pt[Mt[1]] = R(nn), pt[Mt[2]] = R(cn);
      return pt;
    };
    function Ke(k) {
      var z = C * (218.316 + 13.176396 * k), G = C * (134.963 + 13.064993 * k), ct = C * (93.272 + 13.22935 * k), nt = z + C * 6.289 * o(G), ht = C * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ht),
        dec: X(nt, ht),
        dist: ot
      };
    }
    qt.getMoonPosition = function(k, z, G) {
      var ct = C * -G, nt = C * z, ht = F(k), ot = Ke(ht), lt = xt(ht, ct) - ot.ra, mt = et(lt, nt, ot.dec), Kt = _(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return mt = mt + At(mt), {
        azimuth: Q(lt, nt, ot.dec),
        altitude: mt,
        distance: ot.dist,
        parallacticAngle: Kt
      };
    }, qt.getMoonIllumination = function(k) {
      var z = F(k || /* @__PURE__ */ new Date()), G = tn(z), ct = Ke(z), nt = 149598e3, ht = m(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = _(nt * o(ht), ct.dist - nt * f(ht)), lt = _(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function Sn(k, z) {
      return new Date(k.valueOf() + z * b / 24);
    }
    qt.getMoonTimes = function(k, z, G, ct) {
      var nt = new Date(k);
      ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ht = 0.133 * C, ot = qt.getMoonPosition(nt, z, G).altitude - ht, lt, mt, Kt, Rt, Wt, wn, _t, kt, Dn, Mt, Bt, cn, nn, pt = 1; pt <= 24 && (lt = qt.getMoonPosition(Sn(nt, pt), z, G).altitude - ht, mt = qt.getMoonPosition(Sn(nt, pt + 1), z, G).altitude - ht, Wt = (ot + mt) / 2 - lt, wn = (mt - ot) / 2, _t = -wn / (2 * Wt), kt = (Wt * _t + wn) * _t + lt, Dn = wn * wn - 4 * Wt * lt, Mt = 0, Dn >= 0 && (nn = Math.sqrt(Dn) / (Math.abs(Wt) * 2), Bt = _t - nn, cn = _t + nn, Math.abs(Bt) <= 1 && Mt++, Math.abs(cn) <= 1 && Mt++, Bt < -1 && (Bt = cn)), Mt === 1 ? ot < 0 ? Kt = pt + Bt : Rt = pt + Bt : Mt === 2 && (Kt = pt + (kt < 0 ? cn : Bt), Rt = pt + (kt < 0 ? Bt : cn)), !(Kt && Rt)); pt += 2)
        ot = mt;
      var yn = {};
      return Kt && (yn.rise = Sn(nt, Kt)), Rt && (yn.set = Sn(nt, Rt)), !Kt && !Rt && (yn[kt > 0 ? "alwaysUp" : "alwaysDown"] = !0), yn;
    }, c.exports = qt;
  })();
})(wu);
var eu = wu.exports;
function ee(c, s) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class E0 {
  constructor(s) {
    M(this, "nadir", 0);
    M(this, "dawn", 0);
    M(this, "sunrise", 0);
    M(this, "dusk", 0);
    M(this, "sunset", 0);
    M(this, "noon", 0);
    M(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class ru {
  constructor(s, r, o, f) {
    M(this, "start");
    M(this, "lat");
    M(this, "lon");
    M(this, "timezone");
    M(this, "sun");
    M(this, "startTime");
    this.start = s, this.lat = o, this.lon = f, this.timezone = r;
    const p = eu.getTimes(this.start, this.lat, this.lon), g = eu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new E0({
      nadir: ee(p.nadir, this.timezone),
      dawn: ee(p.dawn, this.timezone),
      sunrise: ee(p.sunrise, this.timezone),
      dusk: ee(p.dusk, this.timezone),
      sunset: ee(p.sunset, this.timezone),
      noon: ee(p.solarNoon, this.timezone),
      nadirAltitude: g.altitude * 180 / Math.PI
    }), this.startTime = ee(this.start, this.timezone);
  }
  // return a date object at [seconds] from start
  dateAtElapsed(s) {
    const r = new Date(this.start);
    return r.setTime(r.getTime() + s * 1e3), r;
  }
  // return seconds since midnight for an input elapsed amount of time since start
  elapsedToTimeOfDay(s) {
    return (this.startTime + s) % 86400;
  }
  // return static object
  serialize() {
    return W.pick(this, ["start", "sun", "lat", "lon", "timezone"]);
  }
}
var Wr = {};
(function(c) {
  (function() {
    var s = {
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
      return f(g(_), arguments);
    }
    function o(_, m) {
      return r.apply(null, [_].concat(m || []));
    }
    function f(_, m) {
      var C = 1, b = _.length, w, P = "", O, R, F, N, K, X, Q, et;
      for (O = 0; O < b; O++)
        if (typeof _[O] == "string")
          P += _[O];
        else if (typeof _[O] == "object") {
          if (F = _[O], F.keys)
            for (w = m[C], R = 0; R < F.keys.length; R++) {
              if (w == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', F.keys[R], F.keys[R - 1]));
              w = w[F.keys[R]];
            }
          else F.param_no ? w = m[F.param_no] : w = m[C++];
          if (s.not_type.test(F.type) && s.not_primitive.test(F.type) && w instanceof Function && (w = w()), s.numeric_arg.test(F.type) && typeof w != "number" && isNaN(w))
            throw new TypeError(r("[sprintf] expecting number but found %T", w));
          switch (s.number.test(F.type) && (Q = w >= 0), F.type) {
            case "b":
              w = parseInt(w, 10).toString(2);
              break;
            case "c":
              w = String.fromCharCode(parseInt(w, 10));
              break;
            case "d":
            case "i":
              w = parseInt(w, 10);
              break;
            case "j":
              w = JSON.stringify(w, null, F.width ? parseInt(F.width) : 0);
              break;
            case "e":
              w = F.precision ? parseFloat(w).toExponential(F.precision) : parseFloat(w).toExponential();
              break;
            case "f":
              w = F.precision ? parseFloat(w).toFixed(F.precision) : parseFloat(w);
              break;
            case "g":
              w = F.precision ? String(Number(w.toPrecision(F.precision))) : parseFloat(w);
              break;
            case "o":
              w = (parseInt(w, 10) >>> 0).toString(8);
              break;
            case "s":
              w = String(w), w = F.precision ? w.substring(0, F.precision) : w;
              break;
            case "t":
              w = String(!!w), w = F.precision ? w.substring(0, F.precision) : w;
              break;
            case "T":
              w = Object.prototype.toString.call(w).slice(8, -1).toLowerCase(), w = F.precision ? w.substring(0, F.precision) : w;
              break;
            case "u":
              w = parseInt(w, 10) >>> 0;
              break;
            case "v":
              w = w.valueOf(), w = F.precision ? w.substring(0, F.precision) : w;
              break;
            case "x":
              w = (parseInt(w, 10) >>> 0).toString(16);
              break;
            case "X":
              w = (parseInt(w, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          s.json.test(F.type) ? P += w : (s.number.test(F.type) && (!Q || F.sign) ? (et = Q ? "+" : "-", w = w.toString().replace(s.sign, "")) : et = "", K = F.pad_char ? F.pad_char === "0" ? "0" : F.pad_char.charAt(1) : " ", X = F.width - (et + w).length, N = F.width && X > 0 ? K.repeat(X) : "", P += F.align ? et + w + N : K === "0" ? et + N + w : N + et + w);
        }
      return P;
    }
    var p = /* @__PURE__ */ Object.create(null);
    function g(_) {
      if (p[_])
        return p[_];
      for (var m = _, C, b = [], w = 0; m; ) {
        if ((C = s.text.exec(m)) !== null)
          b.push(C[0]);
        else if ((C = s.modulo.exec(m)) !== null)
          b.push("%");
        else if ((C = s.placeholder.exec(m)) !== null) {
          if (C[2]) {
            w |= 1;
            var P = [], O = C[2], R = [];
            if ((R = s.key.exec(O)) !== null)
              for (P.push(R[1]); (O = O.substring(R[0].length)) !== ""; )
                if ((R = s.key_access.exec(O)) !== null)
                  P.push(R[1]);
                else if ((R = s.index_access.exec(O)) !== null)
                  P.push(R[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            C[2] = P;
          } else
            w |= 2;
          if (w === 3)
            throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          b.push(
            {
              placeholder: C[0],
              param_no: C[1],
              keys: C[2],
              sign: C[3],
              pad_char: C[4],
              align: C[5],
              width: C[6],
              precision: C[7],
              type: C[8]
            }
          );
        } else
          throw new SyntaxError("[sprintf] unexpected placeholder");
        m = m.substring(C[0].length);
      }
      return p[_] = b;
    }
    c.sprintf = r, c.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(Wr);
class yu {
  /**
   *
   * @param target - target object
   * @param events - array of event names to map
   */
  constructor(s, r) {
    M(this, "_callbacks", {});
    M(this, "_target");
    this._target = s, this._callbacks = W.fromPairs(r.map((o) => [o, []]));
  }
  /**
   * add a callback function to an event
   * @param evt - event name
   * @param fun - callback function, first argument is target object
   */
  add(s, r) {
    if (!this._callbacks[s]) throw new Error(`${s} is not a valid callback for object`);
    this._callbacks[s].find((o) => o === r) ? console.warn("callback already exists.") : this._callbacks[s].push(r);
  }
  /**
   * remove a callback function from event
   * @param evt - event name
   * @param fun - callback function
   */
  remove(s, r) {
    if (!this._callbacks[s]) throw new Error(`${s} is not a valid callback for object`);
    W.pull(this._callbacks[s], r);
  }
  /**
   * clear all callbacks from a target
   * @param evt - event to clear; if undefined all events will be cleared
   */
  clear(s) {
    (s ? [s] : Object.keys(this._callbacks)).forEach((o) => this._callbacks[o] = []);
  }
  /**
   * execute callbacks for an event
   * @param evt - event name
   */
  execute(s) {
    this._callbacks[s].forEach((r) => r(this._target));
  }
}
const R0 = Kn("PaceChunk");
class k0 {
  constructor() {
    M(this, "iterations", !1);
    M(this, "factor", !1);
    M(this, "target", !1);
  }
  get passing() {
    return this.iterations && this.factor && this.target;
  }
  get statusString() {
    return [
      `iterations=${this.iterations ? "P" : "F"}`,
      `factor=${this.factor ? "P" : "F"}`,
      `target=${this.target ? "P" : "F"}`
    ].join("|");
  }
}
class iu {
  constructor(s, r, o, f) {
    M(this, "constraints");
    M(this, "points");
    M(this, "plan");
    M(this, "delay");
    M(this, "factor");
    M(this, "factors", new bn());
    M(this, "status");
    this.constraints = o, this.points = r, this.plan = s, this.delay = f, this.factor = 1;
  }
  get elapsed() {
    const s = W.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (W.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
  }
  get dist() {
    return this.points[this.points.length - 1].loc - this.points[0].loc;
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
    this.plan.pacing.clearFactor();
    const s = this.points;
    s[0].elapsed = W.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - W.sum(this.plan.pacing.chunks.filter((C) => C.points[0].loc < s[0].loc).map((C) => C.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, o = s[0].delay || 0, f = 0, p = 0, g = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, m = new bn().init(0);
    for (let C = 1, b = s.length; C < b; C++) {
      f = s[C].loc - s[C - 1].loc, Nr(s[C - 1], this.plan), m.applyEach((P, O) => P + O * f, s[C - 1].factors);
      const w = s[C - 1].factors.combined;
      g += w * f, p = _ * w * f, s[C].time = s[C - 1].time + p, o = s[C - 1].delay || 0, r += p + o, s[C].elapsed = r, this.plan.event.start && (s[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Nr(s[s.length - 1], this.plan), this.factors = m.scaleEach(1 / this.dist), this.factor = g / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = R0.extend(
      Wr.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const g = new k0();
    for (p = 0; p < 20 && (this.applyPacing(), g.iterations = p >= 2, g.factor = !W.round(f - this.factor, 10), f = this.factor, g.target = Math.abs(
      (W.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(Wr.vsprintf("%i|%s", [p, g.statusString])), !g.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: g,
      success: g.passing,
      iterations: p + 1
    };
  }
}
const jt = Kn("Pacing");
class L0 {
  constructor(s) {
    M(this, "callbacks", new yu(this, ["onUpdated", "onFail", "onInvalidated"]));
    M(this, "chunks", []);
    M(this, "plan");
    M(this, "_elapsed");
    M(this, "_factor");
    M(this, "_factors");
    this.plan = s;
  }
  clearCache() {
    jt("clearCache"), delete this._elapsed, delete this._factor, delete this._factors;
  }
  invalidate() {
    jt("invalidate"), this.chunks = [], this.clearCache(), this.callbacks.execute("onInvalidated");
  }
  get elapsed() {
    return jt("elapsed:get"), this._elapsed || this.plan.points[this.plan.points.length - 1].elapsed;
  }
  get pace() {
    return jt("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._factor ? this._factor : (jt("factor:update"), this.chunks && (this._factor = W.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return jt("factors:get"), this._factors || (jt("factors:update"), this._factors = ys(this.chunks)), this._factors;
  }
  get np() {
    return jt("np:get"), this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.plan.delay;
  }
  get status() {
    var s, r, o;
    return {
      complete: ((s = this.chunks) == null ? void 0 : s.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((f) => {
        var p;
        return !((p = f.status) != null && p.success);
      }).length) === 0,
      chunks: ((o = this.chunks) == null ? void 0 : o.length) || 0
    };
  }
  calculate() {
    var o, f, p;
    const s = jt.extend("calculate");
    if (s("exec"), !((o = this.plan.points) != null && o.length))
      throw s("calculate: error; no points"), new me("Plan points are not defined.", "points");
    s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (f = this.plan.course.terrainFactors) == null || f.forEach((g) => this.plan.getPoint(g.start, !0)), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((g) => {
      g.point = this.plan.getPoint(g.loc, !0);
    }), this.plan.points.filter((g) => g.delay).forEach((g) => {
      g.delay = 0;
    }), (p = this.plan.delays) == null || p.forEach((g) => {
      const _ = this.plan.getPoint(g.loc, !0);
      _.delay = g.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...W.reverse([...this.plan.cutoffs]), null].forEach((g) => {
      for (; this.chunks.find((_) => !_.status); )
        this.calcChunks(), this.validateChunks();
      if (!g) return !0;
      if (g.point.elapsed - g.time > 0.5) {
        s(`cutoff at ${g.loc} missed`);
        const _ = this.chunks[0];
        W.last(_.points) === g.point ? (s(`setting cutoff at ${g.loc}`), _.constraints = [0, g.time], delete _.status) : this.splitChunk(_, g.point, g.time);
      }
    }), W.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), jt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
  }
  /**
   * initialize pacing chunks array
   */
  initChunks() {
    let s;
    switch (this.plan.method) {
      case "time":
        s = this.plan.target;
        break;
      case "pace":
        s = this.plan.target * this.plan.course.dist + this.plan.delay;
        break;
      case "np":
        s = () => this.plan.target * (this.factor || 1) * this.plan.course.dist + this.plan.delay;
        break;
      default:
        throw new Error(`Incorrect pacing method ${this.plan.method}`);
    }
    this.chunks = [new iu(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    jt("calcChunks"), this.clearCache(), this.chunks.filter((s) => !s.status).forEach((s) => s.calculate());
  }
  /**
   * make sure chunks nps increasing monotincally and merge if needed
   */
  validateChunks() {
    let s = 1;
    for (; s <= this.chunks.length - 1; )
      this.chunks[s].np < this.chunks[s - 1].np ? this.mergeChunks(this.chunks[s - 1], this.chunks[s]) : s++;
  }
  /**
   * split pacing chunk; mutates chunks array
   * @param chunk - PaceChunk to split
   * @param point - point to split at
   * @param elapsed - elapsed time at split
   */
  splitChunk(s, r, o) {
    jt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((m) => m === r), g = W.round(r.elapsed - r.time), _ = new iu(this.plan, s.points.slice(0, p + 1), [0, o], g);
    _.points.filter((m, C) => C < _.points.length - 1).forEach((m) => {
      m._chunk = _;
    }), this.chunks.unshift(_), s.constraints[0] = o, s.delay -= g, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const o = this.chunks.findIndex((p) => p === s), f = this.chunks.findIndex((p) => p === r);
    if (f - o !== 1) throw new Error("chunks must be sequential");
    jt(Wr.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class su {
  constructor(s, r) {
    M(this, "factors", new bn());
    M(this, "_chunk");
    M(this, "_plan");
    M(this, "_point");
    M(this, "elapsed");
    M(this, "time");
    M(this, "tod");
    M(this, "delay");
    this._plan = s, this._point = r, this.time = 0, this.elapsed = 0, this.tod = 0, this.delay = 0;
  }
  get lat() {
    return this._point.lat;
  }
  get lon() {
    return this._point.lon;
  }
  get alt() {
    return this._point.alt;
  }
  get latlon() {
    return this._point.latlon;
  }
  get grade() {
    return this._point.grade;
  }
  get loc() {
    return this._point.loc;
  }
  /**
   * np for a point is the same as its parent chunk
   */
  get np() {
    var s;
    if (!this._chunk) throw new Error("PlanPoint._chunk not defined");
    return (s = this._chunk) == null ? void 0 : s.np;
  }
  get factor() {
    var s;
    return (s = this.factors) == null ? void 0 : s.combined;
  }
  get pace() {
    return this.np * this.factor;
  }
}
const ps = Kn("PlanSplits");
class O0 {
  constructor(s) {
    M(this, "_segments");
    M(this, "_miles");
    M(this, "_kilometers");
    M(this, "plan");
    this.plan = s;
  }
  get segments() {
    var s;
    return (s = this._segments) != null && s.length || (this.plan.checkPacing(), this._segments = this.createSegments()), this._segments;
  }
  set segments(s) {
    this._segments = s;
  }
  get miles() {
    var s;
    return (s = this._miles) != null && s.length || (this.plan.checkPacing(), this._miles = this.createSplits("miles")), this._miles;
  }
  set miles(s) {
    this._miles = s;
  }
  get kilometers() {
    var s;
    return (s = this._kilometers) != null && s.length || (this.plan.checkPacing(), this._kilometers = this.createSplits("kilometers")), this._kilometers;
  }
  set kilometers(s) {
    this._kilometers = s;
  }
  createSegments() {
    ps("createSegments");
    const s = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    ps(`createSplits:${s}`);
    const r = hu(s), o = W.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var O;
    const r = ps.extend("calcSegments");
    r("exec");
    const o = this.plan, f = o.course, p = o.points;
    if (!(p != null && p.length))
      throw r("Plan points are not defined."), new me("Plan points are not defined.", "points");
    const g = [], _ = [];
    let m, C, b = o.points[0], w;
    for (m = 0, C = s.length; m < C; m++) {
      const R = s[m];
      w && Ge((O = s[m - 1]) == null ? void 0 : O.end, R.start, 4) ? b = w : b = o.getPoint(R.start), w = o.getPoint(R.end);
      const F = R.end - R.start, N = new x0(this.plan, {
        gain: 0,
        loss: 0,
        grade: F > 0 ? (w.alt - b.alt) / F / 10 * (w.alt - b.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: b,
        point2: w
      }), K = new bn().init(0);
      g.push(N), _.push(K);
    }
    const P = (R, F, N, K) => {
      const X = N.alt - F.alt;
      R[X > 0 ? "gain" : "loss"] += X * (X > 0 ? f.gainScale : f.lossScale), Nr(F, o);
      const Q = N.loc - F.loc;
      K.applyEach((et, xt) => et + xt * Q, F.factors);
    };
    m = 1;
    for (let R = 0; R < g.length; R++) {
      const F = g[R], N = _[R];
      for (; ye(p[m].loc, F.point1.loc, 4); ) m++;
      let K = F.point1;
      for (; m < p.length && ye(p[m].loc, F.point2.loc, 4); ) {
        const X = p[m];
        P(F, K, X, N), K = X, m++;
      }
      P(F, K, F.point2, N), o && (F.delay = o.delays.filter((X) => Br(F.point1.loc, X.loc, 4) && ws(F.point2.loc, X.loc, 4)).reduce((X, Q) => X + Q.delay, 0));
    }
    return g;
  }
}
const _n = Kn("models:Plan");
class D0 {
  constructor(s) {
    M(this, "plan");
    M(this, "_altitude", 1);
    M(this, "_dark", 1);
    this.plan = s;
  }
  get altitude() {
    return this._altitude;
  }
  set altitude(s) {
    this._altitude = s, this.plan.clearCache();
  }
  get dark() {
    return this._dark;
  }
  set dark(s) {
    this._dark = s, this.plan.clearCache();
  }
}
class q0 {
  constructor(s, r) {
    M(this, "course");
    M(this, "event");
    M(this, "points");
    M(this, "method");
    M(this, "target");
    M(this, "name");
    M(this, "scales", new D0(this));
    M(this, "callbacks");
    M(this, "pacing");
    M(this, "_cutoffs");
    M(this, "_strategy");
    M(this, "_typicalDelay", 0);
    M(this, "_cutoffMargin", 0);
    M(this, "_heatModel");
    M(this, "_specifiedDelays", []);
    M(this, "_delays");
    M(this, "_splits");
    M(this, "_events");
    M(this, "_stats");
    this.course = s, this.pacing = new L0(this), this.points = this.course.points.map((o) => new su(this, o)), this.event = new ru(
      r.start.date,
      r.start.timezone,
      this.points[0].lat,
      this.points[0].lon
    ), this.method = r.method, this.target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this._strategy = new ds(this, r.strategy), Object.assign(this.scales, r.scales || {}), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name, this.callbacks = new yu(this, ["onUpdated"]);
  }
  clearCache() {
    _n("clearCache"), delete this._cutoffs, delete this._splits, delete this._stats;
  }
  get cutoffs() {
    if (this._cutoffs) return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new W0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this._cutoffs.length - 1 >= s; ) {
      const r = this._cutoffs[s];
      this._cutoffs.find((o, f) => f > s && o.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(s, 1)) : s++;
    }
    return this._cutoffs;
  }
  set start(s) {
    this.event = new ru(s.date, s.timezone, this.points[0].lat, this.points[0].lon);
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(s) {
    this._strategy = new ds(this, s), this.clearCache();
  }
  get typicalDelay() {
    return this._typicalDelay;
  }
  set typicalDelay(s) {
    this._typicalDelay = s, this.clearCache();
  }
  get cutoffMargin() {
    return this._cutoffMargin;
  }
  set cutoffMargin(s) {
    this._cutoffMargin = s, this.clearCache();
  }
  set heatModel(s) {
    this._heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: s.baseline,
      max: s.max
    };
  }
  get heatModel() {
    return this._heatModel;
  }
  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   */
  set delays(s) {
    this._specifiedDelays = s, delete this._delays;
  }
  get delays() {
    if (this._delays) return this._delays;
    const s = this.course.waypoints.map((o) => {
      var g;
      const f = (g = this._specifiedDelays) == null ? void 0 : g.find((_) => vs(_.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new N0(o, p);
    }).filter((o) => o.delay > 0).sort((o, f) => o.loc - f.loc);
    let r = 0;
    for (; s.length - 1 >= r; )
      r > 0 && s[r].loc === s[r - 1].loc ? (_n(`get delays: merging delay at ${s[r].loc} km`), s[r - 1].delay += s[r].delay, s.splice(r, 1)) : r++;
    return this._delays = s, this._delays;
  }
  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return W.sumBy(this.delays, "delay");
  }
  /**
   * splits are calculaed on get
   */
  get splits() {
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new O0(this), this._splits);
  }
  get events() {
    if (this._events) return this._events;
    _n("calculating events.sun");
    const s = [], r = this.event.elapsedToTimeOfDay(0), o = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let g = 0; g < o; g++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((m) => {
        const C = m.time - r + 86400 * g;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && s.push({ event: m.event, elapsed: C });
      });
    s.sort((g, _) => g.elapsed - _.elapsed);
    const f = uu(
      this.points.map((g) => g.elapsed),
      this.points.map((g) => g.loc),
      s.map((g) => g.elapsed)
    ), p = s.map((g, _) => ({ ...g, loc: f[_] }));
    return this._events = { sun: p }, this._events;
  }
  get stats() {
    if (this._stats) return this._stats;
    _n("calculating stats.factors");
    const s = W.fromPairs(
      cu.map((p) => {
        const g = this.points.map((_) => _.factors.get(p));
        return [
          p,
          {
            min: W.min(g),
            max: W.max(g)
          }
        ];
      })
    );
    _n("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let o = 0, f = 0;
    return this.points.forEach((p, g) => {
      var _, m;
      o = p.loc - (((_ = this.points[g - 1]) == null ? void 0 : _.loc) || 0), f = p.elapsed - (((m = this.points[g - 1]) == null ? void 0 : m.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: s, sun: r }, this._stats;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((o) => vs(o.waypoint, s))) == null ? void 0 : r.delay) || 0;
  }
  /**
   * get typical delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getTypicalDelayAtWaypoint(s) {
    return s.hasTypicalDelay ? this.typicalDelay : 0;
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The PlanPoint at input location.
   */
  getPoint(s, r = !1) {
    const o = this.points.findIndex((m) => Br(m.loc, s, 4)), f = this.points[o];
    if (Ge(f.loc, s, 4)) return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, g = this.points[p], _ = new su(this, this.course.getPoint(s, r));
    if (!isNaN(g.time) && !isNaN(f.time)) {
      const m = f.elapsed - f.time - (g.elapsed - g.time);
      _.time = we(g.loc, f.loc, g.time + m, f.time, f.loc), _.elapsed = f.elapsed - (f.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return r && this.points.splice(o, 0, _), _;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits;
  }
  checkPacing() {
    var s, r;
    if (_n("checkPacing"), (s = this.pacing.status) != null && s.complete || (_n("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length)) throw new Error("No plan points");
    return !0;
  }
}
class N0 {
  constructor(s, r) {
    M(this, "delay");
    M(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class W0 {
  constructor(s, r, o) {
    M(this, "plan");
    M(this, "courseCutoff");
    M(this, "point");
    this.plan = s, this.courseCutoff = r, this.point = o;
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
const mu = (c, s, r, o) => {
  const f = fu(c, s, r, o), p = [];
  return r.forEach((g, _) => {
    let m = f[_][0] / 10;
    m > 50 ? m = 50 : m < -50 && (m = -50);
    const C = g * f[_][0] + f[_][1];
    p.push({
      grade: m,
      alt: C
    });
  }), p;
};
function B0(c, s) {
  return mu(
    s,
    c.map((o) => o.alt),
    s,
    0.05
  ).map((o) => o.grade);
}
const U0 = (c) => {
  let s = 0, r = 0;
  const o = [0];
  for (let f = 1, p = c.length; f < p; f++)
    s = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += s, o.push(r);
  return o;
}, ze = Kn("models:Track");
class Ms {
  constructor(s) {
    M(this, "dist");
    M(this, "gain");
    M(this, "loss");
    M(this, "points");
    M(this, "_stats");
    ze("Creating new Track object");
    const r = s.map((C) => new du(C.lat, C.lon, C.alt)), o = U0(r), f = B0(r, o);
    this.points = r.map((C, b) => new _u(C.lat, C.lon, C.alt, o[b], f[b])), ze(`set-points - ${r.length} points`), ze("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, g = 0, _ = 0, m = this.points[0].alt;
    this.points.forEach((C) => {
      _ = C.alt - m, _ < 0 ? g += _ : p += _, m = C.alt;
    }), this.gain = p, this.loss = g;
  }
  get start() {
    return W.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return W.pick(this.points[this.points.length - 1], ["lat", "lon"]);
  }
  /**
   * track gain, loss, and distance stats
   */
  get stats() {
    var s, r;
    if (this._stats) return this._stats;
    if ((s = this.points) != null && s.length) {
      ze("Calculating track stats");
      const o = (r = W.last(this.points)) == null ? void 0 : r.loc;
      let f = 0, p = 0, g = 0, _ = this.points[0].alt;
      return this.points.forEach((m) => {
        g = m.alt - _, g < 0 ? p += g : f += g, _ = m.alt;
      }), this._stats = { gain: f, loss: p, dist: o }, this._stats;
    } else throw new me("Track points are missing", "points");
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(s) {
    s > this.dist && (s = s % this.dist);
    let r;
    if (s === 0) r = this.points[0];
    else {
      const o = this.points.findIndex((f) => f.loc >= s);
      r = vu(this.points[o - 1], this.points[o], s);
    }
    return W.pick(r, ["lat", "lon", "alt"]);
  }
  /**
   * iterate to new location based on waypoint lat/lon
   * @param latlon - new point location
   * @param start - starting point in track
   * @param limit - max distance along track from starting point
   * @returns
   */
  getNearestPoint(s, r, o) {
    let p = this.points.findIndex((m) => m === r), g = this.points[p], _ = 0;
    for (; o > 0.025; ) {
      const m = o / 5, C = [g];
      for (let P = 1; P <= 5; P++) {
        const O = g.loc + m * P;
        if (O <= this.dist) {
          for (; this.points[p + 1].loc < O && p < this.points.length - 1; )
            p++;
          C.push(this.points[p]);
        }
      }
      const b = C.map((P) => Number(s.distanceTo(P.latlon)));
      _ = Math.min(...b);
      const w = b.findIndex((P) => P === _);
      g = C[w], o = o / 5;
    }
    return {
      point: g,
      delta: _
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const o = ze.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / s) + 1, g = Array(p).fill(0).map((b, w) => Nt(w++ * s, 3));
    g[g.length - 1] < f && g.push(f);
    const _ = mu(
      this.points.map((b) => b.loc),
      this.points.map((b) => b.alt),
      g,
      2 * s
    ), m = g.map((b) => this.getLLA(b)).map((b, w) => ({
      lat: Nt(b.lat, 6),
      lon: Nt(b.lon, 6),
      alt: Nt(_[w].alt, 2)
    })), C = new Ms(m);
    return o(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
function K0(c, s, r) {
  const o = c.map((f, p) => ({ lat: c[p], lon: s[p], alt: r[p] }));
  return new Ms(o);
}
export {
  H0 as Course,
  jo as CoursePoint,
  b0 as CourseSegment,
  ru as Event,
  bn as Factors,
  L0 as Pacing,
  q0 as Plan,
  su as PlanPoint,
  x0 as PlanSegment,
  du as Point,
  hs as Site,
  ds as Strategy,
  Ms as Track,
  _u as TrackPoint,
  nu as Waypoint,
  y0 as adjustStrategy,
  K0 as createTrackFromArrays,
  G0 as factors,
  vu as interpolatePoint,
  z0 as math,
  p0 as scaleDark
};
