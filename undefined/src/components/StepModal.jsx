import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const StepModal = ({ open, onClose, item }) => {
    console.log(item.benefits)
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent>
        <p>{item.description}</p> 
        <p>{item.benefits}</p>
        <p>{item.steps[0].content}</p>
        <ul>
        {item.steps[0].details[0].benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
        ))}
        </ul>
        <h3>Skills you'll gain include:</h3>
        <ul>
        {item.steps[0].skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
        ))}
        </ul>


      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StepModal;
