import React, { FormEvent, RefObject, useContext, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import { fetchSearch, getSearch } from '../../redux/movies/movieSlice';
import { useAppDispatch } from '../../redux';
import { useSelector } from 'react-redux';

import './search.scss';
import { SearchContext } from '../../context/Context';
const Search = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(getSearch);
  const value = useContext(SearchContext);
  const searchRef: RefObject<HTMLInputElement> = React.useRef(null);

  const handleSearch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchRef?.current) {
      const searchText: string = searchRef.current?.value;
      dispatch(fetchSearch(searchText));
      value?.setSearch(data);
      console.log(searchText);
      if (searchRef.current) searchRef.current.value = '';
    }
  };
  useEffect(() => {
    console.log('setValue ', value?.search);
  }, [value?.search]);
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
