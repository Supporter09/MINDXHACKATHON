import React, { useState } from "react";

import { makeStyles, withStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import MuiAlert from '@material-ui/lab/Alert';

// import logo from "../../Assets/logo_2.svg";

import DefaultButton from "../../widgets/Button";

import { firestore as db } from "../../../utils/firebase.js";

// Init EmailJS 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    padding: "5%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    [theme.breakpoints.down('md')]: {
      fontSize:'28px'
  },
  },
  image: {
    width: "100%",
    height: "100%",
    "@media screen and (max-width:500px)": {
      display: "none",
    },
  },
  home_btn: {
    border: '2px solid #1F1F63',
    borderRadius:'10px',
    fontSize: '1rem',
    backgroundColor:'#1F1F63',
    '&:hover':{
        
        backgroundColor:'transparent',
        color: '#1F1F63',
        border: '2px solid #1F1F63'
    }
},
}));

const CustomizedInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#03083F",
    },
    "& .MuiOutlinedInput-root": {
      "& input, textarea": {
        fontFamily: "PoppinsVN-400, sans-serif",
        fontSize: "14px",
        fontWeight: "normal",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#03083F",
      },
    },
  },
})(TextField);

export default function ContactForm() {
    // Style Area
    const classes = useStyles();

    //Variables Area
    const defaultValues = {
        name: "",
        email: "",
        message: "",
    }
    
    //States Area
    const [inputValues, setInputValues] = useState(defaultValues)

    const [error, setError] = useState({
        status: false,
        message: "",
    })
    
    const [open, setOpen] = useState(false)

    const [submissionStatus, setSubmissionStatus] = useState({
        status: "",
        message: "",
    })
    
   
    //Method Area
    const emailValidation = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleChange = async (e) => {
        await setInputValues({ ...inputValues, [e.target.name]: e.target.value });

        if (emailValidation(inputValues.email)) {
            setError({
                status: false,
                message: ""
            })
        }
    };    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!emailValidation(inputValues.email)) {
            return setError({
                status: true,
                message: "Email không đúng định dạng"
            })
        }

        await db
            .collection("requests")
            .add({ ...inputValues })
            .then(() => {
                setOpen(true)
                setSubmissionStatus({
                    status: "success",
                    message: "Bạn đã gửi yêu cầu thành công!"
                })
            })
            .catch((err) => {
                setOpen(true)
                setSubmissionStatus({
                    status: "error",
                    message: err.message
                })
            })
        const response = await fetch("https://vietcodemailsender.herokuapp.com/send", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              inputValues
            }),
          })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            if (resData.status === "success") {
              console.log("Message Sent");
            } else if (resData.status === "fail") {
              console.log("Message failed to send");
            }
          })
          .then(() => {
            setInputValues(defaultValues)
          });
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}  style={{ margin: "auto" }}>
          <Typography
            variant="h1"
            className={classes.title}
            style={{ paddingBottom: "5%" }}
          >
          </Typography>
          <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <FormControl fullWidth>
              <CustomizedInput
                required
                label="Name"
                name="name"
                variant="outlined"
                id="custom-css-outlined-input"
                value={inputValues.name}
                onChange={(e) => handleChange(e)}
              />
              <CustomizedInput
                required
                error={error.status}
                helperText={error.message}
                label="Email"
                name="email"
                variant="outlined"
                id="custom-css-outlined-input"
                value={inputValues.email}
                onChange={(e) => handleChange(e)}
              />
              <CustomizedInput
                required
                label="Message"
                name="message"
                variant="outlined"
                id="custom-css-outlined-input"
                value={inputValues.message}
                onChange={(e) => handleChange(e)}
                multiline
                rows={5}
              />
            </FormControl>
            <DefaultButton type="submit" className={classes.home_btn}>Gửi</DefaultButton>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              action={
                <>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
            >
              <Alert onClose={handleClose} severity={submissionStatus.status}>
                {submissionStatus.message}
              </Alert>
            </Snackbar>
          </form>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <img
            src={logo}
            alt="logo"
            className={classes.image}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
