import {Paper, Box, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router'
export default function LandingPage(){
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate("/color")
    }
    const handleClick2 = ()=> {
        navigate("/my-pictures")
    }
    return (
        <Box sx={{paddingTop: '10rem'}}>
            <Paper sx={{width:"50%", margin: 'auto', height: "50%", padding: '5rem'}}>
                <Typography sx={{marginBottom:"2rem"}} variant="h3">
                    Landing Page
                </Typography>

                <Button variant="contained" onClick={handleClick}>
                    Coloring Page
                </Button>
                <Button variant="contained" onClick={handleClick2}>
                    My pictures
                </Button>
            </Paper>
        </Box>
    )
}