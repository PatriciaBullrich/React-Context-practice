import React from 'react'
import { useColor } from '../components/ColorProvider'
function About() {
    const color = useColor();
    return (
        <>
        <h1>Another page</h1>
        <h2> The color of the box is: {color}</h2>  
        </>
    )
}

export default About
