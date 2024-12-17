var u0 = Object.defineProperty;
var l0 = (c, i, r) => i in c ? u0(c, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[i] = r;
var M = (c, i, r) => l0(c, typeof i != "symbol" ? i + "" : i, r);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function au(c) {
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
(function(c, i) {
  (function() {
    var r, o = "4.17.21", f = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", C = 500, b = "__lodash_placeholder__", y = 1, F = 2, O = 4, R = 1, P = 2, N = 1, K = 2, X = 4, Q = 8, et = 16, St = 32, At = 64, It = 128, Ht = 256, tn = 512, qt = 30, we = "...", $e = 800, Ur = 16, Me = 1, ze = 2, $r = 3, Sn = 1 / 0, vn = 9007199254740991, Ge = 17976931348623157e292, xn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ct = [
      ["ary", It],
      ["bind", N],
      ["bindKey", K],
      ["curry", Q],
      ["curryRight", et],
      ["flip", tn],
      ["partial", St],
      ["partialRight", At],
      ["rearg", Ht]
    ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", lt = "[object Boolean]", wt = "[object Date]", Kt = "[object DOMException]", Rt = "[object Error]", Wt = "[object Function]", yn = "[object GeneratorFunction]", _t = "[object Map]", kt = "[object Number]", Dn = "[object Null]", Mt = "[object Object]", Bt = "[object Promise]", cn = "[object Proxy]", nn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", He = "[object Symbol]", Au = "[object Undefined]", Ce = "[object WeakMap]", Iu = "[object WeakSet]", be = "[object ArrayBuffer]", re = "[object DataView]", zr = "[object Float32Array]", Gr = "[object Float64Array]", Hr = "[object Int8Array]", qr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Xr = "[object Uint32Array]", Tu = /\b__p \+= '';/g, Pu = /\b(__p \+=) '' \+/g, Fu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, bs = /&(?:amp|lt|gt|quot|#39);/g, Ss = /[&<>"']/g, Eu = RegExp(bs.source), Ru = RegExp(Ss.source), ku = /<%-([\s\S]+?)%>/g, Lu = /<%([\s\S]+?)%>/g, xs = /<%=([\s\S]+?)%>/g, Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Du = /^\w*$/, Nu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qr = /[\\^$.*+?()[\]{}|]/g, Wu = RegExp(Qr.source), Vr = /^\s+/, Bu = /\s/, Uu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, $u = /\{\n\/\* \[wrapped with (.+)\] \*/, zu = /,? & /, Gu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Hu = /[()=,{}\[\]\/\s]/, qu = /\\(\\)?/g, Ku = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, As = /\w*$/, Zu = /^[-+]0x[0-9a-f]+$/i, Ju = /^0b[01]+$/i, Yu = /^\[object .+?Constructor\]$/, Xu = /^0o[0-7]+$/i, Qu = /^(?:0|[1-9]\d*)$/, Vu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qe = /($^)/, ju = /['\n\r\u2028\u2029\\]/g, Ke = "\\ud800-\\udfff", tl = "\\u0300-\\u036f", nl = "\\ufe20-\\ufe2f", el = "\\u20d0-\\u20ff", Is = tl + nl + el, Ts = "\\u2700-\\u27bf", Ps = "a-z\\xdf-\\xf6\\xf8-\\xff", rl = "\\xac\\xb1\\xd7\\xf7", il = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", sl = "\\u2000-\\u206f", al = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Es = "\\ufe0e\\ufe0f", Rs = rl + il + sl + al, jr = "['’]", ol = "[" + Ke + "]", ks = "[" + Rs + "]", Ze = "[" + Is + "]", Ls = "\\d+", ul = "[" + Ts + "]", Os = "[" + Ps + "]", Ds = "[^" + Ke + Rs + Ls + Ts + Ps + Fs + "]", ti = "\\ud83c[\\udffb-\\udfff]", ll = "(?:" + Ze + "|" + ti + ")", Ns = "[^" + Ke + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ei = "[\\ud800-\\udbff][\\udc00-\\udfff]", ie = "[" + Fs + "]", Ws = "\\u200d", Bs = "(?:" + Os + "|" + Ds + ")", fl = "(?:" + ie + "|" + Ds + ")", Us = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", $s = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", zs = ll + "?", Gs = "[" + Es + "]?", cl = "(?:" + Ws + "(?:" + [Ns, ni, ei].join("|") + ")" + Gs + zs + ")*", hl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Hs = Gs + zs + cl, gl = "(?:" + [ul, ni, ei].join("|") + ")" + Hs, dl = "(?:" + [Ns + Ze + "?", Ze, ni, ei, ol].join("|") + ")", _l = RegExp(jr, "g"), vl = RegExp(Ze, "g"), ri = RegExp(ti + "(?=" + ti + ")|" + dl + Hs, "g"), yl = RegExp([
      ie + "?" + Os + "+" + Us + "(?=" + [ks, ie, "$"].join("|") + ")",
      fl + "+" + $s + "(?=" + [ks, ie + Bs, "$"].join("|") + ")",
      ie + "?" + Bs + "+" + Us,
      ie + "+" + $s,
      pl,
      hl,
      Ls,
      gl
    ].join("|"), "g"), ml = RegExp("[" + Ws + Ke + Is + Es + "]"), wl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ml = [
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
    ], Cl = -1, ft = {};
    ft[zr] = ft[Gr] = ft[Hr] = ft[qr] = ft[Kr] = ft[Zr] = ft[Jr] = ft[Yr] = ft[Xr] = !0, ft[nt] = ft[ht] = ft[be] = ft[lt] = ft[re] = ft[wt] = ft[Rt] = ft[Wt] = ft[_t] = ft[kt] = ft[Mt] = ft[nn] = ft[pt] = ft[mn] = ft[Ce] = !1;
    var ut = {};
    ut[nt] = ut[ht] = ut[be] = ut[re] = ut[lt] = ut[wt] = ut[zr] = ut[Gr] = ut[Hr] = ut[qr] = ut[Kr] = ut[_t] = ut[kt] = ut[Mt] = ut[nn] = ut[pt] = ut[mn] = ut[He] = ut[Zr] = ut[Jr] = ut[Yr] = ut[Xr] = !0, ut[Rt] = ut[Wt] = ut[Ce] = !1;
    var bl = {
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
    }, xl = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Al = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Il = parseFloat, Tl = parseInt, qs = typeof Be == "object" && Be && Be.Object === Object && Be, Pl = typeof self == "object" && self && self.Object === Object && self, Tt = qs || Pl || Function("return this")(), ii = i && !i.nodeType && i, Jn = ii && !0 && c && !c.nodeType && c, Ks = Jn && Jn.exports === ii, si = Ks && qs.process, en = function() {
      try {
        var _ = Jn && Jn.require && Jn.require("util").types;
        return _ || si && si.binding && si.binding("util");
      } catch {
      }
    }(), Zs = en && en.isArrayBuffer, Js = en && en.isDate, Ys = en && en.isMap, Xs = en && en.isRegExp, Qs = en && en.isSet, Vs = en && en.isTypedArray;
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
    function Fl(_, x, S, L) {
      for (var H = -1, rt = _ == null ? 0 : _.length; ++H < rt; ) {
        var Ct = _[H];
        x(L, Ct, S(Ct), _);
      }
      return L;
    }
    function rn(_, x) {
      for (var S = -1, L = _ == null ? 0 : _.length; ++S < L && x(_[S], S, _) !== !1; )
        ;
      return _;
    }
    function El(_, x) {
      for (var S = _ == null ? 0 : _.length; S-- && x(_[S], S, _) !== !1; )
        ;
      return _;
    }
    function js(_, x) {
      for (var S = -1, L = _ == null ? 0 : _.length; ++S < L; )
        if (!x(_[S], S, _))
          return !1;
      return !0;
    }
    function Nn(_, x) {
      for (var S = -1, L = _ == null ? 0 : _.length, H = 0, rt = []; ++S < L; ) {
        var Ct = _[S];
        x(Ct, S, _) && (rt[H++] = Ct);
      }
      return rt;
    }
    function Je(_, x) {
      var S = _ == null ? 0 : _.length;
      return !!S && se(_, x, 0) > -1;
    }
    function ai(_, x, S) {
      for (var L = -1, H = _ == null ? 0 : _.length; ++L < H; )
        if (S(x, _[L]))
          return !0;
      return !1;
    }
    function gt(_, x) {
      for (var S = -1, L = _ == null ? 0 : _.length, H = Array(L); ++S < L; )
        H[S] = x(_[S], S, _);
      return H;
    }
    function Wn(_, x) {
      for (var S = -1, L = x.length, H = _.length; ++S < L; )
        _[H + S] = x[S];
      return _;
    }
    function oi(_, x, S, L) {
      var H = -1, rt = _ == null ? 0 : _.length;
      for (L && rt && (S = _[++H]); ++H < rt; )
        S = x(S, _[H], H, _);
      return S;
    }
    function Rl(_, x, S, L) {
      var H = _ == null ? 0 : _.length;
      for (L && H && (S = _[--H]); H--; )
        S = x(S, _[H], H, _);
      return S;
    }
    function ui(_, x) {
      for (var S = -1, L = _ == null ? 0 : _.length; ++S < L; )
        if (x(_[S], S, _))
          return !0;
      return !1;
    }
    var kl = li("length");
    function Ll(_) {
      return _.split("");
    }
    function Ol(_) {
      return _.match(Gu) || [];
    }
    function ta(_, x, S) {
      var L;
      return S(_, function(H, rt, Ct) {
        if (x(H, rt, Ct))
          return L = rt, !1;
      }), L;
    }
    function Ye(_, x, S, L) {
      for (var H = _.length, rt = S + (L ? 1 : -1); L ? rt-- : ++rt < H; )
        if (x(_[rt], rt, _))
          return rt;
      return -1;
    }
    function se(_, x, S) {
      return x === x ? Zl(_, x, S) : Ye(_, na, S);
    }
    function Dl(_, x, S, L) {
      for (var H = S - 1, rt = _.length; ++H < rt; )
        if (L(_[H], x))
          return H;
      return -1;
    }
    function na(_) {
      return _ !== _;
    }
    function ea(_, x) {
      var S = _ == null ? 0 : _.length;
      return S ? ci(_, x) / S : xn;
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
    function ra(_, x, S, L, H) {
      return H(_, function(rt, Ct, at) {
        S = L ? (L = !1, rt) : x(S, rt, Ct, at);
      }), S;
    }
    function Nl(_, x) {
      var S = _.length;
      for (_.sort(x); S--; )
        _[S] = _[S].value;
      return _;
    }
    function ci(_, x) {
      for (var S, L = -1, H = _.length; ++L < H; ) {
        var rt = x(_[L]);
        rt !== r && (S = S === r ? rt : S + rt);
      }
      return S;
    }
    function hi(_, x) {
      for (var S = -1, L = Array(_); ++S < _; )
        L[S] = x(S);
      return L;
    }
    function Wl(_, x) {
      return gt(x, function(S) {
        return [S, _[S]];
      });
    }
    function ia(_) {
      return _ && _.slice(0, ua(_) + 1).replace(Vr, "");
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
    function Se(_, x) {
      return _.has(x);
    }
    function sa(_, x) {
      for (var S = -1, L = _.length; ++S < L && se(x, _[S], 0) > -1; )
        ;
      return S;
    }
    function aa(_, x) {
      for (var S = _.length; S-- && se(x, _[S], 0) > -1; )
        ;
      return S;
    }
    function Bl(_, x) {
      for (var S = _.length, L = 0; S--; )
        _[S] === x && ++L;
      return L;
    }
    var Ul = fi(bl), $l = fi(Sl);
    function zl(_) {
      return "\\" + Al[_];
    }
    function Gl(_, x) {
      return _ == null ? r : _[x];
    }
    function ae(_) {
      return ml.test(_);
    }
    function Hl(_) {
      return wl.test(_);
    }
    function ql(_) {
      for (var x, S = []; !(x = _.next()).done; )
        S.push(x.value);
      return S;
    }
    function gi(_) {
      var x = -1, S = Array(_.size);
      return _.forEach(function(L, H) {
        S[++x] = [H, L];
      }), S;
    }
    function oa(_, x) {
      return function(S) {
        return _(x(S));
      };
    }
    function Bn(_, x) {
      for (var S = -1, L = _.length, H = 0, rt = []; ++S < L; ) {
        var Ct = _[S];
        (Ct === x || Ct === b) && (_[S] = b, rt[H++] = S);
      }
      return rt;
    }
    function Xe(_) {
      var x = -1, S = Array(_.size);
      return _.forEach(function(L) {
        S[++x] = L;
      }), S;
    }
    function Kl(_) {
      var x = -1, S = Array(_.size);
      return _.forEach(function(L) {
        S[++x] = [L, L];
      }), S;
    }
    function Zl(_, x, S) {
      for (var L = S - 1, H = _.length; ++L < H; )
        if (_[L] === x)
          return L;
      return -1;
    }
    function Jl(_, x, S) {
      for (var L = S + 1; L--; )
        if (_[L] === x)
          return L;
      return L;
    }
    function oe(_) {
      return ae(_) ? Xl(_) : kl(_);
    }
    function hn(_) {
      return ae(_) ? Ql(_) : Ll(_);
    }
    function ua(_) {
      for (var x = _.length; x-- && Bu.test(_.charAt(x)); )
        ;
      return x;
    }
    var Yl = fi(xl);
    function Xl(_) {
      for (var x = ri.lastIndex = 0; ri.test(_); )
        ++x;
      return x;
    }
    function Ql(_) {
      return _.match(ri) || [];
    }
    function Vl(_) {
      return _.match(yl) || [];
    }
    var jl = function _(x) {
      x = x == null ? Tt : ue.defaults(Tt.Object(), x, ue.pick(Tt, Ml));
      var S = x.Array, L = x.Date, H = x.Error, rt = x.Function, Ct = x.Math, at = x.Object, di = x.RegExp, tf = x.String, sn = x.TypeError, Qe = S.prototype, nf = rt.prototype, le = at.prototype, Ve = x["__core-js_shared__"], je = nf.toString, st = le.hasOwnProperty, ef = 0, la = function() {
        var t = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), tr = le.toString, rf = je.call(at), sf = Tt._, af = di(
        "^" + je.call(st).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), nr = Ks ? x.Buffer : r, Un = x.Symbol, er = x.Uint8Array, fa = nr ? nr.allocUnsafe : r, rr = oa(at.getPrototypeOf, at), ca = at.create, ha = le.propertyIsEnumerable, ir = Qe.splice, pa = Un ? Un.isConcatSpreadable : r, xe = Un ? Un.iterator : r, Yn = Un ? Un.toStringTag : r, sr = function() {
        try {
          var t = te(at, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), of = x.clearTimeout !== Tt.clearTimeout && x.clearTimeout, uf = L && L.now !== Tt.Date.now && L.now, lf = x.setTimeout !== Tt.setTimeout && x.setTimeout, ar = Ct.ceil, or = Ct.floor, _i = at.getOwnPropertySymbols, ff = nr ? nr.isBuffer : r, ga = x.isFinite, cf = Qe.join, hf = oa(at.keys, at), bt = Ct.max, Ft = Ct.min, pf = L.now, gf = x.parseInt, da = Ct.random, df = Qe.reverse, vi = te(x, "DataView"), Ae = te(x, "Map"), yi = te(x, "Promise"), fe = te(x, "Set"), Ie = te(x, "WeakMap"), Te = te(at, "create"), ur = Ie && new Ie(), ce = {}, _f = ne(vi), vf = ne(Ae), yf = ne(yi), mf = ne(fe), wf = ne(Ie), lr = Un ? Un.prototype : r, Pe = lr ? lr.valueOf : r, _a = lr ? lr.toString : r;
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
        escape: ku,
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
        interpolate: xs,
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
      function Mf() {
        var t = new j(this.__wrapped__);
        return t.__actions__ = Ut(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ut(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ut(this.__views__), t;
      }
      function Cf() {
        if (this.__filtered__) {
          var t = new j(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function bf() {
        var t = this.__wrapped__.value(), n = this.__dir__, e = q(t), s = n < 0, a = e ? t.length : 0, l = Oc(0, a, this.__views__), h = l.start, g = l.end, m = g - h, A = s ? g : h - 1, I = this.__iteratees__, T = I.length, E = 0, D = Ft(m, this.__takeCount__);
        if (!e || !s && a == m && D == m)
          return Ua(t, this.__actions__);
        var B = [];
        t:
          for (; m-- && E < D; ) {
            A += n;
            for (var J = -1, U = t[A]; ++J < T; ) {
              var V = I[J], tt = V.iteratee, Qt = V.type, Dt = tt(U);
              if (Qt == ze)
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
      j.prototype = he(fr.prototype), j.prototype.constructor = j;
      function Xn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function Sf() {
        this.__data__ = Te ? Te(null) : {}, this.size = 0;
      }
      function xf(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function Af(t) {
        var n = this.__data__;
        if (Te) {
          var e = n[t];
          return e === w ? r : e;
        }
        return st.call(n, t) ? n[t] : r;
      }
      function If(t) {
        var n = this.__data__;
        return Te ? n[t] !== r : st.call(n, t);
      }
      function Tf(t, n) {
        var e = this.__data__;
        return this.size += this.has(t) ? 0 : 1, e[t] = Te && n === r ? w : n, this;
      }
      Xn.prototype.clear = Sf, Xn.prototype.delete = xf, Xn.prototype.get = Af, Xn.prototype.has = If, Xn.prototype.set = Tf;
      function An(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function Pf() {
        this.__data__ = [], this.size = 0;
      }
      function Ff(t) {
        var n = this.__data__, e = cr(n, t);
        if (e < 0)
          return !1;
        var s = n.length - 1;
        return e == s ? n.pop() : ir.call(n, e, 1), --this.size, !0;
      }
      function Ef(t) {
        var n = this.__data__, e = cr(n, t);
        return e < 0 ? r : n[e][1];
      }
      function Rf(t) {
        return cr(this.__data__, t) > -1;
      }
      function kf(t, n) {
        var e = this.__data__, s = cr(e, t);
        return s < 0 ? (++this.size, e.push([t, n])) : e[s][1] = n, this;
      }
      An.prototype.clear = Pf, An.prototype.delete = Ff, An.prototype.get = Ef, An.prototype.has = Rf, An.prototype.set = kf;
      function In(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.clear(); ++n < e; ) {
          var s = t[n];
          this.set(s[0], s[1]);
        }
      }
      function Lf() {
        this.size = 0, this.__data__ = {
          hash: new Xn(),
          map: new (Ae || An)(),
          string: new Xn()
        };
      }
      function Of(t) {
        var n = br(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Df(t) {
        return br(this, t).get(t);
      }
      function Nf(t) {
        return br(this, t).has(t);
      }
      function Wf(t, n) {
        var e = br(this, t), s = e.size;
        return e.set(t, n), this.size += e.size == s ? 0 : 1, this;
      }
      In.prototype.clear = Lf, In.prototype.delete = Of, In.prototype.get = Df, In.prototype.has = Nf, In.prototype.set = Wf;
      function Qn(t) {
        var n = -1, e = t == null ? 0 : t.length;
        for (this.__data__ = new In(); ++n < e; )
          this.add(t[n]);
      }
      function Bf(t) {
        return this.__data__.set(t, w), this;
      }
      function Uf(t) {
        return this.__data__.has(t);
      }
      Qn.prototype.add = Qn.prototype.push = Bf, Qn.prototype.has = Uf;
      function pn(t) {
        var n = this.__data__ = new An(t);
        this.size = n.size;
      }
      function $f() {
        this.__data__ = new An(), this.size = 0;
      }
      function zf(t) {
        var n = this.__data__, e = n.delete(t);
        return this.size = n.size, e;
      }
      function Gf(t) {
        return this.__data__.get(t);
      }
      function Hf(t) {
        return this.__data__.has(t);
      }
      function qf(t, n) {
        var e = this.__data__;
        if (e instanceof An) {
          var s = e.__data__;
          if (!Ae || s.length < f - 1)
            return s.push([t, n]), this.size = ++e.size, this;
          e = this.__data__ = new In(s);
        }
        return e.set(t, n), this.size = e.size, this;
      }
      pn.prototype.clear = $f, pn.prototype.delete = zf, pn.prototype.get = Gf, pn.prototype.has = Hf, pn.prototype.set = qf;
      function va(t, n) {
        var e = q(t), s = !e && ee(t), a = !e && !s && qn(t), l = !e && !s && !a && _e(t), h = e || s || a || l, g = h ? hi(t.length, tf) : [], m = g.length;
        for (var A in t)
          (n || st.call(t, A)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          l && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
          En(A, m))) && g.push(A);
        return g;
      }
      function ya(t) {
        var n = t.length;
        return n ? t[Pi(0, n - 1)] : r;
      }
      function Kf(t, n) {
        return Sr(Ut(t), Vn(n, 0, t.length));
      }
      function Zf(t) {
        return Sr(Ut(t));
      }
      function mi(t, n, e) {
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
      function Jf(t, n, e, s) {
        return $n(t, function(a, l, h) {
          n(s, a, e(a), h);
        }), s;
      }
      function ma(t, n) {
        return t && Mn(n, xt(n), t);
      }
      function Yf(t, n) {
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
        for (var e = -1, s = n.length, a = S(s), l = t == null; ++e < s; )
          a[e] = l ? r : ts(t, n[e]);
        return a;
      }
      function Vn(t, n, e) {
        return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
      }
      function on(t, n, e, s, a, l) {
        var h, g = n & y, m = n & F, A = n & O;
        if (e && (h = a ? e(t, s, a, l) : e(t)), h !== r)
          return h;
        if (!dt(t))
          return t;
        var I = q(t);
        if (I) {
          if (h = Nc(t), !g)
            return Ut(t, h);
        } else {
          var T = Et(t), E = T == Wt || T == yn;
          if (qn(t))
            return Ga(t, g);
          if (T == Mt || T == nt || E && !a) {
            if (h = m || E ? {} : uo(t), !g)
              return m ? Ac(t, Yf(h, t)) : xc(t, ma(h, t));
          } else {
            if (!ut[T])
              return a ? t : {};
            h = Wc(t, T, g);
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
        var B = A ? m ? Ui : Bi : m ? zt : xt, J = I ? r : B(t);
        return rn(J || t, function(U, V) {
          J && (V = U, U = t[V]), Fe(h, V, on(U, n, e, V, t, l));
        }), h;
      }
      function Xf(t) {
        var n = xt(t);
        return function(e) {
          return wa(e, t, n);
        };
      }
      function wa(t, n, e) {
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
      function Ma(t, n, e) {
        if (typeof t != "function")
          throw new sn(d);
        return Ne(function() {
          t.apply(r, e);
        }, n);
      }
      function Ee(t, n, e, s) {
        var a = -1, l = Je, h = !0, g = t.length, m = [], A = n.length;
        if (!g)
          return m;
        e && (n = gt(n, Jt(e))), s ? (l = ai, h = !1) : n.length >= f && (l = Se, h = !1, n = new Qn(n));
        t:
          for (; ++a < g; ) {
            var I = t[a], T = e == null ? I : e(I);
            if (I = s || I !== 0 ? I : 0, h && T === T) {
              for (var E = A; E--; )
                if (n[E] === T)
                  continue t;
              m.push(I);
            } else l(n, T, s) || m.push(I);
          }
        return m;
      }
      var $n = Ja(wn), Ca = Ja(Ci, !0);
      function Qf(t, n) {
        var e = !0;
        return $n(t, function(s, a, l) {
          return e = !!n(s, a, l), e;
        }), e;
      }
      function hr(t, n, e) {
        for (var s = -1, a = t.length; ++s < a; ) {
          var l = t[s], h = n(l);
          if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
            var g = h, m = l;
        }
        return m;
      }
      function Vf(t, n, e, s) {
        var a = t.length;
        for (e = Z(e), e < 0 && (e = -e > a ? 0 : a + e), s = s === r || s > a ? a : Z(s), s < 0 && (s += a), s = e > s ? 0 : Uo(s); e < s; )
          t[e++] = n;
        return t;
      }
      function ba(t, n) {
        var e = [];
        return $n(t, function(s, a, l) {
          n(s, a, l) && e.push(s);
        }), e;
      }
      function Pt(t, n, e, s, a) {
        var l = -1, h = t.length;
        for (e || (e = Uc), a || (a = []); ++l < h; ) {
          var g = t[l];
          n > 0 && e(g) ? n > 1 ? Pt(g, n - 1, e, s, a) : Wn(a, g) : s || (a[a.length] = g);
        }
        return a;
      }
      var Mi = Ya(), Sa = Ya(!0);
      function wn(t, n) {
        return t && Mi(t, n, xt);
      }
      function Ci(t, n) {
        return t && Sa(t, n, xt);
      }
      function pr(t, n) {
        return Nn(n, function(e) {
          return Rn(t[e]);
        });
      }
      function jn(t, n) {
        n = Gn(n, t);
        for (var e = 0, s = n.length; t != null && e < s; )
          t = t[Cn(n[e++])];
        return e && e == s ? t : r;
      }
      function xa(t, n, e) {
        var s = n(t);
        return q(t) ? s : Wn(s, e(t));
      }
      function Lt(t) {
        return t == null ? t === r ? Au : Dn : Yn && Yn in at(t) ? Lc(t) : Zc(t);
      }
      function bi(t, n) {
        return t > n;
      }
      function jf(t, n) {
        return t != null && st.call(t, n);
      }
      function tc(t, n) {
        return t != null && n in at(t);
      }
      function nc(t, n, e) {
        return t >= Ft(n, e) && t < bt(n, e);
      }
      function Si(t, n, e) {
        for (var s = e ? ai : Je, a = t[0].length, l = t.length, h = l, g = S(l), m = 1 / 0, A = []; h--; ) {
          var I = t[h];
          h && n && (I = gt(I, Jt(n))), m = Ft(I.length, m), g[h] = !e && (n || a >= 120 && I.length >= 120) ? new Qn(h && I) : r;
        }
        I = t[0];
        var T = -1, E = g[0];
        t:
          for (; ++T < a && A.length < m; ) {
            var D = I[T], B = n ? n(D) : D;
            if (D = e || D !== 0 ? D : 0, !(E ? Se(E, B) : s(A, B, e))) {
              for (h = l; --h; ) {
                var J = g[h];
                if (!(J ? Se(J, B) : s(t[h], B, e)))
                  continue t;
              }
              E && E.push(B), A.push(D);
            }
          }
        return A;
      }
      function ec(t, n, e, s) {
        return wn(t, function(a, l, h) {
          n(s, e(a), l, h);
        }), s;
      }
      function Re(t, n, e) {
        n = Gn(n, t), t = ho(t, n);
        var s = t == null ? t : t[Cn(ln(n))];
        return s == null ? r : Zt(s, t, e);
      }
      function Aa(t) {
        return vt(t) && Lt(t) == nt;
      }
      function rc(t) {
        return vt(t) && Lt(t) == be;
      }
      function ic(t) {
        return vt(t) && Lt(t) == wt;
      }
      function ke(t, n, e, s, a) {
        return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : sc(t, n, e, s, ke, a);
      }
      function sc(t, n, e, s, a, l) {
        var h = q(t), g = q(n), m = h ? ht : Et(t), A = g ? ht : Et(n);
        m = m == nt ? Mt : m, A = A == nt ? Mt : A;
        var I = m == Mt, T = A == Mt, E = m == A;
        if (E && qn(t)) {
          if (!qn(n))
            return !1;
          h = !0, I = !1;
        }
        if (E && !I)
          return l || (l = new pn()), h || _e(t) ? so(t, n, e, s, a, l) : Rc(t, n, m, e, s, a, l);
        if (!(e & R)) {
          var D = I && st.call(t, "__wrapped__"), B = T && st.call(n, "__wrapped__");
          if (D || B) {
            var J = D ? t.value() : t, U = B ? n.value() : n;
            return l || (l = new pn()), a(J, U, e, s, l);
          }
        }
        return E ? (l || (l = new pn()), kc(t, n, e, s, a, l)) : !1;
      }
      function ac(t) {
        return vt(t) && Et(t) == _t;
      }
      function xi(t, n, e, s) {
        var a = e.length, l = a, h = !s;
        if (t == null)
          return !l;
        for (t = at(t); a--; ) {
          var g = e[a];
          if (h && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++a < l; ) {
          g = e[a];
          var m = g[0], A = t[m], I = g[1];
          if (h && g[2]) {
            if (A === r && !(m in t))
              return !1;
          } else {
            var T = new pn();
            if (s)
              var E = s(A, I, m, t, n, T);
            if (!(E === r ? ke(I, A, R | P, s, T) : E))
              return !1;
          }
        }
        return !0;
      }
      function Ia(t) {
        if (!dt(t) || zc(t))
          return !1;
        var n = Rn(t) ? af : Yu;
        return n.test(ne(t));
      }
      function oc(t) {
        return vt(t) && Lt(t) == nn;
      }
      function uc(t) {
        return vt(t) && Et(t) == pt;
      }
      function lc(t) {
        return vt(t) && Fr(t.length) && !!ft[Lt(t)];
      }
      function Ta(t) {
        return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? q(t) ? Ea(t[0], t[1]) : Fa(t) : Qo(t);
      }
      function Ai(t) {
        if (!De(t))
          return hf(t);
        var n = [];
        for (var e in at(t))
          st.call(t, e) && e != "constructor" && n.push(e);
        return n;
      }
      function fc(t) {
        if (!dt(t))
          return Kc(t);
        var n = De(t), e = [];
        for (var s in t)
          s == "constructor" && (n || !st.call(t, s)) || e.push(s);
        return e;
      }
      function Ii(t, n) {
        return t < n;
      }
      function Pa(t, n) {
        var e = -1, s = $t(t) ? S(t.length) : [];
        return $n(t, function(a, l, h) {
          s[++e] = n(a, l, h);
        }), s;
      }
      function Fa(t) {
        var n = zi(t);
        return n.length == 1 && n[0][2] ? fo(n[0][0], n[0][1]) : function(e) {
          return e === t || xi(e, t, n);
        };
      }
      function Ea(t, n) {
        return Hi(t) && lo(n) ? fo(Cn(t), n) : function(e) {
          var s = ts(e, t);
          return s === r && s === n ? ns(e, t) : ke(n, s, R | P);
        };
      }
      function gr(t, n, e, s, a) {
        t !== n && Mi(n, function(l, h) {
          if (a || (a = new pn()), dt(l))
            cc(t, n, h, e, gr, s, a);
          else {
            var g = s ? s(Ki(t, h), l, h + "", t, n, a) : r;
            g === r && (g = l), mi(t, h, g);
          }
        }, zt);
      }
      function cc(t, n, e, s, a, l, h) {
        var g = Ki(t, e), m = Ki(n, e), A = h.get(m);
        if (A) {
          mi(t, e, A);
          return;
        }
        var I = l ? l(g, m, e + "", t, n, h) : r, T = I === r;
        if (T) {
          var E = q(m), D = !E && qn(m), B = !E && !D && _e(m);
          I = m, E || D || B ? q(g) ? I = g : yt(g) ? I = Ut(g) : D ? (T = !1, I = Ga(m, !0)) : B ? (T = !1, I = Ha(m, !0)) : I = [] : We(m) || ee(m) ? (I = g, ee(g) ? I = $o(g) : (!dt(g) || Rn(g)) && (I = uo(m))) : T = !1;
        }
        T && (h.set(m, I), a(I, m, s, l, h), h.delete(m)), mi(t, e, I);
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
        var s = -1;
        n = gt(n, Jt(W()));
        var a = Pa(t, function(l, h, g) {
          var m = gt(n, function(A) {
            return A(l);
          });
          return { criteria: m, index: ++s, value: l };
        });
        return Nl(a, function(l, h) {
          return Sc(l, h, e);
        });
      }
      function hc(t, n) {
        return La(t, n, function(e, s) {
          return ns(t, s);
        });
      }
      function La(t, n, e) {
        for (var s = -1, a = n.length, l = {}; ++s < a; ) {
          var h = n[s], g = jn(t, h);
          e(g, h) && Le(l, Gn(h, t), g);
        }
        return l;
      }
      function pc(t) {
        return function(n) {
          return jn(n, t);
        };
      }
      function Ti(t, n, e, s) {
        var a = s ? Dl : se, l = -1, h = n.length, g = t;
        for (t === n && (n = Ut(n)), e && (g = gt(t, Jt(e))); ++l < h; )
          for (var m = 0, A = n[l], I = e ? e(A) : A; (m = a(g, I, m, s)) > -1; )
            g !== t && ir.call(g, m, 1), ir.call(t, m, 1);
        return t;
      }
      function Oa(t, n) {
        for (var e = t ? n.length : 0, s = e - 1; e--; ) {
          var a = n[e];
          if (e == s || a !== l) {
            var l = a;
            En(a) ? ir.call(t, a, 1) : Ri(t, a);
          }
        }
        return t;
      }
      function Pi(t, n) {
        return t + or(da() * (n - t + 1));
      }
      function gc(t, n, e, s) {
        for (var a = -1, l = bt(ar((n - t) / (e || 1)), 0), h = S(l); l--; )
          h[s ? l : ++a] = t, t += e;
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
      function Y(t, n) {
        return Zi(co(t, n, Gt), t + "");
      }
      function dc(t) {
        return ya(ve(t));
      }
      function _c(t, n) {
        var e = ve(t);
        return Sr(e, Vn(n, 0, e.length));
      }
      function Le(t, n, e, s) {
        if (!dt(t))
          return t;
        n = Gn(n, t);
        for (var a = -1, l = n.length, h = l - 1, g = t; g != null && ++a < l; ) {
          var m = Cn(n[a]), A = e;
          if (m === "__proto__" || m === "constructor" || m === "prototype")
            return t;
          if (a != h) {
            var I = g[m];
            A = s ? s(I, m, g) : r, A === r && (A = dt(I) ? I : En(n[a + 1]) ? [] : {});
          }
          Fe(g, m, A), g = g[m];
        }
        return t;
      }
      var Da = ur ? function(t, n) {
        return ur.set(t, n), t;
      } : Gt, vc = sr ? function(t, n) {
        return sr(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: rs(n),
          writable: !0
        });
      } : Gt;
      function yc(t) {
        return Sr(ve(t));
      }
      function un(t, n, e) {
        var s = -1, a = t.length;
        n < 0 && (n = -n > a ? 0 : a + n), e = e > a ? a : e, e < 0 && (e += a), a = n > e ? 0 : e - n >>> 0, n >>>= 0;
        for (var l = S(a); ++s < a; )
          l[s] = t[s + n];
        return l;
      }
      function mc(t, n) {
        var e;
        return $n(t, function(s, a, l) {
          return e = n(s, a, l), !e;
        }), !!e;
      }
      function dr(t, n, e) {
        var s = 0, a = t == null ? s : t.length;
        if (typeof n == "number" && n === n && a <= G) {
          for (; s < a; ) {
            var l = s + a >>> 1, h = t[l];
            h !== null && !Xt(h) && (e ? h <= n : h < n) ? s = l + 1 : a = l;
          }
          return a;
        }
        return Ei(t, n, Gt, e);
      }
      function Ei(t, n, e, s) {
        var a = 0, l = t == null ? 0 : t.length;
        if (l === 0)
          return 0;
        n = e(n);
        for (var h = n !== n, g = n === null, m = Xt(n), A = n === r; a < l; ) {
          var I = or((a + l) / 2), T = e(t[I]), E = T !== r, D = T === null, B = T === T, J = Xt(T);
          if (h)
            var U = s || B;
          else A ? U = B && (s || E) : g ? U = B && E && (s || !D) : m ? U = B && E && !D && (s || !J) : D || J ? U = !1 : U = s ? T <= n : T < n;
          U ? a = I + 1 : l = I;
        }
        return Ft(l, $);
      }
      function Na(t, n) {
        for (var e = -1, s = t.length, a = 0, l = []; ++e < s; ) {
          var h = t[e], g = n ? n(h) : h;
          if (!e || !gn(g, m)) {
            var m = g;
            l[a++] = h === 0 ? 0 : h;
          }
        }
        return l;
      }
      function Wa(t) {
        return typeof t == "number" ? t : Xt(t) ? xn : +t;
      }
      function Yt(t) {
        if (typeof t == "string")
          return t;
        if (q(t))
          return gt(t, Yt) + "";
        if (Xt(t))
          return _a ? _a.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Sn ? "-0" : n;
      }
      function zn(t, n, e) {
        var s = -1, a = Je, l = t.length, h = !0, g = [], m = g;
        if (e)
          h = !1, a = ai;
        else if (l >= f) {
          var A = n ? null : Fc(t);
          if (A)
            return Xe(A);
          h = !1, a = Se, m = new Qn();
        } else
          m = n ? [] : g;
        t:
          for (; ++s < l; ) {
            var I = t[s], T = n ? n(I) : I;
            if (I = e || I !== 0 ? I : 0, h && T === T) {
              for (var E = m.length; E--; )
                if (m[E] === T)
                  continue t;
              n && m.push(T), g.push(I);
            } else a(m, T, e) || (m !== g && m.push(T), g.push(I));
          }
        return g;
      }
      function Ri(t, n) {
        return n = Gn(n, t), t = ho(t, n), t == null || delete t[Cn(ln(n))];
      }
      function Ba(t, n, e, s) {
        return Le(t, n, e(jn(t, n)), s);
      }
      function _r(t, n, e, s) {
        for (var a = t.length, l = s ? a : -1; (s ? l-- : ++l < a) && n(t[l], l, t); )
          ;
        return e ? un(t, s ? 0 : l, s ? l + 1 : a) : un(t, s ? l + 1 : 0, s ? a : l);
      }
      function Ua(t, n) {
        var e = t;
        return e instanceof j && (e = e.value()), oi(n, function(s, a) {
          return a.func.apply(a.thisArg, Wn([s], a.args));
        }, e);
      }
      function ki(t, n, e) {
        var s = t.length;
        if (s < 2)
          return s ? zn(t[0]) : [];
        for (var a = -1, l = S(s); ++a < s; )
          for (var h = t[a], g = -1; ++g < s; )
            g != a && (l[a] = Ee(l[a] || h, t[g], n, e));
        return zn(Pt(l, 1), n, e);
      }
      function $a(t, n, e) {
        for (var s = -1, a = t.length, l = n.length, h = {}; ++s < a; ) {
          var g = s < l ? n[s] : r;
          e(h, t[s], g);
        }
        return h;
      }
      function Li(t) {
        return yt(t) ? t : [];
      }
      function Oi(t) {
        return typeof t == "function" ? t : Gt;
      }
      function Gn(t, n) {
        return q(t) ? t : Hi(t, n) ? [t] : vo(it(t));
      }
      var wc = Y;
      function Hn(t, n, e) {
        var s = t.length;
        return e = e === r ? s : e, !n && e >= s ? t : un(t, n, e);
      }
      var za = of || function(t) {
        return Tt.clearTimeout(t);
      };
      function Ga(t, n) {
        if (n)
          return t.slice();
        var e = t.length, s = fa ? fa(e) : new t.constructor(e);
        return t.copy(s), s;
      }
      function Di(t) {
        var n = new t.constructor(t.byteLength);
        return new er(n).set(new er(t)), n;
      }
      function Mc(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.byteLength);
      }
      function Cc(t) {
        var n = new t.constructor(t.source, As.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function bc(t) {
        return Pe ? at(Pe.call(t)) : {};
      }
      function Ha(t, n) {
        var e = n ? Di(t.buffer) : t.buffer;
        return new t.constructor(e, t.byteOffset, t.length);
      }
      function qa(t, n) {
        if (t !== n) {
          var e = t !== r, s = t === null, a = t === t, l = Xt(t), h = n !== r, g = n === null, m = n === n, A = Xt(n);
          if (!g && !A && !l && t > n || l && h && m && !g && !A || s && h && m || !e && m || !a)
            return 1;
          if (!s && !l && !A && t < n || A && e && a && !s && !l || g && e && a || !h && a || !m)
            return -1;
        }
        return 0;
      }
      function Sc(t, n, e) {
        for (var s = -1, a = t.criteria, l = n.criteria, h = a.length, g = e.length; ++s < h; ) {
          var m = qa(a[s], l[s]);
          if (m) {
            if (s >= g)
              return m;
            var A = e[s];
            return m * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ka(t, n, e, s) {
        for (var a = -1, l = t.length, h = e.length, g = -1, m = n.length, A = bt(l - h, 0), I = S(m + A), T = !s; ++g < m; )
          I[g] = n[g];
        for (; ++a < h; )
          (T || a < l) && (I[e[a]] = t[a]);
        for (; A--; )
          I[g++] = t[a++];
        return I;
      }
      function Za(t, n, e, s) {
        for (var a = -1, l = t.length, h = -1, g = e.length, m = -1, A = n.length, I = bt(l - g, 0), T = S(I + A), E = !s; ++a < I; )
          T[a] = t[a];
        for (var D = a; ++m < A; )
          T[D + m] = n[m];
        for (; ++h < g; )
          (E || a < l) && (T[D + e[h]] = t[a++]);
        return T;
      }
      function Ut(t, n) {
        var e = -1, s = t.length;
        for (n || (n = S(s)); ++e < s; )
          n[e] = t[e];
        return n;
      }
      function Mn(t, n, e, s) {
        var a = !e;
        e || (e = {});
        for (var l = -1, h = n.length; ++l < h; ) {
          var g = n[l], m = s ? s(e[g], t[g], g, e, t) : r;
          m === r && (m = t[g]), a ? Tn(e, g, m) : Fe(e, g, m);
        }
        return e;
      }
      function xc(t, n) {
        return Mn(t, Gi(t), n);
      }
      function Ac(t, n) {
        return Mn(t, ao(t), n);
      }
      function vr(t, n) {
        return function(e, s) {
          var a = q(e) ? Fl : Jf, l = n ? n() : {};
          return a(e, t, W(s, 2), l);
        };
      }
      function pe(t) {
        return Y(function(n, e) {
          var s = -1, a = e.length, l = a > 1 ? e[a - 1] : r, h = a > 2 ? e[2] : r;
          for (l = t.length > 3 && typeof l == "function" ? (a--, l) : r, h && Ot(e[0], e[1], h) && (l = a < 3 ? r : l, a = 1), n = at(n); ++s < a; ) {
            var g = e[s];
            g && t(n, g, s, l);
          }
          return n;
        });
      }
      function Ja(t, n) {
        return function(e, s) {
          if (e == null)
            return e;
          if (!$t(e))
            return t(e, s);
          for (var a = e.length, l = n ? a : -1, h = at(e); (n ? l-- : ++l < a) && s(h[l], l, h) !== !1; )
            ;
          return e;
        };
      }
      function Ya(t) {
        return function(n, e, s) {
          for (var a = -1, l = at(n), h = s(n), g = h.length; g--; ) {
            var m = h[t ? g : ++a];
            if (e(l[m], m, l) === !1)
              break;
          }
          return n;
        };
      }
      function Ic(t, n, e) {
        var s = n & N, a = Oe(t);
        function l() {
          var h = this && this !== Tt && this instanceof l ? a : t;
          return h.apply(s ? e : this, arguments);
        }
        return l;
      }
      function Xa(t) {
        return function(n) {
          n = it(n);
          var e = ae(n) ? hn(n) : r, s = e ? e[0] : n.charAt(0), a = e ? Hn(e, 1).join("") : n.slice(1);
          return s[t]() + a;
        };
      }
      function ge(t) {
        return function(n) {
          return oi(Yo(Jo(n).replace(_l, "")), t, "");
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
      function Tc(t, n, e) {
        var s = Oe(t);
        function a() {
          for (var l = arguments.length, h = S(l), g = l, m = de(a); g--; )
            h[g] = arguments[g];
          var A = l < 3 && h[0] !== m && h[l - 1] !== m ? [] : Bn(h, m);
          if (l -= A.length, l < e)
            return no(
              t,
              n,
              yr,
              a.placeholder,
              r,
              h,
              A,
              r,
              r,
              e - l
            );
          var I = this && this !== Tt && this instanceof a ? s : t;
          return Zt(I, this, h);
        }
        return a;
      }
      function Qa(t) {
        return function(n, e, s) {
          var a = at(n);
          if (!$t(n)) {
            var l = W(e, 3);
            n = xt(n), e = function(g) {
              return l(a[g], g, a);
            };
          }
          var h = t(n, e, s);
          return h > -1 ? a[l ? n[h] : h] : r;
        };
      }
      function Va(t) {
        return Fn(function(n) {
          var e = n.length, s = e, a = an.prototype.thru;
          for (t && n.reverse(); s--; ) {
            var l = n[s];
            if (typeof l != "function")
              throw new sn(d);
            if (a && !h && Cr(l) == "wrapper")
              var h = new an([], !0);
          }
          for (s = h ? s : e; ++s < e; ) {
            l = n[s];
            var g = Cr(l), m = g == "wrapper" ? $i(l) : r;
            m && qi(m[0]) && m[1] == (It | Q | St | Ht) && !m[4].length && m[9] == 1 ? h = h[Cr(m[0])].apply(h, m[3]) : h = l.length == 1 && qi(l) ? h[g]() : h.thru(l);
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
      function yr(t, n, e, s, a, l, h, g, m, A) {
        var I = n & It, T = n & N, E = n & K, D = n & (Q | et), B = n & tn, J = E ? r : Oe(t);
        function U() {
          for (var V = arguments.length, tt = S(V), Qt = V; Qt--; )
            tt[Qt] = arguments[Qt];
          if (D)
            var Dt = de(U), Vt = Bl(tt, Dt);
          if (s && (tt = Ka(tt, s, a, D)), l && (tt = Za(tt, l, h, D)), V -= Vt, D && V < A) {
            var mt = Bn(tt, Dt);
            return no(
              t,
              n,
              yr,
              U.placeholder,
              e,
              tt,
              mt,
              g,
              m,
              A - V
            );
          }
          var dn = T ? e : this, Ln = E ? dn[t] : t;
          return V = tt.length, g ? tt = Jc(tt, g) : B && V > 1 && tt.reverse(), I && m < V && (tt.length = m), this && this !== Tt && this instanceof U && (Ln = J || Oe(Ln)), Ln.apply(dn, tt);
        }
        return U;
      }
      function ja(t, n) {
        return function(e, s) {
          return ec(e, t, n(s), {});
        };
      }
      function mr(t, n) {
        return function(e, s) {
          var a;
          if (e === r && s === r)
            return n;
          if (e !== r && (a = e), s !== r) {
            if (a === r)
              return s;
            typeof e == "string" || typeof s == "string" ? (e = Yt(e), s = Yt(s)) : (e = Wa(e), s = Wa(s)), a = t(e, s);
          }
          return a;
        };
      }
      function Ni(t) {
        return Fn(function(n) {
          return n = gt(n, Jt(W())), Y(function(e) {
            var s = this;
            return t(n, function(a) {
              return Zt(a, s, e);
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
        return ae(n) ? Hn(hn(s), 0, t).join("") : s.slice(0, t);
      }
      function Pc(t, n, e, s) {
        var a = n & N, l = Oe(t);
        function h() {
          for (var g = -1, m = arguments.length, A = -1, I = s.length, T = S(I + m), E = this && this !== Tt && this instanceof h ? l : t; ++A < I; )
            T[A] = s[A];
          for (; m--; )
            T[A++] = arguments[++g];
          return Zt(E, a ? e : this, T);
        }
        return h;
      }
      function to(t) {
        return function(n, e, s) {
          return s && typeof s != "number" && Ot(n, e, s) && (e = s = r), n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), s = s === r ? n < e ? 1 : -1 : kn(s), gc(n, e, s, t);
        };
      }
      function Mr(t) {
        return function(n, e) {
          return typeof n == "string" && typeof e == "string" || (n = fn(n), e = fn(e)), t(n, e);
        };
      }
      function no(t, n, e, s, a, l, h, g, m, A) {
        var I = n & Q, T = I ? h : r, E = I ? r : h, D = I ? l : r, B = I ? r : l;
        n |= I ? St : At, n &= ~(I ? At : St), n & X || (n &= ~(N | K));
        var J = [
          t,
          n,
          a,
          D,
          T,
          B,
          E,
          g,
          m,
          A
        ], U = e.apply(r, J);
        return qi(t) && po(U, J), U.placeholder = s, go(U, t, n);
      }
      function Wi(t) {
        var n = Ct[t];
        return function(e, s) {
          if (e = fn(e), s = s == null ? 0 : Ft(Z(s), 292), s && ga(e)) {
            var a = (it(e) + "e").split("e"), l = n(a[0] + "e" + (+a[1] + s));
            return a = (it(l) + "e").split("e"), +(a[0] + "e" + (+a[1] - s));
          }
          return n(e);
        };
      }
      var Fc = fe && 1 / Xe(new fe([, -0]))[1] == Sn ? function(t) {
        return new fe(t);
      } : as;
      function eo(t) {
        return function(n) {
          var e = Et(n);
          return e == _t ? gi(n) : e == pt ? Kl(n) : Wl(n, t(n));
        };
      }
      function Pn(t, n, e, s, a, l, h, g) {
        var m = n & K;
        if (!m && typeof t != "function")
          throw new sn(d);
        var A = s ? s.length : 0;
        if (A || (n &= ~(St | At), s = a = r), h = h === r ? h : bt(Z(h), 0), g = g === r ? g : Z(g), A -= a ? a.length : 0, n & At) {
          var I = s, T = a;
          s = a = r;
        }
        var E = m ? r : $i(t), D = [
          t,
          n,
          e,
          s,
          a,
          I,
          T,
          l,
          h,
          g
        ];
        if (E && qc(D, E), t = D[0], n = D[1], e = D[2], s = D[3], a = D[4], g = D[9] = D[9] === r ? m ? 0 : t.length : bt(D[9] - A, 0), !g && n & (Q | et) && (n &= ~(Q | et)), !n || n == N)
          var B = Ic(t, n, e);
        else n == Q || n == et ? B = Tc(t, n, g) : (n == St || n == (N | St)) && !a.length ? B = Pc(t, n, e, s) : B = yr.apply(r, D);
        var J = E ? Da : po;
        return go(J(B, D), t, n);
      }
      function ro(t, n, e, s) {
        return t === r || gn(t, le[e]) && !st.call(s, e) ? n : t;
      }
      function io(t, n, e, s, a, l) {
        return dt(t) && dt(n) && (l.set(n, t), gr(t, n, r, io, l), l.delete(n)), t;
      }
      function Ec(t) {
        return We(t) ? r : t;
      }
      function so(t, n, e, s, a, l) {
        var h = e & R, g = t.length, m = n.length;
        if (g != m && !(h && m > g))
          return !1;
        var A = l.get(t), I = l.get(n);
        if (A && I)
          return A == n && I == t;
        var T = -1, E = !0, D = e & P ? new Qn() : r;
        for (l.set(t, n), l.set(n, t); ++T < g; ) {
          var B = t[T], J = n[T];
          if (s)
            var U = h ? s(J, B, T, n, t, l) : s(B, J, T, t, n, l);
          if (U !== r) {
            if (U)
              continue;
            E = !1;
            break;
          }
          if (D) {
            if (!ui(n, function(V, tt) {
              if (!Se(D, tt) && (B === V || a(B, V, e, s, l)))
                return D.push(tt);
            })) {
              E = !1;
              break;
            }
          } else if (!(B === J || a(B, J, e, s, l))) {
            E = !1;
            break;
          }
        }
        return l.delete(t), l.delete(n), E;
      }
      function Rc(t, n, e, s, a, l, h) {
        switch (e) {
          case re:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case be:
            return !(t.byteLength != n.byteLength || !l(new er(t), new er(n)));
          case lt:
          case wt:
          case kt:
            return gn(+t, +n);
          case Rt:
            return t.name == n.name && t.message == n.message;
          case nn:
          case mn:
            return t == n + "";
          case _t:
            var g = gi;
          case pt:
            var m = s & R;
            if (g || (g = Xe), t.size != n.size && !m)
              return !1;
            var A = h.get(t);
            if (A)
              return A == n;
            s |= P, h.set(t, n);
            var I = so(g(t), g(n), s, a, l, h);
            return h.delete(t), I;
          case He:
            if (Pe)
              return Pe.call(t) == Pe.call(n);
        }
        return !1;
      }
      function kc(t, n, e, s, a, l) {
        var h = e & R, g = Bi(t), m = g.length, A = Bi(n), I = A.length;
        if (m != I && !h)
          return !1;
        for (var T = m; T--; ) {
          var E = g[T];
          if (!(h ? E in n : st.call(n, E)))
            return !1;
        }
        var D = l.get(t), B = l.get(n);
        if (D && B)
          return D == n && B == t;
        var J = !0;
        l.set(t, n), l.set(n, t);
        for (var U = h; ++T < m; ) {
          E = g[T];
          var V = t[E], tt = n[E];
          if (s)
            var Qt = h ? s(tt, V, E, n, t, l) : s(V, tt, E, t, n, l);
          if (!(Qt === r ? V === tt || a(V, tt, e, s, l) : Qt)) {
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
      function Fn(t) {
        return Zi(co(t, r, Mo), t + "");
      }
      function Bi(t) {
        return xa(t, xt, Gi);
      }
      function Ui(t) {
        return xa(t, zt, ao);
      }
      var $i = ur ? function(t) {
        return ur.get(t);
      } : as;
      function Cr(t) {
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
      function W() {
        var t = u.iteratee || is;
        return t = t === is ? Ta : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function br(t, n) {
        var e = t.__data__;
        return $c(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
      }
      function zi(t) {
        for (var n = xt(t), e = n.length; e--; ) {
          var s = n[e], a = t[s];
          n[e] = [s, a, lo(a)];
        }
        return n;
      }
      function te(t, n) {
        var e = Gl(t, n);
        return Ia(e) ? e : r;
      }
      function Lc(t) {
        var n = st.call(t, Yn), e = t[Yn];
        try {
          t[Yn] = r;
          var s = !0;
        } catch {
        }
        var a = tr.call(t);
        return s && (n ? t[Yn] = e : delete t[Yn]), a;
      }
      var Gi = _i ? function(t) {
        return t == null ? [] : (t = at(t), Nn(_i(t), function(n) {
          return ha.call(t, n);
        }));
      } : os, ao = _i ? function(t) {
        for (var n = []; t; )
          Wn(n, Gi(t)), t = rr(t);
        return n;
      } : os, Et = Lt;
      (vi && Et(new vi(new ArrayBuffer(1))) != re || Ae && Et(new Ae()) != _t || yi && Et(yi.resolve()) != Bt || fe && Et(new fe()) != pt || Ie && Et(new Ie()) != Ce) && (Et = function(t) {
        var n = Lt(t), e = n == Mt ? t.constructor : r, s = e ? ne(e) : "";
        if (s)
          switch (s) {
            case _f:
              return re;
            case vf:
              return _t;
            case yf:
              return Bt;
            case mf:
              return pt;
            case wf:
              return Ce;
          }
        return n;
      });
      function Oc(t, n, e) {
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
              n = Ft(n, t + h);
              break;
            case "takeRight":
              t = bt(t, n - h);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Dc(t) {
        var n = t.match($u);
        return n ? n[1].split(zu) : [];
      }
      function oo(t, n, e) {
        n = Gn(n, t);
        for (var s = -1, a = n.length, l = !1; ++s < a; ) {
          var h = Cn(n[s]);
          if (!(l = t != null && e(t, h)))
            break;
          t = t[h];
        }
        return l || ++s != a ? l : (a = t == null ? 0 : t.length, !!a && Fr(a) && En(h, a) && (q(t) || ee(t)));
      }
      function Nc(t) {
        var n = t.length, e = new t.constructor(n);
        return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
      }
      function uo(t) {
        return typeof t.constructor == "function" && !De(t) ? he(rr(t)) : {};
      }
      function Wc(t, n, e) {
        var s = t.constructor;
        switch (n) {
          case be:
            return Di(t);
          case lt:
          case wt:
            return new s(+t);
          case re:
            return Mc(t, e);
          case zr:
          case Gr:
          case Hr:
          case qr:
          case Kr:
          case Zr:
          case Jr:
          case Yr:
          case Xr:
            return Ha(t, e);
          case _t:
            return new s();
          case kt:
          case mn:
            return new s(t);
          case nn:
            return Cc(t);
          case pt:
            return new s();
          case He:
            return bc(t);
        }
      }
      function Bc(t, n) {
        var e = n.length;
        if (!e)
          return t;
        var s = e - 1;
        return n[s] = (e > 1 ? "& " : "") + n[s], n = n.join(e > 2 ? ", " : " "), t.replace(Uu, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Uc(t) {
        return q(t) || ee(t) || !!(pa && t && t[pa]);
      }
      function En(t, n) {
        var e = typeof t;
        return n = n ?? vn, !!n && (e == "number" || e != "symbol" && Qu.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ot(t, n, e) {
        if (!dt(e))
          return !1;
        var s = typeof n;
        return (s == "number" ? $t(e) && En(n, e.length) : s == "string" && n in e) ? gn(e[n], t) : !1;
      }
      function Hi(t, n) {
        if (q(t))
          return !1;
        var e = typeof t;
        return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Du.test(t) || !Ou.test(t) || n != null && t in at(n);
      }
      function $c(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function qi(t) {
        var n = Cr(t), e = u[n];
        if (typeof e != "function" || !(n in j.prototype))
          return !1;
        if (t === e)
          return !0;
        var s = $i(e);
        return !!s && t === s[0];
      }
      function zc(t) {
        return !!la && la in t;
      }
      var Gc = Ve ? Rn : us;
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
      function Hc(t) {
        var n = Tr(t, function(s) {
          return e.size === C && e.clear(), s;
        }), e = n.cache;
        return n;
      }
      function qc(t, n) {
        var e = t[1], s = n[1], a = e | s, l = a < (N | K | It), h = s == It && e == Q || s == It && e == Ht && t[7].length <= n[8] || s == (It | Ht) && n[7].length <= n[8] && e == Q;
        if (!(l || h))
          return t;
        s & N && (t[2] = n[2], a |= e & N ? 0 : X);
        var g = n[3];
        if (g) {
          var m = t[3];
          t[3] = m ? Ka(m, g, n[4]) : g, t[4] = m ? Bn(t[3], b) : n[4];
        }
        return g = n[5], g && (m = t[5], t[5] = m ? Za(m, g, n[6]) : g, t[6] = m ? Bn(t[5], b) : n[6]), g = n[7], g && (t[7] = g), s & It && (t[8] = t[8] == null ? n[8] : Ft(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = a, t;
      }
      function Kc(t) {
        var n = [];
        if (t != null)
          for (var e in at(t))
            n.push(e);
        return n;
      }
      function Zc(t) {
        return tr.call(t);
      }
      function co(t, n, e) {
        return n = bt(n === r ? t.length - 1 : n, 0), function() {
          for (var s = arguments, a = -1, l = bt(s.length - n, 0), h = S(l); ++a < l; )
            h[a] = s[n + a];
          a = -1;
          for (var g = S(n + 1); ++a < n; )
            g[a] = s[a];
          return g[n] = e(h), Zt(t, this, g);
        };
      }
      function ho(t, n) {
        return n.length < 2 ? t : jn(t, un(n, 0, -1));
      }
      function Jc(t, n) {
        for (var e = t.length, s = Ft(n.length, e), a = Ut(t); s--; ) {
          var l = n[s];
          t[s] = En(l, e) ? a[l] : r;
        }
        return t;
      }
      function Ki(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var po = _o(Da), Ne = lf || function(t, n) {
        return Tt.setTimeout(t, n);
      }, Zi = _o(vc);
      function go(t, n, e) {
        var s = n + "";
        return Zi(t, Bc(s, Yc(Dc(s), e)));
      }
      function _o(t) {
        var n = 0, e = 0;
        return function() {
          var s = pf(), a = Ur - (s - e);
          if (e = s, a > 0) {
            if (++n >= $e)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Sr(t, n) {
        var e = -1, s = t.length, a = s - 1;
        for (n = n === r ? s : n; ++e < n; ) {
          var l = Pi(e, a), h = t[l];
          t[l] = t[e], t[e] = h;
        }
        return t.length = n, t;
      }
      var vo = Hc(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Nu, function(e, s, a, l) {
          n.push(a ? l.replace(qu, "$1") : s || e);
        }), n;
      });
      function Cn(t) {
        if (typeof t == "string" || Xt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Sn ? "-0" : n;
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
      function Yc(t, n) {
        return rn(ct, function(e) {
          var s = "_." + e[0];
          n & e[1] && !Je(t, s) && t.push(s);
        }), t.sort();
      }
      function yo(t) {
        if (t instanceof j)
          return t.clone();
        var n = new an(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ut(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Xc(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = bt(Z(n), 0);
        var s = t == null ? 0 : t.length;
        if (!s || n < 1)
          return [];
        for (var a = 0, l = 0, h = S(ar(s / n)); a < s; )
          h[l++] = un(t, a, a += n);
        return h;
      }
      function Qc(t) {
        for (var n = -1, e = t == null ? 0 : t.length, s = 0, a = []; ++n < e; ) {
          var l = t[n];
          l && (a[s++] = l);
        }
        return a;
      }
      function Vc() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = S(t - 1), e = arguments[0], s = t; s--; )
          n[s - 1] = arguments[s];
        return Wn(q(e) ? Ut(e) : [e], Pt(n, 1));
      }
      var jc = Y(function(t, n) {
        return yt(t) ? Ee(t, Pt(n, 1, yt, !0)) : [];
      }), th = Y(function(t, n) {
        var e = ln(n);
        return yt(e) && (e = r), yt(t) ? Ee(t, Pt(n, 1, yt, !0), W(e, 2)) : [];
      }), nh = Y(function(t, n) {
        var e = ln(n);
        return yt(e) && (e = r), yt(t) ? Ee(t, Pt(n, 1, yt, !0), r, e) : [];
      });
      function eh(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), un(t, n < 0 ? 0 : n, s)) : [];
      }
      function rh(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), n = s - n, un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function ih(t, n) {
        return t && t.length ? _r(t, W(n, 3), !0, !0) : [];
      }
      function sh(t, n) {
        return t && t.length ? _r(t, W(n, 3), !0) : [];
      }
      function ah(t, n, e, s) {
        var a = t == null ? 0 : t.length;
        return a ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, s = a), Vf(t, n, e, s)) : [];
      }
      function mo(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(s + a, 0)), Ye(t, W(n, 3), a);
      }
      function wo(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s - 1;
        return e !== r && (a = Z(e), a = e < 0 ? bt(s + a, 0) : Ft(a, s - 1)), Ye(t, W(n, 3), a, !0);
      }
      function Mo(t) {
        var n = t == null ? 0 : t.length;
        return n ? Pt(t, 1) : [];
      }
      function oh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Pt(t, Sn) : [];
      }
      function uh(t, n) {
        var e = t == null ? 0 : t.length;
        return e ? (n = n === r ? 1 : Z(n), Pt(t, n)) : [];
      }
      function lh(t) {
        for (var n = -1, e = t == null ? 0 : t.length, s = {}; ++n < e; ) {
          var a = t[n];
          s[a[0]] = a[1];
        }
        return s;
      }
      function Co(t) {
        return t && t.length ? t[0] : r;
      }
      function fh(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = e == null ? 0 : Z(e);
        return a < 0 && (a = bt(s + a, 0)), se(t, n, a);
      }
      function ch(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 0, -1) : [];
      }
      var hh = Y(function(t) {
        var n = gt(t, Li);
        return n.length && n[0] === t[0] ? Si(n) : [];
      }), ph = Y(function(t) {
        var n = ln(t), e = gt(t, Li);
        return n === ln(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Si(e, W(n, 2)) : [];
      }), gh = Y(function(t) {
        var n = ln(t), e = gt(t, Li);
        return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Si(e, r, n) : [];
      });
      function dh(t, n) {
        return t == null ? "" : cf.call(t, n);
      }
      function ln(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function _h(t, n, e) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var a = s;
        return e !== r && (a = Z(e), a = a < 0 ? bt(s + a, 0) : Ft(a, s - 1)), n === n ? Jl(t, n, a) : Ye(t, na, a, !0);
      }
      function vh(t, n) {
        return t && t.length ? Ra(t, Z(n)) : r;
      }
      var yh = Y(bo);
      function bo(t, n) {
        return t && t.length && n && n.length ? Ti(t, n) : t;
      }
      function mh(t, n, e) {
        return t && t.length && n && n.length ? Ti(t, n, W(e, 2)) : t;
      }
      function wh(t, n, e) {
        return t && t.length && n && n.length ? Ti(t, n, r, e) : t;
      }
      var Mh = Fn(function(t, n) {
        var e = t == null ? 0 : t.length, s = wi(t, n);
        return Oa(t, gt(n, function(a) {
          return En(a, e) ? +a : a;
        }).sort(qa)), s;
      });
      function Ch(t, n) {
        var e = [];
        if (!(t && t.length))
          return e;
        var s = -1, a = [], l = t.length;
        for (n = W(n, 3); ++s < l; ) {
          var h = t[s];
          n(h, s, t) && (e.push(h), a.push(s));
        }
        return Oa(t, a), e;
      }
      function Ji(t) {
        return t == null ? t : df.call(t);
      }
      function bh(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = s) : (n = n == null ? 0 : Z(n), e = e === r ? s : Z(e)), un(t, n, e)) : [];
      }
      function Sh(t, n) {
        return dr(t, n);
      }
      function xh(t, n, e) {
        return Ei(t, n, W(e, 2));
      }
      function Ah(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var s = dr(t, n);
          if (s < e && gn(t[s], n))
            return s;
        }
        return -1;
      }
      function Ih(t, n) {
        return dr(t, n, !0);
      }
      function Th(t, n, e) {
        return Ei(t, n, W(e, 2), !0);
      }
      function Ph(t, n) {
        var e = t == null ? 0 : t.length;
        if (e) {
          var s = dr(t, n, !0) - 1;
          if (gn(t[s], n))
            return s;
        }
        return -1;
      }
      function Fh(t) {
        return t && t.length ? Na(t) : [];
      }
      function Eh(t, n) {
        return t && t.length ? Na(t, W(n, 2)) : [];
      }
      function Rh(t) {
        var n = t == null ? 0 : t.length;
        return n ? un(t, 1, n) : [];
      }
      function kh(t, n, e) {
        return t && t.length ? (n = e || n === r ? 1 : Z(n), un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Lh(t, n, e) {
        var s = t == null ? 0 : t.length;
        return s ? (n = e || n === r ? 1 : Z(n), n = s - n, un(t, n < 0 ? 0 : n, s)) : [];
      }
      function Oh(t, n) {
        return t && t.length ? _r(t, W(n, 3), !1, !0) : [];
      }
      function Dh(t, n) {
        return t && t.length ? _r(t, W(n, 3)) : [];
      }
      var Nh = Y(function(t) {
        return zn(Pt(t, 1, yt, !0));
      }), Wh = Y(function(t) {
        var n = ln(t);
        return yt(n) && (n = r), zn(Pt(t, 1, yt, !0), W(n, 2));
      }), Bh = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, zn(Pt(t, 1, yt, !0), r, n);
      });
      function Uh(t) {
        return t && t.length ? zn(t) : [];
      }
      function $h(t, n) {
        return t && t.length ? zn(t, W(n, 2)) : [];
      }
      function zh(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? zn(t, r, n) : [];
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
      function So(t, n) {
        if (!(t && t.length))
          return [];
        var e = Yi(t);
        return n == null ? e : gt(e, function(s) {
          return Zt(n, r, s);
        });
      }
      var Gh = Y(function(t, n) {
        return yt(t) ? Ee(t, n) : [];
      }), Hh = Y(function(t) {
        return ki(Nn(t, yt));
      }), qh = Y(function(t) {
        var n = ln(t);
        return yt(n) && (n = r), ki(Nn(t, yt), W(n, 2));
      }), Kh = Y(function(t) {
        var n = ln(t);
        return n = typeof n == "function" ? n : r, ki(Nn(t, yt), r, n);
      }), Zh = Y(Yi);
      function Jh(t, n) {
        return $a(t || [], n || [], Fe);
      }
      function Yh(t, n) {
        return $a(t || [], n || [], Le);
      }
      var Xh = Y(function(t) {
        var n = t.length, e = n > 1 ? t[n - 1] : r;
        return e = typeof e == "function" ? (t.pop(), e) : r, So(t, e);
      });
      function xo(t) {
        var n = u(t);
        return n.__chain__ = !0, n;
      }
      function Qh(t, n) {
        return n(t), t;
      }
      function xr(t, n) {
        return n(t);
      }
      var Vh = Fn(function(t) {
        var n = t.length, e = n ? t[0] : 0, s = this.__wrapped__, a = function(l) {
          return wi(l, t);
        };
        return n > 1 || this.__actions__.length || !(s instanceof j) || !En(e) ? this.thru(a) : (s = s.slice(e, +e + (n ? 1 : 0)), s.__actions__.push({
          func: xr,
          args: [a],
          thisArg: r
        }), new an(s, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(r), l;
        }));
      });
      function jh() {
        return xo(this);
      }
      function tp() {
        return new an(this.value(), this.__chain__);
      }
      function np() {
        this.__values__ === r && (this.__values__ = Bo(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function ep() {
        return this;
      }
      function rp(t) {
        for (var n, e = this; e instanceof fr; ) {
          var s = yo(e);
          s.__index__ = 0, s.__values__ = r, n ? a.__wrapped__ = s : n = s;
          var a = s;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = t, n;
      }
      function ip() {
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
      function sp() {
        return Ua(this.__wrapped__, this.__actions__);
      }
      var ap = vr(function(t, n, e) {
        st.call(t, e) ? ++t[e] : Tn(t, e, 1);
      });
      function op(t, n, e) {
        var s = q(t) ? js : Qf;
        return e && Ot(t, n, e) && (n = r), s(t, W(n, 3));
      }
      function up(t, n) {
        var e = q(t) ? Nn : ba;
        return e(t, W(n, 3));
      }
      var lp = Qa(mo), fp = Qa(wo);
      function cp(t, n) {
        return Pt(Ar(t, n), 1);
      }
      function hp(t, n) {
        return Pt(Ar(t, n), Sn);
      }
      function pp(t, n, e) {
        return e = e === r ? 1 : Z(e), Pt(Ar(t, n), e);
      }
      function Ao(t, n) {
        var e = q(t) ? rn : $n;
        return e(t, W(n, 3));
      }
      function Io(t, n) {
        var e = q(t) ? El : Ca;
        return e(t, W(n, 3));
      }
      var gp = vr(function(t, n, e) {
        st.call(t, e) ? t[e].push(n) : Tn(t, e, [n]);
      });
      function dp(t, n, e, s) {
        t = $t(t) ? t : ve(t), e = e && !s ? Z(e) : 0;
        var a = t.length;
        return e < 0 && (e = bt(a + e, 0)), Er(t) ? e <= a && t.indexOf(n, e) > -1 : !!a && se(t, n, e) > -1;
      }
      var _p = Y(function(t, n, e) {
        var s = -1, a = typeof n == "function", l = $t(t) ? S(t.length) : [];
        return $n(t, function(h) {
          l[++s] = a ? Zt(n, h, e) : Re(h, n, e);
        }), l;
      }), vp = vr(function(t, n, e) {
        Tn(t, e, n);
      });
      function Ar(t, n) {
        var e = q(t) ? gt : Pa;
        return e(t, W(n, 3));
      }
      function yp(t, n, e, s) {
        return t == null ? [] : (q(n) || (n = n == null ? [] : [n]), e = s ? r : e, q(e) || (e = e == null ? [] : [e]), ka(t, n, e));
      }
      var mp = vr(function(t, n, e) {
        t[e ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function wp(t, n, e) {
        var s = q(t) ? oi : ra, a = arguments.length < 3;
        return s(t, W(n, 4), e, a, $n);
      }
      function Mp(t, n, e) {
        var s = q(t) ? Rl : ra, a = arguments.length < 3;
        return s(t, W(n, 4), e, a, Ca);
      }
      function Cp(t, n) {
        var e = q(t) ? Nn : ba;
        return e(t, Pr(W(n, 3)));
      }
      function bp(t) {
        var n = q(t) ? ya : dc;
        return n(t);
      }
      function Sp(t, n, e) {
        (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n);
        var s = q(t) ? Kf : _c;
        return s(t, n);
      }
      function xp(t) {
        var n = q(t) ? Zf : yc;
        return n(t);
      }
      function Ap(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Er(t) ? oe(t) : t.length;
        var n = Et(t);
        return n == _t || n == pt ? t.size : Ai(t).length;
      }
      function Ip(t, n, e) {
        var s = q(t) ? ui : mc;
        return e && Ot(t, n, e) && (n = r), s(t, W(n, 3));
      }
      var Tp = Y(function(t, n) {
        if (t == null)
          return [];
        var e = n.length;
        return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), ka(t, Pt(n, 1), []);
      }), Ir = uf || function() {
        return Tt.Date.now();
      };
      function Pp(t, n) {
        if (typeof n != "function")
          throw new sn(d);
        return t = Z(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function To(t, n, e) {
        return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, It, r, r, r, r, n);
      }
      function Po(t, n) {
        var e;
        if (typeof n != "function")
          throw new sn(d);
        return t = Z(t), function() {
          return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
        };
      }
      var Xi = Y(function(t, n, e) {
        var s = N;
        if (e.length) {
          var a = Bn(e, de(Xi));
          s |= St;
        }
        return Pn(t, s, n, e, a);
      }), Fo = Y(function(t, n, e) {
        var s = N | K;
        if (e.length) {
          var a = Bn(e, de(Fo));
          s |= St;
        }
        return Pn(n, s, t, e, a);
      });
      function Eo(t, n, e) {
        n = e ? r : n;
        var s = Pn(t, Q, r, r, r, r, r, n);
        return s.placeholder = Eo.placeholder, s;
      }
      function Ro(t, n, e) {
        n = e ? r : n;
        var s = Pn(t, et, r, r, r, r, r, n);
        return s.placeholder = Ro.placeholder, s;
      }
      function ko(t, n, e) {
        var s, a, l, h, g, m, A = 0, I = !1, T = !1, E = !0;
        if (typeof t != "function")
          throw new sn(d);
        n = fn(n) || 0, dt(e) && (I = !!e.leading, T = "maxWait" in e, l = T ? bt(fn(e.maxWait) || 0, n) : l, E = "trailing" in e ? !!e.trailing : E);
        function D(mt) {
          var dn = s, Ln = a;
          return s = a = r, A = mt, h = t.apply(Ln, dn), h;
        }
        function B(mt) {
          return A = mt, g = Ne(V, n), I ? D(mt) : h;
        }
        function J(mt) {
          var dn = mt - m, Ln = mt - A, Vo = n - dn;
          return T ? Ft(Vo, l - Ln) : Vo;
        }
        function U(mt) {
          var dn = mt - m, Ln = mt - A;
          return m === r || dn >= n || dn < 0 || T && Ln >= l;
        }
        function V() {
          var mt = Ir();
          if (U(mt))
            return tt(mt);
          g = Ne(V, J(mt));
        }
        function tt(mt) {
          return g = r, E && s ? D(mt) : (s = a = r, h);
        }
        function Qt() {
          g !== r && za(g), A = 0, s = m = a = g = r;
        }
        function Dt() {
          return g === r ? h : tt(Ir());
        }
        function Vt() {
          var mt = Ir(), dn = U(mt);
          if (s = arguments, a = this, m = mt, dn) {
            if (g === r)
              return B(m);
            if (T)
              return za(g), g = Ne(V, n), D(m);
          }
          return g === r && (g = Ne(V, n)), h;
        }
        return Vt.cancel = Qt, Vt.flush = Dt, Vt;
      }
      var Fp = Y(function(t, n) {
        return Ma(t, 1, n);
      }), Ep = Y(function(t, n, e) {
        return Ma(t, fn(n) || 0, e);
      });
      function Rp(t) {
        return Pn(t, tn);
      }
      function Tr(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new sn(d);
        var e = function() {
          var s = arguments, a = n ? n.apply(this, s) : s[0], l = e.cache;
          if (l.has(a))
            return l.get(a);
          var h = t.apply(this, s);
          return e.cache = l.set(a, h) || l, h;
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
      function kp(t) {
        return Po(2, t);
      }
      var Lp = wc(function(t, n) {
        n = n.length == 1 && q(n[0]) ? gt(n[0], Jt(W())) : gt(Pt(n, 1), Jt(W()));
        var e = n.length;
        return Y(function(s) {
          for (var a = -1, l = Ft(s.length, e); ++a < l; )
            s[a] = n[a].call(this, s[a]);
          return Zt(t, this, s);
        });
      }), Qi = Y(function(t, n) {
        var e = Bn(n, de(Qi));
        return Pn(t, St, r, n, e);
      }), Lo = Y(function(t, n) {
        var e = Bn(n, de(Lo));
        return Pn(t, At, r, n, e);
      }), Op = Fn(function(t, n) {
        return Pn(t, Ht, r, r, r, n);
      });
      function Dp(t, n) {
        if (typeof t != "function")
          throw new sn(d);
        return n = n === r ? n : Z(n), Y(t, n);
      }
      function Np(t, n) {
        if (typeof t != "function")
          throw new sn(d);
        return n = n == null ? 0 : bt(Z(n), 0), Y(function(e) {
          var s = e[n], a = Hn(e, 0, n);
          return s && Wn(a, s), Zt(t, this, a);
        });
      }
      function Wp(t, n, e) {
        var s = !0, a = !0;
        if (typeof t != "function")
          throw new sn(d);
        return dt(e) && (s = "leading" in e ? !!e.leading : s, a = "trailing" in e ? !!e.trailing : a), ko(t, n, {
          leading: s,
          maxWait: n,
          trailing: a
        });
      }
      function Bp(t) {
        return To(t, 1);
      }
      function Up(t, n) {
        return Qi(Oi(n), t);
      }
      function $p() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return q(t) ? t : [t];
      }
      function zp(t) {
        return on(t, O);
      }
      function Gp(t, n) {
        return n = typeof n == "function" ? n : r, on(t, O, n);
      }
      function Hp(t) {
        return on(t, y | O);
      }
      function qp(t, n) {
        return n = typeof n == "function" ? n : r, on(t, y | O, n);
      }
      function Kp(t, n) {
        return n == null || wa(t, n, xt(n));
      }
      function gn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Zp = Mr(bi), Jp = Mr(function(t, n) {
        return t >= n;
      }), ee = Aa(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Aa : function(t) {
        return vt(t) && st.call(t, "callee") && !ha.call(t, "callee");
      }, q = S.isArray, Yp = Zs ? Jt(Zs) : rc;
      function $t(t) {
        return t != null && Fr(t.length) && !Rn(t);
      }
      function yt(t) {
        return vt(t) && $t(t);
      }
      function Xp(t) {
        return t === !0 || t === !1 || vt(t) && Lt(t) == lt;
      }
      var qn = ff || us, Qp = Js ? Jt(Js) : ic;
      function Vp(t) {
        return vt(t) && t.nodeType === 1 && !We(t);
      }
      function jp(t) {
        if (t == null)
          return !0;
        if ($t(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || qn(t) || _e(t) || ee(t)))
          return !t.length;
        var n = Et(t);
        if (n == _t || n == pt)
          return !t.size;
        if (De(t))
          return !Ai(t).length;
        for (var e in t)
          if (st.call(t, e))
            return !1;
        return !0;
      }
      function tg(t, n) {
        return ke(t, n);
      }
      function ng(t, n, e) {
        e = typeof e == "function" ? e : r;
        var s = e ? e(t, n) : r;
        return s === r ? ke(t, n, r, e) : !!s;
      }
      function Vi(t) {
        if (!vt(t))
          return !1;
        var n = Lt(t);
        return n == Rt || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
      }
      function eg(t) {
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
      function Fr(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vn;
      }
      function dt(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function vt(t) {
        return t != null && typeof t == "object";
      }
      var Do = Ys ? Jt(Ys) : ac;
      function rg(t, n) {
        return t === n || xi(t, n, zi(n));
      }
      function ig(t, n, e) {
        return e = typeof e == "function" ? e : r, xi(t, n, zi(n), e);
      }
      function sg(t) {
        return No(t) && t != +t;
      }
      function ag(t) {
        if (Gc(t))
          throw new H(p);
        return Ia(t);
      }
      function og(t) {
        return t === null;
      }
      function ug(t) {
        return t == null;
      }
      function No(t) {
        return typeof t == "number" || vt(t) && Lt(t) == kt;
      }
      function We(t) {
        if (!vt(t) || Lt(t) != Mt)
          return !1;
        var n = rr(t);
        if (n === null)
          return !0;
        var e = st.call(n, "constructor") && n.constructor;
        return typeof e == "function" && e instanceof e && je.call(e) == rf;
      }
      var ji = Xs ? Jt(Xs) : oc;
      function lg(t) {
        return Oo(t) && t >= -vn && t <= vn;
      }
      var Wo = Qs ? Jt(Qs) : uc;
      function Er(t) {
        return typeof t == "string" || !q(t) && vt(t) && Lt(t) == mn;
      }
      function Xt(t) {
        return typeof t == "symbol" || vt(t) && Lt(t) == He;
      }
      var _e = Vs ? Jt(Vs) : lc;
      function fg(t) {
        return t === r;
      }
      function cg(t) {
        return vt(t) && Et(t) == Ce;
      }
      function hg(t) {
        return vt(t) && Lt(t) == Iu;
      }
      var pg = Mr(Ii), gg = Mr(function(t, n) {
        return t <= n;
      });
      function Bo(t) {
        if (!t)
          return [];
        if ($t(t))
          return Er(t) ? hn(t) : Ut(t);
        if (xe && t[xe])
          return ql(t[xe]());
        var n = Et(t), e = n == _t ? gi : n == pt ? Xe : ve;
        return e(t);
      }
      function kn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = fn(t), t === Sn || t === -Sn) {
          var n = t < 0 ? -1 : 1;
          return n * Ge;
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
          return xn;
        if (dt(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = dt(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = ia(t);
        var e = Ju.test(t);
        return e || Xu.test(t) ? Tl(t.slice(2), e ? 2 : 8) : Zu.test(t) ? xn : +t;
      }
      function $o(t) {
        return Mn(t, zt(t));
      }
      function dg(t) {
        return t ? Vn(Z(t), -vn, vn) : t === 0 ? t : 0;
      }
      function it(t) {
        return t == null ? "" : Yt(t);
      }
      var _g = pe(function(t, n) {
        if (De(n) || $t(n)) {
          Mn(n, xt(n), t);
          return;
        }
        for (var e in n)
          st.call(n, e) && Fe(t, e, n[e]);
      }), zo = pe(function(t, n) {
        Mn(n, zt(n), t);
      }), Rr = pe(function(t, n, e, s) {
        Mn(n, zt(n), t, s);
      }), vg = pe(function(t, n, e, s) {
        Mn(n, xt(n), t, s);
      }), yg = Fn(wi);
      function mg(t, n) {
        var e = he(t);
        return n == null ? e : ma(e, n);
      }
      var wg = Y(function(t, n) {
        t = at(t);
        var e = -1, s = n.length, a = s > 2 ? n[2] : r;
        for (a && Ot(n[0], n[1], a) && (s = 1); ++e < s; )
          for (var l = n[e], h = zt(l), g = -1, m = h.length; ++g < m; ) {
            var A = h[g], I = t[A];
            (I === r || gn(I, le[A]) && !st.call(t, A)) && (t[A] = l[A]);
          }
        return t;
      }), Mg = Y(function(t) {
        return t.push(r, io), Zt(Go, r, t);
      });
      function Cg(t, n) {
        return ta(t, W(n, 3), wn);
      }
      function bg(t, n) {
        return ta(t, W(n, 3), Ci);
      }
      function Sg(t, n) {
        return t == null ? t : Mi(t, W(n, 3), zt);
      }
      function xg(t, n) {
        return t == null ? t : Sa(t, W(n, 3), zt);
      }
      function Ag(t, n) {
        return t && wn(t, W(n, 3));
      }
      function Ig(t, n) {
        return t && Ci(t, W(n, 3));
      }
      function Tg(t) {
        return t == null ? [] : pr(t, xt(t));
      }
      function Pg(t) {
        return t == null ? [] : pr(t, zt(t));
      }
      function ts(t, n, e) {
        var s = t == null ? r : jn(t, n);
        return s === r ? e : s;
      }
      function Fg(t, n) {
        return t != null && oo(t, n, jf);
      }
      function ns(t, n) {
        return t != null && oo(t, n, tc);
      }
      var Eg = ja(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = tr.call(n)), t[n] = e;
      }, rs(Gt)), Rg = ja(function(t, n, e) {
        n != null && typeof n.toString != "function" && (n = tr.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
      }, W), kg = Y(Re);
      function xt(t) {
        return $t(t) ? va(t) : Ai(t);
      }
      function zt(t) {
        return $t(t) ? va(t, !0) : fc(t);
      }
      function Lg(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(s, a, l) {
          Tn(e, n(s, a, l), s);
        }), e;
      }
      function Og(t, n) {
        var e = {};
        return n = W(n, 3), wn(t, function(s, a, l) {
          Tn(e, a, n(s, a, l));
        }), e;
      }
      var Dg = pe(function(t, n, e) {
        gr(t, n, e);
      }), Go = pe(function(t, n, e, s) {
        gr(t, n, e, s);
      }), Ng = Fn(function(t, n) {
        var e = {};
        if (t == null)
          return e;
        var s = !1;
        n = gt(n, function(l) {
          return l = Gn(l, t), s || (s = l.length > 1), l;
        }), Mn(t, Ui(t), e), s && (e = on(e, y | F | O, Ec));
        for (var a = n.length; a--; )
          Ri(e, n[a]);
        return e;
      });
      function Wg(t, n) {
        return Ho(t, Pr(W(n)));
      }
      var Bg = Fn(function(t, n) {
        return t == null ? {} : hc(t, n);
      });
      function Ho(t, n) {
        if (t == null)
          return {};
        var e = gt(Ui(t), function(s) {
          return [s];
        });
        return n = W(n), La(t, e, function(s, a) {
          return n(s, a[0]);
        });
      }
      function Ug(t, n, e) {
        n = Gn(n, t);
        var s = -1, a = n.length;
        for (a || (a = 1, t = r); ++s < a; ) {
          var l = t == null ? r : t[Cn(n[s])];
          l === r && (s = a, l = e), t = Rn(l) ? l.call(t) : l;
        }
        return t;
      }
      function $g(t, n, e) {
        return t == null ? t : Le(t, n, e);
      }
      function zg(t, n, e, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : Le(t, n, e, s);
      }
      var qo = eo(xt), Ko = eo(zt);
      function Gg(t, n, e) {
        var s = q(t), a = s || qn(t) || _e(t);
        if (n = W(n, 4), e == null) {
          var l = t && t.constructor;
          a ? e = s ? new l() : [] : dt(t) ? e = Rn(l) ? he(rr(t)) : {} : e = {};
        }
        return (a ? rn : wn)(t, function(h, g, m) {
          return n(e, h, g, m);
        }), e;
      }
      function Hg(t, n) {
        return t == null ? !0 : Ri(t, n);
      }
      function qg(t, n, e) {
        return t == null ? t : Ba(t, n, Oi(e));
      }
      function Kg(t, n, e, s) {
        return s = typeof s == "function" ? s : r, t == null ? t : Ba(t, n, Oi(e), s);
      }
      function ve(t) {
        return t == null ? [] : pi(t, xt(t));
      }
      function Zg(t) {
        return t == null ? [] : pi(t, zt(t));
      }
      function Jg(t, n, e) {
        return e === r && (e = n, n = r), e !== r && (e = fn(e), e = e === e ? e : 0), n !== r && (n = fn(n), n = n === n ? n : 0), Vn(fn(t), n, e);
      }
      function Yg(t, n, e) {
        return n = kn(n), e === r ? (e = n, n = 0) : e = kn(e), t = fn(t), nc(t, n, e);
      }
      function Xg(t, n, e) {
        if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = kn(t), n === r ? (n = t, t = 0) : n = kn(n)), t > n) {
          var s = t;
          t = n, n = s;
        }
        if (e || t % 1 || n % 1) {
          var a = da();
          return Ft(t + a * (n - t + Il("1e-" + ((a + "").length - 1))), n);
        }
        return Pi(t, n);
      }
      var Qg = ge(function(t, n, e) {
        return n = n.toLowerCase(), t + (e ? Zo(n) : n);
      });
      function Zo(t) {
        return es(it(t).toLowerCase());
      }
      function Jo(t) {
        return t = it(t), t && t.replace(Vu, Ul).replace(vl, "");
      }
      function Vg(t, n, e) {
        t = it(t), n = Yt(n);
        var s = t.length;
        e = e === r ? s : Vn(Z(e), 0, s);
        var a = e;
        return e -= n.length, e >= 0 && t.slice(e, a) == n;
      }
      function jg(t) {
        return t = it(t), t && Ru.test(t) ? t.replace(Ss, $l) : t;
      }
      function td(t) {
        return t = it(t), t && Wu.test(t) ? t.replace(Qr, "\\$&") : t;
      }
      var nd = ge(function(t, n, e) {
        return t + (e ? "-" : "") + n.toLowerCase();
      }), ed = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toLowerCase();
      }), rd = Xa("toLowerCase");
      function id(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        if (!n || s >= n)
          return t;
        var a = (n - s) / 2;
        return wr(or(a), e) + t + wr(ar(a), e);
      }
      function sd(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        return n && s < n ? t + wr(n - s, e) : t;
      }
      function ad(t, n, e) {
        t = it(t), n = Z(n);
        var s = n ? oe(t) : 0;
        return n && s < n ? wr(n - s, e) + t : t;
      }
      function od(t, n, e) {
        return e || n == null ? n = 0 : n && (n = +n), gf(it(t).replace(Vr, ""), n || 0);
      }
      function ud(t, n, e) {
        return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Z(n), Fi(it(t), n);
      }
      function ld() {
        var t = arguments, n = it(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var fd = ge(function(t, n, e) {
        return t + (e ? "_" : "") + n.toLowerCase();
      });
      function cd(t, n, e) {
        return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = it(t), t && (typeof n == "string" || n != null && !ji(n)) && (n = Yt(n), !n && ae(t)) ? Hn(hn(t), 0, e) : t.split(n, e)) : [];
      }
      var hd = ge(function(t, n, e) {
        return t + (e ? " " : "") + es(n);
      });
      function pd(t, n, e) {
        return t = it(t), e = e == null ? 0 : Vn(Z(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
      }
      function gd(t, n, e) {
        var s = u.templateSettings;
        e && Ot(t, n, e) && (n = r), t = it(t), n = Rr({}, n, s, ro);
        var a = Rr({}, n.imports, s.imports, ro), l = xt(a), h = pi(a, l), g, m, A = 0, I = n.interpolate || qe, T = "__p += '", E = di(
          (n.escape || qe).source + "|" + I.source + "|" + (I === xs ? Ku : qe).source + "|" + (n.evaluate || qe).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Cl + "]") + `
`;
        t.replace(E, function(U, V, tt, Qt, Dt, Vt) {
          return tt || (tt = Qt), T += t.slice(A, Vt).replace(ju, zl), V && (g = !0, T += `' +
__e(` + V + `) +
'`), Dt && (m = !0, T += `';
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
        else if (Hu.test(B))
          throw new H(v);
        T = (m ? T.replace(Tu, "") : T).replace(Pu, "$1").replace(Fu, "$1;"), T = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (m ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
        var J = Xo(function() {
          return rt(l, D + "return " + T).apply(r, h);
        });
        if (J.source = T, Vi(J))
          throw J;
        return J;
      }
      function dd(t) {
        return it(t).toLowerCase();
      }
      function _d(t) {
        return it(t).toUpperCase();
      }
      function vd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return ia(t);
        if (!t || !(n = Yt(n)))
          return t;
        var s = hn(t), a = hn(n), l = sa(s, a), h = aa(s, a) + 1;
        return Hn(s, l, h).join("");
      }
      function yd(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.slice(0, ua(t) + 1);
        if (!t || !(n = Yt(n)))
          return t;
        var s = hn(t), a = aa(s, hn(n)) + 1;
        return Hn(s, 0, a).join("");
      }
      function md(t, n, e) {
        if (t = it(t), t && (e || n === r))
          return t.replace(Vr, "");
        if (!t || !(n = Yt(n)))
          return t;
        var s = hn(t), a = sa(s, hn(n));
        return Hn(s, a).join("");
      }
      function wd(t, n) {
        var e = qt, s = we;
        if (dt(n)) {
          var a = "separator" in n ? n.separator : a;
          e = "length" in n ? Z(n.length) : e, s = "omission" in n ? Yt(n.omission) : s;
        }
        t = it(t);
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
        var m = h ? Hn(h, 0, g).join("") : t.slice(0, g);
        if (a === r)
          return m + s;
        if (h && (g += m.length - g), ji(a)) {
          if (t.slice(g).search(a)) {
            var A, I = m;
            for (a.global || (a = di(a.source, it(As.exec(a)) + "g")), a.lastIndex = 0; A = a.exec(I); )
              var T = A.index;
            m = m.slice(0, T === r ? g : T);
          }
        } else if (t.indexOf(Yt(a), g) != g) {
          var E = m.lastIndexOf(a);
          E > -1 && (m = m.slice(0, E));
        }
        return m + s;
      }
      function Md(t) {
        return t = it(t), t && Eu.test(t) ? t.replace(bs, Yl) : t;
      }
      var Cd = ge(function(t, n, e) {
        return t + (e ? " " : "") + n.toUpperCase();
      }), es = Xa("toUpperCase");
      function Yo(t, n, e) {
        return t = it(t), n = e ? r : n, n === r ? Hl(t) ? Vl(t) : Ol(t) : t.match(n) || [];
      }
      var Xo = Y(function(t, n) {
        try {
          return Zt(t, r, n);
        } catch (e) {
          return Vi(e) ? e : new H(e);
        }
      }), bd = Fn(function(t, n) {
        return rn(n, function(e) {
          e = Cn(e), Tn(t, e, Xi(t[e], t));
        }), t;
      });
      function Sd(t) {
        var n = t == null ? 0 : t.length, e = W();
        return t = n ? gt(t, function(s) {
          if (typeof s[1] != "function")
            throw new sn(d);
          return [e(s[0]), s[1]];
        }) : [], Y(function(s) {
          for (var a = -1; ++a < n; ) {
            var l = t[a];
            if (Zt(l[0], this, s))
              return Zt(l[1], this, s);
          }
        });
      }
      function xd(t) {
        return Xf(on(t, y));
      }
      function rs(t) {
        return function() {
          return t;
        };
      }
      function Ad(t, n) {
        return t == null || t !== t ? n : t;
      }
      var Id = Va(), Td = Va(!0);
      function Gt(t) {
        return t;
      }
      function is(t) {
        return Ta(typeof t == "function" ? t : on(t, y));
      }
      function Pd(t) {
        return Fa(on(t, y));
      }
      function Fd(t, n) {
        return Ea(t, on(n, y));
      }
      var Ed = Y(function(t, n) {
        return function(e) {
          return Re(e, t, n);
        };
      }), Rd = Y(function(t, n) {
        return function(e) {
          return Re(t, e, n);
        };
      });
      function ss(t, n, e) {
        var s = xt(n), a = pr(n, s);
        e == null && !(dt(n) && (a.length || !s.length)) && (e = n, n = t, t = this, a = pr(n, xt(n)));
        var l = !(dt(e) && "chain" in e) || !!e.chain, h = Rn(t);
        return rn(a, function(g) {
          var m = n[g];
          t[g] = m, h && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (l || A) {
              var I = t(this.__wrapped__), T = I.__actions__ = Ut(this.__actions__);
              return T.push({ func: m, args: arguments, thisArg: t }), I.__chain__ = A, I;
            }
            return m.apply(t, Wn([this.value()], arguments));
          });
        }), t;
      }
      function kd() {
        return Tt._ === this && (Tt._ = sf), this;
      }
      function as() {
      }
      function Ld(t) {
        return t = Z(t), Y(function(n) {
          return Ra(n, t);
        });
      }
      var Od = Ni(gt), Dd = Ni(js), Nd = Ni(ui);
      function Qo(t) {
        return Hi(t) ? li(Cn(t)) : pc(t);
      }
      function Wd(t) {
        return function(n) {
          return t == null ? r : jn(t, n);
        };
      }
      var Bd = to(), Ud = to(!0);
      function os() {
        return [];
      }
      function us() {
        return !1;
      }
      function $d() {
        return {};
      }
      function zd() {
        return "";
      }
      function Gd() {
        return !0;
      }
      function Hd(t, n) {
        if (t = Z(t), t < 1 || t > vn)
          return [];
        var e = k, s = Ft(t, k);
        n = W(n), t -= k;
        for (var a = hi(s, n); ++e < t; )
          n(e);
        return a;
      }
      function qd(t) {
        return q(t) ? gt(t, Cn) : Xt(t) ? [t] : Ut(vo(it(t)));
      }
      function Kd(t) {
        var n = ++ef;
        return it(t) + n;
      }
      var Zd = mr(function(t, n) {
        return t + n;
      }, 0), Jd = Wi("ceil"), Yd = mr(function(t, n) {
        return t / n;
      }, 1), Xd = Wi("floor");
      function Qd(t) {
        return t && t.length ? hr(t, Gt, bi) : r;
      }
      function Vd(t, n) {
        return t && t.length ? hr(t, W(n, 2), bi) : r;
      }
      function jd(t) {
        return ea(t, Gt);
      }
      function t0(t, n) {
        return ea(t, W(n, 2));
      }
      function n0(t) {
        return t && t.length ? hr(t, Gt, Ii) : r;
      }
      function e0(t, n) {
        return t && t.length ? hr(t, W(n, 2), Ii) : r;
      }
      var r0 = mr(function(t, n) {
        return t * n;
      }, 1), i0 = Wi("round"), s0 = mr(function(t, n) {
        return t - n;
      }, 0);
      function a0(t) {
        return t && t.length ? ci(t, Gt) : 0;
      }
      function o0(t, n) {
        return t && t.length ? ci(t, W(n, 2)) : 0;
      }
      return u.after = Pp, u.ary = To, u.assign = _g, u.assignIn = zo, u.assignInWith = Rr, u.assignWith = vg, u.at = yg, u.before = Po, u.bind = Xi, u.bindAll = bd, u.bindKey = Fo, u.castArray = $p, u.chain = xo, u.chunk = Xc, u.compact = Qc, u.concat = Vc, u.cond = Sd, u.conforms = xd, u.constant = rs, u.countBy = ap, u.create = mg, u.curry = Eo, u.curryRight = Ro, u.debounce = ko, u.defaults = wg, u.defaultsDeep = Mg, u.defer = Fp, u.delay = Ep, u.difference = jc, u.differenceBy = th, u.differenceWith = nh, u.drop = eh, u.dropRight = rh, u.dropRightWhile = ih, u.dropWhile = sh, u.fill = ah, u.filter = up, u.flatMap = cp, u.flatMapDeep = hp, u.flatMapDepth = pp, u.flatten = Mo, u.flattenDeep = oh, u.flattenDepth = uh, u.flip = Rp, u.flow = Id, u.flowRight = Td, u.fromPairs = lh, u.functions = Tg, u.functionsIn = Pg, u.groupBy = gp, u.initial = ch, u.intersection = hh, u.intersectionBy = ph, u.intersectionWith = gh, u.invert = Eg, u.invertBy = Rg, u.invokeMap = _p, u.iteratee = is, u.keyBy = vp, u.keys = xt, u.keysIn = zt, u.map = Ar, u.mapKeys = Lg, u.mapValues = Og, u.matches = Pd, u.matchesProperty = Fd, u.memoize = Tr, u.merge = Dg, u.mergeWith = Go, u.method = Ed, u.methodOf = Rd, u.mixin = ss, u.negate = Pr, u.nthArg = Ld, u.omit = Ng, u.omitBy = Wg, u.once = kp, u.orderBy = yp, u.over = Od, u.overArgs = Lp, u.overEvery = Dd, u.overSome = Nd, u.partial = Qi, u.partialRight = Lo, u.partition = mp, u.pick = Bg, u.pickBy = Ho, u.property = Qo, u.propertyOf = Wd, u.pull = yh, u.pullAll = bo, u.pullAllBy = mh, u.pullAllWith = wh, u.pullAt = Mh, u.range = Bd, u.rangeRight = Ud, u.rearg = Op, u.reject = Cp, u.remove = Ch, u.rest = Dp, u.reverse = Ji, u.sampleSize = Sp, u.set = $g, u.setWith = zg, u.shuffle = xp, u.slice = bh, u.sortBy = Tp, u.sortedUniq = Fh, u.sortedUniqBy = Eh, u.split = cd, u.spread = Np, u.tail = Rh, u.take = kh, u.takeRight = Lh, u.takeRightWhile = Oh, u.takeWhile = Dh, u.tap = Qh, u.throttle = Wp, u.thru = xr, u.toArray = Bo, u.toPairs = qo, u.toPairsIn = Ko, u.toPath = qd, u.toPlainObject = $o, u.transform = Gg, u.unary = Bp, u.union = Nh, u.unionBy = Wh, u.unionWith = Bh, u.uniq = Uh, u.uniqBy = $h, u.uniqWith = zh, u.unset = Hg, u.unzip = Yi, u.unzipWith = So, u.update = qg, u.updateWith = Kg, u.values = ve, u.valuesIn = Zg, u.without = Gh, u.words = Yo, u.wrap = Up, u.xor = Hh, u.xorBy = qh, u.xorWith = Kh, u.zip = Zh, u.zipObject = Jh, u.zipObjectDeep = Yh, u.zipWith = Xh, u.entries = qo, u.entriesIn = Ko, u.extend = zo, u.extendWith = Rr, ss(u, u), u.add = Zd, u.attempt = Xo, u.camelCase = Qg, u.capitalize = Zo, u.ceil = Jd, u.clamp = Jg, u.clone = zp, u.cloneDeep = Hp, u.cloneDeepWith = qp, u.cloneWith = Gp, u.conformsTo = Kp, u.deburr = Jo, u.defaultTo = Ad, u.divide = Yd, u.endsWith = Vg, u.eq = gn, u.escape = jg, u.escapeRegExp = td, u.every = op, u.find = lp, u.findIndex = mo, u.findKey = Cg, u.findLast = fp, u.findLastIndex = wo, u.findLastKey = bg, u.floor = Xd, u.forEach = Ao, u.forEachRight = Io, u.forIn = Sg, u.forInRight = xg, u.forOwn = Ag, u.forOwnRight = Ig, u.get = ts, u.gt = Zp, u.gte = Jp, u.has = Fg, u.hasIn = ns, u.head = Co, u.identity = Gt, u.includes = dp, u.indexOf = fh, u.inRange = Yg, u.invoke = kg, u.isArguments = ee, u.isArray = q, u.isArrayBuffer = Yp, u.isArrayLike = $t, u.isArrayLikeObject = yt, u.isBoolean = Xp, u.isBuffer = qn, u.isDate = Qp, u.isElement = Vp, u.isEmpty = jp, u.isEqual = tg, u.isEqualWith = ng, u.isError = Vi, u.isFinite = eg, u.isFunction = Rn, u.isInteger = Oo, u.isLength = Fr, u.isMap = Do, u.isMatch = rg, u.isMatchWith = ig, u.isNaN = sg, u.isNative = ag, u.isNil = ug, u.isNull = og, u.isNumber = No, u.isObject = dt, u.isObjectLike = vt, u.isPlainObject = We, u.isRegExp = ji, u.isSafeInteger = lg, u.isSet = Wo, u.isString = Er, u.isSymbol = Xt, u.isTypedArray = _e, u.isUndefined = fg, u.isWeakMap = cg, u.isWeakSet = hg, u.join = dh, u.kebabCase = nd, u.last = ln, u.lastIndexOf = _h, u.lowerCase = ed, u.lowerFirst = rd, u.lt = pg, u.lte = gg, u.max = Qd, u.maxBy = Vd, u.mean = jd, u.meanBy = t0, u.min = n0, u.minBy = e0, u.stubArray = os, u.stubFalse = us, u.stubObject = $d, u.stubString = zd, u.stubTrue = Gd, u.multiply = r0, u.nth = vh, u.noConflict = kd, u.noop = as, u.now = Ir, u.pad = id, u.padEnd = sd, u.padStart = ad, u.parseInt = od, u.random = Xg, u.reduce = wp, u.reduceRight = Mp, u.repeat = ud, u.replace = ld, u.result = Ug, u.round = i0, u.runInContext = _, u.sample = bp, u.size = Ap, u.snakeCase = fd, u.some = Ip, u.sortedIndex = Sh, u.sortedIndexBy = xh, u.sortedIndexOf = Ah, u.sortedLastIndex = Ih, u.sortedLastIndexBy = Th, u.sortedLastIndexOf = Ph, u.startCase = hd, u.startsWith = pd, u.subtract = s0, u.sum = a0, u.sumBy = o0, u.template = gd, u.times = Hd, u.toFinite = kn, u.toInteger = Z, u.toLength = Uo, u.toLower = dd, u.toNumber = fn, u.toSafeInteger = dg, u.toString = it, u.toUpper = _d, u.trim = vd, u.trimEnd = yd, u.trimStart = md, u.truncate = wd, u.unescape = Md, u.uniqueId = Kd, u.upperCase = Cd, u.upperFirst = es, u.each = Ao, u.eachRight = Io, u.first = Co, ss(u, function() {
        var t = {};
        return wn(u, function(n, e) {
          st.call(u.prototype, e) || (t[e] = n);
        }), t;
      }(), { chain: !1 }), u.VERSION = o, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), rn(["drop", "take"], function(t, n) {
        j.prototype[t] = function(e) {
          e = e === r ? 1 : bt(Z(e), 0);
          var s = this.__filtered__ && !n ? new j(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Ft(e, s.__takeCount__) : s.__views__.push({
            size: Ft(e, k),
            type: t + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, j.prototype[t + "Right"] = function(e) {
          return this.reverse()[t](e).reverse();
        };
      }), rn(["filter", "map", "takeWhile"], function(t, n) {
        var e = n + 1, s = e == Me || e == $r;
        j.prototype[t] = function(a) {
          var l = this.clone();
          return l.__iteratees__.push({
            iteratee: W(a, 3),
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
      }, j.prototype.invokeMap = Y(function(t, n) {
        return typeof t == "function" ? new j(this) : this.map(function(e) {
          return Re(e, t, n);
        });
      }), j.prototype.reject = function(t) {
        return this.filter(Pr(W(t)));
      }, j.prototype.slice = function(t, n) {
        t = Z(t);
        var e = this;
        return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = Z(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
      }, j.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, j.prototype.toArray = function() {
        return this.take(k);
      }, wn(j.prototype, function(t, n) {
        var e = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), a = u[s ? "take" + (n == "last" ? "Right" : "") : n], l = s || /^find/.test(n);
        a && (u.prototype[n] = function() {
          var h = this.__wrapped__, g = s ? [1] : arguments, m = h instanceof j, A = g[0], I = m || q(h), T = function(V) {
            var tt = a.apply(u, Wn([V], g));
            return s && E ? tt[0] : tt;
          };
          I && e && typeof A == "function" && A.length != 1 && (m = I = !1);
          var E = this.__chain__, D = !!this.__actions__.length, B = l && !E, J = m && !D;
          if (!l && I) {
            h = J ? h : new j(this);
            var U = t.apply(h, g);
            return U.__actions__.push({ func: xr, args: [T], thisArg: r }), new an(U, E);
          }
          return B && J ? t.apply(this, g) : (U = this.thru(T), B ? s ? U.value()[0] : U.value() : U);
        });
      }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Qe[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
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
      }), wn(j.prototype, function(t, n) {
        var e = u[n];
        if (e) {
          var s = e.name + "";
          st.call(ce, s) || (ce[s] = []), ce[s].push({ name: n, func: e });
        }
      }), ce[yr(r, K).name] = [{
        name: "wrapper",
        func: r
      }], j.prototype.clone = Mf, j.prototype.reverse = Cf, j.prototype.value = bf, u.prototype.at = Vh, u.prototype.chain = jh, u.prototype.commit = tp, u.prototype.next = np, u.prototype.plant = rp, u.prototype.reverse = ip, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = sp, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = ep), u;
    }, ue = jl();
    Jn ? ((Jn.exports = ue)._ = ue, ii._ = ue) : Tt._ = ue;
  }).call(Be);
})(Dr, Dr.exports);
var ou = Dr.exports;
const z = /* @__PURE__ */ au(ou);
var gs = { exports: {} }, ls, jo;
function f0() {
  if (jo) return ls;
  jo = 1;
  var c = 1e3, i = c * 60, r = i * 60, o = r * 24, f = o * 7, p = o * 365.25;
  ls = function(b, y) {
    y = y || {};
    var F = typeof b;
    if (F === "string" && b.length > 0)
      return d(b);
    if (F === "number" && isFinite(b))
      return y.long ? w(b) : v(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function d(b) {
    if (b = String(b), !(b.length > 100)) {
      var y = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (y) {
        var F = parseFloat(y[1]), O = (y[2] || "ms").toLowerCase();
        switch (O) {
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
            return F * o;
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
  function v(b) {
    var y = Math.abs(b);
    return y >= o ? Math.round(b / o) + "d" : y >= r ? Math.round(b / r) + "h" : y >= i ? Math.round(b / i) + "m" : y >= c ? Math.round(b / c) + "s" : b + "ms";
  }
  function w(b) {
    var y = Math.abs(b);
    return y >= o ? C(b, y, o, "day") : y >= r ? C(b, y, r, "hour") : y >= i ? C(b, y, i, "minute") : y >= c ? C(b, y, c, "second") : b + " ms";
  }
  function C(b, y, F, O) {
    var R = y >= F * 1.5;
    return Math.round(b / F) + " " + O + (R ? "s" : "");
  }
  return ls;
}
function c0(c) {
  r.debug = r, r.default = r, r.coerce = w, r.disable = p, r.enable = f, r.enabled = d, r.humanize = f0(), r.destroy = C, Object.keys(c).forEach((b) => {
    r[b] = c[b];
  }), r.names = [], r.skips = [], r.formatters = {};
  function i(b) {
    let y = 0;
    for (let F = 0; F < b.length; F++)
      y = (y << 5) - y + b.charCodeAt(F), y |= 0;
    return r.colors[Math.abs(y) % r.colors.length];
  }
  r.selectColor = i;
  function r(b) {
    let y, F = null, O, R;
    function P(...N) {
      if (!P.enabled)
        return;
      const K = P, X = Number(/* @__PURE__ */ new Date()), Q = X - (y || X);
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
    return P.namespace = b, P.useColors = r.useColors(), P.color = r.selectColor(b), P.extend = o, P.destroy = r.destroy, Object.defineProperty(P, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => F !== null ? F : (O !== r.namespaces && (O = r.namespaces, R = r.enabled(b)), R),
      set: (N) => {
        F = N;
      }
    }), typeof r.init == "function" && r.init(P), P;
  }
  function o(b, y) {
    const F = r(this.namespace + (typeof y > "u" ? ":" : y) + b);
    return F.log = this.log, F;
  }
  function f(b) {
    r.save(b), r.namespaces = b, r.names = [], r.skips = [];
    let y;
    const F = (typeof b == "string" ? b : "").split(/[\s,]+/), O = F.length;
    for (y = 0; y < O; y++)
      F[y] && (b = F[y].replace(/\*/g, ".*?"), b[0] === "-" ? r.skips.push(new RegExp("^" + b.slice(1) + "$")) : r.names.push(new RegExp("^" + b + "$")));
  }
  function p() {
    const b = [
      ...r.names.map(v),
      ...r.skips.map(v).map((y) => "-" + y)
    ].join(",");
    return r.enable(""), b;
  }
  function d(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let y, F;
    for (y = 0, F = r.skips.length; y < F; y++)
      if (r.skips[y].test(b))
        return !1;
    for (y = 0, F = r.names.length; y < F; y++)
      if (r.names[y].test(b))
        return !0;
    return !1;
  }
  function v(b) {
    return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function w(b) {
    return b instanceof Error ? b.stack || b.message : b;
  }
  function C() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var h0 = c0;
(function(c, i) {
  i.formatArgs = o, i.save = f, i.load = p, i.useColors = r, i.storage = d(), i.destroy = /* @__PURE__ */ (() => {
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
  function o(w) {
    if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + c.exports.humanize(this.diff), !this.useColors)
      return;
    const C = "color: " + this.color;
    w.splice(1, 0, C, "color: inherit");
    let b = 0, y = 0;
    w[0].replace(/%[a-zA-Z%]/g, (F) => {
      F !== "%%" && (b++, F === "%c" && (y = b));
    }), w.splice(y, 0, C);
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
  c.exports = h0(i);
  const { formatters: v } = c.exports;
  v.j = function(w) {
    try {
      return JSON.stringify(w);
    } catch (C) {
      return "[UnexpectedJSONParseError]: " + C.message;
    }
  };
})(gs, gs.exports);
var p0 = gs.exports;
const g0 = /* @__PURE__ */ au(p0), fs = {};
function Zn(c) {
  if (!fs[c]) {
    const i = g0("ultraPacer:core");
    i(`loading debug for namespace "${c}"`), fs[c] = i.extend(c);
  }
  return fs[c];
}
function Nt(c, i = 0) {
  return Math.round(c * 10 ** i) / 10 ** i;
}
function ye(c, i, r, o, f) {
  return r + (f - c) / (i - c) * (o - r);
}
function uu(c, i, r) {
  let o = 0, f = 0;
  const p = [];
  for (o = 0; o < r.length; o++)
    if (r[o] < c[f])
      p.push(i[f]);
    else {
      for (; f < c.length - 1 && c[f + 1] <= r[o]; )
        f++;
      f === c.length - 1 || r[o] === c[f] ? p.push(i[f]) : p.push(ye(c[f], c[f + 1], i[f], i[f + 1], r[o]));
    }
  return p;
}
function lu(c) {
  let i, r, o, f, p = 0, d = 0, v = 0, w = 0, C = 0;
  for (i = 0; i < c.length; i++)
    r = c[i][0], o = c[i][1], f = c[i][2], C += f, p += f * r, v += f * (r * r), d += f * o, w += f * (r * o);
  const b = (d * v - p * w) / (C * v - p * p);
  return [(C * w - p * d) / (C * v - p * p), b];
}
function fu(c, i, r, o) {
  let f = 0, p = 0;
  const d = [];
  return r.forEach((v) => {
    for (; c[f] < v - o; )
      f++;
    for (f > 0 && c[f] >= v && f--; p < c.length - 1 && c[p + 1] <= v + o; )
      p++;
    p < c.length - 1 && c[p] <= v && p++;
    const w = Math.max(o, Math.abs(v - c[f]) + 1e-3, Math.abs(v - c[p]) + 1e-3), C = [];
    let b = 0;
    for (let y = f; y <= p; y++)
      b = (1 - (Math.abs(v - c[y]) / w) ** 3) ** 3, C.push([c[y], i[y], b]);
    d.push(lu(C));
  }), d;
}
function ms(c, i, r) {
  return Nt(c, r) < Nt(i, r);
}
function d0(c, i, r) {
  return Nt(c, r) > Nt(i, r);
}
function me(c, i, r) {
  return Nt(c, r) <= Nt(i, r);
}
function Br(c, i, r) {
  return Nt(c, r) >= Nt(i, r);
}
function Ue(c, i, r) {
  return Nt(c, r) === Nt(i, r);
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: ye,
  interpArray: uu,
  linearRegression: lu,
  req: Ue,
  rgt: d0,
  rgte: Br,
  rlt: ms,
  rlte: me,
  round: Nt,
  wlslr: fu
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
class tu {
  constructor(i, r, o) {
    M(this, "factors", new bn());
    M(this, "point");
    M(this, "course");
    M(this, "loop");
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
const _0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function cu(c, i) {
  (i === null || typeof i > "u") && (i = _0);
  let r = 0;
  return Array.isArray(c) ? r = (c[0] + c[1]) / 2 : r = c, r <= i.th ? 1 : (1 + i.rate / i.span / 100) ** (r - i.th);
}
const nu = {
  baseline: 0,
  terrainScale: 1
};
function v0(c, i) {
  function r(o) {
    return o < c.noon ? o + 86400 : o;
  }
  return i >= c.sunrise && i <= c.sunset ? 0 : !isNaN(c.dawn) && !isNaN(c.dusk) && (i <= c.dawn || i >= c.dusk) ? 1 : r(i) >= r(c.nadir) ? ye(
    r(isNaN(c.dawn) ? c.nadir : c.dawn),
    r(c.sunrise),
    1,
    0,
    r(i)
  ) : ye(
    r(c.sunset),
    r(isNaN(c.dusk) ? c.nadir : c.dusk),
    0,
    1,
    r(i)
  );
}
function hu(c, i, r, o = nu) {
  if (i === 1 || c >= r.sunrise && c <= r.sunset)
    return 1;
  (o === null || typeof o > "u") && (o = nu);
  const f = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (o.terrainScale * (i - 1) + o.baseline) * f, d = v0(r, c);
  return 1 + p * d;
}
const y0 = {
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
function pu(c, i) {
  return (i === null || typeof i > "u") && (i = y0), c < i.lower.lim ? i.lower.m * c + i.lower.b : c > i.upper.lim ? i.upper.m * c + i.upper.b : i.a * c ** 2 + i.b * c + 1;
}
function gu(c, i) {
  if (!i) return 1;
  const r = c.tod;
  let o = 1;
  if (r > i.start && r < i.stop) {
    const f = (r - i.start) / (i.stop - i.start) * Math.PI;
    o += (i.max - i.baseline) * Math.sin(f) / 100;
  }
  return o += i.baseline / 100, o;
}
function du(c, i) {
  const r = z.findLast(i.terrainFactors, (o) => me(o.start, c.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const _u = ["altitude", "grade", "terrain", "heat", "dark", "fatigue", "strategy"];
function ws(c) {
  const i = new bn().init(0);
  return c.forEach(({ factors: r, dist: o }) => {
    i.applyEach((f, p) => f + o * p, r);
  }), i.scaleEach(1 / ou.sumBy(c, "dist")), i;
}
function m0(c, i) {
  let r = 0, o = 0;
  return c.forEach((f, p) => {
    const d = p === c.length - 1 ? i : c[p + 1].onset, v = f.type === "linear" ? f.value / 2 : f.value;
    o += (r + v) * (d - f.onset), r += f.value;
  }), o / i;
}
function w0(c) {
  return c < 30 ? 2 : c < 60 ? 5 : c < 90 ? 10 : c < 120 ? 15 : 20;
}
function M0(c, i, r) {
  let o = -m0(i, r);
  return i.forEach((f, p) => {
    if (c >= f.onset) {
      if (f.type === "step")
        o += f.value;
      else if (f.type === "linear") {
        const d = p === i.length - 1 ? r : i[p + 1].onset;
        c > d ? o += f.value : o += f.value * (c - f.onset) / (d - f.onset);
      }
    }
  }), o;
}
class ds {
  constructor(i, r) {
    M(this, "plan");
    M(this, "values");
    this.plan = i, this.values = r ? z.cloneDeep(r) : [{ onset: 0, value: w0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(i) {
    return 1 + M0(i, this.values, this.plan.course.dist) / 100;
  }
  addValue(i) {
    const r = this.values.findIndex((o) => o.onset >= i.onset);
    r >= 0 ? this.values.splice(r, 0, i) : this.values.push(i);
  }
}
function _s(c, i) {
  return (c - 1) * i + 1;
}
function Ms(c, i) {
  c.factors || (c.factors = new bn()), Object.assign(c.factors, {
    grade: pu(c.grade),
    altitude: cu(c.alt),
    terrain: du(c, i)
  });
}
function Nr(c, i) {
  if (c.factors || (c.factors = new bn()), Ms(c, i.course), i) {
    if (c.factors === void 0) throw new Error("no factors");
    c.factors.strategy = i.strategy.at(c.loc), Object.assign(c.factors, {
      heat: i.heatModel ? gu(c, i.heatModel) : 1,
      dark: i.event.sun ? hu(c.tod, c.factors.terrain, i.event.sun) : 1
    });
  }
  c.factors.altitude = _s(c.factors.altitude, i.scales.altitude), c.factors.dark = _s(c.factors.dark, i.scales.dark);
}
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: bn,
  Strategy: ds,
  applyScale: _s,
  generateCourseFactors: Ms,
  generatePlanFactors: Nr,
  getAltitudeFactor: cu,
  getDarkFactor: hu,
  getGradeFactor: pu,
  getHeatFactor: gu,
  getTerrainFactor: du,
  list: _u,
  rollup: ws
}, Symbol.toStringTag, { value: "Module" }));
function vu(c) {
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
function C0(c, i, r) {
  const o = c.filter(
    (p, d) => d >= c.findIndex((v) => v === i) && d <= c.findIndex((v) => v === r)
  ), f = o.map((p, d) => ({
    factors: p.factors,
    dist: d === o.length - 1 ? 0 : o[d + 1].loc - o[d].loc
  }));
  return f.pop(), ws(f);
}
class yu {
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
class b0 extends yu {
  constructor(r, o) {
    super(o);
    M(this, "_course");
    M(this, "point1");
    M(this, "point2");
    this._course = r, this.point1 = o.point1, this.point2 = o.point2;
  }
}
class S0 extends yu {
  constructor(r, o) {
    super(o);
    M(this, "_plan");
    M(this, "point1");
    M(this, "point2");
    M(this, "_factors");
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
    return this._factors || (this._factors = C0(this._plan.points, this.point1, this.point2));
  }
}
const cs = Zn("CourseSplits");
class x0 {
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
    cs("createSegments");
    const i = this.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.course.locationsToBreaks(i.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    cs(`createSplits:${i}`);
    const r = vu(i), o = z.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - o[o.length - 1] > 1e-4 && o.push(this.course.dist);
    const f = this.calcSegments(this.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var F;
    cs.extend("calcSegments")("exec");
    const o = this.course, f = o.points, p = [], d = [];
    let v, w, C = o.points[0], b;
    for (v = 0, w = i.length; v < w; v++) {
      const O = i[v];
      b && Ue((F = i[v - 1]) == null ? void 0 : F.end, O.start, 4) ? C = b : C = o.getPoint(O.start), b = o.getPoint(O.end);
      const R = O.end - O.start, P = new b0(this.course, {
        gain: 0,
        loss: 0,
        grade: R > 0 ? (b.alt - C.alt) / R / 10 * (b.alt - C.alt > 0 ? o.gainScale : o.lossScale) : 0,
        point1: C,
        point2: b
      }), N = new bn().init(0);
      p.push(P), d.push(N);
    }
    const y = (O, R, P, N) => {
      const K = P.alt - R.alt;
      O[K > 0 ? "gain" : "loss"] += K * (K > 0 ? o.gainScale : o.lossScale), Ms(R, o);
      const X = P.loc - R.loc;
      N.applyEach((Q, et) => Q + et * X, R.factors);
    };
    v = 1;
    for (let O = 0; O < p.length; O++) {
      const R = p[O], P = d[O];
      for (; me(f[v].loc, R.point1.loc, 4); ) v++;
      let N = R.point1;
      for (; v < f.length && me(f[v].loc, R.point2.loc, 4); ) {
        const K = f[v];
        y(R, N, K, P), N = K, v++;
      }
      y(R, N, R.point2, P);
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
        v = r.toFixed(f), v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), dms = v + "°";
        break;
      case "dm":
        var p = (r * 60).toFixed(f), v = Math.floor(p / 60), w = (p % 60).toFixed(f);
        v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), w < 10 && (w = "0" + w), dms = v + "°" + w + "′";
        break;
      case "dms":
        var d = (r * 3600).toFixed(f), v = Math.floor(d / 3600), w = Math.floor(d / 60) % 60, C = (d % 60).toFixed(f);
        v < 100 && (v = "0" + v), v < 10 && (v = "0" + v), w < 10 && (w = "0" + w), C < 10 && (C = "0" + C), dms = v + "°" + w + "′" + C + "″";
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
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), v = p - o, w = d - f, C = Math.sin(v / 2) * Math.sin(v / 2) + Math.cos(o) * Math.cos(p) * Math.sin(w / 2) * Math.sin(w / 2), b = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
    return b;
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
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(f) * Math.cos(p), v = Math.cos(f) * Math.sin(p), w = this.lng.toRad(), C = Math.atan2(Math.sin(o) + Math.sin(f), Math.sqrt((Math.cos(o) + d) * (Math.cos(o) + d) + v * v)), b = w + Math.atan2(v, Math.cos(o) + d);
    return b = (b + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(C.toDeg(), b.toDeg());
  }, c.midpoint = function(r) {
    var o = 0, f = 0, p = 0;
    for (var d in r) {
      var v = r[d], w = v.lat * Math.PI / 180, C = v.lng * Math.PI / 180, b = Math.cos(w) * Math.cos(C), y = Math.cos(w) * Math.sin(C), F = Math.sin(w);
      o += b, f += y, p += F;
    }
    o = o / r.length, f = f / r.length, p = p / r.length;
    var O = Math.atan2(f, o), R = Math.sqrt(o * o + f * f), P = Math.atan2(p, R);
    return new c.latlon(P * 180 / Math.PI, O * 180 / Math.PI);
  }, c.latlon.prototype.interpolate = function(r, o) {
    var f = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), v = this.lng.toRad();
    r.lat.toRad(), r.lng.toRad();
    for (var w = Math.sin(d), C = Math.cos(d), b = [], y = 0; y < o; y++) {
      var F = 1 / (o - 1) * y, O = f * F, R = Math.sin(O), P = Math.cos(O), N = Math.asin(w * P + C * R * Math.cos(p)), K = v + Math.atan2(Math.sin(p) * R * C, P - w * Math.sin(N)), X = N.toDeg(), Q = K.toDeg();
      for (X > 90 && (X = 90), X < -90 && (X = -90); Q > 180; ) Q -= 360;
      for (; Q <= -180; ) Q += 360;
      b.push(new c.latlon(X, Q));
    }
    return b;
  }, c.latlon.prototype.destinationPoint = function(r, o) {
    o = typeof o == "number" ? o : typeof o == "string" && o.trim() != "" ? +o : NaN, o = o / i, r = r.toRad();
    var f = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(f) * Math.cos(o) + Math.cos(f) * Math.sin(o) * Math.cos(r)), v = p + Math.atan2(
      Math.sin(r) * Math.sin(o) * Math.cos(f),
      Math.cos(o) - Math.sin(f) * Math.sin(d)
    );
    return v = (v + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(d.toDeg(), v.toDeg());
  }, c.latlon.intersection = function(r, o, f, p) {
    o = typeof o == "number" ? o : typeof o == "string" && trim(o) != "" ? +o : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
    var d = r.lat.toRad(), v = r.lng.toRad(), w = f.lat.toRad(), C = f.lng.toRad(), b = o.toRad(), y = p.toRad(), F = w - d, O = C - v, R = 2 * Math.asin(Math.sqrt(Math.sin(F / 2) * Math.sin(F / 2) + Math.cos(d) * Math.cos(w) * Math.sin(O / 2) * Math.sin(O / 2)));
    if (R == 0) return null;
    var P = Math.acos((Math.sin(w) - Math.sin(d) * Math.cos(R)) / (Math.sin(R) * Math.cos(d)));
    isNaN(P) && (P = 0);
    var N = Math.acos((Math.sin(d) - Math.sin(w) * Math.cos(R)) / (Math.sin(R) * Math.cos(w)));
    if (Math.sin(C - v) > 0)
      var K = P, X = 2 * Math.PI - N;
    else
      K = 2 * Math.PI - P, X = N;
    var Q = (b - K + Math.PI) % (2 * Math.PI) - Math.PI, et = (X - y + Math.PI) % (2 * Math.PI) - Math.PI;
    if (Math.sin(Q) == 0 && Math.sin(et) == 0 || Math.sin(Q) * Math.sin(et) < 0) return null;
    var St = Math.acos(-Math.cos(Q) * Math.cos(et) + Math.sin(Q) * Math.sin(et) * Math.cos(R)), At = Math.atan2(
      Math.sin(R) * Math.sin(Q) * Math.sin(et),
      Math.cos(et) + Math.cos(Q) * Math.cos(St)
    ), It = Math.asin(Math.sin(d) * Math.cos(At) + Math.cos(d) * Math.sin(At) * Math.cos(b)), Ht = Math.atan2(
      Math.sin(b) * Math.sin(At) * Math.cos(d),
      Math.cos(At) - Math.sin(d) * Math.sin(It)
    ), tn = v + Ht;
    return tn = (tn + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(It.toDeg(), tn.toDeg());
  }, c.latlon.prototype.rhumbDistanceTo = function(r) {
    var o = i, f = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), v = Math.abs(r.lng - this.lng).toRad(), w = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)), C = isFinite(d / w) ? d / w : Math.cos(f);
    Math.abs(v) > Math.PI && (v = v > 0 ? -(2 * Math.PI - v) : 2 * Math.PI + v);
    var b = Math.sqrt(d * d + C * C * v * v) * o;
    return b.toPrecisionFixed(4);
  }, c.latlon.prototype.rhumbBearingTo = function(r) {
    var o = this.lat.toRad(), f = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(f / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4));
    Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
    var v = Math.atan2(p, d);
    return (v.toDeg() + 360) % 360;
  }, c.latlon.prototype.rhumbDestinationPoint = function(r, o) {
    var f = i, p = parseFloat(o) / f, d = this.lat.toRad(), v = this.lng.toRad();
    r = r.toRad();
    var w = p * Math.cos(r);
    Math.abs(w) < 1e-10 && (w = 0);
    var C = d + w, b = Math.log(Math.tan(C / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), y = isFinite(w / b) ? w / b : Math.cos(d), F = p * Math.sin(r) / y;
    Math.abs(C) > Math.PI / 2 && (C = C > 0 ? Math.PI - C : -Math.PI - C);
    var O = (v + F + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new c.latlon(C.toDeg(), O.toDeg());
  }, c.latlon.prototype.rhumbMidpointTo = function(r) {
    var o = this.lat.toRad(), f = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
    Math.abs(d - f) > Math.PI && (f += 2 * Math.PI);
    var v = (o + p) / 2, w = Math.tan(Math.PI / 4 + o / 2), C = Math.tan(Math.PI / 4 + p / 2), b = Math.tan(Math.PI / 4 + v / 2), y = ((d - f) * Math.log(b) + f * Math.log(C) - d * Math.log(w)) / Math.log(C / w);
    return isFinite(y) || (y = (f + d) / 2), y = (y + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new c.latlon(v.toDeg(), y.toDeg());
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
})(mu);
class wu {
  constructor(i, r, o) {
    M(this, "alt");
    M(this, "lat");
    M(this, "lon");
    this.lat = i, this.lon = r, this.alt = o;
  }
  get latlon() {
    return new mu.latlon(this.lat, this.lon);
  }
}
class Mu extends wu {
  constructor(r, o, f, p, d) {
    super(r, o, f);
    M(this, "loc");
    M(this, "grade");
    this.loc = p, this.grade = d;
  }
}
function Cu(c, i, r) {
  if (c.loc > i.loc && r > c.loc || i.loc > c.loc && r > i.loc)
    throw new Error("Input location must be between points");
  const o = Math.abs(c.loc - r), f = c.latlon.bearingTo(i.latlon), { lat: p, lng: d } = c.latlon.destinationPoint(f, o), v = c.grade, w = ye(c.loc, i.loc, c.alt, i.alt, r);
  return new Mu(p, d, w, r, v);
}
function A0(c, i) {
  return (typeof c == "object" ? String(c.id) : c) === (typeof i == "object" ? String(i.id) : i);
}
function vs(c, i) {
  return !!(c && i && A0(c.site, i.site) && c.loop === i.loop);
}
class eu {
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
    return i.find((r) => r.waypoint && vs(this, r.waypoint));
  }
}
const Lr = Zn("models:Waypoint");
class hs {
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
    this._data = { percent: r.percent }, this.course = i, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.terrainFactor !== void 0 && (this.terrainFactor = r.terrainFactor), r.terrainType !== void 0 && (this.terrainType = r.terrainType), r.description && (this.description = r.description), Lr(`constructor: ${this.name}`);
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
  set percent(i) {
    this._data.percent = i;
  }
  get waypoints() {
    return this._waypoints ? this._waypoints : (Lr(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new eu(this, this.course.loops)] : this._waypoints = z.range(this.course.loops).map((i) => new eu(this, i + 1)), this._waypoints);
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
    Lr("refreshLLA");
    let i, r, o;
    this.type === "start" ? { lat: i, lon: r, alt: o } = this.course.track.points[0] : this.type === "finish" ? { lat: i, lon: r, alt: o } = this.course.track.points[this.course.track.points.length - 1] : { lat: i, lon: r, alt: o } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = i, this._lon = r, this._alt = o, this.course.clearCache(1);
  }
}
var bu = { exports: {} };
(function(c, i) {
  (function() {
    var r = Math.PI, o = Math.sin, f = Math.cos, p = Math.tan, d = Math.asin, v = Math.atan2, w = Math.acos, C = r / 180, b = 1e3 * 60 * 60 * 24, y = 2440588, F = 2451545;
    function O(k) {
      return k.valueOf() / b - 0.5 + y;
    }
    function R(k) {
      return new Date((k + 0.5 - y) * b);
    }
    function P(k) {
      return O(k) - F;
    }
    var N = C * 23.4397;
    function K(k, $) {
      return v(o(k) * f(N) - p($) * o(N), f(k));
    }
    function X(k, $) {
      return d(o($) * f(N) + f($) * o(N) * o(k));
    }
    function Q(k, $, G) {
      return v(o(k), f(k) * o($) - p(G) * f($));
    }
    function et(k, $, G) {
      return d(o($) * o(G) + f($) * f(G) * f(k));
    }
    function St(k, $) {
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
      var ct = C * -G, nt = C * $, ht = P(k), ot = tn(ht), lt = St(ht, ct) - ot.ra;
      return {
        azimuth: Q(lt, nt, ot.dec),
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
    qt.addTime = function(k, $, G) {
      we.push([k, $, G]);
    };
    var $e = 9e-4;
    function Ur(k, $) {
      return Math.round(k - $e - $ / (2 * r));
    }
    function Me(k, $, G) {
      return $e + (k + $) / (2 * r) + G;
    }
    function ze(k, $, G) {
      return F + k + 53e-4 * o($) - 69e-4 * o(2 * G);
    }
    function $r(k, $, G) {
      return w((o(k) - o($) * o(G)) / (f($) * f(G)));
    }
    function Sn(k) {
      return -2.076 * Math.sqrt(k) / 60;
    }
    function vn(k, $, G, ct, nt, ht, ot) {
      var lt = $r(k, G, ct), wt = Me(lt, $, nt);
      return ze(wt, ht, ot);
    }
    qt.getTimes = function(k, $, G, ct) {
      ct = ct || 0;
      var nt = C * -G, ht = C * $, ot = Sn(ct), lt = P(k), wt = Ur(lt, nt), Kt = Me(0, nt, wt), Rt = It(Kt), Wt = Ht(Rt), yn = X(Wt, 0), _t = ze(Kt, Rt, Wt), kt, Dn, Mt, Bt, cn, nn, pt = {
        solarNoon: R(_t),
        nadir: R(_t - 0.5)
      };
      for (kt = 0, Dn = we.length; kt < Dn; kt += 1)
        Mt = we[kt], Bt = (Mt[0] + ot) * C, cn = vn(Bt, nt, ht, yn, wt, Rt, Wt), nn = _t - (cn - _t), pt[Mt[1]] = R(nn), pt[Mt[2]] = R(cn);
      return pt;
    };
    function Ge(k) {
      var $ = C * (218.316 + 13.176396 * k), G = C * (134.963 + 13.064993 * k), ct = C * (93.272 + 13.22935 * k), nt = $ + C * 6.289 * o(G), ht = C * 5.128 * o(ct), ot = 385001 - 20905 * f(G);
      return {
        ra: K(nt, ht),
        dec: X(nt, ht),
        dist: ot
      };
    }
    qt.getMoonPosition = function(k, $, G) {
      var ct = C * -G, nt = C * $, ht = P(k), ot = Ge(ht), lt = St(ht, ct) - ot.ra, wt = et(lt, nt, ot.dec), Kt = v(o(lt), p(nt) * f(ot.dec) - o(ot.dec) * f(lt));
      return wt = wt + At(wt), {
        azimuth: Q(lt, nt, ot.dec),
        altitude: wt,
        distance: ot.dist,
        parallacticAngle: Kt
      };
    }, qt.getMoonIllumination = function(k) {
      var $ = P(k || /* @__PURE__ */ new Date()), G = tn($), ct = Ge($), nt = 149598e3, ht = w(o(G.dec) * o(ct.dec) + f(G.dec) * f(ct.dec) * f(G.ra - ct.ra)), ot = v(nt * o(ht), ct.dist - nt * f(ht)), lt = v(f(G.dec) * o(G.ra - ct.ra), o(G.dec) * f(ct.dec) - f(G.dec) * o(ct.dec) * f(G.ra - ct.ra));
      return {
        fraction: (1 + f(ot)) / 2,
        phase: 0.5 + 0.5 * ot * (lt < 0 ? -1 : 1) / Math.PI,
        angle: lt
      };
    };
    function xn(k, $) {
      return new Date(k.valueOf() + $ * b / 24);
    }
    qt.getMoonTimes = function(k, $, G, ct) {
      var nt = new Date(k);
      ct ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
      for (var ht = 0.133 * C, ot = qt.getMoonPosition(nt, $, G).altitude - ht, lt, wt, Kt, Rt, Wt, yn, _t, kt, Dn, Mt, Bt, cn, nn, pt = 1; pt <= 24 && (lt = qt.getMoonPosition(xn(nt, pt), $, G).altitude - ht, wt = qt.getMoonPosition(xn(nt, pt + 1), $, G).altitude - ht, Wt = (ot + wt) / 2 - lt, yn = (wt - ot) / 2, _t = -yn / (2 * Wt), kt = (Wt * _t + yn) * _t + lt, Dn = yn * yn - 4 * Wt * lt, Mt = 0, Dn >= 0 && (nn = Math.sqrt(Dn) / (Math.abs(Wt) * 2), Bt = _t - nn, cn = _t + nn, Math.abs(Bt) <= 1 && Mt++, Math.abs(cn) <= 1 && Mt++, Bt < -1 && (Bt = cn)), Mt === 1 ? ot < 0 ? Kt = pt + Bt : Rt = pt + Bt : Mt === 2 && (Kt = pt + (kt < 0 ? cn : Bt), Rt = pt + (kt < 0 ? Bt : cn)), !(Kt && Rt)); pt += 2)
        ot = wt;
      var mn = {};
      return Kt && (mn.rise = xn(nt, Kt)), Rt && (mn.set = xn(nt, Rt)), !Kt && !Rt && (mn[kt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
    }, c.exports = qt;
  })();
})(bu);
var ru = bu.exports;
function Kn(c, i) {
  const r = c.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1,
    timeZone: i
  }).split(":").map((o) => Number(o));
  return r[0] * 60 * 60 + r[1] * 60 + r[2];
}
class I0 {
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
class ys {
  constructor(i, r, o, f) {
    M(this, "start");
    M(this, "lat");
    M(this, "lon");
    M(this, "timezone");
    M(this, "sun");
    M(this, "startTime");
    this.start = i, this.lat = o, this.lon = f, this.timezone = r;
    const p = ru.getTimes(this.start, this.lat, this.lon), d = ru.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new I0({
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
const On = Zn("models:Course"), T0 = ["track", "dist", "gain", "loss", "cache", "distance", "start"];
class H0 {
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
      new hs(this, {
        id: String(z.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new hs(this, {
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
    this._track = i, r.loops && (this.loops = r.loops), r.dist && (this._distOverride = r.dist), r.gain && (this._gainOverride = r.gain), r.loss && (this._lossOverride = r.loss), r.start && (this.event = new ys(
      r.start.date,
      r.start.timezone,
      i.points[0].lat,
      i.points[0].lon
    ));
    const o = Object.keys(r).filter((f) => !T0.includes(f));
    Object.assign(this, z.pick(r, o));
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
    this._sites = i.map((r) => new hs(this, r)), this.clearCache(1);
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
    if (this._points) return this._points;
    On("generating points array"), this._points = new Array(this.track.points.length * this.loops);
    for (let i = 0; i < this.loops; i++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + i * this.track.points.length] = new tu(
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
    const o = this.points.findIndex((C) => Br(C.loc, i, 4)), f = this.points[o];
    if (Ue(f.loc, i, 4)) return f;
    On(`getPoint: ${r ? "inserting" : "creating"} new CoursePoint at ${i}`);
    const p = o - 1, d = this.points[p], v = Cu(d.point, f.point, i % this.loopDist / this.distScale), w = new tu(this, v, Math.floor(i / this.loopDist));
    return r && this.points.splice(o, 0, w), w;
  }
  get terrainFactors() {
    if (this._terrainFactors) return this._terrainFactors;
    On("regenerating terrainFactors");
    const i = this.waypoints.filter(
      (r, o) => {
        var f;
        return o === 0 || !z.isNil(r.terrainFactor) && r.terrainFactor !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainFactor);
      }
    );
    return this._terrainFactors = i.map((r, o) => new F0(r, i[o + 1] || z.last(this.waypoints), r.terrainFactor)), this._terrainFactors;
  }
  get terrainTypes() {
    if (this._terrainTypes) return this._terrainTypes;
    On("regenerating terrainTypes");
    const i = this.waypoints.filter(
      (r, o) => {
        var f;
        return !z.isNil(r.terrainType) && r.terrainType !== ((f = this.waypoints[o - 1]) == null ? void 0 : f.terrainType);
      }
    );
    return this._terrainTypes = i.map((r, o) => new E0(r, i[o + 1] || z.last(this.waypoints), r.terrainType || "")), this._terrainTypes;
  }
  get cutoffs() {
    return this._cutoffs ? this._cutoffs : (this._cutoffs = this.waypoints.filter((i) => i.cutoff).map((i) => new P0(i)), this._cutoffs);
  }
  get splits() {
    return this._splits ? this._splits : (this._splits = new x0(this), this._splits);
  }
  get stats() {
    if (this._stats) return this._stats;
    On("stats:calculate");
    const i = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), o = this.terrainFactors.map((d) => d.value / 100 + 1), f = {
      altitude: {
        avg: z.sum(
          this.track.points.map((d, v) => {
            var w;
            return d.alt * (d.loc - (((w = this.track.points[v - 1]) == null ? void 0 : w.loc) || 0));
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
        max: z.max(o) || 0,
        min: z.min(o) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrainFactors.reduce((v, w) => w.value / 100 + 1 === d ? v + w.end - w.start : v, 0);
    return Object.assign(f.terrain, {
      maxDist: p(f.terrain.max),
      minDist: p(f.terrain.min)
    }), this._stats = f, f;
  }
  locationsToBreaks(i) {
    const r = i.filter((f) => f > 0 && ms(f, this.dist, 4));
    return r.unshift(0), r.map((f, p) => ({ start: f, end: r[p + 1] || this.dist }));
  }
}
class P0 {
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
class F0 {
  constructor(i, r, o = 0) {
    M(this, "value");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.value = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
class E0 {
  constructor(i, r, o) {
    M(this, "type");
    M(this, "startWaypoint");
    M(this, "endWaypoint");
    this.startWaypoint = i, this.endWaypoint = r, this.type = o;
  }
  get start() {
    return this.startWaypoint.loc;
  }
  get end() {
    return this.endWaypoint.loc;
  }
}
var Wr = {};
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
    function r(v) {
      return f(d(v), arguments);
    }
    function o(v, w) {
      return r.apply(null, [v].concat(w || []));
    }
    function f(v, w) {
      var C = 1, b = v.length, y, F = "", O, R, P, N, K, X, Q, et;
      for (O = 0; O < b; O++)
        if (typeof v[O] == "string")
          F += v[O];
        else if (typeof v[O] == "object") {
          if (P = v[O], P.keys)
            for (y = w[C], R = 0; R < P.keys.length; R++) {
              if (y == null)
                throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', P.keys[R], P.keys[R - 1]));
              y = y[P.keys[R]];
            }
          else P.param_no ? y = w[P.param_no] : y = w[C++];
          if (i.not_type.test(P.type) && i.not_primitive.test(P.type) && y instanceof Function && (y = y()), i.numeric_arg.test(P.type) && typeof y != "number" && isNaN(y))
            throw new TypeError(r("[sprintf] expecting number but found %T", y));
          switch (i.number.test(P.type) && (Q = y >= 0), P.type) {
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
              y = JSON.stringify(y, null, P.width ? parseInt(P.width) : 0);
              break;
            case "e":
              y = P.precision ? parseFloat(y).toExponential(P.precision) : parseFloat(y).toExponential();
              break;
            case "f":
              y = P.precision ? parseFloat(y).toFixed(P.precision) : parseFloat(y);
              break;
            case "g":
              y = P.precision ? String(Number(y.toPrecision(P.precision))) : parseFloat(y);
              break;
            case "o":
              y = (parseInt(y, 10) >>> 0).toString(8);
              break;
            case "s":
              y = String(y), y = P.precision ? y.substring(0, P.precision) : y;
              break;
            case "t":
              y = String(!!y), y = P.precision ? y.substring(0, P.precision) : y;
              break;
            case "T":
              y = Object.prototype.toString.call(y).slice(8, -1).toLowerCase(), y = P.precision ? y.substring(0, P.precision) : y;
              break;
            case "u":
              y = parseInt(y, 10) >>> 0;
              break;
            case "v":
              y = y.valueOf(), y = P.precision ? y.substring(0, P.precision) : y;
              break;
            case "x":
              y = (parseInt(y, 10) >>> 0).toString(16);
              break;
            case "X":
              y = (parseInt(y, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          i.json.test(P.type) ? F += y : (i.number.test(P.type) && (!Q || P.sign) ? (et = Q ? "+" : "-", y = y.toString().replace(i.sign, "")) : et = "", K = P.pad_char ? P.pad_char === "0" ? "0" : P.pad_char.charAt(1) : " ", X = P.width - (et + y).length, N = P.width && X > 0 ? K.repeat(X) : "", F += P.align ? et + y + N : K === "0" ? et + N + y : N + et + y);
        }
      return F;
    }
    var p = /* @__PURE__ */ Object.create(null);
    function d(v) {
      if (p[v])
        return p[v];
      for (var w = v, C, b = [], y = 0; w; ) {
        if ((C = i.text.exec(w)) !== null)
          b.push(C[0]);
        else if ((C = i.modulo.exec(w)) !== null)
          b.push("%");
        else if ((C = i.placeholder.exec(w)) !== null) {
          if (C[2]) {
            y |= 1;
            var F = [], O = C[2], R = [];
            if ((R = i.key.exec(O)) !== null)
              for (F.push(R[1]); (O = O.substring(R[0].length)) !== ""; )
                if ((R = i.key_access.exec(O)) !== null)
                  F.push(R[1]);
                else if ((R = i.index_access.exec(O)) !== null)
                  F.push(R[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            C[2] = F;
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
        w = w.substring(C[0].length);
      }
      return p[v] = b;
    }
    c.sprintf = r, c.vsprintf = o, typeof window < "u" && (window.sprintf = r, window.vsprintf = o);
  })();
})(Wr);
class Su {
  /**
   *
   * @param target - target object
   * @param events - array of event names to map
   */
  constructor(i, r) {
    M(this, "_callbacks", {});
    M(this, "_target");
    this._target = i, this._callbacks = z.fromPairs(r.map((o) => [o, []]));
  }
  /**
   * add a callback function to an event
   * @param evt - event name
   * @param fun - callback function, first argument is target object
   */
  add(i, r) {
    if (!this._callbacks[i]) throw new Error(`${i} is not a valid callback for object`);
    this._callbacks[i].find((o) => o === r) ? console.warn("callback already exists.") : this._callbacks[i].push(r);
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
const R0 = Zn("PaceChunk");
class k0 {
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
class iu {
  constructor(i, r, o, f) {
    M(this, "constraints");
    M(this, "points");
    M(this, "plan");
    M(this, "delay");
    M(this, "factor");
    M(this, "factors", new bn());
    M(this, "status");
    this.constraints = o, this.points = r, this.plan = i, this.delay = f, this.factor = 1;
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
    let r = i[0].elapsed, o = i[0].delay || 0, f = 0, p = 0, d = 0;
    const v = this.factor ? this.np : this.plan.pacing.pace, w = new bn().init(0);
    for (let C = 1, b = i.length; C < b; C++) {
      f = i[C].loc - i[C - 1].loc, Nr(i[C - 1], this.plan), w.applyEach((F, O) => F + O * f, i[C - 1].factors);
      const y = i[C - 1].factors.combined;
      d += y * f, p = v * y * f, i[C].time = i[C - 1].time + p, o = i[C - 1].delay || 0, r += p + o, i[C].elapsed = r, this.plan.event.start && (i[C].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    Nr(i[i.length - 1], this.plan), this.factors = w.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const o = R0.extend(
      Wr.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let f = this.factor || 0, p;
    const d = new k0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !z.round(f - this.factor, 10), f = this.factor, d.target = Math.abs(
      (z.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, o(Wr.vsprintf("%i|%s", [p, d.statusString])), !d.passing); p++)
      ;
    o("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const jt = Zn("Pacing");
class L0 {
  constructor(i) {
    M(this, "callbacks", new Su(this, ["onUpdated", "onFail", "onInvalidated"]));
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
    return jt("factors:get"), this._factors || (jt("factors:update"), this._factors = ws(this.chunks)), this._factors;
  }
  get np() {
    return jt("np:get"), this.pace / this.factor;
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
    var o, f;
    const i = jt.extend("calculate");
    i("exec"), i("clearing cache"), this.clearCache(), i("adding points at each terrain factor break"), (o = this.plan.course.terrainFactors) == null || o.forEach((p) => this.plan.getPoint(p.start, !0)), i("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((p) => {
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
    this.chunks = [new iu(this.plan, this.plan.points, [0, i], this.plan.delay)], this.plan.points.forEach((r) => {
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
  splitChunk(i, r, o) {
    jt.extend("split")(`breaking chunks at ${r.loc} km`);
    const p = i.points.findIndex((w) => w === r), d = z.round(r.elapsed - r.time), v = new iu(this.plan, i.points.slice(0, p + 1), [0, o], d);
    v.points.filter((w, C) => C < v.points.length - 1).forEach((w) => {
      w._chunk = v;
    }), this.chunks.unshift(v), i.constraints[0] = o, i.delay -= d, i.points = i.points.slice(p), delete i.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(i, r) {
    const o = this.chunks.findIndex((p) => p === i), f = this.chunks.findIndex((p) => p === r);
    if (f - o !== 1) throw new Error("chunks must be sequential");
    jt(Wr.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", o, f, i.np, r.np)), i.points.pop(), i.points.push(...r.points), i.delay += r.delay, delete i.status, i.points.forEach((p) => {
      p._chunk = i;
    }), i.constraints = [i.constraints[0], r.constraints[1]], this.chunks.splice(f, 1);
  }
}
class su {
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
const ps = Zn("PlanSplits");
class O0 {
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
    ps("createSegments");
    const i = this.plan.course.waypoints.filter((o) => o.tier < 3).sort((o, f) => o.loc - f.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(i.map((o) => o.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((o, f) => {
      o.waypoint = i[f + 1];
    }), r;
  }
  createSplits(i) {
    ps(`createSplits:${i}`);
    const r = vu(i), o = z.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - o[o.length - 1] > 1e-4 && o.push(this.plan.course.dist);
    const f = this.calcSegments(this.plan.course.locationsToBreaks(o));
    if (!f.length) throw new Error("createSplits result is empty");
    return f;
  }
  calcSegments(i) {
    var O;
    ps.extend("calcSegments")("exec");
    const o = this.plan, f = o.course, p = o.points, d = [], v = [];
    let w, C, b = o.points[0], y;
    for (w = 0, C = i.length; w < C; w++) {
      const R = i[w];
      y && Ue((O = i[w - 1]) == null ? void 0 : O.end, R.start, 4) ? b = y : b = o.getPoint(R.start), y = o.getPoint(R.end);
      const P = R.end - R.start, N = new S0(this.plan, {
        gain: 0,
        loss: 0,
        grade: P > 0 ? (y.alt - b.alt) / P / 10 * (y.alt - b.alt > 0 ? f.gainScale : f.lossScale) : 0,
        point1: b,
        point2: y
      }), K = new bn().init(0);
      d.push(N), v.push(K);
    }
    const F = (R, P, N, K) => {
      const X = N.alt - P.alt;
      R[X > 0 ? "gain" : "loss"] += X * (X > 0 ? f.gainScale : f.lossScale), Nr(P, o);
      const Q = N.loc - P.loc;
      K.applyEach((et, St) => et + St * Q, P.factors);
    };
    w = 1;
    for (let R = 0; R < d.length; R++) {
      const P = d[R], N = v[R];
      for (; me(p[w].loc, P.point1.loc, 4); ) w++;
      let K = P.point1;
      for (; w < p.length && me(p[w].loc, P.point2.loc, 4); ) {
        const X = p[w];
        F(P, K, X, N), K = X, w++;
      }
      F(P, K, P.point2, N), o && (P.delay = o.delays.filter((X) => Br(P.point1.loc, X.loc, 4) && ms(P.point2.loc, X.loc, 4)).reduce((X, Q) => X + Q.delay, 0));
    }
    return d;
  }
}
const _n = Zn("models:Plan");
class q0 {
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
    M(this, "_scales", new W0(this));
    M(this, "_splits");
    M(this, "_stats");
    M(this, "_strategy");
    M(this, "_target");
    M(this, "_typicalDelay", 0);
    this.course = i;
    const o = r.start ? new ys(r.start.date, r.start.timezone, i.points[0].lat, i.points[0].lon) : i.event;
    if (!o) throw new Error("Start date/timezone is required for either the plan or the course");
    this.event = o, this.id = r.id, this.pacing = new L0(this), this.points = this.course.points.map((f) => new su(this, f)), this._method = r.method, this._target = r.target, this.typicalDelay = r.typicalDelay || 0, r.delays && (this.delays = r.delays), this.cutoffMargin = r.cutoffMargin, this.scales = r.scales, this._strategy = new ds(this, r.strategy), r.heatModel && (this.heatModel = r.heatModel), this.name = r.name, this.callbacks = new Su(this, ["onUpdated"]);
  }
  get cutoffMargin() {
    return this._cutoffMargin;
  }
  set cutoffMargin(i) {
    this._cutoffMargin = i, this.clearCache();
  }
  get cutoffs() {
    if (this._cutoffs) return this._cutoffs;
    this._cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new N0(this, r, this.getPoint(r.loc, !0))) : [];
    let i = 0;
    for (; this._cutoffs.length - 1 >= i; ) {
      const r = this._cutoffs[i];
      this._cutoffs.find((o, f) => f > i && o.time <= r.time) ? (_n(`get cutoffs: deleting extraneous cutoff at ${r.loc} km`), this._cutoffs.splice(i, 1)) : i++;
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
    const i = this.course.waypoints.map((o) => {
      var d;
      const f = (d = this._specifiedDelays) == null ? void 0 : d.find((v) => vs(v.waypoint, o)), p = f ? f.delay : o.hasTypicalDelay ? this.typicalDelay : 0;
      return new D0(o, p);
    }).filter((o) => o.delay > 0).sort((o, f) => o.loc - f.loc);
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
    const i = [], r = this.event.elapsedToTimeOfDay(0), o = Math.ceil((r + this.points[this.points.length - 1].elapsed) / 86400);
    for (let d = 0; d < o; d++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((w) => {
        const C = w.time - r + 86400 * d;
        C >= 0 && C <= this.points[this.points.length - 1].elapsed && i.push({ event: w.event, elapsed: C });
      });
    i.sort((d, v) => d.elapsed - v.elapsed);
    const f = uu(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      i.map((d) => d.elapsed)
    ), p = i.map((d, v) => ({ ...d, loc: f[v] }));
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
    return this._splits ? this._splits : (_n("creating splits"), this._splits = new O0(this), this._splits);
  }
  set start(i) {
    this.event = new ys(i.date, i.timezone, this.points[0].lat, this.points[0].lon);
  }
  /**
   * Plan stats object
   */
  get stats() {
    if (this._stats) return this._stats;
    _n("calculating stats.factors");
    const i = z.fromPairs(
      _u.map((p) => {
        const d = this.points.map((v) => v.factors.get(p));
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
    let o = 0, f = 0;
    return this.points.forEach((p, d) => {
      var v, w;
      o = p.loc - (((v = this.points[d - 1]) == null ? void 0 : v.loc) || 0), f = p.elapsed - (((w = this.points[d - 1]) == null ? void 0 : w.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += f, r.dark.dist += o) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += f, r.twilight.dist += o) : (r.day.time += f, r.day.dist += o);
    }), this._stats = { factors: i, sun: r }, this._stats;
  }
  get strategy() {
    return this._strategy;
  }
  set strategy(i) {
    this._strategy = new ds(this, i), this.clearCache();
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
    return ((r = this.delays.find((o) => vs(o.waypoint, i))) == null ? void 0 : r.delay) || 0;
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
    const o = this.points.findIndex((w) => Br(w.loc, i, 4)), f = this.points[o];
    if (Ue(f.loc, i, 4)) return f;
    _n(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${i}`);
    const p = o - 1, d = this.points[p], v = new su(this, this.course.getPoint(i, r));
    if (!isNaN(d.time) && !isNaN(f.time)) {
      const w = f.elapsed - f.time - (d.elapsed - d.time);
      v.time = ye(d.loc, f.loc, d.time + w, f.time, f.loc), v.elapsed = f.elapsed - (f.time - v.time), this.event.start && (v.tod = this.event.elapsedToTimeOfDay(v.elapsed));
    }
    return r && this.points.splice(o, 0, v), v;
  }
  invalidatePacing() {
    _n("invalidatePacing"), this.pacing.invalidate(), delete this._splits;
  }
}
class D0 {
  constructor(i, r) {
    M(this, "delay");
    M(this, "waypoint");
    this.waypoint = i, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class N0 {
  constructor(i, r, o) {
    M(this, "plan");
    M(this, "courseCutoff");
    M(this, "point");
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
class W0 {
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
const xu = (c, i, r, o) => {
  const f = fu(c, i, r, o), p = [];
  return r.forEach((d, v) => {
    let w = f[v][0] / 10;
    w > 50 ? w = 50 : w < -50 && (w = -50);
    const C = d * f[v][0] + f[v][1];
    p.push({
      grade: w,
      alt: C
    });
  }), p;
};
function B0(c, i) {
  return xu(
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
}, Or = Zn("models:Track");
class Cs {
  constructor(i) {
    M(this, "dist");
    M(this, "gain");
    M(this, "loss");
    M(this, "points");
    Or("Creating new Track object");
    const r = i.map((C) => new wu(C.lat, C.lon, C.alt)), o = U0(r), f = B0(r, o);
    this.points = r.map((C, b) => new Mu(C.lat, C.lon, C.alt, o[b], f[b])), Or(`set-points - ${r.length} points`), Or("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, v = 0, w = this.points[0].alt;
    this.points.forEach((C) => {
      v = C.alt - w, v < 0 ? d += v : p += v, w = C.alt;
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
      const o = this.points.findIndex((f) => f.loc >= i);
      r = Cu(this.points[o - 1], this.points[o], i);
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
  getNearestPoint(i, r, o) {
    let p = this.points.findIndex((w) => w === r), d = this.points[p], v = 0;
    for (; o > 0.025; ) {
      const w = o / 5, C = [d];
      for (let F = 1; F <= 5; F++) {
        const O = d.loc + w * F;
        if (O <= this.dist) {
          for (; this.points[p + 1].loc < O && p < this.points.length - 1; )
            p++;
          C.push(this.points[p]);
        }
      }
      const b = C.map((F) => Number(i.distanceTo(F.latlon)));
      v = Math.min(...b);
      const y = b.findIndex((F) => F === v);
      d = C[y], o = o / 5;
    }
    return {
      point: d,
      delta: v
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(i = 0.025, r = this.points.length / 2) {
    const o = Or.extend("reduceDensity");
    if (this.dist / i > r / 2)
      return o("Does not meet criteria"), this;
    const f = this.dist, p = Math.floor(f / i) + 1, d = Array(p).fill(0).map((b, y) => Nt(y++ * i, 3));
    d[d.length - 1] < f && d.push(f);
    const v = xu(
      this.points.map((b) => b.loc),
      this.points.map((b) => b.alt),
      d,
      2 * i
    ), w = d.map((b) => this.getLLA(b)).map((b, y) => ({
      lat: Nt(b.lat, 6),
      lon: Nt(b.lon, 6),
      alt: Nt(v[y].alt, 2)
    })), C = new Cs(w);
    return o(`Reduced from ${this.points.length} to ${C.points.length} points.`), C;
  }
}
function K0(c, i, r) {
  const o = c.map((f, p) => ({ lat: c[p], lon: i[p], alt: r[p] }));
  return new Cs(o);
}
const Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Kn
}, Symbol.toStringTag, { value: "Module" }));
export {
  H0 as Course,
  P0 as CourseCutoff,
  tu as CoursePoint,
  b0 as CourseSegment,
  ys as Event,
  bn as Factors,
  L0 as Pacing,
  q0 as Plan,
  su as PlanPoint,
  S0 as PlanSegment,
  wu as Point,
  hs as Site,
  ds as Strategy,
  Cs as Track,
  Mu as TrackPoint,
  eu as Waypoint,
  m0 as adjustStrategy,
  K0 as createTrackFromArrays,
  G0 as factors,
  Cu as interpolatePoint,
  z0 as math,
  v0 as scaleDark,
  Z0 as util
};
