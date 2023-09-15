import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Theme from '../components/Theme';

function Header() {
  return (
    <AppBar position="static" style={{ background: Theme.colors.primary}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
          Kei Te Ao Whakamāramatanga: UNDEFINED
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/explore">Explore Pathways</Button>
        <Button color="inherit" component={Link} to="/build">Build Your Pathway</Button>
        {/* Add other navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
