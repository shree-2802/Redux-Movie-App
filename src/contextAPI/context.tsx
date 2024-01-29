import { createContext, useState } from 'react';
import { ChildrenProps, SearchContextType } from '../Types/types';
export const SearchContext = createContext<SearchContextType | null>(null);
const Context = ({ children }: ChildrenProps) => {
  const [search, setSearch] = useState(false);
  const value: SearchContextType = {
    search,
    setSearch,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default Context;
