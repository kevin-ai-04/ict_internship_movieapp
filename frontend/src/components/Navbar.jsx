import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon /> 
            </IconButton>
            <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            <MovieIcon sx={{ mr: 1 }} /> {/* Add the Movie icon with some right margin */}
            <Typography variant="h6" component="div">
              Movie App
            </Typography>
          </Box>
          <Link to={'/'}><Button class='button' color='inherit' >View</Button></Link>
          <Link to={'/add'}><Button class='button' color="inherit">Add</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
