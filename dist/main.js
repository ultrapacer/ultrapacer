var M0 = Object.defineProperty;
var C0 = (f, s, r) => s in f ? M0(f, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : f[s] = r;
var P = (f, s, r) => C0(f, typeof s != "symbol" ? s + "" : s, r);
const b0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function mu(f, s) {
  (s === null || typeof s > "u") && (s = b0);
  let r = 0;
  return Array.isArray(f) ? r = (f[0] + f[1]) / 2 : r = f, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const ou = {
  baseline: 0,
  terrainScale: 1
};
function Nt(f, s = 0) {
  return Math.round(f * 10 ** s) / 10 ** s;
}
function me(f, s, r, a, l) {
  return r + (l - f) / (s - f) * (a - r);
}
function wu(f, s, r) {
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
function yu(f) {
  let s, r, a, l, p = 0, d = 0, _ = 0, y = 0, M = 0;
  for (s = 0; s < f.length; s++)
    r = f[s][0], a = f[s][1], l = f[s][2], M += l, p += l * r, _ += l * (r * r), d += l * a, y += l * (r * a);
  const I = (d * _ - p * y) / (M * _ - p * p);
  return [(M * y - p * d) / (M * _ - p * p), I];
}
function Mu(f, s, r, a) {
  let l = 0, p = 0;
  const d = [];
  return r.forEach((_) => {
    for (; f[l] < _ - a; )
      l++;
    for (l > 0 && f[l] >= _ && l--; p < f.length - 1 && f[p + 1] <= _ + a; )
      p++;
    p < f.length - 1 && f[p] <= _ && p++;
    const y = Math.max(a, Math.abs(_ - f[l]) + 1e-3, Math.abs(_ - f[p]) + 1e-3), M = [];
    let I = 0;
    for (let m = l; m <= p; m++)
      I = (1 - (Math.abs(_ - f[m]) / y) ** 3) ** 3, M.push([f[m], s[m], I]);
    d.push(yu(M));
  }), d;
}
function qr(f, s, r) {
  return Nt(f, r) < Nt(s, r);
}
function S0(f, s, r) {
  return Nt(f, r) > Nt(s, r);
}
function we(f, s, r) {
  return Nt(f, r) <= Nt(s, r);
}
function zr(f, s, r) {
  return Nt(f, r) >= Nt(s, r);
}
function qe(f, s, r) {
  return Nt(f, r) === Nt(s, r);
}
const r_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: wu,
  linearRegression: yu,
  req: qe,
  rgt: S0,
  rgte: zr,
  rlt: qr,
  rlte: we,
  round: Nt,
  wlslr: Mu
}, Symbol.toStringTag, { value: "Module" }));
function x0(f, s) {
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
function Cu(f, s, r, a = ou) {
  if (s === 1 || f >= r.sunrise && f <= r.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = ou);
  const l = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), p = (a.terrainScale * (s - 1) + a.baseline) * l, d = x0(r, f);
  return 1 + p * d;
}
const ve = [
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
    P(this, "_data", {
      altitude: 1,
      grade: 1,
      terrain: 1,
      heat: 1,
      dark: 1,
      fatigue: 1,
      strategy: 1
    });
    P(this, "_combined");
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
function bu(f, s) {
  return (s === null || typeof s > "u") && (s = I0), f < s.lower.lim ? s.lower.m * f + s.lower.b : f > s.upper.lim ? s.upper.m * f + s.upper.b : s.a * f ** 2 + s.b * f + 1;
}
function Su(f, s) {
  if (!s) return 1;
  const r = f.tod;
  let a = 1;
  if (r > s.start && r < s.stop) {
    const l = (r - s.start) / (s.stop - s.start) * Math.PI;
    a += (s.max - s.baseline) * Math.sin(l) / 100;
  }
  return a += s.baseline / 100, a;
}
var kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xu(f) {
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
var A0 = Ue.exports, uu;
function P0() {
  return uu || (uu = 1, function(f, s) {
    (function() {
      var r, a = "4.17.21", l = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, I = "__lodash_placeholder__", m = 1, R = 2, F = 4, T = 1, E = 2, N = 1, q = 2, K = 4, Z = 8, it = 16, _t = 32, Wt = 64, bt = 128, jt = 256, Ht = 512, Tt = 30, ye = "...", ze = 800, Kr = 16, Me = 1, Ge = 2, Zr = 3, bn = 1 / 0, _n = 9007199254740991, He = 17976931348623157e292, Sn = NaN, O = 4294967295, $ = O - 1, z = O >>> 1, ft = [
        ["ary", bt],
        ["bind", N],
        ["bindKey", q],
        ["curry", Z],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Wt],
        ["rearg", jt]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", ct = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Bt = "[object Function]", vn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", On = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", fn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", Ke = "[object Symbol]", Bu = "[object Undefined]", Ce = "[object WeakMap]", Uu = "[object WeakSet]", be = "[object ArrayBuffer]", ee = "[object DataView]", Jr = "[object Float32Array]", Yr = "[object Float64Array]", Xr = "[object Int8Array]", Qr = "[object Int16Array]", Vr = "[object Int32Array]", jr = "[object Uint8Array]", ti = "[object Uint8ClampedArray]", ni = "[object Uint16Array]", ei = "[object Uint32Array]", $u = /\b__p \+= '';/g, qu = /\b(__p \+=) '' \+/g, zu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ts = /&(?:amp|lt|gt|quot|#39);/g, Fs = /[&<>"']/g, Gu = RegExp(Ts.source), Hu = RegExp(Fs.source), Ku = /<%-([\s\S]+?)%>/g, Zu = /<%([\s\S]+?)%>/g, Ls = /<%=([\s\S]+?)%>/g, Ju = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yu = /^\w*$/, Xu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ri = /[\\^$.*+?()[\]{}|]/g, Qu = RegExp(ri.source), ii = /^\s+/, Vu = /\s/, ju = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, tc = /\{\n\/\* \[wrapped with (.+)\] \*/, nc = /,? & /, ec = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, rc = /[()=,{}\[\]\/\s]/, ic = /\\(\\)?/g, sc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Os = /\w*$/, ac = /^[-+]0x[0-9a-f]+$/i, oc = /^0b[01]+$/i, uc = /^\[object .+?Constructor\]$/, cc = /^0o[0-7]+$/i, lc = /^(?:0|[1-9]\d*)$/, fc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ze = /($^)/, hc = /['\n\r\u2028\u2029\\]/g, Je = "\\ud800-\\udfff", pc = "\\u0300-\\u036f", dc = "\\ufe20-\\ufe2f", gc = "\\u20d0-\\u20ff", ks = pc + dc + gc, Ds = "\\u2700-\\u27bf", Ns = "a-z\\xdf-\\xf6\\xf8-\\xff", _c = "\\xac\\xb1\\xd7\\xf7", vc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mc = "\\u2000-\\u206f", wc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ws = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bs = "\\ufe0e\\ufe0f", Us = _c + vc + mc + wc, si = "['’]", yc = "[" + Je + "]", $s = "[" + Us + "]", Ye = "[" + ks + "]", qs = "\\d+", Mc = "[" + Ds + "]", zs = "[" + Ns + "]", Gs = "[^" + Je + Us + qs + Ds + Ns + Ws + "]", ai = "\\ud83c[\\udffb-\\udfff]", Cc = "(?:" + Ye + "|" + ai + ")", Hs = "[^" + Je + "]", oi = "(?:\\ud83c[\\udde6-\\uddff]){2}", ui = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + Ws + "]", Ks = "\\u200d", Zs = "(?:" + zs + "|" + Gs + ")", bc = "(?:" + re + "|" + Gs + ")", Js = "(?:" + si + "(?:d|ll|m|re|s|t|ve))?", Ys = "(?:" + si + "(?:D|LL|M|RE|S|T|VE))?", Xs = Cc + "?", Qs = "[" + Bs + "]?", Sc = "(?:" + Ks + "(?:" + [Hs, oi, ui].join("|") + ")" + Qs + Xs + ")*", xc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ic = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Vs = Qs + Xs + Sc, Ac = "(?:" + [Mc, oi, ui].join("|") + ")" + Vs, Pc = "(?:" + [Hs + Ye + "?", Ye, oi, ui, yc].join("|") + ")", Ec = RegExp(si, "g"), Rc = RegExp(Ye, "g"), ci = RegExp(ai + "(?=" + ai + ")|" + Pc + Vs, "g"), Tc = RegExp([
        re + "?" + zs + "+" + Js + "(?=" + [$s, re, "$"].join("|") + ")",
        bc + "+" + Ys + "(?=" + [$s, re + Zs, "$"].join("|") + ")",
        re + "?" + Zs + "+" + Js,
        re + "+" + Ys,
        Ic,
        xc,
        qs,
        Ac
      ].join("|"), "g"), Fc = RegExp("[" + Ks + Je + ks + Bs + "]"), Lc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Oc = [
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
      ], kc = -1, lt = {};
      lt[Jr] = lt[Yr] = lt[Xr] = lt[Qr] = lt[Vr] = lt[jr] = lt[ti] = lt[ni] = lt[ei] = !0, lt[nt] = lt[ht] = lt[be] = lt[ct] = lt[ee] = lt[Mt] = lt[Ft] = lt[Bt] = lt[vt] = lt[Lt] = lt[Ct] = lt[tn] = lt[pt] = lt[mn] = lt[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[be] = ut[ee] = ut[ct] = ut[Mt] = ut[Jr] = ut[Yr] = ut[Xr] = ut[Qr] = ut[Vr] = ut[vt] = ut[Lt] = ut[Ct] = ut[tn] = ut[pt] = ut[mn] = ut[Ke] = ut[jr] = ut[ti] = ut[ni] = ut[ei] = !0, ut[Ft] = ut[Bt] = ut[Ce] = !1;
      var Dc = {
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
      }, Nc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Wc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Bc = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Uc = parseFloat, $c = parseInt, js = typeof kr == "object" && kr && kr.Object === Object && kr, qc = typeof self == "object" && self && self.Object === Object && self, At = js || qc || Function("return this")(), li = s && !s.nodeType && s, Zn = li && !0 && f && !f.nodeType && f, ta = Zn && Zn.exports === li, fi = ta && js.process, nn = function() {
        try {
          var v = Zn && Zn.require && Zn.require("util").types;
          return v || fi && fi.binding && fi.binding("util");
        } catch {
        }
      }(), na = nn && nn.isArrayBuffer, ea = nn && nn.isDate, ra = nn && nn.isMap, ia = nn && nn.isRegExp, sa = nn && nn.isSet, aa = nn && nn.isTypedArray;
      function Zt(v, b, C) {
        switch (C.length) {
          case 0:
            return v.call(b);
          case 1:
            return v.call(b, C[0]);
          case 2:
            return v.call(b, C[0], C[1]);
          case 3:
            return v.call(b, C[0], C[1], C[2]);
        }
        return v.apply(b, C);
      }
      function zc(v, b, C, k) {
        for (var G = -1, et = v == null ? 0 : v.length; ++G < et; ) {
          var St = v[G];
          b(k, St, C(St), v);
        }
        return k;
      }
      function en(v, b) {
        for (var C = -1, k = v == null ? 0 : v.length; ++C < k && b(v[C], C, v) !== !1; )
          ;
        return v;
      }
      function Gc(v, b) {
        for (var C = v == null ? 0 : v.length; C-- && b(v[C], C, v) !== !1; )
          ;
        return v;
      }
      function oa(v, b) {
        for (var C = -1, k = v == null ? 0 : v.length; ++C < k; )
          if (!b(v[C], C, v))
            return !1;
        return !0;
      }
      function kn(v, b) {
        for (var C = -1, k = v == null ? 0 : v.length, G = 0, et = []; ++C < k; ) {
          var St = v[C];
          b(St, C, v) && (et[G++] = St);
        }
        return et;
      }
      function Xe(v, b) {
        var C = v == null ? 0 : v.length;
        return !!C && ie(v, b, 0) > -1;
      }
      function hi(v, b, C) {
        for (var k = -1, G = v == null ? 0 : v.length; ++k < G; )
          if (C(b, v[k]))
            return !0;
        return !1;
      }
      function dt(v, b) {
        for (var C = -1, k = v == null ? 0 : v.length, G = Array(k); ++C < k; )
          G[C] = b(v[C], C, v);
        return G;
      }
      function Dn(v, b) {
        for (var C = -1, k = b.length, G = v.length; ++C < k; )
          v[G + C] = b[C];
        return v;
      }
      function pi(v, b, C, k) {
        var G = -1, et = v == null ? 0 : v.length;
        for (k && et && (C = v[++G]); ++G < et; )
          C = b(C, v[G], G, v);
        return C;
      }
      function Hc(v, b, C, k) {
        var G = v == null ? 0 : v.length;
        for (k && G && (C = v[--G]); G--; )
          C = b(C, v[G], G, v);
        return C;
      }
      function di(v, b) {
        for (var C = -1, k = v == null ? 0 : v.length; ++C < k; )
          if (b(v[C], C, v))
            return !0;
        return !1;
      }
      var Kc = gi("length");
      function Zc(v) {
        return v.split("");
      }
      function Jc(v) {
        return v.match(ec) || [];
      }
      function ua(v, b, C) {
        var k;
        return C(v, function(G, et, St) {
          if (b(G, et, St))
            return k = et, !1;
        }), k;
      }
      function Qe(v, b, C, k) {
        for (var G = v.length, et = C + (k ? 1 : -1); k ? et-- : ++et < G; )
          if (b(v[et], et, v))
            return et;
        return -1;
      }
      function ie(v, b, C) {
        return b === b ? al(v, b, C) : Qe(v, ca, C);
      }
      function Yc(v, b, C, k) {
        for (var G = C - 1, et = v.length; ++G < et; )
          if (k(v[G], b))
            return G;
        return -1;
      }
      function ca(v) {
        return v !== v;
      }
      function la(v, b) {
        var C = v == null ? 0 : v.length;
        return C ? vi(v, b) / C : Sn;
      }
      function gi(v) {
        return function(b) {
          return b == null ? r : b[v];
        };
      }
      function _i(v) {
        return function(b) {
          return v == null ? r : v[b];
        };
      }
      function fa(v, b, C, k, G) {
        return G(v, function(et, St, at) {
          C = k ? (k = !1, et) : b(C, et, St, at);
        }), C;
      }
      function Xc(v, b) {
        var C = v.length;
        for (v.sort(b); C--; )
          v[C] = v[C].value;
        return v;
      }
      function vi(v, b) {
        for (var C, k = -1, G = v.length; ++k < G; ) {
          var et = b(v[k]);
          et !== r && (C = C === r ? et : C + et);
        }
        return C;
      }
      function mi(v, b) {
        for (var C = -1, k = Array(v); ++C < v; )
          k[C] = b(C);
        return k;
      }
      function Qc(v, b) {
        return dt(b, function(C) {
          return [C, v[C]];
        });
      }
      function ha(v) {
        return v && v.slice(0, _a(v) + 1).replace(ii, "");
      }
      function Jt(v) {
        return function(b) {
          return v(b);
        };
      }
      function wi(v, b) {
        return dt(b, function(C) {
          return v[C];
        });
      }
      function Se(v, b) {
        return v.has(b);
      }
      function pa(v, b) {
        for (var C = -1, k = v.length; ++C < k && ie(b, v[C], 0) > -1; )
          ;
        return C;
      }
      function da(v, b) {
        for (var C = v.length; C-- && ie(b, v[C], 0) > -1; )
          ;
        return C;
      }
      function Vc(v, b) {
        for (var C = v.length, k = 0; C--; )
          v[C] === b && ++k;
        return k;
      }
      var jc = _i(Dc), tl = _i(Nc);
      function nl(v) {
        return "\\" + Bc[v];
      }
      function el(v, b) {
        return v == null ? r : v[b];
      }
      function se(v) {
        return Fc.test(v);
      }
      function rl(v) {
        return Lc.test(v);
      }
      function il(v) {
        for (var b, C = []; !(b = v.next()).done; )
          C.push(b.value);
        return C;
      }
      function yi(v) {
        var b = -1, C = Array(v.size);
        return v.forEach(function(k, G) {
          C[++b] = [G, k];
        }), C;
      }
      function ga(v, b) {
        return function(C) {
          return v(b(C));
        };
      }
      function Nn(v, b) {
        for (var C = -1, k = v.length, G = 0, et = []; ++C < k; ) {
          var St = v[C];
          (St === b || St === I) && (v[C] = I, et[G++] = C);
        }
        return et;
      }
      function Ve(v) {
        var b = -1, C = Array(v.size);
        return v.forEach(function(k) {
          C[++b] = k;
        }), C;
      }
      function sl(v) {
        var b = -1, C = Array(v.size);
        return v.forEach(function(k) {
          C[++b] = [k, k];
        }), C;
      }
      function al(v, b, C) {
        for (var k = C - 1, G = v.length; ++k < G; )
          if (v[k] === b)
            return k;
        return -1;
      }
      function ol(v, b, C) {
        for (var k = C + 1; k--; )
          if (v[k] === b)
            return k;
        return k;
      }
      function ae(v) {
        return se(v) ? cl(v) : Kc(v);
      }
      function hn(v) {
        return se(v) ? ll(v) : Zc(v);
      }
      function _a(v) {
        for (var b = v.length; b-- && Vu.test(v.charAt(b)); )
          ;
        return b;
      }
      var ul = _i(Wc);
      function cl(v) {
        for (var b = ci.lastIndex = 0; ci.test(v); )
          ++b;
        return b;
      }
      function ll(v) {
        return v.match(ci) || [];
      }
      function fl(v) {
        return v.match(Tc) || [];
      }
      var hl = function v(b) {
        b = b == null ? At : oe.defaults(At.Object(), b, oe.pick(At, Oc));
        var C = b.Array, k = b.Date, G = b.Error, et = b.Function, St = b.Math, at = b.Object, Mi = b.RegExp, pl = b.String, rn = b.TypeError, je = C.prototype, dl = et.prototype, ue = at.prototype, tr = b["__core-js_shared__"], nr = dl.toString, st = ue.hasOwnProperty, gl = 0, va = function() {
          var t = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), er = ue.toString, _l = nr.call(at), vl = At._, ml = Mi(
          "^" + nr.call(st).replace(ri, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), rr = ta ? b.Buffer : r, Wn = b.Symbol, ir = b.Uint8Array, ma = rr ? rr.allocUnsafe : r, sr = ga(at.getPrototypeOf, at), wa = at.create, ya = ue.propertyIsEnumerable, ar = je.splice, Ma = Wn ? Wn.isConcatSpreadable : r, xe = Wn ? Wn.iterator : r, Jn = Wn ? Wn.toStringTag : r, or = function() {
          try {
            var t = jn(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), wl = b.clearTimeout !== At.clearTimeout && b.clearTimeout, yl = k && k.now !== At.Date.now && k.now, Ml = b.setTimeout !== At.setTimeout && b.setTimeout, ur = St.ceil, cr = St.floor, Ci = at.getOwnPropertySymbols, Cl = rr ? rr.isBuffer : r, Ca = b.isFinite, bl = je.join, Sl = ga(at.keys, at), xt = St.max, Et = St.min, xl = k.now, Il = b.parseInt, ba = St.random, Al = je.reverse, bi = jn(b, "DataView"), Ie = jn(b, "Map"), Si = jn(b, "Promise"), ce = jn(b, "Set"), Ae = jn(b, "WeakMap"), Pe = jn(at, "create"), lr = Ae && new Ae(), le = {}, Pl = te(bi), El = te(Ie), Rl = te(Si), Tl = te(ce), Fl = te(Ae), fr = Wn ? Wn.prototype : r, Ee = fr ? fr.valueOf : r, Sa = fr ? fr.toString : r;
        function u(t) {
          if (mt(t) && !H(t) && !(t instanceof j)) {
            if (t instanceof sn)
              return t;
            if (st.call(t, "__wrapped__"))
              return Io(t);
          }
          return new sn(t);
        }
        var fe = /* @__PURE__ */ function() {
          function t() {
          }
          return function(n) {
            if (!gt(n))
              return {};
            if (wa)
              return wa(n);
            t.prototype = n;
            var e = new t();
            return t.prototype = r, e;
          };
        }();
        function hr() {
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
          escape: Ku,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Zu,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Ls,
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
        }, u.prototype = hr.prototype, u.prototype.constructor = u, sn.prototype = fe(hr.prototype), sn.prototype.constructor = sn;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = O, this.__views__ = [];
        }
        function Ll() {
          var t = new j(this.__wrapped__);
          return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
        }
        function Ol() {
          if (this.__filtered__) {
            var t = new j(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function kl() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = H(t), i = n < 0, o = e ? t.length : 0, c = Jf(0, o, this.__views__), h = c.start, g = c.end, w = g - h, S = i ? g : h - 1, x = this.__iteratees__, A = x.length, L = 0, D = Et(w, this.__takeCount__);
          if (!e || !i && o == w && D == w)
            return Ja(t, this.__actions__);
          var B = [];
          t:
            for (; w-- && L < D; ) {
              S += n;
              for (var Y = -1, U = t[S]; ++Y < A; ) {
                var V = x[Y], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == Ge)
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
        j.prototype = fe(hr.prototype), j.prototype.constructor = j;
        function Yn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Dl() {
          this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
        }
        function Nl(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Wl(t) {
          var n = this.__data__;
          if (Pe) {
            var e = n[t];
            return e === y ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function Bl(t) {
          var n = this.__data__;
          return Pe ? n[t] !== r : st.call(n, t);
        }
        function Ul(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Pe && n === r ? y : n, this;
        }
        Yn.prototype.clear = Dl, Yn.prototype.delete = Nl, Yn.prototype.get = Wl, Yn.prototype.has = Bl, Yn.prototype.set = Ul;
        function xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function $l() {
          this.__data__ = [], this.size = 0;
        }
        function ql(t) {
          var n = this.__data__, e = pr(n, t);
          if (e < 0)
            return !1;
          var i = n.length - 1;
          return e == i ? n.pop() : ar.call(n, e, 1), --this.size, !0;
        }
        function zl(t) {
          var n = this.__data__, e = pr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Gl(t) {
          return pr(this.__data__, t) > -1;
        }
        function Hl(t, n) {
          var e = this.__data__, i = pr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        xn.prototype.clear = $l, xn.prototype.delete = ql, xn.prototype.get = zl, xn.prototype.has = Gl, xn.prototype.set = Hl;
        function In(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Kl() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Ie || xn)(),
            string: new Yn()
          };
        }
        function Zl(t) {
          var n = xr(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function Jl(t) {
          return xr(this, t).get(t);
        }
        function Yl(t) {
          return xr(this, t).has(t);
        }
        function Xl(t, n) {
          var e = xr(this, t), i = e.size;
          return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
        }
        In.prototype.clear = Kl, In.prototype.delete = Zl, In.prototype.get = Jl, In.prototype.has = Yl, In.prototype.set = Xl;
        function Xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new In(); ++n < e; )
            this.add(t[n]);
        }
        function Ql(t) {
          return this.__data__.set(t, y), this;
        }
        function Vl(t) {
          return this.__data__.has(t);
        }
        Xn.prototype.add = Xn.prototype.push = Ql, Xn.prototype.has = Vl;
        function pn(t) {
          var n = this.__data__ = new xn(t);
          this.size = n.size;
        }
        function jl() {
          this.__data__ = new xn(), this.size = 0;
        }
        function tf(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function nf(t) {
          return this.__data__.get(t);
        }
        function ef(t) {
          return this.__data__.has(t);
        }
        function rf(t, n) {
          var e = this.__data__;
          if (e instanceof xn) {
            var i = e.__data__;
            if (!Ie || i.length < l - 1)
              return i.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new In(i);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = jl, pn.prototype.delete = tf, pn.prototype.get = nf, pn.prototype.has = ef, pn.prototype.set = rf;
        function xa(t, n) {
          var e = H(t), i = !e && ne(t), o = !e && !i && zn(t), c = !e && !i && !o && ge(t), h = e || i || o || c, g = h ? mi(t.length, pl) : [], w = g.length;
          for (var S in t)
            (n || st.call(t, S)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
            (S == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (S == "offset" || S == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            c && (S == "buffer" || S == "byteLength" || S == "byteOffset") || // Skip index properties.
            Rn(S, w))) && g.push(S);
          return g;
        }
        function Ia(t) {
          var n = t.length;
          return n ? t[ki(0, n - 1)] : r;
        }
        function sf(t, n) {
          return Ir($t(t), Qn(n, 0, t.length));
        }
        function af(t) {
          return Ir($t(t));
        }
        function xi(t, n, e) {
          (e !== r && !dn(t[n], e) || e === r && !(n in t)) && An(t, n, e);
        }
        function Re(t, n, e) {
          var i = t[n];
          (!(st.call(t, n) && dn(i, e)) || e === r && !(n in t)) && An(t, n, e);
        }
        function pr(t, n) {
          for (var e = t.length; e--; )
            if (dn(t[e][0], n))
              return e;
          return -1;
        }
        function of(t, n, e, i) {
          return Bn(t, function(o, c, h) {
            n(i, o, e(o), h);
          }), i;
        }
        function Aa(t, n) {
          return t && yn(n, It(n), t);
        }
        function uf(t, n) {
          return t && yn(n, zt(n), t);
        }
        function An(t, n, e) {
          n == "__proto__" && or ? or(t, n, {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0
          }) : t[n] = e;
        }
        function Ii(t, n) {
          for (var e = -1, i = n.length, o = C(i), c = t == null; ++e < i; )
            o[e] = c ? r : as(t, n[e]);
          return o;
        }
        function Qn(t, n, e) {
          return t === t && (e !== r && (t = t <= e ? t : e), n !== r && (t = t >= n ? t : n)), t;
        }
        function an(t, n, e, i, o, c) {
          var h, g = n & m, w = n & R, S = n & F;
          if (e && (h = o ? e(t, i, o, c) : e(t)), h !== r)
            return h;
          if (!gt(t))
            return t;
          var x = H(t);
          if (x) {
            if (h = Xf(t), !g)
              return $t(t, h);
          } else {
            var A = Rt(t), L = A == Bt || A == vn;
            if (zn(t))
              return Qa(t, g);
            if (A == Ct || A == nt || L && !o) {
              if (h = w || L ? {} : vo(t), !g)
                return w ? Bf(t, uf(h, t)) : Wf(t, Aa(h, t));
            } else {
              if (!ut[A])
                return o ? t : {};
              h = Qf(t, A, g);
            }
          }
          c || (c = new pn());
          var D = c.get(t);
          if (D)
            return D;
          c.set(t, h), Ko(t) ? t.forEach(function(U) {
            h.add(an(U, n, e, U, t, c));
          }) : Go(t) && t.forEach(function(U, V) {
            h.set(V, an(U, n, e, V, t, c));
          });
          var B = S ? w ? Ki : Hi : w ? zt : It, Y = x ? r : B(t);
          return en(Y || t, function(U, V) {
            Y && (V = U, U = t[V]), Re(h, V, an(U, n, e, V, t, c));
          }), h;
        }
        function cf(t) {
          var n = It(t);
          return function(e) {
            return Pa(e, t, n);
          };
        }
        function Pa(t, n, e) {
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
        function Ea(t, n, e) {
          if (typeof t != "function")
            throw new rn(d);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Te(t, n, e, i) {
          var o = -1, c = Xe, h = !0, g = t.length, w = [], S = n.length;
          if (!g)
            return w;
          e && (n = dt(n, Jt(e))), i ? (c = hi, h = !1) : n.length >= l && (c = Se, h = !1, n = new Xn(n));
          t:
            for (; ++o < g; ) {
              var x = t[o], A = e == null ? x : e(x);
              if (x = i || x !== 0 ? x : 0, h && A === A) {
                for (var L = S; L--; )
                  if (n[L] === A)
                    continue t;
                w.push(x);
              } else c(n, A, i) || w.push(x);
            }
          return w;
        }
        var Bn = eo(wn), Ra = eo(Pi, !0);
        function lf(t, n) {
          var e = !0;
          return Bn(t, function(i, o, c) {
            return e = !!n(i, o, c), e;
          }), e;
        }
        function dr(t, n, e) {
          for (var i = -1, o = t.length; ++i < o; ) {
            var c = t[i], h = n(c);
            if (h != null && (g === r ? h === h && !Xt(h) : e(h, g)))
              var g = h, w = c;
          }
          return w;
        }
        function ff(t, n, e, i) {
          var o = t.length;
          for (e = J(e), e < 0 && (e = -e > o ? 0 : o + e), i = i === r || i > o ? o : J(i), i < 0 && (i += o), i = e > i ? 0 : Jo(i); e < i; )
            t[e++] = n;
          return t;
        }
        function Ta(t, n) {
          var e = [];
          return Bn(t, function(i, o, c) {
            n(i, o, c) && e.push(i);
          }), e;
        }
        function Pt(t, n, e, i, o) {
          var c = -1, h = t.length;
          for (e || (e = jf), o || (o = []); ++c < h; ) {
            var g = t[c];
            n > 0 && e(g) ? n > 1 ? Pt(g, n - 1, e, i, o) : Dn(o, g) : i || (o[o.length] = g);
          }
          return o;
        }
        var Ai = ro(), Fa = ro(!0);
        function wn(t, n) {
          return t && Ai(t, n, It);
        }
        function Pi(t, n) {
          return t && Fa(t, n, It);
        }
        function gr(t, n) {
          return kn(n, function(e) {
            return Tn(t[e]);
          });
        }
        function Vn(t, n) {
          n = $n(n, t);
          for (var e = 0, i = n.length; t != null && e < i; )
            t = t[Mn(n[e++])];
          return e && e == i ? t : r;
        }
        function La(t, n, e) {
          var i = n(t);
          return H(t) ? i : Dn(i, e(t));
        }
        function Ot(t) {
          return t == null ? t === r ? Bu : On : Jn && Jn in at(t) ? Zf(t) : ah(t);
        }
        function Ei(t, n) {
          return t > n;
        }
        function hf(t, n) {
          return t != null && st.call(t, n);
        }
        function pf(t, n) {
          return t != null && n in at(t);
        }
        function df(t, n, e) {
          return t >= Et(n, e) && t < xt(n, e);
        }
        function Ri(t, n, e) {
          for (var i = e ? hi : Xe, o = t[0].length, c = t.length, h = c, g = C(c), w = 1 / 0, S = []; h--; ) {
            var x = t[h];
            h && n && (x = dt(x, Jt(n))), w = Et(x.length, w), g[h] = !e && (n || o >= 120 && x.length >= 120) ? new Xn(h && x) : r;
          }
          x = t[0];
          var A = -1, L = g[0];
          t:
            for (; ++A < o && S.length < w; ) {
              var D = x[A], B = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? Se(L, B) : i(S, B, e))) {
                for (h = c; --h; ) {
                  var Y = g[h];
                  if (!(Y ? Se(Y, B) : i(t[h], B, e)))
                    continue t;
                }
                L && L.push(B), S.push(D);
              }
            }
          return S;
        }
        function gf(t, n, e, i) {
          return wn(t, function(o, c, h) {
            n(i, e(o), c, h);
          }), i;
        }
        function Fe(t, n, e) {
          n = $n(n, t), t = Mo(t, n);
          var i = t == null ? t : t[Mn(un(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Oa(t) {
          return mt(t) && Ot(t) == nt;
        }
        function _f(t) {
          return mt(t) && Ot(t) == be;
        }
        function vf(t) {
          return mt(t) && Ot(t) == Mt;
        }
        function Le(t, n, e, i, o) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : mf(t, n, e, i, Le, o);
        }
        function mf(t, n, e, i, o, c) {
          var h = H(t), g = H(n), w = h ? ht : Rt(t), S = g ? ht : Rt(n);
          w = w == nt ? Ct : w, S = S == nt ? Ct : S;
          var x = w == Ct, A = S == Ct, L = w == S;
          if (L && zn(t)) {
            if (!zn(n))
              return !1;
            h = !0, x = !1;
          }
          if (L && !x)
            return c || (c = new pn()), h || ge(t) ? po(t, n, e, i, o, c) : Hf(t, n, w, e, i, o, c);
          if (!(e & T)) {
            var D = x && st.call(t, "__wrapped__"), B = A && st.call(n, "__wrapped__");
            if (D || B) {
              var Y = D ? t.value() : t, U = B ? n.value() : n;
              return c || (c = new pn()), o(Y, U, e, i, c);
            }
          }
          return L ? (c || (c = new pn()), Kf(t, n, e, i, o, c)) : !1;
        }
        function wf(t) {
          return mt(t) && Rt(t) == vt;
        }
        function Ti(t, n, e, i) {
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
            var w = g[0], S = t[w], x = g[1];
            if (h && g[2]) {
              if (S === r && !(w in t))
                return !1;
            } else {
              var A = new pn();
              if (i)
                var L = i(S, x, w, t, n, A);
              if (!(L === r ? Le(x, S, T | E, i, A) : L))
                return !1;
            }
          }
          return !0;
        }
        function ka(t) {
          if (!gt(t) || nh(t))
            return !1;
          var n = Tn(t) ? ml : uc;
          return n.test(te(t));
        }
        function yf(t) {
          return mt(t) && Ot(t) == tn;
        }
        function Mf(t) {
          return mt(t) && Rt(t) == pt;
        }
        function Cf(t) {
          return mt(t) && Fr(t.length) && !!lt[Ot(t)];
        }
        function Da(t) {
          return typeof t == "function" ? t : t == null ? Gt : typeof t == "object" ? H(t) ? Ba(t[0], t[1]) : Wa(t) : su(t);
        }
        function Fi(t) {
          if (!De(t))
            return Sl(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function bf(t) {
          if (!gt(t))
            return sh(t);
          var n = De(t), e = [];
          for (var i in t)
            i == "constructor" && (n || !st.call(t, i)) || e.push(i);
          return e;
        }
        function Li(t, n) {
          return t < n;
        }
        function Na(t, n) {
          var e = -1, i = qt(t) ? C(t.length) : [];
          return Bn(t, function(o, c, h) {
            i[++e] = n(o, c, h);
          }), i;
        }
        function Wa(t) {
          var n = Ji(t);
          return n.length == 1 && n[0][2] ? wo(n[0][0], n[0][1]) : function(e) {
            return e === t || Ti(e, t, n);
          };
        }
        function Ba(t, n) {
          return Xi(t) && mo(n) ? wo(Mn(t), n) : function(e) {
            var i = as(e, t);
            return i === r && i === n ? os(e, t) : Le(n, i, T | E);
          };
        }
        function _r(t, n, e, i, o) {
          t !== n && Ai(n, function(c, h) {
            if (o || (o = new pn()), gt(c))
              Sf(t, n, h, e, _r, i, o);
            else {
              var g = i ? i(Vi(t, h), c, h + "", t, n, o) : r;
              g === r && (g = c), xi(t, h, g);
            }
          }, zt);
        }
        function Sf(t, n, e, i, o, c, h) {
          var g = Vi(t, e), w = Vi(n, e), S = h.get(w);
          if (S) {
            xi(t, e, S);
            return;
          }
          var x = c ? c(g, w, e + "", t, n, h) : r, A = x === r;
          if (A) {
            var L = H(w), D = !L && zn(w), B = !L && !D && ge(w);
            x = w, L || D || B ? H(g) ? x = g : wt(g) ? x = $t(g) : D ? (A = !1, x = Qa(w, !0)) : B ? (A = !1, x = Va(w, !0)) : x = [] : We(w) || ne(w) ? (x = g, ne(g) ? x = Yo(g) : (!gt(g) || Tn(g)) && (x = vo(w))) : A = !1;
          }
          A && (h.set(w, x), o(x, w, i, c, h), h.delete(w)), xi(t, e, x);
        }
        function Ua(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, Rn(n, e) ? t[n] : r;
        }
        function $a(t, n, e) {
          n.length ? n = dt(n, function(c) {
            return H(c) ? function(h) {
              return Vn(h, c.length === 1 ? c[0] : c);
            } : c;
          }) : n = [Gt];
          var i = -1;
          n = dt(n, Jt(W()));
          var o = Na(t, function(c, h, g) {
            var w = dt(n, function(S) {
              return S(c);
            });
            return { criteria: w, index: ++i, value: c };
          });
          return Xc(o, function(c, h) {
            return Nf(c, h, e);
          });
        }
        function xf(t, n) {
          return qa(t, n, function(e, i) {
            return os(t, i);
          });
        }
        function qa(t, n, e) {
          for (var i = -1, o = n.length, c = {}; ++i < o; ) {
            var h = n[i], g = Vn(t, h);
            e(g, h) && Oe(c, $n(h, t), g);
          }
          return c;
        }
        function If(t) {
          return function(n) {
            return Vn(n, t);
          };
        }
        function Oi(t, n, e, i) {
          var o = i ? Yc : ie, c = -1, h = n.length, g = t;
          for (t === n && (n = $t(n)), e && (g = dt(t, Jt(e))); ++c < h; )
            for (var w = 0, S = n[c], x = e ? e(S) : S; (w = o(g, x, w, i)) > -1; )
              g !== t && ar.call(g, w, 1), ar.call(t, w, 1);
          return t;
        }
        function za(t, n) {
          for (var e = t ? n.length : 0, i = e - 1; e--; ) {
            var o = n[e];
            if (e == i || o !== c) {
              var c = o;
              Rn(o) ? ar.call(t, o, 1) : Wi(t, o);
            }
          }
          return t;
        }
        function ki(t, n) {
          return t + cr(ba() * (n - t + 1));
        }
        function Af(t, n, e, i) {
          for (var o = -1, c = xt(ur((n - t) / (e || 1)), 0), h = C(c); c--; )
            h[i ? c : ++o] = t, t += e;
          return h;
        }
        function Di(t, n) {
          var e = "";
          if (!t || n < 1 || n > _n)
            return e;
          do
            n % 2 && (e += t), n = cr(n / 2), n && (t += t);
          while (n);
          return e;
        }
        function X(t, n) {
          return ji(yo(t, n, Gt), t + "");
        }
        function Pf(t) {
          return Ia(_e(t));
        }
        function Ef(t, n) {
          var e = _e(t);
          return Ir(e, Qn(n, 0, e.length));
        }
        function Oe(t, n, e, i) {
          if (!gt(t))
            return t;
          n = $n(n, t);
          for (var o = -1, c = n.length, h = c - 1, g = t; g != null && ++o < c; ) {
            var w = Mn(n[o]), S = e;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return t;
            if (o != h) {
              var x = g[w];
              S = i ? i(x, w, g) : r, S === r && (S = gt(x) ? x : Rn(n[o + 1]) ? [] : {});
            }
            Re(g, w, S), g = g[w];
          }
          return t;
        }
        var Ga = lr ? function(t, n) {
          return lr.set(t, n), t;
        } : Gt, Rf = or ? function(t, n) {
          return or(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: cs(n),
            writable: !0
          });
        } : Gt;
        function Tf(t) {
          return Ir(_e(t));
        }
        function on(t, n, e) {
          var i = -1, o = t.length;
          n < 0 && (n = -n > o ? 0 : o + n), e = e > o ? o : e, e < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var c = C(o); ++i < o; )
            c[i] = t[i + n];
          return c;
        }
        function Ff(t, n) {
          var e;
          return Bn(t, function(i, o, c) {
            return e = n(i, o, c), !e;
          }), !!e;
        }
        function vr(t, n, e) {
          var i = 0, o = t == null ? i : t.length;
          if (typeof n == "number" && n === n && o <= z) {
            for (; i < o; ) {
              var c = i + o >>> 1, h = t[c];
              h !== null && !Xt(h) && (e ? h <= n : h < n) ? i = c + 1 : o = c;
            }
            return o;
          }
          return Ni(t, n, Gt, e);
        }
        function Ni(t, n, e, i) {
          var o = 0, c = t == null ? 0 : t.length;
          if (c === 0)
            return 0;
          n = e(n);
          for (var h = n !== n, g = n === null, w = Xt(n), S = n === r; o < c; ) {
            var x = cr((o + c) / 2), A = e(t[x]), L = A !== r, D = A === null, B = A === A, Y = Xt(A);
            if (h)
              var U = i || B;
            else S ? U = B && (i || L) : g ? U = B && L && (i || !D) : w ? U = B && L && !D && (i || !Y) : D || Y ? U = !1 : U = i ? A <= n : A < n;
            U ? o = x + 1 : c = x;
          }
          return Et(c, $);
        }
        function Ha(t, n) {
          for (var e = -1, i = t.length, o = 0, c = []; ++e < i; ) {
            var h = t[e], g = n ? n(h) : h;
            if (!e || !dn(g, w)) {
              var w = g;
              c[o++] = h === 0 ? 0 : h;
            }
          }
          return c;
        }
        function Ka(t) {
          return typeof t == "number" ? t : Xt(t) ? Sn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (H(t))
            return dt(t, Yt) + "";
          if (Xt(t))
            return Sa ? Sa.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -bn ? "-0" : n;
        }
        function Un(t, n, e) {
          var i = -1, o = Xe, c = t.length, h = !0, g = [], w = g;
          if (e)
            h = !1, o = hi;
          else if (c >= l) {
            var S = n ? null : zf(t);
            if (S)
              return Ve(S);
            h = !1, o = Se, w = new Xn();
          } else
            w = n ? [] : g;
          t:
            for (; ++i < c; ) {
              var x = t[i], A = n ? n(x) : x;
              if (x = e || x !== 0 ? x : 0, h && A === A) {
                for (var L = w.length; L--; )
                  if (w[L] === A)
                    continue t;
                n && w.push(A), g.push(x);
              } else o(w, A, e) || (w !== g && w.push(A), g.push(x));
            }
          return g;
        }
        function Wi(t, n) {
          return n = $n(n, t), t = Mo(t, n), t == null || delete t[Mn(un(n))];
        }
        function Za(t, n, e, i) {
          return Oe(t, n, e(Vn(t, n)), i);
        }
        function mr(t, n, e, i) {
          for (var o = t.length, c = i ? o : -1; (i ? c-- : ++c < o) && n(t[c], c, t); )
            ;
          return e ? on(t, i ? 0 : c, i ? c + 1 : o) : on(t, i ? c + 1 : 0, i ? o : c);
        }
        function Ja(t, n) {
          var e = t;
          return e instanceof j && (e = e.value()), pi(n, function(i, o) {
            return o.func.apply(o.thisArg, Dn([i], o.args));
          }, e);
        }
        function Bi(t, n, e) {
          var i = t.length;
          if (i < 2)
            return i ? Un(t[0]) : [];
          for (var o = -1, c = C(i); ++o < i; )
            for (var h = t[o], g = -1; ++g < i; )
              g != o && (c[o] = Te(c[o] || h, t[g], n, e));
          return Un(Pt(c, 1), n, e);
        }
        function Ya(t, n, e) {
          for (var i = -1, o = t.length, c = n.length, h = {}; ++i < o; ) {
            var g = i < c ? n[i] : r;
            e(h, t[i], g);
          }
          return h;
        }
        function Ui(t) {
          return wt(t) ? t : [];
        }
        function $i(t) {
          return typeof t == "function" ? t : Gt;
        }
        function $n(t, n) {
          return H(t) ? t : Xi(t, n) ? [t] : xo(rt(t));
        }
        var Lf = X;
        function qn(t, n, e) {
          var i = t.length;
          return e = e === r ? i : e, !n && e >= i ? t : on(t, n, e);
        }
        var Xa = wl || function(t) {
          return At.clearTimeout(t);
        };
        function Qa(t, n) {
          if (n)
            return t.slice();
          var e = t.length, i = ma ? ma(e) : new t.constructor(e);
          return t.copy(i), i;
        }
        function qi(t) {
          var n = new t.constructor(t.byteLength);
          return new ir(n).set(new ir(t)), n;
        }
        function Of(t, n) {
          var e = n ? qi(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function kf(t) {
          var n = new t.constructor(t.source, Os.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Df(t) {
          return Ee ? at(Ee.call(t)) : {};
        }
        function Va(t, n) {
          var e = n ? qi(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function ja(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, o = t === t, c = Xt(t), h = n !== r, g = n === null, w = n === n, S = Xt(n);
            if (!g && !S && !c && t > n || c && h && w && !g && !S || i && h && w || !e && w || !o)
              return 1;
            if (!i && !c && !S && t < n || S && e && o && !i && !c || g && e && o || !h && o || !w)
              return -1;
          }
          return 0;
        }
        function Nf(t, n, e) {
          for (var i = -1, o = t.criteria, c = n.criteria, h = o.length, g = e.length; ++i < h; ) {
            var w = ja(o[i], c[i]);
            if (w) {
              if (i >= g)
                return w;
              var S = e[i];
              return w * (S == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function to(t, n, e, i) {
          for (var o = -1, c = t.length, h = e.length, g = -1, w = n.length, S = xt(c - h, 0), x = C(w + S), A = !i; ++g < w; )
            x[g] = n[g];
          for (; ++o < h; )
            (A || o < c) && (x[e[o]] = t[o]);
          for (; S--; )
            x[g++] = t[o++];
          return x;
        }
        function no(t, n, e, i) {
          for (var o = -1, c = t.length, h = -1, g = e.length, w = -1, S = n.length, x = xt(c - g, 0), A = C(x + S), L = !i; ++o < x; )
            A[o] = t[o];
          for (var D = o; ++w < S; )
            A[D + w] = n[w];
          for (; ++h < g; )
            (L || o < c) && (A[D + e[h]] = t[o++]);
          return A;
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
            w === r && (w = t[g]), o ? An(e, g, w) : Re(e, g, w);
          }
          return e;
        }
        function Wf(t, n) {
          return yn(t, Yi(t), n);
        }
        function Bf(t, n) {
          return yn(t, go(t), n);
        }
        function wr(t, n) {
          return function(e, i) {
            var o = H(e) ? zc : of, c = n ? n() : {};
            return o(e, t, W(i, 2), c);
          };
        }
        function he(t) {
          return X(function(n, e) {
            var i = -1, o = e.length, c = o > 1 ? e[o - 1] : r, h = o > 2 ? e[2] : r;
            for (c = t.length > 3 && typeof c == "function" ? (o--, c) : r, h && kt(e[0], e[1], h) && (c = o < 3 ? r : c, o = 1), n = at(n); ++i < o; ) {
              var g = e[i];
              g && t(n, g, i, c);
            }
            return n;
          });
        }
        function eo(t, n) {
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
        function ro(t) {
          return function(n, e, i) {
            for (var o = -1, c = at(n), h = i(n), g = h.length; g--; ) {
              var w = h[t ? g : ++o];
              if (e(c[w], w, c) === !1)
                break;
            }
            return n;
          };
        }
        function Uf(t, n, e) {
          var i = n & N, o = ke(t);
          function c() {
            var h = this && this !== At && this instanceof c ? o : t;
            return h.apply(i ? e : this, arguments);
          }
          return c;
        }
        function io(t) {
          return function(n) {
            n = rt(n);
            var e = se(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), o = e ? qn(e, 1).join("") : n.slice(1);
            return i[t]() + o;
          };
        }
        function pe(t) {
          return function(n) {
            return pi(ru(eu(n).replace(Ec, "")), t, "");
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
            return gt(i) ? i : e;
          };
        }
        function $f(t, n, e) {
          var i = ke(t);
          function o() {
            for (var c = arguments.length, h = C(c), g = c, w = de(o); g--; )
              h[g] = arguments[g];
            var S = c < 3 && h[0] !== w && h[c - 1] !== w ? [] : Nn(h, w);
            if (c -= S.length, c < e)
              return co(
                t,
                n,
                yr,
                o.placeholder,
                r,
                h,
                S,
                r,
                r,
                e - c
              );
            var x = this && this !== At && this instanceof o ? i : t;
            return Zt(x, this, h);
          }
          return o;
        }
        function so(t) {
          return function(n, e, i) {
            var o = at(n);
            if (!qt(n)) {
              var c = W(e, 3);
              n = It(n), e = function(g) {
                return c(o[g], g, o);
              };
            }
            var h = t(n, e, i);
            return h > -1 ? o[c ? n[h] : h] : r;
          };
        }
        function ao(t) {
          return En(function(n) {
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
              var g = Sr(c), w = g == "wrapper" ? Zi(c) : r;
              w && Qi(w[0]) && w[1] == (bt | Z | _t | jt) && !w[4].length && w[9] == 1 ? h = h[Sr(w[0])].apply(h, w[3]) : h = c.length == 1 && Qi(c) ? h[g]() : h.thru(c);
            }
            return function() {
              var S = arguments, x = S[0];
              if (h && S.length == 1 && H(x))
                return h.plant(x).value();
              for (var A = 0, L = e ? n[A].apply(this, S) : x; ++A < e; )
                L = n[A].call(this, L);
              return L;
            };
          });
        }
        function yr(t, n, e, i, o, c, h, g, w, S) {
          var x = n & bt, A = n & N, L = n & q, D = n & (Z | it), B = n & Ht, Y = L ? r : ke(t);
          function U() {
            for (var V = arguments.length, tt = C(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = de(U), Vt = Vc(tt, Dt);
            if (i && (tt = to(tt, i, o, D)), c && (tt = no(tt, c, h, D)), V -= Vt, D && V < S) {
              var yt = Nn(tt, Dt);
              return co(
                t,
                n,
                yr,
                U.placeholder,
                e,
                tt,
                yt,
                g,
                w,
                S - V
              );
            }
            var gn = A ? e : this, Ln = L ? gn[t] : t;
            return V = tt.length, g ? tt = oh(tt, g) : B && V > 1 && tt.reverse(), x && w < V && (tt.length = w), this && this !== At && this instanceof U && (Ln = Y || ke(Ln)), Ln.apply(gn, tt);
          }
          return U;
        }
        function oo(t, n) {
          return function(e, i) {
            return gf(e, t, n(i), {});
          };
        }
        function Mr(t, n) {
          return function(e, i) {
            var o;
            if (e === r && i === r)
              return n;
            if (e !== r && (o = e), i !== r) {
              if (o === r)
                return i;
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = Ka(e), i = Ka(i)), o = t(e, i);
            }
            return o;
          };
        }
        function zi(t) {
          return En(function(n) {
            return n = dt(n, Jt(W())), X(function(e) {
              var i = this;
              return t(n, function(o) {
                return Zt(o, i, e);
              });
            });
          });
        }
        function Cr(t, n) {
          n = n === r ? " " : Yt(n);
          var e = n.length;
          if (e < 2)
            return e ? Di(n, t) : n;
          var i = Di(n, ur(t / ae(n)));
          return se(n) ? qn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function qf(t, n, e, i) {
          var o = n & N, c = ke(t);
          function h() {
            for (var g = -1, w = arguments.length, S = -1, x = i.length, A = C(x + w), L = this && this !== At && this instanceof h ? c : t; ++S < x; )
              A[S] = i[S];
            for (; w--; )
              A[S++] = arguments[++g];
            return Zt(L, o ? e : this, A);
          }
          return h;
        }
        function uo(t) {
          return function(n, e, i) {
            return i && typeof i != "number" && kt(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), Af(n, e, i, t);
          };
        }
        function br(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = cn(n), e = cn(e)), t(n, e);
          };
        }
        function co(t, n, e, i, o, c, h, g, w, S) {
          var x = n & Z, A = x ? h : r, L = x ? r : h, D = x ? c : r, B = x ? r : c;
          n |= x ? _t : Wt, n &= ~(x ? Wt : _t), n & K || (n &= ~(N | q));
          var Y = [
            t,
            n,
            o,
            D,
            A,
            B,
            L,
            g,
            w,
            S
          ], U = e.apply(r, Y);
          return Qi(t) && Co(U, Y), U.placeholder = i, bo(U, t, n);
        }
        function Gi(t) {
          var n = St[t];
          return function(e, i) {
            if (e = cn(e), i = i == null ? 0 : Et(J(i), 292), i && Ca(e)) {
              var o = (rt(e) + "e").split("e"), c = n(o[0] + "e" + (+o[1] + i));
              return o = (rt(c) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
            }
            return n(e);
          };
        }
        var zf = ce && 1 / Ve(new ce([, -0]))[1] == bn ? function(t) {
          return new ce(t);
        } : hs;
        function lo(t) {
          return function(n) {
            var e = Rt(n);
            return e == vt ? yi(n) : e == pt ? sl(n) : Qc(n, t(n));
          };
        }
        function Pn(t, n, e, i, o, c, h, g) {
          var w = n & q;
          if (!w && typeof t != "function")
            throw new rn(d);
          var S = i ? i.length : 0;
          if (S || (n &= ~(_t | Wt), i = o = r), h = h === r ? h : xt(J(h), 0), g = g === r ? g : J(g), S -= o ? o.length : 0, n & Wt) {
            var x = i, A = o;
            i = o = r;
          }
          var L = w ? r : Zi(t), D = [
            t,
            n,
            e,
            i,
            o,
            x,
            A,
            c,
            h,
            g
          ];
          if (L && ih(D, L), t = D[0], n = D[1], e = D[2], i = D[3], o = D[4], g = D[9] = D[9] === r ? w ? 0 : t.length : xt(D[9] - S, 0), !g && n & (Z | it) && (n &= ~(Z | it)), !n || n == N)
            var B = Uf(t, n, e);
          else n == Z || n == it ? B = $f(t, n, g) : (n == _t || n == (N | _t)) && !o.length ? B = qf(t, n, e, i) : B = yr.apply(r, D);
          var Y = L ? Ga : Co;
          return bo(Y(B, D), t, n);
        }
        function fo(t, n, e, i) {
          return t === r || dn(t, ue[e]) && !st.call(i, e) ? n : t;
        }
        function ho(t, n, e, i, o, c) {
          return gt(t) && gt(n) && (c.set(n, t), _r(t, n, r, ho, c), c.delete(n)), t;
        }
        function Gf(t) {
          return We(t) ? r : t;
        }
        function po(t, n, e, i, o, c) {
          var h = e & T, g = t.length, w = n.length;
          if (g != w && !(h && w > g))
            return !1;
          var S = c.get(t), x = c.get(n);
          if (S && x)
            return S == n && x == t;
          var A = -1, L = !0, D = e & E ? new Xn() : r;
          for (c.set(t, n), c.set(n, t); ++A < g; ) {
            var B = t[A], Y = n[A];
            if (i)
              var U = h ? i(Y, B, A, n, t, c) : i(B, Y, A, t, n, c);
            if (U !== r) {
              if (U)
                continue;
              L = !1;
              break;
            }
            if (D) {
              if (!di(n, function(V, tt) {
                if (!Se(D, tt) && (B === V || o(B, V, e, i, c)))
                  return D.push(tt);
              })) {
                L = !1;
                break;
              }
            } else if (!(B === Y || o(B, Y, e, i, c))) {
              L = !1;
              break;
            }
          }
          return c.delete(t), c.delete(n), L;
        }
        function Hf(t, n, e, i, o, c, h) {
          switch (e) {
            case ee:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case be:
              return !(t.byteLength != n.byteLength || !c(new ir(t), new ir(n)));
            case ct:
            case Mt:
            case Lt:
              return dn(+t, +n);
            case Ft:
              return t.name == n.name && t.message == n.message;
            case tn:
            case mn:
              return t == n + "";
            case vt:
              var g = yi;
            case pt:
              var w = i & T;
              if (g || (g = Ve), t.size != n.size && !w)
                return !1;
              var S = h.get(t);
              if (S)
                return S == n;
              i |= E, h.set(t, n);
              var x = po(g(t), g(n), i, o, c, h);
              return h.delete(t), x;
            case Ke:
              if (Ee)
                return Ee.call(t) == Ee.call(n);
          }
          return !1;
        }
        function Kf(t, n, e, i, o, c) {
          var h = e & T, g = Hi(t), w = g.length, S = Hi(n), x = S.length;
          if (w != x && !h)
            return !1;
          for (var A = w; A--; ) {
            var L = g[A];
            if (!(h ? L in n : st.call(n, L)))
              return !1;
          }
          var D = c.get(t), B = c.get(n);
          if (D && B)
            return D == n && B == t;
          var Y = !0;
          c.set(t, n), c.set(n, t);
          for (var U = h; ++A < w; ) {
            L = g[A];
            var V = t[L], tt = n[L];
            if (i)
              var Qt = h ? i(tt, V, L, n, t, c) : i(V, tt, L, t, n, c);
            if (!(Qt === r ? V === tt || o(V, tt, e, i, c) : Qt)) {
              Y = !1;
              break;
            }
            U || (U = L == "constructor");
          }
          if (Y && !U) {
            var Dt = t.constructor, Vt = n.constructor;
            Dt != Vt && "constructor" in t && "constructor" in n && !(typeof Dt == "function" && Dt instanceof Dt && typeof Vt == "function" && Vt instanceof Vt) && (Y = !1);
          }
          return c.delete(t), c.delete(n), Y;
        }
        function En(t) {
          return ji(yo(t, r, Eo), t + "");
        }
        function Hi(t) {
          return La(t, It, Yi);
        }
        function Ki(t) {
          return La(t, zt, go);
        }
        var Zi = lr ? function(t) {
          return lr.get(t);
        } : hs;
        function Sr(t) {
          for (var n = t.name + "", e = le[n], i = st.call(le, n) ? e.length : 0; i--; ) {
            var o = e[i], c = o.func;
            if (c == null || c == t)
              return o.name;
          }
          return n;
        }
        function de(t) {
          var n = st.call(u, "placeholder") ? u : t;
          return n.placeholder;
        }
        function W() {
          var t = u.iteratee || ls;
          return t = t === ls ? Da : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function xr(t, n) {
          var e = t.__data__;
          return th(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function Ji(t) {
          for (var n = It(t), e = n.length; e--; ) {
            var i = n[e], o = t[i];
            n[e] = [i, o, mo(o)];
          }
          return n;
        }
        function jn(t, n) {
          var e = el(t, n);
          return ka(e) ? e : r;
        }
        function Zf(t) {
          var n = st.call(t, Jn), e = t[Jn];
          try {
            t[Jn] = r;
            var i = !0;
          } catch {
          }
          var o = er.call(t);
          return i && (n ? t[Jn] = e : delete t[Jn]), o;
        }
        var Yi = Ci ? function(t) {
          return t == null ? [] : (t = at(t), kn(Ci(t), function(n) {
            return ya.call(t, n);
          }));
        } : ps, go = Ci ? function(t) {
          for (var n = []; t; )
            Dn(n, Yi(t)), t = sr(t);
          return n;
        } : ps, Rt = Ot;
        (bi && Rt(new bi(new ArrayBuffer(1))) != ee || Ie && Rt(new Ie()) != vt || Si && Rt(Si.resolve()) != Ut || ce && Rt(new ce()) != pt || Ae && Rt(new Ae()) != Ce) && (Rt = function(t) {
          var n = Ot(t), e = n == Ct ? t.constructor : r, i = e ? te(e) : "";
          if (i)
            switch (i) {
              case Pl:
                return ee;
              case El:
                return vt;
              case Rl:
                return Ut;
              case Tl:
                return pt;
              case Fl:
                return Ce;
            }
          return n;
        });
        function Jf(t, n, e) {
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
                n = Et(n, t + h);
                break;
              case "takeRight":
                t = xt(t, n - h);
                break;
            }
          }
          return { start: t, end: n };
        }
        function Yf(t) {
          var n = t.match(tc);
          return n ? n[1].split(nc) : [];
        }
        function _o(t, n, e) {
          n = $n(n, t);
          for (var i = -1, o = n.length, c = !1; ++i < o; ) {
            var h = Mn(n[i]);
            if (!(c = t != null && e(t, h)))
              break;
            t = t[h];
          }
          return c || ++i != o ? c : (o = t == null ? 0 : t.length, !!o && Fr(o) && Rn(h, o) && (H(t) || ne(t)));
        }
        function Xf(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function vo(t) {
          return typeof t.constructor == "function" && !De(t) ? fe(sr(t)) : {};
        }
        function Qf(t, n, e) {
          var i = t.constructor;
          switch (n) {
            case be:
              return qi(t);
            case ct:
            case Mt:
              return new i(+t);
            case ee:
              return Of(t, e);
            case Jr:
            case Yr:
            case Xr:
            case Qr:
            case Vr:
            case jr:
            case ti:
            case ni:
            case ei:
              return Va(t, e);
            case vt:
              return new i();
            case Lt:
            case mn:
              return new i(t);
            case tn:
              return kf(t);
            case pt:
              return new i();
            case Ke:
              return Df(t);
          }
        }
        function Vf(t, n) {
          var e = n.length;
          if (!e)
            return t;
          var i = e - 1;
          return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(ju, `{
/* [wrapped with ` + n + `] */
`);
        }
        function jf(t) {
          return H(t) || ne(t) || !!(Ma && t && t[Ma]);
        }
        function Rn(t, n) {
          var e = typeof t;
          return n = n ?? _n, !!n && (e == "number" || e != "symbol" && lc.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function kt(t, n, e) {
          if (!gt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && Rn(n, e.length) : i == "string" && n in e) ? dn(e[n], t) : !1;
        }
        function Xi(t, n) {
          if (H(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : Yu.test(t) || !Ju.test(t) || n != null && t in at(n);
        }
        function th(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Qi(t) {
          var n = Sr(t), e = u[n];
          if (typeof e != "function" || !(n in j.prototype))
            return !1;
          if (t === e)
            return !0;
          var i = Zi(e);
          return !!i && t === i[0];
        }
        function nh(t) {
          return !!va && va in t;
        }
        var eh = tr ? Tn : ds;
        function De(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || ue;
          return t === e;
        }
        function mo(t) {
          return t === t && !gt(t);
        }
        function wo(t, n) {
          return function(e) {
            return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
          };
        }
        function rh(t) {
          var n = Rr(t, function(i) {
            return e.size === M && e.clear(), i;
          }), e = n.cache;
          return n;
        }
        function ih(t, n) {
          var e = t[1], i = n[1], o = e | i, c = o < (N | q | bt), h = i == bt && e == Z || i == bt && e == jt && t[7].length <= n[8] || i == (bt | jt) && n[7].length <= n[8] && e == Z;
          if (!(c || h))
            return t;
          i & N && (t[2] = n[2], o |= e & N ? 0 : K);
          var g = n[3];
          if (g) {
            var w = t[3];
            t[3] = w ? to(w, g, n[4]) : g, t[4] = w ? Nn(t[3], I) : n[4];
          }
          return g = n[5], g && (w = t[5], t[5] = w ? no(w, g, n[6]) : g, t[6] = w ? Nn(t[5], I) : n[6]), g = n[7], g && (t[7] = g), i & bt && (t[8] = t[8] == null ? n[8] : Et(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = o, t;
        }
        function sh(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function ah(t) {
          return er.call(t);
        }
        function yo(t, n, e) {
          return n = xt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, o = -1, c = xt(i.length - n, 0), h = C(c); ++o < c; )
              h[o] = i[n + o];
            o = -1;
            for (var g = C(n + 1); ++o < n; )
              g[o] = i[o];
            return g[n] = e(h), Zt(t, this, g);
          };
        }
        function Mo(t, n) {
          return n.length < 2 ? t : Vn(t, on(n, 0, -1));
        }
        function oh(t, n) {
          for (var e = t.length, i = Et(n.length, e), o = $t(t); i--; ) {
            var c = n[i];
            t[i] = Rn(c, e) ? o[c] : r;
          }
          return t;
        }
        function Vi(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var Co = So(Ga), Ne = Ml || function(t, n) {
          return At.setTimeout(t, n);
        }, ji = So(Rf);
        function bo(t, n, e) {
          var i = n + "";
          return ji(t, Vf(i, uh(Yf(i), e)));
        }
        function So(t) {
          var n = 0, e = 0;
          return function() {
            var i = xl(), o = Kr - (i - e);
            if (e = i, o > 0) {
              if (++n >= ze)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function Ir(t, n) {
          var e = -1, i = t.length, o = i - 1;
          for (n = n === r ? i : n; ++e < n; ) {
            var c = ki(e, o), h = t[c];
            t[c] = t[e], t[e] = h;
          }
          return t.length = n, t;
        }
        var xo = rh(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Xu, function(e, i, o, c) {
            n.push(o ? c.replace(ic, "$1") : i || e);
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
              return nr.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function uh(t, n) {
          return en(ft, function(e) {
            var i = "_." + e[0];
            n & e[1] && !Xe(t, i) && t.push(i);
          }), t.sort();
        }
        function Io(t) {
          if (t instanceof j)
            return t.clone();
          var n = new sn(t.__wrapped__, t.__chain__);
          return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function ch(t, n, e) {
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = xt(J(n), 0);
          var i = t == null ? 0 : t.length;
          if (!i || n < 1)
            return [];
          for (var o = 0, c = 0, h = C(ur(i / n)); o < i; )
            h[c++] = on(t, o, o += n);
          return h;
        }
        function lh(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = 0, o = []; ++n < e; ) {
            var c = t[n];
            c && (o[i++] = c);
          }
          return o;
        }
        function fh() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = C(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Dn(H(e) ? $t(e) : [e], Pt(n, 1));
        }
        var hh = X(function(t, n) {
          return wt(t) ? Te(t, Pt(n, 1, wt, !0)) : [];
        }), ph = X(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Pt(n, 1, wt, !0), W(e, 2)) : [];
        }), dh = X(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Pt(n, 1, wt, !0), r, e) : [];
        });
        function gh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : J(n), on(t, n < 0 ? 0 : n, i)) : [];
        }
        function _h(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : J(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function vh(t, n) {
          return t && t.length ? mr(t, W(n, 3), !0, !0) : [];
        }
        function mh(t, n) {
          return t && t.length ? mr(t, W(n, 3), !0) : [];
        }
        function wh(t, n, e, i) {
          var o = t == null ? 0 : t.length;
          return o ? (e && typeof e != "number" && kt(t, n, e) && (e = 0, i = o), ff(t, n, e, i)) : [];
        }
        function Ao(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : J(e);
          return o < 0 && (o = xt(i + o, 0)), Qe(t, W(n, 3), o);
        }
        function Po(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i - 1;
          return e !== r && (o = J(e), o = e < 0 ? xt(i + o, 0) : Et(o, i - 1)), Qe(t, W(n, 3), o, !0);
        }
        function Eo(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, 1) : [];
        }
        function yh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, bn) : [];
        }
        function Mh(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : J(n), Pt(t, n)) : [];
        }
        function Ch(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
            var o = t[n];
            i[o[0]] = o[1];
          }
          return i;
        }
        function Ro(t) {
          return t && t.length ? t[0] : r;
        }
        function bh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : J(e);
          return o < 0 && (o = xt(i + o, 0)), ie(t, n, o);
        }
        function Sh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 0, -1) : [];
        }
        var xh = X(function(t) {
          var n = dt(t, Ui);
          return n.length && n[0] === t[0] ? Ri(n) : [];
        }), Ih = X(function(t) {
          var n = un(t), e = dt(t, Ui);
          return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? Ri(e, W(n, 2)) : [];
        }), Ah = X(function(t) {
          var n = un(t), e = dt(t, Ui);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? Ri(e, r, n) : [];
        });
        function Ph(t, n) {
          return t == null ? "" : bl.call(t, n);
        }
        function un(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function Eh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i;
          return e !== r && (o = J(e), o = o < 0 ? xt(i + o, 0) : Et(o, i - 1)), n === n ? ol(t, n, o) : Qe(t, ca, o, !0);
        }
        function Rh(t, n) {
          return t && t.length ? Ua(t, J(n)) : r;
        }
        var Th = X(To);
        function To(t, n) {
          return t && t.length && n && n.length ? Oi(t, n) : t;
        }
        function Fh(t, n, e) {
          return t && t.length && n && n.length ? Oi(t, n, W(e, 2)) : t;
        }
        function Lh(t, n, e) {
          return t && t.length && n && n.length ? Oi(t, n, r, e) : t;
        }
        var Oh = En(function(t, n) {
          var e = t == null ? 0 : t.length, i = Ii(t, n);
          return za(t, dt(n, function(o) {
            return Rn(o, e) ? +o : o;
          }).sort(ja)), i;
        });
        function kh(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var i = -1, o = [], c = t.length;
          for (n = W(n, 3); ++i < c; ) {
            var h = t[i];
            n(h, i, t) && (e.push(h), o.push(i));
          }
          return za(t, o), e;
        }
        function ts(t) {
          return t == null ? t : Al.call(t);
        }
        function Dh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && kt(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : J(n), e = e === r ? i : J(e)), on(t, n, e)) : [];
        }
        function Nh(t, n) {
          return vr(t, n);
        }
        function Wh(t, n, e) {
          return Ni(t, n, W(e, 2));
        }
        function Bh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = vr(t, n);
            if (i < e && dn(t[i], n))
              return i;
          }
          return -1;
        }
        function Uh(t, n) {
          return vr(t, n, !0);
        }
        function $h(t, n, e) {
          return Ni(t, n, W(e, 2), !0);
        }
        function qh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = vr(t, n, !0) - 1;
            if (dn(t[i], n))
              return i;
          }
          return -1;
        }
        function zh(t) {
          return t && t.length ? Ha(t) : [];
        }
        function Gh(t, n) {
          return t && t.length ? Ha(t, W(n, 2)) : [];
        }
        function Hh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 1, n) : [];
        }
        function Kh(t, n, e) {
          return t && t.length ? (n = e || n === r ? 1 : J(n), on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function Zh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : J(n), n = i - n, on(t, n < 0 ? 0 : n, i)) : [];
        }
        function Jh(t, n) {
          return t && t.length ? mr(t, W(n, 3), !1, !0) : [];
        }
        function Yh(t, n) {
          return t && t.length ? mr(t, W(n, 3)) : [];
        }
        var Xh = X(function(t) {
          return Un(Pt(t, 1, wt, !0));
        }), Qh = X(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Un(Pt(t, 1, wt, !0), W(n, 2));
        }), Vh = X(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Un(Pt(t, 1, wt, !0), r, n);
        });
        function jh(t) {
          return t && t.length ? Un(t) : [];
        }
        function tp(t, n) {
          return t && t.length ? Un(t, W(n, 2)) : [];
        }
        function np(t, n) {
          return n = typeof n == "function" ? n : r, t && t.length ? Un(t, r, n) : [];
        }
        function ns(t) {
          if (!(t && t.length))
            return [];
          var n = 0;
          return t = kn(t, function(e) {
            if (wt(e))
              return n = xt(e.length, n), !0;
          }), mi(n, function(e) {
            return dt(t, gi(e));
          });
        }
        function Fo(t, n) {
          if (!(t && t.length))
            return [];
          var e = ns(t);
          return n == null ? e : dt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var ep = X(function(t, n) {
          return wt(t) ? Te(t, n) : [];
        }), rp = X(function(t) {
          return Bi(kn(t, wt));
        }), ip = X(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Bi(kn(t, wt), W(n, 2));
        }), sp = X(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Bi(kn(t, wt), r, n);
        }), ap = X(ns);
        function op(t, n) {
          return Ya(t || [], n || [], Re);
        }
        function up(t, n) {
          return Ya(t || [], n || [], Oe);
        }
        var cp = X(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Fo(t, e);
        });
        function Lo(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function lp(t, n) {
          return n(t), t;
        }
        function Ar(t, n) {
          return n(t);
        }
        var fp = En(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, o = function(c) {
            return Ii(c, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !Rn(e) ? this.thru(o) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: Ar,
            args: [o],
            thisArg: r
          }), new sn(i, this.__chain__).thru(function(c) {
            return n && !c.length && c.push(r), c;
          }));
        });
        function hp() {
          return Lo(this);
        }
        function pp() {
          return new sn(this.value(), this.__chain__);
        }
        function dp() {
          this.__values__ === r && (this.__values__ = Zo(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function gp() {
          return this;
        }
        function _p(t) {
          for (var n, e = this; e instanceof hr; ) {
            var i = Io(e);
            i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
            var o = i;
            e = e.__wrapped__;
          }
          return o.__wrapped__ = t, n;
        }
        function vp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: Ar,
              args: [ts],
              thisArg: r
            }), new sn(n, this.__chain__);
          }
          return this.thru(ts);
        }
        function mp() {
          return Ja(this.__wrapped__, this.__actions__);
        }
        var wp = wr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : An(t, e, 1);
        });
        function yp(t, n, e) {
          var i = H(t) ? oa : lf;
          return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
        }
        function Mp(t, n) {
          var e = H(t) ? kn : Ta;
          return e(t, W(n, 3));
        }
        var Cp = so(Ao), bp = so(Po);
        function Sp(t, n) {
          return Pt(Pr(t, n), 1);
        }
        function xp(t, n) {
          return Pt(Pr(t, n), bn);
        }
        function Ip(t, n, e) {
          return e = e === r ? 1 : J(e), Pt(Pr(t, n), e);
        }
        function Oo(t, n) {
          var e = H(t) ? en : Bn;
          return e(t, W(n, 3));
        }
        function ko(t, n) {
          var e = H(t) ? Gc : Ra;
          return e(t, W(n, 3));
        }
        var Ap = wr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : An(t, e, [n]);
        });
        function Pp(t, n, e, i) {
          t = qt(t) ? t : _e(t), e = e && !i ? J(e) : 0;
          var o = t.length;
          return e < 0 && (e = xt(o + e, 0)), Lr(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && ie(t, n, e) > -1;
        }
        var Ep = X(function(t, n, e) {
          var i = -1, o = typeof n == "function", c = qt(t) ? C(t.length) : [];
          return Bn(t, function(h) {
            c[++i] = o ? Zt(n, h, e) : Fe(h, n, e);
          }), c;
        }), Rp = wr(function(t, n, e) {
          An(t, e, n);
        });
        function Pr(t, n) {
          var e = H(t) ? dt : Na;
          return e(t, W(n, 3));
        }
        function Tp(t, n, e, i) {
          return t == null ? [] : (H(n) || (n = n == null ? [] : [n]), e = i ? r : e, H(e) || (e = e == null ? [] : [e]), $a(t, n, e));
        }
        var Fp = wr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Lp(t, n, e) {
          var i = H(t) ? pi : fa, o = arguments.length < 3;
          return i(t, W(n, 4), e, o, Bn);
        }
        function Op(t, n, e) {
          var i = H(t) ? Hc : fa, o = arguments.length < 3;
          return i(t, W(n, 4), e, o, Ra);
        }
        function kp(t, n) {
          var e = H(t) ? kn : Ta;
          return e(t, Tr(W(n, 3)));
        }
        function Dp(t) {
          var n = H(t) ? Ia : Pf;
          return n(t);
        }
        function Np(t, n, e) {
          (e ? kt(t, n, e) : n === r) ? n = 1 : n = J(n);
          var i = H(t) ? sf : Ef;
          return i(t, n);
        }
        function Wp(t) {
          var n = H(t) ? af : Tf;
          return n(t);
        }
        function Bp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Lr(t) ? ae(t) : t.length;
          var n = Rt(t);
          return n == vt || n == pt ? t.size : Fi(t).length;
        }
        function Up(t, n, e) {
          var i = H(t) ? di : Ff;
          return e && kt(t, n, e) && (n = r), i(t, W(n, 3));
        }
        var $p = X(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && kt(t, n[0], n[1]) ? n = [] : e > 2 && kt(n[0], n[1], n[2]) && (n = [n[0]]), $a(t, Pt(n, 1), []);
        }), Er = yl || function() {
          return At.Date.now();
        };
        function qp(t, n) {
          if (typeof n != "function")
            throw new rn(d);
          return t = J(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function Do(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, bt, r, r, r, r, n);
        }
        function No(t, n) {
          var e;
          if (typeof n != "function")
            throw new rn(d);
          return t = J(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var es = X(function(t, n, e) {
          var i = N;
          if (e.length) {
            var o = Nn(e, de(es));
            i |= _t;
          }
          return Pn(t, i, n, e, o);
        }), Wo = X(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var o = Nn(e, de(Wo));
            i |= _t;
          }
          return Pn(n, i, t, e, o);
        });
        function Bo(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, Z, r, r, r, r, r, n);
          return i.placeholder = Bo.placeholder, i;
        }
        function Uo(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, it, r, r, r, r, r, n);
          return i.placeholder = Uo.placeholder, i;
        }
        function $o(t, n, e) {
          var i, o, c, h, g, w, S = 0, x = !1, A = !1, L = !0;
          if (typeof t != "function")
            throw new rn(d);
          n = cn(n) || 0, gt(e) && (x = !!e.leading, A = "maxWait" in e, c = A ? xt(cn(e.maxWait) || 0, n) : c, L = "trailing" in e ? !!e.trailing : L);
          function D(yt) {
            var gn = i, Ln = o;
            return i = o = r, S = yt, h = t.apply(Ln, gn), h;
          }
          function B(yt) {
            return S = yt, g = Ne(V, n), x ? D(yt) : h;
          }
          function Y(yt) {
            var gn = yt - w, Ln = yt - S, au = n - gn;
            return A ? Et(au, c - Ln) : au;
          }
          function U(yt) {
            var gn = yt - w, Ln = yt - S;
            return w === r || gn >= n || gn < 0 || A && Ln >= c;
          }
          function V() {
            var yt = Er();
            if (U(yt))
              return tt(yt);
            g = Ne(V, Y(yt));
          }
          function tt(yt) {
            return g = r, L && i ? D(yt) : (i = o = r, h);
          }
          function Qt() {
            g !== r && Xa(g), S = 0, i = w = o = g = r;
          }
          function Dt() {
            return g === r ? h : tt(Er());
          }
          function Vt() {
            var yt = Er(), gn = U(yt);
            if (i = arguments, o = this, w = yt, gn) {
              if (g === r)
                return B(w);
              if (A)
                return Xa(g), g = Ne(V, n), D(w);
            }
            return g === r && (g = Ne(V, n)), h;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var zp = X(function(t, n) {
          return Ea(t, 1, n);
        }), Gp = X(function(t, n, e) {
          return Ea(t, cn(n) || 0, e);
        });
        function Hp(t) {
          return Pn(t, Ht);
        }
        function Rr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new rn(d);
          var e = function() {
            var i = arguments, o = n ? n.apply(this, i) : i[0], c = e.cache;
            if (c.has(o))
              return c.get(o);
            var h = t.apply(this, i);
            return e.cache = c.set(o, h) || c, h;
          };
          return e.cache = new (Rr.Cache || In)(), e;
        }
        Rr.Cache = In;
        function Tr(t) {
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
        function Kp(t) {
          return No(2, t);
        }
        var Zp = Lf(function(t, n) {
          n = n.length == 1 && H(n[0]) ? dt(n[0], Jt(W())) : dt(Pt(n, 1), Jt(W()));
          var e = n.length;
          return X(function(i) {
            for (var o = -1, c = Et(i.length, e); ++o < c; )
              i[o] = n[o].call(this, i[o]);
            return Zt(t, this, i);
          });
        }), rs = X(function(t, n) {
          var e = Nn(n, de(rs));
          return Pn(t, _t, r, n, e);
        }), qo = X(function(t, n) {
          var e = Nn(n, de(qo));
          return Pn(t, Wt, r, n, e);
        }), Jp = En(function(t, n) {
          return Pn(t, jt, r, r, r, n);
        });
        function Yp(t, n) {
          if (typeof t != "function")
            throw new rn(d);
          return n = n === r ? n : J(n), X(t, n);
        }
        function Xp(t, n) {
          if (typeof t != "function")
            throw new rn(d);
          return n = n == null ? 0 : xt(J(n), 0), X(function(e) {
            var i = e[n], o = qn(e, 0, n);
            return i && Dn(o, i), Zt(t, this, o);
          });
        }
        function Qp(t, n, e) {
          var i = !0, o = !0;
          if (typeof t != "function")
            throw new rn(d);
          return gt(e) && (i = "leading" in e ? !!e.leading : i, o = "trailing" in e ? !!e.trailing : o), $o(t, n, {
            leading: i,
            maxWait: n,
            trailing: o
          });
        }
        function Vp(t) {
          return Do(t, 1);
        }
        function jp(t, n) {
          return rs($i(n), t);
        }
        function td() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return H(t) ? t : [t];
        }
        function nd(t) {
          return an(t, F);
        }
        function ed(t, n) {
          return n = typeof n == "function" ? n : r, an(t, F, n);
        }
        function rd(t) {
          return an(t, m | F);
        }
        function id(t, n) {
          return n = typeof n == "function" ? n : r, an(t, m | F, n);
        }
        function sd(t, n) {
          return n == null || Pa(t, n, It(n));
        }
        function dn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var ad = br(Ei), od = br(function(t, n) {
          return t >= n;
        }), ne = Oa(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Oa : function(t) {
          return mt(t) && st.call(t, "callee") && !ya.call(t, "callee");
        }, H = C.isArray, ud = na ? Jt(na) : _f;
        function qt(t) {
          return t != null && Fr(t.length) && !Tn(t);
        }
        function wt(t) {
          return mt(t) && qt(t);
        }
        function cd(t) {
          return t === !0 || t === !1 || mt(t) && Ot(t) == ct;
        }
        var zn = Cl || ds, ld = ea ? Jt(ea) : vf;
        function fd(t) {
          return mt(t) && t.nodeType === 1 && !We(t);
        }
        function hd(t) {
          if (t == null)
            return !0;
          if (qt(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || zn(t) || ge(t) || ne(t)))
            return !t.length;
          var n = Rt(t);
          if (n == vt || n == pt)
            return !t.size;
          if (De(t))
            return !Fi(t).length;
          for (var e in t)
            if (st.call(t, e))
              return !1;
          return !0;
        }
        function pd(t, n) {
          return Le(t, n);
        }
        function dd(t, n, e) {
          e = typeof e == "function" ? e : r;
          var i = e ? e(t, n) : r;
          return i === r ? Le(t, n, r, e) : !!i;
        }
        function is(t) {
          if (!mt(t))
            return !1;
          var n = Ot(t);
          return n == Ft || n == Kt || typeof t.message == "string" && typeof t.name == "string" && !We(t);
        }
        function gd(t) {
          return typeof t == "number" && Ca(t);
        }
        function Tn(t) {
          if (!gt(t))
            return !1;
          var n = Ot(t);
          return n == Bt || n == vn || n == ot || n == fn;
        }
        function zo(t) {
          return typeof t == "number" && t == J(t);
        }
        function Fr(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _n;
        }
        function gt(t) {
          var n = typeof t;
          return t != null && (n == "object" || n == "function");
        }
        function mt(t) {
          return t != null && typeof t == "object";
        }
        var Go = ra ? Jt(ra) : wf;
        function _d(t, n) {
          return t === n || Ti(t, n, Ji(n));
        }
        function vd(t, n, e) {
          return e = typeof e == "function" ? e : r, Ti(t, n, Ji(n), e);
        }
        function md(t) {
          return Ho(t) && t != +t;
        }
        function wd(t) {
          if (eh(t))
            throw new G(p);
          return ka(t);
        }
        function yd(t) {
          return t === null;
        }
        function Md(t) {
          return t == null;
        }
        function Ho(t) {
          return typeof t == "number" || mt(t) && Ot(t) == Lt;
        }
        function We(t) {
          if (!mt(t) || Ot(t) != Ct)
            return !1;
          var n = sr(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && nr.call(e) == _l;
        }
        var ss = ia ? Jt(ia) : yf;
        function Cd(t) {
          return zo(t) && t >= -_n && t <= _n;
        }
        var Ko = sa ? Jt(sa) : Mf;
        function Lr(t) {
          return typeof t == "string" || !H(t) && mt(t) && Ot(t) == mn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && Ot(t) == Ke;
        }
        var ge = aa ? Jt(aa) : Cf;
        function bd(t) {
          return t === r;
        }
        function Sd(t) {
          return mt(t) && Rt(t) == Ce;
        }
        function xd(t) {
          return mt(t) && Ot(t) == Uu;
        }
        var Id = br(Li), Ad = br(function(t, n) {
          return t <= n;
        });
        function Zo(t) {
          if (!t)
            return [];
          if (qt(t))
            return Lr(t) ? hn(t) : $t(t);
          if (xe && t[xe])
            return il(t[xe]());
          var n = Rt(t), e = n == vt ? yi : n == pt ? Ve : _e;
          return e(t);
        }
        function Fn(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = cn(t), t === bn || t === -bn) {
            var n = t < 0 ? -1 : 1;
            return n * He;
          }
          return t === t ? t : 0;
        }
        function J(t) {
          var n = Fn(t), e = n % 1;
          return n === n ? e ? n - e : n : 0;
        }
        function Jo(t) {
          return t ? Qn(J(t), 0, O) : 0;
        }
        function cn(t) {
          if (typeof t == "number")
            return t;
          if (Xt(t))
            return Sn;
          if (gt(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = gt(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = ha(t);
          var e = oc.test(t);
          return e || cc.test(t) ? $c(t.slice(2), e ? 2 : 8) : ac.test(t) ? Sn : +t;
        }
        function Yo(t) {
          return yn(t, zt(t));
        }
        function Pd(t) {
          return t ? Qn(J(t), -_n, _n) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var Ed = he(function(t, n) {
          if (De(n) || qt(n)) {
            yn(n, It(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Re(t, e, n[e]);
        }), Xo = he(function(t, n) {
          yn(n, zt(n), t);
        }), Or = he(function(t, n, e, i) {
          yn(n, zt(n), t, i);
        }), Rd = he(function(t, n, e, i) {
          yn(n, It(n), t, i);
        }), Td = En(Ii);
        function Fd(t, n) {
          var e = fe(t);
          return n == null ? e : Aa(e, n);
        }
        var Ld = X(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, o = i > 2 ? n[2] : r;
          for (o && kt(n[0], n[1], o) && (i = 1); ++e < i; )
            for (var c = n[e], h = zt(c), g = -1, w = h.length; ++g < w; ) {
              var S = h[g], x = t[S];
              (x === r || dn(x, ue[S]) && !st.call(t, S)) && (t[S] = c[S]);
            }
          return t;
        }), Od = X(function(t) {
          return t.push(r, ho), Zt(Qo, r, t);
        });
        function kd(t, n) {
          return ua(t, W(n, 3), wn);
        }
        function Dd(t, n) {
          return ua(t, W(n, 3), Pi);
        }
        function Nd(t, n) {
          return t == null ? t : Ai(t, W(n, 3), zt);
        }
        function Wd(t, n) {
          return t == null ? t : Fa(t, W(n, 3), zt);
        }
        function Bd(t, n) {
          return t && wn(t, W(n, 3));
        }
        function Ud(t, n) {
          return t && Pi(t, W(n, 3));
        }
        function $d(t) {
          return t == null ? [] : gr(t, It(t));
        }
        function qd(t) {
          return t == null ? [] : gr(t, zt(t));
        }
        function as(t, n, e) {
          var i = t == null ? r : Vn(t, n);
          return i === r ? e : i;
        }
        function zd(t, n) {
          return t != null && _o(t, n, hf);
        }
        function os(t, n) {
          return t != null && _o(t, n, pf);
        }
        var Gd = oo(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = er.call(n)), t[n] = e;
        }, cs(Gt)), Hd = oo(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = er.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, W), Kd = X(Fe);
        function It(t) {
          return qt(t) ? xa(t) : Fi(t);
        }
        function zt(t) {
          return qt(t) ? xa(t, !0) : bf(t);
        }
        function Zd(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(i, o, c) {
            An(e, n(i, o, c), i);
          }), e;
        }
        function Jd(t, n) {
          var e = {};
          return n = W(n, 3), wn(t, function(i, o, c) {
            An(e, o, n(i, o, c));
          }), e;
        }
        var Yd = he(function(t, n, e) {
          _r(t, n, e);
        }), Qo = he(function(t, n, e, i) {
          _r(t, n, e, i);
        }), Xd = En(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = dt(n, function(c) {
            return c = $n(c, t), i || (i = c.length > 1), c;
          }), yn(t, Ki(t), e), i && (e = an(e, m | R | F, Gf));
          for (var o = n.length; o--; )
            Wi(e, n[o]);
          return e;
        });
        function Qd(t, n) {
          return Vo(t, Tr(W(n)));
        }
        var Vd = En(function(t, n) {
          return t == null ? {} : xf(t, n);
        });
        function Vo(t, n) {
          if (t == null)
            return {};
          var e = dt(Ki(t), function(i) {
            return [i];
          });
          return n = W(n), qa(t, e, function(i, o) {
            return n(i, o[0]);
          });
        }
        function jd(t, n, e) {
          n = $n(n, t);
          var i = -1, o = n.length;
          for (o || (o = 1, t = r); ++i < o; ) {
            var c = t == null ? r : t[Mn(n[i])];
            c === r && (i = o, c = e), t = Tn(c) ? c.call(t) : c;
          }
          return t;
        }
        function tg(t, n, e) {
          return t == null ? t : Oe(t, n, e);
        }
        function ng(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Oe(t, n, e, i);
        }
        var jo = lo(It), tu = lo(zt);
        function eg(t, n, e) {
          var i = H(t), o = i || zn(t) || ge(t);
          if (n = W(n, 4), e == null) {
            var c = t && t.constructor;
            o ? e = i ? new c() : [] : gt(t) ? e = Tn(c) ? fe(sr(t)) : {} : e = {};
          }
          return (o ? en : wn)(t, function(h, g, w) {
            return n(e, h, g, w);
          }), e;
        }
        function rg(t, n) {
          return t == null ? !0 : Wi(t, n);
        }
        function ig(t, n, e) {
          return t == null ? t : Za(t, n, $i(e));
        }
        function sg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Za(t, n, $i(e), i);
        }
        function _e(t) {
          return t == null ? [] : wi(t, It(t));
        }
        function ag(t) {
          return t == null ? [] : wi(t, zt(t));
        }
        function og(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = cn(e), e = e === e ? e : 0), n !== r && (n = cn(n), n = n === n ? n : 0), Qn(cn(t), n, e);
        }
        function ug(t, n, e) {
          return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = cn(t), df(t, n, e);
        }
        function cg(t, n, e) {
          if (e && typeof e != "boolean" && kt(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
            var i = t;
            t = n, n = i;
          }
          if (e || t % 1 || n % 1) {
            var o = ba();
            return Et(t + o * (n - t + Uc("1e-" + ((o + "").length - 1))), n);
          }
          return ki(t, n);
        }
        var lg = pe(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? nu(n) : n);
        });
        function nu(t) {
          return us(rt(t).toLowerCase());
        }
        function eu(t) {
          return t = rt(t), t && t.replace(fc, jc).replace(Rc, "");
        }
        function fg(t, n, e) {
          t = rt(t), n = Yt(n);
          var i = t.length;
          e = e === r ? i : Qn(J(e), 0, i);
          var o = e;
          return e -= n.length, e >= 0 && t.slice(e, o) == n;
        }
        function hg(t) {
          return t = rt(t), t && Hu.test(t) ? t.replace(Fs, tl) : t;
        }
        function pg(t) {
          return t = rt(t), t && Qu.test(t) ? t.replace(ri, "\\$&") : t;
        }
        var dg = pe(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), gg = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), _g = io("toLowerCase");
        function vg(t, n, e) {
          t = rt(t), n = J(n);
          var i = n ? ae(t) : 0;
          if (!n || i >= n)
            return t;
          var o = (n - i) / 2;
          return Cr(cr(o), e) + t + Cr(ur(o), e);
        }
        function mg(t, n, e) {
          t = rt(t), n = J(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? t + Cr(n - i, e) : t;
        }
        function wg(t, n, e) {
          t = rt(t), n = J(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? Cr(n - i, e) + t : t;
        }
        function yg(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), Il(rt(t).replace(ii, ""), n || 0);
        }
        function Mg(t, n, e) {
          return (e ? kt(t, n, e) : n === r) ? n = 1 : n = J(n), Di(rt(t), n);
        }
        function Cg() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var bg = pe(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function Sg(t, n, e) {
          return e && typeof e != "number" && kt(t, n, e) && (n = e = r), e = e === r ? O : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ss(n)) && (n = Yt(n), !n && se(t)) ? qn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var xg = pe(function(t, n, e) {
          return t + (e ? " " : "") + us(n);
        });
        function Ig(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Qn(J(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Ag(t, n, e) {
          var i = u.templateSettings;
          e && kt(t, n, e) && (n = r), t = rt(t), n = Or({}, n, i, fo);
          var o = Or({}, n.imports, i.imports, fo), c = It(o), h = wi(o, c), g, w, S = 0, x = n.interpolate || Ze, A = "__p += '", L = Mi(
            (n.escape || Ze).source + "|" + x.source + "|" + (x === Ls ? sc : Ze).source + "|" + (n.evaluate || Ze).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++kc + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), A += t.slice(S, Vt).replace(hc, nl), V && (g = !0, A += `' +
__e(` + V + `) +
'`), Dt && (w = !0, A += `';
` + Dt + `;
__p += '`), tt && (A += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), S = Vt + U.length, U;
          }), A += `';
`;
          var B = st.call(n, "variable") && n.variable;
          if (!B)
            A = `with (obj) {
` + A + `
}
`;
          else if (rc.test(B))
            throw new G(_);
          A = (w ? A.replace($u, "") : A).replace(qu, "$1").replace(zu, "$1;"), A = "function(" + (B || "obj") + `) {
` + (B ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + A + `return __p
}`;
          var Y = iu(function() {
            return et(c, D + "return " + A).apply(r, h);
          });
          if (Y.source = A, is(Y))
            throw Y;
          return Y;
        }
        function Pg(t) {
          return rt(t).toLowerCase();
        }
        function Eg(t) {
          return rt(t).toUpperCase();
        }
        function Rg(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return ha(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = hn(n), c = pa(i, o), h = da(i, o) + 1;
          return qn(i, c, h).join("");
        }
        function Tg(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, _a(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = da(i, hn(n)) + 1;
          return qn(i, 0, o).join("");
        }
        function Fg(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(ii, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = pa(i, hn(n));
          return qn(i, o).join("");
        }
        function Lg(t, n) {
          var e = Tt, i = ye;
          if (gt(n)) {
            var o = "separator" in n ? n.separator : o;
            e = "length" in n ? J(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
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
          if (h && (g += w.length - g), ss(o)) {
            if (t.slice(g).search(o)) {
              var S, x = w;
              for (o.global || (o = Mi(o.source, rt(Os.exec(o)) + "g")), o.lastIndex = 0; S = o.exec(x); )
                var A = S.index;
              w = w.slice(0, A === r ? g : A);
            }
          } else if (t.indexOf(Yt(o), g) != g) {
            var L = w.lastIndexOf(o);
            L > -1 && (w = w.slice(0, L));
          }
          return w + i;
        }
        function Og(t) {
          return t = rt(t), t && Gu.test(t) ? t.replace(Ts, ul) : t;
        }
        var kg = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), us = io("toUpperCase");
        function ru(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? rl(t) ? fl(t) : Jc(t) : t.match(n) || [];
        }
        var iu = X(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return is(e) ? e : new G(e);
          }
        }), Dg = En(function(t, n) {
          return en(n, function(e) {
            e = Mn(e), An(t, e, es(t[e], t));
          }), t;
        });
        function Ng(t) {
          var n = t == null ? 0 : t.length, e = W();
          return t = n ? dt(t, function(i) {
            if (typeof i[1] != "function")
              throw new rn(d);
            return [e(i[0]), i[1]];
          }) : [], X(function(i) {
            for (var o = -1; ++o < n; ) {
              var c = t[o];
              if (Zt(c[0], this, i))
                return Zt(c[1], this, i);
            }
          });
        }
        function Wg(t) {
          return cf(an(t, m));
        }
        function cs(t) {
          return function() {
            return t;
          };
        }
        function Bg(t, n) {
          return t == null || t !== t ? n : t;
        }
        var Ug = ao(), $g = ao(!0);
        function Gt(t) {
          return t;
        }
        function ls(t) {
          return Da(typeof t == "function" ? t : an(t, m));
        }
        function qg(t) {
          return Wa(an(t, m));
        }
        function zg(t, n) {
          return Ba(t, an(n, m));
        }
        var Gg = X(function(t, n) {
          return function(e) {
            return Fe(e, t, n);
          };
        }), Hg = X(function(t, n) {
          return function(e) {
            return Fe(t, e, n);
          };
        });
        function fs(t, n, e) {
          var i = It(n), o = gr(n, i);
          e == null && !(gt(n) && (o.length || !i.length)) && (e = n, n = t, t = this, o = gr(n, It(n)));
          var c = !(gt(e) && "chain" in e) || !!e.chain, h = Tn(t);
          return en(o, function(g) {
            var w = n[g];
            t[g] = w, h && (t.prototype[g] = function() {
              var S = this.__chain__;
              if (c || S) {
                var x = t(this.__wrapped__), A = x.__actions__ = $t(this.__actions__);
                return A.push({ func: w, args: arguments, thisArg: t }), x.__chain__ = S, x;
              }
              return w.apply(t, Dn([this.value()], arguments));
            });
          }), t;
        }
        function Kg() {
          return At._ === this && (At._ = vl), this;
        }
        function hs() {
        }
        function Zg(t) {
          return t = J(t), X(function(n) {
            return Ua(n, t);
          });
        }
        var Jg = zi(dt), Yg = zi(oa), Xg = zi(di);
        function su(t) {
          return Xi(t) ? gi(Mn(t)) : If(t);
        }
        function Qg(t) {
          return function(n) {
            return t == null ? r : Vn(t, n);
          };
        }
        var Vg = uo(), jg = uo(!0);
        function ps() {
          return [];
        }
        function ds() {
          return !1;
        }
        function t0() {
          return {};
        }
        function n0() {
          return "";
        }
        function e0() {
          return !0;
        }
        function r0(t, n) {
          if (t = J(t), t < 1 || t > _n)
            return [];
          var e = O, i = Et(t, O);
          n = W(n), t -= O;
          for (var o = mi(i, n); ++e < t; )
            n(e);
          return o;
        }
        function i0(t) {
          return H(t) ? dt(t, Mn) : Xt(t) ? [t] : $t(xo(rt(t)));
        }
        function s0(t) {
          var n = ++gl;
          return rt(t) + n;
        }
        var a0 = Mr(function(t, n) {
          return t + n;
        }, 0), o0 = Gi("ceil"), u0 = Mr(function(t, n) {
          return t / n;
        }, 1), c0 = Gi("floor");
        function l0(t) {
          return t && t.length ? dr(t, Gt, Ei) : r;
        }
        function f0(t, n) {
          return t && t.length ? dr(t, W(n, 2), Ei) : r;
        }
        function h0(t) {
          return la(t, Gt);
        }
        function p0(t, n) {
          return la(t, W(n, 2));
        }
        function d0(t) {
          return t && t.length ? dr(t, Gt, Li) : r;
        }
        function g0(t, n) {
          return t && t.length ? dr(t, W(n, 2), Li) : r;
        }
        var _0 = Mr(function(t, n) {
          return t * n;
        }, 1), v0 = Gi("round"), m0 = Mr(function(t, n) {
          return t - n;
        }, 0);
        function w0(t) {
          return t && t.length ? vi(t, Gt) : 0;
        }
        function y0(t, n) {
          return t && t.length ? vi(t, W(n, 2)) : 0;
        }
        return u.after = qp, u.ary = Do, u.assign = Ed, u.assignIn = Xo, u.assignInWith = Or, u.assignWith = Rd, u.at = Td, u.before = No, u.bind = es, u.bindAll = Dg, u.bindKey = Wo, u.castArray = td, u.chain = Lo, u.chunk = ch, u.compact = lh, u.concat = fh, u.cond = Ng, u.conforms = Wg, u.constant = cs, u.countBy = wp, u.create = Fd, u.curry = Bo, u.curryRight = Uo, u.debounce = $o, u.defaults = Ld, u.defaultsDeep = Od, u.defer = zp, u.delay = Gp, u.difference = hh, u.differenceBy = ph, u.differenceWith = dh, u.drop = gh, u.dropRight = _h, u.dropRightWhile = vh, u.dropWhile = mh, u.fill = wh, u.filter = Mp, u.flatMap = Sp, u.flatMapDeep = xp, u.flatMapDepth = Ip, u.flatten = Eo, u.flattenDeep = yh, u.flattenDepth = Mh, u.flip = Hp, u.flow = Ug, u.flowRight = $g, u.fromPairs = Ch, u.functions = $d, u.functionsIn = qd, u.groupBy = Ap, u.initial = Sh, u.intersection = xh, u.intersectionBy = Ih, u.intersectionWith = Ah, u.invert = Gd, u.invertBy = Hd, u.invokeMap = Ep, u.iteratee = ls, u.keyBy = Rp, u.keys = It, u.keysIn = zt, u.map = Pr, u.mapKeys = Zd, u.mapValues = Jd, u.matches = qg, u.matchesProperty = zg, u.memoize = Rr, u.merge = Yd, u.mergeWith = Qo, u.method = Gg, u.methodOf = Hg, u.mixin = fs, u.negate = Tr, u.nthArg = Zg, u.omit = Xd, u.omitBy = Qd, u.once = Kp, u.orderBy = Tp, u.over = Jg, u.overArgs = Zp, u.overEvery = Yg, u.overSome = Xg, u.partial = rs, u.partialRight = qo, u.partition = Fp, u.pick = Vd, u.pickBy = Vo, u.property = su, u.propertyOf = Qg, u.pull = Th, u.pullAll = To, u.pullAllBy = Fh, u.pullAllWith = Lh, u.pullAt = Oh, u.range = Vg, u.rangeRight = jg, u.rearg = Jp, u.reject = kp, u.remove = kh, u.rest = Yp, u.reverse = ts, u.sampleSize = Np, u.set = tg, u.setWith = ng, u.shuffle = Wp, u.slice = Dh, u.sortBy = $p, u.sortedUniq = zh, u.sortedUniqBy = Gh, u.split = Sg, u.spread = Xp, u.tail = Hh, u.take = Kh, u.takeRight = Zh, u.takeRightWhile = Jh, u.takeWhile = Yh, u.tap = lp, u.throttle = Qp, u.thru = Ar, u.toArray = Zo, u.toPairs = jo, u.toPairsIn = tu, u.toPath = i0, u.toPlainObject = Yo, u.transform = eg, u.unary = Vp, u.union = Xh, u.unionBy = Qh, u.unionWith = Vh, u.uniq = jh, u.uniqBy = tp, u.uniqWith = np, u.unset = rg, u.unzip = ns, u.unzipWith = Fo, u.update = ig, u.updateWith = sg, u.values = _e, u.valuesIn = ag, u.without = ep, u.words = ru, u.wrap = jp, u.xor = rp, u.xorBy = ip, u.xorWith = sp, u.zip = ap, u.zipObject = op, u.zipObjectDeep = up, u.zipWith = cp, u.entries = jo, u.entriesIn = tu, u.extend = Xo, u.extendWith = Or, fs(u, u), u.add = a0, u.attempt = iu, u.camelCase = lg, u.capitalize = nu, u.ceil = o0, u.clamp = og, u.clone = nd, u.cloneDeep = rd, u.cloneDeepWith = id, u.cloneWith = ed, u.conformsTo = sd, u.deburr = eu, u.defaultTo = Bg, u.divide = u0, u.endsWith = fg, u.eq = dn, u.escape = hg, u.escapeRegExp = pg, u.every = yp, u.find = Cp, u.findIndex = Ao, u.findKey = kd, u.findLast = bp, u.findLastIndex = Po, u.findLastKey = Dd, u.floor = c0, u.forEach = Oo, u.forEachRight = ko, u.forIn = Nd, u.forInRight = Wd, u.forOwn = Bd, u.forOwnRight = Ud, u.get = as, u.gt = ad, u.gte = od, u.has = zd, u.hasIn = os, u.head = Ro, u.identity = Gt, u.includes = Pp, u.indexOf = bh, u.inRange = ug, u.invoke = Kd, u.isArguments = ne, u.isArray = H, u.isArrayBuffer = ud, u.isArrayLike = qt, u.isArrayLikeObject = wt, u.isBoolean = cd, u.isBuffer = zn, u.isDate = ld, u.isElement = fd, u.isEmpty = hd, u.isEqual = pd, u.isEqualWith = dd, u.isError = is, u.isFinite = gd, u.isFunction = Tn, u.isInteger = zo, u.isLength = Fr, u.isMap = Go, u.isMatch = _d, u.isMatchWith = vd, u.isNaN = md, u.isNative = wd, u.isNil = Md, u.isNull = yd, u.isNumber = Ho, u.isObject = gt, u.isObjectLike = mt, u.isPlainObject = We, u.isRegExp = ss, u.isSafeInteger = Cd, u.isSet = Ko, u.isString = Lr, u.isSymbol = Xt, u.isTypedArray = ge, u.isUndefined = bd, u.isWeakMap = Sd, u.isWeakSet = xd, u.join = Ph, u.kebabCase = dg, u.last = un, u.lastIndexOf = Eh, u.lowerCase = gg, u.lowerFirst = _g, u.lt = Id, u.lte = Ad, u.max = l0, u.maxBy = f0, u.mean = h0, u.meanBy = p0, u.min = d0, u.minBy = g0, u.stubArray = ps, u.stubFalse = ds, u.stubObject = t0, u.stubString = n0, u.stubTrue = e0, u.multiply = _0, u.nth = Rh, u.noConflict = Kg, u.noop = hs, u.now = Er, u.pad = vg, u.padEnd = mg, u.padStart = wg, u.parseInt = yg, u.random = cg, u.reduce = Lp, u.reduceRight = Op, u.repeat = Mg, u.replace = Cg, u.result = jd, u.round = v0, u.runInContext = v, u.sample = Dp, u.size = Bp, u.snakeCase = bg, u.some = Up, u.sortedIndex = Nh, u.sortedIndexBy = Wh, u.sortedIndexOf = Bh, u.sortedLastIndex = Uh, u.sortedLastIndexBy = $h, u.sortedLastIndexOf = qh, u.startCase = xg, u.startsWith = Ig, u.subtract = m0, u.sum = w0, u.sumBy = y0, u.template = Ag, u.times = r0, u.toFinite = Fn, u.toInteger = J, u.toLength = Jo, u.toLower = Pg, u.toNumber = cn, u.toSafeInteger = Pd, u.toString = rt, u.toUpper = Eg, u.trim = Rg, u.trimEnd = Tg, u.trimStart = Fg, u.truncate = Lg, u.unescape = Og, u.uniqueId = s0, u.upperCase = kg, u.upperFirst = us, u.each = Oo, u.eachRight = ko, u.first = Ro, fs(u, function() {
          var t = {};
          return wn(u, function(n, e) {
            st.call(u.prototype, e) || (t[e] = n);
          }), t;
        }(), { chain: !1 }), u.VERSION = a, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          u[t].placeholder = u;
        }), en(["drop", "take"], function(t, n) {
          j.prototype[t] = function(e) {
            e = e === r ? 1 : xt(J(e), 0);
            var i = this.__filtered__ && !n ? new j(this) : this.clone();
            return i.__filtered__ ? i.__takeCount__ = Et(e, i.__takeCount__) : i.__views__.push({
              size: Et(e, O),
              type: t + (i.__dir__ < 0 ? "Right" : "")
            }), i;
          }, j.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse();
          };
        }), en(["filter", "map", "takeWhile"], function(t, n) {
          var e = n + 1, i = e == Me || e == Zr;
          j.prototype[t] = function(o) {
            var c = this.clone();
            return c.__iteratees__.push({
              iteratee: W(o, 3),
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
          return this.filter(Gt);
        }, j.prototype.find = function(t) {
          return this.filter(t).head();
        }, j.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, j.prototype.invokeMap = X(function(t, n) {
          return typeof t == "function" ? new j(this) : this.map(function(e) {
            return Fe(e, t, n);
          });
        }), j.prototype.reject = function(t) {
          return this.filter(Tr(W(t)));
        }, j.prototype.slice = function(t, n) {
          t = J(t);
          var e = this;
          return e.__filtered__ && (t > 0 || n < 0) ? new j(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== r && (n = J(n), e = n < 0 ? e.dropRight(-n) : e.take(n - t)), e);
        }, j.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, j.prototype.toArray = function() {
          return this.take(O);
        }, wn(j.prototype, function(t, n) {
          var e = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), o = u[i ? "take" + (n == "last" ? "Right" : "") : n], c = i || /^find/.test(n);
          o && (u.prototype[n] = function() {
            var h = this.__wrapped__, g = i ? [1] : arguments, w = h instanceof j, S = g[0], x = w || H(h), A = function(V) {
              var tt = o.apply(u, Dn([V], g));
              return i && L ? tt[0] : tt;
            };
            x && e && typeof S == "function" && S.length != 1 && (w = x = !1);
            var L = this.__chain__, D = !!this.__actions__.length, B = c && !L, Y = w && !D;
            if (!c && x) {
              h = Y ? h : new j(this);
              var U = t.apply(h, g);
              return U.__actions__.push({ func: Ar, args: [A], thisArg: r }), new sn(U, L);
            }
            return B && Y ? t.apply(this, g) : (U = this.thru(A), B ? i ? U.value()[0] : U.value() : U);
          });
        }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = je[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
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
        }), le[yr(r, q).name] = [{
          name: "wrapper",
          func: r
        }], j.prototype.clone = Ll, j.prototype.reverse = Ol, j.prototype.value = kl, u.prototype.at = fp, u.prototype.chain = hp, u.prototype.commit = pp, u.prototype.next = dp, u.prototype.plant = _p, u.prototype.reverse = vp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = mp, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = gp), u;
      }, oe = hl();
      Zn ? ((Zn.exports = oe)._ = oe, li._ = oe) : At._ = oe;
    }).call(A0);
  }(Ue, Ue.exports)), Ue.exports;
}
var Iu = P0();
const Q = /* @__PURE__ */ xu(Iu);
function Au(f, s) {
  const r = Q.findLast(s.terrain, (a) => we(a.percents[0] * s.dist, f.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const E0 = [
  "altitude",
  "grade",
  "terrain",
  "heat",
  "dark",
  "fatigue",
  "strategy"
];
function As(f) {
  const s = new Cn().init(0);
  return f.forEach(({ factors: r, dist: a }) => {
    s.applyEach((l, p) => l + a * p, r);
  }), s.scaleEach(1 / Iu.sumBy(f, "dist")), s;
}
function R0(f, s) {
  let r = 0, a = 0;
  return f.forEach((l, p) => {
    const d = p === f.length - 1 ? s : f[p + 1].onset, _ = l.type === "linear" ? l.value / 2 : l.value;
    a += (r + _) * (d - l.onset), r += l.value;
  }), a / s;
}
function T0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function F0(f, s, r) {
  let a = -R0(s, r);
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
class Pu {
  constructor(s, r) {
    P(this, "plan");
    P(this, "values");
    this.plan = s, this.values = r ? Q.cloneDeep(r) : [{ onset: 0, value: T0(this.plan.course.dist), type: "linear" }];
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
function Ss(f, s) {
  return s === void 0 ? f : (f - 1) * s + 1;
}
function Ps(f, s) {
  f.factors || (f.factors = new Cn()), Object.assign(f.factors, {
    grade: bu(f.grade),
    altitude: mu(f.alt),
    terrain: Au(f, s)
  });
}
function $e(f, s) {
  var r, a;
  if (f.factors || (f.factors = new Cn()), Ps(f, s.course), s) {
    if (f.factors === void 0) throw new Error("no factors");
    f.factors.strategy = s.strategy.at(f.loc), Object.assign(f.factors, {
      heat: s.heatModel ? Su(f, s.heatModel) : 1,
      dark: s.event.sun ? Cu(f.tod, f.factors.terrain, s.event.sun) : 1
    });
  }
  f.factors.altitude = Ss(f.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), f.factors.dark = Ss(f.factors.dark, (a = s.scales) == null ? void 0 : a.dark);
}
const i_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: Pu,
  applyScale: Ss,
  factorKeys: ve,
  generateCourseFactors: Ps,
  generatePlanFactors: $e,
  getAltitudeFactor: mu,
  getDarkFactor: Cu,
  getGradeFactor: bu,
  getHeatFactor: Su,
  getTerrainFactor: Au,
  rollup: As,
  typeList: E0
}, Symbol.toStringTag, { value: "Module" }));
var Dr = { exports: {} }, gs, cu;
function L0() {
  if (cu) return gs;
  cu = 1;
  var f = 1e3, s = f * 60, r = s * 60, a = r * 24, l = a * 7, p = a * 365.25;
  gs = function(I, m) {
    m = m || {};
    var R = typeof I;
    if (R === "string" && I.length > 0)
      return d(I);
    if (R === "number" && isFinite(I))
      return m.long ? y(I) : _(I);
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
  function _(I) {
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
  return gs;
}
var _s, lu;
function O0() {
  if (lu) return _s;
  lu = 1;
  function f(s) {
    a.debug = a, a.default = a, a.coerce = M, a.disable = _, a.enable = p, a.enabled = y, a.humanize = L0(), a.destroy = I, Object.keys(s).forEach((m) => {
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
      let R, F = null, T, E;
      function N(...q) {
        if (!N.enabled)
          return;
        const K = N, Z = Number(/* @__PURE__ */ new Date()), it = Z - (R || Z);
        K.diff = it, K.prev = R, K.curr = Z, R = Z, q[0] = a.coerce(q[0]), typeof q[0] != "string" && q.unshift("%O");
        let _t = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (bt, jt) => {
          if (bt === "%%")
            return "%";
          _t++;
          const Ht = a.formatters[jt];
          if (typeof Ht == "function") {
            const Tt = q[_t];
            bt = Ht.call(K, Tt), q.splice(_t, 1), _t--;
          }
          return bt;
        }), a.formatArgs.call(K, q), (K.log || a.log).apply(K, q);
      }
      return N.namespace = m, N.useColors = a.useColors(), N.color = a.selectColor(m), N.extend = l, N.destroy = a.destroy, Object.defineProperty(N, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => F !== null ? F : (T !== a.namespaces && (T = a.namespaces, E = a.enabled(m)), E),
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
    function _() {
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
  return _s = f, _s;
}
var fu;
function k0() {
  return fu || (fu = 1, function(f, s) {
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
    f.exports = O0()(s);
    const { formatters: _ } = f.exports;
    _.j = function(y) {
      try {
        return JSON.stringify(y);
      } catch (M) {
        return "[UnexpectedJSONParseError]: " + M.message;
      }
    };
  }(Dr, Dr.exports)), Dr.exports;
}
var D0 = k0();
const N0 = /* @__PURE__ */ xu(D0), vs = {};
function Kn(f) {
  if (!vs[f]) {
    const s = N0("ultraPacer:core");
    s(`loading debug for namespace "${f}"`), vs[f] = s.extend(f);
  }
  return vs[f];
}
var ms = {}, hu;
function W0() {
  return hu || (hu = 1, function(f) {
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
          _ = r.toFixed(l), _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), dms = _ + "°";
          break;
        case "dm":
          var p = (r * 60).toFixed(l), _ = Math.floor(p / 60), y = (p % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), dms = _ + "°" + y + "′";
          break;
        case "dms":
          var d = (r * 3600).toFixed(l), _ = Math.floor(d / 3600), y = Math.floor(d / 60) % 60, M = (d % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = _ + "°" + y + "′" + M + "″";
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
      var a = this.lat.toRad(), l = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad(), _ = p - a, y = d - l, M = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(a) * Math.cos(p) * Math.sin(y / 2) * Math.sin(y / 2), I = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
      return I;
    }, f.latlon.prototype.bearingTo = function(r) {
      var a = this.bearingRadTo(r);
      return (a.toDeg() + 360) % 360;
    }, f.latlon.prototype.bearingRadTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(p), _ = Math.cos(l) * Math.sin(p), y = Math.atan2(_, d);
      return y;
    }, f.latlon.prototype.finalBearingTo = function(r) {
      var a = r.lat.toRad(), l = this.lat.toRad(), p = (this.lng - r.lng).toRad(), d = Math.sin(p) * Math.cos(l), _ = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(p), y = Math.atan2(d, _);
      return (y.toDeg() + 180) % 360;
    }, f.latlon.prototype.midpointTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.cos(l) * Math.cos(p), _ = Math.cos(l) * Math.sin(p), y = this.lng.toRad(), M = Math.atan2(Math.sin(a) + Math.sin(l), Math.sqrt((Math.cos(a) + d) * (Math.cos(a) + d) + _ * _)), I = y + Math.atan2(_, Math.cos(a) + d);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(M.toDeg(), I.toDeg());
    }, f.midpoint = function(r) {
      var a = 0, l = 0, p = 0;
      for (var d in r) {
        var _ = r[d], y = _.lat * Math.PI / 180, M = _.lng * Math.PI / 180, I = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), R = Math.sin(y);
        a += I, l += m, p += R;
      }
      a = a / r.length, l = l / r.length, p = p / r.length;
      var F = Math.atan2(l, a), T = Math.sqrt(a * a + l * l), E = Math.atan2(p, T);
      return new f.latlon(E * 180 / Math.PI, F * 180 / Math.PI);
    }, f.latlon.prototype.interpolate = function(r, a) {
      var l = this.distanceRadTo(r), p = this.bearingRadTo(r), d = this.lat.toRad(), _ = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var y = Math.sin(d), M = Math.cos(d), I = [], m = 0; m < a; m++) {
        var R = 1 / (a - 1) * m, F = l * R, T = Math.sin(F), E = Math.cos(F), N = Math.asin(y * E + M * T * Math.cos(p)), q = _ + Math.atan2(Math.sin(p) * T * M, E - y * Math.sin(N)), K = N.toDeg(), Z = q.toDeg();
        for (K > 90 && (K = 90), K < -90 && (K = -90); Z > 180; ) Z -= 360;
        for (; Z <= -180; ) Z += 360;
        I.push(new f.latlon(K, Z));
      }
      return I;
    }, f.latlon.prototype.destinationPoint = function(r, a) {
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / s, r = r.toRad();
      var l = this.lat.toRad(), p = this.lng.toRad(), d = Math.asin(Math.sin(l) * Math.cos(a) + Math.cos(l) * Math.sin(a) * Math.cos(r)), _ = p + Math.atan2(
        Math.sin(r) * Math.sin(a) * Math.cos(l),
        Math.cos(a) - Math.sin(l) * Math.sin(d)
      );
      return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(d.toDeg(), _.toDeg());
    }, f.latlon.intersection = function(r, a, l, p) {
      a = typeof a == "number" ? a : typeof a == "string" && trim(a) != "" ? +a : NaN, p = typeof p == "number" ? p : typeof p == "string" && trim(p) != "" ? +p : NaN;
      var d = r.lat.toRad(), _ = r.lng.toRad(), y = l.lat.toRad(), M = l.lng.toRad(), I = a.toRad(), m = p.toRad(), R = y - d, F = M - _, T = 2 * Math.asin(Math.sqrt(Math.sin(R / 2) * Math.sin(R / 2) + Math.cos(d) * Math.cos(y) * Math.sin(F / 2) * Math.sin(F / 2)));
      if (T == 0) return null;
      var E = Math.acos((Math.sin(y) - Math.sin(d) * Math.cos(T)) / (Math.sin(T) * Math.cos(d)));
      isNaN(E) && (E = 0);
      var N = Math.acos((Math.sin(d) - Math.sin(y) * Math.cos(T)) / (Math.sin(T) * Math.cos(y)));
      if (Math.sin(M - _) > 0)
        var q = E, K = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - E, K = N;
      var Z = (I - q + Math.PI) % (2 * Math.PI) - Math.PI, it = (K - m + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(Z) == 0 && Math.sin(it) == 0 || Math.sin(Z) * Math.sin(it) < 0) return null;
      var _t = Math.acos(-Math.cos(Z) * Math.cos(it) + Math.sin(Z) * Math.sin(it) * Math.cos(T)), Wt = Math.atan2(
        Math.sin(T) * Math.sin(Z) * Math.sin(it),
        Math.cos(it) + Math.cos(Z) * Math.cos(_t)
      ), bt = Math.asin(Math.sin(d) * Math.cos(Wt) + Math.cos(d) * Math.sin(Wt) * Math.cos(I)), jt = Math.atan2(
        Math.sin(I) * Math.sin(Wt) * Math.cos(d),
        Math.cos(Wt) - Math.sin(d) * Math.sin(bt)
      ), Ht = _ + jt;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(bt.toDeg(), Ht.toDeg());
    }, f.latlon.prototype.rhumbDistanceTo = function(r) {
      var a = s, l = this.lat.toRad(), p = r.lat.toRad(), d = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(p / 2 + Math.PI / 4) / Math.tan(l / 2 + Math.PI / 4)), M = isFinite(d / y) ? d / y : Math.cos(l);
      Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
      var I = Math.sqrt(d * d + M * M * _ * _) * a;
      return I.toPrecisionFixed(4);
    }, f.latlon.prototype.rhumbBearingTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), p = (r.lng - this.lng).toRad(), d = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(p) > Math.PI && (p = p > 0 ? -(2 * Math.PI - p) : 2 * Math.PI + p);
      var _ = Math.atan2(p, d);
      return (_.toDeg() + 360) % 360;
    }, f.latlon.prototype.rhumbDestinationPoint = function(r, a) {
      var l = s, p = parseFloat(a) / l, d = this.lat.toRad(), _ = this.lng.toRad();
      r = r.toRad();
      var y = p * Math.cos(r);
      Math.abs(y) < 1e-10 && (y = 0);
      var M = d + y, I = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(d / 2 + Math.PI / 4)), m = isFinite(y / I) ? y / I : Math.cos(d), R = p * Math.sin(r) / m;
      Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
      var F = (_ + R + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new f.latlon(M.toDeg(), F.toDeg());
    }, f.latlon.prototype.rhumbMidpointTo = function(r) {
      var a = this.lat.toRad(), l = this.lng.toRad(), p = r.lat.toRad(), d = r.lng.toRad();
      Math.abs(d - l) > Math.PI && (l += 2 * Math.PI);
      var _ = (a + p) / 2, y = Math.tan(Math.PI / 4 + a / 2), M = Math.tan(Math.PI / 4 + p / 2), I = Math.tan(Math.PI / 4 + _ / 2), m = ((d - l) * Math.log(I) + l * Math.log(M) - d * Math.log(y)) / Math.log(M / y);
      return isFinite(m) || (m = (l + d) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(_.toDeg(), m.toDeg());
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
        for (var _ = p.length - 1; d-- > _; ) p = p + "0";
        return p;
      }), a = a.replace(/(.+)e-(.+)/, function(l, p, d) {
        for (p = p.replace(/\./, ""); d-- > 1; ) p = "0" + p;
        return "0." + p;
      }), a;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ms)), ms;
}
var B0 = W0();
function U0(f) {
  return "latlon" in f;
}
class Es {
  constructor(s) {
    P(this, "source");
    this.source = s;
  }
  get alt() {
    return this.source.alt;
  }
  set alt(s) {
    this.source.alt = s;
  }
  get lat() {
    return this.source.lat;
  }
  set lat(s) {
    this.source.lat = s;
  }
  get latlon() {
    return U0(this.source) ? this.source.latlon : new B0.latlon(this.lat, this.lon);
  }
  get lon() {
    return this.source.lon;
  }
  set lon(s) {
    this.source.lon = s;
  }
}
class Gr extends Es {
  constructor(r, a, l) {
    super(r);
    P(this, "_trackData");
    this._trackData = { grade: l, loc: a };
  }
  get grade() {
    return this._trackData.grade;
  }
  get loc() {
    return this._trackData.loc;
  }
}
function ws(f) {
  return "_course" in f;
}
class Ur extends Gr {
  constructor(r, a, l) {
    super(a, a.loc, a.grade);
    P(this, "_course");
    P(this, "factors", new Cn());
    P(this, "_interpolated");
    P(this, "loop");
    P(this, "source");
    this._course = r, this.loop = l, this.source = a;
  }
  get grade() {
    return ws(this.source) ? this.source.grade : this.source.grade * (this.source.grade > 0 ? this._course.gainScale : this._course.lossScale);
  }
  get interpolated() {
    return (ws(this.source) ? this.source.interpolated : this._interpolated) || !1;
  }
  set interpolated(r) {
    this._interpolated = r;
  }
  get loc() {
    if (ws(this.source)) return this.source.loc;
    let r = this.source.loc * this._course.distScale;
    return this.loop && (r += this._course.loopDist * this.loop), r;
  }
}
function $r(f, s) {
  const r = f.filter((l) => l > 0 && qr(l, s, 4));
  return r.unshift(0), r.map((l, p) => ({ start: l, end: r[p + 1] || s }));
}
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
function Nr(f) {
  return typeof f == "number" && !isNaN(f);
}
function $0(f, s, r) {
  f = [...f], s.interpolated && f.splice(f.findIndex((p) => p.loc > s.loc) - 1, 0, s), r.interpolated && f.splice(f.findIndex((p) => p.loc > r.loc) - 1, 0, r);
  const a = f.filter(
    (p, d) => d >= f.findIndex((_) => _ === s) && d <= f.findIndex((_) => _ === r)
  ), l = a.map((p, d) => ({
    factors: p.factors,
    dist: d === a.length - 1 ? 0 : a[d + 1].loc - a[d].loc
  }));
  return l.pop(), As(l);
}
class Ru {
  constructor(s) {
    P(this, "point1");
    P(this, "point2");
    P(this, "gain");
    P(this, "loss");
    P(this, "grade");
    P(this, "waypoint");
    P(this, "_name");
    this.point1 = s.point1, this.point2 = s.point2, this.gain = s.gain, this.loss = s.loss, this.grade = s.grade, s.name && (this._name = s.name);
  }
  get name() {
    var s;
    return this._name || ((s = this.waypoint) == null ? void 0 : s.name) || void 0;
  }
  get start() {
    return this.point1.loc;
  }
  get dist() {
    return this.point2.loc - this.point1.loc;
  }
  get end() {
    return this.point2.loc;
  }
  get alt() {
    return this.point2.alt;
  }
}
class Tu extends Ru {
  constructor(r, a) {
    super(a);
    P(this, "_course");
    P(this, "point1");
    P(this, "point2");
    this._course = r, this.point1 = a.point1, this.point2 = a.point2;
  }
}
class Fu extends Ru {
  constructor(r, a) {
    super(a);
    P(this, "_plan");
    P(this, "point1");
    P(this, "point2");
    P(this, "_factors");
    this._plan = r, this.point1 = a.point1, this.point2 = a.point2;
  }
  get pace() {
    return this.time ? this.time / this.dist : 0;
  }
  get delay() {
    return !Nr(this.point1.elapsed) || !Nr(this.point2.elapsed) || !Nr(this.point1.time) || !Nr(this.point2.time) ? 0 : this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time);
  }
  get elapsed() {
    return this.point2.elapsed;
  }
  get time() {
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
    return this._factors || (this._factors = $0(this._plan.points, this.point1, this.point2));
  }
}
const ys = Kn("CourseSplits");
class q0 {
  constructor(s) {
    P(this, "_segments");
    P(this, "_miles");
    P(this, "_kilometers");
    P(this, "course");
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
    ys("createSegments");
    const s = this.course.waypoints, r = this.calcSegments(
      $r(
        s.map((a) => a.loc),
        this.course.dist
      )
    );
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, l) => {
      a.waypoint = s[l + 1];
    }), r;
  }
  createSplits(s) {
    ys(`createSplits:${s}`);
    const r = Eu(s), a = Q.range(this.course.dist * r).map((p) => p / r);
    this.course.dist - a[a.length - 1] > 1e-4 && a.push(this.course.dist);
    const l = this.calcSegments($r(a, this.course.dist));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var R;
    ys.extend("calcSegments")("exec");
    const a = this.course, l = a.points, p = [], d = [];
    let _, y, M = a.points[0], I;
    for (_ = 0, y = s.length; _ < y; _++) {
      const F = s[_];
      I && qe((R = s[_ - 1]) == null ? void 0 : R.end, F.start, 4) ? M = I : M = a.getPoint(F.start), I = a.getPoint(F.end);
      const T = F.end - F.start, E = new Tu(this.course, {
        gain: 0,
        loss: 0,
        grade: T > 0 ? (I.alt - M.alt) / T / 10 * (I.alt - M.alt > 0 ? a.gainScale : a.lossScale) : 0,
        point1: M,
        point2: I
      }), N = new Cn().init(0);
      p.push(E), d.push(N);
    }
    const m = (F, T, E, N) => {
      const q = E.alt - T.alt;
      F[q > 0 ? "gain" : "loss"] += q * (q > 0 ? a.gainScale : a.lossScale), Ps(T, a);
      const K = E.loc - T.loc;
      N.applyEach((Z, it) => Z + it * K, T.factors);
    };
    _ = 1;
    for (let F = 0; F < p.length; F++) {
      const T = p[F], E = d[F];
      for (; we(l[_].loc, T.point1.loc, 4); ) _++;
      let N = T.point1;
      for (; _ < l.length && we(l[_].loc, T.point2.loc, 4); ) {
        const q = l[_];
        m(T, N, q, E), N = q, _++;
      }
      m(T, N, T.point2, E);
    }
    return p;
  }
}
var Ms = { exports: {} }, pu;
function z0() {
  return pu || (pu = 1, function(f, s) {
    (function() {
      var r = Math.PI, a = Math.sin, l = Math.cos, p = Math.tan, d = Math.asin, _ = Math.atan2, y = Math.acos, M = r / 180, I = 1e3 * 60 * 60 * 24, m = 2440588, R = 2451545;
      function F(O) {
        return O.valueOf() / I - 0.5 + m;
      }
      function T(O) {
        return new Date((O + 0.5 - m) * I);
      }
      function E(O) {
        return F(O) - R;
      }
      var N = M * 23.4397;
      function q(O, $) {
        return _(a(O) * l(N) - p($) * a(N), l(O));
      }
      function K(O, $) {
        return d(a($) * l(N) + l($) * a(N) * a(O));
      }
      function Z(O, $, z) {
        return _(a(O), l(O) * a($) - p(z) * l($));
      }
      function it(O, $, z) {
        return d(a($) * a(z) + l($) * l(z) * l(O));
      }
      function _t(O, $) {
        return M * (280.16 + 360.9856235 * O) - $;
      }
      function Wt(O) {
        return O < 0 && (O = 0), 2967e-7 / Math.tan(O + 312536e-8 / (O + 0.08901179));
      }
      function bt(O) {
        return M * (357.5291 + 0.98560028 * O);
      }
      function jt(O) {
        var $ = M * (1.9148 * a(O) + 0.02 * a(2 * O) + 3e-4 * a(3 * O)), z = M * 102.9372;
        return O + $ + z + r;
      }
      function Ht(O) {
        var $ = bt(O), z = jt($);
        return {
          dec: K(z, 0),
          ra: q(z, 0)
        };
      }
      var Tt = {};
      Tt.getPosition = function(O, $, z) {
        var ft = M * -z, nt = M * $, ht = E(O), ot = Ht(ht), ct = _t(ht, ft) - ot.ra;
        return {
          azimuth: Z(ct, nt, ot.dec),
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
      Tt.addTime = function(O, $, z) {
        ye.push([O, $, z]);
      };
      var ze = 9e-4;
      function Kr(O, $) {
        return Math.round(O - ze - $ / (2 * r));
      }
      function Me(O, $, z) {
        return ze + (O + $) / (2 * r) + z;
      }
      function Ge(O, $, z) {
        return R + O + 53e-4 * a($) - 69e-4 * a(2 * z);
      }
      function Zr(O, $, z) {
        return y((a(O) - a($) * a(z)) / (l($) * l(z)));
      }
      function bn(O) {
        return -2.076 * Math.sqrt(O) / 60;
      }
      function _n(O, $, z, ft, nt, ht, ot) {
        var ct = Zr(O, z, ft), Mt = Me(ct, $, nt);
        return Ge(Mt, ht, ot);
      }
      Tt.getTimes = function(O, $, z, ft) {
        ft = ft || 0;
        var nt = M * -z, ht = M * $, ot = bn(ft), ct = E(O), Mt = Kr(ct, nt), Kt = Me(0, nt, Mt), Ft = bt(Kt), Bt = jt(Ft), vn = K(Bt, 0), vt = Ge(Kt, Ft, Bt), Lt, On, Ct, Ut, fn, tn, pt = {
          solarNoon: T(vt),
          nadir: T(vt - 0.5)
        };
        for (Lt = 0, On = ye.length; Lt < On; Lt += 1)
          Ct = ye[Lt], Ut = (Ct[0] + ot) * M, fn = _n(Ut, nt, ht, vn, Mt, Ft, Bt), tn = vt - (fn - vt), pt[Ct[1]] = T(tn), pt[Ct[2]] = T(fn);
        return pt;
      };
      function He(O) {
        var $ = M * (218.316 + 13.176396 * O), z = M * (134.963 + 13.064993 * O), ft = M * (93.272 + 13.22935 * O), nt = $ + M * 6.289 * a(z), ht = M * 5.128 * a(ft), ot = 385001 - 20905 * l(z);
        return {
          ra: q(nt, ht),
          dec: K(nt, ht),
          dist: ot
        };
      }
      Tt.getMoonPosition = function(O, $, z) {
        var ft = M * -z, nt = M * $, ht = E(O), ot = He(ht), ct = _t(ht, ft) - ot.ra, Mt = it(ct, nt, ot.dec), Kt = _(a(ct), p(nt) * l(ot.dec) - a(ot.dec) * l(ct));
        return Mt = Mt + Wt(Mt), {
          azimuth: Z(ct, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Tt.getMoonIllumination = function(O) {
        var $ = E(O || /* @__PURE__ */ new Date()), z = Ht($), ft = He($), nt = 149598e3, ht = y(a(z.dec) * a(ft.dec) + l(z.dec) * l(ft.dec) * l(z.ra - ft.ra)), ot = _(nt * a(ht), ft.dist - nt * l(ht)), ct = _(l(z.dec) * a(z.ra - ft.ra), a(z.dec) * l(ft.dec) - l(z.dec) * a(ft.dec) * l(z.ra - ft.ra));
        return {
          fraction: (1 + l(ot)) / 2,
          phase: 0.5 + 0.5 * ot * (ct < 0 ? -1 : 1) / Math.PI,
          angle: ct
        };
      };
      function Sn(O, $) {
        return new Date(O.valueOf() + $ * I / 24);
      }
      Tt.getMoonTimes = function(O, $, z, ft) {
        var nt = new Date(O);
        ft ? nt.setUTCHours(0, 0, 0, 0) : nt.setHours(0, 0, 0, 0);
        for (var ht = 0.133 * M, ot = Tt.getMoonPosition(nt, $, z).altitude - ht, ct, Mt, Kt, Ft, Bt, vn, vt, Lt, On, Ct, Ut, fn, tn, pt = 1; pt <= 24 && (ct = Tt.getMoonPosition(Sn(nt, pt), $, z).altitude - ht, Mt = Tt.getMoonPosition(Sn(nt, pt + 1), $, z).altitude - ht, Bt = (ot + Mt) / 2 - ct, vn = (Mt - ot) / 2, vt = -vn / (2 * Bt), Lt = (Bt * vt + vn) * vt + ct, On = vn * vn - 4 * Bt * ct, Ct = 0, On >= 0 && (tn = Math.sqrt(On) / (Math.abs(Bt) * 2), Ut = vt - tn, fn = vt + tn, Math.abs(Ut) <= 1 && Ct++, Math.abs(fn) <= 1 && Ct++, Ut < -1 && (Ut = fn)), Ct === 1 ? ot < 0 ? Kt = pt + Ut : Ft = pt + Ut : Ct === 2 && (Kt = pt + (Lt < 0 ? fn : Ut), Ft = pt + (Lt < 0 ? Ut : fn)), !(Kt && Ft)); pt += 2)
          ot = Mt;
        var mn = {};
        return Kt && (mn.rise = Sn(nt, Kt)), Ft && (mn.set = Sn(nt, Ft)), !Kt && !Ft && (mn[Lt > 0 ? "alwaysUp" : "alwaysDown"] = !0), mn;
      }, f.exports = Tt;
    })();
  }(Ms)), Ms.exports;
}
var du = z0();
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
class G0 {
  constructor(s) {
    P(this, "nadir", 0);
    P(this, "dawn", 0);
    P(this, "sunrise", 0);
    P(this, "dusk", 0);
    P(this, "sunset", 0);
    P(this, "noon", 0);
    P(this, "nadirAltitude", 0);
    Object.assign(this, s);
  }
}
class Rs {
  constructor(s, r, a, l) {
    P(this, "start");
    P(this, "lat");
    P(this, "lon");
    P(this, "timezone");
    P(this, "sun");
    P(this, "startTime");
    this.start = s, this.lat = a, this.lon = l, this.timezone = r;
    const p = du.getTimes(this.start, this.lat, this.lon), d = du.getPosition(p.nadir, this.lat, this.lon);
    this.sun = new G0({
      nadir: Hn(p.nadir, this.timezone),
      dawn: Hn(p.dawn, this.timezone),
      sunrise: Hn(p.sunrise, this.timezone),
      dusk: Hn(p.dusk, this.timezone),
      sunset: Hn(p.sunset, this.timezone),
      noon: Hn(p.solarNoon, this.timezone),
      nadirAltitude: d.altitude * 180 / Math.PI
    }), this.startTime = Hn(this.start, this.timezone);
  }
  dateAtElapsed(s) {
    const r = new Date(this.start);
    return r.setTime(r.getTime() + s * 1e3), r;
  }
  elapsedToTimeOfDay(s) {
    return (this.startTime + s) % 86400;
  }
}
function Lu(f, s, r) {
  if (f.loc > s.loc && r > f.loc || s.loc > f.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const a = Math.abs(f.loc - r), l = f.latlon.bearingTo(s.latlon), { lat: p, lng: d } = f.latlon.destinationPoint(l, a), _ = f.grade, y = me(f.loc, s.loc, f.alt, s.alt, r);
  return new Gr({ lat: p, lon: d, alt: y }, r, _);
}
class xs {
  constructor(s, r = 1) {
    P(this, "_data");
    P(this, "loop");
    P(this, "site");
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
    if (!Q.isNumber(s)) throw new Error("Wrong format for Waypoint.loc");
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
  get type() {
    return this.site.type;
  }
  get hasTypicalDelay() {
    return this.type === "aid" || this.type === "water" || this.loop >= 2 && this.type === "start";
  }
  get cutoff() {
    var s, r;
    return (r = (s = this.site.cutoffs) == null ? void 0 : s.find((a) => a.loop === this.loop)) == null ? void 0 : r.time;
  }
}
const gu = Kn("models:Waypoint");
class Br {
  constructor(s, r) {
    /**
     * internal cache object
     * gets deleted and regenerated when version changes
     */
    P(this, "_cache", {});
    /**
     * internal data object
     */
    P(this, "_data");
    P(this, "course");
    this.course = s, this._data = r;
  }
  get cache() {
    var s;
    return ((s = this._cache) == null ? void 0 : s._version) === this.version ? this._cache : (this._cache = { _version: this.version }, this._cache);
  }
  get alt() {
    return "alt" in this._cache ? this._cache.alt : (this.refreshLLA(), Number(this._cache.alt));
  }
  get cutoffs() {
    return this._data.cutoffs || [];
  }
  get description() {
    return this._data.description;
  }
  get id() {
    return this._data.id;
  }
  get lat() {
    return "lat" in this._cache ? this._cache.lat : (this.refreshLLA(), Number(this._cache.lat));
  }
  get lon() {
    return "lon" in this._cache ? this._cache.lon : (this.refreshLLA(), Number(this._cache.lon));
  }
  get name() {
    return this._data.name;
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
  get type() {
    return this._data.type;
  }
  get version() {
    return this.course.version;
  }
  get waypoints() {
    return "waypoints" in this._cache ? this._cache.waypoints : (gu(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._cache.waypoints = [new xs(this, this.course.loops)] : this._cache.waypoints = Q.range(this.course.loops).map((s) => new xs(this, s + 1)), this._cache.waypoints);
  }
  refreshLLA() {
    gu("refreshLLA");
    let s, r, a;
    this.type === "start" ? { lat: s, lon: r, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: a } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: a } = this.course.track.getLLA(this.percent * this.course.track.dist), this._cache.lat = s, this._cache.lon = r, this._cache.alt = a;
  }
}
const Be = Kn("models:Course"), Ou = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class H0 {
  constructor(s, r) {
    P(this, "_cache", {});
    /**
     * Course data
     */
    P(this, "_data");
    /**
     * Track object
     */
    P(this, "track");
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    P(this, "version", 0);
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
    return "cutoffs" in this.cache ? this.cache.cutoffs : (this.cache.cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new ku(s)), this.cache.cutoffs);
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
  get event() {
    if ("event" in this.cache) return this.cache.event;
    if (this._data.start)
      return this.cache.event = new Rs(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      );
  }
  get gain() {
    return "gain" in this.cache ? this.cache.gain : (this.cache.gain = this._data.gain || this.track.gain * this.loops, this.cache.gain);
  }
  get gainScale() {
    return this._data.gain ? this._data.gain / (this.track.gain * this.loops) : 1;
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
  get loops() {
    return this._data.loops || 1;
  }
  get loss() {
    return "loss" in this.cache ? this.cache.loss : (this.cache.loss = this._data.loss || this.track.loss * this.loops, this.cache.loss);
  }
  get lossScale() {
    return this._data.loss ? this._data.loss / (this.track.loss * this.loops) : 1;
  }
  get points() {
    if ("points" in this.cache) return this.cache.points;
    Be("generating points array"), this.cache.points = new Array(this.track.points.length * this.loops);
    for (let s = 0; s < this.loops; s++)
      for (let r = 0; r < this.track.points.length; r++)
        this.points[r + s * this.track.points.length] = new Ur(
          this,
          this.track.points[r],
          s
        );
    return this.cache.points;
  }
  get sites() {
    var s;
    if ("sites" in this.cache) return this.cache.sites;
    if (this.cache.sites = ((s = this._data.sites) == null ? void 0 : s.map((r) => new Br(this, r))) || [
      new Br(this, {
        id: String(Q.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new Br(this, {
        id: String(Q.random(3e4, 4e4)),
        name: "Finish",
        type: "finish",
        percent: 1
      })
    ], this.cache.sites.length < 2 || !this.cache.sites.find((r) => r.type === "start") || !this.cache.sites.find((r) => r.type === "finish"))
      throw new Error("Course must have at least a start and finish");
    return this.cache.sites;
  }
  get splits() {
    return "splits" in this.cache ? this.cache.splits : (this.cache.splits = new q0(this), this.cache.splits);
  }
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    Be("stats:calculate");
    const s = this.track.points.map((d) => d.alt), r = this.track.points.map((d) => d.grade), a = this.terrain.map((d) => d.value / 100 + 1), l = {
      altitude: {
        avg: Q.sum(
          this.track.points.map((d, _) => {
            var y;
            return d.alt * (d.loc - (((y = this.track.points[_ - 1]) == null ? void 0 : y.loc) || 0));
          })
        ) / this.track.dist,
        max: Q.max(s) || 0,
        min: Q.min(s) || 0
      },
      grade: {
        avg: (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) / this.track.dist / 10,
        max: Q.max(r) || 0,
        min: Q.min(r) || 0
      },
      terrain: {
        avg: (Q.sumBy(this.terrain, (d) => (d.percents[1] - d.percents[0]) * this.dist * d.value) / this.dist + 100) / 100,
        max: Q.max(a) || 0,
        min: Q.min(a) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, p = (d) => this.terrain.reduce(
      (_, y) => y.value / 100 + 1 === d ? _ + (y.percents[1] - y.percents[0]) * this.dist : _,
      0
    );
    return Object.assign(l.terrain, {
      maxDist: p(l.terrain.max),
      minDist: p(l.terrain.min)
    }), this.cache.stats = l, l;
  }
  get terrain() {
    if ("terrain" in this.cache) return this.cache.terrain;
    if (this._data.terrain) {
      const s = [...this._data.terrain];
      s.sort((r, a) => r.percent - a.percent), this.cache.terrain = s.map((r, a) => {
        var _, y;
        const l = Q.isNumber(r.value) ? r.value : Q.isString(r.value) ? ((_ = Ou.find((M) => M.type === r.value)) == null ? void 0 : _.value) || 0 : r.value.value, p = typeof r == "string" ? r : Q.isObject(r.value) ? r.value.type : void 0;
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
    Be("update"), Object.assign(this._data, s), this.version++;
  }
  /**
   * Finds or creates a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns The CoursePoint at input location.
   */
  getPoint(s) {
    const r = this.points.findIndex((y) => zr(y.loc, s, 4)), a = this.points[r];
    if (qe(a.loc, s, 4)) return a;
    Be(`getPoint: creating new CoursePoint at ${s}`);
    const l = r - 1, p = this.points[l], d = Lu(
      p.source,
      a.source,
      s % this.loopDist / this.distScale
    ), _ = new Ur(this, d, Math.floor(s / this.loopDist));
    return _.interpolated = !0, _;
  }
  locationsToBreaks(s) {
    const r = s.filter((l) => l > 0 && qr(l, this.dist, 4));
    return r.unshift(0), r.map((l, p) => ({ start: l, end: r[p + 1] || this.dist }));
  }
}
class ku {
  constructor(s) {
    P(this, "waypoint");
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
var Cs = {}, _u;
function K0() {
  return _u || (_u = 1, function(f) {
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
        return l(d(_), arguments);
      }
      function a(_, y) {
        return r.apply(null, [_].concat(y || []));
      }
      function l(_, y) {
        var M = 1, I = _.length, m, R = "", F, T, E, N, q, K, Z, it;
        for (F = 0; F < I; F++)
          if (typeof _[F] == "string")
            R += _[F];
          else if (typeof _[F] == "object") {
            if (E = _[F], E.keys)
              for (m = y[M], T = 0; T < E.keys.length; T++) {
                if (m == null)
                  throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"', E.keys[T], E.keys[T - 1]));
                m = m[E.keys[T]];
              }
            else E.param_no ? m = y[E.param_no] : m = y[M++];
            if (s.not_type.test(E.type) && s.not_primitive.test(E.type) && m instanceof Function && (m = m()), s.numeric_arg.test(E.type) && typeof m != "number" && isNaN(m))
              throw new TypeError(r("[sprintf] expecting number but found %T", m));
            switch (s.number.test(E.type) && (Z = m >= 0), E.type) {
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
            s.json.test(E.type) ? R += m : (s.number.test(E.type) && (!Z || E.sign) ? (it = Z ? "+" : "-", m = m.toString().replace(s.sign, "")) : it = "", q = E.pad_char ? E.pad_char === "0" ? "0" : E.pad_char.charAt(1) : " ", K = E.width - (it + m).length, N = E.width && K > 0 ? q.repeat(K) : "", R += E.align ? it + m + N : q === "0" ? it + N + m : N + it + m);
          }
        return R;
      }
      var p = /* @__PURE__ */ Object.create(null);
      function d(_) {
        if (p[_])
          return p[_];
        for (var y = _, M, I = [], m = 0; y; ) {
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
        return p[_] = I;
      }
      f.sprintf = r, f.vsprintf = a, typeof window < "u" && (window.sprintf = r, window.vsprintf = a);
    })();
  }(Cs)), Cs;
}
var Du = K0();
const Z0 = Kn("PaceChunk");
class J0 {
  constructor() {
    P(this, "iterations", !1);
    P(this, "factor", !1);
    P(this, "target", !1);
  }
  get passing() {
    return this.iterations && this.factor && this.target;
  }
}
class vu {
  constructor(s, r, a, l) {
    P(this, "constraints");
    P(this, "points");
    P(this, "plan");
    P(this, "delay");
    P(this, "factor");
    P(this, "factors", new Cn());
    P(this, "status");
    this.constraints = a, this.points = r, this.plan = s, this.delay = l, this.factor = 1;
  }
  get elapsed() {
    const s = Q.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0];
    return (Q.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - s;
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
    s[0].elapsed = Q.isFunction(this.constraints[0]) ? this.constraints[0]() : this.constraints[0], s[0].time = s[0].elapsed - Q.sum(this.plan.pacing.chunks.filter((M) => M.points[0].loc < s[0].loc).map((M) => M.delay)), this.plan.event.start && (s[0].tod = this.plan.event.elapsedToTimeOfDay(s[0].elapsed));
    let r = s[0].elapsed, a = s[0].delay || 0, l = 0, p = 0, d = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, I = s.length; M < I; M++) {
      l = s[M].loc - s[M - 1].loc, $e(s[M - 1], this.plan), y.applyEach((R, F) => R + F * l, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      d += m * l, p = _ * m * l, s[M].time = s[M - 1].time + p, a = s[M - 1].delay || 0, r += p + a, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    $e(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = d / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = Z0.extend(
      Du.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let l = this.factor || 0, p;
    const d = new J0();
    for (p = 0; p < 20 && (this.applyPacing(), d.iterations = p >= 2, d.factor = !Q.round(l - this.factor, 10), l = this.factor, d.target = Math.abs(
      (Q.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, !d.passing); p++)
      ;
    a("iteration complete"), this.status = {
      tests: d,
      success: d.passing,
      iterations: p + 1
    };
  }
}
const ln = Kn("Pacing");
class Nu {
  constructor(s) {
    P(this, "chunks", []);
    P(this, "plan");
    P(this, "_factor");
    P(this, "_factors");
    /**
     * last time this pacing was updated
     */
    P(this, "version");
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
    return this._factor ? this._factor : (ln("factor:update"), this.chunks && (this._factor = Q.sum(this.chunks.map((s) => s.factor * s.dist)) / this.plan.course.dist), this._factor || 1);
  }
  clearFactor() {
    delete this._factor;
  }
  get factors() {
    return ln("factors:get"), this._factors || (ln("factors:update"), this._factors = As(this.chunks)), this._factors;
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
    var a, l, p;
    const s = ln.extend("calculate");
    for (s("exec"), s("clearing cache"), this.clearCache(); this.plan.points.find((d) => d.interpolated); ) {
      const d = this.plan.points.findIndex((_) => _.interpolated);
      this.plan.points.splice(d, 1);
    }
    for (s("adding points at each terrain factor break"), (a = this.plan.course.terrain) == null || a.forEach(
      (d) => this.plan.getPoint(d.percents[0] * this.plan.course.dist, !0)
    ), s("adding points at each cutoff"), this.plan.cutoffMargin && ((l = this.plan.cutoffs) == null || l.forEach((d) => {
      this.plan.getPoint(d.loc, !0);
    })), this.plan.points.filter((d) => d.delay).forEach((d) => {
      d.delay = 0;
    }), (p = this.plan.delays) == null || p.forEach((d) => {
      const _ = this.plan.getPoint(d.loc, !0);
      _.delay = d.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...Q.reverse([...this.plan.cutoffs || []]), null].forEach((d) => {
      for (; this.chunks.find((y) => !y.status); )
        this.calcChunks(), this.validateChunks();
      if (!d) return !0;
      const _ = this.plan.getPoint(d.loc);
      if (_.elapsed - d.time > 0.5) {
        s(`cutoff at ${d.loc} missed`);
        const y = this.chunks[0];
        Q.last(y.points) === _ ? (s(`setting cutoff at ${d.loc}`), y.constraints = [0, d.time], delete y.status) : this.splitChunk(y, _, d.time);
      }
    }), Q.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), ln(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`); this.plan.points.find((d) => d.interpolated); ) {
      const d = this.plan.points.findIndex((_) => _.interpolated);
      this.plan.points.splice(d, 1);
    }
    this.version = this.plan.version;
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
    this.chunks = [new vu(this.plan, this.plan.points, [0, s], this.plan.delay)], this.plan.points.forEach((r) => {
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
    const p = s.points.findIndex((y) => y === r), d = Q.round(r.elapsed - r.time), _ = new vu(this.plan, s.points.slice(0, p + 1), [0, a], d);
    _.points.filter((y, M) => M < _.points.length - 1).forEach((y) => {
      y._chunk = _;
    }), this.chunks.unshift(_), s.constraints[0] = a, s.delay -= d, s.points = s.points.slice(p), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const a = this.chunks.findIndex((p) => p === s), l = this.chunks.findIndex((p) => p === r);
    if (l - a !== 1) throw new Error("chunks must be sequential");
    ln(Du.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, l, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((p) => {
      p._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(l, 1);
  }
}
class Is extends Ur {
  constructor(r, a) {
    super(r.course, a, a.loop);
    P(this, "_plan");
    P(this, "_chunk");
    P(this, "delay", 0);
    P(this, "elapsed", 0);
    P(this, "factors", new Cn());
    P(this, "source");
    P(this, "time", 0);
    P(this, "tod", 0);
    this._plan = r, this.source = a;
  }
  get factor() {
    var r;
    return (r = this.factors) == null ? void 0 : r.combined;
  }
  get np() {
    var r;
    if (!this._chunk) throw new Error("PlanPoint._chunk not defined");
    return (r = this._chunk) == null ? void 0 : r.np;
  }
  get pace() {
    return this.np * this.factor;
  }
}
const bs = Kn("PlanSplits");
class Y0 {
  constructor(s) {
    P(this, "plan");
    P(this, "_segments");
    P(this, "_segmentsVersion");
    P(this, "_miles");
    P(this, "_milesVersion");
    P(this, "_kilometers");
    P(this, "_kilometersVersion");
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
    bs("createSegments");
    const s = this.plan.course.waypoints, r = this.calcSegments(
      $r(
        s.map((a) => a.loc),
        this.plan.course.dist
      )
    );
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, l) => {
      a.waypoint = s[l + 1];
    }), r;
  }
  createSplits(s) {
    bs(`createSplits:${s}`);
    const r = Eu(s), a = Q.range(this.plan.course.dist * r).map(
      (p) => p / r
    );
    this.plan.course.dist - a[a.length - 1] > 1e-4 && a.push(this.plan.course.dist);
    const l = this.calcSegments($r(a, this.plan.course.dist));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var F;
    bs.extend("calcSegments")("exec"), this.plan.checkPacing();
    const a = this.plan, l = a.course, p = a.points, d = [], _ = [];
    let y, M, I = a.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const T = s[y];
      m && qe((F = s[y - 1]) == null ? void 0 : F.end, T.start, 4) ? I = m : I = a.getPoint(T.start), m = a.getPoint(T.end);
      const E = T.end - T.start, N = new Fu(this.plan, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (m.alt - I.alt) / E / 10 * (m.alt - I.alt > 0 ? l.gainScale : l.lossScale) : 0,
        point1: I,
        point2: m
      }), q = new Cn().init(0);
      d.push(N), _.push(q);
    }
    const R = (T, E, N, q) => {
      const K = N.alt - E.alt;
      T[K > 0 ? "gain" : "loss"] += K * (K > 0 ? l.gainScale : l.lossScale), $e(E, a);
      const Z = N.loc - E.loc;
      q.applyEach((it, _t) => it + _t * Z, E.factors);
    };
    y = 1;
    for (let T = 0; T < d.length; T++) {
      const E = d[T], N = _[T];
      for (; we(p[y].loc, E.point1.loc, 4); ) y++;
      let q = E.point1;
      for (; y < p.length && we(p[y].loc, E.point2.loc, 4); ) {
        const K = p[y];
        R(E, q, K, N), q = K, y++;
      }
      R(E, q, E.point2, N), a && (E.delay = a.delays.filter((K) => zr(E.point1.loc, K.loc, 4) && qr(E.point2.loc, K.loc, 4)).reduce((K, Z) => K + Z.delay, 0));
    }
    return d;
  }
}
const Gn = Kn("models:Plan");
class X0 {
  constructor(s, r) {
    P(this, "_cache", {});
    P(this, "_data");
    P(this, "course");
    P(this, "pacing", new Nu(this));
    P(this, "points");
    P(this, "splits", new Y0(this));
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    P(this, "_version", 0);
    if (this.course = s, this._data = r, r.delays) {
      const a = s.sites.map((p) => p.id), l = r.delays.find((p) => !a.includes(p.siteId));
      if (l)
        throw console.error(`Site in plan delays is not in course sites (${String(l.siteId)})`), new Error("Site in plan delays is not in course sites.");
    }
    this.points = this.course.points.map((a) => new Is(this, a)), this._version = 1;
  }
  get cache() {
    var s;
    return ((s = this._cache) == null ? void 0 : s.version) === this.version ? this._cache : (this._cache = { version: this.version }, this._cache);
  }
  get cutoffMargin() {
    return this._data.cutoffMargin;
  }
  get cutoffs() {
    var r;
    if ("cutoffs" in this.cache) return this.cache.cutoffs;
    this.cache.cutoffs = this.cutoffMargin ? ((r = this.course.cutoffs) == null ? void 0 : r.map((a) => new V0(this, a, this.getPoint(a.loc, !0)))) || [] : [];
    let s = 0;
    for (; this.cache.cutoffs.length - 1 >= s; ) {
      const a = this.cache.cutoffs[s];
      this.cache.cutoffs.find((l, p) => p > s && l.time <= a.time) ? (Gn(`get cutoffs: deleting extraneous cutoff at ${a.loc} km`), this.cache.cutoffs.splice(s, 1)) : s++;
    }
    return this.cache.cutoffs;
  }
  get delay() {
    return Q.sumBy(this.delays, "delay");
  }
  get delays() {
    if ("delays" in this.cache) return this.cache.delays;
    const s = this.course.waypoints.map((a) => {
      var d;
      const l = (d = this._data.delays) == null ? void 0 : d.find(
        (_) => _.loop === a.loop && _.siteId === a.site.id
      ), p = l ? l.delay : a.hasTypicalDelay ? this.typicalDelay : 0;
      return new Q0(a, p);
    }).filter((a) => a.delay > 0).sort((a, l) => a.loc - l.loc);
    let r = 0;
    for (; s.length - 1 >= r; )
      r > 0 && s[r].loc === s[r - 1].loc ? (Gn(`get delays: merging delay at ${s[r].loc} km`), s[r - 1].delay += s[r].delay, s.splice(r, 1)) : r++;
    return this.cache.delays = s, this.cache.delays;
  }
  get event() {
    if ("event" in this.cache) return this.cache.event;
    if (this._data.start)
      return this.cache.event = new Rs(
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
    Gn("calculating events.sun");
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
    s.sort((d, _) => d.elapsed - _.elapsed);
    const l = wu(
      this.points.map((d) => d.elapsed),
      this.points.map((d) => d.loc),
      s.map((d) => d.elapsed)
    ), p = s.map((d, _) => ({ ...d, loc: l[_] }));
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
  get id() {
    return this._data.id;
  }
  get method() {
    return this._data.method;
  }
  get name() {
    return this._data.name;
  }
  get scales() {
    return "scales" in this.cache ? this.cache.scales : this._data.scales ? this.cache.scales = {
      altitude: this._data.scales.altitude || 1,
      dark: this._data.scales.dark || 1
    } : this.cache.scales = void 0;
  }
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    Gn("calculating stats.factors");
    const s = Q.fromPairs(
      ve.map((p) => {
        const d = this.points.map((_) => _.factors[p]);
        return [
          p,
          {
            min: Number(Q.min(d)),
            max: Number(Q.max(d))
          }
        ];
      })
    );
    Gn("calculating stats.sun");
    const r = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    };
    let a = 0, l = 0;
    return this.points.forEach((p, d) => {
      var _, y;
      a = p.loc - (((_ = this.points[d - 1]) == null ? void 0 : _.loc) || 0), l = p.elapsed - (((y = this.points[d - 1]) == null ? void 0 : y.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (p.tod <= this.event.sun.dawn || p.tod >= this.event.sun.dusk) ? (r.dark.time += l, r.dark.dist += a) : p.tod < this.event.sun.sunrise || p.tod > this.event.sun.sunset ? (r.twilight.time += l, r.twilight.dist += a) : (r.day.time += l, r.day.dist += a);
    }), this.cache.stats = { factors: s, sun: r }, this.cache.stats;
  }
  get strategy() {
    return "strategy" in this.cache ? this.cache.strategy : this.cache.strategy = new Pu(this, this._data.strategy);
  }
  get target() {
    return this._data.target;
  }
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
    if (Gn("checkPacing"), (!((s = this.pacing.status) != null && s.complete) || !this.pacing.isCurrent) && (Gn("checkPacing: calculate"), this.pacing.calculate()), !((r = this.points) != null && r.length)) throw new Error("No plan points");
    return !0;
  }
  getDelayAtWaypoint(s) {
    var r;
    return ((r = this.delays.find((a) => a.waypoint === s)) == null ? void 0 : r.delay) || 0;
  }
  getPoint(s, r = !1) {
    const a = this.points.findIndex((y) => zr(y.loc, s, 4)), l = this.points[a];
    if (qe(l.loc, s, 4)) return l;
    Gn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const p = a - 1, d = this.points[p], _ = new Is(this, this.course.getPoint(s));
    return _.delay = Math.round(l.elapsed - d.elapsed - (l.time - d.time)), _.time = me(d.loc, l.loc, d.time, l.time, _.loc), _.elapsed = d.elapsed + d.delay + (_.time - d.time), _.tod = this.event.elapsedToTimeOfDay(_.elapsed), $e(_, this), r && this.points.splice(a, 0, _), _;
  }
  update(s) {
    const a = ["target", "method"].find((l) => l in s && Q.isNil(s[l]));
    if (a) throw new Error(`Plan.${a} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class Q0 {
  constructor(s, r) {
    P(this, "delay");
    P(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class V0 {
  constructor(s, r, a) {
    P(this, "plan");
    P(this, "courseCutoff");
    P(this, "point");
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
const Wu = (f, s, r, a) => {
  const l = Mu(f, s, r, a), p = [];
  return r.forEach((d, _) => {
    let y = l[_][0] / 10;
    y > 50 ? y = 50 : y < -50 && (y = -50);
    const M = d * l[_][0] + l[_][1];
    p.push({
      grade: y,
      alt: M
    });
  }), p;
};
function j0(f, s) {
  return Wu(
    s,
    f.map((a) => a.alt),
    s,
    0.05
  ).map((a) => a.grade);
}
const t_ = (f) => {
  let s = 0, r = 0;
  const a = [0];
  for (let l = 1, p = f.length; l < p; l++)
    s = Number(f[l - 1].latlon.distanceTo(f[l].latlon)), r += s, a.push(r);
  return a;
}, Wr = Kn("models:Track");
class Hr {
  constructor(s) {
    P(this, "dist");
    P(this, "gain");
    P(this, "loss");
    P(this, "points");
    Wr("Creating new Track object");
    const r = s.map((M) => new Es(M)), a = t_(r), l = j0(r, a);
    this.points = r.map((M, I) => new Gr(M, a[I], l[I])), Wr(`set-points - ${r.length} points`), Wr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let p = 0, d = 0, _ = 0, y = this.points[0].alt;
    this.points.forEach((M) => {
      _ = M.alt - y, _ < 0 ? d += _ : p += _, y = M.alt;
    }), this.gain = p, this.loss = d;
  }
  get start() {
    return Q.pick(this.points[0], ["alt", "lat", "lon"]);
  }
  get finish() {
    return Q.pick(this.points[this.points.length - 1], ["alt", "lat", "lon"]);
  }
  getLLA(s) {
    s > this.dist && (s = s % this.dist);
    let r;
    if (s === 0) r = this.points[0];
    else {
      const a = this.points.findIndex((l) => l.loc >= s);
      r = Lu(this.points[a - 1], this.points[a], s);
    }
    return Q.pick(r, ["lat", "lon", "alt"]);
  }
  getNearestPoint(s, r, a) {
    let p = this.points.findIndex((y) => y === r), d = this.points[p], _ = 0;
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
      _ = Math.min(...I);
      const m = I.findIndex((R) => R === _);
      d = M[m], a = a / 5;
    }
    return {
      point: d,
      delta: _
    };
  }
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const a = Wr.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return a("Does not meet criteria"), this;
    const l = this.dist, p = Math.floor(l / s) + 1, d = Array(p).fill(0).map((I, m) => Nt(m++ * s, 3));
    d[d.length - 1] < l && d.push(l);
    const _ = Wu(
      this.points.map((I) => I.loc),
      this.points.map((I) => I.alt),
      d,
      2 * s
    ), y = d.map((I) => this.getLLA(I)).map((I, m) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(_[m].alt, 2)
    })), M = new Hr(y);
    return a(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function n_(f, s, r) {
  const a = f.map((l, p) => ({ lat: f[p], lon: s[p], alt: r[p] }));
  return new Hr(a);
}
const s_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Course: H0,
  CourseCutoff: ku,
  CoursePoint: Ur,
  CourseSegment: Tu,
  Event: Rs,
  Pacing: Nu,
  Plan: X0,
  PlanPoint: Is,
  PlanSegment: Fu,
  Point: Es,
  Site: Br,
  Track: Hr,
  TrackPoint: Gr,
  Waypoint: xs,
  createTrackFromArrays: n_,
  terrainTypes: Ou
}, Symbol.toStringTag, { value: "Module" })), a_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Hn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cn as Factors,
  s_ as Models,
  Pu as Strategy,
  R0 as adjustStrategy,
  i_ as factors,
  Lu as interpolatePoint,
  r_ as math,
  x0 as scaleDark,
  a_ as util
};
