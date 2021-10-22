import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginLeft: '7em',
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2em',
      marginBottom: '30px',
    },
    content: {
      flexGrow: 1,
      marginTop: '-17em',
    },
    paper: {
      padding: '30px',
      marginTop: '50px',
    },
    cardTitle: {
      padding: '10px 0',
      fontWeight: 'bolder',
    },
    inputsBlock: {
      margin: '40px',
      width: '40%',
      float: 'left',
    },
  })
);

export default function PatientDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div>
          <Typography className={classes.title}>Patient A</Typography>
          <Divider />
        </div>
        <div style={{ width: '100%' }}>
          <div className={classes.inputsBlock}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  defaultValue="John McCein"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ color: 'grey', fontSize: '0.8em' }}>
                  Date of birth *
                </Typography>
                <TextField
                  required
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="age"
                  required
                  name="age"
                  label="Age"
                  fullWidth
                  defaultValue="25 years"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="blood"
                  required
                  name="blood"
                  label="Blood Type"
                  fullWidth
                  defaultValue="A2 +"
                />
              </Grid>
            </Grid>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Paper className={classes.paper}>
              <Typography className={classes.cardTitle}>Allergies</Typography>
              <Typography>Lorem ipsum dolor sit amet</Typography>
              <Typography className={classes.cardTitle}>Last Visit</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </Paper>
          </div>
        </div>
        <div style={{ marginTop: '50%', width: '100%' }}>
          <Divider />
        </div>
        <div style={{ marginTop: '20px', width: '100%' }}>
          <Tabs value={0}>
            <Tab label="Current visit" id="tab1" />
            <Tab label="One month ago" id="tab2" />
            <Tab label="Two months ago" id="tab3" />
          </Tabs>
        </div>
        <Paper className={classes.paper}>
          <Typography component="p" className={classes.cardTitle}>
            Card
          </Typography>
        </Paper>
      </main>
    </div>
  );
}
