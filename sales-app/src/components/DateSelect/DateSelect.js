
import React from 'react';
import './RangeSelect.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  DateFrom: {
    // backgroundColor: '#00756A',
    padding: '5px',
    margin: '5px',
  },
  DateTo: {
    // backgroundColor: '#00756A',
    padding: '5px',
    margin: '5px',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();
  
  let DateClasses = 'date-select';
  if (props.show) {
    DateClasses = 'date-select open';
  }
  return (
    <div className={DateClasses}>
    <form className={classes.container} noValidate>
    <div className={classes.DateFrom}>
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
      <div className={classes.DateTo}>
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2017-05-25"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
    </form>
    </div>
  );
}