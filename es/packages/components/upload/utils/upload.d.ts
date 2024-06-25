import { Fileoption, UploadError } from '../src/type';

export declare function getUid(): number;
export declare function parseFileSize(fileSizeStr?: string): number;
export default class UploadInstance {
    private _headers;
    private _http;
    private _data;
    private _withCredentials;
    private _success;
    private _fail;
    name: string;
    url: string;
    uid: number;
    file: {
        name: string;
        url?: string;
    };
    progress: number;
    status: string;
    constructor(options: Fileoption);
    onProgress(e: number): void;
    onSuccess(results: any): void;
    onError(err: UploadError): void;
    upload(): void;
}
