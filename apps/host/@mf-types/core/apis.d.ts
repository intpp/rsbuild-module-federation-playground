
    export type RemoteKeys = 'core/Name' | 'core/HeroSection';
    type PackageType<T> = T extends 'core/HeroSection' ? typeof import('core/HeroSection') :T extends 'core/Name' ? typeof import('core/Name') :any;