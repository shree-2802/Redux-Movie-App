import { createContext, useState } from 'react';
import { searchType, ChildrenProps, SearchContextType } from '../Types/types';

export const SearchContext = createContext<SearchContextType | null>(null);

const Context = ({ children }: ChildrenProps) => {
  const [search, setSearch] = useState<searchType | null>(null);

  const value: SearchContextType = {
    search: search,
    setSearch: setSearch,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default Context;
