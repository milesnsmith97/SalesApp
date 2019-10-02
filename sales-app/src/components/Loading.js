import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: '#F8BD0E'
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.progress}  />
    </div>
  );
}