/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import QRCode from "qrcode.react";
import { Button, FormControl, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../css/style.css";
import logo from "./../images/logo.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Mainpage() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div>
      <Container component="main" fixed>
        <div>
          <form className={classes.paper}>
            <img src={logo} alt="Logo" style={{ width: "20vw" }} />
            <h1 style={{ color: "white" }}>BUKSU VISITOR LOG MONITORING</h1>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#5BC0BE",
                color: "black",
                fontFamily: "tahoma",
                fontSize: "30px",
              }}
              onClick={()=>{
                //alert("HI");
                history.push('/sign-up');
              }}
            >
              VISITOR
            </Button>
            <br />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#5BC0BE",
                color: "black",
                fontFamily: "tahoma",
                fontSize: "30px",
              }}
            >
              ADMIN
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Mainpage;
