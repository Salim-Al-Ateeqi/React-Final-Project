import React from "react";

function SearchBar({ setQuery }) {
  return (
    <input
      className="searchBar"
      placeholder="Search for a Jam3iya"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
