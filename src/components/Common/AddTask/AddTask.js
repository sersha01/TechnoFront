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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const AddTask = ({ title, value }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
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
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="d-block p-3 px-5"
              style={{ width: "500px", height: "fit-content" }}
            >
              {value === "domain" && (
                <Row className="my-2">
                  <TextField
                    id="outlined-basic"
                    label="Domain name"
                    variant="outlined"
                    placeholder="Enter domain name here"
                  />
                </Row>
              )}
              {value === "batch" && (
                <Row className="my-2">
                  <TextField
                    id="outlined-basic"
                    label="Batch number"
                    variant="outlined"
                    placeholder="Enter batch number here.."
                  />
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Advisor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Advisor name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                      <MenuItem value={10}>Aneesha</MenuItem>
                     
                    </Select>
                  </FormControl>
                </Row>
              )}
              {value === "advisor" && (
                <Row className="my-2">
                  <TextField
                    id="outlined-basic"
                    label="Advisor"
                    variant="outlined"
                    placeholder="Enter name here.."
                  />
                </Row>
              )}
              {value === "group" && (
                <Row className="my-2">
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
                </Row>
              )}
              {value === "group" && (
                <Row className="my-2">
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
                </Row>
              )}

              <Row className=""></Row>
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
