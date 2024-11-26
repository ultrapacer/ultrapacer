var l0 = Object.defineProperty;
var f0 = (c, s, r) => s in c ? l0(c, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[s] = r;
var m = (c, s, r) => f0(c, typeof s != "symbol" ? s + "" : s, r);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ou(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Nr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Nr.exports;
(function(c, s) {
  (function() {
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", M = "__lodash_hash_undefined__", C = 500, b = "__lodash_placeholder__", y = 1, P = 2, O = 4, R = 1, F = 2, N = 1, K = 2, X = 4, Q = 8, et = 16, xt = 32, At = 64, It = 128, Ht = 256, tn = 512, qt = 30, me = "...", Ge = 800, $r = 16, Me = 1, He = 2, zr = 3, xn = 1 / 0, vn = 9007199254740991, qe = 17976931348623157e292, Sn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ct = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", Q],
      ["curryRight", et],
      ["flip", tn],
      ["partial", xt],
      ["partialRight", At],
      ["rearg", Ht]
    ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", mt = "[object Date]", Kt = "[object DOMException]", Rt = "[object Error]", Wt = "[object Function]", yn = "[object GeneratorFunction]", _t = "[object Map]", kt = "[object Number]", Dn = "[object Null]", Mt = "[object Object]", Bt = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", wn = "[object String]", Ke = "[object Symbol]", Iu = "[object Undefined]", Ce = "[object WeakMap]", Tu = "[object WeakSet]", be = "[object ArrayBuffer]", re = "[object DataView]", Gr = "[object Float32Array]", Hr = "[object Float64Array]", qr = "[object Int8Array]", Kr = "[object Int16Array]", Zr = "[object Int32Array]", Jr = "[object Uint8Array]", Yr = "[object Uint8ClampedArray]", Xr = "[object Uint16Array]", Qr = "[object Uint32Array]", Fu = /\b__p \+= '';/g, Pu = /\b(__p \+=) '' \+/g, Eu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bs = /&(?:amp|lt|gt|quot|#39);/g, xs = /[&<>"']/g, Ru = RegExp(bs.source), ku = RegExp(xs.source), Lu = /<%-([\s\S]+?)%>/g, Ou = /<%([\s\S]+?)%>/g, Ss = /<%=([\s\S]+?)%>/g, Du = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nu = /^\w*$/, Wu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, Bu = RegExp(Vr.source), jr = /^\s+/, Uu = /\s/, $u = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, zu = /\{\n\/\* \[wrapped with (.+)\] \*/, Gu = /,? & /, Hu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, qu = /[()=,{}\[\]\/\s]/, Ku = /\\(\\)?/g, Zu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, As = /\w*$/, Ju = /^[-+]0x[0-9a-f]+$/i, Yu = /^0b[01]+$/i, Xu = /^\[object .+?Constructor\]$/, Qu = /^0o[0-7]+$/i, Vu = /^(?:0|[1-9]\d*)$/, ju = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ze = /($^)/, tl = /['\n\r\u2028\u2029\\]/g, Je = "\\ud800-\\udfff", nl = "\\u0300-\\u036f", el = "\\ufe20-\\ufe2f", rl = "\\u20d0-\\u20ff", Is = nl + el + rl, Ts = "\\u2700-\\u27bf", Fs = "a-z\\xdf-\\xf6\\xf8-\\xff", il = "\\xac\\xb1\\xd7\\xf7", sl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", al = "\\u2000-\\u206f", ol = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ps = "A-Z\\xc0-\\xd6\\xd8-\\xde", Es = "\\ufe0e\\ufe0f", Rs = il + sl + al + ol, ti = "['’]", ul = "[" + Je + "]", ks = "[" + Rs + "]", Ye = "[" + Is + "]", Ls = "\\d+", ll = "[" + Ts + "]", Os = "[" + Fs + "]", Ds = "[^" + Je + Rs + Ls + Ts + Fs + Ps + "]", ni = "\\ud83c[\\udffb-\\udfff]", fl = "(?:" + Ye + "|" + ni + ")", Ns = "[^" + Je + "]", ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", ri = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + Ps + "]", Ws = "\\u200d", Bs = "(?:" + Os + "|" + Ds + ")", cl = "(?:" + ie + "|" + Ds + ")", Us = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", $s = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", zs = fl + "?", Gs = "[" + Es + "]?", hl = "(?:" + Ws + "(?:" + [Ns, ei, ri].join("|") + ")" + Gs + zs + ")*", pl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", gl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Hs = Gs + zs + hl, dl = "(?:" + [ll, ei, ri].join("|") + ")" + Hs, _l = "(?:" + [Ns + Ye + "?", Ye, ei, ri, ul].join("|") + ")", vl = RegExp(ti, "g"), yl = RegExp(Ye, "g"), ii = RegExp(ni + "(?=" + ni + ")|" + _l + Hs, "g"), wl = RegExp([
      ie + "?" + Os + "+" + Us + "(?=" + [ks, ie, "$"].join("|") + ")",
      cl + "+" + $s + "(?=" + [ks, ie + Bs, "$"].join("|") + ")",
      ie + "?" + Bs + "+" + Us,
      ie + "+" + $s,
      gl,
      pl,
      Ls,
      dl
    ].join("|"), "g"), ml = RegExp("[" + Ws + Je + Is + Es + "]"), Ml = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Cl = [
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
    ], bl = -1, ft = {};
    ft[Gr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = ft[Qr] = !0, ft[nt] = ft[ht] = ft[be] = ft[lt] = ft[re] = ft[mt] = ft[Rt] = ft[Wt] = ft[_t] = ft[kt] = ft[Mt] = ft[nn] = ft[pt] = ft[wn] = ft[Ce] = !1;
    var ut = {};
    ut[nt] = ut[ht] = ut[be] = ut[re] = ut[lt] = ut[mt] = ut[Gr] = ut[Hr] = ut[qr] = ut[Kr] = ut[Zr] = ut[_t] = ut[kt] = ut[Mt] = ut[nn] = ut[pt] = ut[wn] = ut[Ke] = ut[Jr] = ut[Yr] = ut[Xr] = ut[Qr] = !0, ut[Rt] = ut[Wt] = ut[Ce] = !1;
    var xl = {
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
    }, Sl = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Al = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Il = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Tl = parseFloat, Fl = parseInt, qs = typeof Be == "object" && Be && Be.Object === Object && Be, Pl = typeof self == "object" && self && self.Object === Object && self, Tt = qs || Pl || Function("return this")(), si = s && !s.nodeType && s, Jn = si && !0 && c && !c.nodeType && c, Ks = Jn && Jn.exports === si, ai = Ks && qs.process, en = function() {
      try {
        var v = Jn && Jn.require && Jn.require("util").types;
        return v || ai && ai.binding && ai.binding("util");
      } catch {
      }
    }(), Zs = en && en.isArrayBuffer, Js = en && en.isDate, Ys = en && en.isMap, Xs = en && en.isRegExp, Qs = en && en.isSet, Vs = en && en.isTypedArray;
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
    function El(v, S, x, L) {
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
    function Rl(v, S) {
      for (var x = v == null ? 0 : v.length; x-- && S(v[x], x, v) !== !1; )
        ;
      return v;
    }
    function js(v, S) {
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
    function Xe(v, S) {
      var x = v == null ? 0 : v.length;
      return !!x && se(v, S, 0) > -1;
    }
    function oi(v, S, x) {
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
    function ui(v, S, x, L) {
      var H = -1, rt = v == null ? 0 : v.length;
      for (L && rt && (x = v[++H]); ++H < rt; )
        x = S(x, v[H], H, v);
      return x;
    }
    function kl(v, S, x, L) {
      var H = v == null ? 0 : v.length;
      for (L && H && (x = v[--H]); H--; )
        x = S(x, v[H], H, v);
      return x;
    }
    function li(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L; )
        if (S(v[x], x, v))
          return !0;
      return !1;
    }
    var Ll = fi("length");
    function Ol(v) {
      return v.split("");
    }
    function Dl(v) {
      return v.match(Hu) || [];
    }
    function ta(v, S, x) {
      var L;
      return x(v, function(H, rt, Ct) {
        if (S(H, rt, Ct))
          return L = rt, !1;
      }), L;
    }
    function Qe(v, S, x, L) {
      for (var H = v.length, rt = x + (L ? 1 : -1); L ? rt-- : ++rt < H; )
        if (S(v[rt], rt, v))
          return rt;
      return -1;
    }
    function se(v, S, x) {
      return S === S ? Jl(v, S, x) : Qe(v, na, x);
    }
    function Nl(v, S, x, L) {
      for (var H = x - 1, rt = v.length; ++H < rt; )
        if (L(v[H], S))
          return H;
      return -1;
    }
    function na(v) {
      return v !== v;
    }
    function ea(v, S) {
      var x = v == null ? 0 : v.length;
      return x ? hi(v, S) / x : Sn;
    }
    function fi(v) {
      return function(S) {
        return S == null ? r : S[v];
      };
    }
    function ci(v) {
      return function(S) {
        return v == null ? r : v[S];
      };
    }
    function ra(v, S, x, L, H) {
      return H(v, function(rt, Ct, at) {
        x = L ? (L = !1, rt) : S(x, rt, Ct, at);
      }), x;
    }
    function Wl(v, S) {
      var x = v.length;
      for (v.sort(S); x--; )
        v[x] = v[x].value;
      return v;
    }
    function hi(v, S) {
      for (var x, L = -1, H = v.length; ++L < H; ) {
        var rt = S(v[L]);
        rt !== r && (x = x === r ? rt : x + rt);
      }
      return x;
    }
    function pi(v, S) {
      for (var x = -1, L = Array(v); ++x < v; )
        L[x] = S(x);
      return L;
    }
    function Bl(v, S) {
      return gt(S, function(x) {
        return [x, v[x]];
      });
    }
    function ia(v) {
      return v && v.slice(0, ua(v) + 1).replace(jr, "");
    }
    function Jt(v) {
      return function(S) {
        return v(S);
      };
    }
    function gi(v, S) {
      return gt(S, function(x) {
        return v[x];
      });
    }
    function xe(v, S) {
      return v.has(S);
    }
    function sa(v, S) {
      for (var x = -1, L = v.length; ++x < L && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function aa(v, S) {
      for (var x = v.length; x-- && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function Ul(v, S) {
      for (var x = v.length, L = 0; x--; )
        v[x] === S && ++L;
      return L;
    }
    var $l = ci(xl), zl = ci(Sl);
    function Gl(v) {
      return "\\" + Il[v];
    }
    function Hl(v, S) {
      return v == null ? r : v[S];
    }
    function ae(v) {
      return ml.test(v);
    }
    function ql(v) {
      return Ml.test(v);
    }
    function Kl(v) {
      for (var S, x = []; !(S = v.next()).done; )
        x.push(S.value);
      return x;
    }
    function di(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L, H) {
        x[++S] = [H, L];
      }), x;
    }
    function oa(v, S) {
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
    function Ve(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = L;
      }), x;
    }
    function Zl(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = [L, L];
      }), x;
    }
    function Jl(v, S, x) {
      for (var L = x - 1, H = v.length; ++L < H; )
        if (v[L] === S)
          return L;
      return -1;
    }
    function Yl(v, S, x) {
      for (var L = x + 1; L--; )
        if (v[L] === S)
          return L;
      return L;
    }
    function oe(v) {
      return ae(v) ? Ql(v) : Ll(v);
    }
    function hn(v) {
      return ae(v) ? Vl(v) : Ol(v);
    }
    function ua(v) {
      for (var S = v.length; S-- && Uu.test(v.charAt(S)); )
        ;
      return S;
    }
    var Xl = ci(Al);
    function Ql(v) {
      for (var S = ii.lastIndex = 0; ii.test(v); )
        ++S;
      return S;
    }
    function Vl(v) {
      return v.match(ii) || [];
    }
    function jl(v) {
      return v.match(wl) || [];
    }
    var tf = function v(S) {
      S = S == null ? Tt : ue.defaults(Tt.Object(), S, ue.pick(Tt, Cl));
      var x = S.Array, L = S.Date, H = S.Error, rt = S.Function, Ct = S.Math, at = S.Object, _i = S.RegExp, nf = S.String, sn = S.TypeError, je = x.prototype, ef = rt.prototype, le = at.prototype, tr = S["__core-js_shared__"], nr = ef.toString, st = le.hasOwnProperty, rf = 0, la = function() {
        var t = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), er = le.toString, sf = nr.call(at), af = Tt._, of = _i(
        "^" + nr.call(st).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), rr = Ks ? S.Buffer : r, Un = S.Symbol, ir = S.Uint8Array, fa = rr ? rr.allocUnsafe : r, sr = oa(at.getPrototypeOf, at), ca = at.create, ha = le.propertyIsEnumerable, ar = je.splice, pa = Un ? Un.isConcatSpreadable : r, Se = Un ? Un.iterator : r, Yn = Un ? Un.toStringTag : r, or = function() {
        try {
          var t = te(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), uf = S.clearTimeout !== Tt.clearTimeout && S.clearTimeout, lf = L && L.now !== Tt.Date.now && L.now, ff = S.setTimeout !== Tt.setTimeout && S.setTimeout, ur = Ct.ceil, lr = Ct.floor, vi = at.getOwnPropertySymbols, cf = rr ? rr.isBuffer : r, ga = S.isFinite, hf = je.join, pf = oa(at.keys, at), bt = Ct.max, Pt = Ct.min, gf = L.now, df = S.parseInt, da = Ct.random, _f = je.reverse, yi = te(S, "DataView"), Ae = te(S, "Map"), wi = te(S, "Promise"), fe = te(S, "Set"), Ie = te(S, "WeakMap"), Te = te(at, "create"), fr = Ie && new Ie(), ce = {}, vf = ne(yi), yf = ne(Ae), wf = ne(wi), mf = ne(fe), Mf = ne(Ie), cr = Un ? Un.prototype : r, Fe = cr ? cr.valueOf : r, _a = cr ? cr.toString : r;
      function u(t) {
        if (vt(t) && !q(t) && !(t instanceof j)) {
          if (t instanceof an)
            return t;
          if (st.call(t, "__wrapped__"))
            return yo(t);
        }
        return new an(t);
      }
      var he = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          if (!dt(n))
            return {};
          if (ca)
            return ca(n);
          t.prototype = n;
          var e = new t();
          return t.prototype = r, e;
        };
      }();
      function hr() {
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
        escape: Lu,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ou,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ss,
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
      }, u.prototype = hr.prototype, u.prototype.constructor = u, an.prototype = he(hr.prototype), an.prototype.constructor = an;
      function j(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
      }
      function Cf() {
        var t = new j(this.__wrapped__);
        return t.__actions__ = Ut(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ut(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ut(this.__views__), t;
      }
      function bf() {
        if (this.__filtered__) {
          var t = new j(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function xf() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = q(t), i = n < 0, a = e ? t.length : 0, l = Dc(0, a, this.__views__), h = l.start, d = l.end, w = d - h, A = i ? d : h - 1, I = this.__iteratees__, T = I.length, E = 0, D = Pt(w, this.__takeCount__);
        if (!e || !i && a == w && D == w)
          return Ua(t, this.__actions__);
        var B = [];
        t:
          for (; w-- && E < D; ) {
            A += n;
            for (var J = -1, U = t[A]; ++J < T; ) {
              var V = I[J], tt = V.iteratee, Qt = V.type, Dt = tt(U);
              if (Qt == He)
                U = Dt;
              else if (!Dt) {
                if (Qt == Me)
                  continue t;
                break t;
              }
            }
            B[E++] = U;
          }
        return B;
      }
      j.prototype = he(hr.prototype), j.prototype.constructor = j;
      function Xn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function Sf() {
        this.__data__ = Te ? Te(null) : {}, this.size = 0;
      }
      function Af(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function If(t) {
        var n = this.__data__;
        if (Te) {
          var e = n[t];
          return e === M ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function Tf(t) {
        var n = this.__data__;
        return Te ? n[t] !== r : st.call(n, t);
      }
      function Ff(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Te && n === r ? M : n, this;
      }
      Xn.prototype.clear = Sf, Xn.prototype.delete = Af, Xn.prototype.get = If, Xn.prototype.has = Tf, Xn.prototype.set = Ff;
      function An(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function Pf() {
        this.__data__ = [], this.size = 0;
      }
      function Ef(t) {
        var n = this.__data__, e = pr(n, t);
        if (e < 0)
          return !1;
        var i = n.length - 1;
        return e == i ? n.pop() : ar.call(n, e, 1), --this.size, !0;
      }
      function Rf(t) {
        var n = this.__data__, e = pr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function kf(t) {
        return pr(this.__data__, t) > -1;
      }
      function Lf(t, n) {
        var e = this.__data__, i = pr(e, t);
        return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
      }
      An.prototype.clear = Pf, An.prototype.delete = Ef, An.prototype.get = Rf, An.prototype.has = kf, An.prototype.set = Lf;
      function In(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function Of() {
        this.size = 0, this.__data__ = {
          hash: new Xn(),
          map: new (Ae || An)(),
          string: new Xn()
        };
      }
      function Df(t) {
        var n = Sr(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Nf(t) {
        return Sr(this, t).get(t);
      }
      function Wf(t) {
        return Sr(this, t).has(t);
      }
      function Bf(t, n) {
        var e = Sr(this, t), i = e.size;
        return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
      }
      In.prototype.clear = Of, In.prototype.delete = Df, In.prototype.get = Nf, In.prototype.has = Wf, In.prototype.set = Bf;
      function Qn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new In(); ++n < e; )
          this.add(t[n]);
      }
      function Uf(t) {
        return this.__data__.set(t, M), this;
      }
      function $f(t) {
        return this.__data__.has(t);
      }
      Qn.prototype.add = Qn.prototype.push = Uf, Qn.prototype.has = $f;
      function pn(t) {
        var n = this.__data__ = new An(t);
        this.size = n.size;
      }
      function zf() {
        this.__data__ = new An(), this.size = 0;
      }
      function Gf(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Hf(t) {
        return this.__data__.get(t);
      }
      function qf(t) {
        return this.__data__.has(t);
      }
      function Kf(t, n) {
        var e = this.__data__;
        if (e instanceof An) {
          var i = e.__data__;
          if (!Ae || i.length < f - 1)
            return i.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new In(i);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = zf, pn.prototype.delete = Gf, pn.prototype.get = Hf, pn.prototype.has = qf, pn.prototype.set = Kf;
      function va(t, n) {
        var e = q(t), i = !e && ee(t), a = !e && !i && qn(t), l = !e && !i && !a && _e(t), h = e || i || a || l, d = h ? pi(t.length, nf) : [], w = d.length;
        for (var A in t)
          (n || st.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          En(A, w))) && d.push(A);
        return d;
      }
      function ya(t) {
        var n = t.length;
        return n ? t[Pi(0, n - 1)] : r;
      }
      function Zf(t, n) {
        return Ar(Ut(t), Vn(n, 0, t.length));
      }
      function Jf(t) {
        return Ar(Ut(t));
      }
      function mi(t, n, e) {
        (e !== r && !gn(t[n], e) || e === r && !(n in t)) && Tn(t, n, e);
      }
      function Pe(t, n, e) {
        var i = t[n];
        (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && Tn(t, n, e);
      }
      function pr(t, n) {
        for (var e = t.length; e--; )
          if (gn(t[e][0], n))
            return e;
        return -1;
      }
      function Yf(t, n, e, i) {
        return $n(t, function(a, l, h) {
          n(i, a, e(a), h);
        }), i;
      }
      function wa(t, n) {
        return t && Mn(n, St(n), t);
      }
      function Xf(t, n) {
        return t && Mn(n, zt(n), t);
      }
      function Tn(t, n, e) {
        n == "__proto__" && or ? or(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[n] = e;
      }
      function Mi(t, n) {
        for (var e = -1, i = n.length, a = x(i), l = t == null; ++e < i; )
          a[e] = l ? r : ns(t, n[e]);
        return a;
      }
      function Vn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function on(t, n, e, i, a, l) {
        var h, d = n & y, w = n & P, A = n & O;
        if (e && (h = a ? e(t, i, a, l) : e(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var I = q(t);
        if (I) {
          if (h = Wc(t), !d)
            return Ut(t, h);
        } else {
          var T = Et(t), E = T == Wt || T == yn;
          if (qn(t))
            return Ga(t, d);
          if (T == Mt || T == nt || E && !a) {
            if (h = w || E ? {} : uo(t), !d)
              return w ? Ic(t, Xf(h, t)) : Ac(t, wa(h, t));
          } else {
            if (!ut[T])
              return a ? t : {};
            h = Bc(t, T, d);
          }
        }
        l || (l = new pn());
        var D = l.get(t);
        if (D)
          return D;
        l.set(t, h), Wo(t) ? t.forEach(function(U) {
          h.add(on(U, n, e, U, t, l));
        }) : Do(t) && t.forEach(function(U, V) {
          h.set(V, on(U, n, e, V, t, l));
        });
        var B = A ? w ? $i : Ui : w ? zt : St, J = I ? r : B(t);
        return rn(J || t, function(U, V) {
          J && (V = U, U = t[V]), Pe(h, V, on(U, n, e, V, t, l));
        }), h;
      }
      function Qf(t) {
        var n = St(t);
        return function(e) {
          return ma(e, t, n);
        };
      }
      function ma(t, n, e) {
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
      function Ma(t, n, e) {
        if (typeof t != "function")
          throw new sn(g);
        return Ne(function() {
          t.apply(r, e);
        }, n);
      }
      function Ee(t, n, e, i) {
        var a = -1, l = Xe, h = !0, d = t.length, w = [], A = n.length;
        if (!d)
          return w;
        e && (n = gt(n, Jt(e))), i ? (l = oi, h = !1) : n.length >= f && (l = xe, h = !1, n = new Qn(n));
        t:
          for (; ++a < d; ) {
            var I = t[a], T = e == null ? I : e(I);
            if (I = i || I !== 0 ? I : 0, h && T === T) {
              for (var E = A; E--; )
                if (n[E] === T)
                  continue t;
              w.push(I);
            } else l(n, T, i) || w.push(I);
          }
        return w;
      }
      var $n = Ja(mn), Ca = Ja(bi, !0);
      function Vf(t, n) {
        var e = !0;
        return $n(t, function(i, a, l) {
          return e = !!n(i, a, l), e;
        }), e;
      }
      function gr(t, n, e) {
        for (var i = -1, a = t.length; ++i < a; ) {
          var l = t[i], h = n(l);
          if (h != null && (d === r ? h === h && !Xt(h) : e(h, d)))
            var d = h, w = l;
        }
        return w;
      }
      function jf(t, n, e, i) {
        var a = t.length;
        for (e = Z(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : Z(i), i < 0 && (i += a), i = e > i ? 0 : Uo(i); e < i; )
          t[e++] = n;
        return t;
      }
      function ba(t, n) {
        var e = [];
        return $n(t, function(i, a, l) {
          n(i, a, l) && e.push(i);
        }), e;
      }
      function Ft(t, n, e, i, a) {
        var l = -1, h = t.length;
        for (e || (e = $c), a || (a = []); ++l < h; ) {
          var d = t[l];
          n > 0 && e(d) ? n > 1 ? Ft(d, n - 1, e, i, a) : Wn(a, d) : i || (a[a.length] = d);
        }
        return a;
      }
      var Ci = Ya(), xa = Ya(!0);
      function mn(t, n) {
        return t && Ci(t, n, St);
      }
      function bi(t, n) {
        return t && xa(t, n, St);
      }
      function dr(t, n) {
        return Nn(n, function(e) {
          return Rn(t[e]);
        });
      }
      function jn(t, n) {
        n = Gn(n, t);
        for (var e = 0, i = n.length; t != null && e < i; )
          t = t[Cn(n[e++])];
        return e && e == i ? t : r;
      }
      function Sa(t, n, e) {
        var i = n(t);
        return q(t) ? i : Wn(i, e(t));
      }
      function Lt(t) {
        return t == null ? t === r ? Iu : Dn : Yn && Yn in at(t) ? Oc(t) : Jc(t);
      }
      function xi(t, n) {
        return t > n;
      }
      function tc(t, n) {
        return t != null && st.call(t, n);
      }
      function nc(t, n) {
        return t != null && n in at(t);
      }
      function ec(t, n, e) {
        return t >= Pt(n, e) && t < bt(n, e);
      }
      function Si(t, n, e) {
        for (var i = e ? oi : Xe, a = t[0].length, l = t.length, h = l, d = x(l), w = 1 / 0, A = []; h--; ) {
          var I = t[h];
          h && n && (I = gt(I, Jt(n))), w = Pt(I.length, w), d[h] = !e && (n || a >= 120 && I.length >= 120) ? new Qn(h && I) : r;
        }
        I = t[0];
        var T = -1, E = d[0];
        t:
          for (; ++T < a && A.length < w; ) {
            var D = I[T], B = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(E ? xe(E, B) : i(A, B, e))) {
              for (h = l; --h; ) {
                var J = d[h];
                if (!(J ? xe(J, B) : i(t[h], B, e)))
                  continue t;
              }
              E && E.push(B), A.push(D);
            }
          }
        return A;
      }
      function rc(t, n, e, i) {
        return mn(t, function(a, l, h) {
          n(i, e(a), l, h);
        }), i;
      }
      function Re(t, n, e) {
        n = Gn(n, t), t = ho(t, n);
        var i = t == null ? t : t[Cn(ln(n))];
        return i == null ? r : Zt(i, t, e);
      }
      function Aa(t) {
        return vt(t) && Lt(t) == nt;
      }
      function ic(t) {
        return vt(t) && Lt(t) == be;
      }
      function sc(t) {
        return vt(t) && Lt(t) == mt;
      }
      function ke(t, n, e, i, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : ac(t, n, e, i, ke, a);
      }
      function ac(t, n, e, i, a, l) {
        var h = q(t), d = q(n), w = h ? ht : Et(t), A = d ? ht : Et(n);
        w = w == nt ? Mt : w, A = A == nt ? Mt : A;
        var I = w == Mt, T = A == Mt, E = w == A;
        if (E && qn(t)) {
          if (!qn(n))
            return !1;
          h = !0, I = !1;
        }
        if (E && !I)
          return l || (l = new pn()), h || _e(t) ? so(t, n, e, i, a, l) : kc(t, n, w, e, i, a, l);
        if (!(e & R)) {
          var D = I && st.call(t, "__wrapped__"), B = T && st.call(n, "__wrapped__");
          if (D || B) {
            var J = D ? t.value() : t, U = B ? n.value() : n;
            return l || (l = new pn()), a(J, U, e, i, l);
          }
        }
        return E ? (l || (l = new pn()), Lc(t, n, e, i, a, l)) : !1;
      }
      function oc(t) {
        return vt(t) && Et(t) == _t;
      }
      function Ai(t, n, e, i) {
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
          var w = d[0], A = t[w], I = d[1];
          if (h && d[2]) {
            if (A === r && !(w in t))
              return !1;
          } else {
            var T = new pn();
            if (i)
              var E = i(A, I, w, t, n, T);
            if (!(E === r ? ke(I, A, R | F, i, T) : E))
              return !1;
          }
        }
        return !0;
      }
      function Ia(t) {
        if (!dt(t) || Gc(t))
          return !1;
        var n = Rn(t) ? of : Xu;
        return n.test(ne(t));
      }
      function uc(t) {
        return vt(t) && Lt(t) == nn;
      }
      function lc(t) {
        return vt(t) && Et(t) == pt;
      }
      function fc(t) {
        return vt(t) && Rr(t.length) && !!ft[Lt(t)];
      }
      function Ta(t) {
        return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? q(t) ? Ea(t[0], t[1]) : Pa(t) : Qo(t);
      }
      function Ii(t) {
        if (!De(t))
          return pf(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function cc(t) {
        if (!dt(t))
          return Zc(t);
        var n = De(t), e = [];
        for (var i in t)
          i == "constructor" && (n || !st.call(t, i)) || e.push(i);
        return e;
      }
      function Ti(t, n) {
        return t < n;
      }
      function Fa(t, n) {
        var e = -1, i = $t(t) ? x(t.length) : [];
        return $n(t, function(a, l, h) {
          i[++e] = n(a, l, h);
        }), i;
      }
      function Pa(t) {
        var n = Gi(t);
        return n.length == 1 && n[0][2] ? fo(n[0][0], n[0][1]) : function(e) {
          return e === t || Ai(e, t, n);
        };
      }
      function Ea(t, n) {
        return qi(t) && lo(n) ? fo(Cn(t), n) : function(e) {
          var i = ns(e, t);
          return i === r && i === n ? es(e, t) : ke(n, i, R | F);
        };
      }
      function _r(t, n, e, i, a) {
        t !== n && Ci(n, function(l, h) {
          if (a || (a = new pn()), dt(l))
            hc(t, n, h, e, _r, i, a);
          else {
            var d = i ? i(Zi(t, h), l, h + "", t, n, a) : r;
            d === r && (d = l), mi(t, h, d);
          }
        }, zt);
      }
      function hc(t, n, e, i, a, l, h) {
        var d = Zi(t, e), w = Zi(n, e), A = h.get(w);
        if (A) {
          mi(t, e, A);
          return;
        }
        var I = l ? l(d, w, e + "", t, n, h) : r, T = I === r;
        if (T) {
          var E = q(w), D = !E && qn(w), B = !E && !D && _e(w);
          I = w, E || D || B ? q(d) ? I = d : yt(d) ? I = Ut(d) : D ? (T = !1, I = Ga(w, !0)) : B ? (T = !1, I = Ha(w, !0)) : I = [] : We(w) || ee(w) ? (I = d, ee(d) ? I = $o(d) : (!dt(d) || Rn(d)) && (I = uo(w))) : T = !1;
        }
        T && (h.set(w, I), a(I, w, i, l, h), h.delete(w)), mi(t, e, I);
      }
      function Ra(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, En(n, e) ? t[n] : r;
      }
      function ka(t, n, e) {
        n.length ? n = gt(n, function(l) {
          return q(l) ? function(h) {
            return jn(h, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [Gt];
        var i = -1;
        n = gt(n, Jt(W()));
        var a = Fa(t, function(l, h, d) {
          var w = gt(n, function(A) {
            return A(l);
          });
          return { criteria: w, index: ++i, value: l };
        });
        return Wl(a, function(l, h) {
          return Sc(l, h, e);
        });
      }
      function pc(t, n) {
        return La(t, n, function(e, i) {
          return es(t, i);
        });
      }
      function La(t, n, e) {
        for (var i = -1, a = n.length, l = {}; ++i < a; ) {
          var h = n[i], d = jn(t, h);
          e(d, h) && Le(l, Gn(h, t), d);
        }
        return l;
      }
      function gc(t) {
        return function(n) {
          return jn(n, t);
        };
      }
      function Fi(t, n, e, i) {
        var a = i ? Nl : se, l = -1, h = n.length, d = t;
        for (t === n && (n = Ut(n)), e && (d = gt(t, Jt(e))); ++l < h; )
          for (var w = 0, A = n[l], I = e ? e(A) : A; (w = a(d, I, w, i)) > -1; )
            d !== t && ar.call(d, w, 1), ar.call(t, w, 1);
        return t;
      }
      function Oa(t, n) {
        for (var e = t ? n.length : 0, i = e - 1; e--; ) {
          var a = n[e];
          if (e == i || a !== l) {
            var l = a;
            En(a) ? ar.call(t, a, 1) : ki(t, a);
          }
        }
        return t;
      }
      function Pi(t, n) {
        return t + lr(da() * (n - t + 1));
      }
      function dc(t, n, e, i) {
        for (var a = -1, l = bt(ur((n - t) / (e || 1)), 0), h = x(l); l--; )
          h[i ? l : ++a] = t, t += e;
        return h;
      }
      function Ei(t, n) {
        var e = "";
        if (!t || n < 1 || n > vn)
          return e;
        do
          n % 2 && (e += t), n = lr(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function Y(t, n) {
        return Ji(co(t, n, Gt), t + "");
      }
      function _c(t) {
        return ya(ve(t));
      }
      function vc(t, n) {
        var e = ve(t);
        return Ar(e, Vn(n, 0, e.length));
      }
      function Le(t, n, e, i) {
        if (!dt(t))
          return t;
        n = Gn(n, t);
        for (var a = -1, l = n.length, h = l - 1, d = t; d != null && ++a < l; ) {
          var w = Cn(n[a]), A = e;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return t;
          if (a != h) {
            var I = d[w];
            A = i ? i(I, w, d) : r, A === r && (A = dt(I) ? I : En(n[a + 1]) ? [] : {});
          }
          Pe(d, w, A), d = d[w];
        }
        return t;
      }
      var Da = fr ? function(t, n) {
        return fr.set(t, n), t;
      } : Gt, yc = or ? function(t, n) {
        return or(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: is(n),
          writable: !0
        });
      } : Gt;
      function wc(t) {
        return Ar(ve(t));
      }
      function un(t, n, e) {
        var i = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = x(a); ++i < a; )
          l[i] = t[i + n];
        return l;
      }
      function mc(t, n) {
        var e;
        return $n(t, function(i, a, l) {
          return e = n(i, a, l), !e;
        }), !!e;
      }
      function vr(t, n, e) {
        var i = 0, a = t == null ? i : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; i < a; ) {
            var l = i + a >>> 1, h = t[l];
            h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = l + 1 : a = l;
          }
          return a;
        }
        return Ri(t, n, Gt, e);
      }
      function Ri(t, n, e, i) {
        var a = 0, l = t == null ? 0 : t.length;
        if (l === 0)
          return 0;
        n = e(n);
        for (var h = n !== n, d = n === null, w = Xt(n), A = n === r; a < l; ) {
          var I = lr((a + l) / 2), T = e(t[I]), E = T !== r, D = T === null, B = T === T, J = Xt(T);
          if (h)
            var U = i || B;
          else A ? U = B && (i || E) : d ? U = B && E && (i || !D) : w ? U = B && E && !D && (i || !J) : D || J ? U = !1 : U = i ? T <= n : T < n;
          U ? a = I + 1 : l = I;
        }
        return Pt(l, $);
      }
      function Na(t, n) {
        for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
          var h = t[e], d = n ? n(h) : h;
          if (!e || !gn(d, w)) {
            var w = d;
            l[a++] = h === 0 ? 0 : h;
          }
        }
        return l;
      }
      function Wa(t) {
        return typeof t == "number" ? t : Xt(t) ? Sn : +t;
      }
      function Yt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return gt(t, Yt) + "";
        if (Xt(t))
          return _a ? _a.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -xn ? "-0" : n;
      }
      function zn(t, n, e) {
        var i = -1, a = Xe, l = t.length, h = !0, d = [], w = d;
        if (e)
          h = !1, a = oi;
        else if (l >= f) {
          var A = n ? null : Ec(t);
          if (A)
            return Ve(A);
          h = !1, a = xe, w = new Qn();
        } else
          w = n ? [] : d;
        t:
          for (; ++i < l; ) {
            var I = t[i], T = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, h && T === T) {
              for (var E = w.length; E--; )
                if (w[E] === T)
                  continue t;
              n && w.push(T), d.push(I);
            } else a(w, T, e) || (w !== d && w.push(T), d.push(I));
          }
        return d;
      }
      function ki(t, n) {
        return n = Gn(n, t), t = ho(t, n), t == null || delete t[Cn(ln(n))];
      }
      function Ba(t, n, e, i) {
        return Le(t, n, e(jn(t, n)), i);
      }
      function yr(t, n, e, i) {
        for (var a = t.length, l = i ? a : -1; (i ? l-- : ++l < a) && n(t[l], l, t); )
          ;
        return e ? un(t, i ? 0 : l, i ? l + 1 : a) : un(t, i ? l + 1 : 0, i ? a : l);
      }
      function Ua(t, n) {
        var e = t;
        return e instanceof j && (e = e.value()), ui(n, function(i, a) {
          return a.func.apply(a.thisArg, Wn([i], a.args));
        }, e);
      }
      function Li(t, n, e) {
        var i = t.length;
        if (i < 2)
          return i ? zn(t[0]) : [];
        for (var a = -1, l = x(i); ++a < i; )
          for (var h = t[a], d = -1; ++d < i; )
            d != a && (l[a] = Ee(l[a] || h, t[d], n, e));
        return zn(Ft(l, 1), n, e);
      }
      function $a(t, n, e) {
        for (var i = -1, a = t.length, l = n.length, h = {}; ++i < a; ) {
          var d = i < l ? n[i] : r;
          e(h, t[i], d);
        }
        return h;
      }
      function Oi(t) {
        return yt(t) ? t : [];
      }
      function Di(t) {
        return typeof t == "function" ? t : Gt;
      }
      function Gn(t, n) {
        return q(t) ? t : qi(t, n) ? [t] : vo(it(t));
      }
      var Mc = Y;
      function Hn(t, n, e) {
        var i = t.length;
        return e = e === r ? i : e, !n && e >= i ? t : un(t, n, e);
      }
      var za = uf || function(t) {
        return Tt.clearTimeout(t);
      };
      function Ga(t, n) {
        if (n)
          return t.slice();
        var e = t.length, i = fa ? fa(e) : new t.constructor(e);
        return t.copy(i), i;
      }
      function Ni(t) {
        var n = new t.constructor(t.byteLength);
        return new ir(n).set(new ir(t)), n;
      }
      function Cc(t, n) {
        var e = n ? Ni(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function bc(t) {
        var n = new t.constructor(t.source, As.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function xc(t) {
        return Fe ? at(Fe.call(t)) : {};
      }
      function Ha(t, n) {
        var e = n ? Ni(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function qa(t, n) {
        if (t !== n) {
          var e = t !== r, i = t === null, a = t === t, l = Xt(t), h = n !== r, d = n === null, w = n === n, A = Xt(n);
          if (!d && !A && !l && t > n || l && h && w && !d && !A || i && h && w || !e && w || !a)
            return 1;
          if (!i && !l && !A && t < n || A && e && a && !i && !l || d && e && a || !h && a || !w)
            return -1;
        }
        return 0;
      }
      function Sc(t, n, e) {
        for (var i = -1, a = t.criteria, l = n.criteria, h = a.length, d = e.length; ++i < h; ) {
          var w = qa(a[i], l[i]);
          if (w) {
            if (i >= d)
              return w;
            var A = e[i];
            return w * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ka(t, n, e, i) {
        for (var a = -1, l = t.length, h = e.length, d = -1, w = n.length, A = bt(l - h, 0), I = x(w + A), T = !i; ++d < w; )
          I[d] = n[d];
        for (; ++a < h; )
          (T || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[d++] = t[a++];
        return I;
      }
      function Za(t, n, e, i) {
        for (var a = -1, l = t.length, h = -1, d = e.length, w = -1, A = n.length, I = bt(l - d, 0), T = x(I + A), E = !i; ++a < I; )
          T[a] = t[a];
        for (var D = a; ++w < A; )
          T[D + w] = n[w];
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
          var d = n[l], w = i ? i(e[d], t[d], d, e, t) : r;
          w === r && (w = t[d]), a ? Tn(e, d, w) : Pe(e, d, w);
        }
        return e;
      }
      function Ac(t, n) {
        return Mn(t, Hi(t), n);
      }
      function Ic(t, n) {
        return Mn(t, ao(t), n);
      }
      function wr(t, n) {
        return function(e, i) {
          var a = q(e) ? El : Yf, l = n ? n() : {};
          return a(e, t, W(i, 2), l);
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
      function Ja(t, n) {
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
      function Ya(t) {
        return function(n, e, i) {
          for (var a = -1, l = at(n), h = i(n), d = h.length; d--; ) {
            var w = h[t ? d : ++a];
            if (e(l[w], w, l) === !1)
              break;
          }
          return n;
        };
      }
      function Tc(t, n, e) {
        var i = n & N, a = Oe(t);
        function l() {
          var h = this && this !== Tt && this instanceof l ? a : t;
          return h.apply(i ? e : this, arguments);
        }
        return l;
      }
      function Xa(t) {
        return function(n) {
          n = it(n);
          var e = ae(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? Hn(e, 1).join("") : n.slice(1);
          return i[t]() + a;
        };
      }
      function ge(t) {
        return function(n) {
          return ui(Yo(Jo(n).replace(vl, "")), t, "");
        };
      }
      function Oe(t) {
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
      function Fc(t, n, e) {
        var i = Oe(t);
        function a() {
          for (var l = arguments.length, h = x(l), d = l, w = de(a); d--; )
            h[d] = arguments[d];
          var A = l < 3 && h[0] !== w && h[l - 1] !== w ? [] : Bn(h, w);
          if (l -= A.length, l < e)
            return no(
              t,
              n,
              mr,
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
      function Qa(t) {
        return function(n, e, i) {
          var a = at(n);
          if (!$t(n)) {
            var l = W(e, 3);
            n = St(n), e = function(d) {
              return l(a[d], d, a);
            };
          }
          var h = t(n, e, i);
          return h > -1 ? a[l ? n[h] : h] : r;
        };
      }
      function Va(t) {
        return Pn(function(n) {
          var e = n.length, i = e, a = an.prototype.thru;
          for (t && n.reverse(); i--; ) {
            var l = n[i];
            if (typeof l != "function")
              throw new sn(g);
            if (a && !h && xr(l) == "wrapper")
              var h = new an([], !0);
          }
          for (i = h ? i : e; ++i < e; ) {
            l = n[i];
            var d = xr(l), w = d == "wrapper" ? zi(l) : r;
            w && Ki(w[0]) && w[1] == (It | Q | xt | Ht) && !w[4].length && w[9] == 1 ? h = h[xr(w[0])].apply(h, w[3]) : h = l.length == 1 && Ki(l) ? h[d]() : h.thru(l);
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
      function mr(t, n, e, i, a, l, h, d, w, A) {
        var I = n & It, T = n & N, E = n & K, D = n & (Q | et), B = n & tn, J = E ? r : Oe(t);
        function U() {
          for (var V = arguments.length, tt = x(V), Qt = V; Qt--; )
            tt[Qt] = arguments[Qt];
          if (D)
            var Dt = de(U), Vt = Ul(tt, Dt);
          if (i && (tt = Ka(tt, i, a, D)), l && (tt = Za(tt, l, h, D)), V -= Vt, D && V < A) {
            var wt = Bn(tt, Dt);
            return no(
              t,
              n,
              mr,
              U.placeholder,
              e,
              tt,
              wt,
              d,
              w,
              A - V
            );
          }
          var dn = T ? e : this, Ln = E ? dn[t] : t;
          return V = tt.length, d ? tt = Yc(tt, d) : B && V > 1 && tt.reverse(), I && w < V && (tt.length = w), this && this !== Tt && this instanceof U && (Ln = J || Oe(Ln)), Ln.apply(dn, tt);
        }
        return U;
      }
      function ja(t, n) {
        return function(e, i) {
          return rc(e, t, n(i), {});
        };
      }
      function Mr(t, n) {
        return function(e, i) {
          var a;
          if (e === r && i === r)
            return n;
          if (e !== r && (a = e), i !== r) {
            if (a === r)
              return i;
            typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Wa(e), i = Wa(i)), a = t(e, i);
          }
          return a;
        };
      }
      function Wi(t) {
        return Pn(function(n) {
          return n = gt(n, Jt(W())), Y(function(e) {
            var i = this;
            return t(n, function(a) {
              return Zt(a, i, e);
            });
          });
        });
      }
      function Cr(t, n) {
        n = n === r ? " " : Yt(n);
        var e = n.length;
        if (e < 2)
          return e ? Ei(n, t) : n;
        var i = Ei(n, ur(t / oe(n)));
        return ae(n) ? Hn(hn(i), 0, t).join("") : i.slice(0, t);
      }
      function Pc(t, n, e, i) {
        var a = n & N, l = Oe(t);
        function h() {
          for (var d = -1, w = arguments.length, A = -1, I = i.length, T = x(I + w), E = this && this !== Tt && this instanceof h ? l : t; ++A < I; )
            T[A] = i[A];
          for (; w--; )
            T[A++] = arguments[++d];
          return Zt(E, a ? e : this, T);
        }
        return h;
      }
      function to(t) {
        return function(n, e, i) {
          return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), i = i === r ? n < e ? 1 : -1 : kn(i), dc(n, e, i, t);
        };
      }
      function br(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = fn(n), e = fn(e)), t(n, e);
        };
      }
      function no(t, n, e, i, a, l, h, d, w, A) {
        var I = n & Q, T = I ? h : r, E = I ? r : h, D = I ? l : r, B = I ? r : l;
        n |= I ? xt : At, n &= ~(I ? At : xt), n & X || (n &= ~(N | K));
        var J = [
          t,
          n,
          a,
          D,
          T,
          B,
          E,
          d,
          w,
          A
        ], U = e.apply(r, J);
        return Ki(t) && po(U, J), U.placeholder = i, go(U, t, n);
      }
      function Bi(t) {
        var n = Ct[t];
        return function(e, i) {
          if (e = fn(e), i = i == null ? 0 : Pt(Z(i), 292), i && ga(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
          }
          return n(e);
        };
      }
      var Ec = fe && 1 / Ve(new fe([, -0]))[1] == xn ? function(t) {
        return new fe(t);
      } : os;
      function eo(t) {
        return function(n) {
          var e = Et(n);
          return e == _t ? di(n) : e == pt ? Zl(n) : Bl(n, t(n));
        };
      }
      function Fn(t, n, e, i, a, l, h, d) {
        var w = n & K;
        if (!w && typeof t != "function")
          throw new sn(g);
        var A = i ? i.length : 0;
        if (A || (n &= ~(xt | At), i = a = r), h = h === r ? h : bt(Z(h), 0), d = d === r ? d : Z(d), A -= a ? a.length : 0, n & At) {
          var I = i, T = a;
          i = a = r;
        }
        var E = w ? r : zi(t), D = [
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
        if (E && Kc(D, E), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], d = D[9] = D[9] === r ? w ? 0 : t.length : bt(D[9] - A, 0), !d && n & (Q | et) && (n &= ~(Q | et)), !n || n == N)
          var B = Tc(t, n, e);
        else n == Q || n == et ? B = Fc(t, n, d) : (n == xt || n == (N | xt)) && !a.length ? B = Pc(t, n, e, i) : B = mr.apply(r, D);
        var J = E ? Da : po;
        return go(J(B, D), t, n);
      }
      function ro(t, n, e, i) {
        return t === r || gn(t, le[e]) && !st.call(i, e) ? n : t;
      }
      function io(t, n, e, i, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), _r(t, n, r, io, l), l.delete(n)), t;
      }
      function Rc(t) {
        return We(t) ? r : t;
      }
      function so(t, n, e, i, a, l) {
        var h = e & R, d = t.length, w = n.length;
        if (d != w && !(h && w > d))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var T = -1, E = !0, D = e & F ? new Qn() : r;
        for (l.set(t, n), l.set(n, t); ++T < d; ) {
          var B = t[T], J = n[T];
          if (i)
            var U = h ? i(J, B, T, n, t, l) : i(B, J, T, t, n, l);
          if (U !== r) {
            if (U)
              continue;
            E = !1;
            break;
          }
          if (D) {
            if (!li(n, function(V, tt) {
              if (!xe(D, tt) && (B === V || a(B, V, e, i, l)))
                return D.push(tt);
            })) {
              E = !1;
              break;
            }
          } else if (!(B === J || a(B, J, e, i, l))) {
            E = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), E;
      }
      function kc(t, n, e, i, a, l, h) {
        switch (e) {
          case re:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case be:
            return !(t.byteLength != n.byteLength || !l(new ir(t), new ir(n)));
          case lt:
          case mt:
          case kt:
            return gn(+t, +n);
          case Rt:
            return t.name == n.name && t.message == n.message;
          case nn:
          case wn:
            return t == n + "";
          case _t:
            var d = di;
          case pt:
            var w = i & R;
            if (d || (d = Ve), t.size != n.size && !w)
              return !1;
            var A = h.get(t);
            if (A)
              return A == n;
            i |= F, h.set(t, n);
            var I = so(d(t), d(n), i, a, l, h);
            return h.delete(t), I;
          case Ke:
            if (Fe)
              return Fe.call(t) == Fe.call(n);
        }
        return !1;
      }
      function Lc(t, n, e, i, a, l) {
        var h = e & R, d = Ui(t), w = d.length, A = Ui(n), I = A.length;
        if (w != I && !h)
          return !1;
        for (var T = w; T--; ) {
          var E = d[T];
          if (!(h ? E in n : st.call(n, E)))
            return !1;
        }
        var D = l.get(t), B = l.get(n);
        if (D && B)
          return D == n && B == t;
        var J = !0;
        l.set(t, n), l.set(n, t);
        for (var U = h; ++T < w; ) {
          E = d[T];
          var V = t[E], tt = n[E];
          if (i)
            var Qt = h ? i(tt, V, E, n, t, l) : i(V, tt, E, t, n, l);
          if (!(Qt === r ? V === tt || a(V, tt, e, i, l) : Qt)) {
            J = !1;
            break;
          }
          U || (U = E == "constructor");
        }
        if (J && !U) {
          var Dt = t.constructor, Vt = n.constructor;
          Dt != Vt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Vt == "function" && Vt instanceof Vt) && (J = !1);
        }
        return l.delete(t), l.delete(n), J;
      }
      function Pn(t) {
        return Ji(co(t, r, Mo), t + "");
      }
      function Ui(t) {
        return Sa(t, St, Hi);
      }
      function $i(t) {
        return Sa(t, zt, ao);
      }
      var zi = fr ? function(t) {
        return fr.get(t);
      } : os;
      function xr(t) {
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
      function W() {
        var t = u.iteratee || ss;
        return t = t === ss ? Ta : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Sr(t, n) {
        var e = t.__data__;
        return zc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function Gi(t) {
        for (var n = St(t), e = n.length; e--; ) {
          var i = n[e], a = t[i];
          n[e] = [i, a, lo(a)];
        }
        return n;
      }
      function te(t, n) {
        var e = Hl(t, n);
        return Ia(e) ? e : r;
      }
      function Oc(t) {
        var n = st.call(t, Yn), e = t[Yn];
        try {
          t[Yn] = r;
          var i = !0;
        } catch {
        }
        var a = er.call(t);
        return i && (n ? t[Yn] = e : delete t[Yn]), a;
      }
      var Hi = vi ? function(t) {
        return t == null ? [] : (t = at(t), Nn(vi(t), function(n) {
          return ha.call(t, n);
        }));
      } : us, ao = vi ? function(t) {
        for (var n = []; t; )
          Wn(n, Hi(t)), t = sr(t);
        return n;
      } : us, Et = Lt;
      (yi && Et(new yi(new ArrayBuffer(1))) != re || Ae && Et(new Ae()) != _t || wi && Et(wi.resolve()) != Bt || fe && Et(new fe()) != pt || Ie && Et(new Ie()) != Ce) && (Et = function(t) {
        var n = Lt(t), e = n == Mt ? t.constructor : r, i = e ? ne(e) : "";
        if (i)
          switch (i) {
            case vf:
              return re;
            case yf:
              return _t;
            case wf:
              return Bt;
            case mf:
              return pt;
            case Mf:
              return Ce;
          }
        return n;
      });
      function Dc(t, n, e) {
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
      function Nc(t) {
        var n = t.match(zu);
        return n ? n[1].split(Gu) : [];
      }
      function oo(t, n, e) {
        n = Gn(n, t);
        for (var i = -1, a = n.length, l = !1; ++i < a; ) {
          var h = Cn(n[i]);
          if (!(l = t != null && e(t, h)))
            break;
          t = t[h];
        }
        return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && Rr(a) && En(h, a) && (q(t) || ee(t)));
      }
      function Wc(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function uo(t) {
        return typeof t.constructor == "function" && !De(t) ? he(sr(t)) : {};
      }
      function Bc(t, n, e) {
        var i = t.constructor;
        switch (n) {
          case be:
            return Ni(t);
          case lt:
          case mt:
            return new i(+t);
          case re:
            return Cc(t, e);
          case Gr:
          case Hr:
          case qr:
          case Kr:
          case Zr:
          case Jr:
          case Yr:
          case Xr:
          case Qr:
            return Ha(t, e);
          case _t:
            return new i();
          case kt:
          case wn:
            return new i(t);
          case nn:
            return bc(t);
          case pt:
            return new i();
          case Ke:
            return xc(t);
        }
      }
      function Uc(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var i = e - 1;
        return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace($u, `{
/* [wrapped with ` + n + `] */
`);
      }
      function $c(t) {
        return q(t) || ee(t) || !!(pa && t && t[pa]);
      }
      function En(t, n) {
        var e = typeof t;
        return n = n ?? vn, !!n && (e == "number" || e != "symbol" && Vu.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ot(t, n, e) {
        if (!dt(e))
          return !1;
        var i = typeof n;
        return (i == "number" ? $t(e) && En(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function qi(t, n) {
        if (q(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Nu.test(t) || !Du.test(t) || n != null && t in at(n);
      }
      function zc(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ki(t) {
        var n = xr(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var i = zi(e);
        return !!i && t === i[0];
      }
      function Gc(t) {
        return !!la && la in t;
      }
      var Hc = tr ? Rn : ls;
      function De(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
        return t === e;
      }
      function lo(t) {
        return t === t && !dt(t);
      }
      function fo(t, n) {
        return function(e) {
          return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
        };
      }
      function qc(t) {
        var n = Pr(t, function(i) {
          return e.size === C && e.clear(), i;
        }), e = n.cache;
        return n;
      }
      function Kc(t, n) {
        var e = t[1], i = n[1], a = e | i, l = a < (N | K | It), h = i == It && e == Q || i == It && e == Ht && t[7].length <= n[8] || i == (It | Ht) && n[7].length <= n[8] && e == Q;
        if (!(l || h))
          return t;
        i & N && (t[2] = n[2], a |= e & N ? 0 : X);
        var d = n[3];
        if (d) {
          var w = t[3];
          t[3] = w ? Ka(w, d, n[4]) : d, t[4] = w ? Bn(t[3], b) : n[4];
        }
        return d = n[5], d && (w = t[5], t[5] = w ? Za(w, d, n[6]) : d, t[6] = w ? Bn(t[5], b) : n[6]), d = n[7], d && (t[7] = d), i & It && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function Zc(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function Jc(t) {
        return er.call(t);
      }
      function co(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var i = arguments, a = -1, l = bt(i.length - n, 0), h = x(l); ++a < l; )
            h[a] = i[n + a];
          a = -1;
          for (var d = x(n + 1); ++a < n; )
            d[a] = i[a];
          return d[n] = e(h), Zt(t, this, d);
        };
      }
      function ho(t, n) {
        return n.length < 2 ? t : jn(t, un(n, 0, -1));
      }
      function Yc(t, n) {
        for (var e = t.length, i = Pt(n.length, e), a = Ut(t); i--; ) {
          var l = n[i];
          t[i] = En(l, e) ? a[l] : r;
        }
        return t;
      }
      function Zi(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var po = _o(Da), Ne = ff || function(t, n) {
        return Tt.setTimeout(t, n);
      }, Ji = _o(yc);
      function go(t, n, e) {
        var i = n + "";
        return Ji(t, Uc(i, Xc(Nc(i), e)));
      }
      function _o(t) {
        var n = 0, e = 0;
        return function() {
          var i = gf(), a = $r - (i - e);
          if (e = i, a > 0) {
            if (++n >= Ge)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ar(t, n) {
        var e = -1, i = t.length, a = i - 1;
        for (n = n === r ? i : n; ++e < n; ) {
          var l = Pi(e, a), h = t[l];
          t[l] = t[e], t[e] = h;
        }
        return t.length = n, t;
      }
      var vo = qc(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Wu, function(e, i, a, l) {
          n.push(a ? l.replace(Ku, "$1") : i || e);
        }), n;
      });
      function Cn(t) {
        if (typeof t == "string" || Xt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -xn ? "-0" : n;
      }
      function ne(t) {
        if (t != null) {
          try {
            return nr.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Xc(t, n) {
        return rn(ct, function(e) {
          var i = "_." + e[0];
          n & e[1] && !Xe(t, i) && t.push(i);
        }), t.sort();
      }
      function yo(t) {
        if (t instanceof j)
          return t.clone();
        var n = new an(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ut(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Qc(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = bt(Z(n), 0);
        var i = t == null ? 0 : t.length;
        if (!i || n < 1)
          return [];
        for (var a = 0, l = 0, h = x(ur(i / n)); a < i; )
          h[l++] = un(t, a, a += n);
        return h;
      }
      function Vc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[i++] = l);
        }
        return a;
      }
      function jc() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = x(t - 1), e = arguments[0], i = t; i--; )
          n[i - 1] = arguments[i];
        return Wn(q(e) ? Ut(e) : [e], Ft(n, 1));
      }
      var th = Y(function(t, n) {
        return yt(t) ? Ee(t, Ft(n, 1, yt, !0)) : [];
      }), nh = Y(function(t, n) {
        var e = ln(n);
        return yt(e) && (e = r), yt(t) ? Ee(t, Ft(n, 1, yt, !0), W(e, 2)) : [];
      }), eh = Y(function(t, n) {
        var e = ln(n);
        return yt(e) && (e = r), yt(t) ? Ee(t, Ft(n, 1, yt, !0), r, e) : [];
      });
      function rh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), un(t, n < 0 ? 0 : n, i)) : [];
      }
      function ih(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function sh(t, n) {
        return t && t.length ? yr(t, W(n, 3), !0, !0) : [];
      }
      function ah(t, n) {
        return t && t.length ? yr(t, W(n, 3), !0) : [];
      }
      function oh(t, n, e, i) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = a), jf(t, n, e, i)) : [];
      }
      function wo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), Qe(t, W(n, 3), a);
      }
      function mo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i - 1;
        return e !== r && (a = Z(e), a = e < 0 ? bt(i + a, 0) : Pt(a, i - 1)), Qe(t, W(n, 3), a, !0);
      }
      function Mo(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, 1) : [];
      }
      function uh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, xn) : [];
      }
      function lh(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : Z(n), Ft(t, n)) : [];
      }
      function fh(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
          var a = t[n];
          i[a[0]] = a[1];
        }
        return i;
      }
      function Co(t) {
        return t && t.length ? t[0] : r;
      }
      function ch(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), se(t, n, a);
      }
      function hh(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 0, -1) : [];
      }
      var ph = Y(function(t) {
        var n = gt(t, Oi);
        return n.length && n[0] === t[0] ? Si(n) : [];
      }), gh = Y(function(t) {
        var n = ln(t), e = gt(t, Oi);
        return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Si(e, W(n, 2)) : [];
      }), dh = Y(function(t) {
        var n = ln(t), e = gt(t, Oi);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Si(e, r, n) : [];
      });
      function _h(t, n) {
        return t == null ? "" : hf.call(t, n);
      }
      function ln(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function vh(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i;
        return e !== r && (a = Z(e), a = a < 0 ? bt(i + a, 0) : Pt(a, i - 1)), n === n ? Yl(t, n, a) : Qe(t, na, a, !0);
      }
      function yh(t, n) {
        return t && t.length ? Ra(t, Z(n)) : r;
      }
      var wh = Y(bo);
      function bo(t, n) {
        return t && t.length && n && n.length ? Fi(t, n) : t;
      }
      function mh(t, n, e) {
        return t && t.length && n && n.length ? Fi(t, n, W(e, 2)) : t;
      }
      function Mh(t, n, e) {
        return t && t.length && n && n.length ? Fi(t, n, r, e) : t;
      }
      var Ch = Pn(function(t, n) {
        var e = t == null ? 0 : t.length, i = Mi(t, n);
        return Oa(t, gt(n, function(a) {
          return En(a, e) ? +a : a;
        }).sort(qa)), i;
      });
      function bh(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var i = -1, a = [], l = t.length;
        for (n = W(n, 3); ++i < l; ) {
          var h = t[i];
          n(h, i, t) && (e.push(h), a.push(i));
        }
        return Oa(t, a), e;
      }
      function Yi(t) {
        return t == null ? t : _f.call(t);
      }
      function xh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Z(n), e = e === r ? i : Z(e)), un(t, n, e)) : [];
      }
      function Sh(t, n) {
        return vr(t, n);
      }
      function Ah(t, n, e) {
        return Ri(t, n, W(e, 2));
      }
      function Ih(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = vr(t, n);
          if (i < e && gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Th(t, n) {
        return vr(t, n, !0);
      }
      function Fh(t, n, e) {
        return Ri(t, n, W(e, 2), !0);
      }
      function Ph(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = vr(t, n, !0) - 1;
          if (gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Eh(t) {
        return t && t.length ? Na(t) : [];
      }
      function Rh(t, n) {
        return t && t.length ? Na(t, W(n, 2)) : [];
      }
      function kh(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 1, n) : [];
      }
      function Lh(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : Z(n), un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Oh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, un(t, n < 0 ? 0 : n, i)) : [];
      }
      function Dh(t, n) {
        return t && t.length ? yr(t, W(n, 3), !1, !0) : [];
      }
      function Nh(t, n) {
        return t && t.length ? yr(t, W(n, 3)) : [];
      }
      var Wh = Y(function(t) {
        return zn(Ft(t, 1, yt, !0));
      }), Bh = Y(function(t) {
        var n = ln(t);
        return yt(n) && (n = r), zn(Ft(t, 1, yt, !0), W(n, 2));
      }), Uh = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, zn(Ft(t, 1, yt, !0), r, n);
      });
      function $h(t) {
        return t && t.length ? zn(t) : [];
      }
      function zh(t, n) {
        return t && t.length ? zn(t, W(n, 2)) : [];
      }
      function Gh(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? zn(t, r, n) : [];
      }
      function Xi(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Nn(t, function(e) {
          if (yt(e))
            return n = bt(e.length, n), !0;
        }), pi(n, function(e) {
          return gt(t, fi(e));
        });
      }
      function xo(t, n) {
        if (!(t && t.length))
          return [];
        var e = Xi(t);
        return n == null ? e : gt(e, function(i) {
          return Zt(n, r, i);
        });
      }
      var Hh = Y(function(t, n) {
        return yt(t) ? Ee(t, n) : [];
      }), qh = Y(function(t) {
        return Li(Nn(t, yt));
      }), Kh = Y(function(t) {
        var n = ln(t);
        return yt(n) && (n = r), Li(Nn(t, yt), W(n, 2));
      }), Zh = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, Li(Nn(t, yt), r, n);
      }), Jh = Y(Xi);
      function Yh(t, n) {
        return $a(t || [], n || [], Pe);
      }
      function Xh(t, n) {
        return $a(t || [], n || [], Le);
      }
      var Qh = Y(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, xo(t, e);
      });
      function So(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Vh(t, n) {
        return n(t), t;
      }
      function Ir(t, n) {
        return n(t);
      }
      var jh = Pn(function(t) {
        var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
          return Mi(l, t);
        };
        return n > 1 || this.__actions__.length || !(i instanceof j) || !En(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
          func: Ir,
          args: [a],
          thisArg: r
        }), new an(i, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function tp() {
        return So(this);
      }
      function np() {
        return new an(this.value(), this.__chain__);
      }
      function ep() {
        this.__values__ === r && (this.__values__ = Bo(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function rp() {
        return this;
      }
      function ip(t) {
        for (var n, e = this; e instanceof hr; ) {
          var i = yo(e);
          i.__index__ = 0, i.__values__ = r, n ? a.__wrapped__ = i : n = i;
          var a = i;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = t, n;
      }
      function sp() {
        var t = this.__wrapped__;
        if (t instanceof j) {
          var n = t;
          return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
            func: Ir,
            args: [Yi],
            thisArg: r
          }), new an(n, this.__chain__);
        }
        return this.thru(Yi);
      }
      function ap() {
        return Ua(this.__wrapped__, this.__actions__);
      }
      var op = wr(function(t, n, e) {
        st.call(t, e) ? ++t[e] : Tn(t, e, 1);
      });
      function up(t, n, e) {
        var i = q(t) ? js : Vf;
        return e && Ot(t, n, e) && (n = r), i(t, W(n, 3));
      }
      function lp(t, n) {
        var e = q(t) ? Nn : ba;
        return e(t, W(n, 3));
      }
      var fp = Qa(wo), cp = Qa(mo);
      function hp(t, n) {
        return Ft(Tr(t, n), 1);
      }
      function pp(t, n) {
        return Ft(Tr(t, n), xn);
      }
      function gp(t, n, e) {
        return e = e === r ? 1 : Z(e), Ft(Tr(t, n), e);
      }
      function Ao(t, n) {
        var e = q(t) ? rn : $n;
        return e(t, W(n, 3));
      }
      function Io(t, n) {
        var e = q(t) ? Rl : Ca;
        return e(t, W(n, 3));
      }
      var dp = wr(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : Tn(t, e, [n]);
      });
      function _p(t, n, e, i) {
        t = $t(t) ? t : ve(t), e = e && !i ? Z(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), kr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
      }
      var vp = Y(function(t, n, e) {
        var i = -1, a = typeof n == "function", l = $t(t) ? x(t.length) : [];
        return $n(t, function(h) {
          l[++i] = a ? Zt(n, h, e) : Re(h, n, e);
        }), l;
      }), yp = wr(function(t, n, e) {
        Tn(t, e, n);
      });
      function Tr(t, n) {
        var e = q(t) ? gt : Fa;
        return e(t, W(n, 3));
      }
      function wp(t, n, e, i) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), e = i ? r : e, q(e) || (e = e == null ? [] : [e]), ka(t, n, e));
      }
      var mp = wr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Mp(t, n, e) {
        var i = q(t) ? ui : ra, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, $n);
      }
      function Cp(t, n, e) {
        var i = q(t) ? kl : ra, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, Ca);
      }
      function bp(t, n) {
        var e = q(t) ? Nn : ba;
        return e(t, Er(W(n, 3)));
      }
      function xp(t) {
        var n = q(t) ? ya : _c;
        return n(t);
      }
      function Sp(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n);
        var i = q(t) ? Zf : vc;
        return i(t, n);
      }
      function Ap(t) {
        var n = q(t) ? Jf : wc;
        return n(t);
      }
      function Ip(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return kr(t) ? oe(t) : t.length;
        var n = Et(t);
        return n == _t || n == pt ? t.size : Ii(t).length;
      }
      function Tp(t, n, e) {
        var i = q(t) ? li : mc;
        return e && Ot(t, n, e) && (n = r), i(t, W(n, 3));
      }
      var Fp = Y(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), ka(t, Ft(n, 1), []);
      }), Fr = lf || function() {
        return Tt.Date.now();
      };
      function Pp(t, n) {
        if (typeof n != "function")
          throw new sn(g);
        return t = Z(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function To(t, n, e) {
        return n = e ? r : n, n = t && n == null ? t.length : n, Fn(t, It, r, r, r, r, n);
      }
      function Fo(t, n) {
        var e;
        if (typeof n != "function")
          throw new sn(g);
        return t = Z(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Qi = Y(function(t, n, e) {
        var i = N;
        if (e.length) {
          var a = Bn(e, de(Qi));
          i |= xt;
        }
        return Fn(t, i, n, e, a);
      }), Po = Y(function(t, n, e) {
        var i = N | K;
        if (e.length) {
          var a = Bn(e, de(Po));
          i |= xt;
        }
        return Fn(n, i, t, e, a);
      });
      function Eo(t, n, e) {
        n = e ? r : n;
        var i = Fn(t, Q, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function Ro(t, n, e) {
        n = e ? r : n;
        var i = Fn(t, et, r, r, r, r, r, n);
        return i.placeholder = Ro.placeholder, i;
      }
      function ko(t, n, e) {
        var i, a, l, h, d, w, A = 0, I = !1, T = !1, E = !0;
        if (typeof t != "function")
          throw new sn(g);
        n = fn(n) || 0, dt(e) && (I = !!e.leading, T = "maxWait" in e, l = T ? bt(fn(e.maxWait) || 0, n) : l, E = "trailing" in e ? !!e.trailing : E);
        function D(wt) {
          var dn = i, Ln = a;
          return i = a = r, A = wt, h = t.apply(Ln, dn), h;
        }
        function B(wt) {
          return A = wt, d = Ne(V, n), I ? D(wt) : h;
        }
        function J(wt) {
          var dn = wt - w, Ln = wt - A, Vo = n - dn;
          return T ? Pt(Vo, l - Ln) : Vo;
        }
        function U(wt) {
          var dn = wt - w, Ln = wt - A;
          return w === r || dn >= n || dn < 0 || T && Ln >= l;
        }
        function V() {
          var wt = Fr();
          if (U(wt))
            return tt(wt);
          d = Ne(V, J(wt));
        }
        function tt(wt) {
          return d = r, E && i ? D(wt) : (i = a = r, h);
        }
        function Qt() {
          d !== r && za(d), A = 0, i = w = a = d = r;
        }
        function Dt() {
          return d === r ? h : tt(Fr());
        }
        function Vt() {
          var wt = Fr(), dn = U(wt);
          if (i = arguments, a = this, w = wt, dn) {
            if (d === r)
              return B(w);
            if (T)
              return za(d), d = Ne(V, n), D(w);
          }
          return d === r && (d = Ne(V, n)), h;
        }
        return Vt.cancel = Qt, Vt.flush = Dt, Vt;
      }
      var Ep = Y(function(t, n) {
        return Ma(t, 1, n);
      }), Rp = Y(function(t, n, e) {
        return Ma(t, fn(n) || 0, e);
      });
      function kp(t) {
        return Fn(t, tn);
      }
      function Pr(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new sn(g);
        var e = function() {
          var i = arguments, a = n ? n.apply(this, i) : i[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var h = t.apply(this, i);
          return e.cache = l.set(a, h) || l, h;
        };
        return e.cache = new (Pr.Cache || In)(), e;
      }
      Pr.Cache = In;
      function Er(t) {
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
      function Lp(t) {
        return Fo(2, t);
      }
      var Op = Mc(function(t, n) {
        n = n.length == 1 && q(n[0]) ? gt(n[0], Jt(W())) : gt(Ft(n, 1), Jt(W()));
        var e = n.length;
        return Y(function(i) {
          for (var a = -1, l = Pt(i.length, e); ++a < l; )
            i[a] = n[a].call(this, i[a]);
          return Zt(t, this, i);
        });
      }), Vi = Y(function(t, n) {
        var e = Bn(n, de(Vi));
        return Fn(t, xt, r, n, e);
      }), Lo = Y(function(t, n) {
        var e = Bn(n, de(Lo));
        return Fn(t, At, r, n, e);
      }), Dp = Pn(function(t, n) {
        return Fn(t, Ht, r, r, r, n);
      });
      function Np(t, n) {
        if (typeof t != "function")
          throw new sn(g);
        return n = n === r ? n : Z(n), Y(t, n);
      }
      function Wp(t, n) {
        if (typeof t != "function")
          throw new sn(g);
        return n = n == null ? 0 : bt(Z(n), 0), Y(function(e) {
          var i = e[n], a = Hn(e, 0, n);
          return i && Wn(a, i), Zt(t, this, a);
        });
      }
      function Bp(t, n, e) {
        var i = !0, a = !0;
        if (typeof t != "function")
          throw new sn(g);
        return dt(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), ko(t, n, {
          leading: i,
          maxWait: n,
          trailing: a
        });
      }
      function Up(t) {
        return To(t, 1);
      }
      function $p(t, n) {
        return Vi(Di(n), t);
      }
      function zp() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function Gp(t) {
        return on(t, O);
      }
      function Hp(t, n) {
        return n = typeof n == "function" ? n : r, on(t, O, n);
      }
      function qp(t) {
        return on(t, y | O);
      }
      function Kp(t, n) {
        return n = typeof n == "function" ? n : r, on(t, y | O, n);
      }
      function Zp(t, n) {
        return n == null || ma(t, n, St(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Jp = br(xi), Yp = br(function(t, n) {
        return t >= n;
      }), ee = Aa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Aa : function(t) {
        return vt(t) && st.call(t, "callee") && !ha.call(t, "callee");
      }, q = x.isArray, Xp = Zs ? Jt(Zs) : ic;
      function $t(t) {
        return t != null && Rr(t.length) && !Rn(t);
      }
      function yt(t) {
        return vt(t) && $t(t);
      }
      function Qp(t) {
        return t === !0 || t === !1 || vt(t) && Lt(t) == lt;
      }
      var qn = cf || ls, Vp = Js ? Jt(Js) : sc;
      function jp(t) {
        return vt(t) && t.nodeType === 1 && !We(t);
      }
      function tg(t) {
        if (t == null)
          return !0;
        if ($t(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || qn(t) || _e(t) || ee(t)))
          return !t.length;
        var n = Et(t);
        if (n == _t || n == pt)
          return !t.size;
        if (De(t))
          return !Ii(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function ng(t, n) {
        return ke(t, n);
      }
      function eg(t, n, e) {
        e = typeof e == "function" ? e : r;
        var i = e ? e(t, n) : r;
        return i === r ? ke(t, n, r, e) : !!i;
      }
      function ji(t) {
        if (!vt(t))
          return !1;
        var n = Lt(t);
        return n == Rt || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
      }
      function rg(t) {
        return typeof t == "number" && ga(t);
      }
      function Rn(t) {
        if (!dt(t))
          return !1;
        var n = Lt(t);
        return n == Wt || n == yn || n == ot || n == cn;
      }
      function Oo(t) {
        return typeof t == "number" && t == Z(t);
      }
      function Rr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vn;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var Do = Ys ? Jt(Ys) : oc;
      function ig(t, n) {
        return t === n || Ai(t, n, Gi(n));
      }
      function sg(t, n, e) {
        return e = typeof e == "function" ? e : r, Ai(t, n, Gi(n), e);
      }
      function ag(t) {
        return No(t) && t != +t;
      }
      function og(t) {
        if (Hc(t))
          throw new H(p);
        return Ia(t);
      }
      function ug(t) {
        return t === null;
      }
      function lg(t) {
        return t == null;
      }
      function No(t) {
        return typeof t == "number" || vt(t) && Lt(t) == kt;
      }
      function We(t) {
        if (!vt(t) || Lt(t) != Mt)
          return !1;
        var n = sr(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && nr.call(e) == sf;
      }
      var ts = Xs ? Jt(Xs) : uc;
      function fg(t) {
        return Oo(t) && t >= -vn && t <= vn;
      }
      var Wo = Qs ? Jt(Qs) : lc;
      function kr(t) {
        return typeof t == "string" || !q(t) && vt(t) && Lt(t) == wn;
      }
      function Xt(t) {
        return typeof t == "symbol" || vt(t) && Lt(t) == Ke;
      }
      var _e = Vs ? Jt(Vs) : fc;
      function cg(t) {
        return t === r;
      }
      function hg(t) {
        return vt(t) && Et(t) == Ce;
      }
      function pg(t) {
        return vt(t) && Lt(t) == Tu;
      }
      var gg = br(Ti), dg = br(function(t, n) {
        return t <= n;
      });
      function Bo(t) {
        if (!t)
          return [];
        if ($t(t))
          return kr(t) ? hn(t) : Ut(t);
        if (Se && t[Se])
          return Kl(t[Se]());
        var n = Et(t), e = n == _t ? di : n == pt ? Ve : ve;
        return e(t);
      }
      function kn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = fn(t), t === xn || t === -xn) {
          var n = t < 0 ? -1 : 1;
          return n * qe;
        }
        return t === t ? t : 0;
      }
      function Z(t) {
        var n = kn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function Uo(t) {
        return t ? Vn(Z(t), 0, k) : 0;
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
        t = ia(t);
        var e = Yu.test(t);
        return e || Qu.test(t) ? Fl(t.slice(2), e ? 2 : 8) : Ju.test(t) ? Sn : +t;
      }
      function $o(t) {
        return Mn(t, zt(t));
      }
      function _g(t) {
        return t ? Vn(Z(t), -vn, vn) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Yt(t);
      }
      var vg = pe(function(t, n) {
        if (De(n) || $t(n)) {
          Mn(n, St(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Pe(t, e, n[e]);
      }), zo = pe(function(t, n) {
        Mn(n, zt(n), t);
      }), Lr = pe(function(t, n, e, i) {
        Mn(n, zt(n), t, i);
      }), yg = pe(function(t, n, e, i) {
        Mn(n, St(n), t, i);
      }), wg = Pn(Mi);
      function mg(t, n) {
        var e = he(t);
        return n == null ? e : wa(e, n);
      }
      var Mg = Y(function(t, n) {
        t = at(t);
        var e = -1, i = n.length, a = i > 2 ? n[2] : r;
        for (a && Ot(n[0], n[1], a) && (i = 1); ++e < i; )
          for (var l = n[e], h = zt(l), d = -1, w = h.length; ++d < w; ) {
            var A = h[d], I = t[A];
            (I === r || gn(I, le[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), Cg = Y(function(t) {
        return t.push(r, io), Zt(Go, r, t);
      });
      function bg(t, n) {
        return ta(t, W(n, 3), mn);
      }
      function xg(t, n) {
        return ta(t, W(n, 3), bi);
      }
      function Sg(t, n) {
        return t == null ? t : Ci(t, W(n, 3), zt);
      }
      function Ag(t, n) {
        return t == null ? t : xa(t, W(n, 3), zt);
      }
      function Ig(t, n) {
        return t && mn(t, W(n, 3));
      }
      function Tg(t, n) {
        return t && bi(t, W(n, 3));
      }
      function Fg(t) {
        return t == null ? [] : dr(t, St(t));
      }
      function Pg(t) {
        return t == null ? [] : dr(t, zt(t));
      }
      function ns(t, n, e) {
        var i = t == null ? r : jn(t, n);
        return i === r ? e : i;
      }
      function Eg(t, n) {
        return t != null && oo(t, n, tc);
      }
      function es(t, n) {
        return t != null && oo(t, n, nc);
      }
      var Rg = ja(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = er.call(n)), t[n] = e;
      }, is(Gt)), kg = ja(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = er.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, W), Lg = Y(Re);
      function St(t) {
        return $t(t) ? va(t) : Ii(t);
      }
      function zt(t) {
        return $t(t) ? va(t, !0) : cc(t);
      }
      function Og(t, n) {
        var e = {};
        return n = W(n, 3), mn(t, function(i, a, l) {
          Tn(e, n(i, a, l), i);
        }), e;
      }
      function Dg(t, n) {
        var e = {};
        return n = W(n, 3), mn(t, function(i, a, l) {
          Tn(e, a, n(i, a, l));
        }), e;
      }
      var Ng = pe(function(t, n, e) {
        _r(t, n, e);
      }), Go = pe(function(t, n, e, i) {
        _r(t, n, e, i);
      }), Wg = Pn(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var i = !1;
        n = gt(n, function(l) {
          return l = Gn(l, t), i || (i = l.length > 1), l;
        }), Mn(t, $i(t), e), i && (e = on(e, y | P | O, Rc));
        for (var a = n.length; a--; )
          ki(e, n[a]);
        return e;
      });
      function Bg(t, n) {
        return Ho(t, Er(W(n)));
      }
      var Ug = Pn(function(t, n) {
        return t == null ? {} : pc(t, n);
      });
      function Ho(t, n) {
        if (t == null)
          return {};
        var e = gt($i(t), function(i) {
          return [i];
        });
        return n = W(n), La(t, e, function(i, a) {
          return n(i, a[0]);
        });
      }
      function $g(t, n, e) {
        n = Gn(n, t);
        var i = -1, a = n.length;
        for (a || (a = 1, t = r); ++i < a; ) {
          var l = t == null ? r : t[Cn(n[i])];
          l === r && (i = a, l = e), t = Rn(l) ? l.call(t) : l;
        }
        return t;
      }
      function zg(t, n, e) {
        return t == null ? t : Le(t, n, e);
      }
      function Gg(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Le(t, n, e, i);
      }
      var qo = eo(St), Ko = eo(zt);
      function Hg(t, n, e) {
        var i = q(t), a = i || qn(t) || _e(t);
        if (n = W(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = i ? new l() : [] : dt(t) ? e = Rn(l) ? he(sr(t)) : {} : e = {};
        }
        return (a ? rn : mn)(t, function(h, d, w) {
          return n(e, h, d, w);
        }), e;
      }
      function qg(t, n) {
        return t == null ? !0 : ki(t, n);
      }
      function Kg(t, n, e) {
        return t == null ? t : Ba(t, n, Di(e));
      }
      function Zg(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Ba(t, n, Di(e), i);
      }
      function ve(t) {
        return t == null ? [] : gi(t, St(t));
      }
      function Jg(t) {
        return t == null ? [] : gi(t, zt(t));
      }
      function Yg(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Vn(fn(t), n, e);
      }
      function Xg(t, n, e) {
        return n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), t = fn(t), ec(t, n, e);
      }
      function Qg(t, n, e) {
        if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = kn(t), n === r ? (n = t, t = 0) : n = kn(n)), t > n) {
          var i = t;
          t = n, n = i;
        }
        if (e || t % 1 || n % 1) {
          var a = da();
          return Pt(t + a * (n - t + Tl("1e-" + ((a + "").length - 1))), n);
        }
        return Pi(t, n);
      }
      var Vg = ge(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? Zo(n) : n);
      });
      function Zo(t) {
        return rs(it(t).toLowerCase());
      }
      function Jo(t) {
        return t = it(t), t && t.replace(ju, $l).replace(yl, "");
      }
      function jg(t, n, e) {
        t = it(t), n = Yt(n);
        var i = t.length;
        e = e === r ? i : Vn(Z(e), 0, i);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function td(t) {
        return t = it(t), t && ku.test(t) ? t.replace(xs, zl) : t;
      }
      function nd(t) {
        return t = it(t), t && Bu.test(t) ? t.replace(Vr, "\\$&") : t;
      }
      var ed = ge(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), rd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), id = Xa("toLowerCase");
      function sd(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        if (!n || i >= n)
          return t;
        var a = (n - i) / 2;
        return Cr(lr(a), e) + t + Cr(ur(a), e);
      }
      function ad(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? t + Cr(n - i, e) : t;
      }
      function od(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? Cr(n - i, e) + t : t;
      }
      function ud(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), df(it(t).replace(jr, ""), n || 0);
      }
      function ld(t, n, e) {
        return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n), Ei(it(t), n);
      }
      function fd() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var cd = ge(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function hd(t, n, e) {
        return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !ts(n)) && (n = Yt(n), !n && ae(t)) ? Hn(hn(t), 0, e) : t.split(n, e)) : [];
      }
      var pd = ge(function(t, n, e) {
        return t + (e ? " " : "") + rs(n);
      });
      function gd(t, n, e) {
        return t = it(t), e = e == null ? 0 : Vn(Z(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
      }
      function dd(t, n, e) {
        var i = u.templateSettings;
        e && Ot(t, n, e) && (n = r), t = it(t), n = Lr({}, n, i, ro);
        var a = Lr({}, n.imports, i.imports, ro), l = St(a), h = gi(a, l), d, w, A = 0, I = n.interpolate || Ze, T = "__p += '", E = _i(
          (n.escape || Ze).source + "|" + I.source + "|" + (I === Ss ? Zu : Ze).source + "|" + (n.evaluate || Ze).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++bl + "]") + `
`;
        t.replace(E, function(U, V, tt, Qt, Dt, Vt) {
          return tt || (tt = Qt), T += t.slice(A, Vt).replace(tl, Gl), V && (d = !0, T += `' +
__e(` + V + `) +
'`), Dt && (w = !0, T += `';
` + Dt + `;
__p += '`), tt && (T += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), A = Vt + U.length, U;
        }), T += `';
`;
        var B = st.call(n, "variable") && n.variable;
        if (!B)
          T = `with (obj) {
` + T + `
}
`;
        else if (qu.test(B))
          throw new H(_);
        T = (w ? T.replace(Fu, "") : T).replace(Pu, "$1").replace(Eu, "$1;"), T = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
        var J = Xo(function() {
          return rt(l, D + "return " + T).apply(r, h);
        });
        if (J.source = T, ji(J))
          throw J;
        return J;
      }
      function _d(t) {
        return it(t).toLowerCase();
      }
      function vd(t) {
        return it(t).toUpperCase();
      }
      function yd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return ia(t);
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = hn(n), l = sa(i, a), h = aa(i, a) + 1;
        return Hn(i, l, h).join("");
      }
      function wd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, ua(t) + 1);
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = aa(i, hn(n)) + 1;
        return Hn(i, 0, a).join("");
      }
      function md(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(jr, "");
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = sa(i, hn(n));
        return Hn(i, a).join("");
      }
      function Md(t, n) {
        var e = qt, i = me;
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
        var w = h ? Hn(h, 0, d).join("") : t.slice(0, d);
        if (a === r)
          return w + i;
        if (h && (d += w.length - d), ts(a)) {
          if (t.slice(d).search(a)) {
            var A, I = w;
            for (a.global || (a = _i(a.source, it(As.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var T = A.index;
            w = w.slice(0, T === r ? d : T);
          }
        } else if (t.indexOf(Yt(a), d) != d) {
          var E = w.lastIndexOf(a);
          E > -1 && (w = w.slice(0, E));
        }
        return w + i;
      }
      function Cd(t) {
        return t = it(t), t && Ru.test(t) ? t.replace(bs, Xl) : t;
      }
      var bd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), rs = Xa("toUpperCase");
      function Yo(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? ql(t) ? jl(t) : Dl(t) : t.match(n) || [];
      }
      var Xo = Y(function(t, n) {
        try {
          return Zt(t, r, n);
        } catch (e) {
          return ji(e) ? e : new H(e);
        }
      }), xd = Pn(function(t, n) {
        return rn(n, function(e) {
          e = Cn(e), Tn(t, e, Qi(t[e], t));
        }), t;
      });
      function Sd(t) {
        var n = t == null ? 0 : t.length, e = W();
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
      function Ad(t) {
        return Qf(on(t, y));
      }
      function is(t) {
        return function() {
          return t;
        };
      }
      function Id(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Td = Va(), Fd = Va(!0);
      function Gt(t) {
        return t;
      }
      function ss(t) {
        return Ta(typeof t == "function" ? t : on(t, y));
      }
      function Pd(t) {
        return Pa(on(t, y));
      }
      function Ed(t, n) {
        return Ea(t, on(n, y));
      }
      var Rd = Y(function(t, n) {
        return function(e) {
          return Re(e, t, n);
        };
      }), kd = Y(function(t, n) {
        return function(e) {
          return Re(t, e, n);
        };
      });
      function as(t, n, e) {
        var i = St(n), a = dr(n, i);
        e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = dr(n, St(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
        return rn(a, function(d) {
          var w = n[d];
          t[d] = w, h && (t.prototype[d] = function() {
            var A = this.__chain__;
            if (l || A) {
              var I = t(this.__wrapped__), T = I.__actions__ = Ut(this.__actions__);
              return T.push({ func: w, args: arguments, thisArg: t }), I.__chain__ = A, I;
            }
            return w.apply(t, Wn([this.value()], arguments));
          });
        }), t;
      }
      function Ld() {
        return Tt._ === this && (Tt._ = af), this;
      }
      function os() {
      }
      function Od(t) {
        return t = Z(t), Y(function(n) {
          return Ra(n, t);
        });
      }
      var Dd = Wi(gt), Nd = Wi(js), Wd = Wi(li);
      function Qo(t) {
        return qi(t) ? fi(Cn(t)) : gc(t);
      }
      function Bd(t) {
        return function(n) {
          return t == null ? r : jn(t, n);
        };
      }
      var Ud = to(), $d = to(!0);
      function us() {
        return [];
      }
      function ls() {
        return !1;
      }
      function zd() {
        return {};
      }
      function Gd() {
        return "";
      }
      function Hd() {
        return !0;
      }
      function qd(t, n) {
        if (t = Z(t), t < 1 || t > vn)
          return [];
        var e = k, i = Pt(t, k);
        n = W(n), t -= k;
        for (var a = pi(i, n); ++e < t; )
          n(e);
        return a;
      }
      function Kd(t) {
        return q(t) ? gt(t, Cn) : Xt(t) ? [t] : Ut(vo(it(t)));
      }
      function Zd(t) {
        var n = ++rf;
        return it(t) + n;
      }
      var Jd = Mr(function(t, n) {
        return t + n;
      }, 0), Yd = Bi("ceil"), Xd = Mr(function(t, n) {
        return t / n;
      }, 1), Qd = Bi("floor");
      function Vd(t) {
        return t && t.length ? gr(t, Gt, xi) : r;
      }
      function jd(t, n) {
        return t && t.length ? gr(t, W(n, 2), xi) : r;
      }
      function t0(t) {
        return ea(t, Gt);
      }
      function n0(t, n) {
        return ea(t, W(n, 2));
      }
      function e0(t) {
        return t && t.length ? gr(t, Gt, Ti) : r;
      }
      function r0(t, n) {
        return t && t.length ? gr(t, W(n, 2), Ti) : r;
      }
      var i0 = Mr(function(t, n) {
        return t * n;
      }, 1), s0 = Bi("round"), a0 = Mr(function(t, n) {
        return t - n;
      }, 0);
      function o0(t) {
        return t && t.length ? hi(t, Gt) : 0;
      }
      function u0(t, n) {
        return t && t.length ? hi(t, W(n, 2)) : 0;
      }
      return u.after = Pp, u.ary = To, u.assign = vg, u.assignIn = zo, u.assignInWith = Lr, u.assignWith = yg, u.at = wg, u.before = Fo, u.bind = Qi, u.bindAll = xd, u.bindKey = Po, u.castArray = zp, u.chain = So, u.chunk = Qc, u.compact = Vc, u.concat = jc, u.cond = Sd, u.conforms = Ad, u.constant = is, u.countBy = op, u.create = mg, u.curry = Eo, u.curryRight = Ro, u.debounce = ko, u.defaults = Mg, u.defaultsDeep = Cg, u.defer = Ep, u.delay = Rp, u.difference = th, u.differenceBy = nh, u.differenceWith = eh, u.drop = rh, u.dropRight = ih, u.dropRightWhile = sh, u.dropWhile = ah, u.fill = oh, u.filter = lp, u.flatMap = hp, u.flatMapDeep = pp, u.flatMapDepth = gp, u.flatten = Mo, u.flattenDeep = uh, u.flattenDepth = lh, u.flip = kp, u.flow = Td, u.flowRight = Fd, u.fromPairs = fh, u.functions = Fg, u.functionsIn = Pg, u.groupBy = dp, u.initial = hh, u.intersection = ph, u.intersectionBy = gh, u.intersectionWith = dh, u.invert = Rg, u.invertBy = kg, u.invokeMap = vp, u.iteratee = ss, u.keyBy = yp, u.keys = St, u.keysIn = zt, u.map = Tr, u.mapKeys = Og, u.mapValues = Dg, u.matches = Pd, u.matchesProperty = Ed, u.memoize = Pr, u.merge = Ng, u.mergeWith = Go, u.method = Rd, u.methodOf = kd, u.mixin = as, u.negate = Er, u.nthArg = Od, u.omit = Wg, u.omitBy = Bg, u.once = Lp, u.orderBy = wp, u.over = Dd, u.overArgs = Op, u.overEvery = Nd, u.overSome = Wd, u.partial = Vi, u.partialRight = Lo, u.partition = mp, u.pick = Ug, u.pickBy = Ho, u.property = Qo, u.propertyOf = Bd, u.pull = wh, u.pullAll = bo, u.pullAllBy = mh, u.pullAllWith = Mh, u.pullAt = Ch, u.range = Ud, u.rangeRight = $d, u.rearg = Dp, u.reject = bp, u.remove = bh, u.rest = Np, u.reverse = Yi, u.sampleSize = Sp, u.set = zg, u.setWith = Gg, u.shuffle = Ap, u.slice = xh, u.sortBy = Fp, u.sortedUniq = Eh, u.sortedUniqBy = Rh, u.split = hd, u.spread = Wp, u.tail = kh, u.take = Lh, u.takeRight = Oh, u.takeRightWhile = Dh, u.takeWhile = Nh, u.tap = Vh, u.throttle = Bp, u.thru = Ir, u.toArray = Bo, u.toPairs = qo, u.toPairsIn = Ko, u.toPath = Kd, u.toPlainObject = $o, u.transform = Hg, u.unary = Up, u.union = Wh, u.unionBy = Bh, u.unionWith = Uh, u.uniq = $h, u.uniqBy = zh, u.uniqWith = Gh, u.unset = qg, u.unzip = Xi, u.unzipWith = xo, u.update = Kg, u.updateWith = Zg, u.values = ve, u.valuesIn = Jg, u.without = Hh, u.words = Yo, u.wrap = $p, u.xor = qh, u.xorBy = Kh, u.xorWith = Zh, u.zip = Jh, u.zipObject = Yh, u.zipObjectDeep = Xh, u.zipWith = Qh, u.entries = qo, u.entriesIn = Ko, u.extend = zo, u.extendWith = Lr, as(u, u), u.add = Jd, u.attempt = Xo, u.camelCase = Vg, u.capitalize = Zo, u.ceil = Yd, u.clamp = Yg, u.clone = Gp, u.cloneDeep = qp, u.cloneDeepWith = Kp, u.cloneWith = Hp, u.conformsTo = Zp, u.deburr = Jo, u.defaultTo = Id, u.divide = Xd, u.endsWith = jg, u.eq = gn, u.escape = td, u.escapeRegExp = nd, u.every = up, u.find = fp, u.findIndex = wo, u.findKey = bg, u.findLast = cp, u.findLastIndex = mo, u.findLastKey = xg, u.floor = Qd, u.forEach = Ao, u.forEachRight = Io, u.forIn = Sg, u.forInRight = Ag, u.forOwn = Ig, u.forOwnRight = Tg, u.get = ns, u.gt = Jp, u.gte = Yp, u.has = Eg, u.hasIn = es, u.head = Co, u.identity = Gt, u.includes = _p, u.indexOf = ch, u.inRange = Xg, u.invoke = Lg, u.isArguments = ee, u.isArray = q, u.isArrayBuffer = Xp, u.isArrayLike = $t, u.isArrayLikeObject = yt, u.isBoolean = Qp, u.isBuffer = qn, u.isDate = Vp, u.isElement = jp, u.isEmpty = tg, u.isEqual = ng, u.isEqualWith = eg, u.isError = ji, u.isFinite = rg, u.isFunction = Rn, u.isInteger = Oo, u.isLength = Rr, u.isMap = Do, u.isMatch = ig, u.isMatchWith = sg, u.isNaN = ag, u.isNative = og, u.isNil = lg, u.isNull = ug, u.isNumber = No, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = We, u.isRegExp = ts, u.isSafeInteger = fg, u.isSet = Wo, u.isString = kr, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = cg, u.isWeakMap = hg, u.isWeakSet = pg, u.join = _h, u.kebabCase = ed, u.last = ln, u.lastIndexOf = vh, u.lowerCase = rd, u.lowerFirst = id, u.lt = gg, u.lte = dg, u.max = Vd, u.maxBy = jd, u.mean = t0, u.meanBy = n0, u.min = e0, u.minBy = r0, u.stubArray = us, u.stubFalse = ls, u.stubObject = zd, u.stubString = Gd, u.stubTrue = Hd, u.multiply = i0, u.nth = yh, u.noConflict = Ld, u.noop = os, u.now = Fr, u.pad = sd, u.padEnd = ad, u.padStart = od, u.parseInt = ud, u.random = Qg, u.reduce = Mp, u.reduceRight = Cp, u.repeat = ld, u.replace = fd, u.result = $g, u.round = s0, u.runInContext = v, u.sample = xp, u.size = Ip, u.snakeCase = cd, u.some = Tp, u.sortedIndex = Sh, u.sortedIndexBy = Ah, u.sortedIndexOf = Ih, u.sortedLastIndex = Th, u.sortedLastIndexBy = Fh, u.sortedLastIndexOf = Ph, u.startCase = pd, u.startsWith = gd, u.subtract = a0, u.sum = o0, u.sumBy = u0, u.template = dd, u.times = qd, u.toFinite = kn, u.toInteger = Z, u.toLength = Uo, u.toLower = _d, u.toNumber = fn, u.toSafeInteger = _g, u.toString = it, u.toUpper = vd, u.trim = yd, u.trimEnd = wd, u.trimStart = md, u.truncate = Md, u.unescape = Cd, u.uniqueId = Zd, u.upperCase = bd, u.upperFirst = rs, u.each = Ao, u.eachRight = Io, u.first = Co, as(u, function() {
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
        var e = n + 1, i = e == Me || e == zr;
        j.prototype[t] = function(a) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: W(a, 3),
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
          return Re(e, t, n);
        });
      }), j.prototype.reject = function(t) {
        return this.filter(Er(W(t)));
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
          var h = this.__wrapped__, d = i ? [1] : arguments, w = h instanceof j, A = d[0], I = w || q(h), T = function(V) {
            var tt = a.apply(u, Wn([V], d));
            return i && E ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (w = I = !1);
          var E = this.__chain__, D = !!this.__actions__.length, B = l && !E, J = w && !D;
          if (!l && I) {
            h = J ? h : new j(this);
            var U = t.apply(h, d);
            return U.__actions__.push({ func: Ir, args: [T], thisArg: r }), new an(U, E);
          }
          return B && J ? t.apply(this, d) : (U = this.thru(T), B ? i ? U.value()[0] : U.value() : U);
        });
      }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = je[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
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
      }), ce[mr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = Cf, j.prototype.reverse = bf, j.prototype.value = xf, u.prototype.at = jh, u.prototype.chain = tp, u.prototype.commit = np, u.prototype.next = ep, u.prototype.plant = ip, u.prototype.reverse = sp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ap, u.prototype.first = u.prototype.head, Se && (u.prototype[Se] = rp), u;
    }, ue = tf();
    Jn ? ((Jn.exports = ue)._ = ue, si._ = ue) : Tt._ = ue;
  }).call(Be);
})(Nr, Nr.exports);
var uu = Nr.exports;
const z = /* @__PURE__ */ ou(uu);
var ds = { exports: {} }, fs, jo;
function c0() {
  if (jo) return fs;
  jo = 1;
  var c = 1e3, s = c * 60, r = s * 60, o = r * 24, f = o * 7, p = o * 365.25;
  fs = function(b, y) {
    y = y || {};
    var P = typeof b;
    if (P === "string" && b.length > 0)
      return g(b);
    if (P === "number" && isFinite(b))
      return y.long ? M(b) : _(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function g(b) {
    if (b = String(b), !(b.length > 100)) {
      var y = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (y) {
        var P = parseFloat(y[1]), O = (y[2] || "ms").toLowerCase();
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
    var y = Math.abs(b);
    return y >= o ? Math.round(b / o) + "d" : y >= r ? Math.round(b / r) + "h" : y >= s ? Math.round(b / s) + "m" : y >= c ? Math.round(b / c) + "s" : b + "ms";
  }
  function M(b) {
    var y = Math.abs(b);
    return y >= o ? C(b, y, o, "day") : y >= r ? C(b, y, r, "hour") : y >= s ? C(b, y, s, "minute") : y >= c ? C(b, y, c, "second") : b + " ms";
  }
  function C(b, y, P, O) {
    var R = y >= P * 1.5;
    return Math.round(b / P) + " " + O + (R ? "s" : "");
  }
  return fs;
}
function h0(c) {
  r.debug = r, r.default = r, r.coerce = M, r.disable = p, r.enable = f, r.enabled = g, r.humanize = c0(), r.destroy = C, Object.keys(c).forEach((b) => {
    r[b] = c[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function s(b) {
    let y = 0;
    for (let P = 0; P < b.length; P++)
      y = (y << 5) - y + b.charCodeAt(P), y |= 0;
    return r.colors[Math.abs(y) % r.colors.length];
  }
  r.selectColor = s;
  function r(b) {
    let y, P = null, O, R;
    function F(...N) {
      if (!F.enabled)
        return;
      const K = F, X = Number(/* @__PURE__ */ new Date()), Q = X - (y || X);
      K.diff = Q, K.prev = y, K.curr = X, y = X, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
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
  function o(b, y) {
    const P = r(this.namespace + (typeof y > "u" ? ":" : y) + b);
    return P.log = this.log, P;
  }
  function f(b) {
    r.save(b), r.namespaces = b, r.names = [], r.skips = [];
    let y;
    const P = (typeof b == "string" ? b : "").split(/[\s,]+/), O = P.length;
    for (y = 0; y < O; y++)
      P[y] && (b = P[y].replace(/\*/g, ".*?"), b[0] === "-" ? r.skips.push(new RegExp("^" + b.slice(1) + "$")) : r.names.push(new RegExp("^" + b + "$")));
  }
  function p() {
    const b = [
      ...r.names.map(_),
      ...r.skips.map(_).map((y) => "-" + y)
    ].join(",");
    return r.enable(""), b;
  }
  function g(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let y, P;
    for (y = 0, P = r.skips.length; y < P; y++)
      if (r.skips[y].test(b))
        return !1;
    for (y = 0, P = r.names.length; y < P; y++)
      if (r.names[y].test(b))
        return !0;
    return !1;
  }
  function _(b) {
    return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function M(b) {
    return b instanceof Error ? b.stack || b.message : b;
  }
  function C() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var p0 = h0;
(function(c, s) {
  s.formatArgs = o, s.save = f, s.load = p, s.useColors = r, s.storage = g(), s.destroy = /* @__PURE__ */ (() => {
    let M = !1;
    return () => {
      M || (M = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
    let M;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (M = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(M[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function o(M) {
    if (M[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + M[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
      return;
    const C = "color: " + this.color;
    M.splice(1, 0, C, "color: inherit");
    let b = 0, y = 0;
    M[0].replace(/%[a-zA-Z%]/g, (P) => {
      P !== "%%" && (b++, P === "%c" && (y = b));
    }), M.splice(y, 0, C);
  }
  s.log = console.debug || console.log || (() => {
  });
  function f(M) {
    try {
      M ? s.storage.setItem("debug", M) : s.storage.removeItem("debug");
    } catch {
    }
  }
  function p() {
    let M;
    try {
      M = s.storage.getItem("debug");
    } catch {
    }
    return !M && typeof process < "u" && "env" in process && (M = process.env.DEBUG), M;
  }
  function g() {
    try {
      return localStorage;
    } catch {
    }
  }
  c.exports = p0(s);
  const { formatters: _ } = c.exports;
  _.j = function(M) {
    try {
      return JSON.stringify(M);
    } catch (C) {
      return "[UnexpectedJSONParseError]: " + C.message;
    }
  };
})(ds, ds.exports);
var g0 = ds.exports;
const d0 = /* @__PURE__ */ ou(g0), cs = {};
function Zn(c) {
  if (!cs[c]) {
    const s = d0("ultraPacer:core");
    s(`loading debug for namespace "${c}"`), cs[c] = s.extend(c);
  }
  return cs[c];
}
function Nt(c, s = 0) {
  return Math.round(c * 10 ** s) / 10 ** s;
}
function ye(c, s, r, o, f) {
  return r + (f - c) / (s - c) * (o - r);
}
function lu(c, s, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < c[f])
      p.push(s[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[o]; )
        f++;
      f === c.length - 1 || r[o] === c[f] ? p.push(s[f]) : p.push(ye(c[f], c[f + 1], s[f], s[f + 1], r[o]));
    }
  return p;
}
function fu(c) {
  let s, r, o, f, p = 0, g = 0, _ = 0, M = 0, C = 0;
  for (s = 0; s < c.length; s++)
    r = c[s][0], o = c[s][1], f = c[s][2], C += f, p += f * r, _ += f * (r * r), g += f * o, M += f * (r * o);
  const b = (g * _ - p * M) / (C * _ - p * p);
  return [(C * M - p * g) / (C * _ - p * p), b];
}
function cu(c, s, r, o) {
  let f = 0, p = 0;
  const g = [];
  return r.forEach((_) => {
    for (; c[f] < _ - o; )
      f++;
    for (f > 0 && c[f] >= _ && f--; p < c.length - 1 && c[p + 1] <= _ + o; )
      p++;
    p < c.length - 1 && c[p] <= _ && p++;
    const M = Math.max(o, Math.abs(_ - c[f]) + 1e-3, Math.abs(_ - c[p]) + 1e-3), C = [];
    let b = 0;
    for (let y = f; y <= p; y++)
      b = (1 - (Math.abs(_ - c[y]) / M) ** 3) ** 3, C.push([c[y], s[y], b]);
    g.push(fu(C));
  }), g;
}
function ws(c, s, r) {
  return Nt(c, r) < Nt(s, r);
}
function _0(c, s, r) {
  return Nt(c, r) > Nt(s, r);
}
function we(c, s, r) {
  return Nt(c, r) <= Nt(s, r);
}
function Ur(c, s, r) {
  return Nt(c, r) >= Nt(s, r);
}
function $e(c, s, r) {
  return Nt(c, r) === Nt(s, r);
}
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: ye,
  interpArray: lu,
  linearRegression: fu,
  req: $e,
  rgt: _0,
  rgte: Ur,
  rlt: ws,
  rlte: we,
  round: Nt,
  wlslr: cu
}, Symbol.toStringTag, { value: "Module" }));
class ze extends Error {
  constructor(r, o) {
    super(r);
    m(this, "field");
    this.name = "MissingDataError", this.field = o;
  }
}
class bn {
  constructor(s) {
    m(this, "_altitude", 1);
    m(this, "_grade", 1);
    m(this, "_terrain", 1);
    m(this, "_heat", 1);
    m(this, "_dark", 1);
    m(this, "_fatigue", 1);
    m(this, "_strategy", 1);
    m(this, "_combined");
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
class tu {
  constructor(s, r, o) {
    m(this, "factors", new bn());
    m(this, "point");
    m(this, "course");
    m(this, "loop");
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
const v0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function hu(c, s) {
  (s === null || typeof s > "u") && (s = v0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const nu = {
  baseline: 0,
  terrainScale: 1
};
function y0(c, s) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return s >= c.sunrise && s <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (s <= c.dawn || s >= c.dusk) ? 1 : r(s) >= r(c.nadir) ? ye(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(s)
  ) : ye(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(s)
  );
}
function pu(c, s, r, o = nu) {
  if (s === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = nu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * f, g = y0(r, c);
  return 1 + p * g;
}
const w0 = {
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
function gu(c, s) {
  return (s === null || typeof s > "u") && (s = w0), c < s.lower.lim ? s.lower.m * c + s.lower.b : c > s.upper.lim ? s.upper.m * c + s.upper.b : s.a * c ** 2 + s.b * c + 1;
}
function du(c, s) {
  if (!s) return 1;
  const r = c.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return o += s.baseline / 100, o;
}
function _u(c, s) {
  const r = z.findLast(s.terrainFactors, (o) => we(o.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const vu = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function ms(c) {
  const s = new bn().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    s.applyEach((f, p) => f + o * p, r);
  }), s.scaleEach(1 / uu.sumBy(c, "dist")), s;
}
function m0(c, s) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const g = p === c.length - 1 ? s : c[p + 1].onset, _ = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + _) * (g - f.onset), r += f.value;
  }), o / s;
}
function M0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function C0(c, s, r) {
  let o = -m0(s, r);
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
class _s {
  constructor(s, r) {
    m(this, "plan");
    m(this, "values");
    this.plan = s, this.values = r ? z.cloneDeep(r) : [{ onset: 0, value: M0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + C0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((o) => o.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function vs(c, s) {
  return (c - 1) * s + 1;
}
function Ms(c, s) {
  c.factors || (c.factors = new bn()), Object.assign(c.factors, {
    grade: gu(c.grade),
    altitude: hu(c.alt),
    terrain: _u(c, s)
  });
}
function Wr(c, s) {
  if (c.factors || (c.factors = new bn()), Ms(c, s.course), s) {
    if (c.factors === void 0) throw new Error("no factors");
    c.factors.strategy = s.strategy.at(c.loc), Object.assign(c.factors, {
      heat: s.heatModel ? du(c, s.heatModel) : 1,
      dark: s.event.sun ? pu(c.tod, c.factors.terrain, s.event.sun) : 1
    });
  }
  c.factors.altitude = vs(c.factors.altitude, s.scales.altitude), c.factors.dark = vs(c.factors.dark, s.scales.dark);
}
const H0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: bn,
  Strategy: _s,
  applyScale: vs,
  generateCourseFactors: Ms,
  generatePlanFactors: Wr,
  getAltitudeFactor: hu,
  getDarkFactor: pu,
  getGradeFactor: gu,
  getHeatFactor: du,
  getTerrainFactor: _u,
  list: vu,
  rollup: ms
}, Symbol.toStringTag, { value: "Module" }));
function yu(c) {
  switch (c) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function Or(c) {
  return typeof c == "number" && !isNaN(c);
}
function b0(c, s, r) {
  const o = c.filter(
    (p, g) => g >= c.findIndex((_) => _ === s) && g <= c.findIndex((_) => _ === r)
  ), f = o.map((p, g) => ({
    factors: p.factors,
    dist: g === o.length - 1 ? 0 : o[g + 1].loc - o[g].loc
  }));
  return f.pop(), ms(f);
}
class wu {
  constructor(s) {
    m(this, "point1");
    m(this, "point2");
    /**
     * elevation gain (m) over segment
     */
    m(this, "gain");
    /**
     * elevation loss (m) over segment
     */
    m(this, "loss");
    /**
     * average grade (%) over segment
     */
    m(this, "grade");
    /**
     * waypoint at end of segment
     */
    m(this, "waypoint");
    m(this, "_name");
    this.point1 = s.point1, this.point2 = s.point2, this.gain = s.gain, this.loss = s.loss, this.grade = s.grade, s.name && (this._name = s.name);
  }
  /**
   * name of segment
   */
  get name() {
    var s;
    return this._name || ((s = this.waypoint) == null ? void 0 : s.name) || void 0;
  }
  /**
   * location along course (km) at start of segment
   */
  get start() {
    return this.point1.loc;
  }
  /**
   * distance (km) of segment
   */
  get dist() {
    return this.point2.loc - this.point1.loc;
  }
  /**
   * location along course (km) at end of segment
   */
  get end() {
    return this.point2.loc;
  }
  /**
   * altitude (m) at end of segment
   */
  get alt() {
    return this.point2.alt;
  }
}
class x0 extends wu {
  constructor(r, o) {
    super(o);
    m(this, "_course");
    m(this, "point1");
    m(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class S0 extends wu {
  constructor(r, o) {
    super(o);
    m(this, "_plan");
    m(this, "point1");
    m(this, "point2");
    m(this, "_factors");
    this._plan = r, this.point1 = o.point1, this.point2 = o.point2;
  }
  /**
   * moving pace (s/km) over segment
   */
  get pace() {
    if (z.isNumber(this.time))
      return this.time ? this.time / this.dist : 0;
  }
  /**
   * delay (s) over segment
   */
  get delay() {
    if (!(!Or(this.point1.elapsed) || !Or(this.point2.elapsed) || !Or(this.point1.time) || !Or(this.point2.time)))
      return this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time);
  }
  /**
   * elapsed time (s) over segment
   */
  get elapsed() {
    return this.point2.elapsed;
  }
  /**
   * moving time (s) over segment
   */
  get time() {
    if (!(!z.isNumber(this.point1.time) || !z.isNumber(this.point2.time)))
      return this.point2.time - this.point1.time;
  }
  /**
   * time of day (s) at end of segment
   */
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
    return this._factors || (this._factors = b0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Zn("CourseSplits");
class A0 {
  constructor(s) {
    m(this, "_segments");
    m(this, "_miles");
    m(this, "_kilometers");
    m(this, "course");
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
    hs("createSegments");
    const s = this.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    hs(`createSplits:${s}`);
    const r = yu(s), o = z.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var P;
    const r = hs.extend("calcSegments");
    r("exec");
    const o = this.course, f = o.points;
    if (!(f != null && f.length))
      throw r("Course points are not defined."), new ze("Course points are not defined.", "points");
    const p = [], g = [];
    let _, M, C = o.points[0], b;
    for (_ = 0, M = s.length; _ < M; _++) {
      const O = s[_];
      b && $e((P = s[_ - 1]) == null ? void 0 : P.end, O.start, 4) ? C = b : C = o.getPoint(O.start), b = o.getPoint(O.end);
      const R = O.end - O.start, F = new x0(this.course, {
        gain: 0,
        loss: 0,
        grade: R > 0 ? (b.alt - C.alt) / R / 10 * (b.alt - C.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: C,
        point2: b
      }), N = new bn().init(0);
      p.push(F), g.push(N);
    }
    const y = (O, R, F, N) => {
      const K = F.alt - R.alt;
      O[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), Ms(R, o);
      const X = F.loc - R.loc;
      N.applyEach((Q, et) => Q + et * X, R.factors);
    };
    _ = 1;
    for (let O = 0; O < p.length; O++) {
      const R = p[O], F = g[O];
      for (; we(f[_].loc, R.point1.loc, 4); ) _++;
      let N = R.point1;
      for (; _ < f.length && we(f[_].loc, R.point2.loc, 4); ) {
        const K = f[_];
        y(R, N, K, F), N = K, _++;
      }
      y(R, N, R.point2, F);
    }
    return p;
  }
}
var mu = {};
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
        var p = (r * 60).toFixed(f), _ = Math.floor(p / 60), M = (p % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), M < 10 && (M = "0" + M), dms = _ + "°" + M + "′";
        break;
      case "dms":
        var g = (r * 3600).toFixed(f), _ = Math.floor(g / 3600), M = Math.floor(g / 60) % 60, C = (g % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), M < 10 && (M = "0" + M), C < 10 && (C = "0" + C), dms = _ + "°" + M + "′" + C + "″";
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
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), g = r.lng.toRad(), _ = p - o, M = g - f, C = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(o) * Math.cos(p) * Math.sin(M / 2) * Math.sin(M / 2), b = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
    return b;
  }, c.latlon.prototype.bearingTo = function(r) {
    var o = this.bearingRadTo(r);
    return (o.toDeg() + 360) % 360;
  }, c.latlon.prototype.bearingRadTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), M = Math.atan2(_, g);
    return M;
  }, c.latlon.prototype.finalBearingTo = function(r) {
    var o = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), g = Math.sin(p) * Math.cos(f), _ = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), M = Math.atan2(g, _);
    return (M.toDeg() + 180) % 360;
  }, c.latlon.prototype.midpointTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), M = this.lng.toRad(), C = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + g) * (Math.cos(o) + g) + _ * _)), b = M + Math.atan2(_, Math.cos(o) + g);
    return b = (b + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(C.toDeg(), b.toDeg());
  }, c.midpoint = function(r) {
    var o = 0, f = 0, p = 0;
    for (var g in r) {
      var _ = r[g], M = _.lat * Math.PI / 180, C = _.lng * Math.PI / 180, b = Math.cos(M) * Math.cos(C), y = Math.cos(M) * Math.sin(C), P = Math.sin(M);
      o += b, f += y, p += P;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var O = Math.atan2(f, o), R = Math.sqrt(o * o + f * f), F = Math.atan2(p, R);
    return new c.latlon(F * 180 / Math.PI, O * 180 / Math.PI);
  }, c.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), g = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var M = Math.sin(g), C = Math.cos(g), b = [], y = 0; y < o; y++) {
      var P = 1 / (o - 1) * y, O = f * P, R = Math.sin(O), F = Math.cos(O), N = Math.asin(M * F + C * R * Math.cos(p)), K = _ + Math.atan2(Math.sin(p) * R * C, F - M * Math.sin(N)), X = N.toDeg(), Q = K.toDeg();
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
    var g = r.lat.toRad(), _ = r.lng.toRad(), M = f.lat.toRad(), C = f.lng.toRad(), b = o.toRad(), y = p.toRad(), P = M - g, O = C - _, R = 2 * Math.asin(Math.sqrt(Math.sin(P / 2) * Math.sin(P / 2) + Math.cos(g) * Math.cos(M) * Math.sin(O / 2) * Math.sin(O / 2)));
    if (R == 0) return null;
    var F = Math.acos((Math.sin(M) - Math.sin(g) * Math.cos(R)) / (Math.sin(R) * Math.cos(g)));
    isNaN(F) && (F = 0);
    var N = Math.acos((Math.sin(g) - Math.sin(M) * Math.cos(R)) / (Math.sin(R) * Math.cos(M)));
    if (Math.sin(C - _) > 0)
      var K = F, X = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - F, X = N;
    var Q = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (X - y + Math.PI) % (2 * Math.PI) - Math.PI;
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
    var o = s, f = this.lat.toRad(), p = r.lat.toRad(), g = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), M = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(g / M) ? g / M : Math.cos(f);
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
    var M = p * Math.cos(r);
    Math.abs(M) < 1e-10 && (M = 0);
    var C = g + M, b = Math.log(Math.tan(C / 2 + Math.PI / 4) / Math.tan(g / 2 + Math.PI / 4)), y = isFinite(M / b) ? M / b : Math.cos(g), P = p * Math.sin(r) / y;
    Math.abs(C) > Math.PI / 2 && (C = C > 0 ? Math.PI - C : -Math.PI - C);
    var O = (_ + P + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new c.latlon(C.toDeg(), O.toDeg());
  }, c.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), g = r.lng.toRad();
    Math.abs(g - f) > Math.PI && (f += 2 * Math.PI);
    var _ = (o + p) / 2, M = Math.tan(Math.PI / 4 + o / 2), C = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + _ / 2), y = ((g - f) * Math.log(b) + f * Math.log(C) - g * Math.log(M)) / Math.log(C / M);
    return isFinite(y) || (y = (f + g) / 2), y = (y + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(_.toDeg(), y.toDeg());
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
})(mu);
class Mu {
  constructor(s, r, o) {
    m(this, "alt");
    m(this, "lat");
    m(this, "lon");
    this.lat = s, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new mu.latlon(this.lat, this.lon);
  }
}
class Cu extends Mu {
  constructor(r, o, f, p, g) {
    super(r, o, f);
    m(this, "loc");
    m(this, "grade");
    this.loc = p, this.grade = g;
  }
}
function bu(c, s, r) {
  if (c.loc > s.loc && r > c.loc || s.loc > c.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(s.latlon), { lat: p, lng: g } = c.latlon.destinationPoint(f, o), _ = c.grade, M = ye(c.loc, s.loc, c.alt, s.alt, r);
  return new Cu(p, g, M, r, _);
}
function I0(c, s) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof s == "object" ? String(s.id) : s);
}
function ys(c, s) {
  return !!(c && s && I0(c.site, s.site) && c.loop === s.loop);
}
class eu {
  constructor(s, r = 1) {
    m(this, "_data");
    m(this, "loop");
    m(this, "site");
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
    if (!z.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
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
    return s.find((r) => r.waypoint && ys(this, r.waypoint));
  }
  serialize() {
    return { ...z.pick(this, [
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
    ]), site: this.site.id };
  }
}
const Ue = Zn("models:Waypoint");
class ps {
  constructor(s, r) {
    m(this, "_waypoints");
    m(this, "_lat");
    m(this, "_lon");
    m(this, "_alt");
    m(this, "_data");
    m(this, "course");
    m(this, "cutoffs", []);
    m(this, "id");
    m(this, "name");
    m(this, "tier", 1);
    m(this, "type");
    m(this, "terrainFactor");
    m(this, "terrainType");
    m(this, "description");
    m(this, "pointsIndex");
    m(this, "dropbags");
    m(this, "crew");
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), this.crew = r.crew || !1, this.dropbags = r.dropbags || !1, Ue(`constructor: ${this.name}`);
  }
  clearCache() {
    Ue(`clearCache: ${this.name}`), delete this._waypoints, delete this._lat, delete this._lon, delete this._alt;
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
    return this._waypoints ? this._waypoints : (Ue(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new eu(this, this.course.loops)] : this._waypoints = z.range(this.course.loops).map((s) => new eu(this, s + 1)), this._waypoints);
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
    if (Ue("refreshLLA"), !((g = (p = (f = this.course) == null ? void 0 : f.track) == null ? void 0 : p.points) != null && g.length))
      throw new ze("No track points defined", "points");
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
  serialize() {
    Ue(`serialize: ${this.name}`);
    const s = Object.keys(this);
    return s.push("percent"), z.pick(this, s);
  }
}
const On = Zn("models:Course"), T0 = ["track", "dist", "gain", "loss", "cache", "distance"];
class q0 {
  constructor(s, r) {
    m(this, "name");
    m(this, "_cache", {});
    m(this, "_loops", 1);
    m(this, "_distOverride");
    m(this, "_gainOverride");
    m(this, "_lossOverride");
    m(this, "_dist");
    m(this, "_gain");
    m(this, "_loss");
    m(this, "_sites", [
      new ps(this, {
        id: String(z.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new ps(this, {
        id: String(z.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ]);
    m(this, "_waypoints");
    m(this, "_track");
    m(this, "_points");
    // terrainFactors: array of TerrainFactor objects only where actual terrain factor values exist
    m(this, "_terrainFactors");
    // terrainTypes: array of TerrainType objects only where actual terrain type changes exist
    m(this, "_terrainTypes");
    m(this, "_cutoffs");
    m(this, "_splits");
    // calculate max and min values along course
    m(this, "_stats");
    this._track = s, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss);
    const o = Object.keys(r).filter((f) => !T0.includes(f));
    Object.assign(this, z.pick(r, o));
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
    this._sites = s.map((r) => new ps(this, r)), this.clearCache(1);
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
      throw new ze("Track points are not defined.", "points");
    this._points = new Array(this.track.points.length * this.loops);
    for (let o = 0; o < this.loops; o++)
      for (let f = 0; f < this.track.points.length; f++)
        this.points[f + o * this.track.points.length] = new tu(
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
    const o = this.points.findIndex((C) => Ur(C.loc, s, 4)), f = this.points[o];
    if ($e(f.loc, s, 4)) return f;
    On(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = o - 1, g = this.points[p], _ = bu(g.point, f.point, s % this.loopDist / this.distScale), M = new tu(this, _, Math.floor(s / this.loopDist));
    return r && this.points.splice(o, 0, M), M;
  }
  get terrainFactors() {
    if (this._terrainFactors) return this._terrainFactors;
    On("regenerating terrainFactors");
    const s = this.waypoints.filter(
      (r, o) => {
        var f;
        return o === 0 || !z.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainFactor);
      }
    );
    return this._terrainFactors = s.map((r, o) => new P0(r, s[o + 1] || z.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes) return this._terrainTypes;
    On("regenerating terrainTypes");
    const s = this.waypoints.filter(
      (r, o) => {
        var f;
        return !z.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainType);
      }
    );
    return this._terrainTypes = s.map((r, o) => new E0(r, s[o + 1] || z.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new F0(s)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new A0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    On("stats:calculate");
    const s = this.track.points.map((g) => g.alt), r = this.track.points.map((g) => g.grade), o = this.terrainFactors.map((g) => g.value / 100 + 1), f = {
      altitude: {
        avg: z.sum(
          this.track.points.map((g, _) => {
            var M;
            return g.alt * (g.loc - (((M = this.track.points[_ - 1]) == null ? void 0 : M.loc) || 0));
          })
        ) / this.track.dist,
        max: z.max(s) || 0,
        min: z.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: z.max(r) || 0,
        min: z.min(r) || 0
      },
      terrain: {
        avg: (z.sumBy(this.terrainFactors, (g) => (g.end - g.start) * g.value) / this.dist + 100) / 100,
        max: z.max(o) || 0,
        min: z.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (g) => this.terrainFactors.reduce((_, M) => M.value / 100 + 1 === g ? _ + M.end - M.start : _, 0);
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
class F0 {
  constructor(s) {
    m(this, "waypoint");
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
class P0 {
  constructor(s, r, o = 0) {
    m(this, "value");
    m(this, "startWaypoint");
    m(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.value = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class E0 {
  constructor(s, r, o) {
    m(this, "type");
    m(this, "startWaypoint");
    m(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.type = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var xu = { exports: {} };
(function(c, s) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, g = Math.asin, _ = Math.atan2, M = Math.acos, C = r / 180, b = 1e3 * 60 * 60 * 24, y = 2440588, P = 2451545;
    function O(k) {
      return k.valueOf() / b - 0.5 + y;
    }
    function R(k) {
      return new Date((k + 0.5 - y) * b);
    }
    function F(k) {
      return O(k) - P;
    }
    var N = C * 23.4397;
    function K(k, $) {
      return _(o(k) * f(N) - p($) * o(N), f(k));
    }
    function X(k, $) {
      return g(o($) * f(N) + f($) * o(N) * o(k));
    }
    function Q(k, $, G) {
      return _(o(k), f(k) * o($) - p(G) * f($));
    }
    function et(k, $, G) {
      return g(o($) * o(G) + f($) * f(G) * f(k));
    }
    function xt(k, $) {
      return C * (280.16 + 360.9856235 * k) - $;
    }
    function At(k) {
      return k < 0 && (k = 0), 2967e-7 / Math.tan(k + 312536e-8 / (k + 0.08901179));
    }
    function It(k) {
      return C * (357.5291 + 0.98560028 * k);
    }
    function Ht(k) {
      var $ = C * (1.9148 * o(k) + 0.02 * o(2 * k) + 3e-4 * o(3 * k)), G = C * 102.9372;
      return k + $ + G + r;
    }
    function tn(k) {
      var $ = It(k), G = Ht($);
      return {
        dec: X(G, 0),
        ra: K(G, 0)
      };
    }
    var qt = {};
    qt.getPosition = function(k, $, G) {
      var ct = C * -G, nt = C * $, ht = F(k), ot = tn(ht), lt = xt(ht, ct) - ot.ra;
      return {
        azimuth: Q(lt, nt, ot.dec),
        altitude: et(lt, nt, ot.dec)
      };
    };
    var me = qt.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    qt.addTime = function(k, $, G) {
      me.push([k, $, G]);
    };
    var Ge = 9e-4;
    function $r(k, $) {
      return Math.round(k - Ge - $ / (2 * r));
    }
    function Me(k, $, G) {
      return Ge + (k + $) / (2 * r) + G;
    }
    function He(k, $, G) {
      return P + k + 53e-4 * o($) - 69e-4 * o(2 * G);
    }
    function zr(k, $, G) {
      return M((o(k) - o($) * o(G)) / (f($) * f(G)));
    }
    function xn(k) {
      return -2.076 * Math.sqrt(k) / 60;
    }
    function vn(k, $, G, ct, nt, ht, ot) {
      var lt = zr(k, G, ct), mt = Me(lt, $, nt);
      return He(mt, ht, ot);
    }
    qt.getTimes = function(k, $, G, ct) {
      ct = ct || 0;
      var nt = C * -G, ht = C * $, ot = xn(ct), lt = F(k), mt = $r(lt, nt), Kt = Me(0, nt, mt), Rt = It(Kt), Wt = Ht(Rt), yn = X(Wt, 0), _t = He(Kt, Rt, Wt), kt, Dn, Mt, Bt, cn, nn, pt = {
        solarNoon: R(_t),
        nadir: R(_t - 0.5)
      };
      for (kt = 0, Dn = me.length; kt < Dn; kt += 1)
        Mt = me[kt], Bt = (Mt[0] + ot) * C, cn = vn(Bt, nt, ht, yn, mt, Rt, Wt), nn = _t - (cn - _t), pt[Mt[1]] = R(nn), pt[Mt[2]] = R(cn);
      return pt;
    };
    function qe(k) {
      var $ = C * (218.316 + 13.176396 * k), G = C * (134.963 + 13.064993 * k), ct = C * (93.272 + 13.22935 * k), nt = $ + C * 6.289 * o(G), ht = C * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ht),
        dec: X(nt, ht),
        dist: ot
      };
    }
    qt.getMoonPosition = function(k, $, G) {
      var ct = C * -G, nt = C * $, ht = F(k), ot = qe(ht), lt = xt(ht, ct) - ot.ra, mt = et(lt, nt, ot.dec), Kt = _(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return mt = mt + At(mt), {
        azimuth: Q(lt, nt, ot.dec),
        altitude: mt,
        distance: ot.dist,
        parallacticAngle: Kt
      };
    }, qt.getMoonIllumination = function(k) {
      var $ = F(k || /* @__PURE__ */ new Date()), G = tn($), ct = qe($), nt = 149598e3, ht = M(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = _(nt * o(ht), ct.dist - nt * f(ht)), lt = _(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function Sn(k, $) {
      return new Date(k.valueOf() + $ * b / 24);
    }
    qt.getMoonTimes = function(k, $, G, ct) {
      var nt = new Date(k);
      ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ht = 0.133 * C, ot = qt.getMoonPosition(nt, $, G).altitude - ht, lt, mt, Kt, Rt, Wt, yn, _t, kt, Dn, Mt, Bt, cn, nn, pt = 1; pt <= 24 && (lt = qt.getMoonPosition(Sn(nt, pt), $, G).altitude - ht, mt = qt.getMoonPosition(Sn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + mt) / 2 - lt, yn = (mt - ot) / 2, _t = -yn / (2 * Wt), kt = (Wt * _t + yn) * _t + lt, Dn = yn * yn - 4 * Wt * lt, Mt = 0, Dn >= 0 && (nn = Math.sqrt(Dn) / (Math.abs(Wt) * 2), Bt = _t - nn, cn = _t + nn, Math.abs(Bt) <= 1 && Mt++, Math.abs(cn) <= 1 && Mt++, Bt < -1 && (Bt = cn)), Mt === 1 ? ot < 0 ? Kt = pt + Bt : Rt = pt + Bt : Mt === 2 && (Kt = pt + (kt < 0 ? cn : Bt), Rt = pt + (kt < 0 ? Bt : cn)), !(Kt && Rt)); pt += 2)
        ot = mt;
      var wn = {};
      return Kt && (wn.rise = Sn(nt, Kt)), Rt && (wn.set = Sn(nt, Rt)), !Kt && !Rt && (wn[kt > 0 ? "alwaysUp" : "alwaysDown"] = !0), wn;
    }, c.exports = qt;
  })();
})(xu);
var ru = xu.exports;
function Kn(c, s) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class R0 {
  constructor(s) {
    m(this, "nadir", 0);
    m(this, "dawn", 0);
    m(this, "sunrise", 0);
    m(this, "dusk", 0);
    m(this, "sunset", 0);
    m(this, "noon", 0);
    m(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class iu {
  constructor(s, r, o, f) {
    m(this, "start");
    m(this, "lat");
    m(this, "lon");
    m(this, "timezone");
    m(this, "sun");
    m(this, "startTime");
    this.start = s, this.lat = o, this.lon = f, this.timezone = r;
    const p = ru.getTimes(this.start, this.lat, this.lon), g = ru.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new R0({
      nadir: Kn(p.nadir, this.timezone),
      dawn: Kn(p.dawn, this.timezone),
      sunrise: Kn(p.sunrise, this.timezone),
      dusk: Kn(p.dusk, this.timezone),
      sunset: Kn(p.sunset, this.timezone),
      noon: Kn(p.solarNoon, this.timezone),
      nadirAltitude: g.altitude * 180 / Math.PI
    }), this.startTime = Kn(this.start, this.timezone);
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
    return z.pick(this, ["start", "sun", "lat", "lon", "timezone"]);
  }
}
var Br = {};
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
    function o(_, M) {
      return r.apply(null, [_].concat(M || []));
    }
    function f(_, M) {
      var C = 1, b = _.length, y, P = "", O, R, F, N, K, X, Q, et;
      for (O = 0; O < b; O++)
        if (typeof _[O] == "string")
          P += _[O];
        else if (typeof _[O] == "object") {
          if (F = _[O], F.keys)
            for (y = M[C], R = 0; R < F.keys.length; R++) {
              if (y == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', F.keys[R], F.keys[R - 1]));
              y = y[F.keys[R]];
            }
          else F.param_no ? y = M[F.param_no] : y = M[C++];
          if (s.not_type.test(F.type) && s.not_primitive.test(F.type) && y instanceof Function && (y = y()), s.numeric_arg.test(F.type) && typeof y != "number" && isNaN(y))
            throw new TypeError(r("[sprintf] expecting number but found %T", y));
          switch (s.number.test(F.type) && (Q = y >= 0), F.type) {
            case "b":
              y = parseInt(y, 10).toString(2);
              break;
            case "c":
              y = String.fromCharCode(parseInt(y, 10));
              break;
            case "d":
            case "i":
              y = parseInt(y, 10);
              break;
            case "j":
              y = JSON.stringify(y, null, F.width ? parseInt(F.width) : 0);
              break;
            case "e":
              y = F.precision ? parseFloat(y).toExponential(F.precision) : parseFloat(y).toExponential();
              break;
            case "f":
              y = F.precision ? parseFloat(y).toFixed(F.precision) : parseFloat(y);
              break;
            case "g":
              y = F.precision ? String(Number(y.toPrecision(F.precision))) : parseFloat(y);
              break;
            case "o":
              y = (parseInt(y, 10) >>> 0).toString(8);
              break;
            case "s":
              y = String(y), y = F.precision ? y.substring(0, F.precision) : y;
              break;
            case "t":
              y = String(!!y), y = F.precision ? y.substring(0, F.precision) : y;
              break;
            case "T":
              y = Object.prototype.toString.call(y).slice(8, -1).toLowerCase(), y = F.precision ? y.substring(0, F.precision) : y;
              break;
            case "u":
              y = parseInt(y, 10) >>> 0;
              break;
            case "v":
              y = y.valueOf(), y = F.precision ? y.substring(0, F.precision) : y;
              break;
            case "x":
              y = (parseInt(y, 10) >>> 0).toString(16);
              break;
            case "X":
              y = (parseInt(y, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          s.json.test(F.type) ? P += y : (s.number.test(F.type) && (!Q || F.sign) ? (et = Q ? "+" : "-", y = y.toString().replace(s.sign, "")) : et = "", K = F.pad_char ? F.pad_char === "0" ? "0" : F.pad_char.charAt(1) : " ", X = F.width - (et + y).length, N = F.width && X > 0 ? K.repeat(X) : "", P += F.align ? et + y + N : K === "0" ? et + N + y : N + et + y);
        }
      return P;
    }
    var p = /* @__PURE__ */ Object.create(null);
    function g(_) {
      if (p[_])
        return p[_];
      for (var M = _, C, b = [], y = 0; M; ) {
        if ((C = s.text.exec(M)) !== null)
          b.push(C[0]);
        else if ((C = s.modulo.exec(M)) !== null)
          b.push("%");
        else if ((C = s.placeholder.exec(M)) !== null) {
          if (C[2]) {
            y |= 1;
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
            y |= 2;
          if (y === 3)
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
        M = M.substring(C[0].length);
      }
      return p[_] = b;
    }
    c.sprintf = r, c.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(Br);
class Su {
  /**
   *
   * @param target - target object
   * @param events - array of event names to map
   */
  constructor(s, r) {
    m(this, "_callbacks", {});
    m(this, "_target");
    this._target = s, this._callbacks = z.fromPairs(r.map((o) => [o, []]));
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
    z.pull(this._callbacks[s], r);
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
const k0 = Zn("PaceChunk");
class L0 {
  constructor() {
    m(this, "iterations", !1);
    m(this, "factor", !1);
    m(this, "target", !1);
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
class su {
  constructor(s, r, o, f) {
    m(this, "constraints");
    m(this, "points");
    m(this, "plan");
    m(this, "delay");
    m(this, "factor");
    m(this, "factors", new bn());
    m(this, "status");
    this.constraints = o, this.points = r, this.plan = s, this.delay = f, this.factor = 1;
  }
  get elapsed() {
    const s = z.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
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
    s[0].elapsed = z.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - z.sum(this.plan.pacing.chunks.filter((C) => C.points[0].loc < s[0].loc).map((C) => C.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, o = s[0].delay || 0, f = 0, p = 0, g = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, M = new bn().init(0);
    for (let C = 1, b = s.length; C < b; C++) {
      f = s[C].loc - s[C - 1].loc, Wr(s[C - 1], this.plan), M.applyEach((P, O) => P + O * f, s[C - 1].factors);
      const y = s[C - 1].factors.combined;
      g += y * f, p = _ * y * f, s[C].time = s[C - 1].time + p, o = s[C - 1].delay || 0, r += p + o, s[C].elapsed = r, this.plan.event.start && (s[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Wr(s[s.length - 1], this.plan), this.factors = M.scaleEach(1 / this.dist), this.factor = g / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = k0.extend(
      Br.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const g = new L0();
    for (p = 0; p < 20 && (this.applyPacing(), g.iterations = p >= 2, g.factor = !z.round(f - this.factor, 10), f = this.factor, g.target = Math.abs(
      (z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(Br.vsprintf("%i|%s", [p, g.statusString])), !g.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: g,
      success: g.passing,
      iterations: p + 1
    };
  }
}
const jt = Zn("Pacing");
class O0 {
  constructor(s) {
    m(this, "callbacks", new Su(this, ["onUpdated", "onFail", "onInvalidated"]));
    m(this, "chunks", []);
    m(this, "plan");
    m(this, "_elapsed");
    m(this, "_factor");
    m(this, "_factors");
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
    return this._factor ? this._factor : (jt("factor:update"), this.chunks && (this._factor = z.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return jt("factors:get"), this._factors || (jt("factors:update"), this._factors = ms(this.chunks)), this._factors;
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
      throw s("calculate: error; no points"), new ze("Plan points are not defined.", "points");
    s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (f = this.plan.course.terrainFactors) == null || f.forEach((g) => this.plan.getPoint(g.start, !0)), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((g) => {
      g.point = this.plan.getPoint(g.loc, !0);
    }), this.plan.points.filter((g) => g.delay).forEach((g) => {
      g.delay = 0;
    }), (p = this.plan.delays) == null || p.forEach((g) => {
      const _ = this.plan.getPoint(g.loc, !0);
      _.delay = g.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...z.reverse([...this.plan.cutoffs]), null].forEach((g) => {
      for (; this.chunks.find((_) => !_.status); )
        this.calcChunks(), this.validateChunks();
      if (!g) return !0;
      if (g.point.elapsed - g.time > 0.5) {
        s(`cutoff at ${g.loc} missed`);
        const _ = this.chunks[0];
        z.last(_.points) === g.point ? (s(`setting cutoff at ${g.loc}`), _.constraints = [0, g.time], delete _.status) : this.splitChunk(_, g.point, g.time);
      }
    }), z.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), jt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
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
    this.chunks = [new su(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
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
    const p = s.points.findIndex((M) => M === r), g = z.round(r.elapsed - r.time), _ = new su(this.plan, s.points.slice(0, p + 1), [0, o], g);
    _.points.filter((M, C) => C < _.points.length - 1).forEach((M) => {
      M._chunk = _;
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
    jt(Br.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class au {
  constructor(s, r) {
    m(this, "factors", new bn());
    m(this, "_chunk");
    m(this, "_plan");
    m(this, "_point");
    m(this, "elapsed");
    m(this, "time");
    m(this, "tod");
    m(this, "delay");
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
const gs = Zn("PlanSplits");
class D0 {
  constructor(s) {
    m(this, "_segments");
    m(this, "_miles");
    m(this, "_kilometers");
    m(this, "plan");
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
    gs("createSegments");
    const s = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    gs(`createSplits:${s}`);
    const r = yu(s), o = z.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var O;
    const r = gs.extend("calcSegments");
    r("exec");
    const o = this.plan, f = o.course, p = o.points;
    if (!(p != null && p.length))
      throw r("Plan points are not defined."), new ze("Plan points are not defined.", "points");
    const g = [], _ = [];
    let M, C, b = o.points[0], y;
    for (M = 0, C = s.length; M < C; M++) {
      const R = s[M];
      y && $e((O = s[M - 1]) == null ? void 0 : O.end, R.start, 4) ? b = y : b = o.getPoint(R.start), y = o.getPoint(R.end);
      const F = R.end - R.start, N = new S0(this.plan, {
        gain: 0,
        loss: 0,
        grade: F > 0 ? (y.alt - b.alt) / F / 10 * (y.alt - b.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: b,
        point2: y
      }), K = new bn().init(0);
      g.push(N), _.push(K);
    }
    const P = (R, F, N, K) => {
      const X = N.alt - F.alt;
      R[X > 0 ? "gain" : "loss"] += X * (X > 0 ? f.gainScale : f.lossScale), Wr(F, o);
      const Q = N.loc - F.loc;
      K.applyEach((et, xt) => et + xt * Q, F.factors);
    };
    M = 1;
    for (let R = 0; R < g.length; R++) {
      const F = g[R], N = _[R];
      for (; we(p[M].loc, F.point1.loc, 4); ) M++;
      let K = F.point1;
      for (; M < p.length && we(p[M].loc, F.point2.loc, 4); ) {
        const X = p[M];
        P(F, K, X, N), K = X, M++;
      }
      P(F, K, F.point2, N), o && (F.delay = o.delays.filter((X) => Ur(F.point1.loc, X.loc, 4) && ws(F.point2.loc, X.loc, 4)).reduce((X, Q) => X + Q.delay, 0));
    }
    return g;
  }
}
const _n = Zn("models:Plan");
class N0 {
  constructor(s) {
    m(this, "plan");
    m(this, "_altitude", 1);
    m(this, "_dark", 1);
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
class K0 {
  constructor(s, r) {
    m(this, "course");
    m(this, "event");
    m(this, "points");
    m(this, "method");
    m(this, "target");
    m(this, "name");
    m(this, "scales", new N0(this));
    m(this, "callbacks");
    m(this, "pacing");
    m(this, "_cutoffs");
    m(this, "_strategy");
    m(this, "_typicalDelay", 0);
    m(this, "_cutoffMargin", 0);
    m(this, "_heatModel");
    m(this, "_specifiedDelays", []);
    m(this, "_delays");
    m(this, "_splits");
    m(this, "_events");
    m(this, "_stats");
    this.course = s, this.pacing = new O0(this), this.points = this.course.points.map((o) => new au(this, o)), this.event = new iu(
      r.start.date,
      r.start.timezone,
      this.points[0].lat,
      this.points[0].lon
    ), this.method = r.method, this.target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this._strategy = new _s(this, r.strategy), Object.assign(this.scales, r.scales || {}), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name, this.callbacks = new Su(this, ["onUpdated"]);
  }
  clearCache() {
    _n("clearCache"), delete this._cutoffs, delete this._splits, delete this._stats;
  }
  get cutoffs() {
    if (this._cutoffs) return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new B0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this._cutoffs.length - 1 >= s; ) {
      const r = this._cutoffs[s];
      this._cutoffs.find((o, f) => f > s && o.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(s, 1)) : s++;
    }
    return this._cutoffs;
  }
  set start(s) {
    this.event = new iu(s.date, s.timezone, this.points[0].lat, this.points[0].lon);
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(s) {
    this._strategy = new _s(this, s), this.clearCache();
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
      const f = (g = this._specifiedDelays) == null ? void 0 : g.find((_) => ys(_.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new W0(o, p);
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
    return z.sumBy(this.delays, "delay");
  }
  /**
   * splits are calculaed on get
   */
  get splits() {
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new D0(this), this._splits);
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
      ].forEach((M) => {
        const C = M.time - r + 86400 * g;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && s.push({ event: M.event, elapsed: C });
      });
    s.sort((g, _) => g.elapsed - _.elapsed);
    const f = lu(
      this.points.map((g) => g.elapsed),
      this.points.map((g) => g.loc),
      s.map((g) => g.elapsed)
    ), p = s.map((g, _) => ({ ...g, loc: f[_] }));
    return this._events = { sun: p }, this._events;
  }
  get stats() {
    if (this._stats) return this._stats;
    _n("calculating stats.factors");
    const s = z.fromPairs(
      vu.map((p) => {
        const g = this.points.map((_) => _.factors.get(p));
        return [
          p,
          {
            min: z.min(g),
            max: z.max(g)
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
      var _, M;
      o = p.loc - (((_ = this.points[g - 1]) == null ? void 0 : _.loc) || 0), f = p.elapsed - (((M = this.points[g - 1]) == null ? void 0 : M.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: s, sun: r }, this._stats;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((o) => ys(o.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    const o = this.points.findIndex((M) => Ur(M.loc, s, 4)), f = this.points[o];
    if ($e(f.loc, s, 4)) return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, g = this.points[p], _ = new au(this, this.course.getPoint(s, r));
    if (!isNaN(g.time) && !isNaN(f.time)) {
      const M = f.elapsed - f.time - (g.elapsed - g.time);
      _.time = ye(g.loc, f.loc, g.time + M, f.time, f.loc), _.elapsed = f.elapsed - (f.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
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
class W0 {
  constructor(s, r) {
    m(this, "delay");
    m(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class B0 {
  constructor(s, r, o) {
    m(this, "plan");
    m(this, "courseCutoff");
    m(this, "point");
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
const Au = (c, s, r, o) => {
  const f = cu(c, s, r, o), p = [];
  return r.forEach((g, _) => {
    let M = f[_][0] / 10;
    M > 50 ? M = 50 : M < -50 && (M = -50);
    const C = g * f[_][0] + f[_][1];
    p.push({
      grade: M,
      alt: C
    });
  }), p;
};
function U0(c, s) {
  return Au(
    s,
    c.map((o) => o.alt),
    s,
    0.05
  ).map((o) => o.grade);
}
const $0 = (c) => {
  let s = 0, r = 0;
  const o = [0];
  for (let f = 1, p = c.length; f < p; f++)
    s = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += s, o.push(r);
  return o;
}, Dr = Zn("models:Track");
class Cs {
  constructor(s) {
    m(this, "dist");
    m(this, "gain");
    m(this, "loss");
    m(this, "points");
    Dr("Creating new Track object");
    const r = s.map((C) => new Mu(C.lat, C.lon, C.alt)), o = $0(r), f = U0(r, o);
    this.points = r.map((C, b) => new Cu(C.lat, C.lon, C.alt, o[b], f[b])), Dr(`set-points - ${r.length} points`), Dr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, g = 0, _ = 0, M = this.points[0].alt;
    this.points.forEach((C) => {
      _ = C.alt - M, _ < 0 ? g += _ : p += _, M = C.alt;
    }), this.gain = p, this.loss = g;
  }
  get start() {
    return z.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return z.pick(this.points[this.points.length - 1], ["lat", "lon"]);
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(s) {
    s > this.dist && (s = s % this.dist);
    let r;
    if (s === 0) r = this.points[0];
    else {
      const o = this.points.findIndex((f) => f.loc >= s);
      r = bu(this.points[o - 1], this.points[o], s);
    }
    return z.pick(r, ["lat", "lon", "alt"]);
  }
  /**
   * iterate to new location based on waypoint lat/lon
   * @param latlon - new point location
   * @param start - starting point in track
   * @param limit - max distance along track from starting point
   * @returns
   */
  getNearestPoint(s, r, o) {
    let p = this.points.findIndex((M) => M === r), g = this.points[p], _ = 0;
    for (; o > 0.025; ) {
      const M = o / 5, C = [g];
      for (let P = 1; P <= 5; P++) {
        const O = g.loc + M * P;
        if (O <= this.dist) {
          for (; this.points[p + 1].loc < O && p < this.points.length - 1; )
            p++;
          C.push(this.points[p]);
        }
      }
      const b = C.map((P) => Number(s.distanceTo(P.latlon)));
      _ = Math.min(...b);
      const y = b.findIndex((P) => P === _);
      g = C[y], o = o / 5;
    }
    return {
      point: g,
      delta: _
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const o = Dr.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / s) + 1, g = Array(p).fill(0).map((b, y) => Nt(y++ * s, 3));
    g[g.length - 1] < f && g.push(f);
    const _ = Au(
      this.points.map((b) => b.loc),
      this.points.map((b) => b.alt),
      g,
      2 * s
    ), M = g.map((b) => this.getLLA(b)).map((b, y) => ({
      lat: Nt(b.lat, 6),
      lon: Nt(b.lon, 6),
      alt: Nt(_[y].alt, 2)
    })), C = new Cs(M);
    return o(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
function Z0(c, s, r) {
  const o = c.map((f, p) => ({ lat: c[p], lon: s[p], alt: r[p] }));
  return new Cs(o);
}
const J0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Kn
}, Symbol.toStringTag, { value: "Module" }));
export {
  q0 as Course,
  F0 as CourseCutoff,
  tu as CoursePoint,
  x0 as CourseSegment,
  iu as Event,
  bn as Factors,
  O0 as Pacing,
  K0 as Plan,
  au as PlanPoint,
  S0 as PlanSegment,
  Mu as Point,
  ps as Site,
  _s as Strategy,
  Cs as Track,
  Cu as TrackPoint,
  eu as Waypoint,
  m0 as adjustStrategy,
  Z0 as createTrackFromArrays,
  H0 as factors,
  bu as interpolatePoint,
  G0 as math,
  y0 as scaleDark,
  J0 as util
};
