import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    // 검색 로직을 추가
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="영화 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          찾기
        </button>
      </form>
    </div>
  );
};

export default Search;
