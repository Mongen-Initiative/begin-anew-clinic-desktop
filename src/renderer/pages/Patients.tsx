import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Divider, IconButton, TextField, Typography } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Link, MemoryRouter as Router, useRouteMatch, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginLeft:"7em"
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2em',
      marginBottom:'30px',

    },
    content: {
      flexGrow: 1,
      marginTop: '-17em',
    },
    paperLight: {
      padding: "30px",
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      height: 240,
      width: 500,
    },
    textField: {
        marginTop: '15em',
        marginLeft: '15%',
        width:"50%",
        float: "left"
    },
    menuText: {
        textDecoration: 'none', 
        color: "black",
    },
  })
);

export default function Patients() {
  const classes = useStyles();
  let match = useRouteMatch();
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/patient/details`; 
    history.push(path);
  }
  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div>
          <Typography className={classes.title}>Patients</Typography>
          <Divider/>
        </div>
        <div className={classes.textField}>
            <TextField fullWidth label="Patient name" variant="standard" />
            <Typography style={{fontSize:"1em", color:"#c6c6c6"}}>Please add a new patient, if doesn't exist in the system
                <IconButton size="medium"><ControlPointIcon/></IconButton>
            </Typography>
        </div>
        <div style={{float:"right", marginTop: '16em', width:"30%"}}>
            <Link to={`${match.url}/details`} className = {classes.menuText}>
                <Button size="large" variant="contained" color="primary"   onClick={routeChange}>Open Patient Details</Button>
            </Link>
        </div>
      </main>
    </div>
    </Router>
  );
}
