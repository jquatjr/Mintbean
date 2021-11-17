import {Routes, Route} from 'react-router-dom'
import ColoringPage from './ColoringPage'
export default function UserRoutes(){
    return (
        <Routes>
            <Route path="/" element={<h1>LANDING PAGE</h1>}/>
            <Route path="/color" element={<ColoringPage/>}/>
        </Routes>
    )
}