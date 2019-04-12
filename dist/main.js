var o0 = Object.defineProperty;
var u0 = (f, r, i) => r in f ? o0(f, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : f[r] = i;
var eu = (f, r, i) => u0(f, typeof r != "symbol" ? r + "" : r, i);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ms(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Un = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var c0 = Un.exports, nu;
function l0() {
  return nu || (nu = 1, function(f, r) {
    (function() {
      var i, a = "4.17.21", l = 200, d = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", b = 500, S = "__lodash_placeholder__", v = 1, P = 2, R = 4, D = 1, E = 2, O = 1, W = 2, Z = 4, Y = 8, it = 16, dt = 32, Wt = 64, Mt = 128, te = 256, Ht = 512, Ot = 30, bn = "...", qn = 800, qr = 16, Mn = 1, zn = 2, zr = 3, Me = 1 / 0, ge = 9007199254740991, Gn = 17976931348623157e292, Ce = NaN, L = 4294967295, q = L - 1, z = L >>> 1, lt = [
        ["ary", Mt],
        ["bind", O],
        ["bindKey", W],
        ["curry", Y],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", dt],
        ["partialRight", Wt],
        ["rearg", te]
      ], tt = "[object Arguments]", ft = "[object Array]", at = "[object AsyncFunction]", ut = "[object Boolean]", wt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Bt = "[object Function]", _e = "[object GeneratorFunction]", _t = "[object Map]", Rt = "[object Number]", Le = "[object Null]", bt = "[object Object]", Ut = "[object Promise]", le = "[object Proxy]", ee = "[object RegExp]", ht = "[object Set]", ve = "[object String]", Hn = "[object Symbol]", Au = "[object Undefined]", Cn = "[object WeakMap]", Su = "[object WeakSet]", xn = "[object ArrayBuffer]", sn = "[object DataView]", Gr = "[object Float32Array]", Hr = "[object Float64Array]", Kr = "[object Int8Array]", Jr = "[object Int16Array]", Zr = "[object Int32Array]", Yr = "[object Uint8Array]", jr = "[object Uint8ClampedArray]", Xr = "[object Uint16Array]", Qr = "[object Uint32Array]", Pu = /\b__p \+= '';/g, Tu = /\b(__p \+=) '' \+/g, Iu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, As = /&(?:amp|lt|gt|quot|#39);/g, Ss = /[&<>"']/g, Eu = RegExp(As.source), Ou = RegExp(Ss.source), Fu = /<%-([\s\S]+?)%>/g, Ru = /<%([\s\S]+?)%>/g, Ps = /<%=([\s\S]+?)%>/g, Lu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ku = /^\w*$/, Du = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, Nu = RegExp(Vr.source), ti = /^\s+/, Wu = /\s/, Bu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Uu = /\{\n\/\* \[wrapped with (.+)\] \*/, $u = /,? & /, qu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zu = /[()=,{}\[\]\/\s]/, Gu = /\\(\\)?/g, Hu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ts = /\w*$/, Ku = /^[-+]0x[0-9a-f]+$/i, Ju = /^0b[01]+$/i, Zu = /^\[object .+?Constructor\]$/, Yu = /^0o[0-7]+$/i, ju = /^(?:0|[1-9]\d*)$/, Xu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Kn = /($^)/, Qu = /['\n\r\u2028\u2029\\]/g, Jn = "\\ud800-\\udfff", Vu = "\\u0300-\\u036f", tc = "\\ufe20-\\ufe2f", ec = "\\u20d0-\\u20ff", Is = Vu + tc + ec, Es = "\\u2700-\\u27bf", Os = "a-z\\xdf-\\xf6\\xf8-\\xff", nc = "\\xac\\xb1\\xd7\\xf7", rc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ic = "\\u2000-\\u206f", sc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Rs = "\\ufe0e\\ufe0f", Ls = nc + rc + ic + sc, ei = "['’]", ac = "[" + Jn + "]", ks = "[" + Ls + "]", Zn = "[" + Is + "]", Ds = "\\d+", oc = "[" + Es + "]", Ns = "[" + Os + "]", Ws = "[^" + Jn + Ls + Ds + Es + Os + Fs + "]", ni = "\\ud83c[\\udffb-\\udfff]", uc = "(?:" + Zn + "|" + ni + ")", Bs = "[^" + Jn + "]", ri = "(?:\\ud83c[\\udde6-\\uddff]){2}", ii = "[\\ud800-\\udbff][\\udc00-\\udfff]", an = "[" + Fs + "]", Us = "\\u200d", $s = "(?:" + Ns + "|" + Ws + ")", cc = "(?:" + an + "|" + Ws + ")", qs = "(?:" + ei + "(?:d|ll|m|re|s|t|ve))?", zs = "(?:" + ei + "(?:D|LL|M|RE|S|T|VE))?", Gs = uc + "?", Hs = "[" + Rs + "]?", lc = "(?:" + Us + "(?:" + [Bs, ri, ii].join("|") + ")" + Hs + Gs + ")*", fc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", hc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ks = Hs + Gs + lc, pc = "(?:" + [oc, ri, ii].join("|") + ")" + Ks, dc = "(?:" + [Bs + Zn + "?", Zn, ri, ii, ac].join("|") + ")", gc = RegExp(ei, "g"), _c = RegExp(Zn, "g"), si = RegExp(ni + "(?=" + ni + ")|" + dc + Ks, "g"), vc = RegExp([
        an + "?" + Ns + "+" + qs + "(?=" + [ks, an, "$"].join("|") + ")",
        cc + "+" + zs + "(?=" + [ks, an + $s, "$"].join("|") + ")",
        an + "?" + $s + "+" + qs,
        an + "+" + zs,
        hc,
        fc,
        Ds,
        pc
      ].join("|"), "g"), mc = RegExp("[" + Us + Jn + Is + Rs + "]"), yc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, wc = [
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
      ], bc = -1, ct = {};
      ct[Gr] = ct[Hr] = ct[Kr] = ct[Jr] = ct[Zr] = ct[Yr] = ct[jr] = ct[Xr] = ct[Qr] = !0, ct[tt] = ct[ft] = ct[xn] = ct[ut] = ct[sn] = ct[wt] = ct[Ft] = ct[Bt] = ct[_t] = ct[Rt] = ct[bt] = ct[ee] = ct[ht] = ct[ve] = ct[Cn] = !1;
      var ot = {};
      ot[tt] = ot[ft] = ot[xn] = ot[sn] = ot[ut] = ot[wt] = ot[Gr] = ot[Hr] = ot[Kr] = ot[Jr] = ot[Zr] = ot[_t] = ot[Rt] = ot[bt] = ot[ee] = ot[ht] = ot[ve] = ot[Hn] = ot[Yr] = ot[jr] = ot[Xr] = ot[Qr] = !0, ot[Ft] = ot[Bt] = ot[Cn] = !1;
      var Mc = {
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
      }, Cc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, xc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ac = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Sc = parseFloat, Pc = parseInt, Js = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Tc = typeof self == "object" && self && self.Object === Object && self, Pt = Js || Tc || Function("return this")(), ai = r && !r.nodeType && r, Je = ai && !0 && f && !f.nodeType && f, Zs = Je && Je.exports === ai, oi = Zs && Js.process, ne = function() {
        try {
          var m = Je && Je.require && Je.require("util").types;
          return m || oi && oi.binding && oi.binding("util");
        } catch {
        }
      }(), Ys = ne && ne.isArrayBuffer, js = ne && ne.isDate, Xs = ne && ne.isMap, Qs = ne && ne.isRegExp, Vs = ne && ne.isSet, ta = ne && ne.isTypedArray;
      function Jt(m, C, M) {
        switch (M.length) {
          case 0:
            return m.call(C);
          case 1:
            return m.call(C, M[0]);
          case 2:
            return m.call(C, M[0], M[1]);
          case 3:
            return m.call(C, M[0], M[1], M[2]);
        }
        return m.apply(C, M);
      }
      function Ic(m, C, M, k) {
        for (var G = -1, et = m == null ? 0 : m.length; ++G < et; ) {
          var Ct = m[G];
          C(k, Ct, M(Ct), m);
        }
        return k;
      }
      function re(m, C) {
        for (var M = -1, k = m == null ? 0 : m.length; ++M < k && C(m[M], M, m) !== !1; )
          ;
        return m;
      }
      function Ec(m, C) {
        for (var M = m == null ? 0 : m.length; M-- && C(m[M], M, m) !== !1; )
          ;
        return m;
      }
      function ea(m, C) {
        for (var M = -1, k = m == null ? 0 : m.length; ++M < k; )
          if (!C(m[M], M, m))
            return !1;
        return !0;
      }
      function ke(m, C) {
        for (var M = -1, k = m == null ? 0 : m.length, G = 0, et = []; ++M < k; ) {
          var Ct = m[M];
          C(Ct, M, m) && (et[G++] = Ct);
        }
        return et;
      }
      function Yn(m, C) {
        var M = m == null ? 0 : m.length;
        return !!M && on(m, C, 0) > -1;
      }
      function ui(m, C, M) {
        for (var k = -1, G = m == null ? 0 : m.length; ++k < G; )
          if (M(C, m[k]))
            return !0;
        return !1;
      }
      function pt(m, C) {
        for (var M = -1, k = m == null ? 0 : m.length, G = Array(k); ++M < k; )
          G[M] = C(m[M], M, m);
        return G;
      }
      function De(m, C) {
        for (var M = -1, k = C.length, G = m.length; ++M < k; )
          m[G + M] = C[M];
        return m;
      }
      function ci(m, C, M, k) {
        var G = -1, et = m == null ? 0 : m.length;
        for (k && et && (M = m[++G]); ++G < et; )
          M = C(M, m[G], G, m);
        return M;
      }
      function Oc(m, C, M, k) {
        var G = m == null ? 0 : m.length;
        for (k && G && (M = m[--G]); G--; )
          M = C(M, m[G], G, m);
        return M;
      }
      function li(m, C) {
        for (var M = -1, k = m == null ? 0 : m.length; ++M < k; )
          if (C(m[M], M, m))
            return !0;
        return !1;
      }
      var Fc = fi("length");
      function Rc(m) {
        return m.split("");
      }
      function Lc(m) {
        return m.match(qu) || [];
      }
      function na(m, C, M) {
        var k;
        return M(m, function(G, et, Ct) {
          if (C(G, et, Ct))
            return k = et, !1;
        }), k;
      }
      function jn(m, C, M, k) {
        for (var G = m.length, et = M + (k ? 1 : -1); k ? et-- : ++et < G; )
          if (C(m[et], et, m))
            return et;
        return -1;
      }
      function on(m, C, M) {
        return C === C ? Kc(m, C, M) : jn(m, ra, M);
      }
      function kc(m, C, M, k) {
        for (var G = M - 1, et = m.length; ++G < et; )
          if (k(m[G], C))
            return G;
        return -1;
      }
      function ra(m) {
        return m !== m;
      }
      function ia(m, C) {
        var M = m == null ? 0 : m.length;
        return M ? pi(m, C) / M : Ce;
      }
      function fi(m) {
        return function(C) {
          return C == null ? i : C[m];
        };
      }
      function hi(m) {
        return function(C) {
          return m == null ? i : m[C];
        };
      }
      function sa(m, C, M, k, G) {
        return G(m, function(et, Ct, st) {
          M = k ? (k = !1, et) : C(M, et, Ct, st);
        }), M;
      }
      function Dc(m, C) {
        var M = m.length;
        for (m.sort(C); M--; )
          m[M] = m[M].value;
        return m;
      }
      function pi(m, C) {
        for (var M, k = -1, G = m.length; ++k < G; ) {
          var et = C(m[k]);
          et !== i && (M = M === i ? et : M + et);
        }
        return M;
      }
      function di(m, C) {
        for (var M = -1, k = Array(m); ++M < m; )
          k[M] = C(M);
        return k;
      }
      function Nc(m, C) {
        return pt(C, function(M) {
          return [M, m[M]];
        });
      }
      function aa(m) {
        return m && m.slice(0, la(m) + 1).replace(ti, "");
      }
      function Zt(m) {
        return function(C) {
          return m(C);
        };
      }
      function gi(m, C) {
        return pt(C, function(M) {
          return m[M];
        });
      }
      function An(m, C) {
        return m.has(C);
      }
      function oa(m, C) {
        for (var M = -1, k = m.length; ++M < k && on(C, m[M], 0) > -1; )
          ;
        return M;
      }
      function ua(m, C) {
        for (var M = m.length; M-- && on(C, m[M], 0) > -1; )
          ;
        return M;
      }
      function Wc(m, C) {
        for (var M = m.length, k = 0; M--; )
          m[M] === C && ++k;
        return k;
      }
      var Bc = hi(Mc), Uc = hi(Cc);
      function $c(m) {
        return "\\" + Ac[m];
      }
      function qc(m, C) {
        return m == null ? i : m[C];
      }
      function un(m) {
        return mc.test(m);
      }
      function zc(m) {
        return yc.test(m);
      }
      function Gc(m) {
        for (var C, M = []; !(C = m.next()).done; )
          M.push(C.value);
        return M;
      }
      function _i(m) {
        var C = -1, M = Array(m.size);
        return m.forEach(function(k, G) {
          M[++C] = [G, k];
        }), M;
      }
      function ca(m, C) {
        return function(M) {
          return m(C(M));
        };
      }
      function Ne(m, C) {
        for (var M = -1, k = m.length, G = 0, et = []; ++M < k; ) {
          var Ct = m[M];
          (Ct === C || Ct === S) && (m[M] = S, et[G++] = M);
        }
        return et;
      }
      function Xn(m) {
        var C = -1, M = Array(m.size);
        return m.forEach(function(k) {
          M[++C] = k;
        }), M;
      }
      function Hc(m) {
        var C = -1, M = Array(m.size);
        return m.forEach(function(k) {
          M[++C] = [k, k];
        }), M;
      }
      function Kc(m, C, M) {
        for (var k = M - 1, G = m.length; ++k < G; )
          if (m[k] === C)
            return k;
        return -1;
      }
      function Jc(m, C, M) {
        for (var k = M + 1; k--; )
          if (m[k] === C)
            return k;
        return k;
      }
      function cn(m) {
        return un(m) ? Yc(m) : Fc(m);
      }
      function fe(m) {
        return un(m) ? jc(m) : Rc(m);
      }
      function la(m) {
        for (var C = m.length; C-- && Wu.test(m.charAt(C)); )
          ;
        return C;
      }
      var Zc = hi(xc);
      function Yc(m) {
        for (var C = si.lastIndex = 0; si.test(m); )
          ++C;
        return C;
      }
      function jc(m) {
        return m.match(si) || [];
      }
      function Xc(m) {
        return m.match(vc) || [];
      }
      var Qc = function m(C) {
        C = C == null ? Pt : ln.defaults(Pt.Object(), C, ln.pick(Pt, wc));
        var M = C.Array, k = C.Date, G = C.Error, et = C.Function, Ct = C.Math, st = C.Object, vi = C.RegExp, Vc = C.String, ie = C.TypeError, Qn = M.prototype, tl = et.prototype, fn = st.prototype, Vn = C["__core-js_shared__"], tr = tl.toString, rt = fn.hasOwnProperty, el = 0, fa = function() {
          var t = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), er = fn.toString, nl = tr.call(st), rl = Pt._, il = vi(
          "^" + tr.call(rt).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Zs ? C.Buffer : i, We = C.Symbol, rr = C.Uint8Array, ha = nr ? nr.allocUnsafe : i, ir = ca(st.getPrototypeOf, st), pa = st.create, da = fn.propertyIsEnumerable, sr = Qn.splice, ga = We ? We.isConcatSpreadable : i, Sn = We ? We.iterator : i, Ze = We ? We.toStringTag : i, ar = function() {
          try {
            var t = Ve(st, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), sl = C.clearTimeout !== Pt.clearTimeout && C.clearTimeout, al = k && k.now !== Pt.Date.now && k.now, ol = C.setTimeout !== Pt.setTimeout && C.setTimeout, or = Ct.ceil, ur = Ct.floor, mi = st.getOwnPropertySymbols, ul = nr ? nr.isBuffer : i, _a = C.isFinite, cl = Qn.join, ll = ca(st.keys, st), xt = Ct.max, It = Ct.min, fl = k.now, hl = C.parseInt, va = Ct.random, pl = Qn.reverse, yi = Ve(C, "DataView"), Pn = Ve(C, "Map"), wi = Ve(C, "Promise"), hn = Ve(C, "Set"), Tn = Ve(C, "WeakMap"), In = Ve(st, "create"), cr = Tn && new Tn(), pn = {}, dl = tn(yi), gl = tn(Pn), _l = tn(wi), vl = tn(hn), ml = tn(Tn), lr = We ? We.prototype : i, En = lr ? lr.valueOf : i, ma = lr ? lr.toString : i;
        function u(t) {
          if (vt(t) && !H(t) && !(t instanceof Q)) {
            if (t instanceof se)
              return t;
            if (rt.call(t, "__wrapped__"))
              return wo(t);
          }
          return new se(t);
        }
        var dn = /* @__PURE__ */ function() {
          function t() {
          }
          return function(e) {
            if (!gt(e))
              return {};
            if (pa)
              return pa(e);
            t.prototype = e;
            var n = new t();
            return t.prototype = i, n;
          };
        }();
        function fr() {
        }
        function se(t, e) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = i;
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
          evaluate: Ru,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Ps,
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
        }, u.prototype = fr.prototype, u.prototype.constructor = u, se.prototype = dn(fr.prototype), se.prototype.constructor = se;
        function Q(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = L, this.__views__ = [];
        }
        function yl() {
          var t = new Q(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function wl() {
          if (this.__filtered__) {
            var t = new Q(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function bl() {
          var t = this.__wrapped__.value(), e = this.__dir__, n = H(t), s = e < 0, o = n ? t.length : 0, c = Lf(0, o, this.__views__), p = c.start, g = c.end, y = g - p, x = s ? g : p - 1, A = this.__iteratees__, T = A.length, F = 0, N = It(y, this.__takeCount__);
          if (!n || !s && o == y && N == y)
            return qa(t, this.__actions__);
          var U = [];
          t:
            for (; y-- && F < N; ) {
              x += e;
              for (var J = -1, $ = t[x]; ++J < T; ) {
                var X = A[J], V = X.iteratee, Xt = X.type, Dt = V($);
                if (Xt == zn)
                  $ = Dt;
                else if (!Dt) {
                  if (Xt == Mn)
                    continue t;
                  break t;
                }
              }
              U[F++] = $;
            }
          return U;
        }
        Q.prototype = dn(fr.prototype), Q.prototype.constructor = Q;
        function Ye(t) {
          var e = -1, n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var s = t[e];
            this.set(s[0], s[1]);
          }
        }
        function Ml() {
          this.__data__ = In ? In(null) : {}, this.size = 0;
        }
        function Cl(t) {
          var e = this.has(t) && delete this.__data__[t];
          return this.size -= e ? 1 : 0, e;
        }
        function xl(t) {
          var e = this.__data__;
          if (In) {
            var n = e[t];
            return n === w ? i : n;
          }
          return rt.call(e, t) ? e[t] : i;
        }
        function Al(t) {
          var e = this.__data__;
          return In ? e[t] !== i : rt.call(e, t);
        }
        function Sl(t, e) {
          var n = this.__data__;
          return this.size += this.has(t) ? 0 : 1, n[t] = In && e === i ? w : e, this;
        }
        Ye.prototype.clear = Ml, Ye.prototype.delete = Cl, Ye.prototype.get = xl, Ye.prototype.has = Al, Ye.prototype.set = Sl;
        function xe(t) {
          var e = -1, n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var s = t[e];
            this.set(s[0], s[1]);
          }
        }
        function Pl() {
          this.__data__ = [], this.size = 0;
        }
        function Tl(t) {
          var e = this.__data__, n = hr(e, t);
          if (n < 0)
            return !1;
          var s = e.length - 1;
          return n == s ? e.pop() : sr.call(e, n, 1), --this.size, !0;
        }
        function Il(t) {
          var e = this.__data__, n = hr(e, t);
          return n < 0 ? i : e[n][1];
        }
        function El(t) {
          return hr(this.__data__, t) > -1;
        }
        function Ol(t, e) {
          var n = this.__data__, s = hr(n, t);
          return s < 0 ? (++this.size, n.push([t, e])) : n[s][1] = e, this;
        }
        xe.prototype.clear = Pl, xe.prototype.delete = Tl, xe.prototype.get = Il, xe.prototype.has = El, xe.prototype.set = Ol;
        function Ae(t) {
          var e = -1, n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var s = t[e];
            this.set(s[0], s[1]);
          }
        }
        function Fl() {
          this.size = 0, this.__data__ = {
            hash: new Ye(),
            map: new (Pn || xe)(),
            string: new Ye()
          };
        }
        function Rl(t) {
          var e = xr(this, t).delete(t);
          return this.size -= e ? 1 : 0, e;
        }
        function Ll(t) {
          return xr(this, t).get(t);
        }
        function kl(t) {
          return xr(this, t).has(t);
        }
        function Dl(t, e) {
          var n = xr(this, t), s = n.size;
          return n.set(t, e), this.size += n.size == s ? 0 : 1, this;
        }
        Ae.prototype.clear = Fl, Ae.prototype.delete = Rl, Ae.prototype.get = Ll, Ae.prototype.has = kl, Ae.prototype.set = Dl;
        function je(t) {
          var e = -1, n = t == null ? 0 : t.length;
          for (this.__data__ = new Ae(); ++e < n; )
            this.add(t[e]);
        }
        function Nl(t) {
          return this.__data__.set(t, w), this;
        }
        function Wl(t) {
          return this.__data__.has(t);
        }
        je.prototype.add = je.prototype.push = Nl, je.prototype.has = Wl;
        function he(t) {
          var e = this.__data__ = new xe(t);
          this.size = e.size;
        }
        function Bl() {
          this.__data__ = new xe(), this.size = 0;
        }
        function Ul(t) {
          var e = this.__data__, n = e.delete(t);
          return this.size = e.size, n;
        }
        function $l(t) {
          return this.__data__.get(t);
        }
        function ql(t) {
          return this.__data__.has(t);
        }
        function zl(t, e) {
          var n = this.__data__;
          if (n instanceof xe) {
            var s = n.__data__;
            if (!Pn || s.length < l - 1)
              return s.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new Ae(s);
          }
          return n.set(t, e), this.size = n.size, this;
        }
        he.prototype.clear = Bl, he.prototype.delete = Ul, he.prototype.get = $l, he.prototype.has = ql, he.prototype.set = zl;
        function ya(t, e) {
          var n = H(t), s = !n && en(t), o = !n && !s && ze(t), c = !n && !s && !o && mn(t), p = n || s || o || c, g = p ? di(t.length, Vc) : [], y = g.length;
          for (var x in t)
            (e || rt.call(t, x)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
            (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            c && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
            Ie(x, y))) && g.push(x);
          return g;
        }
        function wa(t) {
          var e = t.length;
          return e ? t[Oi(0, e - 1)] : i;
        }
        function Gl(t, e) {
          return Ar($t(t), Xe(e, 0, t.length));
        }
        function Hl(t) {
          return Ar($t(t));
        }
        function bi(t, e, n) {
          (n !== i && !pe(t[e], n) || n === i && !(e in t)) && Se(t, e, n);
        }
        function On(t, e, n) {
          var s = t[e];
          (!(rt.call(t, e) && pe(s, n)) || n === i && !(e in t)) && Se(t, e, n);
        }
        function hr(t, e) {
          for (var n = t.length; n--; )
            if (pe(t[n][0], e))
              return n;
          return -1;
        }
        function Kl(t, e, n, s) {
          return Be(t, function(o, c, p) {
            e(s, o, n(o), p);
          }), s;
        }
        function ba(t, e) {
          return t && ye(e, St(e), t);
        }
        function Jl(t, e) {
          return t && ye(e, zt(e), t);
        }
        function Se(t, e, n) {
          e == "__proto__" && ar ? ar(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          }) : t[e] = n;
        }
        function Mi(t, e) {
          for (var n = -1, s = e.length, o = M(s), c = t == null; ++n < s; )
            o[n] = c ? i : ns(t, e[n]);
          return o;
        }
        function Xe(t, e, n) {
          return t === t && (n !== i && (t = t <= n ? t : n), e !== i && (t = t >= e ? t : e)), t;
        }
        function ae(t, e, n, s, o, c) {
          var p, g = e & v, y = e & P, x = e & R;
          if (n && (p = o ? n(t, s, o, c) : n(t)), p !== i)
            return p;
          if (!gt(t))
            return t;
          var A = H(t);
          if (A) {
            if (p = Df(t), !g)
              return $t(t, p);
          } else {
            var T = Et(t), F = T == Bt || T == _e;
            if (ze(t))
              return Ha(t, g);
            if (T == bt || T == tt || F && !o) {
              if (p = y || F ? {} : lo(t), !g)
                return y ? Af(t, Jl(p, t)) : xf(t, ba(p, t));
            } else {
              if (!ot[T])
                return o ? t : {};
              p = Nf(t, T, g);
            }
          }
          c || (c = new he());
          var N = c.get(t);
          if (N)
            return N;
          c.set(t, p), Uo(t) ? t.forEach(function($) {
            p.add(ae($, e, n, $, t, c));
          }) : Wo(t) && t.forEach(function($, X) {
            p.set(X, ae($, e, n, X, t, c));
          });
          var U = x ? y ? qi : $i : y ? zt : St, J = A ? i : U(t);
          return re(J || t, function($, X) {
            J && (X = $, $ = t[X]), On(p, X, ae($, e, n, X, t, c));
          }), p;
        }
        function Zl(t) {
          var e = St(t);
          return function(n) {
            return Ma(n, t, e);
          };
        }
        function Ma(t, e, n) {
          var s = n.length;
          if (t == null)
            return !s;
          for (t = st(t); s--; ) {
            var o = n[s], c = e[o], p = t[o];
            if (p === i && !(o in t) || !c(p))
              return !1;
          }
          return !0;
        }
        function Ca(t, e, n) {
          if (typeof t != "function")
            throw new ie(h);
          return Wn(function() {
            t.apply(i, n);
          }, e);
        }
        function Fn(t, e, n, s) {
          var o = -1, c = Yn, p = !0, g = t.length, y = [], x = e.length;
          if (!g)
            return y;
          n && (e = pt(e, Zt(n))), s ? (c = ui, p = !1) : e.length >= l && (c = An, p = !1, e = new je(e));
          t:
            for (; ++o < g; ) {
              var A = t[o], T = n == null ? A : n(A);
              if (A = s || A !== 0 ? A : 0, p && T === T) {
                for (var F = x; F--; )
                  if (e[F] === T)
                    continue t;
                y.push(A);
              } else c(e, T, s) || y.push(A);
            }
          return y;
        }
        var Be = ja(me), xa = ja(xi, !0);
        function Yl(t, e) {
          var n = !0;
          return Be(t, function(s, o, c) {
            return n = !!e(s, o, c), n;
          }), n;
        }
        function pr(t, e, n) {
          for (var s = -1, o = t.length; ++s < o; ) {
            var c = t[s], p = e(c);
            if (p != null && (g === i ? p === p && !jt(p) : n(p, g)))
              var g = p, y = c;
          }
          return y;
        }
        function jl(t, e, n, s) {
          var o = t.length;
          for (n = K(n), n < 0 && (n = -n > o ? 0 : o + n), s = s === i || s > o ? o : K(s), s < 0 && (s += o), s = n > s ? 0 : qo(s); n < s; )
            t[n++] = e;
          return t;
        }
        function Aa(t, e) {
          var n = [];
          return Be(t, function(s, o, c) {
            e(s, o, c) && n.push(s);
          }), n;
        }
        function Tt(t, e, n, s, o) {
          var c = -1, p = t.length;
          for (n || (n = Bf), o || (o = []); ++c < p; ) {
            var g = t[c];
            e > 0 && n(g) ? e > 1 ? Tt(g, e - 1, n, s, o) : De(o, g) : s || (o[o.length] = g);
          }
          return o;
        }
        var Ci = Xa(), Sa = Xa(!0);
        function me(t, e) {
          return t && Ci(t, e, St);
        }
        function xi(t, e) {
          return t && Sa(t, e, St);
        }
        function dr(t, e) {
          return ke(e, function(n) {
            return Ee(t[n]);
          });
        }
        function Qe(t, e) {
          e = $e(e, t);
          for (var n = 0, s = e.length; t != null && n < s; )
            t = t[we(e[n++])];
          return n && n == s ? t : i;
        }
        function Pa(t, e, n) {
          var s = e(t);
          return H(t) ? s : De(s, n(t));
        }
        function Lt(t) {
          return t == null ? t === i ? Au : Le : Ze && Ze in st(t) ? Rf(t) : Kf(t);
        }
        function Ai(t, e) {
          return t > e;
        }
        function Xl(t, e) {
          return t != null && rt.call(t, e);
        }
        function Ql(t, e) {
          return t != null && e in st(t);
        }
        function Vl(t, e, n) {
          return t >= It(e, n) && t < xt(e, n);
        }
        function Si(t, e, n) {
          for (var s = n ? ui : Yn, o = t[0].length, c = t.length, p = c, g = M(c), y = 1 / 0, x = []; p--; ) {
            var A = t[p];
            p && e && (A = pt(A, Zt(e))), y = It(A.length, y), g[p] = !n && (e || o >= 120 && A.length >= 120) ? new je(p && A) : i;
          }
          A = t[0];
          var T = -1, F = g[0];
          t:
            for (; ++T < o && x.length < y; ) {
              var N = A[T], U = e ? e(N) : N;
              if (N = n || N !== 0 ? N : 0, !(F ? An(F, U) : s(x, U, n))) {
                for (p = c; --p; ) {
                  var J = g[p];
                  if (!(J ? An(J, U) : s(t[p], U, n)))
                    continue t;
                }
                F && F.push(U), x.push(N);
              }
            }
          return x;
        }
        function tf(t, e, n, s) {
          return me(t, function(o, c, p) {
            e(s, n(o), c, p);
          }), s;
        }
        function Rn(t, e, n) {
          e = $e(e, t), t = go(t, e);
          var s = t == null ? t : t[we(ue(e))];
          return s == null ? i : Jt(s, t, n);
        }
        function Ta(t) {
          return vt(t) && Lt(t) == tt;
        }
        function ef(t) {
          return vt(t) && Lt(t) == xn;
        }
        function nf(t) {
          return vt(t) && Lt(t) == wt;
        }
        function Ln(t, e, n, s, o) {
          return t === e ? !0 : t == null || e == null || !vt(t) && !vt(e) ? t !== t && e !== e : rf(t, e, n, s, Ln, o);
        }
        function rf(t, e, n, s, o, c) {
          var p = H(t), g = H(e), y = p ? ft : Et(t), x = g ? ft : Et(e);
          y = y == tt ? bt : y, x = x == tt ? bt : x;
          var A = y == bt, T = x == bt, F = y == x;
          if (F && ze(t)) {
            if (!ze(e))
              return !1;
            p = !0, A = !1;
          }
          if (F && !A)
            return c || (c = new he()), p || mn(t) ? oo(t, e, n, s, o, c) : Of(t, e, y, n, s, o, c);
          if (!(n & D)) {
            var N = A && rt.call(t, "__wrapped__"), U = T && rt.call(e, "__wrapped__");
            if (N || U) {
              var J = N ? t.value() : t, $ = U ? e.value() : e;
              return c || (c = new he()), o(J, $, n, s, c);
            }
          }
          return F ? (c || (c = new he()), Ff(t, e, n, s, o, c)) : !1;
        }
        function sf(t) {
          return vt(t) && Et(t) == _t;
        }
        function Pi(t, e, n, s) {
          var o = n.length, c = o, p = !s;
          if (t == null)
            return !c;
          for (t = st(t); o--; ) {
            var g = n[o];
            if (p && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
              return !1;
          }
          for (; ++o < c; ) {
            g = n[o];
            var y = g[0], x = t[y], A = g[1];
            if (p && g[2]) {
              if (x === i && !(y in t))
                return !1;
            } else {
              var T = new he();
              if (s)
                var F = s(x, A, y, t, e, T);
              if (!(F === i ? Ln(A, x, D | E, s, T) : F))
                return !1;
            }
          }
          return !0;
        }
        function Ia(t) {
          if (!gt(t) || $f(t))
            return !1;
          var e = Ee(t) ? il : Zu;
          return e.test(tn(t));
        }
        function af(t) {
          return vt(t) && Lt(t) == ee;
        }
        function of(t) {
          return vt(t) && Et(t) == ht;
        }
        function uf(t) {
          return vt(t) && Or(t.length) && !!ct[Lt(t)];
        }
        function Ea(t) {
          return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? H(t) ? Ra(t[0], t[1]) : Fa(t) : Vo(t);
        }
        function Ti(t) {
          if (!Nn(t))
            return ll(t);
          var e = [];
          for (var n in st(t))
            rt.call(t, n) && n != "constructor" && e.push(n);
          return e;
        }
        function cf(t) {
          if (!gt(t))
            return Hf(t);
          var e = Nn(t), n = [];
          for (var s in t)
            s == "constructor" && (e || !rt.call(t, s)) || n.push(s);
          return n;
        }
        function Ii(t, e) {
          return t < e;
        }
        function Oa(t, e) {
          var n = -1, s = qt(t) ? M(t.length) : [];
          return Be(t, function(o, c, p) {
            s[++n] = e(o, c, p);
          }), s;
        }
        function Fa(t) {
          var e = Gi(t);
          return e.length == 1 && e[0][2] ? ho(e[0][0], e[0][1]) : function(n) {
            return n === t || Pi(n, t, e);
          };
        }
        function Ra(t, e) {
          return Ki(t) && fo(e) ? ho(we(t), e) : function(n) {
            var s = ns(n, t);
            return s === i && s === e ? rs(n, t) : Ln(e, s, D | E);
          };
        }
        function gr(t, e, n, s, o) {
          t !== e && Ci(e, function(c, p) {
            if (o || (o = new he()), gt(c))
              lf(t, e, p, n, gr, s, o);
            else {
              var g = s ? s(Zi(t, p), c, p + "", t, e, o) : i;
              g === i && (g = c), bi(t, p, g);
            }
          }, zt);
        }
        function lf(t, e, n, s, o, c, p) {
          var g = Zi(t, n), y = Zi(e, n), x = p.get(y);
          if (x) {
            bi(t, n, x);
            return;
          }
          var A = c ? c(g, y, n + "", t, e, p) : i, T = A === i;
          if (T) {
            var F = H(y), N = !F && ze(y), U = !F && !N && mn(y);
            A = y, F || N || U ? H(g) ? A = g : mt(g) ? A = $t(g) : N ? (T = !1, A = Ha(y, !0)) : U ? (T = !1, A = Ka(y, !0)) : A = [] : Bn(y) || en(y) ? (A = g, en(g) ? A = zo(g) : (!gt(g) || Ee(g)) && (A = lo(y))) : T = !1;
          }
          T && (p.set(y, A), o(A, y, s, c, p), p.delete(y)), bi(t, n, A);
        }
        function La(t, e) {
          var n = t.length;
          if (n)
            return e += e < 0 ? n : 0, Ie(e, n) ? t[e] : i;
        }
        function ka(t, e, n) {
          e.length ? e = pt(e, function(c) {
            return H(c) ? function(p) {
              return Qe(p, c.length === 1 ? c[0] : c);
            } : c;
          }) : e = [Gt];
          var s = -1;
          e = pt(e, Zt(B()));
          var o = Oa(t, function(c, p, g) {
            var y = pt(e, function(x) {
              return x(c);
            });
            return { criteria: y, index: ++s, value: c };
          });
          return Dc(o, function(c, p) {
            return Cf(c, p, n);
          });
        }
        function ff(t, e) {
          return Da(t, e, function(n, s) {
            return rs(t, s);
          });
        }
        function Da(t, e, n) {
          for (var s = -1, o = e.length, c = {}; ++s < o; ) {
            var p = e[s], g = Qe(t, p);
            n(g, p) && kn(c, $e(p, t), g);
          }
          return c;
        }
        function hf(t) {
          return function(e) {
            return Qe(e, t);
          };
        }
        function Ei(t, e, n, s) {
          var o = s ? kc : on, c = -1, p = e.length, g = t;
          for (t === e && (e = $t(e)), n && (g = pt(t, Zt(n))); ++c < p; )
            for (var y = 0, x = e[c], A = n ? n(x) : x; (y = o(g, A, y, s)) > -1; )
              g !== t && sr.call(g, y, 1), sr.call(t, y, 1);
          return t;
        }
        function Na(t, e) {
          for (var n = t ? e.length : 0, s = n - 1; n--; ) {
            var o = e[n];
            if (n == s || o !== c) {
              var c = o;
              Ie(o) ? sr.call(t, o, 1) : Li(t, o);
            }
          }
          return t;
        }
        function Oi(t, e) {
          return t + ur(va() * (e - t + 1));
        }
        function pf(t, e, n, s) {
          for (var o = -1, c = xt(or((e - t) / (n || 1)), 0), p = M(c); c--; )
            p[s ? c : ++o] = t, t += n;
          return p;
        }
        function Fi(t, e) {
          var n = "";
          if (!t || e < 1 || e > ge)
            return n;
          do
            e % 2 && (n += t), e = ur(e / 2), e && (t += t);
          while (e);
          return n;
        }
        function j(t, e) {
          return Yi(po(t, e, Gt), t + "");
        }
        function df(t) {
          return wa(yn(t));
        }
        function gf(t, e) {
          var n = yn(t);
          return Ar(n, Xe(e, 0, n.length));
        }
        function kn(t, e, n, s) {
          if (!gt(t))
            return t;
          e = $e(e, t);
          for (var o = -1, c = e.length, p = c - 1, g = t; g != null && ++o < c; ) {
            var y = we(e[o]), x = n;
            if (y === "__proto__" || y === "constructor" || y === "prototype")
              return t;
            if (o != p) {
              var A = g[y];
              x = s ? s(A, y, g) : i, x === i && (x = gt(A) ? A : Ie(e[o + 1]) ? [] : {});
            }
            On(g, y, x), g = g[y];
          }
          return t;
        }
        var Wa = cr ? function(t, e) {
          return cr.set(t, e), t;
        } : Gt, _f = ar ? function(t, e) {
          return ar(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ss(e),
            writable: !0
          });
        } : Gt;
        function vf(t) {
          return Ar(yn(t));
        }
        function oe(t, e, n) {
          var s = -1, o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
          for (var c = M(o); ++s < o; )
            c[s] = t[s + e];
          return c;
        }
        function mf(t, e) {
          var n;
          return Be(t, function(s, o, c) {
            return n = e(s, o, c), !n;
          }), !!n;
        }
        function _r(t, e, n) {
          var s = 0, o = t == null ? s : t.length;
          if (typeof e == "number" && e === e && o <= z) {
            for (; s < o; ) {
              var c = s + o >>> 1, p = t[c];
              p !== null && !jt(p) && (n ? p <= e : p < e) ? s = c + 1 : o = c;
            }
            return o;
          }
          return Ri(t, e, Gt, n);
        }
        function Ri(t, e, n, s) {
          var o = 0, c = t == null ? 0 : t.length;
          if (c === 0)
            return 0;
          e = n(e);
          for (var p = e !== e, g = e === null, y = jt(e), x = e === i; o < c; ) {
            var A = ur((o + c) / 2), T = n(t[A]), F = T !== i, N = T === null, U = T === T, J = jt(T);
            if (p)
              var $ = s || U;
            else x ? $ = U && (s || F) : g ? $ = U && F && (s || !N) : y ? $ = U && F && !N && (s || !J) : N || J ? $ = !1 : $ = s ? T <= e : T < e;
            $ ? o = A + 1 : c = A;
          }
          return It(c, q);
        }
        function Ba(t, e) {
          for (var n = -1, s = t.length, o = 0, c = []; ++n < s; ) {
            var p = t[n], g = e ? e(p) : p;
            if (!n || !pe(g, y)) {
              var y = g;
              c[o++] = p === 0 ? 0 : p;
            }
          }
          return c;
        }
        function Ua(t) {
          return typeof t == "number" ? t : jt(t) ? Ce : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (H(t))
            return pt(t, Yt) + "";
          if (jt(t))
            return ma ? ma.call(t) : "";
          var e = t + "";
          return e == "0" && 1 / t == -Me ? "-0" : e;
        }
        function Ue(t, e, n) {
          var s = -1, o = Yn, c = t.length, p = !0, g = [], y = g;
          if (n)
            p = !1, o = ui;
          else if (c >= l) {
            var x = e ? null : If(t);
            if (x)
              return Xn(x);
            p = !1, o = An, y = new je();
          } else
            y = e ? [] : g;
          t:
            for (; ++s < c; ) {
              var A = t[s], T = e ? e(A) : A;
              if (A = n || A !== 0 ? A : 0, p && T === T) {
                for (var F = y.length; F--; )
                  if (y[F] === T)
                    continue t;
                e && y.push(T), g.push(A);
              } else o(y, T, n) || (y !== g && y.push(T), g.push(A));
            }
          return g;
        }
        function Li(t, e) {
          return e = $e(e, t), t = go(t, e), t == null || delete t[we(ue(e))];
        }
        function $a(t, e, n, s) {
          return kn(t, e, n(Qe(t, e)), s);
        }
        function vr(t, e, n, s) {
          for (var o = t.length, c = s ? o : -1; (s ? c-- : ++c < o) && e(t[c], c, t); )
            ;
          return n ? oe(t, s ? 0 : c, s ? c + 1 : o) : oe(t, s ? c + 1 : 0, s ? o : c);
        }
        function qa(t, e) {
          var n = t;
          return n instanceof Q && (n = n.value()), ci(e, function(s, o) {
            return o.func.apply(o.thisArg, De([s], o.args));
          }, n);
        }
        function ki(t, e, n) {
          var s = t.length;
          if (s < 2)
            return s ? Ue(t[0]) : [];
          for (var o = -1, c = M(s); ++o < s; )
            for (var p = t[o], g = -1; ++g < s; )
              g != o && (c[o] = Fn(c[o] || p, t[g], e, n));
          return Ue(Tt(c, 1), e, n);
        }
        function za(t, e, n) {
          for (var s = -1, o = t.length, c = e.length, p = {}; ++s < o; ) {
            var g = s < c ? e[s] : i;
            n(p, t[s], g);
          }
          return p;
        }
        function Di(t) {
          return mt(t) ? t : [];
        }
        function Ni(t) {
          return typeof t == "function" ? t : Gt;
        }
        function $e(t, e) {
          return H(t) ? t : Ki(t, e) ? [t] : yo(nt(t));
        }
        var yf = j;
        function qe(t, e, n) {
          var s = t.length;
          return n = n === i ? s : n, !e && n >= s ? t : oe(t, e, n);
        }
        var Ga = sl || function(t) {
          return Pt.clearTimeout(t);
        };
        function Ha(t, e) {
          if (e)
            return t.slice();
          var n = t.length, s = ha ? ha(n) : new t.constructor(n);
          return t.copy(s), s;
        }
        function Wi(t) {
          var e = new t.constructor(t.byteLength);
          return new rr(e).set(new rr(t)), e;
        }
        function wf(t, e) {
          var n = e ? Wi(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.byteLength);
        }
        function bf(t) {
          var e = new t.constructor(t.source, Ts.exec(t));
          return e.lastIndex = t.lastIndex, e;
        }
        function Mf(t) {
          return En ? st(En.call(t)) : {};
        }
        function Ka(t, e) {
          var n = e ? Wi(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        }
        function Ja(t, e) {
          if (t !== e) {
            var n = t !== i, s = t === null, o = t === t, c = jt(t), p = e !== i, g = e === null, y = e === e, x = jt(e);
            if (!g && !x && !c && t > e || c && p && y && !g && !x || s && p && y || !n && y || !o)
              return 1;
            if (!s && !c && !x && t < e || x && n && o && !s && !c || g && n && o || !p && o || !y)
              return -1;
          }
          return 0;
        }
        function Cf(t, e, n) {
          for (var s = -1, o = t.criteria, c = e.criteria, p = o.length, g = n.length; ++s < p; ) {
            var y = Ja(o[s], c[s]);
            if (y) {
              if (s >= g)
                return y;
              var x = n[s];
              return y * (x == "desc" ? -1 : 1);
            }
          }
          return t.index - e.index;
        }
        function Za(t, e, n, s) {
          for (var o = -1, c = t.length, p = n.length, g = -1, y = e.length, x = xt(c - p, 0), A = M(y + x), T = !s; ++g < y; )
            A[g] = e[g];
          for (; ++o < p; )
            (T || o < c) && (A[n[o]] = t[o]);
          for (; x--; )
            A[g++] = t[o++];
          return A;
        }
        function Ya(t, e, n, s) {
          for (var o = -1, c = t.length, p = -1, g = n.length, y = -1, x = e.length, A = xt(c - g, 0), T = M(A + x), F = !s; ++o < A; )
            T[o] = t[o];
          for (var N = o; ++y < x; )
            T[N + y] = e[y];
          for (; ++p < g; )
            (F || o < c) && (T[N + n[p]] = t[o++]);
          return T;
        }
        function $t(t, e) {
          var n = -1, s = t.length;
          for (e || (e = M(s)); ++n < s; )
            e[n] = t[n];
          return e;
        }
        function ye(t, e, n, s) {
          var o = !n;
          n || (n = {});
          for (var c = -1, p = e.length; ++c < p; ) {
            var g = e[c], y = s ? s(n[g], t[g], g, n, t) : i;
            y === i && (y = t[g]), o ? Se(n, g, y) : On(n, g, y);
          }
          return n;
        }
        function xf(t, e) {
          return ye(t, Hi(t), e);
        }
        function Af(t, e) {
          return ye(t, uo(t), e);
        }
        function mr(t, e) {
          return function(n, s) {
            var o = H(n) ? Ic : Kl, c = e ? e() : {};
            return o(n, t, B(s, 2), c);
          };
        }
        function gn(t) {
          return j(function(e, n) {
            var s = -1, o = n.length, c = o > 1 ? n[o - 1] : i, p = o > 2 ? n[2] : i;
            for (c = t.length > 3 && typeof c == "function" ? (o--, c) : i, p && kt(n[0], n[1], p) && (c = o < 3 ? i : c, o = 1), e = st(e); ++s < o; ) {
              var g = n[s];
              g && t(e, g, s, c);
            }
            return e;
          });
        }
        function ja(t, e) {
          return function(n, s) {
            if (n == null)
              return n;
            if (!qt(n))
              return t(n, s);
            for (var o = n.length, c = e ? o : -1, p = st(n); (e ? c-- : ++c < o) && s(p[c], c, p) !== !1; )
              ;
            return n;
          };
        }
        function Xa(t) {
          return function(e, n, s) {
            for (var o = -1, c = st(e), p = s(e), g = p.length; g--; ) {
              var y = p[t ? g : ++o];
              if (n(c[y], y, c) === !1)
                break;
            }
            return e;
          };
        }
        function Sf(t, e, n) {
          var s = e & O, o = Dn(t);
          function c() {
            var p = this && this !== Pt && this instanceof c ? o : t;
            return p.apply(s ? n : this, arguments);
          }
          return c;
        }
        function Qa(t) {
          return function(e) {
            e = nt(e);
            var n = un(e) ? fe(e) : i, s = n ? n[0] : e.charAt(0), o = n ? qe(n, 1).join("") : e.slice(1);
            return s[t]() + o;
          };
        }
        function _n(t) {
          return function(e) {
            return ci(Xo(jo(e).replace(gc, "")), t, "");
          };
        }
        function Dn(t) {
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
            return gt(s) ? s : n;
          };
        }
        function Pf(t, e, n) {
          var s = Dn(t);
          function o() {
            for (var c = arguments.length, p = M(c), g = c, y = vn(o); g--; )
              p[g] = arguments[g];
            var x = c < 3 && p[0] !== y && p[c - 1] !== y ? [] : Ne(p, y);
            if (c -= x.length, c < n)
              return ro(
                t,
                e,
                yr,
                o.placeholder,
                i,
                p,
                x,
                i,
                i,
                n - c
              );
            var A = this && this !== Pt && this instanceof o ? s : t;
            return Jt(A, this, p);
          }
          return o;
        }
        function Va(t) {
          return function(e, n, s) {
            var o = st(e);
            if (!qt(e)) {
              var c = B(n, 3);
              e = St(e), n = function(g) {
                return c(o[g], g, o);
              };
            }
            var p = t(e, n, s);
            return p > -1 ? o[c ? e[p] : p] : i;
          };
        }
        function to(t) {
          return Te(function(e) {
            var n = e.length, s = n, o = se.prototype.thru;
            for (t && e.reverse(); s--; ) {
              var c = e[s];
              if (typeof c != "function")
                throw new ie(h);
              if (o && !p && Cr(c) == "wrapper")
                var p = new se([], !0);
            }
            for (s = p ? s : n; ++s < n; ) {
              c = e[s];
              var g = Cr(c), y = g == "wrapper" ? zi(c) : i;
              y && Ji(y[0]) && y[1] == (Mt | Y | dt | te) && !y[4].length && y[9] == 1 ? p = p[Cr(y[0])].apply(p, y[3]) : p = c.length == 1 && Ji(c) ? p[g]() : p.thru(c);
            }
            return function() {
              var x = arguments, A = x[0];
              if (p && x.length == 1 && H(A))
                return p.plant(A).value();
              for (var T = 0, F = n ? e[T].apply(this, x) : A; ++T < n; )
                F = e[T].call(this, F);
              return F;
            };
          });
        }
        function yr(t, e, n, s, o, c, p, g, y, x) {
          var A = e & Mt, T = e & O, F = e & W, N = e & (Y | it), U = e & Ht, J = F ? i : Dn(t);
          function $() {
            for (var X = arguments.length, V = M(X), Xt = X; Xt--; )
              V[Xt] = arguments[Xt];
            if (N)
              var Dt = vn($), Qt = Wc(V, Dt);
            if (s && (V = Za(V, s, o, N)), c && (V = Ya(V, c, p, N)), X -= Qt, N && X < x) {
              var yt = Ne(V, Dt);
              return ro(
                t,
                e,
                yr,
                $.placeholder,
                n,
                V,
                yt,
                g,
                y,
                x - X
              );
            }
            var de = T ? n : this, Fe = F ? de[t] : t;
            return X = V.length, g ? V = Jf(V, g) : U && X > 1 && V.reverse(), A && y < X && (V.length = y), this && this !== Pt && this instanceof $ && (Fe = J || Dn(Fe)), Fe.apply(de, V);
          }
          return $;
        }
        function eo(t, e) {
          return function(n, s) {
            return tf(n, t, e(s), {});
          };
        }
        function wr(t, e) {
          return function(n, s) {
            var o;
            if (n === i && s === i)
              return e;
            if (n !== i && (o = n), s !== i) {
              if (o === i)
                return s;
              typeof n == "string" || typeof s == "string" ? (n = Yt(n), s = Yt(s)) : (n = Ua(n), s = Ua(s)), o = t(n, s);
            }
            return o;
          };
        }
        function Bi(t) {
          return Te(function(e) {
            return e = pt(e, Zt(B())), j(function(n) {
              var s = this;
              return t(e, function(o) {
                return Jt(o, s, n);
              });
            });
          });
        }
        function br(t, e) {
          e = e === i ? " " : Yt(e);
          var n = e.length;
          if (n < 2)
            return n ? Fi(e, t) : e;
          var s = Fi(e, or(t / cn(e)));
          return un(e) ? qe(fe(s), 0, t).join("") : s.slice(0, t);
        }
        function Tf(t, e, n, s) {
          var o = e & O, c = Dn(t);
          function p() {
            for (var g = -1, y = arguments.length, x = -1, A = s.length, T = M(A + y), F = this && this !== Pt && this instanceof p ? c : t; ++x < A; )
              T[x] = s[x];
            for (; y--; )
              T[x++] = arguments[++g];
            return Jt(F, o ? n : this, T);
          }
          return p;
        }
        function no(t) {
          return function(e, n, s) {
            return s && typeof s != "number" && kt(e, n, s) && (n = s = i), e = Oe(e), n === i ? (n = e, e = 0) : n = Oe(n), s = s === i ? e < n ? 1 : -1 : Oe(s), pf(e, n, s, t);
          };
        }
        function Mr(t) {
          return function(e, n) {
            return typeof e == "string" && typeof n == "string" || (e = ce(e), n = ce(n)), t(e, n);
          };
        }
        function ro(t, e, n, s, o, c, p, g, y, x) {
          var A = e & Y, T = A ? p : i, F = A ? i : p, N = A ? c : i, U = A ? i : c;
          e |= A ? dt : Wt, e &= ~(A ? Wt : dt), e & Z || (e &= ~(O | W));
          var J = [
            t,
            e,
            o,
            N,
            T,
            U,
            F,
            g,
            y,
            x
          ], $ = n.apply(i, J);
          return Ji(t) && _o($, J), $.placeholder = s, vo($, t, e);
        }
        function Ui(t) {
          var e = Ct[t];
          return function(n, s) {
            if (n = ce(n), s = s == null ? 0 : It(K(s), 292), s && _a(n)) {
              var o = (nt(n) + "e").split("e"), c = e(o[0] + "e" + (+o[1] + s));
              return o = (nt(c) + "e").split("e"), +(o[0] + "e" + (+o[1] - s));
            }
            return e(n);
          };
        }
        var If = hn && 1 / Xn(new hn([, -0]))[1] == Me ? function(t) {
          return new hn(t);
        } : us;
        function io(t) {
          return function(e) {
            var n = Et(e);
            return n == _t ? _i(e) : n == ht ? Hc(e) : Nc(e, t(e));
          };
        }
        function Pe(t, e, n, s, o, c, p, g) {
          var y = e & W;
          if (!y && typeof t != "function")
            throw new ie(h);
          var x = s ? s.length : 0;
          if (x || (e &= ~(dt | Wt), s = o = i), p = p === i ? p : xt(K(p), 0), g = g === i ? g : K(g), x -= o ? o.length : 0, e & Wt) {
            var A = s, T = o;
            s = o = i;
          }
          var F = y ? i : zi(t), N = [
            t,
            e,
            n,
            s,
            o,
            A,
            T,
            c,
            p,
            g
          ];
          if (F && Gf(N, F), t = N[0], e = N[1], n = N[2], s = N[3], o = N[4], g = N[9] = N[9] === i ? y ? 0 : t.length : xt(N[9] - x, 0), !g && e & (Y | it) && (e &= ~(Y | it)), !e || e == O)
            var U = Sf(t, e, n);
          else e == Y || e == it ? U = Pf(t, e, g) : (e == dt || e == (O | dt)) && !o.length ? U = Tf(t, e, n, s) : U = yr.apply(i, N);
          var J = F ? Wa : _o;
          return vo(J(U, N), t, e);
        }
        function so(t, e, n, s) {
          return t === i || pe(t, fn[n]) && !rt.call(s, n) ? e : t;
        }
        function ao(t, e, n, s, o, c) {
          return gt(t) && gt(e) && (c.set(e, t), gr(t, e, i, ao, c), c.delete(e)), t;
        }
        function Ef(t) {
          return Bn(t) ? i : t;
        }
        function oo(t, e, n, s, o, c) {
          var p = n & D, g = t.length, y = e.length;
          if (g != y && !(p && y > g))
            return !1;
          var x = c.get(t), A = c.get(e);
          if (x && A)
            return x == e && A == t;
          var T = -1, F = !0, N = n & E ? new je() : i;
          for (c.set(t, e), c.set(e, t); ++T < g; ) {
            var U = t[T], J = e[T];
            if (s)
              var $ = p ? s(J, U, T, e, t, c) : s(U, J, T, t, e, c);
            if ($ !== i) {
              if ($)
                continue;
              F = !1;
              break;
            }
            if (N) {
              if (!li(e, function(X, V) {
                if (!An(N, V) && (U === X || o(U, X, n, s, c)))
                  return N.push(V);
              })) {
                F = !1;
                break;
              }
            } else if (!(U === J || o(U, J, n, s, c))) {
              F = !1;
              break;
            }
          }
          return c.delete(t), c.delete(e), F;
        }
        function Of(t, e, n, s, o, c, p) {
          switch (n) {
            case sn:
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              t = t.buffer, e = e.buffer;
            case xn:
              return !(t.byteLength != e.byteLength || !c(new rr(t), new rr(e)));
            case ut:
            case wt:
            case Rt:
              return pe(+t, +e);
            case Ft:
              return t.name == e.name && t.message == e.message;
            case ee:
            case ve:
              return t == e + "";
            case _t:
              var g = _i;
            case ht:
              var y = s & D;
              if (g || (g = Xn), t.size != e.size && !y)
                return !1;
              var x = p.get(t);
              if (x)
                return x == e;
              s |= E, p.set(t, e);
              var A = oo(g(t), g(e), s, o, c, p);
              return p.delete(t), A;
            case Hn:
              if (En)
                return En.call(t) == En.call(e);
          }
          return !1;
        }
        function Ff(t, e, n, s, o, c) {
          var p = n & D, g = $i(t), y = g.length, x = $i(e), A = x.length;
          if (y != A && !p)
            return !1;
          for (var T = y; T--; ) {
            var F = g[T];
            if (!(p ? F in e : rt.call(e, F)))
              return !1;
          }
          var N = c.get(t), U = c.get(e);
          if (N && U)
            return N == e && U == t;
          var J = !0;
          c.set(t, e), c.set(e, t);
          for (var $ = p; ++T < y; ) {
            F = g[T];
            var X = t[F], V = e[F];
            if (s)
              var Xt = p ? s(V, X, F, e, t, c) : s(X, V, F, t, e, c);
            if (!(Xt === i ? X === V || o(X, V, n, s, c) : Xt)) {
              J = !1;
              break;
            }
            $ || ($ = F == "constructor");
          }
          if (J && !$) {
            var Dt = t.constructor, Qt = e.constructor;
            Dt != Qt && "constructor" in t && "constructor" in e && !(typeof Dt == "function" && Dt instanceof Dt && typeof Qt == "function" && Qt instanceof Qt) && (J = !1);
          }
          return c.delete(t), c.delete(e), J;
        }
        function Te(t) {
          return Yi(po(t, i, Co), t + "");
        }
        function $i(t) {
          return Pa(t, St, Hi);
        }
        function qi(t) {
          return Pa(t, zt, uo);
        }
        var zi = cr ? function(t) {
          return cr.get(t);
        } : us;
        function Cr(t) {
          for (var e = t.name + "", n = pn[e], s = rt.call(pn, e) ? n.length : 0; s--; ) {
            var o = n[s], c = o.func;
            if (c == null || c == t)
              return o.name;
          }
          return e;
        }
        function vn(t) {
          var e = rt.call(u, "placeholder") ? u : t;
          return e.placeholder;
        }
        function B() {
          var t = u.iteratee || as;
          return t = t === as ? Ea : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function xr(t, e) {
          var n = t.__data__;
          return Uf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
        }
        function Gi(t) {
          for (var e = St(t), n = e.length; n--; ) {
            var s = e[n], o = t[s];
            e[n] = [s, o, fo(o)];
          }
          return e;
        }
        function Ve(t, e) {
          var n = qc(t, e);
          return Ia(n) ? n : i;
        }
        function Rf(t) {
          var e = rt.call(t, Ze), n = t[Ze];
          try {
            t[Ze] = i;
            var s = !0;
          } catch {
          }
          var o = er.call(t);
          return s && (e ? t[Ze] = n : delete t[Ze]), o;
        }
        var Hi = mi ? function(t) {
          return t == null ? [] : (t = st(t), ke(mi(t), function(e) {
            return da.call(t, e);
          }));
        } : cs, uo = mi ? function(t) {
          for (var e = []; t; )
            De(e, Hi(t)), t = ir(t);
          return e;
        } : cs, Et = Lt;
        (yi && Et(new yi(new ArrayBuffer(1))) != sn || Pn && Et(new Pn()) != _t || wi && Et(wi.resolve()) != Ut || hn && Et(new hn()) != ht || Tn && Et(new Tn()) != Cn) && (Et = function(t) {
          var e = Lt(t), n = e == bt ? t.constructor : i, s = n ? tn(n) : "";
          if (s)
            switch (s) {
              case dl:
                return sn;
              case gl:
                return _t;
              case _l:
                return Ut;
              case vl:
                return ht;
              case ml:
                return Cn;
            }
          return e;
        });
        function Lf(t, e, n) {
          for (var s = -1, o = n.length; ++s < o; ) {
            var c = n[s], p = c.size;
            switch (c.type) {
              case "drop":
                t += p;
                break;
              case "dropRight":
                e -= p;
                break;
              case "take":
                e = It(e, t + p);
                break;
              case "takeRight":
                t = xt(t, e - p);
                break;
            }
          }
          return { start: t, end: e };
        }
        function kf(t) {
          var e = t.match(Uu);
          return e ? e[1].split($u) : [];
        }
        function co(t, e, n) {
          e = $e(e, t);
          for (var s = -1, o = e.length, c = !1; ++s < o; ) {
            var p = we(e[s]);
            if (!(c = t != null && n(t, p)))
              break;
            t = t[p];
          }
          return c || ++s != o ? c : (o = t == null ? 0 : t.length, !!o && Or(o) && Ie(p, o) && (H(t) || en(t)));
        }
        function Df(t) {
          var e = t.length, n = new t.constructor(e);
          return e && typeof t[0] == "string" && rt.call(t, "index") && (n.index = t.index, n.input = t.input), n;
        }
        function lo(t) {
          return typeof t.constructor == "function" && !Nn(t) ? dn(ir(t)) : {};
        }
        function Nf(t, e, n) {
          var s = t.constructor;
          switch (e) {
            case xn:
              return Wi(t);
            case ut:
            case wt:
              return new s(+t);
            case sn:
              return wf(t, n);
            case Gr:
            case Hr:
            case Kr:
            case Jr:
            case Zr:
            case Yr:
            case jr:
            case Xr:
            case Qr:
              return Ka(t, n);
            case _t:
              return new s();
            case Rt:
            case ve:
              return new s(t);
            case ee:
              return bf(t);
            case ht:
              return new s();
            case Hn:
              return Mf(t);
          }
        }
        function Wf(t, e) {
          var n = e.length;
          if (!n)
            return t;
          var s = n - 1;
          return e[s] = (n > 1 ? "& " : "") + e[s], e = e.join(n > 2 ? ", " : " "), t.replace(Bu, `{
/* [wrapped with ` + e + `] */
`);
        }
        function Bf(t) {
          return H(t) || en(t) || !!(ga && t && t[ga]);
        }
        function Ie(t, e) {
          var n = typeof t;
          return e = e ?? ge, !!e && (n == "number" || n != "symbol" && ju.test(t)) && t > -1 && t % 1 == 0 && t < e;
        }
        function kt(t, e, n) {
          if (!gt(n))
            return !1;
          var s = typeof e;
          return (s == "number" ? qt(n) && Ie(e, n.length) : s == "string" && e in n) ? pe(n[e], t) : !1;
        }
        function Ki(t, e) {
          if (H(t))
            return !1;
          var n = typeof t;
          return n == "number" || n == "symbol" || n == "boolean" || t == null || jt(t) ? !0 : ku.test(t) || !Lu.test(t) || e != null && t in st(e);
        }
        function Uf(t) {
          var e = typeof t;
          return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
        }
        function Ji(t) {
          var e = Cr(t), n = u[e];
          if (typeof n != "function" || !(e in Q.prototype))
            return !1;
          if (t === n)
            return !0;
          var s = zi(n);
          return !!s && t === s[0];
        }
        function $f(t) {
          return !!fa && fa in t;
        }
        var qf = Vn ? Ee : ls;
        function Nn(t) {
          var e = t && t.constructor, n = typeof e == "function" && e.prototype || fn;
          return t === n;
        }
        function fo(t) {
          return t === t && !gt(t);
        }
        function ho(t, e) {
          return function(n) {
            return n == null ? !1 : n[t] === e && (e !== i || t in st(n));
          };
        }
        function zf(t) {
          var e = Ir(t, function(s) {
            return n.size === b && n.clear(), s;
          }), n = e.cache;
          return e;
        }
        function Gf(t, e) {
          var n = t[1], s = e[1], o = n | s, c = o < (O | W | Mt), p = s == Mt && n == Y || s == Mt && n == te && t[7].length <= e[8] || s == (Mt | te) && e[7].length <= e[8] && n == Y;
          if (!(c || p))
            return t;
          s & O && (t[2] = e[2], o |= n & O ? 0 : Z);
          var g = e[3];
          if (g) {
            var y = t[3];
            t[3] = y ? Za(y, g, e[4]) : g, t[4] = y ? Ne(t[3], S) : e[4];
          }
          return g = e[5], g && (y = t[5], t[5] = y ? Ya(y, g, e[6]) : g, t[6] = y ? Ne(t[5], S) : e[6]), g = e[7], g && (t[7] = g), s & Mt && (t[8] = t[8] == null ? e[8] : It(t[8], e[8])), t[9] == null && (t[9] = e[9]), t[0] = e[0], t[1] = o, t;
        }
        function Hf(t) {
          var e = [];
          if (t != null)
            for (var n in st(t))
              e.push(n);
          return e;
        }
        function Kf(t) {
          return er.call(t);
        }
        function po(t, e, n) {
          return e = xt(e === i ? t.length - 1 : e, 0), function() {
            for (var s = arguments, o = -1, c = xt(s.length - e, 0), p = M(c); ++o < c; )
              p[o] = s[e + o];
            o = -1;
            for (var g = M(e + 1); ++o < e; )
              g[o] = s[o];
            return g[e] = n(p), Jt(t, this, g);
          };
        }
        function go(t, e) {
          return e.length < 2 ? t : Qe(t, oe(e, 0, -1));
        }
        function Jf(t, e) {
          for (var n = t.length, s = It(e.length, n), o = $t(t); s--; ) {
            var c = e[s];
            t[s] = Ie(c, n) ? o[c] : i;
          }
          return t;
        }
        function Zi(t, e) {
          if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
            return t[e];
        }
        var _o = mo(Wa), Wn = ol || function(t, e) {
          return Pt.setTimeout(t, e);
        }, Yi = mo(_f);
        function vo(t, e, n) {
          var s = e + "";
          return Yi(t, Wf(s, Zf(kf(s), n)));
        }
        function mo(t) {
          var e = 0, n = 0;
          return function() {
            var s = fl(), o = qr - (s - n);
            if (n = s, o > 0) {
              if (++e >= qn)
                return arguments[0];
            } else
              e = 0;
            return t.apply(i, arguments);
          };
        }
        function Ar(t, e) {
          var n = -1, s = t.length, o = s - 1;
          for (e = e === i ? s : e; ++n < e; ) {
            var c = Oi(n, o), p = t[c];
            t[c] = t[n], t[n] = p;
          }
          return t.length = e, t;
        }
        var yo = zf(function(t) {
          var e = [];
          return t.charCodeAt(0) === 46 && e.push(""), t.replace(Du, function(n, s, o, c) {
            e.push(o ? c.replace(Gu, "$1") : s || n);
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
        function Zf(t, e) {
          return re(lt, function(n) {
            var s = "_." + n[0];
            e & n[1] && !Yn(t, s) && t.push(s);
          }), t.sort();
        }
        function wo(t) {
          if (t instanceof Q)
            return t.clone();
          var e = new se(t.__wrapped__, t.__chain__);
          return e.__actions__ = $t(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
        }
        function Yf(t, e, n) {
          (n ? kt(t, e, n) : e === i) ? e = 1 : e = xt(K(e), 0);
          var s = t == null ? 0 : t.length;
          if (!s || e < 1)
            return [];
          for (var o = 0, c = 0, p = M(or(s / e)); o < s; )
            p[c++] = oe(t, o, o += e);
          return p;
        }
        function jf(t) {
          for (var e = -1, n = t == null ? 0 : t.length, s = 0, o = []; ++e < n; ) {
            var c = t[e];
            c && (o[s++] = c);
          }
          return o;
        }
        function Xf() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var e = M(t - 1), n = arguments[0], s = t; s--; )
            e[s - 1] = arguments[s];
          return De(H(n) ? $t(n) : [n], Tt(e, 1));
        }
        var Qf = j(function(t, e) {
          return mt(t) ? Fn(t, Tt(e, 1, mt, !0)) : [];
        }), Vf = j(function(t, e) {
          var n = ue(e);
          return mt(n) && (n = i), mt(t) ? Fn(t, Tt(e, 1, mt, !0), B(n, 2)) : [];
        }), th = j(function(t, e) {
          var n = ue(e);
          return mt(n) && (n = i), mt(t) ? Fn(t, Tt(e, 1, mt, !0), i, n) : [];
        });
        function eh(t, e, n) {
          var s = t == null ? 0 : t.length;
          return s ? (e = n || e === i ? 1 : K(e), oe(t, e < 0 ? 0 : e, s)) : [];
        }
        function nh(t, e, n) {
          var s = t == null ? 0 : t.length;
          return s ? (e = n || e === i ? 1 : K(e), e = s - e, oe(t, 0, e < 0 ? 0 : e)) : [];
        }
        function rh(t, e) {
          return t && t.length ? vr(t, B(e, 3), !0, !0) : [];
        }
        function ih(t, e) {
          return t && t.length ? vr(t, B(e, 3), !0) : [];
        }
        function sh(t, e, n, s) {
          var o = t == null ? 0 : t.length;
          return o ? (n && typeof n != "number" && kt(t, e, n) && (n = 0, s = o), jl(t, e, n, s)) : [];
        }
        function bo(t, e, n) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = n == null ? 0 : K(n);
          return o < 0 && (o = xt(s + o, 0)), jn(t, B(e, 3), o);
        }
        function Mo(t, e, n) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = s - 1;
          return n !== i && (o = K(n), o = n < 0 ? xt(s + o, 0) : It(o, s - 1)), jn(t, B(e, 3), o, !0);
        }
        function Co(t) {
          var e = t == null ? 0 : t.length;
          return e ? Tt(t, 1) : [];
        }
        function ah(t) {
          var e = t == null ? 0 : t.length;
          return e ? Tt(t, Me) : [];
        }
        function oh(t, e) {
          var n = t == null ? 0 : t.length;
          return n ? (e = e === i ? 1 : K(e), Tt(t, e)) : [];
        }
        function uh(t) {
          for (var e = -1, n = t == null ? 0 : t.length, s = {}; ++e < n; ) {
            var o = t[e];
            s[o[0]] = o[1];
          }
          return s;
        }
        function xo(t) {
          return t && t.length ? t[0] : i;
        }
        function ch(t, e, n) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = n == null ? 0 : K(n);
          return o < 0 && (o = xt(s + o, 0)), on(t, e, o);
        }
        function lh(t) {
          var e = t == null ? 0 : t.length;
          return e ? oe(t, 0, -1) : [];
        }
        var fh = j(function(t) {
          var e = pt(t, Di);
          return e.length && e[0] === t[0] ? Si(e) : [];
        }), hh = j(function(t) {
          var e = ue(t), n = pt(t, Di);
          return e === ue(n) ? e = i : n.pop(), n.length && n[0] === t[0] ? Si(n, B(e, 2)) : [];
        }), ph = j(function(t) {
          var e = ue(t), n = pt(t, Di);
          return e = typeof e == "function" ? e : i, e && n.pop(), n.length && n[0] === t[0] ? Si(n, i, e) : [];
        });
        function dh(t, e) {
          return t == null ? "" : cl.call(t, e);
        }
        function ue(t) {
          var e = t == null ? 0 : t.length;
          return e ? t[e - 1] : i;
        }
        function gh(t, e, n) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = s;
          return n !== i && (o = K(n), o = o < 0 ? xt(s + o, 0) : It(o, s - 1)), e === e ? Jc(t, e, o) : jn(t, ra, o, !0);
        }
        function _h(t, e) {
          return t && t.length ? La(t, K(e)) : i;
        }
        var vh = j(Ao);
        function Ao(t, e) {
          return t && t.length && e && e.length ? Ei(t, e) : t;
        }
        function mh(t, e, n) {
          return t && t.length && e && e.length ? Ei(t, e, B(n, 2)) : t;
        }
        function yh(t, e, n) {
          return t && t.length && e && e.length ? Ei(t, e, i, n) : t;
        }
        var wh = Te(function(t, e) {
          var n = t == null ? 0 : t.length, s = Mi(t, e);
          return Na(t, pt(e, function(o) {
            return Ie(o, n) ? +o : o;
          }).sort(Ja)), s;
        });
        function bh(t, e) {
          var n = [];
          if (!(t && t.length))
            return n;
          var s = -1, o = [], c = t.length;
          for (e = B(e, 3); ++s < c; ) {
            var p = t[s];
            e(p, s, t) && (n.push(p), o.push(s));
          }
          return Na(t, o), n;
        }
        function ji(t) {
          return t == null ? t : pl.call(t);
        }
        function Mh(t, e, n) {
          var s = t == null ? 0 : t.length;
          return s ? (n && typeof n != "number" && kt(t, e, n) ? (e = 0, n = s) : (e = e == null ? 0 : K(e), n = n === i ? s : K(n)), oe(t, e, n)) : [];
        }
        function Ch(t, e) {
          return _r(t, e);
        }
        function xh(t, e, n) {
          return Ri(t, e, B(n, 2));
        }
        function Ah(t, e) {
          var n = t == null ? 0 : t.length;
          if (n) {
            var s = _r(t, e);
            if (s < n && pe(t[s], e))
              return s;
          }
          return -1;
        }
        function Sh(t, e) {
          return _r(t, e, !0);
        }
        function Ph(t, e, n) {
          return Ri(t, e, B(n, 2), !0);
        }
        function Th(t, e) {
          var n = t == null ? 0 : t.length;
          if (n) {
            var s = _r(t, e, !0) - 1;
            if (pe(t[s], e))
              return s;
          }
          return -1;
        }
        function Ih(t) {
          return t && t.length ? Ba(t) : [];
        }
        function Eh(t, e) {
          return t && t.length ? Ba(t, B(e, 2)) : [];
        }
        function Oh(t) {
          var e = t == null ? 0 : t.length;
          return e ? oe(t, 1, e) : [];
        }
        function Fh(t, e, n) {
          return t && t.length ? (e = n || e === i ? 1 : K(e), oe(t, 0, e < 0 ? 0 : e)) : [];
        }
        function Rh(t, e, n) {
          var s = t == null ? 0 : t.length;
          return s ? (e = n || e === i ? 1 : K(e), e = s - e, oe(t, e < 0 ? 0 : e, s)) : [];
        }
        function Lh(t, e) {
          return t && t.length ? vr(t, B(e, 3), !1, !0) : [];
        }
        function kh(t, e) {
          return t && t.length ? vr(t, B(e, 3)) : [];
        }
        var Dh = j(function(t) {
          return Ue(Tt(t, 1, mt, !0));
        }), Nh = j(function(t) {
          var e = ue(t);
          return mt(e) && (e = i), Ue(Tt(t, 1, mt, !0), B(e, 2));
        }), Wh = j(function(t) {
          var e = ue(t);
          return e = typeof e == "function" ? e : i, Ue(Tt(t, 1, mt, !0), i, e);
        });
        function Bh(t) {
          return t && t.length ? Ue(t) : [];
        }
        function Uh(t, e) {
          return t && t.length ? Ue(t, B(e, 2)) : [];
        }
        function $h(t, e) {
          return e = typeof e == "function" ? e : i, t && t.length ? Ue(t, i, e) : [];
        }
        function Xi(t) {
          if (!(t && t.length))
            return [];
          var e = 0;
          return t = ke(t, function(n) {
            if (mt(n))
              return e = xt(n.length, e), !0;
          }), di(e, function(n) {
            return pt(t, fi(n));
          });
        }
        function So(t, e) {
          if (!(t && t.length))
            return [];
          var n = Xi(t);
          return e == null ? n : pt(n, function(s) {
            return Jt(e, i, s);
          });
        }
        var qh = j(function(t, e) {
          return mt(t) ? Fn(t, e) : [];
        }), zh = j(function(t) {
          return ki(ke(t, mt));
        }), Gh = j(function(t) {
          var e = ue(t);
          return mt(e) && (e = i), ki(ke(t, mt), B(e, 2));
        }), Hh = j(function(t) {
          var e = ue(t);
          return e = typeof e == "function" ? e : i, ki(ke(t, mt), i, e);
        }), Kh = j(Xi);
        function Jh(t, e) {
          return za(t || [], e || [], On);
        }
        function Zh(t, e) {
          return za(t || [], e || [], kn);
        }
        var Yh = j(function(t) {
          var e = t.length, n = e > 1 ? t[e - 1] : i;
          return n = typeof n == "function" ? (t.pop(), n) : i, So(t, n);
        });
        function Po(t) {
          var e = u(t);
          return e.__chain__ = !0, e;
        }
        function jh(t, e) {
          return e(t), t;
        }
        function Sr(t, e) {
          return e(t);
        }
        var Xh = Te(function(t) {
          var e = t.length, n = e ? t[0] : 0, s = this.__wrapped__, o = function(c) {
            return Mi(c, t);
          };
          return e > 1 || this.__actions__.length || !(s instanceof Q) || !Ie(n) ? this.thru(o) : (s = s.slice(n, +n + (e ? 1 : 0)), s.__actions__.push({
            func: Sr,
            args: [o],
            thisArg: i
          }), new se(s, this.__chain__).thru(function(c) {
            return e && !c.length && c.push(i), c;
          }));
        });
        function Qh() {
          return Po(this);
        }
        function Vh() {
          return new se(this.value(), this.__chain__);
        }
        function tp() {
          this.__values__ === i && (this.__values__ = $o(this.value()));
          var t = this.__index__ >= this.__values__.length, e = t ? i : this.__values__[this.__index__++];
          return { done: t, value: e };
        }
        function ep() {
          return this;
        }
        function np(t) {
          for (var e, n = this; n instanceof fr; ) {
            var s = wo(n);
            s.__index__ = 0, s.__values__ = i, e ? o.__wrapped__ = s : e = s;
            var o = s;
            n = n.__wrapped__;
          }
          return o.__wrapped__ = t, e;
        }
        function rp() {
          var t = this.__wrapped__;
          if (t instanceof Q) {
            var e = t;
            return this.__actions__.length && (e = new Q(this)), e = e.reverse(), e.__actions__.push({
              func: Sr,
              args: [ji],
              thisArg: i
            }), new se(e, this.__chain__);
          }
          return this.thru(ji);
        }
        function ip() {
          return qa(this.__wrapped__, this.__actions__);
        }
        var sp = mr(function(t, e, n) {
          rt.call(t, n) ? ++t[n] : Se(t, n, 1);
        });
        function ap(t, e, n) {
          var s = H(t) ? ea : Yl;
          return n && kt(t, e, n) && (e = i), s(t, B(e, 3));
        }
        function op(t, e) {
          var n = H(t) ? ke : Aa;
          return n(t, B(e, 3));
        }
        var up = Va(bo), cp = Va(Mo);
        function lp(t, e) {
          return Tt(Pr(t, e), 1);
        }
        function fp(t, e) {
          return Tt(Pr(t, e), Me);
        }
        function hp(t, e, n) {
          return n = n === i ? 1 : K(n), Tt(Pr(t, e), n);
        }
        function To(t, e) {
          var n = H(t) ? re : Be;
          return n(t, B(e, 3));
        }
        function Io(t, e) {
          var n = H(t) ? Ec : xa;
          return n(t, B(e, 3));
        }
        var pp = mr(function(t, e, n) {
          rt.call(t, n) ? t[n].push(e) : Se(t, n, [e]);
        });
        function dp(t, e, n, s) {
          t = qt(t) ? t : yn(t), n = n && !s ? K(n) : 0;
          var o = t.length;
          return n < 0 && (n = xt(o + n, 0)), Fr(t) ? n <= o && t.indexOf(e, n) > -1 : !!o && on(t, e, n) > -1;
        }
        var gp = j(function(t, e, n) {
          var s = -1, o = typeof e == "function", c = qt(t) ? M(t.length) : [];
          return Be(t, function(p) {
            c[++s] = o ? Jt(e, p, n) : Rn(p, e, n);
          }), c;
        }), _p = mr(function(t, e, n) {
          Se(t, n, e);
        });
        function Pr(t, e) {
          var n = H(t) ? pt : Oa;
          return n(t, B(e, 3));
        }
        function vp(t, e, n, s) {
          return t == null ? [] : (H(e) || (e = e == null ? [] : [e]), n = s ? i : n, H(n) || (n = n == null ? [] : [n]), ka(t, e, n));
        }
        var mp = mr(function(t, e, n) {
          t[n ? 0 : 1].push(e);
        }, function() {
          return [[], []];
        });
        function yp(t, e, n) {
          var s = H(t) ? ci : sa, o = arguments.length < 3;
          return s(t, B(e, 4), n, o, Be);
        }
        function wp(t, e, n) {
          var s = H(t) ? Oc : sa, o = arguments.length < 3;
          return s(t, B(e, 4), n, o, xa);
        }
        function bp(t, e) {
          var n = H(t) ? ke : Aa;
          return n(t, Er(B(e, 3)));
        }
        function Mp(t) {
          var e = H(t) ? wa : df;
          return e(t);
        }
        function Cp(t, e, n) {
          (n ? kt(t, e, n) : e === i) ? e = 1 : e = K(e);
          var s = H(t) ? Gl : gf;
          return s(t, e);
        }
        function xp(t) {
          var e = H(t) ? Hl : vf;
          return e(t);
        }
        function Ap(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Fr(t) ? cn(t) : t.length;
          var e = Et(t);
          return e == _t || e == ht ? t.size : Ti(t).length;
        }
        function Sp(t, e, n) {
          var s = H(t) ? li : mf;
          return n && kt(t, e, n) && (e = i), s(t, B(e, 3));
        }
        var Pp = j(function(t, e) {
          if (t == null)
            return [];
          var n = e.length;
          return n > 1 && kt(t, e[0], e[1]) ? e = [] : n > 2 && kt(e[0], e[1], e[2]) && (e = [e[0]]), ka(t, Tt(e, 1), []);
        }), Tr = al || function() {
          return Pt.Date.now();
        };
        function Tp(t, e) {
          if (typeof e != "function")
            throw new ie(h);
          return t = K(t), function() {
            if (--t < 1)
              return e.apply(this, arguments);
          };
        }
        function Eo(t, e, n) {
          return e = n ? i : e, e = t && e == null ? t.length : e, Pe(t, Mt, i, i, i, i, e);
        }
        function Oo(t, e) {
          var n;
          if (typeof e != "function")
            throw new ie(h);
          return t = K(t), function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = i), n;
          };
        }
        var Qi = j(function(t, e, n) {
          var s = O;
          if (n.length) {
            var o = Ne(n, vn(Qi));
            s |= dt;
          }
          return Pe(t, s, e, n, o);
        }), Fo = j(function(t, e, n) {
          var s = O | W;
          if (n.length) {
            var o = Ne(n, vn(Fo));
            s |= dt;
          }
          return Pe(e, s, t, n, o);
        });
        function Ro(t, e, n) {
          e = n ? i : e;
          var s = Pe(t, Y, i, i, i, i, i, e);
          return s.placeholder = Ro.placeholder, s;
        }
        function Lo(t, e, n) {
          e = n ? i : e;
          var s = Pe(t, it, i, i, i, i, i, e);
          return s.placeholder = Lo.placeholder, s;
        }
        function ko(t, e, n) {
          var s, o, c, p, g, y, x = 0, A = !1, T = !1, F = !0;
          if (typeof t != "function")
            throw new ie(h);
          e = ce(e) || 0, gt(n) && (A = !!n.leading, T = "maxWait" in n, c = T ? xt(ce(n.maxWait) || 0, e) : c, F = "trailing" in n ? !!n.trailing : F);
          function N(yt) {
            var de = s, Fe = o;
            return s = o = i, x = yt, p = t.apply(Fe, de), p;
          }
          function U(yt) {
            return x = yt, g = Wn(X, e), A ? N(yt) : p;
          }
          function J(yt) {
            var de = yt - y, Fe = yt - x, tu = e - de;
            return T ? It(tu, c - Fe) : tu;
          }
          function $(yt) {
            var de = yt - y, Fe = yt - x;
            return y === i || de >= e || de < 0 || T && Fe >= c;
          }
          function X() {
            var yt = Tr();
            if ($(yt))
              return V(yt);
            g = Wn(X, J(yt));
          }
          function V(yt) {
            return g = i, F && s ? N(yt) : (s = o = i, p);
          }
          function Xt() {
            g !== i && Ga(g), x = 0, s = y = o = g = i;
          }
          function Dt() {
            return g === i ? p : V(Tr());
          }
          function Qt() {
            var yt = Tr(), de = $(yt);
            if (s = arguments, o = this, y = yt, de) {
              if (g === i)
                return U(y);
              if (T)
                return Ga(g), g = Wn(X, e), N(y);
            }
            return g === i && (g = Wn(X, e)), p;
          }
          return Qt.cancel = Xt, Qt.flush = Dt, Qt;
        }
        var Ip = j(function(t, e) {
          return Ca(t, 1, e);
        }), Ep = j(function(t, e, n) {
          return Ca(t, ce(e) || 0, n);
        });
        function Op(t) {
          return Pe(t, Ht);
        }
        function Ir(t, e) {
          if (typeof t != "function" || e != null && typeof e != "function")
            throw new ie(h);
          var n = function() {
            var s = arguments, o = e ? e.apply(this, s) : s[0], c = n.cache;
            if (c.has(o))
              return c.get(o);
            var p = t.apply(this, s);
            return n.cache = c.set(o, p) || c, p;
          };
          return n.cache = new (Ir.Cache || Ae)(), n;
        }
        Ir.Cache = Ae;
        function Er(t) {
          if (typeof t != "function")
            throw new ie(h);
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
        function Fp(t) {
          return Oo(2, t);
        }
        var Rp = yf(function(t, e) {
          e = e.length == 1 && H(e[0]) ? pt(e[0], Zt(B())) : pt(Tt(e, 1), Zt(B()));
          var n = e.length;
          return j(function(s) {
            for (var o = -1, c = It(s.length, n); ++o < c; )
              s[o] = e[o].call(this, s[o]);
            return Jt(t, this, s);
          });
        }), Vi = j(function(t, e) {
          var n = Ne(e, vn(Vi));
          return Pe(t, dt, i, e, n);
        }), Do = j(function(t, e) {
          var n = Ne(e, vn(Do));
          return Pe(t, Wt, i, e, n);
        }), Lp = Te(function(t, e) {
          return Pe(t, te, i, i, i, e);
        });
        function kp(t, e) {
          if (typeof t != "function")
            throw new ie(h);
          return e = e === i ? e : K(e), j(t, e);
        }
        function Dp(t, e) {
          if (typeof t != "function")
            throw new ie(h);
          return e = e == null ? 0 : xt(K(e), 0), j(function(n) {
            var s = n[e], o = qe(n, 0, e);
            return s && De(o, s), Jt(t, this, o);
          });
        }
        function Np(t, e, n) {
          var s = !0, o = !0;
          if (typeof t != "function")
            throw new ie(h);
          return gt(n) && (s = "leading" in n ? !!n.leading : s, o = "trailing" in n ? !!n.trailing : o), ko(t, e, {
            leading: s,
            maxWait: e,
            trailing: o
          });
        }
        function Wp(t) {
          return Eo(t, 1);
        }
        function Bp(t, e) {
          return Vi(Ni(e), t);
        }
        function Up() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return H(t) ? t : [t];
        }
        function $p(t) {
          return ae(t, R);
        }
        function qp(t, e) {
          return e = typeof e == "function" ? e : i, ae(t, R, e);
        }
        function zp(t) {
          return ae(t, v | R);
        }
        function Gp(t, e) {
          return e = typeof e == "function" ? e : i, ae(t, v | R, e);
        }
        function Hp(t, e) {
          return e == null || Ma(t, e, St(e));
        }
        function pe(t, e) {
          return t === e || t !== t && e !== e;
        }
        var Kp = Mr(Ai), Jp = Mr(function(t, e) {
          return t >= e;
        }), en = Ta(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ta : function(t) {
          return vt(t) && rt.call(t, "callee") && !da.call(t, "callee");
        }, H = M.isArray, Zp = Ys ? Zt(Ys) : ef;
        function qt(t) {
          return t != null && Or(t.length) && !Ee(t);
        }
        function mt(t) {
          return vt(t) && qt(t);
        }
        function Yp(t) {
          return t === !0 || t === !1 || vt(t) && Lt(t) == ut;
        }
        var ze = ul || ls, jp = js ? Zt(js) : nf;
        function Xp(t) {
          return vt(t) && t.nodeType === 1 && !Bn(t);
        }
        function Qp(t) {
          if (t == null)
            return !0;
          if (qt(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || ze(t) || mn(t) || en(t)))
            return !t.length;
          var e = Et(t);
          if (e == _t || e == ht)
            return !t.size;
          if (Nn(t))
            return !Ti(t).length;
          for (var n in t)
            if (rt.call(t, n))
              return !1;
          return !0;
        }
        function Vp(t, e) {
          return Ln(t, e);
        }
        function td(t, e, n) {
          n = typeof n == "function" ? n : i;
          var s = n ? n(t, e) : i;
          return s === i ? Ln(t, e, i, n) : !!s;
        }
        function ts(t) {
          if (!vt(t))
            return !1;
          var e = Lt(t);
          return e == Ft || e == Kt || typeof t.message == "string" && typeof t.name == "string" && !Bn(t);
        }
        function ed(t) {
          return typeof t == "number" && _a(t);
        }
        function Ee(t) {
          if (!gt(t))
            return !1;
          var e = Lt(t);
          return e == Bt || e == _e || e == at || e == le;
        }
        function No(t) {
          return typeof t == "number" && t == K(t);
        }
        function Or(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ge;
        }
        function gt(t) {
          var e = typeof t;
          return t != null && (e == "object" || e == "function");
        }
        function vt(t) {
          return t != null && typeof t == "object";
        }
        var Wo = Xs ? Zt(Xs) : sf;
        function nd(t, e) {
          return t === e || Pi(t, e, Gi(e));
        }
        function rd(t, e, n) {
          return n = typeof n == "function" ? n : i, Pi(t, e, Gi(e), n);
        }
        function id(t) {
          return Bo(t) && t != +t;
        }
        function sd(t) {
          if (qf(t))
            throw new G(d);
          return Ia(t);
        }
        function ad(t) {
          return t === null;
        }
        function od(t) {
          return t == null;
        }
        function Bo(t) {
          return typeof t == "number" || vt(t) && Lt(t) == Rt;
        }
        function Bn(t) {
          if (!vt(t) || Lt(t) != bt)
            return !1;
          var e = ir(t);
          if (e === null)
            return !0;
          var n = rt.call(e, "constructor") && e.constructor;
          return typeof n == "function" && n instanceof n && tr.call(n) == nl;
        }
        var es = Qs ? Zt(Qs) : af;
        function ud(t) {
          return No(t) && t >= -ge && t <= ge;
        }
        var Uo = Vs ? Zt(Vs) : of;
        function Fr(t) {
          return typeof t == "string" || !H(t) && vt(t) && Lt(t) == ve;
        }
        function jt(t) {
          return typeof t == "symbol" || vt(t) && Lt(t) == Hn;
        }
        var mn = ta ? Zt(ta) : uf;
        function cd(t) {
          return t === i;
        }
        function ld(t) {
          return vt(t) && Et(t) == Cn;
        }
        function fd(t) {
          return vt(t) && Lt(t) == Su;
        }
        var hd = Mr(Ii), pd = Mr(function(t, e) {
          return t <= e;
        });
        function $o(t) {
          if (!t)
            return [];
          if (qt(t))
            return Fr(t) ? fe(t) : $t(t);
          if (Sn && t[Sn])
            return Gc(t[Sn]());
          var e = Et(t), n = e == _t ? _i : e == ht ? Xn : yn;
          return n(t);
        }
        function Oe(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = ce(t), t === Me || t === -Me) {
            var e = t < 0 ? -1 : 1;
            return e * Gn;
          }
          return t === t ? t : 0;
        }
        function K(t) {
          var e = Oe(t), n = e % 1;
          return e === e ? n ? e - n : e : 0;
        }
        function qo(t) {
          return t ? Xe(K(t), 0, L) : 0;
        }
        function ce(t) {
          if (typeof t == "number")
            return t;
          if (jt(t))
            return Ce;
          if (gt(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = gt(e) ? e + "" : e;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = aa(t);
          var n = Ju.test(t);
          return n || Yu.test(t) ? Pc(t.slice(2), n ? 2 : 8) : Ku.test(t) ? Ce : +t;
        }
        function zo(t) {
          return ye(t, zt(t));
        }
        function dd(t) {
          return t ? Xe(K(t), -ge, ge) : t === 0 ? t : 0;
        }
        function nt(t) {
          return t == null ? "" : Yt(t);
        }
        var gd = gn(function(t, e) {
          if (Nn(e) || qt(e)) {
            ye(e, St(e), t);
            return;
          }
          for (var n in e)
            rt.call(e, n) && On(t, n, e[n]);
        }), Go = gn(function(t, e) {
          ye(e, zt(e), t);
        }), Rr = gn(function(t, e, n, s) {
          ye(e, zt(e), t, s);
        }), _d = gn(function(t, e, n, s) {
          ye(e, St(e), t, s);
        }), vd = Te(Mi);
        function md(t, e) {
          var n = dn(t);
          return e == null ? n : ba(n, e);
        }
        var yd = j(function(t, e) {
          t = st(t);
          var n = -1, s = e.length, o = s > 2 ? e[2] : i;
          for (o && kt(e[0], e[1], o) && (s = 1); ++n < s; )
            for (var c = e[n], p = zt(c), g = -1, y = p.length; ++g < y; ) {
              var x = p[g], A = t[x];
              (A === i || pe(A, fn[x]) && !rt.call(t, x)) && (t[x] = c[x]);
            }
          return t;
        }), wd = j(function(t) {
          return t.push(i, ao), Jt(Ho, i, t);
        });
        function bd(t, e) {
          return na(t, B(e, 3), me);
        }
        function Md(t, e) {
          return na(t, B(e, 3), xi);
        }
        function Cd(t, e) {
          return t == null ? t : Ci(t, B(e, 3), zt);
        }
        function xd(t, e) {
          return t == null ? t : Sa(t, B(e, 3), zt);
        }
        function Ad(t, e) {
          return t && me(t, B(e, 3));
        }
        function Sd(t, e) {
          return t && xi(t, B(e, 3));
        }
        function Pd(t) {
          return t == null ? [] : dr(t, St(t));
        }
        function Td(t) {
          return t == null ? [] : dr(t, zt(t));
        }
        function ns(t, e, n) {
          var s = t == null ? i : Qe(t, e);
          return s === i ? n : s;
        }
        function Id(t, e) {
          return t != null && co(t, e, Xl);
        }
        function rs(t, e) {
          return t != null && co(t, e, Ql);
        }
        var Ed = eo(function(t, e, n) {
          e != null && typeof e.toString != "function" && (e = er.call(e)), t[e] = n;
        }, ss(Gt)), Od = eo(function(t, e, n) {
          e != null && typeof e.toString != "function" && (e = er.call(e)), rt.call(t, e) ? t[e].push(n) : t[e] = [n];
        }, B), Fd = j(Rn);
        function St(t) {
          return qt(t) ? ya(t) : Ti(t);
        }
        function zt(t) {
          return qt(t) ? ya(t, !0) : cf(t);
        }
        function Rd(t, e) {
          var n = {};
          return e = B(e, 3), me(t, function(s, o, c) {
            Se(n, e(s, o, c), s);
          }), n;
        }
        function Ld(t, e) {
          var n = {};
          return e = B(e, 3), me(t, function(s, o, c) {
            Se(n, o, e(s, o, c));
          }), n;
        }
        var kd = gn(function(t, e, n) {
          gr(t, e, n);
        }), Ho = gn(function(t, e, n, s) {
          gr(t, e, n, s);
        }), Dd = Te(function(t, e) {
          var n = {};
          if (t == null)
            return n;
          var s = !1;
          e = pt(e, function(c) {
            return c = $e(c, t), s || (s = c.length > 1), c;
          }), ye(t, qi(t), n), s && (n = ae(n, v | P | R, Ef));
          for (var o = e.length; o--; )
            Li(n, e[o]);
          return n;
        });
        function Nd(t, e) {
          return Ko(t, Er(B(e)));
        }
        var Wd = Te(function(t, e) {
          return t == null ? {} : ff(t, e);
        });
        function Ko(t, e) {
          if (t == null)
            return {};
          var n = pt(qi(t), function(s) {
            return [s];
          });
          return e = B(e), Da(t, n, function(s, o) {
            return e(s, o[0]);
          });
        }
        function Bd(t, e, n) {
          e = $e(e, t);
          var s = -1, o = e.length;
          for (o || (o = 1, t = i); ++s < o; ) {
            var c = t == null ? i : t[we(e[s])];
            c === i && (s = o, c = n), t = Ee(c) ? c.call(t) : c;
          }
          return t;
        }
        function Ud(t, e, n) {
          return t == null ? t : kn(t, e, n);
        }
        function $d(t, e, n, s) {
          return s = typeof s == "function" ? s : i, t == null ? t : kn(t, e, n, s);
        }
        var Jo = io(St), Zo = io(zt);
        function qd(t, e, n) {
          var s = H(t), o = s || ze(t) || mn(t);
          if (e = B(e, 4), n == null) {
            var c = t && t.constructor;
            o ? n = s ? new c() : [] : gt(t) ? n = Ee(c) ? dn(ir(t)) : {} : n = {};
          }
          return (o ? re : me)(t, function(p, g, y) {
            return e(n, p, g, y);
          }), n;
        }
        function zd(t, e) {
          return t == null ? !0 : Li(t, e);
        }
        function Gd(t, e, n) {
          return t == null ? t : $a(t, e, Ni(n));
        }
        function Hd(t, e, n, s) {
          return s = typeof s == "function" ? s : i, t == null ? t : $a(t, e, Ni(n), s);
        }
        function yn(t) {
          return t == null ? [] : gi(t, St(t));
        }
        function Kd(t) {
          return t == null ? [] : gi(t, zt(t));
        }
        function Jd(t, e, n) {
          return n === i && (n = e, e = i), n !== i && (n = ce(n), n = n === n ? n : 0), e !== i && (e = ce(e), e = e === e ? e : 0), Xe(ce(t), e, n);
        }
        function Zd(t, e, n) {
          return e = Oe(e), n === i ? (n = e, e = 0) : n = Oe(n), t = ce(t), Vl(t, e, n);
        }
        function Yd(t, e, n) {
          if (n && typeof n != "boolean" && kt(t, e, n) && (e = n = i), n === i && (typeof e == "boolean" ? (n = e, e = i) : typeof t == "boolean" && (n = t, t = i)), t === i && e === i ? (t = 0, e = 1) : (t = Oe(t), e === i ? (e = t, t = 0) : e = Oe(e)), t > e) {
            var s = t;
            t = e, e = s;
          }
          if (n || t % 1 || e % 1) {
            var o = va();
            return It(t + o * (e - t + Sc("1e-" + ((o + "").length - 1))), e);
          }
          return Oi(t, e);
        }
        var jd = _n(function(t, e, n) {
          return e = e.toLowerCase(), t + (n ? Yo(e) : e);
        });
        function Yo(t) {
          return is(nt(t).toLowerCase());
        }
        function jo(t) {
          return t = nt(t), t && t.replace(Xu, Bc).replace(_c, "");
        }
        function Xd(t, e, n) {
          t = nt(t), e = Yt(e);
          var s = t.length;
          n = n === i ? s : Xe(K(n), 0, s);
          var o = n;
          return n -= e.length, n >= 0 && t.slice(n, o) == e;
        }
        function Qd(t) {
          return t = nt(t), t && Ou.test(t) ? t.replace(Ss, Uc) : t;
        }
        function Vd(t) {
          return t = nt(t), t && Nu.test(t) ? t.replace(Vr, "\\$&") : t;
        }
        var tg = _n(function(t, e, n) {
          return t + (n ? "-" : "") + e.toLowerCase();
        }), eg = _n(function(t, e, n) {
          return t + (n ? " " : "") + e.toLowerCase();
        }), ng = Qa("toLowerCase");
        function rg(t, e, n) {
          t = nt(t), e = K(e);
          var s = e ? cn(t) : 0;
          if (!e || s >= e)
            return t;
          var o = (e - s) / 2;
          return br(ur(o), n) + t + br(or(o), n);
        }
        function ig(t, e, n) {
          t = nt(t), e = K(e);
          var s = e ? cn(t) : 0;
          return e && s < e ? t + br(e - s, n) : t;
        }
        function sg(t, e, n) {
          t = nt(t), e = K(e);
          var s = e ? cn(t) : 0;
          return e && s < e ? br(e - s, n) + t : t;
        }
        function ag(t, e, n) {
          return n || e == null ? e = 0 : e && (e = +e), hl(nt(t).replace(ti, ""), e || 0);
        }
        function og(t, e, n) {
          return (n ? kt(t, e, n) : e === i) ? e = 1 : e = K(e), Fi(nt(t), e);
        }
        function ug() {
          var t = arguments, e = nt(t[0]);
          return t.length < 3 ? e : e.replace(t[1], t[2]);
        }
        var cg = _n(function(t, e, n) {
          return t + (n ? "_" : "") + e.toLowerCase();
        });
        function lg(t, e, n) {
          return n && typeof n != "number" && kt(t, e, n) && (e = n = i), n = n === i ? L : n >>> 0, n ? (t = nt(t), t && (typeof e == "string" || e != null && !es(e)) && (e = Yt(e), !e && un(t)) ? qe(fe(t), 0, n) : t.split(e, n)) : [];
        }
        var fg = _n(function(t, e, n) {
          return t + (n ? " " : "") + is(e);
        });
        function hg(t, e, n) {
          return t = nt(t), n = n == null ? 0 : Xe(K(n), 0, t.length), e = Yt(e), t.slice(n, n + e.length) == e;
        }
        function pg(t, e, n) {
          var s = u.templateSettings;
          n && kt(t, e, n) && (e = i), t = nt(t), e = Rr({}, e, s, so);
          var o = Rr({}, e.imports, s.imports, so), c = St(o), p = gi(o, c), g, y, x = 0, A = e.interpolate || Kn, T = "__p += '", F = vi(
            (e.escape || Kn).source + "|" + A.source + "|" + (A === Ps ? Hu : Kn).source + "|" + (e.evaluate || Kn).source + "|$",
            "g"
          ), N = "//# sourceURL=" + (rt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++bc + "]") + `
`;
          t.replace(F, function($, X, V, Xt, Dt, Qt) {
            return V || (V = Xt), T += t.slice(x, Qt).replace(Qu, $c), X && (g = !0, T += `' +
__e(` + X + `) +
'`), Dt && (y = !0, T += `';
` + Dt + `;
__p += '`), V && (T += `' +
((__t = (` + V + `)) == null ? '' : __t) +
'`), x = Qt + $.length, $;
          }), T += `';
`;
          var U = rt.call(e, "variable") && e.variable;
          if (!U)
            T = `with (obj) {
` + T + `
}
`;
          else if (zu.test(U))
            throw new G(_);
          T = (y ? T.replace(Pu, "") : T).replace(Tu, "$1").replace(Iu, "$1;"), T = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
          var J = Qo(function() {
            return et(c, N + "return " + T).apply(i, p);
          });
          if (J.source = T, ts(J))
            throw J;
          return J;
        }
        function dg(t) {
          return nt(t).toLowerCase();
        }
        function gg(t) {
          return nt(t).toUpperCase();
        }
        function _g(t, e, n) {
          if (t = nt(t), t && (n || e === i))
            return aa(t);
          if (!t || !(e = Yt(e)))
            return t;
          var s = fe(t), o = fe(e), c = oa(s, o), p = ua(s, o) + 1;
          return qe(s, c, p).join("");
        }
        function vg(t, e, n) {
          if (t = nt(t), t && (n || e === i))
            return t.slice(0, la(t) + 1);
          if (!t || !(e = Yt(e)))
            return t;
          var s = fe(t), o = ua(s, fe(e)) + 1;
          return qe(s, 0, o).join("");
        }
        function mg(t, e, n) {
          if (t = nt(t), t && (n || e === i))
            return t.replace(ti, "");
          if (!t || !(e = Yt(e)))
            return t;
          var s = fe(t), o = oa(s, fe(e));
          return qe(s, o).join("");
        }
        function yg(t, e) {
          var n = Ot, s = bn;
          if (gt(e)) {
            var o = "separator" in e ? e.separator : o;
            n = "length" in e ? K(e.length) : n, s = "omission" in e ? Yt(e.omission) : s;
          }
          t = nt(t);
          var c = t.length;
          if (un(t)) {
            var p = fe(t);
            c = p.length;
          }
          if (n >= c)
            return t;
          var g = n - cn(s);
          if (g < 1)
            return s;
          var y = p ? qe(p, 0, g).join("") : t.slice(0, g);
          if (o === i)
            return y + s;
          if (p && (g += y.length - g), es(o)) {
            if (t.slice(g).search(o)) {
              var x, A = y;
              for (o.global || (o = vi(o.source, nt(Ts.exec(o)) + "g")), o.lastIndex = 0; x = o.exec(A); )
                var T = x.index;
              y = y.slice(0, T === i ? g : T);
            }
          } else if (t.indexOf(Yt(o), g) != g) {
            var F = y.lastIndexOf(o);
            F > -1 && (y = y.slice(0, F));
          }
          return y + s;
        }
        function wg(t) {
          return t = nt(t), t && Eu.test(t) ? t.replace(As, Zc) : t;
        }
        var bg = _n(function(t, e, n) {
          return t + (n ? " " : "") + e.toUpperCase();
        }), is = Qa("toUpperCase");
        function Xo(t, e, n) {
          return t = nt(t), e = n ? i : e, e === i ? zc(t) ? Xc(t) : Lc(t) : t.match(e) || [];
        }
        var Qo = j(function(t, e) {
          try {
            return Jt(t, i, e);
          } catch (n) {
            return ts(n) ? n : new G(n);
          }
        }), Mg = Te(function(t, e) {
          return re(e, function(n) {
            n = we(n), Se(t, n, Qi(t[n], t));
          }), t;
        });
        function Cg(t) {
          var e = t == null ? 0 : t.length, n = B();
          return t = e ? pt(t, function(s) {
            if (typeof s[1] != "function")
              throw new ie(h);
            return [n(s[0]), s[1]];
          }) : [], j(function(s) {
            for (var o = -1; ++o < e; ) {
              var c = t[o];
              if (Jt(c[0], this, s))
                return Jt(c[1], this, s);
            }
          });
        }
        function xg(t) {
          return Zl(ae(t, v));
        }
        function ss(t) {
          return function() {
            return t;
          };
        }
        function Ag(t, e) {
          return t == null || t !== t ? e : t;
        }
        var Sg = to(), Pg = to(!0);
        function Gt(t) {
          return t;
        }
        function as(t) {
          return Ea(typeof t == "function" ? t : ae(t, v));
        }
        function Tg(t) {
          return Fa(ae(t, v));
        }
        function Ig(t, e) {
          return Ra(t, ae(e, v));
        }
        var Eg = j(function(t, e) {
          return function(n) {
            return Rn(n, t, e);
          };
        }), Og = j(function(t, e) {
          return function(n) {
            return Rn(t, n, e);
          };
        });
        function os(t, e, n) {
          var s = St(e), o = dr(e, s);
          n == null && !(gt(e) && (o.length || !s.length)) && (n = e, e = t, t = this, o = dr(e, St(e)));
          var c = !(gt(n) && "chain" in n) || !!n.chain, p = Ee(t);
          return re(o, function(g) {
            var y = e[g];
            t[g] = y, p && (t.prototype[g] = function() {
              var x = this.__chain__;
              if (c || x) {
                var A = t(this.__wrapped__), T = A.__actions__ = $t(this.__actions__);
                return T.push({ func: y, args: arguments, thisArg: t }), A.__chain__ = x, A;
              }
              return y.apply(t, De([this.value()], arguments));
            });
          }), t;
        }
        function Fg() {
          return Pt._ === this && (Pt._ = rl), this;
        }
        function us() {
        }
        function Rg(t) {
          return t = K(t), j(function(e) {
            return La(e, t);
          });
        }
        var Lg = Bi(pt), kg = Bi(ea), Dg = Bi(li);
        function Vo(t) {
          return Ki(t) ? fi(we(t)) : hf(t);
        }
        function Ng(t) {
          return function(e) {
            return t == null ? i : Qe(t, e);
          };
        }
        var Wg = no(), Bg = no(!0);
        function cs() {
          return [];
        }
        function ls() {
          return !1;
        }
        function Ug() {
          return {};
        }
        function $g() {
          return "";
        }
        function qg() {
          return !0;
        }
        function zg(t, e) {
          if (t = K(t), t < 1 || t > ge)
            return [];
          var n = L, s = It(t, L);
          e = B(e), t -= L;
          for (var o = di(s, e); ++n < t; )
            e(n);
          return o;
        }
        function Gg(t) {
          return H(t) ? pt(t, we) : jt(t) ? [t] : $t(yo(nt(t)));
        }
        function Hg(t) {
          var e = ++el;
          return nt(t) + e;
        }
        var Kg = wr(function(t, e) {
          return t + e;
        }, 0), Jg = Ui("ceil"), Zg = wr(function(t, e) {
          return t / e;
        }, 1), Yg = Ui("floor");
        function jg(t) {
          return t && t.length ? pr(t, Gt, Ai) : i;
        }
        function Xg(t, e) {
          return t && t.length ? pr(t, B(e, 2), Ai) : i;
        }
        function Qg(t) {
          return ia(t, Gt);
        }
        function Vg(t, e) {
          return ia(t, B(e, 2));
        }
        function t0(t) {
          return t && t.length ? pr(t, Gt, Ii) : i;
        }
        function e0(t, e) {
          return t && t.length ? pr(t, B(e, 2), Ii) : i;
        }
        var n0 = wr(function(t, e) {
          return t * e;
        }, 1), r0 = Ui("round"), i0 = wr(function(t, e) {
          return t - e;
        }, 0);
        function s0(t) {
          return t && t.length ? pi(t, Gt) : 0;
        }
        function a0(t, e) {
          return t && t.length ? pi(t, B(e, 2)) : 0;
        }
        return u.after = Tp, u.ary = Eo, u.assign = gd, u.assignIn = Go, u.assignInWith = Rr, u.assignWith = _d, u.at = vd, u.before = Oo, u.bind = Qi, u.bindAll = Mg, u.bindKey = Fo, u.castArray = Up, u.chain = Po, u.chunk = Yf, u.compact = jf, u.concat = Xf, u.cond = Cg, u.conforms = xg, u.constant = ss, u.countBy = sp, u.create = md, u.curry = Ro, u.curryRight = Lo, u.debounce = ko, u.defaults = yd, u.defaultsDeep = wd, u.defer = Ip, u.delay = Ep, u.difference = Qf, u.differenceBy = Vf, u.differenceWith = th, u.drop = eh, u.dropRight = nh, u.dropRightWhile = rh, u.dropWhile = ih, u.fill = sh, u.filter = op, u.flatMap = lp, u.flatMapDeep = fp, u.flatMapDepth = hp, u.flatten = Co, u.flattenDeep = ah, u.flattenDepth = oh, u.flip = Op, u.flow = Sg, u.flowRight = Pg, u.fromPairs = uh, u.functions = Pd, u.functionsIn = Td, u.groupBy = pp, u.initial = lh, u.intersection = fh, u.intersectionBy = hh, u.intersectionWith = ph, u.invert = Ed, u.invertBy = Od, u.invokeMap = gp, u.iteratee = as, u.keyBy = _p, u.keys = St, u.keysIn = zt, u.map = Pr, u.mapKeys = Rd, u.mapValues = Ld, u.matches = Tg, u.matchesProperty = Ig, u.memoize = Ir, u.merge = kd, u.mergeWith = Ho, u.method = Eg, u.methodOf = Og, u.mixin = os, u.negate = Er, u.nthArg = Rg, u.omit = Dd, u.omitBy = Nd, u.once = Fp, u.orderBy = vp, u.over = Lg, u.overArgs = Rp, u.overEvery = kg, u.overSome = Dg, u.partial = Vi, u.partialRight = Do, u.partition = mp, u.pick = Wd, u.pickBy = Ko, u.property = Vo, u.propertyOf = Ng, u.pull = vh, u.pullAll = Ao, u.pullAllBy = mh, u.pullAllWith = yh, u.pullAt = wh, u.range = Wg, u.rangeRight = Bg, u.rearg = Lp, u.reject = bp, u.remove = bh, u.rest = kp, u.reverse = ji, u.sampleSize = Cp, u.set = Ud, u.setWith = $d, u.shuffle = xp, u.slice = Mh, u.sortBy = Pp, u.sortedUniq = Ih, u.sortedUniqBy = Eh, u.split = lg, u.spread = Dp, u.tail = Oh, u.take = Fh, u.takeRight = Rh, u.takeRightWhile = Lh, u.takeWhile = kh, u.tap = jh, u.throttle = Np, u.thru = Sr, u.toArray = $o, u.toPairs = Jo, u.toPairsIn = Zo, u.toPath = Gg, u.toPlainObject = zo, u.transform = qd, u.unary = Wp, u.union = Dh, u.unionBy = Nh, u.unionWith = Wh, u.uniq = Bh, u.uniqBy = Uh, u.uniqWith = $h, u.unset = zd, u.unzip = Xi, u.unzipWith = So, u.update = Gd, u.updateWith = Hd, u.values = yn, u.valuesIn = Kd, u.without = qh, u.words = Xo, u.wrap = Bp, u.xor = zh, u.xorBy = Gh, u.xorWith = Hh, u.zip = Kh, u.zipObject = Jh, u.zipObjectDeep = Zh, u.zipWith = Yh, u.entries = Jo, u.entriesIn = Zo, u.extend = Go, u.extendWith = Rr, os(u, u), u.add = Kg, u.attempt = Qo, u.camelCase = jd, u.capitalize = Yo, u.ceil = Jg, u.clamp = Jd, u.clone = $p, u.cloneDeep = zp, u.cloneDeepWith = Gp, u.cloneWith = qp, u.conformsTo = Hp, u.deburr = jo, u.defaultTo = Ag, u.divide = Zg, u.endsWith = Xd, u.eq = pe, u.escape = Qd, u.escapeRegExp = Vd, u.every = ap, u.find = up, u.findIndex = bo, u.findKey = bd, u.findLast = cp, u.findLastIndex = Mo, u.findLastKey = Md, u.floor = Yg, u.forEach = To, u.forEachRight = Io, u.forIn = Cd, u.forInRight = xd, u.forOwn = Ad, u.forOwnRight = Sd, u.get = ns, u.gt = Kp, u.gte = Jp, u.has = Id, u.hasIn = rs, u.head = xo, u.identity = Gt, u.includes = dp, u.indexOf = ch, u.inRange = Zd, u.invoke = Fd, u.isArguments = en, u.isArray = H, u.isArrayBuffer = Zp, u.isArrayLike = qt, u.isArrayLikeObject = mt, u.isBoolean = Yp, u.isBuffer = ze, u.isDate = jp, u.isElement = Xp, u.isEmpty = Qp, u.isEqual = Vp, u.isEqualWith = td, u.isError = ts, u.isFinite = ed, u.isFunction = Ee, u.isInteger = No, u.isLength = Or, u.isMap = Wo, u.isMatch = nd, u.isMatchWith = rd, u.isNaN = id, u.isNative = sd, u.isNil = od, u.isNull = ad, u.isNumber = Bo, u.isObject = gt, u.isObjectLike = vt, u.isPlainObject = Bn, u.isRegExp = es, u.isSafeInteger = ud, u.isSet = Uo, u.isString = Fr, u.isSymbol = jt, u.isTypedArray = mn, u.isUndefined = cd, u.isWeakMap = ld, u.isWeakSet = fd, u.join = dh, u.kebabCase = tg, u.last = ue, u.lastIndexOf = gh, u.lowerCase = eg, u.lowerFirst = ng, u.lt = hd, u.lte = pd, u.max = jg, u.maxBy = Xg, u.mean = Qg, u.meanBy = Vg, u.min = t0, u.minBy = e0, u.stubArray = cs, u.stubFalse = ls, u.stubObject = Ug, u.stubString = $g, u.stubTrue = qg, u.multiply = n0, u.nth = _h, u.noConflict = Fg, u.noop = us, u.now = Tr, u.pad = rg, u.padEnd = ig, u.padStart = sg, u.parseInt = ag, u.random = Yd, u.reduce = yp, u.reduceRight = wp, u.repeat = og, u.replace = ug, u.result = Bd, u.round = r0, u.runInContext = m, u.sample = Mp, u.size = Ap, u.snakeCase = cg, u.some = Sp, u.sortedIndex = Ch, u.sortedIndexBy = xh, u.sortedIndexOf = Ah, u.sortedLastIndex = Sh, u.sortedLastIndexBy = Ph, u.sortedLastIndexOf = Th, u.startCase = fg, u.startsWith = hg, u.subtract = i0, u.sum = s0, u.sumBy = a0, u.template = pg, u.times = zg, u.toFinite = Oe, u.toInteger = K, u.toLength = qo, u.toLower = dg, u.toNumber = ce, u.toSafeInteger = dd, u.toString = nt, u.toUpper = gg, u.trim = _g, u.trimEnd = vg, u.trimStart = mg, u.truncate = yg, u.unescape = wg, u.uniqueId = Hg, u.upperCase = bg, u.upperFirst = is, u.each = To, u.eachRight = Io, u.first = xo, os(u, function() {
          var t = {};
          return me(u, function(e, n) {
            rt.call(u.prototype, n) || (t[n] = e);
          }), t;
        }(), { chain: !1 }), u.VERSION = a, re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), re(["drop", "take"], function(t, e) {
          Q.prototype[t] = function(n) {
            n = n === i ? 1 : xt(K(n), 0);
            var s = this.__filtered__ && !e ? new Q(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = It(n, s.__takeCount__) : s.__views__.push({
              size: It(n, L),
              type: t + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, Q.prototype[t + "Right"] = function(n) {
            return this.reverse()[t](n).reverse();
          };
        }), re(["filter", "map", "takeWhile"], function(t, e) {
          var n = e + 1, s = n == Mn || n == zr;
          Q.prototype[t] = function(o) {
            var c = this.clone();
            return c.__iteratees__.push({
              iteratee: B(o, 3),
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
          return this.filter(Gt);
        }, Q.prototype.find = function(t) {
          return this.filter(t).head();
        }, Q.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, Q.prototype.invokeMap = j(function(t, e) {
          return typeof t == "function" ? new Q(this) : this.map(function(n) {
            return Rn(n, t, e);
          });
        }), Q.prototype.reject = function(t) {
          return this.filter(Er(B(t)));
        }, Q.prototype.slice = function(t, e) {
          t = K(t);
          var n = this;
          return n.__filtered__ && (t > 0 || e < 0) ? new Q(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== i && (e = K(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n);
        }, Q.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, Q.prototype.toArray = function() {
          return this.take(L);
        }, me(Q.prototype, function(t, e) {
          var n = /^(?:filter|find|map|reject)|While$/.test(e), s = /^(?:head|last)$/.test(e), o = u[s ? "take" + (e == "last" ? "Right" : "") : e], c = s || /^find/.test(e);
          o && (u.prototype[e] = function() {
            var p = this.__wrapped__, g = s ? [1] : arguments, y = p instanceof Q, x = g[0], A = y || H(p), T = function(X) {
              var V = o.apply(u, De([X], g));
              return s && F ? V[0] : V;
            };
            A && n && typeof x == "function" && x.length != 1 && (y = A = !1);
            var F = this.__chain__, N = !!this.__actions__.length, U = c && !F, J = y && !N;
            if (!c && A) {
              p = J ? p : new Q(this);
              var $ = t.apply(p, g);
              return $.__actions__.push({ func: Sr, args: [T], thisArg: i }), new se($, F);
            }
            return U && J ? t.apply(this, g) : ($ = this.thru(T), U ? s ? $.value()[0] : $.value() : $);
          });
        }), re(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var e = Qn[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var o = arguments;
            if (s && !this.__chain__) {
              var c = this.value();
              return e.apply(H(c) ? c : [], o);
            }
            return this[n](function(p) {
              return e.apply(H(p) ? p : [], o);
            });
          };
        }), me(Q.prototype, function(t, e) {
          var n = u[e];
          if (n) {
            var s = n.name + "";
            rt.call(pn, s) || (pn[s] = []), pn[s].push({ name: e, func: n });
          }
        }), pn[yr(i, W).name] = [{
          name: "wrapper",
          func: i
        }], Q.prototype.clone = yl, Q.prototype.reverse = wl, Q.prototype.value = bl, u.prototype.at = Xh, u.prototype.chain = Qh, u.prototype.commit = Vh, u.prototype.next = tp, u.prototype.plant = np, u.prototype.reverse = rp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ip, u.prototype.first = u.prototype.head, Sn && (u.prototype[Sn] = ep), u;
      }, ln = Qc();
      Je ? ((Je.exports = ln)._ = ln, ai._ = ln) : Pt._ = ln;
    }).call(c0);
  }(Un, Un.exports)), Un.exports;
}
var f0 = l0();
const I = /* @__PURE__ */ Ms(f0), h0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function p0(f, r) {
  (r === null || typeof r > "u") && (r = h0);
  let i = 0;
  return Array.isArray(f) ? i = (f[0] + f[1]) / 2 : i = f, i <= r.th ? 1 : (1 + r.rate / r.span / 100) ** (i - r.th);
}
const ru = {
  baseline: 0,
  // baseline darkness impact at full dark
  terrainScale: 1
  // scaling of terrain factor at full dark
};
function Nt(f, r = 0) {
  return Math.round(f * 10 ** r) / 10 ** r;
}
function nn(f, r, i, a, l) {
  return i + (l - f) / (r - f) * (a - i);
}
function gu(f, r, i) {
  let a = 0, l = 0;
  const d = [];
  for (a = 0; a < i.length; a++)
    if (i[a] < f[l])
      d.push(r[l]);
    else {
      for (; l < f.length - 1 && f[l + 1] <= i[a]; )
        l++;
      l === f.length - 1 || i[a] === f[l] ? d.push(r[l]) : d.push(nn(f[l], f[l + 1], r[l], r[l + 1], i[a]));
    }
  return d;
}
function _u(f) {
  let r, i, a, l, d = 0, h = 0, _ = 0, w = 0, b = 0;
  for (r = 0; r < f.length; r++)
    i = f[r][0], a = f[r][1], l = f[r][2], b += l, d += l * i, _ += l * (i * i), h += l * a, w += l * (i * a);
  const S = (h * _ - d * w) / (b * _ - d * d);
  return [(b * w - d * h) / (b * _ - d * d), S];
}
function vu(f, r, i, a) {
  let l = 0, d = 0;
  const h = [];
  return i.forEach((_) => {
    for (; f[l] < _ - a; )
      l++;
    for (l > 0 && f[l] >= _ && l--; d < f.length - 1 && f[d + 1] <= _ + a; )
      d++;
    d < f.length - 1 && f[d] <= _ && d++;
    const w = Math.max(a, Math.abs(_ - f[l]) + 1e-3, Math.abs(_ - f[d]) + 1e-3), b = [];
    let S = 0;
    for (let v = l; v <= d; v++)
      S = (1 - (Math.abs(_ - f[v]) / w) ** 3) ** 3, b.push([f[v], r[v], S]);
    h.push(_u(b));
  }), h;
}
function ms(f, r, i) {
  return Nt(f, i) < Nt(r, i);
}
function d0(f, r, i) {
  return Nt(f, i) > Nt(r, i);
}
function Wr(f, r, i) {
  return Nt(f, i) <= Nt(r, i);
}
function Ur(f, r, i) {
  return Nt(f, i) >= Nt(r, i);
}
function He(f, r, i) {
  return Nt(f, i) === Nt(r, i);
}
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: nn,
  interpArray: gu,
  linearRegression: _u,
  req: He,
  rgt: d0,
  rgte: Ur,
  rlt: ms,
  rlte: Wr,
  round: Nt,
  wlslr: vu
}, Symbol.toStringTag, { value: "Module" }));
function g0(f, r) {
  function i(a) {
    return a < f.noon ? a + 86400 : a;
  }
  return r >= f.sunrise && r <= f.sunset ? 0 : !isNaN(f.dawn) && !isNaN(f.dusk) && (r <= f.dawn || r >= f.dusk) ? 1 : i(r) >= i(f.nadir) ? nn(
    i(isNaN(f.dawn) ? f.nadir : f.dawn),
    i(f.sunrise),
    1,
    0,
    i(r)
  ) : nn(
    i(f.sunset),
    i(isNaN(f.dusk) ? f.nadir : f.dusk),
    0,
    1,
    i(r)
  );
}
function _0({ timeOfDaySeconds: f, terrainFactor: r, sun: i, model: a = ru }) {
  if (r === 1 || f >= i.sunrise && f <= i.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = ru);
  const l = i.nadirAltitude < -6 ? 1 : -(i.nadirAltitude / 6), d = (a.terrainScale * (r - 1) + a.baseline) * l, h = g0(i, f);
  return 1 + d * h;
}
const Re = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
class $r {
  constructor(r) {
    Object.defineProperty(this, "_data", { value: {} }), Object.defineProperty(this, "_cache", { value: {} }), Re.forEach((i) => {
      Object.defineProperty(this, i, {
        enumerable: !0,
        get() {
          return this._data[i] || 1;
        },
        set(a) {
          a !== 1 ? this._data[i] = a : delete this._data[i], delete this._cache.combined;
        }
      });
    }), Object.assign(this, r);
  }
  get combined() {
    return I.has(this._cache, "combined") || (this._cache.combined = Re.reduce((r, i) => r * this[i], 1)), this._cache.combined;
  }
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
function m0(f, r) {
  return (r === null || typeof r > "u") && (r = v0), f < r.lower.lim ? r.lower.m * f + r.lower.b : f > r.upper.lim ? r.upper.m * f + r.upper.b : r.a * f ** 2 + r.b * f + 1;
}
function y0({ point: f, model: r } = {}) {
  if (!r) return 1;
  const i = f.tod;
  let a = 1;
  if (i > r.start && i < r.stop) {
    const l = (i - r.start) / (r.stop - r.start) * Math.PI;
    a += (r.max - r.baseline) * Math.sin(l) / 100;
  }
  return a += r.baseline / 100, a;
}
function w0({ point: f, course: r }) {
  const i = I.findLast(r.terrainFactors, (a) => Wr(a.start, f.loc, 4));
  return i ? i.value / 100 + 1 : 1;
}
function b0(f, r) {
  let i = 0, a = 0;
  return f.forEach((l, d) => {
    const h = d === f.length - 1 ? r : f[d + 1].onset, _ = l.type === "linear" ? l.value / 2 : l.value;
    a += (i + _) * (h - l.onset), i += l.value;
  }), a / r;
}
function M0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function C0(f, r, i) {
  let a = -b0(r, i);
  return r.forEach((l, d) => {
    if (f >= l.onset) {
      if (l.type === "step")
        a += l.value;
      else if (l.type === "linear") {
        const h = d === r.length - 1 ? i : r[d + 1].onset;
        f > h ? a += l.value : a += l.value * (f - l.onset) / (h - l.onset);
      }
    }
  }), a;
}
class x0 {
  constructor(r = {}) {
    if (Object.defineProperty(this, "__class", { value: "Strategy", enumerable: !1 }), r.__class === "Strategy")
      Object.assign(this, I.cloneDeep(r));
    else {
      if (!r.length) throw new Error("length required");
      if (this.length = r.length, I.isNumber(r.values))
        this.values = [{ onset: 0, value: r.values, type: "linear" }];
      else if (I.isArray(r.values))
        this.values = I.cloneDeep(r.values);
      else {
        if (r.values)
          throw new Error(`bad values input: ${JSON.stringify(r.values)}`);
        this.values = [{ onset: 0, value: M0(this.length), type: "linear" }];
      }
    }
  }
  /**
   * Returns strategy factor at location.
   *
   * @param {Number} loc - The location (in km) to determine value.
   * @return {Number} The strategy factor at input location.
   */
  at(r) {
    return 1 + C0(r, this.values, this.length) / 100;
  }
  addValue(r) {
    const i = this.values.findIndex((a) => a.onset >= r.onset);
    i >= 0 ? this.values.splice(i, 0, r) : this.values.push(r);
  }
}
function A0(f, r) {
  return (f - 1) * r + 1;
}
function ys(f, { plan: r, course: i }) {
  i || (i = r.course), f.factors || (f.factors = new $r()), Object.assign(f.factors, {
    grade: m0(f.grade),
    altitude: p0(f.alt),
    terrain: w0({ point: f, course: i })
  }), r && (Object.assign(f.factors, {
    strategy: r.strategy.at(f.loc)
  }), typeof f.tod < "u" && Object.assign(f.factors, {
    heat: r.heatModel ? y0({ point: f, model: r.heatModel }) : 1,
    dark: r.event.sun ? _0({
      timeOfDaySeconds: f.tod,
      terrainFactor: f.factors.terrain,
      sun: r.event.sun
    }) : 1
  }));
  const a = {};
  i != null && i.scales && Object.assign(a, i.scales), r != null && r.scales && Object.assign(a, r.scales), Object.keys(a).filter((l) => l !== 1 && f.factors[l]).forEach((l) => {
    f.factors[l] = A0(f.factors[l], a[l]);
  });
}
class mu {
  constructor(r) {
    Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, r);
  }
  set name(r) {
    this._data.name = r;
  }
  get name() {
    var r;
    return this._data.name || ((r = this.waypoint) == null ? void 0 : r.name) || void 0;
  }
  get start() {
    return this.end - this.len;
  }
  get pace() {
    if (I.isNumber(this.time))
      return this.time ? this.time / this.len : 0;
  }
  // time based fields require associated point1 & point2
  get delay() {
    var r, i, a, l;
    if (!(!I.isNumber((r = this.point1) == null ? void 0 : r.elapsed) || !I.isNumber((i = this.point2) == null ? void 0 : i.elapsed) || !I.isNumber((a = this.point1) == null ? void 0 : a.time) || !I.isNumber((l = this.point2) == null ? void 0 : l.time)))
      return this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time);
  }
  get elapsed() {
    var r;
    return (r = this.point2) == null ? void 0 : r.elapsed;
  }
  get time() {
    var r, i;
    if (!(!I.isNumber((r = this.point1) == null ? void 0 : r.time) || !I.isNumber((i = this.point2) == null ? void 0 : i.time)))
      return this.point2.time - this.point1.time;
  }
  get tod() {
    var r;
    return (r = this.point2) == null ? void 0 : r.tod;
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
}
function S0(f, r) {
  return (typeof f == "object" ? String(f._id) : f) === (typeof r == "object" ? String(r._id) : r);
}
var kr = { exports: {} }, fs, iu;
function P0() {
  if (iu) return fs;
  iu = 1;
  var f = 1e3, r = f * 60, i = r * 60, a = i * 24, l = a * 7, d = a * 365.25;
  fs = function(S, v) {
    v = v || {};
    var P = typeof S;
    if (P === "string" && S.length > 0)
      return h(S);
    if (P === "number" && isFinite(S))
      return v.long ? w(S) : _(S);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(S)
    );
  };
  function h(S) {
    if (S = String(S), !(S.length > 100)) {
      var v = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        S
      );
      if (v) {
        var P = parseFloat(v[1]), R = (v[2] || "ms").toLowerCase();
        switch (R) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return P * d;
          case "weeks":
          case "week":
          case "w":
            return P * l;
          case "days":
          case "day":
          case "d":
            return P * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return P * i;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return P * r;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return P * f;
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
  function _(S) {
    var v = Math.abs(S);
    return v >= a ? Math.round(S / a) + "d" : v >= i ? Math.round(S / i) + "h" : v >= r ? Math.round(S / r) + "m" : v >= f ? Math.round(S / f) + "s" : S + "ms";
  }
  function w(S) {
    var v = Math.abs(S);
    return v >= a ? b(S, v, a, "day") : v >= i ? b(S, v, i, "hour") : v >= r ? b(S, v, r, "minute") : v >= f ? b(S, v, f, "second") : S + " ms";
  }
  function b(S, v, P, R) {
    var D = v >= P * 1.5;
    return Math.round(S / P) + " " + R + (D ? "s" : "");
  }
  return fs;
}
var hs, su;
function T0() {
  if (su) return hs;
  su = 1;
  function f(r) {
    a.debug = a, a.default = a, a.coerce = b, a.disable = _, a.enable = d, a.enabled = w, a.humanize = P0(), a.destroy = S, Object.keys(r).forEach((v) => {
      a[v] = r[v];
    }), a.names = [], a.skips = [], a.formatters = {};
    function i(v) {
      let P = 0;
      for (let R = 0; R < v.length; R++)
        P = (P << 5) - P + v.charCodeAt(R), P |= 0;
      return a.colors[Math.abs(P) % a.colors.length];
    }
    a.selectColor = i;
    function a(v) {
      let P, R = null, D, E;
      function O(...W) {
        if (!O.enabled)
          return;
        const Z = O, Y = Number(/* @__PURE__ */ new Date()), it = Y - (P || Y);
        Z.diff = it, Z.prev = P, Z.curr = Y, P = Y, W[0] = a.coerce(W[0]), typeof W[0] != "string" && W.unshift("%O");
        let dt = 0;
        W[0] = W[0].replace(/%([a-zA-Z%])/g, (Mt, te) => {
          if (Mt === "%%")
            return "%";
          dt++;
          const Ht = a.formatters[te];
          if (typeof Ht == "function") {
            const Ot = W[dt];
            Mt = Ht.call(Z, Ot), W.splice(dt, 1), dt--;
          }
          return Mt;
        }), a.formatArgs.call(Z, W), (Z.log || a.log).apply(Z, W);
      }
      return O.namespace = v, O.useColors = a.useColors(), O.color = a.selectColor(v), O.extend = l, O.destroy = a.destroy, Object.defineProperty(O, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => R !== null ? R : (D !== a.namespaces && (D = a.namespaces, E = a.enabled(v)), E),
        set: (W) => {
          R = W;
        }
      }), typeof a.init == "function" && a.init(O), O;
    }
    function l(v, P) {
      const R = a(this.namespace + (typeof P > "u" ? ":" : P) + v);
      return R.log = this.log, R;
    }
    function d(v) {
      a.save(v), a.namespaces = v, a.names = [], a.skips = [];
      const P = (typeof v == "string" ? v : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const R of P)
        R[0] === "-" ? a.skips.push(R.slice(1)) : a.names.push(R);
    }
    function h(v, P) {
      let R = 0, D = 0, E = -1, O = 0;
      for (; R < v.length; )
        if (D < P.length && (P[D] === v[R] || P[D] === "*"))
          P[D] === "*" ? (E = D, O = R, D++) : (R++, D++);
        else if (E !== -1)
          D = E + 1, O++, R = O;
        else
          return !1;
      for (; D < P.length && P[D] === "*"; )
        D++;
      return D === P.length;
    }
    function _() {
      const v = [
        ...a.names,
        ...a.skips.map((P) => "-" + P)
      ].join(",");
      return a.enable(""), v;
    }
    function w(v) {
      for (const P of a.skips)
        if (h(v, P))
          return !1;
      for (const P of a.names)
        if (h(v, P))
          return !0;
      return !1;
    }
    function b(v) {
      return v instanceof Error ? v.stack || v.message : v;
    }
    function S() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return a.enable(a.load()), a;
  }
  return hs = f, hs;
}
var au;
function I0() {
  return au || (au = 1, function(f, r) {
    r.formatArgs = a, r.save = l, r.load = d, r.useColors = i, r.storage = h(), r.destroy = /* @__PURE__ */ (() => {
      let w = !1;
      return () => {
        w || (w = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), r.colors = [
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
    function i() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let w;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (w = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(w[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function a(w) {
      if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + f.exports.humanize(this.diff), !this.useColors)
        return;
      const b = "color: " + this.color;
      w.splice(1, 0, b, "color: inherit");
      let S = 0, v = 0;
      w[0].replace(/%[a-zA-Z%]/g, (P) => {
        P !== "%%" && (S++, P === "%c" && (v = S));
      }), w.splice(v, 0, b);
    }
    r.log = console.debug || console.log || (() => {
    });
    function l(w) {
      try {
        w ? r.storage.setItem("debug", w) : r.storage.removeItem("debug");
      } catch {
      }
    }
    function d() {
      let w;
      try {
        w = r.storage.getItem("debug");
      } catch {
      }
      return !w && typeof process < "u" && "env" in process && (w = process.env.DEBUG), w;
    }
    function h() {
      try {
        return localStorage;
      } catch {
      }
    }
    f.exports = T0()(r);
    const { formatters: _ } = f.exports;
    _.j = function(w) {
      try {
        return JSON.stringify(w);
      } catch (b) {
        return "[UnexpectedJSONParseError]: " + b.message;
      }
    };
  }(kr, kr.exports)), kr.exports;
}
var E0 = I0();
const O0 = /* @__PURE__ */ Ms(E0), ps = {};
function Ke(f) {
  if (!ps[f]) {
    const r = O0("ultraPacer:core");
    r(`loading debug for namespace "${f}"`), ps[f] = r.extend(f);
  }
  return ps[f];
}
function ou(f, r) {
  const i = f.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: r
  }).split(":").map((a) => Number(a));
  return i[0] * 60 * 60 + i[1] * 60 + i[2];
}
class rn extends Error {
  constructor(r, i) {
    super(r), this.name = "MissingDataError", this.field = i;
  }
}
const Cs = Ke("geo"), ws = Re;
function F0(f) {
  const r = {};
  return ws.forEach((i) => {
    const a = {};
    a[i] = f, Object.assign(r, a);
  }), r;
}
function yu({ plan: f, course: r, breaks: i }) {
  var E;
  const a = Cs.extend("calcSegments");
  a("exec"), I.isNumber(i[0]) && (i = i.filter((O) => O > 0 && ms(O, r.dist, 4)), i.unshift(0), i = i.map((O, W) => ({ start: O, end: i[W + 1] || r.dist })));
  const l = f ? f.points : r.points;
  if (!(l != null && l.length))
    throw a(`${f ? "Plan" : "Course"} points are not defined.`), new rn((f ? "Plan" : "Course") + " points are not defined.", "points");
  const d = [];
  let h, _, w, b;
  const S = l[0].actual !== void 0 && l[l.length - 1].actual !== void 0;
  for (h = 0, _ = i.length; h < _; h++) {
    const O = i[h];
    He((E = i[h - 1]) == null ? void 0 : E.end, O.start, 4) ? w = b : w = f ? f.getPoint({ loc: O.start }) : r.getPoint({ loc: O.start }), b = f ? f.getPoint({ loc: O.end }) : r.getPoint({ loc: O.end });
    const W = O.end - O.start, Z = new mu({
      end: b.loc,
      len: W,
      gain: 0,
      loss: 0,
      alt: b.alt,
      // ending altitude
      grade: W > 0 ? (b.alt - w.alt) / W / 10 * (b.alt - w.alt > 0 ? r.gainScale : r.lossScale) : 0,
      delay: 0,
      factorsSum: F0(0),
      point1: w,
      point2: b
    });
    S && (Z.actualTime = Z.point2.actual.elapsed - Z.point1.actual.elapsed, Z.actualElapsed = Z.point2.actual.elapsed), d.push(Z);
  }
  const v = ({ seg: O, p1: W, p2: Z }) => {
    const Y = Z.alt - W.alt;
    O[Y > 0 ? "gain" : "loss"] += Y * (Y > 0 ? r.gainScale : r.lossScale), ys(W, { plan: f, course: r });
    const it = Z.loc - W.loc;
    ws.forEach((dt) => {
      O.factorsSum[dt] += W.factors[dt] * it;
    });
  };
  h = 1;
  let P, R, D;
  for (let O = 0; O < d.length; O++) {
    for (P = d[O]; Wr(l[h].loc, P.point1.loc, 4); ) h++;
    for (R = P.point1; h < l.length && Wr(l[h].loc, P.point2.loc, 4); )
      D = l[h], v({ p1: R, p2: D, seg: P }), R = D, h++;
    v({ p1: R, p2: P.point2, seg: P }), f && (P.delay = f.delays.filter((W) => Ur(P.point1.loc, W.loc, 4) && ms(P.point2.loc, W.loc, 4)).reduce((W, Z) => W + Z, 0));
  }
  return d.forEach((O) => {
    O.factors = new $r(
      Object.fromEntries(ws.map((W) => [W, O.factorsSum[W] / O.len]))
    );
  }), d;
}
function wu(f) {
  Cs("createSegments"), f.plan && !f.course && (f.course = f.plan.course);
  const r = f.course.waypoints.filter((a) => a.tier < 3).sort((a, l) => a.loc - l.loc);
  f.breaks = r.map((a) => a.loc);
  const i = yu(f);
  if (!i.length) throw new Error("createSegments result is empty");
  return i.forEach((a, l) => {
    a.waypoint = r[l + 1];
  }), i;
}
function Br(f) {
  Cs(`createSplits:${f.unit}`), f.plan && !f.course && (f.course = f.plan.course);
  const r = f.unit === "kilometers" ? 1 : 0.621371, i = I.range(f.course.dist * r).map((l) => l / r);
  f.course.dist - I.last(i) > 1e-4 && i.push(f.course.dist), Object.assign(f, { breaks: i });
  const a = yu(f);
  if (!a.length) throw new Error("createSplits result is empty");
  return a;
}
class uu {
  constructor(r, i, a) {
    Object.defineProperty(this, "course", { writable: !0 }), this.point = i, this.course = r, this.loop = a;
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
    let r = this.point.loc * this.course.distScale;
    return this.loop && (r += this.course.loopDist * this.loop), r;
  }
}
var ds = { exports: {} }, cu;
function R0() {
  return cu || (cu = 1, function(f, r) {
    (function() {
      var i = Math.PI, a = Math.sin, l = Math.cos, d = Math.tan, h = Math.asin, _ = Math.atan2, w = Math.acos, b = i / 180, S = 1e3 * 60 * 60 * 24, v = 2440588, P = 2451545;
      function R(L) {
        return L.valueOf() / S - 0.5 + v;
      }
      function D(L) {
        return new Date((L + 0.5 - v) * S);
      }
      function E(L) {
        return R(L) - P;
      }
      var O = b * 23.4397;
      function W(L, q) {
        return _(a(L) * l(O) - d(q) * a(O), l(L));
      }
      function Z(L, q) {
        return h(a(q) * l(O) + l(q) * a(O) * a(L));
      }
      function Y(L, q, z) {
        return _(a(L), l(L) * a(q) - d(z) * l(q));
      }
      function it(L, q, z) {
        return h(a(q) * a(z) + l(q) * l(z) * l(L));
      }
      function dt(L, q) {
        return b * (280.16 + 360.9856235 * L) - q;
      }
      function Wt(L) {
        return L < 0 && (L = 0), 2967e-7 / Math.tan(L + 312536e-8 / (L + 0.08901179));
      }
      function Mt(L) {
        return b * (357.5291 + 0.98560028 * L);
      }
      function te(L) {
        var q = b * (1.9148 * a(L) + 0.02 * a(2 * L) + 3e-4 * a(3 * L)), z = b * 102.9372;
        return L + q + z + i;
      }
      function Ht(L) {
        var q = Mt(L), z = te(q);
        return {
          dec: Z(z, 0),
          ra: W(z, 0)
        };
      }
      var Ot = {};
      Ot.getPosition = function(L, q, z) {
        var lt = b * -z, tt = b * q, ft = E(L), at = Ht(ft), ut = dt(ft, lt) - at.ra;
        return {
          azimuth: Y(ut, tt, at.dec),
          altitude: it(ut, tt, at.dec)
        };
      };
      var bn = Ot.times = [
        [-0.833, "sunrise", "sunset"],
        [-0.3, "sunriseEnd", "sunsetStart"],
        [-6, "dawn", "dusk"],
        [-12, "nauticalDawn", "nauticalDusk"],
        [-18, "nightEnd", "night"],
        [6, "goldenHourEnd", "goldenHour"]
      ];
      Ot.addTime = function(L, q, z) {
        bn.push([L, q, z]);
      };
      var qn = 9e-4;
      function qr(L, q) {
        return Math.round(L - qn - q / (2 * i));
      }
      function Mn(L, q, z) {
        return qn + (L + q) / (2 * i) + z;
      }
      function zn(L, q, z) {
        return P + L + 53e-4 * a(q) - 69e-4 * a(2 * z);
      }
      function zr(L, q, z) {
        return w((a(L) - a(q) * a(z)) / (l(q) * l(z)));
      }
      function Me(L) {
        return -2.076 * Math.sqrt(L) / 60;
      }
      function ge(L, q, z, lt, tt, ft, at) {
        var ut = zr(L, z, lt), wt = Mn(ut, q, tt);
        return zn(wt, ft, at);
      }
      Ot.getTimes = function(L, q, z, lt) {
        lt = lt || 0;
        var tt = b * -z, ft = b * q, at = Me(lt), ut = E(L), wt = qr(ut, tt), Kt = Mn(0, tt, wt), Ft = Mt(Kt), Bt = te(Ft), _e = Z(Bt, 0), _t = zn(Kt, Ft, Bt), Rt, Le, bt, Ut, le, ee, ht = {
          solarNoon: D(_t),
          nadir: D(_t - 0.5)
        };
        for (Rt = 0, Le = bn.length; Rt < Le; Rt += 1)
          bt = bn[Rt], Ut = (bt[0] + at) * b, le = ge(Ut, tt, ft, _e, wt, Ft, Bt), ee = _t - (le - _t), ht[bt[1]] = D(ee), ht[bt[2]] = D(le);
        return ht;
      };
      function Gn(L) {
        var q = b * (218.316 + 13.176396 * L), z = b * (134.963 + 13.064993 * L), lt = b * (93.272 + 13.22935 * L), tt = q + b * 6.289 * a(z), ft = b * 5.128 * a(lt), at = 385001 - 20905 * l(z);
        return {
          ra: W(tt, ft),
          dec: Z(tt, ft),
          dist: at
        };
      }
      Ot.getMoonPosition = function(L, q, z) {
        var lt = b * -z, tt = b * q, ft = E(L), at = Gn(ft), ut = dt(ft, lt) - at.ra, wt = it(ut, tt, at.dec), Kt = _(a(ut), d(tt) * l(at.dec) - a(at.dec) * l(ut));
        return wt = wt + Wt(wt), {
          azimuth: Y(ut, tt, at.dec),
          altitude: wt,
          distance: at.dist,
          parallacticAngle: Kt
        };
      }, Ot.getMoonIllumination = function(L) {
        var q = E(L || /* @__PURE__ */ new Date()), z = Ht(q), lt = Gn(q), tt = 149598e3, ft = w(a(z.dec) * a(lt.dec) + l(z.dec) * l(lt.dec) * l(z.ra - lt.ra)), at = _(tt * a(ft), lt.dist - tt * l(ft)), ut = _(l(z.dec) * a(z.ra - lt.ra), a(z.dec) * l(lt.dec) - l(z.dec) * a(lt.dec) * l(z.ra - lt.ra));
        return {
          fraction: (1 + l(at)) / 2,
          phase: 0.5 + 0.5 * at * (ut < 0 ? -1 : 1) / Math.PI,
          angle: ut
        };
      };
      function Ce(L, q) {
        return new Date(L.valueOf() + q * S / 24);
      }
      Ot.getMoonTimes = function(L, q, z, lt) {
        var tt = new Date(L);
        lt ? tt.setUTCHours(0, 0, 0, 0) : tt.setHours(0, 0, 0, 0);
        for (var ft = 0.133 * b, at = Ot.getMoonPosition(tt, q, z).altitude - ft, ut, wt, Kt, Ft, Bt, _e, _t, Rt, Le, bt, Ut, le, ee, ht = 1; ht <= 24 && (ut = Ot.getMoonPosition(Ce(tt, ht), q, z).altitude - ft, wt = Ot.getMoonPosition(Ce(tt, ht + 1), q, z).altitude - ft, Bt = (at + wt) / 2 - ut, _e = (wt - at) / 2, _t = -_e / (2 * Bt), Rt = (Bt * _t + _e) * _t + ut, Le = _e * _e - 4 * Bt * ut, bt = 0, Le >= 0 && (ee = Math.sqrt(Le) / (Math.abs(Bt) * 2), Ut = _t - ee, le = _t + ee, Math.abs(Ut) <= 1 && bt++, Math.abs(le) <= 1 && bt++, Ut < -1 && (Ut = le)), bt === 1 ? at < 0 ? Kt = ht + Ut : Ft = ht + Ut : bt === 2 && (Kt = ht + (Rt < 0 ? le : Ut), Ft = ht + (Rt < 0 ? Ut : le)), !(Kt && Ft)); ht += 2)
          at = wt;
        var ve = {};
        return Kt && (ve.rise = Ce(tt, Kt)), Ft && (ve.set = Ce(tt, Ft)), !Kt && !Ft && (ve[Rt > 0 ? "alwaysUp" : "alwaysDown"] = !0), ve;
      }, f.exports = Ot;
    })();
  }(ds)), ds.exports;
}
var L0 = R0();
const k0 = /* @__PURE__ */ Ms(L0), { getTimes: D0, getPosition: N0 } = k0;
class bu {
  constructor(r) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, r);
  }
  // lat and lon fields must be set before setting start
  set start(r) {
    this._data.start = r, Object.keys(this._cache).forEach((i) => {
      delete this._cache[i];
    });
  }
  get start() {
    return this._data.start;
  }
  get startTime() {
    return I.isNumber(this._cache.startTime) ? this._cache.startTime : (this._cache.startTime = ou(this.start, this.timezone), this._cache.startTime);
  }
  get hasTOD() {
    return this.start instanceof Date && !isNaN(this.start);
  }
  get sun() {
    if (this._cache.sun) return this._cache.sun;
    const r = D0(this.start, this.lat, this.lon), i = N0(r.nadir, this.lat, this.lon), a = {}, l = ["nadir", "dawn", "sunrise", "dusk", "sunset", "solarNoon"], d = ["nadir", "dawn", "sunrise", "dusk", "sunset", "noon"];
    return l.forEach((h, _) => {
      isNaN(r[h]) || (a[d[_]] = ou(r[h], this.timezone));
    }), a.nadirAltitude = i.altitude * 180 / Math.PI, this._cache.sun = a, this._cache.sun;
  }
  // return a date object at [seconds] from start
  dateAtElapsed(r) {
    const i = new Date(this.start);
    return i.setTime(i.getTime() + r * 1e3), i;
  }
  // return seconds since midnight for an input elapsed amount of time since start
  elapsedToTimeOfDay(r) {
    return (this.startTime + r) % 86400;
  }
  // return static object
  serialize() {
    return I.pick(this, ["start", "sun", "lat", "lon", "timezone"]);
  }
}
var gs = {}, lu;
function W0() {
  return lu || (lu = 1, function(f) {
    f.parseDMS = function(i) {
      if (typeof l == "object") throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
      if (typeof i == "number" && isFinite(i)) return Number(i);
      var a = String(i).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
      if (a[a.length - 1] == "" && a.splice(a.length - 1), a == "") return NaN;
      switch (a.length) {
        case 3:
          var l = a[0] / 1 + a[1] / 60 + a[2] / 3600;
          break;
        case 2:
          var l = a[0] / 1 + a[1] / 60;
          break;
        case 1:
          var l = a[0];
          break;
        default:
          return NaN;
      }
      return /^-|[WS]$/i.test(i.trim()) && (l = -l), Number(l);
    }, f.toDMS = function(i, a, l) {
      if (typeof i == "object") throw new TypeError("geo.toDMS - deg is [DOM?] object");
      if (isNaN(i)) return null;
      if (typeof a > "u" && (a = "dms"), typeof l > "u")
        switch (a) {
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
            a = "dms", l = 0;
        }
      switch (i = Math.abs(i), a) {
        case "d":
          _ = i.toFixed(l), _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), dms = _ + "°";
          break;
        case "dm":
          var d = (i * 60).toFixed(l), _ = Math.floor(d / 60), w = (d % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), w < 10 && (w = "0" + w), dms = _ + "°" + w + "′";
          break;
        case "dms":
          var h = (i * 3600).toFixed(l), _ = Math.floor(h / 3600), w = Math.floor(h / 60) % 60, b = (h % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), w < 10 && (w = "0" + w), b < 10 && (b = "0" + b), dms = _ + "°" + w + "′" + b + "″";
          break;
      }
      return dms;
    }, f.toLat = function(i, a, l) {
      var d = f.toDMS(i, a, l);
      return d == null ? "." : d.slice(1) + (i < 0 ? "S" : "N");
    }, f.toLon = function(i, a, l) {
      var d = f.toDMS(i, a, l);
      return d == null ? "." : d + (i < 0 ? "W" : "E");
    }, f.toBrng = function(i, a, l) {
      i = (Number(i) + 360) % 360;
      var d = f.toDMS(i, a, l);
      return d == null ? "." : d.replace("360", "0");
    };
    var r = 6371;
    f.latlon = function(i, a) {
      this.lat = typeof i == "number" ? i : typeof i == "string" && i.trim() != "" ? +i : NaN, this.lng = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN;
    }, f.latlon.prototype.distanceTo = function(i, a) {
      typeof a > "u" && (a = 4);
      var l = this.distanceRadTo(i), d = r * l;
      return d.toPrecisionFixed(a);
    }, f.latlon.prototype.distanceRadTo = function(i) {
      var a = this.lat.toRad(), l = this.lng.toRad(), d = i.lat.toRad(), h = i.lng.toRad(), _ = d - a, w = h - l, b = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(a) * Math.cos(d) * Math.sin(w / 2) * Math.sin(w / 2), S = 2 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b));
      return S;
    }, f.latlon.prototype.bearingTo = function(i) {
      var a = this.bearingRadTo(i);
      return (a.toDeg() + 360) % 360;
    }, f.latlon.prototype.bearingRadTo = function(i) {
      var a = this.lat.toRad(), l = i.lat.toRad(), d = (i.lng - this.lng).toRad(), h = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(d), _ = Math.cos(l) * Math.sin(d), w = Math.atan2(_, h);
      return w;
    }, f.latlon.prototype.finalBearingTo = function(i) {
      var a = i.lat.toRad(), l = this.lat.toRad(), d = (this.lng - i.lng).toRad(), h = Math.sin(d) * Math.cos(l), _ = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(d), w = Math.atan2(h, _);
      return (w.toDeg() + 180) % 360;
    }, f.latlon.prototype.midpointTo = function(i) {
      var a = this.lat.toRad(), l = i.lat.toRad(), d = (i.lng - this.lng).toRad(), h = Math.cos(l) * Math.cos(d), _ = Math.cos(l) * Math.sin(d), w = this.lng.toRad(), b = Math.atan2(Math.sin(a) + Math.sin(l), Math.sqrt((Math.cos(a) + h) * (Math.cos(a) + h) + _ * _)), S = w + Math.atan2(_, Math.cos(a) + h);
      return S = (S + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(b.toDeg(), S.toDeg());
    }, f.midpoint = function(i) {
      var a = 0, l = 0, d = 0;
      for (var h in i) {
        var _ = i[h], w = _.lat * Math.PI / 180, b = _.lng * Math.PI / 180, S = Math.cos(w) * Math.cos(b), v = Math.cos(w) * Math.sin(b), P = Math.sin(w);
        a += S, l += v, d += P;
      }
      a = a / i.length, l = l / i.length, d = d / i.length;
      var R = Math.atan2(l, a), D = Math.sqrt(a * a + l * l), E = Math.atan2(d, D);
      return new f.latlon(E * 180 / Math.PI, R * 180 / Math.PI);
    }, f.latlon.prototype.interpolate = function(i, a) {
      var l = this.distanceRadTo(i), d = this.bearingRadTo(i), h = this.lat.toRad(), _ = this.lng.toRad();
      i.lat.toRad(), i.lng.toRad();
      for (var w = Math.sin(h), b = Math.cos(h), S = [], v = 0; v < a; v++) {
        var P = 1 / (a - 1) * v, R = l * P, D = Math.sin(R), E = Math.cos(R), O = Math.asin(w * E + b * D * Math.cos(d)), W = _ + Math.atan2(Math.sin(d) * D * b, E - w * Math.sin(O)), Z = O.toDeg(), Y = W.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); Y > 180; ) Y -= 360;
        for (; Y <= -180; ) Y += 360;
        S.push(new f.latlon(Z, Y));
      }
      return S;
    }, f.latlon.prototype.destinationPoint = function(i, a) {
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / r, i = i.toRad();
      var l = this.lat.toRad(), d = this.lng.toRad(), h = Math.asin(Math.sin(l) * Math.cos(a) + Math.cos(l) * Math.sin(a) * Math.cos(i)), _ = d + Math.atan2(
        Math.sin(i) * Math.sin(a) * Math.cos(l),
        Math.cos(a) - Math.sin(l) * Math.sin(h)
      );
      return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(h.toDeg(), _.toDeg());
    }, f.latlon.intersection = function(i, a, l, d) {
      a = typeof a == "number" ? a : typeof a == "string" && trim(a) != "" ? +a : NaN, d = typeof d == "number" ? d : typeof d == "string" && trim(d) != "" ? +d : NaN;
      var h = i.lat.toRad(), _ = i.lng.toRad(), w = l.lat.toRad(), b = l.lng.toRad(), S = a.toRad(), v = d.toRad(), P = w - h, R = b - _, D = 2 * Math.asin(Math.sqrt(Math.sin(P / 2) * Math.sin(P / 2) + Math.cos(h) * Math.cos(w) * Math.sin(R / 2) * Math.sin(R / 2)));
      if (D == 0) return null;
      var E = Math.acos((Math.sin(w) - Math.sin(h) * Math.cos(D)) / (Math.sin(D) * Math.cos(h)));
      isNaN(E) && (E = 0);
      var O = Math.acos((Math.sin(h) - Math.sin(w) * Math.cos(D)) / (Math.sin(D) * Math.cos(w)));
      if (Math.sin(b - _) > 0)
        var W = E, Z = 2 * Math.PI - O;
      else
        W = 2 * Math.PI - E, Z = O;
      var Y = (S - W + Math.PI) % (2 * Math.PI) - Math.PI, it = (Z - v + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(Y) == 0 && Math.sin(it) == 0 || Math.sin(Y) * Math.sin(it) < 0) return null;
      var dt = Math.acos(-Math.cos(Y) * Math.cos(it) + Math.sin(Y) * Math.sin(it) * Math.cos(D)), Wt = Math.atan2(
        Math.sin(D) * Math.sin(Y) * Math.sin(it),
        Math.cos(it) + Math.cos(Y) * Math.cos(dt)
      ), Mt = Math.asin(Math.sin(h) * Math.cos(Wt) + Math.cos(h) * Math.sin(Wt) * Math.cos(S)), te = Math.atan2(
        Math.sin(S) * Math.sin(Wt) * Math.cos(h),
        Math.cos(Wt) - Math.sin(h) * Math.sin(Mt)
      ), Ht = _ + te;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(Mt.toDeg(), Ht.toDeg());
    }, f.latlon.prototype.rhumbDistanceTo = function(i) {
      var a = r, l = this.lat.toRad(), d = i.lat.toRad(), h = (i.lat - this.lat).toRad(), _ = Math.abs(i.lng - this.lng).toRad(), w = Math.log(Math.tan(d / 2 + Math.PI / 4) / Math.tan(l / 2 + Math.PI / 4)), b = isFinite(h / w) ? h / w : Math.cos(l);
      Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
      var S = Math.sqrt(h * h + b * b * _ * _) * a;
      return S.toPrecisionFixed(4);
    }, f.latlon.prototype.rhumbBearingTo = function(i) {
      var a = this.lat.toRad(), l = i.lat.toRad(), d = (i.lng - this.lng).toRad(), h = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(d) > Math.PI && (d = d > 0 ? -(2 * Math.PI - d) : 2 * Math.PI + d);
      var _ = Math.atan2(d, h);
      return (_.toDeg() + 360) % 360;
    }, f.latlon.prototype.rhumbDestinationPoint = function(i, a) {
      var l = r, d = parseFloat(a) / l, h = this.lat.toRad(), _ = this.lng.toRad();
      i = i.toRad();
      var w = d * Math.cos(i);
      Math.abs(w) < 1e-10 && (w = 0);
      var b = h + w, S = Math.log(Math.tan(b / 2 + Math.PI / 4) / Math.tan(h / 2 + Math.PI / 4)), v = isFinite(w / S) ? w / S : Math.cos(h), P = d * Math.sin(i) / v;
      Math.abs(b) > Math.PI / 2 && (b = b > 0 ? Math.PI - b : -Math.PI - b);
      var R = (_ + P + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new f.latlon(b.toDeg(), R.toDeg());
    }, f.latlon.prototype.rhumbMidpointTo = function(i) {
      var a = this.lat.toRad(), l = this.lng.toRad(), d = i.lat.toRad(), h = i.lng.toRad();
      Math.abs(h - l) > Math.PI && (l += 2 * Math.PI);
      var _ = (a + d) / 2, w = Math.tan(Math.PI / 4 + a / 2), b = Math.tan(Math.PI / 4 + d / 2), S = Math.tan(Math.PI / 4 + _ / 2), v = ((h - l) * Math.log(S) + l * Math.log(b) - h * Math.log(w)) / Math.log(b / w);
      return isFinite(v) || (v = (l + h) / 2), v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(_.toDeg(), v.toDeg());
    }, f.latlon.prototype.lat = function(i, a) {
      return typeof i > "u" ? this.lat : f.toLat(this.lat, i, a);
    }, f.latlon.prototype.lon = function(i, a) {
      return typeof i > "u" ? this.lng : f.toLon(this.lng, i, a);
    }, f.latlon.prototype.toString = function(i, a) {
      return typeof i > "u" && (i = "dms"), f.toLat(this.lat, i, a) + ", " + f.toLon(this.lng, i, a);
    }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
      return this * 180 / Math.PI;
    }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(i) {
      var a = this.toPrecision(i);
      return a = a.replace(/(.+)e\+(.+)/, function(l, d, h) {
        d = d.replace(/\./, "");
        for (var _ = d.length - 1; h-- > _; ) d = d + "0";
        return d;
      }), a = a.replace(/(.+)e-(.+)/, function(l, d, h) {
        for (d = d.replace(/\./, ""); h-- > 1; ) d = "0" + d;
        return "0." + d;
      }), a;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(gs)), gs;
}
var $n = W0();
class Mu {
  constructor(r) {
    if (r.length === 3)
      [this.lat, this.lon, this.alt] = r;
    else if (r.length === 5)
      [this.loc, this.lat, this.lon, this.alt, this.grade] = r;
    else
      throw new Error("Point data invalid");
  }
  get __class() {
    return "Point";
  }
  get latlon() {
    return new $n.latlon(this.lat, this.lon);
  }
}
function bs(f, r, i) {
  const a = new Mu([f.lat, f.lon, f.alt]);
  a.loc = i;
  const l = new $n.latlon(f.lat, f.lon), d = new $n.latlon(r.lat, r.lon), h = Math.abs(a.loc - f.loc), _ = l.bearingTo(d), w = l.destinationPoint(_, h);
  return a.lat = Number(w.lat), a.lon = Number(w.lng), ["grade"].forEach((v) => {
    a[v] = f[v];
  }), ["alt"].forEach((v) => {
    a[v] = nn(f.loc, r.loc, f[v], r[v], a.loc);
  }), a;
}
const B0 = Ke("models:Waypoint");
class fu {
  constructor(r) {
    Object.defineProperty(this, "_data", { value: {} }), r = I.defaults(r, { loop: 1 }), Object.assign(this, r);
  }
  get __class() {
    return "Waypoint";
  }
  get site() {
    return this._data.site;
  }
  set site(r) {
    if (r.__class !== "Site") throw new TypeError('Waypoint "site" field must be of "Site" class.');
    this._data.site = r;
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
  set loc(r) {
    if (!I.isNumber(r)) throw new Error("Wrong format for Waypoint.loc");
    this.type === "start" ? this.site.percent = 0 : this.type === "finish" ? this.site.percent = 1 : this.site.percent = r / this.course.loopDist % 1;
  }
  get lat() {
    return I.isNumber(this.site.lat) || this.refreshLLA(), this.site.lat;
  }
  get lon() {
    return I.isNumber(this.site.lon) || this.refreshLLA(), this.site.lon;
  }
  get alt() {
    var r, i;
    return this.site.elevation === void 0 && ((i = (r = this.course) == null ? void 0 : r.track) != null && i.points) && this.refreshLLA(), this.site.elevation;
  }
  set lat(r) {
    this.site.lat = r;
  }
  set lon(r) {
    this.site.lon = r;
  }
  set alt(r) {
    this.site.elevation = r;
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
  set dropbags(r) {
    this.site.dropbags = !!r;
  }
  get crew() {
    return this.site.crew || !1;
  }
  set crew(r) {
    this.site.crew = !!r;
  }
  get terrainFactor() {
    return this.site.terrainFactor;
  }
  get terrainType() {
    return this.site.terrainType;
  }
  len(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.len;
  }
  gain(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.gain;
  }
  loss(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.loss;
  }
  time(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.time;
  }
  pace(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.pace;
  }
  elapsed(r) {
    if (this.loc === 0) return 0;
    const i = this.matchingSegment(r);
    if (i) return i.elapsed;
  }
  get hasTypicalDelay() {
    return this.type === "aid" || this.type === "water" || this.loop >= 2 && this.type === "start";
  }
  delay(r, i) {
    console.warn('"Waypoint.delay" field is deprecated.');
    const a = i.find((l) => l.site === this.site._id && this.loop === l.loop);
    return a ? a.delay : this.hasTypicalDelay ? r : 0;
  }
  get cutoff() {
    var r;
    if (this.tier === 1) {
      const i = (r = this.site.cutoffs) == null ? void 0 : r.find((a) => a.loop === this.loop);
      if (i)
        return i.time;
    }
    return null;
  }
  set cutoff(r) {
    var a;
    const i = (a = this.site.cutoffs) == null ? void 0 : a.findIndex((l) => l.loop === this.loop);
    i >= 0 ? r ? this.site.cutoffs[i].time = r : this.site.cutoffs.splice(i, 1) : r && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: r, loop: this.loop }));
  }
  matchingSegment(r) {
    return r.find(
      (i) => i.waypoint.site._id === this.site._id && i.waypoint.loop === this.loop
    );
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    var d, h, _;
    if (B0("refreshLLA"), !((_ = (h = (d = this.course) == null ? void 0 : d.track) == null ? void 0 : h.points) != null && _.length))
      throw new rn("No track points defined", "points");
    let r, i, a, l;
    this.type === "start" ? { lat: r, lon: i, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: r, lon: i, alt: a } = I.last(this.course.track.points) : { lat: r, lon: i, alt: a, ind: l } = this.course.track.getLLA(this.loc / this.course.distScale, {
      start: this.site.pointsIndex || 0
    }), this.lat = r, this.lon = i, this.alt = a, l && (this.site.pointsIndex = l), this.course.clearCache(1);
  }
  serialize() {
    const r = I.pick(this, [
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
    return r.site = this.site._id, r;
  }
}
const Dr = Ke("models:Waypoint");
class _s {
  constructor(r) {
    if (Dr(`constructor: ${r.name || "unnamed"}`), Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), r = I.defaults(r, { cutoffs: [] }), !r.course) throw new Error('Site requires "course" field to be defined.');
    Object.assign(this, r);
  }
  clearCache() {
    Dr(`clearCache: ${this.name}`), Object.keys(this._cache).forEach((r) => {
      delete this._cache[r];
    });
  }
  get __class() {
    return "Site";
  }
  get course() {
    return this._data.course;
  }
  set course(r) {
    if (r.__class !== "Course")
      throw new TypeError('Site "course" field must be of "Course" class.');
    this._data.course = r;
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
  set percent(r) {
    this._data.percent = r;
  }
  get waypoints() {
    return this._cache.waypoints ? this._cache.waypoints : (Dr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._cache.waypoints = [new fu({ site: this, loop: this.course.loops })] : this._cache.waypoints = I.range(this.course.loops).map(
      (r) => new fu({ site: this, loop: r + 1 })
    ), this._cache.waypoints);
  }
  serialize() {
    Dr(`serialize: ${this.name}`);
    const r = Object.keys(this);
    return r.push("percent"), I.pick(this, r);
  }
}
const Cu = ({ points: f, locs: r, gt: i }) => {
  const a = vu(
    f.map((d) => d.loc),
    f.map((d) => d.alt),
    r,
    i
  ), l = [];
  return r.forEach((d, h) => {
    let _ = a[h][0] / 10;
    _ > 50 ? _ = 50 : _ < -50 && (_ = -50);
    const w = d * a[h][0] + a[h][1];
    l.push({
      grade: _,
      alt: w
    });
  }), l;
};
function U0(f) {
  const r = [];
  let i = 0;
  for (i = 0; i < f.length; i++)
    r.push(f[i].loc);
  const a = Cu({ points: f, locs: r, gt: 0.05 });
  f.forEach((l, d) => {
    l.grade = a[d].grade;
  });
}
const $0 = (f) => {
  let r = 0, i = 0;
  f[0].loc = 0;
  for (let a = 1, l = f.length; a < l; a++)
    r = Number(f[a - 1].latlon.distanceTo(f[a].latlon)), i += r, f[a].loc = i;
}, wn = Ke("models:Track");
class xs {
  constructor(r) {
    wn("Creating new Track object"), Object.defineProperty(this, "_data", { value: { stats: {} } }), Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "type", { value: "course", enumerable: !0, writable: !0 }), r.type && (this.type = r.type), wn(`Initializing fields: ${Object.keys(r).join(", ")}`), Object.assign(this, r);
  }
  get __class() {
    return "Track";
  }
  clearCache() {
    Object.keys(this._cache).forEach((r) => {
      delete this._cache[r];
    });
  }
  set points(r) {
    wn("set-points"), this.clearCache(), Array.isArray(r) || (r = r.lat.map((i, a) => [r.lat[a], r.lon[a], r.alt[a]])), r[0].__class !== "Point" && (r = r.map((i) => new Mu(i))), $0(r), U0(r), this._data.points = r, wn(`set-points - ${r.length} points`);
  }
  get points() {
    return this._data.points;
  }
  set start(r) {
    this._data.start = r;
  }
  get start() {
    var i;
    const r = (i = this.points) != null && i[0] ? I.pick(this.points[0], ["lat", "lon"]) : this._data.start;
    if (!r) throw new rn("Neither start not track points are defined.", "points");
    return r;
  }
  set finish(r) {
    this._data.finish = r;
  }
  get finish() {
    var i;
    const r = (i = this.points) != null && i.length ? I.pick(I.last(this.points), ["lat", "lon"]) : this._data.finish;
    if (!r) throw new rn("Neither finish nor points points are defined.", "points");
    return r;
  }
  set stats(r) {
    Object.assign(this._data, r);
  }
  get stats() {
    if (this._cache.stats) return this._cache.stats;
    if (this.points) {
      wn("Calculating");
      const r = I.last(this.points).loc;
      let i = 0, a = 0, l = 0, d = this.points[0].alt;
      return this.points.forEach((h) => {
        l = h.alt - d, l < 0 ? a += l : i += l, d = h.alt;
      }), this._cache.stats = { gain: i, loss: a, dist: r }, this._cache.stats;
    }
    return this._data.stats;
  }
  get dist() {
    return this.stats.dist;
  }
  set dist(r) {
    this._data.stats.dist = r;
  }
  get gain() {
    return this.stats.gain;
  }
  set gain(r) {
    this._data.stats.gain = r;
  }
  get loss() {
    return this.stats.loss;
  }
  set loss(r) {
    this._data.stats.loss = r;
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(r, i = {}) {
    const a = Array.isArray(r), l = a ? [...r] : [r];
    l.forEach((S, v) => {
      S > this.dist && (l[v] = S % this.dist);
    });
    let d = l.length === 1 && i.start && i.start < this.points.length - 1 ? i.start : 0;
    const h = !!(d && this.points[d].loc > l[0]), _ = [], w = this.points.length - 1;
    r = l.shift();
    function b(S) {
      return h ? S + 1 : S - 1;
    }
    for (; d <= w && d >= 0; ) {
      let S, v;
      if (r === 0 ? (S = this.points[0], v = 0) : He(r, this.dist, 4) ? (S = I.last(this.points), v = this.points.length - 1) : !h && (d === w || this.points[d].loc >= r) || h && (d === 0 || this.points[d].loc <= r) ? this.points[d].loc === r || !h && d === w || h && d === 0 ? (S = this.points[d], v = d) : (S = bs(this.points[b(d)], this.points[d], r), v = d) : h ? d-- : d++, S) {
        const { lat: P, lon: R, alt: D, grade: E } = S;
        if (_.push({ lat: P, lon: R, alt: D, grade: E, ind: v }), r = l.shift(), r == null) break;
      }
    }
    return a ? _ : _[0];
  }
  getNearestPoint(r, i, a) {
    let d = this.points.findIndex((w) => w === i), h = this.points[d], _ = 0;
    for (; a > 0.025; ) {
      const w = a / 5, b = [h];
      for (let P = 1; P <= 5; P++) {
        const R = h.loc + w * P;
        if (R <= this.dist) {
          for (; this.points[d + 1].loc < R && d < this.points.length - 1; )
            d++;
          b.push(this.points[d]);
        }
      }
      const S = b.map((P) => Number(r.distanceTo(P.latlon)));
      _ = Math.min(...S);
      const v = S.findIndex((P) => P === _);
      h = b[v], a = a / 5;
    }
    return {
      point: h,
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
  getNearestLoc(r, i = null, a) {
    const d = new $n.latlon(r[0], r[1]);
    let h, _;
    const w = (b, S) => {
      for (_ = b; S > 0.025; ) {
        const v = S / 5;
        let P = [];
        for (let E = -5; E <= 5; E++) {
          const O = _ + v * E;
          O > 0 && O <= this.dist && P.push(Math.max(0, Math.min(O, this.dist)));
        }
        P = P.filter((E, O, W) => W.indexOf(E) === O);
        const R = this.getLLA(P);
        R.forEach((E) => {
          const O = new $n.latlon(E.lat, E.lon);
          E.dist = Number(d.distanceTo(O));
        }), h = R.reduce((E, O) => Math.min(E, O.dist), R[0].dist);
        const D = R.findIndex((E) => E.dist === h);
        _ = P[D], S = S / 5;
      }
    };
    if (i !== null) {
      i = Math.min(i, this.dist);
      const b = Math.max(0.5, 0.05 * this.dist);
      if (w(i, b), h < 0.1) return _;
    }
    return i = this.dist / 2, a = Math.max(this.dist - i, i), w(i, a), _;
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity({ spacing: r, length: i } = {}) {
    const a = wn.extend("reduceDensity");
    if (r || (r = 0.025), i || (i = this.points.length / 2), this.dist / r > i / 2)
      return a("Does not meet criteria"), this;
    const l = this.dist, d = Math.floor(l / r) + 1, h = Array(d).fill(0).map((v, P) => Nt(P++ * r, 3));
    h[h.length - 1] < l && h.push(l);
    const _ = Cu({ points: this.points, locs: h, gt: 2 * r }), w = this.getLLA(h, 0).map((v, P) => [
      Nt(v.lat, 6),
      Nt(v.lon, 6),
      Nt(_[P].alt, 2)
    ]), b = this.source, S = new xs({ source: b, points: w });
    return a(`Reduced from ${this.points.length} to ${S.points.length} points.`), S;
  }
}
const be = Ke("models:Course");
class q0 {
  constructor(r) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.assign(this, r);
  }
  get __class() {
    return "CourseSplits";
  }
  get segments() {
    var r;
    return (r = this._cache.segments) != null && r.length || (this._cache.segments = wu({ course: this.course })), this._cache.segments;
  }
  set segments(r) {
    this._cache.segments = r;
  }
  get miles() {
    var r;
    return (r = this._cache.miles) != null && r.length || (this._cache.miles = Br({ unit: "miles", course: this.course })), this._cache.miles;
  }
  set miles(r) {
    this._cache.miles = r;
  }
  get kilometers() {
    var r;
    return (r = this._cache.kilometers) != null && r.length || (this._cache.kilometers = Br({ unit: "kilometers", course: this.course })), this._cache.kilometers;
  }
  set kilometers(r) {
    this._cache.kilometers = r;
  }
}
const z0 = ["cache", "distance"];
class n_ {
  constructor(r) {
    Object.defineProperty(this, "_data", {
      value: r._data || {
        sites: [
          new _s({
            course: this,
            _id: I.random(1e4, 2e4),
            name: "Start",
            type: "start",
            percent: 0
          }),
          new _s({
            course: this,
            _id: I.random(3e4, 4e4),
            name: "Finish",
            type: "finish",
            percent: 1
          })
        ]
      },
      enumerable: !0
    }), Object.defineProperty(this, "_cache", { value: {} });
    const i = Object.keys(r).filter((a) => !z0.includes(a));
    Object.assign(this, I.pick(r, i));
  }
  get __class() {
    return "Course";
  }
  get loops() {
    return this._data.loops || 1;
  }
  set loops(r) {
    r !== this._data.loops && (this._data.loops = r, this.clearCache(2));
  }
  get dist() {
    var r;
    return this._cache.dist || (this._cache.dist = this._data.dist || ((r = this.track) != null && r.dist ? this.track.dist * this.loops : void 0));
  }
  get gain() {
    var r;
    return this._cache.gain || (this._cache.gain = this._data.gain || ((r = this.track) != null && r.gain ? this.track.gain * this.loops : void 0));
  }
  get loss() {
    var r;
    return this._cache.loss || (this._cache.loss = this._data.loss || ((r = this.track) != null && r.loss ? this.track.loss * this.loops : void 0));
  }
  set dist(r) {
    He(r, this._data.dist, 6) || (be(`overriding dist to ${r}`), this._data.dist = r, this.clearCache(2));
  }
  set gain(r) {
    He(r, this._data.gain, 6) || (be(`overriding gain to ${r}`), this._data.gain = r, this.clearCache(2));
  }
  set loss(r) {
    He(r, this._data.loss, 6) || (be(`overriding loss to ${r}`), this._data.loss = r, this.clearCache(2));
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
  set sites(r) {
    this._data.sites = r.map(
      (i) => i.__class === "Site" ? i : new _s(I.assign(i, { course: this }))
    ), this.clearCache(1);
  }
  clearCache(r = 1) {
    be(`clearCache-${r}`), (r === 1 ? ["waypoints", "terrainFactors", "cutoffs", "stats", "splits"] : Object.keys(this._cache)).forEach((a) => {
      delete this._cache[a];
    }), r === 2 && this.sites.forEach((a) => {
      a.clearCache();
    });
  }
  get waypoints() {
    var i;
    if (this._cache.waypoints) return this._cache.waypoints;
    if (!((i = this.track) != null && i.dist)) return [];
    let r = [];
    return this.sites.forEach((a) => {
      r.push(...a.waypoints);
    }), r = r.sort((a, l) => a.loc - l.loc), this._cache.waypoints = r, this._cache.waypoints;
  }
  get track() {
    return this._data.track;
  }
  set track(r) {
    be("set-track"), r.__class === "Track" ? this._data.track = r : this._data.track = new xs(r), this.clearCache(2);
  }
  get points() {
    var r, i;
    if (this._cache.points) return this._cache.points;
    if (be("generating points array"), !((i = (r = this.track) == null ? void 0 : r.points) != null && i.length))
      throw new rn("Track points are not defined.", "points");
    this._cache.points = new Array(this.track.points.length * this.loops);
    for (let a = 0; a < this.loops; a++)
      for (let l = 0; l < this.track.points.length; l++)
        this.points[l + a * this.track.points.length] = new uu(
          this,
          this.track.points[l],
          a
        );
    return this._cache.points;
  }
  set points(r) {
    throw new Error("cannot set points directly");
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param {Number} args.loc - The location (in km) to determine value.
   * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
   * @return {CoursePoint} The CoursePoint at input location.
   */
  getPoint({ loc: r, insert: i = !1 }) {
    const a = this.points.findIndex((b) => Ur(b.loc, r, 4)), l = this.points[a];
    if (He(l.loc, r, 4)) return l;
    be(`getPoint: ${i ? "inserting" : "creating"} new CoursePoint at ${r}`);
    const d = a - 1, h = this.points[d], _ = bs(h.point, l.point, r % this.loopDist / this.distScale), w = new uu(this, _, Math.floor(r / this.loopDist));
    return h.actual && l.actual && (w.actual = bs(h.actual, l.actual, r), w.actual.elapsed = nn(h.loc, l.loc, h.actual.elapsed, l.actual.elapsed, w.loc)), i && this.points.splice(a, 0, w), w;
  }
  refreshWaypointLLAs() {
    this.waypoints.filter((r) => r.loop === 1 || r.type === "finish").forEach((r) => {
      r.refreshLLA();
    });
  }
  // terrainFactors: array of TerrainFactor objects only where actual terrain factor values exist
  get terrainFactors() {
    if (this._cache.terrainFactors) return this._cache.terrainFactors;
    be("regenerating terrainFactors");
    const r = this.waypoints.filter(
      (i, a) => {
        var l;
        return a === 0 || !I.isNil(i.terrainFactor) && i.terrainFactor !== ((l = this.waypoints[a - 1]) == null ? void 0 : l.terrainFactor);
      }
    );
    return this._cache.terrainFactors = r.map((i, a) => new H0({
      startWaypoint: i,
      endWaypoint: r[a + 1] || I.last(this.waypoints),
      value: i.terrainFactor
    })), this._cache.terrainFactors;
  }
  // terrainTypes: array of TerrainType objects only where actual terrain type changes exist
  get terrainTypes() {
    if (this._cache.terrainTypes) return this._cache.terrainTypes;
    be("regenerating terrainTypes");
    const r = this.waypoints.filter(
      (i, a) => {
        var l;
        return !I.isNil(i.terrainType) && i.terrainType !== ((l = this.waypoints[a - 1]) == null ? void 0 : l.terrainType);
      }
    );
    return this._cache.terrainTypes = r.map((i, a) => new K0({
      startWaypoint: i,
      endWaypoint: r[a + 1] || I.last(this.waypoints),
      value: i.terrainType
    })), this._cache.terrainTypes;
  }
  get cutoffs() {
    return this._cache.cutoffs ? this._cache.cutoffs : (this._cache.cutoffs = this.waypoints.filter((r) => r.cutoff).map((r) => new G0({ waypoint: r })), this._cache.cutoffs);
  }
  get splits() {
    return this._cache.splits || (this._cache.splits = new q0({ course: this })), this._cache.splits;
  }
  // calculate max and min values along course
  get stats() {
    if (this._cache.stats) return this._cache.stats;
    be("stats:calculate");
    const r = this.track.points.map((h) => h.alt), i = this.track.points.map((h) => h.grade), a = this.terrainFactors.map((h) => h.value / 100 + 1), l = {
      altitude: {
        avg: I.sum(
          this.track.points.map((h, _) => {
            var w;
            return h.alt * (h.loc - (((w = this.track.points[_ - 1]) == null ? void 0 : w.loc) || 0));
          })
        ) / this.track.dist,
        max: I.max(r),
        min: I.min(r)
      },
      grade: {
        avg: (I.last(this.track.points).alt - this.track.points[0].alt) / this.track.dist / 10,
        max: I.max(i),
        min: I.min(i)
      },
      terrain: {
        avg: (I.sumBy(this.terrainFactors, (h) => (h.end - h.start) * h.value) / this.dist + 100) / 100,
        max: I.max(a),
        min: I.min(a)
      }
    }, d = (h) => this.terrainFactors.reduce((_, w) => w.value / 100 + 1 === h ? _ + w.end - w.start : _, 0);
    return Object.assign(l.terrain, {
      maxDist: d(l.terrain.max),
      minDist: d(l.terrain.min)
    }), this._cache.stats = l, l;
  }
  set stats(r) {
    this._cache.stats = r;
  }
  set eventStart(r) {
    r ? this._data.eventStart = new Date(r) : delete this._data.eventStart, delete this._cache.event;
  }
  get eventStart() {
    return this._data.eventStart;
  }
  set eventTimezone(r) {
    r ? this._data.eventTimezone = r : delete this._data.eventTimezone, delete this._cache.event;
  }
  get eventTimezone() {
    return this._data.eventTimezone;
  }
  get event() {
    var a;
    if (this._cache.event) return this._cache.event;
    const r = this.eventStart || void 0, i = this.eventTimezone || void 0;
    return this._cache.event = r && i && ((a = this.track) != null && a.start) ? new bu({
      ...this.track.start,
      start: r,
      timezone: i
    }) : void 0, this._cache.event;
  }
}
class G0 {
  constructor(r) {
    Object.assign(this, r);
  }
  get loc() {
    return this.waypoint.loc;
  }
  get time() {
    return this.waypoint.cutoff;
  }
}
class H0 {
  constructor(r) {
    r = I.defaults(r, { value: 0 }), Object.assign(this, r);
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class K0 {
  constructor(r) {
    Object.assign(this, r);
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var vs = {}, hu;
function J0() {
  return hu || (hu = 1, function(f) {
    (function() {
      var r = {
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
      function i(_) {
        return l(h(_), arguments);
      }
      function a(_, w) {
        return i.apply(null, [_].concat(w || []));
      }
      function l(_, w) {
        var b = 1, S = _.length, v, P = "", R, D, E, O, W, Z, Y, it;
        for (R = 0; R < S; R++)
          if (typeof _[R] == "string")
            P += _[R];
          else if (typeof _[R] == "object") {
            if (E = _[R], E.keys)
              for (v = w[b], D = 0; D < E.keys.length; D++) {
                if (v == null)
                  throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[D], E.keys[D - 1]));
                v = v[E.keys[D]];
              }
            else E.param_no ? v = w[E.param_no] : v = w[b++];
            if (r.not_type.test(E.type) && r.not_primitive.test(E.type) && v instanceof Function && (v = v()), r.numeric_arg.test(E.type) && typeof v != "number" && isNaN(v))
              throw new TypeError(i("[sprintf] expecting number but found %T", v));
            switch (r.number.test(E.type) && (Y = v >= 0), E.type) {
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
                v = JSON.stringify(v, null, E.width ? parseInt(E.width) : 0);
                break;
              case "e":
                v = E.precision ? parseFloat(v).toExponential(E.precision) : parseFloat(v).toExponential();
                break;
              case "f":
                v = E.precision ? parseFloat(v).toFixed(E.precision) : parseFloat(v);
                break;
              case "g":
                v = E.precision ? String(Number(v.toPrecision(E.precision))) : parseFloat(v);
                break;
              case "o":
                v = (parseInt(v, 10) >>> 0).toString(8);
                break;
              case "s":
                v = String(v), v = E.precision ? v.substring(0, E.precision) : v;
                break;
              case "t":
                v = String(!!v), v = E.precision ? v.substring(0, E.precision) : v;
                break;
              case "T":
                v = Object.prototype.toString.call(v).slice(8, -1).toLowerCase(), v = E.precision ? v.substring(0, E.precision) : v;
                break;
              case "u":
                v = parseInt(v, 10) >>> 0;
                break;
              case "v":
                v = v.valueOf(), v = E.precision ? v.substring(0, E.precision) : v;
                break;
              case "x":
                v = (parseInt(v, 10) >>> 0).toString(16);
                break;
              case "X":
                v = (parseInt(v, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            r.json.test(E.type) ? P += v : (r.number.test(E.type) && (!Y || E.sign) ? (it = Y ? "+" : "-", v = v.toString().replace(r.sign, "")) : it = "", W = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", Z = E.width - (it + v).length, O = E.width && Z > 0 ? W.repeat(Z) : "", P += E.align ? it + v + O : W === "0" ? it + O + v : O + it + v);
          }
        return P;
      }
      var d = /* @__PURE__ */ Object.create(null);
      function h(_) {
        if (d[_])
          return d[_];
        for (var w = _, b, S = [], v = 0; w; ) {
          if ((b = r.text.exec(w)) !== null)
            S.push(b[0]);
          else if ((b = r.modulo.exec(w)) !== null)
            S.push("%");
          else if ((b = r.placeholder.exec(w)) !== null) {
            if (b[2]) {
              v |= 1;
              var P = [], R = b[2], D = [];
              if ((D = r.key.exec(R)) !== null)
                for (P.push(D[1]); (R = R.substring(D[0].length)) !== ""; )
                  if ((D = r.key_access.exec(R)) !== null)
                    P.push(D[1]);
                  else if ((D = r.index_access.exec(R)) !== null)
                    P.push(D[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              b[2] = P;
            } else
              v |= 2;
            if (v === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            S.push(
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
        return d[_] = S;
      }
      f.sprintf = i, f.vsprintf = a, typeof window < "u" && (window.sprintf = i, window.vsprintf = a);
    })();
  }(vs)), vs;
}
var Nr = J0();
class xu {
  /**
   *
   * @param {*} target target object
   * @param {[String]} events array of event names to map
   */
  constructor(r, i) {
    this._target = r, this._callbacks = I.fromPairs(i.map((a) => [a, []]));
  }
  /**
   * add a callback function to an event
   * @param {String} evt event name
   * @param {Function} fun callback function, first argument is target object
   */
  add(r, i) {
    if (!this._callbacks[r]) throw new Error(`${r} is not a valid callback for object`);
    this._callbacks[r].find((a) => a === i) ? console.warn("callback already exists.") : this._callbacks[r].push(i);
  }
  /**
   * remove a callback function from event
   * @param {String} evt event name
   * @param {Function} fun callback function
   */
  remove(r, i) {
    if (!this._callbacks[r]) throw new Error(`${r} is not a valid callback for object`);
    I.pull(this._callbacks[r], i);
  }
  /**
   * clear all callbacks from a target
   * @param {*} [evt] event to clear; if undefined all events will be cleared
   */
  clear(r) {
    (r ? [r] : Object.keys(this._callbacks)).forEach((a) => this._callbacks[a] = []);
  }
  /**
   * execute callbacks for an event
   * @param {String} event event name
   */
  execute(r) {
    this._callbacks[r].forEach((i) => i(this._target));
  }
}
const Z0 = Ke("PaceChunk");
class pu {
  constructor(r = {}) {
    eu(this, "l");
    if (!I.has(r, "points")) throw new Error('"points" required.');
    if (!I.has(r, "constraints")) throw new Error('"constraints" required.');
    Object.assign(this, r);
  }
  set elapsed(r) {
    this.constraints.elapsed = r;
  }
  get elapsed() {
    return (I.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.constraints[0];
  }
  get dist() {
    return I.last(this.points).loc - I.first(this.points).loc;
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
    const r = this.points;
    r[0].elapsed = this.constraints[0], r[0].time = r[0].elapsed - I.sum(this.plan.pacing.chunks.filter((b) => b.points[0].loc < r[0].loc).map((b) => b.delay)), this.plan.event.start && (r[0].tod = this.plan.event.elapsedToTimeOfDay(r[0].elapsed));
    let i = r[0].elapsed, a = r[0].delay || 0, l = 0, d = 0, h = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, w = Object.fromEntries(Re.map((b) => [b, 0]));
    for (let b = 1, S = r.length; b < S; b++) {
      l = r[b].loc - r[b - 1].loc, ys(r[b - 1], { plan: this.plan }), Re.forEach((P) => {
        w[P] += r[b - 1].factors[P] * l;
      });
      const v = r[b - 1].factors.combined;
      h += v * l, d = _ * v * l, r[b].time = r[b - 1].time + d, a = r[b - 1].delay || 0, i += d + a, r[b].elapsed = i, this.plan.event.start && (r[b].tod = this.plan.event.elapsedToTimeOfDay(i));
    }
    ys(I.last(r), { plan: this.plan }), this.factors = new $r(Object.fromEntries(Re.map((b) => [b, w[b] / this.dist]))), this.factor = h / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = Z0.extend(
      Nr.vsprintf("calculate:%.2f-%.2f", [I.first(this.points).loc, I.last(this.points).loc])
    );
    let l = this.factor || 0, d;
    const h = {};
    let _ = !1;
    for (d = 0; d < 20 && (this.applyPacing(), h.iterations = d >= 2, h.factor = !I.round(l - this.factor, 10), l = this.factor, h.target = Math.abs(
      (I.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - I.last(this.points).elapsed
    ) < 0.1, a(
      Nr.vsprintf("%i|%s", [
        d,
        Object.keys(h).map((w) => Nr.vsprintf("%s=%s", [w, h[w] ? "P" : "F"])).join("|")
      ])
    ), _ = !Object.keys(h).filter((w) => !h[w]).length, !_); d++)
      ;
    a("iteration complete"), this.status = {
      tests: h,
      success: _,
      iterations: d + 1
    };
  }
}
const Vt = Ke("Pacing");
class Y0 {
  constructor(r = {}) {
    Object.defineProperty(this, "_cache", { value: {} }), this.callbacks = new xu(this, ["onUpdated", "onFail", "onInvalidated"]), Object.assign(this, r);
  }
  get __class() {
    return "Pacing";
  }
  clearCache() {
    Vt("clearCache"), Object.keys(this._cache).forEach((r) => {
      delete this._cache[r];
    });
  }
  invalidate() {
    Vt("invalidate"), this.chunks = [], this.clearCache(), this.callbacks.execute("onInvalidated");
  }
  get elapsed() {
    return Vt("elapsed:get"), this._cache.elapsed ? this._cache.elapsed : I.last(this.plan.points).elapsed;
  }
  get pace() {
    return Vt("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._cache.factor ? this._cache.factor : (Vt("factor:update"), this.chunks && (this._cache.factor = I.sum(this.chunks.map((r) => r.factor * r.dist)) / this.plan.course.dist), this._cache.factor || 1);
  }
  get factors() {
    if (Vt("factors:get"), !!this.chunks)
      return this._cache.factors ? this._cache.factors : (Vt("factors:update"), new $r(
        Object.fromEntries(
          Re.map((r) => [
            r,
            I.sum(this.chunks.map((i) => i.factors[r] * i.dist)) / this.plan.course.dist
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
    var r, i, a;
    return {
      complete: ((r = this.chunks) == null ? void 0 : r.length) > 0,
      success: ((i = this.chunks) == null ? void 0 : i.filter((l) => {
        var d;
        return !((d = l.status) != null && d.success);
      }).length) === 0,
      chunks: ((a = this.chunks) == null ? void 0 : a.length) || 0
    };
  }
  calculate() {
    var a, l, d;
    const r = Vt.extend("calculate");
    if (r("exec"), !((a = this.plan.points) != null && a.length))
      throw r("calculate: error; no points"), new rn("Plan points are not defined.", "points");
    r("clearing cache"), this.clearCache(), r("adding points at each terrain factor break"), (l = this.plan.course.terrainFactors) == null || l.forEach(
      (h) => this.plan.getPoint({ loc: h.start, insert: !0 })
    ), r("adding points at each cutoff"), this.plan.adjustForCutoffs && this.plan.cutoffs.forEach((h) => {
      h.point = this.plan.getPoint({ loc: h.loc, insert: !0 });
    }), this.plan.points.filter((h) => h.delay).forEach((h) => {
      delete h.delay;
    }), (d = this.plan.delays) == null || d.forEach((h) => {
      const _ = this.plan.getPoint({ loc: h.loc, insert: !0 });
      _.delay = h.delay;
    }), r("creating pace chunks"), this.initChunks();
    const i = I.reverse([...this.plan.cutoffs]);
    i.unshift(null), i.push(null), i.forEach((h) => {
      for (; this.chunks.find((_) => !_.status); )
        this.calcChunks(), this.validateChunks();
      if (!h) return !0;
      if (h.point.elapsed - h.time > 0.5) {
        r(`cutoff at ${h.loc} missed`);
        const _ = this.chunks[0];
        I.last(_.points) === h.point ? (r(`setting cutoff at ${h.loc}`), _.constraints = [0, h.time], delete _.status) : this.splitChunk(_, { point: h.point, elapsed: h.time });
      }
    }), I.isFunction(I.last(this.chunks).constraints[1]) && this.chunks.length > 2 && (r("rerunning last chunk"), I.last(this.chunks).calculate()), Vt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
  }
  /**
   * initialize pacing chunks array
   */
  initChunks() {
    let r;
    switch (this.plan.pacingMethod) {
      case "time":
        r = this.plan.pacingTarget;
        break;
      case "pace":
        r = this.plan.pacingTarget * this.plan.course.dist + this.plan.delay;
        break;
      case "np":
        r = () => this.plan.pacingTarget * (this.factor || 1) * this.plan.course.dist + this.plan.delay;
        break;
      default:
        throw new Error(`Incorrect pacing method ${this.plan.pacingMethod}`);
    }
    this.chunks = [
      new pu({
        plan: this.plan,
        points: this.plan.points,
        constraints: [0, r],
        delay: this.plan.delay
      })
    ], this.plan.points.forEach((i) => {
      i._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    Vt("calcChunks"), this.clearCache(), this.chunks.filter((r) => !r.status).forEach((r) => r.calculate());
  }
  /**
   * make sure chunks nps increasing monotincally and merge if needed
   */
  validateChunks() {
    let r = 1;
    for (; r <= this.chunks.length - 1; )
      this.chunks[r].np < this.chunks[r - 1].np ? this.mergeChunks(this.chunks[r - 1], this.chunks[r]) : r++;
  }
  /**
   * split pacing chunk; mutates chunks array
   * @param {*} args
   * @param {PlanPoint} args.point    point to split at
   * @param {Number}    args.elapsed  elapsed time at split
   */
  splitChunk(r, { point: i, elapsed: a }) {
    Vt.extend("split")(`breaking chunks at ${i.loc} km`);
    const d = r.points.findIndex((w) => w === i), h = I.round(i.elapsed - i.time), _ = new pu({
      plan: this.plan,
      points: r.points.slice(0, d + 1),
      constraints: [0, a],
      delay: h
    });
    _.points.filter((w, b) => b < _.points.length - 1).forEach((w) => {
      w._chunk = _;
    }), this.chunks.unshift(_), r.constraints[0] = a, r.delay -= h, r.points = r.points.slice(d), delete r.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param {*} a first chunk
   * @param {*} b second chunk
   */
  mergeChunks(r, i) {
    const a = this.chunks.findIndex((d) => d === r), l = this.chunks.findIndex((d) => d === i);
    if (l - a !== 1) throw new Error("chunks must be sequential");
    Vt(Nr.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, l, r.np, i.np)), r.points.pop(), r.points.push(...i.points), r.delay += i.delay, delete r.status, r.points.forEach((d) => {
      d._chunk = r;
    }), r.constraints = [r.constraints[0], i.constraints[1]], this.chunks.splice(l, 1);
  }
}
const j0 = ["lat", "lon", "alt", "latlon", "grade", "loc", "actual"];
class du {
  constructor(r, i) {
    Object.defineProperty(this, "_plan", { value: r }), Object.defineProperty(this, "_point", { value: i }), Object.defineProperty(this, "_chunk", { writable: !0, enumerable: !1 }), j0.forEach((a) => {
      Object.defineProperty(this, a, {
        get() {
          return this._point[a];
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
    var r;
    return (r = this.factors) == null ? void 0 : r.combined;
  }
  get pace() {
    const { np: r, factor: i } = this;
    if (i && r) return i * r;
  }
}
const At = Ke("models:Plan"), Ge = (f, r) => S0(f.site, r.site) && f.loop === r.loop;
class X0 {
  constructor(r) {
    Object.defineProperty(this, "_cache", { value: {} }), Object.defineProperty(this, "_data", { value: {} }), Object.assign(this, r);
  }
  get __class() {
    return "PlanSplits";
  }
  get segments() {
    var r;
    return (r = this._cache.segments) != null && r.length || (At("calculating segments"), this.plan.checkPacing(), this._cache.segments = wu({ plan: this.plan })), this._cache.segments;
  }
  set segments(r) {
    this._cache.segments = r;
  }
  get miles() {
    var r;
    return (r = this._cache.miles) != null && r.length || (At("calculating miles"), this.plan.checkPacing(), this._cache.miles = Br({ unit: "miles", plan: this.plan })), this._cache.miles;
  }
  set miles(r) {
    this._cache.miles = r;
  }
  get kilometers() {
    var r;
    return (r = this._cache.kilometers) != null && r.length || (At("calculating kilometers"), this.plan.checkPacing(), this._cache.kilometers = Br({ unit: "kilometers", plan: this.plan })), this._cache.kilometers;
  }
  set kilometers(r) {
    this._cache.kilometers = r;
  }
}
class r_ {
  constructor(r) {
    if (Object.defineProperty(this, "pacing", { writable: !1, value: new Y0({ plan: this }) }), Object.defineProperty(this, "_data", {
      value: {
        adjustForCutoffs: !0,
        delays: [],
        notes: []
      },
      enumerable: !1
    }), Object.defineProperty(this, "_cache", { value: {}, writable: !0 }), r.course) Object.defineProperty(this, "course", { writable: !1, value: r.course });
    else throw new Error("Course required");
    const i = ["course", "_data", "cache"];
    Object.keys(r).forEach((a) => {
      i.includes(a) || (this[a] = r[a]);
    }), Object.defineProperty(this, "callbacks", {
      writable: !1,
      value: new xu(this, ["onUpdated"])
    });
  }
  get __class() {
    return "Plan";
  }
  clearCache() {
    At("clearCache"), this._cache = {};
  }
  set eventStart(r) {
    r ? this._data.eventStart = new Date(r) : delete this._data.eventStart, delete this._cache.event;
  }
  get eventStart() {
    return this._data.eventStart;
  }
  set eventTimezone(r) {
    r ? this._data.eventTimezone = r : delete this._data.eventTimezone, delete this._cache.event;
  }
  get eventTimezone() {
    return this._data.eventTimezone;
  }
  get event() {
    if (this._cache.event) return this._cache.event;
    let r = this.eventStart || this.course.eventStart;
    r || (console.warn("eventStart not defined in either plan or course, defaulting to zero."), r = /* @__PURE__ */ new Date(0));
    let i = this.eventTimezone || this.course.eventTimezone;
    return i || (console.warn("eventTimezone not defined in either plan or course, defaulting to UTC."), i = "UTC"), this._cache.event = new bu({ ...this.course.track.start, start: r, timezone: i }), this._cache.event;
  }
  get adjustForCutoffs() {
    return this._data.adjustForCutoffs;
  }
  set adjustForCutoffs(r) {
    At("set:adjustForCutoffs"), this._data.adjustForCutoffs = r, delete this._cache.cutoffs;
  }
  get cutoffs() {
    if (this._cache.cutoffs) return this._cache.cutoffs;
    this._cache.cutoffs = this.adjustForCutoffs ? this.course.cutoffs.map(
      (i) => new V0({
        courseCutoff: i,
        plan: this,
        point: this.getPoint({ loc: i.loc, insert: !0 })
      })
    ) : [];
    let r = 0;
    for (; this._cache.cutoffs.length - 1 >= r; ) {
      const i = this._cache.cutoffs[r];
      this._cache.cutoffs.find((a, l) => l > r && a.time <= i.time) ? (At(`get cutoffs: deleting extraneous cutoff at ${i.loc} km`), this._cache.cutoffs.splice(r, 1)) : r++;
    }
    return this._cache.cutoffs;
  }
  get strategy() {
    return this._cache.strategy ? this._cache.strategy : (this._cache.strategy = new x0({ values: this._data.strategy, length: this.course.dist }), this._cache.strategy);
  }
  set strategy(r) {
    delete this._cache.strategy, I.isNil(r) ? this._data.strategy = void 0 : Array.isArray(r) && r.length && r.length === r.filter(
      (i) => I.isNumber(i.onset) && I.isNumber(i.value) && I.isString(i.type)
    ).length ? this._data.strategy = r : (this._data.strategy = void 0, At('Plan "strategy" invalid.'));
  }
  get heatModel() {
    return this._cache.heatModel !== void 0 ? this._cache.heatModel : (this._data.heatModel ? this._cache.heatModel = Object.assign(
      {
        start: this.event.sun.sunrise + 1800,
        stop: this.event.sun.sunset + 7200
      },
      I.pick(this._data.heatModel, ["baseline", "max"])
    ) : this._cache.heatModel = null, this._cache.heatModel);
  }
  set heatModel(r) {
    this._data.heatModel = r;
  }
  get totalDelay() {
    return this.delays.reduce((r, i) => r + i.delay, 0);
  }
  get delays() {
    if (this._cache.delays) return this._cache.delays;
    const r = this.course.waypoints.map((a) => {
      var h;
      const l = (h = this._data.delays) == null ? void 0 : h.find((_) => Ge(_.waypoint, a)), d = l ? l.delay : a.hasTypicalDelay ? this.waypointDelay : 0;
      return new Q0({ waypoint: a, delay: d });
    }).filter((a) => a.delay > 0).sort((a, l) => a.loc - l.loc);
    let i = 0;
    for (; r.length - 1 >= i; )
      i > 0 && r[i].loc === r[i - 1].loc ? (At(`get delays: merging delay at ${r[i].loc} km`), r[i - 1].delay += r[i].delay, r.splice(i, 1)) : i++;
    return this._cache.delays = r, this._cache.delays;
  }
  set delays(r) {
    if (I.isUndefined(r)) r = [];
    else if (!I.isArray(r)) throw new Error('"delays" must be an array');
    this._data.delays = r, delete this._cache.delays;
  }
  get delay() {
    return this.totalDelay;
  }
  get notes() {
    return this._cache.notes ? this._cache.notes : (this._cache.notes = this._data.notes.map((r) => ({
      waypoint: this.course.waypoints.find((i) => Ge(r.waypoint, i)),
      text: r.text
    })), this._cache.notes);
  }
  set notes(r) {
    if (I.isUndefined(r)) r = [];
    else if (!I.isArray(r)) throw new Error('"notes" must be an array');
    this._data.notes = r, delete this._cache.notes;
  }
  get splits() {
    return this._cache.splits || (At("creating splits"), this._cache.splits = new X0({ plan: this })), this._cache.splits;
  }
  getDelayAtWaypoint(r) {
    var i;
    return ((i = this.delays.find((a) => Ge(a.waypoint, r))) == null ? void 0 : i.delay) || 0;
  }
  getTypicalDelayAtWaypoint(r) {
    return r.hasTypicalDelay ? this.waypointDelay : 0;
  }
  getNoteAtWaypoint(r) {
    var i;
    return ((i = this.notes.find((a) => Ge(a.waypoint, r))) == null ? void 0 : i.text) || "";
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param {Number} args.loc - The location (in km) to determine value.
   * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
   * @return {PlanPoint} The PlanPoint at input location.
   */
  getPoint({ loc: r, insert: i = !1 }) {
    const a = this.points.findIndex((w) => Ur(w.loc, r, 4)), l = this.points[a];
    if (He(l.loc, r, 4)) return l;
    At(`getPoint: ${i ? "inserting" : "creating"} new PlanPoint at ${r}`);
    const d = a - 1, h = this.points[d], _ = new du(this, this.course.getPoint({ loc: r, insert: i }));
    if (!isNaN(h.time) && !isNaN(l.time)) {
      const w = l.elapsed - l.time - (h.elapsed - h.time);
      _.time = nn(h.loc, l.loc, h.time + w, l.time, l.loc), _.elapsed = l.elapsed - (l.time - _.time), this.event.start && (_.tod = this.event.elapsedToTimeOfDay(_.elapsed));
    }
    return i && this.points.splice(a, 0, _), _;
  }
  get points() {
    var r, i;
    if (!this._cache.points) {
      if (At("creating points array"), !((i = (r = this.course) == null ? void 0 : r.points) != null && i.length))
        throw At("cannot create points array; course points are not defined."), new rn("Course points are not defined.", "points");
      this._cache.points = this.course.points.map((a) => new du(this, a));
    }
    return this._cache.points;
  }
  get events() {
    if (this._cache.events) return this._cache.events;
    At("calculating events.sun");
    const r = [], i = ["dawn", "sunrise", "sunset", "dusk"], a = this.event.elapsedToTimeOfDay(0), l = Math.ceil((a + I.last(this.points).elapsed) / 86400);
    for (let d = 0; d < l; d++)
      i.forEach((h) => {
        const _ = this.event.sun[h] - a + 86400 * d;
        _ >= 0 && _ <= I.last(this.points).elapsed && r.push({ event: h, elapsed: _ });
      });
    return r.sort((d, h) => d.elapsed - h.elapsed), r.length && gu(
      this.points.map((h) => h.elapsed),
      this.points.map((h) => h.loc),
      r.map((h) => h.elapsed)
    ).forEach((h, _) => {
      r[_].loc = h;
    }), this._cache.events = { sun: r }, this._cache.events;
  }
  get stats() {
    if (this._cache.stats) return this._cache.stats;
    At("calculating stats.factors");
    const r = Object.fromEntries(
      Re.map((d) => {
        const h = this.points.map((_) => _.factors[d]);
        return [
          d,
          {
            min: I.min(h),
            max: I.max(h)
          }
        ];
      })
    );
    At("calculating stats.sun");
    const i = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let a = 0, l = 0;
    return this.points.forEach((d, h) => {
      var _, w;
      a = d.loc - (((_ = this.points[h - 1]) == null ? void 0 : _.loc) || 0), l = d.elapsed - (((w = this.points[h - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (d.tod <= this.event.sun.dawn || d.tod >= this.event.sun.dusk) ? (i.dark.time += l, i.dark.dist += a) : d.tod < this.event.sun.sunrise || d.tod > this.event.sun.sunset ? (i.twilight.time += l, i.twilight.dist += a) : (i.day.time += l, i.day.dist += a);
    }), this._cache.stats = { factors: r, sun: i }, this._cache.stats;
  }
  /**
   * update Plan with key/value pairs
   * @param {*} params
   */
  update(r) {
    const i = At.extend("update");
    i(`fields: ${Object.keys(r).join(", ")}`), I.forOwn(r, (a, l) => {
      switch (l) {
        case "_id":
        case "name":
        case "description":
          this[l] = a;
          break;
        case "delays": {
          this._data.delays = a, delete this._cache.delays, this.invalidatePacing();
          break;
        }
        case "delay": {
          let { delay: d, waypoint: h } = a;
          if (h = this.course.waypoints.find((w) => Ge(w, h)), !h) throw new Error("unknown waypoint");
          const _ = this._data.delays.findIndex((w) => Ge(w.waypoint, h));
          d !== this.getTypicalDelayAtWaypoint(h) ? _ >= 0 ? this._data.delays[_] = { waypoint: h, delay: d } : this._data.delays.push({ waypoint: h, delay: d }) : _ >= 0 && this._data.delays.splice(_, 1), delete this._cache.cutoffs, delete this._cache.delays, this.invalidatePacing();
          break;
        }
        case "note": {
          let { text: d, waypoint: h } = a;
          if (h = this.course.waypoints.find((w) => Ge(w, h)), !h) throw new Error("unknown waypoint");
          const _ = this._data.notes.findIndex((w) => Ge(w.waypoint, h));
          d ? _ >= 0 ? this._data.notes[_] = { waypoint: h, text: d } : this._data.notes.push({ waypoint: h, text: d }) : _ >= 0 && this._data.notes.splice(_, 1), delete this._cache.notes;
          break;
        }
        default:
          this[l] = a, i("clearCache, invalidatePacing"), this.clearCache(), this.invalidatePacing();
      }
    }), this.callbacks.execute("onUpdated");
  }
  invalidatePacing() {
    At("invalidatePacing"), this.pacing.invalidate(), delete this._cache.splits;
  }
  checkPacing() {
    var r, i;
    if (At("checkPacing"), (r = this.pacing.status) != null && r.complete || (At("checkPacing: calculate"), this.pacing.calculate()), !((i = this.points) != null && i.length)) throw new Error("No plan points");
    return !0;
  }
}
class Q0 {
  constructor(r) {
    Object.assign(this, r);
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class V0 {
  constructor(r) {
    Object.assign(this, r);
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
class i_ extends mu {
  constructor(r = []) {
    super({}), this.segments = r;
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
    return I.last(this.segments);
  }
  /**
   * Return sum of a field
   * @param {String}  field   Field to sum
   * @return {Number}         The sum
   */
  sum(r) {
    if (!this.segments.find((i) => !I.isNumber(i[r])))
      return I.sumBy(this.segments, r);
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
  set grade(r) {
    this._data.grade = r;
  }
  get grade() {
    return I.isNumber(this._data.grade) || (this._data.grade = this.segments.reduce((r, i) => r + i.grade * i.len, 0) / this.len), this._data.grade;
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
    const r = { combined: 1 };
    return Re.forEach((i) => {
      const a = this.segments.reduce((l, d) => l + d.len * d.factors[i], 0);
      isNaN(a) || (r[i] = a / this.len), r.combined *= r[i];
    }), r;
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
  n_ as Course,
  uu as CoursePoint,
  bu as Event,
  $r as Factors,
  r_ as Plan,
  du as PlanPoint,
  Mu as Point,
  mu as Segment,
  _s as Site,
  x0 as Strategy,
  i_ as SuperSegment,
  xs as Track,
  fu as Waypoint,
  $0 as addLocations,
  b0 as adjustStrategy,
  yu as calcSegments,
  ou as dateToTODSeconds,
  Re as factorList,
  y0 as getHeatFactor,
  bs as interpolatePoint,
  e_ as math,
  g0 as scaleDark
};
