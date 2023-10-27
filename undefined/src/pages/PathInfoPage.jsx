import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PathStepBox from '../components/PathStepBox';
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
} from '@mui/material';

import careerData from '../data/careerData.json';
import theme from '../components/Theme';

const PathInfoPage = ({ pathways }) => {
  const { id } = useParams();
  const location = useLocation();
  const updatedList = location.state ? location.state.updatedList : null;
  const path = pathways[id];
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < (updatedList || path.steps).length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const countItemsByCategory = () => {
    const counts = {};

    if (updatedList) {
      updatedList.forEach((item) => {
        const category = item.category; 
        if (category) {
          counts[category] = (counts[category] || 0) + 1;
        }
      });
    }

    return counts;
  };

  const categoryHasMoreThanTwo = (categoryCounts) => {
    return Object.values(categoryCounts).some((count) => count > 2);
  };

  const steps = updatedList || path.steps;
  const currentStepContent = steps[currentStep];
  const categoryCounts = countItemsByCategory();

  return (
    <Container maxWidth="lg" style={{height:'1500px'}}>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 10 }}>
        <Typography variant="h4" gutterBottom>
          {updatedList[0].title ? "Bespoke Pathway" : path.title }
        </Typography>
        <Typography variant="body1" paragraph>
          {updatedList[0].title ? " " :  path.desc}
        </Typography>
        <Typography variant="body1">
          { updatedList[0].title ? "Unknown " : "Average Pay:"+ path.pay}
        </Typography>

        <Box marginTop={2}>
          <Typography variant="h5" gutterBottom>
            Step {currentStep + 1}
          </Typography>
          <PathStepBox step={currentStepContent} />
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous Step
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
            >
              Next Step
            </Button>
          </Box>
        </Box>


        
      </Paper>
      {categoryHasMoreThanTwo(categoryCounts) && (
  <Box marginTop={10}>
    <Typography variant="h5" gutterBottom style={{ backgroundColor: theme.colors.accent, padding:'20px', marginBottom:'20px',color:'white' }}>
      Possible Career's and Courses
    </Typography>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(careerData).map((category) => {
        if (categoryCounts[category] > 2) {
          const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
          return (
            <div key={category} style={{  paddingRight: '20px' , width:'100%'}}>
              <Typography variant="h4" gutterBottom>
                {capitalizedCategory}
              </Typography>
              {Object.keys(careerData[category]).map((careerTitle) => {
                const careerInfo = careerData[category][careerTitle];
                return (
                  <div key={careerTitle}>
                    <Typography variant="subtitle1"><b>Title: {careerInfo.title}</b></Typography>
                    <Typography variant="body1">
                      Pay: {careerInfo.pay}
                    </Typography>
                    <Typography variant="body1">
                      Courses: {careerInfo.courses[0].courses[0].course} {careerInfo.courses[0].courses[0].level}
                    </Typography>
                  </div>
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  </Box>
)}


    </Container>
  );
};

export default PathInfoPage;
