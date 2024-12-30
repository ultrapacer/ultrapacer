var d0 = Object.defineProperty;
var _0 = (f, s, r) => s in f ? d0(f, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : f[s] = r;
var A = (f, s, r) => _0(f, typeof s != "symbol" ? s + "" : s, r);
var kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _u(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Ue = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var v0 = Ue.exports, iu;
function m0() {
  return iu || (iu = 1, function(f, s) {
    (function() {
      var r, a = "4.17.21", l = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, I = "__lodash_placeholder__", m = 1, R = 2, F = 4, T = 1, P = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Bt = 64, St = 128, jt = 256, Ht = 512, Tt = 30, ye = "...", qe = 800, $r = 16, Me = 1, Ge = 2, qr = 3, Sn = 1 / 0, _n = 9007199254740991, ze = 17976931348623157e292, bn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ft = [
        ["ary", St],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Bt],
        ["rearg", jt]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", ct = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", vn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", kn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", fn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", He = "[object Symbol]", Lu = "[object Undefined]", Ce = "[object WeakMap]", ku = "[object WeakSet]", Se = "[object ArrayBuffer]", ee = "[object DataView]", Gr = "[object Float32Array]", zr = "[object Float64Array]", Hr = "[object Int8Array]", Kr = "[object Int16Array]", Zr = "[object Int32Array]", Jr = "[object Uint8Array]", Yr = "[object Uint8ClampedArray]", Xr = "[object Uint16Array]", Qr = "[object Uint32Array]", Ou = /\b__p \+= '';/g, Du = /\b(__p \+=) '' \+/g, Nu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Es = /&(?:amp|lt|gt|quot|#39);/g, Ps = /[&<>"']/g, Bu = RegExp(Es.source), Wu = RegExp(Ps.source), Uu = /<%-([\s\S]+?)%>/g, $u = /<%([\s\S]+?)%>/g, Rs = /<%=([\s\S]+?)%>/g, qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gu = /^\w*$/, zu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, Hu = RegExp(Vr.source), jr = /^\s+/, Ku = /\s/, Zu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ju = /\{\n\/\* \[wrapped with (.+)\] \*/, Yu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qu = /[()=,{}\[\]\/\s]/, Vu = /\\(\\)?/g, ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ts = /\w*$/, tc = /^[-+]0x[0-9a-f]+$/i, nc = /^0b[01]+$/i, ec = /^\[object .+?Constructor\]$/, rc = /^0o[0-7]+$/i, ic = /^(?:0|[1-9]\d*)$/, sc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, ac = /['\n\r\u2028\u2029\\]/g, Ze = "\\ud800-\\udfff", oc = "\\u0300-\\u036f", uc = "\\ufe20-\\ufe2f", cc = "\\u20d0-\\u20ff", Fs = oc + uc + cc, Ls = "\\u2700-\\u27bf", ks = "a-z\\xdf-\\xf6\\xf8-\\xff", lc = "\\xac\\xb1\\xd7\\xf7", fc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hc = "\\u2000-\\u206f", pc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Os = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ds = "\\ufe0e\\ufe0f", Ns = lc + fc + hc + pc, ti = "['’]", gc = "[" + Ze + "]", Bs = "[" + Ns + "]", Je = "[" + Fs + "]", Ws = "\\d+", dc = "[" + Ls + "]", Us = "[" + ks + "]", $s = "[^" + Ze + Ns + Ws + Ls + ks + Os + "]", ni = "\\ud83c[\\udffb-\\udfff]", _c = "(?:" + Je + "|" + ni + ")", qs = "[^" + Ze + "]", ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", ri = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + Os + "]", Gs = "\\u200d", zs = "(?:" + Us + "|" + $s + ")", vc = "(?:" + re + "|" + $s + ")", Hs = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", Ks = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", Zs = _c + "?", Js = "[" + Ds + "]?", mc = "(?:" + Gs + "(?:" + [qs, ei, ri].join("|") + ")" + Js + Zs + ")*", wc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", yc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ys = Js + Zs + mc, Mc = "(?:" + [dc, ei, ri].join("|") + ")" + Ys, Cc = "(?:" + [qs + Je + "?", Je, ei, ri, gc].join("|") + ")", Sc = RegExp(ti, "g"), bc = RegExp(Je, "g"), ii = RegExp(ni + "(?=" + ni + ")|" + Cc + Ys, "g"), xc = RegExp([
        re + "?" + Us + "+" + Hs + "(?=" + [Bs, re, "$"].join("|") + ")",
        vc + "+" + Ks + "(?=" + [Bs, re + zs, "$"].join("|") + ")",
        re + "?" + zs + "+" + Hs,
        re + "+" + Ks,
        yc,
        wc,
        Ws,
        Mc
      ].join("|"), "g"), Ac = RegExp("[" + Gs + Ze + Fs + Ds + "]"), Ic = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ec = [
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
      ], Pc = -1, lt = {};
      lt[Gr] = lt[zr] = lt[Hr] = lt[Kr] = lt[Zr] = lt[Jr] = lt[Yr] = lt[Xr] = lt[Qr] = !0, lt[nt] = lt[ht] = lt[Se] = lt[ct] = lt[ee] = lt[Mt] = lt[Ft] = lt[Wt] = lt[vt] = lt[Lt] = lt[Ct] = lt[tn] = lt[pt] = lt[mn] = lt[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[Se] = ut[ee] = ut[ct] = ut[Mt] = ut[Gr] = ut[zr] = ut[Hr] = ut[Kr] = ut[Zr] = ut[vt] = ut[Lt] = ut[Ct] = ut[tn] = ut[pt] = ut[mn] = ut[He] = ut[Jr] = ut[Yr] = ut[Xr] = ut[Qr] = !0, ut[Ft] = ut[Wt] = ut[Ce] = !1;
      var Rc = {
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
      }, Tc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Fc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Lc = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, kc = parseFloat, Oc = parseInt, Xs = typeof kr == "object" && kr && kr.Object === Object && kr, Dc = typeof self == "object" && self && self.Object === Object && self, It = Xs || Dc || Function("return this")(), si = s && !s.nodeType && s, Zn = si && !0 && f && !f.nodeType && f, Qs = Zn && Zn.exports === si, ai = Qs && Xs.process, nn = function() {
        try {
          var _ = Zn && Zn.require && Zn.require("util").types;
          return _ || ai && ai.binding && ai.binding("util");
        } catch {
        }
      }(), Vs = nn && nn.isArrayBuffer, js = nn && nn.isDate, ta = nn && nn.isMap, na = nn && nn.isRegExp, ea = nn && nn.isSet, ra = nn && nn.isTypedArray;
      function Zt(_, S, C) {
        switch (C.length) {
          case 0:
            return _.call(S);
          case 1:
            return _.call(S, C[0]);
          case 2:
            return _.call(S, C[0], C[1]);
          case 3:
            return _.call(S, C[0], C[1], C[2]);
        }
        return _.apply(S, C);
      }
      function Nc(_, S, C, O) {
        for (var z = -1, et = _ == null ? 0 : _.length; ++z < et; ) {
          var bt = _[z];
          S(O, bt, C(bt), _);
        }
        return O;
      }
      function en(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length; ++C < O && S(_[C], C, _) !== !1; )
          ;
        return _;
      }
      function Bc(_, S) {
        for (var C = _ == null ? 0 : _.length; C-- && S(_[C], C, _) !== !1; )
          ;
        return _;
      }
      function ia(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length; ++C < O; )
          if (!S(_[C], C, _))
            return !1;
        return !0;
      }
      function On(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length, z = 0, et = []; ++C < O; ) {
          var bt = _[C];
          S(bt, C, _) && (et[z++] = bt);
        }
        return et;
      }
      function Ye(_, S) {
        var C = _ == null ? 0 : _.length;
        return !!C && ie(_, S, 0) > -1;
      }
      function oi(_, S, C) {
        for (var O = -1, z = _ == null ? 0 : _.length; ++O < z; )
          if (C(S, _[O]))
            return !0;
        return !1;
      }
      function gt(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length, z = Array(O); ++C < O; )
          z[C] = S(_[C], C, _);
        return z;
      }
      function Dn(_, S) {
        for (var C = -1, O = S.length, z = _.length; ++C < O; )
          _[z + C] = S[C];
        return _;
      }
      function ui(_, S, C, O) {
        var z = -1, et = _ == null ? 0 : _.length;
        for (O && et && (C = _[++z]); ++z < et; )
          C = S(C, _[z], z, _);
        return C;
      }
      function Wc(_, S, C, O) {
        var z = _ == null ? 0 : _.length;
        for (O && z && (C = _[--z]); z--; )
          C = S(C, _[z], z, _);
        return C;
      }
      function ci(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length; ++C < O; )
          if (S(_[C], C, _))
            return !0;
        return !1;
      }
      var Uc = li("length");
      function $c(_) {
        return _.split("");
      }
      function qc(_) {
        return _.match(Xu) || [];
      }
      function sa(_, S, C) {
        var O;
        return C(_, function(z, et, bt) {
          if (S(z, et, bt))
            return O = et, !1;
        }), O;
      }
      function Xe(_, S, C, O) {
        for (var z = _.length, et = C + (O ? 1 : -1); O ? et-- : ++et < z; )
          if (S(_[et], et, _))
            return et;
        return -1;
      }
      function ie(_, S, C) {
        return S === S ? tl(_, S, C) : Xe(_, aa, C);
      }
      function Gc(_, S, C, O) {
        for (var z = C - 1, et = _.length; ++z < et; )
          if (O(_[z], S))
            return z;
        return -1;
      }
      function aa(_) {
        return _ !== _;
      }
      function oa(_, S) {
        var C = _ == null ? 0 : _.length;
        return C ? hi(_, S) / C : bn;
      }
      function li(_) {
        return function(S) {
          return S == null ? r : S[_];
        };
      }
      function fi(_) {
        return function(S) {
          return _ == null ? r : _[S];
        };
      }
      function ua(_, S, C, O, z) {
        return z(_, function(et, bt, at) {
          C = O ? (O = !1, et) : S(C, et, bt, at);
        }), C;
      }
      function zc(_, S) {
        var C = _.length;
        for (_.sort(S); C--; )
          _[C] = _[C].value;
        return _;
      }
      function hi(_, S) {
        for (var C, O = -1, z = _.length; ++O < z; ) {
          var et = S(_[O]);
          et !== r && (C = C === r ? et : C + et);
        }
        return C;
      }
      function pi(_, S) {
        for (var C = -1, O = Array(_); ++C < _; )
          O[C] = S(C);
        return O;
      }
      function Hc(_, S) {
        return gt(S, function(C) {
          return [C, _[C]];
        });
      }
      function ca(_) {
        return _ && _.slice(0, pa(_) + 1).replace(jr, "");
      }
      function Jt(_) {
        return function(S) {
          return _(S);
        };
      }
      function gi(_, S) {
        return gt(S, function(C) {
          return _[C];
        });
      }
      function be(_, S) {
        return _.has(S);
      }
      function la(_, S) {
        for (var C = -1, O = _.length; ++C < O && ie(S, _[C], 0) > -1; )
          ;
        return C;
      }
      function fa(_, S) {
        for (var C = _.length; C-- && ie(S, _[C], 0) > -1; )
          ;
        return C;
      }
      function Kc(_, S) {
        for (var C = _.length, O = 0; C--; )
          _[C] === S && ++O;
        return O;
      }
      var Zc = fi(Rc), Jc = fi(Tc);
      function Yc(_) {
        return "\\" + Lc[_];
      }
      function Xc(_, S) {
        return _ == null ? r : _[S];
      }
      function se(_) {
        return Ac.test(_);
      }
      function Qc(_) {
        return Ic.test(_);
      }
      function Vc(_) {
        for (var S, C = []; !(S = _.next()).done; )
          C.push(S.value);
        return C;
      }
      function di(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O, z) {
          C[++S] = [z, O];
        }), C;
      }
      function ha(_, S) {
        return function(C) {
          return _(S(C));
        };
      }
      function Nn(_, S) {
        for (var C = -1, O = _.length, z = 0, et = []; ++C < O; ) {
          var bt = _[C];
          (bt === S || bt === I) && (_[C] = I, et[z++] = C);
        }
        return et;
      }
      function Qe(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O) {
          C[++S] = O;
        }), C;
      }
      function jc(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O) {
          C[++S] = [O, O];
        }), C;
      }
      function tl(_, S, C) {
        for (var O = C - 1, z = _.length; ++O < z; )
          if (_[O] === S)
            return O;
        return -1;
      }
      function nl(_, S, C) {
        for (var O = C + 1; O--; )
          if (_[O] === S)
            return O;
        return O;
      }
      function ae(_) {
        return se(_) ? rl(_) : Uc(_);
      }
      function hn(_) {
        return se(_) ? il(_) : $c(_);
      }
      function pa(_) {
        for (var S = _.length; S-- && Ku.test(_.charAt(S)); )
          ;
        return S;
      }
      var el = fi(Fc);
      function rl(_) {
        for (var S = ii.lastIndex = 0; ii.test(_); )
          ++S;
        return S;
      }
      function il(_) {
        return _.match(ii) || [];
      }
      function sl(_) {
        return _.match(xc) || [];
      }
      var al = function _(S) {
        S = S == null ? It : oe.defaults(It.Object(), S, oe.pick(It, Ec));
        var C = S.Array, O = S.Date, z = S.Error, et = S.Function, bt = S.Math, at = S.Object, _i = S.RegExp, ol = S.String, rn = S.TypeError, Ve = C.prototype, ul = et.prototype, ue = at.prototype, je = S["__core-js_shared__"], tr = ul.toString, st = ue.hasOwnProperty, cl = 0, ga = function() {
          var t = /[^.]+$/.exec(je && je.keys && je.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), nr = ue.toString, ll = tr.call(at), fl = It._, hl = _i(
          "^" + tr.call(st).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), er = Qs ? S.Buffer : r, Bn = S.Symbol, rr = S.Uint8Array, da = er ? er.allocUnsafe : r, ir = ha(at.getPrototypeOf, at), _a = at.create, va = ue.propertyIsEnumerable, sr = Ve.splice, ma = Bn ? Bn.isConcatSpreadable : r, xe = Bn ? Bn.iterator : r, Jn = Bn ? Bn.toStringTag : r, ar = function() {
          try {
            var t = jn(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), pl = S.clearTimeout !== It.clearTimeout && S.clearTimeout, gl = O && O.now !== It.Date.now && O.now, dl = S.setTimeout !== It.setTimeout && S.setTimeout, or = bt.ceil, ur = bt.floor, vi = at.getOwnPropertySymbols, _l = er ? er.isBuffer : r, wa = S.isFinite, vl = Ve.join, ml = ha(at.keys, at), xt = bt.max, Pt = bt.min, wl = O.now, yl = S.parseInt, ya = bt.random, Ml = Ve.reverse, mi = jn(S, "DataView"), Ae = jn(S, "Map"), wi = jn(S, "Promise"), ce = jn(S, "Set"), Ie = jn(S, "WeakMap"), Ee = jn(at, "create"), cr = Ie && new Ie(), le = {}, Cl = te(mi), Sl = te(Ae), bl = te(wi), xl = te(ce), Al = te(Ie), lr = Bn ? Bn.prototype : r, Pe = lr ? lr.valueOf : r, Ma = lr ? lr.toString : r;
        function u(t) {
          if (mt(t) && !H(t) && !(t instanceof j)) {
            if (t instanceof sn)
              return t;
            if (st.call(t, "__wrapped__"))
              return So(t);
          }
          return new sn(t);
        }
        var fe = /* @__PURE__ */ function() {
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
          interpolate: Rs,
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
        }, u.prototype = fr.prototype, u.prototype.constructor = u, sn.prototype = fe(fr.prototype), sn.prototype.constructor = sn;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function Il() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function El() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Pl() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = H(t), i = n < 0, o = e ? t.length : 0, c = qf(0, o, this.__views__), h = c.start, g = c.end, w = g - h, b = i ? g : h - 1, x = this.__iteratees__, E = x.length, L = 0, D = Pt(w, this.__takeCount__);
          if (!e || !i && o == w && D == w)
            return Ha(t, this.__actions__);
          var W = [];
          t:
            for (; w-- && L < D; ) {
              b += n;
              for (var X = -1, U = t[b]; ++X < E; ) {
                var V = x[X], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == Ge)
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
        j.prototype = fe(fr.prototype), j.prototype.constructor = j;
        function Yn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Rl() {
          this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
        }
        function Tl(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Fl(t) {
          var n = this.__data__;
          if (Ee) {
            var e = n[t];
            return e === y ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function Ll(t) {
          var n = this.__data__;
          return Ee ? n[t] !== r : st.call(n, t);
        }
        function kl(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Ee && n === r ? y : n, this;
        }
        Yn.prototype.clear = Rl, Yn.prototype.delete = Tl, Yn.prototype.get = Fl, Yn.prototype.has = Ll, Yn.prototype.set = kl;
        function xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Ol() {
          this.__data__ = [], this.size = 0;
        }
        function Dl(t) {
          var n = this.__data__, e = hr(n, t);
          if (e < 0)
            return !1;
          var i = n.length - 1;
          return e == i ? n.pop() : sr.call(n, e, 1), --this.size, !0;
        }
        function Nl(t) {
          var n = this.__data__, e = hr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Bl(t) {
          return hr(this.__data__, t) > -1;
        }
        function Wl(t, n) {
          var e = this.__data__, i = hr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        xn.prototype.clear = Ol, xn.prototype.delete = Dl, xn.prototype.get = Nl, xn.prototype.has = Bl, xn.prototype.set = Wl;
        function An(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Ul() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Ae || xn)(),
            string: new Yn()
          };
        }
        function $l(t) {
          var n = br(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function ql(t) {
          return br(this, t).get(t);
        }
        function Gl(t) {
          return br(this, t).has(t);
        }
        function zl(t, n) {
          var e = br(this, t), i = e.size;
          return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
        }
        An.prototype.clear = Ul, An.prototype.delete = $l, An.prototype.get = ql, An.prototype.has = Gl, An.prototype.set = zl;
        function Xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new An(); ++n < e; )
            this.add(t[n]);
        }
        function Hl(t) {
          return this.__data__.set(t, y), this;
        }
        function Kl(t) {
          return this.__data__.has(t);
        }
        Xn.prototype.add = Xn.prototype.push = Hl, Xn.prototype.has = Kl;
        function pn(t) {
          var n = this.__data__ = new xn(t);
          this.size = n.size;
        }
        function Zl() {
          this.__data__ = new xn(), this.size = 0;
        }
        function Jl(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function Yl(t) {
          return this.__data__.get(t);
        }
        function Xl(t) {
          return this.__data__.has(t);
        }
        function Ql(t, n) {
          var e = this.__data__;
          if (e instanceof xn) {
            var i = e.__data__;
            if (!Ae || i.length < l - 1)
              return i.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new An(i);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = Zl, pn.prototype.delete = Jl, pn.prototype.get = Yl, pn.prototype.has = Xl, pn.prototype.set = Ql;
        function Ca(t, n) {
          var e = H(t), i = !e && ne(t), o = !e && !i && Gn(t), c = !e && !i && !o && de(t), h = e || i || o || c, g = h ? pi(t.length, ol) : [], w = g.length;
          for (var b in t)
            (n || st.call(t, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            c && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
            Rn(b, w))) && g.push(b);
          return g;
        }
        function Sa(t) {
          var n = t.length;
          return n ? t[Ri(0, n - 1)] : r;
        }
        function Vl(t, n) {
          return xr($t(t), Qn(n, 0, t.length));
        }
        function jl(t) {
          return xr($t(t));
        }
        function yi(t, n, e) {
          (e !== r && !gn(t[n], e) || e === r && !(n in t)) && In(t, n, e);
        }
        function Re(t, n, e) {
          var i = t[n];
          (!(st.call(t, n) && gn(i, e)) || e === r && !(n in t)) && In(t, n, e);
        }
        function hr(t, n) {
          for (var e = t.length; e--; )
            if (gn(t[e][0], n))
              return e;
          return -1;
        }
        function tf(t, n, e, i) {
          return Wn(t, function(o, c, h) {
            n(i, o, e(o), h);
          }), i;
        }
        function ba(t, n) {
          return t && yn(n, At(n), t);
        }
        function nf(t, n) {
          return t && yn(n, Gt(n), t);
        }
        function In(t, n, e) {
          n == "__proto__" && ar ? ar(t, n, {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0
          }) : t[n] = e;
        }
        function Mi(t, n) {
          for (var e = -1, i = n.length, o = C(i), c = t == null; ++e < i; )
            o[e] = c ? r : ns(t, n[e]);
          return o;
        }
        function Qn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function an(t, n, e, i, o, c) {
          var h, g = n & m, w = n & R, b = n & F;
          if (e && (h = o ? e(t, i, o, c) : e(t)), h !== r)
            return h;
          if (!dt(t))
            return t;
          var x = H(t);
          if (x) {
            if (h = zf(t), !g)
              return $t(t, h);
          } else {
            var E = Rt(t), L = E == Wt || E == vn;
            if (Gn(t))
              return Ja(t, g);
            if (E == Ct || E == nt || L && !o) {
              if (h = w || L ? {} : po(t), !g)
                return w ? Lf(t, nf(h, t)) : Ff(t, ba(h, t));
            } else {
              if (!ut[E])
                return o ? t : {};
              h = Hf(t, E, g);
            }
          }
          c || (c = new pn());
          var D = c.get(t);
          if (D)
            return D;
          c.set(t, h), Go(t) ? t.forEach(function(U) {
            h.add(an(U, n, e, U, t, c));
          }) : $o(t) && t.forEach(function(U, V) {
            h.set(V, an(U, n, e, V, t, c));
          });
          var W = b ? w ? $i : Ui : w ? Gt : At, X = x ? r : W(t);
          return en(X || t, function(U, V) {
            X && (V = U, U = t[V]), Re(h, V, an(U, n, e, V, t, c));
          }), h;
        }
        function ef(t) {
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
            var o = e[i], c = n[o], h = t[o];
            if (h === r && !(o in t) || !c(h))
              return !1;
          }
          return !0;
        }
        function Aa(t, n, e) {
          if (typeof t != "function")
            throw new rn(d);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Te(t, n, e, i) {
          var o = -1, c = Ye, h = !0, g = t.length, w = [], b = n.length;
          if (!g)
            return w;
          e && (n = gt(n, Jt(e))), i ? (c = oi, h = !1) : n.length >= l && (c = be, h = !1, n = new Xn(n));
          t:
            for (; ++o < g; ) {
              var x = t[o], E = e == null ? x : e(x);
              if (x = i || x !== 0 ? x : 0, h && E === E) {
                for (var L = b; L--; )
                  if (n[L] === E)
                    continue t;
                w.push(x);
              } else c(n, E, i) || w.push(x);
            }
          return w;
        }
        var Wn = ja(wn), Ia = ja(Si, !0);
        function rf(t, n) {
          var e = !0;
          return Wn(t, function(i, o, c) {
            return e = !!n(i, o, c), e;
          }), e;
        }
        function pr(t, n, e) {
          for (var i = -1, o = t.length; ++i < o; ) {
            var c = t[i], h = n(c);
            if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
              var g = h, w = c;
          }
          return w;
        }
        function sf(t, n, e, i) {
          var o = t.length;
          for (e = Y(e), e < 0 && (e = -e > o ? 0 : o + e), i = i === r || i > o ? o : Y(i), i < 0 && (i += o), i = e > i ? 0 : Ho(i); e < i; )
            t[e++] = n;
          return t;
        }
        function Ea(t, n) {
          var e = [];
          return Wn(t, function(i, o, c) {
            n(i, o, c) && e.push(i);
          }), e;
        }
        function Et(t, n, e, i, o) {
          var c = -1, h = t.length;
          for (e || (e = Zf), o || (o = []); ++c < h; ) {
            var g = t[c];
            n > 0 && e(g) ? n > 1 ? Et(g, n - 1, e, i, o) : Dn(o, g) : i || (o[o.length] = g);
          }
          return o;
        }
        var Ci = to(), Pa = to(!0);
        function wn(t, n) {
          return t && Ci(t, n, At);
        }
        function Si(t, n) {
          return t && Pa(t, n, At);
        }
        function gr(t, n) {
          return On(n, function(e) {
            return Tn(t[e]);
          });
        }
        function Vn(t, n) {
          n = $n(n, t);
          for (var e = 0, i = n.length; t != null && e < i; )
            t = t[Mn(n[e++])];
          return e && e == i ? t : r;
        }
        function Ra(t, n, e) {
          var i = n(t);
          return H(t) ? i : Dn(i, e(t));
        }
        function kt(t) {
          return t == null ? t === r ? Lu : kn : Jn && Jn in at(t) ? $f(t) : th(t);
        }
        function bi(t, n) {
          return t > n;
        }
        function af(t, n) {
          return t != null && st.call(t, n);
        }
        function of(t, n) {
          return t != null && n in at(t);
        }
        function uf(t, n, e) {
          return t >= Pt(n, e) && t < xt(n, e);
        }
        function xi(t, n, e) {
          for (var i = e ? oi : Ye, o = t[0].length, c = t.length, h = c, g = C(c), w = 1 / 0, b = []; h--; ) {
            var x = t[h];
            h && n && (x = gt(x, Jt(n))), w = Pt(x.length, w), g[h] = !e && (n || o >= 120 && x.length >= 120) ? new Xn(h && x) : r;
          }
          x = t[0];
          var E = -1, L = g[0];
          t:
            for (; ++E < o && b.length < w; ) {
              var D = x[E], W = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? be(L, W) : i(b, W, e))) {
                for (h = c; --h; ) {
                  var X = g[h];
                  if (!(X ? be(X, W) : i(t[h], W, e)))
                    continue t;
                }
                L && L.push(W), b.push(D);
              }
            }
          return b;
        }
        function cf(t, n, e, i) {
          return wn(t, function(o, c, h) {
            n(i, e(o), c, h);
          }), i;
        }
        function Fe(t, n, e) {
          n = $n(n, t), t = mo(t, n);
          var i = t == null ? t : t[Mn(un(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Ta(t) {
          return mt(t) && kt(t) == nt;
        }
        function lf(t) {
          return mt(t) && kt(t) == Se;
        }
        function ff(t) {
          return mt(t) && kt(t) == Mt;
        }
        function Le(t, n, e, i, o) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : hf(t, n, e, i, Le, o);
        }
        function hf(t, n, e, i, o, c) {
          var h = H(t), g = H(n), w = h ? ht : Rt(t), b = g ? ht : Rt(n);
          w = w == nt ? Ct : w, b = b == nt ? Ct : b;
          var x = w == Ct, E = b == Ct, L = w == b;
          if (L && Gn(t)) {
            if (!Gn(n))
              return !1;
            h = !0, x = !1;
          }
          if (L && !x)
            return c || (c = new pn()), h || de(t) ? lo(t, n, e, i, o, c) : Wf(t, n, w, e, i, o, c);
          if (!(e & T)) {
            var D = x && st.call(t, "__wrapped__"), W = E && st.call(n, "__wrapped__");
            if (D || W) {
              var X = D ? t.value() : t, U = W ? n.value() : n;
              return c || (c = new pn()), o(X, U, e, i, c);
            }
          }
          return L ? (c || (c = new pn()), Uf(t, n, e, i, o, c)) : !1;
        }
        function pf(t) {
          return mt(t) && Rt(t) == vt;
        }
        function Ai(t, n, e, i) {
          var o = e.length, c = o, h = !i;
          if (t == null)
            return !c;
          for (t = at(t); o--; ) {
            var g = e[o];
            if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
              return !1;
          }
          for (; ++o < c; ) {
            g = e[o];
            var w = g[0], b = t[w], x = g[1];
            if (h && g[2]) {
              if (b === r && !(w in t))
                return !1;
            } else {
              var E = new pn();
              if (i)
                var L = i(b, x, w, t, n, E);
              if (!(L === r ? Le(x, b, T | P, i, E) : L))
                return !1;
            }
          }
          return !0;
        }
        function Fa(t) {
          if (!dt(t) || Yf(t))
            return !1;
          var n = Tn(t) ? hl : ec;
          return n.test(te(t));
        }
        function gf(t) {
          return mt(t) && kt(t) == tn;
        }
        function df(t) {
          return mt(t) && Rt(t) == pt;
        }
        function _f(t) {
          return mt(t) && Tr(t.length) && !!lt[kt(t)];
        }
        function La(t) {
          return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? H(t) ? Da(t[0], t[1]) : Oa(t) : eu(t);
        }
        function Ii(t) {
          if (!De(t))
            return ml(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function vf(t) {
          if (!dt(t))
            return jf(t);
          var n = De(t), e = [];
          for (var i in t)
            i == "constructor" && (n || !st.call(t, i)) || e.push(i);
          return e;
        }
        function Ei(t, n) {
          return t < n;
        }
        function ka(t, n) {
          var e = -1, i = qt(t) ? C(t.length) : [];
          return Wn(t, function(o, c, h) {
            i[++e] = n(o, c, h);
          }), i;
        }
        function Oa(t) {
          var n = Gi(t);
          return n.length == 1 && n[0][2] ? _o(n[0][0], n[0][1]) : function(e) {
            return e === t || Ai(e, t, n);
          };
        }
        function Da(t, n) {
          return Hi(t) && go(n) ? _o(Mn(t), n) : function(e) {
            var i = ns(e, t);
            return i === r && i === n ? es(e, t) : Le(n, i, T | P);
          };
        }
        function dr(t, n, e, i, o) {
          t !== n && Ci(n, function(c, h) {
            if (o || (o = new pn()), dt(c))
              mf(t, n, h, e, dr, i, o);
            else {
              var g = i ? i(Zi(t, h), c, h + "", t, n, o) : r;
              g === r && (g = c), yi(t, h, g);
            }
          }, Gt);
        }
        function mf(t, n, e, i, o, c, h) {
          var g = Zi(t, e), w = Zi(n, e), b = h.get(w);
          if (b) {
            yi(t, e, b);
            return;
          }
          var x = c ? c(g, w, e + "", t, n, h) : r, E = x === r;
          if (E) {
            var L = H(w), D = !L && Gn(w), W = !L && !D && de(w);
            x = w, L || D || W ? H(g) ? x = g : wt(g) ? x = $t(g) : D ? (E = !1, x = Ja(w, !0)) : W ? (E = !1, x = Ya(w, !0)) : x = [] : Be(w) || ne(w) ? (x = g, ne(g) ? x = Ko(g) : (!dt(g) || Tn(g)) && (x = po(w))) : E = !1;
          }
          E && (h.set(w, x), o(x, w, i, c, h), h.delete(w)), yi(t, e, x);
        }
        function Na(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, Rn(n, e) ? t[n] : r;
        }
        function Ba(t, n, e) {
          n.length ? n = gt(n, function(c) {
            return H(c) ? function(h) {
              return Vn(h, c.length === 1 ? c[0] : c);
            } : c;
          }) : n = [zt];
          var i = -1;
          n = gt(n, Jt(B()));
          var o = ka(t, function(c, h, g) {
            var w = gt(n, function(b) {
              return b(c);
            });
            return { criteria: w, index: ++i, value: c };
          });
          return zc(o, function(c, h) {
            return Tf(c, h, e);
          });
        }
        function wf(t, n) {
          return Wa(t, n, function(e, i) {
            return es(t, i);
          });
        }
        function Wa(t, n, e) {
          for (var i = -1, o = n.length, c = {}; ++i < o; ) {
            var h = n[i], g = Vn(t, h);
            e(g, h) && ke(c, $n(h, t), g);
          }
          return c;
        }
        function yf(t) {
          return function(n) {
            return Vn(n, t);
          };
        }
        function Pi(t, n, e, i) {
          var o = i ? Gc : ie, c = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = gt(t, Jt(e))); ++c < h; )
            for (var w = 0, b = n[c], x = e ? e(b) : b; (w = o(g, x, w, i)) > -1; )
              g !== t && sr.call(g, w, 1), sr.call(t, w, 1);
          return t;
        }
        function Ua(t, n) {
          for (var e = t ? n.length : 0, i = e - 1; e--; ) {
            var o = n[e];
            if (e == i || o !== c) {
              var c = o;
              Rn(o) ? sr.call(t, o, 1) : Li(t, o);
            }
          }
          return t;
        }
        function Ri(t, n) {
          return t + ur(ya() * (n - t + 1));
        }
        function Mf(t, n, e, i) {
          for (var o = -1, c = xt(or((n - t) / (e || 1)), 0), h = C(c); c--; )
            h[i ? c : ++o] = t, t += e;
          return h;
        }
        function Ti(t, n) {
          var e = "";
          if (!t || n < 1 || n > _n)
            return e;
          do
            n % 2 && (e += t), n = ur(n / 2), n && (t += t);
          while (n);
          return e;
        }
        function Q(t, n) {
          return Ji(vo(t, n, zt), t + "");
        }
        function Cf(t) {
          return Sa(_e(t));
        }
        function Sf(t, n) {
          var e = _e(t);
          return xr(e, Qn(n, 0, e.length));
        }
        function ke(t, n, e, i) {
          if (!dt(t))
            return t;
          n = $n(n, t);
          for (var o = -1, c = n.length, h = c - 1, g = t; g != null && ++o < c; ) {
            var w = Mn(n[o]), b = e;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return t;
            if (o != h) {
              var x = g[w];
              b = i ? i(x, w, g) : r, b === r && (b = dt(x) ? x : Rn(n[o + 1]) ? [] : {});
            }
            Re(g, w, b), g = g[w];
          }
          return t;
        }
        var $a = cr ? function(t, n) {
          return cr.set(t, n), t;
        } : zt, bf = ar ? function(t, n) {
          return ar(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: is(n),
            writable: !0
          });
        } : zt;
        function xf(t) {
          return xr(_e(t));
        }
        function on(t, n, e) {
          var i = -1, o = t.length;
          n < 0 && (n = -n > o ? 0 : o + n), e = e > o ? o : e, e < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var c = C(o); ++i < o; )
            c[i] = t[i + n];
          return c;
        }
        function Af(t, n) {
          var e;
          return Wn(t, function(i, o, c) {
            return e = n(i, o, c), !e;
          }), !!e;
        }
        function _r(t, n, e) {
          var i = 0, o = t == null ? i : t.length;
          if (typeof n == "number" && n === n && o <= G) {
            for (; i < o; ) {
              var c = i + o >>> 1, h = t[c];
              h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = c + 1 : o = c;
            }
            return o;
          }
          return Fi(t, n, zt, e);
        }
        function Fi(t, n, e, i) {
          var o = 0, c = t == null ? 0 : t.length;
          if (c === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, w = Xt(n), b = n === r; o < c; ) {
            var x = ur((o + c) / 2), E = e(t[x]), L = E !== r, D = E === null, W = E === E, X = Xt(E);
            if (h)
              var U = i || W;
            else b ? U = W && (i || L) : g ? U = W && L && (i || !D) : w ? U = W && L && !D && (i || !X) : D || X ? U = !1 : U = i ? E <= n : E < n;
            U ? o = x + 1 : c = x;
          }
          return Pt(c, $);
        }
        function qa(t, n) {
          for (var e = -1, i = t.length, o = 0, c = []; ++e < i; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !gn(g, w)) {
              var w = g;
              c[o++] = h === 0 ? 0 : h;
            }
          }
          return c;
        }
        function Ga(t) {
          return typeof t == "number" ? t : Xt(t) ? bn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (H(t))
            return gt(t, Yt) + "";
          if (Xt(t))
            return Ma ? Ma.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -Sn ? "-0" : n;
        }
        function Un(t, n, e) {
          var i = -1, o = Ye, c = t.length, h = !0, g = [], w = g;
          if (e)
            h = !1, o = oi;
          else if (c >= l) {
            var b = n ? null : Nf(t);
            if (b)
              return Qe(b);
            h = !1, o = be, w = new Xn();
          } else
            w = n ? [] : g;
          t:
            for (; ++i < c; ) {
              var x = t[i], E = n ? n(x) : x;
              if (x = e || x !== 0 ? x : 0, h && E === E) {
                for (var L = w.length; L--; )
                  if (w[L] === E)
                    continue t;
                n && w.push(E), g.push(x);
              } else o(w, E, e) || (w !== g && w.push(E), g.push(x));
            }
          return g;
        }
        function Li(t, n) {
          return n = $n(n, t), t = mo(t, n), t == null || delete t[Mn(un(n))];
        }
        function za(t, n, e, i) {
          return ke(t, n, e(Vn(t, n)), i);
        }
        function vr(t, n, e, i) {
          for (var o = t.length, c = i ? o : -1; (i ? c-- : ++c < o) && n(t[c], c, t); )
            ;
          return e ? on(t, i ? 0 : c, i ? c + 1 : o) : on(t, i ? c + 1 : 0, i ? o : c);
        }
        function Ha(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), ui(n, function(i, o) {
            return o.func.apply(o.thisArg, Dn([i], o.args));
          }, e);
        }
        function ki(t, n, e) {
          var i = t.length;
          if (i < 2)
            return i ? Un(t[0]) : [];
          for (var o = -1, c = C(i); ++o < i; )
            for (var h = t[o], g = -1; ++g < i; )
              g != o && (c[o] = Te(c[o] || h, t[g], n, e));
          return Un(Et(c, 1), n, e);
        }
        function Ka(t, n, e) {
          for (var i = -1, o = t.length, c = n.length, h = {}; ++i < o; ) {
            var g = i < c ? n[i] : r;
            e(h, t[i], g);
          }
          return h;
        }
        function Oi(t) {
          return wt(t) ? t : [];
        }
        function Di(t) {
          return typeof t == "function" ? t : zt;
        }
        function $n(t, n) {
          return H(t) ? t : Hi(t, n) ? [t] : Co(rt(t));
        }
        var If = Q;
        function qn(t, n, e) {
          var i = t.length;
          return e = e === r ? i : e, !n && e >= i ? t : on(t, n, e);
        }
        var Za = pl || function(t) {
          return It.clearTimeout(t);
        };
        function Ja(t, n) {
          if (n)
            return t.slice();
          var e = t.length, i = da ? da(e) : new t.constructor(e);
          return t.copy(i), i;
        }
        function Ni(t) {
          var n = new t.constructor(t.byteLength);
          return new rr(n).set(new rr(t)), n;
        }
        function Ef(t, n) {
          var e = n ? Ni(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Pf(t) {
          var n = new t.constructor(t.source, Ts.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Rf(t) {
          return Pe ? at(Pe.call(t)) : {};
        }
        function Ya(t, n) {
          var e = n ? Ni(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Xa(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, o = t === t, c = Xt(t), h = n !== r, g = n === null, w = n === n, b = Xt(n);
            if (!g && !b && !c && t > n || c && h && w && !g && !b || i && h && w || !e && w || !o)
              return 1;
            if (!i && !c && !b && t < n || b && e && o && !i && !c || g && e && o || !h && o || !w)
              return -1;
          }
          return 0;
        }
        function Tf(t, n, e) {
          for (var i = -1, o = t.criteria, c = n.criteria, h = o.length, g = e.length; ++i < h; ) {
            var w = Xa(o[i], c[i]);
            if (w) {
              if (i >= g)
                return w;
              var b = e[i];
              return w * (b == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Qa(t, n, e, i) {
          for (var o = -1, c = t.length, h = e.length, g = -1, w = n.length, b = xt(c - h, 0), x = C(w + b), E = !i; ++g < w; )
            x[g] = n[g];
          for (; ++o < h; )
            (E || o < c) && (x[e[o]] = t[o]);
          for (; b--; )
            x[g++] = t[o++];
          return x;
        }
        function Va(t, n, e, i) {
          for (var o = -1, c = t.length, h = -1, g = e.length, w = -1, b = n.length, x = xt(c - g, 0), E = C(x + b), L = !i; ++o < x; )
            E[o] = t[o];
          for (var D = o; ++w < b; )
            E[D + w] = n[w];
          for (; ++h < g; )
            (L || o < c) && (E[D + e[h]] = t[o++]);
          return E;
        }
        function $t(t, n) {
          var e = -1, i = t.length;
          for (n || (n = C(i)); ++e < i; )
            n[e] = t[e];
          return n;
        }
        function yn(t, n, e, i) {
          var o = !e;
          e || (e = {});
          for (var c = -1, h = n.length; ++c < h; ) {
            var g = n[c], w = i ? i(e[g], t[g], g, e, t) : r;
            w === r && (w = t[g]), o ? In(e, g, w) : Re(e, g, w);
          }
          return e;
        }
        function Ff(t, n) {
          return yn(t, zi(t), n);
        }
        function Lf(t, n) {
          return yn(t, fo(t), n);
        }
        function mr(t, n) {
          return function(e, i) {
            var o = H(e) ? Nc : tf, c = n ? n() : {};
            return o(e, t, B(i, 2), c);
          };
        }
        function he(t) {
          return Q(function(n, e) {
            var i = -1, o = e.length, c = o > 1 ? e[o - 1] : r, h = o > 2 ? e[2] : r;
            for (c = t.length > 3 && typeof c == "function" ? (o--, c) : r, h && Ot(e[0], e[1], h) && (c = o < 3 ? r : c, o = 1), n = at(n); ++i < o; ) {
              var g = e[i];
              g && t(n, g, i, c);
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
            for (var o = e.length, c = n ? o : -1, h = at(e); (n ? c-- : ++c < o) && i(h[c], c, h) !== !1; )
              ;
            return e;
          };
        }
        function to(t) {
          return function(n, e, i) {
            for (var o = -1, c = at(n), h = i(n), g = h.length; g--; ) {
              var w = h[t ? g : ++o];
              if (e(c[w], w, c) === !1)
                break;
            }
            return n;
          };
        }
        function kf(t, n, e) {
          var i = n & N, o = Oe(t);
          function c() {
            var h = this && this !== It && this instanceof c ? o : t;
            return h.apply(i ? e : this, arguments);
          }
          return c;
        }
        function no(t) {
          return function(n) {
            n = rt(n);
            var e = se(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), o = e ? qn(e, 1).join("") : n.slice(1);
            return i[t]() + o;
          };
        }
        function pe(t) {
          return function(n) {
            return ui(tu(jo(n).replace(Sc, "")), t, "");
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
            var e = fe(t.prototype), i = t.apply(e, n);
            return dt(i) ? i : e;
          };
        }
        function Of(t, n, e) {
          var i = Oe(t);
          function o() {
            for (var c = arguments.length, h = C(c), g = c, w = ge(o); g--; )
              h[g] = arguments[g];
            var b = c < 3 && h[0] !== w && h[c - 1] !== w ? [] : Nn(h, w);
            if (c -= b.length, c < e)
              return ao(
                t,
                n,
                wr,
                o.placeholder,
                r,
                h,
                b,
                r,
                r,
                e - c
              );
            var x = this && this !== It && this instanceof o ? i : t;
            return Zt(x, this, h);
          }
          return o;
        }
        function eo(t) {
          return function(n, e, i) {
            var o = at(n);
            if (!qt(n)) {
              var c = B(e, 3);
              n = At(n), e = function(g) {
                return c(o[g], g, o);
              };
            }
            var h = t(n, e, i);
            return h > -1 ? o[c ? n[h] : h] : r;
          };
        }
        function ro(t) {
          return Pn(function(n) {
            var e = n.length, i = e, o = sn.prototype.thru;
            for (t && n.reverse(); i--; ) {
              var c = n[i];
              if (typeof c != "function")
                throw new rn(d);
              if (o && !h && Sr(c) == "wrapper")
                var h = new sn([], !0);
            }
            for (i = h ? i : e; ++i < e; ) {
              c = n[i];
              var g = Sr(c), w = g == "wrapper" ? qi(c) : r;
              w && Ki(w[0]) && w[1] == (St | J | _t | jt) && !w[4].length && w[9] == 1 ? h = h[Sr(w[0])].apply(h, w[3]) : h = c.length == 1 && Ki(c) ? h[g]() : h.thru(c);
            }
            return function() {
              var b = arguments, x = b[0];
              if (h && b.length == 1 && H(x))
                return h.plant(x).value();
              for (var E = 0, L = e ? n[E].apply(this, b) : x; ++E < e; )
                L = n[E].call(this, L);
              return L;
            };
          });
        }
        function wr(t, n, e, i, o, c, h, g, w, b) {
          var x = n & St, E = n & N, L = n & q, D = n & (J | it), W = n & Ht, X = L ? r : Oe(t);
          function U() {
            for (var V = arguments.length, tt = C(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = ge(U), Vt = Kc(tt, Dt);
            if (i && (tt = Qa(tt, i, o, D)), c && (tt = Va(tt, c, h, D)), V -= Vt, D && V < b) {
              var yt = Nn(tt, Dt);
              return ao(
                t,
                n,
                wr,
                U.placeholder,
                e,
                tt,
                yt,
                g,
                w,
                b - V
              );
            }
            var dn = E ? e : this, Ln = L ? dn[t] : t;
            return V = tt.length, g ? tt = nh(tt, g) : W && V > 1 && tt.reverse(), x && w < V && (tt.length = w), this && this !== It && this instanceof U && (Ln = X || Oe(Ln)), Ln.apply(dn, tt);
          }
          return U;
        }
        function io(t, n) {
          return function(e, i) {
            return cf(e, t, n(i), {});
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
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Ga(e), i = Ga(i)), o = t(e, i);
            }
            return o;
          };
        }
        function Bi(t) {
          return Pn(function(n) {
            return n = gt(n, Jt(B())), Q(function(e) {
              var i = this;
              return t(n, function(o) {
                return Zt(o, i, e);
              });
            });
          });
        }
        function Mr(t, n) {
          n = n === r ? " " : Yt(n);
          var e = n.length;
          if (e < 2)
            return e ? Ti(n, t) : n;
          var i = Ti(n, or(t / ae(n)));
          return se(n) ? qn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function Df(t, n, e, i) {
          var o = n & N, c = Oe(t);
          function h() {
            for (var g = -1, w = arguments.length, b = -1, x = i.length, E = C(x + w), L = this && this !== It && this instanceof h ? c : t; ++b < x; )
              E[b] = i[b];
            for (; w--; )
              E[b++] = arguments[++g];
            return Zt(L, o ? e : this, E);
          }
          return h;
        }
        function so(t) {
          return function(n, e, i) {
            return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), Mf(n, e, i, t);
          };
        }
        function Cr(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = cn(n), e = cn(e)), t(n, e);
          };
        }
        function ao(t, n, e, i, o, c, h, g, w, b) {
          var x = n & J, E = x ? h : r, L = x ? r : h, D = x ? c : r, W = x ? r : c;
          n |= x ? _t : Bt, n &= ~(x ? Bt : _t), n & Z || (n &= ~(N | q));
          var X = [
            t,
            n,
            o,
            D,
            E,
            W,
            L,
            g,
            w,
            b
          ], U = e.apply(r, X);
          return Ki(t) && wo(U, X), U.placeholder = i, yo(U, t, n);
        }
        function Wi(t) {
          var n = bt[t];
          return function(e, i) {
            if (e = cn(e), i = i == null ? 0 : Pt(Y(i), 292), i && wa(e)) {
              var o = (rt(e) + "e").split("e"), c = n(o[0] + "e" + (+o[1] + i));
              return o = (rt(c) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
            }
            return n(e);
          };
        }
        var Nf = ce && 1 / Qe(new ce([, -0]))[1] == Sn ? function(t) {
          return new ce(t);
        } : os;
        function oo(t) {
          return function(n) {
            var e = Rt(n);
            return e == vt ? di(n) : e == pt ? jc(n) : Hc(n, t(n));
          };
        }
        function En(t, n, e, i, o, c, h, g) {
          var w = n & q;
          if (!w && typeof t != "function")
            throw new rn(d);
          var b = i ? i.length : 0;
          if (b || (n &= ~(_t | Bt), i = o = r), h = h === r ? h : xt(Y(h), 0), g = g === r ? g : Y(g), b -= o ? o.length : 0, n & Bt) {
            var x = i, E = o;
            i = o = r;
          }
          var L = w ? r : qi(t), D = [
            t,
            n,
            e,
            i,
            o,
            x,
            E,
            c,
            h,
            g
          ];
          if (L && Vf(D, L), t = D[0], n = D[1], e = D[2], i = D[3], o = D[4], g = D[9] = D[9] === r ? w ? 0 : t.length : xt(D[9] - b, 0), !g && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var W = kf(t, n, e);
          else n == J || n == it ? W = Of(t, n, g) : (n == _t || n == (N | _t)) && !o.length ? W = Df(t, n, e, i) : W = wr.apply(r, D);
          var X = L ? $a : wo;
          return yo(X(W, D), t, n);
        }
        function uo(t, n, e, i) {
          return t === r || gn(t, ue[e]) && !st.call(i, e) ? n : t;
        }
        function co(t, n, e, i, o, c) {
          return dt(t) && dt(n) && (c.set(n, t), dr(t, n, r, co, c), c.delete(n)), t;
        }
        function Bf(t) {
          return Be(t) ? r : t;
        }
        function lo(t, n, e, i, o, c) {
          var h = e & T, g = t.length, w = n.length;
          if (g != w && !(h && w > g))
            return !1;
          var b = c.get(t), x = c.get(n);
          if (b && x)
            return b == n && x == t;
          var E = -1, L = !0, D = e & P ? new Xn() : r;
          for (c.set(t, n), c.set(n, t); ++E < g; ) {
            var W = t[E], X = n[E];
            if (i)
              var U = h ? i(X, W, E, n, t, c) : i(W, X, E, t, n, c);
            if (U !== r) {
              if (U)
                continue;
              L = !1;
              break;
            }
            if (D) {
              if (!ci(n, function(V, tt) {
                if (!be(D, tt) && (W === V || o(W, V, e, i, c)))
                  return D.push(tt);
              })) {
                L = !1;
                break;
              }
            } else if (!(W === X || o(W, X, e, i, c))) {
              L = !1;
              break;
            }
          }
          return c.delete(t), c.delete(n), L;
        }
        function Wf(t, n, e, i, o, c, h) {
          switch (e) {
            case ee:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case Se:
              return !(t.byteLength != n.byteLength || !c(new rr(t), new rr(n)));
            case ct:
            case Mt:
            case Lt:
              return gn(+t, +n);
            case Ft:
              return t.name == n.name && t.message == n.message;
            case tn:
            case mn:
              return t == n + "";
            case vt:
              var g = di;
            case pt:
              var w = i & T;
              if (g || (g = Qe), t.size != n.size && !w)
                return !1;
              var b = h.get(t);
              if (b)
                return b == n;
              i |= P, h.set(t, n);
              var x = lo(g(t), g(n), i, o, c, h);
              return h.delete(t), x;
            case He:
              if (Pe)
                return Pe.call(t) == Pe.call(n);
          }
          return !1;
        }
        function Uf(t, n, e, i, o, c) {
          var h = e & T, g = Ui(t), w = g.length, b = Ui(n), x = b.length;
          if (w != x && !h)
            return !1;
          for (var E = w; E--; ) {
            var L = g[E];
            if (!(h ? L in n : st.call(n, L)))
              return !1;
          }
          var D = c.get(t), W = c.get(n);
          if (D && W)
            return D == n && W == t;
          var X = !0;
          c.set(t, n), c.set(n, t);
          for (var U = h; ++E < w; ) {
            L = g[E];
            var V = t[L], tt = n[L];
            if (i)
              var Qt = h ? i(tt, V, L, n, t, c) : i(V, tt, L, t, n, c);
            if (!(Qt === r ? V === tt || o(V, tt, e, i, c) : Qt)) {
              X = !1;
              break;
            }
            U || (U = L == "constructor");
          }
          if (X && !U) {
            var Dt = t.constructor, Vt = n.constructor;
            Dt != Vt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Vt == "function" && Vt instanceof Vt) && (X = !1);
          }
          return c.delete(t), c.delete(n), X;
        }
        function Pn(t) {
          return Ji(vo(t, r, Ao), t + "");
        }
        function Ui(t) {
          return Ra(t, At, zi);
        }
        function $i(t) {
          return Ra(t, Gt, fo);
        }
        var qi = cr ? function(t) {
          return cr.get(t);
        } : os;
        function Sr(t) {
          for (var n = t.name + "", e = le[n], i = st.call(le, n) ? e.length : 0; i--; ) {
            var o = e[i], c = o.func;
            if (c == null || c == t)
              return o.name;
          }
          return n;
        }
        function ge(t) {
          var n = st.call(u, "placeholder") ? u : t;
          return n.placeholder;
        }
        function B() {
          var t = u.iteratee || ss;
          return t = t === ss ? La : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function br(t, n) {
          var e = t.__data__;
          return Jf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function Gi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var i = n[e], o = t[i];
            n[e] = [i, o, go(o)];
          }
          return n;
        }
        function jn(t, n) {
          var e = Xc(t, n);
          return Fa(e) ? e : r;
        }
        function $f(t) {
          var n = st.call(t, Jn), e = t[Jn];
          try {
            t[Jn] = r;
            var i = !0;
          } catch {
          }
          var o = nr.call(t);
          return i && (n ? t[Jn] = e : delete t[Jn]), o;
        }
        var zi = vi ? function(t) {
          return t == null ? [] : (t = at(t), On(vi(t), function(n) {
            return va.call(t, n);
          }));
        } : us, fo = vi ? function(t) {
          for (var n = []; t; )
            Dn(n, zi(t)), t = ir(t);
          return n;
        } : us, Rt = kt;
        (mi && Rt(new mi(new ArrayBuffer(1))) != ee || Ae && Rt(new Ae()) != vt || wi && Rt(wi.resolve()) != Ut || ce && Rt(new ce()) != pt || Ie && Rt(new Ie()) != Ce) && (Rt = function(t) {
          var n = kt(t), e = n == Ct ? t.constructor : r, i = e ? te(e) : "";
          if (i)
            switch (i) {
              case Cl:
                return ee;
              case Sl:
                return vt;
              case bl:
                return Ut;
              case xl:
                return pt;
              case Al:
                return Ce;
            }
          return n;
        });
        function qf(t, n, e) {
          for (var i = -1, o = e.length; ++i < o; ) {
            var c = e[i], h = c.size;
            switch (c.type) {
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
                t = xt(t, n - h);
                break;
            }
          }
          return { start: t, end: n };
        }
        function Gf(t) {
          var n = t.match(Ju);
          return n ? n[1].split(Yu) : [];
        }
        function ho(t, n, e) {
          n = $n(n, t);
          for (var i = -1, o = n.length, c = !1; ++i < o; ) {
            var h = Mn(n[i]);
            if (!(c = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return c || ++i != o ? c : (o = t == null ? 0 : t.length, !!o && Tr(o) && Rn(h, o) && (H(t) || ne(t)));
        }
        function zf(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function po(t) {
          return typeof t.constructor == "function" && !De(t) ? fe(ir(t)) : {};
        }
        function Hf(t, n, e) {
          var i = t.constructor;
          switch (n) {
            case Se:
              return Ni(t);
            case ct:
            case Mt:
              return new i(+t);
            case ee:
              return Ef(t, e);
            case Gr:
            case zr:
            case Hr:
            case Kr:
            case Zr:
            case Jr:
            case Yr:
            case Xr:
            case Qr:
              return Ya(t, e);
            case vt:
              return new i();
            case Lt:
            case mn:
              return new i(t);
            case tn:
              return Pf(t);
            case pt:
              return new i();
            case He:
              return Rf(t);
          }
        }
        function Kf(t, n) {
          var e = n.length;
          if (!e)
            return t;
          var i = e - 1;
          return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Zu, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Zf(t) {
          return H(t) || ne(t) || !!(ma && t && t[ma]);
        }
        function Rn(t, n) {
          var e = typeof t;
          return n = n ?? _n, !!n && (e == "number" || e != "symbol" && ic.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Ot(t, n, e) {
          if (!dt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && Rn(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
        }
        function Hi(t, n) {
          if (H(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Gu.test(t) || !qu.test(t) || n != null && t in at(n);
        }
        function Jf(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Ki(t) {
          var n = Sr(t), e = u[n];
          if (typeof e != "function" || !(n in j.prototype))
            return !1;
          if (t === e)
            return !0;
          var i = qi(e);
          return !!i && t === i[0];
        }
        function Yf(t) {
          return !!ga && ga in t;
        }
        var Xf = je ? Tn : cs;
        function De(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || ue;
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
        function Qf(t) {
          var n = Pr(t, function(i) {
            return e.size === M && e.clear(), i;
          }), e = n.cache;
          return n;
        }
        function Vf(t, n) {
          var e = t[1], i = n[1], o = e | i, c = o < (N | q | St), h = i == St && e == J || i == St && e == jt && t[7].length <= n[8] || i == (St | jt) && n[7].length <= n[8] && e == J;
          if (!(c || h))
            return t;
          i & N && (t[2] = n[2], o |= e & N ? 0 : Z);
          var g = n[3];
          if (g) {
            var w = t[3];
            t[3] = w ? Qa(w, g, n[4]) : g, t[4] = w ? Nn(t[3], I) : n[4];
          }
          return g = n[5], g && (w = t[5], t[5] = w ? Va(w, g, n[6]) : g, t[6] = w ? Nn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), i & St && (t[8] = t[8] == null ? n[8] : Pt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = o, t;
        }
        function jf(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function th(t) {
          return nr.call(t);
        }
        function vo(t, n, e) {
          return n = xt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, o = -1, c = xt(i.length - n, 0), h = C(c); ++o < c; )
              h[o] = i[n + o];
            o = -1;
            for (var g = C(n + 1); ++o < n; )
              g[o] = i[o];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function mo(t, n) {
          return n.length < 2 ? t : Vn(t, on(n, 0, -1));
        }
        function nh(t, n) {
          for (var e = t.length, i = Pt(n.length, e), o = $t(t); i--; ) {
            var c = n[i];
            t[i] = Rn(c, e) ? o[c] : r;
          }
          return t;
        }
        function Zi(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var wo = Mo($a), Ne = dl || function(t, n) {
          return It.setTimeout(t, n);
        }, Ji = Mo(bf);
        function yo(t, n, e) {
          var i = n + "";
          return Ji(t, Kf(i, eh(Gf(i), e)));
        }
        function Mo(t) {
          var n = 0, e = 0;
          return function() {
            var i = wl(), o = $r - (i - e);
            if (e = i, o > 0) {
              if (++n >= qe)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function xr(t, n) {
          var e = -1, i = t.length, o = i - 1;
          for (n = n === r ? i : n; ++e < n; ) {
            var c = Ri(e, o), h = t[c];
            t[c] = t[e], t[e] = h;
          }
          return t.length = n, t;
        }
        var Co = Qf(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(zu, function(e, i, o, c) {
            n.push(o ? c.replace(Vu, "$1") : i || e);
          }), n;
        });
        function Mn(t) {
          if (typeof t == "string" || Xt(t))
            return t;
          var n = t + "";
          return n == "0" && 1 / t == -Sn ? "-0" : n;
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
        function eh(t, n) {
          return en(ft, function(e) {
            var i = "_." + e[0];
            n & e[1] && !Ye(t, i) && t.push(i);
          }), t.sort();
        }
        function So(t) {
          if (t instanceof j)
            return t.clone();
          var n = new sn(t.__wrapped__, t.__chain__);
          return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function rh(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = xt(Y(n), 0);
          var i = t == null ? 0 : t.length;
          if (!i || n < 1)
            return [];
          for (var o = 0, c = 0, h = C(or(i / n)); o < i; )
            h[c++] = on(t, o, o += n);
          return h;
        }
        function ih(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = 0, o = []; ++n < e; ) {
            var c = t[n];
            c && (o[i++] = c);
          }
          return o;
        }
        function sh() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = C(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Dn(H(e) ? $t(e) : [e], Et(n, 1));
        }
        var ah = Q(function(t, n) {
          return wt(t) ? Te(t, Et(n, 1, wt, !0)) : [];
        }), oh = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Et(n, 1, wt, !0), B(e, 2)) : [];
        }), uh = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Et(n, 1, wt, !0), r, e) : [];
        });
        function ch(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), on(t, n < 0 ? 0 : n, i)) : [];
        }
        function lh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function fh(t, n) {
          return t && t.length ? vr(t, B(n, 3), !0, !0) : [];
        }
        function hh(t, n) {
          return t && t.length ? vr(t, B(n, 3), !0) : [];
        }
        function ph(t, n, e, i) {
          var o = t == null ? 0 : t.length;
          return o ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = o), sf(t, n, e, i)) : [];
        }
        function bo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = xt(i + o, 0)), Xe(t, B(n, 3), o);
        }
        function xo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i - 1;
          return e !== r && (o = Y(e), o = e < 0 ? xt(i + o, 0) : Pt(o, i - 1)), Xe(t, B(n, 3), o, !0);
        }
        function Ao(t) {
          var n = t == null ? 0 : t.length;
          return n ? Et(t, 1) : [];
        }
        function gh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Et(t, Sn) : [];
        }
        function dh(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : Y(n), Et(t, n)) : [];
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
          return o < 0 && (o = xt(i + o, 0)), ie(t, n, o);
        }
        function mh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 0, -1) : [];
        }
        var wh = Q(function(t) {
          var n = gt(t, Oi);
          return n.length && n[0] === t[0] ? xi(n) : [];
        }), yh = Q(function(t) {
          var n = un(t), e = gt(t, Oi);
          return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? xi(e, B(n, 2)) : [];
        }), Mh = Q(function(t) {
          var n = un(t), e = gt(t, Oi);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? xi(e, r, n) : [];
        });
        function Ch(t, n) {
          return t == null ? "" : vl.call(t, n);
        }
        function un(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function Sh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i;
          return e !== r && (o = Y(e), o = o < 0 ? xt(i + o, 0) : Pt(o, i - 1)), n === n ? nl(t, n, o) : Xe(t, aa, o, !0);
        }
        function bh(t, n) {
          return t && t.length ? Na(t, Y(n)) : r;
        }
        var xh = Q(Eo);
        function Eo(t, n) {
          return t && t.length && n && n.length ? Pi(t, n) : t;
        }
        function Ah(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, B(e, 2)) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, r, e) : t;
        }
        var Eh = Pn(function(t, n) {
          var e = t == null ? 0 : t.length, i = Mi(t, n);
          return Ua(t, gt(n, function(o) {
            return Rn(o, e) ? +o : o;
          }).sort(Xa)), i;
        });
        function Ph(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var i = -1, o = [], c = t.length;
          for (n = B(n, 3); ++i < c; ) {
            var h = t[i];
            n(h, i, t) && (e.push(h), o.push(i));
          }
          return Ua(t, o), e;
        }
        function Yi(t) {
          return t == null ? t : Ml.call(t);
        }
        function Rh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Y(n), e = e === r ? i : Y(e)), on(t, n, e)) : [];
        }
        function Th(t, n) {
          return _r(t, n);
        }
        function Fh(t, n, e) {
          return Fi(t, n, B(e, 2));
        }
        function Lh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = _r(t, n);
            if (i < e && gn(t[i], n))
              return i;
          }
          return -1;
        }
        function kh(t, n) {
          return _r(t, n, !0);
        }
        function Oh(t, n, e) {
          return Fi(t, n, B(e, 2), !0);
        }
        function Dh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = _r(t, n, !0) - 1;
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
          return n ? on(t, 1, n) : [];
        }
        function Uh(t, n, e) {
          return t && t.length ? (n = e || n === r ? 1 : Y(n), on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function $h(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, on(t, n < 0 ? 0 : n, i)) : [];
        }
        function qh(t, n) {
          return t && t.length ? vr(t, B(n, 3), !1, !0) : [];
        }
        function Gh(t, n) {
          return t && t.length ? vr(t, B(n, 3)) : [];
        }
        var zh = Q(function(t) {
          return Un(Et(t, 1, wt, !0));
        }), Hh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Un(Et(t, 1, wt, !0), B(n, 2));
        }), Kh = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Un(Et(t, 1, wt, !0), r, n);
        });
        function Zh(t) {
          return t && t.length ? Un(t) : [];
        }
        function Jh(t, n) {
          return t && t.length ? Un(t, B(n, 2)) : [];
        }
        function Yh(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? Un(t, r, n) : [];
        }
        function Xi(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = On(t, function(e) {
            if (wt(e))
              return n = xt(e.length, n), !0;
          }), pi(n, function(e) {
            return gt(t, li(e));
          });
        }
        function Po(t, n) {
          if (!(t && t.length))
            return [];
          var e = Xi(t);
          return n == null ? e : gt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var Xh = Q(function(t, n) {
          return wt(t) ? Te(t, n) : [];
        }), Qh = Q(function(t) {
          return ki(On(t, wt));
        }), Vh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), ki(On(t, wt), B(n, 2));
        }), jh = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, ki(On(t, wt), r, n);
        }), tp = Q(Xi);
        function np(t, n) {
          return Ka(t || [], n || [], Re);
        }
        function ep(t, n) {
          return Ka(t || [], n || [], ke);
        }
        var rp = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Po(t, e);
        });
        function Ro(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function ip(t, n) {
          return n(t), t;
        }
        function Ar(t, n) {
          return n(t);
        }
        var sp = Pn(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, o = function(c) {
            return Mi(c, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !Rn(e) ? this.thru(o) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: Ar,
            args: [o],
            thisArg: r
          }), new sn(i, this.__chain__).thru(function(c) {
            return n && !c.length && c.push(r), c;
          }));
        });
        function ap() {
          return Ro(this);
        }
        function op() {
          return new sn(this.value(), this.__chain__);
        }
        function up() {
          this.__values__ === r && (this.__values__ = zo(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function cp() {
          return this;
        }
        function lp(t) {
          for (var n, e = this; e instanceof fr; ) {
            var i = So(e);
            i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
            var o = i;
            e = e.__wrapped__;
          }
          return o.__wrapped__ = t, n;
        }
        function fp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: Ar,
              args: [Yi],
              thisArg: r
            }), new sn(n, this.__chain__);
          }
          return this.thru(Yi);
        }
        function hp() {
          return Ha(this.__wrapped__, this.__actions__);
        }
        var pp = mr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : In(t, e, 1);
        });
        function gp(t, n, e) {
          var i = H(t) ? ia : rf;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        function dp(t, n) {
          var e = H(t) ? On : Ea;
          return e(t, B(n, 3));
        }
        var _p = eo(bo), vp = eo(xo);
        function mp(t, n) {
          return Et(Ir(t, n), 1);
        }
        function wp(t, n) {
          return Et(Ir(t, n), Sn);
        }
        function yp(t, n, e) {
          return e = e === r ? 1 : Y(e), Et(Ir(t, n), e);
        }
        function To(t, n) {
          var e = H(t) ? en : Wn;
          return e(t, B(n, 3));
        }
        function Fo(t, n) {
          var e = H(t) ? Bc : Ia;
          return e(t, B(n, 3));
        }
        var Mp = mr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
        });
        function Cp(t, n, e, i) {
          t = qt(t) ? t : _e(t), e = e && !i ? Y(e) : 0;
          var o = t.length;
          return e < 0 && (e = xt(o + e, 0)), Fr(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && ie(t, n, e) > -1;
        }
        var Sp = Q(function(t, n, e) {
          var i = -1, o = typeof n == "function", c = qt(t) ? C(t.length) : [];
          return Wn(t, function(h) {
            c[++i] = o ? Zt(n, h, e) : Fe(h, n, e);
          }), c;
        }), bp = mr(function(t, n, e) {
          In(t, e, n);
        });
        function Ir(t, n) {
          var e = H(t) ? gt : ka;
          return e(t, B(n, 3));
        }
        function xp(t, n, e, i) {
          return t == null ? [] : (H(n) || (n = n == null ? [] : [n]), e = i ? r : e, H(e) || (e = e == null ? [] : [e]), Ba(t, n, e));
        }
        var Ap = mr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Ip(t, n, e) {
          var i = H(t) ? ui : ua, o = arguments.length < 3;
          return i(t, B(n, 4), e, o, Wn);
        }
        function Ep(t, n, e) {
          var i = H(t) ? Wc : ua, o = arguments.length < 3;
          return i(t, B(n, 4), e, o, Ia);
        }
        function Pp(t, n) {
          var e = H(t) ? On : Ea;
          return e(t, Rr(B(n, 3)));
        }
        function Rp(t) {
          var n = H(t) ? Sa : Cf;
          return n(t);
        }
        function Tp(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var i = H(t) ? Vl : Sf;
          return i(t, n);
        }
        function Fp(t) {
          var n = H(t) ? jl : xf;
          return n(t);
        }
        function Lp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Fr(t) ? ae(t) : t.length;
          var n = Rt(t);
          return n == vt || n == pt ? t.size : Ii(t).length;
        }
        function kp(t, n, e) {
          var i = H(t) ? ci : Af;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        var Op = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Ba(t, Et(n, 1), []);
        }), Er = gl || function() {
          return It.Date.now();
        };
        function Dp(t, n) {
          if (typeof n != "function")
            throw new rn(d);
          return t = Y(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function Lo(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, En(t, St, r, r, r, r, n);
        }
        function ko(t, n) {
          var e;
          if (typeof n != "function")
            throw new rn(d);
          return t = Y(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var Qi = Q(function(t, n, e) {
          var i = N;
          if (e.length) {
            var o = Nn(e, ge(Qi));
            i |= _t;
          }
          return En(t, i, n, e, o);
        }), Oo = Q(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var o = Nn(e, ge(Oo));
            i |= _t;
          }
          return En(n, i, t, e, o);
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
          var i, o, c, h, g, w, b = 0, x = !1, E = !1, L = !0;
          if (typeof t != "function")
            throw new rn(d);
          n = cn(n) || 0, dt(e) && (x = !!e.leading, E = "maxWait" in e, c = E ? xt(cn(e.maxWait) || 0, n) : c, L = "trailing" in e ? !!e.trailing : L);
          function D(yt) {
            var dn = i, Ln = o;
            return i = o = r, b = yt, h = t.apply(Ln, dn), h;
          }
          function W(yt) {
            return b = yt, g = Ne(V, n), x ? D(yt) : h;
          }
          function X(yt) {
            var dn = yt - w, Ln = yt - b, ru = n - dn;
            return E ? Pt(ru, c - Ln) : ru;
          }
          function U(yt) {
            var dn = yt - w, Ln = yt - b;
            return w === r || dn >= n || dn < 0 || E && Ln >= c;
          }
          function V() {
            var yt = Er();
            if (U(yt))
              return tt(yt);
            g = Ne(V, X(yt));
          }
          function tt(yt) {
            return g = r, L && i ? D(yt) : (i = o = r, h);
          }
          function Qt() {
            g !== r && Za(g), b = 0, i = w = o = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Er());
          }
          function Vt() {
            var yt = Er(), dn = U(yt);
            if (i = arguments, o = this, w = yt, dn) {
              if (g === r)
                return W(w);
              if (E)
                return Za(g), g = Ne(V, n), D(w);
            }
            return g === r && (g = Ne(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Np = Q(function(t, n) {
          return Aa(t, 1, n);
        }), Bp = Q(function(t, n, e) {
          return Aa(t, cn(n) || 0, e);
        });
        function Wp(t) {
          return En(t, Ht);
        }
        function Pr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new rn(d);
          var e = function() {
            var i = arguments, o = n ? n.apply(this, i) : i[0], c = e.cache;
            if (c.has(o))
              return c.get(o);
            var h = t.apply(this, i);
            return e.cache = c.set(o, h) || c, h;
          };
          return e.cache = new (Pr.Cache || An)(), e;
        }
        Pr.Cache = An;
        function Rr(t) {
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
        function Up(t) {
          return ko(2, t);
        }
        var $p = If(function(t, n) {
          n = n.length == 1 && H(n[0]) ? gt(n[0], Jt(B())) : gt(Et(n, 1), Jt(B()));
          var e = n.length;
          return Q(function(i) {
            for (var o = -1, c = Pt(i.length, e); ++o < c; )
              i[o] = n[o].call(this, i[o]);
            return Zt(t, this, i);
          });
        }), Vi = Q(function(t, n) {
          var e = Nn(n, ge(Vi));
          return En(t, _t, r, n, e);
        }), Wo = Q(function(t, n) {
          var e = Nn(n, ge(Wo));
          return En(t, Bt, r, n, e);
        }), qp = Pn(function(t, n) {
          return En(t, jt, r, r, r, n);
        });
        function Gp(t, n) {
          if (typeof t != "function")
            throw new rn(d);
          return n = n === r ? n : Y(n), Q(t, n);
        }
        function zp(t, n) {
          if (typeof t != "function")
            throw new rn(d);
          return n = n == null ? 0 : xt(Y(n), 0), Q(function(e) {
            var i = e[n], o = qn(e, 0, n);
            return i && Dn(o, i), Zt(t, this, o);
          });
        }
        function Hp(t, n, e) {
          var i = !0, o = !0;
          if (typeof t != "function")
            throw new rn(d);
          return dt(e) && (i = "leading" in e ? !!e.leading : i, o = "trailing" in e ? !!e.trailing : o), Bo(t, n, {
            leading: i,
            maxWait: n,
            trailing: o
          });
        }
        function Kp(t) {
          return Lo(t, 1);
        }
        function Zp(t, n) {
          return Vi(Di(n), t);
        }
        function Jp() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return H(t) ? t : [t];
        }
        function Yp(t) {
          return an(t, F);
        }
        function Xp(t, n) {
          return n = typeof n == "function" ? n : r, an(t, F, n);
        }
        function Qp(t) {
          return an(t, m | F);
        }
        function Vp(t, n) {
          return n = typeof n == "function" ? n : r, an(t, m | F, n);
        }
        function jp(t, n) {
          return n == null || xa(t, n, At(n));
        }
        function gn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var tg = Cr(bi), ng = Cr(function(t, n) {
          return t >= n;
        }), ne = Ta(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ta : function(t) {
          return mt(t) && st.call(t, "callee") && !va.call(t, "callee");
        }, H = C.isArray, eg = Vs ? Jt(Vs) : lf;
        function qt(t) {
          return t != null && Tr(t.length) && !Tn(t);
        }
        function wt(t) {
          return mt(t) && qt(t);
        }
        function rg(t) {
          return t === !0 || t === !1 || mt(t) && kt(t) == ct;
        }
        var Gn = _l || cs, ig = js ? Jt(js) : ff;
        function sg(t) {
          return mt(t) && t.nodeType === 1 && !Be(t);
        }
        function ag(t) {
          if (t == null)
            return !0;
          if (qt(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || de(t) || ne(t)))
            return !t.length;
          var n = Rt(t);
          if (n == vt || n == pt)
            return !t.size;
          if (De(t))
            return !Ii(t).length;
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
        function ji(t) {
          if (!mt(t))
            return !1;
          var n = kt(t);
          return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !Be(t);
        }
        function cg(t) {
          return typeof t == "number" && wa(t);
        }
        function Tn(t) {
          if (!dt(t))
            return !1;
          var n = kt(t);
          return n == Wt || n == vn || n == ot || n == fn;
        }
        function Uo(t) {
          return typeof t == "number" && t == Y(t);
        }
        function Tr(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _n;
        }
        function dt(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function mt(t) {
          return t != null && typeof t == "object";
        }
        var $o = ta ? Jt(ta) : pf;
        function lg(t, n) {
          return t === n || Ai(t, n, Gi(n));
        }
        function fg(t, n, e) {
          return e = typeof e == "function" ? e : r, Ai(t, n, Gi(n), e);
        }
        function hg(t) {
          return qo(t) && t != +t;
        }
        function pg(t) {
          if (Xf(t))
            throw new z(p);
          return Fa(t);
        }
        function gg(t) {
          return t === null;
        }
        function dg(t) {
          return t == null;
        }
        function qo(t) {
          return typeof t == "number" || mt(t) && kt(t) == Lt;
        }
        function Be(t) {
          if (!mt(t) || kt(t) != Ct)
            return !1;
          var n = ir(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && tr.call(e) == ll;
        }
        var ts = na ? Jt(na) : gf;
        function _g(t) {
          return Uo(t) && t >= -_n && t <= _n;
        }
        var Go = ea ? Jt(ea) : df;
        function Fr(t) {
          return typeof t == "string" || !H(t) && mt(t) && kt(t) == mn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && kt(t) == He;
        }
        var de = ra ? Jt(ra) : _f;
        function vg(t) {
          return t === r;
        }
        function mg(t) {
          return mt(t) && Rt(t) == Ce;
        }
        function wg(t) {
          return mt(t) && kt(t) == ku;
        }
        var yg = Cr(Ei), Mg = Cr(function(t, n) {
          return t <= n;
        });
        function zo(t) {
          if (!t)
            return [];
          if (qt(t))
            return Fr(t) ? hn(t) : $t(t);
          if (xe && t[xe])
            return Vc(t[xe]());
          var n = Rt(t), e = n == vt ? di : n == pt ? Qe : _e;
          return e(t);
        }
        function Fn(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = cn(t), t === Sn || t === -Sn) {
            var n = t < 0 ? -1 : 1;
            return n * ze;
          }
          return t === t ? t : 0;
        }
        function Y(t) {
          var n = Fn(t), e = n % 1;
          return n === n ? e ? n - e : n : 0;
        }
        function Ho(t) {
          return t ? Qn(Y(t), 0, k) : 0;
        }
        function cn(t) {
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
          t = ca(t);
          var e = nc.test(t);
          return e || rc.test(t) ? Oc(t.slice(2), e ? 2 : 8) : tc.test(t) ? bn : +t;
        }
        function Ko(t) {
          return yn(t, Gt(t));
        }
        function Cg(t) {
          return t ? Qn(Y(t), -_n, _n) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var Sg = he(function(t, n) {
          if (De(n) || qt(n)) {
            yn(n, At(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Re(t, e, n[e]);
        }), Zo = he(function(t, n) {
          yn(n, Gt(n), t);
        }), Lr = he(function(t, n, e, i) {
          yn(n, Gt(n), t, i);
        }), bg = he(function(t, n, e, i) {
          yn(n, At(n), t, i);
        }), xg = Pn(Mi);
        function Ag(t, n) {
          var e = fe(t);
          return n == null ? e : ba(e, n);
        }
        var Ig = Q(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, o = i > 2 ? n[2] : r;
          for (o && Ot(n[0], n[1], o) && (i = 1); ++e < i; )
            for (var c = n[e], h = Gt(c), g = -1, w = h.length; ++g < w; ) {
              var b = h[g], x = t[b];
              (x === r || gn(x, ue[b]) && !st.call(t, b)) && (t[b] = c[b]);
            }
          return t;
        }), Eg = Q(function(t) {
          return t.push(r, co), Zt(Jo, r, t);
        });
        function Pg(t, n) {
          return sa(t, B(n, 3), wn);
        }
        function Rg(t, n) {
          return sa(t, B(n, 3), Si);
        }
        function Tg(t, n) {
          return t == null ? t : Ci(t, B(n, 3), Gt);
        }
        function Fg(t, n) {
          return t == null ? t : Pa(t, B(n, 3), Gt);
        }
        function Lg(t, n) {
          return t && wn(t, B(n, 3));
        }
        function kg(t, n) {
          return t && Si(t, B(n, 3));
        }
        function Og(t) {
          return t == null ? [] : gr(t, At(t));
        }
        function Dg(t) {
          return t == null ? [] : gr(t, Gt(t));
        }
        function ns(t, n, e) {
          var i = t == null ? r : Vn(t, n);
          return i === r ? e : i;
        }
        function Ng(t, n) {
          return t != null && ho(t, n, af);
        }
        function es(t, n) {
          return t != null && ho(t, n, of);
        }
        var Bg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = nr.call(n)), t[n] = e;
        }, is(zt)), Wg = io(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = nr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, B), Ug = Q(Fe);
        function At(t) {
          return qt(t) ? Ca(t) : Ii(t);
        }
        function Gt(t) {
          return qt(t) ? Ca(t, !0) : vf(t);
        }
        function $g(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, o, c) {
            In(e, n(i, o, c), i);
          }), e;
        }
        function qg(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, o, c) {
            In(e, o, n(i, o, c));
          }), e;
        }
        var Gg = he(function(t, n, e) {
          dr(t, n, e);
        }), Jo = he(function(t, n, e, i) {
          dr(t, n, e, i);
        }), zg = Pn(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = gt(n, function(c) {
            return c = $n(c, t), i || (i = c.length > 1), c;
          }), yn(t, $i(t), e), i && (e = an(e, m | R | F, Bf));
          for (var o = n.length; o--; )
            Li(e, n[o]);
          return e;
        });
        function Hg(t, n) {
          return Yo(t, Rr(B(n)));
        }
        var Kg = Pn(function(t, n) {
          return t == null ? {} : wf(t, n);
        });
        function Yo(t, n) {
          if (t == null)
            return {};
          var e = gt($i(t), function(i) {
            return [i];
          });
          return n = B(n), Wa(t, e, function(i, o) {
            return n(i, o[0]);
          });
        }
        function Zg(t, n, e) {
          n = $n(n, t);
          var i = -1, o = n.length;
          for (o || (o = 1, t = r); ++i < o; ) {
            var c = t == null ? r : t[Mn(n[i])];
            c === r && (i = o, c = e), t = Tn(c) ? c.call(t) : c;
          }
          return t;
        }
        function Jg(t, n, e) {
          return t == null ? t : ke(t, n, e);
        }
        function Yg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : ke(t, n, e, i);
        }
        var Xo = oo(At), Qo = oo(Gt);
        function Xg(t, n, e) {
          var i = H(t), o = i || Gn(t) || de(t);
          if (n = B(n, 4), e == null) {
            var c = t && t.constructor;
            o ? e = i ? new c() : [] : dt(t) ? e = Tn(c) ? fe(ir(t)) : {} : e = {};
          }
          return (o ? en : wn)(t, function(h, g, w) {
            return n(e, h, g, w);
          }), e;
        }
        function Qg(t, n) {
          return t == null ? !0 : Li(t, n);
        }
        function Vg(t, n, e) {
          return t == null ? t : za(t, n, Di(e));
        }
        function jg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : za(t, n, Di(e), i);
        }
        function _e(t) {
          return t == null ? [] : gi(t, At(t));
        }
        function td(t) {
          return t == null ? [] : gi(t, Gt(t));
        }
        function nd(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = cn(e), e = e === e ? e : 0), n !== r && (n = cn(n), n = n === n ? n : 0), Qn(cn(t), n, e);
        }
        function ed(t, n, e) {
          return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = cn(t), uf(t, n, e);
        }
        function rd(t, n, e) {
          if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
            var i = t;
            t = n, n = i;
          }
          if (e || t % 1 || n % 1) {
            var o = ya();
            return Pt(t + o * (n - t + kc("1e-" + ((o + "").length - 1))), n);
          }
          return Ri(t, n);
        }
        var id = pe(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? Vo(n) : n);
        });
        function Vo(t) {
          return rs(rt(t).toLowerCase());
        }
        function jo(t) {
          return t = rt(t), t && t.replace(sc, Zc).replace(bc, "");
        }
        function sd(t, n, e) {
          t = rt(t), n = Yt(n);
          var i = t.length;
          e = e === r ? i : Qn(Y(e), 0, i);
          var o = e;
          return e -= n.length, e >= 0 && t.slice(e, o) == n;
        }
        function ad(t) {
          return t = rt(t), t && Wu.test(t) ? t.replace(Ps, Jc) : t;
        }
        function od(t) {
          return t = rt(t), t && Hu.test(t) ? t.replace(Vr, "\\$&") : t;
        }
        var ud = pe(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), cd = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), ld = no("toLowerCase");
        function fd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          if (!n || i >= n)
            return t;
          var o = (n - i) / 2;
          return Mr(ur(o), e) + t + Mr(or(o), e);
        }
        function hd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? t + Mr(n - i, e) : t;
        }
        function pd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? Mr(n - i, e) + t : t;
        }
        function gd(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), yl(rt(t).replace(jr, ""), n || 0);
        }
        function dd(t, n, e) {
          return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n), Ti(rt(t), n);
        }
        function _d() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var vd = pe(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function md(t, n, e) {
          return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ts(n)) && (n = Yt(n), !n && se(t)) ? qn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var wd = pe(function(t, n, e) {
          return t + (e ? " " : "") + rs(n);
        });
        function yd(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Qn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Md(t, n, e) {
          var i = u.templateSettings;
          e && Ot(t, n, e) && (n = r), t = rt(t), n = Lr({}, n, i, uo);
          var o = Lr({}, n.imports, i.imports, uo), c = At(o), h = gi(o, c), g, w, b = 0, x = n.interpolate || Ke, E = "__p += '", L = _i(
            (n.escape || Ke).source + "|" + x.source + "|" + (x === Rs ? ju : Ke).source + "|" + (n.evaluate || Ke).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Pc + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), E += t.slice(b, Vt).replace(ac, Yc), V && (g = !0, E += `' +
__e(` + V + `) +
'`), Dt && (w = !0, E += `';
` + Dt + `;
__p += '`), tt && (E += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), b = Vt + U.length, U;
          }), E += `';
`;
          var W = st.call(n, "variable") && n.variable;
          if (!W)
            E = `with (obj) {
` + E + `
}
`;
          else if (Qu.test(W))
            throw new z(v);
          E = (w ? E.replace(Ou, "") : E).replace(Du, "$1").replace(Nu, "$1;"), E = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`;
          var X = nu(function() {
            return et(c, D + "return " + E).apply(r, h);
          });
          if (X.source = E, ji(X))
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
            return ca(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = hn(n), c = la(i, o), h = fa(i, o) + 1;
          return qn(i, c, h).join("");
        }
        function xd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, pa(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = fa(i, hn(n)) + 1;
          return qn(i, 0, o).join("");
        }
        function Ad(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(jr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = la(i, hn(n));
          return qn(i, o).join("");
        }
        function Id(t, n) {
          var e = Tt, i = ye;
          if (dt(n)) {
            var o = "separator" in n ? n.separator : o;
            e = "length" in n ? Y(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
          }
          t = rt(t);
          var c = t.length;
          if (se(t)) {
            var h = hn(t);
            c = h.length;
          }
          if (e >= c)
            return t;
          var g = e - ae(i);
          if (g < 1)
            return i;
          var w = h ? qn(h, 0, g).join("") : t.slice(0, g);
          if (o === r)
            return w + i;
          if (h && (g += w.length - g), ts(o)) {
            if (t.slice(g).search(o)) {
              var b, x = w;
              for (o.global || (o = _i(o.source, rt(Ts.exec(o)) + "g")), o.lastIndex = 0; b = o.exec(x); )
                var E = b.index;
              w = w.slice(0, E === r ? g : E);
            }
          } else if (t.indexOf(Yt(o), g) != g) {
            var L = w.lastIndexOf(o);
            L > -1 && (w = w.slice(0, L));
          }
          return w + i;
        }
        function Ed(t) {
          return t = rt(t), t && Bu.test(t) ? t.replace(Es, el) : t;
        }
        var Pd = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), rs = no("toUpperCase");
        function tu(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? Qc(t) ? sl(t) : qc(t) : t.match(n) || [];
        }
        var nu = Q(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return ji(e) ? e : new z(e);
          }
        }), Rd = Pn(function(t, n) {
          return en(n, function(e) {
            e = Mn(e), In(t, e, Qi(t[e], t));
          }), t;
        });
        function Td(t) {
          var n = t == null ? 0 : t.length, e = B();
          return t = n ? gt(t, function(i) {
            if (typeof i[1] != "function")
              throw new rn(d);
            return [e(i[0]), i[1]];
          }) : [], Q(function(i) {
            for (var o = -1; ++o < n; ) {
              var c = t[o];
              if (Zt(c[0], this, i))
                return Zt(c[1], this, i);
            }
          });
        }
        function Fd(t) {
          return ef(an(t, m));
        }
        function is(t) {
          return function() {
            return t;
          };
        }
        function Ld(t, n) {
          return t == null || t !== t ? n : t;
        }
        var kd = ro(), Od = ro(!0);
        function zt(t) {
          return t;
        }
        function ss(t) {
          return La(typeof t == "function" ? t : an(t, m));
        }
        function Dd(t) {
          return Oa(an(t, m));
        }
        function Nd(t, n) {
          return Da(t, an(n, m));
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
        function as(t, n, e) {
          var i = At(n), o = gr(n, i);
          e == null && !(dt(n) && (o.length || !i.length)) && (e = n, n = t, t = this, o = gr(n, At(n)));
          var c = !(dt(e) && "chain" in e) || !!e.chain, h = Tn(t);
          return en(o, function(g) {
            var w = n[g];
            t[g] = w, h && (t.prototype[g] = function() {
              var b = this.__chain__;
              if (c || b) {
                var x = t(this.__wrapped__), E = x.__actions__ = $t(this.__actions__);
                return E.push({ func: w, args: arguments, thisArg: t }), x.__chain__ = b, x;
              }
              return w.apply(t, Dn([this.value()], arguments));
            });
          }), t;
        }
        function Ud() {
          return It._ === this && (It._ = fl), this;
        }
        function os() {
        }
        function $d(t) {
          return t = Y(t), Q(function(n) {
            return Na(n, t);
          });
        }
        var qd = Bi(gt), Gd = Bi(ia), zd = Bi(ci);
        function eu(t) {
          return Hi(t) ? li(Mn(t)) : yf(t);
        }
        function Hd(t) {
          return function(n) {
            return t == null ? r : Vn(t, n);
          };
        }
        var Kd = so(), Zd = so(!0);
        function us() {
          return [];
        }
        function cs() {
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
          if (t = Y(t), t < 1 || t > _n)
            return [];
          var e = k, i = Pt(t, k);
          n = B(n), t -= k;
          for (var o = pi(i, n); ++e < t; )
            n(e);
          return o;
        }
        function Vd(t) {
          return H(t) ? gt(t, Mn) : Xt(t) ? [t] : $t(Co(rt(t)));
        }
        function jd(t) {
          var n = ++cl;
          return rt(t) + n;
        }
        var t0 = yr(function(t, n) {
          return t + n;
        }, 0), n0 = Wi("ceil"), e0 = yr(function(t, n) {
          return t / n;
        }, 1), r0 = Wi("floor");
        function i0(t) {
          return t && t.length ? pr(t, zt, bi) : r;
        }
        function s0(t, n) {
          return t && t.length ? pr(t, B(n, 2), bi) : r;
        }
        function a0(t) {
          return oa(t, zt);
        }
        function o0(t, n) {
          return oa(t, B(n, 2));
        }
        function u0(t) {
          return t && t.length ? pr(t, zt, Ei) : r;
        }
        function c0(t, n) {
          return t && t.length ? pr(t, B(n, 2), Ei) : r;
        }
        var l0 = yr(function(t, n) {
          return t * n;
        }, 1), f0 = Wi("round"), h0 = yr(function(t, n) {
          return t - n;
        }, 0);
        function p0(t) {
          return t && t.length ? hi(t, zt) : 0;
        }
        function g0(t, n) {
          return t && t.length ? hi(t, B(n, 2)) : 0;
        }
        return u.after = Dp, u.ary = Lo, u.assign = Sg, u.assignIn = Zo, u.assignInWith = Lr, u.assignWith = bg, u.at = xg, u.before = ko, u.bind = Qi, u.bindAll = Rd, u.bindKey = Oo, u.castArray = Jp, u.chain = Ro, u.chunk = rh, u.compact = ih, u.concat = sh, u.cond = Td, u.conforms = Fd, u.constant = is, u.countBy = pp, u.create = Ag, u.curry = Do, u.curryRight = No, u.debounce = Bo, u.defaults = Ig, u.defaultsDeep = Eg, u.defer = Np, u.delay = Bp, u.difference = ah, u.differenceBy = oh, u.differenceWith = uh, u.drop = ch, u.dropRight = lh, u.dropRightWhile = fh, u.dropWhile = hh, u.fill = ph, u.filter = dp, u.flatMap = mp, u.flatMapDeep = wp, u.flatMapDepth = yp, u.flatten = Ao, u.flattenDeep = gh, u.flattenDepth = dh, u.flip = Wp, u.flow = kd, u.flowRight = Od, u.fromPairs = _h, u.functions = Og, u.functionsIn = Dg, u.groupBy = Mp, u.initial = mh, u.intersection = wh, u.intersectionBy = yh, u.intersectionWith = Mh, u.invert = Bg, u.invertBy = Wg, u.invokeMap = Sp, u.iteratee = ss, u.keyBy = bp, u.keys = At, u.keysIn = Gt, u.map = Ir, u.mapKeys = $g, u.mapValues = qg, u.matches = Dd, u.matchesProperty = Nd, u.memoize = Pr, u.merge = Gg, u.mergeWith = Jo, u.method = Bd, u.methodOf = Wd, u.mixin = as, u.negate = Rr, u.nthArg = $d, u.omit = zg, u.omitBy = Hg, u.once = Up, u.orderBy = xp, u.over = qd, u.overArgs = $p, u.overEvery = Gd, u.overSome = zd, u.partial = Vi, u.partialRight = Wo, u.partition = Ap, u.pick = Kg, u.pickBy = Yo, u.property = eu, u.propertyOf = Hd, u.pull = xh, u.pullAll = Eo, u.pullAllBy = Ah, u.pullAllWith = Ih, u.pullAt = Eh, u.range = Kd, u.rangeRight = Zd, u.rearg = qp, u.reject = Pp, u.remove = Ph, u.rest = Gp, u.reverse = Yi, u.sampleSize = Tp, u.set = Jg, u.setWith = Yg, u.shuffle = Fp, u.slice = Rh, u.sortBy = Op, u.sortedUniq = Nh, u.sortedUniqBy = Bh, u.split = md, u.spread = zp, u.tail = Wh, u.take = Uh, u.takeRight = $h, u.takeRightWhile = qh, u.takeWhile = Gh, u.tap = ip, u.throttle = Hp, u.thru = Ar, u.toArray = zo, u.toPairs = Xo, u.toPairsIn = Qo, u.toPath = Vd, u.toPlainObject = Ko, u.transform = Xg, u.unary = Kp, u.union = zh, u.unionBy = Hh, u.unionWith = Kh, u.uniq = Zh, u.uniqBy = Jh, u.uniqWith = Yh, u.unset = Qg, u.unzip = Xi, u.unzipWith = Po, u.update = Vg, u.updateWith = jg, u.values = _e, u.valuesIn = td, u.without = Xh, u.words = tu, u.wrap = Zp, u.xor = Qh, u.xorBy = Vh, u.xorWith = jh, u.zip = tp, u.zipObject = np, u.zipObjectDeep = ep, u.zipWith = rp, u.entries = Xo, u.entriesIn = Qo, u.extend = Zo, u.extendWith = Lr, as(u, u), u.add = t0, u.attempt = nu, u.camelCase = id, u.capitalize = Vo, u.ceil = n0, u.clamp = nd, u.clone = Yp, u.cloneDeep = Qp, u.cloneDeepWith = Vp, u.cloneWith = Xp, u.conformsTo = jp, u.deburr = jo, u.defaultTo = Ld, u.divide = e0, u.endsWith = sd, u.eq = gn, u.escape = ad, u.escapeRegExp = od, u.every = gp, u.find = _p, u.findIndex = bo, u.findKey = Pg, u.findLast = vp, u.findLastIndex = xo, u.findLastKey = Rg, u.floor = r0, u.forEach = To, u.forEachRight = Fo, u.forIn = Tg, u.forInRight = Fg, u.forOwn = Lg, u.forOwnRight = kg, u.get = ns, u.gt = tg, u.gte = ng, u.has = Ng, u.hasIn = es, u.head = Io, u.identity = zt, u.includes = Cp, u.indexOf = vh, u.inRange = ed, u.invoke = Ug, u.isArguments = ne, u.isArray = H, u.isArrayBuffer = eg, u.isArrayLike = qt, u.isArrayLikeObject = wt, u.isBoolean = rg, u.isBuffer = Gn, u.isDate = ig, u.isElement = sg, u.isEmpty = ag, u.isEqual = og, u.isEqualWith = ug, u.isError = ji, u.isFinite = cg, u.isFunction = Tn, u.isInteger = Uo, u.isLength = Tr, u.isMap = $o, u.isMatch = lg, u.isMatchWith = fg, u.isNaN = hg, u.isNative = pg, u.isNil = dg, u.isNull = gg, u.isNumber = qo, u.isObject = dt, u.isObjectLike = mt, u.isPlainObject = Be, u.isRegExp = ts, u.isSafeInteger = _g, u.isSet = Go, u.isString = Fr, u.isSymbol = Xt, u.isTypedArray = de, u.isUndefined = vg, u.isWeakMap = mg, u.isWeakSet = wg, u.join = Ch, u.kebabCase = ud, u.last = un, u.lastIndexOf = Sh, u.lowerCase = cd, u.lowerFirst = ld, u.lt = yg, u.lte = Mg, u.max = i0, u.maxBy = s0, u.mean = a0, u.meanBy = o0, u.min = u0, u.minBy = c0, u.stubArray = us, u.stubFalse = cs, u.stubObject = Jd, u.stubString = Yd, u.stubTrue = Xd, u.multiply = l0, u.nth = bh, u.noConflict = Ud, u.noop = os, u.now = Er, u.pad = fd, u.padEnd = hd, u.padStart = pd, u.parseInt = gd, u.random = rd, u.reduce = Ip, u.reduceRight = Ep, u.repeat = dd, u.replace = _d, u.result = Zg, u.round = f0, u.runInContext = _, u.sample = Rp, u.size = Lp, u.snakeCase = vd, u.some = kp, u.sortedIndex = Th, u.sortedIndexBy = Fh, u.sortedIndexOf = Lh, u.sortedLastIndex = kh, u.sortedLastIndexBy = Oh, u.sortedLastIndexOf = Dh, u.startCase = wd, u.startsWith = yd, u.subtract = h0, u.sum = p0, u.sumBy = g0, u.template = Md, u.times = Qd, u.toFinite = Fn, u.toInteger = Y, u.toLength = Ho, u.toLower = Cd, u.toNumber = cn, u.toSafeInteger = Cg, u.toString = rt, u.toUpper = Sd, u.trim = bd, u.trimEnd = xd, u.trimStart = Ad, u.truncate = Id, u.unescape = Ed, u.uniqueId = jd, u.upperCase = Pd, u.upperFirst = rs, u.each = To, u.eachRight = Fo, u.first = Io, as(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = a, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), en(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : xt(Y(e), 0);
            var i = this.__filtered__ && !n ? new j(this) : this.clone();
            return i.__filtered__ ? i.__takeCount__ = Pt(e, i.__takeCount__) : i.__views__.push({
              size: Pt(e, k),
              type: t + (i.__dir__ < 0 ? "Right" : "")
            }), i;
          }, j.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse();
          };
        }), en(["filter", "map", "takeWhile"], function(t, n) {
          var e = n + 1, i = e == Me || e == qr;
          j.prototype[t] = function(o) {
            var c = this.clone();
            return c.__iteratees__.push({
              iteratee: B(o, 3),
              type: e
            }), c.__filtered__ = c.__filtered__ || i, c;
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
        }, j.prototype.invokeMap = Q(function(t, n) {
          return typeof t == "function" ? new j(this) : this.map(function(e) {
            return Fe(e, t, n);
          });
        }), j.prototype.reject = function(t) {
          return this.filter(Rr(B(t)));
        }, j.prototype.slice = function(t, n) {
          t = Y(t);
          var e = this;
          return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Y(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
        }, j.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, j.prototype.toArray = function() {
          return this.take(k);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), o = u[i ? "take" + (n == "last" ? "Right" : "") : n], c = i || /^find/.test(n);
          o && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = i ? [1] : arguments, w = h instanceof j, b = g[0], x = w || H(h), E = function(V) {
              var tt = o.apply(u, Dn([V], g));
              return i && L ? tt[0] : tt;
            };
            x && e && typeof b == "function" && b.length != 1 && (w = x = !1);
            var L = this.__chain__, D = !!this.__actions__.length, W = c && !L, X = w && !D;
            if (!c && x) {
              h = X ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: Ar, args: [E], thisArg: r }), new sn(U, L);
            }
            return W && X ? t.apply(this, g) : (U = this.thru(E), W ? i ? U.value()[0] : U.value() : U);
          });
        }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = Ve[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var o = arguments;
            if (i && !this.__chain__) {
              var c = this.value();
              return n.apply(H(c) ? c : [], o);
            }
            return this[e](function(h) {
              return n.apply(H(h) ? h : [], o);
            });
          };
        }), wn(j.prototype, function(t, n) {
          var e = u[n];
          if (e) {
            var i = e.name + "";
            st.call(le, i) || (le[i] = []), le[i].push({ name: n, func: e });
          }
        }), le[wr(r, q).name] = [{
          name: "wrapper",
          func: r
        }], j.prototype.clone = Il, j.prototype.reverse = El, j.prototype.value = Pl, u.prototype.at = sp, u.prototype.chain = ap, u.prototype.commit = op, u.prototype.next = up, u.prototype.plant = lp, u.prototype.reverse = fp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = hp, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = cp), u;
      }, oe = al();
      Zn ? ((Zn.exports = oe)._ = oe, si._ = oe) : It._ = oe;
    }).call(v0);
  }(Ue, Ue.exports)), Ue.exports;
}
var vu = m0();
const K = /* @__PURE__ */ _u(vu);
var Or = { exports: {} }, ls, su;
function w0() {
  if (su) return ls;
  su = 1;
  var f = 1e3, s = f * 60, r = s * 60, a = r * 24, l = a * 7, p = a * 365.25;
  ls = function(I, m) {
    m = m || {};
    var R = typeof I;
    if (R === "string" && I.length > 0)
      return d(I);
    if (R === "number" && isFinite(I))
      return m.long ? y(I) : v(I);
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
        var R = parseFloat(m[1]), F = (m[2] || "ms").toLowerCase();
        switch (F) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return R * p;
          case "weeks":
          case "week":
          case "w":
            return R * l;
          case "days":
          case "day":
          case "d":
            return R * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return R * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return R * s;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return R * f;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return R;
          default:
            return;
        }
      }
    }
  }
  function v(I) {
    var m = Math.abs(I);
    return m >= a ? Math.round(I / a) + "d" : m >= r ? Math.round(I / r) + "h" : m >= s ? Math.round(I / s) + "m" : m >= f ? Math.round(I / f) + "s" : I + "ms";
  }
  function y(I) {
    var m = Math.abs(I);
    return m >= a ? M(I, m, a, "day") : m >= r ? M(I, m, r, "hour") : m >= s ? M(I, m, s, "minute") : m >= f ? M(I, m, f, "second") : I + " ms";
  }
  function M(I, m, R, F) {
    var T = m >= R * 1.5;
    return Math.round(I / R) + " " + F + (T ? "s" : "");
  }
  return ls;
}
var fs, au;
function y0() {
  if (au) return fs;
  au = 1;
  function f(s) {
    a.debug = a, a.default = a, a.coerce = M, a.disable = v, a.enable = p, a.enabled = y, a.humanize = w0(), a.destroy = I, Object.keys(s).forEach((m) => {
      a[m] = s[m];
    }), a.names = [], a.skips = [], a.formatters = {};
    function r(m) {
      let R = 0;
      for (let F = 0; F < m.length; F++)
        R = (R << 5) - R + m.charCodeAt(F), R |= 0;
      return a.colors[Math.abs(R) % a.colors.length];
    }
    a.selectColor = r;
    function a(m) {
      let R, F = null, T, P;
      function N(...q) {
        if (!N.enabled)
          return;
        const Z = N, J = Number(/* @__PURE__ */ new Date()), it = J - (R || J);
        Z.diff = it, Z.prev = R, Z.curr = J, R = J, q[0] = a.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
        let _t = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (St, jt) => {
          if (St === "%%")
            return "%";
          _t++;
          const Ht = a.formatters[jt];
          if (typeof Ht == "function") {
            const Tt = q[_t];
            St = Ht.call(Z, Tt), q.splice(_t, 1), _t--;
          }
          return St;
        }), a.formatArgs.call(Z, q), (Z.log || a.log).apply(Z, q);
      }
      return N.namespace = m, N.useColors = a.useColors(), N.color = a.selectColor(m), N.extend = l, N.destroy = a.destroy, Object.defineProperty(N, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => F !== null ? F : (T !== a.namespaces && (T = a.namespaces, P = a.enabled(m)), P),
        set: (q) => {
          F = q;
        }
      }), typeof a.init == "function" && a.init(N), N;
    }
    function l(m, R) {
      const F = a(this.namespace + (typeof R > "u" ? ":" : R) + m);
      return F.log = this.log, F;
    }
    function p(m) {
      a.save(m), a.namespaces = m, a.names = [], a.skips = [];
      const R = (typeof m == "string" ? m : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const F of R)
        F[0] === "-" ? a.skips.push(F.slice(1)) : a.names.push(F);
    }
    function d(m, R) {
      let F = 0, T = 0, P = -1, N = 0;
      for (; F < m.length; )
        if (T < R.length && (R[T] === m[F] || R[T] === "*"))
          R[T] === "*" ? (P = T, N = F, T++) : (F++, T++);
        else if (P !== -1)
          T = P + 1, N++, F = N;
        else
          return !1;
      for (; T < R.length && R[T] === "*"; )
        T++;
      return T === R.length;
    }
    function v() {
      const m = [
        ...a.names,
        ...a.skips.map((R) => "-" + R)
      ].join(",");
      return a.enable(""), m;
    }
    function y(m) {
      for (const R of a.skips)
        if (d(m, R))
          return !1;
      for (const R of a.names)
        if (d(m, R))
          return !0;
      return !1;
    }
    function M(m) {
      return m instanceof Error ? m.stack || m.message : m;
    }
    function I() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return a.enable(a.load()), a;
  }
  return fs = f, fs;
}
var ou;
function M0() {
  return ou || (ou = 1, function(f, s) {
    s.formatArgs = a, s.save = l, s.load = p, s.useColors = r, s.storage = d(), s.destroy = /* @__PURE__ */ (() => {
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
    function a(y) {
      if (y[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + y[0] + (this.useColors ? "%c " : " ") + "+" + f.exports.humanize(this.diff), !this.useColors)
        return;
      const M = "color: " + this.color;
      y.splice(1, 0, M, "color: inherit");
      let I = 0, m = 0;
      y[0].replace(/%[a-zA-Z%]/g, (R) => {
        R !== "%%" && (I++, R === "%c" && (m = I));
      }), y.splice(m, 0, M);
    }
    s.log = console.debug || console.log || (() => {
    });
    function l(y) {
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
    f.exports = y0()(s);
    const { formatters: v } = f.exports;
    v.j = function(y) {
      try {
        return JSON.stringify(y);
      } catch (M) {
        return "[UnexpectedJSONParseError]: " + M.message;
      }
    };
  }(Or, Or.exports)), Or.exports;
}
var C0 = M0();
const S0 = /* @__PURE__ */ _u(C0), hs = {};
function Kn(f) {
  if (!hs[f]) {
    const s = S0("ultraPacer:core");
    s(`loading debug for namespace "${f}"`), hs[f] = s.extend(f);
  }
  return hs[f];
}
function Nt(f, s = 0) {
  return Math.round(f * 10 ** s) / 10 ** s;
}
function me(f, s, r, a, l) {
  return r + (l - f) / (s - f) * (a - r);
}
function mu(f, s, r) {
  let a = 0, l = 0;
  const p = [];
  for (a = 0; a < r.length; a++)
    if (r[a] < f[l])
      p.push(s[l]);
    else {
      for (; l < f.length - 1 && f[l + 1] <= r[a]; )
        l++;
      l === f.length - 1 || r[a] === f[l] ? p.push(s[l]) : p.push(me(f[l], f[l + 1], s[l], s[l + 1], r[a]));
    }
  return p;
}
function wu(f) {
  let s, r, a, l, p = 0, d = 0, v = 0, y = 0, M = 0;
  for (s = 0; s < f.length; s++)
    r = f[s][0], a = f[s][1], l = f[s][2], M += l, p += l * r, v += l * (r * r), d += l * a, y += l * (r * a);
  const I = (d * v - p * y) / (M * v - p * p);
  return [(M * y - p * d) / (M * v - p * p), I];
}
function yu(f, s, r, a) {
  let l = 0, p = 0;
  const d = [];
  return r.forEach((v) => {
    for (; f[l] < v - a; )
      l++;
    for (l > 0 && f[l] >= v && l--; p < f.length - 1 && f[p + 1] <= v + a; )
      p++;
    p < f.length - 1 && f[p] <= v && p++;
    const y = Math.max(a, Math.abs(v - f[l]) + 1e-3, Math.abs(v - f[p]) + 1e-3), M = [];
    let I = 0;
    for (let m = l; m <= p; m++)
      I = (1 - (Math.abs(v - f[m]) / y) ** 3) ** 3, M.push([f[m], s[m], I]);
    d.push(wu(M));
  }), d;
}
function Ss(f, s, r) {
  return Nt(f, r) < Nt(s, r);
}
function b0(f, s, r) {
  return Nt(f, r) > Nt(s, r);
}
function we(f, s, r) {
  return Nt(f, r) <= Nt(s, r);
}
function Ur(f, s, r) {
  return Nt(f, r) >= Nt(s, r);
}
function $e(f, s, r) {
  return Nt(f, r) === Nt(s, r);
}
const j0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: mu,
  linearRegression: wu,
  req: $e,
  rgt: b0,
  rgte: Ur,
  rlt: Ss,
  rlte: we,
  round: Nt,
  wlslr: yu
}, Symbol.toStringTag, { value: "Module" })), ve = [
  "altitude",
  "grade",
  "terrain",
  "heat",
  "dark",
  "fatigue",
  "strategy"
];
class Cn {
  constructor(s) {
    A(this, "_data", {
      altitude: 1,
      grade: 1,
      terrain: 1,
      heat: 1,
      dark: 1,
      fatigue: 1,
      strategy: 1
    });
    A(this, "_combined");
    Object.assign(this, s);
  }
  init(s) {
    return ve.forEach((r) => this._data[r] = s), this;
  }
  get altitude() {
    return this._data.altitude;
  }
  set altitude(s) {
    this._data.altitude = s, delete this._combined;
  }
  get grade() {
    return this._data.grade;
  }
  set grade(s) {
    this._data.grade = s, delete this._combined;
  }
  get terrain() {
    return this._data.terrain;
  }
  set terrain(s) {
    this._data.terrain = s, delete this._combined;
  }
  get heat() {
    return this._data.heat;
  }
  set heat(s) {
    this._data.heat = s, delete this._combined;
  }
  get dark() {
    return this._data.dark;
  }
  set dark(s) {
    this._data.dark = s, delete this._combined;
  }
  get fatigue() {
    return this._data.fatigue;
  }
  set fatigue(s) {
    this._data.fatigue = s, delete this._combined;
  }
  get strategy() {
    return this._data.strategy;
  }
  set strategy(s) {
    this._data.strategy = s, delete this._combined;
  }
  get combined() {
    return this._combined === void 0 && (this._combined = ve.reduce((s, r) => s * this._data[r], 1)), this._combined;
  }
  /**
   * @param f - function to apply
   * @param factors - factor list to apply
   */
  applyEach(s, r) {
    ve.forEach((a) => this._data[a] = s(this._data[a], r[a]));
  }
  /**
   * get object representation
   */
  toObject() {
    return this._data;
  }
  /**
   * scale each factor
   * @param scale - scale to apply
   */
  scaleEach(s) {
    return ve.forEach((r) => this._data[r] *= s), delete this._combined, this;
  }
}
var ps = {}, uu;
function x0() {
  return uu || (uu = 1, function(f) {
    f.parseDMS = function(r) {
      if (typeof l == "object") throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
      if (typeof r == "number" && isFinite(r)) return Number(r);
      var a = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
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
      return /^-|[WS]$/i.test(r.trim()) && (l = -l), Number(l);
    }, f.toDMS = function(r, a, l) {
      if (typeof r == "object") throw new TypeError("geo.toDMS - deg is [DOM?] object");
      if (isNaN(r)) return null;
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
      switch (r = Math.abs(r), a) {
        case "d":
          v = r.toFixed(l), v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), dms = v + "°";
          break;
        case "dm":
          var p = (r * 60).toFixed(l), v = Math.floor(p / 60), y = (p % 60).toFixed(l);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), y < 10 && (y = "0" + y), dms = v + "°" + y + "′";
          break;
        case "dms":
          var d = (r * 3600).toFixed(l), v = Math.floor(d / 3600), y = Math.floor(d / 60) % 60, M = (d % 60).toFixed(l);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = v + "°" + y + "′" + M + "″";
          break;
      }
      return dms;
    }, f.toLat = function(r, a, l) {
      var p = f.toDMS(r, a, l);
      return p == null ? "." : p.slice(1) + (r < 0 ? "S" : "N");
    }, f.toLon = function(r, a, l) {
      var p = f.toDMS(r, a, l);
      return p == null ? "." : p + (r < 0 ? "W" : "E");
    }, f.toBrng = function(r, a, l) {
      r = (Number(r) + 360) % 360;
      var p = f.toDMS(r, a, l);
      return p == null ? "." : p.replace("360", "0");
    };
    var s = 6371;
    f.latlon = function(r, a) {
      this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN;
    }, f.latlon.prototype.distanceTo = function(r, a) {
      typeof a > "u" && (a = 4);
      var l = this.distanceRadTo(r), p = s * l;
      return p.toPrecisionFixed(a);
    }, f.latlon.prototype.distanceRadTo = function(r) {
      var a = this.lat.toRad(), l = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), v = p - a, y = d - l, M = Math.sin(v / 2) * Math.sin(v / 2) + Math.cos(a) * Math.cos(p) * Math.sin(y / 2) * Math.sin(y / 2), I = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
      return I;
    }, f.latlon.prototype.bearingTo = function(r) {
      var a = this.bearingRadTo(r);
      return (a.toDeg() + 360) % 360;
    }, f.latlon.prototype.bearingRadTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(p), v = Math.cos(l) * Math.sin(p), y = Math.atan2(v, d);
      return y;
    }, f.latlon.prototype.finalBearingTo = function(r) {
      var a = r.lat.toRad(), l = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(l), v = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(p), y = Math.atan2(d, v);
      return (y.toDeg() + 180) % 360;
    }, f.latlon.prototype.midpointTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(l) * Math.cos(p), v = Math.cos(l) * Math.sin(p), y = this.lng.toRad(), M = Math.atan2(Math.sin(a) + Math.sin(l), Math.sqrt((Math.cos(a) + d) * (Math.cos(a) + d) + v * v)), I = y + Math.atan2(v, Math.cos(a) + d);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(M.toDeg(), I.toDeg());
    }, f.midpoint = function(r) {
      var a = 0, l = 0, p = 0;
      for (var d in r) {
        var v = r[d], y = v.lat * Math.PI / 180, M = v.lng * Math.PI / 180, I = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), R = Math.sin(y);
        a += I, l += m, p += R;
      }
      a = a / r.length, l = l / r.length, p = p / r.length;
      var F = Math.atan2(l, a), T = Math.sqrt(a * a + l * l), P = Math.atan2(p, T);
      return new f.latlon(P * 180 / Math.PI, F * 180 / Math.PI);
    }, f.latlon.prototype.interpolate = function(r, a) {
      var l = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), v = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var y = Math.sin(d), M = Math.cos(d), I = [], m = 0; m < a; m++) {
        var R = 1 / (a - 1) * m, F = l * R, T = Math.sin(F), P = Math.cos(F), N = Math.asin(y * P + M * T * Math.cos(p)), q = v + Math.atan2(Math.sin(p) * T * M, P - y * Math.sin(N)), Z = N.toDeg(), J = q.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); J > 180; ) J -= 360;
        for (; J <= -180; ) J += 360;
        I.push(new f.latlon(Z, J));
      }
      return I;
    }, f.latlon.prototype.destinationPoint = function(r, a) {
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / s, r = r.toRad();
      var l = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(l) * Math.cos(a) + Math.cos(l) * Math.sin(a) * Math.cos(r)), v = p + Math.atan2(
        Math.sin(r) * Math.sin(a) * Math.cos(l),
        Math.cos(a) - Math.sin(l) * Math.sin(d)
      );
      return v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(d.toDeg(), v.toDeg());
    }, f.latlon.intersection = function(r, a, l, p) {
      a = typeof a == "number" ? a : typeof a == "string" && trim(a) != "" ? +a : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
      var d = r.lat.toRad(), v = r.lng.toRad(), y = l.lat.toRad(), M = l.lng.toRad(), I = a.toRad(), m = p.toRad(), R = y - d, F = M - v, T = 2 * Math.asin(Math.sqrt(Math.sin(R / 2) * Math.sin(R / 2) + Math.cos(d) * Math.cos(y) * Math.sin(F / 2) * Math.sin(F / 2)));
      if (T == 0) return null;
      var P = Math.acos((Math.sin(y) - Math.sin(d) * Math.cos(T)) / (Math.sin(T) * Math.cos(d)));
      isNaN(P) && (P = 0);
      var N = Math.acos((Math.sin(d) - Math.sin(y) * Math.cos(T)) / (Math.sin(T) * Math.cos(y)));
      if (Math.sin(M - v) > 0)
        var q = P, Z = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - P, Z = N;
      var J = (I - q + Math.PI) % (2 * Math.PI) - Math.PI, it = (Z - m + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(J) == 0 && Math.sin(it) == 0 || Math.sin(J) * Math.sin(it) < 0) return null;
      var _t = Math.acos(-Math.cos(J) * Math.cos(it) + Math.sin(J) * Math.sin(it) * Math.cos(T)), Bt = Math.atan2(
        Math.sin(T) * Math.sin(J) * Math.sin(it),
        Math.cos(it) + Math.cos(J) * Math.cos(_t)
      ), St = Math.asin(Math.sin(d) * Math.cos(Bt) + Math.cos(d) * Math.sin(Bt) * Math.cos(I)), jt = Math.atan2(
        Math.sin(I) * Math.sin(Bt) * Math.cos(d),
        Math.cos(Bt) - Math.sin(d) * Math.sin(St)
      ), Ht = v + jt;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(St.toDeg(), Ht.toDeg());
    }, f.latlon.prototype.rhumbDistanceTo = function(r) {
      var a = s, l = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), v = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(l / 2 + Math.PI / 4)), M = isFinite(d / y) ? d / y : Math.cos(l);
      Math.abs(v) > Math.PI && (v = v > 0 ? -(2 * Math.PI - v) : 2 * Math.PI + v);
      var I = Math.sqrt(d * d + M * M * v * v) * a;
      return I.toPrecisionFixed(4);
    }, f.latlon.prototype.rhumbBearingTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var v = Math.atan2(p, d);
      return (v.toDeg() + 360) % 360;
    }, f.latlon.prototype.rhumbDestinationPoint = function(r, a) {
      var l = s, p = parseFloat(a) / l, d = this.lat.toRad(), v = this.lng.toRad();
      r = r.toRad();
      var y = p * Math.cos(r);
      Math.abs(y) < 1e-10 && (y = 0);
      var M = d + y, I = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(y / I) ? y / I : Math.cos(d), R = p * Math.sin(r) / m;
      Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
      var F = (v + R + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new f.latlon(M.toDeg(), F.toDeg());
    }, f.latlon.prototype.rhumbMidpointTo = function(r) {
      var a = this.lat.toRad(), l = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
      Math.abs(d - l) > Math.PI && (l += 2 * Math.PI);
      var v = (a + p) / 2, y = Math.tan(Math.PI / 4 + a / 2), M = Math.tan(Math.PI / 4 + p / 2), I = Math.tan(Math.PI / 4 + v / 2), m = ((d - l) * Math.log(I) + l * Math.log(M) - d * Math.log(y)) / Math.log(M / y);
      return isFinite(m) || (m = (l + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(v.toDeg(), m.toDeg());
    }, f.latlon.prototype.lat = function(r, a) {
      return typeof r > "u" ? this.lat : f.toLat(this.lat, r, a);
    }, f.latlon.prototype.lon = function(r, a) {
      return typeof r > "u" ? this.lng : f.toLon(this.lng, r, a);
    }, f.latlon.prototype.toString = function(r, a) {
      return typeof r > "u" && (r = "dms"), f.toLat(this.lat, r, a) + ", " + f.toLon(this.lng, r, a);
    }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
      return this * 180 / Math.PI;
    }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
      var a = this.toPrecision(r);
      return a = a.replace(/(.+)e\+(.+)/, function(l, p, d) {
        p = p.replace(/\./, "");
        for (var v = p.length - 1; d-- > v; ) p = p + "0";
        return p;
      }), a = a.replace(/(.+)e-(.+)/, function(l, p, d) {
        for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
        return "0." + p;
      }), a;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ps)), ps;
}
var A0 = x0();
class Mu {
  constructor(s) {
    A(this, "_data");
    this._data = Array.isArray(s) ? {
      lat: s[0],
      lon: s[1],
      alt: s[2]
    } : s;
  }
  get alt() {
    return this._data.alt;
  }
  get lat() {
    return this._data.lat;
  }
  get latlon() {
    return "latlon" in this._data ? this._data.latlon : new A0.latlon(this.lat, this.lon);
  }
  get lon() {
    return this._data.lon;
  }
}
class bs extends Mu {
  constructor(r, a, l) {
    super(r);
    A(this, "_trackData");
    this._trackData = { grade: l, loc: a };
  }
  get grade() {
    return this._trackData.grade;
  }
  get loc() {
    return this._trackData.loc;
  }
}
class ws extends bs {
  constructor(r, a, l) {
    super(a, a.loc, a.grade);
    A(this, "_data");
    A(this, "factors", new Cn());
    A(this, "course");
    A(this, "loop");
    this.course = r, this.loop = l, this._data = a;
  }
  get grade() {
    var a;
    const r = (a = this._data) == null ? void 0 : a.grade;
    return r * (r > 0 ? this.course.gainScale : this.course.lossScale);
  }
  get loc() {
    let r = this._data.loc * this.course.distScale;
    return this.loop && (r += this.course.loopDist * this.loop), r;
  }
}
const I0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function Cu(f, s) {
  (s === null || typeof s > "u") && (s = I0);
  let r = 0;
  return Array.isArray(f) ? r = (f[0] + f[1]) / 2 : r = f, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const cu = {
  baseline: 0,
  terrainScale: 1
};
function E0(f, s) {
  function r(a) {
    return a < f.noon ? a + 86400 : a;
  }
  return s >= f.sunrise && s <= f.sunset ? 0 : !isNaN(f.dawn) && !isNaN(f.dusk) && (s <= f.dawn || s >= f.dusk) ? 1 : r(s) >= r(f.nadir) ? me(
    r(isNaN(f.dawn) ? f.nadir : f.dawn),
    r(f.sunrise),
    1,
    0,
    r(s)
  ) : me(
    r(f.sunset),
    r(isNaN(f.dusk) ? f.nadir : f.dusk),
    0,
    1,
    r(s)
  );
}
function Su(f, s, r, a = cu) {
  if (s === 1 || f >= r.sunrise && f <= r.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = cu);
  const l = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (a.terrainScale * (s - 1) + a.baseline) * l, d = E0(r, f);
  return 1 + p * d;
}
const P0 = {
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
function bu(f, s) {
  return (s === null || typeof s > "u") && (s = P0), f < s.lower.lim ? s.lower.m * f + s.lower.b : f > s.upper.lim ? s.upper.m * f + s.upper.b : s.a * f ** 2 + s.b * f + 1;
}
function xu(f, s) {
  if (!s) return 1;
  const r = f.tod;
  let a = 1;
  if (r > s.start && r < s.stop) {
    const l = (r - s.start) / (s.stop - s.start) * Math.PI;
    a += (s.max - s.baseline) * Math.sin(l) / 100;
  }
  return a += s.baseline / 100, a;
}
function Au(f, s) {
  const r = K.findLast(s.terrain, (a) => we(a.percents[0] * s.dist, f.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const R0 = [
  "altitude",
  "grade",
  "terrain",
  "heat",
  "dark",
  "fatigue",
  "strategy"
];
function xs(f) {
  const s = new Cn().init(0);
  return f.forEach(({ factors: r, dist: a }) => {
    s.applyEach((l, p) => l + a * p, r);
  }), s.scaleEach(1 / vu.sumBy(f, "dist")), s;
}
function T0(f, s) {
  let r = 0, a = 0;
  return f.forEach((l, p) => {
    const d = p === f.length - 1 ? s : f[p + 1].onset, v = l.type === "linear" ? l.value / 2 : l.value;
    a += (r + v) * (d - l.onset), r += l.value;
  }), a / s;
}
function F0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function L0(f, s, r) {
  let a = -T0(s, r);
  return s.forEach((l, p) => {
    if (f >= l.onset) {
      if (l.type === "step")
        a += l.value;
      else if (l.type === "linear") {
        const d = p === s.length - 1 ? r : s[p + 1].onset;
        f > d ? a += l.value : a += l.value * (f - l.onset) / (d - l.onset);
      }
    }
  }), a;
}
class Iu {
  constructor(s, r) {
    A(this, "plan");
    A(this, "values");
    this.plan = s, this.values = r ? K.cloneDeep(r) : [{ onset: 0, value: F0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + L0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((a) => a.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function ys(f, s) {
  return s === void 0 ? f : (f - 1) * s + 1;
}
function As(f, s) {
  f.factors || (f.factors = new Cn()), Object.assign(f.factors, {
    grade: bu(f.grade),
    altitude: Cu(f.alt),
    terrain: Au(f, s)
  });
}
function Wr(f, s) {
  var r, a;
  if (f.factors || (f.factors = new Cn()), As(f, s.course), s) {
    if (f.factors === void 0) throw new Error("no factors");
    f.factors.strategy = s.strategy.at(f.loc), Object.assign(f.factors, {
      heat: s.heatModel ? xu(f, s.heatModel) : 1,
      dark: s.event.sun ? Su(f.tod, f.factors.terrain, s.event.sun) : 1
    });
  }
  f.factors.altitude = ys(f.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), f.factors.dark = ys(f.factors.dark, (a = s.scales) == null ? void 0 : a.dark);
}
const t_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: Iu,
  applyScale: ys,
  factorKeys: ve,
  generateCourseFactors: As,
  generatePlanFactors: Wr,
  getAltitudeFactor: Cu,
  getDarkFactor: Su,
  getGradeFactor: bu,
  getHeatFactor: xu,
  getTerrainFactor: Au,
  rollup: xs,
  typeList: R0
}, Symbol.toStringTag, { value: "Module" }));
function Eu(f) {
  switch (f) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function Dr(f) {
  return typeof f == "number" && !isNaN(f);
}
function k0(f, s, r) {
  const a = f.filter(
    (p, d) => d >= f.findIndex((v) => v === s) && d <= f.findIndex((v) => v === r)
  ), l = a.map((p, d) => ({
    factors: p.factors,
    dist: d === a.length - 1 ? 0 : a[d + 1].loc - a[d].loc
  }));
  return l.pop(), xs(l);
}
class Pu {
  constructor(s) {
    A(this, "point1");
    A(this, "point2");
    /**
     * elevation gain (m) over segment
     */
    A(this, "gain");
    /**
     * elevation loss (m) over segment
     */
    A(this, "loss");
    /**
     * average grade (%) over segment
     */
    A(this, "grade");
    /**
     * waypoint at end of segment
     */
    A(this, "waypoint");
    A(this, "_name");
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
class O0 extends Pu {
  constructor(r, a) {
    super(a);
    A(this, "_course");
    A(this, "point1");
    A(this, "point2");
    this._course = r, this.point1 = a.point1, this.point2 = a.point2;
  }
}
class D0 extends Pu {
  constructor(r, a) {
    super(a);
    A(this, "_plan");
    A(this, "point1");
    A(this, "point2");
    A(this, "_factors");
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
    if (!(!Dr(this.point1.elapsed) || !Dr(this.point2.elapsed) || !Dr(this.point1.time) || !Dr(this.point2.time)))
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
    if (!(!K.isNumber(this.point1.time) || !K.isNumber(this.point2.time)))
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
    return this._factors || (this._factors = k0(this._plan.points, this.point1, this.point2));
  }
}
const gs = Kn("CourseSplits");
class N0 {
  constructor(s) {
    A(this, "_segments");
    A(this, "_miles");
    A(this, "_kilometers");
    A(this, "course");
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
    gs("createSegments");
    const s = this.course.waypoints.filter((a) => a.tier < 3).sort((a, l) => a.loc - l.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((a) => a.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, l) => {
      a.waypoint = s[l + 1];
    }), r;
  }
  createSplits(s) {
    gs(`createSplits:${s}`);
    const r = Eu(s), a = K.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - a[a.length - 1] > 1e-4 && a.push(this.course.dist);
    const l = this.calcSegments(this.course.locationsToBreaks(a));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var R;
    gs.extend("calcSegments")("exec");
    const a = this.course, l = a.points, p = [], d = [];
    let v, y, M = a.points[0], I;
    for (v = 0, y = s.length; v < y; v++) {
      const F = s[v];
      I && $e((R = s[v - 1]) == null ? void 0 : R.end, F.start, 4) ? M = I : M = a.getPoint(F.start), I = a.getPoint(F.end);
      const T = F.end - F.start, P = new O0(this.course, {
        gain: 0,
        loss: 0,
        grade: T > 0 ? (I.alt - M.alt) / T / 10 * (I.alt - M.alt > 0 ? a.gainScale : a.lossScale) : 0,
        point1: M,
        point2: I
      }), N = new Cn().init(0);
      p.push(P), d.push(N);
    }
    const m = (F, T, P, N) => {
      const q = P.alt - T.alt;
      F[q > 0 ? "gain" : "loss"] += q * (q > 0 ? a.gainScale : a.lossScale), As(T, a);
      const Z = P.loc - T.loc;
      N.applyEach((J, it) => J + it * Z, T.factors);
    };
    v = 1;
    for (let F = 0; F < p.length; F++) {
      const T = p[F], P = d[F];
      for (; we(l[v].loc, T.point1.loc, 4); ) v++;
      let N = T.point1;
      for (; v < l.length && we(l[v].loc, T.point2.loc, 4); ) {
        const q = l[v];
        m(T, N, q, P), N = q, v++;
      }
      m(T, N, T.point2, P);
    }
    return p;
  }
}
function Ru(f, s, r) {
  if (f.loc > s.loc && r > f.loc || s.loc > f.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const a = Math.abs(f.loc - r), l = f.latlon.bearingTo(s.latlon), { lat: p, lng: d } = f.latlon.destinationPoint(l, a), v = f.grade, y = me(f.loc, s.loc, f.alt, s.alt, r);
  return new bs([p, d, y], r, v);
}
function B0(f, s) {
  return (typeof f == "object" ? String(f.id) : f) === (typeof s == "object" ? String(s.id) : s);
}
function Ms(f, s) {
  return !!(f && s && B0(f.site, s.site) && f.loop === s.loop);
}
class lu {
  constructor(s, r = 1) {
    A(this, "_data");
    A(this, "loop");
    A(this, "site");
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
    if (!K.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
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
      const r = (s = this.site.cutoffs) == null ? void 0 : s.find((a) => a.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(s) {
    var a;
    const r = (a = this.site.cutoffs) == null ? void 0 : a.findIndex((l) => l.loop === this.loop);
    r >= 0 ? s ? this.site.cutoffs[r].time = s : this.site.cutoffs.splice(r, 1) : s && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: s, loop: this.loop }));
  }
  matchingSegment(s) {
    return s.find((r) => r.waypoint && Ms(this, r.waypoint));
  }
}
const Nr = Kn("models:Waypoint");
class ds {
  constructor(s, r) {
    A(this, "_waypoints");
    A(this, "_lat", NaN);
    A(this, "_lon", NaN);
    A(this, "_alt", NaN);
    A(this, "_data");
    A(this, "course");
    A(this, "cutoffs", []);
    A(this, "id");
    A(this, "name");
    A(this, "tier", 1);
    A(this, "type");
    A(this, "description");
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Nr(`constructor: ${this.name}`);
  }
  /**
   * @deprecated - use a version tracker like Plan and Course
   */
  clearCache() {
    Nr(`clearCache: ${this.name}`), delete this._waypoints, this._lat = NaN, this._lon = NaN, this._alt = NaN;
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
    return this._waypoints ? this._waypoints : (Nr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new lu(this, this.course.loops)] : this._waypoints = K.range(this.course.loops).map((s) => new lu(this, s + 1)), this._waypoints);
  }
  get lat() {
    return K.isNaN(this._lat) && this.refreshLLA(), this._lat;
  }
  get lon() {
    return K.isNaN(this._lon) && this.refreshLLA(), this._lon;
  }
  get alt() {
    return K.isNaN(this._alt) && this.refreshLLA(), this._alt;
  }
  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    Nr("refreshLLA");
    let s, r, a;
    this.type === "start" ? { lat: s, lon: r, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: a } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: a } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = a, this.course.version++;
  }
}
var _s = { exports: {} }, fu;
function W0() {
  return fu || (fu = 1, function(f, s) {
    (function() {
      var r = Math.PI, a = Math.sin, l = Math.cos, p = Math.tan, d = Math.asin, v = Math.atan2, y = Math.acos, M = r / 180, I = 1e3 * 60 * 60 * 24, m = 2440588, R = 2451545;
      function F(k) {
        return k.valueOf() / I - 0.5 + m;
      }
      function T(k) {
        return new Date((k + 0.5 - m) * I);
      }
      function P(k) {
        return F(k) - R;
      }
      var N = M * 23.4397;
      function q(k, $) {
        return v(a(k) * l(N) - p($) * a(N), l(k));
      }
      function Z(k, $) {
        return d(a($) * l(N) + l($) * a(N) * a(k));
      }
      function J(k, $, G) {
        return v(a(k), l(k) * a($) - p(G) * l($));
      }
      function it(k, $, G) {
        return d(a($) * a(G) + l($) * l(G) * l(k));
      }
      function _t(k, $) {
        return M * (280.16 + 360.9856235 * k) - $;
      }
      function Bt(k) {
        return k < 0 && (k = 0), 2967e-7 / Math.tan(k + 312536e-8 / (k + 0.08901179));
      }
      function St(k) {
        return M * (357.5291 + 0.98560028 * k);
      }
      function jt(k) {
        var $ = M * (1.9148 * a(k) + 0.02 * a(2 * k) + 3e-4 * a(3 * k)), G = M * 102.9372;
        return k + $ + G + r;
      }
      function Ht(k) {
        var $ = St(k), G = jt($);
        return {
          dec: Z(G, 0),
          ra: q(G, 0)
        };
      }
      var Tt = {};
      Tt.getPosition = function(k, $, G) {
        var ft = M * -G, nt = M * $, ht = P(k), ot = Ht(ht), ct = _t(ht, ft) - ot.ra;
        return {
          azimuth: J(ct, nt, ot.dec),
          altitude: it(ct, nt, ot.dec)
        };
      };
      var ye = Tt.times = [
        [-0.833, "sunrise", "sunset"],
        [-0.3, "sunriseEnd", "sunsetStart"],
        [-6, "dawn", "dusk"],
        [-12, "nauticalDawn", "nauticalDusk"],
        [-18, "nightEnd", "night"],
        [6, "goldenHourEnd", "goldenHour"]
      ];
      Tt.addTime = function(k, $, G) {
        ye.push([k, $, G]);
      };
      var qe = 9e-4;
      function $r(k, $) {
        return Math.round(k - qe - $ / (2 * r));
      }
      function Me(k, $, G) {
        return qe + (k + $) / (2 * r) + G;
      }
      function Ge(k, $, G) {
        return R + k + 53e-4 * a($) - 69e-4 * a(2 * G);
      }
      function qr(k, $, G) {
        return y((a(k) - a($) * a(G)) / (l($) * l(G)));
      }
      function Sn(k) {
        return -2.076 * Math.sqrt(k) / 60;
      }
      function _n(k, $, G, ft, nt, ht, ot) {
        var ct = qr(k, G, ft), Mt = Me(ct, $, nt);
        return Ge(Mt, ht, ot);
      }
      Tt.getTimes = function(k, $, G, ft) {
        ft = ft || 0;
        var nt = M * -G, ht = M * $, ot = Sn(ft), ct = P(k), Mt = $r(ct, nt), Kt = Me(0, nt, Mt), Ft = St(Kt), Wt = jt(Ft), vn = Z(Wt, 0), vt = Ge(Kt, Ft, Wt), Lt, kn, Ct, Ut, fn, tn, pt = {
          solarNoon: T(vt),
          nadir: T(vt - 0.5)
        };
        for (Lt = 0, kn = ye.length; Lt < kn; Lt += 1)
          Ct = ye[Lt], Ut = (Ct[0] + ot) * M, fn = _n(Ut, nt, ht, vn, Mt, Ft, Wt), tn = vt - (fn - vt), pt[Ct[1]] = T(tn), pt[Ct[2]] = T(fn);
        return pt;
      };
      function ze(k) {
        var $ = M * (218.316 + 13.176396 * k), G = M * (134.963 + 13.064993 * k), ft = M * (93.272 + 13.22935 * k), nt = $ + M * 6.289 * a(G), ht = M * 5.128 * a(ft), ot = 385001 - 20905 * l(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Tt.getMoonPosition = function(k, $, G) {
        var ft = M * -G, nt = M * $, ht = P(k), ot = ze(ht), ct = _t(ht, ft) - ot.ra, Mt = it(ct, nt, ot.dec), Kt = v(a(ct), p(nt) * l(ot.dec) - a(ot.dec) * l(ct));
        return Mt = Mt + Bt(Mt), {
          azimuth: J(ct, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Tt.getMoonIllumination = function(k) {
        var $ = P(k || /* @__PURE__ */ new Date()), G = Ht($), ft = ze($), nt = 149598e3, ht = y(a(G.dec) * a(ft.dec) + l(G.dec) * l(ft.dec) * l(G.ra - ft.ra)), ot = v(nt * a(ht), ft.dist - nt * l(ht)), ct = v(l(G.dec) * a(G.ra - ft.ra), a(G.dec) * l(ft.dec) - l(G.dec) * a(ft.dec) * l(G.ra - ft.ra));
        return {
          fraction: (1 + l(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (ct < 0 ? -1 : 1) / Math.PI,
          angle: ct
        };
      };
      function bn(k, $) {
        return new Date(k.valueOf() + $ * I / 24);
      }
      Tt.getMoonTimes = function(k, $, G, ft) {
        var nt = new Date(k);
        ft ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * M, ot = Tt.getMoonPosition(nt, $, G).altitude - ht, ct, Mt, Kt, Ft, Wt, vn, vt, Lt, kn, Ct, Ut, fn, tn, pt = 1; pt <= 24 && (ct = Tt.getMoonPosition(bn(nt, pt), $, G).altitude - ht, Mt = Tt.getMoonPosition(bn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + Mt) / 2 - ct, vn = (Mt - ot) / 2, vt = -vn / (2 * Wt), Lt = (Wt * vt + vn) * vt + ct, kn = vn * vn - 4 * Wt * ct, Ct = 0, kn >= 0 && (tn = Math.sqrt(kn) / (Math.abs(Wt) * 2), Ut = vt - tn, fn = vt + tn, Math.abs(Ut) <= 1 && Ct++, Math.abs(fn) <= 1 && Ct++, Ut < -1 && (Ut = fn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Ft = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? fn : Ut), Ft = pt + (Lt < 0 ? Ut : fn)), !(Kt && Ft)); pt += 2)
          ot = Mt;
        var mn = {};
        return Kt && (mn.rise = bn(nt, Kt)), Ft && (mn.set = bn(nt, Ft)), !Kt && !Ft && (mn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
      }, f.exports = Tt;
    })();
  }(_s)), _s.exports;
}
var hu = W0();
function Hn(f, s) {
  const r = f.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: s
  }).split(":").map((a) => Number(a));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class U0 {
  constructor(s) {
    A(this, "nadir", 0);
    A(this, "dawn", 0);
    A(this, "sunrise", 0);
    A(this, "dusk", 0);
    A(this, "sunset", 0);
    A(this, "noon", 0);
    A(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class Tu {
  constructor(s, r, a, l) {
    A(this, "start");
    A(this, "lat");
    A(this, "lon");
    A(this, "timezone");
    A(this, "sun");
    A(this, "startTime");
    this.start = s, this.lat = a, this.lon = l, this.timezone = r;
    const p = hu.getTimes(this.start, this.lat, this.lon), d = hu.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new U0({
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
const We = Kn("models:Course"), $0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class n_ {
  constructor(s, r) {
    A(this, "_cache", {});
    /**
     * Course data
     */
    A(this, "_data");
    /**
     * Course name
     */
    A(this, "name");
    /**
     * Track object
     */
    A(this, "track");
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    A(this, "version", 0);
    We("constructor"), this.track = s, this._data = r, this.version = 1;
  }
  get cache() {
    var s;
    return ((s = this._cache) == null ? void 0 : s.version) === this.version ? this._cache : (this._cache = { version: this.version }, this._cache);
  }
  /**
   * Course cutoffs
   */
  get cutoffs() {
    return "cutoffs" in this.cache ? this.cache.cutoffs : (this.cache.cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new q0(s)), this.cache.cutoffs);
  }
  /**
   * Total distance of course (in km)
   */
  get dist() {
    return "dist" in this.cache ? this.cache.dist : (this.cache.dist = this._data.dist || this.track.dist * this.loops, this.cache.dist);
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
    if ("event" in this.cache) return this.cache.event;
    if (this._data.start)
      return this.cache.event = new Tu(
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
    return "gain" in this.cache ? this.cache.gain : (this.cache.gain = this._data.gain || this.track.gain * this.loops, this.cache.gain);
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
    return "loss" in this.cache ? this.cache.loss : (this.cache.loss = this._data.loss || this.track.loss * this.loops, this.cache.loss);
  }
  /**
   * Loss scale of course (in meters), relative to calculated track loss
   */
  get lossScale() {
    return this._data.loss ? this._data.loss / (this.track.loss * this.loops) : 1;
  }
  /**
   * Course points
   */
  get points() {
    if ("points" in this.cache) return this.cache.points;
    We("generating points array"), this.cache.points = new Array(this.track.points.length * this.loops);
    for (let s = 0; s < this.loops; s++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + s * this.track.points.length] = new ws(
          this,
          this.track.points[r],
          s
        );
    return this.cache.points;
  }
  /**
   * Course sites
   */
  get sites() {
    var s;
    if ("sites" in this.cache) return this.cache.sites;
    if (this.cache.sites = ((s = this._data.sites) == null ? void 0 : s.map((r) => new ds(this, r))) || [
      new ds(this, {
        id: String(K.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new ds(this, {
        id: String(K.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ], this.cache.sites.length < 2 || !this.cache.sites.find((r) => r.type === "start") || !this.cache.sites.find((r) => r.type === "finish"))
      throw new Error("Course must have at least a start and finish");
    return this.cache.sites;
  }
  /**
   * Course splits
   */
  get splits() {
    return "splits" in this.cache ? this.cache.splits : (this.cache.splits = new N0(this), this.cache.splits);
  }
  /**
   * Course stats
   */
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    We("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), a = this.terrain.map((d) => d.value / 100 + 1), l = {
      altitude: {
        avg: K.sum(
          this.track.points.map((d, v) => {
            var y;
            return d.alt * (d.loc - (((y = this.track.points[v - 1]) == null ? void 0 : y.loc) || 0));
          })
        ) / this.track.dist,
        max: K.max(s) || 0,
        min: K.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: K.max(r) || 0,
        min: K.min(r) || 0
      },
      terrain: {
        avg: (K.sumBy(this.terrain, (d) => (d.percents[1] - d.percents[0]) * this.dist * d.value) / this.dist + 100) / 100,
        max: K.max(a) || 0,
        min: K.min(a) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrain.reduce(
      (v, y) => y.value / 100 + 1 === d ? v + (y.percents[1] - y.percents[0]) * this.dist : v,
      0
    );
    return Object.assign(l.terrain, {
      maxDist: p(l.terrain.max),
      minDist: p(l.terrain.min)
    }), this.cache.stats = l, l;
  }
  /**
   * Terrain data
   */
  get terrain() {
    if ("terrain" in this.cache) return this.cache.terrain;
    if (this._data.terrain) {
      const s = [...this._data.terrain];
      s.sort((r, a) => r.percent - a.percent), this.cache.terrain = s.map((r, a) => {
        var v, y;
        const l = K.isNumber(r.value) ? r.value : K.isString(r.value) ? ((v = $0.find((M) => M.type === r.value)) == null ? void 0 : v.value) || 0 : r.value.value, p = typeof r == "string" ? r : K.isObject(r.value) ? r.value.type : void 0;
        return {
          value: l,
          type: p,
          percents: [r.percent, ((y = s[a + 1]) == null ? void 0 : y.percent) || 1]
        };
      });
    } else
      this.cache.terrain = [];
    return this.cache.terrain;
  }
  /**
   * Course waypoints
   */
  get waypoints() {
    var r;
    if ("waypoints" in this.cache) return this.cache.waypoints;
    if (!((r = this.track) != null && r.dist)) return [];
    let s = [];
    return this.sites.forEach((a) => {
      s.push(...a.waypoints);
    }), s = s.sort((a, l) => a.loc - l.loc), this.cache.waypoints = s, this.cache.waypoints;
  }
  update(s) {
    We("update"), Object.assign(this._data, s), this.version++, this.sites.forEach((r) => {
      r.clearCache();
    });
  }
  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The CoursePoint at input location.
   */
  getPoint(s, r = !1) {
    const a = this.points.findIndex((M) => Ur(M.loc, s, 4)), l = this.points[a];
    if ($e(l.loc, s, 4)) return l;
    We(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = a - 1, d = this.points[p], v = Ru(d._data, l._data, s % this.loopDist / this.distScale), y = new ws(this, v, Math.floor(s / this.loopDist));
    return r && this.points.splice(a, 0, y), y;
  }
  locationsToBreaks(s) {
    const r = s.filter((l) => l > 0 && Ss(l, this.dist, 4));
    return r.unshift(0), r.map((l, p) => ({ start: l, end: r[p + 1] || this.dist }));
  }
}
class q0 {
  constructor(s) {
    A(this, "waypoint");
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
var vs = {}, pu;
function G0() {
  return pu || (pu = 1, function(f) {
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
        return l(d(v), arguments);
      }
      function a(v, y) {
        return r.apply(null, [v].concat(y || []));
      }
      function l(v, y) {
        var M = 1, I = v.length, m, R = "", F, T, P, N, q, Z, J, it;
        for (F = 0; F < I; F++)
          if (typeof v[F] == "string")
            R += v[F];
          else if (typeof v[F] == "object") {
            if (P = v[F], P.keys)
              for (m = y[M], T = 0; T < P.keys.length; T++) {
                if (m == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', P.keys[T], P.keys[T - 1]));
                m = m[P.keys[T]];
              }
            else P.param_no ? m = y[P.param_no] : m = y[M++];
            if (s.not_type.test(P.type) && s.not_primitive.test(P.type) && m instanceof Function && (m = m()), s.numeric_arg.test(P.type) && typeof m != "number" && isNaN(m))
              throw new TypeError(r("[sprintf] expecting number but found %T", m));
            switch (s.number.test(P.type) && (J = m >= 0), P.type) {
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
                m = JSON.stringify(m, null, P.width ? parseInt(P.width) : 0);
                break;
              case "e":
                m = P.precision ? parseFloat(m).toExponential(P.precision) : parseFloat(m).toExponential();
                break;
              case "f":
                m = P.precision ? parseFloat(m).toFixed(P.precision) : parseFloat(m);
                break;
              case "g":
                m = P.precision ? String(Number(m.toPrecision(P.precision))) : parseFloat(m);
                break;
              case "o":
                m = (parseInt(m, 10) >>> 0).toString(8);
                break;
              case "s":
                m = String(m), m = P.precision ? m.substring(0, P.precision) : m;
                break;
              case "t":
                m = String(!!m), m = P.precision ? m.substring(0, P.precision) : m;
                break;
              case "T":
                m = Object.prototype.toString.call(m).slice(8, -1).toLowerCase(), m = P.precision ? m.substring(0, P.precision) : m;
                break;
              case "u":
                m = parseInt(m, 10) >>> 0;
                break;
              case "v":
                m = m.valueOf(), m = P.precision ? m.substring(0, P.precision) : m;
                break;
              case "x":
                m = (parseInt(m, 10) >>> 0).toString(16);
                break;
              case "X":
                m = (parseInt(m, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            s.json.test(P.type) ? R += m : (s.number.test(P.type) && (!J || P.sign) ? (it = J ? "+" : "-", m = m.toString().replace(s.sign, "")) : it = "", q = P.pad_char ? P.pad_char === "0" ? "0" : P.pad_char.charAt(1) : " ", Z = P.width - (it + m).length, N = P.width && Z > 0 ? q.repeat(Z) : "", R += P.align ? it + m + N : q === "0" ? it + N + m : N + it + m);
          }
        return R;
      }
      var p = /* @__PURE__ */ Object.create(null);
      function d(v) {
        if (p[v])
          return p[v];
        for (var y = v, M, I = [], m = 0; y; ) {
          if ((M = s.text.exec(y)) !== null)
            I.push(M[0]);
          else if ((M = s.modulo.exec(y)) !== null)
            I.push("%");
          else if ((M = s.placeholder.exec(y)) !== null) {
            if (M[2]) {
              m |= 1;
              var R = [], F = M[2], T = [];
              if ((T = s.key.exec(F)) !== null)
                for (R.push(T[1]); (F = F.substring(T[0].length)) !== ""; )
                  if ((T = s.key_access.exec(F)) !== null)
                    R.push(T[1]);
                  else if ((T = s.index_access.exec(F)) !== null)
                    R.push(T[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              M[2] = R;
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
          y = y.substring(M[0].length);
        }
        return p[v] = I;
      }
      f.sprintf = r, f.vsprintf = a, typeof window < "u" && (window.sprintf = r, window.vsprintf = a);
    })();
  }(vs)), vs;
}
var Cs = G0();
const z0 = Kn("PaceChunk");
class H0 {
  constructor() {
    A(this, "iterations", !1);
    A(this, "factor", !1);
    A(this, "target", !1);
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
  constructor(s, r, a, l) {
    A(this, "constraints");
    A(this, "points");
    A(this, "plan");
    A(this, "delay");
    A(this, "factor");
    A(this, "factors", new Cn());
    A(this, "status");
    this.constraints = a, this.points = r, this.plan = s, this.delay = l, this.factor = 1;
  }
  get elapsed() {
    const s = K.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (K.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
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
    s[0].elapsed = K.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - K.sum(this.plan.pacing.chunks.filter((M) => M.points[0].loc < s[0].loc).map((M) => M.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, a = s[0].delay || 0, l = 0, p = 0, d = 0;
    const v = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, I = s.length; M < I; M++) {
      l = s[M].loc - s[M - 1].loc, Wr(s[M - 1], this.plan), y.applyEach((R, F) => R + F * l, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * l, p = v * m * l, s[M].time = s[M - 1].time + p, a = s[M - 1].delay || 0, r += p + a, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Wr(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = z0.extend(
      Cs.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let l = this.factor || 0, p;
    const d = new H0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !K.round(l - this.factor, 10), l = this.factor, d.target = Math.abs(
      (K.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, a(Cs.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    a("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const ln = Kn("Pacing");
class K0 {
  constructor(s) {
    A(this, "chunks", []);
    A(this, "plan");
    A(this, "_factor");
    A(this, "_factors");
    /**
     * last time this pacing was updated
     */
    A(this, "version");
    this.plan = s;
  }
  clearCache() {
    ln("clearCache"), delete this._factor, delete this._factors;
  }
  get elapsed() {
    return ln("elapsed:get"), this.plan.points[this.plan.points.length - 1].elapsed;
  }
  get pace() {
    return ln("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._factor ? this._factor : (ln("factor:update"), this.chunks && (this._factor = K.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return ln("factors:get"), this._factors || (ln("factors:update"), this._factors = xs(this.chunks)), this._factors;
  }
  /**
   * check if this pacing is current
   */
  get isCurrent() {
    return this.version === this.plan.version;
  }
  get np() {
    return ln("np:get"), this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.plan.delay;
  }
  get status() {
    var s, r, a;
    return {
      complete: ((s = this.chunks) == null ? void 0 : s.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((l) => {
        var p;
        return !((p = l.status) != null && p.success);
      }).length) === 0,
      chunks: ((a = this.chunks) == null ? void 0 : a.length) || 0
    };
  }
  calculate() {
    var a, l;
    const s = ln.extend("calculate");
    s("exec"), s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (a = this.plan.course.terrain) == null || a.forEach(
      (p) => this.plan.getPoint(p.percents[0] * this.plan.course.dist, !0)
    ), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint(p.loc, !0);
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      p.delay = 0;
    }), (l = this.plan.delays) == null || l.forEach((p) => {
      const d = this.plan.getPoint(p.loc, !0);
      d.delay = p.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...K.reverse([...this.plan.cutoffs]), null].forEach((p) => {
      for (; this.chunks.find((d) => !d.status); )
        this.calcChunks(), this.validateChunks();
      if (!p) return !0;
      if (p.point.elapsed - p.time > 0.5) {
        s(`cutoff at ${p.loc} missed`);
        const d = this.chunks[0];
        K.last(d.points) === p.point ? (s(`setting cutoff at ${p.loc}`), d.constraints = [0, p.time], delete d.status) : this.splitChunk(d, p.point, p.time);
      }
    }), K.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), ln(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.version = this.plan.version;
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
    this.chunks = [new gu(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    ln("calcChunks"), this.clearCache(), this.chunks.filter((s) => !s.status).forEach((s) => s.calculate());
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
    ln.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((y) => y === r), d = K.round(r.elapsed - r.time), v = new gu(this.plan, s.points.slice(0, p + 1), [0, a], d);
    v.points.filter((y, M) => M < v.points.length - 1).forEach((y) => {
      y._chunk = v;
    }), this.chunks.unshift(v), s.constraints[0] = a, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const a = this.chunks.findIndex((p) => p === s), l = this.chunks.findIndex((p) => p === r);
    if (l - a !== 1) throw new Error("chunks must be sequential");
    ln(Cs.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, l, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(l, 1);
  }
}
class du extends ws {
  constructor(r, a) {
    super(r.course, a, a.loop);
    A(this, "_chunk");
    A(this, "_data");
    A(this, "_plan");
    A(this, "delay", 0);
    /**
     * elapsed time in seconds
     */
    A(this, "elapsed", 0);
    A(this, "factors", new Cn());
    /**
     * moving time in seconds
     */
    A(this, "time", 0);
    /**
     * time of day in seconds
     */
    A(this, "tod", 0);
    this._data = a, this._plan = r;
  }
  get factor() {
    var r;
    return (r = this.factors) == null ? void 0 : r.combined;
  }
  /**
   * np for a point is the same as its parent chunk
   */
  get np() {
    var r;
    if (!this._chunk) throw new Error("PlanPoint._chunk not defined");
    return (r = this._chunk) == null ? void 0 : r.np;
  }
  get pace() {
    return this.np * this.factor;
  }
}
const ms = Kn("PlanSplits");
class Z0 {
  constructor(s) {
    A(this, "plan");
    A(this, "_segments");
    A(this, "_segmentsVersion");
    A(this, "_miles");
    A(this, "_milesVersion");
    A(this, "_kilometers");
    A(this, "_kilometersVersion");
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
    ms("createSegments");
    const s = this.plan.course.waypoints.filter((a) => a.tier < 3).sort((a, l) => a.loc - l.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((a) => a.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, l) => {
      a.waypoint = s[l + 1];
    }), r;
  }
  createSplits(s) {
    ms(`createSplits:${s}`);
    const r = Eu(s), a = K.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - a[a.length - 1] > 1e-4 && a.push(this.plan.course.dist);
    const l = this.calcSegments(this.plan.course.locationsToBreaks(a));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var F;
    ms.extend("calcSegments")("exec"), this.plan.checkPacing();
    const a = this.plan, l = a.course, p = a.points, d = [], v = [];
    let y, M, I = a.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const T = s[y];
      m && $e((F = s[y - 1]) == null ? void 0 : F.end, T.start, 4) ? I = m : I = a.getPoint(T.start), m = a.getPoint(T.end);
      const P = T.end - T.start, N = new D0(this.plan, {
        gain: 0,
        loss: 0,
        grade: P > 0 ? (m.alt - I.alt) / P / 10 * (m.alt - I.alt > 0 ? l.gainScale : l.lossScale) : 0,
        point1: I,
        point2: m
      }), q = new Cn().init(0);
      d.push(N), v.push(q);
    }
    const R = (T, P, N, q) => {
      const Z = N.alt - P.alt;
      T[Z > 0 ? "gain" : "loss"] += Z * (Z > 0 ? l.gainScale : l.lossScale), Wr(P, a);
      const J = N.loc - P.loc;
      q.applyEach((it, _t) => it + _t * J, P.factors);
    };
    y = 1;
    for (let T = 0; T < d.length; T++) {
      const P = d[T], N = v[T];
      for (; we(p[y].loc, P.point1.loc, 4); ) y++;
      let q = P.point1;
      for (; y < p.length && we(p[y].loc, P.point2.loc, 4); ) {
        const Z = p[y];
        R(P, q, Z, N), q = Z, y++;
      }
      R(P, q, P.point2, N), a && (P.delay = a.delays.filter((Z) => Ur(P.point1.loc, Z.loc, 4) && Ss(P.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return d;
  }
}
const zn = Kn("models:Plan");
class e_ {
  constructor(s, r) {
    A(this, "_cache", {});
    A(this, "_data");
    A(this, "course");
    A(this, "pacing", new K0(this));
    A(this, "points");
    /**
     * splits
     */
    A(this, "splits", new Z0(this));
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    A(this, "_version", 0);
    this.course = s, this._data = r, this.points = this.course.points.map((a) => new du(this, a)), this._version = 1;
  }
  get cache() {
    var s;
    return ((s = this._cache) == null ? void 0 : s.version) === this.version ? this._cache : (this._cache = { version: this.version }, this._cache);
  }
  get cutoffMargin() {
    return this._data.cutoffMargin;
  }
  /**
   * cutoffs array is calculated on get as a combination of the course cutoffs and the plan points
   * gets re-calculated if the course or plan version changes
   */
  get cutoffs() {
    if ("cutoffs" in this.cache) return this.cache.cutoffs;
    this.cache.cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new Y0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this.cache.cutoffs.length - 1 >= s; ) {
      const r = this.cache.cutoffs[s];
      this.cache.cutoffs.find((a, l) => l > s && a.time <= r.time) ? (zn(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this.cache.cutoffs.splice(s, 1)) : s++;
    }
    return this.cache.cutoffs;
  }
  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return K.sumBy(this.delays, "delay");
  }
  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   * gets re-calculated if the course or plan version changes
   */
  get delays() {
    if ("delays" in this.cache) return this.cache.delays;
    const s = this.course.waypoints.map((a) => {
      var d;
      const l = (d = this._data.delays) == null ? void 0 : d.find((v) => Ms(v.waypoint, a)), p = l ? l.delay : a.hasTypicalDelay ? this.typicalDelay : 0;
      return new J0(a, p);
    }).filter((a) => a.delay > 0).sort((a, l) => a.loc - l.loc);
    let r = 0;
    for (; s.length - 1 >= r; )
      r > 0 && s[r].loc === s[r - 1].loc ? (zn(`get delays: merging delay at ${s[r].loc} km`), s[r - 1].delay += s[r].delay, s.splice(r, 1)) : r++;
    return this.cache.delays = s, this.cache.delays;
  }
  /**
   * Event object
   * gets re-calculated if the course or plan version changes
   */
  get event() {
    if ("event" in this.cache) return this.cache.event;
    if (this._data.start)
      return this.cache.event = new Tu(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      );
    if (this.course.event) return this.cache.event = this.course.event;
    throw new Error("Start date/timezone is required for either the plan or the course");
  }
  get events() {
    if ("events" in this.cache) return this.cache.events;
    zn("calculating events.sun");
    const s = [], r = this.event.elapsedToTimeOfDay(0), a = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < a; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((y) => {
        const M = y.time - r + 86400 * d;
        M >= 0 && M <= this.points[this.points.length - 1].elapsed && s.push({ event: y.event, elapsed: M });
      });
    s.sort((d, v) => d.elapsed - v.elapsed);
    const l = mu(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      s.map((d) => d.elapsed)
    ), p = s.map((d, v) => ({ ...d, loc: l[v] }));
    return this.cache.events = { sun: p }, this.cache.events;
  }
  get heatModel() {
    return "heatModel" in this.cache ? this.cache.heatModel : this._data.heatModel ? this.cache.heatModel = {
      start: this.event.sun.sunrise + 1800,
      stop: this.event.sun.sunset + 7200,
      baseline: this._data.heatModel.baseline,
      max: this._data.heatModel.max
    } : this.cache.heatModel = void 0;
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
    return "scales" in this.cache ? this.cache.scales : this._data.scales ? this.cache.scales = {
      altitude: this._data.scales.altitude || 1,
      dark: this._data.scales.dark || 1
    } : this.cache.scales = void 0;
  }
  /**
   * Plan stats object
   */
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    zn("calculating stats.factors");
    const s = K.fromPairs(
      ve.map((p) => {
        const d = this.points.map((v) => v.factors[p]);
        return [
          p,
          {
            min: Number(K.min(d)),
            max: Number(K.max(d))
          }
        ];
      })
    );
    zn("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let a = 0, l = 0;
    return this.points.forEach((p, d) => {
      var v, y;
      a = p.loc - (((v = this.points[d - 1]) == null ? void 0 : v.loc) || 0), l = p.elapsed - (((y = this.points[d - 1]) == null ? void 0 : y.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += l, r.dark.dist += a) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += l, r.twilight.dist += a) : (r.day.time += l, r.day.dist += a);
    }), this.cache.stats = { factors: s, sun: r }, this.cache.stats;
  }
  get strategy() {
    return "strategy" in this.cache ? this.cache.strategy : this.cache.strategy = new Iu(this, this._data.strategy);
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
    if (zn("checkPacing"), (!((s = this.pacing.status) != null && s.complete) || !this.pacing.isCurrent) && (zn("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length)) throw new Error("No plan points");
    return !0;
  }
  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((a) => Ms(a.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    const a = this.points.findIndex((y) => Ur(y.loc, s, 4)), l = this.points[a];
    if ($e(l.loc, s, 4)) return l;
    zn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = a - 1, d = this.points[p], v = new du(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(l.time)) {
      const y = l.elapsed - l.time - (d.elapsed - d.time);
      v.time = me(d.loc, l.loc, d.time + y, l.time, l.loc), v.elapsed = l.elapsed - (l.time - v.time), this.event.start && (v.tod = this.event.elapsedToTimeOfDay(v.elapsed));
    }
    return r && this.points.splice(a, 0, v), v;
  }
  update(s) {
    const a = ["target", "method"].find((l) => l in s && K.isNil(s[l]));
    if (a) throw new Error(`Plan.${a} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class J0 {
  constructor(s, r) {
    A(this, "delay");
    A(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class Y0 {
  constructor(s, r, a) {
    A(this, "plan");
    A(this, "courseCutoff");
    A(this, "point");
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
const Fu = (f, s, r, a) => {
  const l = yu(f, s, r, a), p = [];
  return r.forEach((d, v) => {
    let y = l[v][0] / 10;
    y > 50 ? y = 50 : y < -50 && (y = -50);
    const M = d * l[v][0] + l[v][1];
    p.push({
      grade: y,
      alt: M
    });
  }), p;
};
function X0(f, s) {
  return Fu(
    s,
    f.map((a) => a.alt),
    s,
    0.05
  ).map((a) => a.grade);
}
const Q0 = (f) => {
  let s = 0, r = 0;
  const a = [0];
  for (let l = 1, p = f.length; l < p; l++)
    s = Number(f[l - 1].latlon.distanceTo(f[l].latlon)), r += s, a.push(r);
  return a;
}, Br = Kn("models:Track");
class Is {
  constructor(s) {
    A(this, "dist");
    A(this, "gain");
    A(this, "loss");
    A(this, "points");
    Br("Creating new Track object");
    const r = s.map((M) => new Mu([M.lat, M.lon, M.alt])), a = Q0(r), l = X0(r, a);
    this.points = r.map(
      (M, I) => new bs([M.lat, M.lon, M.alt], a[I], l[I])
    ), Br(`set-points - ${r.length} points`), Br("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, v = 0, y = this.points[0].alt;
    this.points.forEach((M) => {
      v = M.alt - y, v < 0 ? d += v : p += v, y = M.alt;
    }), this.gain = p, this.loss = d;
  }
  get start() {
    return K.pick(this.points[0], ["lat", "lon"]);
  }
  get finish() {
    return K.pick(this.points[this.points.length - 1], ["lat", "lon"]);
  }
  // get lat, lon, alt, index for distance location(s) along track
  getLLA(s) {
    s > this.dist && (s = s % this.dist);
    let r;
    if (s === 0) r = this.points[0];
    else {
      const a = this.points.findIndex((l) => l.loc >= s);
      r = Ru(this.points[a - 1], this.points[a], s);
    }
    return K.pick(r, ["lat", "lon", "alt"]);
  }
  /**
   * iterate to new location based on waypoint lat/lon
   * @param latlon - new point location
   * @param start - starting point in track
   * @param limit - max distance along track from starting point
   * @returns
   */
  getNearestPoint(s, r, a) {
    let p = this.points.findIndex((y) => y === r), d = this.points[p], v = 0;
    for (; a > 0.025; ) {
      const y = a / 5, M = [d];
      for (let R = 1; R <= 5; R++) {
        const F = d.loc + y * R;
        if (F <= this.dist) {
          for (; this.points[p + 1].loc < F && p < this.points.length - 1; )
            p++;
          M.push(this.points[p]);
        }
      }
      const I = M.map((R) => Number(s.distanceTo(R.latlon)));
      v = Math.min(...I);
      const m = I.findIndex((R) => R === v);
      d = M[m], a = a / 5;
    }
    return {
      point: d,
      delta: v
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const a = Br.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return a("Does not meet criteria"), this;
    const l = this.dist, p = Math.floor(l / s) + 1, d = Array(p).fill(0).map((I, m) => Nt(m++ * s, 3));
    d[d.length - 1] < l && d.push(l);
    const v = Fu(
      this.points.map((I) => I.loc),
      this.points.map((I) => I.alt),
      d,
      2 * s
    ), y = d.map((I) => this.getLLA(I)).map((I, m) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(v[m].alt, 2)
    })), M = new Is(y);
    return a(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function r_(f, s, r) {
  const a = f.map((l, p) => ({ lat: f[p], lon: s[p], alt: r[p] }));
  return new Is(a);
}
const i_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Hn
}, Symbol.toStringTag, { value: "Module" }));
export {
  n_ as Course,
  q0 as CourseCutoff,
  ws as CoursePoint,
  O0 as CourseSegment,
  Tu as Event,
  Cn as Factors,
  K0 as Pacing,
  e_ as Plan,
  du as PlanPoint,
  D0 as PlanSegment,
  Mu as Point,
  ds as Site,
  Iu as Strategy,
  Is as Track,
  bs as TrackPoint,
  lu as Waypoint,
  T0 as adjustStrategy,
  r_ as createTrackFromArrays,
  t_ as factors,
  Ru as interpolatePoint,
  j0 as math,
  E0 as scaleDark,
  $0 as terrainTypes,
  i_ as util
};
