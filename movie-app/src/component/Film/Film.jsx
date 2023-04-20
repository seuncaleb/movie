import React from "react";

function Film ({movietitle}){


const movie =  movietitle.map((movie, index)=> {

    let url = "https://image.tmdb.org/t/p/w500/";
    let path = movie.poster_path;
    return (
    
   
    <div key ={index} className="card col-md-3" >
  <img src={url + path} class="card-img-top" alt={movie.title}/>
  <div className="card-body">
    <p className="card-text">{movie.title}.</p>
  </div>
</div>
 

    );
})



    return (
        <div>
<div className="container-flex">
    < div className="row">
{movie}
    </div>
</div>
        </div>
    )
}

export default Film;