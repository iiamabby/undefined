import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Theme from './Theme';
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ background: Theme.colors.primary}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
         KORE TAUTUHI : UNDEFINED
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/history">History</Button>
        <Button color="inherit" component={Link} to="/build">Build Your Pathway</Button>

        <Button
        color="inherit"
        aria-controls="pathway-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Explore Pathways
      </Button>
      <Menu
        id="pathway-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         <MenuItem   
            component={Link}
            to='/sciencepaths'
            onClick={handleClose}> 
            S: Science 
        
        </MenuItem>
        <MenuItem   
            component={Link}
            to='/tech'
            onClick={handleClose}> 
            T: Technology
        
        </MenuItem>
        <MenuItem   
            component={Link}
            to='/engineering'
            onClick={handleClose}> 
            E: Engineering 
        
        </MenuItem>
        <MenuItem   
            component={Link}
            to='/art'
            onClick={handleClose}> 
            A: Art
        
        </MenuItem>
        <MenuItem   
            component={Link}
            to='/maths'
            onClick={handleClose}> 
            M: Maths
        
        </MenuItem>
        <MenuItem   
            component={Link}
            to='/explore'
            onClick={handleClose}> 
        All Pathways
        
        </MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

