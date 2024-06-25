import { LoadingService } from './src/loading';
import { ObjectDirective, App } from 'vue';

declare const useLoading: () => ObjectDirective;
declare const vLoading: {
    install: (app: App) => void;
};
declare const CuLoading: {
    service: typeof LoadingService;
};
export { vLoading, CuLoading, useLoading };
