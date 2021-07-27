import React from 'react'

const copyrightDate = new Date().getFullYear();

const Footer = () => (
    <div style={{ 
        background: '#f4f4f4',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
    }}>
        <div align="center">© {copyrightDate} by 
            <a href='https://shibadeveloper.com'> Shiba Developer </a>
        </div>
    </div>
)

export default Footer;
