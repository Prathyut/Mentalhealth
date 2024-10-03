import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate(); 
  const [error, setError] = useState(''); 

  // Update existing users to the specified credentials
  const existingUsers = [
    { email: 'prathyusha@gmail.com', password: 'prathyusha' },
    { email: 'hi@gmail.com', password: 'helloklu' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').trim(); 
    const password = data.get('password').trim(); 

    // Check if the user exists
    const userExists = existingUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      navigate('/doctors'); // Navigate to doctors page
    } else {
      setError('Invalid email or password. Please try again.'); // Show error message
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="signin-container">
        <div className="signin-form">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className="signin-header">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className="input-field"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className="input-field"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  className="checkbox-label"
                />
                
                {/* Display error message */}
                {error && <Typography color="error">{error}</Typography>}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="signin-button"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" className="signin-link">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" className="signin-link">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </div>

        <div className="signin-image"></div>
      </div>
    </ThemeProvider>
  );
}
