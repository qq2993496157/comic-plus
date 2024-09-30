import { isString } from '../utils';

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

export { hsv2rgb, hsl2hsv, rgb2hsv, parseHexChannel, hsv2hsl, toHex, hexOne };
