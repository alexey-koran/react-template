import type { ILazyLoadInstance } from 'vanilla-lazyload';

declare global {
  interface Document {
    lazyLoadInstance: ILazyLoadInstance;
  }
}
