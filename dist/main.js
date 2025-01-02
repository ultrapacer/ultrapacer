var _0 = Object.defineProperty;
var v0 = (f, s, r) => s in f ? _0(f, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : f[s] = r;
var A = (f, s, r) => v0(f, typeof s != "symbol" ? s + "" : s, r);
const m0 = {
  rate: 6,
  // %
  span: 1e3,
  // m
  th: 750
  // m
};
function vu(f, s) {
  (s === null || typeof s > "u") && (s = m0);
  let r = 0;
  return Array.isArray(f) ? r = (f[0] + f[1]) / 2 : r = f, r <= s.th ? 1 : (1 + s.rate / s.span / 100) ** (r - s.th);
}
const su = {
  baseline: 0,
  terrainScale: 1
};
function Nt(f, s = 0) {
  return Math.round(f * 10 ** s) / 10 ** s;
}
function me(f, s, r, a, l) {
  return r + (l - f) / (s - f) * (a - r);
}
function mu(f, s, r) {
  let a = 0, l = 0;
  const h = [];
  for (a = 0; a < r.length; a++)
    if (r[a] < f[l])
      h.push(s[l]);
    else {
      for (; l < f.length - 1 && f[l + 1] <= r[a]; )
        l++;
      l === f.length - 1 || r[a] === f[l] ? h.push(s[l]) : h.push(me(f[l], f[l + 1], s[l], s[l + 1], r[a]));
    }
  return h;
}
function wu(f) {
  let s, r, a, l, h = 0, g = 0, _ = 0, y = 0, M = 0;
  for (s = 0; s < f.length; s++)
    r = f[s][0], a = f[s][1], l = f[s][2], M += l, h += l * r, _ += l * (r * r), g += l * a, y += l * (r * a);
  const I = (g * _ - h * y) / (M * _ - h * h);
  return [(M * y - h * g) / (M * _ - h * h), I];
}
function yu(f, s, r, a) {
  let l = 0, h = 0;
  const g = [];
  return r.forEach((_) => {
    for (; f[l] < _ - a; )
      l++;
    for (l > 0 && f[l] >= _ && l--; h < f.length - 1 && f[h + 1] <= _ + a; )
      h++;
    h < f.length - 1 && f[h] <= _ && h++;
    const y = Math.max(a, Math.abs(_ - f[l]) + 1e-3, Math.abs(_ - f[h]) + 1e-3), M = [];
    let I = 0;
    for (let m = l; m <= h; m++)
      I = (1 - (Math.abs(_ - f[m]) / y) ** 3) ** 3, M.push([f[m], s[m], I]);
    g.push(wu(M));
  }), g;
}
function bs(f, s, r) {
  return Nt(f, r) < Nt(s, r);
}
function w0(f, s, r) {
  return Nt(f, r) > Nt(s, r);
}
function we(f, s, r) {
  return Nt(f, r) <= Nt(s, r);
}
function Ur(f, s, r) {
  return Nt(f, r) >= Nt(s, r);
}
function qe(f, s, r) {
  return Nt(f, r) === Nt(s, r);
}
const n_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interp: me,
  interpArray: mu,
  linearRegression: wu,
  req: qe,
  rgt: w0,
  rgte: Ur,
  rlt: bs,
  rlte: we,
  round: Nt,
  wlslr: yu
}, Symbol.toStringTag, { value: "Module" }));
function y0(f, s) {
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
function Mu(f, s, r, a = su) {
  if (s === 1 || f >= r.sunrise && f <= r.sunset)
    return 1;
  (a === null || typeof a > "u") && (a = su);
  const l = r.nadirAltitude < -6 ? 1 : -(r.nadirAltitude / 6), h = (a.terrainScale * (s - 1) + a.baseline) * l, g = y0(r, f);
  return 1 + h * g;
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
const M0 = {
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
function Cu(f, s) {
  return (s === null || typeof s > "u") && (s = M0), f < s.lower.lim ? s.lower.m * f + s.lower.b : f > s.upper.lim ? s.upper.m * f + s.upper.b : s.a * f ** 2 + s.b * f + 1;
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
var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bu(f) {
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
var C0 = Ue.exports, au;
function S0() {
  return au || (au = 1, function(f, s) {
    (function() {
      var r, a = "4.17.21", l = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", M = 500, I = "__lodash_placeholder__", m = 1, R = 2, F = 4, T = 1, E = 2, N = 1, q = 2, Z = 4, J = 8, it = 16, _t = 32, Bt = 64, St = 128, jt = 256, Ht = 512, Tt = 30, ye = "...", Ge = 800, $r = 16, Me = 1, ze = 2, qr = 3, Sn = 1 / 0, _n = 9007199254740991, He = 17976931348623157e292, bn = NaN, k = 4294967295, $ = k - 1, G = k >>> 1, ft = [
        ["ary", St],
        ["bind", N],
        ["bindKey", q],
        ["curry", J],
        ["curryRight", it],
        ["flip", Ht],
        ["partial", _t],
        ["partialRight", Bt],
        ["rearg", jt]
      ], nt = "[object Arguments]", ht = "[object Array]", ot = "[object AsyncFunction]", ct = "[object Boolean]", Mt = "[object Date]", Kt = "[object DOMException]", Ft = "[object Error]", Wt = "[object Function]", vn = "[object GeneratorFunction]", vt = "[object Map]", Lt = "[object Number]", kn = "[object Null]", Ct = "[object Object]", Ut = "[object Promise]", fn = "[object Proxy]", tn = "[object RegExp]", pt = "[object Set]", mn = "[object String]", Ke = "[object Symbol]", ku = "[object Undefined]", Ce = "[object WeakMap]", Ou = "[object WeakSet]", Se = "[object ArrayBuffer]", ee = "[object DataView]", Gr = "[object Float32Array]", zr = "[object Float64Array]", Hr = "[object Int8Array]", Kr = "[object Int16Array]", Zr = "[object Int32Array]", Jr = "[object Uint8Array]", Yr = "[object Uint8ClampedArray]", Xr = "[object Uint16Array]", Qr = "[object Uint32Array]", Du = /\b__p \+= '';/g, Nu = /\b(__p \+=) '' \+/g, Bu = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Es = /&(?:amp|lt|gt|quot|#39);/g, Rs = /[&<>"']/g, Wu = RegExp(Es.source), Uu = RegExp(Rs.source), $u = /<%-([\s\S]+?)%>/g, qu = /<%([\s\S]+?)%>/g, Ts = /<%=([\s\S]+?)%>/g, Gu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zu = /^\w*$/, Hu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, Ku = RegExp(Vr.source), jr = /^\s+/, Zu = /\s/, Ju = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yu = /\{\n\/\* \[wrapped with (.+)\] \*/, Xu = /,? & /, Qu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vu = /[()=,{}\[\]\/\s]/, ju = /\\(\\)?/g, tc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fs = /\w*$/, nc = /^[-+]0x[0-9a-f]+$/i, ec = /^0b[01]+$/i, rc = /^\[object .+?Constructor\]$/, ic = /^0o[0-7]+$/i, sc = /^(?:0|[1-9]\d*)$/, ac = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ze = /($^)/, oc = /['\n\r\u2028\u2029\\]/g, Je = "\\ud800-\\udfff", uc = "\\u0300-\\u036f", cc = "\\ufe20-\\ufe2f", lc = "\\u20d0-\\u20ff", Ls = uc + cc + lc, ks = "\\u2700-\\u27bf", Os = "a-z\\xdf-\\xf6\\xf8-\\xff", fc = "\\xac\\xb1\\xd7\\xf7", hc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pc = "\\u2000-\\u206f", dc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ds = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ns = "\\ufe0e\\ufe0f", Bs = fc + hc + pc + dc, ti = "['’]", gc = "[" + Je + "]", Ws = "[" + Bs + "]", Ye = "[" + Ls + "]", Us = "\\d+", _c = "[" + ks + "]", $s = "[" + Os + "]", qs = "[^" + Je + Bs + Us + ks + Os + Ds + "]", ni = "\\ud83c[\\udffb-\\udfff]", vc = "(?:" + Ye + "|" + ni + ")", Gs = "[^" + Je + "]", ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", ri = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + Ds + "]", zs = "\\u200d", Hs = "(?:" + $s + "|" + qs + ")", mc = "(?:" + re + "|" + qs + ")", Ks = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", Zs = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", Js = vc + "?", Ys = "[" + Ns + "]?", wc = "(?:" + zs + "(?:" + [Gs, ei, ri].join("|") + ")" + Ys + Js + ")*", yc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xs = Ys + Js + wc, Cc = "(?:" + [_c, ei, ri].join("|") + ")" + Xs, Sc = "(?:" + [Gs + Ye + "?", Ye, ei, ri, gc].join("|") + ")", bc = RegExp(ti, "g"), xc = RegExp(Ye, "g"), ii = RegExp(ni + "(?=" + ni + ")|" + Sc + Xs, "g"), Ac = RegExp([
        re + "?" + $s + "+" + Ks + "(?=" + [Ws, re, "$"].join("|") + ")",
        mc + "+" + Zs + "(?=" + [Ws, re + Hs, "$"].join("|") + ")",
        re + "?" + Hs + "+" + Ks,
        re + "+" + Zs,
        Mc,
        yc,
        Us,
        Cc
      ].join("|"), "g"), Ic = RegExp("[" + zs + Je + Ls + Ns + "]"), Pc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ec = [
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
      ], Rc = -1, lt = {};
      lt[Gr] = lt[zr] = lt[Hr] = lt[Kr] = lt[Zr] = lt[Jr] = lt[Yr] = lt[Xr] = lt[Qr] = !0, lt[nt] = lt[ht] = lt[Se] = lt[ct] = lt[ee] = lt[Mt] = lt[Ft] = lt[Wt] = lt[vt] = lt[Lt] = lt[Ct] = lt[tn] = lt[pt] = lt[mn] = lt[Ce] = !1;
      var ut = {};
      ut[nt] = ut[ht] = ut[Se] = ut[ee] = ut[ct] = ut[Mt] = ut[Gr] = ut[zr] = ut[Hr] = ut[Kr] = ut[Zr] = ut[vt] = ut[Lt] = ut[Ct] = ut[tn] = ut[pt] = ut[mn] = ut[Ke] = ut[Jr] = ut[Yr] = ut[Xr] = ut[Qr] = !0, ut[Ft] = ut[Wt] = ut[Ce] = !1;
      var Tc = {
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
      }, Fc = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Lc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, kc = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Oc = parseFloat, Dc = parseInt, Qs = typeof Or == "object" && Or && Or.Object === Object && Or, Nc = typeof self == "object" && self && self.Object === Object && self, It = Qs || Nc || Function("return this")(), si = s && !s.nodeType && s, Zn = si && !0 && f && !f.nodeType && f, Vs = Zn && Zn.exports === si, ai = Vs && Qs.process, nn = function() {
        try {
          var v = Zn && Zn.require && Zn.require("util").types;
          return v || ai && ai.binding && ai.binding("util");
        } catch {
        }
      }(), js = nn && nn.isArrayBuffer, ta = nn && nn.isDate, na = nn && nn.isMap, ea = nn && nn.isRegExp, ra = nn && nn.isSet, ia = nn && nn.isTypedArray;
      function Zt(v, S, C) {
        switch (C.length) {
          case 0:
            return v.call(S);
          case 1:
            return v.call(S, C[0]);
          case 2:
            return v.call(S, C[0], C[1]);
          case 3:
            return v.call(S, C[0], C[1], C[2]);
        }
        return v.apply(S, C);
      }
      function Bc(v, S, C, O) {
        for (var z = -1, et = v == null ? 0 : v.length; ++z < et; ) {
          var bt = v[z];
          S(O, bt, C(bt), v);
        }
        return O;
      }
      function en(v, S) {
        for (var C = -1, O = v == null ? 0 : v.length; ++C < O && S(v[C], C, v) !== !1; )
          ;
        return v;
      }
      function Wc(v, S) {
        for (var C = v == null ? 0 : v.length; C-- && S(v[C], C, v) !== !1; )
          ;
        return v;
      }
      function sa(v, S) {
        for (var C = -1, O = v == null ? 0 : v.length; ++C < O; )
          if (!S(v[C], C, v))
            return !1;
        return !0;
      }
      function On(v, S) {
        for (var C = -1, O = v == null ? 0 : v.length, z = 0, et = []; ++C < O; ) {
          var bt = v[C];
          S(bt, C, v) && (et[z++] = bt);
        }
        return et;
      }
      function Xe(v, S) {
        var C = v == null ? 0 : v.length;
        return !!C && ie(v, S, 0) > -1;
      }
      function oi(v, S, C) {
        for (var O = -1, z = v == null ? 0 : v.length; ++O < z; )
          if (C(S, v[O]))
            return !0;
        return !1;
      }
      function dt(v, S) {
        for (var C = -1, O = v == null ? 0 : v.length, z = Array(O); ++C < O; )
          z[C] = S(v[C], C, v);
        return z;
      }
      function Dn(v, S) {
        for (var C = -1, O = S.length, z = v.length; ++C < O; )
          v[z + C] = S[C];
        return v;
      }
      function ui(v, S, C, O) {
        var z = -1, et = v == null ? 0 : v.length;
        for (O && et && (C = v[++z]); ++z < et; )
          C = S(C, v[z], z, v);
        return C;
      }
      function Uc(v, S, C, O) {
        var z = v == null ? 0 : v.length;
        for (O && z && (C = v[--z]); z--; )
          C = S(C, v[z], z, v);
        return C;
      }
      function ci(v, S) {
        for (var C = -1, O = v == null ? 0 : v.length; ++C < O; )
          if (S(v[C], C, v))
            return !0;
        return !1;
      }
      var $c = li("length");
      function qc(v) {
        return v.split("");
      }
      function Gc(v) {
        return v.match(Qu) || [];
      }
      function aa(v, S, C) {
        var O;
        return C(v, function(z, et, bt) {
          if (S(z, et, bt))
            return O = et, !1;
        }), O;
      }
      function Qe(v, S, C, O) {
        for (var z = v.length, et = C + (O ? 1 : -1); O ? et-- : ++et < z; )
          if (S(v[et], et, v))
            return et;
        return -1;
      }
      function ie(v, S, C) {
        return S === S ? nl(v, S, C) : Qe(v, oa, C);
      }
      function zc(v, S, C, O) {
        for (var z = C - 1, et = v.length; ++z < et; )
          if (O(v[z], S))
            return z;
        return -1;
      }
      function oa(v) {
        return v !== v;
      }
      function ua(v, S) {
        var C = v == null ? 0 : v.length;
        return C ? hi(v, S) / C : bn;
      }
      function li(v) {
        return function(S) {
          return S == null ? r : S[v];
        };
      }
      function fi(v) {
        return function(S) {
          return v == null ? r : v[S];
        };
      }
      function ca(v, S, C, O, z) {
        return z(v, function(et, bt, at) {
          C = O ? (O = !1, et) : S(C, et, bt, at);
        }), C;
      }
      function Hc(v, S) {
        var C = v.length;
        for (v.sort(S); C--; )
          v[C] = v[C].value;
        return v;
      }
      function hi(v, S) {
        for (var C, O = -1, z = v.length; ++O < z; ) {
          var et = S(v[O]);
          et !== r && (C = C === r ? et : C + et);
        }
        return C;
      }
      function pi(v, S) {
        for (var C = -1, O = Array(v); ++C < v; )
          O[C] = S(C);
        return O;
      }
      function Kc(v, S) {
        return dt(S, function(C) {
          return [C, v[C]];
        });
      }
      function la(v) {
        return v && v.slice(0, da(v) + 1).replace(jr, "");
      }
      function Jt(v) {
        return function(S) {
          return v(S);
        };
      }
      function di(v, S) {
        return dt(S, function(C) {
          return v[C];
        });
      }
      function be(v, S) {
        return v.has(S);
      }
      function fa(v, S) {
        for (var C = -1, O = v.length; ++C < O && ie(S, v[C], 0) > -1; )
          ;
        return C;
      }
      function ha(v, S) {
        for (var C = v.length; C-- && ie(S, v[C], 0) > -1; )
          ;
        return C;
      }
      function Zc(v, S) {
        for (var C = v.length, O = 0; C--; )
          v[C] === S && ++O;
        return O;
      }
      var Jc = fi(Tc), Yc = fi(Fc);
      function Xc(v) {
        return "\\" + kc[v];
      }
      function Qc(v, S) {
        return v == null ? r : v[S];
      }
      function se(v) {
        return Ic.test(v);
      }
      function Vc(v) {
        return Pc.test(v);
      }
      function jc(v) {
        for (var S, C = []; !(S = v.next()).done; )
          C.push(S.value);
        return C;
      }
      function gi(v) {
        var S = -1, C = Array(v.size);
        return v.forEach(function(O, z) {
          C[++S] = [z, O];
        }), C;
      }
      function pa(v, S) {
        return function(C) {
          return v(S(C));
        };
      }
      function Nn(v, S) {
        for (var C = -1, O = v.length, z = 0, et = []; ++C < O; ) {
          var bt = v[C];
          (bt === S || bt === I) && (v[C] = I, et[z++] = C);
        }
        return et;
      }
      function Ve(v) {
        var S = -1, C = Array(v.size);
        return v.forEach(function(O) {
          C[++S] = O;
        }), C;
      }
      function tl(v) {
        var S = -1, C = Array(v.size);
        return v.forEach(function(O) {
          C[++S] = [O, O];
        }), C;
      }
      function nl(v, S, C) {
        for (var O = C - 1, z = v.length; ++O < z; )
          if (v[O] === S)
            return O;
        return -1;
      }
      function el(v, S, C) {
        for (var O = C + 1; O--; )
          if (v[O] === S)
            return O;
        return O;
      }
      function ae(v) {
        return se(v) ? il(v) : $c(v);
      }
      function hn(v) {
        return se(v) ? sl(v) : qc(v);
      }
      function da(v) {
        for (var S = v.length; S-- && Zu.test(v.charAt(S)); )
          ;
        return S;
      }
      var rl = fi(Lc);
      function il(v) {
        for (var S = ii.lastIndex = 0; ii.test(v); )
          ++S;
        return S;
      }
      function sl(v) {
        return v.match(ii) || [];
      }
      function al(v) {
        return v.match(Ac) || [];
      }
      var ol = function v(S) {
        S = S == null ? It : oe.defaults(It.Object(), S, oe.pick(It, Ec));
        var C = S.Array, O = S.Date, z = S.Error, et = S.Function, bt = S.Math, at = S.Object, _i = S.RegExp, ul = S.String, rn = S.TypeError, je = C.prototype, cl = et.prototype, ue = at.prototype, tr = S["__core-js_shared__"], nr = cl.toString, st = ue.hasOwnProperty, ll = 0, ga = function() {
          var t = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), er = ue.toString, fl = nr.call(at), hl = It._, pl = _i(
          "^" + nr.call(st).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), rr = Vs ? S.Buffer : r, Bn = S.Symbol, ir = S.Uint8Array, _a = rr ? rr.allocUnsafe : r, sr = pa(at.getPrototypeOf, at), va = at.create, ma = ue.propertyIsEnumerable, ar = je.splice, wa = Bn ? Bn.isConcatSpreadable : r, xe = Bn ? Bn.iterator : r, Jn = Bn ? Bn.toStringTag : r, or = function() {
          try {
            var t = jn(at, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), dl = S.clearTimeout !== It.clearTimeout && S.clearTimeout, gl = O && O.now !== It.Date.now && O.now, _l = S.setTimeout !== It.setTimeout && S.setTimeout, ur = bt.ceil, cr = bt.floor, vi = at.getOwnPropertySymbols, vl = rr ? rr.isBuffer : r, ya = S.isFinite, ml = je.join, wl = pa(at.keys, at), xt = bt.max, Et = bt.min, yl = O.now, Ml = S.parseInt, Ma = bt.random, Cl = je.reverse, mi = jn(S, "DataView"), Ae = jn(S, "Map"), wi = jn(S, "Promise"), ce = jn(S, "Set"), Ie = jn(S, "WeakMap"), Pe = jn(at, "create"), lr = Ie && new Ie(), le = {}, Sl = te(mi), bl = te(Ae), xl = te(wi), Al = te(ce), Il = te(Ie), fr = Bn ? Bn.prototype : r, Ee = fr ? fr.valueOf : r, Ca = fr ? fr.toString : r;
        function u(t) {
          if (mt(t) && !H(t) && !(t instanceof j)) {
            if (t instanceof sn)
              return t;
            if (st.call(t, "__wrapped__"))
              return bo(t);
          }
          return new sn(t);
        }
        var fe = /* @__PURE__ */ function() {
          function t() {
          }
          return function(n) {
            if (!gt(n))
              return {};
            if (va)
              return va(n);
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
        }, u.prototype = hr.prototype, u.prototype.constructor = u, sn.prototype = fe(hr.prototype), sn.prototype.constructor = sn;
        function j(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function Pl() {
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
        function Rl() {
          var t = this.__wrapped__.value(), n = this.__dir__, e = H(t), i = n < 0, o = e ? t.length : 0, c = Gf(0, o, this.__views__), p = c.start, d = c.end, w = d - p, b = i ? d : p - 1, x = this.__iteratees__, P = x.length, L = 0, D = Et(w, this.__takeCount__);
          if (!e || !i && o == w && D == w)
            return Ka(t, this.__actions__);
          var W = [];
          t:
            for (; w-- && L < D; ) {
              b += n;
              for (var X = -1, U = t[b]; ++X < P; ) {
                var V = x[X], tt = V.iteratee, Qt = V.type, Dt = tt(U);
                if (Qt == ze)
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
        j.prototype = fe(hr.prototype), j.prototype.constructor = j;
        function Yn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Tl() {
          this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
        }
        function Fl(t) {
          var n = this.has(t) && delete this.__data__[t];
          return this.size -= n ? 1 : 0, n;
        }
        function Ll(t) {
          var n = this.__data__;
          if (Pe) {
            var e = n[t];
            return e === y ? r : e;
          }
          return st.call(n, t) ? n[t] : r;
        }
        function kl(t) {
          var n = this.__data__;
          return Pe ? n[t] !== r : st.call(n, t);
        }
        function Ol(t, n) {
          var e = this.__data__;
          return this.size += this.has(t) ? 0 : 1, e[t] = Pe && n === r ? y : n, this;
        }
        Yn.prototype.clear = Tl, Yn.prototype.delete = Fl, Yn.prototype.get = Ll, Yn.prototype.has = kl, Yn.prototype.set = Ol;
        function xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function Dl() {
          this.__data__ = [], this.size = 0;
        }
        function Nl(t) {
          var n = this.__data__, e = pr(n, t);
          if (e < 0)
            return !1;
          var i = n.length - 1;
          return e == i ? n.pop() : ar.call(n, e, 1), --this.size, !0;
        }
        function Bl(t) {
          var n = this.__data__, e = pr(n, t);
          return e < 0 ? r : n[e][1];
        }
        function Wl(t) {
          return pr(this.__data__, t) > -1;
        }
        function Ul(t, n) {
          var e = this.__data__, i = pr(e, t);
          return i < 0 ? (++this.size, e.push([t, n])) : e[i][1] = n, this;
        }
        xn.prototype.clear = Dl, xn.prototype.delete = Nl, xn.prototype.get = Bl, xn.prototype.has = Wl, xn.prototype.set = Ul;
        function An(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var i = t[n];
            this.set(i[0], i[1]);
          }
        }
        function $l() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Ae || xn)(),
            string: new Yn()
          };
        }
        function ql(t) {
          var n = xr(this, t).delete(t);
          return this.size -= n ? 1 : 0, n;
        }
        function Gl(t) {
          return xr(this, t).get(t);
        }
        function zl(t) {
          return xr(this, t).has(t);
        }
        function Hl(t, n) {
          var e = xr(this, t), i = e.size;
          return e.set(t, n), this.size += e.size == i ? 0 : 1, this;
        }
        An.prototype.clear = $l, An.prototype.delete = ql, An.prototype.get = Gl, An.prototype.has = zl, An.prototype.set = Hl;
        function Xn(t) {
          var n = -1, e = t == null ? 0 : t.length;
          for (this.__data__ = new An(); ++n < e; )
            this.add(t[n]);
        }
        function Kl(t) {
          return this.__data__.set(t, y), this;
        }
        function Zl(t) {
          return this.__data__.has(t);
        }
        Xn.prototype.add = Xn.prototype.push = Kl, Xn.prototype.has = Zl;
        function pn(t) {
          var n = this.__data__ = new xn(t);
          this.size = n.size;
        }
        function Jl() {
          this.__data__ = new xn(), this.size = 0;
        }
        function Yl(t) {
          var n = this.__data__, e = n.delete(t);
          return this.size = n.size, e;
        }
        function Xl(t) {
          return this.__data__.get(t);
        }
        function Ql(t) {
          return this.__data__.has(t);
        }
        function Vl(t, n) {
          var e = this.__data__;
          if (e instanceof xn) {
            var i = e.__data__;
            if (!Ae || i.length < l - 1)
              return i.push([t, n]), this.size = ++e.size, this;
            e = this.__data__ = new An(i);
          }
          return e.set(t, n), this.size = e.size, this;
        }
        pn.prototype.clear = Jl, pn.prototype.delete = Yl, pn.prototype.get = Xl, pn.prototype.has = Ql, pn.prototype.set = Vl;
        function Sa(t, n) {
          var e = H(t), i = !e && ne(t), o = !e && !i && Gn(t), c = !e && !i && !o && ge(t), p = e || i || o || c, d = p ? pi(t.length, ul) : [], w = d.length;
          for (var b in t)
            (n || st.call(t, b)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
            (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            c && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
            Rn(b, w))) && d.push(b);
          return d;
        }
        function ba(t) {
          var n = t.length;
          return n ? t[Ri(0, n - 1)] : r;
        }
        function jl(t, n) {
          return Ar($t(t), Qn(n, 0, t.length));
        }
        function tf(t) {
          return Ar($t(t));
        }
        function yi(t, n, e) {
          (e !== r && !dn(t[n], e) || e === r && !(n in t)) && In(t, n, e);
        }
        function Re(t, n, e) {
          var i = t[n];
          (!(st.call(t, n) && dn(i, e)) || e === r && !(n in t)) && In(t, n, e);
        }
        function pr(t, n) {
          for (var e = t.length; e--; )
            if (dn(t[e][0], n))
              return e;
          return -1;
        }
        function nf(t, n, e, i) {
          return Wn(t, function(o, c, p) {
            n(i, o, e(o), p);
          }), i;
        }
        function xa(t, n) {
          return t && yn(n, At(n), t);
        }
        function ef(t, n) {
          return t && yn(n, Gt(n), t);
        }
        function In(t, n, e) {
          n == "__proto__" && or ? or(t, n, {
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
          var p, d = n & m, w = n & R, b = n & F;
          if (e && (p = o ? e(t, i, o, c) : e(t)), p !== r)
            return p;
          if (!gt(t))
            return t;
          var x = H(t);
          if (x) {
            if (p = Hf(t), !d)
              return $t(t, p);
          } else {
            var P = Rt(t), L = P == Wt || P == vn;
            if (Gn(t))
              return Ya(t, d);
            if (P == Ct || P == nt || L && !o) {
              if (p = w || L ? {} : go(t), !d)
                return w ? kf(t, ef(p, t)) : Lf(t, xa(p, t));
            } else {
              if (!ut[P])
                return o ? t : {};
              p = Kf(t, P, d);
            }
          }
          c || (c = new pn());
          var D = c.get(t);
          if (D)
            return D;
          c.set(t, p), zo(t) ? t.forEach(function(U) {
            p.add(an(U, n, e, U, t, c));
          }) : qo(t) && t.forEach(function(U, V) {
            p.set(V, an(U, n, e, V, t, c));
          });
          var W = b ? w ? $i : Ui : w ? Gt : At, X = x ? r : W(t);
          return en(X || t, function(U, V) {
            X && (V = U, U = t[V]), Re(p, V, an(U, n, e, V, t, c));
          }), p;
        }
        function rf(t) {
          var n = At(t);
          return function(e) {
            return Aa(e, t, n);
          };
        }
        function Aa(t, n, e) {
          var i = e.length;
          if (t == null)
            return !i;
          for (t = at(t); i--; ) {
            var o = e[i], c = n[o], p = t[o];
            if (p === r && !(o in t) || !c(p))
              return !1;
          }
          return !0;
        }
        function Ia(t, n, e) {
          if (typeof t != "function")
            throw new rn(g);
          return Ne(function() {
            t.apply(r, e);
          }, n);
        }
        function Te(t, n, e, i) {
          var o = -1, c = Xe, p = !0, d = t.length, w = [], b = n.length;
          if (!d)
            return w;
          e && (n = dt(n, Jt(e))), i ? (c = oi, p = !1) : n.length >= l && (c = be, p = !1, n = new Xn(n));
          t:
            for (; ++o < d; ) {
              var x = t[o], P = e == null ? x : e(x);
              if (x = i || x !== 0 ? x : 0, p && P === P) {
                for (var L = b; L--; )
                  if (n[L] === P)
                    continue t;
                w.push(x);
              } else c(n, P, i) || w.push(x);
            }
          return w;
        }
        var Wn = to(wn), Pa = to(Si, !0);
        function sf(t, n) {
          var e = !0;
          return Wn(t, function(i, o, c) {
            return e = !!n(i, o, c), e;
          }), e;
        }
        function dr(t, n, e) {
          for (var i = -1, o = t.length; ++i < o; ) {
            var c = t[i], p = n(c);
            if (p != null && (d === r ? p === p && !Xt(p) : e(p, d)))
              var d = p, w = c;
          }
          return w;
        }
        function af(t, n, e, i) {
          var o = t.length;
          for (e = Y(e), e < 0 && (e = -e > o ? 0 : o + e), i = i === r || i > o ? o : Y(i), i < 0 && (i += o), i = e > i ? 0 : Ko(i); e < i; )
            t[e++] = n;
          return t;
        }
        function Ea(t, n) {
          var e = [];
          return Wn(t, function(i, o, c) {
            n(i, o, c) && e.push(i);
          }), e;
        }
        function Pt(t, n, e, i, o) {
          var c = -1, p = t.length;
          for (e || (e = Jf), o || (o = []); ++c < p; ) {
            var d = t[c];
            n > 0 && e(d) ? n > 1 ? Pt(d, n - 1, e, i, o) : Dn(o, d) : i || (o[o.length] = d);
          }
          return o;
        }
        var Ci = no(), Ra = no(!0);
        function wn(t, n) {
          return t && Ci(t, n, At);
        }
        function Si(t, n) {
          return t && Ra(t, n, At);
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
        function Ta(t, n, e) {
          var i = n(t);
          return H(t) ? i : Dn(i, e(t));
        }
        function kt(t) {
          return t == null ? t === r ? ku : kn : Jn && Jn in at(t) ? qf(t) : nh(t);
        }
        function bi(t, n) {
          return t > n;
        }
        function of(t, n) {
          return t != null && st.call(t, n);
        }
        function uf(t, n) {
          return t != null && n in at(t);
        }
        function cf(t, n, e) {
          return t >= Et(n, e) && t < xt(n, e);
        }
        function xi(t, n, e) {
          for (var i = e ? oi : Xe, o = t[0].length, c = t.length, p = c, d = C(c), w = 1 / 0, b = []; p--; ) {
            var x = t[p];
            p && n && (x = dt(x, Jt(n))), w = Et(x.length, w), d[p] = !e && (n || o >= 120 && x.length >= 120) ? new Xn(p && x) : r;
          }
          x = t[0];
          var P = -1, L = d[0];
          t:
            for (; ++P < o && b.length < w; ) {
              var D = x[P], W = n ? n(D) : D;
              if (D = e || D !== 0 ? D : 0, !(L ? be(L, W) : i(b, W, e))) {
                for (p = c; --p; ) {
                  var X = d[p];
                  if (!(X ? be(X, W) : i(t[p], W, e)))
                    continue t;
                }
                L && L.push(W), b.push(D);
              }
            }
          return b;
        }
        function lf(t, n, e, i) {
          return wn(t, function(o, c, p) {
            n(i, e(o), c, p);
          }), i;
        }
        function Fe(t, n, e) {
          n = $n(n, t), t = wo(t, n);
          var i = t == null ? t : t[Mn(un(n))];
          return i == null ? r : Zt(i, t, e);
        }
        function Fa(t) {
          return mt(t) && kt(t) == nt;
        }
        function ff(t) {
          return mt(t) && kt(t) == Se;
        }
        function hf(t) {
          return mt(t) && kt(t) == Mt;
        }
        function Le(t, n, e, i, o) {
          return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : pf(t, n, e, i, Le, o);
        }
        function pf(t, n, e, i, o, c) {
          var p = H(t), d = H(n), w = p ? ht : Rt(t), b = d ? ht : Rt(n);
          w = w == nt ? Ct : w, b = b == nt ? Ct : b;
          var x = w == Ct, P = b == Ct, L = w == b;
          if (L && Gn(t)) {
            if (!Gn(n))
              return !1;
            p = !0, x = !1;
          }
          if (L && !x)
            return c || (c = new pn()), p || ge(t) ? fo(t, n, e, i, o, c) : Uf(t, n, w, e, i, o, c);
          if (!(e & T)) {
            var D = x && st.call(t, "__wrapped__"), W = P && st.call(n, "__wrapped__");
            if (D || W) {
              var X = D ? t.value() : t, U = W ? n.value() : n;
              return c || (c = new pn()), o(X, U, e, i, c);
            }
          }
          return L ? (c || (c = new pn()), $f(t, n, e, i, o, c)) : !1;
        }
        function df(t) {
          return mt(t) && Rt(t) == vt;
        }
        function Ai(t, n, e, i) {
          var o = e.length, c = o, p = !i;
          if (t == null)
            return !c;
          for (t = at(t); o--; ) {
            var d = e[o];
            if (p && d[2] ? d[1] !== t[d[0]] : !(d[0] in t))
              return !1;
          }
          for (; ++o < c; ) {
            d = e[o];
            var w = d[0], b = t[w], x = d[1];
            if (p && d[2]) {
              if (b === r && !(w in t))
                return !1;
            } else {
              var P = new pn();
              if (i)
                var L = i(b, x, w, t, n, P);
              if (!(L === r ? Le(x, b, T | E, i, P) : L))
                return !1;
            }
          }
          return !0;
        }
        function La(t) {
          if (!gt(t) || Xf(t))
            return !1;
          var n = Tn(t) ? pl : rc;
          return n.test(te(t));
        }
        function gf(t) {
          return mt(t) && kt(t) == tn;
        }
        function _f(t) {
          return mt(t) && Rt(t) == pt;
        }
        function vf(t) {
          return mt(t) && Fr(t.length) && !!lt[kt(t)];
        }
        function ka(t) {
          return typeof t == "function" ? t : t == null ? zt : typeof t == "object" ? H(t) ? Na(t[0], t[1]) : Da(t) : ru(t);
        }
        function Ii(t) {
          if (!De(t))
            return wl(t);
          var n = [];
          for (var e in at(t))
            st.call(t, e) && e != "constructor" && n.push(e);
          return n;
        }
        function mf(t) {
          if (!gt(t))
            return th(t);
          var n = De(t), e = [];
          for (var i in t)
            i == "constructor" && (n || !st.call(t, i)) || e.push(i);
          return e;
        }
        function Pi(t, n) {
          return t < n;
        }
        function Oa(t, n) {
          var e = -1, i = qt(t) ? C(t.length) : [];
          return Wn(t, function(o, c, p) {
            i[++e] = n(o, c, p);
          }), i;
        }
        function Da(t) {
          var n = Gi(t);
          return n.length == 1 && n[0][2] ? vo(n[0][0], n[0][1]) : function(e) {
            return e === t || Ai(e, t, n);
          };
        }
        function Na(t, n) {
          return Hi(t) && _o(n) ? vo(Mn(t), n) : function(e) {
            var i = ns(e, t);
            return i === r && i === n ? es(e, t) : Le(n, i, T | E);
          };
        }
        function _r(t, n, e, i, o) {
          t !== n && Ci(n, function(c, p) {
            if (o || (o = new pn()), gt(c))
              wf(t, n, p, e, _r, i, o);
            else {
              var d = i ? i(Zi(t, p), c, p + "", t, n, o) : r;
              d === r && (d = c), yi(t, p, d);
            }
          }, Gt);
        }
        function wf(t, n, e, i, o, c, p) {
          var d = Zi(t, e), w = Zi(n, e), b = p.get(w);
          if (b) {
            yi(t, e, b);
            return;
          }
          var x = c ? c(d, w, e + "", t, n, p) : r, P = x === r;
          if (P) {
            var L = H(w), D = !L && Gn(w), W = !L && !D && ge(w);
            x = w, L || D || W ? H(d) ? x = d : wt(d) ? x = $t(d) : D ? (P = !1, x = Ya(w, !0)) : W ? (P = !1, x = Xa(w, !0)) : x = [] : Be(w) || ne(w) ? (x = d, ne(d) ? x = Zo(d) : (!gt(d) || Tn(d)) && (x = go(w))) : P = !1;
          }
          P && (p.set(w, x), o(x, w, i, c, p), p.delete(w)), yi(t, e, x);
        }
        function Ba(t, n) {
          var e = t.length;
          if (e)
            return n += n < 0 ? e : 0, Rn(n, e) ? t[n] : r;
        }
        function Wa(t, n, e) {
          n.length ? n = dt(n, function(c) {
            return H(c) ? function(p) {
              return Vn(p, c.length === 1 ? c[0] : c);
            } : c;
          }) : n = [zt];
          var i = -1;
          n = dt(n, Jt(B()));
          var o = Oa(t, function(c, p, d) {
            var w = dt(n, function(b) {
              return b(c);
            });
            return { criteria: w, index: ++i, value: c };
          });
          return Hc(o, function(c, p) {
            return Ff(c, p, e);
          });
        }
        function yf(t, n) {
          return Ua(t, n, function(e, i) {
            return es(t, i);
          });
        }
        function Ua(t, n, e) {
          for (var i = -1, o = n.length, c = {}; ++i < o; ) {
            var p = n[i], d = Vn(t, p);
            e(d, p) && ke(c, $n(p, t), d);
          }
          return c;
        }
        function Mf(t) {
          return function(n) {
            return Vn(n, t);
          };
        }
        function Ei(t, n, e, i) {
          var o = i ? zc : ie, c = -1, p = n.length, d = t;
          for (t === n && (n = $t(n)), e && (d = dt(t, Jt(e))); ++c < p; )
            for (var w = 0, b = n[c], x = e ? e(b) : b; (w = o(d, x, w, i)) > -1; )
              d !== t && ar.call(d, w, 1), ar.call(t, w, 1);
          return t;
        }
        function $a(t, n) {
          for (var e = t ? n.length : 0, i = e - 1; e--; ) {
            var o = n[e];
            if (e == i || o !== c) {
              var c = o;
              Rn(o) ? ar.call(t, o, 1) : Li(t, o);
            }
          }
          return t;
        }
        function Ri(t, n) {
          return t + cr(Ma() * (n - t + 1));
        }
        function Cf(t, n, e, i) {
          for (var o = -1, c = xt(ur((n - t) / (e || 1)), 0), p = C(c); c--; )
            p[i ? c : ++o] = t, t += e;
          return p;
        }
        function Ti(t, n) {
          var e = "";
          if (!t || n < 1 || n > _n)
            return e;
          do
            n % 2 && (e += t), n = cr(n / 2), n && (t += t);
          while (n);
          return e;
        }
        function Q(t, n) {
          return Ji(mo(t, n, zt), t + "");
        }
        function Sf(t) {
          return ba(_e(t));
        }
        function bf(t, n) {
          var e = _e(t);
          return Ar(e, Qn(n, 0, e.length));
        }
        function ke(t, n, e, i) {
          if (!gt(t))
            return t;
          n = $n(n, t);
          for (var o = -1, c = n.length, p = c - 1, d = t; d != null && ++o < c; ) {
            var w = Mn(n[o]), b = e;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return t;
            if (o != p) {
              var x = d[w];
              b = i ? i(x, w, d) : r, b === r && (b = gt(x) ? x : Rn(n[o + 1]) ? [] : {});
            }
            Re(d, w, b), d = d[w];
          }
          return t;
        }
        var qa = lr ? function(t, n) {
          return lr.set(t, n), t;
        } : zt, xf = or ? function(t, n) {
          return or(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: is(n),
            writable: !0
          });
        } : zt;
        function Af(t) {
          return Ar(_e(t));
        }
        function on(t, n, e) {
          var i = -1, o = t.length;
          n < 0 && (n = -n > o ? 0 : o + n), e = e > o ? o : e, e < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
          for (var c = C(o); ++i < o; )
            c[i] = t[i + n];
          return c;
        }
        function If(t, n) {
          var e;
          return Wn(t, function(i, o, c) {
            return e = n(i, o, c), !e;
          }), !!e;
        }
        function vr(t, n, e) {
          var i = 0, o = t == null ? i : t.length;
          if (typeof n == "number" && n === n && o <= G) {
            for (; i < o; ) {
              var c = i + o >>> 1, p = t[c];
              p !== null && !Xt(p) && (e ? p <= n : p < n) ? i = c + 1 : o = c;
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
          for (var p = n !== n, d = n === null, w = Xt(n), b = n === r; o < c; ) {
            var x = cr((o + c) / 2), P = e(t[x]), L = P !== r, D = P === null, W = P === P, X = Xt(P);
            if (p)
              var U = i || W;
            else b ? U = W && (i || L) : d ? U = W && L && (i || !D) : w ? U = W && L && !D && (i || !X) : D || X ? U = !1 : U = i ? P <= n : P < n;
            U ? o = x + 1 : c = x;
          }
          return Et(c, $);
        }
        function Ga(t, n) {
          for (var e = -1, i = t.length, o = 0, c = []; ++e < i; ) {
            var p = t[e], d = n ? n(p) : p;
            if (!e || !dn(d, w)) {
              var w = d;
              c[o++] = p === 0 ? 0 : p;
            }
          }
          return c;
        }
        function za(t) {
          return typeof t == "number" ? t : Xt(t) ? bn : +t;
        }
        function Yt(t) {
          if (typeof t == "string")
            return t;
          if (H(t))
            return dt(t, Yt) + "";
          if (Xt(t))
            return Ca ? Ca.call(t) : "";
          var n = t + "";
          return n == "0" && 1 / t == -Sn ? "-0" : n;
        }
        function Un(t, n, e) {
          var i = -1, o = Xe, c = t.length, p = !0, d = [], w = d;
          if (e)
            p = !1, o = oi;
          else if (c >= l) {
            var b = n ? null : Bf(t);
            if (b)
              return Ve(b);
            p = !1, o = be, w = new Xn();
          } else
            w = n ? [] : d;
          t:
            for (; ++i < c; ) {
              var x = t[i], P = n ? n(x) : x;
              if (x = e || x !== 0 ? x : 0, p && P === P) {
                for (var L = w.length; L--; )
                  if (w[L] === P)
                    continue t;
                n && w.push(P), d.push(x);
              } else o(w, P, e) || (w !== d && w.push(P), d.push(x));
            }
          return d;
        }
        function Li(t, n) {
          return n = $n(n, t), t = wo(t, n), t == null || delete t[Mn(un(n))];
        }
        function Ha(t, n, e, i) {
          return ke(t, n, e(Vn(t, n)), i);
        }
        function mr(t, n, e, i) {
          for (var o = t.length, c = i ? o : -1; (i ? c-- : ++c < o) && n(t[c], c, t); )
            ;
          return e ? on(t, i ? 0 : c, i ? c + 1 : o) : on(t, i ? c + 1 : 0, i ? o : c);
        }
        function Ka(t, n) {
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
            for (var p = t[o], d = -1; ++d < i; )
              d != o && (c[o] = Te(c[o] || p, t[d], n, e));
          return Un(Pt(c, 1), n, e);
        }
        function Za(t, n, e) {
          for (var i = -1, o = t.length, c = n.length, p = {}; ++i < o; ) {
            var d = i < c ? n[i] : r;
            e(p, t[i], d);
          }
          return p;
        }
        function Oi(t) {
          return wt(t) ? t : [];
        }
        function Di(t) {
          return typeof t == "function" ? t : zt;
        }
        function $n(t, n) {
          return H(t) ? t : Hi(t, n) ? [t] : So(rt(t));
        }
        var Pf = Q;
        function qn(t, n, e) {
          var i = t.length;
          return e = e === r ? i : e, !n && e >= i ? t : on(t, n, e);
        }
        var Ja = dl || function(t) {
          return It.clearTimeout(t);
        };
        function Ya(t, n) {
          if (n)
            return t.slice();
          var e = t.length, i = _a ? _a(e) : new t.constructor(e);
          return t.copy(i), i;
        }
        function Ni(t) {
          var n = new t.constructor(t.byteLength);
          return new ir(n).set(new ir(t)), n;
        }
        function Ef(t, n) {
          var e = n ? Ni(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.byteLength);
        }
        function Rf(t) {
          var n = new t.constructor(t.source, Fs.exec(t));
          return n.lastIndex = t.lastIndex, n;
        }
        function Tf(t) {
          return Ee ? at(Ee.call(t)) : {};
        }
        function Xa(t, n) {
          var e = n ? Ni(t.buffer) : t.buffer;
          return new t.constructor(e, t.byteOffset, t.length);
        }
        function Qa(t, n) {
          if (t !== n) {
            var e = t !== r, i = t === null, o = t === t, c = Xt(t), p = n !== r, d = n === null, w = n === n, b = Xt(n);
            if (!d && !b && !c && t > n || c && p && w && !d && !b || i && p && w || !e && w || !o)
              return 1;
            if (!i && !c && !b && t < n || b && e && o && !i && !c || d && e && o || !p && o || !w)
              return -1;
          }
          return 0;
        }
        function Ff(t, n, e) {
          for (var i = -1, o = t.criteria, c = n.criteria, p = o.length, d = e.length; ++i < p; ) {
            var w = Qa(o[i], c[i]);
            if (w) {
              if (i >= d)
                return w;
              var b = e[i];
              return w * (b == "desc" ? -1 : 1);
            }
          }
          return t.index - n.index;
        }
        function Va(t, n, e, i) {
          for (var o = -1, c = t.length, p = e.length, d = -1, w = n.length, b = xt(c - p, 0), x = C(w + b), P = !i; ++d < w; )
            x[d] = n[d];
          for (; ++o < p; )
            (P || o < c) && (x[e[o]] = t[o]);
          for (; b--; )
            x[d++] = t[o++];
          return x;
        }
        function ja(t, n, e, i) {
          for (var o = -1, c = t.length, p = -1, d = e.length, w = -1, b = n.length, x = xt(c - d, 0), P = C(x + b), L = !i; ++o < x; )
            P[o] = t[o];
          for (var D = o; ++w < b; )
            P[D + w] = n[w];
          for (; ++p < d; )
            (L || o < c) && (P[D + e[p]] = t[o++]);
          return P;
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
          for (var c = -1, p = n.length; ++c < p; ) {
            var d = n[c], w = i ? i(e[d], t[d], d, e, t) : r;
            w === r && (w = t[d]), o ? In(e, d, w) : Re(e, d, w);
          }
          return e;
        }
        function Lf(t, n) {
          return yn(t, zi(t), n);
        }
        function kf(t, n) {
          return yn(t, ho(t), n);
        }
        function wr(t, n) {
          return function(e, i) {
            var o = H(e) ? Bc : nf, c = n ? n() : {};
            return o(e, t, B(i, 2), c);
          };
        }
        function he(t) {
          return Q(function(n, e) {
            var i = -1, o = e.length, c = o > 1 ? e[o - 1] : r, p = o > 2 ? e[2] : r;
            for (c = t.length > 3 && typeof c == "function" ? (o--, c) : r, p && Ot(e[0], e[1], p) && (c = o < 3 ? r : c, o = 1), n = at(n); ++i < o; ) {
              var d = e[i];
              d && t(n, d, i, c);
            }
            return n;
          });
        }
        function to(t, n) {
          return function(e, i) {
            if (e == null)
              return e;
            if (!qt(e))
              return t(e, i);
            for (var o = e.length, c = n ? o : -1, p = at(e); (n ? c-- : ++c < o) && i(p[c], c, p) !== !1; )
              ;
            return e;
          };
        }
        function no(t) {
          return function(n, e, i) {
            for (var o = -1, c = at(n), p = i(n), d = p.length; d--; ) {
              var w = p[t ? d : ++o];
              if (e(c[w], w, c) === !1)
                break;
            }
            return n;
          };
        }
        function Of(t, n, e) {
          var i = n & N, o = Oe(t);
          function c() {
            var p = this && this !== It && this instanceof c ? o : t;
            return p.apply(i ? e : this, arguments);
          }
          return c;
        }
        function eo(t) {
          return function(n) {
            n = rt(n);
            var e = se(n) ? hn(n) : r, i = e ? e[0] : n.charAt(0), o = e ? qn(e, 1).join("") : n.slice(1);
            return i[t]() + o;
          };
        }
        function pe(t) {
          return function(n) {
            return ui(nu(tu(n).replace(bc, "")), t, "");
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
            return gt(i) ? i : e;
          };
        }
        function Df(t, n, e) {
          var i = Oe(t);
          function o() {
            for (var c = arguments.length, p = C(c), d = c, w = de(o); d--; )
              p[d] = arguments[d];
            var b = c < 3 && p[0] !== w && p[c - 1] !== w ? [] : Nn(p, w);
            if (c -= b.length, c < e)
              return oo(
                t,
                n,
                yr,
                o.placeholder,
                r,
                p,
                b,
                r,
                r,
                e - c
              );
            var x = this && this !== It && this instanceof o ? i : t;
            return Zt(x, this, p);
          }
          return o;
        }
        function ro(t) {
          return function(n, e, i) {
            var o = at(n);
            if (!qt(n)) {
              var c = B(e, 3);
              n = At(n), e = function(d) {
                return c(o[d], d, o);
              };
            }
            var p = t(n, e, i);
            return p > -1 ? o[c ? n[p] : p] : r;
          };
        }
        function io(t) {
          return En(function(n) {
            var e = n.length, i = e, o = sn.prototype.thru;
            for (t && n.reverse(); i--; ) {
              var c = n[i];
              if (typeof c != "function")
                throw new rn(g);
              if (o && !p && br(c) == "wrapper")
                var p = new sn([], !0);
            }
            for (i = p ? i : e; ++i < e; ) {
              c = n[i];
              var d = br(c), w = d == "wrapper" ? qi(c) : r;
              w && Ki(w[0]) && w[1] == (St | J | _t | jt) && !w[4].length && w[9] == 1 ? p = p[br(w[0])].apply(p, w[3]) : p = c.length == 1 && Ki(c) ? p[d]() : p.thru(c);
            }
            return function() {
              var b = arguments, x = b[0];
              if (p && b.length == 1 && H(x))
                return p.plant(x).value();
              for (var P = 0, L = e ? n[P].apply(this, b) : x; ++P < e; )
                L = n[P].call(this, L);
              return L;
            };
          });
        }
        function yr(t, n, e, i, o, c, p, d, w, b) {
          var x = n & St, P = n & N, L = n & q, D = n & (J | it), W = n & Ht, X = L ? r : Oe(t);
          function U() {
            for (var V = arguments.length, tt = C(V), Qt = V; Qt--; )
              tt[Qt] = arguments[Qt];
            if (D)
              var Dt = de(U), Vt = Zc(tt, Dt);
            if (i && (tt = Va(tt, i, o, D)), c && (tt = ja(tt, c, p, D)), V -= Vt, D && V < b) {
              var yt = Nn(tt, Dt);
              return oo(
                t,
                n,
                yr,
                U.placeholder,
                e,
                tt,
                yt,
                d,
                w,
                b - V
              );
            }
            var gn = P ? e : this, Ln = L ? gn[t] : t;
            return V = tt.length, d ? tt = eh(tt, d) : W && V > 1 && tt.reverse(), x && w < V && (tt.length = w), this && this !== It && this instanceof U && (Ln = X || Oe(Ln)), Ln.apply(gn, tt);
          }
          return U;
        }
        function so(t, n) {
          return function(e, i) {
            return lf(e, t, n(i), {});
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
              typeof e == "string" || typeof i == "string" ? (e = Yt(e), i = Yt(i)) : (e = za(e), i = za(i)), o = t(e, i);
            }
            return o;
          };
        }
        function Bi(t) {
          return En(function(n) {
            return n = dt(n, Jt(B())), Q(function(e) {
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
            return e ? Ti(n, t) : n;
          var i = Ti(n, ur(t / ae(n)));
          return se(n) ? qn(hn(i), 0, t).join("") : i.slice(0, t);
        }
        function Nf(t, n, e, i) {
          var o = n & N, c = Oe(t);
          function p() {
            for (var d = -1, w = arguments.length, b = -1, x = i.length, P = C(x + w), L = this && this !== It && this instanceof p ? c : t; ++b < x; )
              P[b] = i[b];
            for (; w--; )
              P[b++] = arguments[++d];
            return Zt(L, o ? e : this, P);
          }
          return p;
        }
        function ao(t) {
          return function(n, e, i) {
            return i && typeof i != "number" && Ot(n, e, i) && (e = i = r), n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), i = i === r ? n < e ? 1 : -1 : Fn(i), Cf(n, e, i, t);
          };
        }
        function Sr(t) {
          return function(n, e) {
            return typeof n == "string" && typeof e == "string" || (n = cn(n), e = cn(e)), t(n, e);
          };
        }
        function oo(t, n, e, i, o, c, p, d, w, b) {
          var x = n & J, P = x ? p : r, L = x ? r : p, D = x ? c : r, W = x ? r : c;
          n |= x ? _t : Bt, n &= ~(x ? Bt : _t), n & Z || (n &= ~(N | q));
          var X = [
            t,
            n,
            o,
            D,
            P,
            W,
            L,
            d,
            w,
            b
          ], U = e.apply(r, X);
          return Ki(t) && yo(U, X), U.placeholder = i, Mo(U, t, n);
        }
        function Wi(t) {
          var n = bt[t];
          return function(e, i) {
            if (e = cn(e), i = i == null ? 0 : Et(Y(i), 292), i && ya(e)) {
              var o = (rt(e) + "e").split("e"), c = n(o[0] + "e" + (+o[1] + i));
              return o = (rt(c) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
            }
            return n(e);
          };
        }
        var Bf = ce && 1 / Ve(new ce([, -0]))[1] == Sn ? function(t) {
          return new ce(t);
        } : os;
        function uo(t) {
          return function(n) {
            var e = Rt(n);
            return e == vt ? gi(n) : e == pt ? tl(n) : Kc(n, t(n));
          };
        }
        function Pn(t, n, e, i, o, c, p, d) {
          var w = n & q;
          if (!w && typeof t != "function")
            throw new rn(g);
          var b = i ? i.length : 0;
          if (b || (n &= ~(_t | Bt), i = o = r), p = p === r ? p : xt(Y(p), 0), d = d === r ? d : Y(d), b -= o ? o.length : 0, n & Bt) {
            var x = i, P = o;
            i = o = r;
          }
          var L = w ? r : qi(t), D = [
            t,
            n,
            e,
            i,
            o,
            x,
            P,
            c,
            p,
            d
          ];
          if (L && jf(D, L), t = D[0], n = D[1], e = D[2], i = D[3], o = D[4], d = D[9] = D[9] === r ? w ? 0 : t.length : xt(D[9] - b, 0), !d && n & (J | it) && (n &= ~(J | it)), !n || n == N)
            var W = Of(t, n, e);
          else n == J || n == it ? W = Df(t, n, d) : (n == _t || n == (N | _t)) && !o.length ? W = Nf(t, n, e, i) : W = yr.apply(r, D);
          var X = L ? qa : yo;
          return Mo(X(W, D), t, n);
        }
        function co(t, n, e, i) {
          return t === r || dn(t, ue[e]) && !st.call(i, e) ? n : t;
        }
        function lo(t, n, e, i, o, c) {
          return gt(t) && gt(n) && (c.set(n, t), _r(t, n, r, lo, c), c.delete(n)), t;
        }
        function Wf(t) {
          return Be(t) ? r : t;
        }
        function fo(t, n, e, i, o, c) {
          var p = e & T, d = t.length, w = n.length;
          if (d != w && !(p && w > d))
            return !1;
          var b = c.get(t), x = c.get(n);
          if (b && x)
            return b == n && x == t;
          var P = -1, L = !0, D = e & E ? new Xn() : r;
          for (c.set(t, n), c.set(n, t); ++P < d; ) {
            var W = t[P], X = n[P];
            if (i)
              var U = p ? i(X, W, P, n, t, c) : i(W, X, P, t, n, c);
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
        function Uf(t, n, e, i, o, c, p) {
          switch (e) {
            case ee:
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              t = t.buffer, n = n.buffer;
            case Se:
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
              var d = gi;
            case pt:
              var w = i & T;
              if (d || (d = Ve), t.size != n.size && !w)
                return !1;
              var b = p.get(t);
              if (b)
                return b == n;
              i |= E, p.set(t, n);
              var x = fo(d(t), d(n), i, o, c, p);
              return p.delete(t), x;
            case Ke:
              if (Ee)
                return Ee.call(t) == Ee.call(n);
          }
          return !1;
        }
        function $f(t, n, e, i, o, c) {
          var p = e & T, d = Ui(t), w = d.length, b = Ui(n), x = b.length;
          if (w != x && !p)
            return !1;
          for (var P = w; P--; ) {
            var L = d[P];
            if (!(p ? L in n : st.call(n, L)))
              return !1;
          }
          var D = c.get(t), W = c.get(n);
          if (D && W)
            return D == n && W == t;
          var X = !0;
          c.set(t, n), c.set(n, t);
          for (var U = p; ++P < w; ) {
            L = d[P];
            var V = t[L], tt = n[L];
            if (i)
              var Qt = p ? i(tt, V, L, n, t, c) : i(V, tt, L, t, n, c);
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
        function En(t) {
          return Ji(mo(t, r, Io), t + "");
        }
        function Ui(t) {
          return Ta(t, At, zi);
        }
        function $i(t) {
          return Ta(t, Gt, ho);
        }
        var qi = lr ? function(t) {
          return lr.get(t);
        } : os;
        function br(t) {
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
        function B() {
          var t = u.iteratee || ss;
          return t = t === ss ? ka : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function xr(t, n) {
          var e = t.__data__;
          return Yf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
        }
        function Gi(t) {
          for (var n = At(t), e = n.length; e--; ) {
            var i = n[e], o = t[i];
            n[e] = [i, o, _o(o)];
          }
          return n;
        }
        function jn(t, n) {
          var e = Qc(t, n);
          return La(e) ? e : r;
        }
        function qf(t) {
          var n = st.call(t, Jn), e = t[Jn];
          try {
            t[Jn] = r;
            var i = !0;
          } catch {
          }
          var o = er.call(t);
          return i && (n ? t[Jn] = e : delete t[Jn]), o;
        }
        var zi = vi ? function(t) {
          return t == null ? [] : (t = at(t), On(vi(t), function(n) {
            return ma.call(t, n);
          }));
        } : us, ho = vi ? function(t) {
          for (var n = []; t; )
            Dn(n, zi(t)), t = sr(t);
          return n;
        } : us, Rt = kt;
        (mi && Rt(new mi(new ArrayBuffer(1))) != ee || Ae && Rt(new Ae()) != vt || wi && Rt(wi.resolve()) != Ut || ce && Rt(new ce()) != pt || Ie && Rt(new Ie()) != Ce) && (Rt = function(t) {
          var n = kt(t), e = n == Ct ? t.constructor : r, i = e ? te(e) : "";
          if (i)
            switch (i) {
              case Sl:
                return ee;
              case bl:
                return vt;
              case xl:
                return Ut;
              case Al:
                return pt;
              case Il:
                return Ce;
            }
          return n;
        });
        function Gf(t, n, e) {
          for (var i = -1, o = e.length; ++i < o; ) {
            var c = e[i], p = c.size;
            switch (c.type) {
              case "drop":
                t += p;
                break;
              case "dropRight":
                n -= p;
                break;
              case "take":
                n = Et(n, t + p);
                break;
              case "takeRight":
                t = xt(t, n - p);
                break;
            }
          }
          return { start: t, end: n };
        }
        function zf(t) {
          var n = t.match(Yu);
          return n ? n[1].split(Xu) : [];
        }
        function po(t, n, e) {
          n = $n(n, t);
          for (var i = -1, o = n.length, c = !1; ++i < o; ) {
            var p = Mn(n[i]);
            if (!(c = t != null && e(t, p)))
              break;
            t = t[p];
          }
          return c || ++i != o ? c : (o = t == null ? 0 : t.length, !!o && Fr(o) && Rn(p, o) && (H(t) || ne(t)));
        }
        function Hf(t) {
          var n = t.length, e = new t.constructor(n);
          return n && typeof t[0] == "string" && st.call(t, "index") && (e.index = t.index, e.input = t.input), e;
        }
        function go(t) {
          return typeof t.constructor == "function" && !De(t) ? fe(sr(t)) : {};
        }
        function Kf(t, n, e) {
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
              return Xa(t, e);
            case vt:
              return new i();
            case Lt:
            case mn:
              return new i(t);
            case tn:
              return Rf(t);
            case pt:
              return new i();
            case Ke:
              return Tf(t);
          }
        }
        function Zf(t, n) {
          var e = n.length;
          if (!e)
            return t;
          var i = e - 1;
          return n[i] = (e > 1 ? "& " : "") + n[i], n = n.join(e > 2 ? ", " : " "), t.replace(Ju, `{
/* [wrapped with ` + n + `] */
`);
        }
        function Jf(t) {
          return H(t) || ne(t) || !!(wa && t && t[wa]);
        }
        function Rn(t, n) {
          var e = typeof t;
          return n = n ?? _n, !!n && (e == "number" || e != "symbol" && sc.test(t)) && t > -1 && t % 1 == 0 && t < n;
        }
        function Ot(t, n, e) {
          if (!gt(e))
            return !1;
          var i = typeof n;
          return (i == "number" ? qt(e) && Rn(n, e.length) : i == "string" && n in e) ? dn(e[n], t) : !1;
        }
        function Hi(t, n) {
          if (H(t))
            return !1;
          var e = typeof t;
          return e == "number" || e == "symbol" || e == "boolean" || t == null || Xt(t) ? !0 : zu.test(t) || !Gu.test(t) || n != null && t in at(n);
        }
        function Yf(t) {
          var n = typeof t;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
        }
        function Ki(t) {
          var n = br(t), e = u[n];
          if (typeof e != "function" || !(n in j.prototype))
            return !1;
          if (t === e)
            return !0;
          var i = qi(e);
          return !!i && t === i[0];
        }
        function Xf(t) {
          return !!ga && ga in t;
        }
        var Qf = tr ? Tn : cs;
        function De(t) {
          var n = t && t.constructor, e = typeof n == "function" && n.prototype || ue;
          return t === e;
        }
        function _o(t) {
          return t === t && !gt(t);
        }
        function vo(t, n) {
          return function(e) {
            return e == null ? !1 : e[t] === n && (n !== r || t in at(e));
          };
        }
        function Vf(t) {
          var n = Rr(t, function(i) {
            return e.size === M && e.clear(), i;
          }), e = n.cache;
          return n;
        }
        function jf(t, n) {
          var e = t[1], i = n[1], o = e | i, c = o < (N | q | St), p = i == St && e == J || i == St && e == jt && t[7].length <= n[8] || i == (St | jt) && n[7].length <= n[8] && e == J;
          if (!(c || p))
            return t;
          i & N && (t[2] = n[2], o |= e & N ? 0 : Z);
          var d = n[3];
          if (d) {
            var w = t[3];
            t[3] = w ? Va(w, d, n[4]) : d, t[4] = w ? Nn(t[3], I) : n[4];
          }
          return d = n[5], d && (w = t[5], t[5] = w ? ja(w, d, n[6]) : d, t[6] = w ? Nn(t[5], I) : n[6]), d = n[7], d && (t[7] = d), i & St && (t[8] = t[8] == null ? n[8] : Et(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = o, t;
        }
        function th(t) {
          var n = [];
          if (t != null)
            for (var e in at(t))
              n.push(e);
          return n;
        }
        function nh(t) {
          return er.call(t);
        }
        function mo(t, n, e) {
          return n = xt(n === r ? t.length - 1 : n, 0), function() {
            for (var i = arguments, o = -1, c = xt(i.length - n, 0), p = C(c); ++o < c; )
              p[o] = i[n + o];
            o = -1;
            for (var d = C(n + 1); ++o < n; )
              d[o] = i[o];
            return d[n] = e(p), Zt(t, this, d);
          };
        }
        function wo(t, n) {
          return n.length < 2 ? t : Vn(t, on(n, 0, -1));
        }
        function eh(t, n) {
          for (var e = t.length, i = Et(n.length, e), o = $t(t); i--; ) {
            var c = n[i];
            t[i] = Rn(c, e) ? o[c] : r;
          }
          return t;
        }
        function Zi(t, n) {
          if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
            return t[n];
        }
        var yo = Co(qa), Ne = _l || function(t, n) {
          return It.setTimeout(t, n);
        }, Ji = Co(xf);
        function Mo(t, n, e) {
          var i = n + "";
          return Ji(t, Zf(i, rh(zf(i), e)));
        }
        function Co(t) {
          var n = 0, e = 0;
          return function() {
            var i = yl(), o = $r - (i - e);
            if (e = i, o > 0) {
              if (++n >= Ge)
                return arguments[0];
            } else
              n = 0;
            return t.apply(r, arguments);
          };
        }
        function Ar(t, n) {
          var e = -1, i = t.length, o = i - 1;
          for (n = n === r ? i : n; ++e < n; ) {
            var c = Ri(e, o), p = t[c];
            t[c] = t[e], t[e] = p;
          }
          return t.length = n, t;
        }
        var So = Vf(function(t) {
          var n = [];
          return t.charCodeAt(0) === 46 && n.push(""), t.replace(Hu, function(e, i, o, c) {
            n.push(o ? c.replace(ju, "$1") : i || e);
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
        function rh(t, n) {
          return en(ft, function(e) {
            var i = "_." + e[0];
            n & e[1] && !Xe(t, i) && t.push(i);
          }), t.sort();
        }
        function bo(t) {
          if (t instanceof j)
            return t.clone();
          var n = new sn(t.__wrapped__, t.__chain__);
          return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
        }
        function ih(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = xt(Y(n), 0);
          var i = t == null ? 0 : t.length;
          if (!i || n < 1)
            return [];
          for (var o = 0, c = 0, p = C(ur(i / n)); o < i; )
            p[c++] = on(t, o, o += n);
          return p;
        }
        function sh(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = 0, o = []; ++n < e; ) {
            var c = t[n];
            c && (o[i++] = c);
          }
          return o;
        }
        function ah() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var n = C(t - 1), e = arguments[0], i = t; i--; )
            n[i - 1] = arguments[i];
          return Dn(H(e) ? $t(e) : [e], Pt(n, 1));
        }
        var oh = Q(function(t, n) {
          return wt(t) ? Te(t, Pt(n, 1, wt, !0)) : [];
        }), uh = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Pt(n, 1, wt, !0), B(e, 2)) : [];
        }), ch = Q(function(t, n) {
          var e = un(n);
          return wt(e) && (e = r), wt(t) ? Te(t, Pt(n, 1, wt, !0), r, e) : [];
        });
        function lh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), on(t, n < 0 ? 0 : n, i)) : [];
        }
        function fh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function hh(t, n) {
          return t && t.length ? mr(t, B(n, 3), !0, !0) : [];
        }
        function ph(t, n) {
          return t && t.length ? mr(t, B(n, 3), !0) : [];
        }
        function dh(t, n, e, i) {
          var o = t == null ? 0 : t.length;
          return o ? (e && typeof e != "number" && Ot(t, n, e) && (e = 0, i = o), af(t, n, e, i)) : [];
        }
        function xo(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = xt(i + o, 0)), Qe(t, B(n, 3), o);
        }
        function Ao(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i - 1;
          return e !== r && (o = Y(e), o = e < 0 ? xt(i + o, 0) : Et(o, i - 1)), Qe(t, B(n, 3), o, !0);
        }
        function Io(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, 1) : [];
        }
        function gh(t) {
          var n = t == null ? 0 : t.length;
          return n ? Pt(t, Sn) : [];
        }
        function _h(t, n) {
          var e = t == null ? 0 : t.length;
          return e ? (n = n === r ? 1 : Y(n), Pt(t, n)) : [];
        }
        function vh(t) {
          for (var n = -1, e = t == null ? 0 : t.length, i = {}; ++n < e; ) {
            var o = t[n];
            i[o[0]] = o[1];
          }
          return i;
        }
        function Po(t) {
          return t && t.length ? t[0] : r;
        }
        function mh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = e == null ? 0 : Y(e);
          return o < 0 && (o = xt(i + o, 0)), ie(t, n, o);
        }
        function wh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 0, -1) : [];
        }
        var yh = Q(function(t) {
          var n = dt(t, Oi);
          return n.length && n[0] === t[0] ? xi(n) : [];
        }), Mh = Q(function(t) {
          var n = un(t), e = dt(t, Oi);
          return n === un(e) ? n = r : e.pop(), e.length && e[0] === t[0] ? xi(e, B(n, 2)) : [];
        }), Ch = Q(function(t) {
          var n = un(t), e = dt(t, Oi);
          return n = typeof n == "function" ? n : r, n && e.pop(), e.length && e[0] === t[0] ? xi(e, r, n) : [];
        });
        function Sh(t, n) {
          return t == null ? "" : ml.call(t, n);
        }
        function un(t) {
          var n = t == null ? 0 : t.length;
          return n ? t[n - 1] : r;
        }
        function bh(t, n, e) {
          var i = t == null ? 0 : t.length;
          if (!i)
            return -1;
          var o = i;
          return e !== r && (o = Y(e), o = o < 0 ? xt(i + o, 0) : Et(o, i - 1)), n === n ? el(t, n, o) : Qe(t, oa, o, !0);
        }
        function xh(t, n) {
          return t && t.length ? Ba(t, Y(n)) : r;
        }
        var Ah = Q(Eo);
        function Eo(t, n) {
          return t && t.length && n && n.length ? Ei(t, n) : t;
        }
        function Ih(t, n, e) {
          return t && t.length && n && n.length ? Ei(t, n, B(e, 2)) : t;
        }
        function Ph(t, n, e) {
          return t && t.length && n && n.length ? Ei(t, n, r, e) : t;
        }
        var Eh = En(function(t, n) {
          var e = t == null ? 0 : t.length, i = Mi(t, n);
          return $a(t, dt(n, function(o) {
            return Rn(o, e) ? +o : o;
          }).sort(Qa)), i;
        });
        function Rh(t, n) {
          var e = [];
          if (!(t && t.length))
            return e;
          var i = -1, o = [], c = t.length;
          for (n = B(n, 3); ++i < c; ) {
            var p = t[i];
            n(p, i, t) && (e.push(p), o.push(i));
          }
          return $a(t, o), e;
        }
        function Yi(t) {
          return t == null ? t : Cl.call(t);
        }
        function Th(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (e && typeof e != "number" && Ot(t, n, e) ? (n = 0, e = i) : (n = n == null ? 0 : Y(n), e = e === r ? i : Y(e)), on(t, n, e)) : [];
        }
        function Fh(t, n) {
          return vr(t, n);
        }
        function Lh(t, n, e) {
          return Fi(t, n, B(e, 2));
        }
        function kh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = vr(t, n);
            if (i < e && dn(t[i], n))
              return i;
          }
          return -1;
        }
        function Oh(t, n) {
          return vr(t, n, !0);
        }
        function Dh(t, n, e) {
          return Fi(t, n, B(e, 2), !0);
        }
        function Nh(t, n) {
          var e = t == null ? 0 : t.length;
          if (e) {
            var i = vr(t, n, !0) - 1;
            if (dn(t[i], n))
              return i;
          }
          return -1;
        }
        function Bh(t) {
          return t && t.length ? Ga(t) : [];
        }
        function Wh(t, n) {
          return t && t.length ? Ga(t, B(n, 2)) : [];
        }
        function Uh(t) {
          var n = t == null ? 0 : t.length;
          return n ? on(t, 1, n) : [];
        }
        function $h(t, n, e) {
          return t && t.length ? (n = e || n === r ? 1 : Y(n), on(t, 0, n < 0 ? 0 : n)) : [];
        }
        function qh(t, n, e) {
          var i = t == null ? 0 : t.length;
          return i ? (n = e || n === r ? 1 : Y(n), n = i - n, on(t, n < 0 ? 0 : n, i)) : [];
        }
        function Gh(t, n) {
          return t && t.length ? mr(t, B(n, 3), !1, !0) : [];
        }
        function zh(t, n) {
          return t && t.length ? mr(t, B(n, 3)) : [];
        }
        var Hh = Q(function(t) {
          return Un(Pt(t, 1, wt, !0));
        }), Kh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), Un(Pt(t, 1, wt, !0), B(n, 2));
        }), Zh = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, Un(Pt(t, 1, wt, !0), r, n);
        });
        function Jh(t) {
          return t && t.length ? Un(t) : [];
        }
        function Yh(t, n) {
          return t && t.length ? Un(t, B(n, 2)) : [];
        }
        function Xh(t, n) {
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
            return dt(t, li(e));
          });
        }
        function Ro(t, n) {
          if (!(t && t.length))
            return [];
          var e = Xi(t);
          return n == null ? e : dt(e, function(i) {
            return Zt(n, r, i);
          });
        }
        var Qh = Q(function(t, n) {
          return wt(t) ? Te(t, n) : [];
        }), Vh = Q(function(t) {
          return ki(On(t, wt));
        }), jh = Q(function(t) {
          var n = un(t);
          return wt(n) && (n = r), ki(On(t, wt), B(n, 2));
        }), tp = Q(function(t) {
          var n = un(t);
          return n = typeof n == "function" ? n : r, ki(On(t, wt), r, n);
        }), np = Q(Xi);
        function ep(t, n) {
          return Za(t || [], n || [], Re);
        }
        function rp(t, n) {
          return Za(t || [], n || [], ke);
        }
        var ip = Q(function(t) {
          var n = t.length, e = n > 1 ? t[n - 1] : r;
          return e = typeof e == "function" ? (t.pop(), e) : r, Ro(t, e);
        });
        function To(t) {
          var n = u(t);
          return n.__chain__ = !0, n;
        }
        function sp(t, n) {
          return n(t), t;
        }
        function Ir(t, n) {
          return n(t);
        }
        var ap = En(function(t) {
          var n = t.length, e = n ? t[0] : 0, i = this.__wrapped__, o = function(c) {
            return Mi(c, t);
          };
          return n > 1 || this.__actions__.length || !(i instanceof j) || !Rn(e) ? this.thru(o) : (i = i.slice(e, +e + (n ? 1 : 0)), i.__actions__.push({
            func: Ir,
            args: [o],
            thisArg: r
          }), new sn(i, this.__chain__).thru(function(c) {
            return n && !c.length && c.push(r), c;
          }));
        });
        function op() {
          return To(this);
        }
        function up() {
          return new sn(this.value(), this.__chain__);
        }
        function cp() {
          this.__values__ === r && (this.__values__ = Ho(this.value()));
          var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
          return { done: t, value: n };
        }
        function lp() {
          return this;
        }
        function fp(t) {
          for (var n, e = this; e instanceof hr; ) {
            var i = bo(e);
            i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
            var o = i;
            e = e.__wrapped__;
          }
          return o.__wrapped__ = t, n;
        }
        function hp() {
          var t = this.__wrapped__;
          if (t instanceof j) {
            var n = t;
            return this.__actions__.length && (n = new j(this)), n = n.reverse(), n.__actions__.push({
              func: Ir,
              args: [Yi],
              thisArg: r
            }), new sn(n, this.__chain__);
          }
          return this.thru(Yi);
        }
        function pp() {
          return Ka(this.__wrapped__, this.__actions__);
        }
        var dp = wr(function(t, n, e) {
          st.call(t, e) ? ++t[e] : In(t, e, 1);
        });
        function gp(t, n, e) {
          var i = H(t) ? sa : sf;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        function _p(t, n) {
          var e = H(t) ? On : Ea;
          return e(t, B(n, 3));
        }
        var vp = ro(xo), mp = ro(Ao);
        function wp(t, n) {
          return Pt(Pr(t, n), 1);
        }
        function yp(t, n) {
          return Pt(Pr(t, n), Sn);
        }
        function Mp(t, n, e) {
          return e = e === r ? 1 : Y(e), Pt(Pr(t, n), e);
        }
        function Fo(t, n) {
          var e = H(t) ? en : Wn;
          return e(t, B(n, 3));
        }
        function Lo(t, n) {
          var e = H(t) ? Wc : Pa;
          return e(t, B(n, 3));
        }
        var Cp = wr(function(t, n, e) {
          st.call(t, e) ? t[e].push(n) : In(t, e, [n]);
        });
        function Sp(t, n, e, i) {
          t = qt(t) ? t : _e(t), e = e && !i ? Y(e) : 0;
          var o = t.length;
          return e < 0 && (e = xt(o + e, 0)), Lr(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && ie(t, n, e) > -1;
        }
        var bp = Q(function(t, n, e) {
          var i = -1, o = typeof n == "function", c = qt(t) ? C(t.length) : [];
          return Wn(t, function(p) {
            c[++i] = o ? Zt(n, p, e) : Fe(p, n, e);
          }), c;
        }), xp = wr(function(t, n, e) {
          In(t, e, n);
        });
        function Pr(t, n) {
          var e = H(t) ? dt : Oa;
          return e(t, B(n, 3));
        }
        function Ap(t, n, e, i) {
          return t == null ? [] : (H(n) || (n = n == null ? [] : [n]), e = i ? r : e, H(e) || (e = e == null ? [] : [e]), Wa(t, n, e));
        }
        var Ip = wr(function(t, n, e) {
          t[e ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Pp(t, n, e) {
          var i = H(t) ? ui : ca, o = arguments.length < 3;
          return i(t, B(n, 4), e, o, Wn);
        }
        function Ep(t, n, e) {
          var i = H(t) ? Uc : ca, o = arguments.length < 3;
          return i(t, B(n, 4), e, o, Pa);
        }
        function Rp(t, n) {
          var e = H(t) ? On : Ea;
          return e(t, Tr(B(n, 3)));
        }
        function Tp(t) {
          var n = H(t) ? ba : Sf;
          return n(t);
        }
        function Fp(t, n, e) {
          (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n);
          var i = H(t) ? jl : bf;
          return i(t, n);
        }
        function Lp(t) {
          var n = H(t) ? tf : Af;
          return n(t);
        }
        function kp(t) {
          if (t == null)
            return 0;
          if (qt(t))
            return Lr(t) ? ae(t) : t.length;
          var n = Rt(t);
          return n == vt || n == pt ? t.size : Ii(t).length;
        }
        function Op(t, n, e) {
          var i = H(t) ? ci : If;
          return e && Ot(t, n, e) && (n = r), i(t, B(n, 3));
        }
        var Dp = Q(function(t, n) {
          if (t == null)
            return [];
          var e = n.length;
          return e > 1 && Ot(t, n[0], n[1]) ? n = [] : e > 2 && Ot(n[0], n[1], n[2]) && (n = [n[0]]), Wa(t, Pt(n, 1), []);
        }), Er = gl || function() {
          return It.Date.now();
        };
        function Np(t, n) {
          if (typeof n != "function")
            throw new rn(g);
          return t = Y(t), function() {
            if (--t < 1)
              return n.apply(this, arguments);
          };
        }
        function ko(t, n, e) {
          return n = e ? r : n, n = t && n == null ? t.length : n, Pn(t, St, r, r, r, r, n);
        }
        function Oo(t, n) {
          var e;
          if (typeof n != "function")
            throw new rn(g);
          return t = Y(t), function() {
            return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = r), e;
          };
        }
        var Qi = Q(function(t, n, e) {
          var i = N;
          if (e.length) {
            var o = Nn(e, de(Qi));
            i |= _t;
          }
          return Pn(t, i, n, e, o);
        }), Do = Q(function(t, n, e) {
          var i = N | q;
          if (e.length) {
            var o = Nn(e, de(Do));
            i |= _t;
          }
          return Pn(n, i, t, e, o);
        });
        function No(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, J, r, r, r, r, r, n);
          return i.placeholder = No.placeholder, i;
        }
        function Bo(t, n, e) {
          n = e ? r : n;
          var i = Pn(t, it, r, r, r, r, r, n);
          return i.placeholder = Bo.placeholder, i;
        }
        function Wo(t, n, e) {
          var i, o, c, p, d, w, b = 0, x = !1, P = !1, L = !0;
          if (typeof t != "function")
            throw new rn(g);
          n = cn(n) || 0, gt(e) && (x = !!e.leading, P = "maxWait" in e, c = P ? xt(cn(e.maxWait) || 0, n) : c, L = "trailing" in e ? !!e.trailing : L);
          function D(yt) {
            var gn = i, Ln = o;
            return i = o = r, b = yt, p = t.apply(Ln, gn), p;
          }
          function W(yt) {
            return b = yt, d = Ne(V, n), x ? D(yt) : p;
          }
          function X(yt) {
            var gn = yt - w, Ln = yt - b, iu = n - gn;
            return P ? Et(iu, c - Ln) : iu;
          }
          function U(yt) {
            var gn = yt - w, Ln = yt - b;
            return w === r || gn >= n || gn < 0 || P && Ln >= c;
          }
          function V() {
            var yt = Er();
            if (U(yt))
              return tt(yt);
            d = Ne(V, X(yt));
          }
          function tt(yt) {
            return d = r, L && i ? D(yt) : (i = o = r, p);
          }
          function Qt() {
            d !== r && Ja(d), b = 0, i = w = o = d = r;
          }
          function Dt() {
            return d === r ? p : tt(Er());
          }
          function Vt() {
            var yt = Er(), gn = U(yt);
            if (i = arguments, o = this, w = yt, gn) {
              if (d === r)
                return W(w);
              if (P)
                return Ja(d), d = Ne(V, n), D(w);
            }
            return d === r && (d = Ne(V, n)), p;
          }
          return Vt.cancel = Qt, Vt.flush = Dt, Vt;
        }
        var Bp = Q(function(t, n) {
          return Ia(t, 1, n);
        }), Wp = Q(function(t, n, e) {
          return Ia(t, cn(n) || 0, e);
        });
        function Up(t) {
          return Pn(t, Ht);
        }
        function Rr(t, n) {
          if (typeof t != "function" || n != null && typeof n != "function")
            throw new rn(g);
          var e = function() {
            var i = arguments, o = n ? n.apply(this, i) : i[0], c = e.cache;
            if (c.has(o))
              return c.get(o);
            var p = t.apply(this, i);
            return e.cache = c.set(o, p) || c, p;
          };
          return e.cache = new (Rr.Cache || An)(), e;
        }
        Rr.Cache = An;
        function Tr(t) {
          if (typeof t != "function")
            throw new rn(g);
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
          return Oo(2, t);
        }
        var qp = Pf(function(t, n) {
          n = n.length == 1 && H(n[0]) ? dt(n[0], Jt(B())) : dt(Pt(n, 1), Jt(B()));
          var e = n.length;
          return Q(function(i) {
            for (var o = -1, c = Et(i.length, e); ++o < c; )
              i[o] = n[o].call(this, i[o]);
            return Zt(t, this, i);
          });
        }), Vi = Q(function(t, n) {
          var e = Nn(n, de(Vi));
          return Pn(t, _t, r, n, e);
        }), Uo = Q(function(t, n) {
          var e = Nn(n, de(Uo));
          return Pn(t, Bt, r, n, e);
        }), Gp = En(function(t, n) {
          return Pn(t, jt, r, r, r, n);
        });
        function zp(t, n) {
          if (typeof t != "function")
            throw new rn(g);
          return n = n === r ? n : Y(n), Q(t, n);
        }
        function Hp(t, n) {
          if (typeof t != "function")
            throw new rn(g);
          return n = n == null ? 0 : xt(Y(n), 0), Q(function(e) {
            var i = e[n], o = qn(e, 0, n);
            return i && Dn(o, i), Zt(t, this, o);
          });
        }
        function Kp(t, n, e) {
          var i = !0, o = !0;
          if (typeof t != "function")
            throw new rn(g);
          return gt(e) && (i = "leading" in e ? !!e.leading : i, o = "trailing" in e ? !!e.trailing : o), Wo(t, n, {
            leading: i,
            maxWait: n,
            trailing: o
          });
        }
        function Zp(t) {
          return ko(t, 1);
        }
        function Jp(t, n) {
          return Vi(Di(n), t);
        }
        function Yp() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return H(t) ? t : [t];
        }
        function Xp(t) {
          return an(t, F);
        }
        function Qp(t, n) {
          return n = typeof n == "function" ? n : r, an(t, F, n);
        }
        function Vp(t) {
          return an(t, m | F);
        }
        function jp(t, n) {
          return n = typeof n == "function" ? n : r, an(t, m | F, n);
        }
        function td(t, n) {
          return n == null || Aa(t, n, At(n));
        }
        function dn(t, n) {
          return t === n || t !== t && n !== n;
        }
        var nd = Sr(bi), ed = Sr(function(t, n) {
          return t >= n;
        }), ne = Fa(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Fa : function(t) {
          return mt(t) && st.call(t, "callee") && !ma.call(t, "callee");
        }, H = C.isArray, rd = js ? Jt(js) : ff;
        function qt(t) {
          return t != null && Fr(t.length) && !Tn(t);
        }
        function wt(t) {
          return mt(t) && qt(t);
        }
        function id(t) {
          return t === !0 || t === !1 || mt(t) && kt(t) == ct;
        }
        var Gn = vl || cs, sd = ta ? Jt(ta) : hf;
        function ad(t) {
          return mt(t) && t.nodeType === 1 && !Be(t);
        }
        function od(t) {
          if (t == null)
            return !0;
          if (qt(t) && (H(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || ge(t) || ne(t)))
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
        function ud(t, n) {
          return Le(t, n);
        }
        function cd(t, n, e) {
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
        function ld(t) {
          return typeof t == "number" && ya(t);
        }
        function Tn(t) {
          if (!gt(t))
            return !1;
          var n = kt(t);
          return n == Wt || n == vn || n == ot || n == fn;
        }
        function $o(t) {
          return typeof t == "number" && t == Y(t);
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
        var qo = na ? Jt(na) : df;
        function fd(t, n) {
          return t === n || Ai(t, n, Gi(n));
        }
        function hd(t, n, e) {
          return e = typeof e == "function" ? e : r, Ai(t, n, Gi(n), e);
        }
        function pd(t) {
          return Go(t) && t != +t;
        }
        function dd(t) {
          if (Qf(t))
            throw new z(h);
          return La(t);
        }
        function gd(t) {
          return t === null;
        }
        function _d(t) {
          return t == null;
        }
        function Go(t) {
          return typeof t == "number" || mt(t) && kt(t) == Lt;
        }
        function Be(t) {
          if (!mt(t) || kt(t) != Ct)
            return !1;
          var n = sr(t);
          if (n === null)
            return !0;
          var e = st.call(n, "constructor") && n.constructor;
          return typeof e == "function" && e instanceof e && nr.call(e) == fl;
        }
        var ts = ea ? Jt(ea) : gf;
        function vd(t) {
          return $o(t) && t >= -_n && t <= _n;
        }
        var zo = ra ? Jt(ra) : _f;
        function Lr(t) {
          return typeof t == "string" || !H(t) && mt(t) && kt(t) == mn;
        }
        function Xt(t) {
          return typeof t == "symbol" || mt(t) && kt(t) == Ke;
        }
        var ge = ia ? Jt(ia) : vf;
        function md(t) {
          return t === r;
        }
        function wd(t) {
          return mt(t) && Rt(t) == Ce;
        }
        function yd(t) {
          return mt(t) && kt(t) == Ou;
        }
        var Md = Sr(Pi), Cd = Sr(function(t, n) {
          return t <= n;
        });
        function Ho(t) {
          if (!t)
            return [];
          if (qt(t))
            return Lr(t) ? hn(t) : $t(t);
          if (xe && t[xe])
            return jc(t[xe]());
          var n = Rt(t), e = n == vt ? gi : n == pt ? Ve : _e;
          return e(t);
        }
        function Fn(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = cn(t), t === Sn || t === -Sn) {
            var n = t < 0 ? -1 : 1;
            return n * He;
          }
          return t === t ? t : 0;
        }
        function Y(t) {
          var n = Fn(t), e = n % 1;
          return n === n ? e ? n - e : n : 0;
        }
        function Ko(t) {
          return t ? Qn(Y(t), 0, k) : 0;
        }
        function cn(t) {
          if (typeof t == "number")
            return t;
          if (Xt(t))
            return bn;
          if (gt(t)) {
            var n = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = gt(n) ? n + "" : n;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = la(t);
          var e = ec.test(t);
          return e || ic.test(t) ? Dc(t.slice(2), e ? 2 : 8) : nc.test(t) ? bn : +t;
        }
        function Zo(t) {
          return yn(t, Gt(t));
        }
        function Sd(t) {
          return t ? Qn(Y(t), -_n, _n) : t === 0 ? t : 0;
        }
        function rt(t) {
          return t == null ? "" : Yt(t);
        }
        var bd = he(function(t, n) {
          if (De(n) || qt(n)) {
            yn(n, At(n), t);
            return;
          }
          for (var e in n)
            st.call(n, e) && Re(t, e, n[e]);
        }), Jo = he(function(t, n) {
          yn(n, Gt(n), t);
        }), kr = he(function(t, n, e, i) {
          yn(n, Gt(n), t, i);
        }), xd = he(function(t, n, e, i) {
          yn(n, At(n), t, i);
        }), Ad = En(Mi);
        function Id(t, n) {
          var e = fe(t);
          return n == null ? e : xa(e, n);
        }
        var Pd = Q(function(t, n) {
          t = at(t);
          var e = -1, i = n.length, o = i > 2 ? n[2] : r;
          for (o && Ot(n[0], n[1], o) && (i = 1); ++e < i; )
            for (var c = n[e], p = Gt(c), d = -1, w = p.length; ++d < w; ) {
              var b = p[d], x = t[b];
              (x === r || dn(x, ue[b]) && !st.call(t, b)) && (t[b] = c[b]);
            }
          return t;
        }), Ed = Q(function(t) {
          return t.push(r, lo), Zt(Yo, r, t);
        });
        function Rd(t, n) {
          return aa(t, B(n, 3), wn);
        }
        function Td(t, n) {
          return aa(t, B(n, 3), Si);
        }
        function Fd(t, n) {
          return t == null ? t : Ci(t, B(n, 3), Gt);
        }
        function Ld(t, n) {
          return t == null ? t : Ra(t, B(n, 3), Gt);
        }
        function kd(t, n) {
          return t && wn(t, B(n, 3));
        }
        function Od(t, n) {
          return t && Si(t, B(n, 3));
        }
        function Dd(t) {
          return t == null ? [] : gr(t, At(t));
        }
        function Nd(t) {
          return t == null ? [] : gr(t, Gt(t));
        }
        function ns(t, n, e) {
          var i = t == null ? r : Vn(t, n);
          return i === r ? e : i;
        }
        function Bd(t, n) {
          return t != null && po(t, n, of);
        }
        function es(t, n) {
          return t != null && po(t, n, uf);
        }
        var Wd = so(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = er.call(n)), t[n] = e;
        }, is(zt)), Ud = so(function(t, n, e) {
          n != null && typeof n.toString != "function" && (n = er.call(n)), st.call(t, n) ? t[n].push(e) : t[n] = [e];
        }, B), $d = Q(Fe);
        function At(t) {
          return qt(t) ? Sa(t) : Ii(t);
        }
        function Gt(t) {
          return qt(t) ? Sa(t, !0) : mf(t);
        }
        function qd(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, o, c) {
            In(e, n(i, o, c), i);
          }), e;
        }
        function Gd(t, n) {
          var e = {};
          return n = B(n, 3), wn(t, function(i, o, c) {
            In(e, o, n(i, o, c));
          }), e;
        }
        var zd = he(function(t, n, e) {
          _r(t, n, e);
        }), Yo = he(function(t, n, e, i) {
          _r(t, n, e, i);
        }), Hd = En(function(t, n) {
          var e = {};
          if (t == null)
            return e;
          var i = !1;
          n = dt(n, function(c) {
            return c = $n(c, t), i || (i = c.length > 1), c;
          }), yn(t, $i(t), e), i && (e = an(e, m | R | F, Wf));
          for (var o = n.length; o--; )
            Li(e, n[o]);
          return e;
        });
        function Kd(t, n) {
          return Xo(t, Tr(B(n)));
        }
        var Zd = En(function(t, n) {
          return t == null ? {} : yf(t, n);
        });
        function Xo(t, n) {
          if (t == null)
            return {};
          var e = dt($i(t), function(i) {
            return [i];
          });
          return n = B(n), Ua(t, e, function(i, o) {
            return n(i, o[0]);
          });
        }
        function Jd(t, n, e) {
          n = $n(n, t);
          var i = -1, o = n.length;
          for (o || (o = 1, t = r); ++i < o; ) {
            var c = t == null ? r : t[Mn(n[i])];
            c === r && (i = o, c = e), t = Tn(c) ? c.call(t) : c;
          }
          return t;
        }
        function Yd(t, n, e) {
          return t == null ? t : ke(t, n, e);
        }
        function Xd(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : ke(t, n, e, i);
        }
        var Qo = uo(At), Vo = uo(Gt);
        function Qd(t, n, e) {
          var i = H(t), o = i || Gn(t) || ge(t);
          if (n = B(n, 4), e == null) {
            var c = t && t.constructor;
            o ? e = i ? new c() : [] : gt(t) ? e = Tn(c) ? fe(sr(t)) : {} : e = {};
          }
          return (o ? en : wn)(t, function(p, d, w) {
            return n(e, p, d, w);
          }), e;
        }
        function Vd(t, n) {
          return t == null ? !0 : Li(t, n);
        }
        function jd(t, n, e) {
          return t == null ? t : Ha(t, n, Di(e));
        }
        function tg(t, n, e, i) {
          return i = typeof i == "function" ? i : r, t == null ? t : Ha(t, n, Di(e), i);
        }
        function _e(t) {
          return t == null ? [] : di(t, At(t));
        }
        function ng(t) {
          return t == null ? [] : di(t, Gt(t));
        }
        function eg(t, n, e) {
          return e === r && (e = n, n = r), e !== r && (e = cn(e), e = e === e ? e : 0), n !== r && (n = cn(n), n = n === n ? n : 0), Qn(cn(t), n, e);
        }
        function rg(t, n, e) {
          return n = Fn(n), e === r ? (e = n, n = 0) : e = Fn(e), t = cn(t), cf(t, n, e);
        }
        function ig(t, n, e) {
          if (e && typeof e != "boolean" && Ot(t, n, e) && (n = e = r), e === r && (typeof n == "boolean" ? (e = n, n = r) : typeof t == "boolean" && (e = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Fn(t), n === r ? (n = t, t = 0) : n = Fn(n)), t > n) {
            var i = t;
            t = n, n = i;
          }
          if (e || t % 1 || n % 1) {
            var o = Ma();
            return Et(t + o * (n - t + Oc("1e-" + ((o + "").length - 1))), n);
          }
          return Ri(t, n);
        }
        var sg = pe(function(t, n, e) {
          return n = n.toLowerCase(), t + (e ? jo(n) : n);
        });
        function jo(t) {
          return rs(rt(t).toLowerCase());
        }
        function tu(t) {
          return t = rt(t), t && t.replace(ac, Jc).replace(xc, "");
        }
        function ag(t, n, e) {
          t = rt(t), n = Yt(n);
          var i = t.length;
          e = e === r ? i : Qn(Y(e), 0, i);
          var o = e;
          return e -= n.length, e >= 0 && t.slice(e, o) == n;
        }
        function og(t) {
          return t = rt(t), t && Uu.test(t) ? t.replace(Rs, Yc) : t;
        }
        function ug(t) {
          return t = rt(t), t && Ku.test(t) ? t.replace(Vr, "\\$&") : t;
        }
        var cg = pe(function(t, n, e) {
          return t + (e ? "-" : "") + n.toLowerCase();
        }), lg = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toLowerCase();
        }), fg = eo("toLowerCase");
        function hg(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          if (!n || i >= n)
            return t;
          var o = (n - i) / 2;
          return Cr(cr(o), e) + t + Cr(ur(o), e);
        }
        function pg(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? t + Cr(n - i, e) : t;
        }
        function dg(t, n, e) {
          t = rt(t), n = Y(n);
          var i = n ? ae(t) : 0;
          return n && i < n ? Cr(n - i, e) + t : t;
        }
        function gg(t, n, e) {
          return e || n == null ? n = 0 : n && (n = +n), Ml(rt(t).replace(jr, ""), n || 0);
        }
        function _g(t, n, e) {
          return (e ? Ot(t, n, e) : n === r) ? n = 1 : n = Y(n), Ti(rt(t), n);
        }
        function vg() {
          var t = arguments, n = rt(t[0]);
          return t.length < 3 ? n : n.replace(t[1], t[2]);
        }
        var mg = pe(function(t, n, e) {
          return t + (e ? "_" : "") + n.toLowerCase();
        });
        function wg(t, n, e) {
          return e && typeof e != "number" && Ot(t, n, e) && (n = e = r), e = e === r ? k : e >>> 0, e ? (t = rt(t), t && (typeof n == "string" || n != null && !ts(n)) && (n = Yt(n), !n && se(t)) ? qn(hn(t), 0, e) : t.split(n, e)) : [];
        }
        var yg = pe(function(t, n, e) {
          return t + (e ? " " : "") + rs(n);
        });
        function Mg(t, n, e) {
          return t = rt(t), e = e == null ? 0 : Qn(Y(e), 0, t.length), n = Yt(n), t.slice(e, e + n.length) == n;
        }
        function Cg(t, n, e) {
          var i = u.templateSettings;
          e && Ot(t, n, e) && (n = r), t = rt(t), n = kr({}, n, i, co);
          var o = kr({}, n.imports, i.imports, co), c = At(o), p = di(o, c), d, w, b = 0, x = n.interpolate || Ze, P = "__p += '", L = _i(
            (n.escape || Ze).source + "|" + x.source + "|" + (x === Ts ? tc : Ze).source + "|" + (n.evaluate || Ze).source + "|$",
            "g"
          ), D = "//# sourceURL=" + (st.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Rc + "]") + `
`;
          t.replace(L, function(U, V, tt, Qt, Dt, Vt) {
            return tt || (tt = Qt), P += t.slice(b, Vt).replace(oc, Xc), V && (d = !0, P += `' +
__e(` + V + `) +
'`), Dt && (w = !0, P += `';
` + Dt + `;
__p += '`), tt && (P += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), b = Vt + U.length, U;
          }), P += `';
`;
          var W = st.call(n, "variable") && n.variable;
          if (!W)
            P = `with (obj) {
` + P + `
}
`;
          else if (Vu.test(W))
            throw new z(_);
          P = (w ? P.replace(Du, "") : P).replace(Nu, "$1").replace(Bu, "$1;"), P = "function(" + (W || "obj") + `) {
` + (W ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (d ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var X = eu(function() {
            return et(c, D + "return " + P).apply(r, p);
          });
          if (X.source = P, ji(X))
            throw X;
          return X;
        }
        function Sg(t) {
          return rt(t).toLowerCase();
        }
        function bg(t) {
          return rt(t).toUpperCase();
        }
        function xg(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return la(t);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = hn(n), c = fa(i, o), p = ha(i, o) + 1;
          return qn(i, c, p).join("");
        }
        function Ag(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.slice(0, da(t) + 1);
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = ha(i, hn(n)) + 1;
          return qn(i, 0, o).join("");
        }
        function Ig(t, n, e) {
          if (t = rt(t), t && (e || n === r))
            return t.replace(jr, "");
          if (!t || !(n = Yt(n)))
            return t;
          var i = hn(t), o = fa(i, hn(n));
          return qn(i, o).join("");
        }
        function Pg(t, n) {
          var e = Tt, i = ye;
          if (gt(n)) {
            var o = "separator" in n ? n.separator : o;
            e = "length" in n ? Y(n.length) : e, i = "omission" in n ? Yt(n.omission) : i;
          }
          t = rt(t);
          var c = t.length;
          if (se(t)) {
            var p = hn(t);
            c = p.length;
          }
          if (e >= c)
            return t;
          var d = e - ae(i);
          if (d < 1)
            return i;
          var w = p ? qn(p, 0, d).join("") : t.slice(0, d);
          if (o === r)
            return w + i;
          if (p && (d += w.length - d), ts(o)) {
            if (t.slice(d).search(o)) {
              var b, x = w;
              for (o.global || (o = _i(o.source, rt(Fs.exec(o)) + "g")), o.lastIndex = 0; b = o.exec(x); )
                var P = b.index;
              w = w.slice(0, P === r ? d : P);
            }
          } else if (t.indexOf(Yt(o), d) != d) {
            var L = w.lastIndexOf(o);
            L > -1 && (w = w.slice(0, L));
          }
          return w + i;
        }
        function Eg(t) {
          return t = rt(t), t && Wu.test(t) ? t.replace(Es, rl) : t;
        }
        var Rg = pe(function(t, n, e) {
          return t + (e ? " " : "") + n.toUpperCase();
        }), rs = eo("toUpperCase");
        function nu(t, n, e) {
          return t = rt(t), n = e ? r : n, n === r ? Vc(t) ? al(t) : Gc(t) : t.match(n) || [];
        }
        var eu = Q(function(t, n) {
          try {
            return Zt(t, r, n);
          } catch (e) {
            return ji(e) ? e : new z(e);
          }
        }), Tg = En(function(t, n) {
          return en(n, function(e) {
            e = Mn(e), In(t, e, Qi(t[e], t));
          }), t;
        });
        function Fg(t) {
          var n = t == null ? 0 : t.length, e = B();
          return t = n ? dt(t, function(i) {
            if (typeof i[1] != "function")
              throw new rn(g);
            return [e(i[0]), i[1]];
          }) : [], Q(function(i) {
            for (var o = -1; ++o < n; ) {
              var c = t[o];
              if (Zt(c[0], this, i))
                return Zt(c[1], this, i);
            }
          });
        }
        function Lg(t) {
          return rf(an(t, m));
        }
        function is(t) {
          return function() {
            return t;
          };
        }
        function kg(t, n) {
          return t == null || t !== t ? n : t;
        }
        var Og = io(), Dg = io(!0);
        function zt(t) {
          return t;
        }
        function ss(t) {
          return ka(typeof t == "function" ? t : an(t, m));
        }
        function Ng(t) {
          return Da(an(t, m));
        }
        function Bg(t, n) {
          return Na(t, an(n, m));
        }
        var Wg = Q(function(t, n) {
          return function(e) {
            return Fe(e, t, n);
          };
        }), Ug = Q(function(t, n) {
          return function(e) {
            return Fe(t, e, n);
          };
        });
        function as(t, n, e) {
          var i = At(n), o = gr(n, i);
          e == null && !(gt(n) && (o.length || !i.length)) && (e = n, n = t, t = this, o = gr(n, At(n)));
          var c = !(gt(e) && "chain" in e) || !!e.chain, p = Tn(t);
          return en(o, function(d) {
            var w = n[d];
            t[d] = w, p && (t.prototype[d] = function() {
              var b = this.__chain__;
              if (c || b) {
                var x = t(this.__wrapped__), P = x.__actions__ = $t(this.__actions__);
                return P.push({ func: w, args: arguments, thisArg: t }), x.__chain__ = b, x;
              }
              return w.apply(t, Dn([this.value()], arguments));
            });
          }), t;
        }
        function $g() {
          return It._ === this && (It._ = hl), this;
        }
        function os() {
        }
        function qg(t) {
          return t = Y(t), Q(function(n) {
            return Ba(n, t);
          });
        }
        var Gg = Bi(dt), zg = Bi(sa), Hg = Bi(ci);
        function ru(t) {
          return Hi(t) ? li(Mn(t)) : Mf(t);
        }
        function Kg(t) {
          return function(n) {
            return t == null ? r : Vn(t, n);
          };
        }
        var Zg = ao(), Jg = ao(!0);
        function us() {
          return [];
        }
        function cs() {
          return !1;
        }
        function Yg() {
          return {};
        }
        function Xg() {
          return "";
        }
        function Qg() {
          return !0;
        }
        function Vg(t, n) {
          if (t = Y(t), t < 1 || t > _n)
            return [];
          var e = k, i = Et(t, k);
          n = B(n), t -= k;
          for (var o = pi(i, n); ++e < t; )
            n(e);
          return o;
        }
        function jg(t) {
          return H(t) ? dt(t, Mn) : Xt(t) ? [t] : $t(So(rt(t)));
        }
        function t0(t) {
          var n = ++ll;
          return rt(t) + n;
        }
        var n0 = Mr(function(t, n) {
          return t + n;
        }, 0), e0 = Wi("ceil"), r0 = Mr(function(t, n) {
          return t / n;
        }, 1), i0 = Wi("floor");
        function s0(t) {
          return t && t.length ? dr(t, zt, bi) : r;
        }
        function a0(t, n) {
          return t && t.length ? dr(t, B(n, 2), bi) : r;
        }
        function o0(t) {
          return ua(t, zt);
        }
        function u0(t, n) {
          return ua(t, B(n, 2));
        }
        function c0(t) {
          return t && t.length ? dr(t, zt, Pi) : r;
        }
        function l0(t, n) {
          return t && t.length ? dr(t, B(n, 2), Pi) : r;
        }
        var f0 = Mr(function(t, n) {
          return t * n;
        }, 1), h0 = Wi("round"), p0 = Mr(function(t, n) {
          return t - n;
        }, 0);
        function d0(t) {
          return t && t.length ? hi(t, zt) : 0;
        }
        function g0(t, n) {
          return t && t.length ? hi(t, B(n, 2)) : 0;
        }
        return u.after = Np, u.ary = ko, u.assign = bd, u.assignIn = Jo, u.assignInWith = kr, u.assignWith = xd, u.at = Ad, u.before = Oo, u.bind = Qi, u.bindAll = Tg, u.bindKey = Do, u.castArray = Yp, u.chain = To, u.chunk = ih, u.compact = sh, u.concat = ah, u.cond = Fg, u.conforms = Lg, u.constant = is, u.countBy = dp, u.create = Id, u.curry = No, u.curryRight = Bo, u.debounce = Wo, u.defaults = Pd, u.defaultsDeep = Ed, u.defer = Bp, u.delay = Wp, u.difference = oh, u.differenceBy = uh, u.differenceWith = ch, u.drop = lh, u.dropRight = fh, u.dropRightWhile = hh, u.dropWhile = ph, u.fill = dh, u.filter = _p, u.flatMap = wp, u.flatMapDeep = yp, u.flatMapDepth = Mp, u.flatten = Io, u.flattenDeep = gh, u.flattenDepth = _h, u.flip = Up, u.flow = Og, u.flowRight = Dg, u.fromPairs = vh, u.functions = Dd, u.functionsIn = Nd, u.groupBy = Cp, u.initial = wh, u.intersection = yh, u.intersectionBy = Mh, u.intersectionWith = Ch, u.invert = Wd, u.invertBy = Ud, u.invokeMap = bp, u.iteratee = ss, u.keyBy = xp, u.keys = At, u.keysIn = Gt, u.map = Pr, u.mapKeys = qd, u.mapValues = Gd, u.matches = Ng, u.matchesProperty = Bg, u.memoize = Rr, u.merge = zd, u.mergeWith = Yo, u.method = Wg, u.methodOf = Ug, u.mixin = as, u.negate = Tr, u.nthArg = qg, u.omit = Hd, u.omitBy = Kd, u.once = $p, u.orderBy = Ap, u.over = Gg, u.overArgs = qp, u.overEvery = zg, u.overSome = Hg, u.partial = Vi, u.partialRight = Uo, u.partition = Ip, u.pick = Zd, u.pickBy = Xo, u.property = ru, u.propertyOf = Kg, u.pull = Ah, u.pullAll = Eo, u.pullAllBy = Ih, u.pullAllWith = Ph, u.pullAt = Eh, u.range = Zg, u.rangeRight = Jg, u.rearg = Gp, u.reject = Rp, u.remove = Rh, u.rest = zp, u.reverse = Yi, u.sampleSize = Fp, u.set = Yd, u.setWith = Xd, u.shuffle = Lp, u.slice = Th, u.sortBy = Dp, u.sortedUniq = Bh, u.sortedUniqBy = Wh, u.split = wg, u.spread = Hp, u.tail = Uh, u.take = $h, u.takeRight = qh, u.takeRightWhile = Gh, u.takeWhile = zh, u.tap = sp, u.throttle = Kp, u.thru = Ir, u.toArray = Ho, u.toPairs = Qo, u.toPairsIn = Vo, u.toPath = jg, u.toPlainObject = Zo, u.transform = Qd, u.unary = Zp, u.union = Hh, u.unionBy = Kh, u.unionWith = Zh, u.uniq = Jh, u.uniqBy = Yh, u.uniqWith = Xh, u.unset = Vd, u.unzip = Xi, u.unzipWith = Ro, u.update = jd, u.updateWith = tg, u.values = _e, u.valuesIn = ng, u.without = Qh, u.words = nu, u.wrap = Jp, u.xor = Vh, u.xorBy = jh, u.xorWith = tp, u.zip = np, u.zipObject = ep, u.zipObjectDeep = rp, u.zipWith = ip, u.entries = Qo, u.entriesIn = Vo, u.extend = Jo, u.extendWith = kr, as(u, u), u.add = n0, u.attempt = eu, u.camelCase = sg, u.capitalize = jo, u.ceil = e0, u.clamp = eg, u.clone = Xp, u.cloneDeep = Vp, u.cloneDeepWith = jp, u.cloneWith = Qp, u.conformsTo = td, u.deburr = tu, u.defaultTo = kg, u.divide = r0, u.endsWith = ag, u.eq = dn, u.escape = og, u.escapeRegExp = ug, u.every = gp, u.find = vp, u.findIndex = xo, u.findKey = Rd, u.findLast = mp, u.findLastIndex = Ao, u.findLastKey = Td, u.floor = i0, u.forEach = Fo, u.forEachRight = Lo, u.forIn = Fd, u.forInRight = Ld, u.forOwn = kd, u.forOwnRight = Od, u.get = ns, u.gt = nd, u.gte = ed, u.has = Bd, u.hasIn = es, u.head = Po, u.identity = zt, u.includes = Sp, u.indexOf = mh, u.inRange = rg, u.invoke = $d, u.isArguments = ne, u.isArray = H, u.isArrayBuffer = rd, u.isArrayLike = qt, u.isArrayLikeObject = wt, u.isBoolean = id, u.isBuffer = Gn, u.isDate = sd, u.isElement = ad, u.isEmpty = od, u.isEqual = ud, u.isEqualWith = cd, u.isError = ji, u.isFinite = ld, u.isFunction = Tn, u.isInteger = $o, u.isLength = Fr, u.isMap = qo, u.isMatch = fd, u.isMatchWith = hd, u.isNaN = pd, u.isNative = dd, u.isNil = _d, u.isNull = gd, u.isNumber = Go, u.isObject = gt, u.isObjectLike = mt, u.isPlainObject = Be, u.isRegExp = ts, u.isSafeInteger = vd, u.isSet = zo, u.isString = Lr, u.isSymbol = Xt, u.isTypedArray = ge, u.isUndefined = md, u.isWeakMap = wd, u.isWeakSet = yd, u.join = Sh, u.kebabCase = cg, u.last = un, u.lastIndexOf = bh, u.lowerCase = lg, u.lowerFirst = fg, u.lt = Md, u.lte = Cd, u.max = s0, u.maxBy = a0, u.mean = o0, u.meanBy = u0, u.min = c0, u.minBy = l0, u.stubArray = us, u.stubFalse = cs, u.stubObject = Yg, u.stubString = Xg, u.stubTrue = Qg, u.multiply = f0, u.nth = xh, u.noConflict = $g, u.noop = os, u.now = Er, u.pad = hg, u.padEnd = pg, u.padStart = dg, u.parseInt = gg, u.random = ig, u.reduce = Pp, u.reduceRight = Ep, u.repeat = _g, u.replace = vg, u.result = Jd, u.round = h0, u.runInContext = v, u.sample = Tp, u.size = kp, u.snakeCase = mg, u.some = Op, u.sortedIndex = Fh, u.sortedIndexBy = Lh, u.sortedIndexOf = kh, u.sortedLastIndex = Oh, u.sortedLastIndexBy = Dh, u.sortedLastIndexOf = Nh, u.startCase = yg, u.startsWith = Mg, u.subtract = p0, u.sum = d0, u.sumBy = g0, u.template = Cg, u.times = Vg, u.toFinite = Fn, u.toInteger = Y, u.toLength = Ko, u.toLower = Sg, u.toNumber = cn, u.toSafeInteger = Sd, u.toString = rt, u.toUpper = bg, u.trim = xg, u.trimEnd = Ag, u.trimStart = Ig, u.truncate = Pg, u.unescape = Eg, u.uniqueId = t0, u.upperCase = Rg, u.upperFirst = rs, u.each = Fo, u.eachRight = Lo, u.first = Po, as(u, function() {
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
            return i.__filtered__ ? i.__takeCount__ = Et(e, i.__takeCount__) : i.__views__.push({
              size: Et(e, k),
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
          return this.filter(Tr(B(t)));
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
            var p = this.__wrapped__, d = i ? [1] : arguments, w = p instanceof j, b = d[0], x = w || H(p), P = function(V) {
              var tt = o.apply(u, Dn([V], d));
              return i && L ? tt[0] : tt;
            };
            x && e && typeof b == "function" && b.length != 1 && (w = x = !1);
            var L = this.__chain__, D = !!this.__actions__.length, W = c && !L, X = w && !D;
            if (!c && x) {
              p = X ? p : new j(this);
              var U = t.apply(p, d);
              return U.__actions__.push({ func: Ir, args: [P], thisArg: r }), new sn(U, L);
            }
            return W && X ? t.apply(this, d) : (U = this.thru(P), W ? i ? U.value()[0] : U.value() : U);
          });
        }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var n = je[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(t);
          u.prototype[t] = function() {
            var o = arguments;
            if (i && !this.__chain__) {
              var c = this.value();
              return n.apply(H(c) ? c : [], o);
            }
            return this[e](function(p) {
              return n.apply(H(p) ? p : [], o);
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
        }], j.prototype.clone = Pl, j.prototype.reverse = El, j.prototype.value = Rl, u.prototype.at = ap, u.prototype.chain = op, u.prototype.commit = up, u.prototype.next = cp, u.prototype.plant = fp, u.prototype.reverse = hp, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = pp, u.prototype.first = u.prototype.head, xe && (u.prototype[xe] = lp), u;
      }, oe = ol();
      Zn ? ((Zn.exports = oe)._ = oe, si._ = oe) : It._ = oe;
    }).call(C0);
  }(Ue, Ue.exports)), Ue.exports;
}
var xu = S0();
const K = /* @__PURE__ */ bu(xu);
function Au(f, s) {
  const r = K.findLast(s.terrain, (a) => we(a.percents[0] * s.dist, f.loc, 4));
  return r ? r.value / 100 + 1 : 1;
}
const b0 = [
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
    s.applyEach((l, h) => l + a * h, r);
  }), s.scaleEach(1 / xu.sumBy(f, "dist")), s;
}
function x0(f, s) {
  let r = 0, a = 0;
  return f.forEach((l, h) => {
    const g = h === f.length - 1 ? s : f[h + 1].onset, _ = l.type === "linear" ? l.value / 2 : l.value;
    a += (r + _) * (g - l.onset), r += l.value;
  }), a / s;
}
function A0(f) {
  return f < 30 ? 2 : f < 60 ? 5 : f < 90 ? 10 : f < 120 ? 15 : 20;
}
function I0(f, s, r) {
  let a = -x0(s, r);
  return s.forEach((l, h) => {
    if (f >= l.onset) {
      if (l.type === "step")
        a += l.value;
      else if (l.type === "linear") {
        const g = h === s.length - 1 ? r : s[h + 1].onset;
        f > g ? a += l.value : a += l.value * (f - l.onset) / (g - l.onset);
      }
    }
  }), a;
}
class Iu {
  constructor(s, r) {
    A(this, "plan");
    A(this, "values");
    this.plan = s, this.values = r ? K.cloneDeep(r) : [{ onset: 0, value: A0(this.plan.course.dist), type: "linear" }];
  }
  /**
   * Returns strategy factor at location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns  The strategy factor at input location.
   */
  at(s) {
    return 1 + I0(s, this.values, this.plan.course.dist) / 100;
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
    grade: Cu(f.grade),
    altitude: vu(f.alt),
    terrain: Au(f, s)
  });
}
function $e(f, s) {
  var r, a;
  if (f.factors || (f.factors = new Cn()), As(f, s.course), s) {
    if (f.factors === void 0) throw new Error("no factors");
    f.factors.strategy = s.strategy.at(f.loc), Object.assign(f.factors, {
      heat: s.heatModel ? Su(f, s.heatModel) : 1,
      dark: s.event.sun ? Mu(f.tod, f.factors.terrain, s.event.sun) : 1
    });
  }
  f.factors.altitude = ys(f.factors.altitude, (r = s.scales) == null ? void 0 : r.altitude), f.factors.dark = ys(f.factors.dark, (a = s.scales) == null ? void 0 : a.dark);
}
const e_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Factors: Cn,
  Strategy: Iu,
  applyScale: ys,
  factorKeys: ve,
  generateCourseFactors: As,
  generatePlanFactors: $e,
  getAltitudeFactor: vu,
  getDarkFactor: Mu,
  getGradeFactor: Cu,
  getHeatFactor: Su,
  getTerrainFactor: Au,
  rollup: xs,
  typeList: b0
}, Symbol.toStringTag, { value: "Module" }));
var Dr = { exports: {} }, ls, ou;
function P0() {
  if (ou) return ls;
  ou = 1;
  var f = 1e3, s = f * 60, r = s * 60, a = r * 24, l = a * 7, h = a * 365.25;
  ls = function(I, m) {
    m = m || {};
    var R = typeof I;
    if (R === "string" && I.length > 0)
      return g(I);
    if (R === "number" && isFinite(I))
      return m.long ? y(I) : _(I);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(I)
    );
  };
  function g(I) {
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
            return R * h;
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
  return ls;
}
var fs, uu;
function E0() {
  if (uu) return fs;
  uu = 1;
  function f(s) {
    a.debug = a, a.default = a, a.coerce = M, a.disable = _, a.enable = h, a.enabled = y, a.humanize = P0(), a.destroy = I, Object.keys(s).forEach((m) => {
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
    function h(m) {
      a.save(m), a.namespaces = m, a.names = [], a.skips = [];
      const R = (typeof m == "string" ? m : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const F of R)
        F[0] === "-" ? a.skips.push(F.slice(1)) : a.names.push(F);
    }
    function g(m, R) {
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
        if (g(m, R))
          return !1;
      for (const R of a.names)
        if (g(m, R))
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
var cu;
function R0() {
  return cu || (cu = 1, function(f, s) {
    s.formatArgs = a, s.save = l, s.load = h, s.useColors = r, s.storage = g(), s.destroy = /* @__PURE__ */ (() => {
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
    function h() {
      let y;
      try {
        y = s.storage.getItem("debug");
      } catch {
      }
      return !y && typeof process < "u" && "env" in process && (y = process.env.DEBUG), y;
    }
    function g() {
      try {
        return localStorage;
      } catch {
      }
    }
    f.exports = E0()(s);
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
var T0 = R0();
const F0 = /* @__PURE__ */ bu(T0), hs = {};
function Kn(f) {
  if (!hs[f]) {
    const s = F0("ultraPacer:core");
    s(`loading debug for namespace "${f}"`), hs[f] = s.extend(f);
  }
  return hs[f];
}
var ps = {}, lu;
function L0() {
  return lu || (lu = 1, function(f) {
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
          var h = (r * 60).toFixed(l), _ = Math.floor(h / 60), y = (h % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), dms = _ + "°" + y + "′";
          break;
        case "dms":
          var g = (r * 3600).toFixed(l), _ = Math.floor(g / 3600), y = Math.floor(g / 60) % 60, M = (g % 60).toFixed(l);
          _ < 100 && (_ = "0" + _), _ < 10 && (_ = "0" + _), y < 10 && (y = "0" + y), M < 10 && (M = "0" + M), dms = _ + "°" + y + "′" + M + "″";
          break;
      }
      return dms;
    }, f.toLat = function(r, a, l) {
      var h = f.toDMS(r, a, l);
      return h == null ? "." : h.slice(1) + (r < 0 ? "S" : "N");
    }, f.toLon = function(r, a, l) {
      var h = f.toDMS(r, a, l);
      return h == null ? "." : h + (r < 0 ? "W" : "E");
    }, f.toBrng = function(r, a, l) {
      r = (Number(r) + 360) % 360;
      var h = f.toDMS(r, a, l);
      return h == null ? "." : h.replace("360", "0");
    };
    var s = 6371;
    f.latlon = function(r, a) {
      this.lat = typeof r == "number" ? r : typeof r == "string" && r.trim() != "" ? +r : NaN, this.lng = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN;
    }, f.latlon.prototype.distanceTo = function(r, a) {
      typeof a > "u" && (a = 4);
      var l = this.distanceRadTo(r), h = s * l;
      return h.toPrecisionFixed(a);
    }, f.latlon.prototype.distanceRadTo = function(r) {
      var a = this.lat.toRad(), l = this.lng.toRad(), h = r.lat.toRad(), g = r.lng.toRad(), _ = h - a, y = g - l, M = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(a) * Math.cos(h) * Math.sin(y / 2) * Math.sin(y / 2), I = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
      return I;
    }, f.latlon.prototype.bearingTo = function(r) {
      var a = this.bearingRadTo(r);
      return (a.toDeg() + 360) % 360;
    }, f.latlon.prototype.bearingRadTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), h = (r.lng - this.lng).toRad(), g = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(h), _ = Math.cos(l) * Math.sin(h), y = Math.atan2(_, g);
      return y;
    }, f.latlon.prototype.finalBearingTo = function(r) {
      var a = r.lat.toRad(), l = this.lat.toRad(), h = (this.lng - r.lng).toRad(), g = Math.sin(h) * Math.cos(l), _ = Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l) * Math.cos(h), y = Math.atan2(g, _);
      return (y.toDeg() + 180) % 360;
    }, f.latlon.prototype.midpointTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), h = (r.lng - this.lng).toRad(), g = Math.cos(l) * Math.cos(h), _ = Math.cos(l) * Math.sin(h), y = this.lng.toRad(), M = Math.atan2(Math.sin(a) + Math.sin(l), Math.sqrt((Math.cos(a) + g) * (Math.cos(a) + g) + _ * _)), I = y + Math.atan2(_, Math.cos(a) + g);
      return I = (I + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(M.toDeg(), I.toDeg());
    }, f.midpoint = function(r) {
      var a = 0, l = 0, h = 0;
      for (var g in r) {
        var _ = r[g], y = _.lat * Math.PI / 180, M = _.lng * Math.PI / 180, I = Math.cos(y) * Math.cos(M), m = Math.cos(y) * Math.sin(M), R = Math.sin(y);
        a += I, l += m, h += R;
      }
      a = a / r.length, l = l / r.length, h = h / r.length;
      var F = Math.atan2(l, a), T = Math.sqrt(a * a + l * l), E = Math.atan2(h, T);
      return new f.latlon(E * 180 / Math.PI, F * 180 / Math.PI);
    }, f.latlon.prototype.interpolate = function(r, a) {
      var l = this.distanceRadTo(r), h = this.bearingRadTo(r), g = this.lat.toRad(), _ = this.lng.toRad();
      r.lat.toRad(), r.lng.toRad();
      for (var y = Math.sin(g), M = Math.cos(g), I = [], m = 0; m < a; m++) {
        var R = 1 / (a - 1) * m, F = l * R, T = Math.sin(F), E = Math.cos(F), N = Math.asin(y * E + M * T * Math.cos(h)), q = _ + Math.atan2(Math.sin(h) * T * M, E - y * Math.sin(N)), Z = N.toDeg(), J = q.toDeg();
        for (Z > 90 && (Z = 90), Z < -90 && (Z = -90); J > 180; ) J -= 360;
        for (; J <= -180; ) J += 360;
        I.push(new f.latlon(Z, J));
      }
      return I;
    }, f.latlon.prototype.destinationPoint = function(r, a) {
      a = typeof a == "number" ? a : typeof a == "string" && a.trim() != "" ? +a : NaN, a = a / s, r = r.toRad();
      var l = this.lat.toRad(), h = this.lng.toRad(), g = Math.asin(Math.sin(l) * Math.cos(a) + Math.cos(l) * Math.sin(a) * Math.cos(r)), _ = h + Math.atan2(
        Math.sin(r) * Math.sin(a) * Math.cos(l),
        Math.cos(a) - Math.sin(l) * Math.sin(g)
      );
      return _ = (_ + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(g.toDeg(), _.toDeg());
    }, f.latlon.intersection = function(r, a, l, h) {
      a = typeof a == "number" ? a : typeof a == "string" && trim(a) != "" ? +a : NaN, h = typeof h == "number" ? h : typeof h == "string" && trim(h) != "" ? +h : NaN;
      var g = r.lat.toRad(), _ = r.lng.toRad(), y = l.lat.toRad(), M = l.lng.toRad(), I = a.toRad(), m = h.toRad(), R = y - g, F = M - _, T = 2 * Math.asin(Math.sqrt(Math.sin(R / 2) * Math.sin(R / 2) + Math.cos(g) * Math.cos(y) * Math.sin(F / 2) * Math.sin(F / 2)));
      if (T == 0) return null;
      var E = Math.acos((Math.sin(y) - Math.sin(g) * Math.cos(T)) / (Math.sin(T) * Math.cos(g)));
      isNaN(E) && (E = 0);
      var N = Math.acos((Math.sin(g) - Math.sin(y) * Math.cos(T)) / (Math.sin(T) * Math.cos(y)));
      if (Math.sin(M - _) > 0)
        var q = E, Z = 2 * Math.PI - N;
      else
        q = 2 * Math.PI - E, Z = N;
      var J = (I - q + Math.PI) % (2 * Math.PI) - Math.PI, it = (Z - m + Math.PI) % (2 * Math.PI) - Math.PI;
      if (Math.sin(J) == 0 && Math.sin(it) == 0 || Math.sin(J) * Math.sin(it) < 0) return null;
      var _t = Math.acos(-Math.cos(J) * Math.cos(it) + Math.sin(J) * Math.sin(it) * Math.cos(T)), Bt = Math.atan2(
        Math.sin(T) * Math.sin(J) * Math.sin(it),
        Math.cos(it) + Math.cos(J) * Math.cos(_t)
      ), St = Math.asin(Math.sin(g) * Math.cos(Bt) + Math.cos(g) * Math.sin(Bt) * Math.cos(I)), jt = Math.atan2(
        Math.sin(I) * Math.sin(Bt) * Math.cos(g),
        Math.cos(Bt) - Math.sin(g) * Math.sin(St)
      ), Ht = _ + jt;
      return Ht = (Ht + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(St.toDeg(), Ht.toDeg());
    }, f.latlon.prototype.rhumbDistanceTo = function(r) {
      var a = s, l = this.lat.toRad(), h = r.lat.toRad(), g = (r.lat - this.lat).toRad(), _ = Math.abs(r.lng - this.lng).toRad(), y = Math.log(Math.tan(h / 2 + Math.PI / 4) / Math.tan(l / 2 + Math.PI / 4)), M = isFinite(g / y) ? g / y : Math.cos(l);
      Math.abs(_) > Math.PI && (_ = _ > 0 ? -(2 * Math.PI - _) : 2 * Math.PI + _);
      var I = Math.sqrt(g * g + M * M * _ * _) * a;
      return I.toPrecisionFixed(4);
    }, f.latlon.prototype.rhumbBearingTo = function(r) {
      var a = this.lat.toRad(), l = r.lat.toRad(), h = (r.lng - this.lng).toRad(), g = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(a / 2 + Math.PI / 4));
      Math.abs(h) > Math.PI && (h = h > 0 ? -(2 * Math.PI - h) : 2 * Math.PI + h);
      var _ = Math.atan2(h, g);
      return (_.toDeg() + 360) % 360;
    }, f.latlon.prototype.rhumbDestinationPoint = function(r, a) {
      var l = s, h = parseFloat(a) / l, g = this.lat.toRad(), _ = this.lng.toRad();
      r = r.toRad();
      var y = h * Math.cos(r);
      Math.abs(y) < 1e-10 && (y = 0);
      var M = g + y, I = Math.log(Math.tan(M / 2 + Math.PI / 4) / Math.tan(g / 2 + Math.PI / 4)), m = isFinite(y / I) ? y / I : Math.cos(g), R = h * Math.sin(r) / m;
      Math.abs(M) > Math.PI / 2 && (M = M > 0 ? Math.PI - M : -Math.PI - M);
      var F = (_ + R + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return new f.latlon(M.toDeg(), F.toDeg());
    }, f.latlon.prototype.rhumbMidpointTo = function(r) {
      var a = this.lat.toRad(), l = this.lng.toRad(), h = r.lat.toRad(), g = r.lng.toRad();
      Math.abs(g - l) > Math.PI && (l += 2 * Math.PI);
      var _ = (a + h) / 2, y = Math.tan(Math.PI / 4 + a / 2), M = Math.tan(Math.PI / 4 + h / 2), I = Math.tan(Math.PI / 4 + _ / 2), m = ((g - l) * Math.log(I) + l * Math.log(M) - g * Math.log(y)) / Math.log(M / y);
      return isFinite(m) || (m = (l + g) / 2), m = (m + 3 * Math.PI) % (2 * Math.PI) - Math.PI, new f.latlon(_.toDeg(), m.toDeg());
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
      return a = a.replace(/(.+)e\+(.+)/, function(l, h, g) {
        h = h.replace(/\./, "");
        for (var _ = h.length - 1; g-- > _; ) h = h + "0";
        return h;
      }), a = a.replace(/(.+)e-(.+)/, function(l, h, g) {
        for (h = h.replace(/\./, ""); g-- > 1; ) h = "0" + h;
        return "0." + h;
      }), a;
    }), typeof String.prototype.trim > "u" && (String.prototype.trim = function() {
      return String(this).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    });
  }(ps)), ps;
}
var k0 = L0();
function O0(f) {
  return "latlon" in f;
}
class Pu {
  constructor(s) {
    /**
     * source (parent) point/data
     */
    A(this, "source");
    this.source = s;
  }
  /**
   * altitude in meters
   */
  get alt() {
    return this.source.alt;
  }
  set alt(s) {
    this.source.alt = s;
  }
  /**
   * latitude in degrees
   */
  get lat() {
    return this.source.lat;
  }
  set lat(s) {
    this.source.lat = s;
  }
  /**
   * latitude and longitude object (see sgeo)
   */
  get latlon() {
    return O0(this.source) ? this.source.latlon : new k0.latlon(this.lat, this.lon);
  }
  /**
   * longitude in degrees
   */
  get lon() {
    return this.source.lon;
  }
  set lon(s) {
    this.source.lon = s;
  }
}
class Is extends Pu {
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
function ds(f) {
  return "_course" in f;
}
class Ms extends Is {
  constructor(r, a, l) {
    super(a, a.loc, a.grade);
    A(this, "_course");
    /**
     * pacing factors at this point
     */
    A(this, "factors", new Cn());
    A(this, "_interpolated");
    /**
     * loop number (zero-indexed)
     */
    A(this, "loop");
    /**
     * source (parent) point
     */
    A(this, "source");
    this._course = r, this.loop = l, this.source = a;
  }
  /**
   * grade, scaled, as a percentage
   */
  get grade() {
    return ds(this.source) ? this.source.grade : this.source.grade * (this.source.grade > 0 ? this._course.gainScale : this._course.lossScale);
  }
  /**
   * flag for interpolated points (not part of original course)
   */
  get interpolated() {
    return (ds(this.source) ? this.source._interpolated : this._interpolated) || !1;
  }
  set interpolated(r) {
    this._interpolated = r;
  }
  /**
   * location, scaled, with loop, in kilometers
   */
  get loc() {
    if (ds(this.source)) return this.source.loc;
    let r = this.source.loc * this._course.distScale;
    return this.loop && (r += this._course.loopDist * this.loop), r;
  }
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
function D0(f, s, r) {
  f = [...f], s.interpolated && f.splice(f.findIndex((h) => h.loc > s.loc) - 1, 0, s), r.interpolated && f.splice(f.findIndex((h) => h.loc > r.loc) - 1, 0, r);
  const a = f.filter(
    (h, g) => g >= f.findIndex((_) => _ === s) && g <= f.findIndex((_) => _ === r)
  );
  console.error("rollupPointFactors", s.interpolated, r.interpolated);
  const l = a.map((h, g) => ({
    factors: h.factors,
    dist: g === a.length - 1 ? 0 : a[g + 1].loc - a[g].loc
  }));
  return l.pop(), xs(l);
}
class Ru {
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
class N0 extends Ru {
  constructor(r, a) {
    super(a);
    A(this, "_course");
    A(this, "point1");
    A(this, "point2");
    this._course = r, this.point1 = a.point1, this.point2 = a.point2;
  }
}
class B0 extends Ru {
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
    if (!(!Nr(this.point1.elapsed) || !Nr(this.point2.elapsed) || !Nr(this.point1.time) || !Nr(this.point2.time)))
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
    return this._factors || (this._factors = D0(this._plan.points, this.point1, this.point2));
  }
}
const gs = Kn("CourseSplits");
class W0 {
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
    const r = Eu(s), a = K.range(this.course.dist * r).map((h) => h / r);
    this.course.dist - a[a.length - 1] > 1e-4 && a.push(this.course.dist);
    const l = this.calcSegments(this.course.locationsToBreaks(a));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var R;
    gs.extend("calcSegments")("exec");
    const a = this.course, l = a.points, h = [], g = [];
    let _, y, M = a.points[0], I;
    for (_ = 0, y = s.length; _ < y; _++) {
      const F = s[_];
      I && qe((R = s[_ - 1]) == null ? void 0 : R.end, F.start, 4) ? M = I : M = a.getPoint(F.start), I = a.getPoint(F.end);
      const T = F.end - F.start, E = new N0(this.course, {
        gain: 0,
        loss: 0,
        grade: T > 0 ? (I.alt - M.alt) / T / 10 * (I.alt - M.alt > 0 ? a.gainScale : a.lossScale) : 0,
        point1: M,
        point2: I
      }), N = new Cn().init(0);
      h.push(E), g.push(N);
    }
    const m = (F, T, E, N) => {
      const q = E.alt - T.alt;
      F[q > 0 ? "gain" : "loss"] += q * (q > 0 ? a.gainScale : a.lossScale), As(T, a);
      const Z = E.loc - T.loc;
      N.applyEach((J, it) => J + it * Z, T.factors);
    };
    _ = 1;
    for (let F = 0; F < h.length; F++) {
      const T = h[F], E = g[F];
      for (; we(l[_].loc, T.point1.loc, 4); ) _++;
      let N = T.point1;
      for (; _ < l.length && we(l[_].loc, T.point2.loc, 4); ) {
        const q = l[_];
        m(T, N, q, E), N = q, _++;
      }
      m(T, N, T.point2, E);
    }
    return h;
  }
}
var _s = { exports: {} }, fu;
function U0() {
  return fu || (fu = 1, function(f, s) {
    (function() {
      var r = Math.PI, a = Math.sin, l = Math.cos, h = Math.tan, g = Math.asin, _ = Math.atan2, y = Math.acos, M = r / 180, I = 1e3 * 60 * 60 * 24, m = 2440588, R = 2451545;
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
        return _(a(k) * l(N) - h($) * a(N), l(k));
      }
      function Z(k, $) {
        return g(a($) * l(N) + l($) * a(N) * a(k));
      }
      function J(k, $, G) {
        return _(a(k), l(k) * a($) - h(G) * l($));
      }
      function it(k, $, G) {
        return g(a($) * a(G) + l($) * l(G) * l(k));
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
        var ft = M * -G, nt = M * $, ht = E(k), ot = Ht(ht), ct = _t(ht, ft) - ot.ra;
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
      var Ge = 9e-4;
      function $r(k, $) {
        return Math.round(k - Ge - $ / (2 * r));
      }
      function Me(k, $, G) {
        return Ge + (k + $) / (2 * r) + G;
      }
      function ze(k, $, G) {
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
        return ze(Mt, ht, ot);
      }
      Tt.getTimes = function(k, $, G, ft) {
        ft = ft || 0;
        var nt = M * -G, ht = M * $, ot = Sn(ft), ct = E(k), Mt = $r(ct, nt), Kt = Me(0, nt, Mt), Ft = St(Kt), Wt = jt(Ft), vn = Z(Wt, 0), vt = ze(Kt, Ft, Wt), Lt, kn, Ct, Ut, fn, tn, pt = {
          solarNoon: T(vt),
          nadir: T(vt - 0.5)
        };
        for (Lt = 0, kn = ye.length; Lt < kn; Lt += 1)
          Ct = ye[Lt], Ut = (Ct[0] + ot) * M, fn = _n(Ut, nt, ht, vn, Mt, Ft, Wt), tn = vt - (fn - vt), pt[Ct[1]] = T(tn), pt[Ct[2]] = T(fn);
        return pt;
      };
      function He(k) {
        var $ = M * (218.316 + 13.176396 * k), G = M * (134.963 + 13.064993 * k), ft = M * (93.272 + 13.22935 * k), nt = $ + M * 6.289 * a(G), ht = M * 5.128 * a(ft), ot = 385001 - 20905 * l(G);
        return {
          ra: q(nt, ht),
          dec: Z(nt, ht),
          dist: ot
        };
      }
      Tt.getMoonPosition = function(k, $, G) {
        var ft = M * -G, nt = M * $, ht = E(k), ot = He(ht), ct = _t(ht, ft) - ot.ra, Mt = it(ct, nt, ot.dec), Kt = _(a(ct), h(nt) * l(ot.dec) - a(ot.dec) * l(ct));
        return Mt = Mt + Bt(Mt), {
          azimuth: J(ct, nt, ot.dec),
          altitude: Mt,
          distance: ot.dist,
          parallacticAngle: Kt
        };
      }, Tt.getMoonIllumination = function(k) {
        var $ = E(k || /* @__PURE__ */ new Date()), G = Ht($), ft = He($), nt = 149598e3, ht = y(a(G.dec) * a(ft.dec) + l(G.dec) * l(ft.dec) * l(G.ra - ft.ra)), ot = _(nt * a(ht), ft.dist - nt * l(ht)), ct = _(l(G.dec) * a(G.ra - ft.ra), a(G.dec) * l(ft.dec) - l(G.dec) * a(ft.dec) * l(G.ra - ft.ra));
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
var hu = U0();
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
class $0 {
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
    const h = hu.getTimes(this.start, this.lat, this.lon), g = hu.getPosition(h.nadir, this.lat, this.lon);
    this.sun = new $0({
      nadir: Hn(h.nadir, this.timezone),
      dawn: Hn(h.dawn, this.timezone),
      sunrise: Hn(h.sunrise, this.timezone),
      dusk: Hn(h.dusk, this.timezone),
      sunset: Hn(h.sunset, this.timezone),
      noon: Hn(h.solarNoon, this.timezone),
      nadirAltitude: g.altitude * 180 / Math.PI
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
function Fu(f, s, r) {
  if (f.loc > s.loc && r > f.loc || s.loc > f.loc && r > s.loc)
    throw new Error("Input location must be between points");
  const a = Math.abs(f.loc - r), l = f.latlon.bearingTo(s.latlon), { lat: h, lng: g } = f.latlon.destinationPoint(l, a), _ = f.grade, y = me(f.loc, s.loc, f.alt, s.alt, r);
  return new Is({ lat: h, lon: g, alt: y }, r, _);
}
function q0(f, s) {
  return (typeof f == "object" ? String(f.id) : f) === (typeof s == "object" ? String(s.id) : s);
}
function Cs(f, s) {
  return !!(f && s && q0(f.site, s.site) && f.loop === s.loop);
}
class pu {
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
    return s.find((r) => r.waypoint && Cs(this, r.waypoint));
  }
}
const Br = Kn("models:Waypoint");
class vs {
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
    this._data = { percent: r.percent }, this.course = s, this.id = r.id, this.type = r.type, this.name = r.name, r.cutoffs && (this.cutoffs = r.cutoffs), r.tier !== void 0 && (this.tier = r.tier), r.description && (this.description = r.description), Br(`constructor: ${this.name}`);
  }
  /**
   * @deprecated - use a version tracker like Plan and Course
   */
  clearCache() {
    Br(`clearCache: ${this.name}`), delete this._waypoints, this._lat = NaN, this._lon = NaN, this._alt = NaN;
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
    return this._waypoints ? this._waypoints : (Br(`generating waypoints array: ${this.name}`), this.type === "finish" ? this._waypoints = [new pu(this, this.course.loops)] : this._waypoints = K.range(this.course.loops).map((s) => new pu(this, s + 1)), this._waypoints);
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
    Br("refreshLLA");
    let s, r, a;
    this.type === "start" ? { lat: s, lon: r, alt: a } = this.course.track.points[0] : this.type === "finish" ? { lat: s, lon: r, alt: a } = this.course.track.points[this.course.track.points.length - 1] : { lat: s, lon: r, alt: a } = this.course.track.getLLA(this.percent * this.course.track.dist), this._lat = s, this._lon = r, this._alt = a, this.course.version++;
  }
}
const We = Kn("models:Course"), G0 = [
  { type: "paved", value: 0 },
  { type: "dirt road", value: 4 },
  { type: "doubletrack", value: 8 },
  { type: "singletrack", value: 15 },
  { type: "technical", value: 30 }
];
class r_ {
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
    return "cutoffs" in this.cache ? this.cache.cutoffs : (this.cache.cutoffs = this.waypoints.filter((s) => s.cutoff).map((s) => new z0(s)), this.cache.cutoffs);
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
        this.points[r + s * this.track.points.length] = new Ms(
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
    if (this.cache.sites = ((s = this._data.sites) == null ? void 0 : s.map((r) => new vs(this, r))) || [
      new vs(this, {
        id: String(K.random(1e4, 2e4)),
        name: "Start",
        type: "start",
        percent: 0
      }),
      new vs(this, {
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
    return "splits" in this.cache ? this.cache.splits : (this.cache.splits = new W0(this), this.cache.splits);
  }
  /**
   * Course stats
   */
  get stats() {
    if ("stats" in this.cache) return this.cache.stats;
    We("stats:calculate");
    const s = this.track.points.map((g) => g.alt), r = this.track.points.map((g) => g.grade), a = this.terrain.map((g) => g.value / 100 + 1), l = {
      altitude: {
        avg: K.sum(
          this.track.points.map((g, _) => {
            var y;
            return g.alt * (g.loc - (((y = this.track.points[_ - 1]) == null ? void 0 : y.loc) || 0));
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
        avg: (K.sumBy(this.terrain, (g) => (g.percents[1] - g.percents[0]) * this.dist * g.value) / this.dist + 100) / 100,
        max: K.max(a) || 0,
        min: K.min(a) || 0,
        maxDist: 0,
        minDist: 0
      }
    }, h = (g) => this.terrain.reduce(
      (_, y) => y.value / 100 + 1 === g ? _ + (y.percents[1] - y.percents[0]) * this.dist : _,
      0
    );
    return Object.assign(l.terrain, {
      maxDist: h(l.terrain.max),
      minDist: h(l.terrain.min)
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
        var _, y;
        const l = K.isNumber(r.value) ? r.value : K.isString(r.value) ? ((_ = G0.find((M) => M.type === r.value)) == null ? void 0 : _.value) || 0 : r.value.value, h = typeof r == "string" ? r : K.isObject(r.value) ? r.value.type : void 0;
        return {
          value: l,
          type: h,
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
   * Finds or creates a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @returns The CoursePoint at input location.
   */
  getPoint(s) {
    const r = this.points.findIndex((y) => Ur(y.loc, s, 4)), a = this.points[r];
    if (qe(a.loc, s, 4)) return a;
    We(`getPoint: creating new CoursePoint at ${s}`);
    const l = r - 1, h = this.points[l], g = Fu(
      h.source,
      a.source,
      s % this.loopDist / this.distScale
    ), _ = new Ms(this, g, Math.floor(s / this.loopDist));
    return _.interpolated = !0, _;
  }
  locationsToBreaks(s) {
    const r = s.filter((l) => l > 0 && bs(l, this.dist, 4));
    return r.unshift(0), r.map((l, h) => ({ start: l, end: r[h + 1] || this.dist }));
  }
}
class z0 {
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
var ms = {}, du;
function H0() {
  return du || (du = 1, function(f) {
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
        return l(g(_), arguments);
      }
      function a(_, y) {
        return r.apply(null, [_].concat(y || []));
      }
      function l(_, y) {
        var M = 1, I = _.length, m, R = "", F, T, E, N, q, Z, J, it;
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
      var h = /* @__PURE__ */ Object.create(null);
      function g(_) {
        if (h[_])
          return h[_];
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
        return h[_] = I;
      }
      f.sprintf = r, f.vsprintf = a, typeof window < "u" && (window.sprintf = r, window.vsprintf = a);
    })();
  }(ms)), ms;
}
var Ss = H0();
const K0 = Kn("PaceChunk");
class Z0 {
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
    let r = s[0].elapsed, a = s[0].delay || 0, l = 0, h = 0, g = 0;
    const _ = this.factor ? this.np : this.plan.pacing.pace, y = new Cn().init(0);
    for (let M = 1, I = s.length; M < I; M++) {
      l = s[M].loc - s[M - 1].loc, $e(s[M - 1], this.plan), y.applyEach((R, F) => R + F * l, s[M - 1].factors);
      const m = s[M - 1].factors.combined;
      g += m * l, h = _ * m * l, s[M].time = s[M - 1].time + h, a = s[M - 1].delay || 0, r += h + a, s[M].elapsed = r, this.plan.event.start && (s[M].tod = this.plan.event.elapsedToTimeOfDay(r));
    }
    $e(s[s.length - 1], this.plan), this.factors = y.scaleEach(1 / this.dist), this.factor = g / this.dist;
  }
  /**
   * iterate applyPacing method until tests pass
   */
  calculate() {
    const a = K0.extend(
      Ss.vsprintf("calculate:%.2f-%.2f", [this.points[0].loc, this.points[this.points.length - 1].loc])
    );
    let l = this.factor || 0, h;
    const g = new Z0();
    for (h = 0; h < 20 && (this.applyPacing(), g.iterations = h >= 2, g.factor = !K.round(l - this.factor, 10), l = this.factor, g.target = Math.abs(
      (K.isFunction(this.constraints[1]) ? this.constraints[1]() : this.constraints[1]) - this.points[this.points.length - 1].elapsed
    ) < 0.1, a(Ss.vsprintf("%i|%s", [h, g.statusString])), !g.passing); h++)
      ;
    a("iteration complete"), this.status = {
      tests: g,
      success: g.passing,
      iterations: h + 1
    };
  }
}
const ln = Kn("Pacing");
class J0 {
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
        var h;
        return !((h = l.status) != null && h.success);
      }).length) === 0,
      chunks: ((a = this.chunks) == null ? void 0 : a.length) || 0
    };
  }
  calculate() {
    var a, l;
    const s = ln.extend("calculate");
    for (s("exec"), s("clearing cache"), this.clearCache(); this.plan.points.find((h) => h.interpolated); ) {
      const h = this.plan.points.findIndex((g) => g.interpolated);
      this.plan.points.splice(h, 1);
    }
    for (s("adding points at each terrain factor break"), (a = this.plan.course.terrain) == null || a.forEach(
      (h) => this.plan.getPoint(h.percents[0] * this.plan.course.dist, !0)
    ), s("adding points at each cutoff"), this.plan.cutoffMargin && this.plan.cutoffs.forEach((h) => {
      h.point = this.plan.getPoint(h.loc, !0);
    }), this.plan.points.filter((h) => h.delay).forEach((h) => {
      h.delay = 0;
    }), (l = this.plan.delays) == null || l.forEach((h) => {
      const g = this.plan.getPoint(h.loc, !0);
      g.delay = h.delay;
    }), s("creating pace chunks"), this.initChunks(), [null, ...K.reverse([...this.plan.cutoffs]), null].forEach((h) => {
      for (; this.chunks.find((g) => !g.status); )
        this.calcChunks(), this.validateChunks();
      if (!h) return !0;
      if (h.point.elapsed - h.time > 0.5) {
        s(`cutoff at ${h.loc} missed`);
        const g = this.chunks[0];
        K.last(g.points) === h.point ? (s(`setting cutoff at ${h.loc}`), g.constraints = [0, h.time], delete g.status) : this.splitChunk(g, h.point, h.time);
      }
    }), K.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) && this.chunks.length > 2 && (s("rerunning last chunk"), this.chunks[this.chunks.length - 1].calculate()), ln(`pacing status=${this.status.success ? "PASS" : "FAIL"}.`); this.plan.points.find((h) => h.interpolated); ) {
      const h = this.plan.points.findIndex((g) => g.interpolated);
      this.plan.points.splice(h, 1);
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
    const h = s.points.findIndex((y) => y === r), g = K.round(r.elapsed - r.time), _ = new gu(this.plan, s.points.slice(0, h + 1), [0, a], g);
    _.points.filter((y, M) => M < _.points.length - 1).forEach((y) => {
      y._chunk = _;
    }), this.chunks.unshift(_), s.constraints[0] = a, s.delay -= g, s.points = s.points.slice(h), delete s.status;
  }
  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(s, r) {
    const a = this.chunks.findIndex((h) => h === s), l = this.chunks.findIndex((h) => h === r);
    if (l - a !== 1) throw new Error("chunks must be sequential");
    ln(Ss.sprintf("calcChunks: merging %i&%i (%.2f&%.2f)", a, l, s.np, r.np)), s.points.pop(), s.points.push(...r.points), s.delay += r.delay, delete s.status, s.points.forEach((h) => {
      h._chunk = s;
    }), s.constraints = [s.constraints[0], r.constraints[1]], this.chunks.splice(l, 1);
  }
}
class _u extends Ms {
  constructor(r, a) {
    super(r.course, a, a.loop);
    A(this, "_plan");
    A(this, "_chunk");
    /**
     * delay in seconds at this point (not cumulative)
     */
    A(this, "delay", 0);
    /**
     * elapsed time in seconds
     * does not include delay from this point
     */
    A(this, "elapsed", 0);
    /**
     * pacing factors at this point
     */
    A(this, "factors", new Cn());
    /**
     * source (parent) course point
     */
    A(this, "source");
    /**
     * moving time in seconds
     */
    A(this, "time", 0);
    /**
     * time of day in seconds
     */
    A(this, "tod", 0);
    this._plan = r, this.source = a;
  }
  /**
   * combined pacing factor at this point
   */
  get factor() {
    var r;
    return (r = this.factors) == null ? void 0 : r.combined;
  }
  /**
   * normalized pace at this point (from last point) in seconds per kilometer
   */
  get np() {
    var r;
    if (!this._chunk) throw new Error("PlanPoint._chunk not defined");
    return (r = this._chunk) == null ? void 0 : r.np;
  }
  /**
   * pace at this point (from last point) in seconds per kilometer
   */
  get pace() {
    return this.np * this.factor;
  }
}
const ws = Kn("PlanSplits");
class Y0 {
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
    ws("createSegments");
    const s = this.plan.course.waypoints.filter((a) => a.tier < 3).sort((a, l) => a.loc - l.loc), r = this.calcSegments(this.plan.course.locationsToBreaks(s.map((a) => a.loc)));
    if (!r.length) throw new Error("createSegments result is empty");
    return r.forEach((a, l) => {
      a.waypoint = s[l + 1];
    }), r;
  }
  createSplits(s) {
    ws(`createSplits:${s}`);
    const r = Eu(s), a = K.range(this.plan.course.dist * r).map(
      (h) => h / r
    );
    this.plan.course.dist - a[a.length - 1] > 1e-4 && a.push(this.plan.course.dist);
    const l = this.calcSegments(this.plan.course.locationsToBreaks(a));
    if (!l.length) throw new Error("createSplits result is empty");
    return l;
  }
  calcSegments(s) {
    var F;
    ws.extend("calcSegments")("exec"), this.plan.checkPacing();
    const a = this.plan, l = a.course, h = a.points, g = [], _ = [];
    let y, M, I = a.points[0], m;
    for (y = 0, M = s.length; y < M; y++) {
      const T = s[y];
      m && qe((F = s[y - 1]) == null ? void 0 : F.end, T.start, 4) ? I = m : I = a.getPoint(T.start), m = a.getPoint(T.end);
      const E = T.end - T.start, N = new B0(this.plan, {
        gain: 0,
        loss: 0,
        grade: E > 0 ? (m.alt - I.alt) / E / 10 * (m.alt - I.alt > 0 ? l.gainScale : l.lossScale) : 0,
        point1: I,
        point2: m
      }), q = new Cn().init(0);
      g.push(N), _.push(q);
    }
    const R = (T, E, N, q) => {
      const Z = N.alt - E.alt;
      T[Z > 0 ? "gain" : "loss"] += Z * (Z > 0 ? l.gainScale : l.lossScale), $e(E, a);
      const J = N.loc - E.loc;
      q.applyEach((it, _t) => it + _t * J, E.factors);
    };
    y = 1;
    for (let T = 0; T < g.length; T++) {
      const E = g[T], N = _[T];
      for (; we(h[y].loc, E.point1.loc, 4); ) y++;
      let q = E.point1;
      for (; y < h.length && we(h[y].loc, E.point2.loc, 4); ) {
        const Z = h[y];
        R(E, q, Z, N), q = Z, y++;
      }
      R(E, q, E.point2, N), a && (E.delay = a.delays.filter((Z) => Ur(E.point1.loc, Z.loc, 4) && bs(E.point2.loc, Z.loc, 4)).reduce((Z, J) => Z + J.delay, 0));
    }
    return g;
  }
}
const zn = Kn("models:Plan");
class i_ {
  constructor(s, r) {
    A(this, "_cache", {});
    A(this, "_data");
    A(this, "course");
    A(this, "pacing", new J0(this));
    A(this, "points");
    /**
     * splits
     */
    A(this, "splits", new Y0(this));
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    A(this, "_version", 0);
    this.course = s, this._data = r, this.points = this.course.points.map((a) => new _u(this, a)), this._version = 1;
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
    this.cache.cutoffs = this.cutoffMargin ? this.course.cutoffs.map((r) => new Q0(this, r, this.getPoint(r.loc, !0))) : [];
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
      var g;
      const l = (g = this._data.delays) == null ? void 0 : g.find((_) => Cs(_.waypoint, a)), h = l ? l.delay : a.hasTypicalDelay ? this.typicalDelay : 0;
      return new X0(a, h);
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
    for (let g = 0; g < a; g++)
      [
        { event: "dawn", time: this.event.sun.dawn },
        { event: "sunrise", time: this.event.sun.sunrise },
        { event: "sunset", time: this.event.sun.sunset },
        { event: "dusk", time: this.event.sun.dusk }
      ].forEach((y) => {
        const M = y.time - r + 86400 * g;
        M >= 0 && M <= this.points[this.points.length - 1].elapsed && s.push({ event: y.event, elapsed: M });
      });
    s.sort((g, _) => g.elapsed - _.elapsed);
    const l = mu(
      this.points.map((g) => g.elapsed),
      this.points.map((g) => g.loc),
      s.map((g) => g.elapsed)
    ), h = s.map((g, _) => ({ ...g, loc: l[_] }));
    return this.cache.events = { sun: h }, this.cache.events;
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
      ve.map((h) => {
        const g = this.points.map((_) => _.factors[h]);
        return [
          h,
          {
            min: Number(K.min(g)),
            max: Number(K.max(g))
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
    return this.points.forEach((h, g) => {
      var _, y;
      a = h.loc - (((_ = this.points[g - 1]) == null ? void 0 : _.loc) || 0), l = h.elapsed - (((y = this.points[g - 1]) == null ? void 0 : y.elapsed) || 0), !isNaN(this.event.sun.dawn) && !isNaN(this.event.sun.dusk) && (h.tod <= this.event.sun.dawn || h.tod >= this.event.sun.dusk) ? (r.dark.time += l, r.dark.dist += a) : h.tod < this.event.sun.sunrise || h.tod > this.event.sun.sunset ? (r.twilight.time += l, r.twilight.dist += a) : (r.day.time += l, r.day.dist += a);
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
    return ((r = this.delays.find((a) => Cs(a.waypoint, s))) == null ? void 0 : r.delay) || 0;
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
    if (qe(l.loc, s, 4)) return l;
    zn(`getPoint: ${r ? "inserting" : "creating"} new PlanPoint at ${s}`);
    const h = a - 1, g = this.points[h], _ = new _u(this, this.course.getPoint(s));
    return _.delay = Math.round(l.elapsed - g.elapsed - (l.time - g.time)), _.time = me(g.loc, l.loc, g.time, l.time, _.loc), _.elapsed = g.elapsed + g.delay + (_.time - g.time), _.tod = this.event.elapsedToTimeOfDay(_.elapsed), $e(_, this), r && this.points.splice(a, 0, _), _;
  }
  update(s) {
    const a = ["target", "method"].find((l) => l in s && K.isNil(s[l]));
    if (a) throw new Error(`Plan.${a} cannot be set to null or undefined`);
    Object.assign(this._data, s), this._version++;
  }
}
class X0 {
  constructor(s, r) {
    A(this, "delay");
    A(this, "waypoint");
    this.waypoint = s, this.delay = r;
  }
  get loc() {
    return this.waypoint.loc;
  }
}
class Q0 {
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
const Lu = (f, s, r, a) => {
  const l = yu(f, s, r, a), h = [];
  return r.forEach((g, _) => {
    let y = l[_][0] / 10;
    y > 50 ? y = 50 : y < -50 && (y = -50);
    const M = g * l[_][0] + l[_][1];
    h.push({
      grade: y,
      alt: M
    });
  }), h;
};
function V0(f, s) {
  return Lu(
    s,
    f.map((a) => a.alt),
    s,
    0.05
  ).map((a) => a.grade);
}
const j0 = (f) => {
  let s = 0, r = 0;
  const a = [0];
  for (let l = 1, h = f.length; l < h; l++)
    s = Number(f[l - 1].latlon.distanceTo(f[l].latlon)), r += s, a.push(r);
  return a;
}, Wr = Kn("models:Track");
class Ps {
  constructor(s) {
    A(this, "dist");
    A(this, "gain");
    A(this, "loss");
    A(this, "points");
    Wr("Creating new Track object");
    const r = s.map((M) => new Pu(M)), a = j0(r), l = V0(r, a);
    this.points = r.map((M, I) => new Is(M, a[I], l[I])), Wr(`set-points - ${r.length} points`), Wr("Calculating"), this.dist = this.points[this.points.length - 1].loc;
    let h = 0, g = 0, _ = 0, y = this.points[0].alt;
    this.points.forEach((M) => {
      _ = M.alt - y, _ < 0 ? g += _ : h += _, y = M.alt;
    }), this.gain = h, this.loss = g;
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
      r = Fu(this.points[a - 1], this.points[a], s);
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
    let h = this.points.findIndex((y) => y === r), g = this.points[h], _ = 0;
    for (; a > 0.025; ) {
      const y = a / 5, M = [g];
      for (let R = 1; R <= 5; R++) {
        const F = g.loc + y * R;
        if (F <= this.dist) {
          for (; this.points[h + 1].loc < F && h < this.points.length - 1; )
            h++;
          M.push(this.points[h]);
        }
      }
      const I = M.map((R) => Number(s.distanceTo(R.latlon)));
      _ = Math.min(...I);
      const m = I.findIndex((R) => R === _);
      g = M[m], a = a / 5;
    }
    return {
      point: g,
      delta: _
    };
  }
  // if criteria is met, returns new Track object w/ reduced points
  // otherwise, returns this
  reduceDensity(s = 0.025, r = this.points.length / 2) {
    const a = Wr.extend("reduceDensity");
    if (this.dist / s > r / 2)
      return a("Does not meet criteria"), this;
    const l = this.dist, h = Math.floor(l / s) + 1, g = Array(h).fill(0).map((I, m) => Nt(m++ * s, 3));
    g[g.length - 1] < l && g.push(l);
    const _ = Lu(
      this.points.map((I) => I.loc),
      this.points.map((I) => I.alt),
      g,
      2 * s
    ), y = g.map((I) => this.getLLA(I)).map((I, m) => ({
      lat: Nt(I.lat, 6),
      lon: Nt(I.lon, 6),
      alt: Nt(_[m].alt, 2)
    })), M = new Ps(y);
    return a(`Reduced from ${this.points.length} to ${M.points.length} points.`), M;
  }
}
function s_(f, s, r) {
  const a = f.map((l, h) => ({ lat: f[h], lon: s[h], alt: r[h] }));
  return new Ps(a);
}
const a_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateToTODSeconds: Hn
}, Symbol.toStringTag, { value: "Module" }));
export {
  r_ as Course,
  z0 as CourseCutoff,
  Ms as CoursePoint,
  N0 as CourseSegment,
  Tu as Event,
  Cn as Factors,
  J0 as Pacing,
  i_ as Plan,
  _u as PlanPoint,
  B0 as PlanSegment,
  Pu as Point,
  vs as Site,
  Iu as Strategy,
  Ps as Track,
  Is as TrackPoint,
  pu as Waypoint,
  x0 as adjustStrategy,
  s_ as createTrackFromArrays,
  e_ as factors,
  Fu as interpolatePoint,
  n_ as math,
  y0 as scaleDark,
  G0 as terrainTypes,
  a_ as util
};
