import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import pathwaysData from '../data/pathwaysData.json';

const Sciencepaths = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
        Science Career Pathways
      </Typography>
      <Grid container spacing={3}>
        {pathwaysData.sciencePaths.map((pathway, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{pathway.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {pathway.description}
                </Typography>
                <Button component={Link} to={`/sciencepaths/${index}`}>Explore Pathway</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Create Your Own Pathway</Typography>
              <Typography variant="body2" color="textSecondary">
                Customize your learning journey based on your interests.
              </Typography>
              <Button component={Link} to="/techpath/custom">Create Your Pathway</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sciencepaths;
