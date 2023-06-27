import { useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilms";
import ModalCase from "./ModalCase";
import { useState } from "react";

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });

   let cost = Films.toLocaleString;
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='badge'>{film.name}</div>
    	<div className='product-tumb'>
    		<img src={`../${film.img}`} alt=''/>
    	</div>
    	<div className='product-details'>
        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red" id="video">
                            video 
                        </a>
                        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        	<h4>{film.club}</h4>
      		<p>{film.info}</p>              
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )
}