import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, Button } from '@mui/material';
import OptionTab from '../components/OptionTab';
import undefinedData from '../data/undefinedData.json';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { IconButton, Modal } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import theme from '../components/Theme';

const Undefined = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('games');
  const [droppedItemTitles, setDroppedItemTitles] = useState([]);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [itemCountsByCategory, setItemCountsByCategory] = useState({}); 

  const navigate = useNavigate();

  useEffect(() => {
    const counts = {};

    Object.keys(undefinedData).forEach((category) => {
      counts[category] = 0;
    });

    droppedItems.forEach((item) => {
      const category = item.category; 
      if (category && counts.hasOwnProperty(category)) {
        counts[category]++;
      }
    });

    setItemCountsByCategory(counts);
    console.log('Item Counts by Category:', counts);
  }, [droppedItems, selectedCategory]);

  const handleDropInArea = (item) => {
    const selectedItem = undefinedData[selectedCategory].find(
      (dataItem) => dataItem.title === item
    );
    if (selectedItem) {
      setDroppedItems([...droppedItems, { id: nextItemId, ...selectedItem }]);
      setDroppedItemTitles([...droppedItemTitles, selectedItem.title]);
      setNextItemId(nextItemId + 1);
    }
  };

  const handleDropInContent = (draggedItemId, dropPosition) => {
    const updatedItems = [...droppedItems];
    const draggedItemIndex = updatedItems.findIndex((item) => item.id === draggedItemId);

    if (draggedItemIndex === -1) {
      return; 
    }

    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);

    if (dropPosition === -1) {
      updatedItems.push(draggedItem); 
    } else {
      updatedItems.splice(dropPosition, 0, draggedItem);
    }

    setDroppedItems(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = droppedItems.filter((item) => item.id !== itemId);
    setDroppedItems(updatedItems);
    const itemToRemove = droppedItems.find((item) => item.id === itemId);
    if (itemToRemove) {
      setDroppedItemTitles(droppedItemTitles.filter((title) => title !== itemToRemove.title));
    }
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');
    if (!droppedItemTitles.includes(item)) {
      handleDropInArea(item);
    }
  };

  const handleExplorePathwayClick = () => {
    navigate(`/undefinedpath`, { state: { droppedItems: droppedItems } });
  };

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />

      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        <OptionTab
          items={undefinedData[selectedCategory]}
          onDropInArea={handleDropInArea}
          droppedItemTitles={droppedItemTitles}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Sidebar data={undefinedData} onSelectCategory={setSelectedCategory} />

        <Container
          style={{
            height: '80%',
            border: '2px dashed #ccc',
            padding: '20px',
            position: 'relative',
            margin: '20px',
          }}
        >
          <h1 style={{ position: 'relative', top: '-25px' }}>Define your path</h1>

          <div
            style={{
              width: '100%',
              maxHeight: '100vh',
              minHeight: '200px',
              border: '2px dashed #ccc',
              display: 'grid',
              gap: '5px',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
            onDrop={onDropHandler}
            onDragOver={(e) => e.preventDefault()}
          >
            {droppedItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  marginBottom: '10px',
                  cursor: 'move',
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                }}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/json', JSON.stringify(item));
                }}
                onDragEnd={() => handleDropInContent(item.id, -1)}
              >
                <button
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                  }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  X
                </button>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Button
            onClick={handleExplorePathwayClick}
            style={{
              position: 'relative',
              margin: '0 auto',
              fontSize: '20px',
              marginTop: '20px',
              zIndex: 1,
              padding: '10px 10px',
              backgroundColor: theme.colors.primary,
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.accent;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Explore Pathway
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Undefined;
