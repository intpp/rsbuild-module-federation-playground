import type React from 'react';
import NameContext from './NameContext.ts';

export interface NameProviderProps {
  name: string;
  children: React.ReactNode;
}

const NameProvider: React.FC<NameProviderProps> = ({ name, children }) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export default NameProvider;
