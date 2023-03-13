import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  // Button,
  Link,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import useStyles from "./styles";

const Navbar = () => {
  const { classes } = useStyles();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarFirst} onClick={onClick}>
            <FeedIcon style={{ marginRight: "20px" }} />
            <Typography variant="h6">LifeBank Tech News</Typography>
          </div>
          <div className={classes.toolbarSecond}>
            <Link href="/about" underline="none" color="#fff">
              About Me
            </Link>
            <Link href="/register" underline="none" color="#fff">
              {/* <Button>Login/Register</Button> */}
              REGISTER/LOGIN
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
