import { CSSProperties, ComputedRef, InjectionKey } from 'vue';
import type { PistolProps } from './main.props';

export type BulletInstance = {
  sign: string;
  uid: number;
  style?: CSSProperties;
};

export type Bullets = {
  [key in string]: BulletInstance;
};

export type PistolProvide = {
  props: PistolProps;
  bullets: Bullets;
  pistolStyle: ComputedRef<CSSProperties>;
  addBullet: (item: BulletInstance) => void;
  removeBullet: (uid: number) => void;
  itemHandleClick: (sign?: string) => void;
};

export const PISTOL_PROVIDE: InjectionKey<PistolProvide> = Symbol('PISTOL_PROVIDE');
