import React,{ Component} from 'react';
export default class Navigation extends Component {
    render(){
        return (
            <div className='back-ground'>
                <nav>
                <a className='active' href='#home'>Home</a>
                <a className='active' href='#news'>Film</a>
                <a className='active' href='#about'>About</a>
                <a className='active' href='#contact'>Series</a>
                <a className='active' href='#contact'>Years</a>

                </nav>
            </div>
        )
    }
}