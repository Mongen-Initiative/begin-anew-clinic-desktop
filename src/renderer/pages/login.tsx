import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    textField: {
      // margin: "auto",
      // width: "50%",
      // padding: "10px"
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    content: {
      flexGrow: 1,
      margin: 'auto',
      width: '50%',
      padding: '300px',
    },
  })
);

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        {/* <img src="public/logo"></img> */}
        <Typography
          style={{
            fontWeight: 'bolder',
            fontSize: '2em',
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          Kasozi Clynical System
        </Typography>
        <div className={classes.textField}>
          <TextField id="standard-basic" label="username" variant="outlined" />
        </div>
        <div className={classes.textField}>
          <TextField id="standard-basic" label="password" variant="outlined" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Button variant="contained">Sign in</Button>
        </div>
      </main>
    </div>
  );
}
