import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Header from './pages/header';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/*<Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
        <ProTip />
        <Copyright />*/}
        <Box display="flex" justifyContent="center">
          <img
            style={{ top: 100, position: 'fixed', zIndex: -1 }}
            width="683"
            height="390"
            alt="logo"
            src="/images/logo_autumn.png"
          />
        </Box>
        <Header />
      </Box>
    </Container>
  );
}
