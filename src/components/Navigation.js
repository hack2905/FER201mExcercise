import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <div className='box'>
            {/* <div className='back-ground'> */}
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul>
                        <li><a className='active' href='#Home'>Home</a></li>
                        <li><a className='active' href='#Contact'>Contact</a></li>
                        <li><a className='active' href='#About'>About</a></li>
                        <li><a className='active' href='#Year'>Year</a></li>
                    </ul>
                    <div className='switch-color' style={{ position: 'relative' }}>
                        <a className='switch-mode' href='#' onClick={toggle}
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none',
                                float: 'right'
                            }} data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </div>
                </nav>
            {/* </div> */}
        </div>
    )
}