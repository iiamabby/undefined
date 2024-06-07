import React, { useState } from 'react';
import theme from './Theme';

const Sidebar = ({ data, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div style={{ width: '250px', left: 0, height: '100vh', background: '#fff', padding:'20px', overflow:'scroll' }}>
      <h2>Categories</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.keys(data).map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              cursor: 'pointer',
              color: selectedCategory === category ? 'white' : 'black',
              backgroundColor: selectedCategory === category ? theme.colors.accent : 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              margin: '5px 0',
              padding: '8px',
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
