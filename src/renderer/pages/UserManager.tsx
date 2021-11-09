import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, TextField, Typography } from '@material-ui/core';
import UserGrid from 'renderer/components/UserManager/UserGrid';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    textField: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    content: {
      flexGrow: 1,
      margin: 'auto',
      width: '50%',
    },
  })
);

export default function UserManager() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Typography
          style={{
            fontWeight: 'bolder',
            fontSize: '2em',
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          User Management
        </Typography>
        <UserGrid />
      </main>
    </div>
  );
}