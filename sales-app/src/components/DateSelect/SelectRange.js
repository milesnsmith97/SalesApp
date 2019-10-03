import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import FormHelperText from '@material-ui/core/FormHelperText';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5px',
    margin: '5px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 175,
  },
}));


const SimpleSelect = props => {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    channel: '',
    timeFilter: '',
    age: '',
    name: 'hai',
  });
  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="age-simple">
          -- Select Channel --
        </InputLabel>
        <Select
            value={values.channel}
            onChange={handleChange}
            labelWidth={labelWidth}
            inputProps={{
              name: 'channel',
              id: 'outlined-age-simple',
            }}
        >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Online"}>Online</MenuItem>
            <MenuItem value={"Wholesale"}>Wholesale</MenuItem>
            <MenuItem value={"FolDeals"}>FOL Deals</MenuItem>
        </Select>
      </FormControl>
      
    
    </div>

<div>
        <FormControl className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="age-simple">
            -- Time Period --
            </InputLabel>
            <Select
              value={values.timeFilter}
              onChange={handleChange}
              labelWidth={labelWidth}
              inputProps={{
                  name: 'timeFilter',
                  id: 'outlined-age-simple',
              }}
            >
              <MenuItem value="">
                  <em>None</em>
              </MenuItem>
              <MenuItem value={"30 Days"}>30 Days</MenuItem>
              <MenuItem value={"14 Days"}>14 Days</MenuItem>
              <MenuItem value={"7 Days"}>7 Days</MenuItem>
              <MenuItem value={"6 Days"}>6 Days</MenuItem>
              <MenuItem value={"5 Days"}>5 Days</MenuItem>
              <MenuItem value={"4 Days"}>4 Days</MenuItem>
              <MenuItem value={"3 Days"}>3 Days</MenuItem>
              <MenuItem value={"48 Hours"}>48 Hours</MenuItem>
              <MenuItem value={"24 Hours"}>24 Hours</MenuItem>
              <MenuItem value={"Other"} onClick={props.click}>Custom Range</MenuItem>
            </Select>
        </FormControl>
        
        
        </div>
        </form>
  )
}

export default SimpleSelect;