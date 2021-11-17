import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import {
    Box, 
    Typography, 
    AppBar, 
    Button,
    Toolbar} from '@mui/material'
export default function Navbar(){
    const navigate = useNavigate()
    const loggedIn = false; 
    const loginButtons =
        <Box sx={{display: "flex", justifyContent:"flex-end", flexGrow: 1}}>
            <Typography  sx={{marginRight:"1rem"}} className="Navbar-link">
                Login
            </Typography>
            <Typography  className="Navbar-link">
                Register
            </Typography>
        </Box>
    const logoutButtons = 
        <Box sx={{display: "flex", justifyContent:"flex-end", flexGrow: 1}}>
            <Typography  sx={{marginRight:"1rem"}} className="Navbar-link">
                Logout
            </Typography>
            <Typography  className="Navbar-link">
                My Pictures
            </Typography>
        </Box>
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="Navbar" position="static">
                    <Toolbar >
                    <Typography className="Navbar-link" onClick={()=> navigate("/")} align="left" variant="h6" component="div" >
                        CleverTitle
                    </Typography >
                        { loggedIn ? logoutButtons : loginButtons }
                    </Toolbar>
                </AppBar>
            </Box>
        )
}