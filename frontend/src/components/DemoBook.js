import HTMLFlipBook from 'react-pageflip';
import { Box, Button } from '@mui/material';
import SVG from './SVG';
import { useRef } from 'react';
const DemoBook = ({currentColor}) => {
	const book = useRef();
	const reqSvgs = require.context('../assets', true, /\.svg$/);
	const allSvgFilepaths = reqSvgs.keys();
	
	const svgs = reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));
	

	return (
		<Box sx={{ paddingTop: '5rem' }}>
			<h1>Demo Book</h1>
			<Button onClick={() => book.current.pageFlip().flipNext()}>
				Next Page
			</Button>
			<Button onClick={() => book.current.pageFlip().flipPrev()}>
				Prev Page
			</Button>
			<HTMLFlipBook
                style={{margin:'auto'}}
				width={300}
				height={500}
				ref={book}
				useMouseEvents={false}
			>
				{svgs.map((page) => (
					<Box data-density="hard" >
						<SVG
							name={page.path.slice(2).slice(0, -4)}
							currentColor={currentColor}
						/>
					</Box>
				))}
			</HTMLFlipBook>
		</Box>
	);
};
export default DemoBook;
