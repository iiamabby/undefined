import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from './Theme';
import React, { useState, useRef } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, ThemeProvider, Button } from '@mui/material';

const DefinedPath = () => {
  const { id } = useParams();
  const location = useLocation();
  const [droppedItems, setList] = useState(location.state ? location.state.droppedItems : []);

  const navigate = useNavigate();

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (itemIndex) => {
    if (expandedItem === itemIndex) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemIndex);
    }
  };

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...droppedItems];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };


  const handleExplorePathwayClick = () => {
    navigate(`/pathinfo/0`, { state: { updatedList: droppedItems } });
  };
console.log(droppedItems)

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div >
          <div className="particle-background"></div>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Your pathway</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Your path, your way</p>
          <p style={{ fontSize: '1rem', color: theme.colors.text }}></p>
        </div>
        <div style={{ width: '80%' }}>
          {droppedItems.map((item, index) => (
            <Box
              sx={{
                position: 'relative',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                transition: 'background-color 0.3s',
                '&:hover': {
                  border: `2px solid ${theme.colors.primary}`,
                },
                cursor: 'pointer',
                border: expandedItem === index ? `2px solid ${theme.colors.primary}` : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                textAlign: 'left',
                color: 'black',
              }}
              key={item.id}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable
              onClick={() => toggleDetails(index)}
            >
              <h1 style={{ marginBottom: '10px' }}>{index + 1}</h1>
              {item.title}
              <Accordion expanded={expandedItem === index} style={{ width: '100%' }}>
                <AccordionSummary
                  sx={{ backgroundColor: theme.colors.primary, color: theme.colors.text }}
                  expandIcon={<ExpandMoreIcon />}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDetails(index);
                  }}
                >
                  <Typography variant="h6">Skills You'll Gain</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="skills-list">
                    {item.skills && item.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} style={{ width: '90%' }}>
                        <strong>{skill.name}</strong>: {skill.description} <span style={{ color: 'red' }}>{skill.type}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </div>
        <Button
          onClick={handleExplorePathwayClick}
          style={{
            position: 'relative',
            margin: '0 auto',
            marginBottom:'50px',
            fontSize: '20px',
            marginTop: '20px',
            zIndex: 1,
            padding: '10px 10px', 
            backgroundColor: theme.colors.accent2, 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s, transform 0.3s', 
          }}
          onMouseEnter={(e) => {
            // Add hover effect
            e.currentTarget.style.backgroundColor = theme.colors.accent;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            // Remove hover effect
            e.currentTarget.style.backgroundColor = theme.colors.accent2;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Continue
        </Button>
      </div>
      

    </>
  );
};

export default DefinedPath;
