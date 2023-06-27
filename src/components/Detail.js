import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'

export default function Detail() {
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
        	<h4>{film.club}</h4>
      		
      		<p>{film.info}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )
}