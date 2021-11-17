import {Routes, Route} from 'react-router-dom'
import ColoringPage from './ColoringPage'
import LandingPage from './LandingPage'
export default function UserRoutes(){
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/color" element={<ColoringPage/>}/>
        </Routes>
    )
}