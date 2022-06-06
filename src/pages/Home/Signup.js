import React, { useContext } from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container2 from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "./signuplogo.svg";
import AuthContext from "../../Context/AuthContext";
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const { signupUser, errUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
            <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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

{
  /* <Box component="form" noValidate sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputRef={register}
                  id="Username"
                  sx={{ input: { color: "var(--dark)" } }}
                  InputLabelProps={{
                    style: { color: "var(--dark)" },
                  }}
                  label="Username"
                  name="username"
                  autoComplete="Username"
                />
                <label className="text-danger">
                  {errUser}
                  {errors.username?.message}
                </label>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputRef={register}
                  sx={{ input: { color: "var(--dark)" } }}
                  InputLabelProps={{
                    style: { color: "var(--dark)" },
                  }}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <label className="text-danger">{errors.email?.message}</label>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  inputRef={register}
                  sx={{ input: { color: "var(--dark)" } }}
                  InputLabelProps={{
                    style: { color: "var(--dark)" },
                  }}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <label className="text-danger">
                  {errors.password?.message}
                </label>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Re-Password"
                  inputRef={register}
                  sx={{ input: { color: "var(--dark)" } }}
                  InputLabelProps={{
                    style: { color: "var(--dark)" },
                  }}
                  type="password"
                  id="password"
                  autoComplete="re-password"
                />
                <label className="text-danger">
                  {errors.cpassword && "Passwords doesn't match"}
                </label>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I have read and agreed to all the terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    setSwap2("video");
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box> */
}
