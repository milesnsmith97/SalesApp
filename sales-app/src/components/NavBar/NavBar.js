import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
// import Logo from './components/img/MorrisonsLogo.png';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  ButtonAppBar:{
    flexGrow: 1,
    backgroundColor:'rgb(0,78,55)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <AppBar position='fixed' className={classes.ButtonAppBar}>
      
        <Toolbar>
      
            <Typography variant="h6" color="inherit" className={classes.title}>
              
              Operations Dashboard

            </Typography>
            
          {/* <Button color="inherit" className={classes.menuButton} href="https://www.mymorri.com/">Log Out</Button> */}
      
        </Toolbar>
      
      </AppBar>

    </div>
  )
}

export default ButtonAppBar;
