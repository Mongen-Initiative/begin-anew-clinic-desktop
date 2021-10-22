import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
  CssBaseline,
  Divider,
  MenuItem,
  MenuList,
  IconButton,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React from 'react';
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import icon from '../../assets/icons/48x48.png';
import Patients from './pages/Patients';
import Pharmacy from './pages/Pharmacy';
import PatientDetails from './pages/PatientDetails';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appLogo: {
      zIndex: theme.zIndex.drawer + 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerContainer: {
      overflow: 'auto',
      marginTop: '25px',
      marginRight: '23px',
    },
    menuText: {
      textDecoration: 'none',
      color: 'black',
    },
    content: {
      flexGrow: 1,
      margin: 'auto',
      width: '50%',
      padding: '300px',
    },
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <img src={icon} className={classes.appLogo} alt="Begin Anew logo" />
            <Typography
              variant="h6"
              noWrap
              style={{ marginLeft: '16px', marginRight: '27px' }}
            >
              Kasozi Clinic
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Link to="login" className={classes.menuText}>
              <IconButton
                style={{
                  float: 'right',
                  right: '30px',
                  marginTop: '-25px',
                  position: 'absolute',
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MenuList>
              <Link to="/" className={classes.menuText}>
                <MenuItem>
                  <ListItemIcon>
                    <Home fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Main Dashboard</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/patients" className={classes.menuText}>
                <MenuItem>
                  <ListItemIcon>
                    <InboxIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Patients</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/pharmacy" className={classes.menuText}>
                <MenuItem>
                  <ListItemIcon>
                    <MailIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Pharmacy</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
            </MenuList>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/patients" exact component={Patients} />
            <Route path="/pharmacy" component={Pharmacy} />
            <Route path="/patient/details" component={PatientDetails} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
