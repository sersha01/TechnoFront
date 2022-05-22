import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Row } from "react-bootstrap";

const AddTask = ({title,value}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className="addtask" onClick={handleClickOpen}>
        {title}
      </Button>
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
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="d-block p-3 px-5"
              style={{width: '500px', height: 'fit-content'}}
            >

              {value ==="domain" && <Row className="my-2">
                <TextField
                  id="outlined-basic"
                  label="Domain name"
                  variant="outlined"
                  placeholder="Enter domain name here"
                />
              </Row>}
              {value ==="batch" && <Row className="my-2">
                <TextField
                  id="outlined-basic"
                  label="Batch number"
                  variant="outlined"
                  placeholder="Enter batch number here.."
                />
              </Row>}
              {value ==="advisor" && <Row className="my-2">
                <TextField
                  id="outlined-basic"
                  label="Advisor"
                  variant="outlined"
                  placeholder="Enter name here.."
                />
              </Row>}
              {value ==="group" && <Row className="my-2">
              <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  placeholder="Enter name here.."
                />
                <TextField
                  id="outlined-basic"
                  label="Advisor"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Domain"
                  variant="outlined"
                />
              </Row>}
              {value ==="group" && <Row className="my-2">
              <TextField
                  id="outlined-basic"
                  label="Batch"
                  variant="outlined"
                />
              <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  placeholder="Enter name here.."
                />
                <TextField
                  id="outlined-basic"
                  label="Advisor"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Domain"
                  variant="outlined"
                />
              </Row>}
              
              <Row className="">
              </Row>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
