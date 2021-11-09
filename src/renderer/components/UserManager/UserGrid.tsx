import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <>
      <Grid item xs={4}>
        <Item>Jhon Jhonson</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>john.johnson@gmail.com</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Active</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Medic</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Reset password</Item>
      </Grid>
    </>
  );
}

export default function UserGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
