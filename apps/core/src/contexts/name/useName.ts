import { useContext } from 'react';
import NameContext from './NameContext.ts';

const useName = () => {
  return useContext(NameContext);
};

export default useName;
