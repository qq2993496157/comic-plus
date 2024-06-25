import UploadInstance from '../utils/upload';

export { UploadInstance };

export type UploadFile = {
  name: string;
  url: string;
  uid?: number;
  [key: string]: any;
};

export type FileEnum = {
  [key: number]: UploadInstance;
} & UploadInstance;

export type Fileoption = {
  file: File;
  data?: object;
  headers?: object;
  http?: string | Function;
  withCredentials?: boolean;
  status: string;
  name: string;
  url: string;
  uid?: number;
  success?: Function;
  fail?: Function;
  complate?: Function;
};

export type UploadError = {
  status: number;
  method: string;
  url: string;
} & Error;
