import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader() {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor:"#1F1F63"}}
        open={true}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit"  style={{color:"white"}}/>
      </Backdrop>
    </div>
  );
}
