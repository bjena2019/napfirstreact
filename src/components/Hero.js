import React from 'react'
import Herotitle from './Herotitle';
var htitle = "hero One";

export default function Hero() {
    return (
        <header>
            <Herotitle title={htitle}></Herotitle>
            <img src="https://wallpaperaccess.com/full/30100.jpg" />
        </header>
    )
}

Hero.defaultProps={
    hero:"defaultHero"
}