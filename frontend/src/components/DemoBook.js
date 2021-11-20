import HTMLFlipBook from 'react-pageflip';
import { Box, Button, Typography } from '@mui/material';
import SVG from './SVG';
import '../styles/SVG.css'
import { useRef, useEffect, useState } from 'react';
import {getBooks} from '../helpers/getBooks'
import { useSelector } from 'react-redux';
import {postColoringsToAPI} from '../actions/actions'

//TODO: toastify notification
const DemoBook = ({ currentColor, bookName }) => {
	const book = useRef();
	const user = useSelector(store => store.userReducer.user)
	const userId = useSelector(store => store.userReducer.id)
	const svgs = useSelector(store => store.coloringReducer)
	const svgsRef = useRef(); 
	const [isLoading, setIsLoading] = useState(true)
	const reqSvgs = require.context(`../assets`, true, /\.svg$/);
	const postColorings = async() => {
		
		const image = svgs.Elephant
		const name = "Random"
		const res = await postColoringsToAPI(name, image, userId)
		console.log(res)
	}
	
	useEffect(()=> {
		const getSvgs = async()=> {
			const imgs = await getBooks(bookName)
			svgsRef.current = imgs
			
			setIsLoading(false)
		}
		getSvgs()
	}, [bookName])
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
				className="flipbook"
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
						data-density="soft"
					>
						<SVG
							text={page.text}
							pageClass={page.className}
							bookName={bookName}
							name={page.path.slice(2).slice(0, -4)}
							currentColor={currentColor}
						/>
					</Box>
				))}
			</HTMLFlipBook>
			{user ? <Button onClick={postColorings} sx={{marginTop:"4rem"}} variant="contained">Save Book</Button> : null}
		</Box>
	);
};
export default DemoBook;
