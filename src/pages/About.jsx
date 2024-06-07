import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';

function About() {
    return (
        <Container>
            <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
                About Us
            </Typography>

            <Typography variant="body1">
                Many young individuals believe that pursuing a career in technology is too difficult, uninteresting, or financially out of reach, further contributing to a lack of enthusiasm. For those who show an interest, the overwhelming variety of paths available often adds stress and anxiety when deciding on a future career.
            </Typography>

            <Typography variant="body1">
                In response to these challenges, we have taken a proactive approach to promote S.T.E.A.M careers as viable and exciting opportunities for all, using our undefined pathway building system, users can chart their own course and learn about a variety of different topics from resources sourced from across the web.
            </Typography>

        

            <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                Our Initiatives
                <ul>
                    <li>Give guidance to achieving various career goals and ambitions</li>
                    <li>Provide curated learning resources from a variety of different places across the web</li>
                    <li>The undefined system allows users to chart their own course </li>
                    <li>Pre-defined career options highlight some of the career titles and pay ranges for a variety of different disciplines</li>
                </ul>
            </Typography>

        
            
        </Container>
    );
}

export default About;
