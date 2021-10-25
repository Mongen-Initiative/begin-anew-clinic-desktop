import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
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
    paperLight: {
      padding: '30px',
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      height: 240,
      width: 500,
    },
    cardTitle: {
      padding: '60px 0',
      textAlign: 'center',
    },
    cardsBlock: {
      margin: '40px',
    },
  })
);

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div>
          <Typography className={classes.title}>Main Dashboard</Typography>
          <Divider />
        </div>
        <div className={classes.cardsBlock}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem button>
                  <Paper className={classes.paperLight}>
                    <Typography
                      component="p"
                      variant="h4"
                      className={classes.cardTitle}
                    >
                      Card
                    </Typography>
                  </Paper>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem button>
                  <Paper className={classes.paperLight}>
                    <Typography
                      component="p"
                      variant="h4"
                      className={classes.cardTitle}
                    >
                      Card
                    </Typography>
                  </Paper>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem button>
                  <Paper className={classes.paperLight}>
                    <Typography
                      component="p"
                      variant="h4"
                      className={classes.cardTitle}
                    >
                      Card
                    </Typography>
                  </Paper>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem button>
                  <Paper className={classes.paperLight}>
                    <Typography
                      component="p"
                      variant="h4"
                      className={classes.cardTitle}
                    >
                      Card
                    </Typography>
                  </Paper>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
