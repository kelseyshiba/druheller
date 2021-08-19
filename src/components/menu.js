import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div className="menu" style={{
        paddingTop: '20px'
    }} id='menu'>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            <li><Link to='/about'>About</Link></li> 
            <li><Link to='/live'>Live</Link></li> 

            <li><h3><Link to='/'>Dru Heller</Link></h3></li>
            
            <li><Link to='/media'>Media</Link></li> 
            <li><Link to='/lessons'>Lessons</Link></li> 
            <li><Link to='/contact'>Contact</Link></li> 
        </ul>        
    </div>
)

export default Menu;