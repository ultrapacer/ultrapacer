var o0 = Object.defineProperty;
var u0 = (c, s, r) => s in c ? o0(c, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[s] = r;
var C = (c, s, r) => u0(c, typeof s != "symbol" ? s + "" : s, r);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(c) {
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
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, b = "__lodash_placeholder__", m = 1, T = 2, k = 4, F = 1, E = 2, N = 1, K = 2, X = 4, V = 8, et = 16, St = 32, At = 64, It = 128, Ht = 256, jt = 512, qt = 30, ye = "...", $e = 800, Ur = 16, Me = 1, Ge = 2, $r = 3, bn = 1 / 0, _n = 9007199254740991, ze = 17976931348623157e292, Sn = NaN, L = 4294967295, $ = L - 1, G = L >>> 1, ct = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", V],
      ["curryRight", et],
      ["flip", jt],
      ["partial", St],
      ["partialRight", At],
      ["rearg", Ht]
    ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", yt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", vn = "[object GeneratorFunction]", _t = "[object Map]", Lt = "[object Number]", On = "[object Null]", Mt = "[object Object]", Bt = "[object Promise]", cn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", He = "[object Symbol]", xu = "[object Undefined]", Ce = "[object WeakMap]", Au = "[object WeakSet]", be = "[object ArrayBuffer]", re = "[object DataView]", Gr = "[object Float32Array]", zr = "[object Float64Array]", Hr = "[object Int8Array]", qr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", Iu = /\b__p \+= '';/g, Pu = /\b(__p \+=) '' \+/g, Eu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ms = /&(?:amp|lt|gt|quot|#39);/g, Cs = /[&<>"']/g, Tu = RegExp(Ms.source), Ru = RegExp(Cs.source), Fu = /<%-([\s\S]+?)%>/g, Lu = /<%([\s\S]+?)%>/g, bs = /<%=([\s\S]+?)%>/g, Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ku = /^\w*$/, Du = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, Nu = RegExp(Vr.source), Qr = /^\s+/, Wu = /\s/, Bu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Uu = /\{\n\/\* \[wrapped with (.+)\] \*/, $u = /,? & /, Gu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zu = /[()=,{}\[\]\/\s]/, Hu = /\\(\\)?/g, qu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ss = /\w*$/, Ku = /^[-+]0x[0-9a-f]+$/i, Zu = /^0b[01]+$/i, Ju = /^\[object .+?Constructor\]$/, Yu = /^0o[0-7]+$/i, Xu = /^(?:0|[1-9]\d*)$/, Vu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qe = /($^)/, Qu = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", ju = "\\u0300-\\u036f", tl = "\\ufe20-\\ufe2f", nl = "\\u20d0-\\u20ff", xs = ju + tl + nl, As = "\\u2700-\\u27bf", Is = "a-z\\xdf-\\xf6\\xf8-\\xff", el = "\\xac\\xb1\\xd7\\xf7", rl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", il = "\\u2000-\\u206f", sl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ps = "A-Z\\xc0-\\xd6\\xd8-\\xde", Es = "\\ufe0e\\ufe0f", Ts = el + rl + il + sl, jr = "['’]", al = "[" + Ke + "]", Rs = "[" + Ts + "]", Ze = "[" + xs + "]", Fs = "\\d+", ol = "[" + As + "]", Ls = "[" + Is + "]", Os = "[^" + Ke + Ts + Fs + As + Is + Ps + "]", ti = "\\ud83c[\\udffb-\\udfff]", ul = "(?:" + Ze + "|" + ti + ")", ks = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + Ps + "]", Ds = "\\u200d", Ns = "(?:" + Ls + "|" + Os + ")", ll = "(?:" + ie + "|" + Os + ")", Ws = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Bs = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", Us = ul + "?", $s = "[" + Es + "]?", fl = "(?:" + Ds + "(?:" + [ks, ni, ei].join("|") + ")" + $s + Us + ")*", cl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", hl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gs = $s + Us + fl, pl = "(?:" + [ol, ni, ei].join("|") + ")" + Gs, gl = "(?:" + [ks + Ze + "?", Ze, ni, ei, al].join("|") + ")", dl = RegExp(jr, "g"), _l = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + gl + Gs, "g"), vl = RegExp([
      ie + "?" + Ls + "+" + Ws + "(?=" + [Rs, ie, "$"].join("|") + ")",
      ll + "+" + Bs + "(?=" + [Rs, ie + Ns, "$"].join("|") + ")",
      ie + "?" + Ns + "+" + Ws,
      ie + "+" + Bs,
      hl,
      cl,
      Fs,
      pl
    ].join("|"), "g"), ml = RegExp("[" + Ds + Ke + xs + Es + "]"), wl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, yl = [
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
    ft[Gr] = ft[zr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[be] = ft[lt] = ft[re] = ft[yt] = ft[Ft] = ft[Wt] = ft[_t] = ft[Lt] = ft[Mt] = ft[tn] = ft[pt] = ft[mn] = ft[Ce] = !1;
    var ut = {};
    ut[nt] = ut[ht] = ut[be] = ut[re] = ut[lt] = ut[yt] = ut[Gr] = ut[zr] = ut[Hr] = ut[qr] = ut[Kr] = ut[_t] = ut[Lt] = ut[Mt] = ut[tn] = ut[pt] = ut[mn] = ut[He] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Ft] = ut[Wt] = ut[Ce] = !1;
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
    }, Al = parseFloat, Il = parseInt, zs = typeof Be == "object" && Be && Be.Object === Object && Be, Pl = typeof self == "object" && self && self.Object === Object && self, Pt = zs || Pl || Function("return this")(), ii = s && !s.nodeType && s, Zn = ii && !0 && c && !c.nodeType && c, Hs = Zn && Zn.exports === ii, si = Hs && zs.process, nn = function() {
      try {
        var v = Zn && Zn.require && Zn.require("util").types;
        return v || si && si.binding && si.binding("util");
      } catch {
      }
    }(), qs = nn && nn.isArrayBuffer, Ks = nn && nn.isDate, Zs = nn && nn.isMap, Js = nn && nn.isRegExp, Ys = nn && nn.isSet, Xs = nn && nn.isTypedArray;
    function Zt(v, x, S) {
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
    function El(v, x, S, O) {
      for (var z = -1, rt = v == null ? 0 : v.length; ++z < rt; ) {
        var Ct = v[z];
        x(O, Ct, S(Ct), v);
      }
      return O;
    }
    function en(v, x) {
      for (var S = -1, O = v == null ? 0 : v.length; ++S < O && x(v[S], S, v) !== !1; )
        ;
      return v;
    }
    function Tl(v, x) {
      for (var S = v == null ? 0 : v.length; S-- && x(v[S], S, v) !== !1; )
        ;
      return v;
    }
    function Vs(v, x) {
      for (var S = -1, O = v == null ? 0 : v.length; ++S < O; )
        if (!x(v[S], S, v))
          return !1;
      return !0;
    }
    function kn(v, x) {
      for (var S = -1, O = v == null ? 0 : v.length, z = 0, rt = []; ++S < O; ) {
        var Ct = v[S];
        x(Ct, S, v) && (rt[z++] = Ct);
      }
      return rt;
    }
    function Je(v, x) {
      var S = v == null ? 0 : v.length;
      return !!S && se(v, x, 0) > -1;
    }
    function ai(v, x, S) {
      for (var O = -1, z = v == null ? 0 : v.length; ++O < z; )
        if (S(x, v[O]))
          return !0;
      return !1;
    }
    function gt(v, x) {
      for (var S = -1, O = v == null ? 0 : v.length, z = Array(O); ++S < O; )
        z[S] = x(v[S], S, v);
      return z;
    }
    function Dn(v, x) {
      for (var S = -1, O = x.length, z = v.length; ++S < O; )
        v[z + S] = x[S];
      return v;
    }
    function oi(v, x, S, O) {
      var z = -1, rt = v == null ? 0 : v.length;
      for (O && rt && (S = v[++z]); ++z < rt; )
        S = x(S, v[z], z, v);
      return S;
    }
    function Rl(v, x, S, O) {
      var z = v == null ? 0 : v.length;
      for (O && z && (S = v[--z]); z--; )
        S = x(S, v[z], z, v);
      return S;
    }
    function ui(v, x) {
      for (var S = -1, O = v == null ? 0 : v.length; ++S < O; )
        if (x(v[S], S, v))
          return !0;
      return !1;
    }
    var Fl = li("length");
    function Ll(v) {
      return v.split("");
    }
    function Ol(v) {
      return v.match(Gu) || [];
    }
    function Qs(v, x, S) {
      var O;
      return S(v, function(z, rt, Ct) {
        if (x(z, rt, Ct))
          return O = rt, !1;
      }), O;
    }
    function Ye(v, x, S, O) {
      for (var z = v.length, rt = S + (O ? 1 : -1); O ? rt-- : ++rt < z; )
        if (x(v[rt], rt, v))
          return rt;
      return -1;
    }
    function se(v, x, S) {
      return x === x ? Kl(v, x, S) : Ye(v, js, S);
    }
    function kl(v, x, S, O) {
      for (var z = S - 1, rt = v.length; ++z < rt; )
        if (O(v[z], x))
          return z;
      return -1;
    }
    function js(v) {
      return v !== v;
    }
    function ta(v, x) {
      var S = v == null ? 0 : v.length;
      return S ? ci(v, x) / S : Sn;
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
    function na(v, x, S, O, z) {
      return z(v, function(rt, Ct, at) {
        S = O ? (O = !1, rt) : x(S, rt, Ct, at);
      }), S;
    }
    function Dl(v, x) {
      var S = v.length;
      for (v.sort(x); S--; )
        v[S] = v[S].value;
      return v;
    }
    function ci(v, x) {
      for (var S, O = -1, z = v.length; ++O < z; ) {
        var rt = x(v[O]);
        rt !== r && (S = S === r ? rt : S + rt);
      }
      return S;
    }
    function hi(v, x) {
      for (var S = -1, O = Array(v); ++S < v; )
        O[S] = x(S);
      return O;
    }
    function Nl(v, x) {
      return gt(x, function(S) {
        return [S, v[S]];
      });
    }
    function ea(v) {
      return v && v.slice(0, aa(v) + 1).replace(Qr, "");
    }
    function Jt(v) {
      return function(x) {
        return v(x);
      };
    }
    function pi(v, x) {
      return gt(x, function(S) {
        return v[S];
      });
    }
    function Se(v, x) {
      return v.has(x);
    }
    function ra(v, x) {
      for (var S = -1, O = v.length; ++S < O && se(x, v[S], 0) > -1; )
        ;
      return S;
    }
    function ia(v, x) {
      for (var S = v.length; S-- && se(x, v[S], 0) > -1; )
        ;
      return S;
    }
    function Wl(v, x) {
      for (var S = v.length, O = 0; S--; )
        v[S] === x && ++O;
      return O;
    }
    var Bl = fi(Cl), Ul = fi(bl);
    function $l(v) {
      return "\\" + xl[v];
    }
    function Gl(v, x) {
      return v == null ? r : v[x];
    }
    function ae(v) {
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
      return v.forEach(function(O, z) {
        S[++x] = [z, O];
      }), S;
    }
    function sa(v, x) {
      return function(S) {
        return v(x(S));
      };
    }
    function Nn(v, x) {
      for (var S = -1, O = v.length, z = 0, rt = []; ++S < O; ) {
        var Ct = v[S];
        (Ct === x || Ct === b) && (v[S] = b, rt[z++] = S);
      }
      return rt;
    }
    function Xe(v) {
      var x = -1, S = Array(v.size);
      return v.forEach(function(O) {
        S[++x] = O;
      }), S;
    }
    function ql(v) {
      var x = -1, S = Array(v.size);
      return v.forEach(function(O) {
        S[++x] = [O, O];
      }), S;
    }
    function Kl(v, x, S) {
      for (var O = S - 1, z = v.length; ++O < z; )
        if (v[O] === x)
          return O;
      return -1;
    }
    function Zl(v, x, S) {
      for (var O = S + 1; O--; )
        if (v[O] === x)
          return O;
      return O;
    }
    function oe(v) {
      return ae(v) ? Yl(v) : Fl(v);
    }
    function hn(v) {
      return ae(v) ? Xl(v) : Ll(v);
    }
    function aa(v) {
      for (var x = v.length; x-- && Wu.test(v.charAt(x)); )
        ;
      return x;
    }
    var Jl = fi(Sl);
    function Yl(v) {
      for (var x = ri.lastIndex = 0; ri.test(v); )
        ++x;
      return x;
    }
    function Xl(v) {
      return v.match(ri) || [];
    }
    function Vl(v) {
      return v.match(vl) || [];
    }
    var Ql = function v(x) {
      x = x == null ? Pt : ue.defaults(Pt.Object(), x, ue.pick(Pt, yl));
      var S = x.Array, O = x.Date, z = x.Error, rt = x.Function, Ct = x.Math, at = x.Object, di = x.RegExp, jl = x.String, rn = x.TypeError, Ve = S.prototype, tf = rt.prototype, le = at.prototype, Qe = x["__core-js_shared__"], je = tf.toString, st = le.hasOwnProperty, nf = 0, oa = function() {
        var t = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), tr = le.toString, ef = je.call(at), rf = Pt._, sf = di(
        "^" + je.call(st).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), nr = Hs ? x.Buffer : r, Wn = x.Symbol, er = x.Uint8Array, ua = nr ? nr.allocUnsafe : r, rr = sa(at.getPrototypeOf, at), la = at.create, fa = le.propertyIsEnumerable, ir = Ve.splice, ca = Wn ? Wn.isConcatSpreadable : r, xe = Wn ? Wn.iterator : r, Jn = Wn ? Wn.toStringTag : r, sr = function() {
        try {
          var t = jn(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), af = x.clearTimeout !== Pt.clearTimeout && x.clearTimeout, of = O && O.now !== Pt.Date.now && O.now, uf = x.setTimeout !== Pt.setTimeout && x.setTimeout, ar = Ct.ceil, or = Ct.floor, _i = at.getOwnPropertySymbols, lf = nr ? nr.isBuffer : r, ha = x.isFinite, ff = Ve.join, cf = sa(at.keys, at), bt = Ct.max, Tt = Ct.min, hf = O.now, pf = x.parseInt, pa = Ct.random, gf = Ve.reverse, vi = jn(x, "DataView"), Ae = jn(x, "Map"), mi = jn(x, "Promise"), fe = jn(x, "Set"), Ie = jn(x, "WeakMap"), Pe = jn(at, "create"), ur = Ie && new Ie(), ce = {}, df = te(vi), _f = te(Ae), vf = te(mi), mf = te(fe), wf = te(Ie), lr = Wn ? Wn.prototype : r, Ee = lr ? lr.valueOf : r, ga = lr ? lr.toString : r;
      function u(t) {
        if (vt(t) && !q(t) && !(t instanceof j)) {
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
      function fr() {
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
      }, u.prototype = fr.prototype, u.prototype.constructor = u, sn.prototype = he(fr.prototype), sn.prototype.constructor = sn;
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
        var t = this.__wrapped__.value(), n = this.__dir__, e = q(t), i = n < 0, a = e ? t.length : 0, l = Oc(0, a, this.__views__), h = l.start, g = l.end, w = g - h, A = i ? g : h - 1, I = this.__iteratees__, P = I.length, R = 0, D = Tt(w, this.__takeCount__);
        if (!e || !i && a == w && D == w)
          return Wa(t, this.__actions__);
        var B = [];
        t:
          for (; w-- && R < D; ) {
            A += n;
            for (var J = -1, U = t[A]; ++J < P; ) {
              var Q = I[J], tt = Q.iteratee, Vt = Q.type, Dt = tt(U);
              if (Vt == Ge)
                U = Dt;
              else if (!Dt) {
                if (Vt == Me)
                  continue t;
                break t;
              }
            }
            B[R++] = U;
          }
        return B;
      }
      j.prototype = he(fr.prototype), j.prototype.constructor = j;
      function Yn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var i = t[n];
          this.set(i[0], i[1]);
        }
      }
      function bf() {
        this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
      }
      function Sf(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function xf(t) {
        var n = this.__data__;
        if (Pe) {
          var e = n[t];
          return e === y ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function Af(t) {
        var n = this.__data__;
        return Pe ? n[t] !== r : st.call(n, t);
      }
      function If(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Pe && n === r ? y : n, this;
      }
      Yn.prototype.clear = bf, Yn.prototype.delete = Sf, Yn.prototype.get = xf, Yn.prototype.has = Af, Yn.prototype.set = If;
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
        var n = this.__data__, e = cr(n, t);
        if (e < 0)
          return !1;
        var i = n.length - 1;
        return e == i ? n.pop() : ir.call(n, e, 1), --this.size, !0;
      }
      function Tf(t) {
        var n = this.__data__, e = cr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function Rf(t) {
        return cr(this.__data__, t) > -1;
      }
      function Ff(t, n) {
        var e = this.__data__, i = cr(e, t);
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
          hash: new Yn(),
          map: new (Ae || xn)(),
          string: new Yn()
        };
      }
      function Of(t) {
        var n = br(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function kf(t) {
        return br(this, t).get(t);
      }
      function Df(t) {
        return br(this, t).has(t);
      }
      function Nf(t, n) {
        var e = br(this, t), i = e.size;
        return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
      }
      An.prototype.clear = Lf, An.prototype.delete = Of, An.prototype.get = kf, An.prototype.has = Df, An.prototype.set = Nf;
      function Xn(t) {
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
      Xn.prototype.add = Xn.prototype.push = Wf, Xn.prototype.has = Bf;
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
          if (!Ae || i.length < f - 1)
            return i.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new An(i);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = Uf, pn.prototype.delete = $f, pn.prototype.get = Gf, pn.prototype.has = zf, pn.prototype.set = Hf;
      function da(t, n) {
        var e = q(t), i = !e && ne(t), a = !e && !i && zn(t), l = !e && !i && !a && _e(t), h = e || i || a || l, g = h ? hi(t.length, jl) : [], w = g.length;
        for (var A in t)
          (n || st.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
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
        return Sr(Ut(t), Vn(n, 0, t.length));
      }
      function Kf(t) {
        return Sr(Ut(t));
      }
      function wi(t, n, e) {
        (e !== r && !gn(t[n], e) || e === r && !(n in t)) && In(t, n, e);
      }
      function Te(t, n, e) {
        var i = t[n];
        (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && In(t, n, e);
      }
      function cr(t, n) {
        for (var e = t.length; e--; )
          if (gn(t[e][0], n))
            return e;
        return -1;
      }
      function Zf(t, n, e, i) {
        return Bn(t, function(a, l, h) {
          n(i, a, e(a), h);
        }), i;
      }
      function va(t, n) {
        return t && yn(n, xt(n), t);
      }
      function Jf(t, n) {
        return t && yn(n, Gt(n), t);
      }
      function In(t, n, e) {
        n == "__proto__" && sr ? sr(t, n, {
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
      function Vn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function an(t, n, e, i, a, l) {
        var h, g = n & m, w = n & T, A = n & k;
        if (e && (h = a ? e(t, i, a, l) : e(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var I = q(t);
        if (I) {
          if (h = Dc(t), !g)
            return Ut(t, h);
        } else {
          var P = Rt(t), R = P == Wt || P == vn;
          if (zn(t))
            return $a(t, g);
          if (P == Mt || P == nt || R && !a) {
            if (h = w || R ? {} : ao(t), !g)
              return w ? xc(t, Jf(h, t)) : Sc(t, va(h, t));
          } else {
            if (!ut[P])
              return a ? t : {};
            h = Nc(t, P, g);
          }
        }
        l || (l = new pn());
        var D = l.get(t);
        if (D)
          return D;
        l.set(t, h), Do(t) ? t.forEach(function(U) {
          h.add(an(U, n, e, U, t, l));
        }) : Oo(t) && t.forEach(function(U, Q) {
          h.set(Q, an(U, n, e, Q, t, l));
        });
        var B = A ? w ? Ui : Bi : w ? Gt : xt, J = I ? r : B(t);
        return en(J || t, function(U, Q) {
          J && (Q = U, U = t[Q]), Te(h, Q, an(U, n, e, Q, t, l));
        }), h;
      }
      function Yf(t) {
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
          var a = e[i], l = n[a], h = t[a];
          if (h === r && !(a in t) || !l(h))
            return !1;
        }
        return !0;
      }
      function wa(t, n, e) {
        if (typeof t != "function")
          throw new rn(d);
        return Ne(function() {
          t.apply(r, e);
        }, n);
      }
      function Re(t, n, e, i) {
        var a = -1, l = Je, h = !0, g = t.length, w = [], A = n.length;
        if (!g)
          return w;
        e && (n = gt(n, Jt(e))), i ? (l = ai, h = !1) : n.length >= f && (l = Se, h = !1, n = new Xn(n));
        t:
          for (; ++a < g; ) {
            var I = t[a], P = e == null ? I : e(I);
            if (I = i || I !== 0 ? I : 0, h && P === P) {
              for (var R = A; R--; )
                if (n[R] === P)
                  continue t;
              w.push(I);
            } else l(n, P, i) || w.push(I);
          }
        return w;
      }
      var Bn = Ka(wn), ya = Ka(Ci, !0);
      function Xf(t, n) {
        var e = !0;
        return Bn(t, function(i, a, l) {
          return e = !!n(i, a, l), e;
        }), e;
      }
      function hr(t, n, e) {
        for (var i = -1, a = t.length; ++i < a; ) {
          var l = t[i], h = n(l);
          if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
            var g = h, w = l;
        }
        return w;
      }
      function Vf(t, n, e, i) {
        var a = t.length;
        for (e = Z(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : Z(i), i < 0 && (i += a), i = e > i ? 0 : Wo(i); e < i; )
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
        var l = -1, h = t.length;
        for (e || (e = Bc), a || (a = []); ++l < h; ) {
          var g = t[l];
          n > 0 && e(g) ? n > 1 ? Et(g, n - 1, e, i, a) : Dn(a, g) : i || (a[a.length] = g);
        }
        return a;
      }
      var Mi = Za(), Ca = Za(!0);
      function wn(t, n) {
        return t && Mi(t, n, xt);
      }
      function Ci(t, n) {
        return t && Ca(t, n, xt);
      }
      function pr(t, n) {
        return kn(n, function(e) {
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
        return q(t) ? i : Dn(i, e(t));
      }
      function Ot(t) {
        return t == null ? t === r ? xu : On : Jn && Jn in at(t) ? Lc(t) : Kc(t);
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
      function tc(t, n, e) {
        return t >= Tt(n, e) && t < bt(n, e);
      }
      function Si(t, n, e) {
        for (var i = e ? ai : Je, a = t[0].length, l = t.length, h = l, g = S(l), w = 1 / 0, A = []; h--; ) {
          var I = t[h];
          h && n && (I = gt(I, Jt(n))), w = Tt(I.length, w), g[h] = !e && (n || a >= 120 && I.length >= 120) ? new Xn(h && I) : r;
        }
        I = t[0];
        var P = -1, R = g[0];
        t:
          for (; ++P < a && A.length < w; ) {
            var D = I[P], B = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(R ? Se(R, B) : i(A, B, e))) {
              for (h = l; --h; ) {
                var J = g[h];
                if (!(J ? Se(J, B) : i(t[h], B, e)))
                  continue t;
              }
              R && R.push(B), A.push(D);
            }
          }
        return A;
      }
      function nc(t, n, e, i) {
        return wn(t, function(a, l, h) {
          n(i, e(a), l, h);
        }), i;
      }
      function Fe(t, n, e) {
        n = $n(n, t), t = fo(t, n);
        var i = t == null ? t : t[Mn(un(n))];
        return i == null ? r : Zt(i, t, e);
      }
      function Sa(t) {
        return vt(t) && Ot(t) == nt;
      }
      function ec(t) {
        return vt(t) && Ot(t) == be;
      }
      function rc(t) {
        return vt(t) && Ot(t) == yt;
      }
      function Le(t, n, e, i, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : ic(t, n, e, i, Le, a);
      }
      function ic(t, n, e, i, a, l) {
        var h = q(t), g = q(n), w = h ? ht : Rt(t), A = g ? ht : Rt(n);
        w = w == nt ? Mt : w, A = A == nt ? Mt : A;
        var I = w == Mt, P = A == Mt, R = w == A;
        if (R && zn(t)) {
          if (!zn(n))
            return !1;
          h = !0, I = !1;
        }
        if (R && !I)
          return l || (l = new pn()), h || _e(t) ? ro(t, n, e, i, a, l) : Rc(t, n, w, e, i, a, l);
        if (!(e & F)) {
          var D = I && st.call(t, "__wrapped__"), B = P && st.call(n, "__wrapped__");
          if (D || B) {
            var J = D ? t.value() : t, U = B ? n.value() : n;
            return l || (l = new pn()), a(J, U, e, i, l);
          }
        }
        return R ? (l || (l = new pn()), Fc(t, n, e, i, a, l)) : !1;
      }
      function sc(t) {
        return vt(t) && Rt(t) == _t;
      }
      function xi(t, n, e, i) {
        var a = e.length, l = a, h = !i;
        if (t == null)
          return !l;
        for (t = at(t); a--; ) {
          var g = e[a];
          if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++a < l; ) {
          g = e[a];
          var w = g[0], A = t[w], I = g[1];
          if (h && g[2]) {
            if (A === r && !(w in t))
              return !1;
          } else {
            var P = new pn();
            if (i)
              var R = i(A, I, w, t, n, P);
            if (!(R === r ? Le(I, A, F | E, i, P) : R))
              return !1;
          }
        }
        return !0;
      }
      function xa(t) {
        if (!dt(t) || $c(t))
          return !1;
        var n = Rn(t) ? sf : Ju;
        return n.test(te(t));
      }
      function ac(t) {
        return vt(t) && Ot(t) == tn;
      }
      function oc(t) {
        return vt(t) && Rt(t) == pt;
      }
      function uc(t) {
        return vt(t) && Tr(t.length) && !!ft[Ot(t)];
      }
      function Aa(t) {
        return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? q(t) ? Ea(t[0], t[1]) : Pa(t) : Yo(t);
      }
      function Ai(t) {
        if (!De(t))
          return cf(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function lc(t) {
        if (!dt(t))
          return qc(t);
        var n = De(t), e = [];
        for (var i in t)
          i == "constructor" && (n || !st.call(t, i)) || e.push(i);
        return e;
      }
      function Ii(t, n) {
        return t < n;
      }
      function Ia(t, n) {
        var e = -1, i = $t(t) ? S(t.length) : [];
        return Bn(t, function(a, l, h) {
          i[++e] = n(a, l, h);
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
          return i === r && i === n ? ns(e, t) : Le(n, i, F | E);
        };
      }
      function gr(t, n, e, i, a) {
        t !== n && Mi(n, function(l, h) {
          if (a || (a = new pn()), dt(l))
            fc(t, n, h, e, gr, i, a);
          else {
            var g = i ? i(Ki(t, h), l, h + "", t, n, a) : r;
            g === r && (g = l), wi(t, h, g);
          }
        }, Gt);
      }
      function fc(t, n, e, i, a, l, h) {
        var g = Ki(t, e), w = Ki(n, e), A = h.get(w);
        if (A) {
          wi(t, e, A);
          return;
        }
        var I = l ? l(g, w, e + "", t, n, h) : r, P = I === r;
        if (P) {
          var R = q(w), D = !R && zn(w), B = !R && !D && _e(w);
          I = w, R || D || B ? q(g) ? I = g : mt(g) ? I = Ut(g) : D ? (P = !1, I = $a(w, !0)) : B ? (P = !1, I = Ga(w, !0)) : I = [] : We(w) || ne(w) ? (I = g, ne(g) ? I = Bo(g) : (!dt(g) || Rn(g)) && (I = ao(w))) : P = !1;
        }
        P && (h.set(w, I), a(I, w, i, l, h), h.delete(w)), wi(t, e, I);
      }
      function Ta(t, n) {
        var e = t.length;
        if (e)
          return n += n < 0 ? e : 0, Tn(n, e) ? t[n] : r;
      }
      function Ra(t, n, e) {
        n.length ? n = gt(n, function(l) {
          return q(l) ? function(h) {
            return Qn(h, l.length === 1 ? l[0] : l);
          } : l;
        }) : n = [zt];
        var i = -1;
        n = gt(n, Jt(W()));
        var a = Ia(t, function(l, h, g) {
          var w = gt(n, function(A) {
            return A(l);
          });
          return { criteria: w, index: ++i, value: l };
        });
        return Dl(a, function(l, h) {
          return bc(l, h, e);
        });
      }
      function cc(t, n) {
        return Fa(t, n, function(e, i) {
          return ns(t, i);
        });
      }
      function Fa(t, n, e) {
        for (var i = -1, a = n.length, l = {}; ++i < a; ) {
          var h = n[i], g = Qn(t, h);
          e(g, h) && Oe(l, $n(h, t), g);
        }
        return l;
      }
      function hc(t) {
        return function(n) {
          return Qn(n, t);
        };
      }
      function Pi(t, n, e, i) {
        var a = i ? kl : se, l = -1, h = n.length, g = t;
        for (t === n && (n = Ut(n)), e && (g = gt(t, Jt(e))); ++l < h; )
          for (var w = 0, A = n[l], I = e ? e(A) : A; (w = a(g, I, w, i)) > -1; )
            g !== t && ir.call(g, w, 1), ir.call(t, w, 1);
        return t;
      }
      function La(t, n) {
        for (var e = t ? n.length : 0, i = e - 1; e--; ) {
          var a = n[e];
          if (e == i || a !== l) {
            var l = a;
            Tn(a) ? ir.call(t, a, 1) : Fi(t, a);
          }
        }
        return t;
      }
      function Ei(t, n) {
        return t + or(pa() * (n - t + 1));
      }
      function pc(t, n, e, i) {
        for (var a = -1, l = bt(ar((n - t) / (e || 1)), 0), h = S(l); l--; )
          h[i ? l : ++a] = t, t += e;
        return h;
      }
      function Ti(t, n) {
        var e = "";
        if (!t || n < 1 || n > _n)
          return e;
        do
          n % 2 && (e += t), n = or(n / 2), n && (t += t);
        while (n);
        return e;
      }
      function Y(t, n) {
        return Zi(lo(t, n, zt), t + "");
      }
      function gc(t) {
        return _a(ve(t));
      }
      function dc(t, n) {
        var e = ve(t);
        return Sr(e, Vn(n, 0, e.length));
      }
      function Oe(t, n, e, i) {
        if (!dt(t))
          return t;
        n = $n(n, t);
        for (var a = -1, l = n.length, h = l - 1, g = t; g != null && ++a < l; ) {
          var w = Mn(n[a]), A = e;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return t;
          if (a != h) {
            var I = g[w];
            A = i ? i(I, w, g) : r, A === r && (A = dt(I) ? I : Tn(n[a + 1]) ? [] : {});
          }
          Te(g, w, A), g = g[w];
        }
        return t;
      }
      var Oa = ur ? function(t, n) {
        return ur.set(t, n), t;
      } : zt, _c = sr ? function(t, n) {
        return sr(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: rs(n),
          writable: !0
        });
      } : zt;
      function vc(t) {
        return Sr(ve(t));
      }
      function on(t, n, e) {
        var i = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = S(a); ++i < a; )
          l[i] = t[i + n];
        return l;
      }
      function mc(t, n) {
        var e;
        return Bn(t, function(i, a, l) {
          return e = n(i, a, l), !e;
        }), !!e;
      }
      function dr(t, n, e) {
        var i = 0, a = t == null ? i : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; i < a; ) {
            var l = i + a >>> 1, h = t[l];
            h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = l + 1 : a = l;
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
        for (var h = n !== n, g = n === null, w = Xt(n), A = n === r; a < l; ) {
          var I = or((a + l) / 2), P = e(t[I]), R = P !== r, D = P === null, B = P === P, J = Xt(P);
          if (h)
            var U = i || B;
          else A ? U = B && (i || R) : g ? U = B && R && (i || !D) : w ? U = B && R && !D && (i || !J) : D || J ? U = !1 : U = i ? P <= n : P < n;
          U ? a = I + 1 : l = I;
        }
        return Tt(l, $);
      }
      function ka(t, n) {
        for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
          var h = t[e], g = n ? n(h) : h;
          if (!e || !gn(g, w)) {
            var w = g;
            l[a++] = h === 0 ? 0 : h;
          }
        }
        return l;
      }
      function Da(t) {
        return typeof t == "number" ? t : Xt(t) ? Sn : +t;
      }
      function Yt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return gt(t, Yt) + "";
        if (Xt(t))
          return ga ? ga.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function Un(t, n, e) {
        var i = -1, a = Je, l = t.length, h = !0, g = [], w = g;
        if (e)
          h = !1, a = ai;
        else if (l >= f) {
          var A = n ? null : Ec(t);
          if (A)
            return Xe(A);
          h = !1, a = Se, w = new Xn();
        } else
          w = n ? [] : g;
        t:
          for (; ++i < l; ) {
            var I = t[i], P = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, h && P === P) {
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
        return Oe(t, n, e(Qn(t, n)), i);
      }
      function _r(t, n, e, i) {
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
          for (var h = t[a], g = -1; ++g < i; )
            g != a && (l[a] = Re(l[a] || h, t[g], n, e));
        return Un(Et(l, 1), n, e);
      }
      function Ba(t, n, e) {
        for (var i = -1, a = t.length, l = n.length, h = {}; ++i < a; ) {
          var g = i < l ? n[i] : r;
          e(h, t[i], g);
        }
        return h;
      }
      function Oi(t) {
        return mt(t) ? t : [];
      }
      function ki(t) {
        return typeof t == "function" ? t : zt;
      }
      function $n(t, n) {
        return q(t) ? t : Hi(t, n) ? [t] : go(it(t));
      }
      var wc = Y;
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
        return new er(n).set(new er(t)), n;
      }
      function yc(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function Mc(t) {
        var n = new t.constructor(t.source, Ss.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Cc(t) {
        return Ee ? at(Ee.call(t)) : {};
      }
      function Ga(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function za(t, n) {
        if (t !== n) {
          var e = t !== r, i = t === null, a = t === t, l = Xt(t), h = n !== r, g = n === null, w = n === n, A = Xt(n);
          if (!g && !A && !l && t > n || l && h && w && !g && !A || i && h && w || !e && w || !a)
            return 1;
          if (!i && !l && !A && t < n || A && e && a && !i && !l || g && e && a || !h && a || !w)
            return -1;
        }
        return 0;
      }
      function bc(t, n, e) {
        for (var i = -1, a = t.criteria, l = n.criteria, h = a.length, g = e.length; ++i < h; ) {
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
        for (var a = -1, l = t.length, h = e.length, g = -1, w = n.length, A = bt(l - h, 0), I = S(w + A), P = !i; ++g < w; )
          I[g] = n[g];
        for (; ++a < h; )
          (P || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[g++] = t[a++];
        return I;
      }
      function qa(t, n, e, i) {
        for (var a = -1, l = t.length, h = -1, g = e.length, w = -1, A = n.length, I = bt(l - g, 0), P = S(I + A), R = !i; ++a < I; )
          P[a] = t[a];
        for (var D = a; ++w < A; )
          P[D + w] = n[w];
        for (; ++h < g; )
          (R || a < l) && (P[D + e[h]] = t[a++]);
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
        for (var l = -1, h = n.length; ++l < h; ) {
          var g = n[l], w = i ? i(e[g], t[g], g, e, t) : r;
          w === r && (w = t[g]), a ? In(e, g, w) : Te(e, g, w);
        }
        return e;
      }
      function Sc(t, n) {
        return yn(t, zi(t), n);
      }
      function xc(t, n) {
        return yn(t, io(t), n);
      }
      function vr(t, n) {
        return function(e, i) {
          var a = q(e) ? El : Zf, l = n ? n() : {};
          return a(e, t, W(i, 2), l);
        };
      }
      function pe(t) {
        return Y(function(n, e) {
          var i = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
          for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && kt(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++i < a; ) {
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
          for (var a = e.length, l = n ? a : -1, h = at(e); (n ? l-- : ++l < a) && i(h[l], l, h) !== !1; )
            ;
          return e;
        };
      }
      function Za(t) {
        return function(n, e, i) {
          for (var a = -1, l = at(n), h = i(n), g = h.length; g--; ) {
            var w = h[t ? g : ++a];
            if (e(l[w], w, l) === !1)
              break;
          }
          return n;
        };
      }
      function Ac(t, n, e) {
        var i = n & N, a = ke(t);
        function l() {
          var h = this && this !== Pt && this instanceof l ? a : t;
          return h.apply(i ? e : this, arguments);
        }
        return l;
      }
      function Ja(t) {
        return function(n) {
          n = it(n);
          var e = ae(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? Gn(e, 1).join("") : n.slice(1);
          return i[t]() + a;
        };
      }
      function ge(t) {
        return function(n) {
          return oi(Zo(Ko(n).replace(dl, "")), t, "");
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
      function Ic(t, n, e) {
        var i = ke(t);
        function a() {
          for (var l = arguments.length, h = S(l), g = l, w = de(a); g--; )
            h[g] = arguments[g];
          var A = l < 3 && h[0] !== w && h[l - 1] !== w ? [] : Nn(h, w);
          if (l -= A.length, l < e)
            return ja(
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
          var I = this && this !== Pt && this instanceof a ? i : t;
          return Zt(I, this, h);
        }
        return a;
      }
      function Ya(t) {
        return function(n, e, i) {
          var a = at(n);
          if (!$t(n)) {
            var l = W(e, 3);
            n = xt(n), e = function(g) {
              return l(a[g], g, a);
            };
          }
          var h = t(n, e, i);
          return h > -1 ? a[l ? n[h] : h] : r;
        };
      }
      function Xa(t) {
        return En(function(n) {
          var e = n.length, i = e, a = sn.prototype.thru;
          for (t && n.reverse(); i--; ) {
            var l = n[i];
            if (typeof l != "function")
              throw new rn(d);
            if (a && !h && Cr(l) == "wrapper")
              var h = new sn([], !0);
          }
          for (i = h ? i : e; ++i < e; ) {
            l = n[i];
            var g = Cr(l), w = g == "wrapper" ? $i(l) : r;
            w && qi(w[0]) && w[1] == (It | V | St | Ht) && !w[4].length && w[9] == 1 ? h = h[Cr(w[0])].apply(h, w[3]) : h = l.length == 1 && qi(l) ? h[g]() : h.thru(l);
          }
          return function() {
            var A = arguments, I = A[0];
            if (h && A.length == 1 && q(I))
              return h.plant(I).value();
            for (var P = 0, R = e ? n[P].apply(this, A) : I; ++P < e; )
              R = n[P].call(this, R);
            return R;
          };
        });
      }
      function mr(t, n, e, i, a, l, h, g, w, A) {
        var I = n & It, P = n & N, R = n & K, D = n & (V | et), B = n & jt, J = R ? r : ke(t);
        function U() {
          for (var Q = arguments.length, tt = S(Q), Vt = Q; Vt--; )
            tt[Vt] = arguments[Vt];
          if (D)
            var Dt = de(U), Qt = Wl(tt, Dt);
          if (i && (tt = Ha(tt, i, a, D)), l && (tt = qa(tt, l, h, D)), Q -= Qt, D && Q < A) {
            var wt = Nn(tt, Dt);
            return ja(
              t,
              n,
              mr,
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
          return Q = tt.length, g ? tt = Zc(tt, g) : B && Q > 1 && tt.reverse(), I && w < Q && (tt.length = w), this && this !== Pt && this instanceof U && (Ln = J || ke(Ln)), Ln.apply(dn, tt);
        }
        return U;
      }
      function Va(t, n) {
        return function(e, i) {
          return nc(e, t, n(i), {});
        };
      }
      function wr(t, n) {
        return function(e, i) {
          var a;
          if (e === r && i === r)
            return n;
          if (e !== r && (a = e), i !== r) {
            if (a === r)
              return i;
            typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Da(e), i = Da(i)), a = t(e, i);
          }
          return a;
        };
      }
      function Ni(t) {
        return En(function(n) {
          return n = gt(n, Jt(W())), Y(function(e) {
            var i = this;
            return t(n, function(a) {
              return Zt(a, i, e);
            });
          });
        });
      }
      function yr(t, n) {
        n = n === r ? " " : Yt(n);
        var e = n.length;
        if (e < 2)
          return e ? Ti(n, t) : n;
        var i = Ti(n, ar(t / oe(n)));
        return ae(n) ? Gn(hn(i), 0, t).join("") : i.slice(0, t);
      }
      function Pc(t, n, e, i) {
        var a = n & N, l = ke(t);
        function h() {
          for (var g = -1, w = arguments.length, A = -1, I = i.length, P = S(I + w), R = this && this !== Pt && this instanceof h ? l : t; ++A < I; )
            P[A] = i[A];
          for (; w--; )
            P[A++] = arguments[++g];
          return Zt(R, a ? e : this, P);
        }
        return h;
      }
      function Qa(t) {
        return function(n, e, i) {
          return i && typeof i != "number" && kt(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), pc(n, e, i, t);
        };
      }
      function Mr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = ln(n), e = ln(e)), t(n, e);
        };
      }
      function ja(t, n, e, i, a, l, h, g, w, A) {
        var I = n & V, P = I ? h : r, R = I ? r : h, D = I ? l : r, B = I ? r : l;
        n |= I ? St : At, n &= ~(I ? At : St), n & X || (n &= ~(N | K));
        var J = [
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
        ], U = e.apply(r, J);
        return qi(t) && co(U, J), U.placeholder = i, ho(U, t, n);
      }
      function Wi(t) {
        var n = Ct[t];
        return function(e, i) {
          if (e = ln(e), i = i == null ? 0 : Tt(Z(i), 292), i && ha(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
          }
          return n(e);
        };
      }
      var Ec = fe && 1 / Xe(new fe([, -0]))[1] == bn ? function(t) {
        return new fe(t);
      } : as;
      function to(t) {
        return function(n) {
          var e = Rt(n);
          return e == _t ? gi(n) : e == pt ? ql(n) : Nl(n, t(n));
        };
      }
      function Pn(t, n, e, i, a, l, h, g) {
        var w = n & K;
        if (!w && typeof t != "function")
          throw new rn(d);
        var A = i ? i.length : 0;
        if (A || (n &= ~(St | At), i = a = r), h = h === r ? h : bt(Z(h), 0), g = g === r ? g : Z(g), A -= a ? a.length : 0, n & At) {
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
          h,
          g
        ];
        if (R && Hc(D, R), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], g = D[9] = D[9] === r ? w ? 0 : t.length : bt(D[9] - A, 0), !g && n & (V | et) && (n &= ~(V | et)), !n || n == N)
          var B = Ac(t, n, e);
        else n == V || n == et ? B = Ic(t, n, g) : (n == St || n == (N | St)) && !a.length ? B = Pc(t, n, e, i) : B = mr.apply(r, D);
        var J = R ? Oa : co;
        return ho(J(B, D), t, n);
      }
      function no(t, n, e, i) {
        return t === r || gn(t, le[e]) && !st.call(i, e) ? n : t;
      }
      function eo(t, n, e, i, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, eo, l), l.delete(n)), t;
      }
      function Tc(t) {
        return We(t) ? r : t;
      }
      function ro(t, n, e, i, a, l) {
        var h = e & F, g = t.length, w = n.length;
        if (g != w && !(h && w > g))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var P = -1, R = !0, D = e & E ? new Xn() : r;
        for (l.set(t, n), l.set(n, t); ++P < g; ) {
          var B = t[P], J = n[P];
          if (i)
            var U = h ? i(J, B, P, n, t, l) : i(B, J, P, t, n, l);
          if (U !== r) {
            if (U)
              continue;
            R = !1;
            break;
          }
          if (D) {
            if (!ui(n, function(Q, tt) {
              if (!Se(D, tt) && (B === Q || a(B, Q, e, i, l)))
                return D.push(tt);
            })) {
              R = !1;
              break;
            }
          } else if (!(B === J || a(B, J, e, i, l))) {
            R = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), R;
      }
      function Rc(t, n, e, i, a, l, h) {
        switch (e) {
          case re:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case be:
            return !(t.byteLength != n.byteLength || !l(new er(t), new er(n)));
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
            if (g || (g = Xe), t.size != n.size && !w)
              return !1;
            var A = h.get(t);
            if (A)
              return A == n;
            i |= E, h.set(t, n);
            var I = ro(g(t), g(n), i, a, l, h);
            return h.delete(t), I;
          case He:
            if (Ee)
              return Ee.call(t) == Ee.call(n);
        }
        return !1;
      }
      function Fc(t, n, e, i, a, l) {
        var h = e & F, g = Bi(t), w = g.length, A = Bi(n), I = A.length;
        if (w != I && !h)
          return !1;
        for (var P = w; P--; ) {
          var R = g[P];
          if (!(h ? R in n : st.call(n, R)))
            return !1;
        }
        var D = l.get(t), B = l.get(n);
        if (D && B)
          return D == n && B == t;
        var J = !0;
        l.set(t, n), l.set(n, t);
        for (var U = h; ++P < w; ) {
          R = g[P];
          var Q = t[R], tt = n[R];
          if (i)
            var Vt = h ? i(tt, Q, R, n, t, l) : i(Q, tt, R, t, n, l);
          if (!(Vt === r ? Q === tt || a(Q, tt, e, i, l) : Vt)) {
            J = !1;
            break;
          }
          U || (U = R == "constructor");
        }
        if (J && !U) {
          var Dt = t.constructor, Qt = n.constructor;
          Dt != Qt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Qt == "function" && Qt instanceof Qt) && (J = !1);
        }
        return l.delete(t), l.delete(n), J;
      }
      function En(t) {
        return Zi(lo(t, r, wo), t + "");
      }
      function Bi(t) {
        return ba(t, xt, zi);
      }
      function Ui(t) {
        return ba(t, Gt, io);
      }
      var $i = ur ? function(t) {
        return ur.get(t);
      } : as;
      function Cr(t) {
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
        var t = u.iteratee || is;
        return t = t === is ? Aa : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function br(t, n) {
        var e = t.__data__;
        return Uc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
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
      function Lc(t) {
        var n = st.call(t, Jn), e = t[Jn];
        try {
          t[Jn] = r;
          var i = !0;
        } catch {
        }
        var a = tr.call(t);
        return i && (n ? t[Jn] = e : delete t[Jn]), a;
      }
      var zi = _i ? function(t) {
        return t == null ? [] : (t = at(t), kn(_i(t), function(n) {
          return fa.call(t, n);
        }));
      } : os, io = _i ? function(t) {
        for (var n = []; t; )
          Dn(n, zi(t)), t = rr(t);
        return n;
      } : os, Rt = Ot;
      (vi && Rt(new vi(new ArrayBuffer(1))) != re || Ae && Rt(new Ae()) != _t || mi && Rt(mi.resolve()) != Bt || fe && Rt(new fe()) != pt || Ie && Rt(new Ie()) != Ce) && (Rt = function(t) {
        var n = Ot(t), e = n == Mt ? t.constructor : r, i = e ? te(e) : "";
        if (i)
          switch (i) {
            case df:
              return re;
            case _f:
              return _t;
            case vf:
              return Bt;
            case mf:
              return pt;
            case wf:
              return Ce;
          }
        return n;
      });
      function Oc(t, n, e) {
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
              n = Tt(n, t + h);
              break;
            case "takeRight":
              t = bt(t, n - h);
              break;
          }
        }
        return { start: t, end: n };
      }
      function kc(t) {
        var n = t.match(Uu);
        return n ? n[1].split($u) : [];
      }
      function so(t, n, e) {
        n = $n(n, t);
        for (var i = -1, a = n.length, l = !1; ++i < a; ) {
          var h = Mn(n[i]);
          if (!(l = t != null && e(t, h)))
            break;
          t = t[h];
        }
        return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && Tr(a) && Tn(h, a) && (q(t) || ne(t)));
      }
      function Dc(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function ao(t) {
        return typeof t.constructor == "function" && !De(t) ? he(rr(t)) : {};
      }
      function Nc(t, n, e) {
        var i = t.constructor;
        switch (n) {
          case be:
            return Di(t);
          case lt:
          case yt:
            return new i(+t);
          case re:
            return yc(t, e);
          case Gr:
          case zr:
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
          case Lt:
          case mn:
            return new i(t);
          case tn:
            return Mc(t);
          case pt:
            return new i();
          case He:
            return Cc(t);
        }
      }
      function Wc(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var i = e - 1;
        return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Bu, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Bc(t) {
        return q(t) || ne(t) || !!(ca && t && t[ca]);
      }
      function Tn(t, n) {
        var e = typeof t;
        return n = n ?? _n, !!n && (e == "number" || e != "symbol" && Xu.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function kt(t, n, e) {
        if (!dt(e))
          return !1;
        var i = typeof n;
        return (i == "number" ? $t(e) && Tn(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function Hi(t, n) {
        if (q(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : ku.test(t) || !Ou.test(t) || n != null && t in at(n);
      }
      function Uc(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function qi(t) {
        var n = Cr(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var i = $i(e);
        return !!i && t === i[0];
      }
      function $c(t) {
        return !!oa && oa in t;
      }
      var Gc = Qe ? Rn : us;
      function De(t) {
        var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
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
      function zc(t) {
        var n = Pr(t, function(i) {
          return e.size === M && e.clear(), i;
        }), e = n.cache;
        return n;
      }
      function Hc(t, n) {
        var e = t[1], i = n[1], a = e | i, l = a < (N | K | It), h = i == It && e == V || i == It && e == Ht && t[7].length <= n[8] || i == (It | Ht) && n[7].length <= n[8] && e == V;
        if (!(l || h))
          return t;
        i & N && (t[2] = n[2], a |= e & N ? 0 : X);
        var g = n[3];
        if (g) {
          var w = t[3];
          t[3] = w ? Ha(w, g, n[4]) : g, t[4] = w ? Nn(t[3], b) : n[4];
        }
        return g = n[5], g && (w = t[5], t[5] = w ? qa(w, g, n[6]) : g, t[6] = w ? Nn(t[5], b) : n[6]), g = n[7], g && (t[7] = g), i & It && (t[8] = t[8] == null ? n[8] : Tt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function qc(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function Kc(t) {
        return tr.call(t);
      }
      function lo(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var i = arguments, a = -1, l = bt(i.length - n, 0), h = S(l); ++a < l; )
            h[a] = i[n + a];
          a = -1;
          for (var g = S(n + 1); ++a < n; )
            g[a] = i[a];
          return g[n] = e(h), Zt(t, this, g);
        };
      }
      function fo(t, n) {
        return n.length < 2 ? t : Qn(t, on(n, 0, -1));
      }
      function Zc(t, n) {
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
      var co = po(Oa), Ne = uf || function(t, n) {
        return Pt.setTimeout(t, n);
      }, Zi = po(_c);
      function ho(t, n, e) {
        var i = n + "";
        return Zi(t, Wc(i, Jc(kc(i), e)));
      }
      function po(t) {
        var n = 0, e = 0;
        return function() {
          var i = hf(), a = Ur - (i - e);
          if (e = i, a > 0) {
            if (++n >= $e)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Sr(t, n) {
        var e = -1, i = t.length, a = i - 1;
        for (n = n === r ? i : n; ++e < n; ) {
          var l = Ei(e, a), h = t[l];
          t[l] = t[e], t[e] = h;
        }
        return t.length = n, t;
      }
      var go = zc(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Du, function(e, i, a, l) {
          n.push(a ? l.replace(Hu, "$1") : i || e);
        }), n;
      });
      function Mn(t) {
        if (typeof t == "string" || Xt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -bn ? "-0" : n;
      }
      function te(t) {
        if (t != null) {
          try {
            return je.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Jc(t, n) {
        return en(ct, function(e) {
          var i = "_." + e[0];
          n & e[1] && !Je(t, i) && t.push(i);
        }), t.sort();
      }
      function _o(t) {
        if (t instanceof j)
          return t.clone();
        var n = new sn(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ut(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Yc(t, n, e) {
        (e ? kt(t, n, e) : n === r) ? n = 1 : n = bt(Z(n), 0);
        var i = t == null ? 0 : t.length;
        if (!i || n < 1)
          return [];
        for (var a = 0, l = 0, h = S(ar(i / n)); a < i; )
          h[l++] = on(t, a, a += n);
        return h;
      }
      function Xc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[i++] = l);
        }
        return a;
      }
      function Vc() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = S(t - 1), e = arguments[0], i = t; i--; )
          n[i - 1] = arguments[i];
        return Dn(q(e) ? Ut(e) : [e], Et(n, 1));
      }
      var Qc = Y(function(t, n) {
        return mt(t) ? Re(t, Et(n, 1, mt, !0)) : [];
      }), jc = Y(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Re(t, Et(n, 1, mt, !0), W(e, 2)) : [];
      }), th = Y(function(t, n) {
        var e = un(n);
        return mt(e) && (e = r), mt(t) ? Re(t, Et(n, 1, mt, !0), r, e) : [];
      });
      function nh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), on(t, n < 0 ? 0 : n, i)) : [];
      }
      function eh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function rh(t, n) {
        return t && t.length ? _r(t, W(n, 3), !0, !0) : [];
      }
      function ih(t, n) {
        return t && t.length ? _r(t, W(n, 3), !0) : [];
      }
      function sh(t, n, e, i) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && kt(t, n, e) && (e = 0, i = a), Vf(t, n, e, i)) : [];
      }
      function vo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), Ye(t, W(n, 3), a);
      }
      function mo(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i - 1;
        return e !== r && (a = Z(e), a = e < 0 ? bt(i + a, 0) : Tt(a, i - 1)), Ye(t, W(n, 3), a, !0);
      }
      function wo(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, 1) : [];
      }
      function ah(t) {
        var n = t == null ? 0 : t.length;
        return n ? Et(t, bn) : [];
      }
      function oh(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : Z(n), Et(t, n)) : [];
      }
      function uh(t) {
        for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
          var a = t[n];
          i[a[0]] = a[1];
        }
        return i;
      }
      function yo(t) {
        return t && t.length ? t[0] : r;
      }
      function lh(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(i + a, 0)), se(t, n, a);
      }
      function fh(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 0, -1) : [];
      }
      var ch = Y(function(t) {
        var n = gt(t, Oi);
        return n.length && n[0] === t[0] ? Si(n) : [];
      }), hh = Y(function(t) {
        var n = un(t), e = gt(t, Oi);
        return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Si(e, W(n, 2)) : [];
      }), ph = Y(function(t) {
        var n = un(t), e = gt(t, Oi);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Si(e, r, n) : [];
      });
      function gh(t, n) {
        return t == null ? "" : ff.call(t, n);
      }
      function un(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function dh(t, n, e) {
        var i = t == null ? 0 : t.length;
        if (!i)
          return -1;
        var a = i;
        return e !== r && (a = Z(e), a = a < 0 ? bt(i + a, 0) : Tt(a, i - 1)), n === n ? Zl(t, n, a) : Ye(t, js, a, !0);
      }
      function _h(t, n) {
        return t && t.length ? Ta(t, Z(n)) : r;
      }
      var vh = Y(Mo);
      function Mo(t, n) {
        return t && t.length && n && n.length ? Pi(t, n) : t;
      }
      function mh(t, n, e) {
        return t && t.length && n && n.length ? Pi(t, n, W(e, 2)) : t;
      }
      function wh(t, n, e) {
        return t && t.length && n && n.length ? Pi(t, n, r, e) : t;
      }
      var yh = En(function(t, n) {
        var e = t == null ? 0 : t.length, i = yi(t, n);
        return La(t, gt(n, function(a) {
          return Tn(a, e) ? +a : a;
        }).sort(za)), i;
      });
      function Mh(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var i = -1, a = [], l = t.length;
        for (n = W(n, 3); ++i < l; ) {
          var h = t[i];
          n(h, i, t) && (e.push(h), a.push(i));
        }
        return La(t, a), e;
      }
      function Ji(t) {
        return t == null ? t : gf.call(t);
      }
      function Ch(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (e && typeof e != "number" && kt(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Z(n), e = e === r ? i : Z(e)), on(t, n, e)) : [];
      }
      function bh(t, n) {
        return dr(t, n);
      }
      function Sh(t, n, e) {
        return Ri(t, n, W(e, 2));
      }
      function xh(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = dr(t, n);
          if (i < e && gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Ah(t, n) {
        return dr(t, n, !0);
      }
      function Ih(t, n, e) {
        return Ri(t, n, W(e, 2), !0);
      }
      function Ph(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var i = dr(t, n, !0) - 1;
          if (gn(t[i], n))
            return i;
        }
        return -1;
      }
      function Eh(t) {
        return t && t.length ? ka(t) : [];
      }
      function Th(t, n) {
        return t && t.length ? ka(t, W(n, 2)) : [];
      }
      function Rh(t) {
        var n = t == null ? 0 : t.length;
        return n ? on(t, 1, n) : [];
      }
      function Fh(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : Z(n), on(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Lh(t, n, e) {
        var i = t == null ? 0 : t.length;
        return i ? (n = e || n === r ? 1 : Z(n), n = i - n, on(t, n < 0 ? 0 : n, i)) : [];
      }
      function Oh(t, n) {
        return t && t.length ? _r(t, W(n, 3), !1, !0) : [];
      }
      function kh(t, n) {
        return t && t.length ? _r(t, W(n, 3)) : [];
      }
      var Dh = Y(function(t) {
        return Un(Et(t, 1, mt, !0));
      }), Nh = Y(function(t) {
        var n = un(t);
        return mt(n) && (n = r), Un(Et(t, 1, mt, !0), W(n, 2));
      }), Wh = Y(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, Un(Et(t, 1, mt, !0), r, n);
      });
      function Bh(t) {
        return t && t.length ? Un(t) : [];
      }
      function Uh(t, n) {
        return t && t.length ? Un(t, W(n, 2)) : [];
      }
      function $h(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Un(t, r, n) : [];
      }
      function Yi(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = kn(t, function(e) {
          if (mt(e))
            return n = bt(e.length, n), !0;
        }), hi(n, function(e) {
          return gt(t, li(e));
        });
      }
      function Co(t, n) {
        if (!(t && t.length))
          return [];
        var e = Yi(t);
        return n == null ? e : gt(e, function(i) {
          return Zt(n, r, i);
        });
      }
      var Gh = Y(function(t, n) {
        return mt(t) ? Re(t, n) : [];
      }), zh = Y(function(t) {
        return Li(kn(t, mt));
      }), Hh = Y(function(t) {
        var n = un(t);
        return mt(n) && (n = r), Li(kn(t, mt), W(n, 2));
      }), qh = Y(function(t) {
        var n = un(t);
        return n = typeof n == "function" ? n : r, Li(kn(t, mt), r, n);
      }), Kh = Y(Yi);
      function Zh(t, n) {
        return Ba(t || [], n || [], Te);
      }
      function Jh(t, n) {
        return Ba(t || [], n || [], Oe);
      }
      var Yh = Y(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, Co(t, e);
      });
      function bo(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Xh(t, n) {
        return n(t), t;
      }
      function xr(t, n) {
        return n(t);
      }
      var Vh = En(function(t) {
        var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
          return yi(l, t);
        };
        return n > 1 || this.__actions__.length || !(i instanceof j) || !Tn(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
          func: xr,
          args: [a],
          thisArg: r
        }), new sn(i, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function Qh() {
        return bo(this);
      }
      function jh() {
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
        for (var n, e = this; e instanceof fr; ) {
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
            func: xr,
            args: [Ji],
            thisArg: r
          }), new sn(n, this.__chain__);
        }
        return this.thru(Ji);
      }
      function ip() {
        return Wa(this.__wrapped__, this.__actions__);
      }
      var sp = vr(function(t, n, e) {
        st.call(t, e) ? ++t[e] : In(t, e, 1);
      });
      function ap(t, n, e) {
        var i = q(t) ? Vs : Xf;
        return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
      }
      function op(t, n) {
        var e = q(t) ? kn : Ma;
        return e(t, W(n, 3));
      }
      var up = Ya(vo), lp = Ya(mo);
      function fp(t, n) {
        return Et(Ar(t, n), 1);
      }
      function cp(t, n) {
        return Et(Ar(t, n), bn);
      }
      function hp(t, n, e) {
        return e = e === r ? 1 : Z(e), Et(Ar(t, n), e);
      }
      function So(t, n) {
        var e = q(t) ? en : Bn;
        return e(t, W(n, 3));
      }
      function xo(t, n) {
        var e = q(t) ? Tl : ya;
        return e(t, W(n, 3));
      }
      var pp = vr(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
      });
      function gp(t, n, e, i) {
        t = $t(t) ? t : ve(t), e = e && !i ? Z(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), Rr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
      }
      var dp = Y(function(t, n, e) {
        var i = -1, a = typeof n == "function", l = $t(t) ? S(t.length) : [];
        return Bn(t, function(h) {
          l[++i] = a ? Zt(n, h, e) : Fe(h, n, e);
        }), l;
      }), _p = vr(function(t, n, e) {
        In(t, e, n);
      });
      function Ar(t, n) {
        var e = q(t) ? gt : Ia;
        return e(t, W(n, 3));
      }
      function vp(t, n, e, i) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), e = i ? r : e, q(e) || (e = e == null ? [] : [e]), Ra(t, n, e));
      }
      var mp = vr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function wp(t, n, e) {
        var i = q(t) ? oi : na, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, Bn);
      }
      function yp(t, n, e) {
        var i = q(t) ? Rl : na, a = arguments.length < 3;
        return i(t, W(n, 4), e, a, ya);
      }
      function Mp(t, n) {
        var e = q(t) ? kn : Ma;
        return e(t, Er(W(n, 3)));
      }
      function Cp(t) {
        var n = q(t) ? _a : gc;
        return n(t);
      }
      function bp(t, n, e) {
        (e ? kt(t, n, e) : n === r) ? n = 1 : n = Z(n);
        var i = q(t) ? qf : dc;
        return i(t, n);
      }
      function Sp(t) {
        var n = q(t) ? Kf : vc;
        return n(t);
      }
      function xp(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Rr(t) ? oe(t) : t.length;
        var n = Rt(t);
        return n == _t || n == pt ? t.size : Ai(t).length;
      }
      function Ap(t, n, e) {
        var i = q(t) ? ui : mc;
        return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
      }
      var Ip = Y(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && kt(t, n[0], n[1]) ? n = [] : e > 2 && kt(n[0], n[1], n[2]) && (n = [n[0]]), Ra(t, Et(n, 1), []);
      }), Ir = of || function() {
        return Pt.Date.now();
      };
      function Pp(t, n) {
        if (typeof n != "function")
          throw new rn(d);
        return t = Z(t), function() {
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
        return t = Z(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Xi = Y(function(t, n, e) {
        var i = N;
        if (e.length) {
          var a = Nn(e, de(Xi));
          i |= St;
        }
        return Pn(t, i, n, e, a);
      }), Po = Y(function(t, n, e) {
        var i = N | K;
        if (e.length) {
          var a = Nn(e, de(Po));
          i |= St;
        }
        return Pn(n, i, t, e, a);
      });
      function Eo(t, n, e) {
        n = e ? r : n;
        var i = Pn(t, V, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function To(t, n, e) {
        n = e ? r : n;
        var i = Pn(t, et, r, r, r, r, r, n);
        return i.placeholder = To.placeholder, i;
      }
      function Ro(t, n, e) {
        var i, a, l, h, g, w, A = 0, I = !1, P = !1, R = !0;
        if (typeof t != "function")
          throw new rn(d);
        n = ln(n) || 0, dt(e) && (I = !!e.leading, P = "maxWait" in e, l = P ? bt(ln(e.maxWait) || 0, n) : l, R = "trailing" in e ? !!e.trailing : R);
        function D(wt) {
          var dn = i, Ln = a;
          return i = a = r, A = wt, h = t.apply(Ln, dn), h;
        }
        function B(wt) {
          return A = wt, g = Ne(Q, n), I ? D(wt) : h;
        }
        function J(wt) {
          var dn = wt - w, Ln = wt - A, Xo = n - dn;
          return P ? Tt(Xo, l - Ln) : Xo;
        }
        function U(wt) {
          var dn = wt - w, Ln = wt - A;
          return w === r || dn >= n || dn < 0 || P && Ln >= l;
        }
        function Q() {
          var wt = Ir();
          if (U(wt))
            return tt(wt);
          g = Ne(Q, J(wt));
        }
        function tt(wt) {
          return g = r, R && i ? D(wt) : (i = a = r, h);
        }
        function Vt() {
          g !== r && Ua(g), A = 0, i = w = a = g = r;
        }
        function Dt() {
          return g === r ? h : tt(Ir());
        }
        function Qt() {
          var wt = Ir(), dn = U(wt);
          if (i = arguments, a = this, w = wt, dn) {
            if (g === r)
              return B(w);
            if (P)
              return Ua(g), g = Ne(Q, n), D(w);
          }
          return g === r && (g = Ne(Q, n)), h;
        }
        return Qt.cancel = Vt, Qt.flush = Dt, Qt;
      }
      var Ep = Y(function(t, n) {
        return wa(t, 1, n);
      }), Tp = Y(function(t, n, e) {
        return wa(t, ln(n) || 0, e);
      });
      function Rp(t) {
        return Pn(t, jt);
      }
      function Pr(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new rn(d);
        var e = function() {
          var i = arguments, a = n ? n.apply(this, i) : i[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var h = t.apply(this, i);
          return e.cache = l.set(a, h) || l, h;
        };
        return e.cache = new (Pr.Cache || An)(), e;
      }
      Pr.Cache = An;
      function Er(t) {
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
      var Lp = wc(function(t, n) {
        n = n.length == 1 && q(n[0]) ? gt(n[0], Jt(W())) : gt(Et(n, 1), Jt(W()));
        var e = n.length;
        return Y(function(i) {
          for (var a = -1, l = Tt(i.length, e); ++a < l; )
            i[a] = n[a].call(this, i[a]);
          return Zt(t, this, i);
        });
      }), Vi = Y(function(t, n) {
        var e = Nn(n, de(Vi));
        return Pn(t, St, r, n, e);
      }), Fo = Y(function(t, n) {
        var e = Nn(n, de(Fo));
        return Pn(t, At, r, n, e);
      }), Op = En(function(t, n) {
        return Pn(t, Ht, r, r, r, n);
      });
      function kp(t, n) {
        if (typeof t != "function")
          throw new rn(d);
        return n = n === r ? n : Z(n), Y(t, n);
      }
      function Dp(t, n) {
        if (typeof t != "function")
          throw new rn(d);
        return n = n == null ? 0 : bt(Z(n), 0), Y(function(e) {
          var i = e[n], a = Gn(e, 0, n);
          return i && Dn(a, i), Zt(t, this, a);
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
        return Vi(ki(n), t);
      }
      function Up() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function $p(t) {
        return an(t, k);
      }
      function Gp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, k, n);
      }
      function zp(t) {
        return an(t, m | k);
      }
      function Hp(t, n) {
        return n = typeof n == "function" ? n : r, an(t, m | k, n);
      }
      function qp(t, n) {
        return n == null || ma(t, n, xt(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Kp = Mr(bi), Zp = Mr(function(t, n) {
        return t >= n;
      }), ne = Sa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Sa : function(t) {
        return vt(t) && st.call(t, "callee") && !fa.call(t, "callee");
      }, q = S.isArray, Jp = qs ? Jt(qs) : ec;
      function $t(t) {
        return t != null && Tr(t.length) && !Rn(t);
      }
      function mt(t) {
        return vt(t) && $t(t);
      }
      function Yp(t) {
        return t === !0 || t === !1 || vt(t) && Ot(t) == lt;
      }
      var zn = lf || us, Xp = Ks ? Jt(Ks) : rc;
      function Vp(t) {
        return vt(t) && t.nodeType === 1 && !We(t);
      }
      function Qp(t) {
        if (t == null)
          return !0;
        if ($t(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || zn(t) || _e(t) || ne(t)))
          return !t.length;
        var n = Rt(t);
        if (n == _t || n == pt)
          return !t.size;
        if (De(t))
          return !Ai(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function jp(t, n) {
        return Le(t, n);
      }
      function tg(t, n, e) {
        e = typeof e == "function" ? e : r;
        var i = e ? e(t, n) : r;
        return i === r ? Le(t, n, r, e) : !!i;
      }
      function Qi(t) {
        if (!vt(t))
          return !1;
        var n = Ot(t);
        return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
      }
      function ng(t) {
        return typeof t == "number" && ha(t);
      }
      function Rn(t) {
        if (!dt(t))
          return !1;
        var n = Ot(t);
        return n == Wt || n == vn || n == ot || n == cn;
      }
      function Lo(t) {
        return typeof t == "number" && t == Z(t);
      }
      function Tr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _n;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var Oo = Zs ? Jt(Zs) : sc;
      function eg(t, n) {
        return t === n || xi(t, n, Gi(n));
      }
      function rg(t, n, e) {
        return e = typeof e == "function" ? e : r, xi(t, n, Gi(n), e);
      }
      function ig(t) {
        return ko(t) && t != +t;
      }
      function sg(t) {
        if (Gc(t))
          throw new z(p);
        return xa(t);
      }
      function ag(t) {
        return t === null;
      }
      function og(t) {
        return t == null;
      }
      function ko(t) {
        return typeof t == "number" || vt(t) && Ot(t) == Lt;
      }
      function We(t) {
        if (!vt(t) || Ot(t) != Mt)
          return !1;
        var n = rr(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && je.call(e) == ef;
      }
      var ji = Js ? Jt(Js) : ac;
      function ug(t) {
        return Lo(t) && t >= -_n && t <= _n;
      }
      var Do = Ys ? Jt(Ys) : oc;
      function Rr(t) {
        return typeof t == "string" || !q(t) && vt(t) && Ot(t) == mn;
      }
      function Xt(t) {
        return typeof t == "symbol" || vt(t) && Ot(t) == He;
      }
      var _e = Xs ? Jt(Xs) : uc;
      function lg(t) {
        return t === r;
      }
      function fg(t) {
        return vt(t) && Rt(t) == Ce;
      }
      function cg(t) {
        return vt(t) && Ot(t) == Au;
      }
      var hg = Mr(Ii), pg = Mr(function(t, n) {
        return t <= n;
      });
      function No(t) {
        if (!t)
          return [];
        if ($t(t))
          return Rr(t) ? hn(t) : Ut(t);
        if (xe && t[xe])
          return Hl(t[xe]());
        var n = Rt(t), e = n == _t ? gi : n == pt ? Xe : ve;
        return e(t);
      }
      function Fn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = ln(t), t === bn || t === -bn) {
          var n = t < 0 ? -1 : 1;
          return n * ze;
        }
        return t === t ? t : 0;
      }
      function Z(t) {
        var n = Fn(t), e = n % 1;
        return n === n ? e ? n - e : n : 0;
      }
      function Wo(t) {
        return t ? Vn(Z(t), 0, L) : 0;
      }
      function ln(t) {
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
        t = ea(t);
        var e = Zu.test(t);
        return e || Yu.test(t) ? Il(t.slice(2), e ? 2 : 8) : Ku.test(t) ? Sn : +t;
      }
      function Bo(t) {
        return yn(t, Gt(t));
      }
      function gg(t) {
        return t ? Vn(Z(t), -_n, _n) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Yt(t);
      }
      var dg = pe(function(t, n) {
        if (De(n) || $t(n)) {
          yn(n, xt(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Te(t, e, n[e]);
      }), Uo = pe(function(t, n) {
        yn(n, Gt(n), t);
      }), Fr = pe(function(t, n, e, i) {
        yn(n, Gt(n), t, i);
      }), _g = pe(function(t, n, e, i) {
        yn(n, xt(n), t, i);
      }), vg = En(yi);
      function mg(t, n) {
        var e = he(t);
        return n == null ? e : va(e, n);
      }
      var wg = Y(function(t, n) {
        t = at(t);
        var e = -1, i = n.length, a = i > 2 ? n[2] : r;
        for (a && kt(n[0], n[1], a) && (i = 1); ++e < i; )
          for (var l = n[e], h = Gt(l), g = -1, w = h.length; ++g < w; ) {
            var A = h[g], I = t[A];
            (I === r || gn(I, le[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), yg = Y(function(t) {
        return t.push(r, eo), Zt($o, r, t);
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
        return t == null ? [] : pr(t, xt(t));
      }
      function Pg(t) {
        return t == null ? [] : pr(t, Gt(t));
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
      var Tg = Va(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
      }, rs(zt)), Rg = Va(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, W), Fg = Y(Fe);
      function xt(t) {
        return $t(t) ? da(t) : Ai(t);
      }
      function Gt(t) {
        return $t(t) ? da(t, !0) : lc(t);
      }
      function Lg(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(i, a, l) {
          In(e, n(i, a, l), i);
        }), e;
      }
      function Og(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(i, a, l) {
          In(e, a, n(i, a, l));
        }), e;
      }
      var kg = pe(function(t, n, e) {
        gr(t, n, e);
      }), $o = pe(function(t, n, e, i) {
        gr(t, n, e, i);
      }), Dg = En(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var i = !1;
        n = gt(n, function(l) {
          return l = $n(l, t), i || (i = l.length > 1), l;
        }), yn(t, Ui(t), e), i && (e = an(e, m | T | k, Tc));
        for (var a = n.length; a--; )
          Fi(e, n[a]);
        return e;
      });
      function Ng(t, n) {
        return Go(t, Er(W(n)));
      }
      var Wg = En(function(t, n) {
        return t == null ? {} : cc(t, n);
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
        return t == null ? t : Oe(t, n, e);
      }
      function $g(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Oe(t, n, e, i);
      }
      var zo = to(xt), Ho = to(Gt);
      function Gg(t, n, e) {
        var i = q(t), a = i || zn(t) || _e(t);
        if (n = W(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = i ? new l() : [] : dt(t) ? e = Rn(l) ? he(rr(t)) : {} : e = {};
        }
        return (a ? en : wn)(t, function(h, g, w) {
          return n(e, h, g, w);
        }), e;
      }
      function zg(t, n) {
        return t == null ? !0 : Fi(t, n);
      }
      function Hg(t, n, e) {
        return t == null ? t : Na(t, n, ki(e));
      }
      function qg(t, n, e, i) {
        return i = typeof i == "function" ? i : r, t == null ? t : Na(t, n, ki(e), i);
      }
      function ve(t) {
        return t == null ? [] : pi(t, xt(t));
      }
      function Kg(t) {
        return t == null ? [] : pi(t, Gt(t));
      }
      function Zg(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = ln(e), e = e === e ? e : 0), n !== r && (n = ln(n), n = n === n ? n : 0), Vn(ln(t), n, e);
      }
      function Jg(t, n, e) {
        return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = ln(t), tc(t, n, e);
      }
      function Yg(t, n, e) {
        if (e && typeof e != "boolean" && kt(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
          var i = t;
          t = n, n = i;
        }
        if (e || t % 1 || n % 1) {
          var a = pa();
          return Tt(t + a * (n - t + Al("1e-" + ((a + "").length - 1))), n);
        }
        return Ei(t, n);
      }
      var Xg = ge(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? qo(n) : n);
      });
      function qo(t) {
        return es(it(t).toLowerCase());
      }
      function Ko(t) {
        return t = it(t), t && t.replace(Vu, Bl).replace(_l, "");
      }
      function Vg(t, n, e) {
        t = it(t), n = Yt(n);
        var i = t.length;
        e = e === r ? i : Vn(Z(e), 0, i);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function Qg(t) {
        return t = it(t), t && Ru.test(t) ? t.replace(Cs, Ul) : t;
      }
      function jg(t) {
        return t = it(t), t && Nu.test(t) ? t.replace(Vr, "\\$&") : t;
      }
      var td = ge(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), nd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), ed = Ja("toLowerCase");
      function rd(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        if (!n || i >= n)
          return t;
        var a = (n - i) / 2;
        return yr(or(a), e) + t + yr(ar(a), e);
      }
      function id(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? t + yr(n - i, e) : t;
      }
      function sd(t, n, e) {
        t = it(t), n = Z(n);
        var i = n ? oe(t) : 0;
        return n && i < n ? yr(n - i, e) + t : t;
      }
      function ad(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), pf(it(t).replace(Qr, ""), n || 0);
      }
      function od(t, n, e) {
        return (e ? kt(t, n, e) : n === r) ? n = 1 : n = Z(n), Ti(it(t), n);
      }
      function ud() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var ld = ge(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function fd(t, n, e) {
        return e && typeof e != "number" && kt(t, n, e) && (n = e = r), e = e === r ? L : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? Gn(hn(t), 0, e) : t.split(n, e)) : [];
      }
      var cd = ge(function(t, n, e) {
        return t + (e ? " " : "") + es(n);
      });
      function hd(t, n, e) {
        return t = it(t), e = e == null ? 0 : Vn(Z(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
      }
      function pd(t, n, e) {
        var i = u.templateSettings;
        e && kt(t, n, e) && (n = r), t = it(t), n = Fr({}, n, i, no);
        var a = Fr({}, n.imports, i.imports, no), l = xt(a), h = pi(a, l), g, w, A = 0, I = n.interpolate || qe, P = "__p += '", R = di(
          (n.escape || qe).source + "|" + I.source + "|" + (I === bs ? qu : qe).source + "|" + (n.evaluate || qe).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ml + "]") + `
`;
        t.replace(R, function(U, Q, tt, Vt, Dt, Qt) {
          return tt || (tt = Vt), P += t.slice(A, Qt).replace(Qu, $l), Q && (g = !0, P += `' +
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
        var J = Jo(function() {
          return rt(l, D + "return " + P).apply(r, h);
        });
        if (J.source = P, Qi(J))
          throw J;
        return J;
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
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = hn(n), l = ra(i, a), h = ia(i, a) + 1;
        return Gn(i, l, h).join("");
      }
      function vd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, aa(t) + 1);
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = ia(i, hn(n)) + 1;
        return Gn(i, 0, a).join("");
      }
      function md(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(Qr, "");
        if (!t || !(n = Yt(n)))
          return t;
        var i = hn(t), a = ra(i, hn(n));
        return Gn(i, a).join("");
      }
      function wd(t, n) {
        var e = qt, i = ye;
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
        var g = e - oe(i);
        if (g < 1)
          return i;
        var w = h ? Gn(h, 0, g).join("") : t.slice(0, g);
        if (a === r)
          return w + i;
        if (h && (g += w.length - g), ji(a)) {
          if (t.slice(g).search(a)) {
            var A, I = w;
            for (a.global || (a = di(a.source, it(Ss.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var P = A.index;
            w = w.slice(0, P === r ? g : P);
          }
        } else if (t.indexOf(Yt(a), g) != g) {
          var R = w.lastIndexOf(a);
          R > -1 && (w = w.slice(0, R));
        }
        return w + i;
      }
      function yd(t) {
        return t = it(t), t && Tu.test(t) ? t.replace(Ms, Jl) : t;
      }
      var Md = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), es = Ja("toUpperCase");
      function Zo(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? zl(t) ? Vl(t) : Ol(t) : t.match(n) || [];
      }
      var Jo = Y(function(t, n) {
        try {
          return Zt(t, r, n);
        } catch (e) {
          return Qi(e) ? e : new z(e);
        }
      }), Cd = En(function(t, n) {
        return en(n, function(e) {
          e = Mn(e), In(t, e, Xi(t[e], t));
        }), t;
      });
      function bd(t) {
        var n = t == null ? 0 : t.length, e = W();
        return t = n ? gt(t, function(i) {
          if (typeof i[1] != "function")
            throw new rn(d);
          return [e(i[0]), i[1]];
        }) : [], Y(function(i) {
          for (var a = -1; ++a < n; ) {
            var l = t[a];
            if (Zt(l[0], this, i))
              return Zt(l[1], this, i);
          }
        });
      }
      function Sd(t) {
        return Yf(an(t, m));
      }
      function rs(t) {
        return function() {
          return t;
        };
      }
      function xd(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Ad = Xa(), Id = Xa(!0);
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
      var Td = Y(function(t, n) {
        return function(e) {
          return Fe(e, t, n);
        };
      }), Rd = Y(function(t, n) {
        return function(e) {
          return Fe(t, e, n);
        };
      });
      function ss(t, n, e) {
        var i = xt(n), a = pr(n, i);
        e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = pr(n, xt(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
        return en(a, function(g) {
          var w = n[g];
          t[g] = w, h && (t.prototype[g] = function() {
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
        return t = Z(t), Y(function(n) {
          return Ta(n, t);
        });
      }
      var Od = Ni(gt), kd = Ni(Vs), Dd = Ni(ui);
      function Yo(t) {
        return Hi(t) ? li(Mn(t)) : hc(t);
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
        if (t = Z(t), t < 1 || t > _n)
          return [];
        var e = L, i = Tt(t, L);
        n = W(n), t -= L;
        for (var a = hi(i, n); ++e < t; )
          n(e);
        return a;
      }
      function Hd(t) {
        return q(t) ? gt(t, Mn) : Xt(t) ? [t] : Ut(go(it(t)));
      }
      function qd(t) {
        var n = ++nf;
        return it(t) + n;
      }
      var Kd = wr(function(t, n) {
        return t + n;
      }, 0), Zd = Wi("ceil"), Jd = wr(function(t, n) {
        return t / n;
      }, 1), Yd = Wi("floor");
      function Xd(t) {
        return t && t.length ? hr(t, zt, bi) : r;
      }
      function Vd(t, n) {
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
      var e0 = wr(function(t, n) {
        return t * n;
      }, 1), r0 = Wi("round"), i0 = wr(function(t, n) {
        return t - n;
      }, 0);
      function s0(t) {
        return t && t.length ? ci(t, zt) : 0;
      }
      function a0(t, n) {
        return t && t.length ? ci(t, W(n, 2)) : 0;
      }
      return u.after = Pp, u.ary = Ao, u.assign = dg, u.assignIn = Uo, u.assignInWith = Fr, u.assignWith = _g, u.at = vg, u.before = Io, u.bind = Xi, u.bindAll = Cd, u.bindKey = Po, u.castArray = Up, u.chain = bo, u.chunk = Yc, u.compact = Xc, u.concat = Vc, u.cond = bd, u.conforms = Sd, u.constant = rs, u.countBy = sp, u.create = mg, u.curry = Eo, u.curryRight = To, u.debounce = Ro, u.defaults = wg, u.defaultsDeep = yg, u.defer = Ep, u.delay = Tp, u.difference = Qc, u.differenceBy = jc, u.differenceWith = th, u.drop = nh, u.dropRight = eh, u.dropRightWhile = rh, u.dropWhile = ih, u.fill = sh, u.filter = op, u.flatMap = fp, u.flatMapDeep = cp, u.flatMapDepth = hp, u.flatten = wo, u.flattenDeep = ah, u.flattenDepth = oh, u.flip = Rp, u.flow = Ad, u.flowRight = Id, u.fromPairs = uh, u.functions = Ig, u.functionsIn = Pg, u.groupBy = pp, u.initial = fh, u.intersection = ch, u.intersectionBy = hh, u.intersectionWith = ph, u.invert = Tg, u.invertBy = Rg, u.invokeMap = dp, u.iteratee = is, u.keyBy = _p, u.keys = xt, u.keysIn = Gt, u.map = Ar, u.mapKeys = Lg, u.mapValues = Og, u.matches = Pd, u.matchesProperty = Ed, u.memoize = Pr, u.merge = kg, u.mergeWith = $o, u.method = Td, u.methodOf = Rd, u.mixin = ss, u.negate = Er, u.nthArg = Ld, u.omit = Dg, u.omitBy = Ng, u.once = Fp, u.orderBy = vp, u.over = Od, u.overArgs = Lp, u.overEvery = kd, u.overSome = Dd, u.partial = Vi, u.partialRight = Fo, u.partition = mp, u.pick = Wg, u.pickBy = Go, u.property = Yo, u.propertyOf = Nd, u.pull = vh, u.pullAll = Mo, u.pullAllBy = mh, u.pullAllWith = wh, u.pullAt = yh, u.range = Wd, u.rangeRight = Bd, u.rearg = Op, u.reject = Mp, u.remove = Mh, u.rest = kp, u.reverse = Ji, u.sampleSize = bp, u.set = Ug, u.setWith = $g, u.shuffle = Sp, u.slice = Ch, u.sortBy = Ip, u.sortedUniq = Eh, u.sortedUniqBy = Th, u.split = fd, u.spread = Dp, u.tail = Rh, u.take = Fh, u.takeRight = Lh, u.takeRightWhile = Oh, u.takeWhile = kh, u.tap = Xh, u.throttle = Np, u.thru = xr, u.toArray = No, u.toPairs = zo, u.toPairsIn = Ho, u.toPath = Hd, u.toPlainObject = Bo, u.transform = Gg, u.unary = Wp, u.union = Dh, u.unionBy = Nh, u.unionWith = Wh, u.uniq = Bh, u.uniqBy = Uh, u.uniqWith = $h, u.unset = zg, u.unzip = Yi, u.unzipWith = Co, u.update = Hg, u.updateWith = qg, u.values = ve, u.valuesIn = Kg, u.without = Gh, u.words = Zo, u.wrap = Bp, u.xor = zh, u.xorBy = Hh, u.xorWith = qh, u.zip = Kh, u.zipObject = Zh, u.zipObjectDeep = Jh, u.zipWith = Yh, u.entries = zo, u.entriesIn = Ho, u.extend = Uo, u.extendWith = Fr, ss(u, u), u.add = Kd, u.attempt = Jo, u.camelCase = Xg, u.capitalize = qo, u.ceil = Zd, u.clamp = Zg, u.clone = $p, u.cloneDeep = zp, u.cloneDeepWith = Hp, u.cloneWith = Gp, u.conformsTo = qp, u.deburr = Ko, u.defaultTo = xd, u.divide = Jd, u.endsWith = Vg, u.eq = gn, u.escape = Qg, u.escapeRegExp = jg, u.every = ap, u.find = up, u.findIndex = vo, u.findKey = Mg, u.findLast = lp, u.findLastIndex = mo, u.findLastKey = Cg, u.floor = Yd, u.forEach = So, u.forEachRight = xo, u.forIn = bg, u.forInRight = Sg, u.forOwn = xg, u.forOwnRight = Ag, u.get = ts, u.gt = Kp, u.gte = Zp, u.has = Eg, u.hasIn = ns, u.head = yo, u.identity = zt, u.includes = gp, u.indexOf = lh, u.inRange = Jg, u.invoke = Fg, u.isArguments = ne, u.isArray = q, u.isArrayBuffer = Jp, u.isArrayLike = $t, u.isArrayLikeObject = mt, u.isBoolean = Yp, u.isBuffer = zn, u.isDate = Xp, u.isElement = Vp, u.isEmpty = Qp, u.isEqual = jp, u.isEqualWith = tg, u.isError = Qi, u.isFinite = ng, u.isFunction = Rn, u.isInteger = Lo, u.isLength = Tr, u.isMap = Oo, u.isMatch = eg, u.isMatchWith = rg, u.isNaN = ig, u.isNative = sg, u.isNil = og, u.isNull = ag, u.isNumber = ko, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = We, u.isRegExp = ji, u.isSafeInteger = ug, u.isSet = Do, u.isString = Rr, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = lg, u.isWeakMap = fg, u.isWeakSet = cg, u.join = gh, u.kebabCase = td, u.last = un, u.lastIndexOf = dh, u.lowerCase = nd, u.lowerFirst = ed, u.lt = hg, u.lte = pg, u.max = Xd, u.maxBy = Vd, u.mean = Qd, u.meanBy = jd, u.min = t0, u.minBy = n0, u.stubArray = os, u.stubFalse = us, u.stubObject = Ud, u.stubString = $d, u.stubTrue = Gd, u.multiply = e0, u.nth = _h, u.noConflict = Fd, u.noop = as, u.now = Ir, u.pad = rd, u.padEnd = id, u.padStart = sd, u.parseInt = ad, u.random = Yg, u.reduce = wp, u.reduceRight = yp, u.repeat = od, u.replace = ud, u.result = Bg, u.round = r0, u.runInContext = v, u.sample = Cp, u.size = xp, u.snakeCase = ld, u.some = Ap, u.sortedIndex = bh, u.sortedIndexBy = Sh, u.sortedIndexOf = xh, u.sortedLastIndex = Ah, u.sortedLastIndexBy = Ih, u.sortedLastIndexOf = Ph, u.startCase = cd, u.startsWith = hd, u.subtract = i0, u.sum = s0, u.sumBy = a0, u.template = pd, u.times = zd, u.toFinite = Fn, u.toInteger = Z, u.toLength = Wo, u.toLower = gd, u.toNumber = ln, u.toSafeInteger = gg, u.toString = it, u.toUpper = dd, u.trim = _d, u.trimEnd = vd, u.trimStart = md, u.truncate = wd, u.unescape = yd, u.uniqueId = qd, u.upperCase = Md, u.upperFirst = es, u.each = So, u.eachRight = xo, u.first = yo, ss(u, function() {
        var t = {};
        return wn(u, function(n, e) {
          st.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), en(["drop", "take"], function(t, n) {
        j.prototype[t] = function(e) {
          e = e === r ? 1 : bt(Z(e), 0);
          var i = this.__filtered__ && !n ? new j(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = Tt(e, i.__takeCount__) : i.__views__.push({
            size: Tt(e, L),
            type: t + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, j.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), en(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, i = e == Me || e == $r;
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
      }, j.prototype.invokeMap = Y(function(t, n) {
        return typeof t == "function" ? new j(this) : this.map(function(e) {
          return Fe(e, t, n);
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
        return this.take(L);
      }, wn(j.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), a = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
        a && (u.prototype[n] = function() {
          var h = this.__wrapped__, g = i ? [1] : arguments, w = h instanceof j, A = g[0], I = w || q(h), P = function(Q) {
            var tt = a.apply(u, Dn([Q], g));
            return i && R ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (w = I = !1);
          var R = this.__chain__, D = !!this.__actions__.length, B = l && !R, J = w && !D;
          if (!l && I) {
            h = J ? h : new j(this);
            var U = t.apply(h, g);
            return U.__actions__.push({ func: xr, args: [P], thisArg: r }), new sn(U, R);
          }
          return B && J ? t.apply(this, g) : (U = this.thru(P), B ? i ? U.value()[0] : U.value() : U);
        });
      }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ve[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
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
      }), wn(j.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var i = e.name + "";
          st.call(ce, i) || (ce[i] = []), ce[i].push({ name: n, func: e });
        }
      }), ce[mr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = yf, j.prototype.reverse = Mf, j.prototype.value = Cf, u.prototype.at = Vh, u.prototype.chain = Qh, u.prototype.commit = jh, u.prototype.next = tp, u.prototype.plant = ep, u.prototype.reverse = rp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ip, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = np), u;
    }, ue = Ql();
    Zn ? ((Zn.exports = ue)._ = ue, ii._ = ue) : Pt._ = ue;
  }).call(Be);
})(Dr, Dr.exports);
var su = Dr.exports;
const H = /* @__PURE__ */ iu(su);
var gs = { exports: {} }, ls, Vo;
function l0() {
  if (Vo) return ls;
  Vo = 1;
  var c = 1e3, s = c * 60, r = s * 60, o = r * 24, f = o * 7, p = o * 365.25;
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
        var T = parseFloat(m[1]), k = (m[2] || "ms").toLowerCase();
        switch (k) {
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
            return T * c;
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
    return m >= o ? Math.round(b / o) + "d" : m >= r ? Math.round(b / r) + "h" : m >= s ? Math.round(b / s) + "m" : m >= c ? Math.round(b / c) + "s" : b + "ms";
  }
  function y(b) {
    var m = Math.abs(b);
    return m >= o ? M(b, m, o, "day") : m >= r ? M(b, m, r, "hour") : m >= s ? M(b, m, s, "minute") : m >= c ? M(b, m, c, "second") : b + " ms";
  }
  function M(b, m, T, k) {
    var F = m >= T * 1.5;
    return Math.round(b / T) + " " + k + (F ? "s" : "");
  }
  return ls;
}
function f0(c) {
  r.debug = r, r.default = r, r.coerce = y, r.disable = p, r.enable = f, r.enabled = d, r.humanize = l0(), r.destroy = M, Object.keys(c).forEach((b) => {
    r[b] = c[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function s(b) {
    let m = 0;
    for (let T = 0; T < b.length; T++)
      m = (m << 5) - m + b.charCodeAt(T), m |= 0;
    return r.colors[Math.abs(m) % r.colors.length];
  }
  r.selectColor = s;
  function r(b) {
    let m, T = null, k, F;
    function E(...N) {
      if (!E.enabled)
        return;
      const K = E, X = Number(/* @__PURE__ */ new Date()), V = X - (m || X);
      K.diff = V, K.prev = m, K.curr = X, m = X, N[0] = r.coerce(N[0]), typeof N[0] != "string" && N.unshift("%O");
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
      get: () => T !== null ? T : (k !== r.namespaces && (k = r.namespaces, F = r.enabled(b)), F),
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
    const T = (typeof b == "string" ? b : "").split(/[\s,]+/), k = T.length;
    for (m = 0; m < k; m++)
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
var c0 = f0;
(function(c, s) {
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
    if (y[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + y[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
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
  c.exports = c0(s);
  const { formatters: _ } = c.exports;
  _.j = function(y) {
    try {
      return JSON.stringify(y);
    } catch (M) {
      return "[UnexpectedJSONParseError]: " + M.message;
    }
  };
})(gs, gs.exports);
var h0 = gs.exports;
const p0 = /* @__PURE__ */ iu(h0), fs = {};
function Kn(c) {
  if (!fs[c]) {
    const s = p0("ultraPacer:core");
    s(`loading debug for namespace "${c}"`), fs[c] = s.extend(c);
  }
  return fs[c];
}
function Nt(c, s = 0) {
  return Math.round(c * 10 ** s) / 10 ** s;
}
function me(c, s, r, o, f) {
  return r + (f - c) / (s - c) * (o - r);
}
function au(c, s, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < c[f])
      p.push(s[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[o]; )
        f++;
      f === c.length - 1 || r[o] === c[f] ? p.push(s[f]) : p.push(me(c[f], c[f + 1], s[f], s[f + 1], r[o]));
    }
  return p;
}
function ou(c) {
  let s, r, o, f, p = 0, d = 0, _ = 0, y = 0, M = 0;
  for (s = 0; s < c.length; s++)
    r = c[s][0], o = c[s][1], f = c[s][2], M += f, p += f * r, _ += f * (r * r), d += f * o, y += f * (r * o);
  const b = (d * _ - p * y) / (M * _ - p * p);
  return [(M * y - p * d) / (M * _ - p * p), b];
}
function uu(c, s, r, o) {
  let f = 0, p = 0;
  const d = [];
  return r.forEach((_) => {
    for (; c[f] < _ - o; )
      f++;
    for (f > 0 && c[f] >= _ && f--; p < c.length - 1 && c[p + 1] <= _ + o; )
      p++;
    p < c.length - 1 && c[p] <= _ && p++;
    const y = Math.max(o, Math.abs(_ - c[f]) + 1e-3, Math.abs(_ - c[p]) + 1e-3), M = [];
    let b = 0;
    for (let m = f; m <= p; m++)
      b = (1 - (Math.abs(_ - c[m]) / y) ** 3) ** 3, M.push([c[m], s[m], b]);
    d.push(ou(M));
  }), d;
}
function vs(c, s, r) {
  return Nt(c, r) < Nt(s, r);
}
function g0(c, s, r) {
  return Nt(c, r) > Nt(s, r);
}
function we(c, s, r) {
  return Nt(c, r) <= Nt(s, r);
}
function Br(c, s, r) {
  return Nt(c, r) >= Nt(s, r);
}
function Ue(c, s, r) {
  return Nt(c, r) === Nt(s, r);
}
const B0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: au,
  linearRegression: ou,
  req: Ue,
  rgt: g0,
  rgte: Br,
  rlt: vs,
  rlte: we,
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
function lu(c, s) {
  (s === null || typeof s > "u") && (s = d0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const jo = {
  baseline: 0,
  terrainScale: 1
};
function _0(c, s) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return s >= c.sunrise && s <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (s <= c.dawn || s >= c.dusk) ? 1 : r(s) >= r(c.nadir) ? me(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(s)
  ) : me(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(s)
  );
}
function fu(c, s, r, o = jo) {
  if (s === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = jo);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * f, d = _0(r, c);
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
function cu(c, s) {
  return (s === null || typeof s > "u") && (s = v0), c < s.lower.lim ? s.lower.m * c + s.lower.b : c > s.upper.lim ? s.upper.m * c + s.upper.b : s.a * c ** 2 + s.b * c + 1;
}
function hu(c, s) {
  if (!s) return 1;
  const r = c.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return o += s.baseline / 100, o;
}
function pu(c, s) {
  const r = H.findLast(s.terrain, (o) => we(o.percents[0] * s.dist, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const gu = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function ms(c) {
  const s = new Cn().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    s.applyEach((f, p) => f + o * p, r);
  }), s.scaleEach(1 / su.sumBy(c, "dist")), s;
}
function m0(c, s) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const d = p === c.length - 1 ? s : c[p + 1].onset, _ = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + _) * (d - f.onset), r += f.value;
  }), o / s;
}
function w0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function y0(c, s, r) {
  let o = -m0(s, r);
  return s.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        o += f.value;
      else if (f.type === "linear") {
        const d = p === s.length - 1 ? r : s[p + 1].onset;
        c > d ? o += f.value : o += f.value * (c - f.onset) / (d - f.onset);
      }
    }
  }), o;
}
class du {
  constructor(s, r) {
    C(this, "plan");
    C(this, "values");
    this.plan = s, this.values = r ? H.cloneDeep(r) : [{ onset: 0, value: w0(this.plan.course.dist), type: "linear" }];
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
function ds(c, s) {
  return s === void 0 ? c : (c - 1) * s + 1;
}
function ws(c, s) {
  c.factors || (c.factors = new Cn()), Object.assign(c.factors, {
    grade: cu(c.grade),
    altitude: lu(c.alt),
    terrain: pu(c, s)
  });
}
function Nr(c, s) {
  var r, o;
  if (c.factors || (c.factors = new Cn()), ws(c, s.course), s) {
    if (c.factors === void 0) throw new Error("no factors");
    c.factors.strategy = s.strategy.at(c.loc), Object.assign(c.factors, {
      heat: s.heatModel ? hu(c, s.heatModel) : 1,
      dark: s.event.sun ? fu(c.tod, c.factors.terrain, s.event.sun) : 1
    });
  }
  c.factors.altitude = ds(c.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), c.factors.dark = ds(c.factors.dark, (o = s.scales) == null ? void 0 : o.dark);
}
const U0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: du,
  applyScale: ds,
  generateCourseFactors: ws,
  generatePlanFactors: Nr,
  getAltitudeFactor: lu,
  getDarkFactor: fu,
  getGradeFactor: cu,
  getHeatFactor: hu,
  getTerrainFactor: pu,
  list: gu,
  rollup: ms
}, Symbol.toStringTag, { value: "Module" }));
function _u(c) {
  switch (c) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function Lr(c) {
  return typeof c == "number" && !isNaN(c);
}
function M0(c, s, r) {
  const o = c.filter(
    (p, d) => d >= c.findIndex((_) => _ === s) && d <= c.findIndex((_) => _ === r)
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
    if (!(!Lr(this.point1.elapsed) || !Lr(this.point2.elapsed) || !Lr(this.point1.time) || !Lr(this.point2.time)))
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
    if (!(!H.isNumber(this.point1.time) || !H.isNumber(this.point2.time)))
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
const cs = Kn("CourseSplits");
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
    cs("createSegments");
    const s = this.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    cs(`createSplits:${s}`);
    const r = _u(s), o = H.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var T;
    cs.extend("calcSegments")("exec");
    const o = this.course, f = o.points, p = [], d = [];
    let _, y, M = o.points[0], b;
    for (_ = 0, y = s.length; _ < y; _++) {
      const k = s[_];
      b && Ue((T = s[_ - 1]) == null ? void 0 : T.end, k.start, 4) ? M = b : M = o.getPoint(k.start), b = o.getPoint(k.end);
      const F = k.end - k.start, E = new C0(this.course, {
        gain: 0,
        loss: 0,
        grade: F > 0 ? (b.alt - M.alt) / F / 10 * (b.alt - M.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: M,
        point2: b
      }), N = new Cn().init(0);
      p.push(E), d.push(N);
    }
    const m = (k, F, E, N) => {
      const K = E.alt - F.alt;
      k[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), ws(F, o);
      const X = E.loc - F.loc;
      N.applyEach((V, et) => V + et * X, F.factors);
    };
    _ = 1;
    for (let k = 0; k < p.length; k++) {
      const F = p[k], E = d[k];
      for (; we(f[_].loc, F.point1.loc, 4); ) _++;
      let N = F.point1;
      for (; _ < f.length && we(f[_].loc, F.point2.loc, 4); ) {
        const K = f[_];
        m(F, N, K, E), N = K, _++;
      }
      m(F, N, F.point2, E);
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
        var p = (r * 60).toFixed(f), _ = Math.floor(p / 60), y = (p % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), dms = _ + "°" + y + "′";
        break;
      case "dms":
        var d = (r * 3600).toFixed(f), _ = Math.floor(d / 3600), y = Math.floor(d / 60) % 60, M = (d % 60).toFixed(f);
        _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = _ + "°" + y + "′" + M + "″";
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
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), _ = p - o, y = d - f, M = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(o) * Math.cos(p) * Math.sin(y / 2) * Math.sin(y / 2), b = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
    return b;
  }, c.latlon.prototype.bearingTo = function(r) {
    var o = this.bearingRadTo(r);
    return (o.toDeg() + 360) % 360;
  }, c.latlon.prototype.bearingRadTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), y = Math.atan2(_, d);
    return y;
  }, c.latlon.prototype.finalBearingTo = function(r) {
    var o = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(f), _ = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), y = Math.atan2(d, _);
    return (y.toDeg() + 180) % 360;
  }, c.latlon.prototype.midpointTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(f) * Math.cos(p), _ = Math.cos(f) * Math.sin(p), y = this.lng.toRad(), M = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + d) * (Math.cos(o) + d) + _ * _)), b = y + Math.atan2(_, Math.cos(o) + d);
    return b = (b + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(M.toDeg(), b.toDeg());
  }, c.midpoint = function(r) {
    var o = 0, f = 0, p = 0;
    for (var d in r) {
      var _ = r[d], y = _.lat * Math.PI / 180, M = _.lng * Math.PI / 180, b = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), T = Math.sin(y);
      o += b, f += m, p += T;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var k = Math.atan2(f, o), F = Math.sqrt(o * o + f * f), E = Math.atan2(p, F);
    return new c.latlon(E * 180 / Math.PI, k * 180 / Math.PI);
  }, c.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), _ = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var y = Math.sin(d), M = Math.cos(d), b = [], m = 0; m < o; m++) {
      var T = 1 / (o - 1) * m, k = f * T, F = Math.sin(k), E = Math.cos(k), N = Math.asin(y * E + M * F * Math.cos(p)), K = _ + Math.atan2(Math.sin(p) * F * M, E - y * Math.sin(N)), X = N.toDeg(), V = K.toDeg();
      for (X > 90 && (X = 90), X < -90 && (X = -90); V > 180; ) V -= 360;
      for (; V <= -180; ) V += 360;
      b.push(new c.latlon(X, V));
    }
    return b;
  }, c.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / s, r = r.toRad();
    var f = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), _ = p + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(f),
      Math.cos(o) - Math.sin(f) * Math.sin(d)
    );
    return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(d.toDeg(), _.toDeg());
  }, c.latlon.intersection = function(r, o, f, p) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
    var d = r.lat.toRad(), _ = r.lng.toRad(), y = f.lat.toRad(), M = f.lng.toRad(), b = o.toRad(), m = p.toRad(), T = y - d, k = M - _, F = 2 * Math.asin(Math.sqrt(Math.sin(T / 2) * Math.sin(T / 2) + Math.cos(d) * Math.cos(y) * Math.sin(k / 2) * Math.sin(k / 2)));
    if (F == 0) return null;
    var E = Math.acos((Math.sin(y) - Math.sin(d) * Math.cos(F)) / (Math.sin(F) * Math.cos(d)));
    isNaN(E) && (E = 0);
    var N = Math.acos((Math.sin(d) - Math.sin(y) * Math.cos(F)) / (Math.sin(F) * Math.cos(y)));
    if (Math.sin(M - _) > 0)
      var K = E, X = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - E, X = N;
    var V = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (X - m + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(V) == 0 && Math.sin(et) == 0 || Math.sin(V) * Math.sin(et) < 0) return null;
    var St = Math.acos(-Math.cos(V) * Math.cos(et) + Math.sin(V) * Math.sin(et) * Math.cos(F)), At = Math.atan2(
      Math.sin(F) * Math.sin(V) * Math.sin(et),
      Math.cos(et) + Math.cos(V) * Math.cos(St)
    ), It = Math.asin(Math.sin(d) * Math.cos(At) + Math.cos(d) * Math.sin(At) * Math.cos(b)), Ht = Math.atan2(
      Math.sin(b) * Math.sin(At) * Math.cos(d),
      Math.cos(At) - Math.sin(d) * Math.sin(It)
    ), jt = _ + Ht;
    return jt = (jt + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(It.toDeg(), jt.toDeg());
  }, c.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = s, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), M = isFinite(d / y) ? d / y : Math.cos(f);
    Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
    var b = Math.sqrt(d * d + M * M * _ * _) * o;
    return b.toPrecisionFixed(4);
  }, c.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
    var _ = Math.atan2(p, d);
    return (_.toDeg() + 360) % 360;
  }, c.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var f = s, p = parseFloat(o) / f, d = this.lat.toRad(), _ = this.lng.toRad();
    r = r.toRad();
    var y = p * Math.cos(r);
    Math.abs(y) < 1e-10 && (y = 0);
    var M = d + y, b = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(y / b) ? y / b : Math.cos(d), T = p * Math.sin(r) / m;
    Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
    var k = (_ + T + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new c.latlon(M.toDeg(), k.toDeg());
  }, c.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
    Math.abs(d - f) > Math.PI && (f += 2 * Math.PI);
    var _ = (o + p) / 2, y = Math.tan(Math.PI / 4 + o / 2), M = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + _ / 2), m = ((d - f) * Math.log(b) + f * Math.log(M) - d * Math.log(y)) / Math.log(M / y);
    return isFinite(m) || (m = (f + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(_.toDeg(), m.toDeg());
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
function Mu(c, s, r) {
  if (c.loc > s.loc && r > c.loc || s.loc > c.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(s.latlon), { lat: p, lng: d } = c.latlon.destinationPoint(f, o), _ = c.grade, y = me(c.loc, s.loc, c.alt, s.alt, r);
  return new yu(p, d, y, r, _);
}
function x0(c, s) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof s == "object" ? String(s.id) : s);
}
function _s(c, s) {
  return !!(c && s && x0(c.site, s.site) && c.loop === s.loop);
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
    if (!H.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
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
const Or = Kn("models:Waypoint");
class hs {
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
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Or(`constructor: ${this.name}`);
  }
  clearCache() {
    Or(`clearCache: ${this.name}`), delete this._waypoints, this._lat = NaN, this._lon = NaN, this._alt = NaN;
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
    return this._waypoints ? this._waypoints : (Or(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new tu(this, this.course.loops)] : this._waypoints = H.range(this.course.loops).map((s) => new tu(this, s + 1)), this._waypoints);
  }
  get lat() {
    return H.isNaN(this._lat) && this.refreshLLA(), this._lat;
  }
  get lon() {
    return H.isNaN(this._lon) && this.refreshLLA(), this._lon;
  }
  get alt() {
    return H.isNaN(this._alt) && this.refreshLLA(), this._alt;
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    Or("refreshLLA");
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
}
var Cu = { exports: {} };
(function(c, s) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, _ = Math.atan2, y = Math.acos, M = r / 180, b = 1e3 * 60 * 60 * 24, m = 2440588, T = 2451545;
    function k(L) {
      return L.valueOf() / b - 0.5 + m;
    }
    function F(L) {
      return new Date((L + 0.5 - m) * b);
    }
    function E(L) {
      return k(L) - T;
    }
    var N = M * 23.4397;
    function K(L, $) {
      return _(o(L) * f(N) - p($) * o(N), f(L));
    }
    function X(L, $) {
      return d(o($) * f(N) + f($) * o(N) * o(L));
    }
    function V(L, $, G) {
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
        dec: X(G, 0),
        ra: K(G, 0)
      };
    }
    var qt = {};
    qt.getPosition = function(L, $, G) {
      var ct = M * -G, nt = M * $, ht = E(L), ot = jt(ht), lt = St(ht, ct) - ot.ra;
      return {
        azimuth: V(lt, nt, ot.dec),
        altitude: et(lt, nt, ot.dec)
      };
    };
    var ye = qt.times = [
      [-0.833, "sunrise", "sunset"],
      [-0.3, "sunriseEnd", "sunsetStart"],
      [-6, "dawn", "dusk"],
      [-12, "nauticalDawn", "nauticalDusk"],
      [-18, "nightEnd", "night"],
      [6, "goldenHourEnd", "goldenHour"]
    ];
    qt.addTime = function(L, $, G) {
      ye.push([L, $, G]);
    };
    var $e = 9e-4;
    function Ur(L, $) {
      return Math.round(L - $e - $ / (2 * r));
    }
    function Me(L, $, G) {
      return $e + (L + $) / (2 * r) + G;
    }
    function Ge(L, $, G) {
      return T + L + 53e-4 * o($) - 69e-4 * o(2 * G);
    }
    function $r(L, $, G) {
      return y((o(L) - o($) * o(G)) / (f($) * f(G)));
    }
    function bn(L) {
      return -2.076 * Math.sqrt(L) / 60;
    }
    function _n(L, $, G, ct, nt, ht, ot) {
      var lt = $r(L, G, ct), yt = Me(lt, $, nt);
      return Ge(yt, ht, ot);
    }
    qt.getTimes = function(L, $, G, ct) {
      ct = ct || 0;
      var nt = M * -G, ht = M * $, ot = bn(ct), lt = E(L), yt = Ur(lt, nt), Kt = Me(0, nt, yt), Ft = It(Kt), Wt = Ht(Ft), vn = X(Wt, 0), _t = Ge(Kt, Ft, Wt), Lt, On, Mt, Bt, cn, tn, pt = {
        solarNoon: F(_t),
        nadir: F(_t - 0.5)
      };
      for (Lt = 0, On = ye.length; Lt < On; Lt += 1)
        Mt = ye[Lt], Bt = (Mt[0] + ot) * M, cn = _n(Bt, nt, ht, vn, yt, Ft, Wt), tn = _t - (cn - _t), pt[Mt[1]] = F(tn), pt[Mt[2]] = F(cn);
      return pt;
    };
    function ze(L) {
      var $ = M * (218.316 + 13.176396 * L), G = M * (134.963 + 13.064993 * L), ct = M * (93.272 + 13.22935 * L), nt = $ + M * 6.289 * o(G), ht = M * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ht),
        dec: X(nt, ht),
        dist: ot
      };
    }
    qt.getMoonPosition = function(L, $, G) {
      var ct = M * -G, nt = M * $, ht = E(L), ot = ze(ht), lt = St(ht, ct) - ot.ra, yt = et(lt, nt, ot.dec), Kt = _(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return yt = yt + At(yt), {
        azimuth: V(lt, nt, ot.dec),
        altitude: yt,
        distance: ot.dist,
        parallacticAngle: Kt
      };
    }, qt.getMoonIllumination = function(L) {
      var $ = E(L || /* @__PURE__ */ new Date()), G = jt($), ct = ze($), nt = 149598e3, ht = y(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = _(nt * o(ht), ct.dist - nt * f(ht)), lt = _(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function Sn(L, $) {
      return new Date(L.valueOf() + $ * b / 24);
    }
    qt.getMoonTimes = function(L, $, G, ct) {
      var nt = new Date(L);
      ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ht = 0.133 * M, ot = qt.getMoonPosition(nt, $, G).altitude - ht, lt, yt, Kt, Ft, Wt, vn, _t, Lt, On, Mt, Bt, cn, tn, pt = 1; pt <= 24 && (lt = qt.getMoonPosition(Sn(nt, pt), $, G).altitude - ht, yt = qt.getMoonPosition(Sn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + yt) / 2 - lt, vn = (yt - ot) / 2, _t = -vn / (2 * Wt), Lt = (Wt * _t + vn) * _t + lt, On = vn * vn - 4 * Wt * lt, Mt = 0, On >= 0 && (tn = Math.sqrt(On) / (Math.abs(Wt) * 2), Bt = _t - tn, cn = _t + tn, Math.abs(Bt) <= 1 && Mt++, Math.abs(cn) <= 1 && Mt++, Bt < -1 && (Bt = cn)), Mt === 1 ? ot < 0 ? Kt = pt + Bt : Ft = pt + Bt : Mt === 2 && (Kt = pt + (Lt < 0 ? cn : Bt), Ft = pt + (Lt < 0 ? Bt : cn)), !(Kt && Ft)); pt += 2)
        ot = yt;
      var mn = {};
      return Kt && (mn.rise = Sn(nt, Kt)), Ft && (mn.set = Sn(nt, Ft)), !Kt && !Ft && (mn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
    }, c.exports = qt;
  })();
})(Cu);
var nu = Cu.exports;
function qn(c, s) {
  const r = c.toLocaleString([], {
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
const ee = Kn("models:Course"), I0 = ["track", "dist", "gain", "loss", "cache", "distance", "start"], P0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class $0 {
  constructor(s, r) {
    C(this, "event");
    C(this, "name");
    C(this, "_cache", {});
    C(this, "_loops", 1);
    C(this, "_dist");
    C(this, "_distOverride");
    C(this, "_gain");
    C(this, "_gainOverride");
    C(this, "_loss");
    C(this, "_lossOverride");
    C(this, "_sites", [
      new hs(this, {
        id: String(H.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new hs(this, {
        id: String(H.random(3e4, 4e4)),
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
    C(this, "_cutoffs");
    C(this, "_splits");
    // calculate max and min values along course
    C(this, "_stats");
    this._track = s, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss), r.start && (this.event = new bu(
      r.start.date,
      r.start.timezone,
      s.points[0].lat,
      s.points[0].lon
    ));
    const o = Object.keys(r).filter((f) => !I0.includes(f));
    Object.assign(this, H.pick(r, o));
  }
  get loops() {
    return this._loops;
  }
  set loops(s) {
    this._loops = s, this.clearCache(2);
  }
  /**
   * Total distance of course (in km)
   */
  get dist() {
    return this._dist || (this._dist = this._distOverride || this.track.dist * this.loops);
  }
  set dist(s) {
    ee(`overriding dist to ${s}`), this._distOverride = s, this.version++, this.clearCache(2);
  }
  /**
   * Distance scale of course (in km), relative to calculated track distance
   */
  get distScale() {
    return this._distOverride ? this._distOverride / (this.track.dist * this.loops) : 1;
  }
  /**
   * Total gain of course (in meters)
   */
  get gain() {
    return this.gain || (this._gain = this._gainOverride || this.track.gain * this.loops);
  }
  set gain(s) {
    ee(`overriding gain to ${s}`), this._gainOverride = s, this.version++, this.clearCache(2);
  }
  /**
   * Gain scale of course (in meters), relative to calculated track gain
   */
  get gainScale() {
    return this._gainOverride ? this._gainOverride / (this.track.gain * this.loops) : 1;
  }
  /**
   * Total loss of course (in meters)
   */
  get loss() {
    return this._loss || (this._loss = this._lossOverride || this.track.loss * this.loops);
  }
  set loss(s) {
    ee(`overriding loss to ${s}`), this._lossOverride = s, this.version++, this.clearCache(2);
  }
  /**
   * Loss scale of course (in meters), relative to calculated track loss
   */
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
  /**
   * @deprecated
   */
  clearCache(s = 1) {
    ee(`clearCache-${s}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrain, delete this._waypoints, s === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
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
    ee("generating points array"), this._points = new Array(this.track.points.length * this.loops);
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
    if (Ue(f.loc, s, 4)) return f;
    ee(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
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
      const f = H.isNumber(r.value) ? r.value : H.isString(r.value) ? ((_ = P0.find((M) => M.type === r.value)) == null ? void 0 : _.value) || 0 : r.value.value, p = typeof r == "string" ? r : H.isObject(r.value) ? r.value.type : void 0;
      return {
        value: f,
        type: p,
        percents: [r.percent, ((y = s[o + 1]) == null ? void 0 : y.percent) || 1]
      };
    });
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new E0(s)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new S0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    ee("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), o = this.terrain.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: H.sum(
          this.track.points.map((d, _) => {
            var y;
            return d.alt * (d.loc - (((y = this.track.points[_ - 1]) == null ? void 0 : y.loc) || 0));
          })
        ) / this.track.dist,
        max: H.max(s) || 0,
        min: H.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: H.max(r) || 0,
        min: H.min(r) || 0
      },
      terrain: {
        avg: (H.sumBy(this.terrain, (d) => (d.percents[1] - d.percents[0]) * this.dist * d.value) / this.dist + 100) / 100,
        max: H.max(o) || 0,
        min: H.min(o) || 0,
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
class E0 {
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
      return f(d(_), arguments);
    }
    function o(_, y) {
      return r.apply(null, [_].concat(y || []));
    }
    function f(_, y) {
      var M = 1, b = _.length, m, T = "", k, F, E, N, K, X, V, et;
      for (k = 0; k < b; k++)
        if (typeof _[k] == "string")
          T += _[k];
        else if (typeof _[k] == "object") {
          if (E = _[k], E.keys)
            for (m = y[M], F = 0; F < E.keys.length; F++) {
              if (m == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[F], E.keys[F - 1]));
              m = m[E.keys[F]];
            }
          else E.param_no ? m = y[E.param_no] : m = y[M++];
          if (s.not_type.test(E.type) && s.not_primitive.test(E.type) && m instanceof Function && (m = m()), s.numeric_arg.test(E.type) && typeof m != "number" && isNaN(m))
            throw new TypeError(r("[sprintf] expecting number but found %T", m));
          switch (s.number.test(E.type) && (V = m >= 0), E.type) {
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
          s.json.test(E.type) ? T += m : (s.number.test(E.type) && (!V || E.sign) ? (et = V ? "+" : "-", m = m.toString().replace(s.sign, "")) : et = "", K = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", X = E.width - (et + m).length, N = E.width && X > 0 ? K.repeat(X) : "", T += E.align ? et + m + N : K === "0" ? et + N + m : N + et + m);
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
            var T = [], k = M[2], F = [];
            if ((F = s.key.exec(k)) !== null)
              for (T.push(F[1]); (k = k.substring(F[0].length)) !== ""; )
                if ((F = s.key_access.exec(k)) !== null)
                  T.push(F[1]);
                else if ((F = s.index_access.exec(k)) !== null)
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
    c.sprintf = r, c.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(Wr);
const T0 = Kn("PaceChunk");
class R0 {
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
    const s = H.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (H.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
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
    s[0].elapsed = H.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - H.sum(this.plan.pacing.chunks.filter((M) => M.points[0].loc < s[0].loc).map((M) => M.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, o = s[0].delay || 0, f = 0, p = 0, d = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, b = s.length; M < b; M++) {
      f = s[M].loc - s[M - 1].loc, Nr(s[M - 1], this.plan), y.applyEach((T, k) => T + k * f, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * f, p = _ * m * f, s[M].time = s[M - 1].time + p, o = s[M - 1].delay || 0, r += p + o, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Nr(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = T0.extend(
      Wr.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const d = new R0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !H.round(f - this.factor, 10), f = this.factor, d.target = Math.abs(
      (H.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
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
class F0 {
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
    return this._factor ? this._factor : (fn("factor:update"), this.chunks && (this._factor = H.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
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
    }), s("creating pace chunks"), this.initChunks(), [null, ...H.reverse([...this.plan.cutoffs]), null].forEach((p) => {
      for (; this.chunks.find((d) => !d.status); )
        this.calcChunks(), this.validateChunks();
      if (!p) return !0;
      if (p.point.elapsed - p.time > 0.5) {
        s(`cutoff at ${p.loc} missed`);
        const d = this.chunks[0];
        H.last(d.points) === p.point ? (s(`setting cutoff at ${p.loc}`), d.constraints = [0, p.time], delete d.status) : this.splitChunk(d, p.point, p.time);
      }
    }), H.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), fn(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.version = this.plan.version;
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
    const p = s.points.findIndex((y) => y === r), d = H.round(r.elapsed - r.time), _ = new eu(this.plan, s.points.slice(0, p + 1), [0, o], d);
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
class L0 {
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
    const r = _u(s), o = H.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var k;
    ps.extend("calcSegments")("exec"), this.plan.checkPacing();
    const o = this.plan, f = o.course, p = o.points, d = [], _ = [];
    let y, M, b = o.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const F = s[y];
      m && Ue((k = s[y - 1]) == null ? void 0 : k.end, F.start, 4) ? b = m : b = o.getPoint(F.start), m = o.getPoint(F.end);
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
      const X = N.alt - E.alt;
      F[X > 0 ? "gain" : "loss"] += X * (X > 0 ? f.gainScale : f.lossScale), Nr(E, o);
      const V = N.loc - E.loc;
      K.applyEach((et, St) => et + St * V, E.factors);
    };
    y = 1;
    for (let F = 0; F < d.length; F++) {
      const E = d[F], N = _[F];
      for (; we(p[y].loc, E.point1.loc, 4); ) y++;
      let K = E.point1;
      for (; y < p.length && we(p[y].loc, E.point2.loc, 4); ) {
        const X = p[y];
        T(E, K, X, N), K = X, y++;
      }
      T(E, K, E.point2, N), o && (E.delay = o.delays.filter((X) => Br(E.point1.loc, X.loc, 4) && vs(E.point2.loc, X.loc, 4)).reduce((X, V) => X + V.delay, 0));
    }
    return d;
  }
}
const Hn = Kn("models:Plan");
class G0 {
  constructor(s, r) {
    C(this, "_data", {
      method: "time",
      target: 0
    });
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
    C(this, "pacing", new F0(this));
    C(this, "points");
    C(this, "_scales");
    C(this, "_scalesVersion");
    /**
     * splits
     */
    C(this, "splits", new L0(this));
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
    return H.sumBy(this.delays, "delay");
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
      return new O0(o, p);
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
        this.course.points[0].lat,
        this.course.points[0].lon
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
    const s = H.fromPairs(
      gu.map((p) => {
        const d = this.points.map((_) => _.factors.get(p));
        return [
          p,
          {
            min: Number(H.min(d)),
            max: Number(H.max(d))
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
    if (Ue(f.loc, s, 4)) return f;
    Hn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, d = this.points[p], _ = new ru(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const y = f.elapsed - f.time - (d.elapsed - d.time);
      _.time = me(d.loc, f.loc, d.time + y, f.time, f.loc), _.elapsed = f.elapsed - (f.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return r && this.points.splice(o, 0, _), _;
  }
  update(s) {
    const o = ["target", "method"].find((f) => f in s && H.isNil(s[f]));
    if (o) throw new Error(`Plan.${o} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class O0 {
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
const Su = (c, s, r, o) => {
  const f = uu(c, s, r, o), p = [];
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
function D0(c, s) {
  return Su(
    s,
    c.map((o) => o.alt),
    s,
    0.05
  ).map((o) => o.grade);
}
const N0 = (c) => {
  let s = 0, r = 0;
  const o = [0];
  for (let f = 1, p = c.length; f < p; f++)
    s = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += s, o.push(r);
  return o;
}, kr = Kn("models:Track");
class ys {
  constructor(s) {
    C(this, "dist");
    C(this, "gain");
    C(this, "loss");
    C(this, "points");
    kr("Creating new Track object");
    const r = s.map((M) => new wu(M.lat, M.lon, M.alt)), o = N0(r), f = D0(r, o);
    this.points = r.map((M, b) => new yu(M.lat, M.lon, M.alt, o[b], f[b])), kr(`set-points - ${r.length} points`), kr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, _ = 0, y = this.points[0].alt;
    this.points.forEach((M) => {
      _ = M.alt - y, _ < 0 ? d += _ : p += _, y = M.alt;
    }), this.gain = p, this.loss = d;
  }
  get start() {
    return H.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return H.pick(this.points[this.points.length - 1], ["lat", "lon"]);
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
    return H.pick(r, ["lat", "lon", "alt"]);
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
        const k = d.loc + y * T;
        if (k <= this.dist) {
          for (; this.points[p + 1].loc < k && p < this.points.length - 1; )
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
    const o = kr.extend("reduceDensity");
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
function z0(c, s, r) {
  const o = c.map((f, p) => ({ lat: c[p], lon: s[p], alt: r[p] }));
  return new ys(o);
}
const H0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: qn
}, Symbol.toStringTag, { value: "Module" }));
export {
  $0 as Course,
  E0 as CourseCutoff,
  Qo as CoursePoint,
  C0 as CourseSegment,
  bu as Event,
  Cn as Factors,
  F0 as Pacing,
  G0 as Plan,
  ru as PlanPoint,
  b0 as PlanSegment,
  wu as Point,
  hs as Site,
  du as Strategy,
  ys as Track,
  yu as TrackPoint,
  tu as Waypoint,
  m0 as adjustStrategy,
  z0 as createTrackFromArrays,
  U0 as factors,
  Mu as interpolatePoint,
  B0 as math,
  _0 as scaleDark,
  P0 as terrainTypes,
  H0 as util
};
