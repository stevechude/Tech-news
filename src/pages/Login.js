import React from "react";
import { Box, TextField, Typography, Button, CssBaseline } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../components/styles";
import { setLoginEmail, setLoginPassword } from "../redux/features/appSlice";

const Login = () => {
  const { classes } = useStyles();
  const loginEmail = useSelector((state) => state.newsArticles.loginEmail);
  const loginPassword = useSelector(
    (state) => state.newsArticles.loginPassword
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setLoginEmail(""));
    dispatch(setLoginPassword(""));
  };

  return (
    <>
      <CssBaseline />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography className={classes.signup} variant="h3">
          SIGN IN
        </Typography>
        <div className={classes.registerForm}>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            value={loginEmail}
            onChange={(e) => dispatch(setLoginEmail(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Enter Password"
            variant="outlined"
            value={loginPassword}
            onChange={(e) => dispatch(setLoginPassword(e.target.value))}
          />
          <Button
            className={classes.registerButton}
            variant="contained"
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Login;
