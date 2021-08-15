import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles, withStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import { green } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import { Editor } from '@tinymce/tinymce-react'; 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {updatePost} from '../../../store/actions/postActions.js'

// import logo from "../../Assets/logo_2.svg";

import DefaultButton from "../../widgets/Button";

import { firestore as db, storage } from "../../../utils/firebase.js";

// Init EmailJS 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    padding: "5%",
    paddingTop:"8%"
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily:'PoppinsVN-500,serif !important',
    fontSize: '32px !important'
  },
  image: {
    width: "100%",
    height: "100%",
    "@media screen and (max-width:500px)": {
      display: "none",
    },
  },
  profile_button: {
    backgroundColor: 'transparent',
    border: '2px solid #1F1F63',
    borderRadius: '6px',
    margin: '0',
    margin: '15px 0',
    padding: '10px 28px',
    ' & > span': {
        fontFamily: 'PoppinsVN-400,serif',
        color: '#000000',
        fontWeight:'bold',
        fontSize:'16px',
        
    },
    '&:hover':{
        padding: '10px 28px',
        backgroundColor: '#1F1F63',
        border: '2px solid #1F1F63',
        '& > span': {
            color: '#ffffff'
        }
    },
  },
  divider: {
    borderTop: '2px solid #1F1F63',
    width: '70%',
    margin: 'auto',
    marginBottom: '15px'
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    backgroundColor:'#1F1F63',
    color:'#fff',
    padding: '10px 28px',
    '&:hover': {
      padding: '10px 28px',
      backgroundColor:'rgba(31, 31, 99, 1)',
      color:'#fff'
    },
  },
  hashTags: {
    "& > label": {
      fontSize: '18px',
      color :'rgba(0,0,0,0.6)',
    },
    " & > div > input": {
      // padding: '4px 16px',
    }
  },
  input_container: {
    "& > label": {
        fontSize: '18px',
        color :'rgba(0,0,0,0.6)',
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
        fontWeight:'bold'
      },
      "&.Mui-focused fieldset": {
        borderColor: "#03083F",
      },
    },
  },
})(TextField);

const Input = styled('input')({
    display: 'none',
  });
  

function CreateBlog(props) {
    // Style Area
    const classes = useStyles();
    const {auth, postId} = props
    const oldPost = props.oldPost
    //Variables Area
    const defaultValues = {
        title: oldPost.title,
        content: oldPost.content,
        photoURL: oldPost.photoURL,
        hashTags: oldPost.hashTags.join(),
        text_editor_content: oldPost.text_editor_content
    }

    const imageDefaultValues = {
      image: null,
      progress:0,
      downloadURL: null
    }

    //States Area
    const [inputValues, setInputValues] = useState(defaultValues)
    const [Files, setFiles] = useState(imageDefaultValues)
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [newFile,setNewFile] = React.useState(false)
    const [content,setContent] = React.useState('')
    const [open, setOpen] = useState(false)

    const [submissionStatus, setSubmissionStatus] = useState({
        status: "",
        message: "",
    })

    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
    });
    //Method Area

    const handleEditorChange = (e) => {
      setContent(e.target.getContent())
    }

    const handleChange = async (e) => {
        await setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleSubmit = (url) => {
        // e.preventDefault()
        console.log("RUN RUN")
        const hashTag = inputValues.hashTags.replace(/\s/g, '').split(",")
        
        const result = {
          ...inputValues,
          ["photoURL"]: url,
          ["hashTags"]: hashTag,
          ["text_editor_content"]: content
        }
        props.createPost(result)
        setInputValues(defaultValues)
        props.handleCloseDialog()
    };
  
  const handleFileSelect = async (e) => {
    if(e.target.files[0]){
      let image = e.target.files[0]
      await setFiles({
        ...Files,
        ['image']: image
      })
      setSuccess(true);
      setLoading(false);
      setNewFile(true)
    } 
  }

  const handleUpload = (e) =>{
    e.preventDefault()
    console.log("RUN RUN")
    if(newFile){
        let file = Files.image;
        var storageRef = storage.ref();
        var uploadTask = storageRef.child('folder/' + file.name).put(file);
      
        uploadTask.on('state_changed',
          (snapshot) =>{
            var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
            setFiles({
              ...Files,
              ['progress']: progress
            })
          },(error) =>{
            setOpen(true)
            setSubmissionStatus({
              status: "error",
              message: error.message
            })
            // throw error
          },() =>{
            uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
              setFiles({
                ...Files,
                ['downloadURL']: url
              })
              setInputValues({
                ...inputValues,
                ['photoURL']: url
              });
              handleSubmit(url)
            })
            setFiles({
              ...Files,
              ['image']: null
            })
         }
       )
    }else{
        console.log("RUN RUN RUN RUN")
        handleSubmit(oldPost.photoURL)
    }
    
  }
  return (
    <div className={classes.root}>
 
      <Grid container>
        <Grid item xs={12} md={7}  style={{ margin: "auto" }}>
          <Typography
            variant="h1"
            className={classes.title}
            style={{ paddingBottom: "2%" }}
          >
            Chỉnh sửa
          </Typography>
          {/* <div className={classes.divider}></div> */}
          <form autoComplete="off" onSubmit={(e) => handleUpload(e)}>
            <FormControl fullWidth>
              <CustomizedInput
                required
                label="Tiêu đề..."
                name="title"
                variant="outlined"
                id="custom-css-outlined-input"
                value={inputValues.title}
                onChange={(e) => handleChange(e)}
                className={classes.input_container}
              />
              <Editor
                apiKey="pdghz8jzofv3tlt4rfqdkybgl0mckus15kmx6dzdq563ao1t"
                initialValue={defaultValues.text_editor_content}
                init={{
                    // width: 600,
                    height: 600,
                    plugins: [
                    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                    'table emoticons template paste help'
                    ],
                    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image | preview media fullpage | ' +
                    'forecolor backcolor emoticons | help',
                    menu: {
                    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
                    },
                    menubar: 'favs file edit view insert format tools table help',
                    // content_style: 
                    // "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap'); body { font-family: 'Poppins', sans-serif; }"
                }}
                onChange={(e)=> {handleEditorChange(e)}}
              />
              <div style={{display:'flex', alignItems:'center'}}>
                <label htmlFor="contained-button-file" style={{paddingRight:'20px',margin: '15px 0'}}>
                    <Input accept="image/*" id="contained-button-file" multiple type="file" name='files'  onChange={handleFileSelect} />
                    <Button  
                    className={buttonClassname} 
                    variant="contained" 
                    component="span"
                    startIcon={<SaveIcon />}
                    style={{padding: '13px 28px',}}
                    >
                    Upload
                    </Button>
                </label>
                
                <CustomizedInput
                  required
                  label="Hashtags ( phân biệt bởi dấu , )"
                  name="hashTags"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  value={inputValues.hashTags}
                  onChange={(e) => handleChange(e)}
                  style={{width:"100%", paddingRight:'15px'}}
                  className={classes.hashTags}
                />
                {/* <div style={{marginBottom: '.5rem',display:'flex',alignItems:'center'}}>
                  {Files.progress != 0 ? <LabelCircular progress={Files.progress} /> : null }
                  <Typography variant="body2" style={{color :'rgba(0,0,0,0.6)'}}>{Files.image && Files.image.name}</Typography>
                </div> */}
                <DefaultButton type='submit' className={classes.profile_button} onSubmit={(e) => handleUpload(e)}>Sửa</DefaultButton>
            </div>
            </FormControl>
            
            
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
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post,postId) => dispatch(updatePost(post,postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)