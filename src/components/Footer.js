import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            bottom: "10px",
            width: '100%',

        }}
            component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto"
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright Redux ©2022. [p] Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}

export default Footer;
