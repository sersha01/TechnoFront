import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AuthContext from "../../../Context/AuthContext";
import StyleContext from "../../../Context/StyleContext";


const AddTask = ({ setSwap2,value }) => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const {errorToast} = useContext(StyleContext);

  const { isCodeValid, setSignUpBatch } = useContext(AuthContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    await isCodeValid(code).then((res) => {
      console.log(res.data);
      if (res.data.status !== 400) {
        if (res.data.message === "student") {
          setSignUpBatch(res.data.batch);
        }else {
          setSignUpBatch(0);
        }
        setOpen(false);
        setSwap2("signup");
      }else{
        errorToast("Invalid Code");
      }
    }).catch((err) => {
      console.log(err);
    });
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
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
