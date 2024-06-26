import { isNumber } from '../utils';

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

const colorBlend = (rgba: number[], deep: number, reverse?: boolean): string => {
  if (!rgba) return '';

  let blendAmountNormalized = deep / 100;

  let blendedR = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[0]);
  let blendedG = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[1]);
  let blendedB = Math.round((1 - blendAmountNormalized) * (reverse ? 0 : 255) + blendAmountNormalized * rgba[2]);

  return `rgba(${blendedR}, ${blendedG}, ${blendedB}, 1)`;
};

export { colorToRgba, colorBlend };
