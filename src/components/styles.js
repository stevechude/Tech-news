// import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      marginBottom: "30px",
    },
    headerDiv: {
      display: "flex",
      justifyContent: "center",
      marginTop: "-20px",
      marginBottom: "25px",
    },
    header: {
      fontWeight: "bold",
      fontSize: "60px",
    },
    welcomeDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    blinking: {
      fontWeight: "bold",
      // animation: `$blinking 1s ${theme.transitions.easing.easeInOut}`,
    },
    // "@keyframes blinking": {
    //   "0%": {
    //     opacity: 0,
    //   },
    //   "100%": {
    //     opacity: 1,
    //   },
    // },
    cardMedia: {
      paddingTop: "56.25%",
    },
    by: {
      marginTop: "7px",
    },
    link: {
      marginBottom: "-20px",
      display: "flex",
      justifyContent: "center",
    },
    pagination: {
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f7f7",
      width: "100%",
      padding: "20px 10px",
      margin: 0,
      listStyle: "none",
    },
    pageLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid",
      borderRadius: "5px",
      margin: "0 8px",
      fontSize: "18px",
      backgroundColor: "#fff",
      textDecoration: "none",
      padding: "10px, 12px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1a67b9",
        color: "#fff",
      },
    },
    prev: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid",
      borderRadius: "5px",
      margin: "0 8px",
      fontSize: "18px",
      backgroundColor: "#fff",
      textDecoration: "none",
      padding: "10px, 12px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1a67b9",
        color: "#fff",
      },
    },
    next: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid",
      borderRadius: "5px",
      margin: "0 8px",
      fontSize: "18px",
      backgroundColor: "#fff",
      textDecoration: "none",
      padding: "10px, 12px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#1a67b9",
        color: "#fff",
      },
    },
    // NAVBAR STYLING
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    toolbarFirst: {
      display: "flex",
      alignItems: "center",
      flex: 2,
      cursor: "pointer",
    },
    toolbarSecond: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
    },
    // REGISTER PAGE STYLING
    signup: {
      textAlign: "center",
      marginTop: "20px",
    },
    registerForm: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "3rem",
    },
    registerButton: {
      width: "30.8%",
    },
  };
});

export default useStyles;
