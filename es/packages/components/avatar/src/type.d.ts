import { AvatarGroupProps } from './group.props';
import { InjectionKey, Ref } from 'vue';

export type AvatarGroupProvide = {
    props: AvatarGroupProps;
    addAvatar: (uid: number) => void;
    removeAvatar: (uid: number) => void;
    avatars: Ref<number[]>;
    showAll: Ref<boolean>;
};
export declare const AVATARGROUP_PROVIDE: InjectionKey<AvatarGroupProvide>;
