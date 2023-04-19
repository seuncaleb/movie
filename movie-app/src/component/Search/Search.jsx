import React from "react";
import { useState } from "react";
import "./search.css";

function Search({ setMovietitle, movietitle}) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setMovietitle(search);
  };

  return (
    <div className="input-div">
      <input
        type="text"
        placeholder="What movie are you searching for?"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-outline-success my-2"
        onClick={submit}
      >
        Let's Find your movie
      </button>
    </div>
  );
}

export default Search;
