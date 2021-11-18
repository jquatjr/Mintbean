import HTMLFlipBook from 'react-pageflip';
import { Box, Button } from '@mui/material';
import SVG from './SVG';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getColoringsFromAPI } from '../actions/actions';

const DemoBook = ({ currentColor }) => {
	const book = useRef();
	const reqSvgs = require.context('../assets', true, /\.svg$/);
	const allSvgFilepaths = reqSvgs.keys();
    const svgOne = allSvgFilepaths[0]
	const user = useSelector((store) => store.userReducer.user);
    const userId = useSelector(store => store.userReducer.id)
	const svgs = reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));
    let name = "book name"
    const getColorings = async() => {
        let image = svgOne
       
       const colorings = await getColoringsFromAPI(name, image, userId )
       console.log(colorings)
    }
	return (
		<Box sx={{ paddingTop: '5rem' }}>
			<h1>Demo Book</h1>
			<Button onClick={() => book.current.pageFlip().flipPrev()}>
				Prev Page
			</Button>
			<Button onClick={() => book.current.pageFlip().flipNext()}>
				Next Page
			</Button>
			<HTMLFlipBook
				style={{ margin: 'auto' }}
				width={500}
				height={500}
				size={'stretch'}
				ref={book}
				useMouseEvents={false}
			>
				{svgs.map((page) => (
					<Box data-density="hard">
						<SVG
							name={page.path.slice(2).slice(0, -4)}
							currentColor={currentColor}
						/>
					</Box>
				))}
			</HTMLFlipBook>
			{user ? <Button onClick={getColorings} sx={{marginTop:"4rem"}} variant="contained">Save Book</Button> : null}
		</Box>
	);
};
export default DemoBook;
