var d0 = Object.defineProperty;
var _0 = (c, s, r) => s in c ? d0(c, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[s] = r;
var M = (c, s, r) => _0(c, typeof s != "symbol" ? s + "" : s, r);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vu(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Be = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var v0 = Be.exports, iu;
function m0() {
  return iu || (iu = 1, function(c, s) {
    (function() {
      var r, a = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", m = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", C = 500, I = "__lodash_placeholder__", v = 1, F = 2, R = 4, E = 1, P = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Wt = 64, St = 128, tn = 256, Ht = 512, Et = 30, we = "...", $e = 800, Ur = 16, Me = 1, qe = 2, $r = 3, xn = 1 / 0, vn = 9007199254740991, ze = 17976931348623157e292, bn = NaN, O = 4294967295, $ = O - 1, G = O >>> 1, ct = [
        ["ary", St],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Wt],
        ["rearg", tn]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Rt = "[object Error]", Bt = "[object Function]", mn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", Dn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", yn = "[object String]", Ge = "[object Symbol]", Lu = "[object Undefined]", Ce = "[object WeakMap]", Ou = "[object WeakSet]", Se = "[object ArrayBuffer]", re = "[object DataView]", qr = "[object Float32Array]", zr = "[object Float64Array]", Gr = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", ku = /\b__p \+= '';/g, Du = /\b(__p \+=) '' \+/g, Nu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ts = /&(?:amp|lt|gt|quot|#39);/g, Ps = /[&<>"']/g, Wu = RegExp(Ts.source), Bu = RegExp(Ps.source), Uu = /<%-([\s\S]+?)%>/g, $u = /<%([\s\S]+?)%>/g, Fs = /<%=([\s\S]+?)%>/g, qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zu = /^\w*$/, Gu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Hu = RegExp(Qr.source), Vr = /^\s+/, Ku = /\s/, Zu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ju = /\{\n\/\* \[wrapped with (.+)\] \*/, Yu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qu = /[()=,{}\[\]\/\s]/, Vu = /\\(\\)?/g, ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Es = /\w*$/, tl = /^[-+]0x[0-9a-f]+$/i, nl = /^0b[01]+$/i, el = /^\[object .+?Constructor\]$/, rl = /^0o[0-7]+$/i, il = /^(?:0|[1-9]\d*)$/, sl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, He = /($^)/, al = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", ol = "\\u0300-\\u036f", ul = "\\ufe20-\\ufe2f", ll = "\\u20d0-\\u20ff", Rs = ol + ul + ll, Ls = "\\u2700-\\u27bf", Os = "a-z\\xdf-\\xf6\\xf8-\\xff", fl = "\\xac\\xb1\\xd7\\xf7", cl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hl = "\\u2000-\\u206f", pl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ks = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ds = "\\ufe0e\\ufe0f", Ns = fl + cl + hl + pl, jr = "['’]", gl = "[" + Ke + "]", Ws = "[" + Ns + "]", Ze = "[" + Rs + "]", Bs = "\\d+", dl = "[" + Ls + "]", Us = "[" + Os + "]", $s = "[^" + Ke + Ns + Bs + Ls + Os + ks + "]", ti = "\\ud83c[\\udffb-\\udfff]", _l = "(?:" + Ze + "|" + ti + ")", qs = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + ks + "]", zs = "\\u200d", Gs = "(?:" + Us + "|" + $s + ")", vl = "(?:" + ie + "|" + $s + ")", Hs = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Ks = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", Zs = _l + "?", Js = "[" + Ds + "]?", ml = "(?:" + zs + "(?:" + [qs, ni, ei].join("|") + ")" + Js + Zs + ")*", yl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ys = Js + Zs + ml, Ml = "(?:" + [dl, ni, ei].join("|") + ")" + Ys, Cl = "(?:" + [qs + Ze + "?", Ze, ni, ei, gl].join("|") + ")", Sl = RegExp(jr, "g"), xl = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + Cl + Ys, "g"), bl = RegExp([
        ie + "?" + Us + "+" + Hs + "(?=" + [Ws, ie, "$"].join("|") + ")",
        vl + "+" + Ks + "(?=" + [Ws, ie + Gs, "$"].join("|") + ")",
        ie + "?" + Gs + "+" + Hs,
        ie + "+" + Ks,
        wl,
        yl,
        Bs,
        Ml
      ].join("|"), "g"), Al = RegExp("[" + zs + Ke + Rs + Ds + "]"), Il = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Tl = [
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
      ], Pl = -1, ft = {};
      ft[qr] = ft[zr] = ft[Gr] = ft[Hr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[Se] = ft[lt] = ft[re] = ft[Mt] = ft[Rt] = ft[Bt] = ft[vt] = ft[Lt] = ft[Ct] = ft[nn] = ft[pt] = ft[yn] = ft[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[Se] = ut[re] = ut[lt] = ut[Mt] = ut[qr] = ut[zr] = ut[Gr] = ut[Hr] = ut[Kr] = ut[vt] = ut[Lt] = ut[Ct] = ut[nn] = ut[pt] = ut[yn] = ut[Ge] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Rt] = ut[Bt] = ut[Ce] = !1;
      var Fl = {
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
      }, El = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Rl = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ll = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Ol = parseFloat, kl = parseInt, Xs = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Dl = typeof self == "object" && self && self.Object === Object && self, It = Xs || Dl || Function("return this")(), ii = s && !s.nodeType && s, Jn = ii && !0 && c && !c.nodeType && c, Qs = Jn && Jn.exports === ii, si = Qs && Xs.process, en = function() {
        try {
          var _ = Jn && Jn.require && Jn.require("util").types;
          return _ || si && si.binding && si.binding("util");
        } catch {
        }
      }(), Vs = en && en.isArrayBuffer, js = en && en.isDate, ta = en && en.isMap, na = en && en.isRegExp, ea = en && en.isSet, ra = en && en.isTypedArray;
      function Zt(_, x, S) {
        switch (S.length) {
          case 0:
            return _.call(x);
          case 1:
            return _.call(x, S[0]);
          case 2:
            return _.call(x, S[0], S[1]);
          case 3:
            return _.call(x, S[0], S[1], S[2]);
        }
        return _.apply(x, S);
      }
      function Nl(_, x, S, k) {
        for (var H = -1, et = _ == null ? 0 : _.length; ++H < et; ) {
          var xt = _[H];
          x(k, xt, S(xt), _);
        }
        return k;
      }
      function rn(_, x) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k && x(_[S], S, _) !== !1; )
          ;
        return _;
      }
      function Wl(_, x) {
        for (var S = _ == null ? 0 : _.length; S-- && x(_[S], S, _) !== !1; )
          ;
        return _;
      }
      function ia(_, x) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k; )
          if (!x(_[S], S, _))
            return !1;
        return !0;
      }
      function Nn(_, x) {
        for (var S = -1, k = _ == null ? 0 : _.length, H = 0, et = []; ++S < k; ) {
          var xt = _[S];
          x(xt, S, _) && (et[H++] = xt);
        }
        return et;
      }
      function Je(_, x) {
        var S = _ == null ? 0 : _.length;
        return !!S && se(_, x, 0) > -1;
      }
      function ai(_, x, S) {
        for (var k = -1, H = _ == null ? 0 : _.length; ++k < H; )
          if (S(x, _[k]))
            return !0;
        return !1;
      }
      function gt(_, x) {
        for (var S = -1, k = _ == null ? 0 : _.length, H = Array(k); ++S < k; )
          H[S] = x(_[S], S, _);
        return H;
      }
      function Wn(_, x) {
        for (var S = -1, k = x.length, H = _.length; ++S < k; )
          _[H + S] = x[S];
        return _;
      }
      function oi(_, x, S, k) {
        var H = -1, et = _ == null ? 0 : _.length;
        for (k && et && (S = _[++H]); ++H < et; )
          S = x(S, _[H], H, _);
        return S;
      }
      function Bl(_, x, S, k) {
        var H = _ == null ? 0 : _.length;
        for (k && H && (S = _[--H]); H--; )
          S = x(S, _[H], H, _);
        return S;
      }
      function ui(_, x) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k; )
          if (x(_[S], S, _))
            return !0;
        return !1;
      }
      var Ul = li("length");
      function $l(_) {
        return _.split("");
      }
      function ql(_) {
        return _.match(Xu) || [];
      }
      function sa(_, x, S) {
        var k;
        return S(_, function(H, et, xt) {
          if (x(H, et, xt))
            return k = et, !1;
        }), k;
      }
      function Ye(_, x, S, k) {
        for (var H = _.length, et = S + (k ? 1 : -1); k ? et-- : ++et < H; )
          if (x(_[et], et, _))
            return et;
        return -1;
      }
      function se(_, x, S) {
        return x === x ? tf(_, x, S) : Ye(_, aa, S);
      }
      function zl(_, x, S, k) {
        for (var H = S - 1, et = _.length; ++H < et; )
          if (k(_[H], x))
            return H;
        return -1;
      }
      function aa(_) {
        return _ !== _;
      }
      function oa(_, x) {
        var S = _ == null ? 0 : _.length;
        return S ? ci(_, x) / S : bn;
      }
      function li(_) {
        return function(x) {
          return x == null ? r : x[_];
        };
      }
      function fi(_) {
        return function(x) {
          return _ == null ? r : _[x];
        };
      }
      function ua(_, x, S, k, H) {
        return H(_, function(et, xt, at) {
          S = k ? (k = !1, et) : x(S, et, xt, at);
        }), S;
      }
      function Gl(_, x) {
        var S = _.length;
        for (_.sort(x); S--; )
          _[S] = _[S].value;
        return _;
      }
      function ci(_, x) {
        for (var S, k = -1, H = _.length; ++k < H; ) {
          var et = x(_[k]);
          et !== r && (S = S === r ? et : S + et);
        }
        return S;
      }
      function hi(_, x) {
        for (var S = -1, k = Array(_); ++S < _; )
          k[S] = x(S);
        return k;
      }
      function Hl(_, x) {
        return gt(x, function(S) {
          return [S, _[S]];
        });
      }
      function la(_) {
        return _ && _.slice(0, pa(_) + 1).replace(Vr, "");
      }
      function Jt(_) {
        return function(x) {
          return _(x);
        };
      }
      function pi(_, x) {
        return gt(x, function(S) {
          return _[S];
        });
      }
      function xe(_, x) {
        return _.has(x);
      }
      function fa(_, x) {
        for (var S = -1, k = _.length; ++S < k && se(x, _[S], 0) > -1; )
          ;
        return S;
      }
      function ca(_, x) {
        for (var S = _.length; S-- && se(x, _[S], 0) > -1; )
          ;
        return S;
      }
      function Kl(_, x) {
        for (var S = _.length, k = 0; S--; )
          _[S] === x && ++k;
        return k;
      }
      var Zl = fi(Fl), Jl = fi(El);
      function Yl(_) {
        return "\\" + Ll[_];
      }
      function Xl(_, x) {
        return _ == null ? r : _[x];
      }
      function ae(_) {
        return Al.test(_);
      }
      function Ql(_) {
        return Il.test(_);
      }
      function Vl(_) {
        for (var x, S = []; !(x = _.next()).done; )
          S.push(x.value);
        return S;
      }
      function gi(_) {
        var x = -1, S = Array(_.size);
        return _.forEach(function(k, H) {
          S[++x] = [H, k];
        }), S;
      }
      function ha(_, x) {
        return function(S) {
          return _(x(S));
        };
      }
      function Bn(_, x) {
        for (var S = -1, k = _.length, H = 0, et = []; ++S < k; ) {
          var xt = _[S];
          (xt === x || xt === I) && (_[S] = I, et[H++] = S);
        }
        return et;
      }
      function Xe(_) {
        var x = -1, S = Array(_.size);
        return _.forEach(function(k) {
          S[++x] = k;
        }), S;
      }
      function jl(_) {
        var x = -1, S = Array(_.size);
        return _.forEach(function(k) {
          S[++x] = [k, k];
        }), S;
      }
      function tf(_, x, S) {
        for (var k = S - 1, H = _.length; ++k < H; )
          if (_[k] === x)
            return k;
        return -1;
      }
      function nf(_, x, S) {
        for (var k = S + 1; k--; )
          if (_[k] === x)
            return k;
        return k;
      }
      function oe(_) {
        return ae(_) ? rf(_) : Ul(_);
      }
      function hn(_) {
        return ae(_) ? sf(_) : $l(_);
      }
      function pa(_) {
        for (var x = _.length; x-- && Ku.test(_.charAt(x)); )
          ;
        return x;
      }
      var ef = fi(Rl);
      function rf(_) {
        for (var x = ri.lastIndex = 0; ri.test(_); )
          ++x;
        return x;
      }
      function sf(_) {
        return _.match(ri) || [];
      }
      function af(_) {
        return _.match(bl) || [];
      }
      var of = function _(x) {
        x = x == null ? It : ue.defaults(It.Object(), x, ue.pick(It, Tl));
        var S = x.Array, k = x.Date, H = x.Error, et = x.Function, xt = x.Math, at = x.Object, di = x.RegExp, uf = x.String, sn = x.TypeError, Qe = S.prototype, lf = et.prototype, le = at.prototype, Ve = x["__core-js_shared__"], je = lf.toString, st = le.hasOwnProperty, ff = 0, ga = function() {
          var t = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), tr = le.toString, cf = je.call(at), hf = It._, pf = di(
          "^" + je.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Qs ? x.Buffer : r, Un = x.Symbol, er = x.Uint8Array, da = nr ? nr.allocUnsafe : r, rr = ha(at.getPrototypeOf, at), _a = at.create, va = le.propertyIsEnumerable, ir = Qe.splice, ma = Un ? Un.isConcatSpreadable : r, be = Un ? Un.iterator : r, Yn = Un ? Un.toStringTag : r, sr = function() {
          try {
            var t = te(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), gf = x.clearTimeout !== It.clearTimeout && x.clearTimeout, df = k && k.now !== It.Date.now && k.now, _f = x.setTimeout !== It.setTimeout && x.setTimeout, ar = xt.ceil, or = xt.floor, _i = at.getOwnPropertySymbols, vf = nr ? nr.isBuffer : r, ya = x.isFinite, mf = Qe.join, yf = ha(at.keys, at), bt = xt.max, Pt = xt.min, wf = k.now, Mf = x.parseInt, wa = xt.random, Cf = Qe.reverse, vi = te(x, "DataView"), Ae = te(x, "Map"), mi = te(x, "Promise"), fe = te(x, "Set"), Ie = te(x, "WeakMap"), Te = te(at, "create"), ur = Ie && new Ie(), ce = {}, Sf = ne(vi), xf = ne(Ae), bf = ne(mi), Af = ne(fe), If = ne(Ie), lr = Un ? Un.prototype : r, Pe = lr ? lr.valueOf : r, Ma = lr ? lr.toString : r;
        function u(t) {
          if (mt(t) && !K(t) && !(t instanceof j)) {
            if (t instanceof an)
              return t;
            if (st.call(t, "__wrapped__"))
              return So(t);
          }
          return new an(t);
        }
        var he = /* @__PURE__ */ function() {
          function t() {
          }
          return function(n) {
            if (!dt(n))
              return {};
            if (_a)
              return _a(n);
            t.prototype = n;
            var e = new t();
            return t.prototype = r, e;
          };
        }();
        function fr() {
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
          escape: Uu,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: $u,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Fs,
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
        }, u.prototype = fr.prototype, u.prototype.constructor = u, an.prototype = he(fr.prototype), an.prototype.constructor = an;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = O, this.__views__ = [];
        }
        function Tf() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function Pf() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Ff() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = K(t), i = n < 0, o = e ? t.length : 0, l = qc(0, o, this.__views__), h = l.start, g = l.end, y = g - h, b = i ? g : h - 1, A = this.__iteratees__, T = A.length, L = 0, D = Pt(y, this.__takeCount__);
          if (!e || !i && o == y && D == y)
            return Ha(t, this.__actions__);
          var B = [];
          t:
            for (; y-- && L < D; ) {
              b += n;
              for (var X = -1, U = t[b]; ++X < T; ) {
                var V = A[X], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == qe)
                  U = Dt;
                else if (!Dt) {
                  if (Qt == Me)
                    continue t;
                  break t;
                }
              }
              B[L++] = U;
            }
          return B;
        }
        j.prototype = he(fr.prototype), j.prototype.constructor = j;
        function Xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Ef() {
          this.__data__ = Te ? Te(null) : {}, this.size = 0;
        }
        function Rf(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Lf(t) {
          var n = this.__data__;
          if (Te) {
            var e = n[t];
            return e === w ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function Of(t) {
          var n = this.__data__;
          return Te ? n[t] !== r : st.call(n, t);
        }
        function kf(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Te && n === r ? w : n, this;
        }
        Xn.prototype.clear = Ef, Xn.prototype.delete = Rf, Xn.prototype.get = Lf, Xn.prototype.has = Of, Xn.prototype.set = kf;
        function An(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Df() {
          this.__data__ = [], this.size = 0;
        }
        function Nf(t) {
          var n = this.__data__, e = cr(n, t);
          if (e < 0)
            return !1;
          var i = n.length - 1;
          return e == i ? n.pop() : ir.call(n, e, 1), --this.size, !0;
        }
        function Wf(t) {
          var n = this.__data__, e = cr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Bf(t) {
          return cr(this.__data__, t) > -1;
        }
        function Uf(t, n) {
          var e = this.__data__, i = cr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        An.prototype.clear = Df, An.prototype.delete = Nf, An.prototype.get = Wf, An.prototype.has = Bf, An.prototype.set = Uf;
        function In(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function $f() {
          this.size = 0, this.__data__ = {
            hash: new Xn(),
            map: new (Ae || An)(),
            string: new Xn()
          };
        }
        function qf(t) {
          var n = Sr(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function zf(t) {
          return Sr(this, t).get(t);
        }
        function Gf(t) {
          return Sr(this, t).has(t);
        }
        function Hf(t, n) {
          var e = Sr(this, t), i = e.size;
          return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
        }
        In.prototype.clear = $f, In.prototype.delete = qf, In.prototype.get = zf, In.prototype.has = Gf, In.prototype.set = Hf;
        function Qn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new In(); ++n < e; )
            this.add(t[n]);
        }
        function Kf(t) {
          return this.__data__.set(t, w), this;
        }
        function Zf(t) {
          return this.__data__.has(t);
        }
        Qn.prototype.add = Qn.prototype.push = Kf, Qn.prototype.has = Zf;
        function pn(t) {
          var n = this.__data__ = new An(t);
          this.size = n.size;
        }
        function Jf() {
          this.__data__ = new An(), this.size = 0;
        }
        function Yf(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function Xf(t) {
          return this.__data__.get(t);
        }
        function Qf(t) {
          return this.__data__.has(t);
        }
        function Vf(t, n) {
          var e = this.__data__;
          if (e instanceof An) {
            var i = e.__data__;
            if (!Ae || i.length < f - 1)
              return i.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new In(i);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = Jf, pn.prototype.delete = Yf, pn.prototype.get = Xf, pn.prototype.has = Qf, pn.prototype.set = Vf;
        function Ca(t, n) {
          var e = K(t), i = !e && ee(t), o = !e && !i && Hn(t), l = !e && !i && !o && _e(t), h = e || i || o || l, g = h ? hi(t.length, uf) : [], y = g.length;
          for (var b in t)
            (n || st.call(t, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
            En(b, y))) && g.push(b);
          return g;
        }
        function Sa(t) {
          var n = t.length;
          return n ? t[Pi(0, n - 1)] : r;
        }
        function jf(t, n) {
          return xr($t(t), Vn(n, 0, t.length));
        }
        function tc(t) {
          return xr($t(t));
        }
        function yi(t, n, e) {
          (e !== r && !gn(t[n], e) || e === r && !(n in t)) && Tn(t, n, e);
        }
        function Fe(t, n, e) {
          var i = t[n];
          (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && Tn(t, n, e);
        }
        function cr(t, n) {
          for (var e = t.length; e--; )
            if (gn(t[e][0], n))
              return e;
          return -1;
        }
        function nc(t, n, e, i) {
          return $n(t, function(o, l, h) {
            n(i, o, e(o), h);
          }), i;
        }
        function xa(t, n) {
          return t && Mn(n, At(n), t);
        }
        function ec(t, n) {
          return t && Mn(n, zt(n), t);
        }
        function Tn(t, n, e) {
          n == "__proto__" && sr ? sr(t, n, {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0
          }) : t[n] = e;
        }
        function wi(t, n) {
          for (var e = -1, i = n.length, o = S(i), l = t == null; ++e < i; )
            o[e] = l ? r : ts(t, n[e]);
          return o;
        }
        function Vn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function on(t, n, e, i, o, l) {
          var h, g = n & v, y = n & F, b = n & R;
          if (e && (h = o ? e(t, i, o, l) : e(t)), h !== r)
            return h;
          if (!dt(t))
            return t;
          var A = K(t);
          if (A) {
            if (h = Gc(t), !g)
              return $t(t, h);
          } else {
            var T = Ft(t), L = T == Bt || T == mn;
            if (Hn(t))
              return Ja(t, g);
            if (T == Ct || T == nt || L && !o) {
              if (h = y || L ? {} : po(t), !g)
                return y ? Lc(t, ec(h, t)) : Rc(t, xa(h, t));
            } else {
              if (!ut[T])
                return o ? t : {};
              h = Hc(t, T, g);
            }
          }
          l || (l = new pn());
          var D = l.get(t);
          if (D)
            return D;
          l.set(t, h), zo(t) ? t.forEach(function(U) {
            h.add(on(U, n, e, U, t, l));
          }) : $o(t) && t.forEach(function(U, V) {
            h.set(V, on(U, n, e, V, t, l));
          });
          var B = b ? y ? Ui : Bi : y ? zt : At, X = A ? r : B(t);
          return rn(X || t, function(U, V) {
            X && (V = U, U = t[V]), Fe(h, V, on(U, n, e, V, t, l));
          }), h;
        }
        function rc(t) {
          var n = At(t);
          return function(e) {
            return ba(e, t, n);
          };
        }
        function ba(t, n, e) {
          var i = e.length;
          if (t == null)
            return !i;
          for (t = at(t); i--; ) {
            var o = e[i], l = n[o], h = t[o];
            if (h === r && !(o in t) || !l(h))
              return !1;
          }
          return !0;
        }
        function Aa(t, n, e) {
          if (typeof t != "function")
            throw new sn(d);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Ee(t, n, e, i) {
          var o = -1, l = Je, h = !0, g = t.length, y = [], b = n.length;
          if (!g)
            return y;
          e && (n = gt(n, Jt(e))), i ? (l = ai, h = !1) : n.length >= f && (l = xe, h = !1, n = new Qn(n));
          t:
            for (; ++o < g; ) {
              var A = t[o], T = e == null ? A : e(A);
              if (A = i || A !== 0 ? A : 0, h && T === T) {
                for (var L = b; L--; )
                  if (n[L] === T)
                    continue t;
                y.push(A);
              } else l(n, T, i) || y.push(A);
            }
          return y;
        }
        var $n = ja(wn), Ia = ja(Ci, !0);
        function ic(t, n) {
          var e = !0;
          return $n(t, function(i, o, l) {
            return e = !!n(i, o, l), e;
          }), e;
        }
        function hr(t, n, e) {
          for (var i = -1, o = t.length; ++i < o; ) {
            var l = t[i], h = n(l);
            if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
              var g = h, y = l;
          }
          return y;
        }
        function sc(t, n, e, i) {
          var o = t.length;
          for (e = Y(e), e < 0 && (e = -e > o ? 0 : o + e), i = i === r || i > o ? o : Y(i), i < 0 && (i += o), i = e > i ? 0 : Ho(i); e < i; )
            t[e++] = n;
          return t;
        }
        function Ta(t, n) {
          var e = [];
          return $n(t, function(i, o, l) {
            n(i, o, l) && e.push(i);
          }), e;
        }
        function Tt(t, n, e, i, o) {
          var l = -1, h = t.length;
          for (e || (e = Zc), o || (o = []); ++l < h; ) {
            var g = t[l];
            n > 0 && e(g) ? n > 1 ? Tt(g, n - 1, e, i, o) : Wn(o, g) : i || (o[o.length] = g);
          }
          return o;
        }
        var Mi = to(), Pa = to(!0);
        function wn(t, n) {
          return t && Mi(t, n, At);
        }
        function Ci(t, n) {
          return t && Pa(t, n, At);
        }
        function pr(t, n) {
          return Nn(n, function(e) {
            return Rn(t[e]);
          });
        }
        function jn(t, n) {
          n = zn(n, t);
          for (var e = 0, i = n.length; t != null && e < i; )
            t = t[Cn(n[e++])];
          return e && e == i ? t : r;
        }
        function Fa(t, n, e) {
          var i = n(t);
          return K(t) ? i : Wn(i, e(t));
        }
        function Ot(t) {
          return t == null ? t === r ? Lu : Dn : Yn && Yn in at(t) ? $c(t) : th(t);
        }
        function Si(t, n) {
          return t > n;
        }
        function ac(t, n) {
          return t != null && st.call(t, n);
        }
        function oc(t, n) {
          return t != null && n in at(t);
        }
        function uc(t, n, e) {
          return t >= Pt(n, e) && t < bt(n, e);
        }
        function xi(t, n, e) {
          for (var i = e ? ai : Je, o = t[0].length, l = t.length, h = l, g = S(l), y = 1 / 0, b = []; h--; ) {
            var A = t[h];
            h && n && (A = gt(A, Jt(n))), y = Pt(A.length, y), g[h] = !e && (n || o >= 120 && A.length >= 120) ? new Qn(h && A) : r;
          }
          A = t[0];
          var T = -1, L = g[0];
          t:
            for (; ++T < o && b.length < y; ) {
              var D = A[T], B = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? xe(L, B) : i(b, B, e))) {
                for (h = l; --h; ) {
                  var X = g[h];
                  if (!(X ? xe(X, B) : i(t[h], B, e)))
                    continue t;
                }
                L && L.push(B), b.push(D);
              }
            }
          return b;
        }
        function lc(t, n, e, i) {
          return wn(t, function(o, l, h) {
            n(i, e(o), l, h);
          }), i;
        }
        function Re(t, n, e) {
          n = zn(n, t), t = mo(t, n);
          var i = t == null ? t : t[Cn(ln(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Ea(t) {
          return mt(t) && Ot(t) == nt;
        }
        function fc(t) {
          return mt(t) && Ot(t) == Se;
        }
        function cc(t) {
          return mt(t) && Ot(t) == Mt;
        }
        function Le(t, n, e, i, o) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : hc(t, n, e, i, Le, o);
        }
        function hc(t, n, e, i, o, l) {
          var h = K(t), g = K(n), y = h ? ht : Ft(t), b = g ? ht : Ft(n);
          y = y == nt ? Ct : y, b = b == nt ? Ct : b;
          var A = y == Ct, T = b == Ct, L = y == b;
          if (L && Hn(t)) {
            if (!Hn(n))
              return !1;
            h = !0, A = !1;
          }
          if (L && !A)
            return l || (l = new pn()), h || _e(t) ? fo(t, n, e, i, o, l) : Bc(t, n, y, e, i, o, l);
          if (!(e & E)) {
            var D = A && st.call(t, "__wrapped__"), B = T && st.call(n, "__wrapped__");
            if (D || B) {
              var X = D ? t.value() : t, U = B ? n.value() : n;
              return l || (l = new pn()), o(X, U, e, i, l);
            }
          }
          return L ? (l || (l = new pn()), Uc(t, n, e, i, o, l)) : !1;
        }
        function pc(t) {
          return mt(t) && Ft(t) == vt;
        }
        function bi(t, n, e, i) {
          var o = e.length, l = o, h = !i;
          if (t == null)
            return !l;
          for (t = at(t); o--; ) {
            var g = e[o];
            if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
              return !1;
          }
          for (; ++o < l; ) {
            g = e[o];
            var y = g[0], b = t[y], A = g[1];
            if (h && g[2]) {
              if (b === r && !(y in t))
                return !1;
            } else {
              var T = new pn();
              if (i)
                var L = i(b, A, y, t, n, T);
              if (!(L === r ? Le(A, b, E | P, i, T) : L))
                return !1;
            }
          }
          return !0;
        }
        function Ra(t) {
          if (!dt(t) || Yc(t))
            return !1;
          var n = Rn(t) ? pf : el;
          return n.test(ne(t));
        }
        function gc(t) {
          return mt(t) && Ot(t) == nn;
        }
        function dc(t) {
          return mt(t) && Ft(t) == pt;
        }
        function _c(t) {
          return mt(t) && Fr(t.length) && !!ft[Ot(t)];
        }
        function La(t) {
          return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? K(t) ? Da(t[0], t[1]) : ka(t) : eu(t);
        }
        function Ai(t) {
          if (!De(t))
            return yf(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function vc(t) {
          if (!dt(t))
            return jc(t);
          var n = De(t), e = [];
          for (var i in t)
            i == "constructor" && (n || !st.call(t, i)) || e.push(i);
          return e;
        }
        function Ii(t, n) {
          return t < n;
        }
        function Oa(t, n) {
          var e = -1, i = qt(t) ? S(t.length) : [];
          return $n(t, function(o, l, h) {
            i[++e] = n(o, l, h);
          }), i;
        }
        function ka(t) {
          var n = qi(t);
          return n.length == 1 && n[0][2] ? _o(n[0][0], n[0][1]) : function(e) {
            return e === t || bi(e, t, n);
          };
        }
        function Da(t, n) {
          return Gi(t) && go(n) ? _o(Cn(t), n) : function(e) {
            var i = ts(e, t);
            return i === r && i === n ? ns(e, t) : Le(n, i, E | P);
          };
        }
        function gr(t, n, e, i, o) {
          t !== n && Mi(n, function(l, h) {
            if (o || (o = new pn()), dt(l))
              mc(t, n, h, e, gr, i, o);
            else {
              var g = i ? i(Ki(t, h), l, h + "", t, n, o) : r;
              g === r && (g = l), yi(t, h, g);
            }
          }, zt);
        }
        function mc(t, n, e, i, o, l, h) {
          var g = Ki(t, e), y = Ki(n, e), b = h.get(y);
          if (b) {
            yi(t, e, b);
            return;
          }
          var A = l ? l(g, y, e + "", t, n, h) : r, T = A === r;
          if (T) {
            var L = K(y), D = !L && Hn(y), B = !L && !D && _e(y);
            A = y, L || D || B ? K(g) ? A = g : yt(g) ? A = $t(g) : D ? (T = !1, A = Ja(y, !0)) : B ? (T = !1, A = Ya(y, !0)) : A = [] : We(y) || ee(y) ? (A = g, ee(g) ? A = Ko(g) : (!dt(g) || Rn(g)) && (A = po(y))) : T = !1;
          }
          T && (h.set(y, A), o(A, y, i, l, h), h.delete(y)), yi(t, e, A);
        }
        function Na(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, En(n, e) ? t[n] : r;
        }
        function Wa(t, n, e) {
          n.length ? n = gt(n, function(l) {
            return K(l) ? function(h) {
              return jn(h, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [Gt];
          var i = -1;
          n = gt(n, Jt(W()));
          var o = Oa(t, function(l, h, g) {
            var y = gt(n, function(b) {
              return b(l);
            });
            return { criteria: y, index: ++i, value: l };
          });
          return Gl(o, function(l, h) {
            return Ec(l, h, e);
          });
        }
        function yc(t, n) {
          return Ba(t, n, function(e, i) {
            return ns(t, i);
          });
        }
        function Ba(t, n, e) {
          for (var i = -1, o = n.length, l = {}; ++i < o; ) {
            var h = n[i], g = jn(t, h);
            e(g, h) && Oe(l, zn(h, t), g);
          }
          return l;
        }
        function wc(t) {
          return function(n) {
            return jn(n, t);
          };
        }
        function Ti(t, n, e, i) {
          var o = i ? zl : se, l = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = gt(t, Jt(e))); ++l < h; )
            for (var y = 0, b = n[l], A = e ? e(b) : b; (y = o(g, A, y, i)) > -1; )
              g !== t && ir.call(g, y, 1), ir.call(t, y, 1);
          return t;
        }
        function Ua(t, n) {
          for (var e = t ? n.length : 0, i = e - 1; e--; ) {
            var o = n[e];
            if (e == i || o !== l) {
              var l = o;
              En(o) ? ir.call(t, o, 1) : Ri(t, o);
            }
          }
          return t;
        }
        function Pi(t, n) {
          return t + or(wa() * (n - t + 1));
        }
        function Mc(t, n, e, i) {
          for (var o = -1, l = bt(ar((n - t) / (e || 1)), 0), h = S(l); l--; )
            h[i ? l : ++o] = t, t += e;
          return h;
        }
        function Fi(t, n) {
          var e = "";
          if (!t || n < 1 || n > vn)
            return e;
          do
            n % 2 && (e += t), n = or(n / 2), n && (t += t);
          while (n);
          return e;
        }
        function Q(t, n) {
          return Zi(vo(t, n, Gt), t + "");
        }
        function Cc(t) {
          return Sa(ve(t));
        }
        function Sc(t, n) {
          var e = ve(t);
          return xr(e, Vn(n, 0, e.length));
        }
        function Oe(t, n, e, i) {
          if (!dt(t))
            return t;
          n = zn(n, t);
          for (var o = -1, l = n.length, h = l - 1, g = t; g != null && ++o < l; ) {
            var y = Cn(n[o]), b = e;
            if (y === "__proto__" || y === "constructor" || y === "prototype")
              return t;
            if (o != h) {
              var A = g[y];
              b = i ? i(A, y, g) : r, b === r && (b = dt(A) ? A : En(n[o + 1]) ? [] : {});
            }
            Fe(g, y, b), g = g[y];
          }
          return t;
        }
        var $a = ur ? function(t, n) {
          return ur.set(t, n), t;
        } : Gt, xc = sr ? function(t, n) {
          return sr(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: rs(n),
            writable: !0
          });
        } : Gt;
        function bc(t) {
          return xr(ve(t));
        }
        function un(t, n, e) {
          var i = -1, o = t.length;
          n < 0 && (n = -n > o ? 0 : o + n), e = e > o ? o : e, e < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var l = S(o); ++i < o; )
            l[i] = t[i + n];
          return l;
        }
        function Ac(t, n) {
          var e;
          return $n(t, function(i, o, l) {
            return e = n(i, o, l), !e;
          }), !!e;
        }
        function dr(t, n, e) {
          var i = 0, o = t == null ? i : t.length;
          if (typeof n == "number" && n === n && o <= G) {
            for (; i < o; ) {
              var l = i + o >>> 1, h = t[l];
              h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = l + 1 : o = l;
            }
            return o;
          }
          return Ei(t, n, Gt, e);
        }
        function Ei(t, n, e, i) {
          var o = 0, l = t == null ? 0 : t.length;
          if (l === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, y = Xt(n), b = n === r; o < l; ) {
            var A = or((o + l) / 2), T = e(t[A]), L = T !== r, D = T === null, B = T === T, X = Xt(T);
            if (h)
              var U = i || B;
            else b ? U = B && (i || L) : g ? U = B && L && (i || !D) : y ? U = B && L && !D && (i || !X) : D || X ? U = !1 : U = i ? T <= n : T < n;
            U ? o = A + 1 : l = A;
          }
          return Pt(l, $);
        }
        function qa(t, n) {
          for (var e = -1, i = t.length, o = 0, l = []; ++e < i; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !gn(g, y)) {
              var y = g;
              l[o++] = h === 0 ? 0 : h;
            }
          }
          return l;
        }
        function za(t) {
          return typeof t == "number" ? t : Xt(t) ? bn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (K(t))
            return gt(t, Yt) + "";
          if (Xt(t))
            return Ma ? Ma.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -xn ? "-0" : n;
        }
        function qn(t, n, e) {
          var i = -1, o = Je, l = t.length, h = !0, g = [], y = g;
          if (e)
            h = !1, o = ai;
          else if (l >= f) {
            var b = n ? null : Nc(t);
            if (b)
              return Xe(b);
            h = !1, o = xe, y = new Qn();
          } else
            y = n ? [] : g;
          t:
            for (; ++i < l; ) {
              var A = t[i], T = n ? n(A) : A;
              if (A = e || A !== 0 ? A : 0, h && T === T) {
                for (var L = y.length; L--; )
                  if (y[L] === T)
                    continue t;
                n && y.push(T), g.push(A);
              } else o(y, T, e) || (y !== g && y.push(T), g.push(A));
            }
          return g;
        }
        function Ri(t, n) {
          return n = zn(n, t), t = mo(t, n), t == null || delete t[Cn(ln(n))];
        }
        function Ga(t, n, e, i) {
          return Oe(t, n, e(jn(t, n)), i);
        }
        function _r(t, n, e, i) {
          for (var o = t.length, l = i ? o : -1; (i ? l-- : ++l < o) && n(t[l], l, t); )
            ;
          return e ? un(t, i ? 0 : l, i ? l + 1 : o) : un(t, i ? l + 1 : 0, i ? o : l);
        }
        function Ha(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), oi(n, function(i, o) {
            return o.func.apply(o.thisArg, Wn([i], o.args));
          }, e);
        }
        function Li(t, n, e) {
          var i = t.length;
          if (i < 2)
            return i ? qn(t[0]) : [];
          for (var o = -1, l = S(i); ++o < i; )
            for (var h = t[o], g = -1; ++g < i; )
              g != o && (l[o] = Ee(l[o] || h, t[g], n, e));
          return qn(Tt(l, 1), n, e);
        }
        function Ka(t, n, e) {
          for (var i = -1, o = t.length, l = n.length, h = {}; ++i < o; ) {
            var g = i < l ? n[i] : r;
            e(h, t[i], g);
          }
          return h;
        }
        function Oi(t) {
          return yt(t) ? t : [];
        }
        function ki(t) {
          return typeof t == "function" ? t : Gt;
        }
        function zn(t, n) {
          return K(t) ? t : Gi(t, n) ? [t] : Co(rt(t));
        }
        var Ic = Q;
        function Gn(t, n, e) {
          var i = t.length;
          return e = e === r ? i : e, !n && e >= i ? t : un(t, n, e);
        }
        var Za = gf || function(t) {
          return It.clearTimeout(t);
        };
        function Ja(t, n) {
          if (n)
            return t.slice();
          var e = t.length, i = da ? da(e) : new t.constructor(e);
          return t.copy(i), i;
        }
        function Di(t) {
          var n = new t.constructor(t.byteLength);
          return new er(n).set(new er(t)), n;
        }
        function Tc(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Pc(t) {
          var n = new t.constructor(t.source, Es.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Fc(t) {
          return Pe ? at(Pe.call(t)) : {};
        }
        function Ya(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Xa(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, o = t === t, l = Xt(t), h = n !== r, g = n === null, y = n === n, b = Xt(n);
            if (!g && !b && !l && t > n || l && h && y && !g && !b || i && h && y || !e && y || !o)
              return 1;
            if (!i && !l && !b && t < n || b && e && o && !i && !l || g && e && o || !h && o || !y)
              return -1;
          }
          return 0;
        }
        function Ec(t, n, e) {
          for (var i = -1, o = t.criteria, l = n.criteria, h = o.length, g = e.length; ++i < h; ) {
            var y = Xa(o[i], l[i]);
            if (y) {
              if (i >= g)
                return y;
              var b = e[i];
              return y * (b == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Qa(t, n, e, i) {
          for (var o = -1, l = t.length, h = e.length, g = -1, y = n.length, b = bt(l - h, 0), A = S(y + b), T = !i; ++g < y; )
            A[g] = n[g];
          for (; ++o < h; )
            (T || o < l) && (A[e[o]] = t[o]);
          for (; b--; )
            A[g++] = t[o++];
          return A;
        }
        function Va(t, n, e, i) {
          for (var o = -1, l = t.length, h = -1, g = e.length, y = -1, b = n.length, A = bt(l - g, 0), T = S(A + b), L = !i; ++o < A; )
            T[o] = t[o];
          for (var D = o; ++y < b; )
            T[D + y] = n[y];
          for (; ++h < g; )
            (L || o < l) && (T[D + e[h]] = t[o++]);
          return T;
        }
        function $t(t, n) {
          var e = -1, i = t.length;
          for (n || (n = S(i)); ++e < i; )
            n[e] = t[e];
          return n;
        }
        function Mn(t, n, e, i) {
          var o = !e;
          e || (e = {});
          for (var l = -1, h = n.length; ++l < h; ) {
            var g = n[l], y = i ? i(e[g], t[g], g, e, t) : r;
            y === r && (y = t[g]), o ? Tn(e, g, y) : Fe(e, g, y);
          }
          return e;
        }
        function Rc(t, n) {
          return Mn(t, zi(t), n);
        }
        function Lc(t, n) {
          return Mn(t, co(t), n);
        }
        function vr(t, n) {
          return function(e, i) {
            var o = K(e) ? Nl : nc, l = n ? n() : {};
            return o(e, t, W(i, 2), l);
          };
        }
        function pe(t) {
          return Q(function(n, e) {
            var i = -1, o = e.length, l = o > 1 ? e[o - 1] : r, h = o > 2 ? e[2] : r;
            for (l = t.length > 3 && typeof l == "function" ? (o--, l) : r, h && kt(e[0], e[1], h) && (l = o < 3 ? r : l, o = 1), n = at(n); ++i < o; ) {
              var g = e[i];
              g && t(n, g, i, l);
            }
            return n;
          });
        }
        function ja(t, n) {
          return function(e, i) {
            if (e == null)
              return e;
            if (!qt(e))
              return t(e, i);
            for (var o = e.length, l = n ? o : -1, h = at(e); (n ? l-- : ++l < o) && i(h[l], l, h) !== !1; )
              ;
            return e;
          };
        }
        function to(t) {
          return function(n, e, i) {
            for (var o = -1, l = at(n), h = i(n), g = h.length; g--; ) {
              var y = h[t ? g : ++o];
              if (e(l[y], y, l) === !1)
                break;
            }
            return n;
          };
        }
        function Oc(t, n, e) {
          var i = n & N, o = ke(t);
          function l() {
            var h = this && this !== It && this instanceof l ? o : t;
            return h.apply(i ? e : this, arguments);
          }
          return l;
        }
        function no(t) {
          return function(n) {
            n = rt(n);
            var e = ae(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), o = e ? Gn(e, 1).join("") : n.slice(1);
            return i[t]() + o;
          };
        }
        function ge(t) {
          return function(n) {
            return oi(tu(jo(n).replace(Sl, "")), t, "");
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
        function kc(t, n, e) {
          var i = ke(t);
          function o() {
            for (var l = arguments.length, h = S(l), g = l, y = de(o); g--; )
              h[g] = arguments[g];
            var b = l < 3 && h[0] !== y && h[l - 1] !== y ? [] : Bn(h, y);
            if (l -= b.length, l < e)
              return ao(
                t,
                n,
                mr,
                o.placeholder,
                r,
                h,
                b,
                r,
                r,
                e - l
              );
            var A = this && this !== It && this instanceof o ? i : t;
            return Zt(A, this, h);
          }
          return o;
        }
        function eo(t) {
          return function(n, e, i) {
            var o = at(n);
            if (!qt(n)) {
              var l = W(e, 3);
              n = At(n), e = function(g) {
                return l(o[g], g, o);
              };
            }
            var h = t(n, e, i);
            return h > -1 ? o[l ? n[h] : h] : r;
          };
        }
        function ro(t) {
          return Fn(function(n) {
            var e = n.length, i = e, o = an.prototype.thru;
            for (t && n.reverse(); i--; ) {
              var l = n[i];
              if (typeof l != "function")
                throw new sn(d);
              if (o && !h && Cr(l) == "wrapper")
                var h = new an([], !0);
            }
            for (i = h ? i : e; ++i < e; ) {
              l = n[i];
              var g = Cr(l), y = g == "wrapper" ? $i(l) : r;
              y && Hi(y[0]) && y[1] == (St | J | _t | tn) && !y[4].length && y[9] == 1 ? h = h[Cr(y[0])].apply(h, y[3]) : h = l.length == 1 && Hi(l) ? h[g]() : h.thru(l);
            }
            return function() {
              var b = arguments, A = b[0];
              if (h && b.length == 1 && K(A))
                return h.plant(A).value();
              for (var T = 0, L = e ? n[T].apply(this, b) : A; ++T < e; )
                L = n[T].call(this, L);
              return L;
            };
          });
        }
        function mr(t, n, e, i, o, l, h, g, y, b) {
          var A = n & St, T = n & N, L = n & q, D = n & (J | it), B = n & Ht, X = L ? r : ke(t);
          function U() {
            for (var V = arguments.length, tt = S(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = de(U), Vt = Kl(tt, Dt);
            if (i && (tt = Qa(tt, i, o, D)), l && (tt = Va(tt, l, h, D)), V -= Vt, D && V < b) {
              var wt = Bn(tt, Dt);
              return ao(
                t,
                n,
                mr,
                U.placeholder,
                e,
                tt,
                wt,
                g,
                y,
                b - V
              );
            }
            var dn = T ? e : this, On = L ? dn[t] : t;
            return V = tt.length, g ? tt = nh(tt, g) : B && V > 1 && tt.reverse(), A && y < V && (tt.length = y), this && this !== It && this instanceof U && (On = X || ke(On)), On.apply(dn, tt);
          }
          return U;
        }
        function io(t, n) {
          return function(e, i) {
            return lc(e, t, n(i), {});
          };
        }
        function yr(t, n) {
          return function(e, i) {
            var o;
            if (e === r && i === r)
              return n;
            if (e !== r && (o = e), i !== r) {
              if (o === r)
                return i;
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = za(e), i = za(i)), o = t(e, i);
            }
            return o;
          };
        }
        function Ni(t) {
          return Fn(function(n) {
            return n = gt(n, Jt(W())), Q(function(e) {
              var i = this;
              return t(n, function(o) {
                return Zt(o, i, e);
              });
            });
          });
        }
        function wr(t, n) {
          n = n === r ? " " : Yt(n);
          var e = n.length;
          if (e < 2)
            return e ? Fi(n, t) : n;
          var i = Fi(n, ar(t / oe(n)));
          return ae(n) ? Gn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function Dc(t, n, e, i) {
          var o = n & N, l = ke(t);
          function h() {
            for (var g = -1, y = arguments.length, b = -1, A = i.length, T = S(A + y), L = this && this !== It && this instanceof h ? l : t; ++b < A; )
              T[b] = i[b];
            for (; y--; )
              T[b++] = arguments[++g];
            return Zt(L, o ? e : this, T);
          }
          return h;
        }
        function so(t) {
          return function(n, e, i) {
            return i && typeof i != "number" && kt(n, e, i) && (e = i = r), n = Ln(n), e === r ? (e = n, n = 0) : e = Ln(e), i = i === r ? n < e ? 1 : -1 : Ln(i), Mc(n, e, i, t);
          };
        }
        function Mr(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = fn(n), e = fn(e)), t(n, e);
          };
        }
        function ao(t, n, e, i, o, l, h, g, y, b) {
          var A = n & J, T = A ? h : r, L = A ? r : h, D = A ? l : r, B = A ? r : l;
          n |= A ? _t : Wt, n &= ~(A ? Wt : _t), n & Z || (n &= ~(N | q));
          var X = [
            t,
            n,
            o,
            D,
            T,
            B,
            L,
            g,
            y,
            b
          ], U = e.apply(r, X);
          return Hi(t) && yo(U, X), U.placeholder = i, wo(U, t, n);
        }
        function Wi(t) {
          var n = xt[t];
          return function(e, i) {
            if (e = fn(e), i = i == null ? 0 : Pt(Y(i), 292), i && ya(e)) {
              var o = (rt(e) + "e").split("e"), l = n(o[0] + "e" + (+o[1] + i));
              return o = (rt(l) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
            }
            return n(e);
          };
        }
        var Nc = fe && 1 / Xe(new fe([, -0]))[1] == xn ? function(t) {
          return new fe(t);
        } : as;
        function oo(t) {
          return function(n) {
            var e = Ft(n);
            return e == vt ? gi(n) : e == pt ? jl(n) : Hl(n, t(n));
          };
        }
        function Pn(t, n, e, i, o, l, h, g) {
          var y = n & q;
          if (!y && typeof t != "function")
            throw new sn(d);
          var b = i ? i.length : 0;
          if (b || (n &= ~(_t | Wt), i = o = r), h = h === r ? h : bt(Y(h), 0), g = g === r ? g : Y(g), b -= o ? o.length : 0, n & Wt) {
            var A = i, T = o;
            i = o = r;
          }
          var L = y ? r : $i(t), D = [
            t,
            n,
            e,
            i,
            o,
            A,
            T,
            l,
            h,
            g
          ];
          if (L && Vc(D, L), t = D[0], n = D[1], e = D[2], i = D[3], o = D[4], g = D[9] = D[9] === r ? y ? 0 : t.length : bt(D[9] - b, 0), !g && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var B = Oc(t, n, e);
          else n == J || n == it ? B = kc(t, n, g) : (n == _t || n == (N | _t)) && !o.length ? B = Dc(t, n, e, i) : B = mr.apply(r, D);
          var X = L ? $a : yo;
          return wo(X(B, D), t, n);
        }
        function uo(t, n, e, i) {
          return t === r || gn(t, le[e]) && !st.call(i, e) ? n : t;
        }
        function lo(t, n, e, i, o, l) {
          return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, lo, l), l.delete(n)), t;
        }
        function Wc(t) {
          return We(t) ? r : t;
        }
        function fo(t, n, e, i, o, l) {
          var h = e & E, g = t.length, y = n.length;
          if (g != y && !(h && y > g))
            return !1;
          var b = l.get(t), A = l.get(n);
          if (b && A)
            return b == n && A == t;
          var T = -1, L = !0, D = e & P ? new Qn() : r;
          for (l.set(t, n), l.set(n, t); ++T < g; ) {
            var B = t[T], X = n[T];
            if (i)
              var U = h ? i(X, B, T, n, t, l) : i(B, X, T, t, n, l);
            if (U !== r) {
              if (U)
                continue;
              L = !1;
              break;
            }
            if (D) {
              if (!ui(n, function(V, tt) {
                if (!xe(D, tt) && (B === V || o(B, V, e, i, l)))
                  return D.push(tt);
              })) {
                L = !1;
                break;
              }
            } else if (!(B === X || o(B, X, e, i, l))) {
              L = !1;
              break;
            }
          }
          return l.delete(t), l.delete(n), L;
        }
        function Bc(t, n, e, i, o, l, h) {
          switch (e) {
            case re:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case Se:
              return !(t.byteLength != n.byteLength || !l(new er(t), new er(n)));
            case lt:
            case Mt:
            case Lt:
              return gn(+t, +n);
            case Rt:
              return t.name == n.name && t.message == n.message;
            case nn:
            case yn:
              return t == n + "";
            case vt:
              var g = gi;
            case pt:
              var y = i & E;
              if (g || (g = Xe), t.size != n.size && !y)
                return !1;
              var b = h.get(t);
              if (b)
                return b == n;
              i |= P, h.set(t, n);
              var A = fo(g(t), g(n), i, o, l, h);
              return h.delete(t), A;
            case Ge:
              if (Pe)
                return Pe.call(t) == Pe.call(n);
          }
          return !1;
        }
        function Uc(t, n, e, i, o, l) {
          var h = e & E, g = Bi(t), y = g.length, b = Bi(n), A = b.length;
          if (y != A && !h)
            return !1;
          for (var T = y; T--; ) {
            var L = g[T];
            if (!(h ? L in n : st.call(n, L)))
              return !1;
          }
          var D = l.get(t), B = l.get(n);
          if (D && B)
            return D == n && B == t;
          var X = !0;
          l.set(t, n), l.set(n, t);
          for (var U = h; ++T < y; ) {
            L = g[T];
            var V = t[L], tt = n[L];
            if (i)
              var Qt = h ? i(tt, V, L, n, t, l) : i(V, tt, L, t, n, l);
            if (!(Qt === r ? V === tt || o(V, tt, e, i, l) : Qt)) {
              X = !1;
              break;
            }
            U || (U = L == "constructor");
          }
          if (X && !U) {
            var Dt = t.constructor, Vt = n.constructor;
            Dt != Vt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Vt == "function" && Vt instanceof Vt) && (X = !1);
          }
          return l.delete(t), l.delete(n), X;
        }
        function Fn(t) {
          return Zi(vo(t, r, Ao), t + "");
        }
        function Bi(t) {
          return Fa(t, At, zi);
        }
        function Ui(t) {
          return Fa(t, zt, co);
        }
        var $i = ur ? function(t) {
          return ur.get(t);
        } : as;
        function Cr(t) {
          for (var n = t.name + "", e = ce[n], i = st.call(ce, n) ? e.length : 0; i--; ) {
            var o = e[i], l = o.func;
            if (l == null || l == t)
              return o.name;
          }
          return n;
        }
        function de(t) {
          var n = st.call(u, "placeholder") ? u : t;
          return n.placeholder;
        }
        function W() {
          var t = u.iteratee || is;
          return t = t === is ? La : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Sr(t, n) {
          var e = t.__data__;
          return Jc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function qi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var i = n[e], o = t[i];
            n[e] = [i, o, go(o)];
          }
          return n;
        }
        function te(t, n) {
          var e = Xl(t, n);
          return Ra(e) ? e : r;
        }
        function $c(t) {
          var n = st.call(t, Yn), e = t[Yn];
          try {
            t[Yn] = r;
            var i = !0;
          } catch {
          }
          var o = tr.call(t);
          return i && (n ? t[Yn] = e : delete t[Yn]), o;
        }
        var zi = _i ? function(t) {
          return t == null ? [] : (t = at(t), Nn(_i(t), function(n) {
            return va.call(t, n);
          }));
        } : os, co = _i ? function(t) {
          for (var n = []; t; )
            Wn(n, zi(t)), t = rr(t);
          return n;
        } : os, Ft = Ot;
        (vi && Ft(new vi(new ArrayBuffer(1))) != re || Ae && Ft(new Ae()) != vt || mi && Ft(mi.resolve()) != Ut || fe && Ft(new fe()) != pt || Ie && Ft(new Ie()) != Ce) && (Ft = function(t) {
          var n = Ot(t), e = n == Ct ? t.constructor : r, i = e ? ne(e) : "";
          if (i)
            switch (i) {
              case Sf:
                return re;
              case xf:
                return vt;
              case bf:
                return Ut;
              case Af:
                return pt;
              case If:
                return Ce;
            }
          return n;
        });
        function qc(t, n, e) {
          for (var i = -1, o = e.length; ++i < o; ) {
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
        function zc(t) {
          var n = t.match(Ju);
          return n ? n[1].split(Yu) : [];
        }
        function ho(t, n, e) {
          n = zn(n, t);
          for (var i = -1, o = n.length, l = !1; ++i < o; ) {
            var h = Cn(n[i]);
            if (!(l = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return l || ++i != o ? l : (o = t == null ? 0 : t.length, !!o && Fr(o) && En(h, o) && (K(t) || ee(t)));
        }
        function Gc(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function po(t) {
          return typeof t.constructor == "function" && !De(t) ? he(rr(t)) : {};
        }
        function Hc(t, n, e) {
          var i = t.constructor;
          switch (n) {
            case Se:
              return Di(t);
            case lt:
            case Mt:
              return new i(+t);
            case re:
              return Tc(t, e);
            case qr:
            case zr:
            case Gr:
            case Hr:
            case Kr:
            case Zr:
            case Jr:
            case Yr:
            case Xr:
              return Ya(t, e);
            case vt:
              return new i();
            case Lt:
            case yn:
              return new i(t);
            case nn:
              return Pc(t);
            case pt:
              return new i();
            case Ge:
              return Fc(t);
          }
        }
        function Kc(t, n) {
          var e = n.length;
          if (!e)
            return t;
          var i = e - 1;
          return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Zu, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Zc(t) {
          return K(t) || ee(t) || !!(ma && t && t[ma]);
        }
        function En(t, n) {
          var e = typeof t;
          return n = n ?? vn, !!n && (e == "number" || e != "symbol" && il.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function kt(t, n, e) {
          if (!dt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && En(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
        }
        function Gi(t, n) {
          if (K(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : zu.test(t) || !qu.test(t) || n != null && t in at(n);
        }
        function Jc(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Hi(t) {
          var n = Cr(t), e = u[n];
          if (typeof e != "function" || !(n in j.prototype))
            return !1;
          if (t === e)
            return !0;
          var i = $i(e);
          return !!i && t === i[0];
        }
        function Yc(t) {
          return !!ga && ga in t;
        }
        var Xc = Ve ? Rn : us;
        function De(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
          return t === e;
        }
        function go(t) {
          return t === t && !dt(t);
        }
        function _o(t, n) {
          return function(e) {
            return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
          };
        }
        function Qc(t) {
          var n = Tr(t, function(i) {
            return e.size === C && e.clear(), i;
          }), e = n.cache;
          return n;
        }
        function Vc(t, n) {
          var e = t[1], i = n[1], o = e | i, l = o < (N | q | St), h = i == St && e == J || i == St && e == tn && t[7].length <= n[8] || i == (St | tn) && n[7].length <= n[8] && e == J;
          if (!(l || h))
            return t;
          i & N && (t[2] = n[2], o |= e & N ? 0 : Z);
          var g = n[3];
          if (g) {
            var y = t[3];
            t[3] = y ? Qa(y, g, n[4]) : g, t[4] = y ? Bn(t[3], I) : n[4];
          }
          return g = n[5], g && (y = t[5], t[5] = y ? Va(y, g, n[6]) : g, t[6] = y ? Bn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), i & St && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = o, t;
        }
        function jc(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function th(t) {
          return tr.call(t);
        }
        function vo(t, n, e) {
          return n = bt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, o = -1, l = bt(i.length - n, 0), h = S(l); ++o < l; )
              h[o] = i[n + o];
            o = -1;
            for (var g = S(n + 1); ++o < n; )
              g[o] = i[o];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function mo(t, n) {
          return n.length < 2 ? t : jn(t, un(n, 0, -1));
        }
        function nh(t, n) {
          for (var e = t.length, i = Pt(n.length, e), o = $t(t); i--; ) {
            var l = n[i];
            t[i] = En(l, e) ? o[l] : r;
          }
          return t;
        }
        function Ki(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var yo = Mo($a), Ne = _f || function(t, n) {
          return It.setTimeout(t, n);
        }, Zi = Mo(xc);
        function wo(t, n, e) {
          var i = n + "";
          return Zi(t, Kc(i, eh(zc(i), e)));
        }
        function Mo(t) {
          var n = 0, e = 0;
          return function() {
            var i = wf(), o = Ur - (i - e);
            if (e = i, o > 0) {
              if (++n >= $e)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function xr(t, n) {
          var e = -1, i = t.length, o = i - 1;
          for (n = n === r ? i : n; ++e < n; ) {
            var l = Pi(e, o), h = t[l];
            t[l] = t[e], t[e] = h;
          }
          return t.length = n, t;
        }
        var Co = Qc(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Gu, function(e, i, o, l) {
            n.push(o ? l.replace(Vu, "$1") : i || e);
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
        function eh(t, n) {
          return rn(ct, function(e) {
            var i = "_." + e[0];
            n & e[1] && !Je(t, i) && t.push(i);
          }), t.sort();
        }
        function So(t) {
          if (t instanceof j)
            return t.clone();
          var n = new an(t.__wrapped__, t.__chain__);
          return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function rh(t, n, e) {
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = bt(Y(n), 0);
          var i = t == null ? 0 : t.length;
          if (!i || n < 1)
            return [];
          for (var o = 0, l = 0, h = S(ar(i / n)); o < i; )
            h[l++] = un(t, o, o += n);
          return h;
        }
        function ih(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = 0, o = []; ++n < e; ) {
            var l = t[n];
            l && (o[i++] = l);
          }
          return o;
        }
        function sh() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = S(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Wn(K(e) ? $t(e) : [e], Tt(n, 1));
        }
        var ah = Q(function(t, n) {
          return yt(t) ? Ee(t, Tt(n, 1, yt, !0)) : [];
        }), oh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Ee(t, Tt(n, 1, yt, !0), W(e, 2)) : [];
        }), uh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Ee(t, Tt(n, 1, yt, !0), r, e) : [];
        });
        function lh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), un(t, n < 0 ? 0 : n, i)) : [];
        }
        function fh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function ch(t, n) {
          return t && t.length ? _r(t, W(n, 3), !0, !0) : [];
        }
        function hh(t, n) {
          return t && t.length ? _r(t, W(n, 3), !0) : [];
        }
        function ph(t, n, e, i) {
          var o = t == null ? 0 : t.length;
          return o ? (e && typeof e != "number" && kt(t, n, e) && (e = 0, i = o), sc(t, n, e, i)) : [];
        }
        function xo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = bt(i + o, 0)), Ye(t, W(n, 3), o);
        }
        function bo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i - 1;
          return e !== r && (o = Y(e), o = e < 0 ? bt(i + o, 0) : Pt(o, i - 1)), Ye(t, W(n, 3), o, !0);
        }
        function Ao(t) {
          var n = t == null ? 0 : t.length;
          return n ? Tt(t, 1) : [];
        }
        function gh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Tt(t, xn) : [];
        }
        function dh(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : Y(n), Tt(t, n)) : [];
        }
        function _h(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
            var o = t[n];
            i[o[0]] = o[1];
          }
          return i;
        }
        function Io(t) {
          return t && t.length ? t[0] : r;
        }
        function vh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = bt(i + o, 0)), se(t, n, o);
        }
        function mh(t) {
          var n = t == null ? 0 : t.length;
          return n ? un(t, 0, -1) : [];
        }
        var yh = Q(function(t) {
          var n = gt(t, Oi);
          return n.length && n[0] === t[0] ? xi(n) : [];
        }), wh = Q(function(t) {
          var n = ln(t), e = gt(t, Oi);
          return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? xi(e, W(n, 2)) : [];
        }), Mh = Q(function(t) {
          var n = ln(t), e = gt(t, Oi);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? xi(e, r, n) : [];
        });
        function Ch(t, n) {
          return t == null ? "" : mf.call(t, n);
        }
        function ln(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function Sh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i;
          return e !== r && (o = Y(e), o = o < 0 ? bt(i + o, 0) : Pt(o, i - 1)), n === n ? nf(t, n, o) : Ye(t, aa, o, !0);
        }
        function xh(t, n) {
          return t && t.length ? Na(t, Y(n)) : r;
        }
        var bh = Q(To);
        function To(t, n) {
          return t && t.length && n && n.length ? Ti(t, n) : t;
        }
        function Ah(t, n, e) {
          return t && t.length && n && n.length ? Ti(t, n, W(e, 2)) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Ti(t, n, r, e) : t;
        }
        var Th = Fn(function(t, n) {
          var e = t == null ? 0 : t.length, i = wi(t, n);
          return Ua(t, gt(n, function(o) {
            return En(o, e) ? +o : o;
          }).sort(Xa)), i;
        });
        function Ph(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var i = -1, o = [], l = t.length;
          for (n = W(n, 3); ++i < l; ) {
            var h = t[i];
            n(h, i, t) && (e.push(h), o.push(i));
          }
          return Ua(t, o), e;
        }
        function Ji(t) {
          return t == null ? t : Cf.call(t);
        }
        function Fh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && kt(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Y(n), e = e === r ? i : Y(e)), un(t, n, e)) : [];
        }
        function Eh(t, n) {
          return dr(t, n);
        }
        function Rh(t, n, e) {
          return Ei(t, n, W(e, 2));
        }
        function Lh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = dr(t, n);
            if (i < e && gn(t[i], n))
              return i;
          }
          return -1;
        }
        function Oh(t, n) {
          return dr(t, n, !0);
        }
        function kh(t, n, e) {
          return Ei(t, n, W(e, 2), !0);
        }
        function Dh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = dr(t, n, !0) - 1;
            if (gn(t[i], n))
              return i;
          }
          return -1;
        }
        function Nh(t) {
          return t && t.length ? qa(t) : [];
        }
        function Wh(t, n) {
          return t && t.length ? qa(t, W(n, 2)) : [];
        }
        function Bh(t) {
          var n = t == null ? 0 : t.length;
          return n ? un(t, 1, n) : [];
        }
        function Uh(t, n, e) {
          return t && t.length ? (n = e || n === r ? 1 : Y(n), un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function $h(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, un(t, n < 0 ? 0 : n, i)) : [];
        }
        function qh(t, n) {
          return t && t.length ? _r(t, W(n, 3), !1, !0) : [];
        }
        function zh(t, n) {
          return t && t.length ? _r(t, W(n, 3)) : [];
        }
        var Gh = Q(function(t) {
          return qn(Tt(t, 1, yt, !0));
        }), Hh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), qn(Tt(t, 1, yt, !0), W(n, 2));
        }), Kh = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, qn(Tt(t, 1, yt, !0), r, n);
        });
        function Zh(t) {
          return t && t.length ? qn(t) : [];
        }
        function Jh(t, n) {
          return t && t.length ? qn(t, W(n, 2)) : [];
        }
        function Yh(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? qn(t, r, n) : [];
        }
        function Yi(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = Nn(t, function(e) {
            if (yt(e))
              return n = bt(e.length, n), !0;
          }), hi(n, function(e) {
            return gt(t, li(e));
          });
        }
        function Po(t, n) {
          if (!(t && t.length))
            return [];
          var e = Yi(t);
          return n == null ? e : gt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var Xh = Q(function(t, n) {
          return yt(t) ? Ee(t, n) : [];
        }), Qh = Q(function(t) {
          return Li(Nn(t, yt));
        }), Vh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), Li(Nn(t, yt), W(n, 2));
        }), jh = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, Li(Nn(t, yt), r, n);
        }), tp = Q(Yi);
        function np(t, n) {
          return Ka(t || [], n || [], Fe);
        }
        function ep(t, n) {
          return Ka(t || [], n || [], Oe);
        }
        var rp = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Po(t, e);
        });
        function Fo(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function ip(t, n) {
          return n(t), t;
        }
        function br(t, n) {
          return n(t);
        }
        var sp = Fn(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, o = function(l) {
            return wi(l, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !En(e) ? this.thru(o) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: br,
            args: [o],
            thisArg: r
          }), new an(i, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(r), l;
          }));
        });
        function ap() {
          return Fo(this);
        }
        function op() {
          return new an(this.value(), this.__chain__);
        }
        function up() {
          this.__values__ === r && (this.__values__ = Go(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function lp() {
          return this;
        }
        function fp(t) {
          for (var n, e = this; e instanceof fr; ) {
            var i = So(e);
            i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
            var o = i;
            e = e.__wrapped__;
          }
          return o.__wrapped__ = t, n;
        }
        function cp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: br,
              args: [Ji],
              thisArg: r
            }), new an(n, this.__chain__);
          }
          return this.thru(Ji);
        }
        function hp() {
          return Ha(this.__wrapped__, this.__actions__);
        }
        var pp = vr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : Tn(t, e, 1);
        });
        function gp(t, n, e) {
          var i = K(t) ? ia : ic;
          return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
        }
        function dp(t, n) {
          var e = K(t) ? Nn : Ta;
          return e(t, W(n, 3));
        }
        var _p = eo(xo), vp = eo(bo);
        function mp(t, n) {
          return Tt(Ar(t, n), 1);
        }
        function yp(t, n) {
          return Tt(Ar(t, n), xn);
        }
        function wp(t, n, e) {
          return e = e === r ? 1 : Y(e), Tt(Ar(t, n), e);
        }
        function Eo(t, n) {
          var e = K(t) ? rn : $n;
          return e(t, W(n, 3));
        }
        function Ro(t, n) {
          var e = K(t) ? Wl : Ia;
          return e(t, W(n, 3));
        }
        var Mp = vr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : Tn(t, e, [n]);
        });
        function Cp(t, n, e, i) {
          t = qt(t) ? t : ve(t), e = e && !i ? Y(e) : 0;
          var o = t.length;
          return e < 0 && (e = bt(o + e, 0)), Er(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && se(t, n, e) > -1;
        }
        var Sp = Q(function(t, n, e) {
          var i = -1, o = typeof n == "function", l = qt(t) ? S(t.length) : [];
          return $n(t, function(h) {
            l[++i] = o ? Zt(n, h, e) : Re(h, n, e);
          }), l;
        }), xp = vr(function(t, n, e) {
          Tn(t, e, n);
        });
        function Ar(t, n) {
          var e = K(t) ? gt : Oa;
          return e(t, W(n, 3));
        }
        function bp(t, n, e, i) {
          return t == null ? [] : (K(n) || (n = n == null ? [] : [n]), e = i ? r : e, K(e) || (e = e == null ? [] : [e]), Wa(t, n, e));
        }
        var Ap = vr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Ip(t, n, e) {
          var i = K(t) ? oi : ua, o = arguments.length < 3;
          return i(t, W(n, 4), e, o, $n);
        }
        function Tp(t, n, e) {
          var i = K(t) ? Bl : ua, o = arguments.length < 3;
          return i(t, W(n, 4), e, o, Ia);
        }
        function Pp(t, n) {
          var e = K(t) ? Nn : Ta;
          return e(t, Pr(W(n, 3)));
        }
        function Fp(t) {
          var n = K(t) ? Sa : Cc;
          return n(t);
        }
        function Ep(t, n, e) {
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var i = K(t) ? jf : Sc;
          return i(t, n);
        }
        function Rp(t) {
          var n = K(t) ? tc : bc;
          return n(t);
        }
        function Lp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Er(t) ? oe(t) : t.length;
          var n = Ft(t);
          return n == vt || n == pt ? t.size : Ai(t).length;
        }
        function Op(t, n, e) {
          var i = K(t) ? ui : Ac;
          return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
        }
        var kp = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && kt(t, n[0], n[1]) ? n = [] : e > 2 && kt(n[0], n[1], n[2]) && (n = [n[0]]), Wa(t, Tt(n, 1), []);
        }), Ir = df || function() {
          return It.Date.now();
        };
        function Dp(t, n) {
          if (typeof n != "function")
            throw new sn(d);
          return t = Y(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function Lo(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, St, r, r, r, r, n);
        }
        function Oo(t, n) {
          var e;
          if (typeof n != "function")
            throw new sn(d);
          return t = Y(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var Xi = Q(function(t, n, e) {
          var i = N;
          if (e.length) {
            var o = Bn(e, de(Xi));
            i |= _t;
          }
          return Pn(t, i, n, e, o);
        }), ko = Q(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var o = Bn(e, de(ko));
            i |= _t;
          }
          return Pn(n, i, t, e, o);
        });
        function Do(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, J, r, r, r, r, r, n);
          return i.placeholder = Do.placeholder, i;
        }
        function No(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, it, r, r, r, r, r, n);
          return i.placeholder = No.placeholder, i;
        }
        function Wo(t, n, e) {
          var i, o, l, h, g, y, b = 0, A = !1, T = !1, L = !0;
          if (typeof t != "function")
            throw new sn(d);
          n = fn(n) || 0, dt(e) && (A = !!e.leading, T = "maxWait" in e, l = T ? bt(fn(e.maxWait) || 0, n) : l, L = "trailing" in e ? !!e.trailing : L);
          function D(wt) {
            var dn = i, On = o;
            return i = o = r, b = wt, h = t.apply(On, dn), h;
          }
          function B(wt) {
            return b = wt, g = Ne(V, n), A ? D(wt) : h;
          }
          function X(wt) {
            var dn = wt - y, On = wt - b, ru = n - dn;
            return T ? Pt(ru, l - On) : ru;
          }
          function U(wt) {
            var dn = wt - y, On = wt - b;
            return y === r || dn >= n || dn < 0 || T && On >= l;
          }
          function V() {
            var wt = Ir();
            if (U(wt))
              return tt(wt);
            g = Ne(V, X(wt));
          }
          function tt(wt) {
            return g = r, L && i ? D(wt) : (i = o = r, h);
          }
          function Qt() {
            g !== r && Za(g), b = 0, i = y = o = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Ir());
          }
          function Vt() {
            var wt = Ir(), dn = U(wt);
            if (i = arguments, o = this, y = wt, dn) {
              if (g === r)
                return B(y);
              if (T)
                return Za(g), g = Ne(V, n), D(y);
            }
            return g === r && (g = Ne(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Np = Q(function(t, n) {
          return Aa(t, 1, n);
        }), Wp = Q(function(t, n, e) {
          return Aa(t, fn(n) || 0, e);
        });
        function Bp(t) {
          return Pn(t, Ht);
        }
        function Tr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new sn(d);
          var e = function() {
            var i = arguments, o = n ? n.apply(this, i) : i[0], l = e.cache;
            if (l.has(o))
              return l.get(o);
            var h = t.apply(this, i);
            return e.cache = l.set(o, h) || l, h;
          };
          return e.cache = new (Tr.Cache || In)(), e;
        }
        Tr.Cache = In;
        function Pr(t) {
          if (typeof t != "function")
            throw new sn(d);
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
        function Up(t) {
          return Oo(2, t);
        }
        var $p = Ic(function(t, n) {
          n = n.length == 1 && K(n[0]) ? gt(n[0], Jt(W())) : gt(Tt(n, 1), Jt(W()));
          var e = n.length;
          return Q(function(i) {
            for (var o = -1, l = Pt(i.length, e); ++o < l; )
              i[o] = n[o].call(this, i[o]);
            return Zt(t, this, i);
          });
        }), Qi = Q(function(t, n) {
          var e = Bn(n, de(Qi));
          return Pn(t, _t, r, n, e);
        }), Bo = Q(function(t, n) {
          var e = Bn(n, de(Bo));
          return Pn(t, Wt, r, n, e);
        }), qp = Fn(function(t, n) {
          return Pn(t, tn, r, r, r, n);
        });
        function zp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n === r ? n : Y(n), Q(t, n);
        }
        function Gp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n == null ? 0 : bt(Y(n), 0), Q(function(e) {
            var i = e[n], o = Gn(e, 0, n);
            return i && Wn(o, i), Zt(t, this, o);
          });
        }
        function Hp(t, n, e) {
          var i = !0, o = !0;
          if (typeof t != "function")
            throw new sn(d);
          return dt(e) && (i = "leading" in e ? !!e.leading : i, o = "trailing" in e ? !!e.trailing : o), Wo(t, n, {
            leading: i,
            maxWait: n,
            trailing: o
          });
        }
        function Kp(t) {
          return Lo(t, 1);
        }
        function Zp(t, n) {
          return Qi(ki(n), t);
        }
        function Jp() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return K(t) ? t : [t];
        }
        function Yp(t) {
          return on(t, R);
        }
        function Xp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, R, n);
        }
        function Qp(t) {
          return on(t, v | R);
        }
        function Vp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, v | R, n);
        }
        function jp(t, n) {
          return n == null || ba(t, n, At(n));
        }
        function gn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var tg = Mr(Si), ng = Mr(function(t, n) {
          return t >= n;
        }), ee = Ea(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ea : function(t) {
          return mt(t) && st.call(t, "callee") && !va.call(t, "callee");
        }, K = S.isArray, eg = Vs ? Jt(Vs) : fc;
        function qt(t) {
          return t != null && Fr(t.length) && !Rn(t);
        }
        function yt(t) {
          return mt(t) && qt(t);
        }
        function rg(t) {
          return t === !0 || t === !1 || mt(t) && Ot(t) == lt;
        }
        var Hn = vf || us, ig = js ? Jt(js) : cc;
        function sg(t) {
          return mt(t) && t.nodeType === 1 && !We(t);
        }
        function ag(t) {
          if (t == null)
            return !0;
          if (qt(t) && (K(t) || typeof t == "string" || typeof t.splice == "function" || Hn(t) || _e(t) || ee(t)))
            return !t.length;
          var n = Ft(t);
          if (n == vt || n == pt)
            return !t.size;
          if (De(t))
            return !Ai(t).length;
          for (var e in t)
            if (st.call(t, e))
              return !1;
          return !0;
        }
        function og(t, n) {
          return Le(t, n);
        }
        function ug(t, n, e) {
          e = typeof e == "function" ? e : r;
          var i = e ? e(t, n) : r;
          return i === r ? Le(t, n, r, e) : !!i;
        }
        function Vi(t) {
          if (!mt(t))
            return !1;
          var n = Ot(t);
          return n == Rt || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
        }
        function lg(t) {
          return typeof t == "number" && ya(t);
        }
        function Rn(t) {
          if (!dt(t))
            return !1;
          var n = Ot(t);
          return n == Bt || n == mn || n == ot || n == cn;
        }
        function Uo(t) {
          return typeof t == "number" && t == Y(t);
        }
        function Fr(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vn;
        }
        function dt(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function mt(t) {
          return t != null && typeof t == "object";
        }
        var $o = ta ? Jt(ta) : pc;
        function fg(t, n) {
          return t === n || bi(t, n, qi(n));
        }
        function cg(t, n, e) {
          return e = typeof e == "function" ? e : r, bi(t, n, qi(n), e);
        }
        function hg(t) {
          return qo(t) && t != +t;
        }
        function pg(t) {
          if (Xc(t))
            throw new H(p);
          return Ra(t);
        }
        function gg(t) {
          return t === null;
        }
        function dg(t) {
          return t == null;
        }
        function qo(t) {
          return typeof t == "number" || mt(t) && Ot(t) == Lt;
        }
        function We(t) {
          if (!mt(t) || Ot(t) != Ct)
            return !1;
          var n = rr(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && je.call(e) == cf;
        }
        var ji = na ? Jt(na) : gc;
        function _g(t) {
          return Uo(t) && t >= -vn && t <= vn;
        }
        var zo = ea ? Jt(ea) : dc;
        function Er(t) {
          return typeof t == "string" || !K(t) && mt(t) && Ot(t) == yn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && Ot(t) == Ge;
        }
        var _e = ra ? Jt(ra) : _c;
        function vg(t) {
          return t === r;
        }
        function mg(t) {
          return mt(t) && Ft(t) == Ce;
        }
        function yg(t) {
          return mt(t) && Ot(t) == Ou;
        }
        var wg = Mr(Ii), Mg = Mr(function(t, n) {
          return t <= n;
        });
        function Go(t) {
          if (!t)
            return [];
          if (qt(t))
            return Er(t) ? hn(t) : $t(t);
          if (be && t[be])
            return Vl(t[be]());
          var n = Ft(t), e = n == vt ? gi : n == pt ? Xe : ve;
          return e(t);
        }
        function Ln(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = fn(t), t === xn || t === -xn) {
            var n = t < 0 ? -1 : 1;
            return n * ze;
          }
          return t === t ? t : 0;
        }
        function Y(t) {
          var n = Ln(t), e = n % 1;
          return n === n ? e ? n - e : n : 0;
        }
        function Ho(t) {
          return t ? Vn(Y(t), 0, O) : 0;
        }
        function fn(t) {
          if (typeof t == "number")
            return t;
          if (Xt(t))
            return bn;
          if (dt(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = dt(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = la(t);
          var e = nl.test(t);
          return e || rl.test(t) ? kl(t.slice(2), e ? 2 : 8) : tl.test(t) ? bn : +t;
        }
        function Ko(t) {
          return Mn(t, zt(t));
        }
        function Cg(t) {
          return t ? Vn(Y(t), -vn, vn) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var Sg = pe(function(t, n) {
          if (De(n) || qt(n)) {
            Mn(n, At(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Fe(t, e, n[e]);
        }), Zo = pe(function(t, n) {
          Mn(n, zt(n), t);
        }), Rr = pe(function(t, n, e, i) {
          Mn(n, zt(n), t, i);
        }), xg = pe(function(t, n, e, i) {
          Mn(n, At(n), t, i);
        }), bg = Fn(wi);
        function Ag(t, n) {
          var e = he(t);
          return n == null ? e : xa(e, n);
        }
        var Ig = Q(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, o = i > 2 ? n[2] : r;
          for (o && kt(n[0], n[1], o) && (i = 1); ++e < i; )
            for (var l = n[e], h = zt(l), g = -1, y = h.length; ++g < y; ) {
              var b = h[g], A = t[b];
              (A === r || gn(A, le[b]) && !st.call(t, b)) && (t[b] = l[b]);
            }
          return t;
        }), Tg = Q(function(t) {
          return t.push(r, lo), Zt(Jo, r, t);
        });
        function Pg(t, n) {
          return sa(t, W(n, 3), wn);
        }
        function Fg(t, n) {
          return sa(t, W(n, 3), Ci);
        }
        function Eg(t, n) {
          return t == null ? t : Mi(t, W(n, 3), zt);
        }
        function Rg(t, n) {
          return t == null ? t : Pa(t, W(n, 3), zt);
        }
        function Lg(t, n) {
          return t && wn(t, W(n, 3));
        }
        function Og(t, n) {
          return t && Ci(t, W(n, 3));
        }
        function kg(t) {
          return t == null ? [] : pr(t, At(t));
        }
        function Dg(t) {
          return t == null ? [] : pr(t, zt(t));
        }
        function ts(t, n, e) {
          var i = t == null ? r : jn(t, n);
          return i === r ? e : i;
        }
        function Ng(t, n) {
          return t != null && ho(t, n, ac);
        }
        function ns(t, n) {
          return t != null && ho(t, n, oc);
        }
        var Wg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
        }, rs(Gt)), Bg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, W), Ug = Q(Re);
        function At(t) {
          return qt(t) ? Ca(t) : Ai(t);
        }
        function zt(t) {
          return qt(t) ? Ca(t, !0) : vc(t);
        }
        function $g(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(i, o, l) {
            Tn(e, n(i, o, l), i);
          }), e;
        }
        function qg(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(i, o, l) {
            Tn(e, o, n(i, o, l));
          }), e;
        }
        var zg = pe(function(t, n, e) {
          gr(t, n, e);
        }), Jo = pe(function(t, n, e, i) {
          gr(t, n, e, i);
        }), Gg = Fn(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = gt(n, function(l) {
            return l = zn(l, t), i || (i = l.length > 1), l;
          }), Mn(t, Ui(t), e), i && (e = on(e, v | F | R, Wc));
          for (var o = n.length; o--; )
            Ri(e, n[o]);
          return e;
        });
        function Hg(t, n) {
          return Yo(t, Pr(W(n)));
        }
        var Kg = Fn(function(t, n) {
          return t == null ? {} : yc(t, n);
        });
        function Yo(t, n) {
          if (t == null)
            return {};
          var e = gt(Ui(t), function(i) {
            return [i];
          });
          return n = W(n), Ba(t, e, function(i, o) {
            return n(i, o[0]);
          });
        }
        function Zg(t, n, e) {
          n = zn(n, t);
          var i = -1, o = n.length;
          for (o || (o = 1, t = r); ++i < o; ) {
            var l = t == null ? r : t[Cn(n[i])];
            l === r && (i = o, l = e), t = Rn(l) ? l.call(t) : l;
          }
          return t;
        }
        function Jg(t, n, e) {
          return t == null ? t : Oe(t, n, e);
        }
        function Yg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Oe(t, n, e, i);
        }
        var Xo = oo(At), Qo = oo(zt);
        function Xg(t, n, e) {
          var i = K(t), o = i || Hn(t) || _e(t);
          if (n = W(n, 4), e == null) {
            var l = t && t.constructor;
            o ? e = i ? new l() : [] : dt(t) ? e = Rn(l) ? he(rr(t)) : {} : e = {};
          }
          return (o ? rn : wn)(t, function(h, g, y) {
            return n(e, h, g, y);
          }), e;
        }
        function Qg(t, n) {
          return t == null ? !0 : Ri(t, n);
        }
        function Vg(t, n, e) {
          return t == null ? t : Ga(t, n, ki(e));
        }
        function jg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Ga(t, n, ki(e), i);
        }
        function ve(t) {
          return t == null ? [] : pi(t, At(t));
        }
        function td(t) {
          return t == null ? [] : pi(t, zt(t));
        }
        function nd(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Vn(fn(t), n, e);
        }
        function ed(t, n, e) {
          return n = Ln(n), e === r ? (e = n, n = 0) : e = Ln(e), t = fn(t), uc(t, n, e);
        }
        function rd(t, n, e) {
          if (e && typeof e != "boolean" && kt(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Ln(t), n === r ? (n = t, t = 0) : n = Ln(n)), t > n) {
            var i = t;
            t = n, n = i;
          }
          if (e || t % 1 || n % 1) {
            var o = wa();
            return Pt(t + o * (n - t + Ol("1e-" + ((o + "").length - 1))), n);
          }
          return Pi(t, n);
        }
        var id = ge(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? Vo(n) : n);
        });
        function Vo(t) {
          return es(rt(t).toLowerCase());
        }
        function jo(t) {
          return t = rt(t), t && t.replace(sl, Zl).replace(xl, "");
        }
        function sd(t, n, e) {
          t = rt(t), n = Yt(n);
          var i = t.length;
          e = e === r ? i : Vn(Y(e), 0, i);
          var o = e;
          return e -= n.length, e >= 0 && t.slice(e, o) == n;
        }
        function ad(t) {
          return t = rt(t), t && Bu.test(t) ? t.replace(Ps, Jl) : t;
        }
        function od(t) {
          return t = rt(t), t && Hu.test(t) ? t.replace(Qr, "\\$&") : t;
        }
        var ud = ge(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), ld = ge(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), fd = no("toLowerCase");
        function cd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? oe(t) : 0;
          if (!n || i >= n)
            return t;
          var o = (n - i) / 2;
          return wr(or(o), e) + t + wr(ar(o), e);
        }
        function hd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? oe(t) : 0;
          return n && i < n ? t + wr(n - i, e) : t;
        }
        function pd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? oe(t) : 0;
          return n && i < n ? wr(n - i, e) + t : t;
        }
        function gd(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), Mf(rt(t).replace(Vr, ""), n || 0);
        }
        function dd(t, n, e) {
          return (e ? kt(t, n, e) : n === r) ? n = 1 : n = Y(n), Fi(rt(t), n);
        }
        function _d() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var vd = ge(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function md(t, n, e) {
          return e && typeof e != "number" && kt(t, n, e) && (n = e = r), e = e === r ? O : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? Gn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var yd = ge(function(t, n, e) {
          return t + (e ? " " : "") + es(n);
        });
        function wd(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Vn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Md(t, n, e) {
          var i = u.templateSettings;
          e && kt(t, n, e) && (n = r), t = rt(t), n = Rr({}, n, i, uo);
          var o = Rr({}, n.imports, i.imports, uo), l = At(o), h = pi(o, l), g, y, b = 0, A = n.interpolate || He, T = "__p += '", L = di(
            (n.escape || He).source + "|" + A.source + "|" + (A === Fs ? ju : He).source + "|" + (n.evaluate || He).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Pl + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), T += t.slice(b, Vt).replace(al, Yl), V && (g = !0, T += `' +
__e(` + V + `) +
'`), Dt && (y = !0, T += `';
` + Dt + `;
__p += '`), tt && (T += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), b = Vt + U.length, U;
          }), T += `';
`;
          var B = st.call(n, "variable") && n.variable;
          if (!B)
            T = `with (obj) {
` + T + `
}
`;
          else if (Qu.test(B))
            throw new H(m);
          T = (y ? T.replace(ku, "") : T).replace(Du, "$1").replace(Nu, "$1;"), T = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
          var X = nu(function() {
            return et(l, D + "return " + T).apply(r, h);
          });
          if (X.source = T, Vi(X))
            throw X;
          return X;
        }
        function Cd(t) {
          return rt(t).toLowerCase();
        }
        function Sd(t) {
          return rt(t).toUpperCase();
        }
        function xd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return la(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = hn(n), l = fa(i, o), h = ca(i, o) + 1;
          return Gn(i, l, h).join("");
        }
        function bd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, pa(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = ca(i, hn(n)) + 1;
          return Gn(i, 0, o).join("");
        }
        function Ad(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(Vr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = fa(i, hn(n));
          return Gn(i, o).join("");
        }
        function Id(t, n) {
          var e = Et, i = we;
          if (dt(n)) {
            var o = "separator" in n ? n.separator : o;
            e = "length" in n ? Y(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
          }
          t = rt(t);
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
          var y = h ? Gn(h, 0, g).join("") : t.slice(0, g);
          if (o === r)
            return y + i;
          if (h && (g += y.length - g), ji(o)) {
            if (t.slice(g).search(o)) {
              var b, A = y;
              for (o.global || (o = di(o.source, rt(Es.exec(o)) + "g")), o.lastIndex = 0; b = o.exec(A); )
                var T = b.index;
              y = y.slice(0, T === r ? g : T);
            }
          } else if (t.indexOf(Yt(o), g) != g) {
            var L = y.lastIndexOf(o);
            L > -1 && (y = y.slice(0, L));
          }
          return y + i;
        }
        function Td(t) {
          return t = rt(t), t && Wu.test(t) ? t.replace(Ts, ef) : t;
        }
        var Pd = ge(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), es = no("toUpperCase");
        function tu(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? Ql(t) ? af(t) : ql(t) : t.match(n) || [];
        }
        var nu = Q(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return Vi(e) ? e : new H(e);
          }
        }), Fd = Fn(function(t, n) {
          return rn(n, function(e) {
            e = Cn(e), Tn(t, e, Xi(t[e], t));
          }), t;
        });
        function Ed(t) {
          var n = t == null ? 0 : t.length, e = W();
          return t = n ? gt(t, function(i) {
            if (typeof i[1] != "function")
              throw new sn(d);
            return [e(i[0]), i[1]];
          }) : [], Q(function(i) {
            for (var o = -1; ++o < n; ) {
              var l = t[o];
              if (Zt(l[0], this, i))
                return Zt(l[1], this, i);
            }
          });
        }
        function Rd(t) {
          return rc(on(t, v));
        }
        function rs(t) {
          return function() {
            return t;
          };
        }
        function Ld(t, n) {
          return t == null || t !== t ? n : t;
        }
        var Od = ro(), kd = ro(!0);
        function Gt(t) {
          return t;
        }
        function is(t) {
          return La(typeof t == "function" ? t : on(t, v));
        }
        function Dd(t) {
          return ka(on(t, v));
        }
        function Nd(t, n) {
          return Da(t, on(n, v));
        }
        var Wd = Q(function(t, n) {
          return function(e) {
            return Re(e, t, n);
          };
        }), Bd = Q(function(t, n) {
          return function(e) {
            return Re(t, e, n);
          };
        });
        function ss(t, n, e) {
          var i = At(n), o = pr(n, i);
          e == null && !(dt(n) && (o.length || !i.length)) && (e = n, n = t, t = this, o = pr(n, At(n)));
          var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
          return rn(o, function(g) {
            var y = n[g];
            t[g] = y, h && (t.prototype[g] = function() {
              var b = this.__chain__;
              if (l || b) {
                var A = t(this.__wrapped__), T = A.__actions__ = $t(this.__actions__);
                return T.push({ func: y, args: arguments, thisArg: t }), A.__chain__ = b, A;
              }
              return y.apply(t, Wn([this.value()], arguments));
            });
          }), t;
        }
        function Ud() {
          return It._ === this && (It._ = hf), this;
        }
        function as() {
        }
        function $d(t) {
          return t = Y(t), Q(function(n) {
            return Na(n, t);
          });
        }
        var qd = Ni(gt), zd = Ni(ia), Gd = Ni(ui);
        function eu(t) {
          return Gi(t) ? li(Cn(t)) : wc(t);
        }
        function Hd(t) {
          return function(n) {
            return t == null ? r : jn(t, n);
          };
        }
        var Kd = so(), Zd = so(!0);
        function os() {
          return [];
        }
        function us() {
          return !1;
        }
        function Jd() {
          return {};
        }
        function Yd() {
          return "";
        }
        function Xd() {
          return !0;
        }
        function Qd(t, n) {
          if (t = Y(t), t < 1 || t > vn)
            return [];
          var e = O, i = Pt(t, O);
          n = W(n), t -= O;
          for (var o = hi(i, n); ++e < t; )
            n(e);
          return o;
        }
        function Vd(t) {
          return K(t) ? gt(t, Cn) : Xt(t) ? [t] : $t(Co(rt(t)));
        }
        function jd(t) {
          var n = ++ff;
          return rt(t) + n;
        }
        var t0 = yr(function(t, n) {
          return t + n;
        }, 0), n0 = Wi("ceil"), e0 = yr(function(t, n) {
          return t / n;
        }, 1), r0 = Wi("floor");
        function i0(t) {
          return t && t.length ? hr(t, Gt, Si) : r;
        }
        function s0(t, n) {
          return t && t.length ? hr(t, W(n, 2), Si) : r;
        }
        function a0(t) {
          return oa(t, Gt);
        }
        function o0(t, n) {
          return oa(t, W(n, 2));
        }
        function u0(t) {
          return t && t.length ? hr(t, Gt, Ii) : r;
        }
        function l0(t, n) {
          return t && t.length ? hr(t, W(n, 2), Ii) : r;
        }
        var f0 = yr(function(t, n) {
          return t * n;
        }, 1), c0 = Wi("round"), h0 = yr(function(t, n) {
          return t - n;
        }, 0);
        function p0(t) {
          return t && t.length ? ci(t, Gt) : 0;
        }
        function g0(t, n) {
          return t && t.length ? ci(t, W(n, 2)) : 0;
        }
        return u.after = Dp, u.ary = Lo, u.assign = Sg, u.assignIn = Zo, u.assignInWith = Rr, u.assignWith = xg, u.at = bg, u.before = Oo, u.bind = Xi, u.bindAll = Fd, u.bindKey = ko, u.castArray = Jp, u.chain = Fo, u.chunk = rh, u.compact = ih, u.concat = sh, u.cond = Ed, u.conforms = Rd, u.constant = rs, u.countBy = pp, u.create = Ag, u.curry = Do, u.curryRight = No, u.debounce = Wo, u.defaults = Ig, u.defaultsDeep = Tg, u.defer = Np, u.delay = Wp, u.difference = ah, u.differenceBy = oh, u.differenceWith = uh, u.drop = lh, u.dropRight = fh, u.dropRightWhile = ch, u.dropWhile = hh, u.fill = ph, u.filter = dp, u.flatMap = mp, u.flatMapDeep = yp, u.flatMapDepth = wp, u.flatten = Ao, u.flattenDeep = gh, u.flattenDepth = dh, u.flip = Bp, u.flow = Od, u.flowRight = kd, u.fromPairs = _h, u.functions = kg, u.functionsIn = Dg, u.groupBy = Mp, u.initial = mh, u.intersection = yh, u.intersectionBy = wh, u.intersectionWith = Mh, u.invert = Wg, u.invertBy = Bg, u.invokeMap = Sp, u.iteratee = is, u.keyBy = xp, u.keys = At, u.keysIn = zt, u.map = Ar, u.mapKeys = $g, u.mapValues = qg, u.matches = Dd, u.matchesProperty = Nd, u.memoize = Tr, u.merge = zg, u.mergeWith = Jo, u.method = Wd, u.methodOf = Bd, u.mixin = ss, u.negate = Pr, u.nthArg = $d, u.omit = Gg, u.omitBy = Hg, u.once = Up, u.orderBy = bp, u.over = qd, u.overArgs = $p, u.overEvery = zd, u.overSome = Gd, u.partial = Qi, u.partialRight = Bo, u.partition = Ap, u.pick = Kg, u.pickBy = Yo, u.property = eu, u.propertyOf = Hd, u.pull = bh, u.pullAll = To, u.pullAllBy = Ah, u.pullAllWith = Ih, u.pullAt = Th, u.range = Kd, u.rangeRight = Zd, u.rearg = qp, u.reject = Pp, u.remove = Ph, u.rest = zp, u.reverse = Ji, u.sampleSize = Ep, u.set = Jg, u.setWith = Yg, u.shuffle = Rp, u.slice = Fh, u.sortBy = kp, u.sortedUniq = Nh, u.sortedUniqBy = Wh, u.split = md, u.spread = Gp, u.tail = Bh, u.take = Uh, u.takeRight = $h, u.takeRightWhile = qh, u.takeWhile = zh, u.tap = ip, u.throttle = Hp, u.thru = br, u.toArray = Go, u.toPairs = Xo, u.toPairsIn = Qo, u.toPath = Vd, u.toPlainObject = Ko, u.transform = Xg, u.unary = Kp, u.union = Gh, u.unionBy = Hh, u.unionWith = Kh, u.uniq = Zh, u.uniqBy = Jh, u.uniqWith = Yh, u.unset = Qg, u.unzip = Yi, u.unzipWith = Po, u.update = Vg, u.updateWith = jg, u.values = ve, u.valuesIn = td, u.without = Xh, u.words = tu, u.wrap = Zp, u.xor = Qh, u.xorBy = Vh, u.xorWith = jh, u.zip = tp, u.zipObject = np, u.zipObjectDeep = ep, u.zipWith = rp, u.entries = Xo, u.entriesIn = Qo, u.extend = Zo, u.extendWith = Rr, ss(u, u), u.add = t0, u.attempt = nu, u.camelCase = id, u.capitalize = Vo, u.ceil = n0, u.clamp = nd, u.clone = Yp, u.cloneDeep = Qp, u.cloneDeepWith = Vp, u.cloneWith = Xp, u.conformsTo = jp, u.deburr = jo, u.defaultTo = Ld, u.divide = e0, u.endsWith = sd, u.eq = gn, u.escape = ad, u.escapeRegExp = od, u.every = gp, u.find = _p, u.findIndex = xo, u.findKey = Pg, u.findLast = vp, u.findLastIndex = bo, u.findLastKey = Fg, u.floor = r0, u.forEach = Eo, u.forEachRight = Ro, u.forIn = Eg, u.forInRight = Rg, u.forOwn = Lg, u.forOwnRight = Og, u.get = ts, u.gt = tg, u.gte = ng, u.has = Ng, u.hasIn = ns, u.head = Io, u.identity = Gt, u.includes = Cp, u.indexOf = vh, u.inRange = ed, u.invoke = Ug, u.isArguments = ee, u.isArray = K, u.isArrayBuffer = eg, u.isArrayLike = qt, u.isArrayLikeObject = yt, u.isBoolean = rg, u.isBuffer = Hn, u.isDate = ig, u.isElement = sg, u.isEmpty = ag, u.isEqual = og, u.isEqualWith = ug, u.isError = Vi, u.isFinite = lg, u.isFunction = Rn, u.isInteger = Uo, u.isLength = Fr, u.isMap = $o, u.isMatch = fg, u.isMatchWith = cg, u.isNaN = hg, u.isNative = pg, u.isNil = dg, u.isNull = gg, u.isNumber = qo, u.isObject = dt, u.isObjectLike = mt, u.isPlainObject = We, u.isRegExp = ji, u.isSafeInteger = _g, u.isSet = zo, u.isString = Er, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = vg, u.isWeakMap = mg, u.isWeakSet = yg, u.join = Ch, u.kebabCase = ud, u.last = ln, u.lastIndexOf = Sh, u.lowerCase = ld, u.lowerFirst = fd, u.lt = wg, u.lte = Mg, u.max = i0, u.maxBy = s0, u.mean = a0, u.meanBy = o0, u.min = u0, u.minBy = l0, u.stubArray = os, u.stubFalse = us, u.stubObject = Jd, u.stubString = Yd, u.stubTrue = Xd, u.multiply = f0, u.nth = xh, u.noConflict = Ud, u.noop = as, u.now = Ir, u.pad = cd, u.padEnd = hd, u.padStart = pd, u.parseInt = gd, u.random = rd, u.reduce = Ip, u.reduceRight = Tp, u.repeat = dd, u.replace = _d, u.result = Zg, u.round = c0, u.runInContext = _, u.sample = Fp, u.size = Lp, u.snakeCase = vd, u.some = Op, u.sortedIndex = Eh, u.sortedIndexBy = Rh, u.sortedIndexOf = Lh, u.sortedLastIndex = Oh, u.sortedLastIndexBy = kh, u.sortedLastIndexOf = Dh, u.startCase = yd, u.startsWith = wd, u.subtract = h0, u.sum = p0, u.sumBy = g0, u.template = Md, u.times = Qd, u.toFinite = Ln, u.toInteger = Y, u.toLength = Ho, u.toLower = Cd, u.toNumber = fn, u.toSafeInteger = Cg, u.toString = rt, u.toUpper = Sd, u.trim = xd, u.trimEnd = bd, u.trimStart = Ad, u.truncate = Id, u.unescape = Td, u.uniqueId = jd, u.upperCase = Pd, u.upperFirst = es, u.each = Eo, u.eachRight = Ro, u.first = Io, ss(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = a, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), rn(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : bt(Y(e), 0);
            var i = this.__filtered__ && !n ? new j(this) : this.clone();
            return i.__filtered__ ? i.__takeCount__ = Pt(e, i.__takeCount__) : i.__views__.push({
              size: Pt(e, O),
              type: t + (i.__dir__ < 0 ? "Right" : "")
            }), i;
          }, j.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse();
          };
        }), rn(["filter", "map", "takeWhile"], function(t, n) {
          var e = n + 1, i = e == Me || e == $r;
          j.prototype[t] = function(o) {
            var l = this.clone();
            return l.__iteratees__.push({
              iteratee: W(o, 3),
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
        }, j.prototype.invokeMap = Q(function(t, n) {
          return typeof t == "function" ? new j(this) : this.map(function(e) {
            return Re(e, t, n);
          });
        }), j.prototype.reject = function(t) {
          return this.filter(Pr(W(t)));
        }, j.prototype.slice = function(t, n) {
          t = Y(t);
          var e = this;
          return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Y(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
        }, j.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, j.prototype.toArray = function() {
          return this.take(O);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), o = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
          o && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = i ? [1] : arguments, y = h instanceof j, b = g[0], A = y || K(h), T = function(V) {
              var tt = o.apply(u, Wn([V], g));
              return i && L ? tt[0] : tt;
            };
            A && e && typeof b == "function" && b.length != 1 && (y = A = !1);
            var L = this.__chain__, D = !!this.__actions__.length, B = l && !L, X = y && !D;
            if (!l && A) {
              h = X ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: br, args: [T], thisArg: r }), new an(U, L);
            }
            return B && X ? t.apply(this, g) : (U = this.thru(T), B ? i ? U.value()[0] : U.value() : U);
          });
        }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = Qe[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var o = arguments;
            if (i && !this.__chain__) {
              var l = this.value();
              return n.apply(K(l) ? l : [], o);
            }
            return this[e](function(h) {
              return n.apply(K(h) ? h : [], o);
            });
          };
        }), wn(j.prototype, function(t, n) {
          var e = u[n];
          if (e) {
            var i = e.name + "";
            st.call(ce, i) || (ce[i] = []), ce[i].push({ name: n, func: e });
          }
        }), ce[mr(r, q).name] = [{
          name: "wrapper",
          func: r
        }], j.prototype.clone = Tf, j.prototype.reverse = Pf, j.prototype.value = Ff, u.prototype.at = sp, u.prototype.chain = ap, u.prototype.commit = op, u.prototype.next = up, u.prototype.plant = fp, u.prototype.reverse = cp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = hp, u.prototype.first = u.prototype.head, be && (u.prototype[be] = lp), u;
      }, ue = of();
      Jn ? ((Jn.exports = ue)._ = ue, ii._ = ue) : It._ = ue;
    }).call(v0);
  }(Be, Be.exports)), Be.exports;
}
var Ss = m0();
const z = /* @__PURE__ */ vu(Ss);
var Or = { exports: {} }, ls, su;
function y0() {
  if (su) return ls;
  su = 1;
  var c = 1e3, s = c * 60, r = s * 60, a = r * 24, f = a * 7, p = a * 365.25;
  ls = function(I, v) {
    v = v || {};
    var F = typeof I;
    if (F === "string" && I.length > 0)
      return d(I);
    if (F === "number" && isFinite(I))
      return v.long ? w(I) : m(I);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(I)
    );
  };
  function d(I) {
    if (I = String(I), !(I.length > 100)) {
      var v = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        I
      );
      if (v) {
        var F = parseFloat(v[1]), R = (v[2] || "ms").toLowerCase();
        switch (R) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return F * p;
          case "weeks":
          case "week":
          case "w":
            return F * f;
          case "days":
          case "day":
          case "d":
            return F * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return F * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return F * s;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return F * c;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return F;
          default:
            return;
        }
      }
    }
  }
  function m(I) {
    var v = Math.abs(I);
    return v >= a ? Math.round(I / a) + "d" : v >= r ? Math.round(I / r) + "h" : v >= s ? Math.round(I / s) + "m" : v >= c ? Math.round(I / c) + "s" : I + "ms";
  }
  function w(I) {
    var v = Math.abs(I);
    return v >= a ? C(I, v, a, "day") : v >= r ? C(I, v, r, "hour") : v >= s ? C(I, v, s, "minute") : v >= c ? C(I, v, c, "second") : I + " ms";
  }
  function C(I, v, F, R) {
    var E = v >= F * 1.5;
    return Math.round(I / F) + " " + R + (E ? "s" : "");
  }
  return ls;
}
var fs, au;
function w0() {
  if (au) return fs;
  au = 1;
  function c(s) {
    a.debug = a, a.default = a, a.coerce = C, a.disable = m, a.enable = p, a.enabled = w, a.humanize = y0(), a.destroy = I, Object.keys(s).forEach((v) => {
      a[v] = s[v];
    }), a.names = [], a.skips = [], a.formatters = {};
    function r(v) {
      let F = 0;
      for (let R = 0; R < v.length; R++)
        F = (F << 5) - F + v.charCodeAt(R), F |= 0;
      return a.colors[Math.abs(F) % a.colors.length];
    }
    a.selectColor = r;
    function a(v) {
      let F, R = null, E, P;
      function N(...q) {
        if (!N.enabled)
          return;
        const Z = N, J = Number(/* @__PURE__ */ new Date()), it = J - (F || J);
        Z.diff = it, Z.prev = F, Z.curr = J, F = J, q[0] = a.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
        let _t = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (St, tn) => {
          if (St === "%%")
            return "%";
          _t++;
          const Ht = a.formatters[tn];
          if (typeof Ht == "function") {
            const Et = q[_t];
            St = Ht.call(Z, Et), q.splice(_t, 1), _t--;
          }
          return St;
        }), a.formatArgs.call(Z, q), (Z.log || a.log).apply(Z, q);
      }
      return N.namespace = v, N.useColors = a.useColors(), N.color = a.selectColor(v), N.extend = f, N.destroy = a.destroy, Object.defineProperty(N, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => R !== null ? R : (E !== a.namespaces && (E = a.namespaces, P = a.enabled(v)), P),
        set: (q) => {
          R = q;
        }
      }), typeof a.init == "function" && a.init(N), N;
    }
    function f(v, F) {
      const R = a(this.namespace + (typeof F > "u" ? ":" : F) + v);
      return R.log = this.log, R;
    }
    function p(v) {
      a.save(v), a.namespaces = v, a.names = [], a.skips = [];
      const F = (typeof v == "string" ? v : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const R of F)
        R[0] === "-" ? a.skips.push(R.slice(1)) : a.names.push(R);
    }
    function d(v, F) {
      let R = 0, E = 0, P = -1, N = 0;
      for (; R < v.length; )
        if (E < F.length && (F[E] === v[R] || F[E] === "*"))
          F[E] === "*" ? (P = E, N = R, E++) : (R++, E++);
        else if (P !== -1)
          E = P + 1, N++, R = N;
        else
          return !1;
      for (; E < F.length && F[E] === "*"; )
        E++;
      return E === F.length;
    }
    function m() {
      const v = [
        ...a.names,
        ...a.skips.map((F) => "-" + F)
      ].join(",");
      return a.enable(""), v;
    }
    function w(v) {
      for (const F of a.skips)
        if (d(v, F))
          return !1;
      for (const F of a.names)
        if (d(v, F))
          return !0;
      return !1;
    }
    function C(v) {
      return v instanceof Error ? v.stack || v.message : v;
    }
    function I() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return a.enable(a.load()), a;
  }
  return fs = c, fs;
}
var ou;
function M0() {
  return ou || (ou = 1, function(c, s) {
    s.formatArgs = a, s.save = f, s.load = p, s.useColors = r, s.storage = d(), s.destroy = /* @__PURE__ */ (() => {
      let w = !1;
      return () => {
        w || (w = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
      let w;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (w = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(w[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function a(w) {
      if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
        return;
      const C = "color: " + this.color;
      w.splice(1, 0, C, "color: inherit");
      let I = 0, v = 0;
      w[0].replace(/%[a-zA-Z%]/g, (F) => {
        F !== "%%" && (I++, F === "%c" && (v = I));
      }), w.splice(v, 0, C);
    }
    s.log = console.debug || console.log || (() => {
    });
    function f(w) {
      try {
        w ? s.storage.setItem("debug", w) : s.storage.removeItem("debug");
      } catch {
      }
    }
    function p() {
      let w;
      try {
        w = s.storage.getItem("debug");
      } catch {
      }
      return !w && typeof process < "u" && "env" in process && (w = process.env.DEBUG), w;
    }
    function d() {
      try {
        return localStorage;
      } catch {
      }
    }
    c.exports = w0()(s);
    const { formatters: m } = c.exports;
    m.j = function(w) {
      try {
        return JSON.stringify(w);
      } catch (C) {
        return "[UnexpectedJSONParseError]: " + C.message;
      }
    };
  }(Or, Or.exports)), Or.exports;
}
var C0 = M0();
const S0 = /* @__PURE__ */ vu(C0), cs = {};
function Zn(c) {
  if (!cs[c]) {
    const s = S0("ultraPacer:core");
    s(`loading debug for namespace "${c}"`), cs[c] = s.extend(c);
  }
  return cs[c];
}
function Nt(c, s = 0) {
  return Math.round(c * 10 ** s) / 10 ** s;
}
function me(c, s, r, a, f) {
  return r + (f - c) / (s - c) * (a - r);
}
function mu(c, s, r) {
  let a = 0, f = 0;
  const p = [];
  for (a = 0; a < r.length; a++)
    if (r[a] < c[f])
      p.push(s[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[a]; )
        f++;
      f === c.length - 1 || r[a] === c[f] ? p.push(s[f]) : p.push(me(c[f], c[f + 1], s[f], s[f + 1], r[a]));
    }
  return p;
}
function yu(c) {
  let s, r, a, f, p = 0, d = 0, m = 0, w = 0, C = 0;
  for (s = 0; s < c.length; s++)
    r = c[s][0], a = c[s][1], f = c[s][2], C += f, p += f * r, m += f * (r * r), d += f * a, w += f * (r * a);
  const I = (d * m - p * w) / (C * m - p * p);
  return [(C * w - p * d) / (C * m - p * p), I];
}
function wu(c, s, r, a) {
  let f = 0, p = 0;
  const d = [];
  return r.forEach((m) => {
    for (; c[f] < m - a; )
      f++;
    for (f > 0 && c[f] >= m && f--; p < c.length - 1 && c[p + 1] <= m + a; )
      p++;
    p < c.length - 1 && c[p] <= m && p++;
    const w = Math.max(a, Math.abs(m - c[f]) + 1e-3, Math.abs(m - c[p]) + 1e-3), C = [];
    let I = 0;
    for (let v = f; v <= p; v++)
      I = (1 - (Math.abs(m - c[v]) / w) ** 3) ** 3, C.push([c[v], s[v], I]);
    d.push(yu(C));
  }), d;
}
function xs(c, s, r) {
  return Nt(c, r) < Nt(s, r);
}
function x0(c, s, r) {
  return Nt(c, r) > Nt(s, r);
}
function ye(c, s, r) {
  return Nt(c, r) <= Nt(s, r);
}
function Br(c, s, r) {
  return Nt(c, r) >= Nt(s, r);
}
function Ue(c, s, r) {
  return Nt(c, r) === Nt(s, r);
}
const n_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: mu,
  linearRegression: yu,
  req: Ue,
  rgt: x0,
  rgte: Br,
  rlt: xs,
  rlte: ye,
  round: Nt,
  wlslr: wu
}, Symbol.toStringTag, { value: "Module" }));
class Sn {
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
class uu {
  constructor(s, r, a) {
    M(this, "factors", new Sn());
    M(this, "point");
    M(this, "course");
    M(this, "loop");
    Object.defineProperty(this, "course", { writable: !0 }), this.point = r, this.course = s, this.loop = a;
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
const b0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function Mu(c, s) {
  (s === null || typeof s > "u") && (s = b0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const lu = {
  baseline: 0,
  terrainScale: 1
};
function A0(c, s) {
  function r(a) {
    return a < c.noon ? a + 86400 : a;
  }
  return s >= c.sunrise && s <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (s <= c.dawn || s >= c.dusk) ? 1 : r(s) >= r(c.nadir) ? me(r(isNaN(c.dawn) ? c.nadir : c.dawn), r(c.sunrise), 1, 0, r(s)) : me(r(c.sunset), r(isNaN(c.dusk) ? c.nadir : c.dusk), 0, 1, r(s));
}
function Cu(c, s, r, a = lu) {
  if (s === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = lu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (a.terrainScale * (s - 1) + a.baseline) * f, d = A0(r, c);
  return 1 + p * d;
}
const I0 = {
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
function Su(c, s) {
  return (s === null || typeof s > "u") && (s = I0), c < s.lower.lim ? s.lower.m * c + s.lower.b : c > s.upper.lim ? s.upper.m * c + s.upper.b : s.a * c ** 2 + s.b * c + 1;
}
function xu(c, s) {
  if (!s)
    return 1;
  const r = c.tod;
  let a = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    a += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return a += s.baseline / 100, a;
}
function bu(c, s) {
  const r = z.findLast(s.terrainFactors, (a) => ye(a.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const Au = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function bs(c) {
  const s = new Sn().init(0);
  return c.forEach(({ factors: r, dist: a }) => {
    s.applyEach((f, p) => f + a * p, r);
  }), s.scaleEach(1 / Ss.sumBy(c, "dist")), s;
}
function T0(c, s) {
  let r = 0, a = 0;
  return c.forEach((f, p) => {
    const d = p === c.length - 1 ? s : c[p + 1].onset, m = f.type === "linear" ? f.value / 2 : f.value;
    a += (r + m) * (d - f.onset), r += f.value;
  }), a / s;
}
function P0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function F0(c, s, r) {
  let a = -T0(s, r);
  return s.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        a += f.value;
      else if (f.type === "linear") {
        const d = p === s.length - 1 ? r : s[p + 1].onset;
        c > d ? a += f.value : a += f.value * (c - f.onset) / (d - f.onset);
      }
    }
  }), a;
}
class ms {
  constructor(s, r) {
    M(this, "plan");
    M(this, "values");
    this.plan = s, this.values = r ? z.cloneDeep(r) : [{ onset: 0, value: P0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + F0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((a) => a.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function ys(c, s) {
  return s === void 0 ? c : (c - 1) * s + 1;
}
function As(c, s) {
  c.factors || (c.factors = new Sn()), Object.assign(c.factors, {
    grade: Su(c.grade),
    altitude: Mu(c.alt),
    terrain: bu(c, s)
  });
}
function Wr(c, s) {
  var r, a;
  if (c.factors || (c.factors = new Sn()), As(c, s.course), s) {
    if (c.factors === void 0)
      throw new Error("no factors");
    c.factors.strategy = s.strategy.at(c.loc), Object.assign(c.factors, {
      heat: s.heatModel ? xu(c, s.heatModel) : 1,
      dark: s.event.sun ? Cu(c.tod, c.factors.terrain, s.event.sun) : 1
    });
  }
  c.factors.altitude = ys(c.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), c.factors.dark = ys(c.factors.dark, (a = s.scales) == null ? void 0 : a.dark);
}
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Sn,
  Strategy: ms,
  applyScale: ys,
  generateCourseFactors: As,
  generatePlanFactors: Wr,
  getAltitudeFactor: Mu,
  getDarkFactor: Cu,
  getGradeFactor: Su,
  getHeatFactor: xu,
  getTerrainFactor: bu,
  list: Au,
  rollup: bs
}, Symbol.toStringTag, { value: "Module" }));
function Iu(c) {
  switch (c) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function kr(c) {
  return typeof c == "number" && !isNaN(c);
}
function E0(c, s, r) {
  const a = c.filter((p, d) => d >= c.findIndex((m) => m === s) && d <= c.findIndex((m) => m === r)), f = a.map((p, d) => ({
    factors: p.factors,
    dist: d === a.length - 1 ? 0 : a[d + 1].loc - a[d].loc
  }));
  return f.pop(), bs(f);
}
class Tu {
  constructor(s) {
    M(this, "point1");
    M(this, "point2");
    /**
     * elevation gain (m) over segment
     */
    M(this, "gain");
    /**
     * elevation loss (m) over segment
     */
    M(this, "loss");
    /**
     * average grade (%) over segment
     */
    M(this, "grade");
    /**
     * waypoint at end of segment
     */
    M(this, "waypoint");
    M(this, "_name");
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
class R0 extends Tu {
  constructor(r, a) {
    super(a);
    M(this, "_course");
    M(this, "point1");
    M(this, "point2");
    this._course = r, this.point1 = a.point1, this.point2 = a.point2;
  }
}
class L0 extends Tu {
  constructor(r, a) {
    super(a);
    M(this, "_plan");
    M(this, "point1");
    M(this, "point2");
    M(this, "_factors");
    this._plan = r, this.point1 = a.point1, this.point2 = a.point2;
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
    if (!(!kr(this.point1.elapsed) || !kr(this.point2.elapsed) || !kr(this.point1.time) || !kr(this.point2.time)))
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
    return this._factors || (this._factors = E0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Zn("CourseSplits");
class O0 {
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
    hs("createSegments");
    const s = this.course.waypoints.filter((a) => a.tier < 3).sort((a, f) => a.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((a) => a.loc)));
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((a, f) => {
      a.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    hs(`createSplits:${s}`);
    const r = Iu(s), a = z.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - a[a.length - 1] > 1e-4 && a.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(a));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var F;
    hs.extend("calcSegments")("exec");
    const a = this.course, f = a.points, p = [], d = [];
    let m, w, C = a.points[0], I;
    for (m = 0, w = s.length; m < w; m++) {
      const R = s[m];
      I && Ue((F = s[m - 1]) == null ? void 0 : F.end, R.start, 4) ? C = I : C = a.getPoint(R.start), I = a.getPoint(R.end);
      const E = R.end - R.start, P = new R0(this.course, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (I.alt - C.alt) / E / 10 * (I.alt - C.alt > 0 ? a.gainScale : a.lossScale) : 0,
        point1: C,
        point2: I
      }), N = new Sn().init(0);
      p.push(P), d.push(N);
    }
    const v = (R, E, P, N) => {
      const q = P.alt - E.alt;
      R[q > 0 ? "gain" : "loss"] += q * (q > 0 ? a.gainScale : a.lossScale), As(E, a);
      const Z = P.loc - E.loc;
      N.applyEach((J, it) => J + it * Z, E.factors);
    };
    m = 1;
    for (let R = 0; R < p.length; R++) {
      const E = p[R], P = d[R];
      for (; ye(f[m].loc, E.point1.loc, 4); )
        m++;
      let N = E.point1;
      for (; m < f.length && ye(f[m].loc, E.point2.loc, 4); ) {
        const q = f[m];
        v(E, N, q, P), N = q, m++;
      }
      v(E, N, E.point2, P);
    }
    return p;
  }
}
var ps = {}, fu;
function k0() {
  return fu || (fu = 1, function(c) {
    c.parseDMS = function(r) {
      if (typeof f == "object") throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
      if (typeof r == "number" && isFinite(r)) return Number(r);
      var a = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
      if (a[a.length - 1] == "" && a.splice(a.length - 1), a == "") return NaN;
      switch (a.length) {
        case 3:
          var f = a[0] / 1 + a[1] / 60 + a[2] / 3600;
          break;
        case 2:
          var f = a[0] / 1 + a[1] / 60;
          break;
        case 1:
          var f = a[0];
          break;
        default:
          return NaN;
      }
      return /^-|[WS]$/i.test(r.trim()) && (f = -f), Number(f);
    }, c.toDMS = function(r, a, f) {
      if (typeof r == "object") throw new TypeError("geo.toDMS - deg is [DOM?] object");
      if (isNaN(r)) return null;
      if (typeof a > "u" && (a = "dms"), typeof f > "u")
        switch (a) {
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
            a = "dms", f = 0;
        }
      switch (r = Math.abs(r), a) {
        case "d":
          m = r.toFixed(f), m < 100 && (m = "0" + m), m < 10 && (m = "0" + m), dms = m + "°";
          break;
        case "dm":
          var p = (r * 60).toFixed(f), m = Math.floor(p / 60), w = (p % 60).toFixed(f);
          m < 100 && (m = "0" + m), m < 10 && (m = "0" + m), w < 10 && (w = "0" + w), dms = m + "°" + w + "′";
          break;
        case "dms":
          var d = (r * 3600).toFixed(f), m = Math.floor(d / 3600), w = Math.floor(d / 60) % 60, C = (d % 60).toFixed(f);
          m < 100 && (m = "0" + m), m < 10 && (m = "0" + m), w < 10 && (w = "0" + w), C < 10 && (C = "0" + C), dms = m + "°" + w + "′" + C + "″";
          break;
      }
      return dms;
    }, c.toLat = function(r, a, f) {
      var p = c.toDMS(r, a, f);
      return p == null ? "." : p.slice(1) + (r < 0 ? "S" : "N");
    }, c.toLon = function(r, a, f) {
      var p = c.toDMS(r, a, f);
      return p == null ? "." : p + (r < 0 ? "W" : "E");
    }, c.toBrng = function(r, a, f) {
      r = (Number(r) + 360) % 360;
      var p = c.toDMS(r, a, f);
      return p == null ? "." : p.replace("360", "0");
    };
    var s = 6371;
    c.latlon = function(r, a) {
      this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN;
    }, c.latlon.prototype.distanceTo = function(r, a) {
      typeof a > "u" && (a = 4);
      var f = this.distanceRadTo(r), p = s * f;
      return p.toPrecisionFixed(a);
    }, c.latlon.prototype.distanceRadTo = function(r) {
      var a = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), m = p - a, w = d - f, C = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(a) * Math.cos(p) * Math.sin(w / 2) * Math.sin(w / 2), I = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
      return I;
    }, c.latlon.prototype.bearingTo = function(r) {
      var a = this.bearingRadTo(r);
      return (a.toDeg() + 360) % 360;
    }, c.latlon.prototype.bearingRadTo = function(r) {
      var a = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(a) * Math.sin(f) - Math.sin(a) * Math.cos(f) * Math.cos(p), m = Math.cos(f) * Math.sin(p), w = Math.atan2(m, d);
      return w;
    }, c.latlon.prototype.finalBearingTo = function(r) {
      var a = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(f), m = Math.cos(a) * Math.sin(f) - Math.sin(a) * Math.cos(f) * Math.cos(p), w = Math.atan2(d, m);
      return (w.toDeg() + 180) % 360;
    }, c.latlon.prototype.midpointTo = function(r) {
      var a = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(f) * Math.cos(p), m = Math.cos(f) * Math.sin(p), w = this.lng.toRad(), C = Math.atan2(Math.sin(a) + Math.sin(f), Math.sqrt((Math.cos(a) + d) * (Math.cos(a) + d) + m * m)), I = w + Math.atan2(m, Math.cos(a) + d);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(C.toDeg(), I.toDeg());
    }, c.midpoint = function(r) {
      var a = 0, f = 0, p = 0;
      for (var d in r) {
        var m = r[d], w = m.lat * Math.PI / 180, C = m.lng * Math.PI / 180, I = Math.cos(w) * Math.cos(C), v = Math.cos(w) * Math.sin(C), F = Math.sin(w);
        a += I, f += v, p += F;
      }
      a = a / r.length, f = f / r.length, p = p / r.length;
      var R = Math.atan2(f, a), E = Math.sqrt(a * a + f * f), P = Math.atan2(p, E);
      return new c.latlon(P * 180 / Math.PI, R * 180 / Math.PI);
    }, c.latlon.prototype.interpolate = function(r, a) {
      var f = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), m = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var w = Math.sin(d), C = Math.cos(d), I = [], v = 0; v < a; v++) {
        var F = 1 / (a - 1) * v, R = f * F, E = Math.sin(R), P = Math.cos(R), N = Math.asin(w * P + C * E * Math.cos(p)), q = m + Math.atan2(Math.sin(p) * E * C, P - w * Math.sin(N)), Z = N.toDeg(), J = q.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); J > 180; ) J -= 360;
        for (; J <= -180; ) J += 360;
        I.push(new c.latlon(Z, J));
      }
      return I;
    }, c.latlon.prototype.destinationPoint = function(r, a) {
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / s, r = r.toRad();
      var f = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(f) * Math.cos(a) + Math.cos(f) * Math.sin(a) * Math.cos(r)), m = p + Math.atan2(
        Math.sin(r) * Math.sin(a) * Math.cos(f),
        Math.cos(a) - Math.sin(f) * Math.sin(d)
      );
      return m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(d.toDeg(), m.toDeg());
    }, c.latlon.intersection = function(r, a, f, p) {
      a = typeof a == "number" ? a : typeof a == "string" && trim(a) != "" ? +a : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
      var d = r.lat.toRad(), m = r.lng.toRad(), w = f.lat.toRad(), C = f.lng.toRad(), I = a.toRad(), v = p.toRad(), F = w - d, R = C - m, E = 2 * Math.asin(Math.sqrt(Math.sin(F / 2) * Math.sin(F / 2) + Math.cos(d) * Math.cos(w) * Math.sin(R / 2) * Math.sin(R / 2)));
      if (E == 0) return null;
      var P = Math.acos((Math.sin(w) - Math.sin(d) * Math.cos(E)) / (Math.sin(E) * Math.cos(d)));
      isNaN(P) && (P = 0);
      var N = Math.acos((Math.sin(d) - Math.sin(w) * Math.cos(E)) / (Math.sin(E) * Math.cos(w)));
      if (Math.sin(C - m) > 0)
        var q = P, Z = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - P, Z = N;
      var J = (I - q + Math.PI) % (2 * Math.PI) - Math.PI, it = (Z - v + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(J) == 0 && Math.sin(it) == 0 || Math.sin(J) * Math.sin(it) < 0) return null;
      var _t = Math.acos(-Math.cos(J) * Math.cos(it) + Math.sin(J) * Math.sin(it) * Math.cos(E)), Wt = Math.atan2(
        Math.sin(E) * Math.sin(J) * Math.sin(it),
        Math.cos(it) + Math.cos(J) * Math.cos(_t)
      ), St = Math.asin(Math.sin(d) * Math.cos(Wt) + Math.cos(d) * Math.sin(Wt) * Math.cos(I)), tn = Math.atan2(
        Math.sin(I) * Math.sin(Wt) * Math.cos(d),
        Math.cos(Wt) - Math.sin(d) * Math.sin(St)
      ), Ht = m + tn;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(St.toDeg(), Ht.toDeg());
    }, c.latlon.prototype.rhumbDistanceTo = function(r) {
      var a = s, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), m = Math.abs(r.lng - this.lng).toRad(), w = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(d / w) ? d / w : Math.cos(f);
      Math.abs(m) > Math.PI && (m = m > 0 ? -(2 * Math.PI - m) : 2 * Math.PI + m);
      var I = Math.sqrt(d * d + C * C * m * m) * a;
      return I.toPrecisionFixed(4);
    }, c.latlon.prototype.rhumbBearingTo = function(r) {
      var a = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var m = Math.atan2(p, d);
      return (m.toDeg() + 360) % 360;
    }, c.latlon.prototype.rhumbDestinationPoint = function(r, a) {
      var f = s, p = parseFloat(a) / f, d = this.lat.toRad(), m = this.lng.toRad();
      r = r.toRad();
      var w = p * Math.cos(r);
      Math.abs(w) < 1e-10 && (w = 0);
      var C = d + w, I = Math.log(Math.tan(C / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), v = isFinite(w / I) ? w / I : Math.cos(d), F = p * Math.sin(r) / v;
      Math.abs(C) > Math.PI / 2 && (C = C > 0 ? Math.PI - C : -Math.PI - C);
      var R = (m + F + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new c.latlon(C.toDeg(), R.toDeg());
    }, c.latlon.prototype.rhumbMidpointTo = function(r) {
      var a = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
      Math.abs(d - f) > Math.PI && (f += 2 * Math.PI);
      var m = (a + p) / 2, w = Math.tan(Math.PI / 4 + a / 2), C = Math.tan(Math.PI / 4 + p / 2), I = Math.tan(Math.PI / 4 + m / 2), v = ((d - f) * Math.log(I) + f * Math.log(C) - d * Math.log(w)) / Math.log(C / w);
      return isFinite(v) || (v = (f + d) / 2), v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(m.toDeg(), v.toDeg());
    }, c.latlon.prototype.lat = function(r, a) {
      return typeof r > "u" ? this.lat : c.toLat(this.lat, r, a);
    }, c.latlon.prototype.lon = function(r, a) {
      return typeof r > "u" ? this.lng : c.toLon(this.lng, r, a);
    }, c.latlon.prototype.toString = function(r, a) {
      return typeof r > "u" && (r = "dms"), c.toLat(this.lat, r, a) + ", " + c.toLon(this.lng, r, a);
    }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
      return this * 180 / Math.PI;
    }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
      var a = this.toPrecision(r);
      return a = a.replace(/(.+)e\+(.+)/, function(f, p, d) {
        p = p.replace(/\./, "");
        for (var m = p.length - 1; d-- > m; ) p = p + "0";
        return p;
      }), a = a.replace(/(.+)e-(.+)/, function(f, p, d) {
        for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
        return "0." + p;
      }), a;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ps)), ps;
}
var D0 = k0();
class Pu {
  constructor(s, r, a) {
    M(this, "alt");
    M(this, "lat");
    M(this, "lon");
    this.lat = s, this.lon = r, this.alt = a;
  }
  get latlon() {
    return new D0.latlon(this.lat, this.lon);
  }
}
class Fu extends Pu {
  constructor(r, a, f, p, d) {
    super(r, a, f);
    M(this, "loc");
    M(this, "grade");
    this.loc = p, this.grade = d;
  }
}
function Eu(c, s, r) {
  if (c.loc > s.loc && r > c.loc || s.loc > c.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const a = Math.abs(c.loc - r), f = c.latlon.bearingTo(s.latlon), { lat: p, lng: d } = c.latlon.destinationPoint(f, a), m = c.grade, w = me(c.loc, s.loc, c.alt, s.alt, r);
  return new Fu(p, d, w, r, m);
}
function N0(c, s) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof s == "object" ? String(s.id) : s);
}
function ws(c, s) {
  return !!(c && s && N0(c.site, s.site) && c.loop === s.loop);
}
class cu {
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
    if (!z.isNumber(s))
      throw new Error("Wrong format for Waypoint.loc");
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
      const r = (s = this.site.cutoffs) == null ? void 0 : s.find((a) => a.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(s) {
    var a;
    const r = (a = this.site.cutoffs) == null ? void 0 : a.findIndex((f) => f.loop === this.loop);
    r >= 0 ? s ? this.site.cutoffs[r].time = s : this.site.cutoffs.splice(r, 1) : s && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: s, loop: this.loop }));
  }
  matchingSegment(s) {
    return s.find((r) => r.waypoint && ws(this, r.waypoint));
  }
}
const Dr = Zn("models:Waypoint");
class gs {
  constructor(s, r) {
    M(this, "_waypoints");
    M(this, "_lat", NaN);
    M(this, "_lon", NaN);
    M(this, "_alt", NaN);
    M(this, "_data");
    M(this, "course");
    M(this, "cutoffs", []);
    M(this, "id");
    M(this, "name");
    M(this, "tier", 1);
    M(this, "type");
    M(this, "terrainFactor");
    M(this, "terrainType");
    M(this, "description");
    M(this, "pointsIndex");
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), Dr(`constructor: ${this.name}`);
  }
  clearCache() {
    Dr(`clearCache: ${this.name}`), delete this._waypoints, this._lat = NaN, this._lon = NaN, this._alt = NaN;
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
    return this._waypoints ? this._waypoints : (Dr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new cu(this, this.course.loops)] : this._waypoints = z.range(this.course.loops).map((s) => new cu(this, s + 1)), this._waypoints);
  }
  get lat() {
    return z.isNaN(this._lat) && this.refreshLLA(), this._lat;
  }
  get lon() {
    return z.isNaN(this._lon) && this.refreshLLA(), this._lon;
  }
  get alt() {
    return z.isNaN(this._alt) && this.refreshLLA(), this._alt;
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    Dr("refreshLLA");
    let s, r, a;
    this.type === "start" ? { lat: s, lon: r, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: a } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: a } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = a, this.course.clearCache(1);
  }
}
var ds = { exports: {} }, hu;
function W0() {
  return hu || (hu = 1, function(c, s) {
    (function() {
      var r = Math.PI, a = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, m = Math.atan2, w = Math.acos, C = r / 180, I = 1e3 * 60 * 60 * 24, v = 2440588, F = 2451545;
      function R(O) {
        return O.valueOf() / I - 0.5 + v;
      }
      function E(O) {
        return new Date((O + 0.5 - v) * I);
      }
      function P(O) {
        return R(O) - F;
      }
      var N = C * 23.4397;
      function q(O, $) {
        return m(a(O) * f(N) - p($) * a(N), f(O));
      }
      function Z(O, $) {
        return d(a($) * f(N) + f($) * a(N) * a(O));
      }
      function J(O, $, G) {
        return m(a(O), f(O) * a($) - p(G) * f($));
      }
      function it(O, $, G) {
        return d(a($) * a(G) + f($) * f(G) * f(O));
      }
      function _t(O, $) {
        return C * (280.16 + 360.9856235 * O) - $;
      }
      function Wt(O) {
        return O < 0 && (O = 0), 2967e-7 / Math.tan(O + 312536e-8 / (O + 0.08901179));
      }
      function St(O) {
        return C * (357.5291 + 0.98560028 * O);
      }
      function tn(O) {
        var $ = C * (1.9148 * a(O) + 0.02 * a(2 * O) + 3e-4 * a(3 * O)), G = C * 102.9372;
        return O + $ + G + r;
      }
      function Ht(O) {
        var $ = St(O), G = tn($);
        return {
          dec: Z(G, 0),
          ra: q(G, 0)
        };
      }
      var Et = {};
      Et.getPosition = function(O, $, G) {
        var ct = C * -G, nt = C * $, ht = P(O), ot = Ht(ht), lt = _t(ht, ct) - ot.ra;
        return {
          azimuth: J(lt, nt, ot.dec),
          altitude: it(lt, nt, ot.dec)
        };
      };
      var we = Et.times = [
        [-0.833, "sunrise", "sunset"],
        [-0.3, "sunriseEnd", "sunsetStart"],
        [-6, "dawn", "dusk"],
        [-12, "nauticalDawn", "nauticalDusk"],
        [-18, "nightEnd", "night"],
        [6, "goldenHourEnd", "goldenHour"]
      ];
      Et.addTime = function(O, $, G) {
        we.push([O, $, G]);
      };
      var $e = 9e-4;
      function Ur(O, $) {
        return Math.round(O - $e - $ / (2 * r));
      }
      function Me(O, $, G) {
        return $e + (O + $) / (2 * r) + G;
      }
      function qe(O, $, G) {
        return F + O + 53e-4 * a($) - 69e-4 * a(2 * G);
      }
      function $r(O, $, G) {
        return w((a(O) - a($) * a(G)) / (f($) * f(G)));
      }
      function xn(O) {
        return -2.076 * Math.sqrt(O) / 60;
      }
      function vn(O, $, G, ct, nt, ht, ot) {
        var lt = $r(O, G, ct), Mt = Me(lt, $, nt);
        return qe(Mt, ht, ot);
      }
      Et.getTimes = function(O, $, G, ct) {
        ct = ct || 0;
        var nt = C * -G, ht = C * $, ot = xn(ct), lt = P(O), Mt = Ur(lt, nt), Kt = Me(0, nt, Mt), Rt = St(Kt), Bt = tn(Rt), mn = Z(Bt, 0), vt = qe(Kt, Rt, Bt), Lt, Dn, Ct, Ut, cn, nn, pt = {
          solarNoon: E(vt),
          nadir: E(vt - 0.5)
        };
        for (Lt = 0, Dn = we.length; Lt < Dn; Lt += 1)
          Ct = we[Lt], Ut = (Ct[0] + ot) * C, cn = vn(Ut, nt, ht, mn, Mt, Rt, Bt), nn = vt - (cn - vt), pt[Ct[1]] = E(nn), pt[Ct[2]] = E(cn);
        return pt;
      };
      function ze(O) {
        var $ = C * (218.316 + 13.176396 * O), G = C * (134.963 + 13.064993 * O), ct = C * (93.272 + 13.22935 * O), nt = $ + C * 6.289 * a(G), ht = C * 5.128 * a(ct), ot = 385001 - 20905 * f(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Et.getMoonPosition = function(O, $, G) {
        var ct = C * -G, nt = C * $, ht = P(O), ot = ze(ht), lt = _t(ht, ct) - ot.ra, Mt = it(lt, nt, ot.dec), Kt = m(a(lt), p(nt) * f(ot.dec) - a(ot.dec) * f(lt));
        return Mt = Mt + Wt(Mt), {
          azimuth: J(lt, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Et.getMoonIllumination = function(O) {
        var $ = P(O || /* @__PURE__ */ new Date()), G = Ht($), ct = ze($), nt = 149598e3, ht = w(a(G.dec) * a(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = m(nt * a(ht), ct.dist - nt * f(ht)), lt = m(f(G.dec) * a(G.ra - ct.ra), a(G.dec) * f(ct.dec) - f(G.dec) * a(ct.dec) * f(G.ra - ct.ra));
        return {
          fraction: (1 + f(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
          angle: lt
        };
      };
      function bn(O, $) {
        return new Date(O.valueOf() + $ * I / 24);
      }
      Et.getMoonTimes = function(O, $, G, ct) {
        var nt = new Date(O);
        ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * C, ot = Et.getMoonPosition(nt, $, G).altitude - ht, lt, Mt, Kt, Rt, Bt, mn, vt, Lt, Dn, Ct, Ut, cn, nn, pt = 1; pt <= 24 && (lt = Et.getMoonPosition(bn(nt, pt), $, G).altitude - ht, Mt = Et.getMoonPosition(bn(nt, pt + 1), $, G).altitude - ht, Bt = (ot + Mt) / 2 - lt, mn = (Mt - ot) / 2, vt = -mn / (2 * Bt), Lt = (Bt * vt + mn) * vt + lt, Dn = mn * mn - 4 * Bt * lt, Ct = 0, Dn >= 0 && (nn = Math.sqrt(Dn) / (Math.abs(Bt) * 2), Ut = vt - nn, cn = vt + nn, Math.abs(Ut) <= 1 && Ct++, Math.abs(cn) <= 1 && Ct++, Ut < -1 && (Ut = cn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Rt = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? cn : Ut), Rt = pt + (Lt < 0 ? Ut : cn)), !(Kt && Rt)); pt += 2)
          ot = Mt;
        var yn = {};
        return Kt && (yn.rise = bn(nt, Kt)), Rt && (yn.set = bn(nt, Rt)), !Kt && !Rt && (yn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), yn;
      }, c.exports = Et;
    })();
  }(ds)), ds.exports;
}
var pu = W0();
function Kn(c, s) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((a) => Number(a));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class B0 {
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
class Ms {
  constructor(s, r, a, f) {
    M(this, "start");
    M(this, "lat");
    M(this, "lon");
    M(this, "timezone");
    M(this, "sun");
    M(this, "startTime");
    this.start = s, this.lat = a, this.lon = f, this.timezone = r;
    const p = pu.getTimes(this.start, this.lat, this.lon), d = pu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new B0({
      nadir: Kn(p.nadir, this.timezone),
      dawn: Kn(p.dawn, this.timezone),
      sunrise: Kn(p.sunrise, this.timezone),
      dusk: Kn(p.dusk, this.timezone),
      sunset: Kn(p.sunset, this.timezone),
      noon: Kn(p.solarNoon, this.timezone),
      nadirAltitude: d.altitude * 180 / Math.PI
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
}
const kn = Zn("models:Course"), U0 = ["track", "dist", "gain", "loss", "cache", "distance", "start"];
class r_ {
  constructor(s, r) {
    M(this, "event");
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
      new gs(this, {
        id: String(z.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new gs(this, {
        id: String(z.random(3e4, 4e4)),
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
    this._track = s, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss), r.start && (this.event = new Ms(r.start.date, r.start.timezone, s.points[0].lat, s.points[0].lon));
    const a = Object.keys(r).filter((f) => !U0.includes(f));
    Object.assign(this, z.pick(r, a));
  }
  get loops() {
    return this._loops;
  }
  set loops(s) {
    this._loops = s, this.clearCache(2);
  }
  set dist(s) {
    kn(`overriding dist to ${s}`), this._distOverride = s, this.clearCache(2);
  }
  set gain(s) {
    kn(`overriding gain to ${s}`), this._gainOverride = s, this.clearCache(2);
  }
  set loss(s) {
    kn(`overriding loss to ${s}`), this._lossOverride = s, this.clearCache(2);
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
    this._sites = s.map((r) => new gs(this, r)), this.clearCache(1);
  }
  clearCache(s = 1) {
    kn(`clearCache-${s}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrainFactors, delete this._terrainTypes, delete this._waypoints, s === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
      r.clearCache();
    }));
  }
  get waypoints() {
    var r;
    if (this._waypoints)
      return this._waypoints;
    if (!((r = this.track) != null && r.dist))
      return [];
    let s = [];
    return this.sites.forEach((a) => {
      s.push(...a.waypoints);
    }), s = s.sort((a, f) => a.loc - f.loc), this._waypoints = s, this._waypoints;
  }
  set track(s) {
    this._track = s, this.clearCache(2);
  }
  get track() {
    return this._track;
  }
  get points() {
    if (this._points)
      return this._points;
    kn("generating points array"), this._points = new Array(this.track.points.length * this.loops);
    for (let s = 0; s < this.loops; s++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + s * this.track.points.length] = new uu(this, this.track.points[r], s);
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
    const a = this.points.findIndex((C) => Br(C.loc, s, 4)), f = this.points[a];
    if (Ue(f.loc, s, 4))
      return f;
    kn(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = a - 1, d = this.points[p], m = Eu(d.point, f.point, s % this.loopDist / this.distScale), w = new uu(this, m, Math.floor(s / this.loopDist));
    return r && this.points.splice(a, 0, w), w;
  }
  get terrainFactors() {
    if (this._terrainFactors)
      return this._terrainFactors;
    kn("regenerating terrainFactors");
    const s = this.waypoints.filter((r, a) => {
      var f;
      return a === 0 || !z.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[a - 1]) == null ? void 0 : f.terrainFactor);
    });
    return this._terrainFactors = s.map((r, a) => new q0(r, s[a + 1] || z.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes)
      return this._terrainTypes;
    kn("regenerating terrainTypes");
    const s = this.waypoints.filter((r, a) => {
      var f;
      return !z.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[a - 1]) == null ? void 0 : f.terrainType);
    });
    return this._terrainTypes = s.map((r, a) => new z0(r, s[a + 1] || z.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new $0(s)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new O0(this), this._splits);
  }
  get stats() {
    if (this._stats)
      return this._stats;
    kn("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), a = this.terrainFactors.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: z.sum(this.track.points.map((d, m) => {
          var w;
          return d.alt * (d.loc - (((w = this.track.points[m - 1]) == null ? void 0 : w.loc) || 0));
        })) / this.track.dist,
        max: z.max(s) || 0,
        min: z.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: z.max(r) || 0,
        min: z.min(r) || 0
      },
      terrain: {
        avg: (z.sumBy(this.terrainFactors, (d) => (d.end - d.start) * d.value) / this.dist + 100) / 100,
        max: z.max(a) || 0,
        min: z.min(a) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrainFactors.reduce((m, w) => w.value / 100 + 1 === d ? m + w.end - w.start : m, 0);
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(s) {
    const r = s.filter((f) => f > 0 && xs(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class $0 {
  constructor(s) {
    M(this, "waypoint");
    this.waypoint = s;
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
class q0 {
  constructor(s, r, a = 0) {
    M(this, "value");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.value = a;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class z0 {
  constructor(s, r, a) {
    M(this, "type");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = s, this.endWaypoint = r, this.type = a;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var _s = {}, gu;
function G0() {
  return gu || (gu = 1, function(c) {
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
      function r(m) {
        return f(d(m), arguments);
      }
      function a(m, w) {
        return r.apply(null, [m].concat(w || []));
      }
      function f(m, w) {
        var C = 1, I = m.length, v, F = "", R, E, P, N, q, Z, J, it;
        for (R = 0; R < I; R++)
          if (typeof m[R] == "string")
            F += m[R];
          else if (typeof m[R] == "object") {
            if (P = m[R], P.keys)
              for (v = w[C], E = 0; E < P.keys.length; E++) {
                if (v == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', P.keys[E], P.keys[E - 1]));
                v = v[P.keys[E]];
              }
            else P.param_no ? v = w[P.param_no] : v = w[C++];
            if (s.not_type.test(P.type) && s.not_primitive.test(P.type) && v instanceof Function && (v = v()), s.numeric_arg.test(P.type) && typeof v != "number" && isNaN(v))
              throw new TypeError(r("[sprintf] expecting number but found %T", v));
            switch (s.number.test(P.type) && (J = v >= 0), P.type) {
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
                v = JSON.stringify(v, null, P.width ? parseInt(P.width) : 0);
                break;
              case "e":
                v = P.precision ? parseFloat(v).toExponential(P.precision) : parseFloat(v).toExponential();
                break;
              case "f":
                v = P.precision ? parseFloat(v).toFixed(P.precision) : parseFloat(v);
                break;
              case "g":
                v = P.precision ? String(Number(v.toPrecision(P.precision))) : parseFloat(v);
                break;
              case "o":
                v = (parseInt(v, 10) >>> 0).toString(8);
                break;
              case "s":
                v = String(v), v = P.precision ? v.substring(0, P.precision) : v;
                break;
              case "t":
                v = String(!!v), v = P.precision ? v.substring(0, P.precision) : v;
                break;
              case "T":
                v = Object.prototype.toString.call(v).slice(8, -1).toLowerCase(), v = P.precision ? v.substring(0, P.precision) : v;
                break;
              case "u":
                v = parseInt(v, 10) >>> 0;
                break;
              case "v":
                v = v.valueOf(), v = P.precision ? v.substring(0, P.precision) : v;
                break;
              case "x":
                v = (parseInt(v, 10) >>> 0).toString(16);
                break;
              case "X":
                v = (parseInt(v, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            s.json.test(P.type) ? F += v : (s.number.test(P.type) && (!J || P.sign) ? (it = J ? "+" : "-", v = v.toString().replace(s.sign, "")) : it = "", q = P.pad_char ? P.pad_char === "0" ? "0" : P.pad_char.charAt(1) : " ", Z = P.width - (it + v).length, N = P.width && Z > 0 ? q.repeat(Z) : "", F += P.align ? it + v + N : q === "0" ? it + N + v : N + it + v);
          }
        return F;
      }
      var p = /* @__PURE__ */ Object.create(null);
      function d(m) {
        if (p[m])
          return p[m];
        for (var w = m, C, I = [], v = 0; w; ) {
          if ((C = s.text.exec(w)) !== null)
            I.push(C[0]);
          else if ((C = s.modulo.exec(w)) !== null)
            I.push("%");
          else if ((C = s.placeholder.exec(w)) !== null) {
            if (C[2]) {
              v |= 1;
              var F = [], R = C[2], E = [];
              if ((E = s.key.exec(R)) !== null)
                for (F.push(E[1]); (R = R.substring(E[0].length)) !== ""; )
                  if ((E = s.key_access.exec(R)) !== null)
                    F.push(E[1]);
                  else if ((E = s.index_access.exec(R)) !== null)
                    F.push(E[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              C[2] = F;
            } else
              v |= 2;
            if (v === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            I.push(
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
          w = w.substring(C[0].length);
        }
        return p[m] = I;
      }
      c.sprintf = r, c.vsprintf = a, typeof window < "u" && (window.sprintf = r, window.vsprintf = a);
    })();
  }(_s)), _s;
}
var Cs = G0();
const H0 = Zn("PaceChunk");
class K0 {
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
class du {
  constructor(s, r, a, f) {
    M(this, "constraints");
    M(this, "points");
    M(this, "plan");
    M(this, "delay");
    M(this, "factor");
    M(this, "factors", new Sn());
    M(this, "status");
    this.constraints = a, this.points = r, this.plan = s, this.delay = f, this.factor = 1;
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
    let r = s[0].elapsed, a = s[0].delay || 0, f = 0, p = 0, d = 0;
    const m = this.factor ? this.np : this.plan.pacing.pace, w = new Sn().init(0);
    for (let C = 1, I = s.length; C < I; C++) {
      f = s[C].loc - s[C - 1].loc, Wr(s[C - 1], this.plan), w.applyEach((F, R) => F + R * f, s[C - 1].factors);
      const v = s[C - 1].factors.combined;
      d += v * f, p = m * v * f, s[C].time = s[C - 1].time + p, a = s[C - 1].delay || 0, r += p + a, s[C].elapsed = r, this.plan.event.start && (s[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Wr(s[s.length - 1], this.plan), this.factors = w.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = H0.extend(Cs.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc]));
    let f = this.factor || 0, p;
    const d = new K0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !z.round(f - this.factor, 10), f = this.factor, d.target = Math.abs((z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed) < 0.1, a(Cs.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    a("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const jt = Zn("Pacing");
class Z0 {
  constructor(s) {
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
    jt("invalidate"), this.chunks = [], this.clearCache();
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
    return jt("factors:get"), this._factors || (jt("factors:update"), this._factors = bs(this.chunks)), this._factors;
  }
  get np() {
    return jt("np:get"), this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.plan.delay;
  }
  get status() {
    var s, r, a;
    return {
      complete: ((s = this.chunks) == null ? void 0 : s.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((f) => {
        var p;
        return !((p = f.status) != null && p.success);
      }).length) === 0,
      chunks: ((a = this.chunks) == null ? void 0 : a.length) || 0
    };
  }
  calculate() {
    var a, f;
    const s = jt.extend("calculate");
    s("exec"), s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (a = this.plan.course.terrainFactors) == null || a.forEach((p) => this.plan.getPoint(p.start, !0)), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint(p.loc, !0);
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      p.delay = 0;
    }), (f = this.plan.delays) == null || f.forEach((p) => {
      const d = this.plan.getPoint(p.loc, !0);
      d.delay = p.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...z.reverse([...this.plan.cutoffs]), null].forEach((p) => {
      for (; this.chunks.find((d) => !d.status); )
        this.calcChunks(), this.validateChunks();
      if (!p)
        return !0;
      if (p.point.elapsed - p.time > 0.5) {
        s(`cutoff at ${p.loc} missed`);
        const d = this.chunks[0];
        z.last(d.points) === p.point ? (s(`setting cutoff at ${p.loc}`), d.constraints = [0, p.time], delete d.status) : this.splitChunk(d, p.point, p.time);
      }
    }), z.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), jt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`);
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
    this.chunks = [new du(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
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
  splitChunk(s, r, a) {
    jt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((w) => w === r), d = z.round(r.elapsed - r.time), m = new du(this.plan, s.points.slice(0, p + 1), [0, a], d);
    m.points.filter((w, C) => C < m.points.length - 1).forEach((w) => {
      w._chunk = m;
    }), this.chunks.unshift(m), s.constraints[0] = a, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const a = this.chunks.findIndex((p) => p === s), f = this.chunks.findIndex((p) => p === r);
    if (f - a !== 1)
      throw new Error("chunks must be sequential");
    jt(Cs.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, f, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class _u {
  constructor(s, r) {
    M(this, "factors", new Sn());
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
    if (!this._chunk)
      throw new Error("PlanPoint._chunk not defined");
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
const vs = Zn("PlanSplits");
class J0 {
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
    vs("createSegments");
    const s = this.plan.course.waypoints.filter((a) => a.tier < 3).sort((a, f) => a.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((a) => a.loc)));
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((a, f) => {
      a.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    vs(`createSplits:${s}`);
    const r = Iu(s), a = z.range(this.plan.course.dist * r).map((p) => p / r);
    this.plan.course.dist - a[a.length - 1] > 1e-4 && a.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(a));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var R;
    vs.extend("calcSegments")("exec");
    const a = this.plan, f = a.course, p = a.points, d = [], m = [];
    let w, C, I = a.points[0], v;
    for (w = 0, C = s.length; w < C; w++) {
      const E = s[w];
      v && Ue((R = s[w - 1]) == null ? void 0 : R.end, E.start, 4) ? I = v : I = a.getPoint(E.start), v = a.getPoint(E.end);
      const P = E.end - E.start, N = new L0(this.plan, {
        gain: 0,
        loss: 0,
        grade: P > 0 ? (v.alt - I.alt) / P / 10 * (v.alt - I.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: I,
        point2: v
      }), q = new Sn().init(0);
      d.push(N), m.push(q);
    }
    const F = (E, P, N, q) => {
      const Z = N.alt - P.alt;
      E[Z > 0 ? "gain" : "loss"] += Z * (Z > 0 ? f.gainScale : f.lossScale), Wr(P, a);
      const J = N.loc - P.loc;
      q.applyEach((it, _t) => it + _t * J, P.factors);
    };
    w = 1;
    for (let E = 0; E < d.length; E++) {
      const P = d[E], N = m[E];
      for (; ye(p[w].loc, P.point1.loc, 4); )
        w++;
      let q = P.point1;
      for (; w < p.length && ye(p[w].loc, P.point2.loc, 4); ) {
        const Z = p[w];
        F(P, q, Z, N), q = Z, w++;
      }
      F(P, q, P.point2, N), a && (P.delay = a.delays.filter((Z) => Br(P.point1.loc, Z.loc, 4) && xs(P.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return d;
  }
}
const _n = Zn("models:Plan");
class i_ {
  constructor(s, r) {
    M(this, "course");
    M(this, "_cutoffMargin", 0);
    M(this, "_cutoffs");
    M(this, "_specifiedDelays", []);
    M(this, "_delays");
    M(this, "event");
    M(this, "_events");
    M(this, "_heatModel");
    /**
     * Unique identifier for the plan
     */
    M(this, "id");
    M(this, "_method");
    /**
     * Display name for the plan
     */
    M(this, "name");
    M(this, "pacing");
    M(this, "points");
    M(this, "_scales", new Q0(this));
    M(this, "_splits");
    M(this, "_stats");
    M(this, "_strategy");
    M(this, "_target");
    M(this, "_typicalDelay", 0);
    this.course = s;
    const a = r.start ? new Ms(r.start.date, r.start.timezone, s.points[0].lat, s.points[0].lon) : s.event;
    if (!a)
      throw new Error("Start date/timezone is required for either the plan or the course");
    this.event = a, this.id = r.id, this.pacing = new Z0(this), this.points = this.course.points.map((f) => new _u(this, f)), this._method = r.method, this._target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this.scales = r.scales, this._strategy = new ms(this, r.strategy), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name;
  }
  get cutoffMargin() {
    return this._cutoffMargin;
  }
  set cutoffMargin(s) {
    s !== this._cutoffMargin && (this._cutoffMargin = s, delete this._cutoffs, this.invalidatePacing());
  }
  get cutoffs() {
    if (this._cutoffs)
      return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new X0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this._cutoffs.length - 1 >= s; ) {
      const r = this._cutoffs[s];
      this._cutoffs.find((a, f) => f > s && a.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(s, 1)) : s++;
    }
    return this._cutoffs;
  }
  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return z.sumBy(this.delays, "delay");
  }
  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   */
  get delays() {
    if (this._delays)
      return this._delays;
    const s = this.course.waypoints.map((a) => {
      var d;
      const f = (d = this._specifiedDelays) == null ? void 0 : d.find((m) => ws(m.waypoint, a)), p = f ? f.delay : a.hasTypicalDelay ? this.typicalDelay : 0;
      return new Y0(a, p);
    }).filter((a) => a.delay > 0).sort((a, f) => a.loc - f.loc);
    let r = 0;
    for (; s.length - 1 >= r; )
      r > 0 && s[r].loc === s[r - 1].loc ? (_n(`get delays: merging delay at ${s[r].loc} km`), s[r - 1].delay += s[r].delay, s.splice(r, 1)) : r++;
    return this._delays = s, this._delays;
  }
  set delays(s) {
    z.isEqual(this._specifiedDelays, s) || (this._specifiedDelays = s, delete this._delays, this.invalidatePacing());
  }
  get events() {
    if (this._events)
      return this._events;
    _n("calculating events.sun");
    const s = [], r = this.event.elapsedToTimeOfDay(0), a = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < a; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((w) => {
        const C = w.time - r + 86400 * d;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && s.push({ event: w.event, elapsed: C });
      });
    s.sort((d, m) => d.elapsed - m.elapsed);
    const f = mu(this.points.map((d) => d.elapsed), this.points.map((d) => d.loc), s.map((d) => d.elapsed)), p = s.map((d, m) => ({ ...d, loc: f[m] }));
    return this._events = { sun: p }, this._events;
  }
  get heatModel() {
    return this._heatModel;
  }
  set heatModel(s) {
    z.isEqual(Ss.pick(this._heatModel, ["baseline", "max"]), s) || (s ? this._heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: s.baseline,
      max: s.max
    } : delete this._heatModel, this.invalidatePacing());
  }
  /**
   * Method for calculating target time
   */
  get method() {
    return this._method;
  }
  set method(s) {
    s !== this._method && (this._method = s, this.invalidatePacing());
  }
  /**
   * Scales for factors
   */
  get scales() {
    return this._scales;
  }
  set scales(s) {
    this._scales.altitude = (s == null ? void 0 : s.altitude) || 1, this._scales.dark = (s == null ? void 0 : s.dark) || 1;
  }
  /**
   * splits are calculaed on get
   */
  get splits() {
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new J0(this), this._splits);
  }
  set start(s) {
    this.event.start.getTime() === s.date.getTime() && this.event.timezone === s.timezone || (this.event = new Ms(s.date, s.timezone, this.points[0].lat, this.points[0].lon), this.invalidatePacing());
  }
  /**
   * Plan stats object
   */
  get stats() {
    if (this._stats)
      return this._stats;
    _n("calculating stats.factors");
    const s = z.fromPairs(Au.map((p) => {
      const d = this.points.map((m) => m.factors.get(p));
      return [
        p,
        {
          min: Number(z.min(d)),
          max: Number(z.max(d))
        }
      ];
    }));
    _n("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let a = 0, f = 0;
    return this.points.forEach((p, d) => {
      var m, w;
      a = p.loc - (((m = this.points[d - 1]) == null ? void 0 : m.loc) || 0), f = p.elapsed - (((w = this.points[d - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += a) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += a) : (r.day.time += f, r.day.dist += a);
    }), this._stats = { factors: s, sun: r }, this._stats;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(s) {
    (s == null ? void 0 : s.length) === this._strategy.values.length && s.every((r, a) => z.isEqual(r, this._strategy.values[a])) || (this._strategy = new ms(this, s), this.invalidatePacing());
  }
  /**
   * Target time in seconds
   */
  get target() {
    return this._target;
  }
  set target(s) {
    s !== this._target && (this._target = s, this.invalidatePacing());
  }
  /**
   * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
   */
  get typicalDelay() {
    return this._typicalDelay;
  }
  set typicalDelay(s) {
    s !== this._typicalDelay && (this._typicalDelay = s, this.invalidatePacing());
  }
  checkPacing() {
    var s, r;
    if (_n("checkPacing"), (s = this.pacing.status) != null && s.complete || (_n("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length))
      throw new Error("No plan points");
    return !0;
  }
  clearCache() {
    _n("clearCache"), delete this._cutoffs, delete this._splits, delete this._stats;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((a) => ws(a.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    const a = this.points.findIndex((w) => Br(w.loc, s, 4)), f = this.points[a];
    if (Ue(f.loc, s, 4))
      return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = a - 1, d = this.points[p], m = new _u(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const w = f.elapsed - f.time - (d.elapsed - d.time);
      m.time = me(d.loc, f.loc, d.time + w, f.time, f.loc), m.elapsed = f.elapsed - (f.time - m.time), this.event.start && (m.tod = this.event.elapsedToTimeOfDay(m.elapsed));
    }
    return r && this.points.splice(a, 0, m), m;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits, delete this._stats;
  }
}
class Y0 {
  constructor(s, r) {
    M(this, "delay");
    M(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class X0 {
  constructor(s, r, a) {
    M(this, "plan");
    M(this, "courseCutoff");
    M(this, "point");
    this.plan = s, this.courseCutoff = r, this.point = a;
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
class Q0 {
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
    s !== this._altitude && (this._altitude = s, this.plan.invalidatePacing());
  }
  get dark() {
    return this._dark;
  }
  set dark(s) {
    s !== this._dark && (this._dark = s, this.plan.invalidatePacing());
  }
}
const Ru = (c, s, r, a) => {
  const f = wu(c, s, r, a), p = [];
  return r.forEach((d, m) => {
    let w = f[m][0] / 10;
    w > 50 ? w = 50 : w < -50 && (w = -50);
    const C = d * f[m][0] + f[m][1];
    p.push({
      grade: w,
      alt: C
    });
  }), p;
};
function V0(c, s) {
  return Ru(s, c.map((a) => a.alt), s, 0.05).map((a) => a.grade);
}
const j0 = (c) => {
  let s = 0, r = 0;
  const a = [0];
  for (let f = 1, p = c.length; f < p; f++)
    s = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += s, a.push(r);
  return a;
}, Nr = Zn("models:Track");
class Is {
  constructor(s) {
    M(this, "dist");
    M(this, "gain");
    M(this, "loss");
    M(this, "points");
    Nr("Creating new Track object");
    const r = s.map((C) => new Pu(C.lat, C.lon, C.alt)), a = j0(r), f = V0(r, a);
    this.points = r.map((C, I) => new Fu(C.lat, C.lon, C.alt, a[I], f[I])), Nr(`set-points - ${r.length} points`), Nr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, m = 0, w = this.points[0].alt;
    this.points.forEach((C) => {
      m = C.alt - w, m < 0 ? d += m : p += m, w = C.alt;
    }), this.gain = p, this.loss = d;
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
    if (s === 0)
      r = this.points[0];
    else {
      const a = this.points.findIndex((f) => f.loc >= s);
      r = Eu(this.points[a - 1], this.points[a], s);
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
  getNearestPoint(s, r, a) {
    let p = this.points.findIndex((w) => w === r), d = this.points[p], m = 0;
    for (; a > 0.025; ) {
      const w = a / 5, C = [d];
      for (let F = 1; F <= 5; F++) {
        const R = d.loc + w * F;
        if (R <= this.dist) {
          for (; this.points[p + 1].loc < R && p < this.points.length - 1; )
            p++;
          C.push(this.points[p]);
        }
      }
      const I = C.map((F) => Number(s.distanceTo(F.latlon)));
      m = Math.min(...I);
      const v = I.findIndex((F) => F === m);
      d = C[v], a = a / 5;
    }
    return {
      point: d,
      delta: m
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const a = Nr.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return a("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / s) + 1, d = Array(p).fill(0).map((I, v) => Nt(v++ * s, 3));
    d[d.length - 1] < f && d.push(f);
    const m = Ru(this.points.map((I) => I.loc), this.points.map((I) => I.alt), d, 2 * s), w = d.map((I) => this.getLLA(I)).map((I, v) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(m[v].alt, 2)
    })), C = new Is(w);
    return a(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
function s_(c, s, r) {
  const a = c.map((f, p) => ({ lat: c[p], lon: s[p], alt: r[p] }));
  return new Is(a);
}
const a_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Kn
}, Symbol.toStringTag, { value: "Module" }));
export {
  r_ as Course,
  $0 as CourseCutoff,
  uu as CoursePoint,
  R0 as CourseSegment,
  Ms as Event,
  Sn as Factors,
  Z0 as Pacing,
  i_ as Plan,
  _u as PlanPoint,
  L0 as PlanSegment,
  Pu as Point,
  gs as Site,
  ms as Strategy,
  Is as Track,
  Fu as TrackPoint,
  cu as Waypoint,
  T0 as adjustStrategy,
  s_ as createTrackFromArrays,
  e_ as factors,
  Eu as interpolatePoint,
  n_ as math,
  A0 as scaleDark,
  a_ as util
};
