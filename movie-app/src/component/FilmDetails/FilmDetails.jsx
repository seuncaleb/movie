import React from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {

 const params =   useParams()
 const filmId = params.filmId
    return (

        <div>
fresh{filmId}
        </div>
    )
}

export default FilmDetails