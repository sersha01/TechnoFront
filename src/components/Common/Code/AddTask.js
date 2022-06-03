import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


const AddTask = ({ setSwap2,value }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    setSwap2("signup");
  };

  return (
    <div>
      { value === "btn" ? ( <Button
                  color="warning"
                  variant="contained"
                  className="bginfo"
                  onClick={handleClickOpen} 
                  >
                  Have a code? Signup here
                </Button>) : (<p onClick={handleClickOpen} className="cp">
        Have a code? Signup here
      </p>) }
      

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="codebox"
      >
        <DialogTitle id="alert-dialog-title">
          Enter the code
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="d-block p-3 px-5"
              style={{ width: "500px", height: "fit-content" }}
            >
              <p>Enter the code you've been given to signup to the console. If not yet given contact your respective advisors or staff members.</p>
              <TextField
                margin="normal"
                required
                fullWidth
                name="code"
                label="Code"
                type="text"
                id="code"
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
