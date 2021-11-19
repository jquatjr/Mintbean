import {InputLabel, MenuItem, FormHelperText, FormControl, Select} from '@mui/material'

export default function PictureSelect({picture, handlePictureChange, availablePics}){
    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="picture-label">Picture</InputLabel>
          <Select
            labelId="picture-label"
            id="picture"
            value={picture}
            label="Picture"
            onChange={handlePictureChange}
          >
            {availablePics.map(pic => <MenuItem key={pic} value={pic}>{pic}</MenuItem>)}
          </Select>
          <FormHelperText>Select Picture to Color</FormHelperText>
        </FormControl>
        
      </div> 
    )
}

