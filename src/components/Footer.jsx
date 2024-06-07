import React from 'react';
import theme from './Theme';

const footerStyle = {
  backgroundColor: theme.colors.primary,
  color: 'white',
  position:'fixed',
  bottom: '-10px', 
  width: '100%', 
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; {new Date().getFullYear()} Undefined</p>
      </div>
    </footer>
  );
}

export default Footer;
