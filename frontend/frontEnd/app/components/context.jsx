import { createContext, useContext } from 'react';

const DataContext = createContext(null);

export function useDataContext() {
  return useContext(DataContext);
}

export default DataContext;
