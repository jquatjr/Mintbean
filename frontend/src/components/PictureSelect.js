import {InputLabel, MenuItem, FormHelperText, FormControl, Select} from '@mui/material'

export default function PictureSelect({book, handleBookChange, availableBooks}){
    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="book-label">Book</InputLabel>
          <Select
            labelId="book-label"
            id="book"
            value={book}
            label="Book"
            onChange={handleBookChange}
          >
            {availableBooks.map(pic => <MenuItem key={pic} value={pic}>{pic}</MenuItem>)}
          </Select>
          <FormHelperText>Choose a Book</FormHelperText>
        </FormControl>
        
      </div> 
    )
}

