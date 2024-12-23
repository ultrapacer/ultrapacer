var d0 = Object.defineProperty;
var _0 = (f, s, r) => s in f ? d0(f, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : f[s] = r;
var b = (f, s, r) => _0(f, typeof s != "symbol" ? s + "" : s, r);
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gu(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
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
var v0 = We.exports, nu;
function m0() {
  return nu || (nu = 1, function(f, s) {
    (function() {
      var r, o = "4.17.21", c = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, I = "__lodash_placeholder__", m = 1, R = 2, F = 4, T = 1, E = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Bt = 64, St = 128, jt = 256, Ht = 512, Tt = 30, we = "...", $e = 800, Ur = 16, ye = 1, qe = 2, $r = 3, Sn = 1 / 0, _n = 9007199254740991, Ge = 17976931348623157e292, bn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ft = [
        ["ary", St],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Bt],
        ["rearg", jt]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", vn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", kn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", fn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", ze = "[object Symbol]", Lu = "[object Undefined]", Me = "[object WeakMap]", ku = "[object WeakSet]", Ce = "[object ArrayBuffer]", ee = "[object DataView]", qr = "[object Float32Array]", Gr = "[object Float64Array]", zr = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", Ou = /\b__p \+= '';/g, Du = /\b(__p \+=) '' \+/g, Nu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xs = /&(?:amp|lt|gt|quot|#39);/g, As = /[&<>"']/g, Bu = RegExp(xs.source), Wu = RegExp(As.source), Uu = /<%-([\s\S]+?)%>/g, $u = /<%([\s\S]+?)%>/g, Is = /<%=([\s\S]+?)%>/g, qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gu = /^\w*$/, zu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Hu = RegExp(Qr.source), Vr = /^\s+/, Ku = /\s/, Zu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ju = /\{\n\/\* \[wrapped with (.+)\] \*/, Yu = /,? & /, Xu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qu = /[()=,{}\[\]\/\s]/, Vu = /\\(\\)?/g, ju = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ps = /\w*$/, tl = /^[-+]0x[0-9a-f]+$/i, nl = /^0b[01]+$/i, el = /^\[object .+?Constructor\]$/, rl = /^0o[0-7]+$/i, il = /^(?:0|[1-9]\d*)$/, sl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, He = /($^)/, al = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", ol = "\\u0300-\\u036f", ul = "\\ufe20-\\ufe2f", ll = "\\u20d0-\\u20ff", Es = ol + ul + ll, Rs = "\\u2700-\\u27bf", Ts = "a-z\\xdf-\\xf6\\xf8-\\xff", cl = "\\xac\\xb1\\xd7\\xf7", fl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", hl = "\\u2000-\\u206f", pl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ls = "\\ufe0e\\ufe0f", ks = cl + fl + hl + pl, jr = "['’]", gl = "[" + Ke + "]", Os = "[" + ks + "]", Ze = "[" + Es + "]", Ds = "\\d+", dl = "[" + Rs + "]", Ns = "[" + Ts + "]", Bs = "[^" + Ke + ks + Ds + Rs + Ts + Fs + "]", ti = "\\ud83c[\\udffb-\\udfff]", _l = "(?:" + Ze + "|" + ti + ")", Ws = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + Fs + "]", Us = "\\u200d", $s = "(?:" + Ns + "|" + Bs + ")", vl = "(?:" + re + "|" + Bs + ")", qs = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", Gs = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", zs = _l + "?", Hs = "[" + Ls + "]?", ml = "(?:" + Us + "(?:" + [Ws, ni, ei].join("|") + ")" + Hs + zs + ")*", wl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", yl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ks = Hs + zs + ml, Ml = "(?:" + [dl, ni, ei].join("|") + ")" + Ks, Cl = "(?:" + [Ws + Ze + "?", Ze, ni, ei, gl].join("|") + ")", Sl = RegExp(jr, "g"), bl = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + Cl + Ks, "g"), xl = RegExp([
        re + "?" + Ns + "+" + qs + "(?=" + [Os, re, "$"].join("|") + ")",
        vl + "+" + Gs + "(?=" + [Os, re + $s, "$"].join("|") + ")",
        re + "?" + $s + "+" + qs,
        re + "+" + Gs,
        yl,
        wl,
        Ds,
        Ml
      ].join("|"), "g"), Al = RegExp("[" + Us + Ke + Es + Ls + "]"), Il = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pl = [
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
      ], El = -1, ct = {};
      ct[qr] = ct[Gr] = ct[zr] = ct[Hr] = ct[Kr] = ct[Zr] = ct[Jr] = ct[Yr] = ct[Xr] = !0, ct[nt] = ct[ht] = ct[Ce] = ct[lt] = ct[ee] = ct[Mt] = ct[Ft] = ct[Wt] = ct[vt] = ct[Lt] = ct[Ct] = ct[tn] = ct[pt] = ct[mn] = ct[Me] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[Ce] = ut[ee] = ut[lt] = ut[Mt] = ut[qr] = ut[Gr] = ut[zr] = ut[Hr] = ut[Kr] = ut[vt] = ut[Lt] = ut[Ct] = ut[tn] = ut[pt] = ut[mn] = ut[ze] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Ft] = ut[Wt] = ut[Me] = !1;
      var Rl = {
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
      }, Tl = {
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
      }, kl = parseFloat, Ol = parseInt, Zs = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Dl = typeof self == "object" && self && self.Object === Object && self, It = Zs || Dl || Function("return this")(), ii = s && !s.nodeType && s, Zn = ii && !0 && f && !f.nodeType && f, Js = Zn && Zn.exports === ii, si = Js && Zs.process, nn = function() {
        try {
          var _ = Zn && Zn.require && Zn.require("util").types;
          return _ || si && si.binding && si.binding("util");
        } catch {
        }
      }(), Ys = nn && nn.isArrayBuffer, Xs = nn && nn.isDate, Qs = nn && nn.isMap, Vs = nn && nn.isRegExp, js = nn && nn.isSet, ta = nn && nn.isTypedArray;
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
      function Nl(_, S, C, O) {
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
      function Bl(_, S) {
        for (var C = _ == null ? 0 : _.length; C-- && S(_[C], C, _) !== !1; )
          ;
        return _;
      }
      function na(_, S) {
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
      function Je(_, S) {
        var C = _ == null ? 0 : _.length;
        return !!C && ie(_, S, 0) > -1;
      }
      function ai(_, S, C) {
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
      function oi(_, S, C, O) {
        var z = -1, et = _ == null ? 0 : _.length;
        for (O && et && (C = _[++z]); ++z < et; )
          C = S(C, _[z], z, _);
        return C;
      }
      function Wl(_, S, C, O) {
        var z = _ == null ? 0 : _.length;
        for (O && z && (C = _[--z]); z--; )
          C = S(C, _[z], z, _);
        return C;
      }
      function ui(_, S) {
        for (var C = -1, O = _ == null ? 0 : _.length; ++C < O; )
          if (S(_[C], C, _))
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
      function ea(_, S, C) {
        var O;
        return C(_, function(z, et, bt) {
          if (S(z, et, bt))
            return O = et, !1;
        }), O;
      }
      function Ye(_, S, C, O) {
        for (var z = _.length, et = C + (O ? 1 : -1); O ? et-- : ++et < z; )
          if (S(_[et], et, _))
            return et;
        return -1;
      }
      function ie(_, S, C) {
        return S === S ? tc(_, S, C) : Ye(_, ra, C);
      }
      function Gl(_, S, C, O) {
        for (var z = C - 1, et = _.length; ++z < et; )
          if (O(_[z], S))
            return z;
        return -1;
      }
      function ra(_) {
        return _ !== _;
      }
      function ia(_, S) {
        var C = _ == null ? 0 : _.length;
        return C ? fi(_, S) / C : bn;
      }
      function li(_) {
        return function(S) {
          return S == null ? r : S[_];
        };
      }
      function ci(_) {
        return function(S) {
          return _ == null ? r : _[S];
        };
      }
      function sa(_, S, C, O, z) {
        return z(_, function(et, bt, at) {
          C = O ? (O = !1, et) : S(C, et, bt, at);
        }), C;
      }
      function zl(_, S) {
        var C = _.length;
        for (_.sort(S); C--; )
          _[C] = _[C].value;
        return _;
      }
      function fi(_, S) {
        for (var C, O = -1, z = _.length; ++O < z; ) {
          var et = S(_[O]);
          et !== r && (C = C === r ? et : C + et);
        }
        return C;
      }
      function hi(_, S) {
        for (var C = -1, O = Array(_); ++C < _; )
          O[C] = S(C);
        return O;
      }
      function Hl(_, S) {
        return gt(S, function(C) {
          return [C, _[C]];
        });
      }
      function aa(_) {
        return _ && _.slice(0, ca(_) + 1).replace(Vr, "");
      }
      function Jt(_) {
        return function(S) {
          return _(S);
        };
      }
      function pi(_, S) {
        return gt(S, function(C) {
          return _[C];
        });
      }
      function Se(_, S) {
        return _.has(S);
      }
      function oa(_, S) {
        for (var C = -1, O = _.length; ++C < O && ie(S, _[C], 0) > -1; )
          ;
        return C;
      }
      function ua(_, S) {
        for (var C = _.length; C-- && ie(S, _[C], 0) > -1; )
          ;
        return C;
      }
      function Kl(_, S) {
        for (var C = _.length, O = 0; C--; )
          _[C] === S && ++O;
        return O;
      }
      var Zl = ci(Rl), Jl = ci(Tl);
      function Yl(_) {
        return "\\" + Ll[_];
      }
      function Xl(_, S) {
        return _ == null ? r : _[S];
      }
      function se(_) {
        return Al.test(_);
      }
      function Ql(_) {
        return Il.test(_);
      }
      function Vl(_) {
        for (var S, C = []; !(S = _.next()).done; )
          C.push(S.value);
        return C;
      }
      function gi(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O, z) {
          C[++S] = [z, O];
        }), C;
      }
      function la(_, S) {
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
      function Xe(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O) {
          C[++S] = O;
        }), C;
      }
      function jl(_) {
        var S = -1, C = Array(_.size);
        return _.forEach(function(O) {
          C[++S] = [O, O];
        }), C;
      }
      function tc(_, S, C) {
        for (var O = C - 1, z = _.length; ++O < z; )
          if (_[O] === S)
            return O;
        return -1;
      }
      function nc(_, S, C) {
        for (var O = C + 1; O--; )
          if (_[O] === S)
            return O;
        return O;
      }
      function ae(_) {
        return se(_) ? rc(_) : Ul(_);
      }
      function hn(_) {
        return se(_) ? ic(_) : $l(_);
      }
      function ca(_) {
        for (var S = _.length; S-- && Ku.test(_.charAt(S)); )
          ;
        return S;
      }
      var ec = ci(Fl);
      function rc(_) {
        for (var S = ri.lastIndex = 0; ri.test(_); )
          ++S;
        return S;
      }
      function ic(_) {
        return _.match(ri) || [];
      }
      function sc(_) {
        return _.match(xl) || [];
      }
      var ac = function _(S) {
        S = S == null ? It : oe.defaults(It.Object(), S, oe.pick(It, Pl));
        var C = S.Array, O = S.Date, z = S.Error, et = S.Function, bt = S.Math, at = S.Object, di = S.RegExp, oc = S.String, rn = S.TypeError, Qe = C.prototype, uc = et.prototype, ue = at.prototype, Ve = S["__core-js_shared__"], je = uc.toString, st = ue.hasOwnProperty, lc = 0, fa = function() {
          var t = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), tr = ue.toString, cc = je.call(at), fc = It._, hc = di(
          "^" + je.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Js ? S.Buffer : r, Bn = S.Symbol, er = S.Uint8Array, ha = nr ? nr.allocUnsafe : r, rr = la(at.getPrototypeOf, at), pa = at.create, ga = ue.propertyIsEnumerable, ir = Qe.splice, da = Bn ? Bn.isConcatSpreadable : r, be = Bn ? Bn.iterator : r, Jn = Bn ? Bn.toStringTag : r, sr = function() {
          try {
            var t = jn(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), pc = S.clearTimeout !== It.clearTimeout && S.clearTimeout, gc = O && O.now !== It.Date.now && O.now, dc = S.setTimeout !== It.setTimeout && S.setTimeout, ar = bt.ceil, or = bt.floor, _i = at.getOwnPropertySymbols, _c = nr ? nr.isBuffer : r, _a = S.isFinite, vc = Qe.join, mc = la(at.keys, at), xt = bt.max, Et = bt.min, wc = O.now, yc = S.parseInt, va = bt.random, Mc = Qe.reverse, vi = jn(S, "DataView"), xe = jn(S, "Map"), mi = jn(S, "Promise"), le = jn(S, "Set"), Ae = jn(S, "WeakMap"), Ie = jn(at, "create"), ur = Ae && new Ae(), ce = {}, Cc = te(vi), Sc = te(xe), bc = te(mi), xc = te(le), Ac = te(Ae), lr = Bn ? Bn.prototype : r, Pe = lr ? lr.valueOf : r, ma = lr ? lr.toString : r;
        function u(t) {
          if (mt(t) && !H(t) && !(t instanceof j)) {
            if (t instanceof sn)
              return t;
            if (st.call(t, "__wrapped__"))
              return yo(t);
          }
          return new sn(t);
        }
        var fe = /* @__PURE__ */ function() {
          function t() {
          }
          return function(n) {
            if (!dt(n))
              return {};
            if (pa)
              return pa(n);
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
          interpolate: Is,
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
        }, u.prototype = cr.prototype, u.prototype.constructor = u, sn.prototype = fe(cr.prototype), sn.prototype.constructor = sn;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function Ic() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function Pc() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Ec() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = H(t), i = n < 0, a = e ? t.length : 0, l = qf(0, a, this.__views__), h = l.start, g = l.end, w = g - h, x = i ? g : h - 1, A = this.__iteratees__, P = A.length, L = 0, D = Et(w, this.__takeCount__);
          if (!e || !i && a == w && D == w)
            return qa(t, this.__actions__);
          var W = [];
          t:
            for (; w-- && L < D; ) {
              x += n;
              for (var X = -1, U = t[x]; ++X < P; ) {
                var V = A[X], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == qe)
                  U = Dt;
                else if (!Dt) {
                  if (Qt == ye)
                    continue t;
                  break t;
                }
              }
              W[L++] = U;
            }
          return W;
        }
        j.prototype = fe(cr.prototype), j.prototype.constructor = j;
        function Yn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Rc() {
          this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
        }
        function Tc(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Fc(t) {
          var n = this.__data__;
          if (Ie) {
            var e = n[t];
            return e === y ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function Lc(t) {
          var n = this.__data__;
          return Ie ? n[t] !== r : st.call(n, t);
        }
        function kc(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Ie && n === r ? y : n, this;
        }
        Yn.prototype.clear = Rc, Yn.prototype.delete = Tc, Yn.prototype.get = Fc, Yn.prototype.has = Lc, Yn.prototype.set = kc;
        function xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Oc() {
          this.__data__ = [], this.size = 0;
        }
        function Dc(t) {
          var n = this.__data__, e = fr(n, t);
          if (e < 0)
            return !1;
          var i = n.length - 1;
          return e == i ? n.pop() : ir.call(n, e, 1), --this.size, !0;
        }
        function Nc(t) {
          var n = this.__data__, e = fr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Bc(t) {
          return fr(this.__data__, t) > -1;
        }
        function Wc(t, n) {
          var e = this.__data__, i = fr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        xn.prototype.clear = Oc, xn.prototype.delete = Dc, xn.prototype.get = Nc, xn.prototype.has = Bc, xn.prototype.set = Wc;
        function An(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Uc() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (xe || xn)(),
            string: new Yn()
          };
        }
        function $c(t) {
          var n = Sr(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function qc(t) {
          return Sr(this, t).get(t);
        }
        function Gc(t) {
          return Sr(this, t).has(t);
        }
        function zc(t, n) {
          var e = Sr(this, t), i = e.size;
          return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
        }
        An.prototype.clear = Uc, An.prototype.delete = $c, An.prototype.get = qc, An.prototype.has = Gc, An.prototype.set = zc;
        function Xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new An(); ++n < e; )
            this.add(t[n]);
        }
        function Hc(t) {
          return this.__data__.set(t, y), this;
        }
        function Kc(t) {
          return this.__data__.has(t);
        }
        Xn.prototype.add = Xn.prototype.push = Hc, Xn.prototype.has = Kc;
        function pn(t) {
          var n = this.__data__ = new xn(t);
          this.size = n.size;
        }
        function Zc() {
          this.__data__ = new xn(), this.size = 0;
        }
        function Jc(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function Yc(t) {
          return this.__data__.get(t);
        }
        function Xc(t) {
          return this.__data__.has(t);
        }
        function Qc(t, n) {
          var e = this.__data__;
          if (e instanceof xn) {
            var i = e.__data__;
            if (!xe || i.length < c - 1)
              return i.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new An(i);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = Zc, pn.prototype.delete = Jc, pn.prototype.get = Yc, pn.prototype.has = Xc, pn.prototype.set = Qc;
        function wa(t, n) {
          var e = H(t), i = !e && ne(t), a = !e && !i && Gn(t), l = !e && !i && !a && de(t), h = e || i || a || l, g = h ? hi(t.length, oc) : [], w = g.length;
          for (var x in t)
            (n || st.call(t, x)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            a && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            l && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
            Rn(x, w))) && g.push(x);
          return g;
        }
        function ya(t) {
          var n = t.length;
          return n ? t[Ei(0, n - 1)] : r;
        }
        function Vc(t, n) {
          return br($t(t), Qn(n, 0, t.length));
        }
        function jc(t) {
          return br($t(t));
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
        function tf(t, n, e, i) {
          return Wn(t, function(a, l, h) {
            n(i, a, e(a), h);
          }), i;
        }
        function Ma(t, n) {
          return t && yn(n, At(n), t);
        }
        function nf(t, n) {
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
          for (var e = -1, i = n.length, a = C(i), l = t == null; ++e < i; )
            a[e] = l ? r : ts(t, n[e]);
          return a;
        }
        function Qn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function an(t, n, e, i, a, l) {
          var h, g = n & m, w = n & R, x = n & F;
          if (e && (h = a ? e(t, i, a, l) : e(t)), h !== r)
            return h;
          if (!dt(t))
            return t;
          var A = H(t);
          if (A) {
            if (h = zf(t), !g)
              return $t(t, h);
          } else {
            var P = Rt(t), L = P == Wt || P == vn;
            if (Gn(t))
              return Ha(t, g);
            if (P == Ct || P == nt || L && !a) {
              if (h = w || L ? {} : co(t), !g)
                return w ? Lf(t, nf(h, t)) : Ff(t, Ma(h, t));
            } else {
              if (!ut[P])
                return a ? t : {};
              h = Hf(t, P, g);
            }
          }
          l || (l = new pn());
          var D = l.get(t);
          if (D)
            return D;
          l.set(t, h), Uo(t) ? t.forEach(function(U) {
            h.add(an(U, n, e, U, t, l));
          }) : Bo(t) && t.forEach(function(U, V) {
            h.set(V, an(U, n, e, V, t, l));
          });
          var W = x ? w ? Ui : Wi : w ? Gt : At, X = A ? r : W(t);
          return en(X || t, function(U, V) {
            X && (V = U, U = t[V]), Ee(h, V, an(U, n, e, V, t, l));
          }), h;
        }
        function ef(t) {
          var n = At(t);
          return function(e) {
            return Ca(e, t, n);
          };
        }
        function Ca(t, n, e) {
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
        function Sa(t, n, e) {
          if (typeof t != "function")
            throw new rn(d);
          return De(function() {
            t.apply(r, e);
          }, n);
        }
        function Re(t, n, e, i) {
          var a = -1, l = Je, h = !0, g = t.length, w = [], x = n.length;
          if (!g)
            return w;
          e && (n = gt(n, Jt(e))), i ? (l = ai, h = !1) : n.length >= c && (l = Se, h = !1, n = new Xn(n));
          t:
            for (; ++a < g; ) {
              var A = t[a], P = e == null ? A : e(A);
              if (A = i || A !== 0 ? A : 0, h && P === P) {
                for (var L = x; L--; )
                  if (n[L] === P)
                    continue t;
                w.push(A);
              } else l(n, P, i) || w.push(A);
            }
          return w;
        }
        var Wn = Xa(wn), ba = Xa(Ci, !0);
        function rf(t, n) {
          var e = !0;
          return Wn(t, function(i, a, l) {
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
        function sf(t, n, e, i) {
          var a = t.length;
          for (e = Y(e), e < 0 && (e = -e > a ? 0 : a + e), i = i === r || i > a ? a : Y(i), i < 0 && (i += a), i = e > i ? 0 : qo(i); e < i; )
            t[e++] = n;
          return t;
        }
        function xa(t, n) {
          var e = [];
          return Wn(t, function(i, a, l) {
            n(i, a, l) && e.push(i);
          }), e;
        }
        function Pt(t, n, e, i, a) {
          var l = -1, h = t.length;
          for (e || (e = Zf), a || (a = []); ++l < h; ) {
            var g = t[l];
            n > 0 && e(g) ? n > 1 ? Pt(g, n - 1, e, i, a) : Dn(a, g) : i || (a[a.length] = g);
          }
          return a;
        }
        var Mi = Qa(), Aa = Qa(!0);
        function wn(t, n) {
          return t && Mi(t, n, At);
        }
        function Ci(t, n) {
          return t && Aa(t, n, At);
        }
        function pr(t, n) {
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
        function Ia(t, n, e) {
          var i = n(t);
          return H(t) ? i : Dn(i, e(t));
        }
        function kt(t) {
          return t == null ? t === r ? Lu : kn : Jn && Jn in at(t) ? $f(t) : th(t);
        }
        function Si(t, n) {
          return t > n;
        }
        function af(t, n) {
          return t != null && st.call(t, n);
        }
        function of(t, n) {
          return t != null && n in at(t);
        }
        function uf(t, n, e) {
          return t >= Et(n, e) && t < xt(n, e);
        }
        function bi(t, n, e) {
          for (var i = e ? ai : Je, a = t[0].length, l = t.length, h = l, g = C(l), w = 1 / 0, x = []; h--; ) {
            var A = t[h];
            h && n && (A = gt(A, Jt(n))), w = Et(A.length, w), g[h] = !e && (n || a >= 120 && A.length >= 120) ? new Xn(h && A) : r;
          }
          A = t[0];
          var P = -1, L = g[0];
          t:
            for (; ++P < a && x.length < w; ) {
              var D = A[P], W = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? Se(L, W) : i(x, W, e))) {
                for (h = l; --h; ) {
                  var X = g[h];
                  if (!(X ? Se(X, W) : i(t[h], W, e)))
                    continue t;
                }
                L && L.push(W), x.push(D);
              }
            }
          return x;
        }
        function lf(t, n, e, i) {
          return wn(t, function(a, l, h) {
            n(i, e(a), l, h);
          }), i;
        }
        function Te(t, n, e) {
          n = $n(n, t), t = go(t, n);
          var i = t == null ? t : t[Mn(un(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Pa(t) {
          return mt(t) && kt(t) == nt;
        }
        function cf(t) {
          return mt(t) && kt(t) == Ce;
        }
        function ff(t) {
          return mt(t) && kt(t) == Mt;
        }
        function Fe(t, n, e, i, a) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : hf(t, n, e, i, Fe, a);
        }
        function hf(t, n, e, i, a, l) {
          var h = H(t), g = H(n), w = h ? ht : Rt(t), x = g ? ht : Rt(n);
          w = w == nt ? Ct : w, x = x == nt ? Ct : x;
          var A = w == Ct, P = x == Ct, L = w == x;
          if (L && Gn(t)) {
            if (!Gn(n))
              return !1;
            h = !0, A = !1;
          }
          if (L && !A)
            return l || (l = new pn()), h || de(t) ? oo(t, n, e, i, a, l) : Wf(t, n, w, e, i, a, l);
          if (!(e & T)) {
            var D = A && st.call(t, "__wrapped__"), W = P && st.call(n, "__wrapped__");
            if (D || W) {
              var X = D ? t.value() : t, U = W ? n.value() : n;
              return l || (l = new pn()), a(X, U, e, i, l);
            }
          }
          return L ? (l || (l = new pn()), Uf(t, n, e, i, a, l)) : !1;
        }
        function pf(t) {
          return mt(t) && Rt(t) == vt;
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
            var w = g[0], x = t[w], A = g[1];
            if (h && g[2]) {
              if (x === r && !(w in t))
                return !1;
            } else {
              var P = new pn();
              if (i)
                var L = i(x, A, w, t, n, P);
              if (!(L === r ? Fe(A, x, T | E, i, P) : L))
                return !1;
            }
          }
          return !0;
        }
        function Ea(t) {
          if (!dt(t) || Yf(t))
            return !1;
          var n = Tn(t) ? hc : el;
          return n.test(te(t));
        }
        function gf(t) {
          return mt(t) && kt(t) == tn;
        }
        function df(t) {
          return mt(t) && Rt(t) == pt;
        }
        function _f(t) {
          return mt(t) && Rr(t.length) && !!ct[kt(t)];
        }
        function Ra(t) {
          return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? H(t) ? La(t[0], t[1]) : Fa(t) : jo(t);
        }
        function Ai(t) {
          if (!Oe(t))
            return mc(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function vf(t) {
          if (!dt(t))
            return jf(t);
          var n = Oe(t), e = [];
          for (var i in t)
            i == "constructor" && (n || !st.call(t, i)) || e.push(i);
          return e;
        }
        function Ii(t, n) {
          return t < n;
        }
        function Ta(t, n) {
          var e = -1, i = qt(t) ? C(t.length) : [];
          return Wn(t, function(a, l, h) {
            i[++e] = n(a, l, h);
          }), i;
        }
        function Fa(t) {
          var n = qi(t);
          return n.length == 1 && n[0][2] ? ho(n[0][0], n[0][1]) : function(e) {
            return e === t || xi(e, t, n);
          };
        }
        function La(t, n) {
          return zi(t) && fo(n) ? ho(Mn(t), n) : function(e) {
            var i = ts(e, t);
            return i === r && i === n ? ns(e, t) : Fe(n, i, T | E);
          };
        }
        function gr(t, n, e, i, a) {
          t !== n && Mi(n, function(l, h) {
            if (a || (a = new pn()), dt(l))
              mf(t, n, h, e, gr, i, a);
            else {
              var g = i ? i(Ki(t, h), l, h + "", t, n, a) : r;
              g === r && (g = l), wi(t, h, g);
            }
          }, Gt);
        }
        function mf(t, n, e, i, a, l, h) {
          var g = Ki(t, e), w = Ki(n, e), x = h.get(w);
          if (x) {
            wi(t, e, x);
            return;
          }
          var A = l ? l(g, w, e + "", t, n, h) : r, P = A === r;
          if (P) {
            var L = H(w), D = !L && Gn(w), W = !L && !D && de(w);
            A = w, L || D || W ? H(g) ? A = g : wt(g) ? A = $t(g) : D ? (P = !1, A = Ha(w, !0)) : W ? (P = !1, A = Ka(w, !0)) : A = [] : Ne(w) || ne(w) ? (A = g, ne(g) ? A = Go(g) : (!dt(g) || Tn(g)) && (A = co(w))) : P = !1;
          }
          P && (h.set(w, A), a(A, w, i, l, h), h.delete(w)), wi(t, e, A);
        }
        function ka(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, Rn(n, e) ? t[n] : r;
        }
        function Oa(t, n, e) {
          n.length ? n = gt(n, function(l) {
            return H(l) ? function(h) {
              return Vn(h, l.length === 1 ? l[0] : l);
            } : l;
          }) : n = [zt];
          var i = -1;
          n = gt(n, Jt(B()));
          var a = Ta(t, function(l, h, g) {
            var w = gt(n, function(x) {
              return x(l);
            });
            return { criteria: w, index: ++i, value: l };
          });
          return zl(a, function(l, h) {
            return Tf(l, h, e);
          });
        }
        function wf(t, n) {
          return Da(t, n, function(e, i) {
            return ns(t, i);
          });
        }
        function Da(t, n, e) {
          for (var i = -1, a = n.length, l = {}; ++i < a; ) {
            var h = n[i], g = Vn(t, h);
            e(g, h) && Le(l, $n(h, t), g);
          }
          return l;
        }
        function yf(t) {
          return function(n) {
            return Vn(n, t);
          };
        }
        function Pi(t, n, e, i) {
          var a = i ? Gl : ie, l = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = gt(t, Jt(e))); ++l < h; )
            for (var w = 0, x = n[l], A = e ? e(x) : x; (w = a(g, A, w, i)) > -1; )
              g !== t && ir.call(g, w, 1), ir.call(t, w, 1);
          return t;
        }
        function Na(t, n) {
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
          return t + or(va() * (n - t + 1));
        }
        function Mf(t, n, e, i) {
          for (var a = -1, l = xt(ar((n - t) / (e || 1)), 0), h = C(l); l--; )
            h[i ? l : ++a] = t, t += e;
          return h;
        }
        function Ri(t, n) {
          var e = "";
          if (!t || n < 1 || n > _n)
            return e;
          do
            n % 2 && (e += t), n = or(n / 2), n && (t += t);
          while (n);
          return e;
        }
        function Q(t, n) {
          return Zi(po(t, n, zt), t + "");
        }
        function Cf(t) {
          return ya(_e(t));
        }
        function Sf(t, n) {
          var e = _e(t);
          return br(e, Qn(n, 0, e.length));
        }
        function Le(t, n, e, i) {
          if (!dt(t))
            return t;
          n = $n(n, t);
          for (var a = -1, l = n.length, h = l - 1, g = t; g != null && ++a < l; ) {
            var w = Mn(n[a]), x = e;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return t;
            if (a != h) {
              var A = g[w];
              x = i ? i(A, w, g) : r, x === r && (x = dt(A) ? A : Rn(n[a + 1]) ? [] : {});
            }
            Ee(g, w, x), g = g[w];
          }
          return t;
        }
        var Ba = ur ? function(t, n) {
          return ur.set(t, n), t;
        } : zt, bf = sr ? function(t, n) {
          return sr(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: rs(n),
            writable: !0
          });
        } : zt;
        function xf(t) {
          return br(_e(t));
        }
        function on(t, n, e) {
          var i = -1, a = t.length;
          n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var l = C(a); ++i < a; )
            l[i] = t[i + n];
          return l;
        }
        function Af(t, n) {
          var e;
          return Wn(t, function(i, a, l) {
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
          return Ti(t, n, zt, e);
        }
        function Ti(t, n, e, i) {
          var a = 0, l = t == null ? 0 : t.length;
          if (l === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, w = Xt(n), x = n === r; a < l; ) {
            var A = or((a + l) / 2), P = e(t[A]), L = P !== r, D = P === null, W = P === P, X = Xt(P);
            if (h)
              var U = i || W;
            else x ? U = W && (i || L) : g ? U = W && L && (i || !D) : w ? U = W && L && !D && (i || !X) : D || X ? U = !1 : U = i ? P <= n : P < n;
            U ? a = A + 1 : l = A;
          }
          return Et(l, $);
        }
        function Wa(t, n) {
          for (var e = -1, i = t.length, a = 0, l = []; ++e < i; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !gn(g, w)) {
              var w = g;
              l[a++] = h === 0 ? 0 : h;
            }
          }
          return l;
        }
        function Ua(t) {
          return typeof t == "number" ? t : Xt(t) ? bn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (H(t))
            return gt(t, Yt) + "";
          if (Xt(t))
            return ma ? ma.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -Sn ? "-0" : n;
        }
        function Un(t, n, e) {
          var i = -1, a = Je, l = t.length, h = !0, g = [], w = g;
          if (e)
            h = !1, a = ai;
          else if (l >= c) {
            var x = n ? null : Nf(t);
            if (x)
              return Xe(x);
            h = !1, a = Se, w = new Xn();
          } else
            w = n ? [] : g;
          t:
            for (; ++i < l; ) {
              var A = t[i], P = n ? n(A) : A;
              if (A = e || A !== 0 ? A : 0, h && P === P) {
                for (var L = w.length; L--; )
                  if (w[L] === P)
                    continue t;
                n && w.push(P), g.push(A);
              } else a(w, P, e) || (w !== g && w.push(P), g.push(A));
            }
          return g;
        }
        function Fi(t, n) {
          return n = $n(n, t), t = go(t, n), t == null || delete t[Mn(un(n))];
        }
        function $a(t, n, e, i) {
          return Le(t, n, e(Vn(t, n)), i);
        }
        function _r(t, n, e, i) {
          for (var a = t.length, l = i ? a : -1; (i ? l-- : ++l < a) && n(t[l], l, t); )
            ;
          return e ? on(t, i ? 0 : l, i ? l + 1 : a) : on(t, i ? l + 1 : 0, i ? a : l);
        }
        function qa(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), oi(n, function(i, a) {
            return a.func.apply(a.thisArg, Dn([i], a.args));
          }, e);
        }
        function Li(t, n, e) {
          var i = t.length;
          if (i < 2)
            return i ? Un(t[0]) : [];
          for (var a = -1, l = C(i); ++a < i; )
            for (var h = t[a], g = -1; ++g < i; )
              g != a && (l[a] = Re(l[a] || h, t[g], n, e));
          return Un(Pt(l, 1), n, e);
        }
        function Ga(t, n, e) {
          for (var i = -1, a = t.length, l = n.length, h = {}; ++i < a; ) {
            var g = i < l ? n[i] : r;
            e(h, t[i], g);
          }
          return h;
        }
        function ki(t) {
          return wt(t) ? t : [];
        }
        function Oi(t) {
          return typeof t == "function" ? t : zt;
        }
        function $n(t, n) {
          return H(t) ? t : zi(t, n) ? [t] : wo(rt(t));
        }
        var If = Q;
        function qn(t, n, e) {
          var i = t.length;
          return e = e === r ? i : e, !n && e >= i ? t : on(t, n, e);
        }
        var za = pc || function(t) {
          return It.clearTimeout(t);
        };
        function Ha(t, n) {
          if (n)
            return t.slice();
          var e = t.length, i = ha ? ha(e) : new t.constructor(e);
          return t.copy(i), i;
        }
        function Di(t) {
          var n = new t.constructor(t.byteLength);
          return new er(n).set(new er(t)), n;
        }
        function Pf(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Ef(t) {
          var n = new t.constructor(t.source, Ps.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Rf(t) {
          return Pe ? at(Pe.call(t)) : {};
        }
        function Ka(t, n) {
          var e = n ? Di(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Za(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, a = t === t, l = Xt(t), h = n !== r, g = n === null, w = n === n, x = Xt(n);
            if (!g && !x && !l && t > n || l && h && w && !g && !x || i && h && w || !e && w || !a)
              return 1;
            if (!i && !l && !x && t < n || x && e && a && !i && !l || g && e && a || !h && a || !w)
              return -1;
          }
          return 0;
        }
        function Tf(t, n, e) {
          for (var i = -1, a = t.criteria, l = n.criteria, h = a.length, g = e.length; ++i < h; ) {
            var w = Za(a[i], l[i]);
            if (w) {
              if (i >= g)
                return w;
              var x = e[i];
              return w * (x == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Ja(t, n, e, i) {
          for (var a = -1, l = t.length, h = e.length, g = -1, w = n.length, x = xt(l - h, 0), A = C(w + x), P = !i; ++g < w; )
            A[g] = n[g];
          for (; ++a < h; )
            (P || a < l) && (A[e[a]] = t[a]);
          for (; x--; )
            A[g++] = t[a++];
          return A;
        }
        function Ya(t, n, e, i) {
          for (var a = -1, l = t.length, h = -1, g = e.length, w = -1, x = n.length, A = xt(l - g, 0), P = C(A + x), L = !i; ++a < A; )
            P[a] = t[a];
          for (var D = a; ++w < x; )
            P[D + w] = n[w];
          for (; ++h < g; )
            (L || a < l) && (P[D + e[h]] = t[a++]);
          return P;
        }
        function $t(t, n) {
          var e = -1, i = t.length;
          for (n || (n = C(i)); ++e < i; )
            n[e] = t[e];
          return n;
        }
        function yn(t, n, e, i) {
          var a = !e;
          e || (e = {});
          for (var l = -1, h = n.length; ++l < h; ) {
            var g = n[l], w = i ? i(e[g], t[g], g, e, t) : r;
            w === r && (w = t[g]), a ? In(e, g, w) : Ee(e, g, w);
          }
          return e;
        }
        function Ff(t, n) {
          return yn(t, Gi(t), n);
        }
        function Lf(t, n) {
          return yn(t, uo(t), n);
        }
        function vr(t, n) {
          return function(e, i) {
            var a = H(e) ? Nl : tf, l = n ? n() : {};
            return a(e, t, B(i, 2), l);
          };
        }
        function he(t) {
          return Q(function(n, e) {
            var i = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
            for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && Ot(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++i < a; ) {
              var g = e[i];
              g && t(n, g, i, l);
            }
            return n;
          });
        }
        function Xa(t, n) {
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
        function Qa(t) {
          return function(n, e, i) {
            for (var a = -1, l = at(n), h = i(n), g = h.length; g--; ) {
              var w = h[t ? g : ++a];
              if (e(l[w], w, l) === !1)
                break;
            }
            return n;
          };
        }
        function kf(t, n, e) {
          var i = n & N, a = ke(t);
          function l() {
            var h = this && this !== It && this instanceof l ? a : t;
            return h.apply(i ? e : this, arguments);
          }
          return l;
        }
        function Va(t) {
          return function(n) {
            n = rt(n);
            var e = se(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), a = e ? qn(e, 1).join("") : n.slice(1);
            return i[t]() + a;
          };
        }
        function pe(t) {
          return function(n) {
            return oi(Qo(Xo(n).replace(Sl, "")), t, "");
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
            var e = fe(t.prototype), i = t.apply(e, n);
            return dt(i) ? i : e;
          };
        }
        function Of(t, n, e) {
          var i = ke(t);
          function a() {
            for (var l = arguments.length, h = C(l), g = l, w = ge(a); g--; )
              h[g] = arguments[g];
            var x = l < 3 && h[0] !== w && h[l - 1] !== w ? [] : Nn(h, w);
            if (l -= x.length, l < e)
              return ro(
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
        function ja(t) {
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
        function to(t) {
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
              w && Hi(w[0]) && w[1] == (St | J | _t | jt) && !w[4].length && w[9] == 1 ? h = h[Cr(w[0])].apply(h, w[3]) : h = l.length == 1 && Hi(l) ? h[g]() : h.thru(l);
            }
            return function() {
              var x = arguments, A = x[0];
              if (h && x.length == 1 && H(A))
                return h.plant(A).value();
              for (var P = 0, L = e ? n[P].apply(this, x) : A; ++P < e; )
                L = n[P].call(this, L);
              return L;
            };
          });
        }
        function mr(t, n, e, i, a, l, h, g, w, x) {
          var A = n & St, P = n & N, L = n & q, D = n & (J | it), W = n & Ht, X = L ? r : ke(t);
          function U() {
            for (var V = arguments.length, tt = C(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = ge(U), Vt = Kl(tt, Dt);
            if (i && (tt = Ja(tt, i, a, D)), l && (tt = Ya(tt, l, h, D)), V -= Vt, D && V < x) {
              var yt = Nn(tt, Dt);
              return ro(
                t,
                n,
                mr,
                U.placeholder,
                e,
                tt,
                yt,
                g,
                w,
                x - V
              );
            }
            var dn = P ? e : this, Ln = L ? dn[t] : t;
            return V = tt.length, g ? tt = nh(tt, g) : W && V > 1 && tt.reverse(), A && w < V && (tt.length = w), this && this !== It && this instanceof U && (Ln = X || ke(Ln)), Ln.apply(dn, tt);
          }
          return U;
        }
        function no(t, n) {
          return function(e, i) {
            return lf(e, t, n(i), {});
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
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Ua(e), i = Ua(i)), a = t(e, i);
            }
            return a;
          };
        }
        function Ni(t) {
          return En(function(n) {
            return n = gt(n, Jt(B())), Q(function(e) {
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
            return e ? Ri(n, t) : n;
          var i = Ri(n, ar(t / ae(n)));
          return se(n) ? qn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function Df(t, n, e, i) {
          var a = n & N, l = ke(t);
          function h() {
            for (var g = -1, w = arguments.length, x = -1, A = i.length, P = C(A + w), L = this && this !== It && this instanceof h ? l : t; ++x < A; )
              P[x] = i[x];
            for (; w--; )
              P[x++] = arguments[++g];
            return Zt(L, a ? e : this, P);
          }
          return h;
        }
        function eo(t) {
          return function(n, e, i) {
            return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), Mf(n, e, i, t);
          };
        }
        function Mr(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = ln(n), e = ln(e)), t(n, e);
          };
        }
        function ro(t, n, e, i, a, l, h, g, w, x) {
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
            w,
            x
          ], U = e.apply(r, X);
          return Hi(t) && _o(U, X), U.placeholder = i, vo(U, t, n);
        }
        function Bi(t) {
          var n = bt[t];
          return function(e, i) {
            if (e = ln(e), i = i == null ? 0 : Et(Y(i), 292), i && _a(e)) {
              var a = (rt(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + i));
              return a = (rt(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - i));
            }
            return n(e);
          };
        }
        var Nf = le && 1 / Xe(new le([, -0]))[1] == Sn ? function(t) {
          return new le(t);
        } : as;
        function io(t) {
          return function(n) {
            var e = Rt(n);
            return e == vt ? gi(n) : e == pt ? jl(n) : Hl(n, t(n));
          };
        }
        function Pn(t, n, e, i, a, l, h, g) {
          var w = n & q;
          if (!w && typeof t != "function")
            throw new rn(d);
          var x = i ? i.length : 0;
          if (x || (n &= ~(_t | Bt), i = a = r), h = h === r ? h : xt(Y(h), 0), g = g === r ? g : Y(g), x -= a ? a.length : 0, n & Bt) {
            var A = i, P = a;
            i = a = r;
          }
          var L = w ? r : $i(t), D = [
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
          if (L && Vf(D, L), t = D[0], n = D[1], e = D[2], i = D[3], a = D[4], g = D[9] = D[9] === r ? w ? 0 : t.length : xt(D[9] - x, 0), !g && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var W = kf(t, n, e);
          else n == J || n == it ? W = Of(t, n, g) : (n == _t || n == (N | _t)) && !a.length ? W = Df(t, n, e, i) : W = mr.apply(r, D);
          var X = L ? Ba : _o;
          return vo(X(W, D), t, n);
        }
        function so(t, n, e, i) {
          return t === r || gn(t, ue[e]) && !st.call(i, e) ? n : t;
        }
        function ao(t, n, e, i, a, l) {
          return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, ao, l), l.delete(n)), t;
        }
        function Bf(t) {
          return Ne(t) ? r : t;
        }
        function oo(t, n, e, i, a, l) {
          var h = e & T, g = t.length, w = n.length;
          if (g != w && !(h && w > g))
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
                if (!Se(D, tt) && (W === V || a(W, V, e, i, l)))
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
        function Wf(t, n, e, i, a, l, h) {
          switch (e) {
            case ee:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case Ce:
              return !(t.byteLength != n.byteLength || !l(new er(t), new er(n)));
            case lt:
            case Mt:
            case Lt:
              return gn(+t, +n);
            case Ft:
              return t.name == n.name && t.message == n.message;
            case tn:
            case mn:
              return t == n + "";
            case vt:
              var g = gi;
            case pt:
              var w = i & T;
              if (g || (g = Xe), t.size != n.size && !w)
                return !1;
              var x = h.get(t);
              if (x)
                return x == n;
              i |= E, h.set(t, n);
              var A = oo(g(t), g(n), i, a, l, h);
              return h.delete(t), A;
            case ze:
              if (Pe)
                return Pe.call(t) == Pe.call(n);
          }
          return !1;
        }
        function Uf(t, n, e, i, a, l) {
          var h = e & T, g = Wi(t), w = g.length, x = Wi(n), A = x.length;
          if (w != A && !h)
            return !1;
          for (var P = w; P--; ) {
            var L = g[P];
            if (!(h ? L in n : st.call(n, L)))
              return !1;
          }
          var D = l.get(t), W = l.get(n);
          if (D && W)
            return D == n && W == t;
          var X = !0;
          l.set(t, n), l.set(n, t);
          for (var U = h; ++P < w; ) {
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
        function En(t) {
          return Zi(po(t, r, So), t + "");
        }
        function Wi(t) {
          return Ia(t, At, Gi);
        }
        function Ui(t) {
          return Ia(t, Gt, uo);
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
        function ge(t) {
          var n = st.call(u, "placeholder") ? u : t;
          return n.placeholder;
        }
        function B() {
          var t = u.iteratee || is;
          return t = t === is ? Ra : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Sr(t, n) {
          var e = t.__data__;
          return Jf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function qi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var i = n[e], a = t[i];
            n[e] = [i, a, fo(a)];
          }
          return n;
        }
        function jn(t, n) {
          var e = Xl(t, n);
          return Ea(e) ? e : r;
        }
        function $f(t) {
          var n = st.call(t, Jn), e = t[Jn];
          try {
            t[Jn] = r;
            var i = !0;
          } catch {
          }
          var a = tr.call(t);
          return i && (n ? t[Jn] = e : delete t[Jn]), a;
        }
        var Gi = _i ? function(t) {
          return t == null ? [] : (t = at(t), On(_i(t), function(n) {
            return ga.call(t, n);
          }));
        } : os, uo = _i ? function(t) {
          for (var n = []; t; )
            Dn(n, Gi(t)), t = rr(t);
          return n;
        } : os, Rt = kt;
        (vi && Rt(new vi(new ArrayBuffer(1))) != ee || xe && Rt(new xe()) != vt || mi && Rt(mi.resolve()) != Ut || le && Rt(new le()) != pt || Ae && Rt(new Ae()) != Me) && (Rt = function(t) {
          var n = kt(t), e = n == Ct ? t.constructor : r, i = e ? te(e) : "";
          if (i)
            switch (i) {
              case Cc:
                return ee;
              case Sc:
                return vt;
              case bc:
                return Ut;
              case xc:
                return pt;
              case Ac:
                return Me;
            }
          return n;
        });
        function qf(t, n, e) {
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
        function Gf(t) {
          var n = t.match(Ju);
          return n ? n[1].split(Yu) : [];
        }
        function lo(t, n, e) {
          n = $n(n, t);
          for (var i = -1, a = n.length, l = !1; ++i < a; ) {
            var h = Mn(n[i]);
            if (!(l = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return l || ++i != a ? l : (a = t == null ? 0 : t.length, !!a && Rr(a) && Rn(h, a) && (H(t) || ne(t)));
        }
        function zf(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function co(t) {
          return typeof t.constructor == "function" && !Oe(t) ? fe(rr(t)) : {};
        }
        function Hf(t, n, e) {
          var i = t.constructor;
          switch (n) {
            case Ce:
              return Di(t);
            case lt:
            case Mt:
              return new i(+t);
            case ee:
              return Pf(t, e);
            case qr:
            case Gr:
            case zr:
            case Hr:
            case Kr:
            case Zr:
            case Jr:
            case Yr:
            case Xr:
              return Ka(t, e);
            case vt:
              return new i();
            case Lt:
            case mn:
              return new i(t);
            case tn:
              return Ef(t);
            case pt:
              return new i();
            case ze:
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
          return H(t) || ne(t) || !!(da && t && t[da]);
        }
        function Rn(t, n) {
          var e = typeof t;
          return n = n ?? _n, !!n && (e == "number" || e != "symbol" && il.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Ot(t, n, e) {
          if (!dt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && Rn(n, e.length) : i == "string" && n in e) ? gn(e[n], t) : !1;
        }
        function zi(t, n) {
          if (H(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Gu.test(t) || !qu.test(t) || n != null && t in at(n);
        }
        function Jf(t) {
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
        function Yf(t) {
          return !!fa && fa in t;
        }
        var Xf = Ve ? Tn : us;
        function Oe(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || ue;
          return t === e;
        }
        function fo(t) {
          return t === t && !dt(t);
        }
        function ho(t, n) {
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
          var e = t[1], i = n[1], a = e | i, l = a < (N | q | St), h = i == St && e == J || i == St && e == jt && t[7].length <= n[8] || i == (St | jt) && n[7].length <= n[8] && e == J;
          if (!(l || h))
            return t;
          i & N && (t[2] = n[2], a |= e & N ? 0 : Z);
          var g = n[3];
          if (g) {
            var w = t[3];
            t[3] = w ? Ja(w, g, n[4]) : g, t[4] = w ? Nn(t[3], I) : n[4];
          }
          return g = n[5], g && (w = t[5], t[5] = w ? Ya(w, g, n[6]) : g, t[6] = w ? Nn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), i & St && (t[8] = t[8] == null ? n[8] : Et(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
        }
        function jf(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function th(t) {
          return tr.call(t);
        }
        function po(t, n, e) {
          return n = xt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, a = -1, l = xt(i.length - n, 0), h = C(l); ++a < l; )
              h[a] = i[n + a];
            a = -1;
            for (var g = C(n + 1); ++a < n; )
              g[a] = i[a];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function go(t, n) {
          return n.length < 2 ? t : Vn(t, on(n, 0, -1));
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
        var _o = mo(Ba), De = dc || function(t, n) {
          return It.setTimeout(t, n);
        }, Zi = mo(bf);
        function vo(t, n, e) {
          var i = n + "";
          return Zi(t, Kf(i, eh(Gf(i), e)));
        }
        function mo(t) {
          var n = 0, e = 0;
          return function() {
            var i = wc(), a = Ur - (i - e);
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
        var wo = Qf(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(zu, function(e, i, a, l) {
            n.push(a ? l.replace(Vu, "$1") : i || e);
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
          return en(ft, function(e) {
            var i = "_." + e[0];
            n & e[1] && !Je(t, i) && t.push(i);
          }), t.sort();
        }
        function yo(t) {
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
          for (var a = 0, l = 0, h = C(ar(i / n)); a < i; )
            h[l++] = on(t, a, a += n);
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
          for (var n = C(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Dn(H(e) ? $t(e) : [e], Pt(n, 1));
        }
        var ah = Q(function(t, n) {
          return wt(t) ? Re(t, Pt(n, 1, wt, !0)) : [];
        }), oh = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Re(t, Pt(n, 1, wt, !0), B(e, 2)) : [];
        }), uh = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Re(t, Pt(n, 1, wt, !0), r, e) : [];
        });
        function lh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), on(t, n < 0 ? 0 : n, i)) : [];
        }
        function ch(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function fh(t, n) {
          return t && t.length ? _r(t, B(n, 3), !0, !0) : [];
        }
        function hh(t, n) {
          return t && t.length ? _r(t, B(n, 3), !0) : [];
        }
        function ph(t, n, e, i) {
          var a = t == null ? 0 : t.length;
          return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = a), sf(t, n, e, i)) : [];
        }
        function Mo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = e == null ? 0 : Y(e);
          return a < 0 && (a = xt(i + a, 0)), Ye(t, B(n, 3), a);
        }
        function Co(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = i - 1;
          return e !== r && (a = Y(e), a = e < 0 ? xt(i + a, 0) : Et(a, i - 1)), Ye(t, B(n, 3), a, !0);
        }
        function So(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, 1) : [];
        }
        function gh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, Sn) : [];
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
        function bo(t) {
          return t && t.length ? t[0] : r;
        }
        function vh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = e == null ? 0 : Y(e);
          return a < 0 && (a = xt(i + a, 0)), ie(t, n, a);
        }
        function mh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 0, -1) : [];
        }
        var wh = Q(function(t) {
          var n = gt(t, ki);
          return n.length && n[0] === t[0] ? bi(n) : [];
        }), yh = Q(function(t) {
          var n = un(t), e = gt(t, ki);
          return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? bi(e, B(n, 2)) : [];
        }), Mh = Q(function(t) {
          var n = un(t), e = gt(t, ki);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? bi(e, r, n) : [];
        });
        function Ch(t, n) {
          return t == null ? "" : vc.call(t, n);
        }
        function un(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function Sh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var a = i;
          return e !== r && (a = Y(e), a = a < 0 ? xt(i + a, 0) : Et(a, i - 1)), n === n ? nc(t, n, a) : Ye(t, ra, a, !0);
        }
        function bh(t, n) {
          return t && t.length ? ka(t, Y(n)) : r;
        }
        var xh = Q(xo);
        function xo(t, n) {
          return t && t.length && n && n.length ? Pi(t, n) : t;
        }
        function Ah(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, B(e, 2)) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Pi(t, n, r, e) : t;
        }
        var Ph = En(function(t, n) {
          var e = t == null ? 0 : t.length, i = yi(t, n);
          return Na(t, gt(n, function(a) {
            return Rn(a, e) ? +a : a;
          }).sort(Za)), i;
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
          return Na(t, a), e;
        }
        function Ji(t) {
          return t == null ? t : Mc.call(t);
        }
        function Rh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Y(n), e = e === r ? i : Y(e)), on(t, n, e)) : [];
        }
        function Th(t, n) {
          return dr(t, n);
        }
        function Fh(t, n, e) {
          return Ti(t, n, B(e, 2));
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
        function kh(t, n) {
          return dr(t, n, !0);
        }
        function Oh(t, n, e) {
          return Ti(t, n, B(e, 2), !0);
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
          return t && t.length ? Wa(t) : [];
        }
        function Bh(t, n) {
          return t && t.length ? Wa(t, B(n, 2)) : [];
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
          return t && t.length ? _r(t, B(n, 3), !1, !0) : [];
        }
        function Gh(t, n) {
          return t && t.length ? _r(t, B(n, 3)) : [];
        }
        var zh = Q(function(t) {
          return Un(Pt(t, 1, wt, !0));
        }), Hh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Un(Pt(t, 1, wt, !0), B(n, 2));
        }), Kh = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Un(Pt(t, 1, wt, !0), r, n);
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
        function Yi(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = On(t, function(e) {
            if (wt(e))
              return n = xt(e.length, n), !0;
          }), hi(n, function(e) {
            return gt(t, li(e));
          });
        }
        function Ao(t, n) {
          if (!(t && t.length))
            return [];
          var e = Yi(t);
          return n == null ? e : gt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var Xh = Q(function(t, n) {
          return wt(t) ? Re(t, n) : [];
        }), Qh = Q(function(t) {
          return Li(On(t, wt));
        }), Vh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Li(On(t, wt), B(n, 2));
        }), jh = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Li(On(t, wt), r, n);
        }), tp = Q(Yi);
        function np(t, n) {
          return Ga(t || [], n || [], Ee);
        }
        function ep(t, n) {
          return Ga(t || [], n || [], Le);
        }
        var rp = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Ao(t, e);
        });
        function Io(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function ip(t, n) {
          return n(t), t;
        }
        function xr(t, n) {
          return n(t);
        }
        var sp = En(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, a = function(l) {
            return yi(l, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !Rn(e) ? this.thru(a) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: xr,
            args: [a],
            thisArg: r
          }), new sn(i, this.__chain__).thru(function(l) {
            return n && !l.length && l.push(r), l;
          }));
        });
        function ap() {
          return Io(this);
        }
        function op() {
          return new sn(this.value(), this.__chain__);
        }
        function up() {
          this.__values__ === r && (this.__values__ = $o(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function lp() {
          return this;
        }
        function cp(t) {
          for (var n, e = this; e instanceof cr; ) {
            var i = yo(e);
            i.__index__ = 0, i.__values__ = r, n ? a.__wrapped__ = i : n = i;
            var a = i;
            e = e.__wrapped__;
          }
          return a.__wrapped__ = t, n;
        }
        function fp() {
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
        function hp() {
          return qa(this.__wrapped__, this.__actions__);
        }
        var pp = vr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : In(t, e, 1);
        });
        function gp(t, n, e) {
          var i = H(t) ? na : rf;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        function dp(t, n) {
          var e = H(t) ? On : xa;
          return e(t, B(n, 3));
        }
        var _p = ja(Mo), vp = ja(Co);
        function mp(t, n) {
          return Pt(Ar(t, n), 1);
        }
        function wp(t, n) {
          return Pt(Ar(t, n), Sn);
        }
        function yp(t, n, e) {
          return e = e === r ? 1 : Y(e), Pt(Ar(t, n), e);
        }
        function Po(t, n) {
          var e = H(t) ? en : Wn;
          return e(t, B(n, 3));
        }
        function Eo(t, n) {
          var e = H(t) ? Bl : ba;
          return e(t, B(n, 3));
        }
        var Mp = vr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
        });
        function Cp(t, n, e, i) {
          t = qt(t) ? t : _e(t), e = e && !i ? Y(e) : 0;
          var a = t.length;
          return e < 0 && (e = xt(a + e, 0)), Tr(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && ie(t, n, e) > -1;
        }
        var Sp = Q(function(t, n, e) {
          var i = -1, a = typeof n == "function", l = qt(t) ? C(t.length) : [];
          return Wn(t, function(h) {
            l[++i] = a ? Zt(n, h, e) : Te(h, n, e);
          }), l;
        }), bp = vr(function(t, n, e) {
          In(t, e, n);
        });
        function Ar(t, n) {
          var e = H(t) ? gt : Ta;
          return e(t, B(n, 3));
        }
        function xp(t, n, e, i) {
          return t == null ? [] : (H(n) || (n = n == null ? [] : [n]), e = i ? r : e, H(e) || (e = e == null ? [] : [e]), Oa(t, n, e));
        }
        var Ap = vr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Ip(t, n, e) {
          var i = H(t) ? oi : sa, a = arguments.length < 3;
          return i(t, B(n, 4), e, a, Wn);
        }
        function Pp(t, n, e) {
          var i = H(t) ? Wl : sa, a = arguments.length < 3;
          return i(t, B(n, 4), e, a, ba);
        }
        function Ep(t, n) {
          var e = H(t) ? On : xa;
          return e(t, Er(B(n, 3)));
        }
        function Rp(t) {
          var n = H(t) ? ya : Cf;
          return n(t);
        }
        function Tp(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var i = H(t) ? Vc : Sf;
          return i(t, n);
        }
        function Fp(t) {
          var n = H(t) ? jc : xf;
          return n(t);
        }
        function Lp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Tr(t) ? ae(t) : t.length;
          var n = Rt(t);
          return n == vt || n == pt ? t.size : Ai(t).length;
        }
        function kp(t, n, e) {
          var i = H(t) ? ui : Af;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        var Op = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Oa(t, Pt(n, 1), []);
        }), Ir = gc || function() {
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
        function Ro(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, St, r, r, r, r, n);
        }
        function To(t, n) {
          var e;
          if (typeof n != "function")
            throw new rn(d);
          return t = Y(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var Xi = Q(function(t, n, e) {
          var i = N;
          if (e.length) {
            var a = Nn(e, ge(Xi));
            i |= _t;
          }
          return Pn(t, i, n, e, a);
        }), Fo = Q(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var a = Nn(e, ge(Fo));
            i |= _t;
          }
          return Pn(n, i, t, e, a);
        });
        function Lo(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, J, r, r, r, r, r, n);
          return i.placeholder = Lo.placeholder, i;
        }
        function ko(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, it, r, r, r, r, r, n);
          return i.placeholder = ko.placeholder, i;
        }
        function Oo(t, n, e) {
          var i, a, l, h, g, w, x = 0, A = !1, P = !1, L = !0;
          if (typeof t != "function")
            throw new rn(d);
          n = ln(n) || 0, dt(e) && (A = !!e.leading, P = "maxWait" in e, l = P ? xt(ln(e.maxWait) || 0, n) : l, L = "trailing" in e ? !!e.trailing : L);
          function D(yt) {
            var dn = i, Ln = a;
            return i = a = r, x = yt, h = t.apply(Ln, dn), h;
          }
          function W(yt) {
            return x = yt, g = De(V, n), A ? D(yt) : h;
          }
          function X(yt) {
            var dn = yt - w, Ln = yt - x, tu = n - dn;
            return P ? Et(tu, l - Ln) : tu;
          }
          function U(yt) {
            var dn = yt - w, Ln = yt - x;
            return w === r || dn >= n || dn < 0 || P && Ln >= l;
          }
          function V() {
            var yt = Ir();
            if (U(yt))
              return tt(yt);
            g = De(V, X(yt));
          }
          function tt(yt) {
            return g = r, L && i ? D(yt) : (i = a = r, h);
          }
          function Qt() {
            g !== r && za(g), x = 0, i = w = a = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Ir());
          }
          function Vt() {
            var yt = Ir(), dn = U(yt);
            if (i = arguments, a = this, w = yt, dn) {
              if (g === r)
                return W(w);
              if (P)
                return za(g), g = De(V, n), D(w);
            }
            return g === r && (g = De(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Np = Q(function(t, n) {
          return Sa(t, 1, n);
        }), Bp = Q(function(t, n, e) {
          return Sa(t, ln(n) || 0, e);
        });
        function Wp(t) {
          return Pn(t, Ht);
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
        function Up(t) {
          return To(2, t);
        }
        var $p = If(function(t, n) {
          n = n.length == 1 && H(n[0]) ? gt(n[0], Jt(B())) : gt(Pt(n, 1), Jt(B()));
          var e = n.length;
          return Q(function(i) {
            for (var a = -1, l = Et(i.length, e); ++a < l; )
              i[a] = n[a].call(this, i[a]);
            return Zt(t, this, i);
          });
        }), Qi = Q(function(t, n) {
          var e = Nn(n, ge(Qi));
          return Pn(t, _t, r, n, e);
        }), Do = Q(function(t, n) {
          var e = Nn(n, ge(Do));
          return Pn(t, Bt, r, n, e);
        }), qp = En(function(t, n) {
          return Pn(t, jt, r, r, r, n);
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
            var i = e[n], a = qn(e, 0, n);
            return i && Dn(a, i), Zt(t, this, a);
          });
        }
        function Hp(t, n, e) {
          var i = !0, a = !0;
          if (typeof t != "function")
            throw new rn(d);
          return dt(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), Oo(t, n, {
            leading: i,
            maxWait: n,
            trailing: a
          });
        }
        function Kp(t) {
          return Ro(t, 1);
        }
        function Zp(t, n) {
          return Qi(Oi(n), t);
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
          return n == null || Ca(t, n, At(n));
        }
        function gn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var tg = Mr(Si), ng = Mr(function(t, n) {
          return t >= n;
        }), ne = Pa(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Pa : function(t) {
          return mt(t) && st.call(t, "callee") && !ga.call(t, "callee");
        }, H = C.isArray, eg = Ys ? Jt(Ys) : cf;
        function qt(t) {
          return t != null && Rr(t.length) && !Tn(t);
        }
        function wt(t) {
          return mt(t) && qt(t);
        }
        function rg(t) {
          return t === !0 || t === !1 || mt(t) && kt(t) == lt;
        }
        var Gn = _c || us, ig = Xs ? Jt(Xs) : ff;
        function sg(t) {
          return mt(t) && t.nodeType === 1 && !Ne(t);
        }
        function ag(t) {
          if (t == null)
            return !0;
          if (qt(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || de(t) || ne(t)))
            return !t.length;
          var n = Rt(t);
          if (n == vt || n == pt)
            return !t.size;
          if (Oe(t))
            return !Ai(t).length;
          for (var e in t)
            if (st.call(t, e))
              return !1;
          return !0;
        }
        function og(t, n) {
          return Fe(t, n);
        }
        function ug(t, n, e) {
          e = typeof e == "function" ? e : r;
          var i = e ? e(t, n) : r;
          return i === r ? Fe(t, n, r, e) : !!i;
        }
        function Vi(t) {
          if (!mt(t))
            return !1;
          var n = kt(t);
          return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !Ne(t);
        }
        function lg(t) {
          return typeof t == "number" && _a(t);
        }
        function Tn(t) {
          if (!dt(t))
            return !1;
          var n = kt(t);
          return n == Wt || n == vn || n == ot || n == fn;
        }
        function No(t) {
          return typeof t == "number" && t == Y(t);
        }
        function Rr(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _n;
        }
        function dt(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function mt(t) {
          return t != null && typeof t == "object";
        }
        var Bo = Qs ? Jt(Qs) : pf;
        function cg(t, n) {
          return t === n || xi(t, n, qi(n));
        }
        function fg(t, n, e) {
          return e = typeof e == "function" ? e : r, xi(t, n, qi(n), e);
        }
        function hg(t) {
          return Wo(t) && t != +t;
        }
        function pg(t) {
          if (Xf(t))
            throw new z(p);
          return Ea(t);
        }
        function gg(t) {
          return t === null;
        }
        function dg(t) {
          return t == null;
        }
        function Wo(t) {
          return typeof t == "number" || mt(t) && kt(t) == Lt;
        }
        function Ne(t) {
          if (!mt(t) || kt(t) != Ct)
            return !1;
          var n = rr(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && je.call(e) == cc;
        }
        var ji = Vs ? Jt(Vs) : gf;
        function _g(t) {
          return No(t) && t >= -_n && t <= _n;
        }
        var Uo = js ? Jt(js) : df;
        function Tr(t) {
          return typeof t == "string" || !H(t) && mt(t) && kt(t) == mn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && kt(t) == ze;
        }
        var de = ta ? Jt(ta) : _f;
        function vg(t) {
          return t === r;
        }
        function mg(t) {
          return mt(t) && Rt(t) == Me;
        }
        function wg(t) {
          return mt(t) && kt(t) == ku;
        }
        var yg = Mr(Ii), Mg = Mr(function(t, n) {
          return t <= n;
        });
        function $o(t) {
          if (!t)
            return [];
          if (qt(t))
            return Tr(t) ? hn(t) : $t(t);
          if (be && t[be])
            return Vl(t[be]());
          var n = Rt(t), e = n == vt ? gi : n == pt ? Xe : _e;
          return e(t);
        }
        function Fn(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = ln(t), t === Sn || t === -Sn) {
            var n = t < 0 ? -1 : 1;
            return n * Ge;
          }
          return t === t ? t : 0;
        }
        function Y(t) {
          var n = Fn(t), e = n % 1;
          return n === n ? e ? n - e : n : 0;
        }
        function qo(t) {
          return t ? Qn(Y(t), 0, k) : 0;
        }
        function ln(t) {
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
          t = aa(t);
          var e = nl.test(t);
          return e || rl.test(t) ? Ol(t.slice(2), e ? 2 : 8) : tl.test(t) ? bn : +t;
        }
        function Go(t) {
          return yn(t, Gt(t));
        }
        function Cg(t) {
          return t ? Qn(Y(t), -_n, _n) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var Sg = he(function(t, n) {
          if (Oe(n) || qt(n)) {
            yn(n, At(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Ee(t, e, n[e]);
        }), zo = he(function(t, n) {
          yn(n, Gt(n), t);
        }), Fr = he(function(t, n, e, i) {
          yn(n, Gt(n), t, i);
        }), bg = he(function(t, n, e, i) {
          yn(n, At(n), t, i);
        }), xg = En(yi);
        function Ag(t, n) {
          var e = fe(t);
          return n == null ? e : Ma(e, n);
        }
        var Ig = Q(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, a = i > 2 ? n[2] : r;
          for (a && Ot(n[0], n[1], a) && (i = 1); ++e < i; )
            for (var l = n[e], h = Gt(l), g = -1, w = h.length; ++g < w; ) {
              var x = h[g], A = t[x];
              (A === r || gn(A, ue[x]) && !st.call(t, x)) && (t[x] = l[x]);
            }
          return t;
        }), Pg = Q(function(t) {
          return t.push(r, ao), Zt(Ho, r, t);
        });
        function Eg(t, n) {
          return ea(t, B(n, 3), wn);
        }
        function Rg(t, n) {
          return ea(t, B(n, 3), Ci);
        }
        function Tg(t, n) {
          return t == null ? t : Mi(t, B(n, 3), Gt);
        }
        function Fg(t, n) {
          return t == null ? t : Aa(t, B(n, 3), Gt);
        }
        function Lg(t, n) {
          return t && wn(t, B(n, 3));
        }
        function kg(t, n) {
          return t && Ci(t, B(n, 3));
        }
        function Og(t) {
          return t == null ? [] : pr(t, At(t));
        }
        function Dg(t) {
          return t == null ? [] : pr(t, Gt(t));
        }
        function ts(t, n, e) {
          var i = t == null ? r : Vn(t, n);
          return i === r ? e : i;
        }
        function Ng(t, n) {
          return t != null && lo(t, n, af);
        }
        function ns(t, n) {
          return t != null && lo(t, n, of);
        }
        var Bg = no(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
        }, rs(zt)), Wg = no(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, B), Ug = Q(Te);
        function At(t) {
          return qt(t) ? wa(t) : Ai(t);
        }
        function Gt(t) {
          return qt(t) ? wa(t, !0) : vf(t);
        }
        function $g(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, a, l) {
            In(e, n(i, a, l), i);
          }), e;
        }
        function qg(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, a, l) {
            In(e, a, n(i, a, l));
          }), e;
        }
        var Gg = he(function(t, n, e) {
          gr(t, n, e);
        }), Ho = he(function(t, n, e, i) {
          gr(t, n, e, i);
        }), zg = En(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = gt(n, function(l) {
            return l = $n(l, t), i || (i = l.length > 1), l;
          }), yn(t, Ui(t), e), i && (e = an(e, m | R | F, Bf));
          for (var a = n.length; a--; )
            Fi(e, n[a]);
          return e;
        });
        function Hg(t, n) {
          return Ko(t, Er(B(n)));
        }
        var Kg = En(function(t, n) {
          return t == null ? {} : wf(t, n);
        });
        function Ko(t, n) {
          if (t == null)
            return {};
          var e = gt(Ui(t), function(i) {
            return [i];
          });
          return n = B(n), Da(t, e, function(i, a) {
            return n(i, a[0]);
          });
        }
        function Zg(t, n, e) {
          n = $n(n, t);
          var i = -1, a = n.length;
          for (a || (a = 1, t = r); ++i < a; ) {
            var l = t == null ? r : t[Mn(n[i])];
            l === r && (i = a, l = e), t = Tn(l) ? l.call(t) : l;
          }
          return t;
        }
        function Jg(t, n, e) {
          return t == null ? t : Le(t, n, e);
        }
        function Yg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Le(t, n, e, i);
        }
        var Zo = io(At), Jo = io(Gt);
        function Xg(t, n, e) {
          var i = H(t), a = i || Gn(t) || de(t);
          if (n = B(n, 4), e == null) {
            var l = t && t.constructor;
            a ? e = i ? new l() : [] : dt(t) ? e = Tn(l) ? fe(rr(t)) : {} : e = {};
          }
          return (a ? en : wn)(t, function(h, g, w) {
            return n(e, h, g, w);
          }), e;
        }
        function Qg(t, n) {
          return t == null ? !0 : Fi(t, n);
        }
        function Vg(t, n, e) {
          return t == null ? t : $a(t, n, Oi(e));
        }
        function jg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : $a(t, n, Oi(e), i);
        }
        function _e(t) {
          return t == null ? [] : pi(t, At(t));
        }
        function td(t) {
          return t == null ? [] : pi(t, Gt(t));
        }
        function nd(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = ln(e), e = e === e ? e : 0), n !== r && (n = ln(n), n = n === n ? n : 0), Qn(ln(t), n, e);
        }
        function ed(t, n, e) {
          return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = ln(t), uf(t, n, e);
        }
        function rd(t, n, e) {
          if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
            var i = t;
            t = n, n = i;
          }
          if (e || t % 1 || n % 1) {
            var a = va();
            return Et(t + a * (n - t + kl("1e-" + ((a + "").length - 1))), n);
          }
          return Ei(t, n);
        }
        var id = pe(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? Yo(n) : n);
        });
        function Yo(t) {
          return es(rt(t).toLowerCase());
        }
        function Xo(t) {
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
          return t = rt(t), t && Wu.test(t) ? t.replace(As, Jl) : t;
        }
        function od(t) {
          return t = rt(t), t && Hu.test(t) ? t.replace(Qr, "\\$&") : t;
        }
        var ud = pe(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), ld = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), cd = Va("toLowerCase");
        function fd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          if (!n || i >= n)
            return t;
          var a = (n - i) / 2;
          return yr(or(a), e) + t + yr(ar(a), e);
        }
        function hd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? t + yr(n - i, e) : t;
        }
        function pd(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? yr(n - i, e) + t : t;
        }
        function gd(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), yc(rt(t).replace(Vr, ""), n || 0);
        }
        function dd(t, n, e) {
          return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n), Ri(rt(t), n);
        }
        function _d() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var vd = pe(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function md(t, n, e) {
          return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && se(t)) ? qn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var wd = pe(function(t, n, e) {
          return t + (e ? " " : "") + es(n);
        });
        function yd(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Qn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Md(t, n, e) {
          var i = u.templateSettings;
          e && Ot(t, n, e) && (n = r), t = rt(t), n = Fr({}, n, i, so);
          var a = Fr({}, n.imports, i.imports, so), l = At(a), h = pi(a, l), g, w, x = 0, A = n.interpolate || He, P = "__p += '", L = di(
            (n.escape || He).source + "|" + A.source + "|" + (A === Is ? ju : He).source + "|" + (n.evaluate || He).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++El + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), P += t.slice(x, Vt).replace(al, Yl), V && (g = !0, P += `' +
__e(` + V + `) +
'`), Dt && (w = !0, P += `';
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
            throw new z(v);
          P = (w ? P.replace(Ou, "") : P).replace(Du, "$1").replace(Nu, "$1;"), P = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var X = Vo(function() {
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
            return aa(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = hn(n), l = oa(i, a), h = ua(i, a) + 1;
          return qn(i, l, h).join("");
        }
        function xd(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, ca(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = ua(i, hn(n)) + 1;
          return qn(i, 0, a).join("");
        }
        function Ad(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(Vr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), a = oa(i, hn(n));
          return qn(i, a).join("");
        }
        function Id(t, n) {
          var e = Tt, i = we;
          if (dt(n)) {
            var a = "separator" in n ? n.separator : a;
            e = "length" in n ? Y(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
          }
          t = rt(t);
          var l = t.length;
          if (se(t)) {
            var h = hn(t);
            l = h.length;
          }
          if (e >= l)
            return t;
          var g = e - ae(i);
          if (g < 1)
            return i;
          var w = h ? qn(h, 0, g).join("") : t.slice(0, g);
          if (a === r)
            return w + i;
          if (h && (g += w.length - g), ji(a)) {
            if (t.slice(g).search(a)) {
              var x, A = w;
              for (a.global || (a = di(a.source, rt(Ps.exec(a)) + "g")), a.lastIndex = 0; x = a.exec(A); )
                var P = x.index;
              w = w.slice(0, P === r ? g : P);
            }
          } else if (t.indexOf(Yt(a), g) != g) {
            var L = w.lastIndexOf(a);
            L > -1 && (w = w.slice(0, L));
          }
          return w + i;
        }
        function Pd(t) {
          return t = rt(t), t && Bu.test(t) ? t.replace(xs, ec) : t;
        }
        var Ed = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), es = Va("toUpperCase");
        function Qo(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? Ql(t) ? sc(t) : ql(t) : t.match(n) || [];
        }
        var Vo = Q(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return Vi(e) ? e : new z(e);
          }
        }), Rd = En(function(t, n) {
          return en(n, function(e) {
            e = Mn(e), In(t, e, Xi(t[e], t));
          }), t;
        });
        function Td(t) {
          var n = t == null ? 0 : t.length, e = B();
          return t = n ? gt(t, function(i) {
            if (typeof i[1] != "function")
              throw new rn(d);
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
          return ef(an(t, m));
        }
        function rs(t) {
          return function() {
            return t;
          };
        }
        function Ld(t, n) {
          return t == null || t !== t ? n : t;
        }
        var kd = to(), Od = to(!0);
        function zt(t) {
          return t;
        }
        function is(t) {
          return Ra(typeof t == "function" ? t : an(t, m));
        }
        function Dd(t) {
          return Fa(an(t, m));
        }
        function Nd(t, n) {
          return La(t, an(n, m));
        }
        var Bd = Q(function(t, n) {
          return function(e) {
            return Te(e, t, n);
          };
        }), Wd = Q(function(t, n) {
          return function(e) {
            return Te(t, e, n);
          };
        });
        function ss(t, n, e) {
          var i = At(n), a = pr(n, i);
          e == null && !(dt(n) && (a.length || !i.length)) && (e = n, n = t, t = this, a = pr(n, At(n)));
          var l = !(dt(e) && "chain" in e) || !!e.chain, h = Tn(t);
          return en(a, function(g) {
            var w = n[g];
            t[g] = w, h && (t.prototype[g] = function() {
              var x = this.__chain__;
              if (l || x) {
                var A = t(this.__wrapped__), P = A.__actions__ = $t(this.__actions__);
                return P.push({ func: w, args: arguments, thisArg: t }), A.__chain__ = x, A;
              }
              return w.apply(t, Dn([this.value()], arguments));
            });
          }), t;
        }
        function Ud() {
          return It._ === this && (It._ = fc), this;
        }
        function as() {
        }
        function $d(t) {
          return t = Y(t), Q(function(n) {
            return ka(n, t);
          });
        }
        var qd = Ni(gt), Gd = Ni(na), zd = Ni(ui);
        function jo(t) {
          return zi(t) ? li(Mn(t)) : yf(t);
        }
        function Hd(t) {
          return function(n) {
            return t == null ? r : Vn(t, n);
          };
        }
        var Kd = eo(), Zd = eo(!0);
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
          if (t = Y(t), t < 1 || t > _n)
            return [];
          var e = k, i = Et(t, k);
          n = B(n), t -= k;
          for (var a = hi(i, n); ++e < t; )
            n(e);
          return a;
        }
        function Vd(t) {
          return H(t) ? gt(t, Mn) : Xt(t) ? [t] : $t(wo(rt(t)));
        }
        function jd(t) {
          var n = ++lc;
          return rt(t) + n;
        }
        var t0 = wr(function(t, n) {
          return t + n;
        }, 0), n0 = Bi("ceil"), e0 = wr(function(t, n) {
          return t / n;
        }, 1), r0 = Bi("floor");
        function i0(t) {
          return t && t.length ? hr(t, zt, Si) : r;
        }
        function s0(t, n) {
          return t && t.length ? hr(t, B(n, 2), Si) : r;
        }
        function a0(t) {
          return ia(t, zt);
        }
        function o0(t, n) {
          return ia(t, B(n, 2));
        }
        function u0(t) {
          return t && t.length ? hr(t, zt, Ii) : r;
        }
        function l0(t, n) {
          return t && t.length ? hr(t, B(n, 2), Ii) : r;
        }
        var c0 = wr(function(t, n) {
          return t * n;
        }, 1), f0 = Bi("round"), h0 = wr(function(t, n) {
          return t - n;
        }, 0);
        function p0(t) {
          return t && t.length ? fi(t, zt) : 0;
        }
        function g0(t, n) {
          return t && t.length ? fi(t, B(n, 2)) : 0;
        }
        return u.after = Dp, u.ary = Ro, u.assign = Sg, u.assignIn = zo, u.assignInWith = Fr, u.assignWith = bg, u.at = xg, u.before = To, u.bind = Xi, u.bindAll = Rd, u.bindKey = Fo, u.castArray = Jp, u.chain = Io, u.chunk = rh, u.compact = ih, u.concat = sh, u.cond = Td, u.conforms = Fd, u.constant = rs, u.countBy = pp, u.create = Ag, u.curry = Lo, u.curryRight = ko, u.debounce = Oo, u.defaults = Ig, u.defaultsDeep = Pg, u.defer = Np, u.delay = Bp, u.difference = ah, u.differenceBy = oh, u.differenceWith = uh, u.drop = lh, u.dropRight = ch, u.dropRightWhile = fh, u.dropWhile = hh, u.fill = ph, u.filter = dp, u.flatMap = mp, u.flatMapDeep = wp, u.flatMapDepth = yp, u.flatten = So, u.flattenDeep = gh, u.flattenDepth = dh, u.flip = Wp, u.flow = kd, u.flowRight = Od, u.fromPairs = _h, u.functions = Og, u.functionsIn = Dg, u.groupBy = Mp, u.initial = mh, u.intersection = wh, u.intersectionBy = yh, u.intersectionWith = Mh, u.invert = Bg, u.invertBy = Wg, u.invokeMap = Sp, u.iteratee = is, u.keyBy = bp, u.keys = At, u.keysIn = Gt, u.map = Ar, u.mapKeys = $g, u.mapValues = qg, u.matches = Dd, u.matchesProperty = Nd, u.memoize = Pr, u.merge = Gg, u.mergeWith = Ho, u.method = Bd, u.methodOf = Wd, u.mixin = ss, u.negate = Er, u.nthArg = $d, u.omit = zg, u.omitBy = Hg, u.once = Up, u.orderBy = xp, u.over = qd, u.overArgs = $p, u.overEvery = Gd, u.overSome = zd, u.partial = Qi, u.partialRight = Do, u.partition = Ap, u.pick = Kg, u.pickBy = Ko, u.property = jo, u.propertyOf = Hd, u.pull = xh, u.pullAll = xo, u.pullAllBy = Ah, u.pullAllWith = Ih, u.pullAt = Ph, u.range = Kd, u.rangeRight = Zd, u.rearg = qp, u.reject = Ep, u.remove = Eh, u.rest = Gp, u.reverse = Ji, u.sampleSize = Tp, u.set = Jg, u.setWith = Yg, u.shuffle = Fp, u.slice = Rh, u.sortBy = Op, u.sortedUniq = Nh, u.sortedUniqBy = Bh, u.split = md, u.spread = zp, u.tail = Wh, u.take = Uh, u.takeRight = $h, u.takeRightWhile = qh, u.takeWhile = Gh, u.tap = ip, u.throttle = Hp, u.thru = xr, u.toArray = $o, u.toPairs = Zo, u.toPairsIn = Jo, u.toPath = Vd, u.toPlainObject = Go, u.transform = Xg, u.unary = Kp, u.union = zh, u.unionBy = Hh, u.unionWith = Kh, u.uniq = Zh, u.uniqBy = Jh, u.uniqWith = Yh, u.unset = Qg, u.unzip = Yi, u.unzipWith = Ao, u.update = Vg, u.updateWith = jg, u.values = _e, u.valuesIn = td, u.without = Xh, u.words = Qo, u.wrap = Zp, u.xor = Qh, u.xorBy = Vh, u.xorWith = jh, u.zip = tp, u.zipObject = np, u.zipObjectDeep = ep, u.zipWith = rp, u.entries = Zo, u.entriesIn = Jo, u.extend = zo, u.extendWith = Fr, ss(u, u), u.add = t0, u.attempt = Vo, u.camelCase = id, u.capitalize = Yo, u.ceil = n0, u.clamp = nd, u.clone = Yp, u.cloneDeep = Qp, u.cloneDeepWith = Vp, u.cloneWith = Xp, u.conformsTo = jp, u.deburr = Xo, u.defaultTo = Ld, u.divide = e0, u.endsWith = sd, u.eq = gn, u.escape = ad, u.escapeRegExp = od, u.every = gp, u.find = _p, u.findIndex = Mo, u.findKey = Eg, u.findLast = vp, u.findLastIndex = Co, u.findLastKey = Rg, u.floor = r0, u.forEach = Po, u.forEachRight = Eo, u.forIn = Tg, u.forInRight = Fg, u.forOwn = Lg, u.forOwnRight = kg, u.get = ts, u.gt = tg, u.gte = ng, u.has = Ng, u.hasIn = ns, u.head = bo, u.identity = zt, u.includes = Cp, u.indexOf = vh, u.inRange = ed, u.invoke = Ug, u.isArguments = ne, u.isArray = H, u.isArrayBuffer = eg, u.isArrayLike = qt, u.isArrayLikeObject = wt, u.isBoolean = rg, u.isBuffer = Gn, u.isDate = ig, u.isElement = sg, u.isEmpty = ag, u.isEqual = og, u.isEqualWith = ug, u.isError = Vi, u.isFinite = lg, u.isFunction = Tn, u.isInteger = No, u.isLength = Rr, u.isMap = Bo, u.isMatch = cg, u.isMatchWith = fg, u.isNaN = hg, u.isNative = pg, u.isNil = dg, u.isNull = gg, u.isNumber = Wo, u.isObject = dt, u.isObjectLike = mt, u.isPlainObject = Ne, u.isRegExp = ji, u.isSafeInteger = _g, u.isSet = Uo, u.isString = Tr, u.isSymbol = Xt, u.isTypedArray = de, u.isUndefined = vg, u.isWeakMap = mg, u.isWeakSet = wg, u.join = Ch, u.kebabCase = ud, u.last = un, u.lastIndexOf = Sh, u.lowerCase = ld, u.lowerFirst = cd, u.lt = yg, u.lte = Mg, u.max = i0, u.maxBy = s0, u.mean = a0, u.meanBy = o0, u.min = u0, u.minBy = l0, u.stubArray = os, u.stubFalse = us, u.stubObject = Jd, u.stubString = Yd, u.stubTrue = Xd, u.multiply = c0, u.nth = bh, u.noConflict = Ud, u.noop = as, u.now = Ir, u.pad = fd, u.padEnd = hd, u.padStart = pd, u.parseInt = gd, u.random = rd, u.reduce = Ip, u.reduceRight = Pp, u.repeat = dd, u.replace = _d, u.result = Zg, u.round = f0, u.runInContext = _, u.sample = Rp, u.size = Lp, u.snakeCase = vd, u.some = kp, u.sortedIndex = Th, u.sortedIndexBy = Fh, u.sortedIndexOf = Lh, u.sortedLastIndex = kh, u.sortedLastIndexBy = Oh, u.sortedLastIndexOf = Dh, u.startCase = wd, u.startsWith = yd, u.subtract = h0, u.sum = p0, u.sumBy = g0, u.template = Md, u.times = Qd, u.toFinite = Fn, u.toInteger = Y, u.toLength = qo, u.toLower = Cd, u.toNumber = ln, u.toSafeInteger = Cg, u.toString = rt, u.toUpper = Sd, u.trim = bd, u.trimEnd = xd, u.trimStart = Ad, u.truncate = Id, u.unescape = Pd, u.uniqueId = jd, u.upperCase = Ed, u.upperFirst = es, u.each = Po, u.eachRight = Eo, u.first = bo, ss(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = o, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), en(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : xt(Y(e), 0);
            var i = this.__filtered__ && !n ? new j(this) : this.clone();
            return i.__filtered__ ? i.__takeCount__ = Et(e, i.__takeCount__) : i.__views__.push({
              size: Et(e, k),
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
              iteratee: B(a, 3),
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
        }, j.prototype.invokeMap = Q(function(t, n) {
          return typeof t == "function" ? new j(this) : this.map(function(e) {
            return Te(e, t, n);
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
          return this.take(k);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), a = u[i ? "take" + (n == "last" ? "Right" : "") : n], l = i || /^find/.test(n);
          a && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = i ? [1] : arguments, w = h instanceof j, x = g[0], A = w || H(h), P = function(V) {
              var tt = a.apply(u, Dn([V], g));
              return i && L ? tt[0] : tt;
            };
            A && e && typeof x == "function" && x.length != 1 && (w = A = !1);
            var L = this.__chain__, D = !!this.__actions__.length, W = l && !L, X = w && !D;
            if (!l && A) {
              h = X ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: xr, args: [P], thisArg: r }), new sn(U, L);
            }
            return W && X ? t.apply(this, g) : (U = this.thru(P), W ? i ? U.value()[0] : U.value() : U);
          });
        }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = Qe[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var a = arguments;
            if (i && !this.__chain__) {
              var l = this.value();
              return n.apply(H(l) ? l : [], a);
            }
            return this[e](function(h) {
              return n.apply(H(h) ? h : [], a);
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
        }], j.prototype.clone = Ic, j.prototype.reverse = Pc, j.prototype.value = Ec, u.prototype.at = sp, u.prototype.chain = ap, u.prototype.commit = op, u.prototype.next = up, u.prototype.plant = cp, u.prototype.reverse = fp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = hp, u.prototype.first = u.prototype.head, be && (u.prototype[be] = lp), u;
      }, oe = ac();
      Zn ? ((Zn.exports = oe)._ = oe, ii._ = oe) : It._ = oe;
    }).call(v0);
  }(We, We.exports)), We.exports;
}
var du = m0();
const K = /* @__PURE__ */ gu(du);
var kr = { exports: {} }, ls, eu;
function w0() {
  if (eu) return ls;
  eu = 1;
  var f = 1e3, s = f * 60, r = s * 60, o = r * 24, c = o * 7, p = o * 365.25;
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
            return R * c;
          case "days":
          case "day":
          case "d":
            return R * o;
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
    return m >= o ? Math.round(I / o) + "d" : m >= r ? Math.round(I / r) + "h" : m >= s ? Math.round(I / s) + "m" : m >= f ? Math.round(I / f) + "s" : I + "ms";
  }
  function y(I) {
    var m = Math.abs(I);
    return m >= o ? M(I, m, o, "day") : m >= r ? M(I, m, r, "hour") : m >= s ? M(I, m, s, "minute") : m >= f ? M(I, m, f, "second") : I + " ms";
  }
  function M(I, m, R, F) {
    var T = m >= R * 1.5;
    return Math.round(I / R) + " " + F + (T ? "s" : "");
  }
  return ls;
}
var cs, ru;
function y0() {
  if (ru) return cs;
  ru = 1;
  function f(s) {
    o.debug = o, o.default = o, o.coerce = M, o.disable = v, o.enable = p, o.enabled = y, o.humanize = w0(), o.destroy = I, Object.keys(s).forEach((m) => {
      o[m] = s[m];
    }), o.names = [], o.skips = [], o.formatters = {};
    function r(m) {
      let R = 0;
      for (let F = 0; F < m.length; F++)
        R = (R << 5) - R + m.charCodeAt(F), R |= 0;
      return o.colors[Math.abs(R) % o.colors.length];
    }
    o.selectColor = r;
    function o(m) {
      let R, F = null, T, E;
      function N(...q) {
        if (!N.enabled)
          return;
        const Z = N, J = Number(/* @__PURE__ */ new Date()), it = J - (R || J);
        Z.diff = it, Z.prev = R, Z.curr = J, R = J, q[0] = o.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
        let _t = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (St, jt) => {
          if (St === "%%")
            return "%";
          _t++;
          const Ht = o.formatters[jt];
          if (typeof Ht == "function") {
            const Tt = q[_t];
            St = Ht.call(Z, Tt), q.splice(_t, 1), _t--;
          }
          return St;
        }), o.formatArgs.call(Z, q), (Z.log || o.log).apply(Z, q);
      }
      return N.namespace = m, N.useColors = o.useColors(), N.color = o.selectColor(m), N.extend = c, N.destroy = o.destroy, Object.defineProperty(N, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => F !== null ? F : (T !== o.namespaces && (T = o.namespaces, E = o.enabled(m)), E),
        set: (q) => {
          F = q;
        }
      }), typeof o.init == "function" && o.init(N), N;
    }
    function c(m, R) {
      const F = o(this.namespace + (typeof R > "u" ? ":" : R) + m);
      return F.log = this.log, F;
    }
    function p(m) {
      o.save(m), o.namespaces = m, o.names = [], o.skips = [];
      const R = (typeof m == "string" ? m : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const F of R)
        F[0] === "-" ? o.skips.push(F.slice(1)) : o.names.push(F);
    }
    function d(m, R) {
      let F = 0, T = 0, E = -1, N = 0;
      for (; F < m.length; )
        if (T < R.length && (R[T] === m[F] || R[T] === "*"))
          R[T] === "*" ? (E = T, N = F, T++) : (F++, T++);
        else if (E !== -1)
          T = E + 1, N++, F = N;
        else
          return !1;
      for (; T < R.length && R[T] === "*"; )
        T++;
      return T === R.length;
    }
    function v() {
      const m = [
        ...o.names,
        ...o.skips.map((R) => "-" + R)
      ].join(",");
      return o.enable(""), m;
    }
    function y(m) {
      for (const R of o.skips)
        if (d(m, R))
          return !1;
      for (const R of o.names)
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
    return o.enable(o.load()), o;
  }
  return cs = f, cs;
}
var iu;
function M0() {
  return iu || (iu = 1, function(f, s) {
    s.formatArgs = o, s.save = c, s.load = p, s.useColors = r, s.storage = d(), s.destroy = /* @__PURE__ */ (() => {
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
    function c(y) {
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
  }(kr, kr.exports)), kr.exports;
}
var C0 = M0();
const S0 = /* @__PURE__ */ gu(C0), fs = {};
function Kn(f) {
  if (!fs[f]) {
    const s = S0("ultraPacer:core");
    s(`loading debug for namespace "${f}"`), fs[f] = s.extend(f);
  }
  return fs[f];
}
function Nt(f, s = 0) {
  return Math.round(f * 10 ** s) / 10 ** s;
}
function ve(f, s, r, o, c) {
  return r + (c - f) / (s - f) * (o - r);
}
function _u(f, s, r) {
  let o = 0, c = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < f[c])
      p.push(s[c]);
    else {
      for (; c < f.length - 1 && f[c + 1] <= r[o]; )
        c++;
      c === f.length - 1 || r[o] === f[c] ? p.push(s[c]) : p.push(ve(f[c], f[c + 1], s[c], s[c + 1], r[o]));
    }
  return p;
}
function vu(f) {
  let s, r, o, c, p = 0, d = 0, v = 0, y = 0, M = 0;
  for (s = 0; s < f.length; s++)
    r = f[s][0], o = f[s][1], c = f[s][2], M += c, p += c * r, v += c * (r * r), d += c * o, y += c * (r * o);
  const I = (d * v - p * y) / (M * v - p * p);
  return [(M * y - p * d) / (M * v - p * p), I];
}
function mu(f, s, r, o) {
  let c = 0, p = 0;
  const d = [];
  return r.forEach((v) => {
    for (; f[c] < v - o; )
      c++;
    for (c > 0 && f[c] >= v && c--; p < f.length - 1 && f[p + 1] <= v + o; )
      p++;
    p < f.length - 1 && f[p] <= v && p++;
    const y = Math.max(o, Math.abs(v - f[c]) + 1e-3, Math.abs(v - f[p]) + 1e-3), M = [];
    let I = 0;
    for (let m = c; m <= p; m++)
      I = (1 - (Math.abs(v - f[m]) / y) ** 3) ** 3, M.push([f[m], s[m], I]);
    d.push(vu(M));
  }), d;
}
function Ms(f, s, r) {
  return Nt(f, r) < Nt(s, r);
}
function b0(f, s, r) {
  return Nt(f, r) > Nt(s, r);
}
function me(f, s, r) {
  return Nt(f, r) <= Nt(s, r);
}
function Wr(f, s, r) {
  return Nt(f, r) >= Nt(s, r);
}
function Ue(f, s, r) {
  return Nt(f, r) === Nt(s, r);
}
const V0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: ve,
  interpArray: _u,
  linearRegression: vu,
  req: Ue,
  rgt: b0,
  rgte: Wr,
  rlt: Ms,
  rlte: me,
  round: Nt,
  wlslr: mu
}, Symbol.toStringTag, { value: "Module" }));
class Cn {
  constructor(s) {
    b(this, "_altitude", 1);
    b(this, "_grade", 1);
    b(this, "_terrain", 1);
    b(this, "_heat", 1);
    b(this, "_dark", 1);
    b(this, "_fatigue", 1);
    b(this, "_strategy", 1);
    b(this, "_combined");
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
class su {
  constructor(s, r, o) {
    b(this, "factors", new Cn());
    b(this, "point");
    b(this, "course");
    b(this, "loop");
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
function wu(f, s) {
  (s === null || typeof s > "u") && (s = x0);
  let r = 0;
  return Array.isArray(f) ? r = (f[0] + f[1]) / 2 : r = f, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const au = {
  baseline: 0,
  terrainScale: 1
};
function A0(f, s) {
  function r(o) {
    return o < f.noon ? o + 86400 : o;
  }
  return s >= f.sunrise && s <= f.sunset ? 0 : !isNaN(f.dawn) && !isNaN(f.dusk) && (s <= f.dawn || s >= f.dusk) ? 1 : r(s) >= r(f.nadir) ? ve(
    r(isNaN(f.dawn) ? f.nadir : f.dawn),
    r(f.sunrise),
    1,
    0,
    r(s)
  ) : ve(
    r(f.sunset),
    r(isNaN(f.dusk) ? f.nadir : f.dusk),
    0,
    1,
    r(s)
  );
}
function yu(f, s, r, o = au) {
  if (s === 1 || f >= r.sunrise && f <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = au);
  const c = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (s - 1) + o.baseline) * c, d = A0(r, f);
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
function Mu(f, s) {
  return (s === null || typeof s > "u") && (s = I0), f < s.lower.lim ? s.lower.m * f + s.lower.b : f > s.upper.lim ? s.upper.m * f + s.upper.b : s.a * f ** 2 + s.b * f + 1;
}
function Cu(f, s) {
  if (!s) return 1;
  const r = f.tod;
  let o = 1;
  if (r > s.start && r < s.stop) {
    const c = (r - s.start) / (s.stop - s.start) * Math.PI;
    o += (s.max - s.baseline) * Math.sin(c) / 100;
  }
  return o += s.baseline / 100, o;
}
function Su(f, s) {
  const r = K.findLast(s.terrain, (o) => me(o.percents[0] * s.dist, f.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const bu = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function Cs(f) {
  const s = new Cn().init(0);
  return f.forEach(({ factors: r, dist: o }) => {
    s.applyEach((c, p) => c + o * p, r);
  }), s.scaleEach(1 / du.sumBy(f, "dist")), s;
}
function P0(f, s) {
  let r = 0, o = 0;
  return f.forEach((c, p) => {
    const d = p === f.length - 1 ? s : f[p + 1].onset, v = c.type === "linear" ? c.value / 2 : c.value;
    o += (r + v) * (d - c.onset), r += c.value;
  }), o / s;
}
function E0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function R0(f, s, r) {
  let o = -P0(s, r);
  return s.forEach((c, p) => {
    if (f >= c.onset) {
      if (c.type === "step")
        o += c.value;
      else if (c.type === "linear") {
        const d = p === s.length - 1 ? r : s[p + 1].onset;
        f > d ? o += c.value : o += c.value * (f - c.onset) / (d - c.onset);
      }
    }
  }), o;
}
class xu {
  constructor(s, r) {
    b(this, "plan");
    b(this, "values");
    this.plan = s, this.values = r ? K.cloneDeep(r) : [{ onset: 0, value: E0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + R0(s, this.values, this.plan.course.dist) / 100;
  }
  addValue(s) {
    const r = this.values.findIndex((o) => o.onset >= s.onset);
    r >= 0 ? this.values.splice(r, 0, s) : this.values.push(s);
  }
}
function ms(f, s) {
  return s === void 0 ? f : (f - 1) * s + 1;
}
function Ss(f, s) {
  f.factors || (f.factors = new Cn()), Object.assign(f.factors, {
    grade: Mu(f.grade),
    altitude: wu(f.alt),
    terrain: Su(f, s)
  });
}
function Br(f, s) {
  var r, o;
  if (f.factors || (f.factors = new Cn()), Ss(f, s.course), s) {
    if (f.factors === void 0) throw new Error("no factors");
    f.factors.strategy = s.strategy.at(f.loc), Object.assign(f.factors, {
      heat: s.heatModel ? Cu(f, s.heatModel) : 1,
      dark: s.event.sun ? yu(f.tod, f.factors.terrain, s.event.sun) : 1
    });
  }
  f.factors.altitude = ms(f.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), f.factors.dark = ms(f.factors.dark, (o = s.scales) == null ? void 0 : o.dark);
}
const j0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: xu,
  applyScale: ms,
  generateCourseFactors: Ss,
  generatePlanFactors: Br,
  getAltitudeFactor: wu,
  getDarkFactor: yu,
  getGradeFactor: Mu,
  getHeatFactor: Cu,
  getTerrainFactor: Su,
  list: bu,
  rollup: Cs
}, Symbol.toStringTag, { value: "Module" }));
function Au(f) {
  switch (f) {
    case "kilometers":
      return 1;
    case "miles":
      return 0.621371;
    default:
      throw new Error("Invalid distance unit");
  }
}
function Or(f) {
  return typeof f == "number" && !isNaN(f);
}
function T0(f, s, r) {
  const o = f.filter(
    (p, d) => d >= f.findIndex((v) => v === s) && d <= f.findIndex((v) => v === r)
  ), c = o.map((p, d) => ({
    factors: p.factors,
    dist: d === o.length - 1 ? 0 : o[d + 1].loc - o[d].loc
  }));
  return c.pop(), Cs(c);
}
class Iu {
  constructor(s) {
    b(this, "point1");
    b(this, "point2");
    /**
     * elevation gain (m) over segment
     */
    b(this, "gain");
    /**
     * elevation loss (m) over segment
     */
    b(this, "loss");
    /**
     * average grade (%) over segment
     */
    b(this, "grade");
    /**
     * waypoint at end of segment
     */
    b(this, "waypoint");
    b(this, "_name");
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
class F0 extends Iu {
  constructor(r, o) {
    super(o);
    b(this, "_course");
    b(this, "point1");
    b(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class L0 extends Iu {
  constructor(r, o) {
    super(o);
    b(this, "_plan");
    b(this, "point1");
    b(this, "point2");
    b(this, "_factors");
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
    return this._factors || (this._factors = T0(this._plan.points, this.point1, this.point2));
  }
}
const hs = Kn("CourseSplits");
class k0 {
  constructor(s) {
    b(this, "_segments");
    b(this, "_miles");
    b(this, "_kilometers");
    b(this, "course");
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
    const s = this.course.waypoints.filter((o) => o.tier < 3).sort((o, c) => o.loc - c.loc), r = this.calcSegments(this.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, c) => {
      o.waypoint = s[c + 1];
    }), r;
  }
  createSplits(s) {
    hs(`createSplits:${s}`);
    const r = Au(s), o = K.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const c = this.calcSegments(this.course.locationsToBreaks(o));
    if (!c.length) throw new Error("createSplits result is empty");
    return c;
  }
  calcSegments(s) {
    var R;
    hs.extend("calcSegments")("exec");
    const o = this.course, c = o.points, p = [], d = [];
    let v, y, M = o.points[0], I;
    for (v = 0, y = s.length; v < y; v++) {
      const F = s[v];
      I && Ue((R = s[v - 1]) == null ? void 0 : R.end, F.start, 4) ? M = I : M = o.getPoint(F.start), I = o.getPoint(F.end);
      const T = F.end - F.start, E = new F0(this.course, {
        gain: 0,
        loss: 0,
        grade: T > 0 ? (I.alt - M.alt) / T / 10 * (I.alt - M.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: M,
        point2: I
      }), N = new Cn().init(0);
      p.push(E), d.push(N);
    }
    const m = (F, T, E, N) => {
      const q = E.alt - T.alt;
      F[q > 0 ? "gain" : "loss"] += q * (q > 0 ? o.gainScale : o.lossScale), Ss(T, o);
      const Z = E.loc - T.loc;
      N.applyEach((J, it) => J + it * Z, T.factors);
    };
    v = 1;
    for (let F = 0; F < p.length; F++) {
      const T = p[F], E = d[F];
      for (; me(c[v].loc, T.point1.loc, 4); ) v++;
      let N = T.point1;
      for (; v < c.length && me(c[v].loc, T.point2.loc, 4); ) {
        const q = c[v];
        m(T, N, q, E), N = q, v++;
      }
      m(T, N, T.point2, E);
    }
    return p;
  }
}
var ps = {}, ou;
function O0() {
  return ou || (ou = 1, function(f) {
    f.parseDMS = function(r) {
      if (typeof c == "object") throw new TypeError("geo.parseDMS - dmsStr is [DOM?] object");
      if (typeof r == "number" && isFinite(r)) return Number(r);
      var o = String(r).trim().replace(/^-/, "").replace(/[NSEW]$/i, "").split(/[^0-9.,]+/);
      if (o[o.length - 1] == "" && o.splice(o.length - 1), o == "") return NaN;
      switch (o.length) {
        case 3:
          var c = o[0] / 1 + o[1] / 60 + o[2] / 3600;
          break;
        case 2:
          var c = o[0] / 1 + o[1] / 60;
          break;
        case 1:
          var c = o[0];
          break;
        default:
          return NaN;
      }
      return /^-|[WS]$/i.test(r.trim()) && (c = -c), Number(c);
    }, f.toDMS = function(r, o, c) {
      if (typeof r == "object") throw new TypeError("geo.toDMS - deg is [DOM?] object");
      if (isNaN(r)) return null;
      if (typeof o > "u" && (o = "dms"), typeof c > "u")
        switch (o) {
          case "d":
            c = 4;
            break;
          case "dm":
            c = 2;
            break;
          case "dms":
            c = 0;
            break;
          default:
            o = "dms", c = 0;
        }
      switch (r = Math.abs(r), o) {
        case "d":
          v = r.toFixed(c), v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), dms = v + "°";
          break;
        case "dm":
          var p = (r * 60).toFixed(c), v = Math.floor(p / 60), y = (p % 60).toFixed(c);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), y < 10 && (y = "0" + y), dms = v + "°" + y + "′";
          break;
        case "dms":
          var d = (r * 3600).toFixed(c), v = Math.floor(d / 3600), y = Math.floor(d / 60) % 60, M = (d % 60).toFixed(c);
          v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = v + "°" + y + "′" + M + "″";
          break;
      }
      return dms;
    }, f.toLat = function(r, o, c) {
      var p = f.toDMS(r, o, c);
      return p == null ? "." : p.slice(1) + (r < 0 ? "S" : "N");
    }, f.toLon = function(r, o, c) {
      var p = f.toDMS(r, o, c);
      return p == null ? "." : p + (r < 0 ? "W" : "E");
    }, f.toBrng = function(r, o, c) {
      r = (Number(r) + 360) % 360;
      var p = f.toDMS(r, o, c);
      return p == null ? "." : p.replace("360", "0");
    };
    var s = 6371;
    f.latlon = function(r, o) {
      this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN;
    }, f.latlon.prototype.distanceTo = function(r, o) {
      typeof o > "u" && (o = 4);
      var c = this.distanceRadTo(r), p = s * c;
      return p.toPrecisionFixed(o);
    }, f.latlon.prototype.distanceRadTo = function(r) {
      var o = this.lat.toRad(), c = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), v = p - o, y = d - c, M = Math.sin(v / 2) * Math.sin(v / 2) + Math.cos(o) * Math.cos(p) * Math.sin(y / 2) * Math.sin(y / 2), I = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
      return I;
    }, f.latlon.prototype.bearingTo = function(r) {
      var o = this.bearingRadTo(r);
      return (o.toDeg() + 360) % 360;
    }, f.latlon.prototype.bearingRadTo = function(r) {
      var o = this.lat.toRad(), c = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(o) * Math.sin(c) - Math.sin(o) * Math.cos(c) * Math.cos(p), v = Math.cos(c) * Math.sin(p), y = Math.atan2(v, d);
      return y;
    }, f.latlon.prototype.finalBearingTo = function(r) {
      var o = r.lat.toRad(), c = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(c), v = Math.cos(o) * Math.sin(c) - Math.sin(o) * Math.cos(c) * Math.cos(p), y = Math.atan2(d, v);
      return (y.toDeg() + 180) % 360;
    }, f.latlon.prototype.midpointTo = function(r) {
      var o = this.lat.toRad(), c = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(c) * Math.cos(p), v = Math.cos(c) * Math.sin(p), y = this.lng.toRad(), M = Math.atan2(Math.sin(o) + Math.sin(c), Math.sqrt((Math.cos(o) + d) * (Math.cos(o) + d) + v * v)), I = y + Math.atan2(v, Math.cos(o) + d);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(M.toDeg(), I.toDeg());
    }, f.midpoint = function(r) {
      var o = 0, c = 0, p = 0;
      for (var d in r) {
        var v = r[d], y = v.lat * Math.PI / 180, M = v.lng * Math.PI / 180, I = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), R = Math.sin(y);
        o += I, c += m, p += R;
      }
      o = o / r.length, c = c / r.length, p = p / r.length;
      var F = Math.atan2(c, o), T = Math.sqrt(o * o + c * c), E = Math.atan2(p, T);
      return new f.latlon(E * 180 / Math.PI, F * 180 / Math.PI);
    }, f.latlon.prototype.interpolate = function(r, o) {
      var c = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), v = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var y = Math.sin(d), M = Math.cos(d), I = [], m = 0; m < o; m++) {
        var R = 1 / (o - 1) * m, F = c * R, T = Math.sin(F), E = Math.cos(F), N = Math.asin(y * E + M * T * Math.cos(p)), q = v + Math.atan2(Math.sin(p) * T * M, E - y * Math.sin(N)), Z = N.toDeg(), J = q.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); J > 180; ) J -= 360;
        for (; J <= -180; ) J += 360;
        I.push(new f.latlon(Z, J));
      }
      return I;
    }, f.latlon.prototype.destinationPoint = function(r, o) {
      o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / s, r = r.toRad();
      var c = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(c) * Math.cos(o) + Math.cos(c) * Math.sin(o) * Math.cos(r)), v = p + Math.atan2(
        Math.sin(r) * Math.sin(o) * Math.cos(c),
        Math.cos(o) - Math.sin(c) * Math.sin(d)
      );
      return v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(d.toDeg(), v.toDeg());
    }, f.latlon.intersection = function(r, o, c, p) {
      o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
      var d = r.lat.toRad(), v = r.lng.toRad(), y = c.lat.toRad(), M = c.lng.toRad(), I = o.toRad(), m = p.toRad(), R = y - d, F = M - v, T = 2 * Math.asin(Math.sqrt(Math.sin(R / 2) * Math.sin(R / 2) + Math.cos(d) * Math.cos(y) * Math.sin(F / 2) * Math.sin(F / 2)));
      if (T == 0) return null;
      var E = Math.acos((Math.sin(y) - Math.sin(d) * Math.cos(T)) / (Math.sin(T) * Math.cos(d)));
      isNaN(E) && (E = 0);
      var N = Math.acos((Math.sin(d) - Math.sin(y) * Math.cos(T)) / (Math.sin(T) * Math.cos(y)));
      if (Math.sin(M - v) > 0)
        var q = E, Z = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - E, Z = N;
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
      var o = s, c = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), v = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(c / 2 + Math.PI / 4)), M = isFinite(d / y) ? d / y : Math.cos(c);
      Math.abs(v) > Math.PI && (v = v > 0 ? -(2 * Math.PI - v) : 2 * Math.PI + v);
      var I = Math.sqrt(d * d + M * M * v * v) * o;
      return I.toPrecisionFixed(4);
    }, f.latlon.prototype.rhumbBearingTo = function(r) {
      var o = this.lat.toRad(), c = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(c / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var v = Math.atan2(p, d);
      return (v.toDeg() + 360) % 360;
    }, f.latlon.prototype.rhumbDestinationPoint = function(r, o) {
      var c = s, p = parseFloat(o) / c, d = this.lat.toRad(), v = this.lng.toRad();
      r = r.toRad();
      var y = p * Math.cos(r);
      Math.abs(y) < 1e-10 && (y = 0);
      var M = d + y, I = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(y / I) ? y / I : Math.cos(d), R = p * Math.sin(r) / m;
      Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
      var F = (v + R + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new f.latlon(M.toDeg(), F.toDeg());
    }, f.latlon.prototype.rhumbMidpointTo = function(r) {
      var o = this.lat.toRad(), c = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
      Math.abs(d - c) > Math.PI && (c += 2 * Math.PI);
      var v = (o + p) / 2, y = Math.tan(Math.PI / 4 + o / 2), M = Math.tan(Math.PI / 4 + p / 2), I = Math.tan(Math.PI / 4 + v / 2), m = ((d - c) * Math.log(I) + c * Math.log(M) - d * Math.log(y)) / Math.log(M / y);
      return isFinite(m) || (m = (c + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(v.toDeg(), m.toDeg());
    }, f.latlon.prototype.lat = function(r, o) {
      return typeof r > "u" ? this.lat : f.toLat(this.lat, r, o);
    }, f.latlon.prototype.lon = function(r, o) {
      return typeof r > "u" ? this.lng : f.toLon(this.lng, r, o);
    }, f.latlon.prototype.toString = function(r, o) {
      return typeof r > "u" && (r = "dms"), f.toLat(this.lat, r, o) + ", " + f.toLon(this.lng, r, o);
    }, typeof Number.prototype.toRad > "u" && (Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }), typeof Number.prototype.toDeg > "u" && (Number.prototype.toDeg = function() {
      return this * 180 / Math.PI;
    }), typeof Number.prototype.toPrecisionFixed > "u" && (Number.prototype.toPrecisionFixed = function(r) {
      var o = this.toPrecision(r);
      return o = o.replace(/(.+)e\+(.+)/, function(c, p, d) {
        p = p.replace(/\./, "");
        for (var v = p.length - 1; d-- > v; ) p = p + "0";
        return p;
      }), o = o.replace(/(.+)e-(.+)/, function(c, p, d) {
        for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
        return "0." + p;
      }), o;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ps)), ps;
}
var D0 = O0();
class Pu {
  constructor(s, r, o) {
    b(this, "alt");
    b(this, "lat");
    b(this, "lon");
    this.lat = s, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new D0.latlon(this.lat, this.lon);
  }
}
class Eu extends Pu {
  constructor(r, o, c, p, d) {
    super(r, o, c);
    b(this, "loc");
    b(this, "grade");
    this.loc = p, this.grade = d;
  }
}
function Ru(f, s, r) {
  if (f.loc > s.loc && r > f.loc || s.loc > f.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(f.loc - r), c = f.latlon.bearingTo(s.latlon), { lat: p, lng: d } = f.latlon.destinationPoint(c, o), v = f.grade, y = ve(f.loc, s.loc, f.alt, s.alt, r);
  return new Eu(p, d, y, r, v);
}
function N0(f, s) {
  return (typeof f == "object" ? String(f.id) : f) === (typeof s == "object" ? String(s.id) : s);
}
function ws(f, s) {
  return !!(f && s && N0(f.site, s.site) && f.loop === s.loop);
}
class uu {
  constructor(s, r = 1) {
    b(this, "_data");
    b(this, "loop");
    b(this, "site");
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
      const r = (s = this.site.cutoffs) == null ? void 0 : s.find((o) => o.loop === this.loop);
      if (r)
        return r.time;
    }
    return null;
  }
  set cutoff(s) {
    var o;
    const r = (o = this.site.cutoffs) == null ? void 0 : o.findIndex((c) => c.loop === this.loop);
    r >= 0 ? s ? this.site.cutoffs[r].time = s : this.site.cutoffs.splice(r, 1) : s && (this.site.cutoffs || (this.site.cutoffs = []), this.site.cutoffs.push({ time: s, loop: this.loop }));
  }
  matchingSegment(s) {
    return s.find((r) => r.waypoint && ws(this, r.waypoint));
  }
}
const Dr = Kn("models:Waypoint");
class gs {
  constructor(s, r) {
    b(this, "_waypoints");
    b(this, "_lat", NaN);
    b(this, "_lon", NaN);
    b(this, "_alt", NaN);
    b(this, "_data");
    b(this, "course");
    b(this, "cutoffs", []);
    b(this, "id");
    b(this, "name");
    b(this, "tier", 1);
    b(this, "type");
    b(this, "description");
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Dr(`constructor: ${this.name}`);
  }
  /**
   * @deprecated - use a version tracker like Plan and Course
   */
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
    return this._waypoints ? this._waypoints : (Dr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new uu(this, this.course.loops)] : this._waypoints = K.range(this.course.loops).map((s) => new uu(this, s + 1)), this._waypoints);
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
    Dr("refreshLLA");
    let s, r, o;
    this.type === "start" ? { lat: s, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = o, this.course.version++;
  }
}
var ds = { exports: {} }, lu;
function B0() {
  return lu || (lu = 1, function(f, s) {
    (function() {
      var r = Math.PI, o = Math.sin, c = Math.cos, p = Math.tan, d = Math.asin, v = Math.atan2, y = Math.acos, M = r / 180, I = 1e3 * 60 * 60 * 24, m = 2440588, R = 2451545;
      function F(k) {
        return k.valueOf() / I - 0.5 + m;
      }
      function T(k) {
        return new Date((k + 0.5 - m) * I);
      }
      function E(k) {
        return F(k) - R;
      }
      var N = M * 23.4397;
      function q(k, $) {
        return v(o(k) * c(N) - p($) * o(N), c(k));
      }
      function Z(k, $) {
        return d(o($) * c(N) + c($) * o(N) * o(k));
      }
      function J(k, $, G) {
        return v(o(k), c(k) * o($) - p(G) * c($));
      }
      function it(k, $, G) {
        return d(o($) * o(G) + c($) * c(G) * c(k));
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
        var $ = M * (1.9148 * o(k) + 0.02 * o(2 * k) + 3e-4 * o(3 * k)), G = M * 102.9372;
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
        var ft = M * -G, nt = M * $, ht = E(k), ot = Ht(ht), lt = _t(ht, ft) - ot.ra;
        return {
          azimuth: J(lt, nt, ot.dec),
          altitude: it(lt, nt, ot.dec)
        };
      };
      var we = Tt.times = [
        [-0.833, "sunrise", "sunset"],
        [-0.3, "sunriseEnd", "sunsetStart"],
        [-6, "dawn", "dusk"],
        [-12, "nauticalDawn", "nauticalDusk"],
        [-18, "nightEnd", "night"],
        [6, "goldenHourEnd", "goldenHour"]
      ];
      Tt.addTime = function(k, $, G) {
        we.push([k, $, G]);
      };
      var $e = 9e-4;
      function Ur(k, $) {
        return Math.round(k - $e - $ / (2 * r));
      }
      function ye(k, $, G) {
        return $e + (k + $) / (2 * r) + G;
      }
      function qe(k, $, G) {
        return R + k + 53e-4 * o($) - 69e-4 * o(2 * G);
      }
      function $r(k, $, G) {
        return y((o(k) - o($) * o(G)) / (c($) * c(G)));
      }
      function Sn(k) {
        return -2.076 * Math.sqrt(k) / 60;
      }
      function _n(k, $, G, ft, nt, ht, ot) {
        var lt = $r(k, G, ft), Mt = ye(lt, $, nt);
        return qe(Mt, ht, ot);
      }
      Tt.getTimes = function(k, $, G, ft) {
        ft = ft || 0;
        var nt = M * -G, ht = M * $, ot = Sn(ft), lt = E(k), Mt = Ur(lt, nt), Kt = ye(0, nt, Mt), Ft = St(Kt), Wt = jt(Ft), vn = Z(Wt, 0), vt = qe(Kt, Ft, Wt), Lt, kn, Ct, Ut, fn, tn, pt = {
          solarNoon: T(vt),
          nadir: T(vt - 0.5)
        };
        for (Lt = 0, kn = we.length; Lt < kn; Lt += 1)
          Ct = we[Lt], Ut = (Ct[0] + ot) * M, fn = _n(Ut, nt, ht, vn, Mt, Ft, Wt), tn = vt - (fn - vt), pt[Ct[1]] = T(tn), pt[Ct[2]] = T(fn);
        return pt;
      };
      function Ge(k) {
        var $ = M * (218.316 + 13.176396 * k), G = M * (134.963 + 13.064993 * k), ft = M * (93.272 + 13.22935 * k), nt = $ + M * 6.289 * o(G), ht = M * 5.128 * o(ft), ot = 385001 - 20905 * c(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Tt.getMoonPosition = function(k, $, G) {
        var ft = M * -G, nt = M * $, ht = E(k), ot = Ge(ht), lt = _t(ht, ft) - ot.ra, Mt = it(lt, nt, ot.dec), Kt = v(o(lt), p(nt) * c(ot.dec) - o(ot.dec) * c(lt));
        return Mt = Mt + Bt(Mt), {
          azimuth: J(lt, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Tt.getMoonIllumination = function(k) {
        var $ = E(k || /* @__PURE__ */ new Date()), G = Ht($), ft = Ge($), nt = 149598e3, ht = y(o(G.dec) * o(ft.dec) + c(G.dec) * c(ft.dec) * c(G.ra - ft.ra)), ot = v(nt * o(ht), ft.dist - nt * c(ht)), lt = v(c(G.dec) * o(G.ra - ft.ra), o(G.dec) * c(ft.dec) - c(G.dec) * o(ft.dec) * c(G.ra - ft.ra));
        return {
          fraction: (1 + c(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
          angle: lt
        };
      };
      function bn(k, $) {
        return new Date(k.valueOf() + $ * I / 24);
      }
      Tt.getMoonTimes = function(k, $, G, ft) {
        var nt = new Date(k);
        ft ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * M, ot = Tt.getMoonPosition(nt, $, G).altitude - ht, lt, Mt, Kt, Ft, Wt, vn, vt, Lt, kn, Ct, Ut, fn, tn, pt = 1; pt <= 24 && (lt = Tt.getMoonPosition(bn(nt, pt), $, G).altitude - ht, Mt = Tt.getMoonPosition(bn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + Mt) / 2 - lt, vn = (Mt - ot) / 2, vt = -vn / (2 * Wt), Lt = (Wt * vt + vn) * vt + lt, kn = vn * vn - 4 * Wt * lt, Ct = 0, kn >= 0 && (tn = Math.sqrt(kn) / (Math.abs(Wt) * 2), Ut = vt - tn, fn = vt + tn, Math.abs(Ut) <= 1 && Ct++, Math.abs(fn) <= 1 && Ct++, Ut < -1 && (Ut = fn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Ft = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? fn : Ut), Ft = pt + (Lt < 0 ? Ut : fn)), !(Kt && Ft)); pt += 2)
          ot = Mt;
        var mn = {};
        return Kt && (mn.rise = bn(nt, Kt)), Ft && (mn.set = bn(nt, Ft)), !Kt && !Ft && (mn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
      }, f.exports = Tt;
    })();
  }(ds)), ds.exports;
}
var cu = B0();
function Hn(f, s) {
  const r = f.toLocaleString([], {
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
    b(this, "nadir", 0);
    b(this, "dawn", 0);
    b(this, "sunrise", 0);
    b(this, "dusk", 0);
    b(this, "sunset", 0);
    b(this, "noon", 0);
    b(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class Tu {
  constructor(s, r, o, c) {
    b(this, "start");
    b(this, "lat");
    b(this, "lon");
    b(this, "timezone");
    b(this, "sun");
    b(this, "startTime");
    this.start = s, this.lat = o, this.lon = c, this.timezone = r;
    const p = cu.getTimes(this.start, this.lat, this.lon), d = cu.getPosition(p.nadir, this.lat, this.lon);
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
const Be = Kn("models:Course"), U0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class t_ {
  constructor(s, r) {
    b(this, "_cache", {});
    /**
     * Course data
     */
    b(this, "_data");
    /**
     * Course name
     */
    b(this, "name");
    /**
     * Track object
     */
    b(this, "track");
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    b(this, "version", 0);
    Be("constructor"), this.track = s, this._data = r, this.version = 1;
  }
  get cache() {
    var s;
    return ((s = this._cache) == null ? void 0 : s.version) === this.version ? this._cache : (this._cache = { version: this.version }, this._cache);
  }
  /**
   * Course cutoffs
   */
  get cutoffs() {
    return "cutoffs" in this.cache ? this.cache.cutoffs : (this.cache.cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new $0(s)), this.cache.cutoffs);
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
    Be("generating points array"), this.cache.points = new Array(this.track.points.length * this.loops);
    for (let s = 0; s < this.loops; s++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + s * this.track.points.length] = new su(
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
    if (this.cache.sites = ((s = this._data.sites) == null ? void 0 : s.map((r) => new gs(this, r))) || [
      new gs(this, {
        id: String(K.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new gs(this, {
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
    return "splits" in this.cache ? this.cache.splits : (this.cache.splits = new k0(this), this.cache.splits);
  }
  /**
   * Course stats
   */
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    Be("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), o = this.terrain.map((d) => d.value / 100 + 1), c = {
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
        max: K.max(o) || 0,
        min: K.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrain.reduce(
      (v, y) => y.value / 100 + 1 === d ? v + (y.percents[1] - y.percents[0]) * this.dist : v,
      0
    );
    return Object.assign(c.terrain, {
      maxDist: p(c.terrain.max),
      minDist: p(c.terrain.min)
    }), this.cache.stats = c, c;
  }
  /**
   * Terrain data
   */
  get terrain() {
    if ("terrain" in this.cache) return this.cache.terrain;
    if (this._data.terrain) {
      const s = [...this._data.terrain];
      s.sort((r, o) => r.percent - o.percent), this.cache.terrain = s.map((r, o) => {
        var v, y;
        const c = K.isNumber(r.value) ? r.value : K.isString(r.value) ? ((v = U0.find((M) => M.type === r.value)) == null ? void 0 : v.value) || 0 : r.value.value, p = typeof r == "string" ? r : K.isObject(r.value) ? r.value.type : void 0;
        return {
          value: c,
          type: p,
          percents: [r.percent, ((y = s[o + 1]) == null ? void 0 : y.percent) || 1]
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
    return this.sites.forEach((o) => {
      s.push(...o.waypoints);
    }), s = s.sort((o, c) => o.loc - c.loc), this.cache.waypoints = s, this.cache.waypoints;
  }
  update(s) {
    Be("update"), Object.assign(this._data, s), this.version++, this.sites.forEach((r) => {
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
    const o = this.points.findIndex((M) => Wr(M.loc, s, 4)), c = this.points[o];
    if (Ue(c.loc, s, 4)) return c;
    Be(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${s}`);
    const p = o - 1, d = this.points[p], v = Ru(d.point, c.point, s % this.loopDist / this.distScale), y = new su(this, v, Math.floor(s / this.loopDist));
    return r && this.points.splice(o, 0, y), y;
  }
  locationsToBreaks(s) {
    const r = s.filter((c) => c > 0 && Ms(c, this.dist, 4));
    return r.unshift(0), r.map((c, p) => ({ start: c, end: r[p + 1] || this.dist }));
  }
}
class $0 {
  constructor(s) {
    b(this, "waypoint");
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
var _s = {}, fu;
function q0() {
  return fu || (fu = 1, function(f) {
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
        return c(d(v), arguments);
      }
      function o(v, y) {
        return r.apply(null, [v].concat(y || []));
      }
      function c(v, y) {
        var M = 1, I = v.length, m, R = "", F, T, E, N, q, Z, J, it;
        for (F = 0; F < I; F++)
          if (typeof v[F] == "string")
            R += v[F];
          else if (typeof v[F] == "object") {
            if (E = v[F], E.keys)
              for (m = y[M], T = 0; T < E.keys.length; T++) {
                if (m == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[T], E.keys[T - 1]));
                m = m[E.keys[T]];
              }
            else E.param_no ? m = y[E.param_no] : m = y[M++];
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
            s.json.test(E.type) ? R += m : (s.number.test(E.type) && (!J || E.sign) ? (it = J ? "+" : "-", m = m.toString().replace(s.sign, "")) : it = "", q = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", Z = E.width - (it + m).length, N = E.width && Z > 0 ? q.repeat(Z) : "", R += E.align ? it + m + N : q === "0" ? it + N + m : N + it + m);
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
      f.sprintf = r, f.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
    })();
  }(_s)), _s;
}
var ys = q0();
const G0 = Kn("PaceChunk");
class z0 {
  constructor() {
    b(this, "iterations", !1);
    b(this, "factor", !1);
    b(this, "target", !1);
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
class hu {
  constructor(s, r, o, c) {
    b(this, "constraints");
    b(this, "points");
    b(this, "plan");
    b(this, "delay");
    b(this, "factor");
    b(this, "factors", new Cn());
    b(this, "status");
    this.constraints = o, this.points = r, this.plan = s, this.delay = c, this.factor = 1;
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
    let r = s[0].elapsed, o = s[0].delay || 0, c = 0, p = 0, d = 0;
    const v = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, I = s.length; M < I; M++) {
      c = s[M].loc - s[M - 1].loc, Br(s[M - 1], this.plan), y.applyEach((R, F) => R + F * c, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * c, p = v * m * c, s[M].time = s[M - 1].time + p, o = s[M - 1].delay || 0, r += p + o, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Br(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = G0.extend(
      ys.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let c = this.factor || 0, p;
    const d = new z0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !K.round(c - this.factor, 10), c = this.factor, d.target = Math.abs(
      (K.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(ys.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const cn = Kn("Pacing");
class H0 {
  constructor(s) {
    b(this, "chunks", []);
    b(this, "plan");
    b(this, "_factor");
    b(this, "_factors");
    /**
     * last time this pacing was updated
     */
    b(this, "version");
    this.plan = s;
  }
  clearCache() {
    cn("clearCache"), delete this._factor, delete this._factors;
  }
  get elapsed() {
    return cn("elapsed:get"), this.plan.points[this.plan.points.length - 1].elapsed;
  }
  get pace() {
    return cn("pace:get"), (this.elapsed - this.plan.delay) / this.plan.course.dist;
  }
  get factor() {
    return this._factor ? this._factor : (cn("factor:update"), this.chunks && (this._factor = K.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return cn("factors:get"), this._factors || (cn("factors:update"), this._factors = Cs(this.chunks)), this._factors;
  }
  /**
   * check if this pacing is current
   */
  get isCurrent() {
    return this.version === this.plan.version;
  }
  get np() {
    return cn("np:get"), this.pace / this.factor;
  }
  get moving() {
    return this.elapsed - this.plan.delay;
  }
  get status() {
    var s, r, o;
    return {
      complete: ((s = this.chunks) == null ? void 0 : s.length) > 0,
      success: ((r = this.chunks) == null ? void 0 : r.filter((c) => {
        var p;
        return !((p = c.status) != null && p.success);
      }).length) === 0,
      chunks: ((o = this.chunks) == null ? void 0 : o.length) || 0
    };
  }
  calculate() {
    var o, c;
    const s = cn.extend("calculate");
    s("exec"), s("clearing cache"), this.clearCache(), s("adding points at each terrain factor break"), (o = this.plan.course.terrain) == null || o.forEach(
      (p) => this.plan.getPoint(p.percents[0] * this.plan.course.dist, !0)
    ), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
      p.point = this.plan.getPoint(p.loc, !0);
    }), this.plan.points.filter((p) => p.delay).forEach((p) => {
      p.delay = 0;
    }), (c = this.plan.delays) == null || c.forEach((p) => {
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
    }), K.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), cn(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`), this.version = this.plan.version;
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
    this.chunks = [new hu(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
      r._chunk = this.chunks[0];
    });
  }
  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    cn("calcChunks"), this.clearCache(), this.chunks.filter((s) => !s.status).forEach((s) => s.calculate());
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
    cn.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = s.points.findIndex((y) => y === r), d = K.round(r.elapsed - r.time), v = new hu(this.plan, s.points.slice(0, p + 1), [0, o], d);
    v.points.filter((y, M) => M < v.points.length - 1).forEach((y) => {
      y._chunk = v;
    }), this.chunks.unshift(v), s.constraints[0] = o, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const o = this.chunks.findIndex((p) => p === s), c = this.chunks.findIndex((p) => p === r);
    if (c - o !== 1) throw new Error("chunks must be sequential");
    cn(ys.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, c, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(c, 1);
  }
}
class pu {
  constructor(s, r) {
    b(this, "factors", new Cn());
    b(this, "_chunk");
    b(this, "_plan");
    b(this, "_point");
    b(this, "elapsed");
    b(this, "time");
    b(this, "tod");
    b(this, "delay");
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
const vs = Kn("PlanSplits");
class K0 {
  constructor(s) {
    b(this, "plan");
    b(this, "_segments");
    b(this, "_segmentsVersion");
    b(this, "_miles");
    b(this, "_milesVersion");
    b(this, "_kilometers");
    b(this, "_kilometersVersion");
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
    vs("createSegments");
    const s = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, c) => o.loc - c.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, c) => {
      o.waypoint = s[c + 1];
    }), r;
  }
  createSplits(s) {
    vs(`createSplits:${s}`);
    const r = Au(s), o = K.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const c = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!c.length) throw new Error("createSplits result is empty");
    return c;
  }
  calcSegments(s) {
    var F;
    vs.extend("calcSegments")("exec"), this.plan.checkPacing();
    const o = this.plan, c = o.course, p = o.points, d = [], v = [];
    let y, M, I = o.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const T = s[y];
      m && Ue((F = s[y - 1]) == null ? void 0 : F.end, T.start, 4) ? I = m : I = o.getPoint(T.start), m = o.getPoint(T.end);
      const E = T.end - T.start, N = new L0(this.plan, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (m.alt - I.alt) / E / 10 * (m.alt - I.alt > 0 ? c.gainScale : c.lossScale) : 0,
        point1: I,
        point2: m
      }), q = new Cn().init(0);
      d.push(N), v.push(q);
    }
    const R = (T, E, N, q) => {
      const Z = N.alt - E.alt;
      T[Z > 0 ? "gain" : "loss"] += Z * (Z > 0 ? c.gainScale : c.lossScale), Br(E, o);
      const J = N.loc - E.loc;
      q.applyEach((it, _t) => it + _t * J, E.factors);
    };
    y = 1;
    for (let T = 0; T < d.length; T++) {
      const E = d[T], N = v[T];
      for (; me(p[y].loc, E.point1.loc, 4); ) y++;
      let q = E.point1;
      for (; y < p.length && me(p[y].loc, E.point2.loc, 4); ) {
        const Z = p[y];
        R(E, q, Z, N), q = Z, y++;
      }
      R(E, q, E.point2, N), o && (E.delay = o.delays.filter((Z) => Wr(E.point1.loc, Z.loc, 4) && Ms(E.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return d;
  }
}
const zn = Kn("models:Plan");
class n_ {
  constructor(s, r) {
    b(this, "_cache", {});
    b(this, "_data");
    b(this, "course");
    b(this, "pacing", new H0(this));
    b(this, "points");
    /**
     * splits
     */
    b(this, "splits", new K0(this));
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    b(this, "_version", 0);
    this.course = s, this._data = r, this.points = this.course.points.map((o) => new pu(this, o)), this._version = 1;
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
    this.cache.cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new J0(this, r, this.getPoint(r.loc, !0))) : [];
    let s = 0;
    for (; this.cache.cutoffs.length - 1 >= s; ) {
      const r = this.cache.cutoffs[s];
      this.cache.cutoffs.find((o, c) => c > s && o.time <= r.time) ? (zn(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this.cache.cutoffs.splice(s, 1)) : s++;
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
    const s = this.course.waypoints.map((o) => {
      var d;
      const c = (d = this._data.delays) == null ? void 0 : d.find((v) => ws(v.waypoint, o)), p = c ? c.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new Z0(o, p);
    }).filter((o) => o.delay > 0).sort((o, c) => o.loc - c.loc);
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
    s.sort((d, v) => d.elapsed - v.elapsed);
    const c = _u(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      s.map((d) => d.elapsed)
    ), p = s.map((d, v) => ({ ...d, loc: c[v] }));
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
      bu.map((p) => {
        const d = this.points.map((v) => v.factors.get(p));
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
    let o = 0, c = 0;
    return this.points.forEach((p, d) => {
      var v, y;
      o = p.loc - (((v = this.points[d - 1]) == null ? void 0 : v.loc) || 0), c = p.elapsed - (((y = this.points[d - 1]) == null ? void 0 : y.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += c, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += c, r.twilight.dist += o) : (r.day.time += c, r.day.dist += o);
    }), this.cache.stats = { factors: s, sun: r }, this.cache.stats;
  }
  get strategy() {
    return "strategy" in this.cache ? this.cache.strategy : this.cache.strategy = new xu(this, this._data.strategy);
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
    const o = this.points.findIndex((y) => Wr(y.loc, s, 4)), c = this.points[o];
    if (Ue(c.loc, s, 4)) return c;
    zn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = o - 1, d = this.points[p], v = new pu(this, this.course.getPoint(s, r));
    if (!isNaN(d.time) && !isNaN(c.time)) {
      const y = c.elapsed - c.time - (d.elapsed - d.time);
      v.time = ve(d.loc, c.loc, d.time + y, c.time, c.loc), v.elapsed = c.elapsed - (c.time - v.time), this.event.start && (v.tod = this.event.elapsedToTimeOfDay(v.elapsed));
    }
    return r && this.points.splice(o, 0, v), v;
  }
  update(s) {
    const o = ["target", "method"].find((c) => c in s && K.isNil(s[c]));
    if (o) throw new Error(`Plan.${o} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class Z0 {
  constructor(s, r) {
    b(this, "delay");
    b(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class J0 {
  constructor(s, r, o) {
    b(this, "plan");
    b(this, "courseCutoff");
    b(this, "point");
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
const Fu = (f, s, r, o) => {
  const c = mu(f, s, r, o), p = [];
  return r.forEach((d, v) => {
    let y = c[v][0] / 10;
    y > 50 ? y = 50 : y < -50 && (y = -50);
    const M = d * c[v][0] + c[v][1];
    p.push({
      grade: y,
      alt: M
    });
  }), p;
};
function Y0(f, s) {
  return Fu(
    s,
    f.map((o) => o.alt),
    s,
    0.05
  ).map((o) => o.grade);
}
const X0 = (f) => {
  let s = 0, r = 0;
  const o = [0];
  for (let c = 1, p = f.length; c < p; c++)
    s = Number(f[c - 1].latlon.distanceTo(f[c].latlon)), r += s, o.push(r);
  return o;
}, Nr = Kn("models:Track");
class bs {
  constructor(s) {
    b(this, "dist");
    b(this, "gain");
    b(this, "loss");
    b(this, "points");
    Nr("Creating new Track object");
    const r = s.map((M) => new Pu(M.lat, M.lon, M.alt)), o = X0(r), c = Y0(r, o);
    this.points = r.map((M, I) => new Eu(M.lat, M.lon, M.alt, o[I], c[I])), Nr(`set-points - ${r.length} points`), Nr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
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
      const o = this.points.findIndex((c) => c.loc >= s);
      r = Ru(this.points[o - 1], this.points[o], s);
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
  getNearestPoint(s, r, o) {
    let p = this.points.findIndex((y) => y === r), d = this.points[p], v = 0;
    for (; o > 0.025; ) {
      const y = o / 5, M = [d];
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
    const c = this.dist, p = Math.floor(c / s) + 1, d = Array(p).fill(0).map((I, m) => Nt(m++ * s, 3));
    d[d.length - 1] < c && d.push(c);
    const v = Fu(
      this.points.map((I) => I.loc),
      this.points.map((I) => I.alt),
      d,
      2 * s
    ), y = d.map((I) => this.getLLA(I)).map((I, m) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(v[m].alt, 2)
    })), M = new bs(y);
    return o(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function e_(f, s, r) {
  const o = f.map((c, p) => ({ lat: f[p], lon: s[p], alt: r[p] }));
  return new bs(o);
}
const r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Hn
}, Symbol.toStringTag, { value: "Module" }));
export {
  t_ as Course,
  $0 as CourseCutoff,
  su as CoursePoint,
  F0 as CourseSegment,
  Tu as Event,
  Cn as Factors,
  H0 as Pacing,
  n_ as Plan,
  pu as PlanPoint,
  L0 as PlanSegment,
  Pu as Point,
  gs as Site,
  xu as Strategy,
  bs as Track,
  Eu as TrackPoint,
  uu as Waypoint,
  P0 as adjustStrategy,
  e_ as createTrackFromArrays,
  j0 as factors,
  Ru as interpolatePoint,
  V0 as math,
  A0 as scaleDark,
  U0 as terrainTypes,
  r_ as util
};
