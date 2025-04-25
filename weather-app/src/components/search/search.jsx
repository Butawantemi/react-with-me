const Search = ({ search, setSearch, handleSummit }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Here..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSummit}>Search</button>
    </div>
  );
};

export default Search;
