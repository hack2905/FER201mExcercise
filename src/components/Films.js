import React, { useContext } from "react";
import { Films } from "../shared/ListOfFilms";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Film(){
  const [films, setFilms] = useState([]);
    return (
    <div className='container'>
        {Films.map((films)=>(
           <div className='column'>
           <div className='card'>
           <img src={films.img}/>
             <h3>{films.name}</h3>
             <p className='title'>{films.club}</p>
             <Link to={`detail/${films.id}`}>
             <p><button onClick={()=>{setFilms(films)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
           </Link>
           </div>
         </div>
        ))}
        <div id ='popup1' className='overlay'>
          <div className='popup'>
            <img src={films.img}/>
            <h2>{films.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {films.info}
            </div>
          </div>
        </div>
    </div>
  )
}