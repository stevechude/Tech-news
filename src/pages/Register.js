import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  CssBaseline,
  Link,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../components/styles";
import {
  setRegisterEmail,
  setRegisterPassword,
} from "../redux/features/appSlice";

const Register = () => {
  const { classes } = useStyles();
  const registerEmail = useSelector(
    (state) => state.newsArticles.registerEmail
  );
  const registerPassword = useSelector(
    (state) => state.newsArticles.registerPassword
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // const db = new sqlite3.Database("../../mydatabase.db");
    // const db = new sqlite3.Database("./mydatabase.db");
    // db.run(
    //   "INSERT INTO users (email, password) VALUES (?, ?)",
    //   [registerEmail, registerPassword],
    //   (err) => {
    //     if (err) {
    //       return console.error(err.message);
    //     }
    //     console.log("New user has been added to the database");
    //   }
    // );
    // db.close();
    dispatch(setRegisterEmail(""));
    dispatch(setRegisterPassword(""));
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
        // className={classes.box}
      >
        <Typography className={classes.signup} variant="h3">
          SIGN UP
        </Typography>
        <div className={classes.registerForm}>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            value={registerEmail}
            onChange={(e) => dispatch(setRegisterEmail(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Enter Password"
            variant="outlined"
            value={registerPassword}
            onChange={(e) => dispatch(setRegisterPassword(e.target.value))}
          />
          <Button
            className={classes.registerButton}
            variant="contained"
            color="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Typography>
            Already have an account?{" "}
            <Link href="/login" underline="none">
              Sign In
            </Link>
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Register;
