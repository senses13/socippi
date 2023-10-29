import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box} from '@mui/material'
import { Pets } from '@mui/icons-material'


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"red",
}));

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const navbar = () => {
  return (

<AppBar position="sticky">
    <StyledToolbar>
         <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>This is navbar</Typography>
         <Pets sx={{display: {xs: "block", sm: "none"}}} />
         <Search> Search....</Search>
         <Icons>Icons </Icons>
    </StyledToolbar>
    </AppBar>
    
  )
}

export default navbar
