import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../css/style.css";
import { Form, Input, SubmitButton } from "formik-antd";
import * as Yup from "yup";
import { Formik } from "formik";


const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First Name is Required"),
  sname: Yup.string().required("Surname is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  address: Yup.string().required("Address is Required"),
  contact: Yup.string().required("Contact is Required"),
  purpose: Yup.string().required("Purpose is Required"),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function App() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            fname: "",
            sname: "",
            email: "",
            address: "",
            contact: "",
            purpose: "",
          }}
        >
            <Form className={classes.form}>
              <Form.Item label="First name" name="fname">
                  <Input name="fname" placeholder="First Name"/>
              </Form.Item>
              <Form.Item label="Surname" name="sname">
                  <Input name="sname" placeholder="Surname"/>
              </Form.Item>
              <Form.Item label="Email" name="email">
                  <Input name="email" placeholder="Email"/>
              </Form.Item>
              <Form.Item label="Address" name="address">
                  <Input name="address" placeholder="Address"/>
              </Form.Item>
              <Form.Item label="Contact" name="contact">
                  <Input name="contact" placeholder="Contact"/>
              </Form.Item>
              <Form.Item label="Purpose of Visit" name="purpose">
                  <Input name="purpose" placeholder="Purpose of Visit"/>
              </Form.Item>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            </Form>
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
