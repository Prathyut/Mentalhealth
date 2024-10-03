// SignInSuccess.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const SignInSuccess = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sign In Successful!
      </Typography>
      <Typography variant="body1">
        Welcome back! You have successfully signed in.
      </Typography>
    </Container>
  );
};

export default SignInSuccess;
