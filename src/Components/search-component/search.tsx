import React, { FormEvent, RefObject } from 'react';
import { FcSearch } from 'react-icons/fc';
import { fetchSearch, removeSearch } from '../../redux/movies/movieSlice';
import { useAppDispatch } from '../../redux';
import { useContext } from 'react';

import './search.scss';
import { SearchContext } from '../../contextAPI/context';
const Search = () => {
  const dispatch = useAppDispatch();
  const searchClick = useContext(SearchContext);
  const searchRef: RefObject<HTMLInputElement> = React.useRef(null);

  const handleSearch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchClick?.setSearch(true);
    if (searchRef?.current) {
      dispatch(removeSearch());
      const searchText: string = searchRef.current?.value;
      dispatch(fetchSearch(searchText));
      console.log(searchText);
      if (searchRef.current) searchRef.current.value = '';
    }
  };

  return (
    <form className='app__search'>
      <input
        type='text'
        placeholder='search'
        spellCheck={false}
        ref={searchRef}
      />
      <button type='submit' onClick={handleSearch}>
        <FcSearch />
      </button>
    </form>
  );
};

export default Search;
