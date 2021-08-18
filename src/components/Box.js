import React from 'react'
import { useColor } from './ColorProvider'




function Box() {
    const bgColor = useColor();
    const boxStyle = {
        backgroundColor: `#${bgColor}`,
        width: '400px',
        height: '400px',
        padding: '2rem',
        margin: '0 auto',
        display: 'block',     
        marginTop: '2rem'   
    }

    return (
        <div style={boxStyle}>
        </div>
    )
}

export default Box
