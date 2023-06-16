import React, { useContext } from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { ThemeContext } from "./ThemeConText";
export default function Player(){
  const [player, setPlayer] = useState([]);
  const {theme, toggle ,dark } = useContext(ThemeContext)
    return (
    <div className='container'>

        {Players.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img src={player.img}/>
             <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <Link to={`detail/${player.id}`}>
             <p><button onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
           </Link>
           </div>
         </div>
        ))}
        <div id ='popup1' className='overlay'>
          <div className='popup'>
            <img src={player.img}/>
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {player.info}
            </div>
          </div>
        </div>
    </div>
  )
}