import { useEffect, useState } from "react";
import Suggestions from "./suggestion";

export default function SearchAutocomplete() {
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
      setFilteredUsers([]);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setShowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  };

  const fetchListofUsers = async () => {
    try {
      setloading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setloading(false);
        setError(null);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      setError(error);
    }
  };

  console.log(filteredUsers);

  useEffect(() => {
    fetchListofUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data ! please wait</h1>
      ) : (
        <input
          name="search-users"
          value={searchParam}
          type="text"
          placeholder="Search Users Here..."
          onChange={handleChange}
        />
      )}
      {showDropDown ? (
        <Suggestions onClick={handleClick} data={filteredUsers} />
      ) : null}
    </div>
  );
}
