import { PistolProps } from './main.props';
import { CSSProperties, ComputedRef, InjectionKey } from 'vue';

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
export declare const PISTOL_PROVIDE: InjectionKey<PistolProvide>;
