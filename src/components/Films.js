import React, {Component} from 'react'
import { Films } from "../shared/listOfFilms";
export default class films extends Component{
    render() {
        return (
            <div className='container'>
                {Films.map((films) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={films.img} />
                            <h3>{films.name}</h3>
                            <p className='title'>{films.type}</p>
                            <p className="but"><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }}