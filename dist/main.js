var _0 = Object.defineProperty;
var v0 = (c, i, r) => i in c ? _0(c, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[i] = r;
var M = (c, i, r) => v0(c, typeof i != "symbol" ? i + "" : i, r);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _u(c) {
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
var m0 = Be.exports, ru;
function y0() {
  return ru || (ru = 1, function(c, i) {
    (function() {
      var r, a = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", m = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", C = 500, I = "__lodash_placeholder__", v = 1, F = 2, R = 4, E = 1, P = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Wt = 64, bt = 128, tn = 256, Ht = 512, Et = 30, we = "...", $e = 800, Ur = 16, Me = 1, qe = 2, $r = 3, xn = 1 / 0, vn = 9007199254740991, ze = 17976931348623157e292, Sn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ct = [
        ["ary", bt],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Wt],
        ["rearg", tn]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Rt = "[object Error]", Bt = "[object Function]", mn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", Dn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", yn = "[object String]", Ge = "[object Symbol]", ku = "[object Undefined]", Ce = "[object WeakMap]", Ou = "[object WeakSet]", be = "[object ArrayBuffer]", re = "[object DataView]", qr = "[object Float32Array]", zr = "[object Float64Array]", Gr = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", Du = /\b__p \+= '';/g, Nu = /\b(__p \+=) '' \+/g, Wu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Is = /&(?:amp|lt|gt|quot|#39);/g, Ts = /[&<>"']/g, Bu = RegExp(Is.source), Uu = RegExp(Ts.source), $u = /<%-([\s\S]+?)%>/g, qu = /<%([\s\S]+?)%>/g, Ps = /<%=([\s\S]+?)%>/g, zu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gu = /^\w*$/, Hu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Ku = RegExp(Qr.source), Vr = /^\s+/, Zu = /\s/, Ju = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yu = /\{\n\/\* \[wrapped with (.+)\] \*/, Xu = /,? & /, Qu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vu = /[()=,{}\[\]\/\s]/, ju = /\\(\\)?/g, tl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fs = /\w*$/, nl = /^[-+]0x[0-9a-f]+$/i, el = /^0b[01]+$/i, rl = /^\[object .+?Constructor\]$/, il = /^0o[0-7]+$/i, sl = /^(?:0|[1-9]\d*)$/, al = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, He = /($^)/, ol = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", ul = "\\u0300-\\u036f", ll = "\\ufe20-\\ufe2f", fl = "\\u20d0-\\u20ff", Es = ul + ll + fl, Rs = "\\u2700-\\u27bf", Ls = "a-z\\xdf-\\xf6\\xf8-\\xff", cl = "\\xac\\xb1\\xd7\\xf7", hl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pl = "\\u2000-\\u206f", gl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ks = "A-Z\\xc0-\\xd6\\xd8-\\xde", Os = "\\ufe0e\\ufe0f", Ds = cl + hl + pl + gl, jr = "['’]", dl = "[" + Ke + "]", Ns = "[" + Ds + "]", Ze = "[" + Es + "]", Ws = "\\d+", _l = "[" + Rs + "]", Bs = "[" + Ls + "]", Us = "[^" + Ke + Ds + Ws + Rs + Ls + ks + "]", ti = "\\ud83c[\\udffb-\\udfff]", vl = "(?:" + Ze + "|" + ti + ")", $s = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + ks + "]", qs = "\\u200d", zs = "(?:" + Bs + "|" + Us + ")", ml = "(?:" + ie + "|" + Us + ")", Gs = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Hs = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", Ks = vl + "?", Zs = "[" + Os + "]?", yl = "(?:" + qs + "(?:" + [$s, ni, ei].join("|") + ")" + Zs + Ks + ")*", wl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ml = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Js = Zs + Ks + yl, Cl = "(?:" + [_l, ni, ei].join("|") + ")" + Js, bl = "(?:" + [$s + Ze + "?", Ze, ni, ei, dl].join("|") + ")", xl = RegExp(jr, "g"), Sl = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + bl + Js, "g"), Al = RegExp([
        ie + "?" + Bs + "+" + Gs + "(?=" + [Ns, ie, "$"].join("|") + ")",
        ml + "+" + Hs + "(?=" + [Ns, ie + zs, "$"].join("|") + ")",
        ie + "?" + zs + "+" + Gs,
        ie + "+" + Hs,
        Ml,
        wl,
        Ws,
        Cl
      ].join("|"), "g"), Il = RegExp("[" + qs + Ke + Es + Os + "]"), Tl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pl = [
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
      ], Fl = -1, ft = {};
      ft[qr] = ft[zr] = ft[Gr] = ft[Hr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[be] = ft[lt] = ft[re] = ft[Mt] = ft[Rt] = ft[Bt] = ft[vt] = ft[Lt] = ft[Ct] = ft[nn] = ft[pt] = ft[yn] = ft[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[be] = ut[re] = ut[lt] = ut[Mt] = ut[qr] = ut[zr] = ut[Gr] = ut[Hr] = ut[Kr] = ut[vt] = ut[Lt] = ut[Ct] = ut[nn] = ut[pt] = ut[yn] = ut[Ge] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Rt] = ut[Bt] = ut[Ce] = !1;
      var El = {
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
      }, Ll = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, kl = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Ol = parseFloat, Dl = parseInt, Ys = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Nl = typeof self == "object" && self && self.Object === Object && self, It = Ys || Nl || Function("return this")(), ii = i && !i.nodeType && i, Jn = ii && !0 && c && !c.nodeType && c, Xs = Jn && Jn.exports === ii, si = Xs && Ys.process, en = function() {
        try {
          var _ = Jn && Jn.require && Jn.require("util").types;
          return _ || si && si.binding && si.binding("util");
        } catch {
        }
      }(), Qs = en && en.isArrayBuffer, Vs = en && en.isDate, js = en && en.isMap, ta = en && en.isRegExp, na = en && en.isSet, ea = en && en.isTypedArray;
      function Zt(_, x, b) {
        switch (b.length) {
          case 0:
            return _.call(x);
          case 1:
            return _.call(x, b[0]);
          case 2:
            return _.call(x, b[0], b[1]);
          case 3:
            return _.call(x, b[0], b[1], b[2]);
        }
        return _.apply(x, b);
      }
      function Wl(_, x, b, O) {
        for (var H = -1, et = _ == null ? 0 : _.length; ++H < et; ) {
          var xt = _[H];
          x(O, xt, b(xt), _);
        }
        return O;
      }
      function rn(_, x) {
        for (var b = -1, O = _ == null ? 0 : _.length; ++b < O && x(_[b], b, _) !== !1; )
          ;
        return _;
      }
      function Bl(_, x) {
        for (var b = _ == null ? 0 : _.length; b-- && x(_[b], b, _) !== !1; )
          ;
        return _;
      }
      function ra(_, x) {
        for (var b = -1, O = _ == null ? 0 : _.length; ++b < O; )
          if (!x(_[b], b, _))
            return !1;
        return !0;
      }
      function Nn(_, x) {
        for (var b = -1, O = _ == null ? 0 : _.length, H = 0, et = []; ++b < O; ) {
          var xt = _[b];
          x(xt, b, _) && (et[H++] = xt);
        }
        return et;
      }
      function Je(_, x) {
        var b = _ == null ? 0 : _.length;
        return !!b && se(_, x, 0) > -1;
      }
      function ai(_, x, b) {
        for (var O = -1, H = _ == null ? 0 : _.length; ++O < H; )
          if (b(x, _[O]))
            return !0;
        return !1;
      }
      function gt(_, x) {
        for (var b = -1, O = _ == null ? 0 : _.length, H = Array(O); ++b < O; )
          H[b] = x(_[b], b, _);
        return H;
      }
      function Wn(_, x) {
        for (var b = -1, O = x.length, H = _.length; ++b < O; )
          _[H + b] = x[b];
        return _;
      }
      function oi(_, x, b, O) {
        var H = -1, et = _ == null ? 0 : _.length;
        for (O && et && (b = _[++H]); ++H < et; )
          b = x(b, _[H], H, _);
        return b;
      }
      function Ul(_, x, b, O) {
        var H = _ == null ? 0 : _.length;
        for (O && H && (b = _[--H]); H--; )
          b = x(b, _[H], H, _);
        return b;
      }
      function ui(_, x) {
        for (var b = -1, O = _ == null ? 0 : _.length; ++b < O; )
          if (x(_[b], b, _))
            return !0;
        return !1;
      }
      var $l = li("length");
      function ql(_) {
        return _.split("");
      }
      function zl(_) {
        return _.match(Qu) || [];
      }
      function ia(_, x, b) {
        var O;
        return b(_, function(H, et, xt) {
          if (x(H, et, xt))
            return O = et, !1;
        }), O;
      }
      function Ye(_, x, b, O) {
        for (var H = _.length, et = b + (O ? 1 : -1); O ? et-- : ++et < H; )
          if (x(_[et], et, _))
            return et;
        return -1;
      }
      function se(_, x, b) {
        return x === x ? nf(_, x, b) : Ye(_, sa, b);
      }
      function Gl(_, x, b, O) {
        for (var H = b - 1, et = _.length; ++H < et; )
          if (O(_[H], x))
            return H;
        return -1;
      }
      function sa(_) {
        return _ !== _;
      }
      function aa(_, x) {
        var b = _ == null ? 0 : _.length;
        return b ? ci(_, x) / b : Sn;
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
      function oa(_, x, b, O, H) {
        return H(_, function(et, xt, at) {
          b = O ? (O = !1, et) : x(b, et, xt, at);
        }), b;
      }
      function Hl(_, x) {
        var b = _.length;
        for (_.sort(x); b--; )
          _[b] = _[b].value;
        return _;
      }
      function ci(_, x) {
        for (var b, O = -1, H = _.length; ++O < H; ) {
          var et = x(_[O]);
          et !== r && (b = b === r ? et : b + et);
        }
        return b;
      }
      function hi(_, x) {
        for (var b = -1, O = Array(_); ++b < _; )
          O[b] = x(b);
        return O;
      }
      function Kl(_, x) {
        return gt(x, function(b) {
          return [b, _[b]];
        });
      }
      function ua(_) {
        return _ && _.slice(0, ha(_) + 1).replace(Vr, "");
      }
      function Jt(_) {
        return function(x) {
          return _(x);
        };
      }
      function pi(_, x) {
        return gt(x, function(b) {
          return _[b];
        });
      }
      function xe(_, x) {
        return _.has(x);
      }
      function la(_, x) {
        for (var b = -1, O = _.length; ++b < O && se(x, _[b], 0) > -1; )
          ;
        return b;
      }
      function fa(_, x) {
        for (var b = _.length; b-- && se(x, _[b], 0) > -1; )
          ;
        return b;
      }
      function Zl(_, x) {
        for (var b = _.length, O = 0; b--; )
          _[b] === x && ++O;
        return O;
      }
      var Jl = fi(El), Yl = fi(Rl);
      function Xl(_) {
        return "\\" + kl[_];
      }
      function Ql(_, x) {
        return _ == null ? r : _[x];
      }
      function ae(_) {
        return Il.test(_);
      }
      function Vl(_) {
        return Tl.test(_);
      }
      function jl(_) {
        for (var x, b = []; !(x = _.next()).done; )
          b.push(x.value);
        return b;
      }
      function gi(_) {
        var x = -1, b = Array(_.size);
        return _.forEach(function(O, H) {
          b[++x] = [H, O];
        }), b;
      }
      function ca(_, x) {
        return function(b) {
          return _(x(b));
        };
      }
      function Bn(_, x) {
        for (var b = -1, O = _.length, H = 0, et = []; ++b < O; ) {
          var xt = _[b];
          (xt === x || xt === I) && (_[b] = I, et[H++] = b);
        }
        return et;
      }
      function Xe(_) {
        var x = -1, b = Array(_.size);
        return _.forEach(function(O) {
          b[++x] = O;
        }), b;
      }
      function tf(_) {
        var x = -1, b = Array(_.size);
        return _.forEach(function(O) {
          b[++x] = [O, O];
        }), b;
      }
      function nf(_, x, b) {
        for (var O = b - 1, H = _.length; ++O < H; )
          if (_[O] === x)
            return O;
        return -1;
      }
      function ef(_, x, b) {
        for (var O = b + 1; O--; )
          if (_[O] === x)
            return O;
        return O;
      }
      function oe(_) {
        return ae(_) ? sf(_) : $l(_);
      }
      function hn(_) {
        return ae(_) ? af(_) : ql(_);
      }
      function ha(_) {
        for (var x = _.length; x-- && Zu.test(_.charAt(x)); )
          ;
        return x;
      }
      var rf = fi(Ll);
      function sf(_) {
        for (var x = ri.lastIndex = 0; ri.test(_); )
          ++x;
        return x;
      }
      function af(_) {
        return _.match(ri) || [];
      }
      function of(_) {
        return _.match(Al) || [];
      }
      var uf = function _(x) {
        x = x == null ? It : ue.defaults(It.Object(), x, ue.pick(It, Pl));
        var b = x.Array, O = x.Date, H = x.Error, et = x.Function, xt = x.Math, at = x.Object, di = x.RegExp, lf = x.String, sn = x.TypeError, Qe = b.prototype, ff = et.prototype, le = at.prototype, Ve = x["__core-js_shared__"], je = ff.toString, st = le.hasOwnProperty, cf = 0, pa = function() {
          var t = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), tr = le.toString, hf = je.call(at), pf = It._, gf = di(
          "^" + je.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Xs ? x.Buffer : r, Un = x.Symbol, er = x.Uint8Array, ga = nr ? nr.allocUnsafe : r, rr = ca(at.getPrototypeOf, at), da = at.create, _a = le.propertyIsEnumerable, ir = Qe.splice, va = Un ? Un.isConcatSpreadable : r, Se = Un ? Un.iterator : r, Yn = Un ? Un.toStringTag : r, sr = function() {
          try {
            var t = te(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), df = x.clearTimeout !== It.clearTimeout && x.clearTimeout, _f = O && O.now !== It.Date.now && O.now, vf = x.setTimeout !== It.setTimeout && x.setTimeout, ar = xt.ceil, or = xt.floor, _i = at.getOwnPropertySymbols, mf = nr ? nr.isBuffer : r, ma = x.isFinite, yf = Qe.join, wf = ca(at.keys, at), St = xt.max, Pt = xt.min, Mf = O.now, Cf = x.parseInt, ya = xt.random, bf = Qe.reverse, vi = te(x, "DataView"), Ae = te(x, "Map"), mi = te(x, "Promise"), fe = te(x, "Set"), Ie = te(x, "WeakMap"), Te = te(at, "create"), ur = Ie && new Ie(), ce = {}, xf = ne(vi), Sf = ne(Ae), Af = ne(mi), If = ne(fe), Tf = ne(Ie), lr = Un ? Un.prototype : r, Pe = lr ? lr.valueOf : r, wa = lr ? lr.toString : r;
        function u(t) {
          if (mt(t) && !K(t) && !(t instanceof j)) {
            if (t instanceof an)
              return t;
            if (st.call(t, "__wrapped__"))
              return Co(t);
          }
          return new an(t);
        }
        var he = /* @__PURE__ */ function() {
          function t() {
          }
          return function(n) {
            if (!dt(n))
              return {};
            if (da)
              return da(n);
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
          escape: $u,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: qu,
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
        }, u.prototype = fr.prototype, u.prototype.constructor = u, an.prototype = he(fr.prototype), an.prototype.constructor = an;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function Pf() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function Ff() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Ef() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = K(t), s = n < 0, o = e ? t.length : 0, l = zc(0, o, this.__views__), h = l.start, g = l.end, y = g - h, S = s ? g : h - 1, A = this.__iteratees__, T = A.length, L = 0, D = Pt(y, this.__takeCount__);
          if (!e || !s && o == y && D == y)
            return Ga(t, this.__actions__);
          var B = [];
          t:
            for (; y-- && L < D; ) {
              S += n;
              for (var X = -1, U = t[S]; ++X < T; ) {
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
            var s = t[n];
            this.set(s[0], s[1]);
          }
        }
        function Rf() {
          this.__data__ = Te ? Te(null) : {}, this.size = 0;
        }
        function Lf(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function kf(t) {
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
        function Df(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Te && n === r ? w : n, this;
        }
        Xn.prototype.clear = Rf, Xn.prototype.delete = Lf, Xn.prototype.get = kf, Xn.prototype.has = Of, Xn.prototype.set = Df;
        function An(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var s = t[n];
            this.set(s[0], s[1]);
          }
        }
        function Nf() {
          this.__data__ = [], this.size = 0;
        }
        function Wf(t) {
          var n = this.__data__, e = cr(n, t);
          if (e < 0)
            return !1;
          var s = n.length - 1;
          return e == s ? n.pop() : ir.call(n, e, 1), --this.size, !0;
        }
        function Bf(t) {
          var n = this.__data__, e = cr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Uf(t) {
          return cr(this.__data__, t) > -1;
        }
        function $f(t, n) {
          var e = this.__data__, s = cr(e, t);
          return s < 0 ? (++this.size, e.push([t, n])) : e[s][1] = n, this;
        }
        An.prototype.clear = Nf, An.prototype.delete = Wf, An.prototype.get = Bf, An.prototype.has = Uf, An.prototype.set = $f;
        function In(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var s = t[n];
            this.set(s[0], s[1]);
          }
        }
        function qf() {
          this.size = 0, this.__data__ = {
            hash: new Xn(),
            map: new (Ae || An)(),
            string: new Xn()
          };
        }
        function zf(t) {
          var n = br(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function Gf(t) {
          return br(this, t).get(t);
        }
        function Hf(t) {
          return br(this, t).has(t);
        }
        function Kf(t, n) {
          var e = br(this, t), s = e.size;
          return e.set(t, n), this.size += e.size == s ? 0 : 1, this;
        }
        In.prototype.clear = qf, In.prototype.delete = zf, In.prototype.get = Gf, In.prototype.has = Hf, In.prototype.set = Kf;
        function Qn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new In(); ++n < e; )
            this.add(t[n]);
        }
        function Zf(t) {
          return this.__data__.set(t, w), this;
        }
        function Jf(t) {
          return this.__data__.has(t);
        }
        Qn.prototype.add = Qn.prototype.push = Zf, Qn.prototype.has = Jf;
        function pn(t) {
          var n = this.__data__ = new An(t);
          this.size = n.size;
        }
        function Yf() {
          this.__data__ = new An(), this.size = 0;
        }
        function Xf(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function Qf(t) {
          return this.__data__.get(t);
        }
        function Vf(t) {
          return this.__data__.has(t);
        }
        function jf(t, n) {
          var e = this.__data__;
          if (e instanceof An) {
            var s = e.__data__;
            if (!Ae || s.length < f - 1)
              return s.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new In(s);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = Yf, pn.prototype.delete = Xf, pn.prototype.get = Qf, pn.prototype.has = Vf, pn.prototype.set = jf;
        function Ma(t, n) {
          var e = K(t), s = !e && ee(t), o = !e && !s && Hn(t), l = !e && !s && !o && _e(t), h = e || s || o || l, g = h ? hi(t.length, lf) : [], y = g.length;
          for (var S in t)
            (n || st.call(t, S)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (S == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (S == "offset" || S == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (S == "buffer" || S == "byteLength" || S == "byteOffset") || // Skip index properties.
            En(S, y))) && g.push(S);
          return g;
        }
        function Ca(t) {
          var n = t.length;
          return n ? t[Pi(0, n - 1)] : r;
        }
        function tc(t, n) {
          return xr($t(t), Vn(n, 0, t.length));
        }
        function nc(t) {
          return xr($t(t));
        }
        function yi(t, n, e) {
          (e !== r && !gn(t[n], e) || e === r && !(n in t)) && Tn(t, n, e);
        }
        function Fe(t, n, e) {
          var s = t[n];
          (!(st.call(t, n) && gn(s, e)) || e === r && !(n in t)) && Tn(t, n, e);
        }
        function cr(t, n) {
          for (var e = t.length; e--; )
            if (gn(t[e][0], n))
              return e;
          return -1;
        }
        function ec(t, n, e, s) {
          return $n(t, function(o, l, h) {
            n(s, o, e(o), h);
          }), s;
        }
        function ba(t, n) {
          return t && Mn(n, At(n), t);
        }
        function rc(t, n) {
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
          for (var e = -1, s = n.length, o = b(s), l = t == null; ++e < s; )
            o[e] = l ? r : ts(t, n[e]);
          return o;
        }
        function Vn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function on(t, n, e, s, o, l) {
          var h, g = n & v, y = n & F, S = n & R;
          if (e && (h = o ? e(t, s, o, l) : e(t)), h !== r)
            return h;
          if (!dt(t))
            return t;
          var A = K(t);
          if (A) {
            if (h = Hc(t), !g)
              return $t(t, h);
          } else {
            var T = Ft(t), L = T == Bt || T == mn;
            if (Hn(t))
              return Za(t, g);
            if (T == Ct || T == nt || L && !o) {
              if (h = y || L ? {} : ho(t), !g)
                return y ? kc(t, rc(h, t)) : Lc(t, ba(h, t));
            } else {
              if (!ut[T])
                return o ? t : {};
              h = Kc(t, T, g);
            }
          }
          l || (l = new pn());
          var D = l.get(t);
          if (D)
            return D;
          l.set(t, h), qo(t) ? t.forEach(function(U) {
            h.add(on(U, n, e, U, t, l));
          }) : Uo(t) && t.forEach(function(U, V) {
            h.set(V, on(U, n, e, V, t, l));
          });
          var B = S ? y ? Ui : Bi : y ? zt : At, X = A ? r : B(t);
          return rn(X || t, function(U, V) {
            X && (V = U, U = t[V]), Fe(h, V, on(U, n, e, V, t, l));
          }), h;
        }
        function ic(t) {
          var n = At(t);
          return function(e) {
            return xa(e, t, n);
          };
        }
        function xa(t, n, e) {
          var s = e.length;
          if (t == null)
            return !s;
          for (t = at(t); s--; ) {
            var o = e[s], l = n[o], h = t[o];
            if (h === r && !(o in t) || !l(h))
              return !1;
          }
          return !0;
        }
        function Sa(t, n, e) {
          if (typeof t != "function")
            throw new sn(d);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Ee(t, n, e, s) {
          var o = -1, l = Je, h = !0, g = t.length, y = [], S = n.length;
          if (!g)
            return y;
          e && (n = gt(n, Jt(e))), s ? (l = ai, h = !1) : n.length >= f && (l = xe, h = !1, n = new Qn(n));
          t:
            for (; ++o < g; ) {
              var A = t[o], T = e == null ? A : e(A);
              if (A = s || A !== 0 ? A : 0, h && T === T) {
                for (var L = S; L--; )
                  if (n[L] === T)
                    continue t;
                y.push(A);
              } else l(n, T, s) || y.push(A);
            }
          return y;
        }
        var $n = Va(wn), Aa = Va(Ci, !0);
        function sc(t, n) {
          var e = !0;
          return $n(t, function(s, o, l) {
            return e = !!n(s, o, l), e;
          }), e;
        }
        function hr(t, n, e) {
          for (var s = -1, o = t.length; ++s < o; ) {
            var l = t[s], h = n(l);
            if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
              var g = h, y = l;
          }
          return y;
        }
        function ac(t, n, e, s) {
          var o = t.length;
          for (e = Y(e), e < 0 && (e = -e > o ? 0 : o + e), s = s === r || s > o ? o : Y(s), s < 0 && (s += o), s = e > s ? 0 : Go(s); e < s; )
            t[e++] = n;
          return t;
        }
        function Ia(t, n) {
          var e = [];
          return $n(t, function(s, o, l) {
            n(s, o, l) && e.push(s);
          }), e;
        }
        function Tt(t, n, e, s, o) {
          var l = -1, h = t.length;
          for (e || (e = Jc), o || (o = []); ++l < h; ) {
            var g = t[l];
            n > 0 && e(g) ? n > 1 ? Tt(g, n - 1, e, s, o) : Wn(o, g) : s || (o[o.length] = g);
          }
          return o;
        }
        var Mi = ja(), Ta = ja(!0);
        function wn(t, n) {
          return t && Mi(t, n, At);
        }
        function Ci(t, n) {
          return t && Ta(t, n, At);
        }
        function pr(t, n) {
          return Nn(n, function(e) {
            return Rn(t[e]);
          });
        }
        function jn(t, n) {
          n = zn(n, t);
          for (var e = 0, s = n.length; t != null && e < s; )
            t = t[Cn(n[e++])];
          return e && e == s ? t : r;
        }
        function Pa(t, n, e) {
          var s = n(t);
          return K(t) ? s : Wn(s, e(t));
        }
        function kt(t) {
          return t == null ? t === r ? ku : Dn : Yn && Yn in at(t) ? qc(t) : nh(t);
        }
        function bi(t, n) {
          return t > n;
        }
        function oc(t, n) {
          return t != null && st.call(t, n);
        }
        function uc(t, n) {
          return t != null && n in at(t);
        }
        function lc(t, n, e) {
          return t >= Pt(n, e) && t < St(n, e);
        }
        function xi(t, n, e) {
          for (var s = e ? ai : Je, o = t[0].length, l = t.length, h = l, g = b(l), y = 1 / 0, S = []; h--; ) {
            var A = t[h];
            h && n && (A = gt(A, Jt(n))), y = Pt(A.length, y), g[h] = !e && (n || o >= 120 && A.length >= 120) ? new Qn(h && A) : r;
          }
          A = t[0];
          var T = -1, L = g[0];
          t:
            for (; ++T < o && S.length < y; ) {
              var D = A[T], B = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? xe(L, B) : s(S, B, e))) {
                for (h = l; --h; ) {
                  var X = g[h];
                  if (!(X ? xe(X, B) : s(t[h], B, e)))
                    continue t;
                }
                L && L.push(B), S.push(D);
              }
            }
          return S;
        }
        function fc(t, n, e, s) {
          return wn(t, function(o, l, h) {
            n(s, e(o), l, h);
          }), s;
        }
        function Re(t, n, e) {
          n = zn(n, t), t = vo(t, n);
          var s = t == null ? t : t[Cn(ln(n))];
          return s == null ? r : Zt(s, t, e);
        }
        function Fa(t) {
          return mt(t) && kt(t) == nt;
        }
        function cc(t) {
          return mt(t) && kt(t) == be;
        }
        function hc(t) {
          return mt(t) && kt(t) == Mt;
        }
        function Le(t, n, e, s, o) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : pc(t, n, e, s, Le, o);
        }
        function pc(t, n, e, s, o, l) {
          var h = K(t), g = K(n), y = h ? ht : Ft(t), S = g ? ht : Ft(n);
          y = y == nt ? Ct : y, S = S == nt ? Ct : S;
          var A = y == Ct, T = S == Ct, L = y == S;
          if (L && Hn(t)) {
            if (!Hn(n))
              return !1;
            h = !0, A = !1;
          }
          if (L && !A)
            return l || (l = new pn()), h || _e(t) ? lo(t, n, e, s, o, l) : Uc(t, n, y, e, s, o, l);
          if (!(e & E)) {
            var D = A && st.call(t, "__wrapped__"), B = T && st.call(n, "__wrapped__");
            if (D || B) {
              var X = D ? t.value() : t, U = B ? n.value() : n;
              return l || (l = new pn()), o(X, U, e, s, l);
            }
          }
          return L ? (l || (l = new pn()), $c(t, n, e, s, o, l)) : !1;
        }
        function gc(t) {
          return mt(t) && Ft(t) == vt;
        }
        function Si(t, n, e, s) {
          var o = e.length, l = o, h = !s;
          if (t == null)
            return !l;
          for (t = at(t); o--; ) {
            var g = e[o];
            if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
              return !1;
          }
          for (; ++o < l; ) {
            g = e[o];
            var y = g[0], S = t[y], A = g[1];
            if (h && g[2]) {
              if (S === r && !(y in t))
                return !1;
            } else {
              var T = new pn();
              if (s)
                var L = s(S, A, y, t, n, T);
              if (!(L === r ? Le(A, S, E | P, s, T) : L))
                return !1;
            }
          }
          return !0;
        }
        function Ea(t) {
          if (!dt(t) || Xc(t))
            return !1;
          var n = Rn(t) ? gf : rl;
          return n.test(ne(t));
        }
        function dc(t) {
          return mt(t) && kt(t) == nn;
        }
        function _c(t) {
          return mt(t) && Ft(t) == pt;
        }
        function vc(t) {
          return mt(t) && Fr(t.length) && !!ft[kt(t)];
        }
        function Ra(t) {
          return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? K(t) ? Oa(t[0], t[1]) : ka(t) : nu(t);
        }
        function Ai(t) {
          if (!De(t))
            return wf(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function mc(t) {
          if (!dt(t))
            return th(t);
          var n = De(t), e = [];
          for (var s in t)
            s == "constructor" && (n || !st.call(t, s)) || e.push(s);
          return e;
        }
        function Ii(t, n) {
          return t < n;
        }
        function La(t, n) {
          var e = -1, s = qt(t) ? b(t.length) : [];
          return $n(t, function(o, l, h) {
            s[++e] = n(o, l, h);
          }), s;
        }
        function ka(t) {
          var n = qi(t);
          return n.length == 1 && n[0][2] ? go(n[0][0], n[0][1]) : function(e) {
            return e === t || Si(e, t, n);
          };
        }
        function Oa(t, n) {
          return Gi(t) && po(n) ? go(Cn(t), n) : function(e) {
            var s = ts(e, t);
            return s === r && s === n ? ns(e, t) : Le(n, s, E | P);
          };
        }
        function gr(t, n, e, s, o) {
          t !== n && Mi(n, function(l, h) {
            if (o || (o = new pn()), dt(l))
              yc(t, n, h, e, gr, s, o);
            else {
              var g = s ? s(Ki(t, h), l, h + "", t, n, o) : r;
              g === r && (g = l), yi(t, h, g);
            }
          }, zt);
        }
        function yc(t, n, e, s, o, l, h) {
          var g = Ki(t, e), y = Ki(n, e), S = h.get(y);
          if (S) {
            yi(t, e, S);
            return;
          }
          var A = l ? l(g, y, e + "", t, n, h) : r, T = A === r;
          if (T) {
            var L = K(y), D = !L && Hn(y), B = !L && !D && _e(y);
            A = y, L || D || B ? K(g) ? A = g : yt(g) ? A = $t(g) : D ? (T = !1, A = Za(y, !0)) : B ? (T = !1, A = Ja(y, !0)) : A = [] : We(y) || ee(y) ? (A = g, ee(g) ? A = Ho(g) : (!dt(g) || Rn(g)) && (A = ho(y))) : T = !1;
          }
          T && (h.set(y, A), o(A, y, s, l, h), h.delete(y)), yi(t, e, A);
        }
        function Da(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, En(n, e) ? t[n] : r;
        }
        function Na(t, n, e) {
          n.length ? n = gt(n, function(l) {
            return K(l) ? function(h) {
              return jn(h, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [Gt];
          var s = -1;
          n = gt(n, Jt(W()));
          var o = La(t, function(l, h, g) {
            var y = gt(n, function(S) {
              return S(l);
            });
            return { criteria: y, index: ++s, value: l };
          });
          return Hl(o, function(l, h) {
            return Rc(l, h, e);
          });
        }
        function wc(t, n) {
          return Wa(t, n, function(e, s) {
            return ns(t, s);
          });
        }
        function Wa(t, n, e) {
          for (var s = -1, o = n.length, l = {}; ++s < o; ) {
            var h = n[s], g = jn(t, h);
            e(g, h) && ke(l, zn(h, t), g);
          }
          return l;
        }
        function Mc(t) {
          return function(n) {
            return jn(n, t);
          };
        }
        function Ti(t, n, e, s) {
          var o = s ? Gl : se, l = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = gt(t, Jt(e))); ++l < h; )
            for (var y = 0, S = n[l], A = e ? e(S) : S; (y = o(g, A, y, s)) > -1; )
              g !== t && ir.call(g, y, 1), ir.call(t, y, 1);
          return t;
        }
        function Ba(t, n) {
          for (var e = t ? n.length : 0, s = e - 1; e--; ) {
            var o = n[e];
            if (e == s || o !== l) {
              var l = o;
              En(o) ? ir.call(t, o, 1) : Ri(t, o);
            }
          }
          return t;
        }
        function Pi(t, n) {
          return t + or(ya() * (n - t + 1));
        }
        function Cc(t, n, e, s) {
          for (var o = -1, l = St(ar((n - t) / (e || 1)), 0), h = b(l); l--; )
            h[s ? l : ++o] = t, t += e;
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
          return Zi(_o(t, n, Gt), t + "");
        }
        function bc(t) {
          return Ca(ve(t));
        }
        function xc(t, n) {
          var e = ve(t);
          return xr(e, Vn(n, 0, e.length));
        }
        function ke(t, n, e, s) {
          if (!dt(t))
            return t;
          n = zn(n, t);
          for (var o = -1, l = n.length, h = l - 1, g = t; g != null && ++o < l; ) {
            var y = Cn(n[o]), S = e;
            if (y === "__proto__" || y === "constructor" || y === "prototype")
              return t;
            if (o != h) {
              var A = g[y];
              S = s ? s(A, y, g) : r, S === r && (S = dt(A) ? A : En(n[o + 1]) ? [] : {});
            }
            Fe(g, y, S), g = g[y];
          }
          return t;
        }
        var Ua = ur ? function(t, n) {
          return ur.set(t, n), t;
        } : Gt, Sc = sr ? function(t, n) {
          return sr(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: rs(n),
            writable: !0
          });
        } : Gt;
        function Ac(t) {
          return xr(ve(t));
        }
        function un(t, n, e) {
          var s = -1, o = t.length;
          n < 0 && (n = -n > o ? 0 : o + n), e = e > o ? o : e, e < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var l = b(o); ++s < o; )
            l[s] = t[s + n];
          return l;
        }
        function Ic(t, n) {
          var e;
          return $n(t, function(s, o, l) {
            return e = n(s, o, l), !e;
          }), !!e;
        }
        function dr(t, n, e) {
          var s = 0, o = t == null ? s : t.length;
          if (typeof n == "number" && n === n && o <= G) {
            for (; s < o; ) {
              var l = s + o >>> 1, h = t[l];
              h !== null && !Xt(h) && (e ? h <= n : h < n) ? s = l + 1 : o = l;
            }
            return o;
          }
          return Ei(t, n, Gt, e);
        }
        function Ei(t, n, e, s) {
          var o = 0, l = t == null ? 0 : t.length;
          if (l === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, y = Xt(n), S = n === r; o < l; ) {
            var A = or((o + l) / 2), T = e(t[A]), L = T !== r, D = T === null, B = T === T, X = Xt(T);
            if (h)
              var U = s || B;
            else S ? U = B && (s || L) : g ? U = B && L && (s || !D) : y ? U = B && L && !D && (s || !X) : D || X ? U = !1 : U = s ? T <= n : T < n;
            U ? o = A + 1 : l = A;
          }
          return Pt(l, $);
        }
        function $a(t, n) {
          for (var e = -1, s = t.length, o = 0, l = []; ++e < s; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !gn(g, y)) {
              var y = g;
              l[o++] = h === 0 ? 0 : h;
            }
          }
          return l;
        }
        function qa(t) {
          return typeof t == "number" ? t : Xt(t) ? Sn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (K(t))
            return gt(t, Yt) + "";
          if (Xt(t))
            return wa ? wa.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -xn ? "-0" : n;
        }
        function qn(t, n, e) {
          var s = -1, o = Je, l = t.length, h = !0, g = [], y = g;
          if (e)
            h = !1, o = ai;
          else if (l >= f) {
            var S = n ? null : Wc(t);
            if (S)
              return Xe(S);
            h = !1, o = xe, y = new Qn();
          } else
            y = n ? [] : g;
          t:
            for (; ++s < l; ) {
              var A = t[s], T = n ? n(A) : A;
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
          return n = zn(n, t), t = vo(t, n), t == null || delete t[Cn(ln(n))];
        }
        function za(t, n, e, s) {
          return ke(t, n, e(jn(t, n)), s);
        }
        function _r(t, n, e, s) {
          for (var o = t.length, l = s ? o : -1; (s ? l-- : ++l < o) && n(t[l], l, t); )
            ;
          return e ? un(t, s ? 0 : l, s ? l + 1 : o) : un(t, s ? l + 1 : 0, s ? o : l);
        }
        function Ga(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), oi(n, function(s, o) {
            return o.func.apply(o.thisArg, Wn([s], o.args));
          }, e);
        }
        function Li(t, n, e) {
          var s = t.length;
          if (s < 2)
            return s ? qn(t[0]) : [];
          for (var o = -1, l = b(s); ++o < s; )
            for (var h = t[o], g = -1; ++g < s; )
              g != o && (l[o] = Ee(l[o] || h, t[g], n, e));
          return qn(Tt(l, 1), n, e);
        }
        function Ha(t, n, e) {
          for (var s = -1, o = t.length, l = n.length, h = {}; ++s < o; ) {
            var g = s < l ? n[s] : r;
            e(h, t[s], g);
          }
          return h;
        }
        function ki(t) {
          return yt(t) ? t : [];
        }
        function Oi(t) {
          return typeof t == "function" ? t : Gt;
        }
        function zn(t, n) {
          return K(t) ? t : Gi(t, n) ? [t] : Mo(rt(t));
        }
        var Tc = Q;
        function Gn(t, n, e) {
          var s = t.length;
          return e = e === r ? s : e, !n && e >= s ? t : un(t, n, e);
        }
        var Ka = df || function(t) {
          return It.clearTimeout(t);
        };
        function Za(t, n) {
          if (n)
            return t.slice();
          var e = t.length, s = ga ? ga(e) : new t.constructor(e);
          return t.copy(s), s;
        }
        function Di(t) {
          var n = new t.constructor(t.byteLength);
          return new er(n).set(new er(t)), n;
        }
        function Pc(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Fc(t) {
          var n = new t.constructor(t.source, Fs.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Ec(t) {
          return Pe ? at(Pe.call(t)) : {};
        }
        function Ja(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Ya(t, n) {
          if (t !== n) {
            var e = t !== r, s = t === null, o = t === t, l = Xt(t), h = n !== r, g = n === null, y = n === n, S = Xt(n);
            if (!g && !S && !l && t > n || l && h && y && !g && !S || s && h && y || !e && y || !o)
              return 1;
            if (!s && !l && !S && t < n || S && e && o && !s && !l || g && e && o || !h && o || !y)
              return -1;
          }
          return 0;
        }
        function Rc(t, n, e) {
          for (var s = -1, o = t.criteria, l = n.criteria, h = o.length, g = e.length; ++s < h; ) {
            var y = Ya(o[s], l[s]);
            if (y) {
              if (s >= g)
                return y;
              var S = e[s];
              return y * (S == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Xa(t, n, e, s) {
          for (var o = -1, l = t.length, h = e.length, g = -1, y = n.length, S = St(l - h, 0), A = b(y + S), T = !s; ++g < y; )
            A[g] = n[g];
          for (; ++o < h; )
            (T || o < l) && (A[e[o]] = t[o]);
          for (; S--; )
            A[g++] = t[o++];
          return A;
        }
        function Qa(t, n, e, s) {
          for (var o = -1, l = t.length, h = -1, g = e.length, y = -1, S = n.length, A = St(l - g, 0), T = b(A + S), L = !s; ++o < A; )
            T[o] = t[o];
          for (var D = o; ++y < S; )
            T[D + y] = n[y];
          for (; ++h < g; )
            (L || o < l) && (T[D + e[h]] = t[o++]);
          return T;
        }
        function $t(t, n) {
          var e = -1, s = t.length;
          for (n || (n = b(s)); ++e < s; )
            n[e] = t[e];
          return n;
        }
        function Mn(t, n, e, s) {
          var o = !e;
          e || (e = {});
          for (var l = -1, h = n.length; ++l < h; ) {
            var g = n[l], y = s ? s(e[g], t[g], g, e, t) : r;
            y === r && (y = t[g]), o ? Tn(e, g, y) : Fe(e, g, y);
          }
          return e;
        }
        function Lc(t, n) {
          return Mn(t, zi(t), n);
        }
        function kc(t, n) {
          return Mn(t, fo(t), n);
        }
        function vr(t, n) {
          return function(e, s) {
            var o = K(e) ? Wl : ec, l = n ? n() : {};
            return o(e, t, W(s, 2), l);
          };
        }
        function pe(t) {
          return Q(function(n, e) {
            var s = -1, o = e.length, l = o > 1 ? e[o - 1] : r, h = o > 2 ? e[2] : r;
            for (l = t.length > 3 && typeof l == "function" ? (o--, l) : r, h && Ot(e[0], e[1], h) && (l = o < 3 ? r : l, o = 1), n = at(n); ++s < o; ) {
              var g = e[s];
              g && t(n, g, s, l);
            }
            return n;
          });
        }
        function Va(t, n) {
          return function(e, s) {
            if (e == null)
              return e;
            if (!qt(e))
              return t(e, s);
            for (var o = e.length, l = n ? o : -1, h = at(e); (n ? l-- : ++l < o) && s(h[l], l, h) !== !1; )
              ;
            return e;
          };
        }
        function ja(t) {
          return function(n, e, s) {
            for (var o = -1, l = at(n), h = s(n), g = h.length; g--; ) {
              var y = h[t ? g : ++o];
              if (e(l[y], y, l) === !1)
                break;
            }
            return n;
          };
        }
        function Oc(t, n, e) {
          var s = n & N, o = Oe(t);
          function l() {
            var h = this && this !== It && this instanceof l ? o : t;
            return h.apply(s ? e : this, arguments);
          }
          return l;
        }
        function to(t) {
          return function(n) {
            n = rt(n);
            var e = ae(n) ? hn(n) : r, s = e ? e[0] : n.charAt(0), o = e ? Gn(e, 1).join("") : n.slice(1);
            return s[t]() + o;
          };
        }
        function ge(t) {
          return function(n) {
            return oi(jo(Vo(n).replace(xl, "")), t, "");
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
            var e = he(t.prototype), s = t.apply(e, n);
            return dt(s) ? s : e;
          };
        }
        function Dc(t, n, e) {
          var s = Oe(t);
          function o() {
            for (var l = arguments.length, h = b(l), g = l, y = de(o); g--; )
              h[g] = arguments[g];
            var S = l < 3 && h[0] !== y && h[l - 1] !== y ? [] : Bn(h, y);
            if (l -= S.length, l < e)
              return so(
                t,
                n,
                mr,
                o.placeholder,
                r,
                h,
                S,
                r,
                r,
                e - l
              );
            var A = this && this !== It && this instanceof o ? s : t;
            return Zt(A, this, h);
          }
          return o;
        }
        function no(t) {
          return function(n, e, s) {
            var o = at(n);
            if (!qt(n)) {
              var l = W(e, 3);
              n = At(n), e = function(g) {
                return l(o[g], g, o);
              };
            }
            var h = t(n, e, s);
            return h > -1 ? o[l ? n[h] : h] : r;
          };
        }
        function eo(t) {
          return Fn(function(n) {
            var e = n.length, s = e, o = an.prototype.thru;
            for (t && n.reverse(); s--; ) {
              var l = n[s];
              if (typeof l != "function")
                throw new sn(d);
              if (o && !h && Cr(l) == "wrapper")
                var h = new an([], !0);
            }
            for (s = h ? s : e; ++s < e; ) {
              l = n[s];
              var g = Cr(l), y = g == "wrapper" ? $i(l) : r;
              y && Hi(y[0]) && y[1] == (bt | J | _t | tn) && !y[4].length && y[9] == 1 ? h = h[Cr(y[0])].apply(h, y[3]) : h = l.length == 1 && Hi(l) ? h[g]() : h.thru(l);
            }
            return function() {
              var S = arguments, A = S[0];
              if (h && S.length == 1 && K(A))
                return h.plant(A).value();
              for (var T = 0, L = e ? n[T].apply(this, S) : A; ++T < e; )
                L = n[T].call(this, L);
              return L;
            };
          });
        }
        function mr(t, n, e, s, o, l, h, g, y, S) {
          var A = n & bt, T = n & N, L = n & q, D = n & (J | it), B = n & Ht, X = L ? r : Oe(t);
          function U() {
            for (var V = arguments.length, tt = b(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = de(U), Vt = Zl(tt, Dt);
            if (s && (tt = Xa(tt, s, o, D)), l && (tt = Qa(tt, l, h, D)), V -= Vt, D && V < S) {
              var wt = Bn(tt, Dt);
              return so(
                t,
                n,
                mr,
                U.placeholder,
                e,
                tt,
                wt,
                g,
                y,
                S - V
              );
            }
            var dn = T ? e : this, kn = L ? dn[t] : t;
            return V = tt.length, g ? tt = eh(tt, g) : B && V > 1 && tt.reverse(), A && y < V && (tt.length = y), this && this !== It && this instanceof U && (kn = X || Oe(kn)), kn.apply(dn, tt);
          }
          return U;
        }
        function ro(t, n) {
          return function(e, s) {
            return fc(e, t, n(s), {});
          };
        }
        function yr(t, n) {
          return function(e, s) {
            var o;
            if (e === r && s === r)
              return n;
            if (e !== r && (o = e), s !== r) {
              if (o === r)
                return s;
              typeof e == "string" || typeof s == "string" ? (e = Yt(e), s = Yt(s)) : (e = qa(e), s = qa(s)), o = t(e, s);
            }
            return o;
          };
        }
        function Ni(t) {
          return Fn(function(n) {
            return n = gt(n, Jt(W())), Q(function(e) {
              var s = this;
              return t(n, function(o) {
                return Zt(o, s, e);
              });
            });
          });
        }
        function wr(t, n) {
          n = n === r ? " " : Yt(n);
          var e = n.length;
          if (e < 2)
            return e ? Fi(n, t) : n;
          var s = Fi(n, ar(t / oe(n)));
          return ae(n) ? Gn(hn(s), 0, t).join("") : s.slice(0, t);
        }
        function Nc(t, n, e, s) {
          var o = n & N, l = Oe(t);
          function h() {
            for (var g = -1, y = arguments.length, S = -1, A = s.length, T = b(A + y), L = this && this !== It && this instanceof h ? l : t; ++S < A; )
              T[S] = s[S];
            for (; y--; )
              T[S++] = arguments[++g];
            return Zt(L, o ? e : this, T);
          }
          return h;
        }
        function io(t) {
          return function(n, e, s) {
            return s && typeof s != "number" && Ot(n, e, s) && (e = s = r), n = Ln(n), e === r ? (e = n, n = 0) : e = Ln(e), s = s === r ? n < e ? 1 : -1 : Ln(s), Cc(n, e, s, t);
          };
        }
        function Mr(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = fn(n), e = fn(e)), t(n, e);
          };
        }
        function so(t, n, e, s, o, l, h, g, y, S) {
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
            S
          ], U = e.apply(r, X);
          return Hi(t) && mo(U, X), U.placeholder = s, yo(U, t, n);
        }
        function Wi(t) {
          var n = xt[t];
          return function(e, s) {
            if (e = fn(e), s = s == null ? 0 : Pt(Y(s), 292), s && ma(e)) {
              var o = (rt(e) + "e").split("e"), l = n(o[0] + "e" + (+o[1] + s));
              return o = (rt(l) + "e").split("e"), +(o[0] + "e" + (+o[1] - s));
            }
            return n(e);
          };
        }
        var Wc = fe && 1 / Xe(new fe([, -0]))[1] == xn ? function(t) {
          return new fe(t);
        } : as;
        function ao(t) {
          return function(n) {
            var e = Ft(n);
            return e == vt ? gi(n) : e == pt ? tf(n) : Kl(n, t(n));
          };
        }
        function Pn(t, n, e, s, o, l, h, g) {
          var y = n & q;
          if (!y && typeof t != "function")
            throw new sn(d);
          var S = s ? s.length : 0;
          if (S || (n &= ~(_t | Wt), s = o = r), h = h === r ? h : St(Y(h), 0), g = g === r ? g : Y(g), S -= o ? o.length : 0, n & Wt) {
            var A = s, T = o;
            s = o = r;
          }
          var L = y ? r : $i(t), D = [
            t,
            n,
            e,
            s,
            o,
            A,
            T,
            l,
            h,
            g
          ];
          if (L && jc(D, L), t = D[0], n = D[1], e = D[2], s = D[3], o = D[4], g = D[9] = D[9] === r ? y ? 0 : t.length : St(D[9] - S, 0), !g && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var B = Oc(t, n, e);
          else n == J || n == it ? B = Dc(t, n, g) : (n == _t || n == (N | _t)) && !o.length ? B = Nc(t, n, e, s) : B = mr.apply(r, D);
          var X = L ? Ua : mo;
          return yo(X(B, D), t, n);
        }
        function oo(t, n, e, s) {
          return t === r || gn(t, le[e]) && !st.call(s, e) ? n : t;
        }
        function uo(t, n, e, s, o, l) {
          return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, uo, l), l.delete(n)), t;
        }
        function Bc(t) {
          return We(t) ? r : t;
        }
        function lo(t, n, e, s, o, l) {
          var h = e & E, g = t.length, y = n.length;
          if (g != y && !(h && y > g))
            return !1;
          var S = l.get(t), A = l.get(n);
          if (S && A)
            return S == n && A == t;
          var T = -1, L = !0, D = e & P ? new Qn() : r;
          for (l.set(t, n), l.set(n, t); ++T < g; ) {
            var B = t[T], X = n[T];
            if (s)
              var U = h ? s(X, B, T, n, t, l) : s(B, X, T, t, n, l);
            if (U !== r) {
              if (U)
                continue;
              L = !1;
              break;
            }
            if (D) {
              if (!ui(n, function(V, tt) {
                if (!xe(D, tt) && (B === V || o(B, V, e, s, l)))
                  return D.push(tt);
              })) {
                L = !1;
                break;
              }
            } else if (!(B === X || o(B, X, e, s, l))) {
              L = !1;
              break;
            }
          }
          return l.delete(t), l.delete(n), L;
        }
        function Uc(t, n, e, s, o, l, h) {
          switch (e) {
            case re:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case be:
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
              var y = s & E;
              if (g || (g = Xe), t.size != n.size && !y)
                return !1;
              var S = h.get(t);
              if (S)
                return S == n;
              s |= P, h.set(t, n);
              var A = lo(g(t), g(n), s, o, l, h);
              return h.delete(t), A;
            case Ge:
              if (Pe)
                return Pe.call(t) == Pe.call(n);
          }
          return !1;
        }
        function $c(t, n, e, s, o, l) {
          var h = e & E, g = Bi(t), y = g.length, S = Bi(n), A = S.length;
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
            if (s)
              var Qt = h ? s(tt, V, L, n, t, l) : s(V, tt, L, t, n, l);
            if (!(Qt === r ? V === tt || o(V, tt, e, s, l) : Qt)) {
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
          return Zi(_o(t, r, So), t + "");
        }
        function Bi(t) {
          return Pa(t, At, zi);
        }
        function Ui(t) {
          return Pa(t, zt, fo);
        }
        var $i = ur ? function(t) {
          return ur.get(t);
        } : as;
        function Cr(t) {
          for (var n = t.name + "", e = ce[n], s = st.call(ce, n) ? e.length : 0; s--; ) {
            var o = e[s], l = o.func;
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
          return t = t === is ? Ra : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function br(t, n) {
          var e = t.__data__;
          return Yc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function qi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var s = n[e], o = t[s];
            n[e] = [s, o, po(o)];
          }
          return n;
        }
        function te(t, n) {
          var e = Ql(t, n);
          return Ea(e) ? e : r;
        }
        function qc(t) {
          var n = st.call(t, Yn), e = t[Yn];
          try {
            t[Yn] = r;
            var s = !0;
          } catch {
          }
          var o = tr.call(t);
          return s && (n ? t[Yn] = e : delete t[Yn]), o;
        }
        var zi = _i ? function(t) {
          return t == null ? [] : (t = at(t), Nn(_i(t), function(n) {
            return _a.call(t, n);
          }));
        } : os, fo = _i ? function(t) {
          for (var n = []; t; )
            Wn(n, zi(t)), t = rr(t);
          return n;
        } : os, Ft = kt;
        (vi && Ft(new vi(new ArrayBuffer(1))) != re || Ae && Ft(new Ae()) != vt || mi && Ft(mi.resolve()) != Ut || fe && Ft(new fe()) != pt || Ie && Ft(new Ie()) != Ce) && (Ft = function(t) {
          var n = kt(t), e = n == Ct ? t.constructor : r, s = e ? ne(e) : "";
          if (s)
            switch (s) {
              case xf:
                return re;
              case Sf:
                return vt;
              case Af:
                return Ut;
              case If:
                return pt;
              case Tf:
                return Ce;
            }
          return n;
        });
        function zc(t, n, e) {
          for (var s = -1, o = e.length; ++s < o; ) {
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
                t = St(t, n - h);
                break;
            }
          }
          return { start: t, end: n };
        }
        function Gc(t) {
          var n = t.match(Yu);
          return n ? n[1].split(Xu) : [];
        }
        function co(t, n, e) {
          n = zn(n, t);
          for (var s = -1, o = n.length, l = !1; ++s < o; ) {
            var h = Cn(n[s]);
            if (!(l = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return l || ++s != o ? l : (o = t == null ? 0 : t.length, !!o && Fr(o) && En(h, o) && (K(t) || ee(t)));
        }
        function Hc(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function ho(t) {
          return typeof t.constructor == "function" && !De(t) ? he(rr(t)) : {};
        }
        function Kc(t, n, e) {
          var s = t.constructor;
          switch (n) {
            case be:
              return Di(t);
            case lt:
            case Mt:
              return new s(+t);
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
              return Ja(t, e);
            case vt:
              return new s();
            case Lt:
            case yn:
              return new s(t);
            case nn:
              return Fc(t);
            case pt:
              return new s();
            case Ge:
              return Ec(t);
          }
        }
        function Zc(t, n) {
          var e = n.length;
          if (!e)
            return t;
          var s = e - 1;
          return n[s] = (e > 1 ? "& " : "") + n[s], n = n.join(e > 2 ? ", " : " "), t.replace(Ju, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Jc(t) {
          return K(t) || ee(t) || !!(va && t && t[va]);
        }
        function En(t, n) {
          var e = typeof t;
          return n = n ?? vn, !!n && (e == "number" || e != "symbol" && sl.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Ot(t, n, e) {
          if (!dt(e))
            return !1;
          var s = typeof n;
          return (s == "number" ? qt(e) && En(n, e.length) : s == "string" && n in e) ? gn(e[n], t) : !1;
        }
        function Gi(t, n) {
          if (K(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Gu.test(t) || !zu.test(t) || n != null && t in at(n);
        }
        function Yc(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Hi(t) {
          var n = Cr(t), e = u[n];
          if (typeof e != "function" || !(n in j.prototype))
            return !1;
          if (t === e)
            return !0;
          var s = $i(e);
          return !!s && t === s[0];
        }
        function Xc(t) {
          return !!pa && pa in t;
        }
        var Qc = Ve ? Rn : us;
        function De(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || le;
          return t === e;
        }
        function po(t) {
          return t === t && !dt(t);
        }
        function go(t, n) {
          return function(e) {
            return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
          };
        }
        function Vc(t) {
          var n = Tr(t, function(s) {
            return e.size === C && e.clear(), s;
          }), e = n.cache;
          return n;
        }
        function jc(t, n) {
          var e = t[1], s = n[1], o = e | s, l = o < (N | q | bt), h = s == bt && e == J || s == bt && e == tn && t[7].length <= n[8] || s == (bt | tn) && n[7].length <= n[8] && e == J;
          if (!(l || h))
            return t;
          s & N && (t[2] = n[2], o |= e & N ? 0 : Z);
          var g = n[3];
          if (g) {
            var y = t[3];
            t[3] = y ? Xa(y, g, n[4]) : g, t[4] = y ? Bn(t[3], I) : n[4];
          }
          return g = n[5], g && (y = t[5], t[5] = y ? Qa(y, g, n[6]) : g, t[6] = y ? Bn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), s & bt && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = o, t;
        }
        function th(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function nh(t) {
          return tr.call(t);
        }
        function _o(t, n, e) {
          return n = St(n === r ? t.length - 1 : n, 0), function() {
            for (var s = arguments, o = -1, l = St(s.length - n, 0), h = b(l); ++o < l; )
              h[o] = s[n + o];
            o = -1;
            for (var g = b(n + 1); ++o < n; )
              g[o] = s[o];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function vo(t, n) {
          return n.length < 2 ? t : jn(t, un(n, 0, -1));
        }
        function eh(t, n) {
          for (var e = t.length, s = Pt(n.length, e), o = $t(t); s--; ) {
            var l = n[s];
            t[s] = En(l, e) ? o[l] : r;
          }
          return t;
        }
        function Ki(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var mo = wo(Ua), Ne = vf || function(t, n) {
          return It.setTimeout(t, n);
        }, Zi = wo(Sc);
        function yo(t, n, e) {
          var s = n + "";
          return Zi(t, Zc(s, rh(Gc(s), e)));
        }
        function wo(t) {
          var n = 0, e = 0;
          return function() {
            var s = Mf(), o = Ur - (s - e);
            if (e = s, o > 0) {
              if (++n >= $e)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function xr(t, n) {
          var e = -1, s = t.length, o = s - 1;
          for (n = n === r ? s : n; ++e < n; ) {
            var l = Pi(e, o), h = t[l];
            t[l] = t[e], t[e] = h;
          }
          return t.length = n, t;
        }
        var Mo = Vc(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Hu, function(e, s, o, l) {
            n.push(o ? l.replace(ju, "$1") : s || e);
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
        function rh(t, n) {
          return rn(ct, function(e) {
            var s = "_." + e[0];
            n & e[1] && !Je(t, s) && t.push(s);
          }), t.sort();
        }
        function Co(t) {
          if (t instanceof j)
            return t.clone();
          var n = new an(t.__wrapped__, t.__chain__);
          return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function ih(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = St(Y(n), 0);
          var s = t == null ? 0 : t.length;
          if (!s || n < 1)
            return [];
          for (var o = 0, l = 0, h = b(ar(s / n)); o < s; )
            h[l++] = un(t, o, o += n);
          return h;
        }
        function sh(t) {
          for (var n = -1, e = t == null ? 0 : t.length, s = 0, o = []; ++n < e; ) {
            var l = t[n];
            l && (o[s++] = l);
          }
          return o;
        }
        function ah() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = b(t - 1), e = arguments[0], s = t; s--; )
            n[s - 1] = arguments[s];
          return Wn(K(e) ? $t(e) : [e], Tt(n, 1));
        }
        var oh = Q(function(t, n) {
          return yt(t) ? Ee(t, Tt(n, 1, yt, !0)) : [];
        }), uh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Ee(t, Tt(n, 1, yt, !0), W(e, 2)) : [];
        }), lh = Q(function(t, n) {
          var e = ln(n);
          return yt(e) && (e = r), yt(t) ? Ee(t, Tt(n, 1, yt, !0), r, e) : [];
        });
        function fh(t, n, e) {
          var s = t == null ? 0 : t.length;
          return s ? (n = e || n === r ? 1 : Y(n), un(t, n < 0 ? 0 : n, s)) : [];
        }
        function ch(t, n, e) {
          var s = t == null ? 0 : t.length;
          return s ? (n = e || n === r ? 1 : Y(n), n = s - n, un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function hh(t, n) {
          return t && t.length ? _r(t, W(n, 3), !0, !0) : [];
        }
        function ph(t, n) {
          return t && t.length ? _r(t, W(n, 3), !0) : [];
        }
        function gh(t, n, e, s) {
          var o = t == null ? 0 : t.length;
          return o ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, s = o), ac(t, n, e, s)) : [];
        }
        function bo(t, n, e) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = St(s + o, 0)), Ye(t, W(n, 3), o);
        }
        function xo(t, n, e) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = s - 1;
          return e !== r && (o = Y(e), o = e < 0 ? St(s + o, 0) : Pt(o, s - 1)), Ye(t, W(n, 3), o, !0);
        }
        function So(t) {
          var n = t == null ? 0 : t.length;
          return n ? Tt(t, 1) : [];
        }
        function dh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Tt(t, xn) : [];
        }
        function _h(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : Y(n), Tt(t, n)) : [];
        }
        function vh(t) {
          for (var n = -1, e = t == null ? 0 : t.length, s = {}; ++n < e; ) {
            var o = t[n];
            s[o[0]] = o[1];
          }
          return s;
        }
        function Ao(t) {
          return t && t.length ? t[0] : r;
        }
        function mh(t, n, e) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = St(s + o, 0)), se(t, n, o);
        }
        function yh(t) {
          var n = t == null ? 0 : t.length;
          return n ? un(t, 0, -1) : [];
        }
        var wh = Q(function(t) {
          var n = gt(t, ki);
          return n.length && n[0] === t[0] ? xi(n) : [];
        }), Mh = Q(function(t) {
          var n = ln(t), e = gt(t, ki);
          return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? xi(e, W(n, 2)) : [];
        }), Ch = Q(function(t) {
          var n = ln(t), e = gt(t, ki);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? xi(e, r, n) : [];
        });
        function bh(t, n) {
          return t == null ? "" : yf.call(t, n);
        }
        function ln(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function xh(t, n, e) {
          var s = t == null ? 0 : t.length;
          if (!s)
            return -1;
          var o = s;
          return e !== r && (o = Y(e), o = o < 0 ? St(s + o, 0) : Pt(o, s - 1)), n === n ? ef(t, n, o) : Ye(t, sa, o, !0);
        }
        function Sh(t, n) {
          return t && t.length ? Da(t, Y(n)) : r;
        }
        var Ah = Q(Io);
        function Io(t, n) {
          return t && t.length && n && n.length ? Ti(t, n) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Ti(t, n, W(e, 2)) : t;
        }
        function Th(t, n, e) {
          return t && t.length && n && n.length ? Ti(t, n, r, e) : t;
        }
        var Ph = Fn(function(t, n) {
          var e = t == null ? 0 : t.length, s = wi(t, n);
          return Ba(t, gt(n, function(o) {
            return En(o, e) ? +o : o;
          }).sort(Ya)), s;
        });
        function Fh(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var s = -1, o = [], l = t.length;
          for (n = W(n, 3); ++s < l; ) {
            var h = t[s];
            n(h, s, t) && (e.push(h), o.push(s));
          }
          return Ba(t, o), e;
        }
        function Ji(t) {
          return t == null ? t : bf.call(t);
        }
        function Eh(t, n, e) {
          var s = t == null ? 0 : t.length;
          return s ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = s) : (n = n == null ? 0 : Y(n), e = e === r ? s : Y(e)), un(t, n, e)) : [];
        }
        function Rh(t, n) {
          return dr(t, n);
        }
        function Lh(t, n, e) {
          return Ei(t, n, W(e, 2));
        }
        function kh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var s = dr(t, n);
            if (s < e && gn(t[s], n))
              return s;
          }
          return -1;
        }
        function Oh(t, n) {
          return dr(t, n, !0);
        }
        function Dh(t, n, e) {
          return Ei(t, n, W(e, 2), !0);
        }
        function Nh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var s = dr(t, n, !0) - 1;
            if (gn(t[s], n))
              return s;
          }
          return -1;
        }
        function Wh(t) {
          return t && t.length ? $a(t) : [];
        }
        function Bh(t, n) {
          return t && t.length ? $a(t, W(n, 2)) : [];
        }
        function Uh(t) {
          var n = t == null ? 0 : t.length;
          return n ? un(t, 1, n) : [];
        }
        function $h(t, n, e) {
          return t && t.length ? (n = e || n === r ? 1 : Y(n), un(t, 0, n < 0 ? 0 : n)) : [];
        }
        function qh(t, n, e) {
          var s = t == null ? 0 : t.length;
          return s ? (n = e || n === r ? 1 : Y(n), n = s - n, un(t, n < 0 ? 0 : n, s)) : [];
        }
        function zh(t, n) {
          return t && t.length ? _r(t, W(n, 3), !1, !0) : [];
        }
        function Gh(t, n) {
          return t && t.length ? _r(t, W(n, 3)) : [];
        }
        var Hh = Q(function(t) {
          return qn(Tt(t, 1, yt, !0));
        }), Kh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), qn(Tt(t, 1, yt, !0), W(n, 2));
        }), Zh = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, qn(Tt(t, 1, yt, !0), r, n);
        });
        function Jh(t) {
          return t && t.length ? qn(t) : [];
        }
        function Yh(t, n) {
          return t && t.length ? qn(t, W(n, 2)) : [];
        }
        function Xh(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? qn(t, r, n) : [];
        }
        function Yi(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = Nn(t, function(e) {
            if (yt(e))
              return n = St(e.length, n), !0;
          }), hi(n, function(e) {
            return gt(t, li(e));
          });
        }
        function To(t, n) {
          if (!(t && t.length))
            return [];
          var e = Yi(t);
          return n == null ? e : gt(e, function(s) {
            return Zt(n, r, s);
          });
        }
        var Qh = Q(function(t, n) {
          return yt(t) ? Ee(t, n) : [];
        }), Vh = Q(function(t) {
          return Li(Nn(t, yt));
        }), jh = Q(function(t) {
          var n = ln(t);
          return yt(n) && (n = r), Li(Nn(t, yt), W(n, 2));
        }), tp = Q(function(t) {
          var n = ln(t);
          return n = typeof n == "function" ? n : r, Li(Nn(t, yt), r, n);
        }), np = Q(Yi);
        function ep(t, n) {
          return Ha(t || [], n || [], Fe);
        }
        function rp(t, n) {
          return Ha(t || [], n || [], ke);
        }
        var ip = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, To(t, e);
        });
        function Po(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function sp(t, n) {
          return n(t), t;
        }
        function Sr(t, n) {
          return n(t);
        }
        var ap = Fn(function(t) {
          var n = t.length, e = n ? t[0] : 0, s = this.__wrapped__, o = function(l) {
            return wi(l, t);
          };
          return n > 1 || this.__actions__.length || !(s instanceof j) || !En(e) ? this.thru(o) : (s = s.slice(e, +e + (n ? 1 : 0)), s.__actions__.push({
            func: Sr,
            args: [o],
            thisArg: r
          }), new an(s, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(r), l;
          }));
        });
        function op() {
          return Po(this);
        }
        function up() {
          return new an(this.value(), this.__chain__);
        }
        function lp() {
          this.__values__ === r && (this.__values__ = zo(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function fp() {
          return this;
        }
        function cp(t) {
          for (var n, e = this; e instanceof fr; ) {
            var s = Co(e);
            s.__index__ = 0, s.__values__ = r, n ? o.__wrapped__ = s : n = s;
            var o = s;
            e = e.__wrapped__;
          }
          return o.__wrapped__ = t, n;
        }
        function hp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: Sr,
              args: [Ji],
              thisArg: r
            }), new an(n, this.__chain__);
          }
          return this.thru(Ji);
        }
        function pp() {
          return Ga(this.__wrapped__, this.__actions__);
        }
        var gp = vr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : Tn(t, e, 1);
        });
        function dp(t, n, e) {
          var s = K(t) ? ra : sc;
          return e && Ot(t, n, e) && (n = r), s(t, W(n, 3));
        }
        function _p(t, n) {
          var e = K(t) ? Nn : Ia;
          return e(t, W(n, 3));
        }
        var vp = no(bo), mp = no(xo);
        function yp(t, n) {
          return Tt(Ar(t, n), 1);
        }
        function wp(t, n) {
          return Tt(Ar(t, n), xn);
        }
        function Mp(t, n, e) {
          return e = e === r ? 1 : Y(e), Tt(Ar(t, n), e);
        }
        function Fo(t, n) {
          var e = K(t) ? rn : $n;
          return e(t, W(n, 3));
        }
        function Eo(t, n) {
          var e = K(t) ? Bl : Aa;
          return e(t, W(n, 3));
        }
        var Cp = vr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : Tn(t, e, [n]);
        });
        function bp(t, n, e, s) {
          t = qt(t) ? t : ve(t), e = e && !s ? Y(e) : 0;
          var o = t.length;
          return e < 0 && (e = St(o + e, 0)), Er(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && se(t, n, e) > -1;
        }
        var xp = Q(function(t, n, e) {
          var s = -1, o = typeof n == "function", l = qt(t) ? b(t.length) : [];
          return $n(t, function(h) {
            l[++s] = o ? Zt(n, h, e) : Re(h, n, e);
          }), l;
        }), Sp = vr(function(t, n, e) {
          Tn(t, e, n);
        });
        function Ar(t, n) {
          var e = K(t) ? gt : La;
          return e(t, W(n, 3));
        }
        function Ap(t, n, e, s) {
          return t == null ? [] : (K(n) || (n = n == null ? [] : [n]), e = s ? r : e, K(e) || (e = e == null ? [] : [e]), Na(t, n, e));
        }
        var Ip = vr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Tp(t, n, e) {
          var s = K(t) ? oi : oa, o = arguments.length < 3;
          return s(t, W(n, 4), e, o, $n);
        }
        function Pp(t, n, e) {
          var s = K(t) ? Ul : oa, o = arguments.length < 3;
          return s(t, W(n, 4), e, o, Aa);
        }
        function Fp(t, n) {
          var e = K(t) ? Nn : Ia;
          return e(t, Pr(W(n, 3)));
        }
        function Ep(t) {
          var n = K(t) ? Ca : bc;
          return n(t);
        }
        function Rp(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var s = K(t) ? tc : xc;
          return s(t, n);
        }
        function Lp(t) {
          var n = K(t) ? nc : Ac;
          return n(t);
        }
        function kp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Er(t) ? oe(t) : t.length;
          var n = Ft(t);
          return n == vt || n == pt ? t.size : Ai(t).length;
        }
        function Op(t, n, e) {
          var s = K(t) ? ui : Ic;
          return e && Ot(t, n, e) && (n = r), s(t, W(n, 3));
        }
        var Dp = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Na(t, Tt(n, 1), []);
        }), Ir = _f || function() {
          return It.Date.now();
        };
        function Np(t, n) {
          if (typeof n != "function")
            throw new sn(d);
          return t = Y(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function Ro(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, bt, r, r, r, r, n);
        }
        function Lo(t, n) {
          var e;
          if (typeof n != "function")
            throw new sn(d);
          return t = Y(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var Xi = Q(function(t, n, e) {
          var s = N;
          if (e.length) {
            var o = Bn(e, de(Xi));
            s |= _t;
          }
          return Pn(t, s, n, e, o);
        }), ko = Q(function(t, n, e) {
          var s = N | q;
          if (e.length) {
            var o = Bn(e, de(ko));
            s |= _t;
          }
          return Pn(n, s, t, e, o);
        });
        function Oo(t, n, e) {
          n = e ? r : n;
          var s = Pn(t, J, r, r, r, r, r, n);
          return s.placeholder = Oo.placeholder, s;
        }
        function Do(t, n, e) {
          n = e ? r : n;
          var s = Pn(t, it, r, r, r, r, r, n);
          return s.placeholder = Do.placeholder, s;
        }
        function No(t, n, e) {
          var s, o, l, h, g, y, S = 0, A = !1, T = !1, L = !0;
          if (typeof t != "function")
            throw new sn(d);
          n = fn(n) || 0, dt(e) && (A = !!e.leading, T = "maxWait" in e, l = T ? St(fn(e.maxWait) || 0, n) : l, L = "trailing" in e ? !!e.trailing : L);
          function D(wt) {
            var dn = s, kn = o;
            return s = o = r, S = wt, h = t.apply(kn, dn), h;
          }
          function B(wt) {
            return S = wt, g = Ne(V, n), A ? D(wt) : h;
          }
          function X(wt) {
            var dn = wt - y, kn = wt - S, eu = n - dn;
            return T ? Pt(eu, l - kn) : eu;
          }
          function U(wt) {
            var dn = wt - y, kn = wt - S;
            return y === r || dn >= n || dn < 0 || T && kn >= l;
          }
          function V() {
            var wt = Ir();
            if (U(wt))
              return tt(wt);
            g = Ne(V, X(wt));
          }
          function tt(wt) {
            return g = r, L && s ? D(wt) : (s = o = r, h);
          }
          function Qt() {
            g !== r && Ka(g), S = 0, s = y = o = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Ir());
          }
          function Vt() {
            var wt = Ir(), dn = U(wt);
            if (s = arguments, o = this, y = wt, dn) {
              if (g === r)
                return B(y);
              if (T)
                return Ka(g), g = Ne(V, n), D(y);
            }
            return g === r && (g = Ne(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Wp = Q(function(t, n) {
          return Sa(t, 1, n);
        }), Bp = Q(function(t, n, e) {
          return Sa(t, fn(n) || 0, e);
        });
        function Up(t) {
          return Pn(t, Ht);
        }
        function Tr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new sn(d);
          var e = function() {
            var s = arguments, o = n ? n.apply(this, s) : s[0], l = e.cache;
            if (l.has(o))
              return l.get(o);
            var h = t.apply(this, s);
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
        function $p(t) {
          return Lo(2, t);
        }
        var qp = Tc(function(t, n) {
          n = n.length == 1 && K(n[0]) ? gt(n[0], Jt(W())) : gt(Tt(n, 1), Jt(W()));
          var e = n.length;
          return Q(function(s) {
            for (var o = -1, l = Pt(s.length, e); ++o < l; )
              s[o] = n[o].call(this, s[o]);
            return Zt(t, this, s);
          });
        }), Qi = Q(function(t, n) {
          var e = Bn(n, de(Qi));
          return Pn(t, _t, r, n, e);
        }), Wo = Q(function(t, n) {
          var e = Bn(n, de(Wo));
          return Pn(t, Wt, r, n, e);
        }), zp = Fn(function(t, n) {
          return Pn(t, tn, r, r, r, n);
        });
        function Gp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n === r ? n : Y(n), Q(t, n);
        }
        function Hp(t, n) {
          if (typeof t != "function")
            throw new sn(d);
          return n = n == null ? 0 : St(Y(n), 0), Q(function(e) {
            var s = e[n], o = Gn(e, 0, n);
            return s && Wn(o, s), Zt(t, this, o);
          });
        }
        function Kp(t, n, e) {
          var s = !0, o = !0;
          if (typeof t != "function")
            throw new sn(d);
          return dt(e) && (s = "leading" in e ? !!e.leading : s, o = "trailing" in e ? !!e.trailing : o), No(t, n, {
            leading: s,
            maxWait: n,
            trailing: o
          });
        }
        function Zp(t) {
          return Ro(t, 1);
        }
        function Jp(t, n) {
          return Qi(Oi(n), t);
        }
        function Yp() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return K(t) ? t : [t];
        }
        function Xp(t) {
          return on(t, R);
        }
        function Qp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, R, n);
        }
        function Vp(t) {
          return on(t, v | R);
        }
        function jp(t, n) {
          return n = typeof n == "function" ? n : r, on(t, v | R, n);
        }
        function tg(t, n) {
          return n == null || xa(t, n, At(n));
        }
        function gn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var ng = Mr(bi), eg = Mr(function(t, n) {
          return t >= n;
        }), ee = Fa(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Fa : function(t) {
          return mt(t) && st.call(t, "callee") && !_a.call(t, "callee");
        }, K = b.isArray, rg = Qs ? Jt(Qs) : cc;
        function qt(t) {
          return t != null && Fr(t.length) && !Rn(t);
        }
        function yt(t) {
          return mt(t) && qt(t);
        }
        function ig(t) {
          return t === !0 || t === !1 || mt(t) && kt(t) == lt;
        }
        var Hn = mf || us, sg = Vs ? Jt(Vs) : hc;
        function ag(t) {
          return mt(t) && t.nodeType === 1 && !We(t);
        }
        function og(t) {
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
        function ug(t, n) {
          return Le(t, n);
        }
        function lg(t, n, e) {
          e = typeof e == "function" ? e : r;
          var s = e ? e(t, n) : r;
          return s === r ? Le(t, n, r, e) : !!s;
        }
        function Vi(t) {
          if (!mt(t))
            return !1;
          var n = kt(t);
          return n == Rt || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
        }
        function fg(t) {
          return typeof t == "number" && ma(t);
        }
        function Rn(t) {
          if (!dt(t))
            return !1;
          var n = kt(t);
          return n == Bt || n == mn || n == ot || n == cn;
        }
        function Bo(t) {
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
        var Uo = js ? Jt(js) : gc;
        function cg(t, n) {
          return t === n || Si(t, n, qi(n));
        }
        function hg(t, n, e) {
          return e = typeof e == "function" ? e : r, Si(t, n, qi(n), e);
        }
        function pg(t) {
          return $o(t) && t != +t;
        }
        function gg(t) {
          if (Qc(t))
            throw new H(p);
          return Ea(t);
        }
        function dg(t) {
          return t === null;
        }
        function _g(t) {
          return t == null;
        }
        function $o(t) {
          return typeof t == "number" || mt(t) && kt(t) == Lt;
        }
        function We(t) {
          if (!mt(t) || kt(t) != Ct)
            return !1;
          var n = rr(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && je.call(e) == hf;
        }
        var ji = ta ? Jt(ta) : dc;
        function vg(t) {
          return Bo(t) && t >= -vn && t <= vn;
        }
        var qo = na ? Jt(na) : _c;
        function Er(t) {
          return typeof t == "string" || !K(t) && mt(t) && kt(t) == yn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && kt(t) == Ge;
        }
        var _e = ea ? Jt(ea) : vc;
        function mg(t) {
          return t === r;
        }
        function yg(t) {
          return mt(t) && Ft(t) == Ce;
        }
        function wg(t) {
          return mt(t) && kt(t) == Ou;
        }
        var Mg = Mr(Ii), Cg = Mr(function(t, n) {
          return t <= n;
        });
        function zo(t) {
          if (!t)
            return [];
          if (qt(t))
            return Er(t) ? hn(t) : $t(t);
          if (Se && t[Se])
            return jl(t[Se]());
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
        function Go(t) {
          return t ? Vn(Y(t), 0, k) : 0;
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
          t = ua(t);
          var e = el.test(t);
          return e || il.test(t) ? Dl(t.slice(2), e ? 2 : 8) : nl.test(t) ? Sn : +t;
        }
        function Ho(t) {
          return Mn(t, zt(t));
        }
        function bg(t) {
          return t ? Vn(Y(t), -vn, vn) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var xg = pe(function(t, n) {
          if (De(n) || qt(n)) {
            Mn(n, At(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Fe(t, e, n[e]);
        }), Ko = pe(function(t, n) {
          Mn(n, zt(n), t);
        }), Rr = pe(function(t, n, e, s) {
          Mn(n, zt(n), t, s);
        }), Sg = pe(function(t, n, e, s) {
          Mn(n, At(n), t, s);
        }), Ag = Fn(wi);
        function Ig(t, n) {
          var e = he(t);
          return n == null ? e : ba(e, n);
        }
        var Tg = Q(function(t, n) {
          t = at(t);
          var e = -1, s = n.length, o = s > 2 ? n[2] : r;
          for (o && Ot(n[0], n[1], o) && (s = 1); ++e < s; )
            for (var l = n[e], h = zt(l), g = -1, y = h.length; ++g < y; ) {
              var S = h[g], A = t[S];
              (A === r || gn(A, le[S]) && !st.call(t, S)) && (t[S] = l[S]);
            }
          return t;
        }), Pg = Q(function(t) {
          return t.push(r, uo), Zt(Zo, r, t);
        });
        function Fg(t, n) {
          return ia(t, W(n, 3), wn);
        }
        function Eg(t, n) {
          return ia(t, W(n, 3), Ci);
        }
        function Rg(t, n) {
          return t == null ? t : Mi(t, W(n, 3), zt);
        }
        function Lg(t, n) {
          return t == null ? t : Ta(t, W(n, 3), zt);
        }
        function kg(t, n) {
          return t && wn(t, W(n, 3));
        }
        function Og(t, n) {
          return t && Ci(t, W(n, 3));
        }
        function Dg(t) {
          return t == null ? [] : pr(t, At(t));
        }
        function Ng(t) {
          return t == null ? [] : pr(t, zt(t));
        }
        function ts(t, n, e) {
          var s = t == null ? r : jn(t, n);
          return s === r ? e : s;
        }
        function Wg(t, n) {
          return t != null && co(t, n, oc);
        }
        function ns(t, n) {
          return t != null && co(t, n, uc);
        }
        var Bg = ro(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
        }, rs(Gt)), Ug = ro(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, W), $g = Q(Re);
        function At(t) {
          return qt(t) ? Ma(t) : Ai(t);
        }
        function zt(t) {
          return qt(t) ? Ma(t, !0) : mc(t);
        }
        function qg(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(s, o, l) {
            Tn(e, n(s, o, l), s);
          }), e;
        }
        function zg(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(s, o, l) {
            Tn(e, o, n(s, o, l));
          }), e;
        }
        var Gg = pe(function(t, n, e) {
          gr(t, n, e);
        }), Zo = pe(function(t, n, e, s) {
          gr(t, n, e, s);
        }), Hg = Fn(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var s = !1;
          n = gt(n, function(l) {
            return l = zn(l, t), s || (s = l.length > 1), l;
          }), Mn(t, Ui(t), e), s && (e = on(e, v | F | R, Bc));
          for (var o = n.length; o--; )
            Ri(e, n[o]);
          return e;
        });
        function Kg(t, n) {
          return Jo(t, Pr(W(n)));
        }
        var Zg = Fn(function(t, n) {
          return t == null ? {} : wc(t, n);
        });
        function Jo(t, n) {
          if (t == null)
            return {};
          var e = gt(Ui(t), function(s) {
            return [s];
          });
          return n = W(n), Wa(t, e, function(s, o) {
            return n(s, o[0]);
          });
        }
        function Jg(t, n, e) {
          n = zn(n, t);
          var s = -1, o = n.length;
          for (o || (o = 1, t = r); ++s < o; ) {
            var l = t == null ? r : t[Cn(n[s])];
            l === r && (s = o, l = e), t = Rn(l) ? l.call(t) : l;
          }
          return t;
        }
        function Yg(t, n, e) {
          return t == null ? t : ke(t, n, e);
        }
        function Xg(t, n, e, s) {
          return s = typeof s == "function" ? s : r, t == null ? t : ke(t, n, e, s);
        }
        var Yo = ao(At), Xo = ao(zt);
        function Qg(t, n, e) {
          var s = K(t), o = s || Hn(t) || _e(t);
          if (n = W(n, 4), e == null) {
            var l = t && t.constructor;
            o ? e = s ? new l() : [] : dt(t) ? e = Rn(l) ? he(rr(t)) : {} : e = {};
          }
          return (o ? rn : wn)(t, function(h, g, y) {
            return n(e, h, g, y);
          }), e;
        }
        function Vg(t, n) {
          return t == null ? !0 : Ri(t, n);
        }
        function jg(t, n, e) {
          return t == null ? t : za(t, n, Oi(e));
        }
        function td(t, n, e, s) {
          return s = typeof s == "function" ? s : r, t == null ? t : za(t, n, Oi(e), s);
        }
        function ve(t) {
          return t == null ? [] : pi(t, At(t));
        }
        function nd(t) {
          return t == null ? [] : pi(t, zt(t));
        }
        function ed(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Vn(fn(t), n, e);
        }
        function rd(t, n, e) {
          return n = Ln(n), e === r ? (e = n, n = 0) : e = Ln(e), t = fn(t), lc(t, n, e);
        }
        function id(t, n, e) {
          if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Ln(t), n === r ? (n = t, t = 0) : n = Ln(n)), t > n) {
            var s = t;
            t = n, n = s;
          }
          if (e || t % 1 || n % 1) {
            var o = ya();
            return Pt(t + o * (n - t + Ol("1e-" + ((o + "").length - 1))), n);
          }
          return Pi(t, n);
        }
        var sd = ge(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? Qo(n) : n);
        });
        function Qo(t) {
          return es(rt(t).toLowerCase());
        }
        function Vo(t) {
          return t = rt(t), t && t.replace(al, Jl).replace(Sl, "");
        }
        function ad(t, n, e) {
          t = rt(t), n = Yt(n);
          var s = t.length;
          e = e === r ? s : Vn(Y(e), 0, s);
          var o = e;
          return e -= n.length, e >= 0 && t.slice(e, o) == n;
        }
        function od(t) {
          return t = rt(t), t && Uu.test(t) ? t.replace(Ts, Yl) : t;
        }
        function ud(t) {
          return t = rt(t), t && Ku.test(t) ? t.replace(Qr, "\\$&") : t;
        }
        var ld = ge(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), fd = ge(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), cd = to("toLowerCase");
        function hd(t, n, e) {
          t = rt(t), n = Y(n);
          var s = n ? oe(t) : 0;
          if (!n || s >= n)
            return t;
          var o = (n - s) / 2;
          return wr(or(o), e) + t + wr(ar(o), e);
        }
        function pd(t, n, e) {
          t = rt(t), n = Y(n);
          var s = n ? oe(t) : 0;
          return n && s < n ? t + wr(n - s, e) : t;
        }
        function gd(t, n, e) {
          t = rt(t), n = Y(n);
          var s = n ? oe(t) : 0;
          return n && s < n ? wr(n - s, e) + t : t;
        }
        function dd(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), Cf(rt(t).replace(Vr, ""), n || 0);
        }
        function _d(t, n, e) {
          return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n), Fi(rt(t), n);
        }
        function vd() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var md = ge(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function yd(t, n, e) {
          return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? Gn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var wd = ge(function(t, n, e) {
          return t + (e ? " " : "") + es(n);
        });
        function Md(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Vn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Cd(t, n, e) {
          var s = u.templateSettings;
          e && Ot(t, n, e) && (n = r), t = rt(t), n = Rr({}, n, s, oo);
          var o = Rr({}, n.imports, s.imports, oo), l = At(o), h = pi(o, l), g, y, S = 0, A = n.interpolate || He, T = "__p += '", L = di(
            (n.escape || He).source + "|" + A.source + "|" + (A === Ps ? tl : He).source + "|" + (n.evaluate || He).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Fl + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), T += t.slice(S, Vt).replace(ol, Xl), V && (g = !0, T += `' +
__e(` + V + `) +
'`), Dt && (y = !0, T += `';
` + Dt + `;
__p += '`), tt && (T += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), S = Vt + U.length, U;
          }), T += `';
`;
          var B = st.call(n, "variable") && n.variable;
          if (!B)
            T = `with (obj) {
` + T + `
}
`;
          else if (Vu.test(B))
            throw new H(m);
          T = (y ? T.replace(Du, "") : T).replace(Nu, "$1").replace(Wu, "$1;"), T = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
          var X = tu(function() {
            return et(l, D + "return " + T).apply(r, h);
          });
          if (X.source = T, Vi(X))
            throw X;
          return X;
        }
        function bd(t) {
          return rt(t).toLowerCase();
        }
        function xd(t) {
          return rt(t).toUpperCase();
        }
        function Sd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return ua(t);
          if (!t || !(n = Yt(n)))
            return t;
          var s = hn(t), o = hn(n), l = la(s, o), h = fa(s, o) + 1;
          return Gn(s, l, h).join("");
        }
        function Ad(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, ha(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var s = hn(t), o = fa(s, hn(n)) + 1;
          return Gn(s, 0, o).join("");
        }
        function Id(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(Vr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var s = hn(t), o = la(s, hn(n));
          return Gn(s, o).join("");
        }
        function Td(t, n) {
          var e = Et, s = we;
          if (dt(n)) {
            var o = "separator" in n ? n.separator : o;
            e = "length" in n ? Y(n.length) : e, s = "omission" in n ? Yt(n.omission) : s;
          }
          t = rt(t);
          var l = t.length;
          if (ae(t)) {
            var h = hn(t);
            l = h.length;
          }
          if (e >= l)
            return t;
          var g = e - oe(s);
          if (g < 1)
            return s;
          var y = h ? Gn(h, 0, g).join("") : t.slice(0, g);
          if (o === r)
            return y + s;
          if (h && (g += y.length - g), ji(o)) {
            if (t.slice(g).search(o)) {
              var S, A = y;
              for (o.global || (o = di(o.source, rt(Fs.exec(o)) + "g")), o.lastIndex = 0; S = o.exec(A); )
                var T = S.index;
              y = y.slice(0, T === r ? g : T);
            }
          } else if (t.indexOf(Yt(o), g) != g) {
            var L = y.lastIndexOf(o);
            L > -1 && (y = y.slice(0, L));
          }
          return y + s;
        }
        function Pd(t) {
          return t = rt(t), t && Bu.test(t) ? t.replace(Is, rf) : t;
        }
        var Fd = ge(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), es = to("toUpperCase");
        function jo(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? Vl(t) ? of(t) : zl(t) : t.match(n) || [];
        }
        var tu = Q(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return Vi(e) ? e : new H(e);
          }
        }), Ed = Fn(function(t, n) {
          return rn(n, function(e) {
            e = Cn(e), Tn(t, e, Xi(t[e], t));
          }), t;
        });
        function Rd(t) {
          var n = t == null ? 0 : t.length, e = W();
          return t = n ? gt(t, function(s) {
            if (typeof s[1] != "function")
              throw new sn(d);
            return [e(s[0]), s[1]];
          }) : [], Q(function(s) {
            for (var o = -1; ++o < n; ) {
              var l = t[o];
              if (Zt(l[0], this, s))
                return Zt(l[1], this, s);
            }
          });
        }
        function Ld(t) {
          return ic(on(t, v));
        }
        function rs(t) {
          return function() {
            return t;
          };
        }
        function kd(t, n) {
          return t == null || t !== t ? n : t;
        }
        var Od = eo(), Dd = eo(!0);
        function Gt(t) {
          return t;
        }
        function is(t) {
          return Ra(typeof t == "function" ? t : on(t, v));
        }
        function Nd(t) {
          return ka(on(t, v));
        }
        function Wd(t, n) {
          return Oa(t, on(n, v));
        }
        var Bd = Q(function(t, n) {
          return function(e) {
            return Re(e, t, n);
          };
        }), Ud = Q(function(t, n) {
          return function(e) {
            return Re(t, e, n);
          };
        });
        function ss(t, n, e) {
          var s = At(n), o = pr(n, s);
          e == null && !(dt(n) && (o.length || !s.length)) && (e = n, n = t, t = this, o = pr(n, At(n)));
          var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
          return rn(o, function(g) {
            var y = n[g];
            t[g] = y, h && (t.prototype[g] = function() {
              var S = this.__chain__;
              if (l || S) {
                var A = t(this.__wrapped__), T = A.__actions__ = $t(this.__actions__);
                return T.push({ func: y, args: arguments, thisArg: t }), A.__chain__ = S, A;
              }
              return y.apply(t, Wn([this.value()], arguments));
            });
          }), t;
        }
        function $d() {
          return It._ === this && (It._ = pf), this;
        }
        function as() {
        }
        function qd(t) {
          return t = Y(t), Q(function(n) {
            return Da(n, t);
          });
        }
        var zd = Ni(gt), Gd = Ni(ra), Hd = Ni(ui);
        function nu(t) {
          return Gi(t) ? li(Cn(t)) : Mc(t);
        }
        function Kd(t) {
          return function(n) {
            return t == null ? r : jn(t, n);
          };
        }
        var Zd = io(), Jd = io(!0);
        function os() {
          return [];
        }
        function us() {
          return !1;
        }
        function Yd() {
          return {};
        }
        function Xd() {
          return "";
        }
        function Qd() {
          return !0;
        }
        function Vd(t, n) {
          if (t = Y(t), t < 1 || t > vn)
            return [];
          var e = k, s = Pt(t, k);
          n = W(n), t -= k;
          for (var o = hi(s, n); ++e < t; )
            n(e);
          return o;
        }
        function jd(t) {
          return K(t) ? gt(t, Cn) : Xt(t) ? [t] : $t(Mo(rt(t)));
        }
        function t0(t) {
          var n = ++cf;
          return rt(t) + n;
        }
        var n0 = yr(function(t, n) {
          return t + n;
        }, 0), e0 = Wi("ceil"), r0 = yr(function(t, n) {
          return t / n;
        }, 1), i0 = Wi("floor");
        function s0(t) {
          return t && t.length ? hr(t, Gt, bi) : r;
        }
        function a0(t, n) {
          return t && t.length ? hr(t, W(n, 2), bi) : r;
        }
        function o0(t) {
          return aa(t, Gt);
        }
        function u0(t, n) {
          return aa(t, W(n, 2));
        }
        function l0(t) {
          return t && t.length ? hr(t, Gt, Ii) : r;
        }
        function f0(t, n) {
          return t && t.length ? hr(t, W(n, 2), Ii) : r;
        }
        var c0 = yr(function(t, n) {
          return t * n;
        }, 1), h0 = Wi("round"), p0 = yr(function(t, n) {
          return t - n;
        }, 0);
        function g0(t) {
          return t && t.length ? ci(t, Gt) : 0;
        }
        function d0(t, n) {
          return t && t.length ? ci(t, W(n, 2)) : 0;
        }
        return u.after = Np, u.ary = Ro, u.assign = xg, u.assignIn = Ko, u.assignInWith = Rr, u.assignWith = Sg, u.at = Ag, u.before = Lo, u.bind = Xi, u.bindAll = Ed, u.bindKey = ko, u.castArray = Yp, u.chain = Po, u.chunk = ih, u.compact = sh, u.concat = ah, u.cond = Rd, u.conforms = Ld, u.constant = rs, u.countBy = gp, u.create = Ig, u.curry = Oo, u.curryRight = Do, u.debounce = No, u.defaults = Tg, u.defaultsDeep = Pg, u.defer = Wp, u.delay = Bp, u.difference = oh, u.differenceBy = uh, u.differenceWith = lh, u.drop = fh, u.dropRight = ch, u.dropRightWhile = hh, u.dropWhile = ph, u.fill = gh, u.filter = _p, u.flatMap = yp, u.flatMapDeep = wp, u.flatMapDepth = Mp, u.flatten = So, u.flattenDeep = dh, u.flattenDepth = _h, u.flip = Up, u.flow = Od, u.flowRight = Dd, u.fromPairs = vh, u.functions = Dg, u.functionsIn = Ng, u.groupBy = Cp, u.initial = yh, u.intersection = wh, u.intersectionBy = Mh, u.intersectionWith = Ch, u.invert = Bg, u.invertBy = Ug, u.invokeMap = xp, u.iteratee = is, u.keyBy = Sp, u.keys = At, u.keysIn = zt, u.map = Ar, u.mapKeys = qg, u.mapValues = zg, u.matches = Nd, u.matchesProperty = Wd, u.memoize = Tr, u.merge = Gg, u.mergeWith = Zo, u.method = Bd, u.methodOf = Ud, u.mixin = ss, u.negate = Pr, u.nthArg = qd, u.omit = Hg, u.omitBy = Kg, u.once = $p, u.orderBy = Ap, u.over = zd, u.overArgs = qp, u.overEvery = Gd, u.overSome = Hd, u.partial = Qi, u.partialRight = Wo, u.partition = Ip, u.pick = Zg, u.pickBy = Jo, u.property = nu, u.propertyOf = Kd, u.pull = Ah, u.pullAll = Io, u.pullAllBy = Ih, u.pullAllWith = Th, u.pullAt = Ph, u.range = Zd, u.rangeRight = Jd, u.rearg = zp, u.reject = Fp, u.remove = Fh, u.rest = Gp, u.reverse = Ji, u.sampleSize = Rp, u.set = Yg, u.setWith = Xg, u.shuffle = Lp, u.slice = Eh, u.sortBy = Dp, u.sortedUniq = Wh, u.sortedUniqBy = Bh, u.split = yd, u.spread = Hp, u.tail = Uh, u.take = $h, u.takeRight = qh, u.takeRightWhile = zh, u.takeWhile = Gh, u.tap = sp, u.throttle = Kp, u.thru = Sr, u.toArray = zo, u.toPairs = Yo, u.toPairsIn = Xo, u.toPath = jd, u.toPlainObject = Ho, u.transform = Qg, u.unary = Zp, u.union = Hh, u.unionBy = Kh, u.unionWith = Zh, u.uniq = Jh, u.uniqBy = Yh, u.uniqWith = Xh, u.unset = Vg, u.unzip = Yi, u.unzipWith = To, u.update = jg, u.updateWith = td, u.values = ve, u.valuesIn = nd, u.without = Qh, u.words = jo, u.wrap = Jp, u.xor = Vh, u.xorBy = jh, u.xorWith = tp, u.zip = np, u.zipObject = ep, u.zipObjectDeep = rp, u.zipWith = ip, u.entries = Yo, u.entriesIn = Xo, u.extend = Ko, u.extendWith = Rr, ss(u, u), u.add = n0, u.attempt = tu, u.camelCase = sd, u.capitalize = Qo, u.ceil = e0, u.clamp = ed, u.clone = Xp, u.cloneDeep = Vp, u.cloneDeepWith = jp, u.cloneWith = Qp, u.conformsTo = tg, u.deburr = Vo, u.defaultTo = kd, u.divide = r0, u.endsWith = ad, u.eq = gn, u.escape = od, u.escapeRegExp = ud, u.every = dp, u.find = vp, u.findIndex = bo, u.findKey = Fg, u.findLast = mp, u.findLastIndex = xo, u.findLastKey = Eg, u.floor = i0, u.forEach = Fo, u.forEachRight = Eo, u.forIn = Rg, u.forInRight = Lg, u.forOwn = kg, u.forOwnRight = Og, u.get = ts, u.gt = ng, u.gte = eg, u.has = Wg, u.hasIn = ns, u.head = Ao, u.identity = Gt, u.includes = bp, u.indexOf = mh, u.inRange = rd, u.invoke = $g, u.isArguments = ee, u.isArray = K, u.isArrayBuffer = rg, u.isArrayLike = qt, u.isArrayLikeObject = yt, u.isBoolean = ig, u.isBuffer = Hn, u.isDate = sg, u.isElement = ag, u.isEmpty = og, u.isEqual = ug, u.isEqualWith = lg, u.isError = Vi, u.isFinite = fg, u.isFunction = Rn, u.isInteger = Bo, u.isLength = Fr, u.isMap = Uo, u.isMatch = cg, u.isMatchWith = hg, u.isNaN = pg, u.isNative = gg, u.isNil = _g, u.isNull = dg, u.isNumber = $o, u.isObject = dt, u.isObjectLike = mt, u.isPlainObject = We, u.isRegExp = ji, u.isSafeInteger = vg, u.isSet = qo, u.isString = Er, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = mg, u.isWeakMap = yg, u.isWeakSet = wg, u.join = bh, u.kebabCase = ld, u.last = ln, u.lastIndexOf = xh, u.lowerCase = fd, u.lowerFirst = cd, u.lt = Mg, u.lte = Cg, u.max = s0, u.maxBy = a0, u.mean = o0, u.meanBy = u0, u.min = l0, u.minBy = f0, u.stubArray = os, u.stubFalse = us, u.stubObject = Yd, u.stubString = Xd, u.stubTrue = Qd, u.multiply = c0, u.nth = Sh, u.noConflict = $d, u.noop = as, u.now = Ir, u.pad = hd, u.padEnd = pd, u.padStart = gd, u.parseInt = dd, u.random = id, u.reduce = Tp, u.reduceRight = Pp, u.repeat = _d, u.replace = vd, u.result = Jg, u.round = h0, u.runInContext = _, u.sample = Ep, u.size = kp, u.snakeCase = md, u.some = Op, u.sortedIndex = Rh, u.sortedIndexBy = Lh, u.sortedIndexOf = kh, u.sortedLastIndex = Oh, u.sortedLastIndexBy = Dh, u.sortedLastIndexOf = Nh, u.startCase = wd, u.startsWith = Md, u.subtract = p0, u.sum = g0, u.sumBy = d0, u.template = Cd, u.times = Vd, u.toFinite = Ln, u.toInteger = Y, u.toLength = Go, u.toLower = bd, u.toNumber = fn, u.toSafeInteger = bg, u.toString = rt, u.toUpper = xd, u.trim = Sd, u.trimEnd = Ad, u.trimStart = Id, u.truncate = Td, u.unescape = Pd, u.uniqueId = t0, u.upperCase = Fd, u.upperFirst = es, u.each = Fo, u.eachRight = Eo, u.first = Ao, ss(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = a, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), rn(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : St(Y(e), 0);
            var s = this.__filtered__ && !n ? new j(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = Pt(e, s.__takeCount__) : s.__views__.push({
              size: Pt(e, k),
              type: t + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, j.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse();
          };
        }), rn(["filter", "map", "takeWhile"], function(t, n) {
          var e = n + 1, s = e == Me || e == $r;
          j.prototype[t] = function(o) {
            var l = this.clone();
            return l.__iteratees__.push({
              iteratee: W(o, 3),
              type: e
            }), l.__filtered__ = l.__filtered__ || s, l;
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
          return this.take(k);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), o = u[s ? "take" + (n == "last" ? "Right" : "") : n], l = s || /^find/.test(n);
          o && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = s ? [1] : arguments, y = h instanceof j, S = g[0], A = y || K(h), T = function(V) {
              var tt = o.apply(u, Wn([V], g));
              return s && L ? tt[0] : tt;
            };
            A && e && typeof S == "function" && S.length != 1 && (y = A = !1);
            var L = this.__chain__, D = !!this.__actions__.length, B = l && !L, X = y && !D;
            if (!l && A) {
              h = X ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: Sr, args: [T], thisArg: r }), new an(U, L);
            }
            return B && X ? t.apply(this, g) : (U = this.thru(T), B ? s ? U.value()[0] : U.value() : U);
          });
        }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = Qe[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var o = arguments;
            if (s && !this.__chain__) {
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
            var s = e.name + "";
            st.call(ce, s) || (ce[s] = []), ce[s].push({ name: n, func: e });
          }
        }), ce[mr(r, q).name] = [{
          name: "wrapper",
          func: r
        }], j.prototype.clone = Pf, j.prototype.reverse = Ff, j.prototype.value = Ef, u.prototype.at = ap, u.prototype.chain = op, u.prototype.commit = up, u.prototype.next = lp, u.prototype.plant = cp, u.prototype.reverse = hp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = pp, u.prototype.first = u.prototype.head, Se && (u.prototype[Se] = fp), u;
      }, ue = uf();
      Jn ? ((Jn.exports = ue)._ = ue, ii._ = ue) : It._ = ue;
    }).call(m0);
  }(Be, Be.exports)), Be.exports;
}
var vu = y0();
const z = /* @__PURE__ */ _u(vu);
var kr = { exports: {} }, ls, iu;
function w0() {
  if (iu) return ls;
  iu = 1;
  var c = 1e3, i = c * 60, r = i * 60, a = r * 24, f = a * 7, p = a * 365.25;
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
            return F * i;
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
    return v >= a ? Math.round(I / a) + "d" : v >= r ? Math.round(I / r) + "h" : v >= i ? Math.round(I / i) + "m" : v >= c ? Math.round(I / c) + "s" : I + "ms";
  }
  function w(I) {
    var v = Math.abs(I);
    return v >= a ? C(I, v, a, "day") : v >= r ? C(I, v, r, "hour") : v >= i ? C(I, v, i, "minute") : v >= c ? C(I, v, c, "second") : I + " ms";
  }
  function C(I, v, F, R) {
    var E = v >= F * 1.5;
    return Math.round(I / F) + " " + R + (E ? "s" : "");
  }
  return ls;
}
var fs, su;
function M0() {
  if (su) return fs;
  su = 1;
  function c(i) {
    a.debug = a, a.default = a, a.coerce = C, a.disable = m, a.enable = p, a.enabled = w, a.humanize = w0(), a.destroy = I, Object.keys(i).forEach((v) => {
      a[v] = i[v];
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
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (bt, tn) => {
          if (bt === "%%")
            return "%";
          _t++;
          const Ht = a.formatters[tn];
          if (typeof Ht == "function") {
            const Et = q[_t];
            bt = Ht.call(Z, Et), q.splice(_t, 1), _t--;
          }
          return bt;
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
var au;
function C0() {
  return au || (au = 1, function(c, i) {
    i.formatArgs = a, i.save = f, i.load = p, i.useColors = r, i.storage = d(), i.destroy = /* @__PURE__ */ (() => {
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
    i.log = console.debug || console.log || (() => {
    });
    function f(w) {
      try {
        w ? i.storage.setItem("debug", w) : i.storage.removeItem("debug");
      } catch {
      }
    }
    function p() {
      let w;
      try {
        w = i.storage.getItem("debug");
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
    c.exports = M0()(i);
    const { formatters: m } = c.exports;
    m.j = function(w) {
      try {
        return JSON.stringify(w);
      } catch (C) {
        return "[UnexpectedJSONParseError]: " + C.message;
      }
    };
  }(kr, kr.exports)), kr.exports;
}
var b0 = C0();
const x0 = /* @__PURE__ */ _u(b0), cs = {};
function Zn(c) {
  if (!cs[c]) {
    const i = x0("ultraPacer:core");
    i(`loading debug for namespace "${c}"`), cs[c] = i.extend(c);
  }
  return cs[c];
}
function Nt(c, i = 0) {
  return Math.round(c * 10 ** i) / 10 ** i;
}
function me(c, i, r, a, f) {
  return r + (f - c) / (i - c) * (a - r);
}
function mu(c, i, r) {
  let a = 0, f = 0;
  const p = [];
  for (a = 0; a < r.length; a++)
    if (r[a] < c[f])
      p.push(i[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[a]; )
        f++;
      f === c.length - 1 || r[a] === c[f] ? p.push(i[f]) : p.push(me(c[f], c[f + 1], i[f], i[f + 1], r[a]));
    }
  return p;
}
function yu(c) {
  let i, r, a, f, p = 0, d = 0, m = 0, w = 0, C = 0;
  for (i = 0; i < c.length; i++)
    r = c[i][0], a = c[i][1], f = c[i][2], C += f, p += f * r, m += f * (r * r), d += f * a, w += f * (r * a);
  const I = (d * m - p * w) / (C * m - p * p);
  return [(C * w - p * d) / (C * m - p * p), I];
}
function wu(c, i, r, a) {
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
      I = (1 - (Math.abs(m - c[v]) / w) ** 3) ** 3, C.push([c[v], i[v], I]);
    d.push(yu(C));
  }), d;
}
function bs(c, i, r) {
  return Nt(c, r) < Nt(i, r);
}
function S0(c, i, r) {
  return Nt(c, r) > Nt(i, r);
}
function ye(c, i, r) {
  return Nt(c, r) <= Nt(i, r);
}
function Br(c, i, r) {
  return Nt(c, r) >= Nt(i, r);
}
function Ue(c, i, r) {
  return Nt(c, r) === Nt(i, r);
}
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: mu,
  linearRegression: yu,
  req: Ue,
  rgt: S0,
  rgte: Br,
  rlt: bs,
  rlte: ye,
  round: Nt,
  wlslr: wu
}, Symbol.toStringTag, { value: "Module" }));
class bn {
  constructor(i) {
    M(this, "_altitude", 1);
    M(this, "_grade", 1);
    M(this, "_terrain", 1);
    M(this, "_heat", 1);
    M(this, "_dark", 1);
    M(this, "_fatigue", 1);
    M(this, "_strategy", 1);
    M(this, "_combined");
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
class ou {
  constructor(i, r, a) {
    M(this, "factors", new bn());
    M(this, "point");
    M(this, "course");
    M(this, "loop");
    Object.defineProperty(this, "course", { writable: !0 }), this.point = r, this.course = i, this.loop = a;
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
const A0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function Mu(c, i) {
  (i === null || typeof i > "u") && (i = A0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= i.th ? 1 : (1 + i.rate / i.span / 100) ** (r - i.th);
}
const uu = {
  baseline: 0,
  terrainScale: 1
};
function I0(c, i) {
  function r(a) {
    return a < c.noon ? a + 86400 : a;
  }
  return i >= c.sunrise && i <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (i <= c.dawn || i >= c.dusk) ? 1 : r(i) >= r(c.nadir) ? me(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(i)
  ) : me(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(i)
  );
}
function Cu(c, i, r, a = uu) {
  if (i === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = uu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (a.terrainScale * (i - 1) + a.baseline) * f, d = I0(r, c);
  return 1 + p * d;
}
const T0 = {
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
function bu(c, i) {
  return (i === null || typeof i > "u") && (i = T0), c < i.lower.lim ? i.lower.m * c + i.lower.b : c > i.upper.lim ? i.upper.m * c + i.upper.b : i.a * c ** 2 + i.b * c + 1;
}
function xu(c, i) {
  if (!i) return 1;
  const r = c.tod;
  let a = 1;
  if (r > i.start && r < i.stop) {
    const f = (r - i.start) / (i.stop - i.start) * Math.PI;
    a += (i.max - i.baseline) * Math.sin(f) / 100;
  }
  return a += i.baseline / 100, a;
}
function Su(c, i) {
  const r = z.findLast(i.terrainFactors, (a) => ye(a.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const Au = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function xs(c) {
  const i = new bn().init(0);
  return c.forEach(({ factors: r, dist: a }) => {
    i.applyEach((f, p) => f + a * p, r);
  }), i.scaleEach(1 / vu.sumBy(c, "dist")), i;
}
function P0(c, i) {
  let r = 0, a = 0;
  return c.forEach((f, p) => {
    const d = p === c.length - 1 ? i : c[p + 1].onset, m = f.type === "linear" ? f.value / 2 : f.value;
    a += (r + m) * (d - f.onset), r += f.value;
  }), a / i;
}
function F0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function E0(c, i, r) {
  let a = -P0(i, r);
  return i.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        a += f.value;
      else if (f.type === "linear") {
        const d = p === i.length - 1 ? r : i[p + 1].onset;
        c > d ? a += f.value : a += f.value * (c - f.onset) / (d - f.onset);
      }
    }
  }), a;
}
class ms {
  constructor(i, r) {
    M(this, "plan");
    M(this, "values");
    this.plan = i, this.values = r ? z.cloneDeep(r) : [{ onset: 0, value: F0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(i) {
    return 1 + E0(i, this.values, this.plan.course.dist) / 100;
  }
  addValue(i) {
    const r = this.values.findIndex((a) => a.onset >= i.onset);
    r >= 0 ? this.values.splice(r, 0, i) : this.values.push(i);
  }
}
function ys(c, i) {
  return i === void 0 ? c : (c - 1) * i + 1;
}
function Ss(c, i) {
  c.factors || (c.factors = new bn()), Object.assign(c.factors, {
    grade: bu(c.grade),
    altitude: Mu(c.alt),
    terrain: Su(c, i)
  });
}
function Wr(c, i) {
  var r, a;
  if (c.factors || (c.factors = new bn()), Ss(c, i.course), i) {
    if (c.factors === void 0) throw new Error("no factors");
    c.factors.strategy = i.strategy.at(c.loc), Object.assign(c.factors, {
      heat: i.heatModel ? xu(c, i.heatModel) : 1,
      dark: i.event.sun ? Cu(c.tod, c.factors.terrain, i.event.sun) : 1
    });
  }
  c.factors.altitude = ys(c.factors.altitude, (r = i.scales) == null ? void 0 : r.altitude), c.factors.dark = ys(c.factors.dark, (a = i.scales) == null ? void 0 : a.dark);
}
const r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: bn,
  Strategy: ms,
  applyScale: ys,
  generateCourseFactors: Ss,
  generatePlanFactors: Wr,
  getAltitudeFactor: Mu,
  getDarkFactor: Cu,
  getGradeFactor: bu,
  getHeatFactor: xu,
  getTerrainFactor: Su,
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
function Or(c) {
  return typeof c == "number" && !isNaN(c);
}
function R0(c, i, r) {
  const a = c.filter(
    (p, d) => d >= c.findIndex((m) => m === i) && d <= c.findIndex((m) => m === r)
  ), f = a.map((p, d) => ({
    factors: p.factors,
    dist: d === a.length - 1 ? 0 : a[d + 1].loc - a[d].loc
  }));
  return f.pop(), xs(f);
}
class Tu {
  constructor(i) {
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
    this.point1 = i.point1, this.point2 = i.point2, this.gain = i.gain, this.loss = i.loss, this.grade = i.grade, i.name && (this._name = i.name);
  }
  /**
   * name of segment
   */
  get name() {
    var i;
    return this._name || ((i = this.waypoint) == null ? void 0 : i.name) || void 0;
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
class L0 extends Tu {
  constructor(r, a) {
    super(a);
    M(this, "_course");
    M(this, "point1");
    M(this, "point2");
    this._course = r, this.point1 = a.point1, this.point2 = a.point2;
  }
}
class k0 extends Tu {
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
    return this._factors || (this._factors = R0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Zn("CourseSplits");
class O0 {
  constructor(i) {
    M(this, "_segments");
    M(this, "_miles");
    M(this, "_kilometers");
    M(this, "course");
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
    hs("createSegments");
    const i = this.course.waypoints.filter((a) => a.tier < 3).sort((a, f) => a.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(i.map((a) => a.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, f) => {
      a.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    hs(`createSplits:${i}`);
    const r = Iu(i), a = z.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - a[a.length - 1] > 1e-4 && a.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(a));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var F;
    hs.extend("calcSegments")("exec");
    const a = this.course, f = a.points, p = [], d = [];
    let m, w, C = a.points[0], I;
    for (m = 0, w = i.length; m < w; m++) {
      const R = i[m];
      I && Ue((F = i[m - 1]) == null ? void 0 : F.end, R.start, 4) ? C = I : C = a.getPoint(R.start), I = a.getPoint(R.end);
      const E = R.end - R.start, P = new L0(this.course, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (I.alt - C.alt) / E / 10 * (I.alt - C.alt > 0 ? a.gainScale : a.lossScale) : 0,
        point1: C,
        point2: I
      }), N = new bn().init(0);
      p.push(P), d.push(N);
    }
    const v = (R, E, P, N) => {
      const q = P.alt - E.alt;
      R[q > 0 ? "gain" : "loss"] += q * (q > 0 ? a.gainScale : a.lossScale), Ss(E, a);
      const Z = P.loc - E.loc;
      N.applyEach((J, it) => J + it * Z, E.factors);
    };
    m = 1;
    for (let R = 0; R < p.length; R++) {
      const E = p[R], P = d[R];
      for (; ye(f[m].loc, E.point1.loc, 4); ) m++;
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
var ps = {}, lu;
function D0() {
  return lu || (lu = 1, function(c) {
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
    var i = 6371;
    c.latlon = function(r, a) {
      this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN;
    }, c.latlon.prototype.distanceTo = function(r, a) {
      typeof a > "u" && (a = 4);
      var f = this.distanceRadTo(r), p = i * f;
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
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / i, r = r.toRad();
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
      ), bt = Math.asin(Math.sin(d) * Math.cos(Wt) + Math.cos(d) * Math.sin(Wt) * Math.cos(I)), tn = Math.atan2(
        Math.sin(I) * Math.sin(Wt) * Math.cos(d),
        Math.cos(Wt) - Math.sin(d) * Math.sin(bt)
      ), Ht = m + tn;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(bt.toDeg(), Ht.toDeg());
    }, c.latlon.prototype.rhumbDistanceTo = function(r) {
      var a = i, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), m = Math.abs(r.lng - this.lng).toRad(), w = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(d / w) ? d / w : Math.cos(f);
      Math.abs(m) > Math.PI && (m = m > 0 ? -(2 * Math.PI - m) : 2 * Math.PI + m);
      var I = Math.sqrt(d * d + C * C * m * m) * a;
      return I.toPrecisionFixed(4);
    }, c.latlon.prototype.rhumbBearingTo = function(r) {
      var a = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var m = Math.atan2(p, d);
      return (m.toDeg() + 360) % 360;
    }, c.latlon.prototype.rhumbDestinationPoint = function(r, a) {
      var f = i, p = parseFloat(a) / f, d = this.lat.toRad(), m = this.lng.toRad();
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
var N0 = D0();
class Pu {
  constructor(i, r, a) {
    M(this, "alt");
    M(this, "lat");
    M(this, "lon");
    this.lat = i, this.lon = r, this.alt = a;
  }
  get latlon() {
    return new N0.latlon(this.lat, this.lon);
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
function Eu(c, i, r) {
  if (c.loc > i.loc && r > c.loc || i.loc > c.loc && r > i.loc)
    throw new Error("Input location must be between points");
  const a = Math.abs(c.loc - r), f = c.latlon.bearingTo(i.latlon), { lat: p, lng: d } = c.latlon.destinationPoint(f, a), m = c.grade, w = me(c.loc, i.loc, c.alt, i.alt, r);
  return new Fu(p, d, w, r, m);
}
function W0(c, i) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof i == "object" ? String(i.id) : i);
}
function ws(c, i) {
  return !!(c && i && W0(c.site, i.site) && c.loop === i.loop);
}
class fu {
  constructor(i, r = 1) {
    M(this, "_data");
    M(this, "loop");
    M(this, "site");
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
    if (!z.isNumber(i)) throw new Error("Wrong format for Waypoint.loc");
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
      const r = (i = this.site.cutoffs) == null ? void 0 : i.find((a) => a.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(i) {
    var a;
    const r = (a = this.site.cutoffs) == null ? void 0 : a.findIndex((f) => f.loop === this.loop);
    r >= 0 ? i ? this.site.cutoffs[r].time = i : this.site.cutoffs.splice(r, 1) : i && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: i, loop: this.loop }));
  }
  matchingSegment(i) {
    return i.find((r) => r.waypoint && ws(this, r.waypoint));
  }
}
const Dr = Zn("models:Waypoint");
class gs {
  constructor(i, r) {
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
    this._data = { percent: r.percent }, this.course = i, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), Dr(`constructor: ${this.name}`);
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
  set percent(i) {
    this._data.percent = i;
  }
  get waypoints() {
    return this._waypoints ? this._waypoints : (Dr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new fu(this, this.course.loops)] : this._waypoints = z.range(this.course.loops).map((i) => new fu(this, i + 1)), this._waypoints);
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
    let i, r, a;
    this.type === "start" ? { lat: i, lon: r, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: i, lon: r, alt: a } = this.course.track.points[this.course.track.points.length - 1] : { lat: i, lon: r, alt: a } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = i, this._lon = r, this._alt = a, this.course.clearCache(1);
  }
}
var ds = { exports: {} }, cu;
function B0() {
  return cu || (cu = 1, function(c, i) {
    (function() {
      var r = Math.PI, a = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, m = Math.atan2, w = Math.acos, C = r / 180, I = 1e3 * 60 * 60 * 24, v = 2440588, F = 2451545;
      function R(k) {
        return k.valueOf() / I - 0.5 + v;
      }
      function E(k) {
        return new Date((k + 0.5 - v) * I);
      }
      function P(k) {
        return R(k) - F;
      }
      var N = C * 23.4397;
      function q(k, $) {
        return m(a(k) * f(N) - p($) * a(N), f(k));
      }
      function Z(k, $) {
        return d(a($) * f(N) + f($) * a(N) * a(k));
      }
      function J(k, $, G) {
        return m(a(k), f(k) * a($) - p(G) * f($));
      }
      function it(k, $, G) {
        return d(a($) * a(G) + f($) * f(G) * f(k));
      }
      function _t(k, $) {
        return C * (280.16 + 360.9856235 * k) - $;
      }
      function Wt(k) {
        return k < 0 && (k = 0), 2967e-7 / Math.tan(k + 312536e-8 / (k + 0.08901179));
      }
      function bt(k) {
        return C * (357.5291 + 0.98560028 * k);
      }
      function tn(k) {
        var $ = C * (1.9148 * a(k) + 0.02 * a(2 * k) + 3e-4 * a(3 * k)), G = C * 102.9372;
        return k + $ + G + r;
      }
      function Ht(k) {
        var $ = bt(k), G = tn($);
        return {
          dec: Z(G, 0),
          ra: q(G, 0)
        };
      }
      var Et = {};
      Et.getPosition = function(k, $, G) {
        var ct = C * -G, nt = C * $, ht = P(k), ot = Ht(ht), lt = _t(ht, ct) - ot.ra;
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
      Et.addTime = function(k, $, G) {
        we.push([k, $, G]);
      };
      var $e = 9e-4;
      function Ur(k, $) {
        return Math.round(k - $e - $ / (2 * r));
      }
      function Me(k, $, G) {
        return $e + (k + $) / (2 * r) + G;
      }
      function qe(k, $, G) {
        return F + k + 53e-4 * a($) - 69e-4 * a(2 * G);
      }
      function $r(k, $, G) {
        return w((a(k) - a($) * a(G)) / (f($) * f(G)));
      }
      function xn(k) {
        return -2.076 * Math.sqrt(k) / 60;
      }
      function vn(k, $, G, ct, nt, ht, ot) {
        var lt = $r(k, G, ct), Mt = Me(lt, $, nt);
        return qe(Mt, ht, ot);
      }
      Et.getTimes = function(k, $, G, ct) {
        ct = ct || 0;
        var nt = C * -G, ht = C * $, ot = xn(ct), lt = P(k), Mt = Ur(lt, nt), Kt = Me(0, nt, Mt), Rt = bt(Kt), Bt = tn(Rt), mn = Z(Bt, 0), vt = qe(Kt, Rt, Bt), Lt, Dn, Ct, Ut, cn, nn, pt = {
          solarNoon: E(vt),
          nadir: E(vt - 0.5)
        };
        for (Lt = 0, Dn = we.length; Lt < Dn; Lt += 1)
          Ct = we[Lt], Ut = (Ct[0] + ot) * C, cn = vn(Ut, nt, ht, mn, Mt, Rt, Bt), nn = vt - (cn - vt), pt[Ct[1]] = E(nn), pt[Ct[2]] = E(cn);
        return pt;
      };
      function ze(k) {
        var $ = C * (218.316 + 13.176396 * k), G = C * (134.963 + 13.064993 * k), ct = C * (93.272 + 13.22935 * k), nt = $ + C * 6.289 * a(G), ht = C * 5.128 * a(ct), ot = 385001 - 20905 * f(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Et.getMoonPosition = function(k, $, G) {
        var ct = C * -G, nt = C * $, ht = P(k), ot = ze(ht), lt = _t(ht, ct) - ot.ra, Mt = it(lt, nt, ot.dec), Kt = m(a(lt), p(nt) * f(ot.dec) - a(ot.dec) * f(lt));
        return Mt = Mt + Wt(Mt), {
          azimuth: J(lt, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Et.getMoonIllumination = function(k) {
        var $ = P(k || /* @__PURE__ */ new Date()), G = Ht($), ct = ze($), nt = 149598e3, ht = w(a(G.dec) * a(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = m(nt * a(ht), ct.dist - nt * f(ht)), lt = m(f(G.dec) * a(G.ra - ct.ra), a(G.dec) * f(ct.dec) - f(G.dec) * a(ct.dec) * f(G.ra - ct.ra));
        return {
          fraction: (1 + f(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
          angle: lt
        };
      };
      function Sn(k, $) {
        return new Date(k.valueOf() + $ * I / 24);
      }
      Et.getMoonTimes = function(k, $, G, ct) {
        var nt = new Date(k);
        ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * C, ot = Et.getMoonPosition(nt, $, G).altitude - ht, lt, Mt, Kt, Rt, Bt, mn, vt, Lt, Dn, Ct, Ut, cn, nn, pt = 1; pt <= 24 && (lt = Et.getMoonPosition(Sn(nt, pt), $, G).altitude - ht, Mt = Et.getMoonPosition(Sn(nt, pt + 1), $, G).altitude - ht, Bt = (ot + Mt) / 2 - lt, mn = (Mt - ot) / 2, vt = -mn / (2 * Bt), Lt = (Bt * vt + mn) * vt + lt, Dn = mn * mn - 4 * Bt * lt, Ct = 0, Dn >= 0 && (nn = Math.sqrt(Dn) / (Math.abs(Bt) * 2), Ut = vt - nn, cn = vt + nn, Math.abs(Ut) <= 1 && Ct++, Math.abs(cn) <= 1 && Ct++, Ut < -1 && (Ut = cn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Rt = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? cn : Ut), Rt = pt + (Lt < 0 ? Ut : cn)), !(Kt && Rt)); pt += 2)
          ot = Mt;
        var yn = {};
        return Kt && (yn.rise = Sn(nt, Kt)), Rt && (yn.set = Sn(nt, Rt)), !Kt && !Rt && (yn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), yn;
      }, c.exports = Et;
    })();
  }(ds)), ds.exports;
}
var hu = B0();
function Kn(c, i) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: i
  }).split(":").map((a) => Number(a));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class U0 {
  constructor(i) {
    M(this, "nadir", 0);
    M(this, "dawn", 0);
    M(this, "sunrise", 0);
    M(this, "dusk", 0);
    M(this, "sunset", 0);
    M(this, "noon", 0);
    M(this, "nadirAltitude", 0);
    Object.assign(this, i);
  }
}
class Ms {
  constructor(i, r, a, f) {
    M(this, "start");
    M(this, "lat");
    M(this, "lon");
    M(this, "timezone");
    M(this, "sun");
    M(this, "startTime");
    this.start = i, this.lat = a, this.lon = f, this.timezone = r;
    const p = hu.getTimes(this.start, this.lat, this.lon), d = hu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new U0({
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
  dateAtElapsed(i) {
    const r = new Date(this.start);
    return r.setTime(r.getTime() + i * 1e3), r;
  }
  // return seconds since midnight for an input elapsed amount of time since start
  elapsedToTimeOfDay(i) {
    return (this.startTime + i) % 86400;
  }
}
const On = Zn("models:Course"), $0 = ["track", "dist", "gain", "loss", "cache", "distance", "start"];
class i_ {
  constructor(i, r) {
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
    this._track = i, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss), r.start && (this.event = new Ms(
      r.start.date,
      r.start.timezone,
      i.points[0].lat,
      i.points[0].lon
    ));
    const a = Object.keys(r).filter((f) => !$0.includes(f));
    Object.assign(this, z.pick(r, a));
  }
  get loops() {
    return this._loops;
  }
  set loops(i) {
    this._loops = i, this.clearCache(2);
  }
  set dist(i) {
    On(`overriding dist to ${i}`), this._distOverride = i, this.clearCache(2);
  }
  set gain(i) {
    On(`overriding gain to ${i}`), this._gainOverride = i, this.clearCache(2);
  }
  set loss(i) {
    On(`overriding loss to ${i}`), this._lossOverride = i, this.clearCache(2);
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
    this._sites = i.map((r) => new gs(this, r)), this.clearCache(1);
  }
  clearCache(i = 1) {
    On(`clearCache-${i}`), delete this._cutoffs, delete this._splits, delete this._stats, delete this._terrainFactors, delete this._terrainTypes, delete this._waypoints, i === 2 && (delete this._dist, delete this._gain, delete this._loss, delete this._points, this.sites.forEach((r) => {
      r.clearCache();
    }));
  }
  get waypoints() {
    var r;
    if (this._waypoints) return this._waypoints;
    if (!((r = this.track) != null && r.dist)) return [];
    let i = [];
    return this.sites.forEach((a) => {
      i.push(...a.waypoints);
    }), i = i.sort((a, f) => a.loc - f.loc), this._waypoints = i, this._waypoints;
  }
  set track(i) {
    this._track = i, this.clearCache(2);
  }
  get track() {
    return this._track;
  }
  get points() {
    if (this._points) return this._points;
    On("generating points array"), this._points = new Array(this.track.points.length * this.loops);
    for (let i = 0; i < this.loops; i++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + i * this.track.points.length] = new ou(
          this,
          this.track.points[r],
          i
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
    const a = this.points.findIndex((C) => Br(C.loc, i, 4)), f = this.points[a];
    if (Ue(f.loc, i, 4)) return f;
    On(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${i}`);
    const p = a - 1, d = this.points[p], m = Eu(d.point, f.point, i % this.loopDist / this.distScale), w = new ou(this, m, Math.floor(i / this.loopDist));
    return r && this.points.splice(a, 0, w), w;
  }
  get terrainFactors() {
    if (this._terrainFactors) return this._terrainFactors;
    On("regenerating terrainFactors");
    const i = this.waypoints.filter(
      (r, a) => {
        var f;
        return a === 0 || !z.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[a - 1]) == null ? void 0 : f.terrainFactor);
      }
    );
    return this._terrainFactors = i.map((r, a) => new z0(r, i[a + 1] || z.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes) return this._terrainTypes;
    On("regenerating terrainTypes");
    const i = this.waypoints.filter(
      (r, a) => {
        var f;
        return !z.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[a - 1]) == null ? void 0 : f.terrainType);
      }
    );
    return this._terrainTypes = i.map((r, a) => new G0(r, i[a + 1] || z.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((i) => i.cutoff).map((i) => new q0(i)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new O0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    On("stats:calculate");
    const i = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), a = this.terrainFactors.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: z.sum(
          this.track.points.map((d, m) => {
            var w;
            return d.alt * (d.loc - (((w = this.track.points[m - 1]) == null ? void 0 : w.loc) || 0));
          })
        ) / this.track.dist,
        max: z.max(i) || 0,
        min: z.min(i) || 0
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
  locationsToBreaks(i) {
    const r = i.filter((f) => f > 0 && bs(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class q0 {
  constructor(i) {
    M(this, "waypoint");
    this.waypoint = i;
  }
  get loc() {
    return this.waypoint.loc;
  }
  get time() {
    if (!this.waypoint.cutoff) throw new Error("Invalid cutoff");
    return this.waypoint.cutoff;
  }
}
class z0 {
  constructor(i, r, a = 0) {
    M(this, "value");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.value = a;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class G0 {
  constructor(i, r, a) {
    M(this, "type");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.type = a;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var _s = {}, pu;
function H0() {
  return pu || (pu = 1, function(c) {
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
            if (i.not_type.test(P.type) && i.not_primitive.test(P.type) && v instanceof Function && (v = v()), i.numeric_arg.test(P.type) && typeof v != "number" && isNaN(v))
              throw new TypeError(r("[sprintf] expecting number but found %T", v));
            switch (i.number.test(P.type) && (J = v >= 0), P.type) {
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
            i.json.test(P.type) ? F += v : (i.number.test(P.type) && (!J || P.sign) ? (it = J ? "+" : "-", v = v.toString().replace(i.sign, "")) : it = "", q = P.pad_char ? P.pad_char === "0" ? "0" : P.pad_char.charAt(1) : " ", Z = P.width - (it + v).length, N = P.width && Z > 0 ? q.repeat(Z) : "", F += P.align ? it + v + N : q === "0" ? it + N + v : N + it + v);
          }
        return F;
      }
      var p = /* @__PURE__ */ Object.create(null);
      function d(m) {
        if (p[m])
          return p[m];
        for (var w = m, C, I = [], v = 0; w; ) {
          if ((C = i.text.exec(w)) !== null)
            I.push(C[0]);
          else if ((C = i.modulo.exec(w)) !== null)
            I.push("%");
          else if ((C = i.placeholder.exec(w)) !== null) {
            if (C[2]) {
              v |= 1;
              var F = [], R = C[2], E = [];
              if ((E = i.key.exec(R)) !== null)
                for (F.push(E[1]); (R = R.substring(E[0].length)) !== ""; )
                  if ((E = i.key_access.exec(R)) !== null)
                    F.push(E[1]);
                  else if ((E = i.index_access.exec(R)) !== null)
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
var Cs = H0();
class Ru {
  /**
   *
   * @param target - target object
   * @param events - array of event names to map
   */
  constructor(i, r) {
    M(this, "_callbacks", {});
    M(this, "_target");
    this._target = i, this._callbacks = z.fromPairs(r.map((a) => [a, []]));
  }
  /**
   * add a callback function to an event
   * @param evt - event name
   * @param fun - callback function, first argument is target object
   */
  add(i, r) {
    if (!this._callbacks[i]) throw new Error(`${i} is not a valid callback for object`);
    this._callbacks[i].find((a) => a === r) ? console.warn("callback already exists.") : this._callbacks[i].push(r);
  }
  /**
   * remove a callback function from event
   * @param evt - event name
   * @param fun - callback function
   */
  remove(i, r) {
    if (!this._callbacks[i]) throw new Error(`${i} is not a valid callback for object`);
    z.pull(this._callbacks[i], r);
  }
  /**
   * clear all callbacks from a target
   * @param evt - event to clear; if undefined all events will be cleared
   */
  clear(i) {
    (i ? [i] : Object.keys(this._callbacks)).forEach((a) => this._callbacks[a] = []);
  }
  /**
   * execute callbacks for an event
   * @param evt - event name
   */
  execute(i) {
    this._callbacks[i].forEach((r) => r(this._target));
  }
}
const K0 = Zn("PaceChunk");
class Z0 {
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
class gu {
  constructor(i, r, a, f) {
    M(this, "constraints");
    M(this, "points");
    M(this, "plan");
    M(this, "delay");
    M(this, "factor");
    M(this, "factors", new bn());
    M(this, "status");
    this.constraints = a, this.points = r, this.plan = i, this.delay = f, this.factor = 1;
  }
  get elapsed() {
    const i = z.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - i;
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
    i[0].elapsed = z.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], i[0].time = i[0].elapsed - z.sum(this.plan.pacing.chunks.filter((C) => C.points[0].loc < i[0].loc).map((C) => C.delay)), this.plan.event.start && (i[0].tod = this.plan.event.elapsedToTimeOfDay(i[0].elapsed));
    let r = i[0].elapsed, a = i[0].delay || 0, f = 0, p = 0, d = 0;
    const m = this.factor ? this.np : this.plan.pacing.pace, w = new bn().init(0);
    for (let C = 1, I = i.length; C < I; C++) {
      f = i[C].loc - i[C - 1].loc, Wr(i[C - 1], this.plan), w.applyEach((F, R) => F + R * f, i[C - 1].factors);
      const v = i[C - 1].factors.combined;
      d += v * f, p = m * v * f, i[C].time = i[C - 1].time + p, a = i[C - 1].delay || 0, r += p + a, i[C].elapsed = r, this.plan.event.start && (i[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Wr(i[i.length - 1], this.plan), this.factors = w.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = K0.extend(
      Cs.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const d = new Z0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !z.round(f - this.factor, 10), f = this.factor, d.target = Math.abs(
      (z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, a(Cs.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    a("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const jt = Zn("Pacing");
class J0 {
  constructor(i) {
    M(this, "callbacks", new Ru(this, ["onUpdated", "onFail", "onInvalidated"]));
    M(this, "chunks", []);
    M(this, "plan");
    M(this, "_elapsed");
    M(this, "_factor");
    M(this, "_factors");
    this.plan = i;
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
    return this._factor ? this._factor : (jt("factor:update"), this.chunks && (this._factor = z.sum(this.chunks.map((i) => i.factor * i.dist)) / this.plan.course.dist), this._factor || 1);
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
    var i, r, a;
    return {
      complete: ((i = this.chunks) == null ? void 0 : i.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((f) => {
        var p;
        return !((p = f.status) != null && p.success);
      }).length) === 0,
      chunks: ((a = this.chunks) == null ? void 0 : a.length) || 0
    };
  }
  calculate() {
    var a, f;
    const i = jt.extend("calculate");
    i("exec"), i("clearing cache"), this.clearCache(), i("adding points at each terrain factor break"), (a = this.plan.course.terrainFactors) == null || a.forEach((p) => this.plan.getPoint(p.start, !0)), i("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint(p.loc, !0);
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      p.delay = 0;
    }), (f = this.plan.delays) == null || f.forEach((p) => {
      const d = this.plan.getPoint(p.loc, !0);
      d.delay = p.delay;
    }), i("creating pace chunks"), this.initChunks(), [null, ...z.reverse([...this.plan.cutoffs]), null].forEach((p) => {
      for (; this.chunks.find((d) => !d.status); )
        this.calcChunks(), this.validateChunks();
      if (!p) return !0;
      if (p.point.elapsed - p.time > 0.5) {
        i(`cutoff at ${p.loc} missed`);
        const d = this.chunks[0];
        z.last(d.points) === p.point ? (i(`setting cutoff at ${p.loc}`), d.constraints = [0, p.time], delete d.status) : this.splitChunk(d, p.point, p.time);
      }
    }), z.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (i("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), jt(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.status.success ? this.callbacks.execute("onUpdated") : this.callbacks.execute("onFail");
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
    this.chunks = [new gu(this.plan, this.plan.points, [0, i], this.plan.delay)], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    jt("calcChunks"), this.clearCache(), this.chunks.filter((i) => !i.status).forEach((i) => i.calculate());
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
  splitChunk(i, r, a) {
    jt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = i.points.findIndex((w) => w === r), d = z.round(r.elapsed - r.time), m = new gu(this.plan, i.points.slice(0, p + 1), [0, a], d);
    m.points.filter((w, C) => C < m.points.length - 1).forEach((w) => {
      w._chunk = m;
    }), this.chunks.unshift(m), i.constraints[0] = a, i.delay -= d, i.points = i.points.slice(p), delete i.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(i, r) {
    const a = this.chunks.findIndex((p) => p === i), f = this.chunks.findIndex((p) => p === r);
    if (f - a !== 1) throw new Error("chunks must be sequential");
    jt(Cs.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, f, i.np, r.np)), i.points.pop(), i.points.push(...r.points), i.delay += r.delay, delete i.status, i.points.forEach((p) => {
      p._chunk = i;
    }), i.constraints = [i.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class du {
  constructor(i, r) {
    M(this, "factors", new bn());
    M(this, "_chunk");
    M(this, "_plan");
    M(this, "_point");
    M(this, "elapsed");
    M(this, "time");
    M(this, "tod");
    M(this, "delay");
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
    if (!this._chunk) throw new Error("PlanPoint._chunk not defined");
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
const vs = Zn("PlanSplits");
class Y0 {
  constructor(i) {
    M(this, "_segments");
    M(this, "_miles");
    M(this, "_kilometers");
    M(this, "plan");
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
    vs("createSegments");
    const i = this.plan.course.waypoints.filter((a) => a.tier < 3).sort((a, f) => a.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(i.map((a) => a.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, f) => {
      a.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    vs(`createSplits:${i}`);
    const r = Iu(i), a = z.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - a[a.length - 1] > 1e-4 && a.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(a));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var R;
    vs.extend("calcSegments")("exec");
    const a = this.plan, f = a.course, p = a.points, d = [], m = [];
    let w, C, I = a.points[0], v;
    for (w = 0, C = i.length; w < C; w++) {
      const E = i[w];
      v && Ue((R = i[w - 1]) == null ? void 0 : R.end, E.start, 4) ? I = v : I = a.getPoint(E.start), v = a.getPoint(E.end);
      const P = E.end - E.start, N = new k0(this.plan, {
        gain: 0,
        loss: 0,
        grade: P > 0 ? (v.alt - I.alt) / P / 10 * (v.alt - I.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: I,
        point2: v
      }), q = new bn().init(0);
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
      for (; ye(p[w].loc, P.point1.loc, 4); ) w++;
      let q = P.point1;
      for (; w < p.length && ye(p[w].loc, P.point2.loc, 4); ) {
        const Z = p[w];
        F(P, q, Z, N), q = Z, w++;
      }
      F(P, q, P.point2, N), a && (P.delay = a.delays.filter((Z) => Br(P.point1.loc, Z.loc, 4) && bs(P.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return d;
  }
}
const _n = Zn("models:Plan");
class s_ {
  constructor(i, r) {
    M(this, "callbacks");
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
    M(this, "_scales", new V0(this));
    M(this, "_splits");
    M(this, "_stats");
    M(this, "_strategy");
    M(this, "_target");
    M(this, "_typicalDelay", 0);
    this.course = i;
    const a = r.start ? new Ms(r.start.date, r.start.timezone, i.points[0].lat, i.points[0].lon) : i.event;
    if (!a) throw new Error("Start date/timezone is required for either the plan or the course");
    this.event = a, this.id = r.id, this.pacing = new J0(this), this.points = this.course.points.map((f) => new du(this, f)), this._method = r.method, this._target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this.scales = r.scales, this._strategy = new ms(this, r.strategy), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name, this.callbacks = new Ru(this, ["onUpdated"]);
  }
  get cutoffMargin() {
    return this._cutoffMargin;
  }
  set cutoffMargin(i) {
    this._cutoffMargin = i, this.clearCache();
  }
  get cutoffs() {
    if (this._cutoffs) return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new Q0(this, r, this.getPoint(r.loc, !0))) : [];
    let i = 0;
    for (; this._cutoffs.length - 1 >= i; ) {
      const r = this._cutoffs[i];
      this._cutoffs.find((a, f) => f > i && a.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(i, 1)) : i++;
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
    if (this._delays) return this._delays;
    const i = this.course.waypoints.map((a) => {
      var d;
      const f = (d = this._specifiedDelays) == null ? void 0 : d.find((m) => ws(m.waypoint, a)), p = f ? f.delay : a.hasTypicalDelay ? this.typicalDelay : 0;
      return new X0(a, p);
    }).filter((a) => a.delay > 0).sort((a, f) => a.loc - f.loc);
    let r = 0;
    for (; i.length - 1 >= r; )
      r > 0 && i[r].loc === i[r - 1].loc ? (_n(`get delays: merging delay at ${i[r].loc} km`), i[r - 1].delay += i[r].delay, i.splice(r, 1)) : r++;
    return this._delays = i, this._delays;
  }
  set delays(i) {
    this._specifiedDelays = i, delete this._delays;
  }
  get events() {
    if (this._events) return this._events;
    _n("calculating events.sun");
    const i = [], r = this.event.elapsedToTimeOfDay(0), a = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < a; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((w) => {
        const C = w.time - r + 86400 * d;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && i.push({ event: w.event, elapsed: C });
      });
    i.sort((d, m) => d.elapsed - m.elapsed);
    const f = mu(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      i.map((d) => d.elapsed)
    ), p = i.map((d, m) => ({ ...d, loc: f[m] }));
    return this._events = { sun: p }, this._events;
  }
  get heatModel() {
    return this._heatModel;
  }
  set heatModel(i) {
    i ? this._heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: i.baseline,
      max: i.max
    } : delete this._heatModel;
  }
  /**
   * Method for calculating target time
   */
  get method() {
    return this._method;
  }
  set method(i) {
    this._method = i, this.invalidatePacing();
  }
  /**
   * Scales for factors
   */
  get scales() {
    return this._scales;
  }
  set scales(i) {
    this._scales.altitude = (i == null ? void 0 : i.altitude) || 1, this._scales.dark = (i == null ? void 0 : i.dark) || 1, this.invalidatePacing();
  }
  /**
   * splits are calculaed on get
   */
  get splits() {
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new Y0(this), this._splits);
  }
  set start(i) {
    this.event = new Ms(i.date, i.timezone, this.points[0].lat, this.points[0].lon);
  }
  /**
   * Plan stats object
   */
  get stats() {
    if (this._stats) return this._stats;
    _n("calculating stats.factors");
    const i = z.fromPairs(
      Au.map((p) => {
        const d = this.points.map((m) => m.factors.get(p));
        return [
          p,
          {
            min: Number(z.min(d)),
            max: Number(z.max(d))
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
    let a = 0, f = 0;
    return this.points.forEach((p, d) => {
      var m, w;
      a = p.loc - (((m = this.points[d - 1]) == null ? void 0 : m.loc) || 0), f = p.elapsed - (((w = this.points[d - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += a) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += a) : (r.day.time += f, r.day.dist += a);
    }), this._stats = { factors: i, sun: r }, this._stats;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(i) {
    this._strategy = new ms(this, i), this.clearCache();
  }
  get target() {
    return this._target;
  }
  set target(i) {
    z.isEqual(this._target, i) || (this._target = i, this.invalidatePacing());
  }
  get typicalDelay() {
    return this._typicalDelay;
  }
  set typicalDelay(i) {
    this._typicalDelay = i, this.clearCache(), this.invalidatePacing();
  }
  checkPacing() {
    var i, r;
    if (_n("checkPacing"), (i = this.pacing.status) != null && i.complete || (_n("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length)) throw new Error("No plan points");
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
  getDelayAtWaypoint(i) {
    var r;
    return ((r = this.delays.find((a) => ws(a.waypoint, i))) == null ? void 0 : r.delay) || 0;
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
    const a = this.points.findIndex((w) => Br(w.loc, i, 4)), f = this.points[a];
    if (Ue(f.loc, i, 4)) return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${i}`);
    const p = a - 1, d = this.points[p], m = new du(this, this.course.getPoint(i, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const w = f.elapsed - f.time - (d.elapsed - d.time);
      m.time = me(d.loc, f.loc, d.time + w, f.time, f.loc), m.elapsed = f.elapsed - (f.time - m.time), this.event.start && (m.tod = this.event.elapsedToTimeOfDay(m.elapsed));
    }
    return r && this.points.splice(a, 0, m), m;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits;
  }
}
class X0 {
  constructor(i, r) {
    M(this, "delay");
    M(this, "waypoint");
    this.waypoint = i, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class Q0 {
  constructor(i, r, a) {
    M(this, "plan");
    M(this, "courseCutoff");
    M(this, "point");
    this.plan = i, this.courseCutoff = r, this.point = a;
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
class V0 {
  constructor(i) {
    M(this, "plan");
    M(this, "_altitude", 1);
    M(this, "_dark", 1);
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
const Lu = (c, i, r, a) => {
  const f = wu(c, i, r, a), p = [];
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
function j0(c, i) {
  return Lu(
    i,
    c.map((a) => a.alt),
    i,
    0.05
  ).map((a) => a.grade);
}
const t_ = (c) => {
  let i = 0, r = 0;
  const a = [0];
  for (let f = 1, p = c.length; f < p; f++)
    i = Number(c[f - 1].latlon.distanceTo(c[f].latlon)), r += i, a.push(r);
  return a;
}, Nr = Zn("models:Track");
class As {
  constructor(i) {
    M(this, "dist");
    M(this, "gain");
    M(this, "loss");
    M(this, "points");
    Nr("Creating new Track object");
    const r = i.map((C) => new Pu(C.lat, C.lon, C.alt)), a = t_(r), f = j0(r, a);
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
  getLLA(i) {
    i > this.dist && (i = i % this.dist);
    let r;
    if (i === 0) r = this.points[0];
    else {
      const a = this.points.findIndex((f) => f.loc >= i);
      r = Eu(this.points[a - 1], this.points[a], i);
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
  getNearestPoint(i, r, a) {
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
      const I = C.map((F) => Number(i.distanceTo(F.latlon)));
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
  reduceDensity(i = 0.025, r = this.points.length / 2) {
    const a = Nr.extend("reduceDensity");
    if (this.dist / i > r / 2)
      return a("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / i) + 1, d = Array(p).fill(0).map((I, v) => Nt(v++ * i, 3));
    d[d.length - 1] < f && d.push(f);
    const m = Lu(
      this.points.map((I) => I.loc),
      this.points.map((I) => I.alt),
      d,
      2 * i
    ), w = d.map((I) => this.getLLA(I)).map((I, v) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(m[v].alt, 2)
    })), C = new As(w);
    return a(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
function a_(c, i, r) {
  const a = c.map((f, p) => ({ lat: c[p], lon: i[p], alt: r[p] }));
  return new As(a);
}
const o_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Kn
}, Symbol.toStringTag, { value: "Module" }));
export {
  i_ as Course,
  q0 as CourseCutoff,
  ou as CoursePoint,
  L0 as CourseSegment,
  Ms as Event,
  bn as Factors,
  J0 as Pacing,
  s_ as Plan,
  du as PlanPoint,
  k0 as PlanSegment,
  Pu as Point,
  gs as Site,
  ms as Strategy,
  As as Track,
  Fu as TrackPoint,
  fu as Waypoint,
  P0 as adjustStrategy,
  a_ as createTrackFromArrays,
  r_ as factors,
  Eu as interpolatePoint,
  e_ as math,
  I0 as scaleDark,
  o_ as util
};
