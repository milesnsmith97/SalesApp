import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Navigation.css';
import LoginDialog from './LoginDialog';
// The Header creates links that can be used to navigate
// between routes.

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
    right: {
      height:'75px',
        width: '75px',
        transition: '.5s',
        float:'right',
        boxShadow:'-5px 5px 0 rgb(255,188,0)',
        transform: 'rotate(45deg)',
        cursor:'pointer',
        position:'fixed',
        boxShadow:'-5px 5px 0 rgb(255,188,0)',
        float:'right',
        marginLeft:'50px',
        opacity:'0.5',
        right:'0'

        

    },
    left: {
      height:'75px',
        width: '75px',
        transition: '1s',
        float:'left',
        boxShadow:'-5px 5px 0 rgb(255,188,0)',
        transform: 'rotate(225deg)',
        cursor:'pointer',
        position:'fixed',
        marginRight:'50px',
        float:'left',
        
  

    },
    container: {

    },
  }));
const Header = props => {
    const classes = useStyles();  



    
    return (
                
    <div className={classes.root}>

  
    
      <AppBar position='fixed' className={classes.ButtonAppBar}>
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              DashBoard Ops 
            </Typography>      
<LoginDialog/>      
        </Toolbar>
      </AppBar>
    </div>
) }

export default Header
