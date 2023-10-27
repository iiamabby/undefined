import React, { useState } from 'react';
import { Typography, Tooltip, IconButton, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StepModal from './StepModal'; 
import theme from './Theme';

const OptionTab = ({ items, onDropInArea, droppedItemTitles }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const onDragStartHandler = (e, item) => {
    // Set the item's title as text/plain during drag
    e.dataTransfer.setData('text/plain', item.title);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e, item) => {
    e.preventDefault();
    const droppedItemTitle = e.dataTransfer.getData('text/plain');
    onDropInArea(droppedItemTitle); 
  };

  const addAllToDroppableArea = (categoryName) => {
    const category = items.find((item) => item.title === categoryName);
    if (category && category.children) {
      category.children.forEach((item) => {
        if (!droppedItemTitles.includes(item.title)) {
          onDropInArea(item.title);
        }
      });
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto', 
        }}
        onDragOver={onDragOverHandler}
        onDrop={(e) => onDropHandler(e, items)}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              width: '50%',
              maxWidth: '300px',
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px',
              position: 'relative',
              overflow: 'hidden',
            }}
            onDragStart={(e) => onDragStartHandler(e, item)}
            draggable={!droppedItemTitles.includes(item.title)}
          >
            {droppedItemTitles.includes(item.title) && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: theme.colors.secondary,
                  zIndex: -1,
                }}
              ></div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Tooltip title="More Info">
                <IconButton
                  size="small"
                  style={{ padding: 0 }}
                  onClick={() => openModal(item)}
                >
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
            <Typography variant="body1">{item.description}</Typography>
          </div>
        ))}
      </div>

      {selectedItem && (
        <StepModal open={modalOpen} onClose={closeModal} item={selectedItem} />
      )}

    </div>
  );
};

export default OptionTab;
