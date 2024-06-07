import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import theme from '../components/Theme';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div>
      <main className="main-content">
      <section
          className="hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/abstract-5035778_1280.jpg)`, // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#FFDDBB',
            textAlign: 'center',
            padding: '120px 0',
            overflow: 'hidden',
            position: 'relative', 
          }}
        >
          <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            zIndex: 0,
          }}
        />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ mt: 4, fontWeight: 'bold',color:theme.colors.accent }}>
            Welcome to Kore Tautuhi: UNDEFINED
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 , color:theme.colors.secondary}}>
            Your Pathway to Empowerment in S.T.E.A.M
          </Typography>
          <Button component={Link} to="/build" variant="contained" color="secondary" size="large" sx={{ mt: 3, backgroundColor:theme.colors.accent2 }}>
            Get Started
          </Button>
        </Container>
      </section>

        <section className="introduction" style={{ padding: '80px 0' }}>
          <Container>
            <Typography variant="h2" sx={{ marginBottom: 4}}>
              Bridging Education and Career Aspirations
            </Typography>
            <Typography variant="body1" sx={{ fontWeight:'light'}}>
            Introducing our innovative platform dedicated to connecting the world of education with the realm of S.T.E.A.M career ambitions. Through dynamic pathway visualization and a meticulously curated collection of educational materials, we inspire and embolden young individuals to shape their unique journey within the realm of Science, Technology, Engineering, Arts, and Mathematics. Our platform serves as the catalyst for them to chart their course, set aspirations, and accomplish their envisioned accomplishments in the S.T.E.A.M arena.
            </Typography>
          </Container>
        </section>
        <section className='seperator' style={{width:'100%', height:'5px', backgroundColor:theme.colors.secondary, marginTop:'80px', marginBottom:'80px'}}></section>

        <section className='icons'>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div id="box1" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} style={{ width: '30%', textAlign:'center' }}>
              <img src='/images/path-2.png' style={{ display: 'block', margin: '0 auto' }} alt="Define your own path" />
              <h4>Define your own path</h4>
              <p>Use our drag-n-drop pathway builder to define your own way</p>
            </div>
            <div id='box2' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} style={{ width: '30%' , textAlign:'center'}}>
              <img src='/images/learning-2.png' style={{ display: 'block', margin: '0 auto' }} alt="Learning Resources" />
              <h4>Learning Resources</h4>
              <p>Once you have defined the undefined; learning resources, possible careers and courses will be generated to get you started</p>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} style={{ width: '30%', textAlign:'center' }}>
              <img src='/images/download-2.png' style={{ display: 'block', margin: '0 auto' }} alt="Download" />
              <h4>Download</h4>
              <p>Use the generate PDF button to download your pathway and generated resources</p>
            </div>
          </Container>
        </section>
        <section className='seperator' style={{width:'100%', height:'5px', backgroundColor:theme.colors.secondary, marginTop:'80px', marginBottom:'80px'}}></section>

        <section className='howto'>
          <Container sx={{ display: 'flex', alignItems: 'center' , marginBottom:'80px'}}>
            <Box sx={{ width: '50%', boxShadow:2 }}>
              <img src="/images/step1.png" alt="Step 1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Box sx={{ width: '50%', paddingLeft: '40px' }}>
              <h2 style={{color:theme.colors.primary}}>Step 1</h2>
              <ul>
                <li>Browse through the various S.T.E.A.M categories.</li>
                <li>Use the info icon to learn more about specific modules.</li>
                <li>Drag the modules you are interested in learning into your pathway box.</li>
                <li>When ready, click the Explore Pathway button to move on to the next step.</li>
              </ul>
            </Box>
          </Container>
        </section>

        <section className='howto'>
          <Container sx={{ display: 'flex', alignItems: 'center',marginBottom:'80px' }}>
            <Box sx={{ width: '50%', paddingRight: '40px' }}>
              <h2>Step 2</h2>
              <ul>
                <li>You have the flexibility to prioritize and arrange the steps based on your preferences.</li>
                <li>Drag the boxes into the position that suits.</li>
                <li>You can also expand the "skills you'll gain" section to learn more about the skills and content you will be provided with.</li>
                <li>Click the Continue button to generate your bespoke pathway.</li>
              </ul>
            </Box>
            <Box sx={{ width: '50%',boxShadow:2 }}>
              <img src="/images/step2.png" alt="Step 2" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
          </Container>
        </section>

        <section className='howto'>
          <Container sx={{ display: 'flex', alignItems: 'center' ,marginBottom:'80px'}}>
            <Box sx={{ width: '50%',boxShadow:2 }}>
              <img src="/images/step3.png" alt="Step 3" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Box sx={{ width: '50%', paddingLeft: '40px' }}>
              <h2>Step 3</h2>
              <ul>
                <li>Now your bespoke pathway has been generated, complete the steps.</li>
                <li>Each step has sub-items with their own learning resources to get you started.</li>
                <li>You can also download a PDF version of your path.</li>
                <li>Want to learn more? Check out our "how to Google" page for tips and tricks to get the best results from your queries.</li>
              </ul>
            </Box>
          </Container>
        </section>

        <section className='howto'>
          <Container sx={{ display: 'flex', alignItems: 'center', marginBottom:"100px"  }}>
            <Box sx={{ width: '50%', paddingRight: '40px' }}>
              <h2>Step 4</h2>
              <ul>
                <li>When you add more than 2 modules that belong to a specific category, our algorithm will find relevant career titles and courses that you might be interested in.</li>
                <li>Check them out by clicking the links.</li>
                <li>Not sure what your path might look like? We've got you covered; check out the pre-made career pathways that might give you some ideas.</li>
              </ul>
            </Box>
            <Box sx={{ width: '50%',boxShadow:2}}>
              <img src="/images/step4.png" alt="Step 4" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
          </Container>
        </section>
        
        <Button component={Link} to="/build" variant="contained" color="secondary" size="large" sx={{ mt: 3, backgroundColor: theme.colors.accent2, position: 'relative', left: '50%',top:'-80px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '180px',  }}>
            Get Started
        </Button>

      </main>
    </div>
  );
}

export default Home;
