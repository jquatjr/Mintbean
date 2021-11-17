import {useState} from 'react'
import {Box, Typography, Paper} from '@mui/material'
import {SketchPicker} from 'react-color'
import '../styles/ColoringPage.css'
import SVG from "./SVG"
export default function ColoringPage(){
    const [currentColor, setCurrentColor] = useState("white")
    const handleChangeColor = (color) => {
        setCurrentColor(color.hex)
       
    }
    
    return (
        <Box sx={{display: 'flex'}}>
        <Paper sx={{width: "60%", height: "95vh", margin: '1rem'}}>
        <SVG name={"octopus"} currentColor={currentColor} />
        </Paper>
        <Box sx={{width:"25%", height:"100vh", margin:"2rem"}}>
            color selector
            <SketchPicker className="ColoringPage-sketch" width="100%"  disableAlpha={true} color={currentColor} onChangeComplete={handleChangeColor} />
        </Box>

        </Box>
    )
}

// "M159.058,24.09c-6.107-5.596-9.423-13.925-18.933-15.536
	// c-1.776-0.301-3.318,0.742-5.342-0.485c9.364-3.204,14.33,2.884,18.936,7.768C155.531,17.759,157.962,21.294,159.058,24.09z"