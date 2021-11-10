import React from 'react';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
    paperLight: {
      padding: '30px',
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      height: 240,
      width: 500,
    },
    textField: {
      marginTop: '5em',
      marginLeft: '15%',
      width: '50%',
      float: 'left',
    },
  })
);

export default function Pharmacy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div>
          <Typography className={classes.title}>Pharmacy</Typography>
          <Divider />
        </div>
        <div style={{ marginTop: '12em', width: '100%' }}>
          <div style={{ float: 'left', width: '40%', marginLeft: '20%' }}>
            <Button size="large" variant="outlined" color="primary">
              Scan Barcode
            </Button>
          </div>
          <div style={{ float: 'right', marginTop: '-30px', width: '55%' }}>
            <Typography>or enter the medicament name below:</Typography>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <div className={classes.textField}>
            <TextField fullWidth label="Medicament" variant="standard" />
            <Typography style={{ fontSize: '1em', color: '#c6c6c6' }}>
              Please add a new medicament, if doesn&#39;t exist in the system
              <IconButton size="medium">
                <ControlPointIcon />
              </IconButton>
            </Typography>
          </div>
          <div style={{ float: 'right', marginTop: '5em', width: '30%' }}>
            <Button size="large" variant="contained" color="primary">
              Add to prescription
            </Button>
          </div>
          <div
            style={{
              marginTop: '8em',
              width: '30%',
              marginLeft: '15%',
              float: 'left',
            }}
          >
            <Avatar style={{ margin: '10px', color: 'black' }}>M</Avatar>
          </div>
          <div style={{ width: '77%', marginTop: '-52px', float: 'right' }}>
            <Typography style={{ fontWeight: 'bolder' }}>
              Medicament name
            </Typography>
            <Typography style={{ fontWeight: 'lighter' }}>dosage</Typography>
            <Divider />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: '12px',
              width: '30%',
              marginLeft: '15%',
              float: 'left',
            }}
          >
            <Avatar style={{ margin: '10px', color: 'black' }}>M</Avatar>
          </div>
          <div style={{ width: '77%', marginTop: '-52px', float: 'right' }}>
            <Typography style={{ fontWeight: 'bolder' }}>
              Medicament name
            </Typography>
            <Typography style={{ fontWeight: 'lighter' }}>dosage</Typography>
            <Divider />
          </div>
        </div>
      </main>
    </div>
  );
}
