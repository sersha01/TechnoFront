import React, { useContext, useEffect, useState } from "react";
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
import AuthContext from "../../../Context/AuthContext";

const AddTask = ({ title, value }) => {

  const { getAdvisors, getDomains, getBatches, advisors, domains, batches, createBatch, createDomain, createGroup } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [location, setLocation] = useState("");
  const [batch, setBatch] = useState("");

  const handleClickOpen = () => {
    if (value === "batch") {
    getAdvisors()
    }else if(value === "addgroup"){
      getAdvisors()
      getDomains()
      getBatches()
    }
    setName("")
    setDomain("")
    setAdvisor("")
    setLocation("")
    setBatch("")
    setOpen(true);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
      },
    },
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (value === "batch"){
      createBatch(batch, advisor, location);
    }else if(value === "domain"){
      createDomain(domain);
    }else if (value === "addgroup"){
      createGroup(batch, name, advisor, domain);
    }
    setOpen(false);
  }

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
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
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
                    value={batch}
                    onChange={(e)=>setBatch(e.target.value)}
                    placeholder="Enter batch number here.."
                  />
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Advisor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={advisor}
                      onChange={(e) => setAdvisor(e.target.value)}
                      autoWidth
                      label="Advisor name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {advisors && advisors.map((advisor) => (
                        <MenuItem key={advisor.id} value={advisor.id}>
                          {advisor.username}
                        </MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                  <FormControl className="mb-4">
                    <InputLabel id="location-label">
                      Location
                    </InputLabel>
                    <Select
                      labelId="location-label"
                      id="location-selected"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      autoWidth
                      label="Advisor name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      <MenuItem value={'kochi'}>Kochi</MenuItem>
                      <MenuItem value={'calicut'}>Calicut</MenuItem>
                      <MenuItem value={'trivandrum'}>Trivandrum</MenuItem>
                      <MenuItem value={'dubai'}>Dubai</MenuItem>  
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
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Advisor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={advisor}
                      onChange={(e) => setAdvisor(e.target.value)}
                      autoWidth
                      label="Advisor name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {advisors && advisors.map((advisor) => (
                        <MenuItem key={advisor.id} value={advisor.id}>
                          {advisor.username}
                        </MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                </Row>
              )}
              {value === "addgroup" && (
                <Row className="my-2">
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Batch
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                      autoWidth
                      label="Batch name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {batches && batches.map((batch) => (
                        <MenuItem key={batch.id} value={batch.id}>
                          {batch.batchno}
                        </MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name here.."
                    className="my-2"

                  />
                   <FormControl className="mt-4 mb-2">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Advisor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={advisor}
                      onChange={(e) => setAdvisor(e.target.value)}
                      autoWidth
                      label="Advisor name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {advisors && advisors.map((advisor) => (
                        <MenuItem key={advisor.id} value={advisor.id}>
                          {advisor.username}
                        </MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Domain
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      autoWidth
                      label="Domain name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {domains && domains.map((domain) => (
                        <MenuItem key={domain.id} value={domain.id}>
                          {domain.name}
                        </MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                </Row>
              )}

              <Row className=""></Row>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} autoFocus>
            Agree
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
