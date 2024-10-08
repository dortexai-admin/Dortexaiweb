import React from 'react';
import { Box, Typography, Button, TextField, Grid, IconButton, Divider, InputAdornment } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ConnectForm = () => {
    return (
        <Box className="connect-form-container" sx={{ padding: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold" color="textPrimary">
                        Let's Work Together
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<WhatsAppIcon />}
                        href="#hire"
                        sx={{
                            marginTop: 2,
                            padding: '12px 24px',
                            backgroundColor: '#0c1274', // Custom color for WhatsApp button
                            '&:hover': { backgroundColor: '#533aa7' } // Darker shade on hover
                        }}
                    >
                        WhatsApp
                    </Button>

                    <Box mt={4}>
                        <Typography variant="h6" color="textSecondary">
                            <LocationOnIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                            Office:
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" color="textPrimary">
                            Chandigarh Group of College, Landran Mohali Punjab
                        </Typography>
                        <Divider sx={{ margin: '10px 0' }} />
                        <Typography variant="h6" color="textSecondary">
                            <EmailIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                            Email:
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" color="textPrimary">
                            info@dortexai.com
                        </Typography>
                        <Divider sx={{ margin: '10px 0' }} />
                        <Typography variant="h6" color="textSecondary">Follow Us:</Typography>
                        <Box mt={1}>
                            <IconButton href="https://x.com/dortex_ai" target="_blank" aria-label="Twitter" size="small">
                                <TwitterIcon sx={{ color: '#0c1274' }} />
                            </IconButton>
                            <IconButton href="https://www.facebook.com/profile.php?id=61561315643620" target="_blank" aria-label="Facebook" size="small">
                                <FacebookIcon sx={{ color: '#0c1274' }} />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/dortex-ai/" target="_blank" aria-label="LinkedIn" size="small">
                                <LinkedInIcon sx={{ color: '#0c1274' }} />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/dortex_ai/?hl=en" target="_blank" aria-label="Instagram" size="small">
                                <InstagramIcon sx={{ color: '#0c1274' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <form id="contact-form">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Your Name"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Your Email"
                                    variant="outlined"
                                    type="email"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SubjectIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="message"
                                    label="Leave a message here"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MessageIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    sx={{ width: '100%',
                                    backgroundColor: '#0c1274', // Custom color for WhatsApp button
                                    '&:hover': { backgroundColor: '#533aa7' } 
                                }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ConnectForm;