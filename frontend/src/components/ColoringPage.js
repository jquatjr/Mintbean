import { useState } from 'react';
import { Box } from '@mui/material';
import { CirclePicker } from 'react-color';
import '../styles/ColoringPage.css';
import DemoBook from './DemoBook';
import PictureSelect from './PictureSelect';
export default function ColoringPage() {
	const [ currentColor, setCurrentColor ] = useState('white');
	const [ picture, setPicture ] = useState('octopus');
    const colors = ['#f44336','#e91e63',"#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800", "#ff5722", "#735548", "#607db8" ,'#222222']
	const availablePics = [
		'octopus',
		'mickey-beach',
		'Elephant',
		'cover',
		'page1',
		'page2'
	];
	const handlePictureChange = (e) => {
		setPicture(e.target.value);
	};
	const handleChangeColor = (color) => {
		setCurrentColor(color.hex);
	};
	return (
		<Box sx={{ paddingTop: '1rem', height: '100vh' }}>
			<Box sx={{ width: '100%'}}>
				<Box sx={{margin:'auto', paddingRight:'3rem'}}>
					<PictureSelect
                        
						picture={picture}
						handlePictureChange={handlePictureChange}
						availablePics={availablePics}
					/>
				</Box>
				<Box sx={{width:"100%", paddingLeft: "13rem"}}>
					
					<CirclePicker
                        width="100%"
						className="ColoringPage-sketch"
						direction={"horizontal"}
                        circleSize={50}
                        colors={colors}
						color={currentColor}
						onChangeComplete={handleChangeColor}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					width: '80%',
                    marginTop:"-5rem"
				}}
			>
				<DemoBook book={null} currentColor={currentColor} />
			</Box>
		</Box>
	);
}
