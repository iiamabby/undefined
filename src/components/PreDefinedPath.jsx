import React, { useState, useRef } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, ThemeProvider, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from './Theme';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const PreDefinedPath = ({ pathways }) => {
  const { id } = useParams();
  const [list, setList] = useState(pathways[id].steps);
  const [expandedItem, setExpandedItem] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

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
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  const toggleDetails = (itemIndex) => {
    if (expandedItem === itemIndex) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemIndex);
    }
  };

  const particleBackground = {
    position: 'relative',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    overflow: 'hidden',
  };

  // Function to handle navigation when the button is clicked
  const handleExplorePathwayClick = () => {
    // Navigate to the next page with the updated list
    navigate(`/pathinfo/${id}`, { state: { updatedList: list } });
  };

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={particleBackground}>
          <div className="particle-background"></div>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{pathways[id].title}</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{pathways[id].desc}</p>
          <p style={{ fontSize: '1rem', color: theme.colors.text }}>Average Pay: ${pathways[id].pay}</p>
        </div>
        <div style={{ width: '80%' }}>
          {list.map((item, index) => (
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
              {item.content}
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
                        <strong>{skill.name}</strong>: {skill.description} <span style={{ color: 'red' }}>{skill.type} skill</span>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </div>
      </div>

      {/* Button for exploring pathway */}
      <Button onClick={handleExplorePathwayClick}>Explore Pathway</Button>
    </>
  );
};

export default PreDefinedPath;
