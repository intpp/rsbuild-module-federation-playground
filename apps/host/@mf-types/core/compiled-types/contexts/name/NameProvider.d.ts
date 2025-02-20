import type React from 'react';
export interface NameProviderProps {
    name: string;
    children: React.ReactNode;
}
declare const NameProvider: React.FC<NameProviderProps>;
export default NameProvider;
