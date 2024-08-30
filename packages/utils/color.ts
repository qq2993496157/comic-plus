import { isString, isNumber } from '../utils';
/**
 * @description: 任意颜色转rgba
 * @param {any} color
 * @return {*}
 */
const colorToRgba = (color: any): number[] | never => {
  if (!color) {
    return undefined;
  }
  let rgba: number[] = [];

  if (color[0] === '#') {
    color = color.slice(1);
    if (color.length === 3) {
      color = color.replace(/./g, '$&$&');
    }
    let alpha = 1;
    if (color.length === 8) {
      alpha = parseInt(color.substring(6, 8), 16) / 255;
    }
    rgba = [
      parseInt(color.substring(0, 2), 16),
      parseInt(color.substring(2, 4), 16),
      parseInt(color.substring(4, 6), 16),
      alpha
    ];
  } else if (color.toLowerCase().startsWith('rgb(') || color.toLowerCase().startsWith('rgba(')) {
    rgba = color.match(/\d+(\.\d+)?/g).map(Number);

    if (rgba.length === 3) {
      rgba.push(1);
    }
  } else if (color.toLowerCase().startsWith('hsl(') || color.toLowerCase().startsWith('hsla(')) {
    let hsl = color.match(/\d+(\.\d+)?/g).map(Number);

    let h = hsl[0] / 360;
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;

    if (s === 0) {
      rgba = [l * 255, l * 255, l * 255, isNumber(hsl[3]) ? hsl[3] : 1];
    } else {
      let hue2rgb = function hue2rgb(p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;

      rgba = [
        hue2rgb(p, q, h + 1 / 3) * 255,
        hue2rgb(p, q, h) * 255,
        hue2rgb(p, q, h - 1 / 3) * 255,
        isNumber(hsl[3]) ? hsl[3] : 1
      ];
    }
  }

  rgba[0] = Math.round(rgba[0]);
  rgba[1] = Math.round(rgba[1]);
  rgba[2] = Math.round(rgba[2]);

  return rgba;
};

/**
 * @description: rgba颜色混合
 * @param {number} rgba
 * @param {number} deep
 * @param {boolean} reverse
 * @return {*}
 */
const colorBlend = (rgba: number[], deep: number, reverse?: boolean): string => {
  if (!rgba) return '';

  let blendAmountNormalized = deep / 100;

  let blendedR = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[0]);
  let blendedG = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[1]);
  let blendedB = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[2]);

  return `rgba(${blendedR}, ${blendedG}, ${blendedB}, 1)`;
};
const colorBlendArray = (rgba: number[], deep: number, reverse?: boolean): number[] => {
  if (!rgba) return [];

  let blendAmountNormalized = deep / 100;

  let blendedR = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[0]);
  let blendedG = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[1]);
  let blendedB = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[2]);

  return [blendedR, blendedG, blendedB];
};

const hsv2hsl = function (hue: number, sat: number, val: number) {
  return [hue, (sat * val) / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};
const isOnePointZero = function (n: unknown) {
  return isString(n) && n.includes('.') && Number.parseFloat(n) === 1;
};

const isPercentage = function (n: unknown) {
  return isString(n) && n.includes('%');
};

const bound01 = function (value: number | string, max: number | string) {
  if (isOnePointZero(value)) value = '100%';
  const processPercent = isPercentage(value);
  value = Math.min(max as number, Math.max(0, Number.parseFloat(`${value}`)));
  if (processPercent) {
    value = Number.parseInt(`${value * (max as number)}`, 10) / 100;
  }
  if (Math.abs(value - (max as number)) < 0.000001) {
    return 1;
  }
  return (value % (max as number)) / Number.parseFloat(max as string);
};

const INT_HEX_MAP: Record<string, string> = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
};

const hexOne = (value: number) => {
  value = Math.min(Math.round(value), 255);
  const high = Math.floor(value / 16);
  const low = value % 16;
  return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`;
};

const toHex = function ({ r, g, b }: { r: number; g: number; b: number }) {
  if (Number.isNaN(+r) || Number.isNaN(+g) || Number.isNaN(+b)) return '';
  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`;
};

const HEX_INT_MAP: Record<string, number> = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

const parseHexChannel = function (hex: string) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

const hsl2hsv = function (hue: number, sat: number, light: number) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);

  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (light + sat) / 2;
  const sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

const rgb2hsv = (r: number, g: number, b: number) => {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number;
  const v = max;

  const d = max - min;
  const s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h! /= 6;
  }

  return { h: h! * 360, s: s * 100, v: v * 100 };
};

const hsv2rgb = function (h: number, s: number, v: number) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

export { colorToRgba, colorBlend, colorBlendArray, hsv2rgb, hsl2hsv, rgb2hsv, parseHexChannel, hsv2hsl, toHex, hexOne };
