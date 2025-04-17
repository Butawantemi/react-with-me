import { useEffect, useState } from "react";
import User from "./user";
import './styles.css'

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Butawantemi");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setLoading(false);
      setUserData(data);
      setUserName("");
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h2>Loading Data ! Please Wait</h2>;
  }

  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          placeholder="Search Github Username.."
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
