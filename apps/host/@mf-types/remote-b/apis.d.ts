
    export type RemoteKeys = 'remote-b/App';
    type PackageType<T> = T extends 'remote-b/App' ? typeof import('remote-b/App') :any;