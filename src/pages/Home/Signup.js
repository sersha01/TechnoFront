import React, { useContext, useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container2 from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "./signuplogo.svg";
import AuthContext from "../../Context/AuthContext";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import AdvisorContext from "../../Context/AdvisorContext";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Username should contain 6 characters")
    .required("Userame is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should contain 6 characters")
    .required("Password is required"),
  cpassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Signup = ({ setSwap2 }) => {
  const {
    signupUser,
    errUser,
    getLocations,
    allLocations,
    allBranches,
    setLocationId,
    getBranch,
    LocationId,
    setBranchid,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <Container2 component="main" className="bglight signupbox">
      <Box
        className="bg p-5 w-100 rounded-3 "
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img width="500px" height="100px" src={Logo} alt="" />

        <Typography component="h1" variant="h3">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(signupUser)}>
          <div className="">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                {...register("username")}
                placeholder="Username"
              />
              <label className="text-danger">
                {errUser}
                {errors.username?.message}
              </label>
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                {...register("email")}
              />
              <label className="text-danger">{errors.email?.message}</label>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                aria-describedby="emailHelp"
                {...register("password")}
                placeholder="Enter Password"
              />
              <label className="text-danger">{errors.password?.message}</label>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                className="form-control"
                {...register("cpassword")}
                placeholder=" Confirm Password"
              />
              <label className="text-danger">
                {errors.cpassword && "Passwords doesn't match"}
              </label>
            </div>
            <div className="form-group mb-4">
              <label>Location</label>
              <Form.Select aria-label="Default select example" value={selectedOption} onChange={(e) => {
                          setSelectedOption(e.target.value);
                          setLocationId(selectedOption);
                          getBranch();
                        }}>
                <option>Select</option>
                {allLocations &&
                  allLocations.map((place) => {
                    return (
                      <option
                        value={place.id}
                      >
                        {place.place}
                      </option>
                    );
                  })}
              </Form.Select>
            </div>
            <div className="form-group mb-4">
              <label>Location</label>
              <Form.Select aria-label="Default select example">
                {allBranches &&
                  allBranches.map((place) => {
                    return (
                      <option
                        value={place.id}
                        onClick={() => {
                          setBranchid(place.id);
                        }}
                      >
                        {place.name}
                      </option>
                    );
                  })}
              </Form.Select>
            </div>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have read and agreed to all the terms and conditions"
              />
            </Grid>

            <div className="pt-2">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Sign Up
              </button>
            </div>
          </div>
          <div className="card-body flex-grow-0">
            <div className="form-group pb-3 text-center text-muted">
              Already have an account? <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </form>
      </Box>
    </Container2>
  );
};

export default Signup;
