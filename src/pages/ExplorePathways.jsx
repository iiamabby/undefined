import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Theme from '../components/Theme';

const ExplorePathways = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
        Explore Pathways
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Science</Typography>
              <Typography variant="body2" color="textSecondary">
                Explore the world of scientific discoveries.
              </Typography>
              <Button component={Link} to="/science">Explore Science</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Technology</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of technology and innovation.
              </Typography>
              <Button component={Link} to="/techpaths">Explore Technology</Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat similar Card components for Engineering, Arts, and Mathematics */}
      </Grid>
    </Container>
  );
};

export default ExplorePathways;
