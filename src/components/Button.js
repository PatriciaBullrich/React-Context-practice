import React from 'react'
import {useColorUpdate} from "./ColorProvider";
function Button() {
    const toggleColor = useColorUpdate();
    return  <button style={{margin:' 0 auto', display: 'block', marginTop: '1rem'}} onClick={toggleColor}>Change color</button>
}

export default Button
