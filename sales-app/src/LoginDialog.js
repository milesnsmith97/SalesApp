import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import './Navigation.css'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LoginPage from './LoginPage';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}




export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen} 
            > 

            <Typography variant="h6" component="h2" >

    Login/Register

            </Typography>

        
            <i class="material-icons"
            onClick={handleClickOpen}>
            
supervised_user_circle
</i>
</IconButton>
     
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <LoginPage/>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}