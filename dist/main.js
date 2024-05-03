var n0 = Object.defineProperty;
var e0 = (c, i, r) => i in c ? n0(c, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[i] = r;
var y = (c, i, r) => (e0(c, typeof i != "symbol" ? i + "" : i, r), r);
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ru(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Or = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Or.exports;
(function(c, i) {
  (function() {
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", M = "__lodash_hash_undefined__", C = 500, b = "__lodash_placeholder__", m = 1, P = 2, O = 4, R = 1, F = 2, N = 1, K = 2, X = 4, Q = 8, et = 16, xt = 32, At = 64, It = 128, Gt = 256, jt = 512, Ht = 30, me = "...", ze = 800, Wr = 16, we = 1, Ge = 2, Br = 3, bn = 1 / 0, vn = 9007199254740991, He = 17976931348623157e292, xn = NaN, k = 4294967295, z = k - 1, G = k >>> 1, ct = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", Q],
      ["curryRight", et],
      ["flip", jt],
      ["partial", xt],
      ["partialRight", At],
      ["rearg", Gt]
    ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", yt = "[object Date]", qt = "[object DOMException]", Rt = "[object Error]", Nt = "[object Function]", mn = "[object GeneratorFunction]", _t = "[object Map]", kt = "[object Number]", Dn = "[object Null]", Mt = "[object Object]", Wt = "[object Promise]", cn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", wn = "[object String]", qe = "[object Symbol]", wu = "[object Undefined]", ye = "[object WeakMap]", yu = "[object WeakSet]", Me = "[object ArrayBuffer]", re = "[object DataView]", Ur = "[object Float32Array]", $r = "[object Float64Array]", zr = "[object Int8Array]", Gr = "[object Int16Array]", Hr = "[object Int32Array]", qr = "[object Uint8Array]", Kr = "[object Uint8ClampedArray]", Zr = "[object Uint16Array]", Jr = "[object Uint32Array]", Mu = /\b__p \+= '';/g, Cu = /\b(__p \+=) '' \+/g, bu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, vs = /&(?:amp|lt|gt|quot|#39);/g, ms = /[&<>"']/g, xu = RegExp(vs.source), Su = RegExp(ms.source), Au = /<%-([\s\S]+?)%>/g, Iu = /<%([\s\S]+?)%>/g, ws = /<%=([\s\S]+?)%>/g, Tu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fu = /^\w*$/, Pu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /[\\^$.*+?()[\]{}|]/g, Eu = RegExp(Yr.source), Xr = /^\s+/, Ru = /\s/, ku = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Lu = /\{\n\/\* \[wrapped with (.+)\] \*/, Ou = /,? & /, Du = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Nu = /[()=,{}\[\]\/\s]/, Wu = /\\(\\)?/g, Bu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ys = /\w*$/, Uu = /^[-+]0x[0-9a-f]+$/i, $u = /^0b[01]+$/i, zu = /^\[object .+?Constructor\]$/, Gu = /^0o[0-7]+$/i, Hu = /^(?:0|[1-9]\d*)$/, qu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, Ku = /['\n\r\u2028\u2029\\]/g, Ze = "\\ud800-\\udfff", Zu = "\\u0300-\\u036f", Ju = "\\ufe20-\\ufe2f", Yu = "\\u20d0-\\u20ff", Ms = Zu + Ju + Yu, Cs = "\\u2700-\\u27bf", bs = "a-z\\xdf-\\xf6\\xf8-\\xff", Xu = "\\xac\\xb1\\xd7\\xf7", Qu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Vu = "\\u2000-\\u206f", ju = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ss = "\\ufe0e\\ufe0f", As = Xu + Qu + Vu + ju, Qr = "['’]", tl = "[" + Ze + "]", Is = "[" + As + "]", Je = "[" + Ms + "]", Ts = "\\d+", nl = "[" + Cs + "]", Fs = "[" + bs + "]", Ps = "[^" + Ze + As + Ts + Cs + bs + xs + "]", Vr = "\\ud83c[\\udffb-\\udfff]", el = "(?:" + Je + "|" + Vr + ")", Es = "[^" + Ze + "]", jr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + xs + "]", Rs = "\\u200d", ks = "(?:" + Fs + "|" + Ps + ")", rl = "(?:" + ie + "|" + Ps + ")", Ls = "(?:" + Qr + "(?:d|ll|m|re|s|t|ve))?", Os = "(?:" + Qr + "(?:D|LL|M|RE|S|T|VE))?", Ds = el + "?", Ns = "[" + Ss + "]?", il = "(?:" + Rs + "(?:" + [Es, jr, ti].join("|") + ")" + Ns + Ds + ")*", sl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", al = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ws = Ns + Ds + il, ol = "(?:" + [nl, jr, ti].join("|") + ")" + Ws, ul = "(?:" + [Es + Je + "?", Je, jr, ti, tl].join("|") + ")", ll = RegExp(Qr, "g"), fl = RegExp(Je, "g"), ni = RegExp(Vr + "(?=" + Vr + ")|" + ul + Ws, "g"), cl = RegExp([
      ie + "?" + Fs + "+" + Ls + "(?=" + [Is, ie, "$"].join("|") + ")",
      rl + "+" + Os + "(?=" + [Is, ie + ks, "$"].join("|") + ")",
      ie + "?" + ks + "+" + Ls,
      ie + "+" + Os,
      al,
      sl,
      Ts,
      ol
    ].join("|"), "g"), hl = RegExp("[" + Rs + Ze + Ms + Ss + "]"), pl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gl = [
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
    ], dl = -1, ft = {};
    ft[Ur] = ft[$r] = ft[zr] = ft[Gr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Zr] = ft[Jr] = !0, ft[nt] = ft[ht] = ft[Me] = ft[lt] = ft[re] = ft[yt] = ft[Rt] = ft[Nt] = ft[_t] = ft[kt] = ft[Mt] = ft[tn] = ft[pt] = ft[wn] = ft[ye] = !1;
    var ut = {};
    ut[nt] = ut[ht] = ut[Me] = ut[re] = ut[lt] = ut[yt] = ut[Ur] = ut[$r] = ut[zr] = ut[Gr] = ut[Hr] = ut[_t] = ut[kt] = ut[Mt] = ut[tn] = ut[pt] = ut[wn] = ut[qe] = ut[qr] = ut[Kr] = ut[Zr] = ut[Jr] = !0, ut[Rt] = ut[Nt] = ut[ye] = !1;
    var _l = {
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
    }, vl = {
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
    }, wl = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, yl = parseFloat, Ml = parseInt, Bs = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, Cl = typeof self == "object" && self && self.Object === Object && self, Tt = Bs || Cl || Function("return this")(), ei = i && !i.nodeType && i, Zn = ei && !0 && c && !c.nodeType && c, Us = Zn && Zn.exports === ei, ri = Us && Bs.process, nn = function() {
      try {
        var v = Zn && Zn.require && Zn.require("util").types;
        return v || ri && ri.binding && ri.binding("util");
      } catch {
      }
    }(), $s = nn && nn.isArrayBuffer, zs = nn && nn.isDate, Gs = nn && nn.isMap, Hs = nn && nn.isRegExp, qs = nn && nn.isSet, Ks = nn && nn.isTypedArray;
    function Kt(v, S, x) {
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
    function bl(v, S, x, L) {
      for (var H = -1, rt = v == null ? 0 : v.length; ++H < rt; ) {
        var Ct = v[H];
        S(L, Ct, x(Ct), v);
      }
      return L;
    }
    function en(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L && S(v[x], x, v) !== !1; )
        ;
      return v;
    }
    function xl(v, S) {
      for (var x = v == null ? 0 : v.length; x-- && S(v[x], x, v) !== !1; )
        ;
      return v;
    }
    function Zs(v, S) {
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
    function Ye(v, S) {
      var x = v == null ? 0 : v.length;
      return !!x && se(v, S, 0) > -1;
    }
    function ii(v, S, x) {
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
    function si(v, S, x, L) {
      var H = -1, rt = v == null ? 0 : v.length;
      for (L && rt && (x = v[++H]); ++H < rt; )
        x = S(x, v[H], H, v);
      return x;
    }
    function Sl(v, S, x, L) {
      var H = v == null ? 0 : v.length;
      for (L && H && (x = v[--H]); H--; )
        x = S(x, v[H], H, v);
      return x;
    }
    function ai(v, S) {
      for (var x = -1, L = v == null ? 0 : v.length; ++x < L; )
        if (S(v[x], x, v))
          return !0;
      return !1;
    }
    var Al = oi("length");
    function Il(v) {
      return v.split("");
    }
    function Tl(v) {
      return v.match(Du) || [];
    }
    function Js(v, S, x) {
      var L;
      return x(v, function(H, rt, Ct) {
        if (S(H, rt, Ct))
          return L = rt, !1;
      }), L;
    }
    function Xe(v, S, x, L) {
      for (var H = v.length, rt = x + (L ? 1 : -1); L ? rt-- : ++rt < H; )
        if (S(v[rt], rt, v))
          return rt;
      return -1;
    }
    function se(v, S, x) {
      return S === S ? Ul(v, S, x) : Xe(v, Ys, x);
    }
    function Fl(v, S, x, L) {
      for (var H = x - 1, rt = v.length; ++H < rt; )
        if (L(v[H], S))
          return H;
      return -1;
    }
    function Ys(v) {
      return v !== v;
    }
    function Xs(v, S) {
      var x = v == null ? 0 : v.length;
      return x ? li(v, S) / x : xn;
    }
    function oi(v) {
      return function(S) {
        return S == null ? r : S[v];
      };
    }
    function ui(v) {
      return function(S) {
        return v == null ? r : v[S];
      };
    }
    function Qs(v, S, x, L, H) {
      return H(v, function(rt, Ct, at) {
        x = L ? (L = !1, rt) : S(x, rt, Ct, at);
      }), x;
    }
    function Pl(v, S) {
      var x = v.length;
      for (v.sort(S); x--; )
        v[x] = v[x].value;
      return v;
    }
    function li(v, S) {
      for (var x, L = -1, H = v.length; ++L < H; ) {
        var rt = S(v[L]);
        rt !== r && (x = x === r ? rt : x + rt);
      }
      return x;
    }
    function fi(v, S) {
      for (var x = -1, L = Array(v); ++x < v; )
        L[x] = S(x);
      return L;
    }
    function El(v, S) {
      return gt(S, function(x) {
        return [x, v[x]];
      });
    }
    function Vs(v) {
      return v && v.slice(0, ea(v) + 1).replace(Xr, "");
    }
    function Zt(v) {
      return function(S) {
        return v(S);
      };
    }
    function ci(v, S) {
      return gt(S, function(x) {
        return v[x];
      });
    }
    function Ce(v, S) {
      return v.has(S);
    }
    function js(v, S) {
      for (var x = -1, L = v.length; ++x < L && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function ta(v, S) {
      for (var x = v.length; x-- && se(S, v[x], 0) > -1; )
        ;
      return x;
    }
    function Rl(v, S) {
      for (var x = v.length, L = 0; x--; )
        v[x] === S && ++L;
      return L;
    }
    var kl = ui(_l), Ll = ui(vl);
    function Ol(v) {
      return "\\" + wl[v];
    }
    function Dl(v, S) {
      return v == null ? r : v[S];
    }
    function ae(v) {
      return hl.test(v);
    }
    function Nl(v) {
      return pl.test(v);
    }
    function Wl(v) {
      for (var S, x = []; !(S = v.next()).done; )
        x.push(S.value);
      return x;
    }
    function hi(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L, H) {
        x[++S] = [H, L];
      }), x;
    }
    function na(v, S) {
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
    function Qe(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = L;
      }), x;
    }
    function Bl(v) {
      var S = -1, x = Array(v.size);
      return v.forEach(function(L) {
        x[++S] = [L, L];
      }), x;
    }
    function Ul(v, S, x) {
      for (var L = x - 1, H = v.length; ++L < H; )
        if (v[L] === S)
          return L;
      return -1;
    }
    function $l(v, S, x) {
      for (var L = x + 1; L--; )
        if (v[L] === S)
          return L;
      return L;
    }
    function oe(v) {
      return ae(v) ? Gl(v) : Al(v);
    }
    function hn(v) {
      return ae(v) ? Hl(v) : Il(v);
    }
    function ea(v) {
      for (var S = v.length; S-- && Ru.test(v.charAt(S)); )
        ;
      return S;
    }
    var zl = ui(ml);
    function Gl(v) {
      for (var S = ni.lastIndex = 0; ni.test(v); )
        ++S;
      return S;
    }
    function Hl(v) {
      return v.match(ni) || [];
    }
    function ql(v) {
      return v.match(cl) || [];
    }
    var Kl = function v(S) {
      S = S == null ? Tt : ue.defaults(Tt.Object(), S, ue.pick(Tt, gl));
      var x = S.Array, L = S.Date, H = S.Error, rt = S.Function, Ct = S.Math, at = S.Object, pi = S.RegExp, Zl = S.String, rn = S.TypeError, Ve = x.prototype, Jl = rt.prototype, le = at.prototype, je = S["__core-js_shared__"], tr = Jl.toString, st = le.hasOwnProperty, Yl = 0, ra = function() {
        var t = /[^.]+$/.exec(je && je.keys && je.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), nr = le.toString, Xl = tr.call(at), Ql = Tt._, Vl = pi(
        "^" + tr.call(st).replace(Yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), er = Us ? S.Buffer : r, Un = S.Symbol, rr = S.Uint8Array, ia = er ? er.allocUnsafe : r, ir = na(at.getPrototypeOf, at), sa = at.create, aa = le.propertyIsEnumerable, sr = Ve.splice, oa = Un ? Un.isConcatSpreadable : r, be = Un ? Un.iterator : r, Jn = Un ? Un.toStringTag : r, ar = function() {
        try {
          var t = jn(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), jl = S.clearTimeout !== Tt.clearTimeout && S.clearTimeout, tf = L && L.now !== Tt.Date.now && L.now, nf = S.setTimeout !== Tt.setTimeout && S.setTimeout, or = Ct.ceil, ur = Ct.floor, gi = at.getOwnPropertySymbols, ef = er ? er.isBuffer : r, ua = S.isFinite, rf = Ve.join, sf = na(at.keys, at), bt = Ct.max, Pt = Ct.min, af = L.now, of = S.parseInt, la = Ct.random, uf = Ve.reverse, di = jn(S, "DataView"), xe = jn(S, "Map"), _i = jn(S, "Promise"), fe = jn(S, "Set"), Se = jn(S, "WeakMap"), Ae = jn(at, "create"), lr = Se && new Se(), ce = {}, lf = te(di), ff = te(xe), cf = te(_i), hf = te(fe), pf = te(Se), fr = Un ? Un.prototype : r, Ie = fr ? fr.valueOf : r, fa = fr ? fr.toString : r;
      function u(t) {
        if (vt(t) && !q(t) && !(t instanceof j)) {
          if (t instanceof sn)
            return t;
          if (st.call(t, "__wrapped__"))
            return co(t);
        }
        return new sn(t);
      }
      var he = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          if (!dt(n))
            return {};
          if (sa)
            return sa(n);
          t.prototype = n;
          var e = new t();
          return t.prototype = r, e;
        };
      }();
      function cr() {
      }
      function sn(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Au,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Iu,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ws,
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
      }, u.prototype = cr.prototype, u.prototype.constructor = u, sn.prototype = he(cr.prototype), sn.prototype.constructor = sn;
      function j(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
      }
      function gf() {
        var t = new j(this.__wrapped__);
        return t.__actions__ = Bt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Bt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Bt(this.__views__), t;
      }
      function df() {
        if (this.__filtered__) {
          var t = new j(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function _f() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = q(t), s = n < 0, a = e ? t.length : 0, l = Tc(0, a, this.__views__), h = l.start, d = l.end, w = d - h, A = s ? d : h - 1, I = this.__iteratees__, T = I.length, E = 0, D = Pt(w, this.__takeCount__);
        if (!e || !s && a == w && D == w)
          return La(t, this.__actions__);
        var U = [];
        t:
          for (; w-- && E < D; ) {
            A += n;
            for (var J = -1, $ = t[A]; ++J < T; ) {
              var V = I[J], tt = V.iteratee, Xt = V.type, Dt = tt($);
              if (Xt == Ge)
                $ = Dt;
              else if (!Dt) {
                if (Xt == we)
                  continue t;
                break t;
              }
            }
            U[E++] = $;
          }
        return U;
      }
      j.prototype = he(cr.prototype), j.prototype.constructor = j;
      function Yn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function vf() {
        this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
      }
      function mf(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function wf(t) {
        var n = this.__data__;
        if (Ae) {
          var e = n[t];
          return e === M ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function yf(t) {
        var n = this.__data__;
        return Ae ? n[t] !== r : st.call(n, t);
      }
      function Mf(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Ae && n === r ? M : n, this;
      }
      Yn.prototype.clear = vf, Yn.prototype.delete = mf, Yn.prototype.get = wf, Yn.prototype.has = yf, Yn.prototype.set = Mf;
      function Sn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function Cf() {
        this.__data__ = [], this.size = 0;
      }
      function bf(t) {
        var n = this.__data__, e = hr(n, t);
        if (e < 0)
          return !1;
        var s = n.length - 1;
        return e == s ? n.pop() : sr.call(n, e, 1), --this.size, !0;
      }
      function xf(t) {
        var n = this.__data__, e = hr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function Sf(t) {
        return hr(this.__data__, t) > -1;
      }
      function Af(t, n) {
        var e = this.__data__, s = hr(e, t);
        return s < 0 ? (++this.size, e.push([t, n])) : e[s][1] = n, this;
      }
      Sn.prototype.clear = Cf, Sn.prototype.delete = bf, Sn.prototype.get = xf, Sn.prototype.has = Sf, Sn.prototype.set = Af;
      function An(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function If() {
        this.size = 0, this.__data__ = {
          hash: new Yn(),
          map: new (xe || Sn)(),
          string: new Yn()
        };
      }
      function Tf(t) {
        var n = xr(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Ff(t) {
        return xr(this, t).get(t);
      }
      function Pf(t) {
        return xr(this, t).has(t);
      }
      function Ef(t, n) {
        var e = xr(this, t), s = e.size;
        return e.set(t, n), this.size += e.size == s ? 0 : 1, this;
      }
      An.prototype.clear = If, An.prototype.delete = Tf, An.prototype.get = Ff, An.prototype.has = Pf, An.prototype.set = Ef;
      function Xn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new An(); ++n < e; )
          this.add(t[n]);
      }
      function Rf(t) {
        return this.__data__.set(t, M), this;
      }
      function kf(t) {
        return this.__data__.has(t);
      }
      Xn.prototype.add = Xn.prototype.push = Rf, Xn.prototype.has = kf;
      function pn(t) {
        var n = this.__data__ = new Sn(t);
        this.size = n.size;
      }
      function Lf() {
        this.__data__ = new Sn(), this.size = 0;
      }
      function Of(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Df(t) {
        return this.__data__.get(t);
      }
      function Nf(t) {
        return this.__data__.has(t);
      }
      function Wf(t, n) {
        var e = this.__data__;
        if (e instanceof Sn) {
          var s = e.__data__;
          if (!xe || s.length < f - 1)
            return s.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new An(s);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = Lf, pn.prototype.delete = Of, pn.prototype.get = Df, pn.prototype.has = Nf, pn.prototype.set = Wf;
      function ca(t, n) {
        var e = q(t), s = !e && ne(t), a = !e && !s && qn(t), l = !e && !s && !a && _e(t), h = e || s || a || l, d = h ? fi(t.length, Zl) : [], w = d.length;
        for (var A in t)
          (n || st.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          Pn(A, w))) && d.push(A);
        return d;
      }
      function ha(t) {
        var n = t.length;
        return n ? t[Ii(0, n - 1)] : r;
      }
      function Bf(t, n) {
        return Sr(Bt(t), Qn(n, 0, t.length));
      }
      function Uf(t) {
        return Sr(Bt(t));
      }
      function vi(t, n, e) {
        (e !== r && !gn(t[n], e) || e === r && !(n in t)) && In(t, n, e);
      }
      function Te(t, n, e) {
        var s = t[n];
        (!(st.call(t, n) && gn(s, e)) || e === r && !(n in t)) && In(t, n, e);
      }
      function hr(t, n) {
        for (var e = t.length; e--; )
          if (gn(t[e][0], n))
            return e;
        return -1;
      }
      function $f(t, n, e, s) {
        return $n(t, function(a, l, h) {
          n(s, a, e(a), h);
        }), s;
      }
      function pa(t, n) {
        return t && Mn(n, St(n), t);
      }
      function zf(t, n) {
        return t && Mn(n, $t(n), t);
      }
      function In(t, n, e) {
        n == "__proto__" && ar ? ar(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[n] = e;
      }
      function mi(t, n) {
        for (var e = -1, s = n.length, a = x(s), l = t == null; ++e < s; )
          a[e] = l ? r : Vi(t, n[e]);
        return a;
      }
      function Qn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function an(t, n, e, s, a, l) {
        var h, d = n & m, w = n & P, A = n & O;
        if (e && (h = a ? e(t, s, a, l) : e(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var I = q(t);
        if (I) {
          if (h = Pc(t), !d)
            return Bt(t, h);
        } else {
          var T = Et(t), E = T == Nt || T == mn;
          if (qn(t))
            return Na(t, d);
          if (T == Mt || T == nt || E && !a) {
            if (h = w || E ? {} : eo(t), !d)
              return w ? wc(t, zf(h, t)) : mc(t, pa(h, t));
          } else {
            if (!ut[T])
              return a ? t : {};
            h = Ec(t, T, d);
          }
        }
        l || (l = new pn());
        var D = l.get(t);
        if (D)
          return D;
        l.set(t, h), Ro(t) ? t.forEach(function($) {
          h.add(an($, n, e, $, t, l));
        }) : Po(t) && t.forEach(function($, V) {
          h.set(V, an($, n, e, V, t, l));
        });
        var U = A ? w ? Wi : Ni : w ? $t : St, J = I ? r : U(t);
        return en(J || t, function($, V) {
          J && (V = $, $ = t[V]), Te(h, V, an($, n, e, V, t, l));
        }), h;
      }
      function Gf(t) {
        var n = St(t);
        return function(e) {
          return ga(e, t, n);
        };
      }
      function ga(t, n, e) {
        var s = e.length;
        if (t == null)
          return !s;
        for (t = at(t); s--; ) {
          var a = e[s], l = n[a], h = t[a];
          if (h === r && !(a in t) || !l(h))
            return !1;
        }
        return !0;
      }
      function da(t, n, e) {
        if (typeof t != "function")
          throw new rn(g);
        return Oe(function() {
          t.apply(r, e);
        }, n);
      }
      function Fe(t, n, e, s) {
        var a = -1, l = Ye, h = !0, d = t.length, w = [], A = n.length;
        if (!d)
          return w;
        e && (n = gt(n, Zt(e))), s ? (l = ii, h = !1) : n.length >= f && (l = Ce, h = !1, n = new Xn(n));
        t:
          for (; ++a < d; ) {
            var I = t[a], T = e == null ? I : e(I);
            if (I = s || I !== 0 ? I : 0, h && T === T) {
              for (var E = A; E--; )
                if (n[E] === T)
                  continue t;
              w.push(I);
            } else
              l(n, T, s) || w.push(I);
          }
        return w;
      }
      var $n = za(yn), _a = za(yi, !0);
      function Hf(t, n) {
        var e = !0;
        return $n(t, function(s, a, l) {
          return e = !!n(s, a, l), e;
        }), e;
      }
      function pr(t, n, e) {
        for (var s = -1, a = t.length; ++s < a; ) {
          var l = t[s], h = n(l);
          if (h != null && (d === r ? h === h && !Yt(h) : e(h, d)))
            var d = h, w = l;
        }
        return w;
      }
      function qf(t, n, e, s) {
        var a = t.length;
        for (e = Z(e), e < 0 && (e = -e > a ? 0 : a + e), s = s === r || s > a ? a : Z(s), s < 0 && (s += a), s = e > s ? 0 : Lo(s); e < s; )
          t[e++] = n;
        return t;
      }
      function va(t, n) {
        var e = [];
        return $n(t, function(s, a, l) {
          n(s, a, l) && e.push(s);
        }), e;
      }
      function Ft(t, n, e, s, a) {
        var l = -1, h = t.length;
        for (e || (e = kc), a || (a = []); ++l < h; ) {
          var d = t[l];
          n > 0 && e(d) ? n > 1 ? Ft(d, n - 1, e, s, a) : Wn(a, d) : s || (a[a.length] = d);
        }
        return a;
      }
      var wi = Ga(), ma = Ga(!0);
      function yn(t, n) {
        return t && wi(t, n, St);
      }
      function yi(t, n) {
        return t && ma(t, n, St);
      }
      function gr(t, n) {
        return Nn(n, function(e) {
          return En(t[e]);
        });
      }
      function Vn(t, n) {
        n = Gn(n, t);
        for (var e = 0, s = n.length; t != null && e < s; )
          t = t[Cn(n[e++])];
        return e && e == s ? t : r;
      }
      function wa(t, n, e) {
        var s = n(t);
        return q(t) ? s : Wn(s, e(t));
      }
      function Lt(t) {
        return t == null ? t === r ? wu : Dn : Jn && Jn in at(t) ? Ic(t) : Uc(t);
      }
      function Mi(t, n) {
        return t > n;
      }
      function Kf(t, n) {
        return t != null && st.call(t, n);
      }
      function Zf(t, n) {
        return t != null && n in at(t);
      }
      function Jf(t, n, e) {
        return t >= Pt(n, e) && t < bt(n, e);
      }
      function Ci(t, n, e) {
        for (var s = e ? ii : Ye, a = t[0].length, l = t.length, h = l, d = x(l), w = 1 / 0, A = []; h--; ) {
          var I = t[h];
          h && n && (I = gt(I, Zt(n))), w = Pt(I.length, w), d[h] = !e && (n || a >= 120 && I.length >= 120) ? new Xn(h && I) : r;
        }
        I = t[0];
        var T = -1, E = d[0];
        t:
          for (; ++T < a && A.length < w; ) {
            var D = I[T], U = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(E ? Ce(E, U) : s(A, U, e))) {
              for (h = l; --h; ) {
                var J = d[h];
                if (!(J ? Ce(J, U) : s(t[h], U, e)))
                  continue t;
              }
              E && E.push(U), A.push(D);
            }
          }
        return A;
      }
      function Yf(t, n, e, s) {
        return yn(t, function(a, l, h) {
          n(s, e(a), l, h);
        }), s;
      }
      function Pe(t, n, e) {
        n = Gn(n, t), t = ao(t, n);
        var s = t == null ? t : t[Cn(un(n))];
        return s == null ? r : Kt(s, t, e);
      }
      function ya(t) {
        return vt(t) && Lt(t) == nt;
      }
      function Xf(t) {
        return vt(t) && Lt(t) == Me;
      }
      function Qf(t) {
        return vt(t) && Lt(t) == yt;
      }
      function Ee(t, n, e, s, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : Vf(t, n, e, s, Ee, a);
      }
      function Vf(t, n, e, s, a, l) {
        var h = q(t), d = q(n), w = h ? ht : Et(t), A = d ? ht : Et(n);
        w = w == nt ? Mt : w, A = A == nt ? Mt : A;
        var I = w == Mt, T = A == Mt, E = w == A;
        if (E && qn(t)) {
          if (!qn(n))
            return !1;
          h = !0, I = !1;
        }
        if (E && !I)
          return l || (l = new pn()), h || _e(t) ? ja(t, n, e, s, a, l) : Sc(t, n, w, e, s, a, l);
        if (!(e & R)) {
          var D = I && st.call(t, "__wrapped__"), U = T && st.call(n, "__wrapped__");
          if (D || U) {
            var J = D ? t.value() : t, $ = U ? n.value() : n;
            return l || (l = new pn()), a(J, $, e, s, l);
          }
        }
        return E ? (l || (l = new pn()), Ac(t, n, e, s, a, l)) : !1;
      }
      function jf(t) {
        return vt(t) && Et(t) == _t;
      }
      function bi(t, n, e, s) {
        var a = e.length, l = a, h = !s;
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
            if (s)
              var E = s(A, I, w, t, n, T);
            if (!(E === r ? Ee(I, A, R | F, s, T) : E))
              return !1;
          }
        }
        return !0;
      }
      function Ma(t) {
        if (!dt(t) || Oc(t))
          return !1;
        var n = En(t) ? Vl : zu;
        return n.test(te(t));
      }
      function tc(t) {
        return vt(t) && Lt(t) == tn;
      }
      function nc(t) {
        return vt(t) && Et(t) == pt;
      }
      function ec(t) {
        return vt(t) && Er(t.length) && !!ft[Lt(t)];
      }
      function Ca(t) {
        return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? q(t) ? Sa(t[0], t[1]) : xa(t) : qo(t);
      }
      function xi(t) {
        if (!Le(t))
          return sf(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function rc(t) {
        if (!dt(t))
          return Bc(t);
        var n = Le(t), e = [];
        for (var s in t)
          s == "constructor" && (n || !st.call(t, s)) || e.push(s);
        return e;
      }
      function Si(t, n) {
        return t < n;
      }
      function ba(t, n) {
        var e = -1, s = Ut(t) ? x(t.length) : [];
        return $n(t, function(a, l, h) {
          s[++e] = n(a, l, h);
        }), s;
      }
      function xa(t) {
        var n = Ui(t);
        return n.length == 1 && n[0][2] ? io(n[0][0], n[0][1]) : function(e) {
          return e === t || bi(e, t, n);
        };
      }
      function Sa(t, n) {
        return zi(t) && ro(n) ? io(Cn(t), n) : function(e) {
          var s = Vi(e, t);
          return s === r && s === n ? ji(e, t) : Ee(n, s, R | F);
        };
      }
      function dr(t, n, e, s, a) {
        t !== n && wi(n, function(l, h) {
          if (a || (a = new pn()), dt(l))
            ic(t, n, h, e, dr, s, a);
          else {
            var d = s ? s(Hi(t, h), l, h + "", t, n, a) : r;
            d === r && (d = l), vi(t, h, d);
          }
        }, $t);
      }
      function ic(t, n, e, s, a, l, h) {
        var d = Hi(t, e), w = Hi(n, e), A = h.get(w);
        if (A) {
          vi(t, e, A);
          return;
        }
        var I = l ? l(d, w, e + "", t, n, h) : r, T = I === r;
        if (T) {
          var E = q(w), D = !E && qn(w), U = !E && !D && _e(w);
          I = w, E || D || U ? q(d) ? I = d : mt(d) ? I = Bt(d) : D ? (T = !1, I = Na(w, !0)) : U ? (T = !1, I = Wa(w, !0)) : I = [] : De(w) || ne(w) ? (I = d, ne(d) ? I = Oo(d) : (!dt(d) || En(d)) && (I = eo(w))) : T = !1;
        }
        T && (h.set(w, I), a(I, w, s, l, h), h.delete(w)), vi(t, e, I);
      }
      function Aa(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, Pn(n, e) ? t[n] : r;
      }
      function Ia(t, n, e) {
        n.length ? n = gt(n, function(l) {
          return q(l) ? function(h) {
            return Vn(h, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [zt];
        var s = -1;
        n = gt(n, Zt(B()));
        var a = ba(t, function(l, h, d) {
          var w = gt(n, function(A) {
            return A(l);
          });
          return { criteria: w, index: ++s, value: l };
        });
        return Pl(a, function(l, h) {
          return vc(l, h, e);
        });
      }
      function sc(t, n) {
        return Ta(t, n, function(e, s) {
          return ji(t, s);
        });
      }
      function Ta(t, n, e) {
        for (var s = -1, a = n.length, l = {}; ++s < a; ) {
          var h = n[s], d = Vn(t, h);
          e(d, h) && Re(l, Gn(h, t), d);
        }
        return l;
      }
      function ac(t) {
        return function(n) {
          return Vn(n, t);
        };
      }
      function Ai(t, n, e, s) {
        var a = s ? Fl : se, l = -1, h = n.length, d = t;
        for (t === n && (n = Bt(n)), e && (d = gt(t, Zt(e))); ++l < h; )
          for (var w = 0, A = n[l], I = e ? e(A) : A; (w = a(d, I, w, s)) > -1; )
            d !== t && sr.call(d, w, 1), sr.call(t, w, 1);
        return t;
      }
      function Fa(t, n) {
        for (var e = t ? n.length : 0, s = e - 1; e--; ) {
          var a = n[e];
          if (e == s || a !== l) {
            var l = a;
            Pn(a) ? sr.call(t, a, 1) : Pi(t, a);
          }
        }
        return t;
      }
      function Ii(t, n) {
        return t + ur(la() * (n - t + 1));
      }
      function oc(t, n, e, s) {
        for (var a = -1, l = bt(or((n - t) / (e || 1)), 0), h = x(l); l--; )
          h[s ? l : ++a] = t, t += e;
        return h;
      }
      function Ti(t, n) {
        var e = "";
        if (!t || n < 1 || n > vn)
          return e;
        do
          n % 2 && (e += t), n = ur(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function Y(t, n) {
        return qi(so(t, n, zt), t + "");
      }
      function uc(t) {
        return ha(ve(t));
      }
      function lc(t, n) {
        var e = ve(t);
        return Sr(e, Qn(n, 0, e.length));
      }
      function Re(t, n, e, s) {
        if (!dt(t))
          return t;
        n = Gn(n, t);
        for (var a = -1, l = n.length, h = l - 1, d = t; d != null && ++a < l; ) {
          var w = Cn(n[a]), A = e;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return t;
          if (a != h) {
            var I = d[w];
            A = s ? s(I, w, d) : r, A === r && (A = dt(I) ? I : Pn(n[a + 1]) ? [] : {});
          }
          Te(d, w, A), d = d[w];
        }
        return t;
      }
      var Pa = lr ? function(t, n) {
        return lr.set(t, n), t;
      } : zt, fc = ar ? function(t, n) {
        return ar(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ns(n),
          writable: !0
        });
      } : zt;
      function cc(t) {
        return Sr(ve(t));
      }
      function on(t, n, e) {
        var s = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = x(a); ++s < a; )
          l[s] = t[s + n];
        return l;
      }
      function hc(t, n) {
        var e;
        return $n(t, function(s, a, l) {
          return e = n(s, a, l), !e;
        }), !!e;
      }
      function _r(t, n, e) {
        var s = 0, a = t == null ? s : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; s < a; ) {
            var l = s + a >>> 1, h = t[l];
            h !== null && !Yt(h) && (e ? h <= n : h < n) ? s = l + 1 : a = l;
          }
          return a;
        }
        return Fi(t, n, zt, e);
      }
      function Fi(t, n, e, s) {
        var a = 0, l = t == null ? 0 : t.length;
        if (l === 0)
          return 0;
        n = e(n);
        for (var h = n !== n, d = n === null, w = Yt(n), A = n === r; a < l; ) {
          var I = ur((a + l) / 2), T = e(t[I]), E = T !== r, D = T === null, U = T === T, J = Yt(T);
          if (h)
            var $ = s || U;
          else
            A ? $ = U && (s || E) : d ? $ = U && E && (s || !D) : w ? $ = U && E && !D && (s || !J) : D || J ? $ = !1 : $ = s ? T <= n : T < n;
          $ ? a = I + 1 : l = I;
        }
        return Pt(l, z);
      }
      function Ea(t, n) {
        for (var e = -1, s = t.length, a = 0, l = []; ++e < s; ) {
          var h = t[e], d = n ? n(h) : h;
          if (!e || !gn(d, w)) {
            var w = d;
            l[a++] = h === 0 ? 0 : h;
          }
        }
        return l;
      }
      function Ra(t) {
        return typeof t == "number" ? t : Yt(t) ? xn : +t;
      }
      function Jt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return gt(t, Jt) + "";
        if (Yt(t))
          return fa ? fa.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function zn(t, n, e) {
        var s = -1, a = Ye, l = t.length, h = !0, d = [], w = d;
        if (e)
          h = !1, a = ii;
        else if (l >= f) {
          var A = n ? null : bc(t);
          if (A)
            return Qe(A);
          h = !1, a = Ce, w = new Xn();
        } else
          w = n ? [] : d;
        t:
          for (; ++s < l; ) {
            var I = t[s], T = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, h && T === T) {
              for (var E = w.length; E--; )
                if (w[E] === T)
                  continue t;
              n && w.push(T), d.push(I);
            } else
              a(w, T, e) || (w !== d && w.push(T), d.push(I));
          }
        return d;
      }
      function Pi(t, n) {
        return n = Gn(n, t), t = ao(t, n), t == null || delete t[Cn(un(n))];
      }
      function ka(t, n, e, s) {
        return Re(t, n, e(Vn(t, n)), s);
      }
      function vr(t, n, e, s) {
        for (var a = t.length, l = s ? a : -1; (s ? l-- : ++l < a) && n(t[l], l, t); )
          ;
        return e ? on(t, s ? 0 : l, s ? l + 1 : a) : on(t, s ? l + 1 : 0, s ? a : l);
      }
      function La(t, n) {
        var e = t;
        return e instanceof j && (e = e.value()), si(n, function(s, a) {
          return a.func.apply(a.thisArg, Wn([s], a.args));
        }, e);
      }
      function Ei(t, n, e) {
        var s = t.length;
        if (s < 2)
          return s ? zn(t[0]) : [];
        for (var a = -1, l = x(s); ++a < s; )
          for (var h = t[a], d = -1; ++d < s; )
            d != a && (l[a] = Fe(l[a] || h, t[d], n, e));
        return zn(Ft(l, 1), n, e);
      }
      function Oa(t, n, e) {
        for (var s = -1, a = t.length, l = n.length, h = {}; ++s < a; ) {
          var d = s < l ? n[s] : r;
          e(h, t[s], d);
        }
        return h;
      }
      function Ri(t) {
        return mt(t) ? t : [];
      }
      function ki(t) {
        return typeof t == "function" ? t : zt;
      }
      function Gn(t, n) {
        return q(t) ? t : zi(t, n) ? [t] : fo(it(t));
      }
      var pc = Y;
      function Hn(t, n, e) {
        var s = t.length;
        return e = e === r ? s : e, !n && e >= s ? t : on(t, n, e);
      }
      var Da = jl || function(t) {
        return Tt.clearTimeout(t);
      };
      function Na(t, n) {
        if (n)
          return t.slice();
        var e = t.length, s = ia ? ia(e) : new t.constructor(e);
        return t.copy(s), s;
      }
      function Li(t) {
        var n = new t.constructor(t.byteLength);
        return new rr(n).set(new rr(t)), n;
      }
      function gc(t, n) {
        var e = n ? Li(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function dc(t) {
        var n = new t.constructor(t.source, ys.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function _c(t) {
        return Ie ? at(Ie.call(t)) : {};
      }
      function Wa(t, n) {
        var e = n ? Li(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function Ba(t, n) {
        if (t !== n) {
          var e = t !== r, s = t === null, a = t === t, l = Yt(t), h = n !== r, d = n === null, w = n === n, A = Yt(n);
          if (!d && !A && !l && t > n || l && h && w && !d && !A || s && h && w || !e && w || !a)
            return 1;
          if (!s && !l && !A && t < n || A && e && a && !s && !l || d && e && a || !h && a || !w)
            return -1;
        }
        return 0;
      }
      function vc(t, n, e) {
        for (var s = -1, a = t.criteria, l = n.criteria, h = a.length, d = e.length; ++s < h; ) {
          var w = Ba(a[s], l[s]);
          if (w) {
            if (s >= d)
              return w;
            var A = e[s];
            return w * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ua(t, n, e, s) {
        for (var a = -1, l = t.length, h = e.length, d = -1, w = n.length, A = bt(l - h, 0), I = x(w + A), T = !s; ++d < w; )
          I[d] = n[d];
        for (; ++a < h; )
          (T || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[d++] = t[a++];
        return I;
      }
      function $a(t, n, e, s) {
        for (var a = -1, l = t.length, h = -1, d = e.length, w = -1, A = n.length, I = bt(l - d, 0), T = x(I + A), E = !s; ++a < I; )
          T[a] = t[a];
        for (var D = a; ++w < A; )
          T[D + w] = n[w];
        for (; ++h < d; )
          (E || a < l) && (T[D + e[h]] = t[a++]);
        return T;
      }
      function Bt(t, n) {
        var e = -1, s = t.length;
        for (n || (n = x(s)); ++e < s; )
          n[e] = t[e];
        return n;
      }
      function Mn(t, n, e, s) {
        var a = !e;
        e || (e = {});
        for (var l = -1, h = n.length; ++l < h; ) {
          var d = n[l], w = s ? s(e[d], t[d], d, e, t) : r;
          w === r && (w = t[d]), a ? In(e, d, w) : Te(e, d, w);
        }
        return e;
      }
      function mc(t, n) {
        return Mn(t, $i(t), n);
      }
      function wc(t, n) {
        return Mn(t, to(t), n);
      }
      function mr(t, n) {
        return function(e, s) {
          var a = q(e) ? bl : $f, l = n ? n() : {};
          return a(e, t, B(s, 2), l);
        };
      }
      function pe(t) {
        return Y(function(n, e) {
          var s = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
          for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && Ot(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++s < a; ) {
            var d = e[s];
            d && t(n, d, s, l);
          }
          return n;
        });
      }
      function za(t, n) {
        return function(e, s) {
          if (e == null)
            return e;
          if (!Ut(e))
            return t(e, s);
          for (var a = e.length, l = n ? a : -1, h = at(e); (n ? l-- : ++l < a) && s(h[l], l, h) !== !1; )
            ;
          return e;
        };
      }
      function Ga(t) {
        return function(n, e, s) {
          for (var a = -1, l = at(n), h = s(n), d = h.length; d--; ) {
            var w = h[t ? d : ++a];
            if (e(l[w], w, l) === !1)
              break;
          }
          return n;
        };
      }
      function yc(t, n, e) {
        var s = n & N, a = ke(t);
        function l() {
          var h = this && this !== Tt && this instanceof l ? a : t;
          return h.apply(s ? e : this, arguments);
        }
        return l;
      }
      function Ha(t) {
        return function(n) {
          n = it(n);
          var e = ae(n) ? hn(n) : r, s = e ? e[0] : n.charAt(0), a = e ? Hn(e, 1).join("") : n.slice(1);
          return s[t]() + a;
        };
      }
      function ge(t) {
        return function(n) {
          return si(Go(zo(n).replace(ll, "")), t, "");
        };
      }
      function ke(t) {
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
          var e = he(t.prototype), s = t.apply(e, n);
          return dt(s) ? s : e;
        };
      }
      function Mc(t, n, e) {
        var s = ke(t);
        function a() {
          for (var l = arguments.length, h = x(l), d = l, w = de(a); d--; )
            h[d] = arguments[d];
          var A = l < 3 && h[0] !== w && h[l - 1] !== w ? [] : Bn(h, w);
          if (l -= A.length, l < e)
            return Ya(
              t,
              n,
              wr,
              a.placeholder,
              r,
              h,
              A,
              r,
              r,
              e - l
            );
          var I = this && this !== Tt && this instanceof a ? s : t;
          return Kt(I, this, h);
        }
        return a;
      }
      function qa(t) {
        return function(n, e, s) {
          var a = at(n);
          if (!Ut(n)) {
            var l = B(e, 3);
            n = St(n), e = function(d) {
              return l(a[d], d, a);
            };
          }
          var h = t(n, e, s);
          return h > -1 ? a[l ? n[h] : h] : r;
        };
      }
      function Ka(t) {
        return Fn(function(n) {
          var e = n.length, s = e, a = sn.prototype.thru;
          for (t && n.reverse(); s--; ) {
            var l = n[s];
            if (typeof l != "function")
              throw new rn(g);
            if (a && !h && br(l) == "wrapper")
              var h = new sn([], !0);
          }
          for (s = h ? s : e; ++s < e; ) {
            l = n[s];
            var d = br(l), w = d == "wrapper" ? Bi(l) : r;
            w && Gi(w[0]) && w[1] == (It | Q | xt | Gt) && !w[4].length && w[9] == 1 ? h = h[br(w[0])].apply(h, w[3]) : h = l.length == 1 && Gi(l) ? h[d]() : h.thru(l);
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
      function wr(t, n, e, s, a, l, h, d, w, A) {
        var I = n & It, T = n & N, E = n & K, D = n & (Q | et), U = n & jt, J = E ? r : ke(t);
        function $() {
          for (var V = arguments.length, tt = x(V), Xt = V; Xt--; )
            tt[Xt] = arguments[Xt];
          if (D)
            var Dt = de($), Qt = Rl(tt, Dt);
          if (s && (tt = Ua(tt, s, a, D)), l && (tt = $a(tt, l, h, D)), V -= Qt, D && V < A) {
            var wt = Bn(tt, Dt);
            return Ya(
              t,
              n,
              wr,
              $.placeholder,
              e,
              tt,
              wt,
              d,
              w,
              A - V
            );
          }
          var dn = T ? e : this, kn = E ? dn[t] : t;
          return V = tt.length, d ? tt = $c(tt, d) : U && V > 1 && tt.reverse(), I && w < V && (tt.length = w), this && this !== Tt && this instanceof $ && (kn = J || ke(kn)), kn.apply(dn, tt);
        }
        return $;
      }
      function Za(t, n) {
        return function(e, s) {
          return Yf(e, t, n(s), {});
        };
      }
      function yr(t, n) {
        return function(e, s) {
          var a;
          if (e === r && s === r)
            return n;
          if (e !== r && (a = e), s !== r) {
            if (a === r)
              return s;
            typeof e == "string" || typeof s == "string" ? (e = Jt(e), s = Jt(s)) : (e = Ra(e), s = Ra(s)), a = t(e, s);
          }
          return a;
        };
      }
      function Oi(t) {
        return Fn(function(n) {
          return n = gt(n, Zt(B())), Y(function(e) {
            var s = this;
            return t(n, function(a) {
              return Kt(a, s, e);
            });
          });
        });
      }
      function Mr(t, n) {
        n = n === r ? " " : Jt(n);
        var e = n.length;
        if (e < 2)
          return e ? Ti(n, t) : n;
        var s = Ti(n, or(t / oe(n)));
        return ae(n) ? Hn(hn(s), 0, t).join("") : s.slice(0, t);
      }
      function Cc(t, n, e, s) {
        var a = n & N, l = ke(t);
        function h() {
          for (var d = -1, w = arguments.length, A = -1, I = s.length, T = x(I + w), E = this && this !== Tt && this instanceof h ? l : t; ++A < I; )
            T[A] = s[A];
          for (; w--; )
            T[A++] = arguments[++d];
          return Kt(E, a ? e : this, T);
        }
        return h;
      }
      function Ja(t) {
        return function(n, e, s) {
          return s && typeof s != "number" && Ot(n, e, s) && (e = s = r), n = Rn(n), e === r ? (e = n, n = 0) : e = Rn(e), s = s === r ? n < e ? 1 : -1 : Rn(s), oc(n, e, s, t);
        };
      }
      function Cr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = ln(n), e = ln(e)), t(n, e);
        };
      }
      function Ya(t, n, e, s, a, l, h, d, w, A) {
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
          w,
          A
        ], $ = e.apply(r, J);
        return Gi(t) && oo($, J), $.placeholder = s, uo($, t, n);
      }
      function Di(t) {
        var n = Ct[t];
        return function(e, s) {
          if (e = ln(e), s = s == null ? 0 : Pt(Z(s), 292), s && ua(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + s));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - s));
          }
          return n(e);
        };
      }
      var bc = fe && 1 / Qe(new fe([, -0]))[1] == bn ? function(t) {
        return new fe(t);
      } : is;
      function Xa(t) {
        return function(n) {
          var e = Et(n);
          return e == _t ? hi(n) : e == pt ? Bl(n) : El(n, t(n));
        };
      }
      function Tn(t, n, e, s, a, l, h, d) {
        var w = n & K;
        if (!w && typeof t != "function")
          throw new rn(g);
        var A = s ? s.length : 0;
        if (A || (n &= ~(xt | At), s = a = r), h = h === r ? h : bt(Z(h), 0), d = d === r ? d : Z(d), A -= a ? a.length : 0, n & At) {
          var I = s, T = a;
          s = a = r;
        }
        var E = w ? r : Bi(t), D = [
          t,
          n,
          e,
          s,
          a,
          I,
          T,
          l,
          h,
          d
        ];
        if (E && Wc(D, E), t = D[0], n = D[1], e = D[2], s = D[3], a = D[4], d = D[9] = D[9] === r ? w ? 0 : t.length : bt(D[9] - A, 0), !d && n & (Q | et) && (n &= ~(Q | et)), !n || n == N)
          var U = yc(t, n, e);
        else
          n == Q || n == et ? U = Mc(t, n, d) : (n == xt || n == (N | xt)) && !a.length ? U = Cc(t, n, e, s) : U = wr.apply(r, D);
        var J = E ? Pa : oo;
        return uo(J(U, D), t, n);
      }
      function Qa(t, n, e, s) {
        return t === r || gn(t, le[e]) && !st.call(s, e) ? n : t;
      }
      function Va(t, n, e, s, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), dr(t, n, r, Va, l), l.delete(n)), t;
      }
      function xc(t) {
        return De(t) ? r : t;
      }
      function ja(t, n, e, s, a, l) {
        var h = e & R, d = t.length, w = n.length;
        if (d != w && !(h && w > d))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var T = -1, E = !0, D = e & F ? new Xn() : r;
        for (l.set(t, n), l.set(n, t); ++T < d; ) {
          var U = t[T], J = n[T];
          if (s)
            var $ = h ? s(J, U, T, n, t, l) : s(U, J, T, t, n, l);
          if ($ !== r) {
            if ($)
              continue;
            E = !1;
            break;
          }
          if (D) {
            if (!ai(n, function(V, tt) {
              if (!Ce(D, tt) && (U === V || a(U, V, e, s, l)))
                return D.push(tt);
            })) {
              E = !1;
              break;
            }
          } else if (!(U === J || a(U, J, e, s, l))) {
            E = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), E;
      }
      function Sc(t, n, e, s, a, l, h) {
        switch (e) {
          case re:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Me:
            return !(t.byteLength != n.byteLength || !l(new rr(t), new rr(n)));
          case lt:
          case yt:
          case kt:
            return gn(+t, +n);
          case Rt:
            return t.name == n.name && t.message == n.message;
          case tn:
          case wn:
            return t == n + "";
          case _t:
            var d = hi;
          case pt:
            var w = s & R;
            if (d || (d = Qe), t.size != n.size && !w)
              return !1;
            var A = h.get(t);
            if (A)
              return A == n;
            s |= F, h.set(t, n);
            var I = ja(d(t), d(n), s, a, l, h);
            return h.delete(t), I;
          case qe:
            if (Ie)
              return Ie.call(t) == Ie.call(n);
        }
        return !1;
      }
      function Ac(t, n, e, s, a, l) {
        var h = e & R, d = Ni(t), w = d.length, A = Ni(n), I = A.length;
        if (w != I && !h)
          return !1;
        for (var T = w; T--; ) {
          var E = d[T];
          if (!(h ? E in n : st.call(n, E)))
            return !1;
        }
        var D = l.get(t), U = l.get(n);
        if (D && U)
          return D == n && U == t;
        var J = !0;
        l.set(t, n), l.set(n, t);
        for (var $ = h; ++T < w; ) {
          E = d[T];
          var V = t[E], tt = n[E];
          if (s)
            var Xt = h ? s(tt, V, E, n, t, l) : s(V, tt, E, t, n, l);
          if (!(Xt === r ? V === tt || a(V, tt, e, s, l) : Xt)) {
            J = !1;
            break;
          }
          $ || ($ = E == "constructor");
        }
        if (J && !$) {
          var Dt = t.constructor, Qt = n.constructor;
          Dt != Qt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Qt == "function" && Qt instanceof Qt) && (J = !1);
        }
        return l.delete(t), l.delete(n), J;
      }
      function Fn(t) {
        return qi(so(t, r, go), t + "");
      }
      function Ni(t) {
        return wa(t, St, $i);
      }
      function Wi(t) {
        return wa(t, $t, to);
      }
      var Bi = lr ? function(t) {
        return lr.get(t);
      } : is;
      function br(t) {
        for (var n = t.name + "", e = ce[n], s = st.call(ce, n) ? e.length : 0; s--; ) {
          var a = e[s], l = a.func;
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
        var t = u.iteratee || es;
        return t = t === es ? Ca : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function xr(t, n) {
        var e = t.__data__;
        return Lc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function Ui(t) {
        for (var n = St(t), e = n.length; e--; ) {
          var s = n[e], a = t[s];
          n[e] = [s, a, ro(a)];
        }
        return n;
      }
      function jn(t, n) {
        var e = Dl(t, n);
        return Ma(e) ? e : r;
      }
      function Ic(t) {
        var n = st.call(t, Jn), e = t[Jn];
        try {
          t[Jn] = r;
          var s = !0;
        } catch {
        }
        var a = nr.call(t);
        return s && (n ? t[Jn] = e : delete t[Jn]), a;
      }
      var $i = gi ? function(t) {
        return t == null ? [] : (t = at(t), Nn(gi(t), function(n) {
          return aa.call(t, n);
        }));
      } : ss, to = gi ? function(t) {
        for (var n = []; t; )
          Wn(n, $i(t)), t = ir(t);
        return n;
      } : ss, Et = Lt;
      (di && Et(new di(new ArrayBuffer(1))) != re || xe && Et(new xe()) != _t || _i && Et(_i.resolve()) != Wt || fe && Et(new fe()) != pt || Se && Et(new Se()) != ye) && (Et = function(t) {
        var n = Lt(t), e = n == Mt ? t.constructor : r, s = e ? te(e) : "";
        if (s)
          switch (s) {
            case lf:
              return re;
            case ff:
              return _t;
            case cf:
              return Wt;
            case hf:
              return pt;
            case pf:
              return ye;
          }
        return n;
      });
      function Tc(t, n, e) {
        for (var s = -1, a = e.length; ++s < a; ) {
          var l = e[s], h = l.size;
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
      function Fc(t) {
        var n = t.match(Lu);
        return n ? n[1].split(Ou) : [];
      }
      function no(t, n, e) {
        n = Gn(n, t);
        for (var s = -1, a = n.length, l = !1; ++s < a; ) {
          var h = Cn(n[s]);
          if (!(l = t != null && e(t, h)))
            break;
          t = t[h];
        }
        return l || ++s != a ? l : (a = t == null ? 0 : t.length, !!a && Er(a) && Pn(h, a) && (q(t) || ne(t)));
      }
      function Pc(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function eo(t) {
        return typeof t.constructor == "function" && !Le(t) ? he(ir(t)) : {};
      }
      function Ec(t, n, e) {
        var s = t.constructor;
        switch (n) {
          case Me:
            return Li(t);
          case lt:
          case yt:
            return new s(+t);
          case re:
            return gc(t, e);
          case Ur:
          case $r:
          case zr:
          case Gr:
          case Hr:
          case qr:
          case Kr:
          case Zr:
          case Jr:
            return Wa(t, e);
          case _t:
            return new s();
          case kt:
          case wn:
            return new s(t);
          case tn:
            return dc(t);
          case pt:
            return new s();
          case qe:
            return _c(t);
        }
      }
      function Rc(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var s = e - 1;
        return n[s] = (e > 1 ? "& " : "") + n[s], n = n.join(e > 2 ? ", " : " "), t.replace(ku, `{
/* [wrapped with ` + n + `] */
`);
      }
      function kc(t) {
        return q(t) || ne(t) || !!(oa && t && t[oa]);
      }
      function Pn(t, n) {
        var e = typeof t;
        return n = n ?? vn, !!n && (e == "number" || e != "symbol" && Hu.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ot(t, n, e) {
        if (!dt(e))
          return !1;
        var s = typeof n;
        return (s == "number" ? Ut(e) && Pn(n, e.length) : s == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function zi(t, n) {
        if (q(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Yt(t) ? !0 : Fu.test(t) || !Tu.test(t) || n != null && t in at(n);
      }
      function Lc(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Gi(t) {
        var n = br(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var s = Bi(e);
        return !!s && t === s[0];
      }
      function Oc(t) {
        return !!ra && ra in t;
      }
      var Dc = je ? En : as;
      function Le(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
        return t === e;
      }
      function ro(t) {
        return t === t && !dt(t);
      }
      function io(t, n) {
        return function(e) {
          return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
        };
      }
      function Nc(t) {
        var n = Fr(t, function(s) {
          return e.size === C && e.clear(), s;
        }), e = n.cache;
        return n;
      }
      function Wc(t, n) {
        var e = t[1], s = n[1], a = e | s, l = a < (N | K | It), h = s == It && e == Q || s == It && e == Gt && t[7].length <= n[8] || s == (It | Gt) && n[7].length <= n[8] && e == Q;
        if (!(l || h))
          return t;
        s & N && (t[2] = n[2], a |= e & N ? 0 : X);
        var d = n[3];
        if (d) {
          var w = t[3];
          t[3] = w ? Ua(w, d, n[4]) : d, t[4] = w ? Bn(t[3], b) : n[4];
        }
        return d = n[5], d && (w = t[5], t[5] = w ? $a(w, d, n[6]) : d, t[6] = w ? Bn(t[5], b) : n[6]), d = n[7], d && (t[7] = d), s & It && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function Bc(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function Uc(t) {
        return nr.call(t);
      }
      function so(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var s = arguments, a = -1, l = bt(s.length - n, 0), h = x(l); ++a < l; )
            h[a] = s[n + a];
          a = -1;
          for (var d = x(n + 1); ++a < n; )
            d[a] = s[a];
          return d[n] = e(h), Kt(t, this, d);
        };
      }
      function ao(t, n) {
        return n.length < 2 ? t : Vn(t, on(n, 0, -1));
      }
      function $c(t, n) {
        for (var e = t.length, s = Pt(n.length, e), a = Bt(t); s--; ) {
          var l = n[s];
          t[s] = Pn(l, e) ? a[l] : r;
        }
        return t;
      }
      function Hi(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var oo = lo(Pa), Oe = nf || function(t, n) {
        return Tt.setTimeout(t, n);
      }, qi = lo(fc);
      function uo(t, n, e) {
        var s = n + "";
        return qi(t, Rc(s, zc(Fc(s), e)));
      }
      function lo(t) {
        var n = 0, e = 0;
        return function() {
          var s = af(), a = Wr - (s - e);
          if (e = s, a > 0) {
            if (++n >= ze)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Sr(t, n) {
        var e = -1, s = t.length, a = s - 1;
        for (n = n === r ? s : n; ++e < n; ) {
          var l = Ii(e, a), h = t[l];
          t[l] = t[e], t[e] = h;
        }
        return t.length = n, t;
      }
      var fo = Nc(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Pu, function(e, s, a, l) {
          n.push(a ? l.replace(Wu, "$1") : s || e);
        }), n;
      });
      function Cn(t) {
        if (typeof t == "string" || Yt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function te(t) {
        if (t != null) {
          try {
            return tr.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function zc(t, n) {
        return en(ct, function(e) {
          var s = "_." + e[0];
          n & e[1] && !Ye(t, s) && t.push(s);
        }), t.sort();
      }
      function co(t) {
        if (t instanceof j)
          return t.clone();
        var n = new sn(t.__wrapped__, t.__chain__);
        return n.__actions__ = Bt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Gc(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = bt(Z(n), 0);
        var s = t == null ? 0 : t.length;
        if (!s || n < 1)
          return [];
        for (var a = 0, l = 0, h = x(or(s / n)); a < s; )
          h[l++] = on(t, a, a += n);
        return h;
      }
      function Hc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, s = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[s++] = l);
        }
        return a;
      }
      function qc() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = x(t - 1), e = arguments[0], s = t; s--; )
          n[s - 1] = arguments[s];
        return Wn(q(e) ? Bt(e) : [e], Ft(n, 1));
      }
      var Kc = Y(function(t, n) {
        return mt(t) ? Fe(t, Ft(n, 1, mt, !0)) : [];
      }), Zc = Y(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Fe(t, Ft(n, 1, mt, !0), B(e, 2)) : [];
      }), Jc = Y(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Fe(t, Ft(n, 1, mt, !0), r, e) : [];
      });
      function Yc(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), on(t, n < 0 ? 0 : n, s)) : [];
      }
      function Xc(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), n = s - n, on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qc(t, n) {
        return t && t.length ? vr(t, B(n, 3), !0, !0) : [];
      }
      function Vc(t, n) {
        return t && t.length ? vr(t, B(n, 3), !0) : [];
      }
      function jc(t, n, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, s = a), qf(t, n, e, s)) : [];
      }
      function ho(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(s + a, 0)), Xe(t, B(n, 3), a);
      }
      function po(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s - 1;
        return e !== r && (a = Z(e), a = e < 0 ? bt(s + a, 0) : Pt(a, s - 1)), Xe(t, B(n, 3), a, !0);
      }
      function go(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, 1) : [];
      }
      function th(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ft(t, bn) : [];
      }
      function nh(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : Z(n), Ft(t, n)) : [];
      }
      function eh(t) {
        for (var n = -1, e = t == null ? 0 : t.length, s = {}; ++n < e; ) {
          var a = t[n];
          s[a[0]] = a[1];
        }
        return s;
      }
      function _o(t) {
        return t && t.length ? t[0] : r;
      }
      function rh(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(s + a, 0)), se(t, n, a);
      }
      function ih(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 0, -1) : [];
      }
      var sh = Y(function(t) {
        var n = gt(t, Ri);
        return n.length && n[0] === t[0] ? Ci(n) : [];
      }), ah = Y(function(t) {
        var n = un(t), e = gt(t, Ri);
        return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Ci(e, B(n, 2)) : [];
      }), oh = Y(function(t) {
        var n = un(t), e = gt(t, Ri);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Ci(e, r, n) : [];
      });
      function uh(t, n) {
        return t == null ? "" : rf.call(t, n);
      }
      function un(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function lh(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s;
        return e !== r && (a = Z(e), a = a < 0 ? bt(s + a, 0) : Pt(a, s - 1)), n === n ? $l(t, n, a) : Xe(t, Ys, a, !0);
      }
      function fh(t, n) {
        return t && t.length ? Aa(t, Z(n)) : r;
      }
      var ch = Y(vo);
      function vo(t, n) {
        return t && t.length && n && n.length ? Ai(t, n) : t;
      }
      function hh(t, n, e) {
        return t && t.length && n && n.length ? Ai(t, n, B(e, 2)) : t;
      }
      function ph(t, n, e) {
        return t && t.length && n && n.length ? Ai(t, n, r, e) : t;
      }
      var gh = Fn(function(t, n) {
        var e = t == null ? 0 : t.length, s = mi(t, n);
        return Fa(t, gt(n, function(a) {
          return Pn(a, e) ? +a : a;
        }).sort(Ba)), s;
      });
      function dh(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var s = -1, a = [], l = t.length;
        for (n = B(n, 3); ++s < l; ) {
          var h = t[s];
          n(h, s, t) && (e.push(h), a.push(s));
        }
        return Fa(t, a), e;
      }
      function Ki(t) {
        return t == null ? t : uf.call(t);
      }
      function _h(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = s) : (n = n == null ? 0 : Z(n), e = e === r ? s : Z(e)), on(t, n, e)) : [];
      }
      function vh(t, n) {
        return _r(t, n);
      }
      function mh(t, n, e) {
        return Fi(t, n, B(e, 2));
      }
      function wh(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var s = _r(t, n);
          if (s < e && gn(t[s], n))
            return s;
        }
        return -1;
      }
      function yh(t, n) {
        return _r(t, n, !0);
      }
      function Mh(t, n, e) {
        return Fi(t, n, B(e, 2), !0);
      }
      function Ch(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var s = _r(t, n, !0) - 1;
          if (gn(t[s], n))
            return s;
        }
        return -1;
      }
      function bh(t) {
        return t && t.length ? Ea(t) : [];
      }
      function xh(t, n) {
        return t && t.length ? Ea(t, B(n, 2)) : [];
      }
      function Sh(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 1, n) : [];
      }
      function Ah(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : Z(n), on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Ih(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), n = s - n, on(t, n < 0 ? 0 : n, s)) : [];
      }
      function Th(t, n) {
        return t && t.length ? vr(t, B(n, 3), !1, !0) : [];
      }
      function Fh(t, n) {
        return t && t.length ? vr(t, B(n, 3)) : [];
      }
      var Ph = Y(function(t) {
        return zn(Ft(t, 1, mt, !0));
      }), Eh = Y(function(t) {
        var n = un(t);
        return mt(n) && (n = r), zn(Ft(t, 1, mt, !0), B(n, 2));
      }), Rh = Y(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, zn(Ft(t, 1, mt, !0), r, n);
      });
      function kh(t) {
        return t && t.length ? zn(t) : [];
      }
      function Lh(t, n) {
        return t && t.length ? zn(t, B(n, 2)) : [];
      }
      function Oh(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? zn(t, r, n) : [];
      }
      function Zi(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Nn(t, function(e) {
          if (mt(e))
            return n = bt(e.length, n), !0;
        }), fi(n, function(e) {
          return gt(t, oi(e));
        });
      }
      function mo(t, n) {
        if (!(t && t.length))
          return [];
        var e = Zi(t);
        return n == null ? e : gt(e, function(s) {
          return Kt(n, r, s);
        });
      }
      var Dh = Y(function(t, n) {
        return mt(t) ? Fe(t, n) : [];
      }), Nh = Y(function(t) {
        return Ei(Nn(t, mt));
      }), Wh = Y(function(t) {
        var n = un(t);
        return mt(n) && (n = r), Ei(Nn(t, mt), B(n, 2));
      }), Bh = Y(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, Ei(Nn(t, mt), r, n);
      }), Uh = Y(Zi);
      function $h(t, n) {
        return Oa(t || [], n || [], Te);
      }
      function zh(t, n) {
        return Oa(t || [], n || [], Re);
      }
      var Gh = Y(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, mo(t, e);
      });
      function wo(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Hh(t, n) {
        return n(t), t;
      }
      function Ar(t, n) {
        return n(t);
      }
      var qh = Fn(function(t) {
        var n = t.length, e = n ? t[0] : 0, s = this.__wrapped__, a = function(l) {
          return mi(l, t);
        };
        return n > 1 || this.__actions__.length || !(s instanceof j) || !Pn(e) ? this.thru(a) : (s = s.slice(e, +e + (n ? 1 : 0)), s.__actions__.push({
          func: Ar,
          args: [a],
          thisArg: r
        }), new sn(s, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function Kh() {
        return wo(this);
      }
      function Zh() {
        return new sn(this.value(), this.__chain__);
      }
      function Jh() {
        this.__values__ === r && (this.__values__ = ko(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Yh() {
        return this;
      }
      function Xh(t) {
        for (var n, e = this; e instanceof cr; ) {
          var s = co(e);
          s.__index__ = 0, s.__values__ = r, n ? a.__wrapped__ = s : n = s;
          var a = s;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = t, n;
      }
      function Qh() {
        var t = this.__wrapped__;
        if (t instanceof j) {
          var n = t;
          return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
            func: Ar,
            args: [Ki],
            thisArg: r
          }), new sn(n, this.__chain__);
        }
        return this.thru(Ki);
      }
      function Vh() {
        return La(this.__wrapped__, this.__actions__);
      }
      var jh = mr(function(t, n, e) {
        st.call(t, e) ? ++t[e] : In(t, e, 1);
      });
      function tp(t, n, e) {
        var s = q(t) ? Zs : Hf;
        return e && Ot(t, n, e) && (n = r), s(t, B(n, 3));
      }
      function np(t, n) {
        var e = q(t) ? Nn : va;
        return e(t, B(n, 3));
      }
      var ep = qa(ho), rp = qa(po);
      function ip(t, n) {
        return Ft(Ir(t, n), 1);
      }
      function sp(t, n) {
        return Ft(Ir(t, n), bn);
      }
      function ap(t, n, e) {
        return e = e === r ? 1 : Z(e), Ft(Ir(t, n), e);
      }
      function yo(t, n) {
        var e = q(t) ? en : $n;
        return e(t, B(n, 3));
      }
      function Mo(t, n) {
        var e = q(t) ? xl : _a;
        return e(t, B(n, 3));
      }
      var op = mr(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
      });
      function up(t, n, e, s) {
        t = Ut(t) ? t : ve(t), e = e && !s ? Z(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), Rr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
      }
      var lp = Y(function(t, n, e) {
        var s = -1, a = typeof n == "function", l = Ut(t) ? x(t.length) : [];
        return $n(t, function(h) {
          l[++s] = a ? Kt(n, h, e) : Pe(h, n, e);
        }), l;
      }), fp = mr(function(t, n, e) {
        In(t, e, n);
      });
      function Ir(t, n) {
        var e = q(t) ? gt : ba;
        return e(t, B(n, 3));
      }
      function cp(t, n, e, s) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), e = s ? r : e, q(e) || (e = e == null ? [] : [e]), Ia(t, n, e));
      }
      var hp = mr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function pp(t, n, e) {
        var s = q(t) ? si : Qs, a = arguments.length < 3;
        return s(t, B(n, 4), e, a, $n);
      }
      function gp(t, n, e) {
        var s = q(t) ? Sl : Qs, a = arguments.length < 3;
        return s(t, B(n, 4), e, a, _a);
      }
      function dp(t, n) {
        var e = q(t) ? Nn : va;
        return e(t, Pr(B(n, 3)));
      }
      function _p(t) {
        var n = q(t) ? ha : uc;
        return n(t);
      }
      function vp(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n);
        var s = q(t) ? Bf : lc;
        return s(t, n);
      }
      function mp(t) {
        var n = q(t) ? Uf : cc;
        return n(t);
      }
      function wp(t) {
        if (t == null)
          return 0;
        if (Ut(t))
          return Rr(t) ? oe(t) : t.length;
        var n = Et(t);
        return n == _t || n == pt ? t.size : xi(t).length;
      }
      function yp(t, n, e) {
        var s = q(t) ? ai : hc;
        return e && Ot(t, n, e) && (n = r), s(t, B(n, 3));
      }
      var Mp = Y(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Ia(t, Ft(n, 1), []);
      }), Tr = tf || function() {
        return Tt.Date.now();
      };
      function Cp(t, n) {
        if (typeof n != "function")
          throw new rn(g);
        return t = Z(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Co(t, n, e) {
        return n = e ? r : n, n = t && n == null ? t.length : n, Tn(t, It, r, r, r, r, n);
      }
      function bo(t, n) {
        var e;
        if (typeof n != "function")
          throw new rn(g);
        return t = Z(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Ji = Y(function(t, n, e) {
        var s = N;
        if (e.length) {
          var a = Bn(e, de(Ji));
          s |= xt;
        }
        return Tn(t, s, n, e, a);
      }), xo = Y(function(t, n, e) {
        var s = N | K;
        if (e.length) {
          var a = Bn(e, de(xo));
          s |= xt;
        }
        return Tn(n, s, t, e, a);
      });
      function So(t, n, e) {
        n = e ? r : n;
        var s = Tn(t, Q, r, r, r, r, r, n);
        return s.placeholder = So.placeholder, s;
      }
      function Ao(t, n, e) {
        n = e ? r : n;
        var s = Tn(t, et, r, r, r, r, r, n);
        return s.placeholder = Ao.placeholder, s;
      }
      function Io(t, n, e) {
        var s, a, l, h, d, w, A = 0, I = !1, T = !1, E = !0;
        if (typeof t != "function")
          throw new rn(g);
        n = ln(n) || 0, dt(e) && (I = !!e.leading, T = "maxWait" in e, l = T ? bt(ln(e.maxWait) || 0, n) : l, E = "trailing" in e ? !!e.trailing : E);
        function D(wt) {
          var dn = s, kn = a;
          return s = a = r, A = wt, h = t.apply(kn, dn), h;
        }
        function U(wt) {
          return A = wt, d = Oe(V, n), I ? D(wt) : h;
        }
        function J(wt) {
          var dn = wt - w, kn = wt - A, Ko = n - dn;
          return T ? Pt(Ko, l - kn) : Ko;
        }
        function $(wt) {
          var dn = wt - w, kn = wt - A;
          return w === r || dn >= n || dn < 0 || T && kn >= l;
        }
        function V() {
          var wt = Tr();
          if ($(wt))
            return tt(wt);
          d = Oe(V, J(wt));
        }
        function tt(wt) {
          return d = r, E && s ? D(wt) : (s = a = r, h);
        }
        function Xt() {
          d !== r && Da(d), A = 0, s = w = a = d = r;
        }
        function Dt() {
          return d === r ? h : tt(Tr());
        }
        function Qt() {
          var wt = Tr(), dn = $(wt);
          if (s = arguments, a = this, w = wt, dn) {
            if (d === r)
              return U(w);
            if (T)
              return Da(d), d = Oe(V, n), D(w);
          }
          return d === r && (d = Oe(V, n)), h;
        }
        return Qt.cancel = Xt, Qt.flush = Dt, Qt;
      }
      var bp = Y(function(t, n) {
        return da(t, 1, n);
      }), xp = Y(function(t, n, e) {
        return da(t, ln(n) || 0, e);
      });
      function Sp(t) {
        return Tn(t, jt);
      }
      function Fr(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new rn(g);
        var e = function() {
          var s = arguments, a = n ? n.apply(this, s) : s[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var h = t.apply(this, s);
          return e.cache = l.set(a, h) || l, h;
        };
        return e.cache = new (Fr.Cache || An)(), e;
      }
      Fr.Cache = An;
      function Pr(t) {
        if (typeof t != "function")
          throw new rn(g);
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
      function Ap(t) {
        return bo(2, t);
      }
      var Ip = pc(function(t, n) {
        n = n.length == 1 && q(n[0]) ? gt(n[0], Zt(B())) : gt(Ft(n, 1), Zt(B()));
        var e = n.length;
        return Y(function(s) {
          for (var a = -1, l = Pt(s.length, e); ++a < l; )
            s[a] = n[a].call(this, s[a]);
          return Kt(t, this, s);
        });
      }), Yi = Y(function(t, n) {
        var e = Bn(n, de(Yi));
        return Tn(t, xt, r, n, e);
      }), To = Y(function(t, n) {
        var e = Bn(n, de(To));
        return Tn(t, At, r, n, e);
      }), Tp = Fn(function(t, n) {
        return Tn(t, Gt, r, r, r, n);
      });
      function Fp(t, n) {
        if (typeof t != "function")
          throw new rn(g);
        return n = n === r ? n : Z(n), Y(t, n);
      }
      function Pp(t, n) {
        if (typeof t != "function")
          throw new rn(g);
        return n = n == null ? 0 : bt(Z(n), 0), Y(function(e) {
          var s = e[n], a = Hn(e, 0, n);
          return s && Wn(a, s), Kt(t, this, a);
        });
      }
      function Ep(t, n, e) {
        var s = !0, a = !0;
        if (typeof t != "function")
          throw new rn(g);
        return dt(e) && (s = "leading" in e ? !!e.leading : s, a = "trailing" in e ? !!e.trailing : a), Io(t, n, {
          leading: s,
          maxWait: n,
          trailing: a
        });
      }
      function Rp(t) {
        return Co(t, 1);
      }
      function kp(t, n) {
        return Yi(ki(n), t);
      }
      function Lp() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function Op(t) {
        return an(t, O);
      }
      function Dp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, O, n);
      }
      function Np(t) {
        return an(t, m | O);
      }
      function Wp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, m | O, n);
      }
      function Bp(t, n) {
        return n == null || ga(t, n, St(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Up = Cr(Mi), $p = Cr(function(t, n) {
        return t >= n;
      }), ne = ya(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ya : function(t) {
        return vt(t) && st.call(t, "callee") && !aa.call(t, "callee");
      }, q = x.isArray, zp = $s ? Zt($s) : Xf;
      function Ut(t) {
        return t != null && Er(t.length) && !En(t);
      }
      function mt(t) {
        return vt(t) && Ut(t);
      }
      function Gp(t) {
        return t === !0 || t === !1 || vt(t) && Lt(t) == lt;
      }
      var qn = ef || as, Hp = zs ? Zt(zs) : Qf;
      function qp(t) {
        return vt(t) && t.nodeType === 1 && !De(t);
      }
      function Kp(t) {
        if (t == null)
          return !0;
        if (Ut(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || qn(t) || _e(t) || ne(t)))
          return !t.length;
        var n = Et(t);
        if (n == _t || n == pt)
          return !t.size;
        if (Le(t))
          return !xi(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function Zp(t, n) {
        return Ee(t, n);
      }
      function Jp(t, n, e) {
        e = typeof e == "function" ? e : r;
        var s = e ? e(t, n) : r;
        return s === r ? Ee(t, n, r, e) : !!s;
      }
      function Xi(t) {
        if (!vt(t))
          return !1;
        var n = Lt(t);
        return n == Rt || n == qt || typeof t.message == "string" && typeof t.name == "string" && !De(t);
      }
      function Yp(t) {
        return typeof t == "number" && ua(t);
      }
      function En(t) {
        if (!dt(t))
          return !1;
        var n = Lt(t);
        return n == Nt || n == mn || n == ot || n == cn;
      }
      function Fo(t) {
        return typeof t == "number" && t == Z(t);
      }
      function Er(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vn;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var Po = Gs ? Zt(Gs) : jf;
      function Xp(t, n) {
        return t === n || bi(t, n, Ui(n));
      }
      function Qp(t, n, e) {
        return e = typeof e == "function" ? e : r, bi(t, n, Ui(n), e);
      }
      function Vp(t) {
        return Eo(t) && t != +t;
      }
      function jp(t) {
        if (Dc(t))
          throw new H(p);
        return Ma(t);
      }
      function tg(t) {
        return t === null;
      }
      function ng(t) {
        return t == null;
      }
      function Eo(t) {
        return typeof t == "number" || vt(t) && Lt(t) == kt;
      }
      function De(t) {
        if (!vt(t) || Lt(t) != Mt)
          return !1;
        var n = ir(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && tr.call(e) == Xl;
      }
      var Qi = Hs ? Zt(Hs) : tc;
      function eg(t) {
        return Fo(t) && t >= -vn && t <= vn;
      }
      var Ro = qs ? Zt(qs) : nc;
      function Rr(t) {
        return typeof t == "string" || !q(t) && vt(t) && Lt(t) == wn;
      }
      function Yt(t) {
        return typeof t == "symbol" || vt(t) && Lt(t) == qe;
      }
      var _e = Ks ? Zt(Ks) : ec;
      function rg(t) {
        return t === r;
      }
      function ig(t) {
        return vt(t) && Et(t) == ye;
      }
      function sg(t) {
        return vt(t) && Lt(t) == yu;
      }
      var ag = Cr(Si), og = Cr(function(t, n) {
        return t <= n;
      });
      function ko(t) {
        if (!t)
          return [];
        if (Ut(t))
          return Rr(t) ? hn(t) : Bt(t);
        if (be && t[be])
          return Wl(t[be]());
        var n = Et(t), e = n == _t ? hi : n == pt ? Qe : ve;
        return e(t);
      }
      function Rn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = ln(t), t === bn || t === -bn) {
          var n = t < 0 ? -1 : 1;
          return n * He;
        }
        return t === t ? t : 0;
      }
      function Z(t) {
        var n = Rn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function Lo(t) {
        return t ? Qn(Z(t), 0, k) : 0;
      }
      function ln(t) {
        if (typeof t == "number")
          return t;
        if (Yt(t))
          return xn;
        if (dt(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = dt(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Vs(t);
        var e = $u.test(t);
        return e || Gu.test(t) ? Ml(t.slice(2), e ? 2 : 8) : Uu.test(t) ? xn : +t;
      }
      function Oo(t) {
        return Mn(t, $t(t));
      }
      function ug(t) {
        return t ? Qn(Z(t), -vn, vn) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Jt(t);
      }
      var lg = pe(function(t, n) {
        if (Le(n) || Ut(n)) {
          Mn(n, St(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Te(t, e, n[e]);
      }), Do = pe(function(t, n) {
        Mn(n, $t(n), t);
      }), kr = pe(function(t, n, e, s) {
        Mn(n, $t(n), t, s);
      }), fg = pe(function(t, n, e, s) {
        Mn(n, St(n), t, s);
      }), cg = Fn(mi);
      function hg(t, n) {
        var e = he(t);
        return n == null ? e : pa(e, n);
      }
      var pg = Y(function(t, n) {
        t = at(t);
        var e = -1, s = n.length, a = s > 2 ? n[2] : r;
        for (a && Ot(n[0], n[1], a) && (s = 1); ++e < s; )
          for (var l = n[e], h = $t(l), d = -1, w = h.length; ++d < w; ) {
            var A = h[d], I = t[A];
            (I === r || gn(I, le[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), gg = Y(function(t) {
        return t.push(r, Va), Kt(No, r, t);
      });
      function dg(t, n) {
        return Js(t, B(n, 3), yn);
      }
      function _g(t, n) {
        return Js(t, B(n, 3), yi);
      }
      function vg(t, n) {
        return t == null ? t : wi(t, B(n, 3), $t);
      }
      function mg(t, n) {
        return t == null ? t : ma(t, B(n, 3), $t);
      }
      function wg(t, n) {
        return t && yn(t, B(n, 3));
      }
      function yg(t, n) {
        return t && yi(t, B(n, 3));
      }
      function Mg(t) {
        return t == null ? [] : gr(t, St(t));
      }
      function Cg(t) {
        return t == null ? [] : gr(t, $t(t));
      }
      function Vi(t, n, e) {
        var s = t == null ? r : Vn(t, n);
        return s === r ? e : s;
      }
      function bg(t, n) {
        return t != null && no(t, n, Kf);
      }
      function ji(t, n) {
        return t != null && no(t, n, Zf);
      }
      var xg = Za(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = nr.call(n)), t[n] = e;
      }, ns(zt)), Sg = Za(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = nr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, B), Ag = Y(Pe);
      function St(t) {
        return Ut(t) ? ca(t) : xi(t);
      }
      function $t(t) {
        return Ut(t) ? ca(t, !0) : rc(t);
      }
      function Ig(t, n) {
        var e = {};
        return n = B(n, 3), yn(t, function(s, a, l) {
          In(e, n(s, a, l), s);
        }), e;
      }
      function Tg(t, n) {
        var e = {};
        return n = B(n, 3), yn(t, function(s, a, l) {
          In(e, a, n(s, a, l));
        }), e;
      }
      var Fg = pe(function(t, n, e) {
        dr(t, n, e);
      }), No = pe(function(t, n, e, s) {
        dr(t, n, e, s);
      }), Pg = Fn(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var s = !1;
        n = gt(n, function(l) {
          return l = Gn(l, t), s || (s = l.length > 1), l;
        }), Mn(t, Wi(t), e), s && (e = an(e, m | P | O, xc));
        for (var a = n.length; a--; )
          Pi(e, n[a]);
        return e;
      });
      function Eg(t, n) {
        return Wo(t, Pr(B(n)));
      }
      var Rg = Fn(function(t, n) {
        return t == null ? {} : sc(t, n);
      });
      function Wo(t, n) {
        if (t == null)
          return {};
        var e = gt(Wi(t), function(s) {
          return [s];
        });
        return n = B(n), Ta(t, e, function(s, a) {
          return n(s, a[0]);
        });
      }
      function kg(t, n, e) {
        n = Gn(n, t);
        var s = -1, a = n.length;
        for (a || (a = 1, t = r); ++s < a; ) {
          var l = t == null ? r : t[Cn(n[s])];
          l === r && (s = a, l = e), t = En(l) ? l.call(t) : l;
        }
        return t;
      }
      function Lg(t, n, e) {
        return t == null ? t : Re(t, n, e);
      }
      function Og(t, n, e, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : Re(t, n, e, s);
      }
      var Bo = Xa(St), Uo = Xa($t);
      function Dg(t, n, e) {
        var s = q(t), a = s || qn(t) || _e(t);
        if (n = B(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = s ? new l() : [] : dt(t) ? e = En(l) ? he(ir(t)) : {} : e = {};
        }
        return (a ? en : yn)(t, function(h, d, w) {
          return n(e, h, d, w);
        }), e;
      }
      function Ng(t, n) {
        return t == null ? !0 : Pi(t, n);
      }
      function Wg(t, n, e) {
        return t == null ? t : ka(t, n, ki(e));
      }
      function Bg(t, n, e, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : ka(t, n, ki(e), s);
      }
      function ve(t) {
        return t == null ? [] : ci(t, St(t));
      }
      function Ug(t) {
        return t == null ? [] : ci(t, $t(t));
      }
      function $g(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = ln(e), e = e === e ? e : 0), n !== r && (n = ln(n), n = n === n ? n : 0), Qn(ln(t), n, e);
      }
      function zg(t, n, e) {
        return n = Rn(n), e === r ? (e = n, n = 0) : e = Rn(e), t = ln(t), Jf(t, n, e);
      }
      function Gg(t, n, e) {
        if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Rn(t), n === r ? (n = t, t = 0) : n = Rn(n)), t > n) {
          var s = t;
          t = n, n = s;
        }
        if (e || t % 1 || n % 1) {
          var a = la();
          return Pt(t + a * (n - t + yl("1e-" + ((a + "").length - 1))), n);
        }
        return Ii(t, n);
      }
      var Hg = ge(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? $o(n) : n);
      });
      function $o(t) {
        return ts(it(t).toLowerCase());
      }
      function zo(t) {
        return t = it(t), t && t.replace(qu, kl).replace(fl, "");
      }
      function qg(t, n, e) {
        t = it(t), n = Jt(n);
        var s = t.length;
        e = e === r ? s : Qn(Z(e), 0, s);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function Kg(t) {
        return t = it(t), t && Su.test(t) ? t.replace(ms, Ll) : t;
      }
      function Zg(t) {
        return t = it(t), t && Eu.test(t) ? t.replace(Yr, "\\$&") : t;
      }
      var Jg = ge(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), Yg = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), Xg = Ha("toLowerCase");
      function Qg(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        if (!n || s >= n)
          return t;
        var a = (n - s) / 2;
        return Mr(ur(a), e) + t + Mr(or(a), e);
      }
      function Vg(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        return n && s < n ? t + Mr(n - s, e) : t;
      }
      function jg(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        return n && s < n ? Mr(n - s, e) + t : t;
      }
      function td(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), of(it(t).replace(Xr, ""), n || 0);
      }
      function nd(t, n, e) {
        return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n), Ti(it(t), n);
      }
      function ed() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var rd = ge(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function id(t, n, e) {
        return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !Qi(n)) && (n = Jt(n), !n && ae(t)) ? Hn(hn(t), 0, e) : t.split(n, e)) : [];
      }
      var sd = ge(function(t, n, e) {
        return t + (e ? " " : "") + ts(n);
      });
      function ad(t, n, e) {
        return t = it(t), e = e == null ? 0 : Qn(Z(e), 0, t.length), n = Jt(n), t.slice(e, e + n.length) == n;
      }
      function od(t, n, e) {
        var s = u.templateSettings;
        e && Ot(t, n, e) && (n = r), t = it(t), n = kr({}, n, s, Qa);
        var a = kr({}, n.imports, s.imports, Qa), l = St(a), h = ci(a, l), d, w, A = 0, I = n.interpolate || Ke, T = "__p += '", E = pi(
          (n.escape || Ke).source + "|" + I.source + "|" + (I === ws ? Bu : Ke).source + "|" + (n.evaluate || Ke).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++dl + "]") + `
`;
        t.replace(E, function($, V, tt, Xt, Dt, Qt) {
          return tt || (tt = Xt), T += t.slice(A, Qt).replace(Ku, Ol), V && (d = !0, T += `' +
__e(` + V + `) +
'`), Dt && (w = !0, T += `';
` + Dt + `;
__p += '`), tt && (T += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), A = Qt + $.length, $;
        }), T += `';
`;
        var U = st.call(n, "variable") && n.variable;
        if (!U)
          T = `with (obj) {
` + T + `
}
`;
        else if (Nu.test(U))
          throw new H(_);
        T = (w ? T.replace(Mu, "") : T).replace(Cu, "$1").replace(bu, "$1;"), T = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
        var J = Ho(function() {
          return rt(l, D + "return " + T).apply(r, h);
        });
        if (J.source = T, Xi(J))
          throw J;
        return J;
      }
      function ud(t) {
        return it(t).toLowerCase();
      }
      function ld(t) {
        return it(t).toUpperCase();
      }
      function fd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return Vs(t);
        if (!t || !(n = Jt(n)))
          return t;
        var s = hn(t), a = hn(n), l = js(s, a), h = ta(s, a) + 1;
        return Hn(s, l, h).join("");
      }
      function cd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, ea(t) + 1);
        if (!t || !(n = Jt(n)))
          return t;
        var s = hn(t), a = ta(s, hn(n)) + 1;
        return Hn(s, 0, a).join("");
      }
      function hd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(Xr, "");
        if (!t || !(n = Jt(n)))
          return t;
        var s = hn(t), a = js(s, hn(n));
        return Hn(s, a).join("");
      }
      function pd(t, n) {
        var e = Ht, s = me;
        if (dt(n)) {
          var a = "separator" in n ? n.separator : a;
          e = "length" in n ? Z(n.length) : e, s = "omission" in n ? Jt(n.omission) : s;
        }
        t = it(t);
        var l = t.length;
        if (ae(t)) {
          var h = hn(t);
          l = h.length;
        }
        if (e >= l)
          return t;
        var d = e - oe(s);
        if (d < 1)
          return s;
        var w = h ? Hn(h, 0, d).join("") : t.slice(0, d);
        if (a === r)
          return w + s;
        if (h && (d += w.length - d), Qi(a)) {
          if (t.slice(d).search(a)) {
            var A, I = w;
            for (a.global || (a = pi(a.source, it(ys.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var T = A.index;
            w = w.slice(0, T === r ? d : T);
          }
        } else if (t.indexOf(Jt(a), d) != d) {
          var E = w.lastIndexOf(a);
          E > -1 && (w = w.slice(0, E));
        }
        return w + s;
      }
      function gd(t) {
        return t = it(t), t && xu.test(t) ? t.replace(vs, zl) : t;
      }
      var dd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), ts = Ha("toUpperCase");
      function Go(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? Nl(t) ? ql(t) : Tl(t) : t.match(n) || [];
      }
      var Ho = Y(function(t, n) {
        try {
          return Kt(t, r, n);
        } catch (e) {
          return Xi(e) ? e : new H(e);
        }
      }), _d = Fn(function(t, n) {
        return en(n, function(e) {
          e = Cn(e), In(t, e, Ji(t[e], t));
        }), t;
      });
      function vd(t) {
        var n = t == null ? 0 : t.length, e = B();
        return t = n ? gt(t, function(s) {
          if (typeof s[1] != "function")
            throw new rn(g);
          return [e(s[0]), s[1]];
        }) : [], Y(function(s) {
          for (var a = -1; ++a < n; ) {
            var l = t[a];
            if (Kt(l[0], this, s))
              return Kt(l[1], this, s);
          }
        });
      }
      function md(t) {
        return Gf(an(t, m));
      }
      function ns(t) {
        return function() {
          return t;
        };
      }
      function wd(t, n) {
        return t == null || t !== t ? n : t;
      }
      var yd = Ka(), Md = Ka(!0);
      function zt(t) {
        return t;
      }
      function es(t) {
        return Ca(typeof t == "function" ? t : an(t, m));
      }
      function Cd(t) {
        return xa(an(t, m));
      }
      function bd(t, n) {
        return Sa(t, an(n, m));
      }
      var xd = Y(function(t, n) {
        return function(e) {
          return Pe(e, t, n);
        };
      }), Sd = Y(function(t, n) {
        return function(e) {
          return Pe(t, e, n);
        };
      });
      function rs(t, n, e) {
        var s = St(n), a = gr(n, s);
        e == null && !(dt(n) && (a.length || !s.length)) && (e = n, n = t, t = this, a = gr(n, St(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, h = En(t);
        return en(a, function(d) {
          var w = n[d];
          t[d] = w, h && (t.prototype[d] = function() {
            var A = this.__chain__;
            if (l || A) {
              var I = t(this.__wrapped__), T = I.__actions__ = Bt(this.__actions__);
              return T.push({ func: w, args: arguments, thisArg: t }), I.__chain__ = A, I;
            }
            return w.apply(t, Wn([this.value()], arguments));
          });
        }), t;
      }
      function Ad() {
        return Tt._ === this && (Tt._ = Ql), this;
      }
      function is() {
      }
      function Id(t) {
        return t = Z(t), Y(function(n) {
          return Aa(n, t);
        });
      }
      var Td = Oi(gt), Fd = Oi(Zs), Pd = Oi(ai);
      function qo(t) {
        return zi(t) ? oi(Cn(t)) : ac(t);
      }
      function Ed(t) {
        return function(n) {
          return t == null ? r : Vn(t, n);
        };
      }
      var Rd = Ja(), kd = Ja(!0);
      function ss() {
        return [];
      }
      function as() {
        return !1;
      }
      function Ld() {
        return {};
      }
      function Od() {
        return "";
      }
      function Dd() {
        return !0;
      }
      function Nd(t, n) {
        if (t = Z(t), t < 1 || t > vn)
          return [];
        var e = k, s = Pt(t, k);
        n = B(n), t -= k;
        for (var a = fi(s, n); ++e < t; )
          n(e);
        return a;
      }
      function Wd(t) {
        return q(t) ? gt(t, Cn) : Yt(t) ? [t] : Bt(fo(it(t)));
      }
      function Bd(t) {
        var n = ++Yl;
        return it(t) + n;
      }
      var Ud = yr(function(t, n) {
        return t + n;
      }, 0), $d = Di("ceil"), zd = yr(function(t, n) {
        return t / n;
      }, 1), Gd = Di("floor");
      function Hd(t) {
        return t && t.length ? pr(t, zt, Mi) : r;
      }
      function qd(t, n) {
        return t && t.length ? pr(t, B(n, 2), Mi) : r;
      }
      function Kd(t) {
        return Xs(t, zt);
      }
      function Zd(t, n) {
        return Xs(t, B(n, 2));
      }
      function Jd(t) {
        return t && t.length ? pr(t, zt, Si) : r;
      }
      function Yd(t, n) {
        return t && t.length ? pr(t, B(n, 2), Si) : r;
      }
      var Xd = yr(function(t, n) {
        return t * n;
      }, 1), Qd = Di("round"), Vd = yr(function(t, n) {
        return t - n;
      }, 0);
      function jd(t) {
        return t && t.length ? li(t, zt) : 0;
      }
      function t0(t, n) {
        return t && t.length ? li(t, B(n, 2)) : 0;
      }
      return u.after = Cp, u.ary = Co, u.assign = lg, u.assignIn = Do, u.assignInWith = kr, u.assignWith = fg, u.at = cg, u.before = bo, u.bind = Ji, u.bindAll = _d, u.bindKey = xo, u.castArray = Lp, u.chain = wo, u.chunk = Gc, u.compact = Hc, u.concat = qc, u.cond = vd, u.conforms = md, u.constant = ns, u.countBy = jh, u.create = hg, u.curry = So, u.curryRight = Ao, u.debounce = Io, u.defaults = pg, u.defaultsDeep = gg, u.defer = bp, u.delay = xp, u.difference = Kc, u.differenceBy = Zc, u.differenceWith = Jc, u.drop = Yc, u.dropRight = Xc, u.dropRightWhile = Qc, u.dropWhile = Vc, u.fill = jc, u.filter = np, u.flatMap = ip, u.flatMapDeep = sp, u.flatMapDepth = ap, u.flatten = go, u.flattenDeep = th, u.flattenDepth = nh, u.flip = Sp, u.flow = yd, u.flowRight = Md, u.fromPairs = eh, u.functions = Mg, u.functionsIn = Cg, u.groupBy = op, u.initial = ih, u.intersection = sh, u.intersectionBy = ah, u.intersectionWith = oh, u.invert = xg, u.invertBy = Sg, u.invokeMap = lp, u.iteratee = es, u.keyBy = fp, u.keys = St, u.keysIn = $t, u.map = Ir, u.mapKeys = Ig, u.mapValues = Tg, u.matches = Cd, u.matchesProperty = bd, u.memoize = Fr, u.merge = Fg, u.mergeWith = No, u.method = xd, u.methodOf = Sd, u.mixin = rs, u.negate = Pr, u.nthArg = Id, u.omit = Pg, u.omitBy = Eg, u.once = Ap, u.orderBy = cp, u.over = Td, u.overArgs = Ip, u.overEvery = Fd, u.overSome = Pd, u.partial = Yi, u.partialRight = To, u.partition = hp, u.pick = Rg, u.pickBy = Wo, u.property = qo, u.propertyOf = Ed, u.pull = ch, u.pullAll = vo, u.pullAllBy = hh, u.pullAllWith = ph, u.pullAt = gh, u.range = Rd, u.rangeRight = kd, u.rearg = Tp, u.reject = dp, u.remove = dh, u.rest = Fp, u.reverse = Ki, u.sampleSize = vp, u.set = Lg, u.setWith = Og, u.shuffle = mp, u.slice = _h, u.sortBy = Mp, u.sortedUniq = bh, u.sortedUniqBy = xh, u.split = id, u.spread = Pp, u.tail = Sh, u.take = Ah, u.takeRight = Ih, u.takeRightWhile = Th, u.takeWhile = Fh, u.tap = Hh, u.throttle = Ep, u.thru = Ar, u.toArray = ko, u.toPairs = Bo, u.toPairsIn = Uo, u.toPath = Wd, u.toPlainObject = Oo, u.transform = Dg, u.unary = Rp, u.union = Ph, u.unionBy = Eh, u.unionWith = Rh, u.uniq = kh, u.uniqBy = Lh, u.uniqWith = Oh, u.unset = Ng, u.unzip = Zi, u.unzipWith = mo, u.update = Wg, u.updateWith = Bg, u.values = ve, u.valuesIn = Ug, u.without = Dh, u.words = Go, u.wrap = kp, u.xor = Nh, u.xorBy = Wh, u.xorWith = Bh, u.zip = Uh, u.zipObject = $h, u.zipObjectDeep = zh, u.zipWith = Gh, u.entries = Bo, u.entriesIn = Uo, u.extend = Do, u.extendWith = kr, rs(u, u), u.add = Ud, u.attempt = Ho, u.camelCase = Hg, u.capitalize = $o, u.ceil = $d, u.clamp = $g, u.clone = Op, u.cloneDeep = Np, u.cloneDeepWith = Wp, u.cloneWith = Dp, u.conformsTo = Bp, u.deburr = zo, u.defaultTo = wd, u.divide = zd, u.endsWith = qg, u.eq = gn, u.escape = Kg, u.escapeRegExp = Zg, u.every = tp, u.find = ep, u.findIndex = ho, u.findKey = dg, u.findLast = rp, u.findLastIndex = po, u.findLastKey = _g, u.floor = Gd, u.forEach = yo, u.forEachRight = Mo, u.forIn = vg, u.forInRight = mg, u.forOwn = wg, u.forOwnRight = yg, u.get = Vi, u.gt = Up, u.gte = $p, u.has = bg, u.hasIn = ji, u.head = _o, u.identity = zt, u.includes = up, u.indexOf = rh, u.inRange = zg, u.invoke = Ag, u.isArguments = ne, u.isArray = q, u.isArrayBuffer = zp, u.isArrayLike = Ut, u.isArrayLikeObject = mt, u.isBoolean = Gp, u.isBuffer = qn, u.isDate = Hp, u.isElement = qp, u.isEmpty = Kp, u.isEqual = Zp, u.isEqualWith = Jp, u.isError = Xi, u.isFinite = Yp, u.isFunction = En, u.isInteger = Fo, u.isLength = Er, u.isMap = Po, u.isMatch = Xp, u.isMatchWith = Qp, u.isNaN = Vp, u.isNative = jp, u.isNil = ng, u.isNull = tg, u.isNumber = Eo, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = De, u.isRegExp = Qi, u.isSafeInteger = eg, u.isSet = Ro, u.isString = Rr, u.isSymbol = Yt, u.isTypedArray = _e, u.isUndefined = rg, u.isWeakMap = ig, u.isWeakSet = sg, u.join = uh, u.kebabCase = Jg, u.last = un, u.lastIndexOf = lh, u.lowerCase = Yg, u.lowerFirst = Xg, u.lt = ag, u.lte = og, u.max = Hd, u.maxBy = qd, u.mean = Kd, u.meanBy = Zd, u.min = Jd, u.minBy = Yd, u.stubArray = ss, u.stubFalse = as, u.stubObject = Ld, u.stubString = Od, u.stubTrue = Dd, u.multiply = Xd, u.nth = fh, u.noConflict = Ad, u.noop = is, u.now = Tr, u.pad = Qg, u.padEnd = Vg, u.padStart = jg, u.parseInt = td, u.random = Gg, u.reduce = pp, u.reduceRight = gp, u.repeat = nd, u.replace = ed, u.result = kg, u.round = Qd, u.runInContext = v, u.sample = _p, u.size = wp, u.snakeCase = rd, u.some = yp, u.sortedIndex = vh, u.sortedIndexBy = mh, u.sortedIndexOf = wh, u.sortedLastIndex = yh, u.sortedLastIndexBy = Mh, u.sortedLastIndexOf = Ch, u.startCase = sd, u.startsWith = ad, u.subtract = Vd, u.sum = jd, u.sumBy = t0, u.template = od, u.times = Nd, u.toFinite = Rn, u.toInteger = Z, u.toLength = Lo, u.toLower = ud, u.toNumber = ln, u.toSafeInteger = ug, u.toString = it, u.toUpper = ld, u.trim = fd, u.trimEnd = cd, u.trimStart = hd, u.truncate = pd, u.unescape = gd, u.uniqueId = Bd, u.upperCase = dd, u.upperFirst = ts, u.each = yo, u.eachRight = Mo, u.first = _o, rs(u, function() {
        var t = {};
        return yn(u, function(n, e) {
          st.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), en(["drop", "take"], function(t, n) {
        j.prototype[t] = function(e) {
          e = e === r ? 1 : bt(Z(e), 0);
          var s = this.__filtered__ && !n ? new j(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Pt(e, s.__takeCount__) : s.__views__.push({
            size: Pt(e, k),
            type: t + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, j.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), en(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, s = e == we || e == Br;
        j.prototype[t] = function(a) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: B(a, 3),
            type: e
          }), l.__filtered__ = l.__filtered__ || s, l;
        };
      }), en(["head", "last"], function(t, n) {
        var e = "take" + (n ? "Right" : "");
        j.prototype[t] = function() {
          return this[e](1).value()[0];
        };
      }), en(["initial", "tail"], function(t, n) {
        var e = "drop" + (n ? "" : "Right");
        j.prototype[t] = function() {
          return this.__filtered__ ? new j(this) : this[e](1);
        };
      }), j.prototype.compact = function() {
        return this.filter(zt);
      }, j.prototype.find = function(t) {
        return this.filter(t).head();
      }, j.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, j.prototype.invokeMap = Y(function(t, n) {
        return typeof t == "function" ? new j(this) : this.map(function(e) {
          return Pe(e, t, n);
        });
      }), j.prototype.reject = function(t) {
        return this.filter(Pr(B(t)));
      }, j.prototype.slice = function(t, n) {
        t = Z(t);
        var e = this;
        return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Z(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
      }, j.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, j.prototype.toArray = function() {
        return this.take(k);
      }, yn(j.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), a = u[s ? "take" + (n == "last" ? "Right" : "") : n], l = s || /^find/.test(n);
        a && (u.prototype[n] = function() {
          var h = this.__wrapped__, d = s ? [1] : arguments, w = h instanceof j, A = d[0], I = w || q(h), T = function(V) {
            var tt = a.apply(u, Wn([V], d));
            return s && E ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (w = I = !1);
          var E = this.__chain__, D = !!this.__actions__.length, U = l && !E, J = w && !D;
          if (!l && I) {
            h = J ? h : new j(this);
            var $ = t.apply(h, d);
            return $.__actions__.push({ func: Ar, args: [T], thisArg: r }), new sn($, E);
          }
          return U && J ? t.apply(this, d) : ($ = this.thru(T), U ? s ? $.value()[0] : $.value() : $);
        });
      }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ve[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var a = arguments;
          if (s && !this.__chain__) {
            var l = this.value();
            return n.apply(q(l) ? l : [], a);
          }
          return this[e](function(h) {
            return n.apply(q(h) ? h : [], a);
          });
        };
      }), yn(j.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var s = e.name + "";
          st.call(ce, s) || (ce[s] = []), ce[s].push({ name: n, func: e });
        }
      }), ce[wr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = gf, j.prototype.reverse = df, j.prototype.value = _f, u.prototype.at = qh, u.prototype.chain = Kh, u.prototype.commit = Zh, u.prototype.next = Jh, u.prototype.plant = Xh, u.prototype.reverse = Qh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Vh, u.prototype.first = u.prototype.head, be && (u.prototype[be] = Yh), u;
    }, ue = Kl();
    Zn ? ((Zn.exports = ue)._ = ue, ei._ = ue) : Tt._ = ue;
  }).call(Ne);
})(Or, Or.exports);
var iu = Or.exports;
const W = /* @__PURE__ */ ru(iu);
var hs = { exports: {} }, os, Zo;
function r0() {
  if (Zo)
    return os;
  Zo = 1;
  var c = 1e3, i = c * 60, r = i * 60, o = r * 24, f = o * 7, p = o * 365.25;
  os = function(b, m) {
    m = m || {};
    var P = typeof b;
    if (P === "string" && b.length > 0)
      return g(b);
    if (P === "number" && isFinite(b))
      return m.long ? M(b) : _(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function g(b) {
    if (b = String(b), !(b.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (m) {
        var P = parseFloat(m[1]), O = (m[2] || "ms").toLowerCase();
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
            return P * i;
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
    var m = Math.abs(b);
    return m >= o ? Math.round(b / o) + "d" : m >= r ? Math.round(b / r) + "h" : m >= i ? Math.round(b / i) + "m" : m >= c ? Math.round(b / c) + "s" : b + "ms";
  }
  function M(b) {
    var m = Math.abs(b);
    return m >= o ? C(b, m, o, "day") : m >= r ? C(b, m, r, "hour") : m >= i ? C(b, m, i, "minute") : m >= c ? C(b, m, c, "second") : b + " ms";
  }
  function C(b, m, P, O) {
    var R = m >= P * 1.5;
    return Math.round(b / P) + " " + O + (R ? "s" : "");
  }
  return os;
}
function i0(c) {
  r.debug = r, r.default = r, r.coerce = M, r.disable = p, r.enable = f, r.enabled = g, r.humanize = r0(), r.destroy = C, Object.keys(c).forEach((b) => {
    r[b] = c[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function i(b) {
    let m = 0;
    for (let P = 0; P < b.length; P++)
      m = (m << 5) - m + b.charCodeAt(P), m |= 0;
    return r.colors[Math.abs(m) % r.colors.length];
  }
  r.selectColor = i;
  function r(b) {
    let m, P = null, O, R;
    function F(...N) {
      if (!F.enabled)
        return;
      const K = F, X = Number(/* @__PURE__ */ new Date()), Q = X - (m || X);
      K.diff = Q, K.prev = m, K.curr = X, m = X, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
      let et = 0;
      N[0] = N[0].replace(/%([a-zA-Z%])/g, (At, It) => {
        if (At === "%%")
          return "%";
        et++;
        const Gt = r.formatters[It];
        if (typeof Gt == "function") {
          const jt = N[et];
          At = Gt.call(K, jt), N.splice(et, 1), et--;
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
  function o(b, m) {
    const P = r(this.namespace + (typeof m > "u" ? ":" : m) + b);
    return P.log = this.log, P;
  }
  function f(b) {
    r.save(b), r.namespaces = b, r.names = [], r.skips = [];
    let m;
    const P = (typeof b == "string" ? b : "").split(/[\s,]+/), O = P.length;
    for (m = 0; m < O; m++)
      P[m] && (b = P[m].replace(/\*/g, ".*?"), b[0] === "-" ? r.skips.push(new RegExp("^" + b.slice(1) + "$")) : r.names.push(new RegExp("^" + b + "$")));
  }
  function p() {
    const b = [
      ...r.names.map(_),
      ...r.skips.map(_).map((m) => "-" + m)
    ].join(",");
    return r.enable(""), b;
  }
  function g(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let m, P;
    for (m = 0, P = r.skips.length; m < P; m++)
      if (r.skips[m].test(b))
        return !1;
    for (m = 0, P = r.names.length; m < P; m++)
      if (r.names[m].test(b))
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
var s0 = i0;
(function(c, i) {
  i.formatArgs = o, i.save = f, i.load = p, i.useColors = r, i.storage = g(), i.destroy = /* @__PURE__ */ (() => {
    let M = !1;
    return () => {
      M || (M = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function o(M) {
    if (M[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + M[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
      return;
    const C = "color: " + this.color;
    M.splice(1, 0, C, "color: inherit");
    let b = 0, m = 0;
    M[0].replace(/%[a-zA-Z%]/g, (P) => {
      P !== "%%" && (b++, P === "%c" && (m = b));
    }), M.splice(m, 0, C);
  }
  i.log = console.debug || console.log || (() => {
  });
  function f(M) {
    try {
      M ? i.storage.setItem("debug", M) : i.storage.removeItem("debug");
    } catch {
    }
  }
  function p() {
    let M;
    try {
      M = i.storage.getItem("debug");
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
  c.exports = s0(i);
  const { formatters: _ } = c.exports;
  _.j = function(M) {
    try {
      return JSON.stringify(M);
    } catch (C) {
      return "[UnexpectedJSONParseError]: " + C.message;
    }
  };
})(hs, hs.exports);
var a0 = hs.exports;
const o0 = /* @__PURE__ */ ru(a0), us = {};
function Kn(c) {
  if (!us[c]) {
    const i = o0("ultraPacer:core");
    i(`loading debug for namespace "${c}"`), us[c] = i.extend(c);
  }
  return us[c];
}
function fn(c, i = 0) {
  return Math.round(c * 10 ** i) / 10 ** i;
}
function Be(c, i, r, o, f) {
  return r + (f - c) / (i - c) * (o - r);
}
function u0(c, i, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < c[f])
      p.push(i[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[o]; )
        f++;
      f === c.length - 1 || r[o] === c[f] ? p.push(i[f]) : p.push(Be(c[f], c[f + 1], i[f], i[f + 1], r[o]));
    }
  return p;
}
function l0(c) {
  let i, r, o, f, p = 0, g = 0, _ = 0, M = 0, C = 0;
  for (i = 0; i < c.length; i++)
    r = c[i][0], o = c[i][1], f = c[i][2], C += f, p += f * r, _ += f * (r * r), g += f * o, M += f * (r * o);
  const b = (g * _ - p * M) / (C * _ - p * p);
  return [(C * M - p * g) / (C * _ - p * p), b];
}
function f0(c, i, r, o) {
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
    for (let m = f; m <= p; m++)
      b = (1 - (Math.abs(_ - c[m]) / M) ** 3) ** 3, C.push([c[m], i[m], b]);
    g.push(l0(C));
  }), g;
}
function su(c, i, r) {
  return fn(c, r) < fn(i, r);
}
function Ue(c, i, r) {
  return fn(c, r) <= fn(i, r);
}
function ds(c, i, r) {
  return fn(c, r) >= fn(i, r);
}
function Nr(c, i, r) {
  return fn(c, r) === fn(i, r);
}
class $e extends Error {
  constructor(r, o) {
    super(r);
    y(this, "field");
    this.name = "MissingDataError", this.field = o;
  }
}
class On {
  constructor(i) {
    y(this, "_altitude", 1);
    y(this, "_grade", 1);
    y(this, "_terrain", 1);
    y(this, "_heat", 1);
    y(this, "_dark", 1);
    y(this, "_fatigue", 1);
    y(this, "_strategy", 1);
    y(this, "_combined");
    Object.assign(this, i);
  }
  init(i) {
    return this._altitude = i, this._grade = i, this._terrain = i, this._heat = i, this._dark = i, this._fatigue = i, this._strategy = i, this;
  }
  get altitude() {
    return this._altitude;
  }
  set altitude(i) {
    this._altitude = i, delete this._combined;
  }
  get grade() {
    return this._grade;
  }
  set grade(i) {
    this._grade = i, delete this._combined;
  }
  get terrain() {
    return this._terrain;
  }
  set terrain(i) {
    this._terrain = i, delete this._combined;
  }
  get heat() {
    return this._heat;
  }
  set heat(i) {
    this._heat = i, delete this._combined;
  }
  get dark() {
    return this._dark;
  }
  set dark(i) {
    this._dark = i, delete this._combined;
  }
  get fatigue() {
    return this._fatigue;
  }
  set fatigue(i) {
    this._fatigue = i, delete this._combined;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(i) {
    this._strategy = i, delete this._combined;
  }
  get combined() {
    return this._combined === void 0 && (this._combined = this._altitude * this._grade * this._terrain * this._heat * this._dark * this._fatigue * this._strategy), this._combined;
  }
  /**
   * lookup a factor by name
   * @param name - factor name
   * @returns factor value
   */
  get(i) {
    switch (i) {
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
        throw new Error(`${i} is not a valid factor`);
    }
  }
  /**
   * @param f - function to apply
   * @param factors - factor list to apply
   */
  applyEach(i, r) {
    this._altitude = i(this._altitude, r.altitude), this._grade = i(this._grade, r.grade), this._terrain = i(this._terrain, r.terrain), this._heat = i(this._heat, r.heat), this._dark = i(this._dark, r.dark), this._fatigue = i(this._fatigue, r.fatigue), this._strategy = i(this._strategy, r.strategy);
  }
  /**
   * scale each factor
   * @param scale - scale to apply
   */
  scaleEach(i) {
    return this._altitude *= i, this._grade *= i, this._terrain *= i, this._heat *= i, this._dark *= i, this._fatigue *= i, this._strategy *= i, delete this._combined, this;
  }
}
function _s(c) {
  const i = new On().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    i.applyEach((f, p) => f + o * p, r);
  }), i.scaleEach(1 / iu.sumBy(c, "dist")), i;
}
class Jo {
  constructor(i, r, o) {
    y(this, "factors", new On());
    y(this, "point");
    y(this, "course");
    y(this, "loop");
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
  get grade() {
    return this.point.grade * (this.point.grade > 0 ? this.course.gainScale : this.course.lossScale);
  }
  get loc() {
    let i = this.point.loc * this.course.distScale;
    return this.loop && (i += this.course.loopDist * this.loop), i;
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
function h0(c, i) {
  (i === null || typeof i > "u") && (i = c0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= i.th ? 1 : (1 + i.rate / i.span / 100) ** (r - i.th);
}
const Yo = {
  baseline: 0,
  terrainScale: 1
};
function p0(c, i) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return i >= c.sunrise && i <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (i <= c.dawn || i >= c.dusk) ? 1 : r(i) >= r(c.nadir) ? Be(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(i)
  ) : Be(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(i)
  );
}
function g0(c, i, r, o = Yo) {
  if (i === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = Yo);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (i - 1) + o.baseline) * f, g = p0(r, c);
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
function _0(c, i) {
  return (i === null || typeof i > "u") && (i = d0), c < i.lower.lim ? i.lower.m * c + i.lower.b : c > i.upper.lim ? i.upper.m * c + i.upper.b : i.a * c ** 2 + i.b * c + 1;
}
function v0(c, i) {
  if (!i)
    return 1;
  if (c.tod === void 0)
    throw new Error("tod is undefined");
  const r = c.tod;
  let o = 1;
  if (r > i.start && r < i.stop) {
    const f = (r - i.start) / (i.stop - i.start) * Math.PI;
    o += (i.max - i.baseline) * Math.sin(f) / 100;
  }
  return o += i.baseline / 100, o;
}
function m0(c, i) {
  const r = W.findLast(i.terrainFactors, (o) => Ue(o.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const w0 = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function y0(c, i) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const g = p === c.length - 1 ? i : c[p + 1].onset, _ = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + _) * (g - f.onset), r += f.value;
  }), o / i;
}
function M0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function C0(c, i, r) {
  let o = -y0(i, r);
  return i.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        o += f.value;
      else if (f.type === "linear") {
        const g = p === i.length - 1 ? r : i[p + 1].onset;
        c > g ? o += f.value : o += f.value * (c - f.onset) / (g - f.onset);
      }
    }
  }), o;
}
class Xo {
  constructor(i, r) {
    y(this, "plan");
    y(this, "values");
    this.plan = i, this.values = r ? W.cloneDeep(r) : [{ onset: 0, value: M0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(i) {
    return 1 + C0(i, this.values, this.plan.course.dist) / 100;
  }
  addValue(i) {
    const r = this.values.findIndex((o) => o.onset >= i.onset);
    r >= 0 ? this.values.splice(r, 0, i) : this.values.push(i);
  }
}
function Qo(c, i) {
  return (c - 1) * i + 1;
}
function au(c, i) {
  c.factors || (c.factors = new On()), Object.assign(c.factors, {
    grade: _0(c.grade),
    altitude: h0(c.alt),
    terrain: m0(c, i)
  });
}
function ps(c, i) {
  if (c.factors || (c.factors = new On()), au(c, i.course), i) {
    if (c.factors === void 0)
      throw new Error("no factors");
    c.factors.strategy = i.strategy.at(c.loc), Object.assign(c.factors, {
      heat: i.heatModel ? v0(c, i.heatModel) : 1,
      dark: i.event.sun ? g0(c.tod, c.factors.terrain, i.event.sun) : 1
    });
  }
  c.factors.altitude = Qo(c.factors.altitude, i.scales.altitude), c.factors.dark = Qo(c.factors.dark, i.scales.dark);
}
function ou(c) {
  switch (c) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function uu(c, i, r) {
  const o = c.filter(
    (p, g) => g >= c.findIndex((_) => _ === i) && g <= c.findIndex((_) => _ === r)
  ), f = o.map((p, g) => ({
    factors: p.factors,
    dist: g === o.length - 1 ? 0 : o[g + 1].loc - o[g].loc
  }));
  return f.pop(), _s(f);
}
class lu {
  constructor(i) {
    y(this, "point1");
    y(this, "point2");
    y(this, "gain");
    y(this, "loss");
    y(this, "grade");
    y(this, "waypoint");
    y(this, "_name");
    this.point1 = i.point1, this.point2 = i.point2, this.gain = i.gain, this.loss = i.loss, this.grade = i.grade, i.name && (this._name = i.name);
  }
  get name() {
    var i;
    return this._name || ((i = this.waypoint) == null ? void 0 : i.name) || void 0;
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
class b0 extends lu {
  constructor(r, o) {
    super(o);
    y(this, "_course");
    y(this, "point1");
    y(this, "point2");
    y(this, "_factors");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
  get factors() {
    return this._factors || (this._factors = uu(this._course.points, this.point1, this.point2));
  }
}
class x0 extends lu {
  constructor(r, o) {
    super(o);
    y(this, "_plan");
    y(this, "point1");
    y(this, "point2");
    y(this, "_factors");
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
    return this._factors || (this._factors = uu(this._plan.points, this.point1, this.point2));
  }
}
const ls = Kn("CourseSplits");
class S0 {
  constructor(i) {
    y(this, "_segments");
    y(this, "_miles");
    y(this, "_kilometers");
    y(this, "course");
    this.course = i;
  }
  get segments() {
    return this._segments || (this._segments = this.createSegments()), this._segments;
  }
  set segments(i) {
    this._segments = i;
  }
  get miles() {
    var i;
    return (i = this._miles) != null && i.length || (this._miles = this.createSplits("miles")), this._miles;
  }
  set miles(i) {
    this._miles = i;
  }
  get kilometers() {
    var i;
    return (i = this._kilometers) != null && i.length || (this._kilometers = this.createSplits("kilometers")), this._kilometers;
  }
  set kilometers(i) {
    this._kilometers = i;
  }
  createSegments() {
    ls("createSegments");
    const i = this.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(i.map((o) => o.loc)));
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    ls(`createSplits:${i}`);
    const r = ou(i), o = W.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var P;
    const r = ls.extend("calcSegments");
    r("exec");
    const o = this.course, f = o.points;
    if (!(f != null && f.length))
      throw r("Course points are not defined."), new $e("Course points are not defined.", "points");
    const p = [], g = [];
    let _, M, C = o.points[0], b;
    for (_ = 0, M = i.length; _ < M; _++) {
      const O = i[_];
      b && Nr((P = i[_ - 1]) == null ? void 0 : P.end, O.start, 4) ? C = b : C = o.getPoint(O.start), b = o.getPoint(O.end);
      const R = O.end - O.start, F = new b0(this.course, {
        gain: 0,
        loss: 0,
        grade: R > 0 ? (b.alt - C.alt) / R / 10 * (b.alt - C.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: C,
        point2: b
      }), N = new On().init(0);
      p.push(F), g.push(N);
    }
    const m = (O, R, F, N) => {
      const K = F.alt - R.alt;
      O[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), au(R, o);
      const X = F.loc - R.loc;
      N.applyEach((Q, et) => Q + et * X, R.factors);
    };
    _ = 1;
    for (let O = 0; O < p.length; O++) {
      const R = p[O], F = g[O];
      for (; Ue(f[_].loc, R.point1.loc, 4); )
        _++;
      let N = R.point1;
      for (; _ < f.length && Ue(f[_].loc, R.point2.loc, 4); ) {
        const K = f[_];
        m(R, N, K, F), N = K, _++;
      }
      m(R, N, R.point2, F);
    }
    return p;
  }
}
var fu = {};
(function(c) {
  c.parseDMS = function(r) {
    if (typeof f == "object")
      throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
    if (typeof r == "number" && isFinite(r))
      return Number(r);
    var o = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
    if (o[o.length - 1] == "" && o.splice(o.length - 1), o == "")
      return NaN;
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
    if (typeof r == "object")
      throw new TypeError("geo.toDMS - deg is [DOM?] object");
    if (isNaN(r))
      return null;
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
  var i = 6371;
  c.latlon = function(r, o) {
    this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN;
  }, c.latlon.prototype.distanceTo = function(r, o) {
    typeof o > "u" && (o = 4);
    var f = this.distanceRadTo(r), p = i * f;
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
      var _ = r[g], M = _.lat * Math.PI / 180, C = _.lng * Math.PI / 180, b = Math.cos(M) * Math.cos(C), m = Math.cos(M) * Math.sin(C), P = Math.sin(M);
      o += b, f += m, p += P;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var O = Math.atan2(f, o), R = Math.sqrt(o * o + f * f), F = Math.atan2(p, R);
    return new c.latlon(F * 180 / Math.PI, O * 180 / Math.PI);
  }, c.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), g = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var M = Math.sin(g), C = Math.cos(g), b = [], m = 0; m < o; m++) {
      var P = 1 / (o - 1) * m, O = f * P, R = Math.sin(O), F = Math.cos(O), N = Math.asin(M * F + C * R * Math.cos(p)), K = _ + Math.atan2(Math.sin(p) * R * C, F - M * Math.sin(N)), X = N.toDeg(), Q = K.toDeg();
      for (X > 90 && (X = 90), X < -90 && (X = -90); Q > 180; )
        Q -= 360;
      for (; Q <= -180; )
        Q += 360;
      b.push(new c.latlon(X, Q));
    }
    return b;
  }, c.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / i, r = r.toRad();
    var f = this.lat.toRad(), p = this.lng.toRad(), g = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), _ = p + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(f),
      Math.cos(o) - Math.sin(f) * Math.sin(g)
    );
    return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(g.toDeg(), _.toDeg());
  }, c.latlon.intersection = function(r, o, f, p) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
    var g = r.lat.toRad(), _ = r.lng.toRad(), M = f.lat.toRad(), C = f.lng.toRad(), b = o.toRad(), m = p.toRad(), P = M - g, O = C - _, R = 2 * Math.asin(Math.sqrt(Math.sin(P / 2) * Math.sin(P / 2) + Math.cos(g) * Math.cos(M) * Math.sin(O / 2) * Math.sin(O / 2)));
    if (R == 0)
      return null;
    var F = Math.acos((Math.sin(M) - Math.sin(g) * Math.cos(R)) / (Math.sin(R) * Math.cos(g)));
    isNaN(F) && (F = 0);
    var N = Math.acos((Math.sin(g) - Math.sin(M) * Math.cos(R)) / (Math.sin(R) * Math.cos(M)));
    if (Math.sin(C - _) > 0)
      var K = F, X = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - F, X = N;
    var Q = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (X - m + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(Q) == 0 && Math.sin(et) == 0 || Math.sin(Q) * Math.sin(et) < 0)
      return null;
    var xt = Math.acos(-Math.cos(Q) * Math.cos(et) + Math.sin(Q) * Math.sin(et) * Math.cos(R)), At = Math.atan2(
      Math.sin(R) * Math.sin(Q) * Math.sin(et),
      Math.cos(et) + Math.cos(Q) * Math.cos(xt)
    ), It = Math.asin(Math.sin(g) * Math.cos(At) + Math.cos(g) * Math.sin(At) * Math.cos(b)), Gt = Math.atan2(
      Math.sin(b) * Math.sin(At) * Math.cos(g),
      Math.cos(At) - Math.sin(g) * Math.sin(It)
    ), jt = _ + Gt;
    return jt = (jt + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(It.toDeg(), jt.toDeg());
  }, c.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = i, f = this.lat.toRad(), p = r.lat.toRad(), g = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), M = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(g / M) ? g / M : Math.cos(f);
    Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
    var b = Math.sqrt(g * g + C * C * _ * _) * o;
    return b.toPrecisionFixed(4);
  }, c.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), g = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
    var _ = Math.atan2(p, g);
    return (_.toDeg() + 360) % 360;
  }, c.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var f = i, p = parseFloat(o) / f, g = this.lat.toRad(), _ = this.lng.toRad();
    r = r.toRad();
    var M = p * Math.cos(r);
    Math.abs(M) < 1e-10 && (M = 0);
    var C = g + M, b = Math.log(Math.tan(C / 2 + Math.PI / 4) / Math.tan(g / 2 + Math.PI / 4)), m = isFinite(M / b) ? M / b : Math.cos(g), P = p * Math.sin(r) / m;
    Math.abs(C) > Math.PI / 2 && (C = C > 0 ? Math.PI - C : -Math.PI - C);
    var O = (_ + P + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new c.latlon(C.toDeg(), O.toDeg());
  }, c.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), g = r.lng.toRad();
    Math.abs(g - f) > Math.PI && (f += 2 * Math.PI);
    var _ = (o + p) / 2, M = Math.tan(Math.PI / 4 + o / 2), C = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + _ / 2), m = ((g - f) * Math.log(b) + f * Math.log(C) - g * Math.log(M)) / Math.log(C / M);
    return isFinite(m) || (m = (f + g) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(_.toDeg(), m.toDeg());
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
      for (var _ = p.length - 1; g-- > _; )
        p = p + "0";
      return p;
    }), o = o.replace(/(.+)e-(.+)/, function(f, p, g) {
      for (p = p.replace(/\./, ""); g-- > 1; )
        p = "0" + p;
      return "0." + p;
    }), o;
  }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  });
})(fu);
class cu {
  constructor(i, r, o) {
    y(this, "alt");
    y(this, "lat");
    y(this, "lon");
    this.lat = i, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new fu.latlon(this.lat, this.lon);
  }
}
class hu extends cu {
  constructor(r, o, f, p, g) {
    super(r, o, f);
    y(this, "loc");
    y(this, "grade");
    this.loc = p, this.grade = g;
  }
}
function pu(c, i, r) {
  if (c.loc > i.loc && r > c.loc || i.loc > c.loc && r > i.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(i.latlon), { lat: p, lng: g } = c.latlon.destinationPoint(f, o), _ = c.grade, M = Be(c.loc, i.loc, c.alt, i.alt, r);
  return new hu(p, g, M, r, _);
}
function A0(c, i) {
  return (typeof c == "object" ? String(c._id) : c) === (typeof i == "object" ? String(i._id) : i);
}
function gs(c, i) {
  return !!(c && i && A0(c.site, i.site) && c.loop === i.loop);
}
class Vo {
  constructor(i, r = 1) {
    y(this, "_data");
    y(this, "loop");
    y(this, "site");
    this._data = {}, this.site = i, this.loop = r;
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
    if (!W.isNumber(i))
      throw new Error("Wrong format for Waypoint.loc");
    this.type === "start" ? this.site.percent = 0 : this.type === "finish" ? this.site.percent = 1 : this.site.percent = i / this.course.loopDist % 1;
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
  get hasTypicalDelay() {
    return this.type === "aid" || this.type === "water" || this.loop >= 2 && this.type === "start";
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
    const r = (o = this.site.cutoffs) == null ? void 0 : o.findIndex((f) => f.loop === this.loop);
    r >= 0 ? i ? this.site.cutoffs[r].time = i : this.site.cutoffs.splice(r, 1) : i && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: i, loop: this.loop }));
  }
  matchingSegment(i) {
    return i.find((r) => r.waypoint && gs(this, r.waypoint));
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
const We = Kn("models:Waypoint");
class fs {
  constructor(i, r) {
    y(this, "_waypoints");
    y(this, "_lat");
    y(this, "_lon");
    y(this, "_alt");
    y(this, "_data");
    y(this, "_id");
    y(this, "course");
    y(this, "cutoffs", []);
    y(this, "name");
    y(this, "tier", 1);
    y(this, "type");
    y(this, "terrainFactor");
    y(this, "terrainType");
    y(this, "description");
    y(this, "pointsIndex");
    y(this, "dropbags");
    y(this, "crew");
    this._data = { percent: r.percent }, this.course = i, this._id = r._id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), this.crew = r.crew || !1, this.dropbags = r.dropbags || !1, We(`constructor: ${this.name}`);
  }
  clearCache() {
    We(`clearCache: ${this.name}`), delete this._waypoints, delete this._lat, delete this._lon, delete this._alt;
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
    return this._waypoints ? this._waypoints : (We(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new Vo(this, this.course.loops)] : this._waypoints = W.range(this.course.loops).map((i) => new Vo(this, i + 1)), this._waypoints);
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
    if (We("refreshLLA"), !((g = (p = (f = this.course) == null ? void 0 : f.track) == null ? void 0 : p.points) != null && g.length))
      throw new $e("No track points defined", "points");
    let i, r, o;
    this.type === "start" ? { lat: i, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: i, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: i, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = i, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
  serialize() {
    We(`serialize: ${this.name}`);
    const i = Object.keys(this);
    return i.push("percent"), W.pick(this, i);
  }
}
const Ln = Kn("models:Course"), I0 = ["track", "dist", "gain", "loss", "cache", "distance"];
class z0 {
  constructor(i) {
    y(this, "name");
    y(this, "_cache", {});
    y(this, "_loops", 1);
    y(this, "_distOverride");
    y(this, "_gainOverride");
    y(this, "_lossOverride");
    y(this, "_dist");
    y(this, "_gain");
    y(this, "_loss");
    y(this, "_sites", [
      new fs(this, {
        _id: String(W.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new fs(this, {
        _id: String(W.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ]);
    y(this, "_waypoints");
    y(this, "_track");
    y(this, "_points");
    // terrainFactors: array of TerrainFactor objects only where actual terrain factor values exist
    y(this, "_terrainFactors");
    // terrainTypes: array of TerrainType objects only where actual terrain type changes exist
    y(this, "_terrainTypes");
    y(this, "_cutoffs");
    y(this, "_splits");
    // calculate max and min values along course
    y(this, "_stats");
    this._track = i.track, i.loops && (this.loops = i.loops), i.dist && (this._distOverride = i.dist), i.gain && (this._gainOverride = i.gain), i.loss && (this._lossOverride = i.loss);
    const r = Object.keys(i).filter((o) => !I0.includes(o));
    Object.assign(this, W.pick(i, r));
  }
  get loops() {
    return this._loops;
  }
  set loops(i) {
    this._loops = i, this.clearCache(2);
  }
  set dist(i) {
    Ln(`overriding dist to ${i}`), this._distOverride = i, this.clearCache(2);
  }
  set gain(i) {
    Ln(`overriding gain to ${i}`), this._gainOverride = i, this.clearCache(2);
  }
  set loss(i) {
    Ln(`overriding loss to ${i}`), this._lossOverride = i, this.clearCache(2);
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
  set sites(i) {
    this._sites = i.map((r) => new fs(this, r)), this.clearCache(1);
  }
  clearCache(i = 1) {
    Ln(`clearCache-${i}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrainFactors, delete this._terrainTypes, delete this._waypoints, i === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
      r.clearCache();
    }));
  }
  get waypoints() {
    var r;
    if (this._waypoints)
      return this._waypoints;
    if (!((r = this.track) != null && r.dist))
      return [];
    let i = [];
    return this.sites.forEach((o) => {
      i.push(...o.waypoints);
    }), i = i.sort((o, f) => o.loc - f.loc), this._waypoints = i, this._waypoints;
  }
  set track(i) {
    this._track = i, this.clearCache(2);
  }
  get track() {
    return this._track;
  }
  get points() {
    var i, r;
    if (this._points)
      return this._points;
    if (Ln("generating points array"), !((r = (i = this.track) == null ? void 0 : i.points) != null && r.length))
      throw new $e("Track points are not defined.", "points");
    this._points = new Array(this.track.points.length * this.loops);
    for (let o = 0; o < this.loops; o++)
      for (let f = 0; f < this.track.points.length; f++)
        this.points[f + o * this.track.points.length] = new Jo(
          this,
          this.track.points[f],
          o
        );
    return this._points;
  }
  set points(i) {
    throw new Error("cannot set points directly");
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The CoursePoint at input location.
   */
  getPoint(i, r = !1) {
    const o = this.points.findIndex((C) => ds(C.loc, i, 4)), f = this.points[o];
    if (Nr(f.loc, i, 4))
      return f;
    Ln(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${i}`);
    const p = o - 1, g = this.points[p], _ = pu(g.point, f.point, i % this.loopDist / this.distScale), M = new Jo(this, _, Math.floor(i / this.loopDist));
    return r && this.points.splice(o, 0, M), M;
  }
  get terrainFactors() {
    if (this._terrainFactors)
      return this._terrainFactors;
    Ln("regenerating terrainFactors");
    const i = this.waypoints.filter(
      (r, o) => {
        var f;
        return o === 0 || !W.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainFactor);
      }
    );
    return this._terrainFactors = i.map((r, o) => new F0(r, i[o + 1] || W.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes)
      return this._terrainTypes;
    Ln("regenerating terrainTypes");
    const i = this.waypoints.filter(
      (r, o) => {
        var f;
        return !W.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainType);
      }
    );
    return this._terrainTypes = i.map((r, o) => new P0(r, i[o + 1] || W.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((i) => i.cutoff).map((i) => new T0(i)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new S0(this), this._splits);
  }
  get stats() {
    if (this._stats)
      return this._stats;
    Ln("stats:calculate");
    const i = this.track.points.map((g) => g.alt), r = this.track.points.map((g) => g.grade), o = this.terrainFactors.map((g) => g.value / 100 + 1), f = {
      altitude: {
        avg: W.sum(
          this.track.points.map((g, _) => {
            var M;
            return g.alt * (g.loc - (((M = this.track.points[_ - 1]) == null ? void 0 : M.loc) || 0));
          })
        ) / this.track.dist,
        max: W.max(i) || 0,
        min: W.min(i) || 0
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
    }, p = (g) => this.terrainFactors.reduce((_, M) => M.value / 100 + 1 === g ? _ + M.end - M.start : _, 0);
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(i) {
    const r = i.filter((f) => f > 0 && su(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class T0 {
  constructor(i) {
    y(this, "waypoint");
    this.waypoint = i;
  }
  get loc() {
    return this.waypoint.loc;
  }
  get time() {
    if (!this.waypoint.cutoff)
      throw new Error("Invalid cutoff");
    return this.waypoint.cutoff;
  }
}
class F0 {
  constructor(i, r, o = 0) {
    y(this, "value");
    y(this, "startWaypoint");
    y(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.value = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class P0 {
  constructor(i, r, o) {
    y(this, "type");
    y(this, "startWaypoint");
    y(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.type = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var gu = { exports: {} };
(function(c, i) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, g = Math.asin, _ = Math.atan2, M = Math.acos, C = r / 180, b = 1e3 * 60 * 60 * 24, m = 2440588, P = 2451545;
    function O(k) {
      return k.valueOf() / b - 0.5 + m;
    }
    function R(k) {
      return new Date((k + 0.5 - m) * b);
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
    function Gt(k) {
      var z = C * (1.9148 * o(k) + 0.02 * o(2 * k) + 3e-4 * o(3 * k)), G = C * 102.9372;
      return k + z + G + r;
    }
    function jt(k) {
      var z = It(k), G = Gt(z);
      return {
        dec: X(G, 0),
        ra: K(G, 0)
      };
    }
    var Ht = {};
    Ht.getPosition = function(k, z, G) {
      var ct = C * -G, nt = C * z, ht = F(k), ot = jt(ht), lt = xt(ht, ct) - ot.ra;
      return {
        azimuth: Q(lt, nt, ot.dec),
        altitude: et(lt, nt, ot.dec)
      };
    };
    var me = Ht.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    Ht.addTime = function(k, z, G) {
      me.push([k, z, G]);
    };
    var ze = 9e-4;
    function Wr(k, z) {
      return Math.round(k - ze - z / (2 * r));
    }
    function we(k, z, G) {
      return ze + (k + z) / (2 * r) + G;
    }
    function Ge(k, z, G) {
      return P + k + 53e-4 * o(z) - 69e-4 * o(2 * G);
    }
    function Br(k, z, G) {
      return M((o(k) - o(z) * o(G)) / (f(z) * f(G)));
    }
    function bn(k) {
      return -2.076 * Math.sqrt(k) / 60;
    }
    function vn(k, z, G, ct, nt, ht, ot) {
      var lt = Br(k, G, ct), yt = we(lt, z, nt);
      return Ge(yt, ht, ot);
    }
    Ht.getTimes = function(k, z, G, ct) {
      ct = ct || 0;
      var nt = C * -G, ht = C * z, ot = bn(ct), lt = F(k), yt = Wr(lt, nt), qt = we(0, nt, yt), Rt = It(qt), Nt = Gt(Rt), mn = X(Nt, 0), _t = Ge(qt, Rt, Nt), kt, Dn, Mt, Wt, cn, tn, pt = {
        solarNoon: R(_t),
        nadir: R(_t - 0.5)
      };
      for (kt = 0, Dn = me.length; kt < Dn; kt += 1)
        Mt = me[kt], Wt = (Mt[0] + ot) * C, cn = vn(Wt, nt, ht, mn, yt, Rt, Nt), tn = _t - (cn - _t), pt[Mt[1]] = R(tn), pt[Mt[2]] = R(cn);
      return pt;
    };
    function He(k) {
      var z = C * (218.316 + 13.176396 * k), G = C * (134.963 + 13.064993 * k), ct = C * (93.272 + 13.22935 * k), nt = z + C * 6.289 * o(G), ht = C * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ht),
        dec: X(nt, ht),
        dist: ot
      };
    }
    Ht.getMoonPosition = function(k, z, G) {
      var ct = C * -G, nt = C * z, ht = F(k), ot = He(ht), lt = xt(ht, ct) - ot.ra, yt = et(lt, nt, ot.dec), qt = _(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return yt = yt + At(yt), {
        azimuth: Q(lt, nt, ot.dec),
        altitude: yt,
        distance: ot.dist,
        parallacticAngle: qt
      };
    }, Ht.getMoonIllumination = function(k) {
      var z = F(k || /* @__PURE__ */ new Date()), G = jt(z), ct = He(z), nt = 149598e3, ht = M(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = _(nt * o(ht), ct.dist - nt * f(ht)), lt = _(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function xn(k, z) {
      return new Date(k.valueOf() + z * b / 24);
    }
    Ht.getMoonTimes = function(k, z, G, ct) {
      var nt = new Date(k);
      ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ht = 0.133 * C, ot = Ht.getMoonPosition(nt, z, G).altitude - ht, lt, yt, qt, Rt, Nt, mn, _t, kt, Dn, Mt, Wt, cn, tn, pt = 1; pt <= 24 && (lt = Ht.getMoonPosition(xn(nt, pt), z, G).altitude - ht, yt = Ht.getMoonPosition(xn(nt, pt + 1), z, G).altitude - ht, Nt = (ot + yt) / 2 - lt, mn = (yt - ot) / 2, _t = -mn / (2 * Nt), kt = (Nt * _t + mn) * _t + lt, Dn = mn * mn - 4 * Nt * lt, Mt = 0, Dn >= 0 && (tn = Math.sqrt(Dn) / (Math.abs(Nt) * 2), Wt = _t - tn, cn = _t + tn, Math.abs(Wt) <= 1 && Mt++, Math.abs(cn) <= 1 && Mt++, Wt < -1 && (Wt = cn)), Mt === 1 ? ot < 0 ? qt = pt + Wt : Rt = pt + Wt : Mt === 2 && (qt = pt + (kt < 0 ? cn : Wt), Rt = pt + (kt < 0 ? Wt : cn)), !(qt && Rt)); pt += 2)
        ot = yt;
      var wn = {};
      return qt && (wn.rise = xn(nt, qt)), Rt && (wn.set = xn(nt, Rt)), !qt && !Rt && (wn[kt > 0 ? "alwaysUp" : "alwaysDown"] = !0), wn;
    }, c.exports = Ht;
  })();
})(gu);
var jo = gu.exports;
function ee(c, i) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: i
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class E0 {
  constructor(i) {
    y(this, "nadir", 0);
    y(this, "dawn", 0);
    y(this, "sunrise", 0);
    y(this, "dusk", 0);
    y(this, "sunset", 0);
    y(this, "noon", 0);
    y(this, "nadirAltitude", 0);
    Object.assign(this, i);
  }
}
class tu {
  constructor(i, r, o, f) {
    y(this, "start");
    y(this, "lat");
    y(this, "lon");
    y(this, "timezone");
    y(this, "sun");
    y(this, "startTime");
    this.start = i, this.lat = o, this.lon = f, this.timezone = r;
    const p = jo.getTimes(this.start, this.lat, this.lon), g = jo.getPosition(p.nadir, this.lat, this.lon);
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
    return W.pick(this, ["start", "sun", "lat", "lon", "timezone"]);
  }
}
var Dr = {};
(function(c) {
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
      return f(g(_), arguments);
    }
    function o(_, M) {
      return r.apply(null, [_].concat(M || []));
    }
    function f(_, M) {
      var C = 1, b = _.length, m, P = "", O, R, F, N, K, X, Q, et;
      for (O = 0; O < b; O++)
        if (typeof _[O] == "string")
          P += _[O];
        else if (typeof _[O] == "object") {
          if (F = _[O], F.keys)
            for (m = M[C], R = 0; R < F.keys.length; R++) {
              if (m == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', F.keys[R], F.keys[R - 1]));
              m = m[F.keys[R]];
            }
          else
            F.param_no ? m = M[F.param_no] : m = M[C++];
          if (i.not_type.test(F.type) && i.not_primitive.test(F.type) && m instanceof Function && (m = m()), i.numeric_arg.test(F.type) && typeof m != "number" && isNaN(m))
            throw new TypeError(r("[sprintf] expecting number but found %T", m));
          switch (i.number.test(F.type) && (Q = m >= 0), F.type) {
            case "b":
              m = parseInt(m, 10).toString(2);
              break;
            case "c":
              m = String.fromCharCode(parseInt(m, 10));
              break;
            case "d":
            case "i":
              m = parseInt(m, 10);
              break;
            case "j":
              m = JSON.stringify(m, null, F.width ? parseInt(F.width) : 0);
              break;
            case "e":
              m = F.precision ? parseFloat(m).toExponential(F.precision) : parseFloat(m).toExponential();
              break;
            case "f":
              m = F.precision ? parseFloat(m).toFixed(F.precision) : parseFloat(m);
              break;
            case "g":
              m = F.precision ? String(Number(m.toPrecision(F.precision))) : parseFloat(m);
              break;
            case "o":
              m = (parseInt(m, 10) >>> 0).toString(8);
              break;
            case "s":
              m = String(m), m = F.precision ? m.substring(0, F.precision) : m;
              break;
            case "t":
              m = String(!!m), m = F.precision ? m.substring(0, F.precision) : m;
              break;
            case "T":
              m = Object.prototype.toString.call(m).slice(8, -1).toLowerCase(), m = F.precision ? m.substring(0, F.precision) : m;
              break;
            case "u":
              m = parseInt(m, 10) >>> 0;
              break;
            case "v":
              m = m.valueOf(), m = F.precision ? m.substring(0, F.precision) : m;
              break;
            case "x":
              m = (parseInt(m, 10) >>> 0).toString(16);
              break;
            case "X":
              m = (parseInt(m, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          i.json.test(F.type) ? P += m : (i.number.test(F.type) && (!Q || F.sign) ? (et = Q ? "+" : "-", m = m.toString().replace(i.sign, "")) : et = "", K = F.pad_char ? F.pad_char === "0" ? "0" : F.pad_char.charAt(1) : " ", X = F.width - (et + m).length, N = F.width && X > 0 ? K.repeat(X) : "", P += F.align ? et + m + N : K === "0" ? et + N + m : N + et + m);
        }
      return P;
    }
    var p = /* @__PURE__ */ Object.create(null);
    function g(_) {
      if (p[_])
        return p[_];
      for (var M = _, C, b = [], m = 0; M; ) {
        if ((C = i.text.exec(M)) !== null)
          b.push(C[0]);
        else if ((C = i.modulo.exec(M)) !== null)
          b.push("%");
        else if ((C = i.placeholder.exec(M)) !== null) {
          if (C[2]) {
            m |= 1;
            var P = [], O = C[2], R = [];
            if ((R = i.key.exec(O)) !== null)
              for (P.push(R[1]); (O = O.substring(R[0].length)) !== ""; )
                if ((R = i.key_access.exec(O)) !== null)
                  P.push(R[1]);
                else if ((R = i.index_access.exec(O)) !== null)
                  P.push(R[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            C[2] = P;
          } else
            m |= 2;
          if (m === 3)
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
})(Dr);
class du {
  /**
   *
   * @param target - target object
   * @param events - array of event names to map
   */
  constructor(i, r) {
    y(this, "_callbacks", {});
    y(this, "_target");
    this._target = i, this._callbacks = W.fromPairs(r.map((o) => [o, []]));
  }
  /**
   * add a callback function to an event
   * @param evt - event name
   * @param fun - callback function, first argument is target object
   */
  add(i, r) {
    if (!this._callbacks[i])
      throw new Error(`${i} is not a valid callback for object`);
    this._callbacks[i].find((o) => o === r) ? console.warn("callback already exists.") : this._callbacks[i].push(r);
  }
  /**
   * remove a callback function from event
   * @param evt - event name
   * @param fun - callback function
   */
  remove(i, r) {
    if (!this._callbacks[i])
      throw new Error(`${i} is not a valid callback for object`);
    W.pull(this._callbacks[i], r);
  }
  /**
   * clear all callbacks from a target
   * @param evt - event to clear; if undefined all events will be cleared
   */
  clear(i) {
    (i ? [i] : Object.keys(this._callbacks)).forEach((o) => this._callbacks[o] = []);
  }
  /**
   * execute callbacks for an event
   * @param evt - event name
   */
  execute(i) {
    this._callbacks[i].forEach((r) => r(this._target));
  }
}
const R0 = Kn("PaceChunk");
class k0 {
  constructor() {
    y(this, "iterations", !1);
    y(this, "factor", !1);
    y(this, "target", !1);
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
class nu {
  constructor(i, r, o, f) {
    y(this, "constraints");
    y(this, "points");
    y(this, "plan");
    y(this, "delay");
    y(this, "factor");
    y(this, "factors", new On());
    y(this, "status");
    this.constraints = o, this.points = r, this.plan = i, this.delay = f, this.factor = 1;
  }
  get elapsed() {
    const i = W.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (W.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - i;
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
    const i = this.points;
    i[0].elapsed = W.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], i[0].time = i[0].elapsed - W.sum(this.plan.pacing.chunks.filter((C) => C.points[0].loc < i[0].loc).map((C) => C.delay)), this.plan.event.start && (i[0].tod = this.plan.event.elapsedToTimeOfDay(i[0].elapsed));
    let r = i[0].elapsed, o = i[0].delay || 0, f = 0, p = 0, g = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, M = new On().init(0);
    for (let C = 1, b = i.length; C < b; C++) {
      f = i[C].loc - i[C - 1].loc, ps(i[C - 1], this.plan), M.applyEach((P, O) => P + O * f, i[C - 1].factors);
      const m = i[C - 1].factors.combined;
      g += m * f, p = _ * m * f, i[C].time = i[C - 1].time + p, o = i[C - 1].delay || 0, r += p + o, i[C].elapsed = r, this.plan.event.start && (i[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    ps(i[i.length - 1], this.plan), this.factors = M.scaleEach(1 / this.dist), this.factor = g / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = R0.extend(
      Dr.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const g = new k0();
    for (p = 0; p < 20 && (this.applyPacing(), g.iterations = p >= 2, g.factor = !W.round(f - this.factor, 10), f = this.factor, g.target = Math.abs(
      (W.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(Dr.vsprintf("%i|%s", [p, g.statusString])), !g.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: g,
      success: g.passing,
      iterations: p + 1
    };
  }
}
const Vt = Kn("Pacing");
class L0 {
  constructor(i) {
    y(this, "callbacks", new du(this, ["onUpdated", "onFail", "onInvalidated"]));
    y(this, "chunks", []);
    y(this, "plan");
    y(this, "_elapsed");
    y(this, "_factor");
    y(this, "_factors");
    this.plan = i;
  }
  clearCache() {
    Vt("clearCache"), delete this._elapsed, delete this._factor, delete this._factors;
  }
  invalidate() {
    Vt("invalidate"), this.chunks = [], this.clearCache(), this.callbacks.execute("onInvalidated");
  }
  get elapsed() {
    return Vt("elapsed:get"), this._elapsed || this.plan.points[this.plan.points.length - 1].elapsed;
  }
  get pace() {
    return Vt("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._factor ? this._factor : (Vt("factor:update"), this.chunks && (this._factor = W.sum(this.chunks.map((i) => i.factor * i.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return Vt("factors:get"), this._factors || (Vt("factors:update"), this._factors = _s(this.chunks)), this._factors;
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
      success: ((r = this.chunks) == null ? void 0 : r.filter((f) => {
        var p;
        return !((p = f.status) != null && p.success);
      }).length) === 0,
      chunks: ((o = this.chunks) == null ? void 0 : o.length) || 0
    };
  }
  calculate() {
    var o, f, p;
    const i = Vt.extend("calculate");
    if (i("exec"), !((o = this.plan.points) != null && o.length))
      throw i("calculate: error; no points"), new $e("Plan points are not defined.", "points");
    i("clearing cache"), this.clearCache(), i("adding points at each terrain factor break"), (f = this.plan.course.terrainFactors) == null || f.forEach((g) => this.plan.getPoint(g.start, !0)), i("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((g) => {
      g.point = this.plan.getPoint(g.loc, !0);
    }), this.plan.points.filter((g) => g.delay).forEach((g) => {
      g.delay = 0;
    }), (p = this.plan.delays) == null || p.forEach((g) => {
      const _ = this.plan.getPoint(g.loc, !0);
      _.delay = g.delay;
    }), i("creating pace chunks"), this.initChunks(), [null, ...W.reverse([...this.plan.cutoffs]), null].forEach((g) => {
      for (; this.chunks.find((_) => !_.status); )
        this.calcChunks(), this.validateChunks();
      if (!g)
        return !0;
      if (g.point.elapsed - g.time > 0.5) {
        i(`cutoff at ${g.loc} missed`);
        const _ = this.chunks[0];
        W.last(_.points) === g.point ? (i(`setting cutoff at ${g.loc}`), _.constraints = [0, g.time], delete _.status) : this.splitChunk(_, g.point, g.time);
      }
    }), W.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (i("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), Vt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
  }
  /**
   * initialize pacing chunks array
   */
  initChunks() {
    let i;
    switch (this.plan.method) {
      case "time":
        i = this.plan.target;
        break;
      case "pace":
        i = this.plan.target * this.plan.course.dist + this.plan.delay;
        break;
      case "np":
        i = () => this.plan.target * (this.factor || 1) * this.plan.course.dist + this.plan.delay;
        break;
      default:
        throw new Error(`Incorrect pacing method ${this.plan.method}`);
    }
    this.chunks = [new nu(this.plan, this.plan.points, [0, i], this.plan.delay)], this.plan.points.forEach((r) => {
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
   * @param chunk - PaceChunk to split
   * @param point - point to split at
   * @param elapsed - elapsed time at split
   */
  splitChunk(i, r, o) {
    Vt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = i.points.findIndex((M) => M === r), g = W.round(r.elapsed - r.time), _ = new nu(this.plan, i.points.slice(0, p + 1), [0, o], g);
    _.points.filter((M, C) => C < _.points.length - 1).forEach((M) => {
      M._chunk = _;
    }), this.chunks.unshift(_), i.constraints[0] = o, i.delay -= g, i.points = i.points.slice(p), delete i.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(i, r) {
    const o = this.chunks.findIndex((p) => p === i), f = this.chunks.findIndex((p) => p === r);
    if (f - o !== 1)
      throw new Error("chunks must be sequential");
    Vt(Dr.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, i.np, r.np)), i.points.pop(), i.points.push(...r.points), i.delay += r.delay, delete i.status, i.points.forEach((p) => {
      p._chunk = i;
    }), i.constraints = [i.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class eu {
  constructor(i, r) {
    y(this, "factors", new On());
    y(this, "_chunk");
    y(this, "_plan");
    y(this, "_point");
    y(this, "elapsed");
    y(this, "time");
    y(this, "tod");
    y(this, "delay");
    this._plan = i, this._point = r, this.time = 0, this.elapsed = 0, this.tod = 0, this.delay = 0;
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
    var i;
    if (!this._chunk)
      throw new Error("PlanPoint._chunk not defined");
    return (i = this._chunk) == null ? void 0 : i.np;
  }
  get factor() {
    var i;
    return (i = this.factors) == null ? void 0 : i.combined;
  }
  get pace() {
    return this.np * this.factor;
  }
}
const cs = Kn("PlanSplits");
class O0 {
  constructor(i) {
    y(this, "_segments");
    y(this, "_miles");
    y(this, "_kilometers");
    y(this, "plan");
    this.plan = i;
  }
  get segments() {
    var i;
    return (i = this._segments) != null && i.length || (this.plan.checkPacing(), this._segments = this.createSegments()), this._segments;
  }
  set segments(i) {
    this._segments = i;
  }
  get miles() {
    var i;
    return (i = this._miles) != null && i.length || (this.plan.checkPacing(), this._miles = this.createSplits("miles")), this._miles;
  }
  set miles(i) {
    this._miles = i;
  }
  get kilometers() {
    var i;
    return (i = this._kilometers) != null && i.length || (this.plan.checkPacing(), this._kilometers = this.createSplits("kilometers")), this._kilometers;
  }
  set kilometers(i) {
    this._kilometers = i;
  }
  createSegments() {
    cs("createSegments");
    const i = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(i.map((o) => o.loc)));
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    cs(`createSplits:${i}`);
    const r = ou(i), o = W.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var O;
    const r = cs.extend("calcSegments");
    r("exec");
    const o = this.plan, f = o.course, p = o.points;
    if (!(p != null && p.length))
      throw r("Plan points are not defined."), new $e("Plan points are not defined.", "points");
    const g = [], _ = [];
    let M, C, b = o.points[0], m;
    for (M = 0, C = i.length; M < C; M++) {
      const R = i[M];
      m && Nr((O = i[M - 1]) == null ? void 0 : O.end, R.start, 4) ? b = m : b = o.getPoint(R.start), m = o.getPoint(R.end);
      const F = R.end - R.start, N = new x0(this.plan, {
        gain: 0,
        loss: 0,
        grade: F > 0 ? (m.alt - b.alt) / F / 10 * (m.alt - b.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: b,
        point2: m
      }), K = new On().init(0);
      g.push(N), _.push(K);
    }
    const P = (R, F, N, K) => {
      const X = N.alt - F.alt;
      R[X > 0 ? "gain" : "loss"] += X * (X > 0 ? f.gainScale : f.lossScale), ps(F, o);
      const Q = N.loc - F.loc;
      K.applyEach((et, xt) => et + xt * Q, F.factors);
    };
    M = 1;
    for (let R = 0; R < g.length; R++) {
      const F = g[R], N = _[R];
      for (; Ue(p[M].loc, F.point1.loc, 4); )
        M++;
      let K = F.point1;
      for (; M < p.length && Ue(p[M].loc, F.point2.loc, 4); ) {
        const X = p[M];
        P(F, K, X, N), K = X, M++;
      }
      P(F, K, F.point2, N), o && (F.delay = o.delays.filter((X) => ds(F.point1.loc, X.loc, 4) && su(F.point2.loc, X.loc, 4)).reduce((X, Q) => X + Q.delay, 0));
    }
    return g;
  }
}
const _n = Kn("models:Plan");
class D0 {
  constructor(i) {
    y(this, "plan");
    y(this, "_altitude", 1);
    y(this, "_dark", 1);
    this.plan = i;
  }
  get altitude() {
    return this._altitude;
  }
  set altitude(i) {
    this._altitude = i, this.plan.clearCache();
  }
  get dark() {
    return this._dark;
  }
  set dark(i) {
    this._dark = i, this.plan.clearCache();
  }
}
class G0 {
  constructor(i) {
    y(this, "course");
    y(this, "event");
    y(this, "points");
    y(this, "method");
    y(this, "target");
    y(this, "name");
    y(this, "scales", new D0(this));
    y(this, "callbacks");
    y(this, "pacing");
    y(this, "_cutoffs");
    y(this, "_strategy");
    y(this, "_typicalDelay", 0);
    y(this, "_cutoffMargin", 0);
    y(this, "_heatModel");
    y(this, "_specifiedDelays", []);
    y(this, "_delays");
    y(this, "_splits");
    y(this, "_events");
    y(this, "_stats");
    this.pacing = new L0(this), this.course = i.course, this.points = this.course.points.map((r) => new eu(this, r)), this.event = new tu(
      i.start.date,
      i.start.timezone,
      this.points[0].lat,
      this.points[0].lon
    ), this.method = i.method, this.target = i.target, this.typicalDelay = i.typicalDelay || 0, i.delays && (this.delays = i.delays), this.cutoffMargin = i.cutoffMargin, this._strategy = new Xo(this, i.strategy), Object.assign(this.scales, i.scales || {}), i.heatModel && (this.heatModel = i.heatModel), this.name = i.name, this.callbacks = new du(this, ["onUpdated"]);
  }
  clearCache() {
    _n("clearCache"), delete this._cutoffs, delete this._splits, delete this._stats;
  }
  get cutoffs() {
    if (this._cutoffs)
      return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new W0(this, r, this.getPoint(r.loc, !0))) : [];
    let i = 0;
    for (; this._cutoffs.length - 1 >= i; ) {
      const r = this._cutoffs[i];
      this._cutoffs.find((o, f) => f > i && o.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(i, 1)) : i++;
    }
    return this._cutoffs;
  }
  set start(i) {
    this.event = new tu(i.date, i.timezone, this.points[0].lat, this.points[0].lon);
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(i) {
    this._strategy = new Xo(this, i), this.clearCache();
  }
  get typicalDelay() {
    return this._typicalDelay;
  }
  set typicalDelay(i) {
    this._typicalDelay = i, this.clearCache();
  }
  get cutoffMargin() {
    return this._cutoffMargin;
  }
  set cutoffMargin(i) {
    this._cutoffMargin = i, this.clearCache();
  }
  set heatModel(i) {
    this._heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: i.baseline,
      max: i.max
    };
  }
  get heatModel() {
    return this._heatModel;
  }
  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   */
  set delays(i) {
    this._specifiedDelays = i, delete this._delays;
  }
  get delays() {
    if (this._delays)
      return this._delays;
    const i = this.course.waypoints.map((o) => {
      var g;
      const f = (g = this._specifiedDelays) == null ? void 0 : g.find((_) => gs(_.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new N0(o, p);
    }).filter((o) => o.delay > 0).sort((o, f) => o.loc - f.loc);
    let r = 0;
    for (; i.length - 1 >= r; )
      r > 0 && i[r].loc === i[r - 1].loc ? (_n(`get delays: merging delay at ${i[r].loc} km`), i[r - 1].delay += i[r].delay, i.splice(r, 1)) : r++;
    return this._delays = i, this._delays;
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
    if (this._events)
      return this._events;
    _n("calculating events.sun");
    const i = [], r = this.event.elapsedToTimeOfDay(0), o = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let g = 0; g < o; g++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((M) => {
        const C = M.time - r + 86400 * g;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && i.push({ event: M.event, elapsed: C });
      });
    i.sort((g, _) => g.elapsed - _.elapsed);
    const f = u0(
      this.points.map((g) => g.elapsed),
      this.points.map((g) => g.loc),
      i.map((g) => g.elapsed)
    ), p = i.map((g, _) => ({ ...g, loc: f[_] }));
    return this._events = { sun: p }, this._events;
  }
  get stats() {
    if (this._stats)
      return this._stats;
    _n("calculating stats.factors");
    const i = W.fromPairs(
      w0.map((p) => {
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
      var _, M;
      o = p.loc - (((_ = this.points[g - 1]) == null ? void 0 : _.loc) || 0), f = p.elapsed - (((M = this.points[g - 1]) == null ? void 0 : M.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: i, sun: r }, this._stats;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(i) {
    var r;
    return ((r = this.delays.find((o) => gs(o.waypoint, i))) == null ? void 0 : r.delay) || 0;
  }
  /**
   * get typical delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getTypicalDelayAtWaypoint(i) {
    return i.hasTypicalDelay ? this.typicalDelay : 0;
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The PlanPoint at input location.
   */
  getPoint(i, r = !1) {
    const o = this.points.findIndex((M) => ds(M.loc, i, 4)), f = this.points[o];
    if (Nr(f.loc, i, 4))
      return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${i}`);
    const p = o - 1, g = this.points[p], _ = new eu(this, this.course.getPoint(i, r));
    if (!isNaN(g.time) && !isNaN(f.time)) {
      const M = f.elapsed - f.time - (g.elapsed - g.time);
      _.time = Be(g.loc, f.loc, g.time + M, f.time, f.loc), _.elapsed = f.elapsed - (f.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return r && this.points.splice(o, 0, _), _;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits;
  }
  checkPacing() {
    var i, r;
    if (_n("checkPacing"), (i = this.pacing.status) != null && i.complete || (_n("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length))
      throw new Error("No plan points");
    return !0;
  }
}
class N0 {
  constructor(i, r) {
    y(this, "delay");
    y(this, "waypoint");
    this.waypoint = i, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class W0 {
  constructor(i, r, o) {
    y(this, "plan");
    y(this, "courseCutoff");
    y(this, "point");
    this.plan = i, this.courseCutoff = r, this.point = o;
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
class _u {
  constructor(i) {
    y(this, "segments");
    this.segments = i;
  }
  /**
   * Returns first segment in segments array.
   * @returns The first segment in the segments array.
   */
  get first() {
    return this.segments[0];
  }
  /**
   * Returns last segment in segments array.
   * @returns The last segment in the segments array.
   */
  get last() {
    return this.segments[this.segments.length - 1];
  }
  get start() {
    return this.segments[0].start;
  }
  get end() {
    return this.last.end;
  }
  get len() {
    return this.last.end - this.first.start;
  }
  get gain() {
    return W.sum(this.segments.map((i) => i.gain));
  }
  get loss() {
    return W.sum(this.segments.map((i) => i.loss));
  }
  get grade() {
    return this.segments.reduce((i, r) => i + r.grade * r.len, 0) / this.len;
  }
  get name() {
    return this.last.name;
  }
  get waypoint() {
    return this.last.waypoint;
  }
  /**
   * Returns factors for this SuperSegment.
   * @returns The pacing factors for this segment, including overall "combined" factor.
   */
  get factors() {
    return _s(this.segments);
  }
  /**
   * Returns first point in the SuperSegment.
   * @returns The first point in the SuperSegment.
   */
  get point1() {
    return this.first.point1;
  }
  /**
   * Returns last point in the SuperSegment.
   * @returns The last point in the SuperSegment.
   */
  get point2() {
    return this.last.point2;
  }
}
class H0 extends _u {
  constructor(r) {
    super(r);
    y(this, "segments");
    this.segments = r;
  }
}
class q0 extends _u {
  constructor(r) {
    super(r);
    y(this, "segments");
    this.segments = r;
  }
  get last() {
    return this.segments[this.segments.length - 1];
  }
  get elapsed() {
    return this.last.elapsed;
  }
  get time() {
    return W.sum(this.segments.map((r) => r.time));
  }
  get tod() {
    return this.last.tod;
  }
}
const vu = (c, i, r, o) => {
  const f = f0(c, i, r, o), p = [];
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
function B0(c, i) {
  return vu(
    i,
    c.map((o) => o.alt),
    i,
    0.05
  ).map((o) => o.grade);
}
const U0 = (c) => {
  let i = 0, r = 0;
  const o = [0];
  for (let f = 1, p = c.length; f < p; f++)
    i = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += i, o.push(r);
  return o;
}, Lr = Kn("models:Track");
class mu {
  constructor(i) {
    y(this, "dist");
    y(this, "gain");
    y(this, "loss");
    y(this, "points");
    Lr("Creating new Track object");
    const r = i.map((C) => new cu(C.lat, C.lon, C.alt)), o = U0(r), f = B0(r, o);
    this.points = r.map((C, b) => new hu(C.lat, C.lon, C.alt, o[b], f[b])), Lr(`set-points - ${r.length} points`), Lr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, g = 0, _ = 0, M = this.points[0].alt;
    this.points.forEach((C) => {
      _ = C.alt - M, _ < 0 ? g += _ : p += _, M = C.alt;
    }), this.gain = p, this.loss = g;
  }
  get start() {
    return W.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return W.pick(this.points[this.points.length - 1], ["lat", "lon"]);
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(i) {
    i > this.dist && (i = i % this.dist);
    let r;
    if (i === 0)
      r = this.points[0];
    else {
      const o = this.points.findIndex((f) => f.loc >= i);
      r = pu(this.points[o - 1], this.points[o], i);
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
  getNearestPoint(i, r, o) {
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
      const b = C.map((P) => Number(i.distanceTo(P.latlon)));
      _ = Math.min(...b);
      const m = b.findIndex((P) => P === _);
      g = C[m], o = o / 5;
    }
    return {
      point: g,
      delta: _
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(i = 0.025, r = this.points.length / 2) {
    const o = Lr.extend("reduceDensity");
    if (this.dist / i > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / i) + 1, g = Array(p).fill(0).map((b, m) => fn(m++ * i, 3));
    g[g.length - 1] < f && g.push(f);
    const _ = vu(
      this.points.map((b) => b.loc),
      this.points.map((b) => b.alt),
      g,
      2 * i
    ), M = g.map((b) => this.getLLA(b)).map((b, m) => ({
      lat: fn(b.lat, 6),
      lon: fn(b.lon, 6),
      alt: fn(_[m].alt, 2)
    })), C = new mu(M);
    return o(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
export {
  z0 as Course,
  Jo as CoursePoint,
  b0 as CourseSegment,
  G0 as Plan,
  eu as PlanPoint,
  x0 as PlanSegment,
  cu as Point,
  fs as Site,
  H0 as SuperCourseSegment,
  q0 as SuperPlanSegment,
  mu as Track,
  Vo as Waypoint
};
