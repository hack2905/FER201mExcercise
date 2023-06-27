import React from "react";

export default function FilmsPresentation({films}) {
   return (
    <div className='container'>
       {films.map((films)=>(
       <div className='column'>
       <div className='card'>
       <img src={films.img}/>
         <h3>{films.name}</h3>
         <p className='title'>{films.club}</p>
         <p><button>
              Detail
            </button>
            </p>
       </div>
     </div>
    ))}
    </div>   
 )
}