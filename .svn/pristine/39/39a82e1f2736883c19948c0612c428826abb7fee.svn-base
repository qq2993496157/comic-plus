import { InjectionKey, Ref } from 'vue';
import { AvatarGroupProps } from './group.props';

export type AvatarGroupProvide = {
  props: AvatarGroupProps;
  addAvatar: (uid: number) => void;
  removeAvatar: (uid: number) => void;
  avatars: Ref<number[]>;
  showAll: Ref<boolean>;
};

export const AVATARGROUP_PROVIDE: InjectionKey<AvatarGroupProvide> = Symbol('AVATARGROUP_PROVIDE');
