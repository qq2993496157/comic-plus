import { ObjectDirective, App } from 'vue';

declare const useInfiniteScroll: () => ObjectDirective;
declare const vInfiniteScroll: {
    install: (app: App) => void;
};
export { useInfiniteScroll, vInfiniteScroll };
