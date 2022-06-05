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
import LeadContext from "../../../Context/LeadContext";
import AdvisorContext from "../../../Context/AdvisorContext";

const AddTask = ({ title, value, form }) => {
  const {
    domains,
    reviewers,
    getDomains,
    getReviewers,
  } = useContext(AuthContext) ;

  const {
    reviewPassed,
    reviewRepeated,
  } = useContext(AdvisorContext);
  
  const {
    advisors,
    batches,
    createBatch,
    createDomain,
    createGroup,
    getAdvisors,
    getBatches,
    studentManage,
    updateDomain,
    updateBatch,
  } = useContext(LeadContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [location, setLocation] = useState("");
  const [batch, setBatch] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [remark, setRemark] = useState("");
  const [date, setDate] = useState("");


  const handleClickOpen = () => {
    if (value === "batch") {
      getAdvisors();
    } else if (value === "addgroup" ) {
      getAdvisors();
      getDomains();
      getBatches();
    } else if (value === "completed" || value === "repeated") {
      getReviewers()
    } else if (value === "st_manage") {
      getBatches();
      getDomains();
    }
    setName("");
    setDomain("");
    setAdvisor("");
    setLocation("");
    setBatch("");
    setReviewer("");
    setRemark("");
    setDate("");
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

  // const handleDate = (date) => {
  //   console.log(date);
  //   var d = new Date(date),
  //       month = '' + (d.getMonth() + 1),
  //       day = '' + d.getDate(),
  //       year = d.getFullYear();
  //   if (month.length < 2) 
  //       month = '0' + month;
  //   if (day.length < 2) 
  //       day = '0' + day;
  //   return [day, month, year].join('/');
  // };

  const handleSubmit = () => {
    if (value === "batch") {
      createBatch(batch, advisor, location);
    } else if (value === "domain") {
      createDomain(domain);
    } else if (value === "addgroup") {
      createGroup(batch, name, advisor, domain);
    } else if (value === "completed" ) {
      reviewPassed(form, reviewer, remark, date)
    } else if (value === "repeated") {
      reviewRepeated(form, reviewer, remark, date)
    } else if (value === "updateDomain") {
      updateDomain(form, domain)
    }else if (value === "updateBatch") {
      updateBatch(form, advisor)
    }else if (value === "st_manage") {
      studentManage(form, batch, domain)
    }
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
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter domain name here"
                  />
                </Row>
              )}
              {value === "st_manage" && (
                <Row className="my-2">
                  <FormControl className="my-1">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Batch
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      autoWidth
                      maxHeight="200px"
                      value={batch}
                      onChange={(e) => {setBatch(e.target.value)}}
                      label="Batch"
                      MenuProps={MenuProps}
                    >
                       {batches &&
                        batches.map((batch) => (
                          <MenuItem key={batch.id} value={batch.id}>
                            {batch.name}
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
                      maxHeight="200px"
                      label="Domain"
                      MenuProps={MenuProps}
                    >
                      {domains &&
                        domains.map((domain) => (
                          <MenuItem key={domain.id} value={domain.id}>
                            {domain.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  </Row>
              )}
              {value === "updateDomain" && (
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
              {(value === "completed" || value === "repeated") && (
                <Row className="my-2">
                  <FormControl className="my-4">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Reviewer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={reviewer}
                      onChange={(e) => setReviewer(e.target.value)}
                      autoWidth
                      label="Reviewer name"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {reviewers &&
                        reviewers.map((reviewer) => (
                          <MenuItem key={reviewer.id} value={reviewer.id}>
                            {reviewer.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Remark"
                    variant="outlined"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder="Enter remark here"
                  />
                  <input type="date" className="mt-4 py-3 rounded border-1" value={date}
                    onChange={(e) => {setDate(e.target.value)}}></input>
                </Row>
              )}
              {value === "batch" && (
                <Row className="my-2">
                  <TextField
                    id="outlined-basic"
                    label="Batch name"
                    variant="outlined"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    placeholder="Enter batch name here.."
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
                      {advisors &&
                        advisors.map((advisor) => (
                          <MenuItem key={advisor.id} value={advisor.id}>
                            {advisor.username}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl className="mb-4">
                    <InputLabel id="location-label">Location</InputLabel>
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
                      <MenuItem value={"kochi"}>Kochi</MenuItem>
                      <MenuItem value={"calicut"}>Calicut</MenuItem>
                      <MenuItem value={"trivandrum"}>Trivandrum</MenuItem>
                      <MenuItem value={"dubai"}>Dubai</MenuItem>
                    </Select>
                  </FormControl>
                </Row>
              )}
              {value === "updateBatch" && (
                <Row className="my-2">
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
                      label="Advisor"
                      maxHeight="200px"
                      MenuProps={MenuProps}
                    >
                      {advisors &&
                        advisors.map((advisor) => (
                          <MenuItem key={advisor.id} value={advisor.id}>
                            {advisor.username}
                          </MenuItem>
                        ))}
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
                      {advisors &&
                        advisors.map((advisor) => (
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
                      {batches &&
                        batches.map((batch) => (
                          <MenuItem key={batch.id} value={batch.id}>
                            {batch.name}
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
                      {advisors &&
                        advisors.map((advisor) => (
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
                      {domains &&
                        domains.map((domain) => (
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
