
    export type RemoteKeys = 'remote-a/BridgeApp' | 'remote-a/App';
    type PackageType<T> = T extends 'remote-a/App' ? typeof import('remote-a/App') :T extends 'remote-a/BridgeApp' ? typeof import('remote-a/BridgeApp') :any;