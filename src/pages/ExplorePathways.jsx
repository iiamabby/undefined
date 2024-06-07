import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../components/Theme';

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
              <Typography variant="h6">Technology</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of technology and innovation.
              </Typography>
              <Button component={Link} to="/tech">Explore Technology</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Science</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of science and exploration.
              </Typography>
              <Button component={Link} to="/sciencepaths">Explore Science</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Engineering</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of Engineering and Curiosity.
              </Typography>
              <Button component={Link} to="/engineering">Explore Engineering</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Art</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of Artistic expression and design.
              </Typography>
              <Button component={Link} to="/art">Explore Art</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Mathematics</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the realm of the fabric of the universe.
              </Typography>
              <Button component={Link} to="/maths">Explore Mathematics</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card style={{marginBottom:'100px'}}>
            <CardContent>
              <Typography variant="h6">Pathway System</Typography>
              <Typography variant="body2" color="textSecondary">
                Customize your learning journey by building your own path
              </Typography>
              <Button component={Link} to="/build">Build your own</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExplorePathways;
