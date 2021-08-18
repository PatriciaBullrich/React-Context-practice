import React,{useContext, useState} from 'react'
const ColorContext = React.createContext();
const ColorUpdateContext = React.createContext();

const giveRandomColor = () => Math.floor(Math.random()*16777215).toString(16);

export const useColor = () => useContext(ColorContext);
export const useColorUpdate = () => useContext(ColorUpdateContext);

function ColorProvider({children}) {
    const [bgColor, setColor] = useState(giveRandomColor());


    const toggleColor = () => {
        setColor(giveRandomColor());
    }
    return (
        <ColorContext.Provider value={bgColor}>
            <ColorUpdateContext.Provider value={toggleColor}>
                {children}
            </ColorUpdateContext.Provider>  
        </ColorContext.Provider>            
    
    )
  
}





export default ColorProvider
