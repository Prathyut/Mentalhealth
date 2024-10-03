import * as React from 'react';
import '../App.css'; // Ensure this path is correct
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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

export default function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    });

    // Sending the sign-up data to the backend
    axios.post("http://localhost:9090/user", {
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password')
    }).then((res) => {
      console.log(res.data);
      // Navigate to SignUpSuccess if the request was successful
      if (res.status === 200) {
        navigate('/signupsuccess');
      }
    }).catch((error) => {
      console.error("There was an error during the sign-up!", error);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="signup-container">
        {/* Left side with signup form */}
        <div className="signup-form">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Select
                      fullWidth
                      labelId="role"
                      id="role"
                      name="role"
                      defaultValue={0}
                      label="Role"
                      className="input-field"
                    >
                      <MenuItem value={1}>Admin</MenuItem>
                      <MenuItem value={2}>User</MenuItem>
                      <MenuItem value={0}>Guest</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions, and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="signup-button"
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2" className="signup-link">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </div>

        {/* Right side with background image */}
        <div className="signup-image"></div>
      </div>
    </ThemeProvider>
  );
}