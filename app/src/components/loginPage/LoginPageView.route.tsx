import React from 'react'
import { isNil } from 'lodash'
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import useStyles from './LoginPageStyles.route'

export interface LoginPageBaseProps { }
export interface LoginPageState {
  email?: string
  password?: string
  validation: LoginPageValidationState
}
export interface LoginPageValidationState {
  overall: boolean
  invalidUsername?: {
    reason: string
  },
  invalidPassword?: {
    reason: string
  }
}
export interface LoginPageViewProps extends LoginPageBaseProps {
  password?: string
  email?: string
  validation: LoginPageValidationState
  onEmailChange: (event: any) => void
  onPasswordChange: (event: any) => void
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'CS Advantage © '}
      <Link color="inherit" href="https://material-ui.com/">
        CS Advantage
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {<br />}
      Powerverd by Britech Co.
    </Typography>
  );
}


const LoginPageView: React.FC<LoginPageViewProps> = ({ password, email, onEmailChange, onPasswordChange, validation }) => {
  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              onChange={onEmailChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!isNil(validation.invalidUsername)}
            />
            <TextField
              onChange={onPasswordChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!isNil(validation.invalidPassword)}
            />
            {
              validation.overall === false && <div>INVALID FORM</div>
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPageView
