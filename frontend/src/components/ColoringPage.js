import {useState} from 'react'
import {Box, Typography, Paper} from '@mui/material'
import {SketchPicker} from 'react-color'
import '../styles/ColoringPage.css'
import SVG from "./SVG"
import DemoBook from './DemoBook'
import PictureSelect from './PictureSelect'
export default function ColoringPage(){
    const [currentColor, setCurrentColor] = useState("white")
    const [picture, setPicture] = useState("octopus")
    const availablePics = ["octopus", "mickey-beach", "Elephant","cover","page1", "page2"]
    const handlePictureChange = (e)=> {
        setPicture(e.target.value)
    
    }
    const handleChangeColor = (color) => {
        setCurrentColor(color.hex)
       
    }
    return (
        <Box sx={{display: 'flex', paddingTop: '5rem', height:"100vh"}}>
        <Paper sx={{width: "60%", position:"relative", margin: '0 1rem 0 1rem', padding:"2rem"}}>
        {/* <SVG name={picture} currentColor={currentColor} /> */}
        <DemoBook book={null} currentColor={currentColor}/>
        </Paper>
        <Box sx={{width:"25%", height:"100vh", margin:"1rem"}}>
            color selector
            <SketchPicker className="ColoringPage-sketch" width="100%"  disableAlpha={true} color={currentColor} onChangeComplete={handleChangeColor} />
            <PictureSelect picture={picture} handlePictureChange={handlePictureChange} availablePics={availablePics}/> 
        </Box>

        </Box>
    )
}
