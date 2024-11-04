import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction } from 'react';

export type DialogProps = {
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>,
    onClickYes:()=>Promise<void>,
    title:string,
    text:string,
}

const DialogItem = ({open, setOpen, onClickYes, title, text}:DialogProps) => {

    const handleClose=()=>{
        setOpen(false);
    }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={onClickYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  )
}


export default DialogItem