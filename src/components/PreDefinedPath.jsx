import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PreDefinedPath = ({ pathways }) => {
  const { id } = useParams();
  const [reorderedSteps, setReorderedSteps] = useState(pathways[id].steps);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newSteps = reorder(
      reorderedSteps,
      result.source.index,
      result.destination.index
    );

    setReorderedSteps(newSteps);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  if (!pathways[id]) {
    return <div>Pathway not found</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{pathways[id].title} Pathway</Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {reorderedSteps.map((step, index) => (
                <Draggable key={index} draggableId={`step-${index}`} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItemText primary={`${index + 1}. ${step}`} />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default PreDefinedPath;
