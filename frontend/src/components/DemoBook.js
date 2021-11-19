import HTMLFlipBook from 'react-pageflip';
import { Box, Button } from '@mui/material';
import SVG from './SVG';
import { useRef } from 'react';
// import { getColoringsFromAPI } from '../actions/actions';

const DemoBook = ({ currentColor }) => {
	const book = useRef();
	const reqSvgs = require.context('../assets', true, /\.svg$/);
	// const allSvgFilepaths = reqSvgs.keys();
	const svgs = reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));
    // let name = "book name"
    // const getColorings = async() => {
    //     let image = coloring
       
    //    const colorings = await getColoringsFromAPI(name, image, userId )
       
    // }
	return (
		<Box sx={{ paddingTop: '5rem'}}>
			<h1>Demo Book</h1>
			<Button onClick={() => book.current.pageFlip().flipPrev()}>
				Prev Page
			</Button>
			<Button onClick={() => book.current.pageFlip().flipNext()}>
				Next Page
			</Button>
			<HTMLFlipBook
				style={{ margin: 'auto' }}
				ref={book}
				useMouseEvents={false}
				maxShadowOpacity={0.5}
			>
				{svgs.map((page) => (
					<Box className="page-content" key={page.path} data-density="soft" >
						<SVG 
							name={page.path.slice(2).slice(0, -4)}
							currentColor={currentColor}
						/>
					</Box>
				))}
			</HTMLFlipBook>
			{/* {user ? <Button onClick={getColorings} sx={{marginTop:"4rem"}} variant="contained">Save Book</Button> : null} */}
		</Box>
	);
};
export default DemoBook;
