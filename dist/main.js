var o0 = Object.defineProperty;
var u0 = (h, s, r) => s in h ? o0(h, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[s] = r;
var C = (h, s, r) => u0(h, typeof s != "symbol" ? s + "" : s, r);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
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
(function(h, s) {
  (function() {
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, b = "__lodash_placeholder__", m = 1, T = 2, O = 4, F = 1, E = 2, N = 1, K = 2, Y = 4, X = 8, et = 16, St = 32, At = 64, It = 128, Ht = 256, jt = 512, qt = 30, we = "...", Ue = 800, Ur = 16, ye = 1, $e = 2, $r = 3, bn = 1 / 0, _n = 9007199254740991, Ge = 17976931348623157e292, Sn = NaN, L = 4294967295, $ = L - 1, G = L >>> 1, ht = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", X],
      ["curryRight", et],
      ["flip", jt],
      ["partial", St],
      ["partialRight", At],
      ["rearg", Ht]
    ], nt = "[object Arguments]", ct = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", yt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", vn = "[object GeneratorFunction]", _t = "[object Map]", Lt = "[object Number]", kn = "[object Null]", Mt = "[object Object]", Bt = "[object Promise]", hn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", ze = "[object Symbol]", xu = "[object Undefined]", Me = "[object WeakMap]", Au = "[object WeakSet]", Ce = "[object ArrayBuffer]", ee = "[object DataView]", Gr = "[object Float32Array]", zr = "[object Float64Array]", Hr = "[object Int8Array]", qr = "[object Int16Array]", Kr = "[object Int32Array]", Vr = "[object Uint8Array]", Zr = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", Yr = "[object Uint32Array]", Iu = /\b__p \+= '';/g, Pu = /\b(__p \+=) '' \+/g, Eu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ms = /&(?:amp|lt|gt|quot|#39);/g, Cs = /[&<>"']/g, Tu = RegExp(Ms.source), Ru = RegExp(Cs.source), Fu = /<%-([\s\S]+?)%>/g, Lu = /<%([\s\S]+?)%>/g, bs = /<%=([\s\S]+?)%>/g, ku = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/, Du = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xr = /[\\^$.*+?()[\]{}|]/g, Nu = RegExp(Xr.source), Qr = /^\s+/, Wu = /\s/, Bu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Uu = /\{\n\/\* \[wrapped with (.+)\] \*/, $u = /,? & /, Gu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zu = /[()=,{}\[\]\/\s]/, Hu = /\\(\\)?/g, qu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ss = /\w*$/, Ku = /^[-+]0x[0-9a-f]+$/i, Vu = /^0b[01]+$/i, Zu = /^\[object .+?Constructor\]$/, Ju = /^0o[0-7]+$/i, Yu = /^(?:0|[1-9]\d*)$/, Xu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, He = /($^)/, Qu = /['\n\r\u2028\u2029\\]/g, qe = "\\ud800-\\udfff", ju = "\\u0300-\\u036f", tl = "\\ufe20-\\ufe2f", nl = "\\u20d0-\\u20ff", xs = ju + tl + nl, As = "\\u2700-\\u27bf", Is = "a-z\\xdf-\\xf6\\xf8-\\xff", el = "\\xac\\xb1\\xd7\\xf7", rl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", il = "\\u2000-\\u206f", sl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ps = "A-Z\\xc0-\\xd6\\xd8-\\xde", Es = "\\ufe0e\\ufe0f", Ts = el + rl + il + sl, jr = "['’]", al = "[" + qe + "]", Rs = "[" + Ts + "]", Ke = "[" + xs + "]", Fs = "\\d+", ol = "[" + As + "]", Ls = "[" + Is + "]", ks = "[^" + qe + Ts + Fs + As + Is + Ps + "]", ti = "\\ud83c[\\udffb-\\udfff]", ul = "(?:" + Ke + "|" + ti + ")", Os = "[^" + qe + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + Ps + "]", Ds = "\\u200d", Ns = "(?:" + Ls + "|" + ks + ")", ll = "(?:" + re + "|" + ks + ")", Ws = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Bs = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", Us = ul + "?", $s = "[" + Es + "]?", fl = "(?:" + Ds + "(?:" + [Os, ni, ei].join("|") + ")" + $s + Us + ")*", hl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", cl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gs = $s + Us + fl, pl = "(?:" + [ol, ni, ei].join("|") + ")" + Gs, gl = "(?:" + [Os + Ke + "?", Ke, ni, ei, al].join("|") + ")", dl = RegExp(jr, "g"), _l = RegExp(Ke, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + gl + Gs, "g"), vl = RegExp([
      re + "?" + Ls + "+" + Ws + "(?=" + [Rs, re, "$"].join("|") + ")",
      ll + "+" + Bs + "(?=" + [Rs, re + Ns, "$"].join("|") + ")",
      re + "?" + Ns + "+" + Ws,
      re + "+" + Bs,
      cl,
      hl,
      Fs,
      pl
    ].join("|"), "g"), ml = RegExp("[" + Ds + qe + xs + Es + "]"), wl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, yl = [
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
    ], Ml = -1, ft = {};
    ft[Gr] = ft[zr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Vr] = ft[Zr] = ft[Jr] = ft[Yr] = !0, ft[nt] = ft[ct] = ft[Ce] = ft[lt] = ft[ee] = ft[yt] = ft[Ft] = ft[Wt] = ft[_t] = ft[Lt] = ft[Mt] = ft[tn] = ft[pt] = ft[mn] = ft[Me] = !1;
    var ut = {};
    ut[nt] = ut[ct] = ut[Ce] = ut[ee] = ut[lt] = ut[yt] = ut[Gr] = ut[zr] = ut[Hr] = ut[qr] = ut[Kr] = ut[_t] = ut[Lt] = ut[Mt] = ut[tn] = ut[pt] = ut[mn] = ut[ze] = ut[Vr] = ut[Zr] = ut[Jr] = ut[Yr] = !0, ut[Ft] = ut[Wt] = ut[Me] = !1;
    var Cl = {
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
    }, bl = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Sl = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, xl = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Al = parseFloat, Il = parseInt, zs = typeof We == "object" && We && We.Object === Object && We, Pl = typeof self == "object" && self && self.Object === Object && self, Pt = zs || Pl || Function("return this")(), ii = s && !s.nodeType && s, Vn = ii && !0 && h && !h.nodeType && h, Hs = Vn && Vn.exports === ii, si = Hs && zs.process, nn = function() {
      try {
        var v = Vn && Vn.require && Vn.require("util").types;
        return v || si && si.binding && si.binding("util");
      } catch {
      }
    }(), qs = nn && nn.isArrayBuffer, Ks = nn && nn.isDate, Vs = nn && nn.isMap, Zs = nn && nn.isRegExp, Js = nn && nn.isSet, Ys = nn && nn.isTypedArray;
    function Vt(v, x, S) {
      switch (S.length) {
        case 0:
          return v.call(x);
        case 1:
          return v.call(x, S[0]);
        case 2:
          return v.call(x, S[0], S[1]);
        case 3:
          return v.call(x, S[0], S[1], S[2]);
      }
      return v.apply(x, S);
    }
    function El(v, x, S, k) {
      for (var z = -1, rt = v == null ? 0 : v.length; ++z < rt; ) {
        var Ct = v[z];
        x(k, Ct, S(Ct), v);
      }
      return k;
    }
    function en(v, x) {
      for (var S = -1, k = v == null ? 0 : v.length; ++S < k && x(v[S], S, v) !== !1; )
        ;
      return v;
    }
    function Tl(v, x) {
      for (var S = v == null ? 0 : v.length; S-- && x(v[S], S, v) !== !1; )
        ;
      return v;
    }
    function Xs(v, x) {
      for (var S = -1, k = v == null ? 0 : v.length; ++S < k; )
        if (!x(v[S], S, v))
          return !1;
      return !0;
    }
    function On(v, x) {
      for (var S = -1, k = v == null ? 0 : v.length, z = 0, rt = []; ++S < k; ) {
        var Ct = v[S];
        x(Ct, S, v) && (rt[z++] = Ct);
      }
      return rt;
    }
    function Ve(v, x) {
      var S = v == null ? 0 : v.length;
      return !!S && ie(v, x, 0) > -1;
    }
    function ai(v, x, S) {
      for (var k = -1, z = v == null ? 0 : v.length; ++k < z; )
        if (S(x, v[k]))
          return !0;
      return !1;
    }
    function gt(v, x) {
      for (var S = -1, k = v == null ? 0 : v.length, z = Array(k); ++S < k; )
        z[S] = x(v[S], S, v);
      return z;
    }
    function Dn(v, x) {
      for (var S = -1, k = x.length, z = v.length; ++S < k; )
        v[z + S] = x[S];
      return v;
    }
    function oi(v, x, S, k) {
      var z = -1, rt = v == null ? 0 : v.length;
      for (k && rt && (S = v[++z]); ++z < rt; )
        S = x(S, v[z], z, v);
      return S;
    }
    function Rl(v, x, S, k) {
      var z = v == null ? 0 : v.length;
      for (k && z && (S = v[--z]); z--; )
        S = x(S, v[z], z, v);
      return S;
    }
    function ui(v, x) {
      for (var S = -1, k = v == null ? 0 : v.length; ++S < k; )
        if (x(v[S], S, v))
          return !0;
      return !1;
    }
    var Fl = li("length");
    function Ll(v) {
      return v.split("");
    }
    function kl(v) {
      return v.match(Gu) || [];
    }
    function Qs(v, x, S) {
      var k;
      return S(v, function(z, rt, Ct) {
        if (x(z, rt, Ct))
          return k = rt, !1;
      }), k;
    }
    function Ze(v, x, S, k) {
      for (var z = v.length, rt = S + (k ? 1 : -1); k ? rt-- : ++rt < z; )
        if (x(v[rt], rt, v))
          return rt;
      return -1;
    }
    function ie(v, x, S) {
      return x === x ? Kl(v, x, S) : Ze(v, js, S);
    }
    function Ol(v, x, S, k) {
      for (var z = S - 1, rt = v.length; ++z < rt; )
        if (k(v[z], x))
          return z;
      return -1;
    }
    function js(v) {
      return v !== v;
    }
    function ta(v, x) {
      var S = v == null ? 0 : v.length;
      return S ? hi(v, x) / S : Sn;
    }
    function li(v) {
      return function(x) {
        return x == null ? r : x[v];
      };
    }
    function fi(v) {
      return function(x) {
        return v == null ? r : v[x];
      };
    }
    function na(v, x, S, k, z) {
      return z(v, function(rt, Ct, at) {
        S = k ? (k = !1, rt) : x(S, rt, Ct, at);
      }), S;
    }
    function Dl(v, x) {
      var S = v.length;
      for (v.sort(x); S--; )
        v[S] = v[S].value;
      return v;
    }
    function hi(v, x) {
      for (var S, k = -1, z = v.length; ++k < z; ) {
        var rt = x(v[k]);
        rt !== r && (S = S === r ? rt : S + rt);
      }
      return S;
    }
    function ci(v, x) {
      for (var S = -1, k = Array(v); ++S < v; )
        k[S] = x(S);
      return k;
    }
    function Nl(v, x) {
      return gt(x, function(S) {
        return [S, v[S]];
      });
    }
    function ea(v) {
      return v && v.slice(0, aa(v) + 1).replace(Qr, "");
    }
    function Zt(v) {
      return function(x) {
        return v(x);
      };
    }
    function pi(v, x) {
      return gt(x, function(S) {
        return v[S];
      });
    }
    function be(v, x) {
      return v.has(x);
    }
    function ra(v, x) {
      for (var S = -1, k = v.length; ++S < k && ie(x, v[S], 0) > -1; )
        ;
      return S;
    }
    function ia(v, x) {
      for (var S = v.length; S-- && ie(x, v[S], 0) > -1; )
        ;
      return S;
    }
    function Wl(v, x) {
      for (var S = v.length, k = 0; S--; )
        v[S] === x && ++k;
      return k;
    }
    var Bl = fi(Cl), Ul = fi(bl);
    function $l(v) {
      return "\\" + xl[v];
    }
    function Gl(v, x) {
      return v == null ? r : v[x];
    }
    function se(v) {
      return ml.test(v);
    }
    function zl(v) {
      return wl.test(v);
    }
    function Hl(v) {
      for (var x, S = []; !(x = v.next()).done; )
        S.push(x.value);
      return S;
    }
    function gi(v) {
      var x = -1, S = Array(v.size);
      return v.forEach(function(k, z) {
        S[++x] = [z, k];
      }), S;
    }
    function sa(v, x) {
      return function(S) {
        return v(x(S));
      };
    }
    function Nn(v, x) {
      for (var S = -1, k = v.length, z = 0, rt = []; ++S < k; ) {
        var Ct = v[S];
        (Ct === x || Ct === b) && (v[S] = b, rt[z++] = S);
      }
      return rt;
    }
    function Je(v) {
      var x = -1, S = Array(v.size);
      return v.forEach(function(k) {
        S[++x] = k;
      }), S;
    }
    function ql(v) {
      var x = -1, S = Array(v.size);
      return v.forEach(function(k) {
        S[++x] = [k, k];
      }), S;
    }
    function Kl(v, x, S) {
      for (var k = S - 1, z = v.length; ++k < z; )
        if (v[k] === x)
          return k;
      return -1;
    }
    function Vl(v, x, S) {
      for (var k = S + 1; k--; )
        if (v[k] === x)
          return k;
      return k;
    }
    function ae(v) {
      return se(v) ? Jl(v) : Fl(v);
    }
    function cn(v) {
      return se(v) ? Yl(v) : Ll(v);
    }
    function aa(v) {
      for (var x = v.length; x-- && Wu.test(v.charAt(x)); )
        ;
      return x;
    }
    var Zl = fi(Sl);
    function Jl(v) {
      for (var x = ri.lastIndex = 0; ri.test(v); )
        ++x;
      return x;
    }
    function Yl(v) {
      return v.match(ri) || [];
    }
    function Xl(v) {
      return v.match(vl) || [];
    }
    var Ql = function v(x) {
      x = x == null ? Pt : oe.defaults(Pt.Object(), x, oe.pick(Pt, yl));
      var S = x.Array, k = x.Date, z = x.Error, rt = x.Function, Ct = x.Math, at = x.Object, di = x.RegExp, jl = x.String, rn = x.TypeError, Ye = S.prototype, tf = rt.prototype, ue = at.prototype, Xe = x["__core-js_shared__"], Qe = tf.toString, st = ue.hasOwnProperty, nf = 0, oa = function() {
        var t = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), je = ue.toString, ef = Qe.call(at), rf = Pt._, sf = di(
        "^" + Qe.call(st).replace(Xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), tr = Hs ? x.Buffer : r, Wn = x.Symbol, nr = x.Uint8Array, ua = tr ? tr.allocUnsafe : r, er = sa(at.getPrototypeOf, at), la = at.create, fa = ue.propertyIsEnumerable, rr = Ye.splice, ha = Wn ? Wn.isConcatSpreadable : r, Se = Wn ? Wn.iterator : r, Zn = Wn ? Wn.toStringTag : r, ir = function() {
        try {
          var t = jn(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), af = x.clearTimeout !== Pt.clearTimeout && x.clearTimeout, of = k && k.now !== Pt.Date.now && k.now, uf = x.setTimeout !== Pt.setTimeout && x.setTimeout, sr = Ct.ceil, ar = Ct.floor, _i = at.getOwnPropertySymbols, lf = tr ? tr.isBuffer : r, ca = x.isFinite, ff = Ye.join, hf = sa(at.keys, at), bt = Ct.max, Tt = Ct.min, cf = k.now, pf = x.parseInt, pa = Ct.random, gf = Ye.reverse, vi = jn(x, "DataView"), xe = jn(x, "Map"), mi = jn(x, "Promise"), le = jn(x, "Set"), Ae = jn(x, "WeakMap"), Ie = jn(at, "create"), or = Ae && new Ae(), fe = {}, df = te(vi), _f = te(xe), vf = te(mi), mf = te(le), wf = te(Ae), ur = Wn ? Wn.prototype : r, Pe = ur ? ur.valueOf : r, ga = ur ? ur.toString : r;
      function u(t) {
        if (vt(t) && !H(t) && !(t instanceof j)) {
          if (t instanceof sn)
            return t;
          if (st.call(t, "__wrapped__"))
            return _o(t);
        }
        return new sn(t);
      }
      var he = /* @__PURE__ */ function() {
        function t() {
        }
        return function(n) {
          if (!dt(n))
            return {};
          if (la)
            return la(n);
          t.prototype = n;
          var e = new t();
          return t.prototype = r, e;
        };
      }();
      function lr() {
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
        escape: Fu,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Lu,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: bs,
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
      }, u.prototype = lr.prototype, u.prototype.constructor = u, sn.prototype = he(lr.prototype), sn.prototype.constructor = sn;
      function j(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = L, this.__views__ = [];
      }
      function yf() {
        var t = new j(this.__wrapped__);
        return t.__actions__ = Ut(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ut(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ut(this.__views__), t;
      }
      function Mf() {
        if (this.__filtered__) {
          var t = new j(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Cf() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = H(t), i = n < 0, a = e ? t.length : 0, l = kh(0, a, this.__views__), c = l.start, g = l.end, w = g - c, A = i ? g : c - 1, I = this.__iteratees__, P = I.length, R = 0, D = Tt(w, this.__takeCount__);
        if (!e || !i && a == w && D == w)
          return Wa(t, this.__actions__);
        var B = [];
        t:
          for (; w-- && R < D; ) {
            A += n;
            for (var Z = -1, U = t[A]; ++Z < P; ) {
              var Q = I[Z], tt = Q.iteratee, Xt = Q.type, Dt = tt(U);
              if (Xt == $e)
                U = Dt;
              else if (!Dt) {
                if (Xt == ye)
                  continue t;
                break t;
              }
            }
            B[R++] = U;
          }
        return B;
      }
      j.prototype = he(lr.prototype), j.prototype.constructor = j;
      function Jn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function bf() {
        this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
      }
      function Sf(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function xf(t) {
        var n = this.__data__;
        if (Ie) {
          var e = n[t];
          return e === y ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function Af(t) {
        var n = this.__data__;
        return Ie ? n[t] !== r : st.call(n, t);
      }
      function If(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Ie && n === r ? y : n, this;
      }
      Jn.prototype.clear = bf, Jn.prototype.delete = Sf, Jn.prototype.get = xf, Jn.prototype.has = Af, Jn.prototype.set = If;
      function xn(t) {
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
        var n = this.__data__, e = fr(n, t);
        if (e < 0)
          return !1;
        var i = n.length - 1;
        return e == i ? n.pop() : rr.call(n, e, 1), --this.size, !0;
      }
      function Tf(t) {
        var n = this.__data__, e = fr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function Rf(t) {
        return fr(this.__data__, t) > -1;
      }
      function Ff(t, n) {
        var e = this.__data__, i = fr(e, t);
        return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
      }
      xn.prototype.clear = Pf, xn.prototype.delete = Ef, xn.prototype.get = Tf, xn.prototype.has = Rf, xn.prototype.set = Ff;
      function An(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function Lf() {
        this.size = 0, this.__data__ = {
          hash: new Jn(),
          map: new (xe || xn)(),
          string: new Jn()
        };
      }
      function kf(t) {
        var n = Cr(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Of(t) {
        return Cr(this, t).get(t);
      }
      function Df(t) {
        return Cr(this, t).has(t);
      }
      function Nf(t, n) {
        var e = Cr(this, t), i = e.size;
        return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
      }
      An.prototype.clear = Lf, An.prototype.delete = kf, An.prototype.get = Of, An.prototype.has = Df, An.prototype.set = Nf;
      function Yn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new An(); ++n < e; )
          this.add(t[n]);
      }
      function Wf(t) {
        return this.__data__.set(t, y), this;
      }
      function Bf(t) {
        return this.__data__.has(t);
      }
      Yn.prototype.add = Yn.prototype.push = Wf, Yn.prototype.has = Bf;
      function pn(t) {
        var n = this.__data__ = new xn(t);
        this.size = n.size;
      }
      function Uf() {
        this.__data__ = new xn(), this.size = 0;
      }
      function $f(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Gf(t) {
        return this.__data__.get(t);
      }
      function zf(t) {
        return this.__data__.has(t);
      }
      function Hf(t, n) {
        var e = this.__data__;
        if (e instanceof xn) {
          var i = e.__data__;
          if (!xe || i.length < f - 1)
            return i.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new An(i);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = Uf, pn.prototype.delete = $f, pn.prototype.get = Gf, pn.prototype.has = zf, pn.prototype.set = Hf;
      function da(t, n) {
        var e = H(t), i = !e && ne(t), a = !e && !i && zn(t), l = !e && !i && !a && de(t), c = e || i || a || l, g = c ? ci(t.length, jl) : [], w = g.length;
        for (var A in t)
          (n || st.call(t, A)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          Tn(A, w))) && g.push(A);
        return g;
      }
      function _a(t) {
        var n = t.length;
        return n ? t[Ei(0, n - 1)] : r;
      }
      function qf(t, n) {
        return br(Ut(t), Xn(n, 0, t.length));
      }
      function Kf(t) {
        return br(Ut(t));
      }
      function wi(t, n, e) {
        (e !== r && !gn(t[n], e) || e === r && !(n in t)) && In(t, n, e);
      }
      function Ee(t, n, e) {
        var i = t[n];
        (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && In(t, n, e);
      }
      function fr(t, n) {
        for (var e = t.length; e--; )
          if (gn(t[e][0], n))
            return e;
        return -1;
      }
      function Vf(t, n, e, i) {
        return Bn(t, function(a, l, c) {
          n(i, a, e(a), c);
        }), i;
      }
      function va(t, n) {
        return t && yn(n, xt(n), t);
      }
      function Zf(t, n) {
        return t && yn(n, Gt(n), t);
      }
      function In(t, n, e) {
        n == "__proto__" && ir ? ir(t, n, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : t[n] = e;
      }
      function yi(t, n) {
        for (var e = -1, i = n.length, a = S(i), l = t == null; ++e < i; )
          a[e] = l ? r : ts(t, n[e]);
        return a;
      }
      function Xn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function an(t, n, e, i, a, l) {
        var c, g = n & m, w = n & T, A = n & O;
        if (e && (c = a ? e(t, i, a, l) : e(t)), c !== r)
          return c;
        if (!dt(t))
          return t;
        var I = H(t);
        if (I) {
          if (c = Dh(t), !g)
            return Ut(t, c);
        } else {
          var P = Rt(t), R = P == Wt || P == vn;
          if (zn(t))
            return $a(t, g);
          if (P == Mt || P == nt || R && !a) {
            if (c = w || R ? {} : ao(t), !g)
              return w ? xh(t, Zf(c, t)) : Sh(t, va(c, t));
          } else {
            if (!ut[P])
              return a ? t : {};
            c = Nh(t, P, g);
          }
        }
        l || (l = new pn());
        var D = l.get(t);
        if (D)
          return D;
        l.set(t, c), Do(t) ? t.forEach(function(U) {
          c.add(an(U, n, e, U, t, l));
        }) : ko(t) && t.forEach(function(U, Q) {
          c.set(Q, an(U, n, e, Q, t, l));
        });
        var B = A ? w ? Ui : Bi : w ? Gt : xt, Z = I ? r : B(t);
        return en(Z || t, function(U, Q) {
          Z && (Q = U, U = t[Q]), Ee(c, Q, an(U, n, e, Q, t, l));
        }), c;
      }
      function Jf(t) {
        var n = xt(t);
        return function(e) {
          return ma(e, t, n);
        };
      }
      function ma(t, n, e) {
        var i = e.length;
        if (t == null)
          return !i;
        for (t = at(t); i--; ) {
          var a = e[i], l = n[a], c = t[a];
          if (c === r && !(a in t) || !l(c))
            return !1;
        }
        return !0;
      }
      function wa(t, n, e) {
        if (typeof t != "function")
          throw new rn(d);
        return De(function() {
          t.apply(r, e);
        }, n);
      }
      function Te(t, n, e, i) {
        var a = -1, l = Ve, c = !0, g = t.length, w = [], A = n.length;
        if (!g)
          return w;
        e && (n = gt(n, Zt(e))), i ? (l = ai, c = !1) : n.length >= f && (l = be, c = !1, n = new Yn(n));
        t:
          for (; ++a < g; ) {
            var I = t[a], P = e == null ? I : e(I);
            if (I = i || I !== 0 ? I : 0, c && P === P) {
              for (var R = A; R--; )
                if (n[R] === P)
                  continue t;
              w.push(I);
            } else l(n, P, i) || w.push(I);
          }
        return w;
      }
      var Bn = Ka(wn), ya = Ka(Ci, !0);
      function Yf(t, n) {
        var e = !0;
        return Bn(t, function(i, a, l) {
          return e = !!n(i, a, l), e;
        }), e;
      }
      function hr(t, n, e) {
        for (var i = -1, a = t.length; ++i < a; ) {
          var l = t[i], c = n(l);
          if (c != null && (g === r ? c === c && !Yt(c) : e(c, g)))
            var g = c, w = l;
        }
        return w;
      }
      function Xf(t, n, e, i) {
        var a = t.length;
        for (e = V(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : V(i), i < 0 && (i += a), i = e > i ? 0 : Wo(i); e < i; )
          t[e++] = n;
        return t;
      }
      function Ma(t, n) {
        var e = [];
        return Bn(t, function(i, a, l) {
          n(i, a, l) && e.push(i);
        }), e;
      }
      function Et(t, n, e, i, a) {
        var l = -1, c = t.length;
        for (e || (e = Bh), a || (a = []); ++l < c; ) {
          var g = t[l];
          n > 0 && e(g) ? n > 1 ? Et(g, n - 1, e, i, a) : Dn(a, g) : i || (a[a.length] = g);
        }
        return a;
      }
      var Mi = Va(), Ca = Va(!0);
      function wn(t, n) {
        return t && Mi(t, n, xt);
      }
      function Ci(t, n) {
        return t && Ca(t, n, xt);
      }
      function cr(t, n) {
        return On(n, function(e) {
          return Rn(t[e]);
        });
      }
      function Qn(t, n) {
        n = $n(n, t);
        for (var e = 0, i = n.length; t != null && e < i; )
          t = t[Mn(n[e++])];
        return e && e == i ? t : r;
      }
      function ba(t, n, e) {
        var i = n(t);
        return H(t) ? i : Dn(i, e(t));
      }
      function kt(t) {
        return t == null ? t === r ? xu : kn : Zn && Zn in at(t) ? Lh(t) : Kh(t);
      }
      function bi(t, n) {
        return t > n;
      }
      function Qf(t, n) {
        return t != null && st.call(t, n);
      }
      function jf(t, n) {
        return t != null && n in at(t);
      }
      function th(t, n, e) {
        return t >= Tt(n, e) && t < bt(n, e);
      }
      function Si(t, n, e) {
        for (var i = e ? ai : Ve, a = t[0].length, l = t.length, c = l, g = S(l), w = 1 / 0, A = []; c--; ) {
          var I = t[c];
          c && n && (I = gt(I, Zt(n))), w = Tt(I.length, w), g[c] = !e && (n || a >= 120 && I.length >= 120) ? new Yn(c && I) : r;
        }
        I = t[0];
        var P = -1, R = g[0];
        t:
          for (; ++P < a && A.length < w; ) {
            var D = I[P], B = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(R ? be(R, B) : i(A, B, e))) {
              for (c = l; --c; ) {
                var Z = g[c];
                if (!(Z ? be(Z, B) : i(t[c], B, e)))
                  continue t;
              }
              R && R.push(B), A.push(D);
            }
          }
        return A;
      }
      function nh(t, n, e, i) {
        return wn(t, function(a, l, c) {
          n(i, e(a), l, c);
        }), i;
      }
      function Re(t, n, e) {
        n = $n(n, t), t = fo(t, n);
        var i = t == null ? t : t[Mn(un(n))];
        return i == null ? r : Vt(i, t, e);
      }
      function Sa(t) {
        return vt(t) && kt(t) == nt;
      }
      function eh(t) {
        return vt(t) && kt(t) == Ce;
      }
      function rh(t) {
        return vt(t) && kt(t) == yt;
      }
      function Fe(t, n, e, i, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : ih(t, n, e, i, Fe, a);
      }
      function ih(t, n, e, i, a, l) {
        var c = H(t), g = H(n), w = c ? ct : Rt(t), A = g ? ct : Rt(n);
        w = w == nt ? Mt : w, A = A == nt ? Mt : A;
        var I = w == Mt, P = A == Mt, R = w == A;
        if (R && zn(t)) {
          if (!zn(n))
            return !1;
          c = !0, I = !1;
        }
        if (R && !I)
          return l || (l = new pn()), c || de(t) ? ro(t, n, e, i, a, l) : Rh(t, n, w, e, i, a, l);
        if (!(e & F)) {
          var D = I && st.call(t, "__wrapped__"), B = P && st.call(n, "__wrapped__");
          if (D || B) {
            var Z = D ? t.value() : t, U = B ? n.value() : n;
            return l || (l = new pn()), a(Z, U, e, i, l);
          }
        }
        return R ? (l || (l = new pn()), Fh(t, n, e, i, a, l)) : !1;
      }
      function sh(t) {
        return vt(t) && Rt(t) == _t;
      }
      function xi(t, n, e, i) {
        var a = e.length, l = a, c = !i;
        if (t == null)
          return !l;
        for (t = at(t); a--; ) {
          var g = e[a];
          if (c && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++a < l; ) {
          g = e[a];
          var w = g[0], A = t[w], I = g[1];
          if (c && g[2]) {
            if (A === r && !(w in t))
              return !1;
          } else {
            var P = new pn();
            if (i)
              var R = i(A, I, w, t, n, P);
            if (!(R === r ? Fe(I, A, F | E, i, P) : R))
              return !1;
          }
        }
        return !0;
      }
      function xa(t) {
        if (!dt(t) || $h(t))
          return !1;
        var n = Rn(t) ? sf : Zu;
        return n.test(te(t));
      }
      function ah(t) {
        return vt(t) && kt(t) == tn;
      }
      function oh(t) {
        return vt(t) && Rt(t) == pt;
      }
      function uh(t) {
        return vt(t) && Er(t.length) && !!ft[kt(t)];
      }
      function Aa(t) {
        return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? H(t) ? Ea(t[0], t[1]) : Pa(t) : Jo(t);
      }
      function Ai(t) {
        if (!Oe(t))
          return hf(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function lh(t) {
        if (!dt(t))
          return qh(t);
        var n = Oe(t), e = [];
        for (var i in t)
          i == "constructor" && (n || !st.call(t, i)) || e.push(i);
        return e;
      }
      function Ii(t, n) {
        return t < n;
      }
      function Ia(t, n) {
        var e = -1, i = $t(t) ? S(t.length) : [];
        return Bn(t, function(a, l, c) {
          i[++e] = n(a, l, c);
        }), i;
      }
      function Pa(t) {
        var n = Gi(t);
        return n.length == 1 && n[0][2] ? uo(n[0][0], n[0][1]) : function(e) {
          return e === t || xi(e, t, n);
        };
      }
      function Ea(t, n) {
        return Hi(t) && oo(n) ? uo(Mn(t), n) : function(e) {
          var i = ts(e, t);
          return i === r && i === n ? ns(e, t) : Fe(n, i, F | E);
        };
      }
      function pr(t, n, e, i, a) {
        t !== n && Mi(n, function(l, c) {
          if (a || (a = new pn()), dt(l))
            fh(t, n, c, e, pr, i, a);
          else {
            var g = i ? i(Ki(t, c), l, c + "", t, n, a) : r;
            g === r && (g = l), wi(t, c, g);
          }
        }, Gt);
      }
      function fh(t, n, e, i, a, l, c) {
        var g = Ki(t, e), w = Ki(n, e), A = c.get(w);
        if (A) {
          wi(t, e, A);
          return;
        }
        var I = l ? l(g, w, e + "", t, n, c) : r, P = I === r;
        if (P) {
          var R = H(w), D = !R && zn(w), B = !R && !D && de(w);
          I = w, R || D || B ? H(g) ? I = g : mt(g) ? I = Ut(g) : D ? (P = !1, I = $a(w, !0)) : B ? (P = !1, I = Ga(w, !0)) : I = [] : Ne(w) || ne(w) ? (I = g, ne(g) ? I = Bo(g) : (!dt(g) || Rn(g)) && (I = ao(w))) : P = !1;
        }
        P && (c.set(w, I), a(I, w, i, l, c), c.delete(w)), wi(t, e, I);
      }
      function Ta(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, Tn(n, e) ? t[n] : r;
      }
      function Ra(t, n, e) {
        n.length ? n = gt(n, function(l) {
          return H(l) ? function(c) {
            return Qn(c, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [zt];
        var i = -1;
        n = gt(n, Zt(W()));
        var a = Ia(t, function(l, c, g) {
          var w = gt(n, function(A) {
            return A(l);
          });
          return { criteria: w, index: ++i, value: l };
        });
        return Dl(a, function(l, c) {
          return bh(l, c, e);
        });
      }
      function hh(t, n) {
        return Fa(t, n, function(e, i) {
          return ns(t, i);
        });
      }
      function Fa(t, n, e) {
        for (var i = -1, a = n.length, l = {}; ++i < a; ) {
          var c = n[i], g = Qn(t, c);
          e(g, c) && Le(l, $n(c, t), g);
        }
        return l;
      }
      function ch(t) {
        return function(n) {
          return Qn(n, t);
        };
      }
      function Pi(t, n, e, i) {
        var a = i ? Ol : ie, l = -1, c = n.length, g = t;
        for (t === n && (n = Ut(n)), e && (g = gt(t, Zt(e))); ++l < c; )
          for (var w = 0, A = n[l], I = e ? e(A) : A; (w = a(g, I, w, i)) > -1; )
            g !== t && rr.call(g, w, 1), rr.call(t, w, 1);
        return t;
      }
      function La(t, n) {
        for (var e = t ? n.length : 0, i = e - 1; e--; ) {
          var a = n[e];
          if (e == i || a !== l) {
            var l = a;
            Tn(a) ? rr.call(t, a, 1) : Fi(t, a);
          }
        }
        return t;
      }
      function Ei(t, n) {
        return t + ar(pa() * (n - t + 1));
      }
      function ph(t, n, e, i) {
        for (var a = -1, l = bt(sr((n - t) / (e || 1)), 0), c = S(l); l--; )
          c[i ? l : ++a] = t, t += e;
        return c;
      }
      function Ti(t, n) {
        var e = "";
        if (!t || n < 1 || n > _n)
          return e;
        do
          n % 2 && (e += t), n = ar(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function J(t, n) {
        return Vi(lo(t, n, zt), t + "");
      }
      function gh(t) {
        return _a(_e(t));
      }
      function dh(t, n) {
        var e = _e(t);
        return br(e, Xn(n, 0, e.length));
      }
      function Le(t, n, e, i) {
        if (!dt(t))
          return t;
        n = $n(n, t);
        for (var a = -1, l = n.length, c = l - 1, g = t; g != null && ++a < l; ) {
          var w = Mn(n[a]), A = e;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return t;
          if (a != c) {
            var I = g[w];
            A = i ? i(I, w, g) : r, A === r && (A = dt(I) ? I : Tn(n[a + 1]) ? [] : {});
          }
          Ee(g, w, A), g = g[w];
        }
        return t;
      }
      var ka = or ? function(t, n) {
        return or.set(t, n), t;
      } : zt, _h = ir ? function(t, n) {
        return ir(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: rs(n),
          writable: !0
        });
      } : zt;
      function vh(t) {
        return br(_e(t));
      }
      function on(t, n, e) {
        var i = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = S(a); ++i < a; )
          l[i] = t[i + n];
        return l;
      }
      function mh(t, n) {
        var e;
        return Bn(t, function(i, a, l) {
          return e = n(i, a, l), !e;
        }), !!e;
      }
      function gr(t, n, e) {
        var i = 0, a = t == null ? i : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; i < a; ) {
            var l = i + a >>> 1, c = t[l];
            c !== null && !Yt(c) && (e ? c <= n : c < n) ? i = l + 1 : a = l;
          }
          return a;
        }
        return Ri(t, n, zt, e);
      }
      function Ri(t, n, e, i) {
        var a = 0, l = t == null ? 0 : t.length;
        if (l === 0)
          return 0;
        n = e(n);
        for (var c = n !== n, g = n === null, w = Yt(n), A = n === r; a < l; ) {
          var I = ar((a + l) / 2), P = e(t[I]), R = P !== r, D = P === null, B = P === P, Z = Yt(P);
          if (c)
            var U = i || B;
          else A ? U = B && (i || R) : g ? U = B && R && (i || !D) : w ? U = B && R && !D && (i || !Z) : D || Z ? U = !1 : U = i ? P <= n : P < n;
          U ? a = I + 1 : l = I;
        }
        return Tt(l, $);
      }
      function Oa(t, n) {
        for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
          var c = t[e], g = n ? n(c) : c;
          if (!e || !gn(g, w)) {
            var w = g;
            l[a++] = c === 0 ? 0 : c;
          }
        }
        return l;
      }
      function Da(t) {
        return typeof t == "number" ? t : Yt(t) ? Sn : +t;
      }
      function Jt(t) {
        if (typeof t == "string")
          return t;
        if (H(t))
          return gt(t, Jt) + "";
        if (Yt(t))
          return ga ? ga.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function Un(t, n, e) {
        var i = -1, a = Ve, l = t.length, c = !0, g = [], w = g;
        if (e)
          c = !1, a = ai;
        else if (l >= f) {
          var A = n ? null : Eh(t);
          if (A)
            return Je(A);
          c = !1, a = be, w = new Yn();
        } else
          w = n ? [] : g;
        t:
          for (; ++i < l; ) {
            var I = t[i], P = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, c && P === P) {
              for (var R = w.length; R--; )
                if (w[R] === P)
                  continue t;
              n && w.push(P), g.push(I);
            } else a(w, P, e) || (w !== g && w.push(P), g.push(I));
          }
        return g;
      }
      function Fi(t, n) {
        return n = $n(n, t), t = fo(t, n), t == null || delete t[Mn(un(n))];
      }
      function Na(t, n, e, i) {
        return Le(t, n, e(Qn(t, n)), i);
      }
      function dr(t, n, e, i) {
        for (var a = t.length, l = i ? a : -1; (i ? l-- : ++l < a) && n(t[l], l, t); )
          ;
        return e ? on(t, i ? 0 : l, i ? l + 1 : a) : on(t, i ? l + 1 : 0, i ? a : l);
      }
      function Wa(t, n) {
        var e = t;
        return e instanceof j && (e = e.value()), oi(n, function(i, a) {
          return a.func.apply(a.thisArg, Dn([i], a.args));
        }, e);
      }
      function Li(t, n, e) {
        var i = t.length;
        if (i < 2)
          return i ? Un(t[0]) : [];
        for (var a = -1, l = S(i); ++a < i; )
          for (var c = t[a], g = -1; ++g < i; )
            g != a && (l[a] = Te(l[a] || c, t[g], n, e));
        return Un(Et(l, 1), n, e);
      }
      function Ba(t, n, e) {
        for (var i = -1, a = t.length, l = n.length, c = {}; ++i < a; ) {
          var g = i < l ? n[i] : r;
          e(c, t[i], g);
        }
        return c;
      }
      function ki(t) {
        return mt(t) ? t : [];
      }
      function Oi(t) {
        return typeof t == "function" ? t : zt;
      }
      function $n(t, n) {
        return H(t) ? t : Hi(t, n) ? [t] : go(it(t));
      }
      var wh = J;
      function Gn(t, n, e) {
        var i = t.length;
        return e = e === r ? i : e, !n && e >= i ? t : on(t, n, e);
      }
      var Ua = af || function(t) {
        return Pt.clearTimeout(t);
      };
      function $a(t, n) {
        if (n)
          return t.slice();
        var e = t.length, i = ua ? ua(e) : new t.constructor(e);
        return t.copy(i), i;
      }
      function Di(t) {
        var n = new t.constructor(t.byteLength);
        return new nr(n).set(new nr(t)), n;
      }
      function yh(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function Mh(t) {
        var n = new t.constructor(t.source, Ss.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Ch(t) {
        return Pe ? at(Pe.call(t)) : {};
      }
      function Ga(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function za(t, n) {
        if (t !== n) {
          var e = t !== r, i = t === null, a = t === t, l = Yt(t), c = n !== r, g = n === null, w = n === n, A = Yt(n);
          if (!g && !A && !l && t > n || l && c && w && !g && !A || i && c && w || !e && w || !a)
            return 1;
          if (!i && !l && !A && t < n || A && e && a && !i && !l || g && e && a || !c && a || !w)
            return -1;
        }
        return 0;
      }
      function bh(t, n, e) {
        for (var i = -1, a = t.criteria, l = n.criteria, c = a.length, g = e.length; ++i < c; ) {
          var w = za(a[i], l[i]);
          if (w) {
            if (i >= g)
              return w;
            var A = e[i];
            return w * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ha(t, n, e, i) {
        for (var a = -1, l = t.length, c = e.length, g = -1, w = n.length, A = bt(l - c, 0), I = S(w + A), P = !i; ++g < w; )
          I[g] = n[g];
        for (; ++a < c; )
          (P || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[g++] = t[a++];
        return I;
      }
      function qa(t, n, e, i) {
        for (var a = -1, l = t.length, c = -1, g = e.length, w = -1, A = n.length, I = bt(l - g, 0), P = S(I + A), R = !i; ++a < I; )
          P[a] = t[a];
        for (var D = a; ++w < A; )
          P[D + w] = n[w];
        for (; ++c < g; )
          (R || a < l) && (P[D + e[c]] = t[a++]);
        return P;
      }
      function Ut(t, n) {
        var e = -1, i = t.length;
        for (n || (n = S(i)); ++e < i; )
          n[e] = t[e];
        return n;
      }
      function yn(t, n, e, i) {
        var a = !e;
        e || (e = {});
        for (var l = -1, c = n.length; ++l < c; ) {
          var g = n[l], w = i ? i(e[g], t[g], g, e, t) : r;
          w === r && (w = t[g]), a ? In(e, g, w) : Ee(e, g, w);
        }
        return e;
      }
      function Sh(t, n) {
        return yn(t, zi(t), n);
      }
      function xh(t, n) {
        return yn(t, io(t), n);
      }
      function _r(t, n) {
        return function(e, i) {
          var a = H(e) ? El : Vf, l = n ? n() : {};
          return a(e, t, W(i, 2), l);
        };
      }
      function ce(t) {
        return J(function(n, e) {
          var i = -1, a = e.length, l = a > 1 ? e[a - 1] : r, c = a > 2 ? e[2] : r;
          for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, c && Ot(e[0], e[1], c) && (l = a < 3 ? r : l, a = 1), n = at(n); ++i < a; ) {
            var g = e[i];
            g && t(n, g, i, l);
          }
          return n;
        });
      }
      function Ka(t, n) {
        return function(e, i) {
          if (e == null)
            return e;
          if (!$t(e))
            return t(e, i);
          for (var a = e.length, l = n ? a : -1, c = at(e); (n ? l-- : ++l < a) && i(c[l], l, c) !== !1; )
            ;
          return e;
        };
      }
      function Va(t) {
        return function(n, e, i) {
          for (var a = -1, l = at(n), c = i(n), g = c.length; g--; ) {
            var w = c[t ? g : ++a];
            if (e(l[w], w, l) === !1)
              break;
          }
          return n;
        };
      }
      function Ah(t, n, e) {
        var i = n & N, a = ke(t);
        function l() {
          var c = this && this !== Pt && this instanceof l ? a : t;
          return c.apply(i ? e : this, arguments);
        }
        return l;
      }
      function Za(t) {
        return function(n) {
          n = it(n);
          var e = se(n) ? cn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? Gn(e, 1).join("") : n.slice(1);
          return i[t]() + a;
        };
      }
      function pe(t) {
        return function(n) {
          return oi(Vo(Ko(n).replace(dl, "")), t, "");
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
          var e = he(t.prototype), i = t.apply(e, n);
          return dt(i) ? i : e;
        };
      }
      function Ih(t, n, e) {
        var i = ke(t);
        function a() {
          for (var l = arguments.length, c = S(l), g = l, w = ge(a); g--; )
            c[g] = arguments[g];
          var A = l < 3 && c[0] !== w && c[l - 1] !== w ? [] : Nn(c, w);
          if (l -= A.length, l < e)
            return ja(
              t,
              n,
              vr,
              a.placeholder,
              r,
              c,
              A,
              r,
              r,
              e - l
            );
          var I = this && this !== Pt && this instanceof a ? i : t;
          return Vt(I, this, c);
        }
        return a;
      }
      function Ja(t) {
        return function(n, e, i) {
          var a = at(n);
          if (!$t(n)) {
            var l = W(e, 3);
            n = xt(n), e = function(g) {
              return l(a[g], g, a);
            };
          }
          var c = t(n, e, i);
          return c > -1 ? a[l ? n[c] : c] : r;
        };
      }
      function Ya(t) {
        return En(function(n) {
          var e = n.length, i = e, a = sn.prototype.thru;
          for (t && n.reverse(); i--; ) {
            var l = n[i];
            if (typeof l != "function")
              throw new rn(d);
            if (a && !c && Mr(l) == "wrapper")
              var c = new sn([], !0);
          }
          for (i = c ? i : e; ++i < e; ) {
            l = n[i];
            var g = Mr(l), w = g == "wrapper" ? $i(l) : r;
            w && qi(w[0]) && w[1] == (It | X | St | Ht) && !w[4].length && w[9] == 1 ? c = c[Mr(w[0])].apply(c, w[3]) : c = l.length == 1 && qi(l) ? c[g]() : c.thru(l);
          }
          return function() {
            var A = arguments, I = A[0];
            if (c && A.length == 1 && H(I))
              return c.plant(I).value();
            for (var P = 0, R = e ? n[P].apply(this, A) : I; ++P < e; )
              R = n[P].call(this, R);
            return R;
          };
        });
      }
      function vr(t, n, e, i, a, l, c, g, w, A) {
        var I = n & It, P = n & N, R = n & K, D = n & (X | et), B = n & jt, Z = R ? r : ke(t);
        function U() {
          for (var Q = arguments.length, tt = S(Q), Xt = Q; Xt--; )
            tt[Xt] = arguments[Xt];
          if (D)
            var Dt = ge(U), Qt = Wl(tt, Dt);
          if (i && (tt = Ha(tt, i, a, D)), l && (tt = qa(tt, l, c, D)), Q -= Qt, D && Q < A) {
            var wt = Nn(tt, Dt);
            return ja(
              t,
              n,
              vr,
              U.placeholder,
              e,
              tt,
              wt,
              g,
              w,
              A - Q
            );
          }
          var dn = P ? e : this, Ln = R ? dn[t] : t;
          return Q = tt.length, g ? tt = Vh(tt, g) : B && Q > 1 && tt.reverse(), I && w < Q && (tt.length = w), this && this !== Pt && this instanceof U && (Ln = Z || ke(Ln)), Ln.apply(dn, tt);
        }
        return U;
      }
      function Xa(t, n) {
        return function(e, i) {
          return nh(e, t, n(i), {});
        };
      }
      function mr(t, n) {
        return function(e, i) {
          var a;
          if (e === r && i === r)
            return n;
          if (e !== r && (a = e), i !== r) {
            if (a === r)
              return i;
            typeof e == "string" || typeof i == "string" ? (e = Jt(e), i = Jt(i)) : (e = Da(e), i = Da(i)), a = t(e, i);
          }
          return a;
        };
      }
      function Ni(t) {
        return En(function(n) {
          return n = gt(n, Zt(W())), J(function(e) {
            var i = this;
            return t(n, function(a) {
              return Vt(a, i, e);
            });
          });
        });
      }
      function wr(t, n) {
        n = n === r ? " " : Jt(n);
        var e = n.length;
        if (e < 2)
          return e ? Ti(n, t) : n;
        var i = Ti(n, sr(t / ae(n)));
        return se(n) ? Gn(cn(i), 0, t).join("") : i.slice(0, t);
      }
      function Ph(t, n, e, i) {
        var a = n & N, l = ke(t);
        function c() {
          for (var g = -1, w = arguments.length, A = -1, I = i.length, P = S(I + w), R = this && this !== Pt && this instanceof c ? l : t; ++A < I; )
            P[A] = i[A];
          for (; w--; )
            P[A++] = arguments[++g];
          return Vt(R, a ? e : this, P);
        }
        return c;
      }
      function Qa(t) {
        return function(n, e, i) {
          return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), ph(n, e, i, t);
        };
      }
      function yr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = ln(n), e = ln(e)), t(n, e);
        };
      }
      function ja(t, n, e, i, a, l, c, g, w, A) {
        var I = n & X, P = I ? c : r, R = I ? r : c, D = I ? l : r, B = I ? r : l;
        n |= I ? St : At, n &= ~(I ? At : St), n & Y || (n &= ~(N | K));
        var Z = [
          t,
          n,
          a,
          D,
          P,
          B,
          R,
          g,
          w,
          A
        ], U = e.apply(r, Z);
        return qi(t) && ho(U, Z), U.placeholder = i, co(U, t, n);
      }
      function Wi(t) {
        var n = Ct[t];
        return function(e, i) {
          if (e = ln(e), i = i == null ? 0 : Tt(V(i), 292), i && ca(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
          }
          return n(e);
        };
      }
      var Eh = le && 1 / Je(new le([, -0]))[1] == bn ? function(t) {
        return new le(t);
      } : as;
      function to(t) {
        return function(n) {
          var e = Rt(n);
          return e == _t ? gi(n) : e == pt ? ql(n) : Nl(n, t(n));
        };
      }
      function Pn(t, n, e, i, a, l, c, g) {
        var w = n & K;
        if (!w && typeof t != "function")
          throw new rn(d);
        var A = i ? i.length : 0;
        if (A || (n &= ~(St | At), i = a = r), c = c === r ? c : bt(V(c), 0), g = g === r ? g : V(g), A -= a ? a.length : 0, n & At) {
          var I = i, P = a;
          i = a = r;
        }
        var R = w ? r : $i(t), D = [
          t,
          n,
          e,
          i,
          a,
          I,
          P,
          l,
          c,
          g
        ];
        if (R && Hh(D, R), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], g = D[9] = D[9] === r ? w ? 0 : t.length : bt(D[9] - A, 0), !g && n & (X | et) && (n &= ~(X | et)), !n || n == N)
          var B = Ah(t, n, e);
        else n == X || n == et ? B = Ih(t, n, g) : (n == St || n == (N | St)) && !a.length ? B = Ph(t, n, e, i) : B = vr.apply(r, D);
        var Z = R ? ka : ho;
        return co(Z(B, D), t, n);
      }
      function no(t, n, e, i) {
        return t === r || gn(t, ue[e]) && !st.call(i, e) ? n : t;
      }
      function eo(t, n, e, i, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), pr(t, n, r, eo, l), l.delete(n)), t;
      }
      function Th(t) {
        return Ne(t) ? r : t;
      }
      function ro(t, n, e, i, a, l) {
        var c = e & F, g = t.length, w = n.length;
        if (g != w && !(c && w > g))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var P = -1, R = !0, D = e & E ? new Yn() : r;
        for (l.set(t, n), l.set(n, t); ++P < g; ) {
          var B = t[P], Z = n[P];
          if (i)
            var U = c ? i(Z, B, P, n, t, l) : i(B, Z, P, t, n, l);
          if (U !== r) {
            if (U)
              continue;
            R = !1;
            break;
          }
          if (D) {
            if (!ui(n, function(Q, tt) {
              if (!be(D, tt) && (B === Q || a(B, Q, e, i, l)))
                return D.push(tt);
            })) {
              R = !1;
              break;
            }
          } else if (!(B === Z || a(B, Z, e, i, l))) {
            R = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), R;
      }
      function Rh(t, n, e, i, a, l, c) {
        switch (e) {
          case ee:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Ce:
            return !(t.byteLength != n.byteLength || !l(new nr(t), new nr(n)));
          case lt:
          case yt:
          case Lt:
            return gn(+t, +n);
          case Ft:
            return t.name == n.name && t.message == n.message;
          case tn:
          case mn:
            return t == n + "";
          case _t:
            var g = gi;
          case pt:
            var w = i & F;
            if (g || (g = Je), t.size != n.size && !w)
              return !1;
            var A = c.get(t);
            if (A)
              return A == n;
            i |= E, c.set(t, n);
            var I = ro(g(t), g(n), i, a, l, c);
            return c.delete(t), I;
          case ze:
            if (Pe)
              return Pe.call(t) == Pe.call(n);
        }
        return !1;
      }
      function Fh(t, n, e, i, a, l) {
        var c = e & F, g = Bi(t), w = g.length, A = Bi(n), I = A.length;
        if (w != I && !c)
          return !1;
        for (var P = w; P--; ) {
          var R = g[P];
          if (!(c ? R in n : st.call(n, R)))
            return !1;
        }
        var D = l.get(t), B = l.get(n);
        if (D && B)
          return D == n && B == t;
        var Z = !0;
        l.set(t, n), l.set(n, t);
        for (var U = c; ++P < w; ) {
          R = g[P];
          var Q = t[R], tt = n[R];
          if (i)
            var Xt = c ? i(tt, Q, R, n, t, l) : i(Q, tt, R, t, n, l);
          if (!(Xt === r ? Q === tt || a(Q, tt, e, i, l) : Xt)) {
            Z = !1;
            break;
          }
          U || (U = R == "constructor");
        }
        if (Z && !U) {
          var Dt = t.constructor, Qt = n.constructor;
          Dt != Qt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Qt == "function" && Qt instanceof Qt) && (Z = !1);
        }
        return l.delete(t), l.delete(n), Z;
      }
      function En(t) {
        return Vi(lo(t, r, wo), t + "");
      }
      function Bi(t) {
        return ba(t, xt, zi);
      }
      function Ui(t) {
        return ba(t, Gt, io);
      }
      var $i = or ? function(t) {
        return or.get(t);
      } : as;
      function Mr(t) {
        for (var n = t.name + "", e = fe[n], i = st.call(fe, n) ? e.length : 0; i--; ) {
          var a = e[i], l = a.func;
          if (l == null || l == t)
            return a.name;
        }
        return n;
      }
      function ge(t) {
        var n = st.call(u, "placeholder") ? u : t;
        return n.placeholder;
      }
      function W() {
        var t = u.iteratee || is;
        return t = t === is ? Aa : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Cr(t, n) {
        var e = t.__data__;
        return Uh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function Gi(t) {
        for (var n = xt(t), e = n.length; e--; ) {
          var i = n[e], a = t[i];
          n[e] = [i, a, oo(a)];
        }
        return n;
      }
      function jn(t, n) {
        var e = Gl(t, n);
        return xa(e) ? e : r;
      }
      function Lh(t) {
        var n = st.call(t, Zn), e = t[Zn];
        try {
          t[Zn] = r;
          var i = !0;
        } catch {
        }
        var a = je.call(t);
        return i && (n ? t[Zn] = e : delete t[Zn]), a;
      }
      var zi = _i ? function(t) {
        return t == null ? [] : (t = at(t), On(_i(t), function(n) {
          return fa.call(t, n);
        }));
      } : os, io = _i ? function(t) {
        for (var n = []; t; )
          Dn(n, zi(t)), t = er(t);
        return n;
      } : os, Rt = kt;
      (vi && Rt(new vi(new ArrayBuffer(1))) != ee || xe && Rt(new xe()) != _t || mi && Rt(mi.resolve()) != Bt || le && Rt(new le()) != pt || Ae && Rt(new Ae()) != Me) && (Rt = function(t) {
        var n = kt(t), e = n == Mt ? t.constructor : r, i = e ? te(e) : "";
        if (i)
          switch (i) {
            case df:
              return ee;
            case _f:
              return _t;
            case vf:
              return Bt;
            case mf:
              return pt;
            case wf:
              return Me;
          }
        return n;
      });
      function kh(t, n, e) {
        for (var i = -1, a = e.length; ++i < a; ) {
          var l = e[i], c = l.size;
          switch (l.type) {
            case "drop":
              t += c;
              break;
            case "dropRight":
              n -= c;
              break;
            case "take":
              n = Tt(n, t + c);
              break;
            case "takeRight":
              t = bt(t, n - c);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Oh(t) {
        var n = t.match(Uu);
        return n ? n[1].split($u) : [];
      }
      function so(t, n, e) {
        n = $n(n, t);
        for (var i = -1, a = n.length, l = !1; ++i < a; ) {
          var c = Mn(n[i]);
          if (!(l = t != null && e(t, c)))
            break;
          t = t[c];
        }
        return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && Er(a) && Tn(c, a) && (H(t) || ne(t)));
      }
      function Dh(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function ao(t) {
        return typeof t.constructor == "function" && !Oe(t) ? he(er(t)) : {};
      }
      function Nh(t, n, e) {
        var i = t.constructor;
        switch (n) {
          case Ce:
            return Di(t);
          case lt:
          case yt:
            return new i(+t);
          case ee:
            return yh(t, e);
          case Gr:
          case zr:
          case Hr:
          case qr:
          case Kr:
          case Vr:
          case Zr:
          case Jr:
          case Yr:
            return Ga(t, e);
          case _t:
            return new i();
          case Lt:
          case mn:
            return new i(t);
          case tn:
            return Mh(t);
          case pt:
            return new i();
          case ze:
            return Ch(t);
        }
      }
      function Wh(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var i = e - 1;
        return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Bu, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Bh(t) {
        return H(t) || ne(t) || !!(ha && t && t[ha]);
      }
      function Tn(t, n) {
        var e = typeof t;
        return n = n ?? _n, !!n && (e == "number" || e != "symbol" && Yu.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ot(t, n, e) {
        if (!dt(e))
          return !1;
        var i = typeof n;
        return (i == "number" ? $t(e) && Tn(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function Hi(t, n) {
        if (H(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Yt(t) ? !0 : Ou.test(t) || !ku.test(t) || n != null && t in at(n);
      }
      function Uh(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function qi(t) {
        var n = Mr(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var i = $i(e);
        return !!i && t === i[0];
      }
      function $h(t) {
        return !!oa && oa in t;
      }
      var Gh = Xe ? Rn : us;
      function Oe(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || ue;
        return t === e;
      }
      function oo(t) {
        return t === t && !dt(t);
      }
      function uo(t, n) {
        return function(e) {
          return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
        };
      }
      function zh(t) {
        var n = Ir(t, function(i) {
          return e.size === M && e.clear(), i;
        }), e = n.cache;
        return n;
      }
      function Hh(t, n) {
        var e = t[1], i = n[1], a = e | i, l = a < (N | K | It), c = i == It && e == X || i == It && e == Ht && t[7].length <= n[8] || i == (It | Ht) && n[7].length <= n[8] && e == X;
        if (!(l || c))
          return t;
        i & N && (t[2] = n[2], a |= e & N ? 0 : Y);
        var g = n[3];
        if (g) {
          var w = t[3];
          t[3] = w ? Ha(w, g, n[4]) : g, t[4] = w ? Nn(t[3], b) : n[4];
        }
        return g = n[5], g && (w = t[5], t[5] = w ? qa(w, g, n[6]) : g, t[6] = w ? Nn(t[5], b) : n[6]), g = n[7], g && (t[7] = g), i & It && (t[8] = t[8] == null ? n[8] : Tt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function qh(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function Kh(t) {
        return je.call(t);
      }
      function lo(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var i = arguments, a = -1, l = bt(i.length - n, 0), c = S(l); ++a < l; )
            c[a] = i[n + a];
          a = -1;
          for (var g = S(n + 1); ++a < n; )
            g[a] = i[a];
          return g[n] = e(c), Vt(t, this, g);
        };
      }
      function fo(t, n) {
        return n.length < 2 ? t : Qn(t, on(n, 0, -1));
      }
      function Vh(t, n) {
        for (var e = t.length, i = Tt(n.length, e), a = Ut(t); i--; ) {
          var l = n[i];
          t[i] = Tn(l, e) ? a[l] : r;
        }
        return t;
      }
      function Ki(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var ho = po(ka), De = uf || function(t, n) {
        return Pt.setTimeout(t, n);
      }, Vi = po(_h);
      function co(t, n, e) {
        var i = n + "";
        return Vi(t, Wh(i, Zh(Oh(i), e)));
      }
      function po(t) {
        var n = 0, e = 0;
        return function() {
          var i = cf(), a = Ur - (i - e);
          if (e = i, a > 0) {
            if (++n >= Ue)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function br(t, n) {
        var e = -1, i = t.length, a = i - 1;
        for (n = n === r ? i : n; ++e < n; ) {
          var l = Ei(e, a), c = t[l];
          t[l] = t[e], t[e] = c;
        }
        return t.length = n, t;
      }
      var go = zh(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Du, function(e, i, a, l) {
          n.push(a ? l.replace(Hu, "$1") : i || e);
        }), n;
      });
      function Mn(t) {
        if (typeof t == "string" || Yt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function te(t) {
        if (t != null) {
          try {
            return Qe.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Zh(t, n) {
        return en(ht, function(e) {
          var i = "_." + e[0];
          n & e[1] && !Ve(t, i) && t.push(i);
        }), t.sort();
      }
      function _o(t) {
        if (t instanceof j)
          return t.clone();
        var n = new sn(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ut(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Jh(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = bt(V(n), 0);
        var i = t == null ? 0 : t.length;
        if (!i || n < 1)
          return [];
        for (var a = 0, l = 0, c = S(sr(i / n)); a < i; )
          c[l++] = on(t, a, a += n);
        return c;
      }
      function Yh(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[i++] = l);
        }
        return a;
      }
      function Xh() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = S(t - 1), e = arguments[0], i = t; i--; )
          n[i - 1] = arguments[i];
        return Dn(H(e) ? Ut(e) : [e], Et(n, 1));
      }
      var Qh = J(function(t, n) {
        return mt(t) ? Te(t, Et(n, 1, mt, !0)) : [];
      }), jh = J(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Te(t, Et(n, 1, mt, !0), W(e, 2)) : [];
      }), tc = J(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Te(t, Et(n, 1, mt, !0), r, e) : [];
      });
      function nc(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : V(n), on(t, n < 0 ? 0 : n, i)) : [];
      }
      function ec(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : V(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function rc(t, n) {
        return t && t.length ? dr(t, W(n, 3), !0, !0) : [];
      }
      function ic(t, n) {
        return t && t.length ? dr(t, W(n, 3), !0) : [];
      }
      function sc(t, n, e, i) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = a), Xf(t, n, e, i)) : [];
      }
      function vo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : V(e);
        return a < 0 && (a = bt(i + a, 0)), Ze(t, W(n, 3), a);
      }
      function mo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i - 1;
        return e !== r && (a = V(e), a = e < 0 ? bt(i + a, 0) : Tt(a, i - 1)), Ze(t, W(n, 3), a, !0);
      }
      function wo(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, 1) : [];
      }
      function ac(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, bn) : [];
      }
      function oc(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : V(n), Et(t, n)) : [];
      }
      function uc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
          var a = t[n];
          i[a[0]] = a[1];
        }
        return i;
      }
      function yo(t) {
        return t && t.length ? t[0] : r;
      }
      function lc(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : V(e);
        return a < 0 && (a = bt(i + a, 0)), ie(t, n, a);
      }
      function fc(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 0, -1) : [];
      }
      var hc = J(function(t) {
        var n = gt(t, ki);
        return n.length && n[0] === t[0] ? Si(n) : [];
      }), cc = J(function(t) {
        var n = un(t), e = gt(t, ki);
        return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Si(e, W(n, 2)) : [];
      }), pc = J(function(t) {
        var n = un(t), e = gt(t, ki);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Si(e, r, n) : [];
      });
      function gc(t, n) {
        return t == null ? "" : ff.call(t, n);
      }
      function un(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function dc(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i;
        return e !== r && (a = V(e), a = a < 0 ? bt(i + a, 0) : Tt(a, i - 1)), n === n ? Vl(t, n, a) : Ze(t, js, a, !0);
      }
      function _c(t, n) {
        return t && t.length ? Ta(t, V(n)) : r;
      }
      var vc = J(Mo);
      function Mo(t, n) {
        return t && t.length && n && n.length ? Pi(t, n) : t;
      }
      function mc(t, n, e) {
        return t && t.length && n && n.length ? Pi(t, n, W(e, 2)) : t;
      }
      function wc(t, n, e) {
        return t && t.length && n && n.length ? Pi(t, n, r, e) : t;
      }
      var yc = En(function(t, n) {
        var e = t == null ? 0 : t.length, i = yi(t, n);
        return La(t, gt(n, function(a) {
          return Tn(a, e) ? +a : a;
        }).sort(za)), i;
      });
      function Mc(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var i = -1, a = [], l = t.length;
        for (n = W(n, 3); ++i < l; ) {
          var c = t[i];
          n(c, i, t) && (e.push(c), a.push(i));
        }
        return La(t, a), e;
      }
      function Zi(t) {
        return t == null ? t : gf.call(t);
      }
      function Cc(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : V(n), e = e === r ? i : V(e)), on(t, n, e)) : [];
      }
      function bc(t, n) {
        return gr(t, n);
      }
      function Sc(t, n, e) {
        return Ri(t, n, W(e, 2));
      }
      function xc(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = gr(t, n);
          if (i < e && gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Ac(t, n) {
        return gr(t, n, !0);
      }
      function Ic(t, n, e) {
        return Ri(t, n, W(e, 2), !0);
      }
      function Pc(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = gr(t, n, !0) - 1;
          if (gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Ec(t) {
        return t && t.length ? Oa(t) : [];
      }
      function Tc(t, n) {
        return t && t.length ? Oa(t, W(n, 2)) : [];
      }
      function Rc(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 1, n) : [];
      }
      function Fc(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : V(n), on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Lc(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : V(n), n = i - n, on(t, n < 0 ? 0 : n, i)) : [];
      }
      function kc(t, n) {
        return t && t.length ? dr(t, W(n, 3), !1, !0) : [];
      }
      function Oc(t, n) {
        return t && t.length ? dr(t, W(n, 3)) : [];
      }
      var Dc = J(function(t) {
        return Un(Et(t, 1, mt, !0));
      }), Nc = J(function(t) {
        var n = un(t);
        return mt(n) && (n = r), Un(Et(t, 1, mt, !0), W(n, 2));
      }), Wc = J(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, Un(Et(t, 1, mt, !0), r, n);
      });
      function Bc(t) {
        return t && t.length ? Un(t) : [];
      }
      function Uc(t, n) {
        return t && t.length ? Un(t, W(n, 2)) : [];
      }
      function $c(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Un(t, r, n) : [];
      }
      function Ji(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = On(t, function(e) {
          if (mt(e))
            return n = bt(e.length, n), !0;
        }), ci(n, function(e) {
          return gt(t, li(e));
        });
      }
      function Co(t, n) {
        if (!(t && t.length))
          return [];
        var e = Ji(t);
        return n == null ? e : gt(e, function(i) {
          return Vt(n, r, i);
        });
      }
      var Gc = J(function(t, n) {
        return mt(t) ? Te(t, n) : [];
      }), zc = J(function(t) {
        return Li(On(t, mt));
      }), Hc = J(function(t) {
        var n = un(t);
        return mt(n) && (n = r), Li(On(t, mt), W(n, 2));
      }), qc = J(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, Li(On(t, mt), r, n);
      }), Kc = J(Ji);
      function Vc(t, n) {
        return Ba(t || [], n || [], Ee);
      }
      function Zc(t, n) {
        return Ba(t || [], n || [], Le);
      }
      var Jc = J(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, Co(t, e);
      });
      function bo(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Yc(t, n) {
        return n(t), t;
      }
      function Sr(t, n) {
        return n(t);
      }
      var Xc = En(function(t) {
        var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
          return yi(l, t);
        };
        return n > 1 || this.__actions__.length || !(i instanceof j) || !Tn(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
          func: Sr,
          args: [a],
          thisArg: r
        }), new sn(i, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function Qc() {
        return bo(this);
      }
      function jc() {
        return new sn(this.value(), this.__chain__);
      }
      function tp() {
        this.__values__ === r && (this.__values__ = No(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function np() {
        return this;
      }
      function ep(t) {
        for (var n, e = this; e instanceof lr; ) {
          var i = _o(e);
          i.__index__ = 0, i.__values__ = r, n ? a.__wrapped__ = i : n = i;
          var a = i;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = t, n;
      }
      function rp() {
        var t = this.__wrapped__;
        if (t instanceof j) {
          var n = t;
          return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
            func: Sr,
            args: [Zi],
            thisArg: r
          }), new sn(n, this.__chain__);
        }
        return this.thru(Zi);
      }
      function ip() {
        return Wa(this.__wrapped__, this.__actions__);
      }
      var sp = _r(function(t, n, e) {
        st.call(t, e) ? ++t[e] : In(t, e, 1);
      });
      function ap(t, n, e) {
        var i = H(t) ? Xs : Yf;
        return e && Ot(t, n, e) && (n = r), i(t, W(n, 3));
      }
      function op(t, n) {
        var e = H(t) ? On : Ma;
        return e(t, W(n, 3));
      }
      var up = Ja(vo), lp = Ja(mo);
      function fp(t, n) {
        return Et(xr(t, n), 1);
      }
      function hp(t, n) {
        return Et(xr(t, n), bn);
      }
      function cp(t, n, e) {
        return e = e === r ? 1 : V(e), Et(xr(t, n), e);
      }
      function So(t, n) {
        var e = H(t) ? en : Bn;
        return e(t, W(n, 3));
      }
      function xo(t, n) {
        var e = H(t) ? Tl : ya;
        return e(t, W(n, 3));
      }
      var pp = _r(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
      });
      function gp(t, n, e, i) {
        t = $t(t) ? t : _e(t), e = e && !i ? V(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), Tr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && ie(t, n, e) > -1;
      }
      var dp = J(function(t, n, e) {
        var i = -1, a = typeof n == "function", l = $t(t) ? S(t.length) : [];
        return Bn(t, function(c) {
          l[++i] = a ? Vt(n, c, e) : Re(c, n, e);
        }), l;
      }), _p = _r(function(t, n, e) {
        In(t, e, n);
      });
      function xr(t, n) {
        var e = H(t) ? gt : Ia;
        return e(t, W(n, 3));
      }
      function vp(t, n, e, i) {
        return t == null ? [] : (H(n) || (n = n == null ? [] : [n]), e = i ? r : e, H(e) || (e = e == null ? [] : [e]), Ra(t, n, e));
      }
      var mp = _r(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function wp(t, n, e) {
        var i = H(t) ? oi : na, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, Bn);
      }
      function yp(t, n, e) {
        var i = H(t) ? Rl : na, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, ya);
      }
      function Mp(t, n) {
        var e = H(t) ? On : Ma;
        return e(t, Pr(W(n, 3)));
      }
      function Cp(t) {
        var n = H(t) ? _a : gh;
        return n(t);
      }
      function bp(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = V(n);
        var i = H(t) ? qf : dh;
        return i(t, n);
      }
      function Sp(t) {
        var n = H(t) ? Kf : vh;
        return n(t);
      }
      function xp(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Tr(t) ? ae(t) : t.length;
        var n = Rt(t);
        return n == _t || n == pt ? t.size : Ai(t).length;
      }
      function Ap(t, n, e) {
        var i = H(t) ? ui : mh;
        return e && Ot(t, n, e) && (n = r), i(t, W(n, 3));
      }
      var Ip = J(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Ra(t, Et(n, 1), []);
      }), Ar = of || function() {
        return Pt.Date.now();
      };
      function Pp(t, n) {
        if (typeof n != "function")
          throw new rn(d);
        return t = V(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Ao(t, n, e) {
        return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, It, r, r, r, r, n);
      }
      function Io(t, n) {
        var e;
        if (typeof n != "function")
          throw new rn(d);
        return t = V(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Yi = J(function(t, n, e) {
        var i = N;
        if (e.length) {
          var a = Nn(e, ge(Yi));
          i |= St;
        }
        return Pn(t, i, n, e, a);
      }), Po = J(function(t, n, e) {
        var i = N | K;
        if (e.length) {
          var a = Nn(e, ge(Po));
          i |= St;
        }
        return Pn(n, i, t, e, a);
      });
      function Eo(t, n, e) {
        n = e ? r : n;
        var i = Pn(t, X, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function To(t, n, e) {
        n = e ? r : n;
        var i = Pn(t, et, r, r, r, r, r, n);
        return i.placeholder = To.placeholder, i;
      }
      function Ro(t, n, e) {
        var i, a, l, c, g, w, A = 0, I = !1, P = !1, R = !0;
        if (typeof t != "function")
          throw new rn(d);
        n = ln(n) || 0, dt(e) && (I = !!e.leading, P = "maxWait" in e, l = P ? bt(ln(e.maxWait) || 0, n) : l, R = "trailing" in e ? !!e.trailing : R);
        function D(wt) {
          var dn = i, Ln = a;
          return i = a = r, A = wt, c = t.apply(Ln, dn), c;
        }
        function B(wt) {
          return A = wt, g = De(Q, n), I ? D(wt) : c;
        }
        function Z(wt) {
          var dn = wt - w, Ln = wt - A, Yo = n - dn;
          return P ? Tt(Yo, l - Ln) : Yo;
        }
        function U(wt) {
          var dn = wt - w, Ln = wt - A;
          return w === r || dn >= n || dn < 0 || P && Ln >= l;
        }
        function Q() {
          var wt = Ar();
          if (U(wt))
            return tt(wt);
          g = De(Q, Z(wt));
        }
        function tt(wt) {
          return g = r, R && i ? D(wt) : (i = a = r, c);
        }
        function Xt() {
          g !== r && Ua(g), A = 0, i = w = a = g = r;
        }
        function Dt() {
          return g === r ? c : tt(Ar());
        }
        function Qt() {
          var wt = Ar(), dn = U(wt);
          if (i = arguments, a = this, w = wt, dn) {
            if (g === r)
              return B(w);
            if (P)
              return Ua(g), g = De(Q, n), D(w);
          }
          return g === r && (g = De(Q, n)), c;
        }
        return Qt.cancel = Xt, Qt.flush = Dt, Qt;
      }
      var Ep = J(function(t, n) {
        return wa(t, 1, n);
      }), Tp = J(function(t, n, e) {
        return wa(t, ln(n) || 0, e);
      });
      function Rp(t) {
        return Pn(t, jt);
      }
      function Ir(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new rn(d);
        var e = function() {
          var i = arguments, a = n ? n.apply(this, i) : i[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var c = t.apply(this, i);
          return e.cache = l.set(a, c) || l, c;
        };
        return e.cache = new (Ir.Cache || An)(), e;
      }
      Ir.Cache = An;
      function Pr(t) {
        if (typeof t != "function")
          throw new rn(d);
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
      function Fp(t) {
        return Io(2, t);
      }
      var Lp = wh(function(t, n) {
        n = n.length == 1 && H(n[0]) ? gt(n[0], Zt(W())) : gt(Et(n, 1), Zt(W()));
        var e = n.length;
        return J(function(i) {
          for (var a = -1, l = Tt(i.length, e); ++a < l; )
            i[a] = n[a].call(this, i[a]);
          return Vt(t, this, i);
        });
      }), Xi = J(function(t, n) {
        var e = Nn(n, ge(Xi));
        return Pn(t, St, r, n, e);
      }), Fo = J(function(t, n) {
        var e = Nn(n, ge(Fo));
        return Pn(t, At, r, n, e);
      }), kp = En(function(t, n) {
        return Pn(t, Ht, r, r, r, n);
      });
      function Op(t, n) {
        if (typeof t != "function")
          throw new rn(d);
        return n = n === r ? n : V(n), J(t, n);
      }
      function Dp(t, n) {
        if (typeof t != "function")
          throw new rn(d);
        return n = n == null ? 0 : bt(V(n), 0), J(function(e) {
          var i = e[n], a = Gn(e, 0, n);
          return i && Dn(a, i), Vt(t, this, a);
        });
      }
      function Np(t, n, e) {
        var i = !0, a = !0;
        if (typeof t != "function")
          throw new rn(d);
        return dt(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), Ro(t, n, {
          leading: i,
          maxWait: n,
          trailing: a
        });
      }
      function Wp(t) {
        return Ao(t, 1);
      }
      function Bp(t, n) {
        return Xi(Oi(n), t);
      }
      function Up() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return H(t) ? t : [t];
      }
      function $p(t) {
        return an(t, O);
      }
      function Gp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, O, n);
      }
      function zp(t) {
        return an(t, m | O);
      }
      function Hp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, m | O, n);
      }
      function qp(t, n) {
        return n == null || ma(t, n, xt(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Kp = yr(bi), Vp = yr(function(t, n) {
        return t >= n;
      }), ne = Sa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Sa : function(t) {
        return vt(t) && st.call(t, "callee") && !fa.call(t, "callee");
      }, H = S.isArray, Zp = qs ? Zt(qs) : eh;
      function $t(t) {
        return t != null && Er(t.length) && !Rn(t);
      }
      function mt(t) {
        return vt(t) && $t(t);
      }
      function Jp(t) {
        return t === !0 || t === !1 || vt(t) && kt(t) == lt;
      }
      var zn = lf || us, Yp = Ks ? Zt(Ks) : rh;
      function Xp(t) {
        return vt(t) && t.nodeType === 1 && !Ne(t);
      }
      function Qp(t) {
        if (t == null)
          return !0;
        if ($t(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || zn(t) || de(t) || ne(t)))
          return !t.length;
        var n = Rt(t);
        if (n == _t || n == pt)
          return !t.size;
        if (Oe(t))
          return !Ai(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function jp(t, n) {
        return Fe(t, n);
      }
      function tg(t, n, e) {
        e = typeof e == "function" ? e : r;
        var i = e ? e(t, n) : r;
        return i === r ? Fe(t, n, r, e) : !!i;
      }
      function Qi(t) {
        if (!vt(t))
          return !1;
        var n = kt(t);
        return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !Ne(t);
      }
      function ng(t) {
        return typeof t == "number" && ca(t);
      }
      function Rn(t) {
        if (!dt(t))
          return !1;
        var n = kt(t);
        return n == Wt || n == vn || n == ot || n == hn;
      }
      function Lo(t) {
        return typeof t == "number" && t == V(t);
      }
      function Er(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _n;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var ko = Vs ? Zt(Vs) : sh;
      function eg(t, n) {
        return t === n || xi(t, n, Gi(n));
      }
      function rg(t, n, e) {
        return e = typeof e == "function" ? e : r, xi(t, n, Gi(n), e);
      }
      function ig(t) {
        return Oo(t) && t != +t;
      }
      function sg(t) {
        if (Gh(t))
          throw new z(p);
        return xa(t);
      }
      function ag(t) {
        return t === null;
      }
      function og(t) {
        return t == null;
      }
      function Oo(t) {
        return typeof t == "number" || vt(t) && kt(t) == Lt;
      }
      function Ne(t) {
        if (!vt(t) || kt(t) != Mt)
          return !1;
        var n = er(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && Qe.call(e) == ef;
      }
      var ji = Zs ? Zt(Zs) : ah;
      function ug(t) {
        return Lo(t) && t >= -_n && t <= _n;
      }
      var Do = Js ? Zt(Js) : oh;
      function Tr(t) {
        return typeof t == "string" || !H(t) && vt(t) && kt(t) == mn;
      }
      function Yt(t) {
        return typeof t == "symbol" || vt(t) && kt(t) == ze;
      }
      var de = Ys ? Zt(Ys) : uh;
      function lg(t) {
        return t === r;
      }
      function fg(t) {
        return vt(t) && Rt(t) == Me;
      }
      function hg(t) {
        return vt(t) && kt(t) == Au;
      }
      var cg = yr(Ii), pg = yr(function(t, n) {
        return t <= n;
      });
      function No(t) {
        if (!t)
          return [];
        if ($t(t))
          return Tr(t) ? cn(t) : Ut(t);
        if (Se && t[Se])
          return Hl(t[Se]());
        var n = Rt(t), e = n == _t ? gi : n == pt ? Je : _e;
        return e(t);
      }
      function Fn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = ln(t), t === bn || t === -bn) {
          var n = t < 0 ? -1 : 1;
          return n * Ge;
        }
        return t === t ? t : 0;
      }
      function V(t) {
        var n = Fn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function Wo(t) {
        return t ? Xn(V(t), 0, L) : 0;
      }
      function ln(t) {
        if (typeof t == "number")
          return t;
        if (Yt(t))
          return Sn;
        if (dt(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = dt(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = ea(t);
        var e = Vu.test(t);
        return e || Ju.test(t) ? Il(t.slice(2), e ? 2 : 8) : Ku.test(t) ? Sn : +t;
      }
      function Bo(t) {
        return yn(t, Gt(t));
      }
      function gg(t) {
        return t ? Xn(V(t), -_n, _n) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Jt(t);
      }
      var dg = ce(function(t, n) {
        if (Oe(n) || $t(n)) {
          yn(n, xt(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Ee(t, e, n[e]);
      }), Uo = ce(function(t, n) {
        yn(n, Gt(n), t);
      }), Rr = ce(function(t, n, e, i) {
        yn(n, Gt(n), t, i);
      }), _g = ce(function(t, n, e, i) {
        yn(n, xt(n), t, i);
      }), vg = En(yi);
      function mg(t, n) {
        var e = he(t);
        return n == null ? e : va(e, n);
      }
      var wg = J(function(t, n) {
        t = at(t);
        var e = -1, i = n.length, a = i > 2 ? n[2] : r;
        for (a && Ot(n[0], n[1], a) && (i = 1); ++e < i; )
          for (var l = n[e], c = Gt(l), g = -1, w = c.length; ++g < w; ) {
            var A = c[g], I = t[A];
            (I === r || gn(I, ue[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), yg = J(function(t) {
        return t.push(r, eo), Vt($o, r, t);
      });
      function Mg(t, n) {
        return Qs(t, W(n, 3), wn);
      }
      function Cg(t, n) {
        return Qs(t, W(n, 3), Ci);
      }
      function bg(t, n) {
        return t == null ? t : Mi(t, W(n, 3), Gt);
      }
      function Sg(t, n) {
        return t == null ? t : Ca(t, W(n, 3), Gt);
      }
      function xg(t, n) {
        return t && wn(t, W(n, 3));
      }
      function Ag(t, n) {
        return t && Ci(t, W(n, 3));
      }
      function Ig(t) {
        return t == null ? [] : cr(t, xt(t));
      }
      function Pg(t) {
        return t == null ? [] : cr(t, Gt(t));
      }
      function ts(t, n, e) {
        var i = t == null ? r : Qn(t, n);
        return i === r ? e : i;
      }
      function Eg(t, n) {
        return t != null && so(t, n, Qf);
      }
      function ns(t, n) {
        return t != null && so(t, n, jf);
      }
      var Tg = Xa(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = je.call(n)), t[n] = e;
      }, rs(zt)), Rg = Xa(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = je.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, W), Fg = J(Re);
      function xt(t) {
        return $t(t) ? da(t) : Ai(t);
      }
      function Gt(t) {
        return $t(t) ? da(t, !0) : lh(t);
      }
      function Lg(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(i, a, l) {
          In(e, n(i, a, l), i);
        }), e;
      }
      function kg(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(i, a, l) {
          In(e, a, n(i, a, l));
        }), e;
      }
      var Og = ce(function(t, n, e) {
        pr(t, n, e);
      }), $o = ce(function(t, n, e, i) {
        pr(t, n, e, i);
      }), Dg = En(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var i = !1;
        n = gt(n, function(l) {
          return l = $n(l, t), i || (i = l.length > 1), l;
        }), yn(t, Ui(t), e), i && (e = an(e, m | T | O, Th));
        for (var a = n.length; a--; )
          Fi(e, n[a]);
        return e;
      });
      function Ng(t, n) {
        return Go(t, Pr(W(n)));
      }
      var Wg = En(function(t, n) {
        return t == null ? {} : hh(t, n);
      });
      function Go(t, n) {
        if (t == null)
          return {};
        var e = gt(Ui(t), function(i) {
          return [i];
        });
        return n = W(n), Fa(t, e, function(i, a) {
          return n(i, a[0]);
        });
      }
      function Bg(t, n, e) {
        n = $n(n, t);
        var i = -1, a = n.length;
        for (a || (a = 1, t = r); ++i < a; ) {
          var l = t == null ? r : t[Mn(n[i])];
          l === r && (i = a, l = e), t = Rn(l) ? l.call(t) : l;
        }
        return t;
      }
      function Ug(t, n, e) {
        return t == null ? t : Le(t, n, e);
      }
      function $g(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Le(t, n, e, i);
      }
      var zo = to(xt), Ho = to(Gt);
      function Gg(t, n, e) {
        var i = H(t), a = i || zn(t) || de(t);
        if (n = W(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = i ? new l() : [] : dt(t) ? e = Rn(l) ? he(er(t)) : {} : e = {};
        }
        return (a ? en : wn)(t, function(c, g, w) {
          return n(e, c, g, w);
        }), e;
      }
      function zg(t, n) {
        return t == null ? !0 : Fi(t, n);
      }
      function Hg(t, n, e) {
        return t == null ? t : Na(t, n, Oi(e));
      }
      function qg(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Na(t, n, Oi(e), i);
      }
      function _e(t) {
        return t == null ? [] : pi(t, xt(t));
      }
      function Kg(t) {
        return t == null ? [] : pi(t, Gt(t));
      }
      function Vg(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = ln(e), e = e === e ? e : 0), n !== r && (n = ln(n), n = n === n ? n : 0), Xn(ln(t), n, e);
      }
      function Zg(t, n, e) {
        return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = ln(t), th(t, n, e);
      }
      function Jg(t, n, e) {
        if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
          var i = t;
          t = n, n = i;
        }
        if (e || t % 1 || n % 1) {
          var a = pa();
          return Tt(t + a * (n - t + Al("1e-" + ((a + "").length - 1))), n);
        }
        return Ei(t, n);
      }
      var Yg = pe(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? qo(n) : n);
      });
      function qo(t) {
        return es(it(t).toLowerCase());
      }
      function Ko(t) {
        return t = it(t), t && t.replace(Xu, Bl).replace(_l, "");
      }
      function Xg(t, n, e) {
        t = it(t), n = Jt(n);
        var i = t.length;
        e = e === r ? i : Xn(V(e), 0, i);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function Qg(t) {
        return t = it(t), t && Ru.test(t) ? t.replace(Cs, Ul) : t;
      }
      function jg(t) {
        return t = it(t), t && Nu.test(t) ? t.replace(Xr, "\\$&") : t;
      }
      var td = pe(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), nd = pe(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), ed = Za("toLowerCase");
      function rd(t, n, e) {
        t = it(t), n = V(n);
        var i = n ? ae(t) : 0;
        if (!n || i >= n)
          return t;
        var a = (n - i) / 2;
        return wr(ar(a), e) + t + wr(sr(a), e);
      }
      function id(t, n, e) {
        t = it(t), n = V(n);
        var i = n ? ae(t) : 0;
        return n && i < n ? t + wr(n - i, e) : t;
      }
      function sd(t, n, e) {
        t = it(t), n = V(n);
        var i = n ? ae(t) : 0;
        return n && i < n ? wr(n - i, e) + t : t;
      }
      function ad(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), pf(it(t).replace(Qr, ""), n || 0);
      }
      function od(t, n, e) {
        return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = V(n), Ti(it(t), n);
      }
      function ud() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var ld = pe(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function fd(t, n, e) {
        return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? L : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Jt(n), !n && se(t)) ? Gn(cn(t), 0, e) : t.split(n, e)) : [];
      }
      var hd = pe(function(t, n, e) {
        return t + (e ? " " : "") + es(n);
      });
      function cd(t, n, e) {
        return t = it(t), e = e == null ? 0 : Xn(V(e), 0, t.length), n = Jt(n), t.slice(e, e + n.length) == n;
      }
      function pd(t, n, e) {
        var i = u.templateSettings;
        e && Ot(t, n, e) && (n = r), t = it(t), n = Rr({}, n, i, no);
        var a = Rr({}, n.imports, i.imports, no), l = xt(a), c = pi(a, l), g, w, A = 0, I = n.interpolate || He, P = "__p += '", R = di(
          (n.escape || He).source + "|" + I.source + "|" + (I === bs ? qu : He).source + "|" + (n.evaluate || He).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ml + "]") + `
`;
        t.replace(R, function(U, Q, tt, Xt, Dt, Qt) {
          return tt || (tt = Xt), P += t.slice(A, Qt).replace(Qu, $l), Q && (g = !0, P += `' +
__e(` + Q + `) +
'`), Dt && (w = !0, P += `';
` + Dt + `;
__p += '`), tt && (P += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), A = Qt + U.length, U;
        }), P += `';
`;
        var B = st.call(n, "variable") && n.variable;
        if (!B)
          P = `with (obj) {
` + P + `
}
`;
        else if (zu.test(B))
          throw new z(_);
        P = (w ? P.replace(Iu, "") : P).replace(Pu, "$1").replace(Eu, "$1;"), P = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var Z = Zo(function() {
          return rt(l, D + "return " + P).apply(r, c);
        });
        if (Z.source = P, Qi(Z))
          throw Z;
        return Z;
      }
      function gd(t) {
        return it(t).toLowerCase();
      }
      function dd(t) {
        return it(t).toUpperCase();
      }
      function _d(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return ea(t);
        if (!t || !(n = Jt(n)))
          return t;
        var i = cn(t), a = cn(n), l = ra(i, a), c = ia(i, a) + 1;
        return Gn(i, l, c).join("");
      }
      function vd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, aa(t) + 1);
        if (!t || !(n = Jt(n)))
          return t;
        var i = cn(t), a = ia(i, cn(n)) + 1;
        return Gn(i, 0, a).join("");
      }
      function md(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(Qr, "");
        if (!t || !(n = Jt(n)))
          return t;
        var i = cn(t), a = ra(i, cn(n));
        return Gn(i, a).join("");
      }
      function wd(t, n) {
        var e = qt, i = we;
        if (dt(n)) {
          var a = "separator" in n ? n.separator : a;
          e = "length" in n ? V(n.length) : e, i = "omission" in n ? Jt(n.omission) : i;
        }
        t = it(t);
        var l = t.length;
        if (se(t)) {
          var c = cn(t);
          l = c.length;
        }
        if (e >= l)
          return t;
        var g = e - ae(i);
        if (g < 1)
          return i;
        var w = c ? Gn(c, 0, g).join("") : t.slice(0, g);
        if (a === r)
          return w + i;
        if (c && (g += w.length - g), ji(a)) {
          if (t.slice(g).search(a)) {
            var A, I = w;
            for (a.global || (a = di(a.source, it(Ss.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var P = A.index;
            w = w.slice(0, P === r ? g : P);
          }
        } else if (t.indexOf(Jt(a), g) != g) {
          var R = w.lastIndexOf(a);
          R > -1 && (w = w.slice(0, R));
        }
        return w + i;
      }
      function yd(t) {
        return t = it(t), t && Tu.test(t) ? t.replace(Ms, Zl) : t;
      }
      var Md = pe(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), es = Za("toUpperCase");
      function Vo(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? zl(t) ? Xl(t) : kl(t) : t.match(n) || [];
      }
      var Zo = J(function(t, n) {
        try {
          return Vt(t, r, n);
        } catch (e) {
          return Qi(e) ? e : new z(e);
        }
      }), Cd = En(function(t, n) {
        return en(n, function(e) {
          e = Mn(e), In(t, e, Yi(t[e], t));
        }), t;
      });
      function bd(t) {
        var n = t == null ? 0 : t.length, e = W();
        return t = n ? gt(t, function(i) {
          if (typeof i[1] != "function")
            throw new rn(d);
          return [e(i[0]), i[1]];
        }) : [], J(function(i) {
          for (var a = -1; ++a < n; ) {
            var l = t[a];
            if (Vt(l[0], this, i))
              return Vt(l[1], this, i);
          }
        });
      }
      function Sd(t) {
        return Jf(an(t, m));
      }
      function rs(t) {
        return function() {
          return t;
        };
      }
      function xd(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Ad = Ya(), Id = Ya(!0);
      function zt(t) {
        return t;
      }
      function is(t) {
        return Aa(typeof t == "function" ? t : an(t, m));
      }
      function Pd(t) {
        return Pa(an(t, m));
      }
      function Ed(t, n) {
        return Ea(t, an(n, m));
      }
      var Td = J(function(t, n) {
        return function(e) {
          return Re(e, t, n);
        };
      }), Rd = J(function(t, n) {
        return function(e) {
          return Re(t, e, n);
        };
      });
      function ss(t, n, e) {
        var i = xt(n), a = cr(n, i);
        e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = cr(n, xt(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, c = Rn(t);
        return en(a, function(g) {
          var w = n[g];
          t[g] = w, c && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (l || A) {
              var I = t(this.__wrapped__), P = I.__actions__ = Ut(this.__actions__);
              return P.push({ func: w, args: arguments, thisArg: t }), I.__chain__ = A, I;
            }
            return w.apply(t, Dn([this.value()], arguments));
          });
        }), t;
      }
      function Fd() {
        return Pt._ === this && (Pt._ = rf), this;
      }
      function as() {
      }
      function Ld(t) {
        return t = V(t), J(function(n) {
          return Ta(n, t);
        });
      }
      var kd = Ni(gt), Od = Ni(Xs), Dd = Ni(ui);
      function Jo(t) {
        return Hi(t) ? li(Mn(t)) : ch(t);
      }
      function Nd(t) {
        return function(n) {
          return t == null ? r : Qn(t, n);
        };
      }
      var Wd = Qa(), Bd = Qa(!0);
      function os() {
        return [];
      }
      function us() {
        return !1;
      }
      function Ud() {
        return {};
      }
      function $d() {
        return "";
      }
      function Gd() {
        return !0;
      }
      function zd(t, n) {
        if (t = V(t), t < 1 || t > _n)
          return [];
        var e = L, i = Tt(t, L);
        n = W(n), t -= L;
        for (var a = ci(i, n); ++e < t; )
          n(e);
        return a;
      }
      function Hd(t) {
        return H(t) ? gt(t, Mn) : Yt(t) ? [t] : Ut(go(it(t)));
      }
      function qd(t) {
        var n = ++nf;
        return it(t) + n;
      }
      var Kd = mr(function(t, n) {
        return t + n;
      }, 0), Vd = Wi("ceil"), Zd = mr(function(t, n) {
        return t / n;
      }, 1), Jd = Wi("floor");
      function Yd(t) {
        return t && t.length ? hr(t, zt, bi) : r;
      }
      function Xd(t, n) {
        return t && t.length ? hr(t, W(n, 2), bi) : r;
      }
      function Qd(t) {
        return ta(t, zt);
      }
      function jd(t, n) {
        return ta(t, W(n, 2));
      }
      function t0(t) {
        return t && t.length ? hr(t, zt, Ii) : r;
      }
      function n0(t, n) {
        return t && t.length ? hr(t, W(n, 2), Ii) : r;
      }
      var e0 = mr(function(t, n) {
        return t * n;
      }, 1), r0 = Wi("round"), i0 = mr(function(t, n) {
        return t - n;
      }, 0);
      function s0(t) {
        return t && t.length ? hi(t, zt) : 0;
      }
      function a0(t, n) {
        return t && t.length ? hi(t, W(n, 2)) : 0;
      }
      return u.after = Pp, u.ary = Ao, u.assign = dg, u.assignIn = Uo, u.assignInWith = Rr, u.assignWith = _g, u.at = vg, u.before = Io, u.bind = Yi, u.bindAll = Cd, u.bindKey = Po, u.castArray = Up, u.chain = bo, u.chunk = Jh, u.compact = Yh, u.concat = Xh, u.cond = bd, u.conforms = Sd, u.constant = rs, u.countBy = sp, u.create = mg, u.curry = Eo, u.curryRight = To, u.debounce = Ro, u.defaults = wg, u.defaultsDeep = yg, u.defer = Ep, u.delay = Tp, u.difference = Qh, u.differenceBy = jh, u.differenceWith = tc, u.drop = nc, u.dropRight = ec, u.dropRightWhile = rc, u.dropWhile = ic, u.fill = sc, u.filter = op, u.flatMap = fp, u.flatMapDeep = hp, u.flatMapDepth = cp, u.flatten = wo, u.flattenDeep = ac, u.flattenDepth = oc, u.flip = Rp, u.flow = Ad, u.flowRight = Id, u.fromPairs = uc, u.functions = Ig, u.functionsIn = Pg, u.groupBy = pp, u.initial = fc, u.intersection = hc, u.intersectionBy = cc, u.intersectionWith = pc, u.invert = Tg, u.invertBy = Rg, u.invokeMap = dp, u.iteratee = is, u.keyBy = _p, u.keys = xt, u.keysIn = Gt, u.map = xr, u.mapKeys = Lg, u.mapValues = kg, u.matches = Pd, u.matchesProperty = Ed, u.memoize = Ir, u.merge = Og, u.mergeWith = $o, u.method = Td, u.methodOf = Rd, u.mixin = ss, u.negate = Pr, u.nthArg = Ld, u.omit = Dg, u.omitBy = Ng, u.once = Fp, u.orderBy = vp, u.over = kd, u.overArgs = Lp, u.overEvery = Od, u.overSome = Dd, u.partial = Xi, u.partialRight = Fo, u.partition = mp, u.pick = Wg, u.pickBy = Go, u.property = Jo, u.propertyOf = Nd, u.pull = vc, u.pullAll = Mo, u.pullAllBy = mc, u.pullAllWith = wc, u.pullAt = yc, u.range = Wd, u.rangeRight = Bd, u.rearg = kp, u.reject = Mp, u.remove = Mc, u.rest = Op, u.reverse = Zi, u.sampleSize = bp, u.set = Ug, u.setWith = $g, u.shuffle = Sp, u.slice = Cc, u.sortBy = Ip, u.sortedUniq = Ec, u.sortedUniqBy = Tc, u.split = fd, u.spread = Dp, u.tail = Rc, u.take = Fc, u.takeRight = Lc, u.takeRightWhile = kc, u.takeWhile = Oc, u.tap = Yc, u.throttle = Np, u.thru = Sr, u.toArray = No, u.toPairs = zo, u.toPairsIn = Ho, u.toPath = Hd, u.toPlainObject = Bo, u.transform = Gg, u.unary = Wp, u.union = Dc, u.unionBy = Nc, u.unionWith = Wc, u.uniq = Bc, u.uniqBy = Uc, u.uniqWith = $c, u.unset = zg, u.unzip = Ji, u.unzipWith = Co, u.update = Hg, u.updateWith = qg, u.values = _e, u.valuesIn = Kg, u.without = Gc, u.words = Vo, u.wrap = Bp, u.xor = zc, u.xorBy = Hc, u.xorWith = qc, u.zip = Kc, u.zipObject = Vc, u.zipObjectDeep = Zc, u.zipWith = Jc, u.entries = zo, u.entriesIn = Ho, u.extend = Uo, u.extendWith = Rr, ss(u, u), u.add = Kd, u.attempt = Zo, u.camelCase = Yg, u.capitalize = qo, u.ceil = Vd, u.clamp = Vg, u.clone = $p, u.cloneDeep = zp, u.cloneDeepWith = Hp, u.cloneWith = Gp, u.conformsTo = qp, u.deburr = Ko, u.defaultTo = xd, u.divide = Zd, u.endsWith = Xg, u.eq = gn, u.escape = Qg, u.escapeRegExp = jg, u.every = ap, u.find = up, u.findIndex = vo, u.findKey = Mg, u.findLast = lp, u.findLastIndex = mo, u.findLastKey = Cg, u.floor = Jd, u.forEach = So, u.forEachRight = xo, u.forIn = bg, u.forInRight = Sg, u.forOwn = xg, u.forOwnRight = Ag, u.get = ts, u.gt = Kp, u.gte = Vp, u.has = Eg, u.hasIn = ns, u.head = yo, u.identity = zt, u.includes = gp, u.indexOf = lc, u.inRange = Zg, u.invoke = Fg, u.isArguments = ne, u.isArray = H, u.isArrayBuffer = Zp, u.isArrayLike = $t, u.isArrayLikeObject = mt, u.isBoolean = Jp, u.isBuffer = zn, u.isDate = Yp, u.isElement = Xp, u.isEmpty = Qp, u.isEqual = jp, u.isEqualWith = tg, u.isError = Qi, u.isFinite = ng, u.isFunction = Rn, u.isInteger = Lo, u.isLength = Er, u.isMap = ko, u.isMatch = eg, u.isMatchWith = rg, u.isNaN = ig, u.isNative = sg, u.isNil = og, u.isNull = ag, u.isNumber = Oo, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = Ne, u.isRegExp = ji, u.isSafeInteger = ug, u.isSet = Do, u.isString = Tr, u.isSymbol = Yt, u.isTypedArray = de, u.isUndefined = lg, u.isWeakMap = fg, u.isWeakSet = hg, u.join = gc, u.kebabCase = td, u.last = un, u.lastIndexOf = dc, u.lowerCase = nd, u.lowerFirst = ed, u.lt = cg, u.lte = pg, u.max = Yd, u.maxBy = Xd, u.mean = Qd, u.meanBy = jd, u.min = t0, u.minBy = n0, u.stubArray = os, u.stubFalse = us, u.stubObject = Ud, u.stubString = $d, u.stubTrue = Gd, u.multiply = e0, u.nth = _c, u.noConflict = Fd, u.noop = as, u.now = Ar, u.pad = rd, u.padEnd = id, u.padStart = sd, u.parseInt = ad, u.random = Jg, u.reduce = wp, u.reduceRight = yp, u.repeat = od, u.replace = ud, u.result = Bg, u.round = r0, u.runInContext = v, u.sample = Cp, u.size = xp, u.snakeCase = ld, u.some = Ap, u.sortedIndex = bc, u.sortedIndexBy = Sc, u.sortedIndexOf = xc, u.sortedLastIndex = Ac, u.sortedLastIndexBy = Ic, u.sortedLastIndexOf = Pc, u.startCase = hd, u.startsWith = cd, u.subtract = i0, u.sum = s0, u.sumBy = a0, u.template = pd, u.times = zd, u.toFinite = Fn, u.toInteger = V, u.toLength = Wo, u.toLower = gd, u.toNumber = ln, u.toSafeInteger = gg, u.toString = it, u.toUpper = dd, u.trim = _d, u.trimEnd = vd, u.trimStart = md, u.truncate = wd, u.unescape = yd, u.uniqueId = qd, u.upperCase = Md, u.upperFirst = es, u.each = So, u.eachRight = xo, u.first = yo, ss(u, function() {
        var t = {};
        return wn(u, function(n, e) {
          st.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), en(["drop", "take"], function(t, n) {
        j.prototype[t] = function(e) {
          e = e === r ? 1 : bt(V(e), 0);
          var i = this.__filtered__ && !n ? new j(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = Tt(e, i.__takeCount__) : i.__views__.push({
            size: Tt(e, L),
            type: t + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, j.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), en(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, i = e == ye || e == $r;
        j.prototype[t] = function(a) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: W(a, 3),
            type: e
          }), l.__filtered__ = l.__filtered__ || i, l;
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
      }, j.prototype.invokeMap = J(function(t, n) {
        return typeof t == "function" ? new j(this) : this.map(function(e) {
          return Re(e, t, n);
        });
      }), j.prototype.reject = function(t) {
        return this.filter(Pr(W(t)));
      }, j.prototype.slice = function(t, n) {
        t = V(t);
        var e = this;
        return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = V(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
      }, j.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, j.prototype.toArray = function() {
        return this.take(L);
      }, wn(j.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), a = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
        a && (u.prototype[n] = function() {
          var c = this.__wrapped__, g = i ? [1] : arguments, w = c instanceof j, A = g[0], I = w || H(c), P = function(Q) {
            var tt = a.apply(u, Dn([Q], g));
            return i && R ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (w = I = !1);
          var R = this.__chain__, D = !!this.__actions__.length, B = l && !R, Z = w && !D;
          if (!l && I) {
            c = Z ? c : new j(this);
            var U = t.apply(c, g);
            return U.__actions__.push({ func: Sr, args: [P], thisArg: r }), new sn(U, R);
          }
          return B && Z ? t.apply(this, g) : (U = this.thru(P), B ? i ? U.value()[0] : U.value() : U);
        });
      }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ye[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var a = arguments;
          if (i && !this.__chain__) {
            var l = this.value();
            return n.apply(H(l) ? l : [], a);
          }
          return this[e](function(c) {
            return n.apply(H(c) ? c : [], a);
          });
        };
      }), wn(j.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var i = e.name + "";
          st.call(fe, i) || (fe[i] = []), fe[i].push({ name: n, func: e });
        }
      }), fe[vr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = yf, j.prototype.reverse = Mf, j.prototype.value = Cf, u.prototype.at = Xc, u.prototype.chain = Qc, u.prototype.commit = jc, u.prototype.next = tp, u.prototype.plant = ep, u.prototype.reverse = rp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ip, u.prototype.first = u.prototype.head, Se && (u.prototype[Se] = np), u;
    }, oe = Ql();
    Vn ? ((Vn.exports = oe)._ = oe, ii._ = oe) : Pt._ = oe;
  }).call(We);
})(Dr, Dr.exports);
var su = Dr.exports;
const q = /* @__PURE__ */ iu(su);
var gs = { exports: {} }, ls, Xo;
function l0() {
  if (Xo) return ls;
  Xo = 1;
  var h = 1e3, s = h * 60, r = s * 60, o = r * 24, f = o * 7, p = o * 365.25;
  ls = function(b, m) {
    m = m || {};
    var T = typeof b;
    if (T === "string" && b.length > 0)
      return d(b);
    if (T === "number" && isFinite(b))
      return m.long ? y(b) : _(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function d(b) {
    if (b = String(b), !(b.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (m) {
        var T = parseFloat(m[1]), O = (m[2] || "ms").toLowerCase();
        switch (O) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return T * p;
          case "weeks":
          case "week":
          case "w":
            return T * f;
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
            return T * s;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return T * h;
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
  function _(b) {
    var m = Math.abs(b);
    return m >= o ? Math.round(b / o) + "d" : m >= r ? Math.round(b / r) + "h" : m >= s ? Math.round(b / s) + "m" : m >= h ? Math.round(b / h) + "s" : b + "ms";
  }
  function y(b) {
    var m = Math.abs(b);
    return m >= o ? M(b, m, o, "day") : m >= r ? M(b, m, r, "hour") : m >= s ? M(b, m, s, "minute") : m >= h ? M(b, m, h, "second") : b + " ms";
  }
  function M(b, m, T, O) {
    var F = m >= T * 1.5;
    return Math.round(b / T) + " " + O + (F ? "s" : "");
  }
  return ls;
}
function f0(h) {
  r.debug = r, r.default = r, r.coerce = y, r.disable = p, r.enable = f, r.enabled = d, r.humanize = l0(), r.destroy = M, Object.keys(h).forEach((b) => {
    r[b] = h[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function s(b) {
    let m = 0;
    for (let T = 0; T < b.length; T++)
      m = (m << 5) - m + b.charCodeAt(T), m |= 0;
    return r.colors[Math.abs(m) % r.colors.length];
  }
  r.selectColor = s;
  function r(b) {
    let m, T = null, O, F;
    function E(...N) {
      if (!E.enabled)
        return;
      const K = E, Y = Number(/* @__PURE__ */ new Date()), X = Y - (m || Y);
      K.diff = X, K.prev = m, K.curr = Y, m = Y, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
      let et = 0;
      N[0] = N[0].replace(/%([a-zA-Z%])/g, (At, It) => {
        if (At === "%%")
          return "%";
        et++;
        const Ht = r.formatters[It];
        if (typeof Ht == "function") {
          const jt = N[et];
          At = Ht.call(K, jt), N.splice(et, 1), et--;
        }
        return At;
      }), r.formatArgs.call(K, N), (K.log || r.log).apply(K, N);
    }
    return E.namespace = b, E.useColors = r.useColors(), E.color = r.selectColor(b), E.extend = o, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => T !== null ? T : (O !== r.namespaces && (O = r.namespaces, F = r.enabled(b)), F),
      set: (N) => {
        T = N;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function o(b, m) {
    const T = r(this.namespace + (typeof m > "u" ? ":" : m) + b);
    return T.log = this.log, T;
  }
  function f(b) {
    r.save(b), r.namespaces = b, r.names = [], r.skips = [];
    let m;
    const T = (typeof b == "string" ? b : "").split(/[\s,]+/), O = T.length;
    for (m = 0; m < O; m++)
      T[m] && (b = T[m].replace(/\*/g, ".*?"), b[0] === "-" ? r.skips.push(new RegExp("^" + b.slice(1) + "$")) : r.names.push(new RegExp("^" + b + "$")));
  }
  function p() {
    const b = [
      ...r.names.map(_),
      ...r.skips.map(_).map((m) => "-" + m)
    ].join(",");
    return r.enable(""), b;
  }
  function d(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let m, T;
    for (m = 0, T = r.skips.length; m < T; m++)
      if (r.skips[m].test(b))
        return !1;
    for (m = 0, T = r.names.length; m < T; m++)
      if (r.names[m].test(b))
        return !0;
    return !1;
  }
  function _(b) {
    return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function y(b) {
    return b instanceof Error ? b.stack || b.message : b;
  }
  function M() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var h0 = f0;
(function(h, s) {
  s.formatArgs = o, s.save = f, s.load = p, s.useColors = r, s.storage = d(), s.destroy = /* @__PURE__ */ (() => {
    let y = !1;
    return () => {
      y || (y = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
    let y;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (y = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(y[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function o(y) {
    if (y[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + y[0] + (this.useColors ? "%c " : " ") + "+" + h.exports.humanize(this.diff), !this.useColors)
      return;
    const M = "color: " + this.color;
    y.splice(1, 0, M, "color: inherit");
    let b = 0, m = 0;
    y[0].replace(/%[a-zA-Z%]/g, (T) => {
      T !== "%%" && (b++, T === "%c" && (m = b));
    }), y.splice(m, 0, M);
  }
  s.log = console.debug || console.log || (() => {
  });
  function f(y) {
    try {
      y ? s.storage.setItem("debug", y) : s.storage.removeItem("debug");
    } catch {
    }
  }
  function p() {
    let y;
    try {
      y = s.storage.getItem("debug");
    } catch {
    }
    return !y && typeof process < "u" && "env" in process && (y = process.env.DEBUG), y;
  }
  function d() {
    try {
      return localStorage;
    } catch {
    }
  }
  h.exports = h0(s);
  const { formatters: _ } = h.exports;
  _.j = function(y) {
    try {
      return JSON.stringify(y);
    } catch (M) {
      return "[UnexpectedJSONParseError]: " + M.message;
    }
  };
})(gs, gs.exports);
var c0 = gs.exports;
const p0 = /* @__PURE__ */ iu(c0), fs = {};
function Kn(h) {
  if (!fs[h]) {
    const s = p0("ultraPacer:core");
    s(`loading debug for namespace "${h}"`), fs[h] = s.extend(h);
  }
  return fs[h];
}
function Nt(h, s = 0) {
  return Math.round(h * 10 ** s) / 10 ** s;
}
function ve(h, s, r, o, f) {
  return r + (f - h) / (s - h) * (o - r);
}
function au(h, s, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < h[f])
      p.push(s[f]);
    else {
      for (; f < h.length - 1 && h[f + 1] <= r[o]; )
        f++;
      f === h.length - 1 || r[o] === h[f] ? p.push(s[f]) : p.push(ve(h[f], h[f + 1], s[f], s[f + 1], r[o]));
    }
  return p;
}
function ou(h) {
  let s, r, o, f, p = 0, d = 0, _ = 0, y = 0, M = 0;
  for (s = 0; s < h.length; s++)
    r = h[s][0], o = h[s][1], f = h[s][2], M += f, p += f * r, _ += f * (r * r), d += f * o, y += f * (r * o);
  const b = (d * _ - p * y) / (M * _ - p * p);
  return [(M * y - p * d) / (M * _ - p * p), b];
}
function uu(h, s, r, o) {
  let f = 0, p = 0;
  const d = [];
  return r.forEach((_) => {
    for (; h[f] < _ - o; )
      f++;
    for (f > 0 && h[f] >= _ && f--; p < h.length - 1 && h[p + 1] <= _ + o; )
      p++;
    p < h.length - 1 && h[p] <= _ && p++;
    const y = Math.max(o, Math.abs(_ - h[f]) + 1e-3, Math.abs(_ - h[p]) + 1e-3), M = [];
    let b = 0;
    for (let m = f; m <= p; m++)
      b = (1 - (Math.abs(_ - h[m]) / y) ** 3) ** 3, M.push([h[m], s[m], b]);
    d.push(ou(M));
  }), d;
}
function vs(h, s, r) {
  return Nt(h, r) < Nt(s, r);
}
function g0(h, s, r) {
  return Nt(h, r) > Nt(s, r);
}
function me(h, s, r) {
  return Nt(h, r) <= Nt(s, r);
}
function Br(h, s, r) {
  return Nt(h, r) >= Nt(s, r);
}
function Be(h, s, r) {
  return Nt(h, r) === Nt(s, r);
}
const W0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: ve,
  interpArray: au,
  linearRegression: ou,
  req: Be,
  rgt: g0,
  rgte: Br,
  rlt: vs,
  rlte: me,
  round: Nt,
  wlslr: uu
}, Symbol.toStringTag, { value: "Module" }));
class Cn {
  constructor(s) {
    C(this, "_altitude", 1);
    C(this, "_grade", 1);
    C(this, "_terrain", 1);
    C(this, "_heat", 1);
    C(this, "_dark", 1);
    C(this, "_fatigue", 1);
    C(this, "_strategy", 1);
    C(this, "_combined");
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
class Qo {
  constructor(s, r, o) {
    C(this, "factors", new Cn());
    C(this, "point");
    C(this, "course");
    C(this, "loop");
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
const d0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function lu(h, s) {
  (s === null || typeof s > "u") && (s = d0);
  let r = 0;
  return Array.isArray(h) ? r = (h[0] + h[1]) / 2 : r = h, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const jo = {
  baseline: 0,
  terrainScale: 1
};
function _0(h, s) {
  function r(o) {
    return o < h.noon ? o + 86400 : o;
  }
  return s >= h.sunrise && s <= h.sunset ? 0 : !isNaN(h.dawn) && !isNaN(h.dusk) && (s <= h.dawn || s >= h.dusk) ? 1 : r(s) >= r(h.nadir) ? ve(
    r(isNaN(h.dawn) ? h.nadir : h.dawn),
    r(h.sunrise),
    1,
    0,
    r(s)
  ) : ve(
    r(h.sunset),
    r(isNaN(h.dusk) ? h.nadir : h.dusk),
    0,
    1,
    r(s)
  );
}
function fu(h, s, r, o = jo) {
  if (s === 1 || h >= r.sunrise && h <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = jo);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * f, d = _0(r, h);
  return 1 + p * d;
}
const v0 = {
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
function hu(h, s) {
  return (s === null || typeof s > "u") && (s = v0), h < s.lower.lim ? s.lower.m * h + s.lower.b : h > s.upper.lim ? s.upper.m * h + s.upper.b : s.a * h ** 2 + s.b * h + 1;
}
function cu(h, s) {
  if (!s) return 1;
  const r = h.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return o += s.baseline / 100, o;
}
function pu(h, s) {
  const r = q.findLast(s.terrain, (o) => me(o.percents[0] * s.dist, h.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const gu = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function ms(h) {
  const s = new Cn().init(0);
  return h.forEach(({ factors: r, dist: o }) => {
    s.applyEach((f, p) => f + o * p, r);
  }), s.scaleEach(1 / su.sumBy(h, "dist")), s;
}
function m0(h, s) {
  let r = 0, o = 0;
  return h.forEach((f, p) => {
    const d = p === h.length - 1 ? s : h[p + 1].onset, _ = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + _) * (d - f.onset), r += f.value;
  }), o / s;
}
function w0(h) {
  return h < 30 ? 2 : h < 60 ? 5 : h < 90 ? 10 : h < 120 ? 15 : 20;
}
function y0(h, s, r) {
  let o = -m0(s, r);
  return s.forEach((f, p) => {
    if (h >= f.onset) {
      if (f.type === "step")
        o += f.value;
      else if (f.type === "linear") {
        const d = p === s.length - 1 ? r : s[p + 1].onset;
        h > d ? o += f.value : o += f.value * (h - f.onset) / (d - f.onset);
      }
    }
  }), o;
}
class du {
  constructor(s, r) {
    C(this, "plan");
    C(this, "values");
    this.plan = s, this.values = r ? q.cloneDeep(r) : [{ onset: 0, value: w0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + y0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((o) => o.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function ds(h, s) {
  return s === void 0 ? h : (h - 1) * s + 1;
}
function ws(h, s) {
  h.factors || (h.factors = new Cn()), Object.assign(h.factors, {
    grade: hu(h.grade),
    altitude: lu(h.alt),
    terrain: pu(h, s)
  });
}
function Nr(h, s) {
  var r, o;
  if (h.factors || (h.factors = new Cn()), ws(h, s.course), s) {
    if (h.factors === void 0) throw new Error("no factors");
    h.factors.strategy = s.strategy.at(h.loc), Object.assign(h.factors, {
      heat: s.heatModel ? cu(h, s.heatModel) : 1,
      dark: s.event.sun ? fu(h.tod, h.factors.terrain, s.event.sun) : 1
    });
  }
  h.factors.altitude = ds(h.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), h.factors.dark = ds(h.factors.dark, (o = s.scales) == null ? void 0 : o.dark);
}
const B0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: du,
  applyScale: ds,
  generateCourseFactors: ws,
  generatePlanFactors: Nr,
  getAltitudeFactor: lu,
  getDarkFactor: fu,
  getGradeFactor: hu,
  getHeatFactor: cu,
  getTerrainFactor: pu,
  list: gu,
  rollup: ms
}, Symbol.toStringTag, { value: "Module" }));
function _u(h) {
  switch (h) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function Fr(h) {
  return typeof h == "number" && !isNaN(h);
}
function M0(h, s, r) {
  const o = h.filter(
    (p, d) => d >= h.findIndex((_) => _ === s) && d <= h.findIndex((_) => _ === r)
  ), f = o.map((p, d) => ({
    factors: p.factors,
    dist: d === o.length - 1 ? 0 : o[d + 1].loc - o[d].loc
  }));
  return f.pop(), ms(f);
}
class vu {
  constructor(s) {
    C(this, "point1");
    C(this, "point2");
    /**
     * elevation gain (m) over segment
     */
    C(this, "gain");
    /**
     * elevation loss (m) over segment
     */
    C(this, "loss");
    /**
     * average grade (%) over segment
     */
    C(this, "grade");
    /**
     * waypoint at end of segment
     */
    C(this, "waypoint");
    C(this, "_name");
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
class C0 extends vu {
  constructor(r, o) {
    super(o);
    C(this, "_course");
    C(this, "point1");
    C(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class b0 extends vu {
  constructor(r, o) {
    super(o);
    C(this, "_plan");
    C(this, "point1");
    C(this, "point2");
    C(this, "_factors");
    this._plan = r, this.point1 = o.point1, this.point2 = o.point2;
  }
  /**
   * moving pace (s/km) over segment
   */
  get pace() {
    return this.time ? this.time / this.dist : 0;
  }
  /**
   * delay (s) over segment
   */
  get delay() {
    if (!(!Fr(this.point1.elapsed) || !Fr(this.point2.elapsed) || !Fr(this.point1.time) || !Fr(this.point2.time)))
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
    if (!(!q.isNumber(this.point1.time) || !q.isNumber(this.point2.time)))
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
    return this._factors || (this._factors = M0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Kn("CourseSplits");
class S0 {
  constructor(s) {
    C(this, "_segments");
    C(this, "_miles");
    C(this, "_kilometers");
    C(this, "course");
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
    const r = _u(s), o = q.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var T;
    hs.extend("calcSegments")("exec");
    const o = this.course, f = o.points, p = [], d = [];
    let _, y, M = o.points[0], b;
    for (_ = 0, y = s.length; _ < y; _++) {
      const O = s[_];
      b && Be((T = s[_ - 1]) == null ? void 0 : T.end, O.start, 4) ? M = b : M = o.getPoint(O.start), b = o.getPoint(O.end);
      const F = O.end - O.start, E = new C0(this.course, {
        gain: 0,
        loss: 0,
        grade: F > 0 ? (b.alt - M.alt) / F / 10 * (b.alt - M.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: M,
        point2: b
      }), N = new Cn().init(0);
      p.push(E), d.push(N);
    }
    const m = (O, F, E, N) => {
      const K = E.alt - F.alt;
      O[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), ws(F, o);
      const Y = E.loc - F.loc;
      N.applyEach((X, et) => X + et * Y, F.factors);
    };
    _ = 1;
    for (let O = 0; O < p.length; O++) {
      const F = p[O], E = d[O];
      for (; me(f[_].loc, F.point1.loc, 4); ) _++;
      let N = F.point1;
      for (; _ < f.length && me(f[_].loc, F.point2.loc, 4); ) {
        const K = f[_];
        m(F, N, K, E), N = K, _++;
      }
      m(F, N, F.point2, E);
    }
    return p;
  }
}
var mu = {};
(function(h) {
  h.parseDMS = function(r) {
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
  }, h.toDMS = function(r, o, f) {
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
        var p = (r * 60).toFixed(f), _ = Math.floor(p / 60), y = (p % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), dms = _ + "°" + y + "′";
        break;
      case "dms":
        var d = (r * 3600).toFixed(f), _ = Math.floor(d / 3600), y = Math.floor(d / 60) % 60, M = (d % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = _ + "°" + y + "′" + M + "″";
        break;
    }
    return dms;
  }, h.toLat = function(r, o, f) {
    var p = h.toDMS(r, o, f);
    return p == null ? "." : p.slice(1) + (r < 0 ? "S" : "N");
  }, h.toLon = function(r, o, f) {
    var p = h.toDMS(r, o, f);
    return p == null ? "." : p + (r < 0 ? "W" : "E");
  }, h.toBrng = function(r, o, f) {
    r = (Number(r) + 360) % 360;
    var p = h.toDMS(r, o, f);
    return p == null ? "." : p.replace("360", "0");
  };
  var s = 6371;
  h.latlon = function(r, o) {
    this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN;
  }, h.latlon.prototype.distanceTo = function(r, o) {
    typeof o > "u" && (o = 4);
    var f = this.distanceRadTo(r), p = s * f;
    return p.toPrecisionFixed(o);
  }, h.latlon.prototype.distanceRadTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), _ = p - o, y = d - f, M = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(o) * Math.cos(p) * Math.sin(y / 2) * Math.sin(y / 2), b = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
    return b;
  }, h.latlon.prototype.bearingTo = function(r) {
    var o = this.bearingRadTo(r);
    return (o.toDeg() + 360) % 360;
  }, h.latlon.prototype.bearingRadTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), y = Math.atan2(_, d);
    return y;
  }, h.latlon.prototype.finalBearingTo = function(r) {
    var o = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(f), _ = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), y = Math.atan2(d, _);
    return (y.toDeg() + 180) % 360;
  }, h.latlon.prototype.midpointTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), y = this.lng.toRad(), M = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + d) * (Math.cos(o) + d) + _ * _)), b = y + Math.atan2(_, Math.cos(o) + d);
    return b = (b + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new h.latlon(M.toDeg(), b.toDeg());
  }, h.midpoint = function(r) {
    var o = 0, f = 0, p = 0;
    for (var d in r) {
      var _ = r[d], y = _.lat * Math.PI / 180, M = _.lng * Math.PI / 180, b = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), T = Math.sin(y);
      o += b, f += m, p += T;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var O = Math.atan2(f, o), F = Math.sqrt(o * o + f * f), E = Math.atan2(p, F);
    return new h.latlon(E * 180 / Math.PI, O * 180 / Math.PI);
  }, h.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var y = Math.sin(d), M = Math.cos(d), b = [], m = 0; m < o; m++) {
      var T = 1 / (o - 1) * m, O = f * T, F = Math.sin(O), E = Math.cos(O), N = Math.asin(y * E + M * F * Math.cos(p)), K = _ + Math.atan2(Math.sin(p) * F * M, E - y * Math.sin(N)), Y = N.toDeg(), X = K.toDeg();
      for (Y > 90 && (Y = 90), Y < -90 && (Y = -90); X > 180; ) X -= 360;
      for (; X <= -180; ) X += 360;
      b.push(new h.latlon(Y, X));
    }
    return b;
  }, h.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / s, r = r.toRad();
    var f = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), _ = p + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(f),
      Math.cos(o) - Math.sin(f) * Math.sin(d)
    );
    return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new h.latlon(d.toDeg(), _.toDeg());
  }, h.latlon.intersection = function(r, o, f, p) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
    var d = r.lat.toRad(), _ = r.lng.toRad(), y = f.lat.toRad(), M = f.lng.toRad(), b = o.toRad(), m = p.toRad(), T = y - d, O = M - _, F = 2 * Math.asin(Math.sqrt(Math.sin(T / 2) * Math.sin(T / 2) + Math.cos(d) * Math.cos(y) * Math.sin(O / 2) * Math.sin(O / 2)));
    if (F == 0) return null;
    var E = Math.acos((Math.sin(y) - Math.sin(d) * Math.cos(F)) / (Math.sin(F) * Math.cos(d)));
    isNaN(E) && (E = 0);
    var N = Math.acos((Math.sin(d) - Math.sin(y) * Math.cos(F)) / (Math.sin(F) * Math.cos(y)));
    if (Math.sin(M - _) > 0)
      var K = E, Y = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - E, Y = N;
    var X = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (Y - m + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(X) == 0 && Math.sin(et) == 0 || Math.sin(X) * Math.sin(et) < 0) return null;
    var St = Math.acos(-Math.cos(X) * Math.cos(et) + Math.sin(X) * Math.sin(et) * Math.cos(F)), At = Math.atan2(
      Math.sin(F) * Math.sin(X) * Math.sin(et),
      Math.cos(et) + Math.cos(X) * Math.cos(St)
    ), It = Math.asin(Math.sin(d) * Math.cos(At) + Math.cos(d) * Math.sin(At) * Math.cos(b)), Ht = Math.atan2(
      Math.sin(b) * Math.sin(At) * Math.cos(d),
      Math.cos(At) - Math.sin(d) * Math.sin(It)
    ), jt = _ + Ht;
    return jt = (jt + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new h.latlon(It.toDeg(), jt.toDeg());
  }, h.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = s, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), M = isFinite(d / y) ? d / y : Math.cos(f);
    Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
    var b = Math.sqrt(d * d + M * M * _ * _) * o;
    return b.toPrecisionFixed(4);
  }, h.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
    var _ = Math.atan2(p, d);
    return (_.toDeg() + 360) % 360;
  }, h.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var f = s, p = parseFloat(o) / f, d = this.lat.toRad(), _ = this.lng.toRad();
    r = r.toRad();
    var y = p * Math.cos(r);
    Math.abs(y) < 1e-10 && (y = 0);
    var M = d + y, b = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(y / b) ? y / b : Math.cos(d), T = p * Math.sin(r) / m;
    Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
    var O = (_ + T + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new h.latlon(M.toDeg(), O.toDeg());
  }, h.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
    Math.abs(d - f) > Math.PI && (f += 2 * Math.PI);
    var _ = (o + p) / 2, y = Math.tan(Math.PI / 4 + o / 2), M = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + _ / 2), m = ((d - f) * Math.log(b) + f * Math.log(M) - d * Math.log(y)) / Math.log(M / y);
    return isFinite(m) || (m = (f + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new h.latlon(_.toDeg(), m.toDeg());
  }, h.latlon.prototype.lat = function(r, o) {
    return typeof r > "u" ? this.lat : h.toLat(this.lat, r, o);
  }, h.latlon.prototype.lon = function(r, o) {
    return typeof r > "u" ? this.lng : h.toLon(this.lng, r, o);
  }, h.latlon.prototype.toString = function(r, o) {
    return typeof r > "u" && (r = "dms"), h.toLat(this.lat, r, o) + ", " + h.toLon(this.lng, r, o);
  }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
  }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
    var o = this.toPrecision(r);
    return o = o.replace(/(.+)e\+(.+)/, function(f, p, d) {
      p = p.replace(/\./, "");
      for (var _ = p.length - 1; d-- > _; ) p = p + "0";
      return p;
    }), o = o.replace(/(.+)e-(.+)/, function(f, p, d) {
      for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
      return "0." + p;
    }), o;
  }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  });
})(mu);
class wu {
  constructor(s, r, o) {
    C(this, "alt");
    C(this, "lat");
    C(this, "lon");
    this.lat = s, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new mu.latlon(this.lat, this.lon);
  }
}
class yu extends wu {
  constructor(r, o, f, p, d) {
    super(r, o, f);
    C(this, "loc");
    C(this, "grade");
    this.loc = p, this.grade = d;
  }
}
function Mu(h, s, r) {
  if (h.loc > s.loc && r > h.loc || s.loc > h.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(h.loc - r), f = h.latlon.bearingTo(s.latlon), { lat: p, lng: d } = h.latlon.destinationPoint(f, o), _ = h.grade, y = ve(h.loc, s.loc, h.alt, s.alt, r);
  return new yu(p, d, y, r, _);
}
function x0(h, s) {
  return (typeof h == "object" ? String(h.id) : h) === (typeof s == "object" ? String(s.id) : s);
}
function _s(h, s) {
  return !!(h && s && x0(h.site, s.site) && h.loop === s.loop);
}
class tu {
  constructor(s, r = 1) {
    C(this, "_data");
    C(this, "loop");
    C(this, "site");
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
    if (!q.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
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
    return s.find((r) => r.waypoint && _s(this, r.waypoint));
  }
}
const Lr = Kn("models:Waypoint");
class cs {
  constructor(s, r) {
    C(this, "_waypoints");
    C(this, "_lat", NaN);
    C(this, "_lon", NaN);
    C(this, "_alt", NaN);
    C(this, "_data");
    C(this, "course");
    C(this, "cutoffs", []);
    C(this, "id");
    C(this, "name");
    C(this, "tier", 1);
    C(this, "type");
    C(this, "description");
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Lr(`constructor: ${this.name}`);
  }
  clearCache() {
    Lr(`clearCache: ${this.name}`), delete this._waypoints, this._lat = NaN, this._lon = NaN, this._alt = NaN;
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
    return this._waypoints ? this._waypoints : (Lr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new tu(this, this.course.loops)] : this._waypoints = q.range(this.course.loops).map((s) => new tu(this, s + 1)), this._waypoints);
  }
  get lat() {
    return q.isNaN(this._lat) && this.refreshLLA(), this._lat;
  }
  get lon() {
    return q.isNaN(this._lon) && this.refreshLLA(), this._lon;
  }
  get alt() {
    return q.isNaN(this._alt) && this.refreshLLA(), this._alt;
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    Lr("refreshLLA");
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
}
var Cu = { exports: {} };
(function(h, s) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, _ = Math.atan2, y = Math.acos, M = r / 180, b = 1e3 * 60 * 60 * 24, m = 2440588, T = 2451545;
    function O(L) {
      return L.valueOf() / b - 0.5 + m;
    }
    function F(L) {
      return new Date((L + 0.5 - m) * b);
    }
    function E(L) {
      return O(L) - T;
    }
    var N = M * 23.4397;
    function K(L, $) {
      return _(o(L) * f(N) - p($) * o(N), f(L));
    }
    function Y(L, $) {
      return d(o($) * f(N) + f($) * o(N) * o(L));
    }
    function X(L, $, G) {
      return _(o(L), f(L) * o($) - p(G) * f($));
    }
    function et(L, $, G) {
      return d(o($) * o(G) + f($) * f(G) * f(L));
    }
    function St(L, $) {
      return M * (280.16 + 360.9856235 * L) - $;
    }
    function At(L) {
      return L < 0 && (L = 0), 2967e-7 / Math.tan(L + 312536e-8 / (L + 0.08901179));
    }
    function It(L) {
      return M * (357.5291 + 0.98560028 * L);
    }
    function Ht(L) {
      var $ = M * (1.9148 * o(L) + 0.02 * o(2 * L) + 3e-4 * o(3 * L)), G = M * 102.9372;
      return L + $ + G + r;
    }
    function jt(L) {
      var $ = It(L), G = Ht($);
      return {
        dec: Y(G, 0),
        ra: K(G, 0)
      };
    }
    var qt = {};
    qt.getPosition = function(L, $, G) {
      var ht = M * -G, nt = M * $, ct = E(L), ot = jt(ct), lt = St(ct, ht) - ot.ra;
      return {
        azimuth: X(lt, nt, ot.dec),
        altitude: et(lt, nt, ot.dec)
      };
    };
    var we = qt.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    qt.addTime = function(L, $, G) {
      we.push([L, $, G]);
    };
    var Ue = 9e-4;
    function Ur(L, $) {
      return Math.round(L - Ue - $ / (2 * r));
    }
    function ye(L, $, G) {
      return Ue + (L + $) / (2 * r) + G;
    }
    function $e(L, $, G) {
      return T + L + 53e-4 * o($) - 69e-4 * o(2 * G);
    }
    function $r(L, $, G) {
      return y((o(L) - o($) * o(G)) / (f($) * f(G)));
    }
    function bn(L) {
      return -2.076 * Math.sqrt(L) / 60;
    }
    function _n(L, $, G, ht, nt, ct, ot) {
      var lt = $r(L, G, ht), yt = ye(lt, $, nt);
      return $e(yt, ct, ot);
    }
    qt.getTimes = function(L, $, G, ht) {
      ht = ht || 0;
      var nt = M * -G, ct = M * $, ot = bn(ht), lt = E(L), yt = Ur(lt, nt), Kt = ye(0, nt, yt), Ft = It(Kt), Wt = Ht(Ft), vn = Y(Wt, 0), _t = $e(Kt, Ft, Wt), Lt, kn, Mt, Bt, hn, tn, pt = {
        solarNoon: F(_t),
        nadir: F(_t - 0.5)
      };
      for (Lt = 0, kn = we.length; Lt < kn; Lt += 1)
        Mt = we[Lt], Bt = (Mt[0] + ot) * M, hn = _n(Bt, nt, ct, vn, yt, Ft, Wt), tn = _t - (hn - _t), pt[Mt[1]] = F(tn), pt[Mt[2]] = F(hn);
      return pt;
    };
    function Ge(L) {
      var $ = M * (218.316 + 13.176396 * L), G = M * (134.963 + 13.064993 * L), ht = M * (93.272 + 13.22935 * L), nt = $ + M * 6.289 * o(G), ct = M * 5.128 * o(ht), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ct),
        dec: Y(nt, ct),
        dist: ot
      };
    }
    qt.getMoonPosition = function(L, $, G) {
      var ht = M * -G, nt = M * $, ct = E(L), ot = Ge(ct), lt = St(ct, ht) - ot.ra, yt = et(lt, nt, ot.dec), Kt = _(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return yt = yt + At(yt), {
        azimuth: X(lt, nt, ot.dec),
        altitude: yt,
        distance: ot.dist,
        parallacticAngle: Kt
      };
    }, qt.getMoonIllumination = function(L) {
      var $ = E(L || /* @__PURE__ */ new Date()), G = jt($), ht = Ge($), nt = 149598e3, ct = y(o(G.dec) * o(ht.dec) + f(G.dec) * f(ht.dec) * f(G.ra - ht.ra)), ot = _(nt * o(ct), ht.dist - nt * f(ct)), lt = _(f(G.dec) * o(G.ra - ht.ra), o(G.dec) * f(ht.dec) - f(G.dec) * o(ht.dec) * f(G.ra - ht.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function Sn(L, $) {
      return new Date(L.valueOf() + $ * b / 24);
    }
    qt.getMoonTimes = function(L, $, G, ht) {
      var nt = new Date(L);
      ht ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ct = 0.133 * M, ot = qt.getMoonPosition(nt, $, G).altitude - ct, lt, yt, Kt, Ft, Wt, vn, _t, Lt, kn, Mt, Bt, hn, tn, pt = 1; pt <= 24 && (lt = qt.getMoonPosition(Sn(nt, pt), $, G).altitude - ct, yt = qt.getMoonPosition(Sn(nt, pt + 1), $, G).altitude - ct, Wt = (ot + yt) / 2 - lt, vn = (yt - ot) / 2, _t = -vn / (2 * Wt), Lt = (Wt * _t + vn) * _t + lt, kn = vn * vn - 4 * Wt * lt, Mt = 0, kn >= 0 && (tn = Math.sqrt(kn) / (Math.abs(Wt) * 2), Bt = _t - tn, hn = _t + tn, Math.abs(Bt) <= 1 && Mt++, Math.abs(hn) <= 1 && Mt++, Bt < -1 && (Bt = hn)), Mt === 1 ? ot < 0 ? Kt = pt + Bt : Ft = pt + Bt : Mt === 2 && (Kt = pt + (Lt < 0 ? hn : Bt), Ft = pt + (Lt < 0 ? Bt : hn)), !(Kt && Ft)); pt += 2)
        ot = yt;
      var mn = {};
      return Kt && (mn.rise = Sn(nt, Kt)), Ft && (mn.set = Sn(nt, Ft)), !Kt && !Ft && (mn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
    }, h.exports = qt;
  })();
})(Cu);
var nu = Cu.exports;
function qn(h, s) {
  const r = h.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class A0 {
  constructor(s) {
    C(this, "nadir", 0);
    C(this, "dawn", 0);
    C(this, "sunrise", 0);
    C(this, "dusk", 0);
    C(this, "sunset", 0);
    C(this, "noon", 0);
    C(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class bu {
  constructor(s, r, o, f) {
    C(this, "start");
    C(this, "lat");
    C(this, "lon");
    C(this, "timezone");
    C(this, "sun");
    C(this, "startTime");
    this.start = s, this.lat = o, this.lon = f, this.timezone = r;
    const p = nu.getTimes(this.start, this.lat, this.lon), d = nu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new A0({
      nadir: qn(p.nadir, this.timezone),
      dawn: qn(p.dawn, this.timezone),
      sunrise: qn(p.sunrise, this.timezone),
      dusk: qn(p.dusk, this.timezone),
      sunset: qn(p.sunset, this.timezone),
      noon: qn(p.solarNoon, this.timezone),
      nadirAltitude: d.altitude * 180 / Math.PI
    }), this.startTime = qn(this.start, this.timezone);
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
}
const kr = Kn("models:Course"), I0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class U0 {
  constructor(s, r) {
    C(this, "_data");
    C(this, "_cutoffs");
    C(this, "_cutoffsVersion");
    C(this, "_dist");
    C(this, "_distVersion");
    C(this, "_event");
    C(this, "_eventVersion");
    C(this, "_gain");
    C(this, "_gainVersion");
    C(this, "_loss");
    C(this, "_lossVersion");
    /**
     * Course name
     */
    C(this, "name");
    C(this, "_sites", [
      new cs(this, {
        id: String(q.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new cs(this, {
        id: String(q.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ]);
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    C(this, "version", 0);
    C(this, "_waypoints");
    C(this, "_track");
    C(this, "_points");
    C(this, "_terrain");
    C(this, "_splits");
    // calculate max and min values along course
    C(this, "_stats");
    this._track = s, this._data = r, this.version = 1;
  }
  /**
   * Course cutoffs
   */
  get cutoffs() {
    return this._cutoffsVersion === this.version && this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new P0(s)), this._cutoffsVersion = this.version, this._cutoffs);
  }
  /**
   * Total distance of course (in km)
   */
  get dist() {
    return this._distVersion == this.version && this._dist ? this._dist : (this._dist = this._data.dist || this.track.dist * this.loops, this._distVersion = this.version, this._dist);
  }
  /**
   * Distance scale of course (in km), relative to calculated track distance
   */
  get distScale() {
    return this._data.dist ? this._data.dist / (this.track.dist * this.loops) : 1;
  }
  /**
   * Event object
   */
  get event() {
    if (this._event && this._eventVersion === this.version) return this._event;
    if (this._eventVersion = this.version, this._data.start)
      return this._event = new bu(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      );
  }
  /**
   * Total gain of course (in meters)
   */
  get gain() {
    return this._gainVersion == this.version && this._gain ? this._gain : (this._gain = this._data.gain || this.track.gain * this.loops, this._gainVersion = this.version, this._gain);
  }
  /**
   * Gain scale of course (in meters), relative to calculated track gain
   */
  get gainScale() {
    return this._data.gain ? this._data.gain / (this.track.gain * this.loops) : 1;
  }
  /**
   * Distance of each loop (in km)
   */
  get loopDist() {
    return this.dist / this.loops;
  }
  /**
   * Gain of each loop (in meters)
   */
  get loopGain() {
    return this.gain / this.loops;
  }
  /**
   * Loss of each loop (in meters)
   */
  get loopLoss() {
    return this.loss / this.loops;
  }
  /**
   * Number of loops for the track
   */
  get loops() {
    return this._data.loops || 1;
  }
  /**
   * Total loss of course (in meters)
   */
  get loss() {
    return this._lossVersion == this.version && this._loss ? this._loss : (this._loss = this._data.loss || this.track.loss * this.loops, this._lossVersion = this.version, this._loss);
  }
  /**
   * Loss scale of course (in meters), relative to calculated track loss
   */
  get lossScale() {
    return this._data.loss ? this._data.loss / (this.track.loss * this.loops) : 1;
  }
  get sites() {
    return this._sites;
  }
  set sites(s) {
    this._sites = s.map((r) => new cs(this, r)), this.clearCache(1);
  }
  update(s) {
    Object.assign(this._data, s), this.version++;
  }
  /**
   * @deprecated
   */
  clearCache(s = 1) {
    kr(`clearCache-${s}`), delete this._splits, delete this._stats, delete this._terrain, delete this._waypoints, s === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
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
    if (this._points) return this._points;
    kr("generating points array"), this._points = new Array(this.track.points.length * this.loops);
    for (let s = 0; s < this.loops; s++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + s * this.track.points.length] = new Qo(
          this,
          this.track.points[r],
          s
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
    const o = this.points.findIndex((M) => Br(M.loc, s, 4)), f = this.points[o];
    if (Be(f.loc, s, 4)) return f;
    kr(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = o - 1, d = this.points[p], _ = Mu(d.point, f.point, s % this.loopDist / this.distScale), y = new Qo(this, _, Math.floor(s / this.loopDist));
    return r && this.points.splice(o, 0, y), y;
  }
  get terrain() {
    return this._terrain || [];
  }
  set terrain(s) {
    if (!s) {
      this._terrain = [];
      return;
    }
    s = [...s], s.sort((r, o) => r.percent - o.percent), this._terrain = s.map((r, o) => {
      var _, y;
      const f = q.isNumber(r.value) ? r.value : q.isString(r.value) ? ((_ = I0.find((M) => M.type === r.value)) == null ? void 0 : _.value) || 0 : r.value.value, p = typeof r == "string" ? r : q.isObject(r.value) ? r.value.type : void 0;
      return {
        value: f,
        type: p,
        percents: [r.percent, ((y = s[o + 1]) == null ? void 0 : y.percent) || 1]
      };
    });
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new S0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    kr("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), o = this.terrain.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: q.sum(
          this.track.points.map((d, _) => {
            var y;
            return d.alt * (d.loc - (((y = this.track.points[_ - 1]) == null ? void 0 : y.loc) || 0));
          })
        ) / this.track.dist,
        max: q.max(s) || 0,
        min: q.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: q.max(r) || 0,
        min: q.min(r) || 0
      },
      terrain: {
        avg: (q.sumBy(this.terrain, (d) => (d.percents[1] - d.percents[0]) * this.dist * d.value) / this.dist + 100) / 100,
        max: q.max(o) || 0,
        min: q.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrain.reduce(
      (_, y) => y.value / 100 + 1 === d ? _ + (y.percents[1] - y.percents[0]) * this.dist : _,
      0
    );
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(s) {
    const r = s.filter((f) => f > 0 && vs(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class P0 {
  constructor(s) {
    C(this, "waypoint");
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
var Wr = {};
(function(h) {
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
      return f(d(_), arguments);
    }
    function o(_, y) {
      return r.apply(null, [_].concat(y || []));
    }
    function f(_, y) {
      var M = 1, b = _.length, m, T = "", O, F, E, N, K, Y, X, et;
      for (O = 0; O < b; O++)
        if (typeof _[O] == "string")
          T += _[O];
        else if (typeof _[O] == "object") {
          if (E = _[O], E.keys)
            for (m = y[M], F = 0; F < E.keys.length; F++) {
              if (m == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[F], E.keys[F - 1]));
              m = m[E.keys[F]];
            }
          else E.param_no ? m = y[E.param_no] : m = y[M++];
          if (s.not_type.test(E.type) && s.not_primitive.test(E.type) && m instanceof Function && (m = m()), s.numeric_arg.test(E.type) && typeof m != "number" && isNaN(m))
            throw new TypeError(r("[sprintf] expecting number but found %T", m));
          switch (s.number.test(E.type) && (X = m >= 0), E.type) {
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
              m = JSON.stringify(m, null, E.width ? parseInt(E.width) : 0);
              break;
            case "e":
              m = E.precision ? parseFloat(m).toExponential(E.precision) : parseFloat(m).toExponential();
              break;
            case "f":
              m = E.precision ? parseFloat(m).toFixed(E.precision) : parseFloat(m);
              break;
            case "g":
              m = E.precision ? String(Number(m.toPrecision(E.precision))) : parseFloat(m);
              break;
            case "o":
              m = (parseInt(m, 10) >>> 0).toString(8);
              break;
            case "s":
              m = String(m), m = E.precision ? m.substring(0, E.precision) : m;
              break;
            case "t":
              m = String(!!m), m = E.precision ? m.substring(0, E.precision) : m;
              break;
            case "T":
              m = Object.prototype.toString.call(m).slice(8, -1).toLowerCase(), m = E.precision ? m.substring(0, E.precision) : m;
              break;
            case "u":
              m = parseInt(m, 10) >>> 0;
              break;
            case "v":
              m = m.valueOf(), m = E.precision ? m.substring(0, E.precision) : m;
              break;
            case "x":
              m = (parseInt(m, 10) >>> 0).toString(16);
              break;
            case "X":
              m = (parseInt(m, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          s.json.test(E.type) ? T += m : (s.number.test(E.type) && (!X || E.sign) ? (et = X ? "+" : "-", m = m.toString().replace(s.sign, "")) : et = "", K = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", Y = E.width - (et + m).length, N = E.width && Y > 0 ? K.repeat(Y) : "", T += E.align ? et + m + N : K === "0" ? et + N + m : N + et + m);
        }
      return T;
    }
    var p = /* @__PURE__ */ Object.create(null);
    function d(_) {
      if (p[_])
        return p[_];
      for (var y = _, M, b = [], m = 0; y; ) {
        if ((M = s.text.exec(y)) !== null)
          b.push(M[0]);
        else if ((M = s.modulo.exec(y)) !== null)
          b.push("%");
        else if ((M = s.placeholder.exec(y)) !== null) {
          if (M[2]) {
            m |= 1;
            var T = [], O = M[2], F = [];
            if ((F = s.key.exec(O)) !== null)
              for (T.push(F[1]); (O = O.substring(F[0].length)) !== ""; )
                if ((F = s.key_access.exec(O)) !== null)
                  T.push(F[1]);
                else if ((F = s.index_access.exec(O)) !== null)
                  T.push(F[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            M[2] = T;
          } else
            m |= 2;
          if (m === 3)
            throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          b.push(
            {
              placeholder: M[0],
              param_no: M[1],
              keys: M[2],
              sign: M[3],
              pad_char: M[4],
              align: M[5],
              width: M[6],
              precision: M[7],
              type: M[8]
            }
          );
        } else
          throw new SyntaxError("[sprintf] unexpected placeholder");
        y = y.substring(M[0].length);
      }
      return p[_] = b;
    }
    h.sprintf = r, h.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(Wr);
const E0 = Kn("PaceChunk");
class T0 {
  constructor() {
    C(this, "iterations", !1);
    C(this, "factor", !1);
    C(this, "target", !1);
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
class eu {
  constructor(s, r, o, f) {
    C(this, "constraints");
    C(this, "points");
    C(this, "plan");
    C(this, "delay");
    C(this, "factor");
    C(this, "factors", new Cn());
    C(this, "status");
    this.constraints = o, this.points = r, this.plan = s, this.delay = f, this.factor = 1;
  }
  get elapsed() {
    const s = q.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (q.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
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
    s[0].elapsed = q.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - q.sum(this.plan.pacing.chunks.filter((M) => M.points[0].loc < s[0].loc).map((M) => M.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, o = s[0].delay || 0, f = 0, p = 0, d = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, b = s.length; M < b; M++) {
      f = s[M].loc - s[M - 1].loc, Nr(s[M - 1], this.plan), y.applyEach((T, O) => T + O * f, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * f, p = _ * m * f, s[M].time = s[M - 1].time + p, o = s[M - 1].delay || 0, r += p + o, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Nr(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = E0.extend(
      Wr.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const d = new T0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !q.round(f - this.factor, 10), f = this.factor, d.target = Math.abs(
      (q.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(Wr.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const fn = Kn("Pacing");
class R0 {
  constructor(s) {
    C(this, "chunks", []);
    C(this, "plan");
    C(this, "_factor");
    C(this, "_factors");
    /**
     * last time this pacing was updated
     */
    C(this, "version");
    this.plan = s;
  }
  clearCache() {
    fn("clearCache"), delete this._factor, delete this._factors;
  }
  get elapsed() {
    return fn("elapsed:get"), this.plan.points[this.plan.points.length - 1].elapsed;
  }
  get pace() {
    return fn("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._factor ? this._factor : (fn("factor:update"), this.chunks && (this._factor = q.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return fn("factors:get"), this._factors || (fn("factors:update"), this._factors = ms(this.chunks)), this._factors;
  }
  /**
   * check if this pacing is current
   */
  get isCurrent() {
    return this.version === this.plan.version;
  }
  get np() {
    return fn("np:get"), this.pace / this.factor;
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
    var o, f;
    const s = fn.extend("calculate");
    s("exec"), s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (o = this.plan.course.terrain) == null || o.forEach(
      (p) => this.plan.getPoint(p.percents[0] * this.plan.course.dist, !0)
    ), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint(p.loc, !0);
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      p.delay = 0;
    }), (f = this.plan.delays) == null || f.forEach((p) => {
      const d = this.plan.getPoint(p.loc, !0);
      d.delay = p.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...q.reverse([...this.plan.cutoffs]), null].forEach((p) => {
      for (; this.chunks.find((d) => !d.status); )
        this.calcChunks(), this.validateChunks();
      if (!p) return !0;
      if (p.point.elapsed - p.time > 0.5) {
        s(`cutoff at ${p.loc} missed`);
        const d = this.chunks[0];
        q.last(d.points) === p.point ? (s(`setting cutoff at ${p.loc}`), d.constraints = [0, p.time], delete d.status) : this.splitChunk(d, p.point, p.time);
      }
    }), q.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), fn(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.version = this.plan.version;
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
    this.chunks = [new eu(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    fn("calcChunks"), this.clearCache(), this.chunks.filter((s) => !s.status).forEach((s) => s.calculate());
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
    fn.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((y) => y === r), d = q.round(r.elapsed - r.time), _ = new eu(this.plan, s.points.slice(0, p + 1), [0, o], d);
    _.points.filter((y, M) => M < _.points.length - 1).forEach((y) => {
      y._chunk = _;
    }), this.chunks.unshift(_), s.constraints[0] = o, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const o = this.chunks.findIndex((p) => p === s), f = this.chunks.findIndex((p) => p === r);
    if (f - o !== 1) throw new Error("chunks must be sequential");
    fn(Wr.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class ru {
  constructor(s, r) {
    C(this, "factors", new Cn());
    C(this, "_chunk");
    C(this, "_plan");
    C(this, "_point");
    C(this, "elapsed");
    C(this, "time");
    C(this, "tod");
    C(this, "delay");
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
class F0 {
  constructor(s) {
    C(this, "plan");
    C(this, "_segments");
    C(this, "_segmentsVersion");
    C(this, "_miles");
    C(this, "_milesVersion");
    C(this, "_kilometers");
    C(this, "_kilometersVersion");
    this.plan = s;
  }
  get segments() {
    return this._segments && this._segmentsVersion === this.plan.version ? this._segments : (this._segments = this.createSegments(), this._segmentsVersion = this.plan.version, this._segments);
  }
  set segments(s) {
    this._segments = s;
  }
  get miles() {
    return this._miles && this._milesVersion === this.plan.version ? this._miles : (this._miles = this.createSplits("miles"), this._milesVersion = this.plan.version, this._miles);
  }
  set miles(s) {
    this._miles = s;
  }
  get kilometers() {
    return this._kilometers && this._kilometersVersion === this.plan.version ? this._kilometers : (this._kilometers = this.createSplits("kilometers"), this._kilometersVersion = this.plan.version, this._kilometers);
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
    const r = _u(s), o = q.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var O;
    ps.extend("calcSegments")("exec"), this.plan.checkPacing();
    const o = this.plan, f = o.course, p = o.points, d = [], _ = [];
    let y, M, b = o.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const F = s[y];
      m && Be((O = s[y - 1]) == null ? void 0 : O.end, F.start, 4) ? b = m : b = o.getPoint(F.start), m = o.getPoint(F.end);
      const E = F.end - F.start, N = new b0(this.plan, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (m.alt - b.alt) / E / 10 * (m.alt - b.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: b,
        point2: m
      }), K = new Cn().init(0);
      d.push(N), _.push(K);
    }
    const T = (F, E, N, K) => {
      const Y = N.alt - E.alt;
      F[Y > 0 ? "gain" : "loss"] += Y * (Y > 0 ? f.gainScale : f.lossScale), Nr(E, o);
      const X = N.loc - E.loc;
      K.applyEach((et, St) => et + St * X, E.factors);
    };
    y = 1;
    for (let F = 0; F < d.length; F++) {
      const E = d[F], N = _[F];
      for (; me(p[y].loc, E.point1.loc, 4); ) y++;
      let K = E.point1;
      for (; y < p.length && me(p[y].loc, E.point2.loc, 4); ) {
        const Y = p[y];
        T(E, K, Y, N), K = Y, y++;
      }
      T(E, K, E.point2, N), o && (E.delay = o.delays.filter((Y) => Br(E.point1.loc, Y.loc, 4) && vs(E.point2.loc, Y.loc, 4)).reduce((Y, X) => Y + X.delay, 0));
    }
    return d;
  }
}
const Hn = Kn("models:Plan");
class $0 {
  constructor(s, r) {
    C(this, "_data");
    C(this, "course");
    C(this, "_cutoffs");
    C(this, "_cutoffsVersion");
    C(this, "_delays");
    C(this, "_delaysVersion");
    C(this, "_event");
    C(this, "_eventVersion");
    C(this, "_events");
    C(this, "_eventsVersion");
    C(this, "_heatModel");
    C(this, "_heatModelVersion");
    C(this, "pacing", new R0(this));
    C(this, "points");
    C(this, "_scales");
    C(this, "_scalesVersion");
    /**
     * splits
     */
    C(this, "splits", new F0(this));
    C(this, "_stats");
    C(this, "_statsVersion");
    C(this, "_strategy");
    C(this, "_strategyVersion");
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    C(this, "_version", 0);
    this.course = s, this._data = r, this.points = this.course.points.map((o) => new ru(this, o)), this._version = 1;
  }
  get cutoffMargin() {
    return this._data.cutoffMargin;
  }
  /**
   * cutoffs array is calculated on get as a combination of the course cutoffs and the plan points
   * gets re-calculated if the course or plan version changes
   */
  get cutoffs() {
    if (this._cutoffs && this._cutoffsVersion === this.version) return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new k0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this._cutoffs.length - 1 >= s; ) {
      const r = this._cutoffs[s];
      this._cutoffs.find((o, f) => f > s && o.time <= r.time) ? (Hn(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(s, 1)) : s++;
    }
    return this._cutoffsVersion = this.version, this._cutoffs;
  }
  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return q.sumBy(this.delays, "delay");
  }
  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   * gets re-calculated if the course or plan version changes
   */
  get delays() {
    if (this._delays && this._delaysVersion === this.version) return this._delays;
    const s = this.course.waypoints.map((o) => {
      var d;
      const f = (d = this._data.delays) == null ? void 0 : d.find((_) => _s(_.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new L0(o, p);
    }).filter((o) => o.delay > 0).sort((o, f) => o.loc - f.loc);
    let r = 0;
    for (; s.length - 1 >= r; )
      r > 0 && s[r].loc === s[r - 1].loc ? (Hn(`get delays: merging delay at ${s[r].loc} km`), s[r - 1].delay += s[r].delay, s.splice(r, 1)) : r++;
    return this._delays = s, this._delaysVersion = this.version, this._delays;
  }
  /**
   * Event object
   * gets re-calculated if the course or plan version changes
   */
  get event() {
    if (this._event && this._eventVersion === this.version) return this._event;
    if (this._eventVersion = this.version, this._data.start)
      return this._event = new bu(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      );
    if (this.course.event) return this._event = this.course.event;
    throw new Error("Start date/timezone is required for either the plan or the course");
  }
  get events() {
    if (this._events && this._eventsVersion === this.version) return this._events;
    Hn("calculating events.sun");
    const s = [], r = this.event.elapsedToTimeOfDay(0), o = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < o; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((y) => {
        const M = y.time - r + 86400 * d;
        M >= 0 && M <= this.points[this.points.length - 1].elapsed && s.push({ event: y.event, elapsed: M });
      });
    s.sort((d, _) => d.elapsed - _.elapsed);
    const f = au(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      s.map((d) => d.elapsed)
    ), p = s.map((d, _) => ({ ...d, loc: f[_] }));
    return this._events = { sun: p }, this._eventsVersion = this.version, this._events;
  }
  get heatModel() {
    return this._heatModelVersion === this.version ? this._heatModel : (this._heatModelVersion = this.version, this._data.heatModel ? this._heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: this._data.heatModel.baseline,
      max: this._data.heatModel.max
    } : this._heatModel = void 0);
  }
  /**
   * Unique identifier for the plan
   */
  get id() {
    return this._data.id;
  }
  /**
   * Method for calculating target time
   */
  get method() {
    return this._data.method;
  }
  /**
   * Display name for the plan
   */
  get name() {
    return this._data.name;
  }
  /**
   * Scales for factors
   */
  get scales() {
    var s, r;
    return this._scales && this._scalesVersion === this._version ? this._scales : (this._scales = {
      altitude: ((s = this._data.scales) == null ? void 0 : s.altitude) || 1,
      dark: ((r = this._data.scales) == null ? void 0 : r.dark) || 1
    }, this._scalesVersion = this._version, this._scales);
  }
  /**
   * Plan stats object
   */
  get stats() {
    if (this._stats && this._statsVersion === this.version) return this._stats;
    Hn("calculating stats.factors");
    const s = q.fromPairs(
      gu.map((p) => {
        const d = this.points.map((_) => _.factors.get(p));
        return [
          p,
          {
            min: Number(q.min(d)),
            max: Number(q.max(d))
          }
        ];
      })
    );
    Hn("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let o = 0, f = 0;
    return this.points.forEach((p, d) => {
      var _, y;
      o = p.loc - (((_ = this.points[d - 1]) == null ? void 0 : _.loc) || 0), f = p.elapsed - (((y = this.points[d - 1]) == null ? void 0 : y.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: s, sun: r }, this._statsVersion = this.version, this._stats;
  }
  get strategy() {
    return this._strategy && this._strategyVersion === this.version ? this._strategy : (this._strategyVersion = this.version, this._strategy = new du(this, this._data.strategy));
  }
  /**
   * Target time in seconds
   */
  get target() {
    return this._data.target;
  }
  /**
   * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
   */
  get typicalDelay() {
    return this._data.typicalDelay ?? 180;
  }
  /**
   * Version of course & plan update (non trivial changes that affect pacing)
   */
  get version() {
    return this._version + this.course.version;
  }
  checkPacing() {
    var s, r;
    if (Hn("checkPacing"), (!((s = this.pacing.status) != null && s.complete) || !this.pacing.isCurrent) && (Hn("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length)) throw new Error("No plan points");
    return !0;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((o) => _s(o.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    const o = this.points.findIndex((y) => Br(y.loc, s, 4)), f = this.points[o];
    if (Be(f.loc, s, 4)) return f;
    Hn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, d = this.points[p], _ = new ru(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const y = f.elapsed - f.time - (d.elapsed - d.time);
      _.time = ve(d.loc, f.loc, d.time + y, f.time, f.loc), _.elapsed = f.elapsed - (f.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return r && this.points.splice(o, 0, _), _;
  }
  update(s) {
    const o = ["target", "method"].find((f) => f in s && q.isNil(s[f]));
    if (o) throw new Error(`Plan.${o} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class L0 {
  constructor(s, r) {
    C(this, "delay");
    C(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class k0 {
  constructor(s, r, o) {
    C(this, "plan");
    C(this, "courseCutoff");
    C(this, "point");
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
const Su = (h, s, r, o) => {
  const f = uu(h, s, r, o), p = [];
  return r.forEach((d, _) => {
    let y = f[_][0] / 10;
    y > 50 ? y = 50 : y < -50 && (y = -50);
    const M = d * f[_][0] + f[_][1];
    p.push({
      grade: y,
      alt: M
    });
  }), p;
};
function O0(h, s) {
  return Su(
    s,
    h.map((o) => o.alt),
    s,
    0.05
  ).map((o) => o.grade);
}
const D0 = (h) => {
  let s = 0, r = 0;
  const o = [0];
  for (let f = 1, p = h.length; f < p; f++)
    s = Number(h[f - 1].latlon.distanceTo(h[f].latlon)), r += s, o.push(r);
  return o;
}, Or = Kn("models:Track");
class ys {
  constructor(s) {
    C(this, "dist");
    C(this, "gain");
    C(this, "loss");
    C(this, "points");
    Or("Creating new Track object");
    const r = s.map((M) => new wu(M.lat, M.lon, M.alt)), o = D0(r), f = O0(r, o);
    this.points = r.map((M, b) => new yu(M.lat, M.lon, M.alt, o[b], f[b])), Or(`set-points - ${r.length} points`), Or("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, _ = 0, y = this.points[0].alt;
    this.points.forEach((M) => {
      _ = M.alt - y, _ < 0 ? d += _ : p += _, y = M.alt;
    }), this.gain = p, this.loss = d;
  }
  get start() {
    return q.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return q.pick(this.points[this.points.length - 1], ["lat", "lon"]);
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(s) {
    s > this.dist && (s = s % this.dist);
    let r;
    if (s === 0) r = this.points[0];
    else {
      const o = this.points.findIndex((f) => f.loc >= s);
      r = Mu(this.points[o - 1], this.points[o], s);
    }
    return q.pick(r, ["lat", "lon", "alt"]);
  }
  /**
   * iterate to new location based on waypoint lat/lon
   * @param latlon - new point location
   * @param start - starting point in track
   * @param limit - max distance along track from starting point
   * @returns
   */
  getNearestPoint(s, r, o) {
    let p = this.points.findIndex((y) => y === r), d = this.points[p], _ = 0;
    for (; o > 0.025; ) {
      const y = o / 5, M = [d];
      for (let T = 1; T <= 5; T++) {
        const O = d.loc + y * T;
        if (O <= this.dist) {
          for (; this.points[p + 1].loc < O && p < this.points.length - 1; )
            p++;
          M.push(this.points[p]);
        }
      }
      const b = M.map((T) => Number(s.distanceTo(T.latlon)));
      _ = Math.min(...b);
      const m = b.findIndex((T) => T === _);
      d = M[m], o = o / 5;
    }
    return {
      point: d,
      delta: _
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const o = Or.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / s) + 1, d = Array(p).fill(0).map((b, m) => Nt(m++ * s, 3));
    d[d.length - 1] < f && d.push(f);
    const _ = Su(
      this.points.map((b) => b.loc),
      this.points.map((b) => b.alt),
      d,
      2 * s
    ), y = d.map((b) => this.getLLA(b)).map((b, m) => ({
      lat: Nt(b.lat, 6),
      lon: Nt(b.lon, 6),
      alt: Nt(_[m].alt, 2)
    })), M = new ys(y);
    return o(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function G0(h, s, r) {
  const o = h.map((f, p) => ({ lat: h[p], lon: s[p], alt: r[p] }));
  return new ys(o);
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: qn
}, Symbol.toStringTag, { value: "Module" }));
export {
  U0 as Course,
  P0 as CourseCutoff,
  Qo as CoursePoint,
  C0 as CourseSegment,
  bu as Event,
  Cn as Factors,
  R0 as Pacing,
  $0 as Plan,
  ru as PlanPoint,
  b0 as PlanSegment,
  wu as Point,
  cs as Site,
  du as Strategy,
  ys as Track,
  yu as TrackPoint,
  tu as Waypoint,
  m0 as adjustStrategy,
  G0 as createTrackFromArrays,
  B0 as factors,
  Mu as interpolatePoint,
  W0 as math,
  _0 as scaleDark,
  I0 as terrainTypes,
  z0 as util
};
