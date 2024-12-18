var d0 = Object.defineProperty;
var _0 = (c, s, r) => s in c ? d0(c, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[s] = r;
var C = (c, s, r) => _0(c, typeof s != "symbol" ? s + "" : s, r);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vu(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var We = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var v0 = We.exports, iu;
function m0() {
  return iu || (iu = 1, function(c, s) {
    (function() {
      var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", M = 500, I = "__lodash_placeholder__", m = 1, T = 2, F = 4, R = 1, E = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Bt = 64, St = 128, tn = 256, Ht = 512, Rt = 30, we = "...", $e = 800, Ur = 16, Me = 1, qe = 2, $r = 3, bn = 1 / 0, vn = 9007199254740991, ze = 17976931348623157e292, xn = NaN, O = 4294967295, $ = O - 1, G = O >>> 1, ct = [
        ["ary", St],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Bt],
        ["rearg", tn]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", mn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", kn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", yn = "[object String]", Ge = "[object Symbol]", Lu = "[object Undefined]", Ce = "[object WeakMap]", Ou = "[object WeakSet]", Se = "[object ArrayBuffer]", re = "[object DataView]", qr = "[object Float32Array]", zr = "[object Float64Array]", Gr = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", ku = /\b__p \+= '';/g, Du = /\b(__p \+=) '' \+/g, Nu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ps = /&(?:amp|lt|gt|quot|#39);/g, Es = /[&<>"']/g, Bu = RegExp(Ps.source), Wu = RegExp(Es.source), Uu = /<%-([\s\S]+?)%>/g, $u = /<%([\s\S]+?)%>/g, Ts = /<%=([\s\S]+?)%>/g, qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zu = /^\w*$/, Gu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Hu = RegExp(Qr.source), Vr = /^\s+/, Ku = /\s/, Zu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ju = /\{\n\/\* \[wrapped with (.+)\] \*/, Yu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qu = /[()=,{}\[\]\/\s]/, Vu = /\\(\\)?/g, ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Rs = /\w*$/, tl = /^[-+]0x[0-9a-f]+$/i, nl = /^0b[01]+$/i, el = /^\[object .+?Constructor\]$/, rl = /^0o[0-7]+$/i, il = /^(?:0|[1-9]\d*)$/, sl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, He = /($^)/, al = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", ol = "\\u0300-\\u036f", ul = "\\ufe20-\\ufe2f", ll = "\\u20d0-\\u20ff", Fs = ol + ul + ll, Ls = "\\u2700-\\u27bf", Os = "a-z\\xdf-\\xf6\\xf8-\\xff", fl = "\\xac\\xb1\\xd7\\xf7", cl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hl = "\\u2000-\\u206f", pl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ks = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ds = "\\ufe0e\\ufe0f", Ns = fl + cl + hl + pl, jr = "['’]", gl = "[" + Ke + "]", Bs = "[" + Ns + "]", Ze = "[" + Fs + "]", Ws = "\\d+", dl = "[" + Ls + "]", Us = "[" + Os + "]", $s = "[^" + Ke + Ns + Ws + Ls + Os + ks + "]", ti = "\\ud83c[\\udffb-\\udfff]", _l = "(?:" + Ze + "|" + ti + ")", qs = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + ks + "]", zs = "\\u200d", Gs = "(?:" + Us + "|" + $s + ")", vl = "(?:" + ie + "|" + $s + ")", Hs = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Ks = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", Zs = _l + "?", Js = "[" + Ds + "]?", ml = "(?:" + zs + "(?:" + [qs, ni, ei].join("|") + ")" + Js + Zs + ")*", yl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ys = Js + Zs + ml, Ml = "(?:" + [dl, ni, ei].join("|") + ")" + Ys, Cl = "(?:" + [qs + Ze + "?", Ze, ni, ei, gl].join("|") + ")", Sl = RegExp(jr, "g"), bl = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + Cl + Ys, "g"), xl = RegExp([
        ie + "?" + Us + "+" + Hs + "(?=" + [Bs, ie, "$"].join("|") + ")",
        vl + "+" + Ks + "(?=" + [Bs, ie + Gs, "$"].join("|") + ")",
        ie + "?" + Gs + "+" + Hs,
        ie + "+" + Ks,
        wl,
        yl,
        Ws,
        Ml
      ].join("|"), "g"), Al = RegExp("[" + zs + Ke + Fs + Ds + "]"), Il = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pl = [
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
      ], El = -1, ft = {};
      ft[qr] = ft[zr] = ft[Gr] = ft[Hr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[Se] = ft[lt] = ft[re] = ft[Mt] = ft[Ft] = ft[Wt] = ft[vt] = ft[Lt] = ft[Ct] = ft[nn] = ft[pt] = ft[yn] = ft[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[Se] = ut[re] = ut[lt] = ut[Mt] = ut[qr] = ut[zr] = ut[Gr] = ut[Hr] = ut[Kr] = ut[vt] = ut[Lt] = ut[Ct] = ut[nn] = ut[pt] = ut[yn] = ut[Ge] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Ft] = ut[Wt] = ut[Ce] = !1;
      var Tl = {
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
      }, Rl = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Fl = {
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
      }, Ol = parseFloat, kl = parseInt, Xs = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Dl = typeof self == "object" && self && self.Object === Object && self, It = Xs || Dl || Function("return this")(), ii = s && !s.nodeType && s, Zn = ii && !0 && c && !c.nodeType && c, Qs = Zn && Zn.exports === ii, si = Qs && Xs.process, en = function() {
        try {
          var _ = Zn && Zn.require && Zn.require("util").types;
          return _ || si && si.binding && si.binding("util");
        } catch {
        }
      }(), Vs = en && en.isArrayBuffer, js = en && en.isDate, ta = en && en.isMap, na = en && en.isRegExp, ea = en && en.isSet, ra = en && en.isTypedArray;
      function Zt(_, b, S) {
        switch (S.length) {
          case 0:
            return _.call(b);
          case 1:
            return _.call(b, S[0]);
          case 2:
            return _.call(b, S[0], S[1]);
          case 3:
            return _.call(b, S[0], S[1], S[2]);
        }
        return _.apply(b, S);
      }
      function Nl(_, b, S, k) {
        for (var H = -1, et = _ == null ? 0 : _.length; ++H < et; ) {
          var bt = _[H];
          b(k, bt, S(bt), _);
        }
        return k;
      }
      function rn(_, b) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k && b(_[S], S, _) !== !1; )
          ;
        return _;
      }
      function Bl(_, b) {
        for (var S = _ == null ? 0 : _.length; S-- && b(_[S], S, _) !== !1; )
          ;
        return _;
      }
      function ia(_, b) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k; )
          if (!b(_[S], S, _))
            return !1;
        return !0;
      }
      function Dn(_, b) {
        for (var S = -1, k = _ == null ? 0 : _.length, H = 0, et = []; ++S < k; ) {
          var bt = _[S];
          b(bt, S, _) && (et[H++] = bt);
        }
        return et;
      }
      function Je(_, b) {
        var S = _ == null ? 0 : _.length;
        return !!S && se(_, b, 0) > -1;
      }
      function ai(_, b, S) {
        for (var k = -1, H = _ == null ? 0 : _.length; ++k < H; )
          if (S(b, _[k]))
            return !0;
        return !1;
      }
      function gt(_, b) {
        for (var S = -1, k = _ == null ? 0 : _.length, H = Array(k); ++S < k; )
          H[S] = b(_[S], S, _);
        return H;
      }
      function Nn(_, b) {
        for (var S = -1, k = b.length, H = _.length; ++S < k; )
          _[H + S] = b[S];
        return _;
      }
      function oi(_, b, S, k) {
        var H = -1, et = _ == null ? 0 : _.length;
        for (k && et && (S = _[++H]); ++H < et; )
          S = b(S, _[H], H, _);
        return S;
      }
      function Wl(_, b, S, k) {
        var H = _ == null ? 0 : _.length;
        for (k && H && (S = _[--H]); H--; )
          S = b(S, _[H], H, _);
        return S;
      }
      function ui(_, b) {
        for (var S = -1, k = _ == null ? 0 : _.length; ++S < k; )
          if (b(_[S], S, _))
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
      function sa(_, b, S) {
        var k;
        return S(_, function(H, et, bt) {
          if (b(H, et, bt))
            return k = et, !1;
        }), k;
      }
      function Ye(_, b, S, k) {
        for (var H = _.length, et = S + (k ? 1 : -1); k ? et-- : ++et < H; )
          if (b(_[et], et, _))
            return et;
        return -1;
      }
      function se(_, b, S) {
        return b === b ? tf(_, b, S) : Ye(_, aa, S);
      }
      function zl(_, b, S, k) {
        for (var H = S - 1, et = _.length; ++H < et; )
          if (k(_[H], b))
            return H;
        return -1;
      }
      function aa(_) {
        return _ !== _;
      }
      function oa(_, b) {
        var S = _ == null ? 0 : _.length;
        return S ? ci(_, b) / S : xn;
      }
      function li(_) {
        return function(b) {
          return b == null ? r : b[_];
        };
      }
      function fi(_) {
        return function(b) {
          return _ == null ? r : _[b];
        };
      }
      function ua(_, b, S, k, H) {
        return H(_, function(et, bt, at) {
          S = k ? (k = !1, et) : b(S, et, bt, at);
        }), S;
      }
      function Gl(_, b) {
        var S = _.length;
        for (_.sort(b); S--; )
          _[S] = _[S].value;
        return _;
      }
      function ci(_, b) {
        for (var S, k = -1, H = _.length; ++k < H; ) {
          var et = b(_[k]);
          et !== r && (S = S === r ? et : S + et);
        }
        return S;
      }
      function hi(_, b) {
        for (var S = -1, k = Array(_); ++S < _; )
          k[S] = b(S);
        return k;
      }
      function Hl(_, b) {
        return gt(b, function(S) {
          return [S, _[S]];
        });
      }
      function la(_) {
        return _ && _.slice(0, pa(_) + 1).replace(Vr, "");
      }
      function Jt(_) {
        return function(b) {
          return _(b);
        };
      }
      function pi(_, b) {
        return gt(b, function(S) {
          return _[S];
        });
      }
      function be(_, b) {
        return _.has(b);
      }
      function fa(_, b) {
        for (var S = -1, k = _.length; ++S < k && se(b, _[S], 0) > -1; )
          ;
        return S;
      }
      function ca(_, b) {
        for (var S = _.length; S-- && se(b, _[S], 0) > -1; )
          ;
        return S;
      }
      function Kl(_, b) {
        for (var S = _.length, k = 0; S--; )
          _[S] === b && ++k;
        return k;
      }
      var Zl = fi(Tl), Jl = fi(Rl);
      function Yl(_) {
        return "\\" + Ll[_];
      }
      function Xl(_, b) {
        return _ == null ? r : _[b];
      }
      function ae(_) {
        return Al.test(_);
      }
      function Ql(_) {
        return Il.test(_);
      }
      function Vl(_) {
        for (var b, S = []; !(b = _.next()).done; )
          S.push(b.value);
        return S;
      }
      function gi(_) {
        var b = -1, S = Array(_.size);
        return _.forEach(function(k, H) {
          S[++b] = [H, k];
        }), S;
      }
      function ha(_, b) {
        return function(S) {
          return _(b(S));
        };
      }
      function Bn(_, b) {
        for (var S = -1, k = _.length, H = 0, et = []; ++S < k; ) {
          var bt = _[S];
          (bt === b || bt === I) && (_[S] = I, et[H++] = S);
        }
        return et;
      }
      function Xe(_) {
        var b = -1, S = Array(_.size);
        return _.forEach(function(k) {
          S[++b] = k;
        }), S;
      }
      function jl(_) {
        var b = -1, S = Array(_.size);
        return _.forEach(function(k) {
          S[++b] = [k, k];
        }), S;
      }
      function tf(_, b, S) {
        for (var k = S - 1, H = _.length; ++k < H; )
          if (_[k] === b)
            return k;
        return -1;
      }
      function nf(_, b, S) {
        for (var k = S + 1; k--; )
          if (_[k] === b)
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
        for (var b = _.length; b-- && Ku.test(_.charAt(b)); )
          ;
        return b;
      }
      var ef = fi(Fl);
      function rf(_) {
        for (var b = ri.lastIndex = 0; ri.test(_); )
          ++b;
        return b;
      }
      function sf(_) {
        return _.match(ri) || [];
      }
      function af(_) {
        return _.match(xl) || [];
      }
      var of = function _(b) {
        b = b == null ? It : ue.defaults(It.Object(), b, ue.pick(It, Pl));
        var S = b.Array, k = b.Date, H = b.Error, et = b.Function, bt = b.Math, at = b.Object, di = b.RegExp, uf = b.String, sn = b.TypeError, Qe = S.prototype, lf = et.prototype, le = at.prototype, Ve = b["__core-js_shared__"], je = lf.toString, st = le.hasOwnProperty, ff = 0, ga = function() {
          var t = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), tr = le.toString, cf = je.call(at), hf = It._, pf = di(
          "^" + je.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Qs ? b.Buffer : r, Wn = b.Symbol, er = b.Uint8Array, da = nr ? nr.allocUnsafe : r, rr = ha(at.getPrototypeOf, at), _a = at.create, va = le.propertyIsEnumerable, ir = Qe.splice, ma = Wn ? Wn.isConcatSpreadable : r, xe = Wn ? Wn.iterator : r, Jn = Wn ? Wn.toStringTag : r, sr = function() {
          try {
            var t = jn(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), gf = b.clearTimeout !== It.clearTimeout && b.clearTimeout, df = k && k.now !== It.Date.now && k.now, _f = b.setTimeout !== It.setTimeout && b.setTimeout, ar = bt.ceil, or = bt.floor, _i = at.getOwnPropertySymbols, vf = nr ? nr.isBuffer : r, ya = b.isFinite, mf = Qe.join, yf = ha(at.keys, at), xt = bt.max, Et = bt.min, wf = k.now, Mf = b.parseInt, wa = bt.random, Cf = Qe.reverse, vi = jn(b, "DataView"), Ae = jn(b, "Map"), mi = jn(b, "Promise"), fe = jn(b, "Set"), Ie = jn(b, "WeakMap"), Pe = jn(at, "create"), ur = Ie && new Ie(), ce = {}, Sf = te(vi), bf = te(Ae), xf = te(mi), Af = te(fe), If = te(Ie), lr = Wn ? Wn.prototype : r, Ee = lr ? lr.valueOf : r, Ma = lr ? lr.toString : r;
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
          interpolate: Ts,
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
        function Pf() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function Ef() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Tf() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = K(t), i = n < 0, a = e ? t.length : 0, l = qc(0, a, this.__views__), h = l.start, g = l.end, y = g - h, x = i ? g : h - 1, A = this.__iteratees__, P = A.length, L = 0, D = Et(y, this.__takeCount__);
          if (!e || !i && a == y && D == y)
            return Ha(t, this.__actions__);
          var W = [];
          t:
            for (; y-- && L < D; ) {
              x += n;
              for (var X = -1, U = t[x]; ++X < P; ) {
                var V = A[X], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == qe)
                  U = Dt;
                else if (!Dt) {
                  if (Qt == Me)
                    continue t;
                  break t;
                }
              }
              W[L++] = U;
            }
          return W;
        }
        j.prototype = he(fr.prototype), j.prototype.constructor = j;
        function Yn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Rf() {
          this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
        }
        function Ff(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Lf(t) {
          var n = this.__data__;
          if (Pe) {
            var e = n[t];
            return e === w ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function Of(t) {
          var n = this.__data__;
          return Pe ? n[t] !== r : st.call(n, t);
        }
        function kf(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Pe && n === r ? w : n, this;
        }
        Yn.prototype.clear = Rf, Yn.prototype.delete = Ff, Yn.prototype.get = Lf, Yn.prototype.has = Of, Yn.prototype.set = kf;
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
        function Bf(t) {
          var n = this.__data__, e = cr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Wf(t) {
          return cr(this.__data__, t) > -1;
        }
        function Uf(t, n) {
          var e = this.__data__, i = cr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        An.prototype.clear = Df, An.prototype.delete = Nf, An.prototype.get = Bf, An.prototype.has = Wf, An.prototype.set = Uf;
        function In(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function $f() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Ae || An)(),
            string: new Yn()
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
        function Xn(t) {
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
        Xn.prototype.add = Xn.prototype.push = Kf, Xn.prototype.has = Zf;
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
          var e = K(t), i = !e && ne(t), a = !e && !i && Gn(t), l = !e && !i && !a && _e(t), h = e || i || a || l, g = h ? hi(t.length, uf) : [], y = g.length;
          for (var x in t)
            (n || st.call(t, x)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            a && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
            Rn(x, y))) && g.push(x);
          return g;
        }
        function Sa(t) {
          var n = t.length;
          return n ? t[Ei(0, n - 1)] : r;
        }
        function jf(t, n) {
          return br($t(t), Qn(n, 0, t.length));
        }
        function tc(t) {
          return br($t(t));
        }
        function yi(t, n, e) {
          (e !== r && !gn(t[n], e) || e === r && !(n in t)) && Pn(t, n, e);
        }
        function Te(t, n, e) {
          var i = t[n];
          (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && Pn(t, n, e);
        }
        function cr(t, n) {
          for (var e = t.length; e--; )
            if (gn(t[e][0], n))
              return e;
          return -1;
        }
        function nc(t, n, e, i) {
          return Un(t, function(a, l, h) {
            n(i, a, e(a), h);
          }), i;
        }
        function ba(t, n) {
          return t && Mn(n, At(n), t);
        }
        function ec(t, n) {
          return t && Mn(n, zt(n), t);
        }
        function Pn(t, n, e) {
          n == "__proto__" && sr ? sr(t, n, {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0
          }) : t[n] = e;
        }
        function wi(t, n) {
          for (var e = -1, i = n.length, a = S(i), l = t == null; ++e < i; )
            a[e] = l ? r : ts(t, n[e]);
          return a;
        }
        function Qn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function on(t, n, e, i, a, l) {
          var h, g = n & m, y = n & T, x = n & F;
          if (e && (h = a ? e(t, i, a, l) : e(t)), h !== r)
            return h;
          if (!dt(t))
            return t;
          var A = K(t);
          if (A) {
            if (h = Gc(t), !g)
              return $t(t, h);
          } else {
            var P = Tt(t), L = P == Wt || P == mn;
            if (Gn(t))
              return Ja(t, g);
            if (P == Ct || P == nt || L && !a) {
              if (h = y || L ? {} : po(t), !g)
                return y ? Lc(t, ec(h, t)) : Fc(t, ba(h, t));
            } else {
              if (!ut[P])
                return a ? t : {};
              h = Hc(t, P, g);
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
          var W = x ? y ? Ui : Wi : y ? zt : At, X = A ? r : W(t);
          return rn(X || t, function(U, V) {
            X && (V = U, U = t[V]), Te(h, V, on(U, n, e, V, t, l));
          }), h;
        }
        function rc(t) {
          var n = At(t);
          return function(e) {
            return xa(e, t, n);
          };
        }
        function xa(t, n, e) {
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
        function Aa(t, n, e) {
          if (typeof t != "function")
            throw new sn(d);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Re(t, n, e, i) {
          var a = -1, l = Je, h = !0, g = t.length, y = [], x = n.length;
          if (!g)
            return y;
          e && (n = gt(n, Jt(e))), i ? (l = ai, h = !1) : n.length >= f && (l = be, h = !1, n = new Xn(n));
          t:
            for (; ++a < g; ) {
              var A = t[a], P = e == null ? A : e(A);
              if (A = i || A !== 0 ? A : 0, h && P === P) {
                for (var L = x; L--; )
                  if (n[L] === P)
                    continue t;
                y.push(A);
              } else l(n, P, i) || y.push(A);
            }
          return y;
        }
        var Un = ja(wn), Ia = ja(Ci, !0);
        function ic(t, n) {
          var e = !0;
          return Un(t, function(i, a, l) {
            return e = !!n(i, a, l), e;
          }), e;
        }
        function hr(t, n, e) {
          for (var i = -1, a = t.length; ++i < a; ) {
            var l = t[i], h = n(l);
            if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
              var g = h, y = l;
          }
          return y;
        }
        function sc(t, n, e, i) {
          var a = t.length;
          for (e = Y(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : Y(i), i < 0 && (i += a), i = e > i ? 0 : Ho(i); e < i; )
            t[e++] = n;
          return t;
        }
        function Pa(t, n) {
          var e = [];
          return Un(t, function(i, a, l) {
            n(i, a, l) && e.push(i);
          }), e;
        }
        function Pt(t, n, e, i, a) {
          var l = -1, h = t.length;
          for (e || (e = Zc), a || (a = []); ++l < h; ) {
            var g = t[l];
            n > 0 && e(g) ? n > 1 ? Pt(g, n - 1, e, i, a) : Nn(a, g) : i || (a[a.length] = g);
          }
          return a;
        }
        var Mi = to(), Ea = to(!0);
        function wn(t, n) {
          return t && Mi(t, n, At);
        }
        function Ci(t, n) {
          return t && Ea(t, n, At);
        }
        function pr(t, n) {
          return Dn(n, function(e) {
            return Fn(t[e]);
          });
        }
        function Vn(t, n) {
          n = qn(n, t);
          for (var e = 0, i = n.length; t != null && e < i; )
            t = t[Cn(n[e++])];
          return e && e == i ? t : r;
        }
        function Ta(t, n, e) {
          var i = n(t);
          return K(t) ? i : Nn(i, e(t));
        }
        function Ot(t) {
          return t == null ? t === r ? Lu : kn : Jn && Jn in at(t) ? $c(t) : th(t);
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
          return t >= Et(n, e) && t < xt(n, e);
        }
        function bi(t, n, e) {
          for (var i = e ? ai : Je, a = t[0].length, l = t.length, h = l, g = S(l), y = 1 / 0, x = []; h--; ) {
            var A = t[h];
            h && n && (A = gt(A, Jt(n))), y = Et(A.length, y), g[h] = !e && (n || a >= 120 && A.length >= 120) ? new Xn(h && A) : r;
          }
          A = t[0];
          var P = -1, L = g[0];
          t:
            for (; ++P < a && x.length < y; ) {
              var D = A[P], W = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? be(L, W) : i(x, W, e))) {
                for (h = l; --h; ) {
                  var X = g[h];
                  if (!(X ? be(X, W) : i(t[h], W, e)))
                    continue t;
                }
                L && L.push(W), x.push(D);
              }
            }
          return x;
        }
        function lc(t, n, e, i) {
          return wn(t, function(a, l, h) {
            n(i, e(a), l, h);
          }), i;
        }
        function Fe(t, n, e) {
          n = qn(n, t), t = mo(t, n);
          var i = t == null ? t : t[Cn(ln(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Ra(t) {
          return mt(t) && Ot(t) == nt;
        }
        function fc(t) {
          return mt(t) && Ot(t) == Se;
        }
        function cc(t) {
          return mt(t) && Ot(t) == Mt;
        }
        function Le(t, n, e, i, a) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : hc(t, n, e, i, Le, a);
        }
        function hc(t, n, e, i, a, l) {
          var h = K(t), g = K(n), y = h ? ht : Tt(t), x = g ? ht : Tt(n);
          y = y == nt ? Ct : y, x = x == nt ? Ct : x;
          var A = y == Ct, P = x == Ct, L = y == x;
          if (L && Gn(t)) {
            if (!Gn(n))
              return !1;
            h = !0, A = !1;
          }
          if (L && !A)
            return l || (l = new pn()), h || _e(t) ? fo(t, n, e, i, a, l) : Wc(t, n, y, e, i, a, l);
          if (!(e & R)) {
            var D = A && st.call(t, "__wrapped__"), W = P && st.call(n, "__wrapped__");
            if (D || W) {
              var X = D ? t.value() : t, U = W ? n.value() : n;
              return l || (l = new pn()), a(X, U, e, i, l);
            }
          }
          return L ? (l || (l = new pn()), Uc(t, n, e, i, a, l)) : !1;
        }
        function pc(t) {
          return mt(t) && Tt(t) == vt;
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
            var y = g[0], x = t[y], A = g[1];
            if (h && g[2]) {
              if (x === r && !(y in t))
                return !1;
            } else {
              var P = new pn();
              if (i)
                var L = i(x, A, y, t, n, P);
              if (!(L === r ? Le(A, x, R | E, i, P) : L))
                return !1;
            }
          }
          return !0;
        }
        function Fa(t) {
          if (!dt(t) || Yc(t))
            return !1;
          var n = Fn(t) ? pf : el;
          return n.test(te(t));
        }
        function gc(t) {
          return mt(t) && Ot(t) == nn;
        }
        function dc(t) {
          return mt(t) && Tt(t) == pt;
        }
        function _c(t) {
          return mt(t) && Tr(t.length) && !!ft[Ot(t)];
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
          return Un(t, function(a, l, h) {
            i[++e] = n(a, l, h);
          }), i;
        }
        function ka(t) {
          var n = qi(t);
          return n.length == 1 && n[0][2] ? _o(n[0][0], n[0][1]) : function(e) {
            return e === t || xi(e, t, n);
          };
        }
        function Da(t, n) {
          return Gi(t) && go(n) ? _o(Cn(t), n) : function(e) {
            var i = ts(e, t);
            return i === r && i === n ? ns(e, t) : Le(n, i, R | E);
          };
        }
        function gr(t, n, e, i, a) {
          t !== n && Mi(n, function(l, h) {
            if (a || (a = new pn()), dt(l))
              mc(t, n, h, e, gr, i, a);
            else {
              var g = i ? i(Ki(t, h), l, h + "", t, n, a) : r;
              g === r && (g = l), yi(t, h, g);
            }
          }, zt);
        }
        function mc(t, n, e, i, a, l, h) {
          var g = Ki(t, e), y = Ki(n, e), x = h.get(y);
          if (x) {
            yi(t, e, x);
            return;
          }
          var A = l ? l(g, y, e + "", t, n, h) : r, P = A === r;
          if (P) {
            var L = K(y), D = !L && Gn(y), W = !L && !D && _e(y);
            A = y, L || D || W ? K(g) ? A = g : yt(g) ? A = $t(g) : D ? (P = !1, A = Ja(y, !0)) : W ? (P = !1, A = Ya(y, !0)) : A = [] : Be(y) || ne(y) ? (A = g, ne(g) ? A = Ko(g) : (!dt(g) || Fn(g)) && (A = po(y))) : P = !1;
          }
          P && (h.set(y, A), a(A, y, i, l, h), h.delete(y)), yi(t, e, A);
        }
        function Na(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, Rn(n, e) ? t[n] : r;
        }
        function Ba(t, n, e) {
          n.length ? n = gt(n, function(l) {
            return K(l) ? function(h) {
              return Vn(h, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [Gt];
          var i = -1;
          n = gt(n, Jt(B()));
          var a = Oa(t, function(l, h, g) {
            var y = gt(n, function(x) {
              return x(l);
            });
            return { criteria: y, index: ++i, value: l };
          });
          return Gl(a, function(l, h) {
            return Rc(l, h, e);
          });
        }
        function yc(t, n) {
          return Wa(t, n, function(e, i) {
            return ns(t, i);
          });
        }
        function Wa(t, n, e) {
          for (var i = -1, a = n.length, l = {}; ++i < a; ) {
            var h = n[i], g = Vn(t, h);
            e(g, h) && Oe(l, qn(h, t), g);
          }
          return l;
        }
        function wc(t) {
          return function(n) {
            return Vn(n, t);
          };
        }
        function Pi(t, n, e, i) {
          var a = i ? zl : se, l = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = gt(t, Jt(e))); ++l < h; )
            for (var y = 0, x = n[l], A = e ? e(x) : x; (y = a(g, A, y, i)) > -1; )
              g !== t && ir.call(g, y, 1), ir.call(t, y, 1);
          return t;
        }
        function Ua(t, n) {
          for (var e = t ? n.length : 0, i = e - 1; e--; ) {
            var a = n[e];
            if (e == i || a !== l) {
              var l = a;
              Rn(a) ? ir.call(t, a, 1) : Fi(t, a);
            }
          }
          return t;
        }
        function Ei(t, n) {
          return t + or(wa() * (n - t + 1));
        }
        function Mc(t, n, e, i) {
          for (var a = -1, l = xt(ar((n - t) / (e || 1)), 0), h = S(l); l--; )
            h[i ? l : ++a] = t, t += e;
          return h;
        }
        function Ti(t, n) {
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
          return br(e, Qn(n, 0, e.length));
        }
        function Oe(t, n, e, i) {
          if (!dt(t))
            return t;
          n = qn(n, t);
          for (var a = -1, l = n.length, h = l - 1, g = t; g != null && ++a < l; ) {
            var y = Cn(n[a]), x = e;
            if (y === "__proto__" || y === "constructor" || y === "prototype")
              return t;
            if (a != h) {
              var A = g[y];
              x = i ? i(A, y, g) : r, x === r && (x = dt(A) ? A : Rn(n[a + 1]) ? [] : {});
            }
            Te(g, y, x), g = g[y];
          }
          return t;
        }
        var $a = ur ? function(t, n) {
          return ur.set(t, n), t;
        } : Gt, bc = sr ? function(t, n) {
          return sr(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: rs(n),
            writable: !0
          });
        } : Gt;
        function xc(t) {
          return br(ve(t));
        }
        function un(t, n, e) {
          var i = -1, a = t.length;
          n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var l = S(a); ++i < a; )
            l[i] = t[i + n];
          return l;
        }
        function Ac(t, n) {
          var e;
          return Un(t, function(i, a, l) {
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
          return Ri(t, n, Gt, e);
        }
        function Ri(t, n, e, i) {
          var a = 0, l = t == null ? 0 : t.length;
          if (l === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, y = Xt(n), x = n === r; a < l; ) {
            var A = or((a + l) / 2), P = e(t[A]), L = P !== r, D = P === null, W = P === P, X = Xt(P);
            if (h)
              var U = i || W;
            else x ? U = W && (i || L) : g ? U = W && L && (i || !D) : y ? U = W && L && !D && (i || !X) : D || X ? U = !1 : U = i ? P <= n : P < n;
            U ? a = A + 1 : l = A;
          }
          return Et(l, $);
        }
        function qa(t, n) {
          for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !gn(g, y)) {
              var y = g;
              l[a++] = h === 0 ? 0 : h;
            }
          }
          return l;
        }
        function za(t) {
          return typeof t == "number" ? t : Xt(t) ? xn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (K(t))
            return gt(t, Yt) + "";
          if (Xt(t))
            return Ma ? Ma.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -bn ? "-0" : n;
        }
        function $n(t, n, e) {
          var i = -1, a = Je, l = t.length, h = !0, g = [], y = g;
          if (e)
            h = !1, a = ai;
          else if (l >= f) {
            var x = n ? null : Nc(t);
            if (x)
              return Xe(x);
            h = !1, a = be, y = new Xn();
          } else
            y = n ? [] : g;
          t:
            for (; ++i < l; ) {
              var A = t[i], P = n ? n(A) : A;
              if (A = e || A !== 0 ? A : 0, h && P === P) {
                for (var L = y.length; L--; )
                  if (y[L] === P)
                    continue t;
                n && y.push(P), g.push(A);
              } else a(y, P, e) || (y !== g && y.push(P), g.push(A));
            }
          return g;
        }
        function Fi(t, n) {
          return n = qn(n, t), t = mo(t, n), t == null || delete t[Cn(ln(n))];
        }
        function Ga(t, n, e, i) {
          return Oe(t, n, e(Vn(t, n)), i);
        }
        function _r(t, n, e, i) {
          for (var a = t.length, l = i ? a : -1; (i ? l-- : ++l < a) && n(t[l], l, t); )
            ;
          return e ? un(t, i ? 0 : l, i ? l + 1 : a) : un(t, i ? l + 1 : 0, i ? a : l);
        }
        function Ha(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), oi(n, function(i, a) {
            return a.func.apply(a.thisArg, Nn([i], a.args));
          }, e);
        }
        function Li(t, n, e) {
          var i = t.length;
          if (i < 2)
            return i ? $n(t[0]) : [];
          for (var a = -1, l = S(i); ++a < i; )
            for (var h = t[a], g = -1; ++g < i; )
              g != a && (l[a] = Re(l[a] || h, t[g], n, e));
          return $n(Pt(l, 1), n, e);
        }
        function Ka(t, n, e) {
          for (var i = -1, a = t.length, l = n.length, h = {}; ++i < a; ) {
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
        function qn(t, n) {
          return K(t) ? t : Gi(t, n) ? [t] : Co(rt(t));
        }
        var Ic = Q;
        function zn(t, n, e) {
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
        function Pc(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Ec(t) {
          var n = new t.constructor(t.source, Rs.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Tc(t) {
          return Ee ? at(Ee.call(t)) : {};
        }
        function Ya(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Xa(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, a = t === t, l = Xt(t), h = n !== r, g = n === null, y = n === n, x = Xt(n);
            if (!g && !x && !l && t > n || l && h && y && !g && !x || i && h && y || !e && y || !a)
              return 1;
            if (!i && !l && !x && t < n || x && e && a && !i && !l || g && e && a || !h && a || !y)
              return -1;
          }
          return 0;
        }
        function Rc(t, n, e) {
          for (var i = -1, a = t.criteria, l = n.criteria, h = a.length, g = e.length; ++i < h; ) {
            var y = Xa(a[i], l[i]);
            if (y) {
              if (i >= g)
                return y;
              var x = e[i];
              return y * (x == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Qa(t, n, e, i) {
          for (var a = -1, l = t.length, h = e.length, g = -1, y = n.length, x = xt(l - h, 0), A = S(y + x), P = !i; ++g < y; )
            A[g] = n[g];
          for (; ++a < h; )
            (P || a < l) && (A[e[a]] = t[a]);
          for (; x--; )
            A[g++] = t[a++];
          return A;
        }
        function Va(t, n, e, i) {
          for (var a = -1, l = t.length, h = -1, g = e.length, y = -1, x = n.length, A = xt(l - g, 0), P = S(A + x), L = !i; ++a < A; )
            P[a] = t[a];
          for (var D = a; ++y < x; )
            P[D + y] = n[y];
          for (; ++h < g; )
            (L || a < l) && (P[D + e[h]] = t[a++]);
          return P;
        }
        function $t(t, n) {
          var e = -1, i = t.length;
          for (n || (n = S(i)); ++e < i; )
            n[e] = t[e];
          return n;
        }
        function Mn(t, n, e, i) {
          var a = !e;
          e || (e = {});
          for (var l = -1, h = n.length; ++l < h; ) {
            var g = n[l], y = i ? i(e[g], t[g], g, e, t) : r;
            y === r && (y = t[g]), a ? Pn(e, g, y) : Te(e, g, y);
          }
          return e;
        }
        function Fc(t, n) {
          return Mn(t, zi(t), n);
        }
        function Lc(t, n) {
          return Mn(t, co(t), n);
        }
        function vr(t, n) {
          return function(e, i) {
            var a = K(e) ? Nl : nc, l = n ? n() : {};
            return a(e, t, B(i, 2), l);
          };
        }
        function pe(t) {
          return Q(function(n, e) {
            var i = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
            for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && kt(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++i < a; ) {
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
            for (var a = e.length, l = n ? a : -1, h = at(e); (n ? l-- : ++l < a) && i(h[l], l, h) !== !1; )
              ;
            return e;
          };
        }
        function to(t) {
          return function(n, e, i) {
            for (var a = -1, l = at(n), h = i(n), g = h.length; g--; ) {
              var y = h[t ? g : ++a];
              if (e(l[y], y, l) === !1)
                break;
            }
            return n;
          };
        }
        function Oc(t, n, e) {
          var i = n & N, a = ke(t);
          function l() {
            var h = this && this !== It && this instanceof l ? a : t;
            return h.apply(i ? e : this, arguments);
          }
          return l;
        }
        function no(t) {
          return function(n) {
            n = rt(n);
            var e = ae(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? zn(e, 1).join("") : n.slice(1);
            return i[t]() + a;
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
          function a() {
            for (var l = arguments.length, h = S(l), g = l, y = de(a); g--; )
              h[g] = arguments[g];
            var x = l < 3 && h[0] !== y && h[l - 1] !== y ? [] : Bn(h, y);
            if (l -= x.length, l < e)
              return ao(
                t,
                n,
                mr,
                a.placeholder,
                r,
                h,
                x,
                r,
                r,
                e - l
              );
            var A = this && this !== It && this instanceof a ? i : t;
            return Zt(A, this, h);
          }
          return a;
        }
        function eo(t) {
          return function(n, e, i) {
            var a = at(n);
            if (!qt(n)) {
              var l = B(e, 3);
              n = At(n), e = function(g) {
                return l(a[g], g, a);
              };
            }
            var h = t(n, e, i);
            return h > -1 ? a[l ? n[h] : h] : r;
          };
        }
        function ro(t) {
          return Tn(function(n) {
            var e = n.length, i = e, a = an.prototype.thru;
            for (t && n.reverse(); i--; ) {
              var l = n[i];
              if (typeof l != "function")
                throw new sn(d);
              if (a && !h && Cr(l) == "wrapper")
                var h = new an([], !0);
            }
            for (i = h ? i : e; ++i < e; ) {
              l = n[i];
              var g = Cr(l), y = g == "wrapper" ? $i(l) : r;
              y && Hi(y[0]) && y[1] == (St | J | _t | tn) && !y[4].length && y[9] == 1 ? h = h[Cr(y[0])].apply(h, y[3]) : h = l.length == 1 && Hi(l) ? h[g]() : h.thru(l);
            }
            return function() {
              var x = arguments, A = x[0];
              if (h && x.length == 1 && K(A))
                return h.plant(A).value();
              for (var P = 0, L = e ? n[P].apply(this, x) : A; ++P < e; )
                L = n[P].call(this, L);
              return L;
            };
          });
        }
        function mr(t, n, e, i, a, l, h, g, y, x) {
          var A = n & St, P = n & N, L = n & q, D = n & (J | it), W = n & Ht, X = L ? r : ke(t);
          function U() {
            for (var V = arguments.length, tt = S(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = de(U), Vt = Kl(tt, Dt);
            if (i && (tt = Qa(tt, i, a, D)), l && (tt = Va(tt, l, h, D)), V -= Vt, D && V < x) {
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
                x - V
              );
            }
            var dn = P ? e : this, On = L ? dn[t] : t;
            return V = tt.length, g ? tt = nh(tt, g) : W && V > 1 && tt.reverse(), A && y < V && (tt.length = y), this && this !== It && this instanceof U && (On = X || ke(On)), On.apply(dn, tt);
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
            var a;
            if (e === r && i === r)
              return n;
            if (e !== r && (a = e), i !== r) {
              if (a === r)
                return i;
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = za(e), i = za(i)), a = t(e, i);
            }
            return a;
          };
        }
        function Ni(t) {
          return Tn(function(n) {
            return n = gt(n, Jt(B())), Q(function(e) {
              var i = this;
              return t(n, function(a) {
                return Zt(a, i, e);
              });
            });
          });
        }
        function wr(t, n) {
          n = n === r ? " " : Yt(n);
          var e = n.length;
          if (e < 2)
            return e ? Ti(n, t) : n;
          var i = Ti(n, ar(t / oe(n)));
          return ae(n) ? zn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function Dc(t, n, e, i) {
          var a = n & N, l = ke(t);
          function h() {
            for (var g = -1, y = arguments.length, x = -1, A = i.length, P = S(A + y), L = this && this !== It && this instanceof h ? l : t; ++x < A; )
              P[x] = i[x];
            for (; y--; )
              P[x++] = arguments[++g];
            return Zt(L, a ? e : this, P);
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
        function ao(t, n, e, i, a, l, h, g, y, x) {
          var A = n & J, P = A ? h : r, L = A ? r : h, D = A ? l : r, W = A ? r : l;
          n |= A ? _t : Bt, n &= ~(A ? Bt : _t), n & Z || (n &= ~(N | q));
          var X = [
            t,
            n,
            a,
            D,
            P,
            W,
            L,
            g,
            y,
            x
          ], U = e.apply(r, X);
          return Hi(t) && yo(U, X), U.placeholder = i, wo(U, t, n);
        }
        function Bi(t) {
          var n = bt[t];
          return function(e, i) {
            if (e = fn(e), i = i == null ? 0 : Et(Y(i), 292), i && ya(e)) {
              var a = (rt(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
              return a = (rt(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
            }
            return n(e);
          };
        }
        var Nc = fe && 1 / Xe(new fe([, -0]))[1] == bn ? function(t) {
          return new fe(t);
        } : as;
        function oo(t) {
          return function(n) {
            var e = Tt(n);
            return e == vt ? gi(n) : e == pt ? jl(n) : Hl(n, t(n));
          };
        }
        function En(t, n, e, i, a, l, h, g) {
          var y = n & q;
          if (!y && typeof t != "function")
            throw new sn(d);
          var x = i ? i.length : 0;
          if (x || (n &= ~(_t | Bt), i = a = r), h = h === r ? h : xt(Y(h), 0), g = g === r ? g : Y(g), x -= a ? a.length : 0, n & Bt) {
            var A = i, P = a;
            i = a = r;
          }
          var L = y ? r : $i(t), D = [
            t,
            n,
            e,
            i,
            a,
            A,
            P,
            l,
            h,
            g
          ];
          if (L && Vc(D, L), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], g = D[9] = D[9] === r ? y ? 0 : t.length : xt(D[9] - x, 0), !g && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var W = Oc(t, n, e);
          else n == J || n == it ? W = kc(t, n, g) : (n == _t || n == (N | _t)) && !a.length ? W = Dc(t, n, e, i) : W = mr.apply(r, D);
          var X = L ? $a : yo;
          return wo(X(W, D), t, n);
        }
        function uo(t, n, e, i) {
          return t === r || gn(t, le[e]) && !st.call(i, e) ? n : t;
        }
        function lo(t, n, e, i, a, l) {
          return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, lo, l), l.delete(n)), t;
        }
        function Bc(t) {
          return Be(t) ? r : t;
        }
        function fo(t, n, e, i, a, l) {
          var h = e & R, g = t.length, y = n.length;
          if (g != y && !(h && y > g))
            return !1;
          var x = l.get(t), A = l.get(n);
          if (x && A)
            return x == n && A == t;
          var P = -1, L = !0, D = e & E ? new Xn() : r;
          for (l.set(t, n), l.set(n, t); ++P < g; ) {
            var W = t[P], X = n[P];
            if (i)
              var U = h ? i(X, W, P, n, t, l) : i(W, X, P, t, n, l);
            if (U !== r) {
              if (U)
                continue;
              L = !1;
              break;
            }
            if (D) {
              if (!ui(n, function(V, tt) {
                if (!be(D, tt) && (W === V || a(W, V, e, i, l)))
                  return D.push(tt);
              })) {
                L = !1;
                break;
              }
            } else if (!(W === X || a(W, X, e, i, l))) {
              L = !1;
              break;
            }
          }
          return l.delete(t), l.delete(n), L;
        }
        function Wc(t, n, e, i, a, l, h) {
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
            case Ft:
              return t.name == n.name && t.message == n.message;
            case nn:
            case yn:
              return t == n + "";
            case vt:
              var g = gi;
            case pt:
              var y = i & R;
              if (g || (g = Xe), t.size != n.size && !y)
                return !1;
              var x = h.get(t);
              if (x)
                return x == n;
              i |= E, h.set(t, n);
              var A = fo(g(t), g(n), i, a, l, h);
              return h.delete(t), A;
            case Ge:
              if (Ee)
                return Ee.call(t) == Ee.call(n);
          }
          return !1;
        }
        function Uc(t, n, e, i, a, l) {
          var h = e & R, g = Wi(t), y = g.length, x = Wi(n), A = x.length;
          if (y != A && !h)
            return !1;
          for (var P = y; P--; ) {
            var L = g[P];
            if (!(h ? L in n : st.call(n, L)))
              return !1;
          }
          var D = l.get(t), W = l.get(n);
          if (D && W)
            return D == n && W == t;
          var X = !0;
          l.set(t, n), l.set(n, t);
          for (var U = h; ++P < y; ) {
            L = g[P];
            var V = t[L], tt = n[L];
            if (i)
              var Qt = h ? i(tt, V, L, n, t, l) : i(V, tt, L, t, n, l);
            if (!(Qt === r ? V === tt || a(V, tt, e, i, l) : Qt)) {
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
        function Tn(t) {
          return Zi(vo(t, r, Ao), t + "");
        }
        function Wi(t) {
          return Ta(t, At, zi);
        }
        function Ui(t) {
          return Ta(t, zt, co);
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
        function B() {
          var t = u.iteratee || is;
          return t = t === is ? La : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Sr(t, n) {
          var e = t.__data__;
          return Jc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function qi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var i = n[e], a = t[i];
            n[e] = [i, a, go(a)];
          }
          return n;
        }
        function jn(t, n) {
          var e = Xl(t, n);
          return Fa(e) ? e : r;
        }
        function $c(t) {
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
          return t == null ? [] : (t = at(t), Dn(_i(t), function(n) {
            return va.call(t, n);
          }));
        } : os, co = _i ? function(t) {
          for (var n = []; t; )
            Nn(n, zi(t)), t = rr(t);
          return n;
        } : os, Tt = Ot;
        (vi && Tt(new vi(new ArrayBuffer(1))) != re || Ae && Tt(new Ae()) != vt || mi && Tt(mi.resolve()) != Ut || fe && Tt(new fe()) != pt || Ie && Tt(new Ie()) != Ce) && (Tt = function(t) {
          var n = Ot(t), e = n == Ct ? t.constructor : r, i = e ? te(e) : "";
          if (i)
            switch (i) {
              case Sf:
                return re;
              case bf:
                return vt;
              case xf:
                return Ut;
              case Af:
                return pt;
              case If:
                return Ce;
            }
          return n;
        });
        function qc(t, n, e) {
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
                n = Et(n, t + h);
                break;
              case "takeRight":
                t = xt(t, n - h);
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
          n = qn(n, t);
          for (var i = -1, a = n.length, l = !1; ++i < a; ) {
            var h = Cn(n[i]);
            if (!(l = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && Tr(a) && Rn(h, a) && (K(t) || ne(t)));
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
              return Pc(t, e);
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
              return Ec(t);
            case pt:
              return new i();
            case Ge:
              return Tc(t);
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
          return K(t) || ne(t) || !!(ma && t && t[ma]);
        }
        function Rn(t, n) {
          var e = typeof t;
          return n = n ?? vn, !!n && (e == "number" || e != "symbol" && il.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function kt(t, n, e) {
          if (!dt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && Rn(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
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
        var Xc = Ve ? Fn : us;
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
          var n = Pr(t, function(i) {
            return e.size === M && e.clear(), i;
          }), e = n.cache;
          return n;
        }
        function Vc(t, n) {
          var e = t[1], i = n[1], a = e | i, l = a < (N | q | St), h = i == St && e == J || i == St && e == tn && t[7].length <= n[8] || i == (St | tn) && n[7].length <= n[8] && e == J;
          if (!(l || h))
            return t;
          i & N && (t[2] = n[2], a |= e & N ? 0 : Z);
          var g = n[3];
          if (g) {
            var y = t[3];
            t[3] = y ? Qa(y, g, n[4]) : g, t[4] = y ? Bn(t[3], I) : n[4];
          }
          return g = n[5], g && (y = t[5], t[5] = y ? Va(y, g, n[6]) : g, t[6] = y ? Bn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), i & St && (t[8] = t[8] == null ? n[8] : Et(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
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
          return n = xt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, a = -1, l = xt(i.length - n, 0), h = S(l); ++a < l; )
              h[a] = i[n + a];
            a = -1;
            for (var g = S(n + 1); ++a < n; )
              g[a] = i[a];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function mo(t, n) {
          return n.length < 2 ? t : Vn(t, un(n, 0, -1));
        }
        function nh(t, n) {
          for (var e = t.length, i = Et(n.length, e), a = $t(t); i--; ) {
            var l = n[i];
            t[i] = Rn(l, e) ? a[l] : r;
          }
          return t;
        }
        function Ki(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var yo = Mo($a), Ne = _f || function(t, n) {
          return It.setTimeout(t, n);
        }, Zi = Mo(bc);
        function wo(t, n, e) {
          var i = n + "";
          return Zi(t, Kc(i, eh(zc(i), e)));
        }
        function Mo(t) {
          var n = 0, e = 0;
          return function() {
            var i = wf(), a = Ur - (i - e);
            if (e = i, a > 0) {
              if (++n >= $e)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function br(t, n) {
          var e = -1, i = t.length, a = i - 1;
          for (n = n === r ? i : n; ++e < n; ) {
            var l = Ei(e, a), h = t[l];
            t[l] = t[e], t[e] = h;
          }
          return t.length = n, t;
        }
        var Co = Qc(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Gu, function(e, i, a, l) {
            n.push(a ? l.replace(Vu, "$1") : i || e);
          }), n;
        });
        function Cn(t) {
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
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = xt(Y(n), 0);
          var i = t == null ? 0 : t.length;
          if (!i || n < 1)
            return [];
          for (var a = 0, l = 0, h = S(ar(i / n)); a < i; )
            h[l++] = un(t, a, a += n);
          return h;
        }
        function ih(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = 0, a = []; ++n < e; ) {
            var l = t[n];
            l && (a[i++] = l);
          }
          return a;
        }
        function sh() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = S(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Nn(K(e) ? $t(e) : [e], Pt(n, 1));
        }
        var ah = Q(function(t, n) {
          return yt(t) ? Re(t, Pt(n, 1, yt, !0)) : [];
        }), oh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Re(t, Pt(n, 1, yt, !0), B(e, 2)) : [];
        }), uh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Re(t, Pt(n, 1, yt, !0), r, e) : [];
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
          return t && t.length ? _r(t, B(n, 3), !0, !0) : [];
        }
        function hh(t, n) {
          return t && t.length ? _r(t, B(n, 3), !0) : [];
        }
        function ph(t, n, e, i) {
          var a = t == null ? 0 : t.length;
          return a ? (e && typeof e != "number" && kt(t, n, e) && (e = 0, i = a), sc(t, n, e, i)) : [];
        }
        function bo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = e == null ? 0 : Y(e);
          return a < 0 && (a = xt(i + a, 0)), Ye(t, B(n, 3), a);
        }
        function xo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = i - 1;
          return e !== r && (a = Y(e), a = e < 0 ? xt(i + a, 0) : Et(a, i - 1)), Ye(t, B(n, 3), a, !0);
        }
        function Ao(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, 1) : [];
        }
        function gh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, bn) : [];
        }
        function dh(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : Y(n), Pt(t, n)) : [];
        }
        function _h(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
            var a = t[n];
            i[a[0]] = a[1];
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
          var a = e == null ? 0 : Y(e);
          return a < 0 && (a = xt(i + a, 0)), se(t, n, a);
        }
        function mh(t) {
          var n = t == null ? 0 : t.length;
          return n ? un(t, 0, -1) : [];
        }
        var yh = Q(function(t) {
          var n = gt(t, Oi);
          return n.length && n[0] === t[0] ? bi(n) : [];
        }), wh = Q(function(t) {
          var n = ln(t), e = gt(t, Oi);
          return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? bi(e, B(n, 2)) : [];
        }), Mh = Q(function(t) {
          var n = ln(t), e = gt(t, Oi);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? bi(e, r, n) : [];
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
          var a = i;
          return e !== r && (a = Y(e), a = a < 0 ? xt(i + a, 0) : Et(a, i - 1)), n === n ? nf(t, n, a) : Ye(t, aa, a, !0);
        }
        function bh(t, n) {
          return t && t.length ? Na(t, Y(n)) : r;
        }
        var xh = Q(Po);
        function Po(t, n) {
          return t && t.length && n && n.length ? Pi(t, n) : t;
        }
        function Ah(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, B(e, 2)) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, r, e) : t;
        }
        var Ph = Tn(function(t, n) {
          var e = t == null ? 0 : t.length, i = wi(t, n);
          return Ua(t, gt(n, function(a) {
            return Rn(a, e) ? +a : a;
          }).sort(Xa)), i;
        });
        function Eh(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var i = -1, a = [], l = t.length;
          for (n = B(n, 3); ++i < l; ) {
            var h = t[i];
            n(h, i, t) && (e.push(h), a.push(i));
          }
          return Ua(t, a), e;
        }
        function Ji(t) {
          return t == null ? t : Cf.call(t);
        }
        function Th(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && kt(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Y(n), e = e === r ? i : Y(e)), un(t, n, e)) : [];
        }
        function Rh(t, n) {
          return dr(t, n);
        }
        function Fh(t, n, e) {
          return Ri(t, n, B(e, 2));
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
          return Ri(t, n, B(e, 2), !0);
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
        function Bh(t, n) {
          return t && t.length ? qa(t, B(n, 2)) : [];
        }
        function Wh(t) {
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
          return t && t.length ? _r(t, B(n, 3), !1, !0) : [];
        }
        function zh(t, n) {
          return t && t.length ? _r(t, B(n, 3)) : [];
        }
        var Gh = Q(function(t) {
          return $n(Pt(t, 1, yt, !0));
        }), Hh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), $n(Pt(t, 1, yt, !0), B(n, 2));
        }), Kh = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, $n(Pt(t, 1, yt, !0), r, n);
        });
        function Zh(t) {
          return t && t.length ? $n(t) : [];
        }
        function Jh(t, n) {
          return t && t.length ? $n(t, B(n, 2)) : [];
        }
        function Yh(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? $n(t, r, n) : [];
        }
        function Yi(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = Dn(t, function(e) {
            if (yt(e))
              return n = xt(e.length, n), !0;
          }), hi(n, function(e) {
            return gt(t, li(e));
          });
        }
        function Eo(t, n) {
          if (!(t && t.length))
            return [];
          var e = Yi(t);
          return n == null ? e : gt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var Xh = Q(function(t, n) {
          return yt(t) ? Re(t, n) : [];
        }), Qh = Q(function(t) {
          return Li(Dn(t, yt));
        }), Vh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), Li(Dn(t, yt), B(n, 2));
        }), jh = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, Li(Dn(t, yt), r, n);
        }), tp = Q(Yi);
        function np(t, n) {
          return Ka(t || [], n || [], Te);
        }
        function ep(t, n) {
          return Ka(t || [], n || [], Oe);
        }
        var rp = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Eo(t, e);
        });
        function To(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function ip(t, n) {
          return n(t), t;
        }
        function xr(t, n) {
          return n(t);
        }
        var sp = Tn(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
            return wi(l, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !Rn(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: xr,
            args: [a],
            thisArg: r
          }), new an(i, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(r), l;
          }));
        });
        function ap() {
          return To(this);
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
            i.__index__ = 0, i.__values__ = r, n ? a.__wrapped__ = i : n = i;
            var a = i;
            e = e.__wrapped__;
          }
          return a.__wrapped__ = t, n;
        }
        function cp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: xr,
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
          st.call(t, e) ? ++t[e] : Pn(t, e, 1);
        });
        function gp(t, n, e) {
          var i = K(t) ? ia : ic;
          return e && kt(t, n, e) && (n = r), i(t, B(n, 3));
        }
        function dp(t, n) {
          var e = K(t) ? Dn : Pa;
          return e(t, B(n, 3));
        }
        var _p = eo(bo), vp = eo(xo);
        function mp(t, n) {
          return Pt(Ar(t, n), 1);
        }
        function yp(t, n) {
          return Pt(Ar(t, n), bn);
        }
        function wp(t, n, e) {
          return e = e === r ? 1 : Y(e), Pt(Ar(t, n), e);
        }
        function Ro(t, n) {
          var e = K(t) ? rn : Un;
          return e(t, B(n, 3));
        }
        function Fo(t, n) {
          var e = K(t) ? Bl : Ia;
          return e(t, B(n, 3));
        }
        var Mp = vr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : Pn(t, e, [n]);
        });
        function Cp(t, n, e, i) {
          t = qt(t) ? t : ve(t), e = e && !i ? Y(e) : 0;
          var a = t.length;
          return e < 0 && (e = xt(a + e, 0)), Rr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
        }
        var Sp = Q(function(t, n, e) {
          var i = -1, a = typeof n == "function", l = qt(t) ? S(t.length) : [];
          return Un(t, function(h) {
            l[++i] = a ? Zt(n, h, e) : Fe(h, n, e);
          }), l;
        }), bp = vr(function(t, n, e) {
          Pn(t, e, n);
        });
        function Ar(t, n) {
          var e = K(t) ? gt : Oa;
          return e(t, B(n, 3));
        }
        function xp(t, n, e, i) {
          return t == null ? [] : (K(n) || (n = n == null ? [] : [n]), e = i ? r : e, K(e) || (e = e == null ? [] : [e]), Ba(t, n, e));
        }
        var Ap = vr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Ip(t, n, e) {
          var i = K(t) ? oi : ua, a = arguments.length < 3;
          return i(t, B(n, 4), e, a, Un);
        }
        function Pp(t, n, e) {
          var i = K(t) ? Wl : ua, a = arguments.length < 3;
          return i(t, B(n, 4), e, a, Ia);
        }
        function Ep(t, n) {
          var e = K(t) ? Dn : Pa;
          return e(t, Er(B(n, 3)));
        }
        function Tp(t) {
          var n = K(t) ? Sa : Cc;
          return n(t);
        }
        function Rp(t, n, e) {
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var i = K(t) ? jf : Sc;
          return i(t, n);
        }
        function Fp(t) {
          var n = K(t) ? tc : xc;
          return n(t);
        }
        function Lp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Rr(t) ? oe(t) : t.length;
          var n = Tt(t);
          return n == vt || n == pt ? t.size : Ai(t).length;
        }
        function Op(t, n, e) {
          var i = K(t) ? ui : Ac;
          return e && kt(t, n, e) && (n = r), i(t, B(n, 3));
        }
        var kp = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && kt(t, n[0], n[1]) ? n = [] : e > 2 && kt(n[0], n[1], n[2]) && (n = [n[0]]), Ba(t, Pt(n, 1), []);
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
          return n = e ? r : n, n = t && n == null ? t.length : n, En(t, St, r, r, r, r, n);
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
            var a = Bn(e, de(Xi));
            i |= _t;
          }
          return En(t, i, n, e, a);
        }), ko = Q(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var a = Bn(e, de(ko));
            i |= _t;
          }
          return En(n, i, t, e, a);
        });
        function Do(t, n, e) {
          n = e ? r : n;
          var i = En(t, J, r, r, r, r, r, n);
          return i.placeholder = Do.placeholder, i;
        }
        function No(t, n, e) {
          n = e ? r : n;
          var i = En(t, it, r, r, r, r, r, n);
          return i.placeholder = No.placeholder, i;
        }
        function Bo(t, n, e) {
          var i, a, l, h, g, y, x = 0, A = !1, P = !1, L = !0;
          if (typeof t != "function")
            throw new sn(d);
          n = fn(n) || 0, dt(e) && (A = !!e.leading, P = "maxWait" in e, l = P ? xt(fn(e.maxWait) || 0, n) : l, L = "trailing" in e ? !!e.trailing : L);
          function D(wt) {
            var dn = i, On = a;
            return i = a = r, x = wt, h = t.apply(On, dn), h;
          }
          function W(wt) {
            return x = wt, g = Ne(V, n), A ? D(wt) : h;
          }
          function X(wt) {
            var dn = wt - y, On = wt - x, ru = n - dn;
            return P ? Et(ru, l - On) : ru;
          }
          function U(wt) {
            var dn = wt - y, On = wt - x;
            return y === r || dn >= n || dn < 0 || P && On >= l;
          }
          function V() {
            var wt = Ir();
            if (U(wt))
              return tt(wt);
            g = Ne(V, X(wt));
          }
          function tt(wt) {
            return g = r, L && i ? D(wt) : (i = a = r, h);
          }
          function Qt() {
            g !== r && Za(g), x = 0, i = y = a = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Ir());
          }
          function Vt() {
            var wt = Ir(), dn = U(wt);
            if (i = arguments, a = this, y = wt, dn) {
              if (g === r)
                return W(y);
              if (P)
                return Za(g), g = Ne(V, n), D(y);
            }
            return g === r && (g = Ne(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Np = Q(function(t, n) {
          return Aa(t, 1, n);
        }), Bp = Q(function(t, n, e) {
          return Aa(t, fn(n) || 0, e);
        });
        function Wp(t) {
          return En(t, Ht);
        }
        function Pr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new sn(d);
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
          n = n.length == 1 && K(n[0]) ? gt(n[0], Jt(B())) : gt(Pt(n, 1), Jt(B()));
          var e = n.length;
          return Q(function(i) {
            for (var a = -1, l = Et(i.length, e); ++a < l; )
              i[a] = n[a].call(this, i[a]);
            return Zt(t, this, i);
          });
        }), Qi = Q(function(t, n) {
          var e = Bn(n, de(Qi));
          return En(t, _t, r, n, e);
        }), Wo = Q(function(t, n) {
          var e = Bn(n, de(Wo));
          return En(t, Bt, r, n, e);
        }), qp = Tn(function(t, n) {
          return En(t, tn, r, r, r, n);
        });
        function zp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n === r ? n : Y(n), Q(t, n);
        }
        function Gp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n == null ? 0 : xt(Y(n), 0), Q(function(e) {
            var i = e[n], a = zn(e, 0, n);
            return i && Nn(a, i), Zt(t, this, a);
          });
        }
        function Hp(t, n, e) {
          var i = !0, a = !0;
          if (typeof t != "function")
            throw new sn(d);
          return dt(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), Bo(t, n, {
            leading: i,
            maxWait: n,
            trailing: a
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
          return on(t, F);
        }
        function Xp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, F, n);
        }
        function Qp(t) {
          return on(t, m | F);
        }
        function Vp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, m | F, n);
        }
        function jp(t, n) {
          return n == null || xa(t, n, At(n));
        }
        function gn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var tg = Mr(Si), ng = Mr(function(t, n) {
          return t >= n;
        }), ne = Ra(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ra : function(t) {
          return mt(t) && st.call(t, "callee") && !va.call(t, "callee");
        }, K = S.isArray, eg = Vs ? Jt(Vs) : fc;
        function qt(t) {
          return t != null && Tr(t.length) && !Fn(t);
        }
        function yt(t) {
          return mt(t) && qt(t);
        }
        function rg(t) {
          return t === !0 || t === !1 || mt(t) && Ot(t) == lt;
        }
        var Gn = vf || us, ig = js ? Jt(js) : cc;
        function sg(t) {
          return mt(t) && t.nodeType === 1 && !Be(t);
        }
        function ag(t) {
          if (t == null)
            return !0;
          if (qt(t) && (K(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || _e(t) || ne(t)))
            return !t.length;
          var n = Tt(t);
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
          return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !Be(t);
        }
        function lg(t) {
          return typeof t == "number" && ya(t);
        }
        function Fn(t) {
          if (!dt(t))
            return !1;
          var n = Ot(t);
          return n == Wt || n == mn || n == ot || n == cn;
        }
        function Uo(t) {
          return typeof t == "number" && t == Y(t);
        }
        function Tr(t) {
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
          return t === n || xi(t, n, qi(n));
        }
        function cg(t, n, e) {
          return e = typeof e == "function" ? e : r, xi(t, n, qi(n), e);
        }
        function hg(t) {
          return qo(t) && t != +t;
        }
        function pg(t) {
          if (Xc(t))
            throw new H(p);
          return Fa(t);
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
        function Be(t) {
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
        function Rr(t) {
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
          return mt(t) && Tt(t) == Ce;
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
            return Rr(t) ? hn(t) : $t(t);
          if (xe && t[xe])
            return Vl(t[xe]());
          var n = Tt(t), e = n == vt ? gi : n == pt ? Xe : ve;
          return e(t);
        }
        function Ln(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = fn(t), t === bn || t === -bn) {
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
          return t ? Qn(Y(t), 0, O) : 0;
        }
        function fn(t) {
          if (typeof t == "number")
            return t;
          if (Xt(t))
            return xn;
          if (dt(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = dt(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = la(t);
          var e = nl.test(t);
          return e || rl.test(t) ? kl(t.slice(2), e ? 2 : 8) : tl.test(t) ? xn : +t;
        }
        function Ko(t) {
          return Mn(t, zt(t));
        }
        function Cg(t) {
          return t ? Qn(Y(t), -vn, vn) : t === 0 ? t : 0;
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
            st.call(n, e) && Te(t, e, n[e]);
        }), Zo = pe(function(t, n) {
          Mn(n, zt(n), t);
        }), Fr = pe(function(t, n, e, i) {
          Mn(n, zt(n), t, i);
        }), bg = pe(function(t, n, e, i) {
          Mn(n, At(n), t, i);
        }), xg = Tn(wi);
        function Ag(t, n) {
          var e = he(t);
          return n == null ? e : ba(e, n);
        }
        var Ig = Q(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, a = i > 2 ? n[2] : r;
          for (a && kt(n[0], n[1], a) && (i = 1); ++e < i; )
            for (var l = n[e], h = zt(l), g = -1, y = h.length; ++g < y; ) {
              var x = h[g], A = t[x];
              (A === r || gn(A, le[x]) && !st.call(t, x)) && (t[x] = l[x]);
            }
          return t;
        }), Pg = Q(function(t) {
          return t.push(r, lo), Zt(Jo, r, t);
        });
        function Eg(t, n) {
          return sa(t, B(n, 3), wn);
        }
        function Tg(t, n) {
          return sa(t, B(n, 3), Ci);
        }
        function Rg(t, n) {
          return t == null ? t : Mi(t, B(n, 3), zt);
        }
        function Fg(t, n) {
          return t == null ? t : Ea(t, B(n, 3), zt);
        }
        function Lg(t, n) {
          return t && wn(t, B(n, 3));
        }
        function Og(t, n) {
          return t && Ci(t, B(n, 3));
        }
        function kg(t) {
          return t == null ? [] : pr(t, At(t));
        }
        function Dg(t) {
          return t == null ? [] : pr(t, zt(t));
        }
        function ts(t, n, e) {
          var i = t == null ? r : Vn(t, n);
          return i === r ? e : i;
        }
        function Ng(t, n) {
          return t != null && ho(t, n, ac);
        }
        function ns(t, n) {
          return t != null && ho(t, n, oc);
        }
        var Bg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
        }, rs(Gt)), Wg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, B), Ug = Q(Fe);
        function At(t) {
          return qt(t) ? Ca(t) : Ai(t);
        }
        function zt(t) {
          return qt(t) ? Ca(t, !0) : vc(t);
        }
        function $g(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, a, l) {
            Pn(e, n(i, a, l), i);
          }), e;
        }
        function qg(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, a, l) {
            Pn(e, a, n(i, a, l));
          }), e;
        }
        var zg = pe(function(t, n, e) {
          gr(t, n, e);
        }), Jo = pe(function(t, n, e, i) {
          gr(t, n, e, i);
        }), Gg = Tn(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = gt(n, function(l) {
            return l = qn(l, t), i || (i = l.length > 1), l;
          }), Mn(t, Ui(t), e), i && (e = on(e, m | T | F, Bc));
          for (var a = n.length; a--; )
            Fi(e, n[a]);
          return e;
        });
        function Hg(t, n) {
          return Yo(t, Er(B(n)));
        }
        var Kg = Tn(function(t, n) {
          return t == null ? {} : yc(t, n);
        });
        function Yo(t, n) {
          if (t == null)
            return {};
          var e = gt(Ui(t), function(i) {
            return [i];
          });
          return n = B(n), Wa(t, e, function(i, a) {
            return n(i, a[0]);
          });
        }
        function Zg(t, n, e) {
          n = qn(n, t);
          var i = -1, a = n.length;
          for (a || (a = 1, t = r); ++i < a; ) {
            var l = t == null ? r : t[Cn(n[i])];
            l === r && (i = a, l = e), t = Fn(l) ? l.call(t) : l;
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
          var i = K(t), a = i || Gn(t) || _e(t);
          if (n = B(n, 4), e == null) {
            var l = t && t.constructor;
            a ? e = i ? new l() : [] : dt(t) ? e = Fn(l) ? he(rr(t)) : {} : e = {};
          }
          return (a ? rn : wn)(t, function(h, g, y) {
            return n(e, h, g, y);
          }), e;
        }
        function Qg(t, n) {
          return t == null ? !0 : Fi(t, n);
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
          return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Qn(fn(t), n, e);
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
            var a = wa();
            return Et(t + a * (n - t + Ol("1e-" + ((a + "").length - 1))), n);
          }
          return Ei(t, n);
        }
        var id = ge(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? Vo(n) : n);
        });
        function Vo(t) {
          return es(rt(t).toLowerCase());
        }
        function jo(t) {
          return t = rt(t), t && t.replace(sl, Zl).replace(bl, "");
        }
        function sd(t, n, e) {
          t = rt(t), n = Yt(n);
          var i = t.length;
          e = e === r ? i : Qn(Y(e), 0, i);
          var a = e;
          return e -= n.length, e >= 0 && t.slice(e, a) == n;
        }
        function ad(t) {
          return t = rt(t), t && Wu.test(t) ? t.replace(Es, Jl) : t;
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
          var a = (n - i) / 2;
          return wr(or(a), e) + t + wr(ar(a), e);
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
          return (e ? kt(t, n, e) : n === r) ? n = 1 : n = Y(n), Ti(rt(t), n);
        }
        function _d() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var vd = ge(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function md(t, n, e) {
          return e && typeof e != "number" && kt(t, n, e) && (n = e = r), e = e === r ? O : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? zn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var yd = ge(function(t, n, e) {
          return t + (e ? " " : "") + es(n);
        });
        function wd(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Qn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Md(t, n, e) {
          var i = u.templateSettings;
          e && kt(t, n, e) && (n = r), t = rt(t), n = Fr({}, n, i, uo);
          var a = Fr({}, n.imports, i.imports, uo), l = At(a), h = pi(a, l), g, y, x = 0, A = n.interpolate || He, P = "__p += '", L = di(
            (n.escape || He).source + "|" + A.source + "|" + (A === Ts ? ju : He).source + "|" + (n.evaluate || He).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++El + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), P += t.slice(x, Vt).replace(al, Yl), V && (g = !0, P += `' +
__e(` + V + `) +
'`), Dt && (y = !0, P += `';
` + Dt + `;
__p += '`), tt && (P += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), x = Vt + U.length, U;
          }), P += `';
`;
          var W = st.call(n, "variable") && n.variable;
          if (!W)
            P = `with (obj) {
` + P + `
}
`;
          else if (Qu.test(W))
            throw new H(v);
          P = (y ? P.replace(ku, "") : P).replace(Du, "$1").replace(Nu, "$1;"), P = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var X = nu(function() {
            return et(l, D + "return " + P).apply(r, h);
          });
          if (X.source = P, Vi(X))
            throw X;
          return X;
        }
        function Cd(t) {
          return rt(t).toLowerCase();
        }
        function Sd(t) {
          return rt(t).toUpperCase();
        }
        function bd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return la(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = hn(n), l = fa(i, a), h = ca(i, a) + 1;
          return zn(i, l, h).join("");
        }
        function xd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, pa(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = ca(i, hn(n)) + 1;
          return zn(i, 0, a).join("");
        }
        function Ad(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(Vr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = fa(i, hn(n));
          return zn(i, a).join("");
        }
        function Id(t, n) {
          var e = Rt, i = we;
          if (dt(n)) {
            var a = "separator" in n ? n.separator : a;
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
          var y = h ? zn(h, 0, g).join("") : t.slice(0, g);
          if (a === r)
            return y + i;
          if (h && (g += y.length - g), ji(a)) {
            if (t.slice(g).search(a)) {
              var x, A = y;
              for (a.global || (a = di(a.source, rt(Rs.exec(a)) + "g")), a.lastIndex = 0; x = a.exec(A); )
                var P = x.index;
              y = y.slice(0, P === r ? g : P);
            }
          } else if (t.indexOf(Yt(a), g) != g) {
            var L = y.lastIndexOf(a);
            L > -1 && (y = y.slice(0, L));
          }
          return y + i;
        }
        function Pd(t) {
          return t = rt(t), t && Bu.test(t) ? t.replace(Ps, ef) : t;
        }
        var Ed = ge(function(t, n, e) {
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
        }), Td = Tn(function(t, n) {
          return rn(n, function(e) {
            e = Cn(e), Pn(t, e, Xi(t[e], t));
          }), t;
        });
        function Rd(t) {
          var n = t == null ? 0 : t.length, e = B();
          return t = n ? gt(t, function(i) {
            if (typeof i[1] != "function")
              throw new sn(d);
            return [e(i[0]), i[1]];
          }) : [], Q(function(i) {
            for (var a = -1; ++a < n; ) {
              var l = t[a];
              if (Zt(l[0], this, i))
                return Zt(l[1], this, i);
            }
          });
        }
        function Fd(t) {
          return rc(on(t, m));
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
          return La(typeof t == "function" ? t : on(t, m));
        }
        function Dd(t) {
          return ka(on(t, m));
        }
        function Nd(t, n) {
          return Da(t, on(n, m));
        }
        var Bd = Q(function(t, n) {
          return function(e) {
            return Fe(e, t, n);
          };
        }), Wd = Q(function(t, n) {
          return function(e) {
            return Fe(t, e, n);
          };
        });
        function ss(t, n, e) {
          var i = At(n), a = pr(n, i);
          e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = pr(n, At(n)));
          var l = !(dt(e) && "chain" in e) || !!e.chain, h = Fn(t);
          return rn(a, function(g) {
            var y = n[g];
            t[g] = y, h && (t.prototype[g] = function() {
              var x = this.__chain__;
              if (l || x) {
                var A = t(this.__wrapped__), P = A.__actions__ = $t(this.__actions__);
                return P.push({ func: y, args: arguments, thisArg: t }), A.__chain__ = x, A;
              }
              return y.apply(t, Nn([this.value()], arguments));
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
            return t == null ? r : Vn(t, n);
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
          var e = O, i = Et(t, O);
          n = B(n), t -= O;
          for (var a = hi(i, n); ++e < t; )
            n(e);
          return a;
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
        }, 0), n0 = Bi("ceil"), e0 = yr(function(t, n) {
          return t / n;
        }, 1), r0 = Bi("floor");
        function i0(t) {
          return t && t.length ? hr(t, Gt, Si) : r;
        }
        function s0(t, n) {
          return t && t.length ? hr(t, B(n, 2), Si) : r;
        }
        function a0(t) {
          return oa(t, Gt);
        }
        function o0(t, n) {
          return oa(t, B(n, 2));
        }
        function u0(t) {
          return t && t.length ? hr(t, Gt, Ii) : r;
        }
        function l0(t, n) {
          return t && t.length ? hr(t, B(n, 2), Ii) : r;
        }
        var f0 = yr(function(t, n) {
          return t * n;
        }, 1), c0 = Bi("round"), h0 = yr(function(t, n) {
          return t - n;
        }, 0);
        function p0(t) {
          return t && t.length ? ci(t, Gt) : 0;
        }
        function g0(t, n) {
          return t && t.length ? ci(t, B(n, 2)) : 0;
        }
        return u.after = Dp, u.ary = Lo, u.assign = Sg, u.assignIn = Zo, u.assignInWith = Fr, u.assignWith = bg, u.at = xg, u.before = Oo, u.bind = Xi, u.bindAll = Td, u.bindKey = ko, u.castArray = Jp, u.chain = To, u.chunk = rh, u.compact = ih, u.concat = sh, u.cond = Rd, u.conforms = Fd, u.constant = rs, u.countBy = pp, u.create = Ag, u.curry = Do, u.curryRight = No, u.debounce = Bo, u.defaults = Ig, u.defaultsDeep = Pg, u.defer = Np, u.delay = Bp, u.difference = ah, u.differenceBy = oh, u.differenceWith = uh, u.drop = lh, u.dropRight = fh, u.dropRightWhile = ch, u.dropWhile = hh, u.fill = ph, u.filter = dp, u.flatMap = mp, u.flatMapDeep = yp, u.flatMapDepth = wp, u.flatten = Ao, u.flattenDeep = gh, u.flattenDepth = dh, u.flip = Wp, u.flow = Od, u.flowRight = kd, u.fromPairs = _h, u.functions = kg, u.functionsIn = Dg, u.groupBy = Mp, u.initial = mh, u.intersection = yh, u.intersectionBy = wh, u.intersectionWith = Mh, u.invert = Bg, u.invertBy = Wg, u.invokeMap = Sp, u.iteratee = is, u.keyBy = bp, u.keys = At, u.keysIn = zt, u.map = Ar, u.mapKeys = $g, u.mapValues = qg, u.matches = Dd, u.matchesProperty = Nd, u.memoize = Pr, u.merge = zg, u.mergeWith = Jo, u.method = Bd, u.methodOf = Wd, u.mixin = ss, u.negate = Er, u.nthArg = $d, u.omit = Gg, u.omitBy = Hg, u.once = Up, u.orderBy = xp, u.over = qd, u.overArgs = $p, u.overEvery = zd, u.overSome = Gd, u.partial = Qi, u.partialRight = Wo, u.partition = Ap, u.pick = Kg, u.pickBy = Yo, u.property = eu, u.propertyOf = Hd, u.pull = xh, u.pullAll = Po, u.pullAllBy = Ah, u.pullAllWith = Ih, u.pullAt = Ph, u.range = Kd, u.rangeRight = Zd, u.rearg = qp, u.reject = Ep, u.remove = Eh, u.rest = zp, u.reverse = Ji, u.sampleSize = Rp, u.set = Jg, u.setWith = Yg, u.shuffle = Fp, u.slice = Th, u.sortBy = kp, u.sortedUniq = Nh, u.sortedUniqBy = Bh, u.split = md, u.spread = Gp, u.tail = Wh, u.take = Uh, u.takeRight = $h, u.takeRightWhile = qh, u.takeWhile = zh, u.tap = ip, u.throttle = Hp, u.thru = xr, u.toArray = Go, u.toPairs = Xo, u.toPairsIn = Qo, u.toPath = Vd, u.toPlainObject = Ko, u.transform = Xg, u.unary = Kp, u.union = Gh, u.unionBy = Hh, u.unionWith = Kh, u.uniq = Zh, u.uniqBy = Jh, u.uniqWith = Yh, u.unset = Qg, u.unzip = Yi, u.unzipWith = Eo, u.update = Vg, u.updateWith = jg, u.values = ve, u.valuesIn = td, u.without = Xh, u.words = tu, u.wrap = Zp, u.xor = Qh, u.xorBy = Vh, u.xorWith = jh, u.zip = tp, u.zipObject = np, u.zipObjectDeep = ep, u.zipWith = rp, u.entries = Xo, u.entriesIn = Qo, u.extend = Zo, u.extendWith = Fr, ss(u, u), u.add = t0, u.attempt = nu, u.camelCase = id, u.capitalize = Vo, u.ceil = n0, u.clamp = nd, u.clone = Yp, u.cloneDeep = Qp, u.cloneDeepWith = Vp, u.cloneWith = Xp, u.conformsTo = jp, u.deburr = jo, u.defaultTo = Ld, u.divide = e0, u.endsWith = sd, u.eq = gn, u.escape = ad, u.escapeRegExp = od, u.every = gp, u.find = _p, u.findIndex = bo, u.findKey = Eg, u.findLast = vp, u.findLastIndex = xo, u.findLastKey = Tg, u.floor = r0, u.forEach = Ro, u.forEachRight = Fo, u.forIn = Rg, u.forInRight = Fg, u.forOwn = Lg, u.forOwnRight = Og, u.get = ts, u.gt = tg, u.gte = ng, u.has = Ng, u.hasIn = ns, u.head = Io, u.identity = Gt, u.includes = Cp, u.indexOf = vh, u.inRange = ed, u.invoke = Ug, u.isArguments = ne, u.isArray = K, u.isArrayBuffer = eg, u.isArrayLike = qt, u.isArrayLikeObject = yt, u.isBoolean = rg, u.isBuffer = Gn, u.isDate = ig, u.isElement = sg, u.isEmpty = ag, u.isEqual = og, u.isEqualWith = ug, u.isError = Vi, u.isFinite = lg, u.isFunction = Fn, u.isInteger = Uo, u.isLength = Tr, u.isMap = $o, u.isMatch = fg, u.isMatchWith = cg, u.isNaN = hg, u.isNative = pg, u.isNil = dg, u.isNull = gg, u.isNumber = qo, u.isObject = dt, u.isObjectLike = mt, u.isPlainObject = Be, u.isRegExp = ji, u.isSafeInteger = _g, u.isSet = zo, u.isString = Rr, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = vg, u.isWeakMap = mg, u.isWeakSet = yg, u.join = Ch, u.kebabCase = ud, u.last = ln, u.lastIndexOf = Sh, u.lowerCase = ld, u.lowerFirst = fd, u.lt = wg, u.lte = Mg, u.max = i0, u.maxBy = s0, u.mean = a0, u.meanBy = o0, u.min = u0, u.minBy = l0, u.stubArray = os, u.stubFalse = us, u.stubObject = Jd, u.stubString = Yd, u.stubTrue = Xd, u.multiply = f0, u.nth = bh, u.noConflict = Ud, u.noop = as, u.now = Ir, u.pad = cd, u.padEnd = hd, u.padStart = pd, u.parseInt = gd, u.random = rd, u.reduce = Ip, u.reduceRight = Pp, u.repeat = dd, u.replace = _d, u.result = Zg, u.round = c0, u.runInContext = _, u.sample = Tp, u.size = Lp, u.snakeCase = vd, u.some = Op, u.sortedIndex = Rh, u.sortedIndexBy = Fh, u.sortedIndexOf = Lh, u.sortedLastIndex = Oh, u.sortedLastIndexBy = kh, u.sortedLastIndexOf = Dh, u.startCase = yd, u.startsWith = wd, u.subtract = h0, u.sum = p0, u.sumBy = g0, u.template = Md, u.times = Qd, u.toFinite = Ln, u.toInteger = Y, u.toLength = Ho, u.toLower = Cd, u.toNumber = fn, u.toSafeInteger = Cg, u.toString = rt, u.toUpper = Sd, u.trim = bd, u.trimEnd = xd, u.trimStart = Ad, u.truncate = Id, u.unescape = Pd, u.uniqueId = jd, u.upperCase = Ed, u.upperFirst = es, u.each = Ro, u.eachRight = Fo, u.first = Io, ss(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = o, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), rn(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : xt(Y(e), 0);
            var i = this.__filtered__ && !n ? new j(this) : this.clone();
            return i.__filtered__ ? i.__takeCount__ = Et(e, i.__takeCount__) : i.__views__.push({
              size: Et(e, O),
              type: t + (i.__dir__ < 0 ? "Right" : "")
            }), i;
          }, j.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse();
          };
        }), rn(["filter", "map", "takeWhile"], function(t, n) {
          var e = n + 1, i = e == Me || e == $r;
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
        }, j.prototype.invokeMap = Q(function(t, n) {
          return typeof t == "function" ? new j(this) : this.map(function(e) {
            return Fe(e, t, n);
          });
        }), j.prototype.reject = function(t) {
          return this.filter(Er(B(t)));
        }, j.prototype.slice = function(t, n) {
          t = Y(t);
          var e = this;
          return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Y(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
        }, j.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, j.prototype.toArray = function() {
          return this.take(O);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), a = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
          a && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = i ? [1] : arguments, y = h instanceof j, x = g[0], A = y || K(h), P = function(V) {
              var tt = a.apply(u, Nn([V], g));
              return i && L ? tt[0] : tt;
            };
            A && e && typeof x == "function" && x.length != 1 && (y = A = !1);
            var L = this.__chain__, D = !!this.__actions__.length, W = l && !L, X = y && !D;
            if (!l && A) {
              h = X ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: xr, args: [P], thisArg: r }), new an(U, L);
            }
            return W && X ? t.apply(this, g) : (U = this.thru(P), W ? i ? U.value()[0] : U.value() : U);
          });
        }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = Qe[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var a = arguments;
            if (i && !this.__chain__) {
              var l = this.value();
              return n.apply(K(l) ? l : [], a);
            }
            return this[e](function(h) {
              return n.apply(K(h) ? h : [], a);
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
        }], j.prototype.clone = Pf, j.prototype.reverse = Ef, j.prototype.value = Tf, u.prototype.at = sp, u.prototype.chain = ap, u.prototype.commit = op, u.prototype.next = up, u.prototype.plant = fp, u.prototype.reverse = cp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = hp, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = lp), u;
      }, ue = of();
      Zn ? ((Zn.exports = ue)._ = ue, ii._ = ue) : It._ = ue;
    }).call(v0);
  }(We, We.exports)), We.exports;
}
var Ss = m0();
const z = /* @__PURE__ */ vu(Ss);
var Or = { exports: {} }, ls, su;
function y0() {
  if (su) return ls;
  su = 1;
  var c = 1e3, s = c * 60, r = s * 60, o = r * 24, f = o * 7, p = o * 365.25;
  ls = function(I, m) {
    m = m || {};
    var T = typeof I;
    if (T === "string" && I.length > 0)
      return d(I);
    if (T === "number" && isFinite(I))
      return m.long ? w(I) : v(I);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(I)
    );
  };
  function d(I) {
    if (I = String(I), !(I.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        I
      );
      if (m) {
        var T = parseFloat(m[1]), F = (m[2] || "ms").toLowerCase();
        switch (F) {
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
  function v(I) {
    var m = Math.abs(I);
    return m >= o ? Math.round(I / o) + "d" : m >= r ? Math.round(I / r) + "h" : m >= s ? Math.round(I / s) + "m" : m >= c ? Math.round(I / c) + "s" : I + "ms";
  }
  function w(I) {
    var m = Math.abs(I);
    return m >= o ? M(I, m, o, "day") : m >= r ? M(I, m, r, "hour") : m >= s ? M(I, m, s, "minute") : m >= c ? M(I, m, c, "second") : I + " ms";
  }
  function M(I, m, T, F) {
    var R = m >= T * 1.5;
    return Math.round(I / T) + " " + F + (R ? "s" : "");
  }
  return ls;
}
var fs, au;
function w0() {
  if (au) return fs;
  au = 1;
  function c(s) {
    o.debug = o, o.default = o, o.coerce = M, o.disable = v, o.enable = p, o.enabled = w, o.humanize = y0(), o.destroy = I, Object.keys(s).forEach((m) => {
      o[m] = s[m];
    }), o.names = [], o.skips = [], o.formatters = {};
    function r(m) {
      let T = 0;
      for (let F = 0; F < m.length; F++)
        T = (T << 5) - T + m.charCodeAt(F), T |= 0;
      return o.colors[Math.abs(T) % o.colors.length];
    }
    o.selectColor = r;
    function o(m) {
      let T, F = null, R, E;
      function N(...q) {
        if (!N.enabled)
          return;
        const Z = N, J = Number(/* @__PURE__ */ new Date()), it = J - (T || J);
        Z.diff = it, Z.prev = T, Z.curr = J, T = J, q[0] = o.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
        let _t = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (St, tn) => {
          if (St === "%%")
            return "%";
          _t++;
          const Ht = o.formatters[tn];
          if (typeof Ht == "function") {
            const Rt = q[_t];
            St = Ht.call(Z, Rt), q.splice(_t, 1), _t--;
          }
          return St;
        }), o.formatArgs.call(Z, q), (Z.log || o.log).apply(Z, q);
      }
      return N.namespace = m, N.useColors = o.useColors(), N.color = o.selectColor(m), N.extend = f, N.destroy = o.destroy, Object.defineProperty(N, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => F !== null ? F : (R !== o.namespaces && (R = o.namespaces, E = o.enabled(m)), E),
        set: (q) => {
          F = q;
        }
      }), typeof o.init == "function" && o.init(N), N;
    }
    function f(m, T) {
      const F = o(this.namespace + (typeof T > "u" ? ":" : T) + m);
      return F.log = this.log, F;
    }
    function p(m) {
      o.save(m), o.namespaces = m, o.names = [], o.skips = [];
      const T = (typeof m == "string" ? m : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const F of T)
        F[0] === "-" ? o.skips.push(F.slice(1)) : o.names.push(F);
    }
    function d(m, T) {
      let F = 0, R = 0, E = -1, N = 0;
      for (; F < m.length; )
        if (R < T.length && (T[R] === m[F] || T[R] === "*"))
          T[R] === "*" ? (E = R, N = F, R++) : (F++, R++);
        else if (E !== -1)
          R = E + 1, N++, F = N;
        else
          return !1;
      for (; R < T.length && T[R] === "*"; )
        R++;
      return R === T.length;
    }
    function v() {
      const m = [
        ...o.names,
        ...o.skips.map((T) => "-" + T)
      ].join(",");
      return o.enable(""), m;
    }
    function w(m) {
      for (const T of o.skips)
        if (d(m, T))
          return !1;
      for (const T of o.names)
        if (d(m, T))
          return !0;
      return !1;
    }
    function M(m) {
      return m instanceof Error ? m.stack || m.message : m;
    }
    function I() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return o.enable(o.load()), o;
  }
  return fs = c, fs;
}
var ou;
function M0() {
  return ou || (ou = 1, function(c, s) {
    s.formatArgs = o, s.save = f, s.load = p, s.useColors = r, s.storage = d(), s.destroy = /* @__PURE__ */ (() => {
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
    function o(w) {
      if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
        return;
      const M = "color: " + this.color;
      w.splice(1, 0, M, "color: inherit");
      let I = 0, m = 0;
      w[0].replace(/%[a-zA-Z%]/g, (T) => {
        T !== "%%" && (I++, T === "%c" && (m = I));
      }), w.splice(m, 0, M);
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
    const { formatters: v } = c.exports;
    v.j = function(w) {
      try {
        return JSON.stringify(w);
      } catch (M) {
        return "[UnexpectedJSONParseError]: " + M.message;
      }
    };
  }(Or, Or.exports)), Or.exports;
}
var C0 = M0();
const S0 = /* @__PURE__ */ vu(C0), cs = {};
function Kn(c) {
  if (!cs[c]) {
    const s = S0("ultraPacer:core");
    s(`loading debug for namespace "${c}"`), cs[c] = s.extend(c);
  }
  return cs[c];
}
function Nt(c, s = 0) {
  return Math.round(c * 10 ** s) / 10 ** s;
}
function me(c, s, r, o, f) {
  return r + (f - c) / (s - c) * (o - r);
}
function mu(c, s, r) {
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
function yu(c) {
  let s, r, o, f, p = 0, d = 0, v = 0, w = 0, M = 0;
  for (s = 0; s < c.length; s++)
    r = c[s][0], o = c[s][1], f = c[s][2], M += f, p += f * r, v += f * (r * r), d += f * o, w += f * (r * o);
  const I = (d * v - p * w) / (M * v - p * p);
  return [(M * w - p * d) / (M * v - p * p), I];
}
function wu(c, s, r, o) {
  let f = 0, p = 0;
  const d = [];
  return r.forEach((v) => {
    for (; c[f] < v - o; )
      f++;
    for (f > 0 && c[f] >= v && f--; p < c.length - 1 && c[p + 1] <= v + o; )
      p++;
    p < c.length - 1 && c[p] <= v && p++;
    const w = Math.max(o, Math.abs(v - c[f]) + 1e-3, Math.abs(v - c[p]) + 1e-3), M = [];
    let I = 0;
    for (let m = f; m <= p; m++)
      I = (1 - (Math.abs(v - c[m]) / w) ** 3) ** 3, M.push([c[m], s[m], I]);
    d.push(yu(M));
  }), d;
}
function bs(c, s, r) {
  return Nt(c, r) < Nt(s, r);
}
function b0(c, s, r) {
  return Nt(c, r) > Nt(s, r);
}
function ye(c, s, r) {
  return Nt(c, r) <= Nt(s, r);
}
function Wr(c, s, r) {
  return Nt(c, r) >= Nt(s, r);
}
function Ue(c, s, r) {
  return Nt(c, r) === Nt(s, r);
}
const t_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: mu,
  linearRegression: yu,
  req: Ue,
  rgt: b0,
  rgte: Wr,
  rlt: bs,
  rlte: ye,
  round: Nt,
  wlslr: wu
}, Symbol.toStringTag, { value: "Module" }));
class Sn {
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
class uu {
  constructor(s, r, o) {
    C(this, "factors", new Sn());
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
const x0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function Mu(c, s) {
  (s === null || typeof s > "u") && (s = x0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const lu = {
  baseline: 0,
  terrainScale: 1
};
function A0(c, s) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return s >= c.sunrise && s <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (s <= c.dawn || s >= c.dusk) ? 1 : r(s) >= r(c.nadir) ? me(r(isNaN(c.dawn) ? c.nadir : c.dawn), r(c.sunrise), 1, 0, r(s)) : me(r(c.sunset), r(isNaN(c.dusk) ? c.nadir : c.dusk), 0, 1, r(s));
}
function Cu(c, s, r, o = lu) {
  if (s === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = lu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * f, d = A0(r, c);
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
function bu(c, s) {
  if (!s)
    return 1;
  const r = c.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const f = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(f) / 100;
  }
  return o += s.baseline / 100, o;
}
function xu(c, s) {
  const r = z.findLast(s.terrain, (o) => ye(o.percents[0] * s.dist, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const Au = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function xs(c) {
  const s = new Sn().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    s.applyEach((f, p) => f + o * p, r);
  }), s.scaleEach(1 / Ss.sumBy(c, "dist")), s;
}
function P0(c, s) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const d = p === c.length - 1 ? s : c[p + 1].onset, v = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + v) * (d - f.onset), r += f.value;
  }), o / s;
}
function E0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function T0(c, s, r) {
  let o = -P0(s, r);
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
class ms {
  constructor(s, r) {
    C(this, "plan");
    C(this, "values");
    this.plan = s, this.values = r ? z.cloneDeep(r) : [{ onset: 0, value: E0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + T0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((o) => o.onset >= s.onset);
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
    terrain: xu(c, s)
  });
}
function Br(c, s) {
  var r, o;
  if (c.factors || (c.factors = new Sn()), As(c, s.course), s) {
    if (c.factors === void 0)
      throw new Error("no factors");
    c.factors.strategy = s.strategy.at(c.loc), Object.assign(c.factors, {
      heat: s.heatModel ? bu(c, s.heatModel) : 1,
      dark: s.event.sun ? Cu(c.tod, c.factors.terrain, s.event.sun) : 1
    });
  }
  c.factors.altitude = ys(c.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), c.factors.dark = ys(c.factors.dark, (o = s.scales) == null ? void 0 : o.dark);
}
const n_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Sn,
  Strategy: ms,
  applyScale: ys,
  generateCourseFactors: As,
  generatePlanFactors: Br,
  getAltitudeFactor: Mu,
  getDarkFactor: Cu,
  getGradeFactor: Su,
  getHeatFactor: bu,
  getTerrainFactor: xu,
  list: Au,
  rollup: xs
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
function R0(c, s, r) {
  const o = c.filter((p, d) => d >= c.findIndex((v) => v === s) && d <= c.findIndex((v) => v === r)), f = o.map((p, d) => ({
    factors: p.factors,
    dist: d === o.length - 1 ? 0 : o[d + 1].loc - o[d].loc
  }));
  return f.pop(), xs(f);
}
class Pu {
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
class F0 extends Pu {
  constructor(r, o) {
    super(o);
    C(this, "_course");
    C(this, "point1");
    C(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class L0 extends Pu {
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
    return this._factors || (this._factors = R0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Kn("CourseSplits");
class O0 {
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
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    hs(`createSplits:${s}`);
    const r = Iu(s), o = z.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var T;
    hs.extend("calcSegments")("exec");
    const o = this.course, f = o.points, p = [], d = [];
    let v, w, M = o.points[0], I;
    for (v = 0, w = s.length; v < w; v++) {
      const F = s[v];
      I && Ue((T = s[v - 1]) == null ? void 0 : T.end, F.start, 4) ? M = I : M = o.getPoint(F.start), I = o.getPoint(F.end);
      const R = F.end - F.start, E = new F0(this.course, {
        gain: 0,
        loss: 0,
        grade: R > 0 ? (I.alt - M.alt) / R / 10 * (I.alt - M.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: M,
        point2: I
      }), N = new Sn().init(0);
      p.push(E), d.push(N);
    }
    const m = (F, R, E, N) => {
      const q = E.alt - R.alt;
      F[q > 0 ? "gain" : "loss"] += q * (q > 0 ? o.gainScale : o.lossScale), As(R, o);
      const Z = E.loc - R.loc;
      N.applyEach((J, it) => J + it * Z, R.factors);
    };
    v = 1;
    for (let F = 0; F < p.length; F++) {
      const R = p[F], E = d[F];
      for (; ye(f[v].loc, R.point1.loc, 4); )
        v++;
      let N = R.point1;
      for (; v < f.length && ye(f[v].loc, R.point2.loc, 4); ) {
        const q = f[v];
        m(R, N, q, E), N = q, v++;
      }
      m(R, N, R.point2, E);
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
          v = r.toFixed(f), v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), dms = v + "°";
          break;
        case "dm":
          var p = (r * 60).toFixed(f), v = Math.floor(p / 60), w = (p % 60).toFixed(f);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), w < 10 && (w = "0" + w), dms = v + "°" + w + "′";
          break;
        case "dms":
          var d = (r * 3600).toFixed(f), v = Math.floor(d / 3600), w = Math.floor(d / 60) % 60, M = (d % 60).toFixed(f);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), w < 10 && (w = "0" + w), M < 10 && (M = "0" + M), dms = v + "°" + w + "′" + M + "″";
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
      var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), v = p - o, w = d - f, M = Math.sin(v / 2) * Math.sin(v / 2) + Math.cos(o) * Math.cos(p) * Math.sin(w / 2) * Math.sin(w / 2), I = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
      return I;
    }, c.latlon.prototype.bearingTo = function(r) {
      var o = this.bearingRadTo(r);
      return (o.toDeg() + 360) % 360;
    }, c.latlon.prototype.bearingRadTo = function(r) {
      var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), v = Math.cos(f) * Math.sin(p), w = Math.atan2(v, d);
      return w;
    }, c.latlon.prototype.finalBearingTo = function(r) {
      var o = r.lat.toRad(), f = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(f), v = Math.cos(o) * Math.sin(f) - Math.sin(o) * Math.cos(f) * Math.cos(p), w = Math.atan2(d, v);
      return (w.toDeg() + 180) % 360;
    }, c.latlon.prototype.midpointTo = function(r) {
      var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(f) * Math.cos(p), v = Math.cos(f) * Math.sin(p), w = this.lng.toRad(), M = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + d) * (Math.cos(o) + d) + v * v)), I = w + Math.atan2(v, Math.cos(o) + d);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(M.toDeg(), I.toDeg());
    }, c.midpoint = function(r) {
      var o = 0, f = 0, p = 0;
      for (var d in r) {
        var v = r[d], w = v.lat * Math.PI / 180, M = v.lng * Math.PI / 180, I = Math.cos(w) * Math.cos(M), m = Math.cos(w) * Math.sin(M), T = Math.sin(w);
        o += I, f += m, p += T;
      }
      o = o / r.length, f = f / r.length, p = p / r.length;
      var F = Math.atan2(f, o), R = Math.sqrt(o * o + f * f), E = Math.atan2(p, R);
      return new c.latlon(E * 180 / Math.PI, F * 180 / Math.PI);
    }, c.latlon.prototype.interpolate = function(r, o) {
      var f = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), v = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var w = Math.sin(d), M = Math.cos(d), I = [], m = 0; m < o; m++) {
        var T = 1 / (o - 1) * m, F = f * T, R = Math.sin(F), E = Math.cos(F), N = Math.asin(w * E + M * R * Math.cos(p)), q = v + Math.atan2(Math.sin(p) * R * M, E - w * Math.sin(N)), Z = N.toDeg(), J = q.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); J > 180; ) J -= 360;
        for (; J <= -180; ) J += 360;
        I.push(new c.latlon(Z, J));
      }
      return I;
    }, c.latlon.prototype.destinationPoint = function(r, o) {
      o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / s, r = r.toRad();
      var f = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), v = p + Math.atan2(
        Math.sin(r) * Math.sin(o) * Math.cos(f),
        Math.cos(o) - Math.sin(f) * Math.sin(d)
      );
      return v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(d.toDeg(), v.toDeg());
    }, c.latlon.intersection = function(r, o, f, p) {
      o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
      var d = r.lat.toRad(), v = r.lng.toRad(), w = f.lat.toRad(), M = f.lng.toRad(), I = o.toRad(), m = p.toRad(), T = w - d, F = M - v, R = 2 * Math.asin(Math.sqrt(Math.sin(T / 2) * Math.sin(T / 2) + Math.cos(d) * Math.cos(w) * Math.sin(F / 2) * Math.sin(F / 2)));
      if (R == 0) return null;
      var E = Math.acos((Math.sin(w) - Math.sin(d) * Math.cos(R)) / (Math.sin(R) * Math.cos(d)));
      isNaN(E) && (E = 0);
      var N = Math.acos((Math.sin(d) - Math.sin(w) * Math.cos(R)) / (Math.sin(R) * Math.cos(w)));
      if (Math.sin(M - v) > 0)
        var q = E, Z = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - E, Z = N;
      var J = (I - q + Math.PI) % (2 * Math.PI) - Math.PI, it = (Z - m + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(J) == 0 && Math.sin(it) == 0 || Math.sin(J) * Math.sin(it) < 0) return null;
      var _t = Math.acos(-Math.cos(J) * Math.cos(it) + Math.sin(J) * Math.sin(it) * Math.cos(R)), Bt = Math.atan2(
        Math.sin(R) * Math.sin(J) * Math.sin(it),
        Math.cos(it) + Math.cos(J) * Math.cos(_t)
      ), St = Math.asin(Math.sin(d) * Math.cos(Bt) + Math.cos(d) * Math.sin(Bt) * Math.cos(I)), tn = Math.atan2(
        Math.sin(I) * Math.sin(Bt) * Math.cos(d),
        Math.cos(Bt) - Math.sin(d) * Math.sin(St)
      ), Ht = v + tn;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(St.toDeg(), Ht.toDeg());
    }, c.latlon.prototype.rhumbDistanceTo = function(r) {
      var o = s, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), v = Math.abs(r.lng - this.lng).toRad(), w = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), M = isFinite(d / w) ? d / w : Math.cos(f);
      Math.abs(v) > Math.PI && (v = v > 0 ? -(2 * Math.PI - v) : 2 * Math.PI + v);
      var I = Math.sqrt(d * d + M * M * v * v) * o;
      return I.toPrecisionFixed(4);
    }, c.latlon.prototype.rhumbBearingTo = function(r) {
      var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var v = Math.atan2(p, d);
      return (v.toDeg() + 360) % 360;
    }, c.latlon.prototype.rhumbDestinationPoint = function(r, o) {
      var f = s, p = parseFloat(o) / f, d = this.lat.toRad(), v = this.lng.toRad();
      r = r.toRad();
      var w = p * Math.cos(r);
      Math.abs(w) < 1e-10 && (w = 0);
      var M = d + w, I = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(w / I) ? w / I : Math.cos(d), T = p * Math.sin(r) / m;
      Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
      var F = (v + T + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new c.latlon(M.toDeg(), F.toDeg());
    }, c.latlon.prototype.rhumbMidpointTo = function(r) {
      var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
      Math.abs(d - f) > Math.PI && (f += 2 * Math.PI);
      var v = (o + p) / 2, w = Math.tan(Math.PI / 4 + o / 2), M = Math.tan(Math.PI / 4 + p / 2), I = Math.tan(Math.PI / 4 + v / 2), m = ((d - f) * Math.log(I) + f * Math.log(M) - d * Math.log(w)) / Math.log(M / w);
      return isFinite(m) || (m = (f + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(v.toDeg(), m.toDeg());
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
        for (var v = p.length - 1; d-- > v; ) p = p + "0";
        return p;
      }), o = o.replace(/(.+)e-(.+)/, function(f, p, d) {
        for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
        return "0." + p;
      }), o;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ps)), ps;
}
var D0 = k0();
class Eu {
  constructor(s, r, o) {
    C(this, "alt");
    C(this, "lat");
    C(this, "lon");
    this.lat = s, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new D0.latlon(this.lat, this.lon);
  }
}
class Tu extends Eu {
  constructor(r, o, f, p, d) {
    super(r, o, f);
    C(this, "loc");
    C(this, "grade");
    this.loc = p, this.grade = d;
  }
}
function Ru(c, s, r) {
  if (c.loc > s.loc && r > c.loc || s.loc > c.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(s.latlon), { lat: p, lng: d } = c.latlon.destinationPoint(f, o), v = c.grade, w = me(c.loc, s.loc, c.alt, s.alt, r);
  return new Tu(p, d, w, r, v);
}
function N0(c, s) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof s == "object" ? String(s.id) : s);
}
function ws(c, s) {
  return !!(c && s && N0(c.site, s.site) && c.loop === s.loop);
}
class cu {
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
    return s.find((r) => r.waypoint && ws(this, r.waypoint));
  }
}
const Dr = Kn("models:Waypoint");
class gs {
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
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Dr(`constructor: ${this.name}`);
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
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
}
var ds = { exports: {} }, hu;
function B0() {
  return hu || (hu = 1, function(c, s) {
    (function() {
      var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, v = Math.atan2, w = Math.acos, M = r / 180, I = 1e3 * 60 * 60 * 24, m = 2440588, T = 2451545;
      function F(O) {
        return O.valueOf() / I - 0.5 + m;
      }
      function R(O) {
        return new Date((O + 0.5 - m) * I);
      }
      function E(O) {
        return F(O) - T;
      }
      var N = M * 23.4397;
      function q(O, $) {
        return v(o(O) * f(N) - p($) * o(N), f(O));
      }
      function Z(O, $) {
        return d(o($) * f(N) + f($) * o(N) * o(O));
      }
      function J(O, $, G) {
        return v(o(O), f(O) * o($) - p(G) * f($));
      }
      function it(O, $, G) {
        return d(o($) * o(G) + f($) * f(G) * f(O));
      }
      function _t(O, $) {
        return M * (280.16 + 360.9856235 * O) - $;
      }
      function Bt(O) {
        return O < 0 && (O = 0), 2967e-7 / Math.tan(O + 312536e-8 / (O + 0.08901179));
      }
      function St(O) {
        return M * (357.5291 + 0.98560028 * O);
      }
      function tn(O) {
        var $ = M * (1.9148 * o(O) + 0.02 * o(2 * O) + 3e-4 * o(3 * O)), G = M * 102.9372;
        return O + $ + G + r;
      }
      function Ht(O) {
        var $ = St(O), G = tn($);
        return {
          dec: Z(G, 0),
          ra: q(G, 0)
        };
      }
      var Rt = {};
      Rt.getPosition = function(O, $, G) {
        var ct = M * -G, nt = M * $, ht = E(O), ot = Ht(ht), lt = _t(ht, ct) - ot.ra;
        return {
          azimuth: J(lt, nt, ot.dec),
          altitude: it(lt, nt, ot.dec)
        };
      };
      var we = Rt.times = [
        [-0.833, "sunrise", "sunset"],
        [-0.3, "sunriseEnd", "sunsetStart"],
        [-6, "dawn", "dusk"],
        [-12, "nauticalDawn", "nauticalDusk"],
        [-18, "nightEnd", "night"],
        [6, "goldenHourEnd", "goldenHour"]
      ];
      Rt.addTime = function(O, $, G) {
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
        return T + O + 53e-4 * o($) - 69e-4 * o(2 * G);
      }
      function $r(O, $, G) {
        return w((o(O) - o($) * o(G)) / (f($) * f(G)));
      }
      function bn(O) {
        return -2.076 * Math.sqrt(O) / 60;
      }
      function vn(O, $, G, ct, nt, ht, ot) {
        var lt = $r(O, G, ct), Mt = Me(lt, $, nt);
        return qe(Mt, ht, ot);
      }
      Rt.getTimes = function(O, $, G, ct) {
        ct = ct || 0;
        var nt = M * -G, ht = M * $, ot = bn(ct), lt = E(O), Mt = Ur(lt, nt), Kt = Me(0, nt, Mt), Ft = St(Kt), Wt = tn(Ft), mn = Z(Wt, 0), vt = qe(Kt, Ft, Wt), Lt, kn, Ct, Ut, cn, nn, pt = {
          solarNoon: R(vt),
          nadir: R(vt - 0.5)
        };
        for (Lt = 0, kn = we.length; Lt < kn; Lt += 1)
          Ct = we[Lt], Ut = (Ct[0] + ot) * M, cn = vn(Ut, nt, ht, mn, Mt, Ft, Wt), nn = vt - (cn - vt), pt[Ct[1]] = R(nn), pt[Ct[2]] = R(cn);
        return pt;
      };
      function ze(O) {
        var $ = M * (218.316 + 13.176396 * O), G = M * (134.963 + 13.064993 * O), ct = M * (93.272 + 13.22935 * O), nt = $ + M * 6.289 * o(G), ht = M * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Rt.getMoonPosition = function(O, $, G) {
        var ct = M * -G, nt = M * $, ht = E(O), ot = ze(ht), lt = _t(ht, ct) - ot.ra, Mt = it(lt, nt, ot.dec), Kt = v(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
        return Mt = Mt + Bt(Mt), {
          azimuth: J(lt, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Rt.getMoonIllumination = function(O) {
        var $ = E(O || /* @__PURE__ */ new Date()), G = Ht($), ct = ze($), nt = 149598e3, ht = w(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = v(nt * o(ht), ct.dist - nt * f(ht)), lt = v(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
        return {
          fraction: (1 + f(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
          angle: lt
        };
      };
      function xn(O, $) {
        return new Date(O.valueOf() + $ * I / 24);
      }
      Rt.getMoonTimes = function(O, $, G, ct) {
        var nt = new Date(O);
        ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * M, ot = Rt.getMoonPosition(nt, $, G).altitude - ht, lt, Mt, Kt, Ft, Wt, mn, vt, Lt, kn, Ct, Ut, cn, nn, pt = 1; pt <= 24 && (lt = Rt.getMoonPosition(xn(nt, pt), $, G).altitude - ht, Mt = Rt.getMoonPosition(xn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + Mt) / 2 - lt, mn = (Mt - ot) / 2, vt = -mn / (2 * Wt), Lt = (Wt * vt + mn) * vt + lt, kn = mn * mn - 4 * Wt * lt, Ct = 0, kn >= 0 && (nn = Math.sqrt(kn) / (Math.abs(Wt) * 2), Ut = vt - nn, cn = vt + nn, Math.abs(Ut) <= 1 && Ct++, Math.abs(cn) <= 1 && Ct++, Ut < -1 && (Ut = cn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Ft = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? cn : Ut), Ft = pt + (Lt < 0 ? Ut : cn)), !(Kt && Ft)); pt += 2)
          ot = Mt;
        var yn = {};
        return Kt && (yn.rise = xn(nt, Kt)), Ft && (yn.set = xn(nt, Ft)), !Kt && !Ft && (yn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), yn;
      }, c.exports = Rt;
    })();
  }(ds)), ds.exports;
}
var pu = B0();
function Hn(c, s) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class W0 {
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
class Ms {
  constructor(s, r, o, f) {
    C(this, "start");
    C(this, "lat");
    C(this, "lon");
    C(this, "timezone");
    C(this, "sun");
    C(this, "startTime");
    this.start = s, this.lat = o, this.lon = f, this.timezone = r;
    const p = pu.getTimes(this.start, this.lat, this.lon), d = pu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new W0({
      nadir: Hn(p.nadir, this.timezone),
      dawn: Hn(p.dawn, this.timezone),
      sunrise: Hn(p.sunrise, this.timezone),
      dusk: Hn(p.dusk, this.timezone),
      sunset: Hn(p.sunset, this.timezone),
      noon: Hn(p.solarNoon, this.timezone),
      nadirAltitude: d.altitude * 180 / Math.PI
    }), this.startTime = Hn(this.start, this.timezone);
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
const ee = Kn("models:Course"), U0 = ["track", "dist", "gain", "loss", "cache", "distance", "start"], $0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class e_ {
  constructor(s, r) {
    C(this, "event");
    C(this, "name");
    C(this, "_cache", {});
    C(this, "_loops", 1);
    C(this, "_distOverride");
    C(this, "_gainOverride");
    C(this, "_lossOverride");
    C(this, "_dist");
    C(this, "_gain");
    C(this, "_loss");
    C(this, "_sites", [
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
    C(this, "_waypoints");
    C(this, "_track");
    C(this, "_points");
    C(this, "_terrain");
    C(this, "_cutoffs");
    C(this, "_splits");
    // calculate max and min values along course
    C(this, "_stats");
    this._track = s, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss), r.start && (this.event = new Ms(r.start.date, r.start.timezone, s.points[0].lat, s.points[0].lon));
    const o = Object.keys(r).filter((f) => !U0.includes(f));
    Object.assign(this, z.pick(r, o));
  }
  get loops() {
    return this._loops;
  }
  set loops(s) {
    this._loops = s, this.clearCache(2);
  }
  set dist(s) {
    ee(`overriding dist to ${s}`), this._distOverride = s, this.clearCache(2);
  }
  set gain(s) {
    ee(`overriding gain to ${s}`), this._gainOverride = s, this.clearCache(2);
  }
  set loss(s) {
    ee(`overriding loss to ${s}`), this._lossOverride = s, this.clearCache(2);
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
    ee(`clearCache-${s}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrain, delete this._waypoints, s === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
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
    if (this._points)
      return this._points;
    ee("generating points array"), this._points = new Array(this.track.points.length * this.loops);
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
    const o = this.points.findIndex((M) => Wr(M.loc, s, 4)), f = this.points[o];
    if (Ue(f.loc, s, 4))
      return f;
    ee(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = o - 1, d = this.points[p], v = Ru(d.point, f.point, s % this.loopDist / this.distScale), w = new uu(this, v, Math.floor(s / this.loopDist));
    return r && this.points.splice(o, 0, w), w;
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
      var v, w;
      const f = z.isNumber(r.value) ? r.value : z.isString(r.value) ? ((v = $0.find((M) => M.type === r.value)) == null ? void 0 : v.value) || 0 : r.value.value, p = typeof r == "string" ? r : z.isObject(r.value) ? r.value.type : void 0;
      return {
        value: f,
        type: p,
        percents: [r.percent, ((w = s[o + 1]) == null ? void 0 : w.percent) || 1]
      };
    });
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new q0(s)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new O0(this), this._splits);
  }
  get stats() {
    if (this._stats)
      return this._stats;
    ee("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), o = this.terrain.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: z.sum(this.track.points.map((d, v) => {
          var w;
          return d.alt * (d.loc - (((w = this.track.points[v - 1]) == null ? void 0 : w.loc) || 0));
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
        avg: (z.sumBy(this.terrain, (d) => (d.percents[1] - d.percents[0]) * this.dist * d.value) / this.dist + 100) / 100,
        max: z.max(o) || 0,
        min: z.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrain.reduce((v, w) => w.value / 100 + 1 === d ? v + (w.percents[1] - w.percents[0]) * this.dist : v, 0);
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(s) {
    const r = s.filter((f) => f > 0 && bs(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class q0 {
  constructor(s) {
    C(this, "waypoint");
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
var _s = {}, gu;
function z0() {
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
      function r(v) {
        return f(d(v), arguments);
      }
      function o(v, w) {
        return r.apply(null, [v].concat(w || []));
      }
      function f(v, w) {
        var M = 1, I = v.length, m, T = "", F, R, E, N, q, Z, J, it;
        for (F = 0; F < I; F++)
          if (typeof v[F] == "string")
            T += v[F];
          else if (typeof v[F] == "object") {
            if (E = v[F], E.keys)
              for (m = w[M], R = 0; R < E.keys.length; R++) {
                if (m == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[R], E.keys[R - 1]));
                m = m[E.keys[R]];
              }
            else E.param_no ? m = w[E.param_no] : m = w[M++];
            if (s.not_type.test(E.type) && s.not_primitive.test(E.type) && m instanceof Function && (m = m()), s.numeric_arg.test(E.type) && typeof m != "number" && isNaN(m))
              throw new TypeError(r("[sprintf] expecting number but found %T", m));
            switch (s.number.test(E.type) && (J = m >= 0), E.type) {
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
            s.json.test(E.type) ? T += m : (s.number.test(E.type) && (!J || E.sign) ? (it = J ? "+" : "-", m = m.toString().replace(s.sign, "")) : it = "", q = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", Z = E.width - (it + m).length, N = E.width && Z > 0 ? q.repeat(Z) : "", T += E.align ? it + m + N : q === "0" ? it + N + m : N + it + m);
          }
        return T;
      }
      var p = /* @__PURE__ */ Object.create(null);
      function d(v) {
        if (p[v])
          return p[v];
        for (var w = v, M, I = [], m = 0; w; ) {
          if ((M = s.text.exec(w)) !== null)
            I.push(M[0]);
          else if ((M = s.modulo.exec(w)) !== null)
            I.push("%");
          else if ((M = s.placeholder.exec(w)) !== null) {
            if (M[2]) {
              m |= 1;
              var T = [], F = M[2], R = [];
              if ((R = s.key.exec(F)) !== null)
                for (T.push(R[1]); (F = F.substring(R[0].length)) !== ""; )
                  if ((R = s.key_access.exec(F)) !== null)
                    T.push(R[1]);
                  else if ((R = s.index_access.exec(F)) !== null)
                    T.push(R[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              M[2] = T;
            } else
              m |= 2;
            if (m === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            I.push(
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
          w = w.substring(M[0].length);
        }
        return p[v] = I;
      }
      c.sprintf = r, c.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
    })();
  }(_s)), _s;
}
var Cs = z0();
const G0 = Kn("PaceChunk");
class H0 {
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
class du {
  constructor(s, r, o, f) {
    C(this, "constraints");
    C(this, "points");
    C(this, "plan");
    C(this, "delay");
    C(this, "factor");
    C(this, "factors", new Sn());
    C(this, "status");
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
    s[0].elapsed = z.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - z.sum(this.plan.pacing.chunks.filter((M) => M.points[0].loc < s[0].loc).map((M) => M.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, o = s[0].delay || 0, f = 0, p = 0, d = 0;
    const v = this.factor ? this.np : this.plan.pacing.pace, w = new Sn().init(0);
    for (let M = 1, I = s.length; M < I; M++) {
      f = s[M].loc - s[M - 1].loc, Br(s[M - 1], this.plan), w.applyEach((T, F) => T + F * f, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * f, p = v * m * f, s[M].time = s[M - 1].time + p, o = s[M - 1].delay || 0, r += p + o, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Br(s[s.length - 1], this.plan), this.factors = w.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = G0.extend(Cs.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc]));
    let f = this.factor || 0, p;
    const d = new H0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !z.round(f - this.factor, 10), f = this.factor, d.target = Math.abs((z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed) < 0.1, o(Cs.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const jt = Kn("Pacing");
class K0 {
  constructor(s) {
    C(this, "chunks", []);
    C(this, "plan");
    C(this, "_elapsed");
    C(this, "_factor");
    C(this, "_factors");
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
    return jt("factors:get"), this._factors || (jt("factors:update"), this._factors = xs(this.chunks)), this._factors;
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
    var o, f;
    const s = jt.extend("calculate");
    s("exec"), s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (o = this.plan.course.terrain) == null || o.forEach((p) => this.plan.getPoint(p.percents[0] * this.plan.course.dist, !0)), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
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
  splitChunk(s, r, o) {
    jt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((w) => w === r), d = z.round(r.elapsed - r.time), v = new du(this.plan, s.points.slice(0, p + 1), [0, o], d);
    v.points.filter((w, M) => M < v.points.length - 1).forEach((w) => {
      w._chunk = v;
    }), this.chunks.unshift(v), s.constraints[0] = o, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const o = this.chunks.findIndex((p) => p === s), f = this.chunks.findIndex((p) => p === r);
    if (f - o !== 1)
      throw new Error("chunks must be sequential");
    jt(Cs.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class _u {
  constructor(s, r) {
    C(this, "factors", new Sn());
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
const vs = Kn("PlanSplits");
class Z0 {
  constructor(s) {
    C(this, "_segments");
    C(this, "_miles");
    C(this, "_kilometers");
    C(this, "plan");
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
    const s = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length)
      throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = s[f + 1];
    }), r;
  }
  createSplits(s) {
    vs(`createSplits:${s}`);
    const r = Iu(s), o = z.range(this.plan.course.dist * r).map((p) => p / r);
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length)
      throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(s) {
    var F;
    vs.extend("calcSegments")("exec");
    const o = this.plan, f = o.course, p = o.points, d = [], v = [];
    let w, M, I = o.points[0], m;
    for (w = 0, M = s.length; w < M; w++) {
      const R = s[w];
      m && Ue((F = s[w - 1]) == null ? void 0 : F.end, R.start, 4) ? I = m : I = o.getPoint(R.start), m = o.getPoint(R.end);
      const E = R.end - R.start, N = new L0(this.plan, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (m.alt - I.alt) / E / 10 * (m.alt - I.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: I,
        point2: m
      }), q = new Sn().init(0);
      d.push(N), v.push(q);
    }
    const T = (R, E, N, q) => {
      const Z = N.alt - E.alt;
      R[Z > 0 ? "gain" : "loss"] += Z * (Z > 0 ? f.gainScale : f.lossScale), Br(E, o);
      const J = N.loc - E.loc;
      q.applyEach((it, _t) => it + _t * J, E.factors);
    };
    w = 1;
    for (let R = 0; R < d.length; R++) {
      const E = d[R], N = v[R];
      for (; ye(p[w].loc, E.point1.loc, 4); )
        w++;
      let q = E.point1;
      for (; w < p.length && ye(p[w].loc, E.point2.loc, 4); ) {
        const Z = p[w];
        T(E, q, Z, N), q = Z, w++;
      }
      T(E, q, E.point2, N), o && (E.delay = o.delays.filter((Z) => Wr(E.point1.loc, Z.loc, 4) && bs(E.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return d;
  }
}
const _n = Kn("models:Plan");
class r_ {
  constructor(s, r) {
    C(this, "course");
    C(this, "_cutoffMargin", 0);
    C(this, "_cutoffs");
    C(this, "_specifiedDelays", []);
    C(this, "_delays");
    C(this, "event");
    C(this, "_events");
    C(this, "_heatModel");
    /**
     * Unique identifier for the plan
     */
    C(this, "id");
    C(this, "_method");
    /**
     * Display name for the plan
     */
    C(this, "name");
    C(this, "pacing");
    C(this, "points");
    C(this, "_scales", new X0(this));
    C(this, "_splits");
    C(this, "_stats");
    C(this, "_strategy");
    C(this, "_target");
    C(this, "_typicalDelay", 0);
    this.course = s;
    const o = r.start ? new Ms(r.start.date, r.start.timezone, s.points[0].lat, s.points[0].lon) : s.event;
    if (!o)
      throw new Error("Start date/timezone is required for either the plan or the course");
    this.event = o, this.id = r.id, this.pacing = new K0(this), this.points = this.course.points.map((f) => new _u(this, f)), this._method = r.method, this._target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this.scales = r.scales, this._strategy = new ms(this, r.strategy), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name;
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
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new Y0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this._cutoffs.length - 1 >= s; ) {
      const r = this._cutoffs[s];
      this._cutoffs.find((o, f) => f > s && o.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(s, 1)) : s++;
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
    const s = this.course.waypoints.map((o) => {
      var d;
      const f = (d = this._specifiedDelays) == null ? void 0 : d.find((v) => ws(v.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new J0(o, p);
    }).filter((o) => o.delay > 0).sort((o, f) => o.loc - f.loc);
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
    const s = [], r = this.event.elapsedToTimeOfDay(0), o = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < o; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((w) => {
        const M = w.time - r + 86400 * d;
        M >= 0 && M <= this.points[this.points.length - 1].elapsed && s.push({ event: w.event, elapsed: M });
      });
    s.sort((d, v) => d.elapsed - v.elapsed);
    const f = mu(this.points.map((d) => d.elapsed), this.points.map((d) => d.loc), s.map((d) => d.elapsed)), p = s.map((d, v) => ({ ...d, loc: f[v] }));
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
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new Z0(this), this._splits);
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
      const d = this.points.map((v) => v.factors.get(p));
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
    let o = 0, f = 0;
    return this.points.forEach((p, d) => {
      var v, w;
      o = p.loc - (((v = this.points[d - 1]) == null ? void 0 : v.loc) || 0), f = p.elapsed - (((w = this.points[d - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: s, sun: r }, this._stats;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(s) {
    (s == null ? void 0 : s.length) === this._strategy.values.length && s.every((r, o) => z.isEqual(r, this._strategy.values[o])) || (this._strategy = new ms(this, s), this.invalidatePacing());
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
    return ((r = this.delays.find((o) => ws(o.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    const o = this.points.findIndex((w) => Wr(w.loc, s, 4)), f = this.points[o];
    if (Ue(f.loc, s, 4))
      return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, d = this.points[p], v = new _u(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const w = f.elapsed - f.time - (d.elapsed - d.time);
      v.time = me(d.loc, f.loc, d.time + w, f.time, f.loc), v.elapsed = f.elapsed - (f.time - v.time), this.event.start && (v.tod = this.event.elapsedToTimeOfDay(v.elapsed));
    }
    return r && this.points.splice(o, 0, v), v;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits, delete this._stats;
  }
}
class J0 {
  constructor(s, r) {
    C(this, "delay");
    C(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class Y0 {
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
class X0 {
  constructor(s) {
    C(this, "plan");
    C(this, "_altitude", 1);
    C(this, "_dark", 1);
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
const Fu = (c, s, r, o) => {
  const f = wu(c, s, r, o), p = [];
  return r.forEach((d, v) => {
    let w = f[v][0] / 10;
    w > 50 ? w = 50 : w < -50 && (w = -50);
    const M = d * f[v][0] + f[v][1];
    p.push({
      grade: w,
      alt: M
    });
  }), p;
};
function Q0(c, s) {
  return Fu(s, c.map((o) => o.alt), s, 0.05).map((o) => o.grade);
}
const V0 = (c) => {
  let s = 0, r = 0;
  const o = [0];
  for (let f = 1, p = c.length; f < p; f++)
    s = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += s, o.push(r);
  return o;
}, Nr = Kn("models:Track");
class Is {
  constructor(s) {
    C(this, "dist");
    C(this, "gain");
    C(this, "loss");
    C(this, "points");
    Nr("Creating new Track object");
    const r = s.map((M) => new Eu(M.lat, M.lon, M.alt)), o = V0(r), f = Q0(r, o);
    this.points = r.map((M, I) => new Tu(M.lat, M.lon, M.alt, o[I], f[I])), Nr(`set-points - ${r.length} points`), Nr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, v = 0, w = this.points[0].alt;
    this.points.forEach((M) => {
      v = M.alt - w, v < 0 ? d += v : p += v, w = M.alt;
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
      const o = this.points.findIndex((f) => f.loc >= s);
      r = Ru(this.points[o - 1], this.points[o], s);
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
    let p = this.points.findIndex((w) => w === r), d = this.points[p], v = 0;
    for (; o > 0.025; ) {
      const w = o / 5, M = [d];
      for (let T = 1; T <= 5; T++) {
        const F = d.loc + w * T;
        if (F <= this.dist) {
          for (; this.points[p + 1].loc < F && p < this.points.length - 1; )
            p++;
          M.push(this.points[p]);
        }
      }
      const I = M.map((T) => Number(s.distanceTo(T.latlon)));
      v = Math.min(...I);
      const m = I.findIndex((T) => T === v);
      d = M[m], o = o / 5;
    }
    return {
      point: d,
      delta: v
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const o = Nr.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / s) + 1, d = Array(p).fill(0).map((I, m) => Nt(m++ * s, 3));
    d[d.length - 1] < f && d.push(f);
    const v = Fu(this.points.map((I) => I.loc), this.points.map((I) => I.alt), d, 2 * s), w = d.map((I) => this.getLLA(I)).map((I, m) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(v[m].alt, 2)
    })), M = new Is(w);
    return o(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function i_(c, s, r) {
  const o = c.map((f, p) => ({ lat: c[p], lon: s[p], alt: r[p] }));
  return new Is(o);
}
const s_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Hn
}, Symbol.toStringTag, { value: "Module" }));
export {
  e_ as Course,
  q0 as CourseCutoff,
  uu as CoursePoint,
  F0 as CourseSegment,
  Ms as Event,
  Sn as Factors,
  K0 as Pacing,
  r_ as Plan,
  _u as PlanPoint,
  L0 as PlanSegment,
  Eu as Point,
  gs as Site,
  ms as Strategy,
  Is as Track,
  Tu as TrackPoint,
  cu as Waypoint,
  P0 as adjustStrategy,
  i_ as createTrackFromArrays,
  n_ as factors,
  Ru as interpolatePoint,
  t_ as math,
  A0 as scaleDark,
  $0 as terrainTypes,
  s_ as util
};
