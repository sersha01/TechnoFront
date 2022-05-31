import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Code from "../../components/Common/Code/AddTask";
import Button from "@mui/material/Button";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./login.svg";

const Login = ({ setSwap, setSwap2 }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
          
          <Col md={7}>
        <Box
          className="bg p-5 w-100 rounded-3 "
          sx={{
            marginTop: -1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            <img width="500px" height="100px" src={Logo} alt=''/>
          <Typography component="h1" variant="h4">
            Login here
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              className="textfld"
              sx={{ input: { color: "var(--dark)" } }}
              InputLabelProps={{
                style: { color: "var(--dark)" },
              }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              className="textfld"
              sx={{ input: { color: "var(--dark)" } }}
              InputLabelProps={{
                style: { color: "var(--dark)" },
              }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="signinbtn"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  className="textdark"
                  variant="body2"
                  onClick={() => {
                    setSwap("video");
                  }}
                >
                  Back
                </Link>
              </Grid>
              <Grid item>
                <Code setSwap2={setSwap2}></Code>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
