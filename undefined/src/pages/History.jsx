import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';

function History() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                History of STEAM
            </Typography>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Technology Throughout History
                </Typography>
                <Typography variant="body1">
                    Explore the fascinating journey of technology from ancient tools to the digital age. Discover how innovations like the wheel, printing press, and the internet have shaped human progress.
                </Typography>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="heading">Ancient Tools</Typography>
                            <Typography variant="body1">
                                The use of tools by early humans marked the beginning of technological advancements. From simple hand tools to the development of agriculture, these innovations revolutionized how humans lived and interacted with their environment.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Printing Press</Typography>
                            <Typography variant="body1">
                                Johannes Gutenberg's invention of the printing press in the 15th century transformed communication and knowledge dissemination. The ability to mass-produce books revolutionized education, science, and the spread of ideas.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Digital Age</Typography>
                            <Typography variant="body1">
                                The digital age, characterized by the internet and computers, has connected the world like never before. It has revolutionized communication, commerce, and information access, creating a global society driven by technology.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    The Evolution of Science
                </Typography>
                <Typography variant="body1">
                    Delve into the history of scientific discovery, from early observations by ancient scholars to the groundbreaking experiments of modern physicists and biologists. Learn how science has expanded our understanding of the universe.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Ancient Observations</Typography>
                            <Typography variant="body1">
                                Ancient scholars like Aristotle and Galileo made early observations about the natural world, setting the stage for scientific inquiry.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={"4"}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Modern Physics</Typography>
                            <Typography variant="body1">
                                The 20th century brought revolutionary advancements in physics, with Albert Einstein's theory of relativity and quantum mechanics changing our understanding of the universe.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Biological Discoveries</Typography>
                            <Typography variant="body1">
                                Modern biology has unveiled the secrets of life, from the discovery of DNA's structure to advancements in genetics, ecology, and medical science.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Engineering Marvels
                </Typography>
                <Typography variant="body1">
                    Uncover the achievements of engineering, from ancient architectural wonders like the pyramids to the construction of modern skyscrapers and bridges. Explore how engineering has transformed society.
                </Typography>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Ancient Wonders</Typography>
                            <Typography variant="body1">
                                Ancient engineers created marvels like the Egyptian pyramids and the Great Wall of China, demonstrating human ingenuity and mastery of large-scale construction.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Modern Skyscrapers</Typography>
                            <Typography variant="body1">
                                The construction of towering skyscrapers and innovative bridges has redefined urban landscapes, showcasing modern engineering prowess.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Transformed Society</Typography>
                            <Typography variant="body1">
                                Engineering has transformed society by creating infrastructure, transportation systems, and technological marvels that have shaped our modern world.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    The Artistic Journey
                </Typography>
                <Typography variant="body1">
                    Trace the history of art from cave paintings to Renaissance masterpieces and contemporary digital art. Understand the evolution of artistic expression and its cultural significance.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Cave Paintings</Typography>
                            <Typography variant="body1">
                                Cave paintings, dating back thousands of years, provide a glimpse into early human artistic expression and storytelling through images on cave walls.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Renaissance Art</Typography>
                            <Typography variant="body1">
                                The Renaissance period saw the emergence of masterpieces by artists like Leonardo da Vinci and Michelangelo, marking a revival of art and culture in Europe.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Contemporary Art</Typography>
                            <Typography variant="body1">
                                Contemporary art encompasses a diverse range of artistic expressions, including digital art, performance art, and new media, reflecting the ever-evolving nature of art in the modern world.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Mathematics Over Time
                </Typography>
                <Typography variant="body1">
                    Explore the development of mathematics, from ancient civilizations' mathematical concepts to the formulation of advanced theories by mathematicians like Euler and Gauss. Learn how math underpins many scientific and technological advancements.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Ancient Mathematics</Typography>
                            <Typography variant="body1">
                                Ancient civilizations like the Egyptians and Babylonians developed mathematical concepts for practical purposes such as astronomy, construction, and trade.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={"4"}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Euler's Contributions</Typography>
                            <Typography variant="body1">
                                Leonhard Euler, a renowned mathematician, made significant contributions to number theory, graph theory, and calculus, laying the foundation for modern mathematics.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{boxShadow:2,padding:'20px', height:'180px'}}>
                            <Typography variant="subtitle1">Modern Mathematics</Typography>
                            <Typography variant="body1">
                                Modern mathematics encompasses a wide range of fields, from algebra and geometry to statistics and applied mathematics, with applications in science, technology, and engineering.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default History;
