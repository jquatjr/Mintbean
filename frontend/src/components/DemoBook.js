import HTMLFlipBook from 'react-pageflip';
import { Box, Button, Typography } from '@mui/material';
import SVG from './SVG';
import { useRef, useEffect, useState } from 'react';
import {getBooks} from '../helpers/getBooks'
const DemoBook = ({ currentColor, bookName }) => {
	const book = useRef();
	const svgsRef = useRef(); 
	const [isLoading, setIsLoading] = useState(true)
	const reqSvgs = require.context(`../assets`, true, /\.svg$/);
	// const allSvgFilepaths = reqSvgs.keys();
	// const svgs = reqSvgs.keys().map((path) => ({ path, file: reqSvgs(path) }));
	// const svgs = getBooks(bookName)
	
	useEffect(()=> {
		const getSvgs = async()=> {
			const imgs = await getBooks(bookName)
			svgsRef.current = imgs
			
			setIsLoading(false)
		}
		getSvgs()
	}, [bookName])
	console.log(svgsRef.current)
	if(isLoading) return <h1>Loading</h1>
	return (
		<Box sx={{ paddingTop: '5rem' }}>
			<Button
				variant="contained"
				sx={{ margin: '1rem 2rem 1rem 0', padding: '1rem' }}
				onClick={() => book.current.pageFlip().flipPrev()}
			>
				Prev Page
			</Button>
			<Button
				variant="contained"
				sx={{ margin: '1rem 2rem 1rem 0', padding: '1rem' }}
				onClick={() => book.current.pageFlip().flipNext()}
			>
				Next Page
			</Button>
			<HTMLFlipBook
				style={{ margin: 'auto' }}
				ref={book}
				useMouseEvents={false}
				maxShadowOpacity={0.5}
				height={100}
				width={100}
				size='stretch'
			>
				{svgsRef.current.map((page) => (
					
					<Box
						key={page.path}
						data-density="hard"
					>
						<SVG
							text={page.text}
							bookName={bookName}
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
