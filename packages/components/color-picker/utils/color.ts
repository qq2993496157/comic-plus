import { hasOwn } from '@vue/shared';
import { isObject } from '../../../utils';
import { hsv2rgb, hsl2hsv, rgb2hsv, parseHexChannel, hsv2hsl, toHex, hexOne } from '../../../utils';

type ColorOptions = {
  enableAlpha: boolean;
  format: string;
  value?: string;
};

export default class Color {
  private _hue = 0;
  private _saturation = 0;
  private _value = 100;
  _alpha = 100;
  public enableAlpha = false;
  public format = 'hex';
  public value = '';
  public selected?: boolean;

  constructor(options: Partial<ColorOptions> = {}) {
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option];
      }
    }
    if (options.value) {
      this.fromString(options.value);
    } else {
      this.doOnChange();
    }
  }

  set(prop: { [key: string]: any } | any, value?: number) {
    if (arguments.length === 1 && isObject(prop)) {
      for (const p in prop) {
        if (hasOwn(prop, p)) {
          this.set(p, prop[p]);
        }
      }

      return;
    }

    (this as any)[`_${prop}`] = value;
    this.doOnChange();
  }

  get(prop: string) {
    if (prop === 'alpha') {
      return Math.floor(this[`_${prop}`]);
    }
    return (this as any)[`_${prop}`];
  }

  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  }

  fromString(value: string) {
    if (!value) {
      this._hue = 0;
      this._saturation = 0;
      this._value = 100;

      this.doOnChange();
      return;
    }

    const fromHSV = (h: number, s: number, v: number) => {
      this._hue = Math.max(0, Math.min(360, h));
      this._saturation = Math.max(0, Math.min(100, s));
      this._value = Math.max(0, Math.min(100, v));

      this.doOnChange();
    };

    if (value.includes('hsl')) {
      const parts = value
        .replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val, index) => (index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10)));

      if (parts.length === 4) {
        // @ts-expect-error
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes('hsv')) {
      const parts = value
        .replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val, index) => (index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10)));

      if (parts.length === 4) {
        // @ts-expect-error
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.includes('rgb')) {
      const parts = value
        .replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val, index) => (index > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10)));

      if (parts.length === 4) {
        // @ts-expect-error
        this._alpha = Number.parseFloat(parts[3]) * 100;
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.includes('#')) {
      const hex = value.replace('#', '').trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)) return;
      let r: number, g: number, b: number;

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.slice(0, 2));
        g = parseHexChannel(hex.slice(2, 4));
        b = parseHexChannel(hex.slice(4, 6));
      }

      if (hex.length === 8) {
        this._alpha = (parseHexChannel(hex.slice(6)) / 255) * 100;
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }

      const { h, s, v } = rgb2hsv(r!, g!, b!);
      fromHSV(h, s, v);
    }
  }

  compare(color: this) {
    return (
      Math.abs(color._hue - this._hue) < 2 &&
      Math.abs(color._saturation - this._saturation) < 1 &&
      Math.abs(color._value - this._value) < 1 &&
      Math.abs(color._alpha - this._alpha) < 1
    );
  }

  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format } = this;

    if (this.enableAlpha) {
      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${
            this.get('alpha') / 100
          })`;
          break;
        }
        case 'hsv': {
          this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${this.get('alpha') / 100})`;
          break;
        }
        case 'hex': {
          this.value = `${toHex(hsv2rgb(_hue, _saturation, _value))}${hexOne((_alpha * 255) / 100)}`;
          break;
        }
        default: {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgba(${r}, ${g}, ${b}, ${this.get('alpha') / 100})`;
        }
      }
    } else {
      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
          break;
        }
        case 'hsv': {
          this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
          break;
        }
        case 'rgb': {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgb(${r}, ${g}, ${b})`;
          break;
        }
        default: {
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
        }
      }
    }
  }
}
