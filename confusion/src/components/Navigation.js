import React, { Component } from 'react'
export default class Navigation extends Component {
    return (
        <nav>
      <ul>
          <li><a className='active' href='#home'>Home</a></li>
          <li><a href='#news'>News</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
      )
    
    // render() {
    //     return (
    //         <div className='back-ground'>
    //             <nav>
    //                 <ul>
    //                     <a className='active' href='#home'>Home</a>
    //                     <a className='active' href='#news'>News</a>
    //                     <a className='active' href='#about'>About</a>
    //                     <a className='active' href='#contact'>Contact</a>
    //                 </ul>
    //             </nav>
    //         </div>
    //     )
    // }
}