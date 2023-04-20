import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

function Search({ setMovietitle, movietitle }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  



  const fetchMovie = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7905408ff436151dd32243b7c05ced3d&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovietitle(data.results);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    fetchMovie(search);
    let path = "/film";
    navigate(path);
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
