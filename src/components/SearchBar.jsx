import Search from 'antd/es/input/Search';
import { useState } from 'react';
function SearchBar({ search }) {
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    setQuery(e.target.value);
    search(e.target.value);
  };
  return (
    <Search
      type="text"
      placeholder="Search foods"
      value={query}
      onChange={handleSearch}
    ></Search>
  );
}

export default SearchBar;
