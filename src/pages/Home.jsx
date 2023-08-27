import React from 'react';
import Theme from '../components/Theme';
import { Button, Container, Grid, Typography } from '@mui/material';
import Card from "../components/Card"
function Home() {
  return (
    <div>
      <main className="main-content">
      <section
          className="hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/temp-hero.png)`, // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#FFDDBB',
            textAlign: 'center',
            padding: '120px 0',
            overflow: 'hidden',
            position: 'relative', // Add this line
          }}
        >
          {/* Dark Purple Overlay */}
          <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // This creates a black overlay with 0.8 opacity
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ mt: 4, fontWeight: 'bold', background: 'linear-gradient(to right, #FFD700, #800080)', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent' }}>
            Welcome to Kei Te Ao Whakamāramatanga: UNDEFINED
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Your Pathway to Empowerment in S.T.E.A.M
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 3, backgroundColor: Theme.colors.accent }}>
            Get Started
          </Button>
        </Container>
      </section>

        <section className="introduction" style={{ background: Theme.colors.primary, color: '#000000', padding: '80px 0' }}>
          <Container>
            <Typography variant="h2" sx={{ marginBottom: 4 }}>
              Bridging Education and Career Aspirations
            </Typography>
            <Typography variant="body1">
            Introducing our innovative platform dedicated to connecting the world of education with the realm of S.T.E.A.M career ambitions. Through dynamic pathway visualization and a meticulously curated collection of educational materials, we inspire and embolden young individuals to shape their unique journey within the realm of Science, Technology, Engineering, Arts, and Mathematics. Our platform serves as the catalyst for them to chart their course, set aspirations, and accomplish their envisioned accomplishments in the S.T.E.A.M arena.
            </Typography>
          </Container>
        </section>

        <section className="steam-importance" style={{ background: Theme.colors.accent, color: '#000000', padding: '80px 0' }}>
          <Container>
            <Typography variant="h2" sx={{ marginBottom: 4 }}>
              The Importance of S.T.E.A.M Education
            </Typography>
            <Typography variant="body1">
              S.T.E.A.M education prepares youth for the challenges of the modern world, fostering critical thinking,
              problem-solving skills, and creativity. It's the foundation for innovation and technological advancement
              across various industries.
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card
                  title="Card 1 Title"
                  content="Content for Card 1 goes here."
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  title="Card 2 Title"
                  content="Content for Card 2 goes here."
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  title="Card 3 Title"
                  content="Content for Card 3 goes here."
                />
              </Grid>
            </Grid>

            
          </Container>
        </section>

        {/* Add more sections here with relevant content */}

      </main>
    </div>
  );
}

export default Home;
