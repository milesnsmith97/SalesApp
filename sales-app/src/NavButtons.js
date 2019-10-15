import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import './Navigation.css';
import IconButton from '@material-ui/core/IconButton';
 


const useStyles = makeStyles(theme => ({


    
    root: {
      flexGrow: 1,
      backgroundcolour:'rgb(0,78,55)'
    },
    NextPage: {
        flexGrow:1,
        position:'fixed',
        width:'100px',
        height:'75px',
        marginTop:'250px',
        marginRight:'50px',
        marginLeft:'50px',
        marginBottom:'0px',
        paddingTop:'20px',
        paddingLeft:'10px',
        paddingBottom:'10px',
        float:'left',
        textAlign:'center',
        color:'rbg(0,0,0)',
        borderColor:'primary.main',
        justifyContent:'center',
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        right:"0",
        display: 'inline-flex'
        
    },
    Paper: {
       
        
        
    },
    PrevPage: {
        flexGrow:1,
        position:'fixed',
        width:'100px',
        height:'75px',
        marginTop:'250px',
        marginRight:'50px',
        marginLeft:'50px',
        marginBottom:'0px',
        paddingTop:'20px',
        paddingLeft:'10px',
        paddingBottom:'10px',
        float:'right',
        textAlign:'center',
        color:'rbg(0,0,0)',
        borderColor:'none',
        justifyContent:'center',
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        left:"0",
        display: 'inline-flex'
        
        

        
    
    },
    NextPageTitle: {
        paddingTop:'30px'
    },
    PrevPageTitle: {
        paddingTop:'30px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        alignSelf:'center',
        marginTop:'10px',
        opacity:'1',
       


        
    },

    

    
  }));

  

function DataClear() {




}




export default function NavButtons() {
    const classes = useStyles();

    return (
        <div>    
        <Paper position='fixed' className={classes.NextPage}>
            
    
    <IconButton color="inherit" className={classes.menuButton}>
          
    
            
         
<Link class="router_link" to='/LineGraph'>  
<i class="material-icons">
arrow_forward_ios
</i>
          </Link>



         
    </IconButton>
        </Paper>

        <Paper  position='fixed' className={classes.PrevPage}>

           
            <IconButton color="inherit" className={classes.menuButton}>
          

          
          <Link class="router_link" to='/Charts'>
          <i class="material-icons">
           arrow_back_ios
</i>       
     

          </Link>
    
</IconButton>

        </Paper>

        </div>
    
      
    )
}
