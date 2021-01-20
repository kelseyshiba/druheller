import React from 'react';
import heller1 from '../images/heller1.jpg';
import heller2 from '../images/heller2.jpg';
import heller3 from '../images/heller3.jpg';
import hellersign from '../images/hellersign.png';

const Banner = () => (
    <div id='banner'>
        <div id='hellerphotos'>
            <img src={heller1} alt='heller 1'/>
            <img src={heller2} alt='heller 2'/>
            <img src={heller3} alt='heller 3'/>
        </div>
        <h1 id='bannerName'>DRU HELLER</h1>
        <h3 id='bannerText'>Drummer • Artist • Educator • Clinician</h3>
        <div id='signature'>
            <img src={hellersign} alt='heller signature'/>
        </div>
    </div>
)

export default Banner;