import React, {useState, useEffect} from 'react';
import { Grid, 
    Typography, 
    Paper,
    IconButton  } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import FormControl from "@material-ui/core/FormControl";
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Loader from '../../widgets/Loader'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import parse from 'html-react-parser'
import { deletePost, updatePost, likePost,unlikePost , commentPost } from '../../../store/actions/postActions';
import UpdateBlog from '../UpdateBlog';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

const useStyles = makeStyles((theme) => ({
    post_root: {
        display: 'flex',
        flexDirection: 'column'
    },
    header_container:{
        width: '100%',
        height: '100%',
        minHeight: '786px',
        backgroundColor: 'transparent',
        position: 'relative',
        
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    blog_body: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(2),
        justifyContent:'center'
    },
    post: {
        margin: theme.spacing(2,0)
    },
    right_panel: {
        padding: theme.spacing(0,4)
    },
    heading: {
        marginBottom:theme.spacing(1),
        textAlign: 'left',
        fontSize:'24px !important'
    },
    container: {
        background: '#FFFFFF',
    },
    left_side: {
        paddingRight: theme.spacing(2),
        padding: theme.spacing(2,0)
    },
    right_side: {
        paddingLeft: theme.spacing(2),
        padding: theme.spacing(2,0)
    },
    post_link: {
        textDecoration: 'none',
        transition: '0,3s',
        '&:hover, &:active': {
            textDecoration: 'none',
            '& > p,h2': {
                color: '#1F1F63'
            },
        },

    },
    post_container: {
        
        marginTop: theme.spacing(2),
        backgroundColor: '#fff',
        borderRadius: '4px',
        // border: '1px solid #CBCBCB',
        '& > img': {
            maxWidth: '100%'
        }
    },
    post_content: {
        textAlign: 'left !important',
        fontFamily: 'PoppinsVN-400, serif',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '26px !important',
        paddingTop: theme.spacing(2)
    },
    hash_tag: {
        display: 'inline',
        marginRight: theme.spacing(2),
        color:'rgba(31, 31, 99, 0.4)',
        fontWeight: 'normal',
        fontSize: '16px',
        '&:hover, &:active': {
            color:'#000000'
        }
    },
    hash_tag_container: {
        paddingTop: theme.spacing(0)
    },
    post: {
        margin: theme.spacing(2,0)
    },
    right_panel: {
        padding: theme.spacing(0,4)
    },
    ava: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '& > img': {
            borderRadius: '50% !important',
            height: '50px',
            width: '50px',
            overflow: 'hidden',
            verticalAlign: 'center',
        },
    },
    post_heading: {
        paddingTop: theme.spacing(1),
        display:'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
        '&  > p': {
            textAlign: 'left',
            margin: '0px'
        },
    },
    post_owner: {
        padding: theme.spacing(2),
        '& > div': {
            display: 'flex',
            alignContent: 'center',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        '& > div > .react_section': {
            paddingTop: theme.spacing(1),
        },
        '& > div > .react_section > p': {
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'PoppinsVN-500, serif'
        },
        '& > div > .react_section > p > .icon': {
            color: 'rgba(0, 0, 0, 1)',
            marginRight: theme.spacing(1)
        },
    },
    post_head: {
        width:'100%',
        flexDirection: 'row !important',
        justifyContent: 'space-between !important',
        '& > div > p, .post': {
            textAlign: 'left',
            margin: '0px'
        },
        '& > div > .post': {
            paddingTop: theme.spacing(1),
        },
    },
    body_text: {
        fontSize: '16px', 
        fontFamily:'PoppinsVN-400,serif', 
        textAlign: 'left', 
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: theme.spacing(0)
    },
    wrapper: {
        maxWidth: '100%',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        
        '& > img': {
            maxWidth: '150px',
            height: '150px',
            borderRadius: '50% !important',
        },
        '& > .blurred': {
            position: 'absolute',
            zIndex: '0',
            filter: 'blur(100px)',
        },
        '& > .cover': {
            zIndex: '1',
            position: 'relative'
        }
    },
    user_data: {
        padding: theme.spacing(0,2)
    },
    user_heading: {
        fontSize:'20px !important',
        color:'#000',
        textAlign: 'left',
        margin: theme.spacing(0),
        paddingTop: theme.spacing(2)
    },
    user_subtitle: {
        fontFamily: 'PoppinsVN-400,serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    comment_container: {
        padding: theme.spacing(2)
    },
    comment_heading: {
        textAlign: 'left', 
        fontSize: '20px'
    }, 
    comment: {
        padding: theme.spacing(2)
    },
    comment_tag: {
        margin: theme.spacing(2,0)
    },
    appBar: {
        position: 'relative',
        height: '50px',
        minHeight: '64px'
    },
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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


function PostView(props) {
    // Variable area
    const classes = useStyles();
    const { id } = props.match.params; 
    let {post, auth, profile} = props
    const date = post.createdAt.toDate().toDateString()
    const defaultValues = {
        comment: "",
    }
    const likes = post.likes
    const likeState = likes.includes(auth.uid)

    // State area
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [inputValues, setInputValues] = useState(defaultValues)
    const [openDialog, setOpenDialog] = React.useState(false)
    const [openAlert, setOpen] = useState(false)
    const [like, setLike] = useState(likeState)
    const [submissionStatus, setSubmissionStatus] = useState({
        status: "",
        message: "",
    })
    
    
   
    //Method Area
    const handleChange = async (e) => {
        await setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };    

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleLike = () => {
        if(likes.includes(auth.uid)){
            props.unlikePost(id)
            setLike(false)
        }else{
            props.likePost(id)
            setLike(true)
        }
        
    }

    const handleLikeNotAuth = () => {
        props.history.push("/signin")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const comments =
        { 
            user_image: profile.user_ava,
            user_name: profile.publicname,
            createdAt: new Date(),
            message: inputValues.comment
        }
        props.commentPost(id,comments)
        setInputValues(defaultValues)
    };

    const deletePost =() => {
        props.deletePost(id)
    }


    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    if (post) {
        return (
            <>
            <Navbar/>
            <div >
                {post.photoURL
                ? (
                    <div className={classes.header_container} style={{backgroundImage: `url(${post.photoURL})`}}>
    
                    </div>
                )
                :(
                    <></>
                )
                }
                <Grid container className={classes.blog_body}> 
                    <Grid item md={6}>
                        <Paper elevation={2} className={classes.post}>
                            <div className={classes.post_container}>
                                <Grid container className={classes.post_owner}>
                                    <div className={classes.post_head} >
                                        <div style={{display:'flex'}}>
                                            <div  className={classes.ava}>
                                                <Avatar src={post.authorPhotoURL} alt="post_owner_ava" />
                                            </div>
                                            <div style={{paddingLeft:'10px'}} className={classes.post_heading}>
                                                <Typography variant='body1' style={{fontSize:'16px'}}>
                                                    {post.authorName.toString()}
                                                </Typography>
                                                <Typography variant='body2' style={{fontFamily:'PoppinsVN-500,serif', fontWeight: 'bold', paddingTop:'2px', color: 'rgba(0, 0, 0, 0.5)', fontSize:'13px'}}>
                                                    {date}
                                                </Typography>            
                                                
                                            </div>
                                        </div>
                                        
                                        <Grid md ={1} xs = {1}>
                                            {auth.uid == post.authorId 
                                            ? (
                                                <IconButton
                                                aria-label="account of current user"
                                                aria-controls="menu-appbar"
                                                aria-haspopup="true"
                                                onClick={handleMenu}
                                                color="inherit"
                                                className={classes.ava_content}
                                                >
                                                    <MoreHorizIcon className = {classes.config} />
                                                </IconButton>
                                            )
                                            : (null)
                                            }
                                            
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                                }}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                style: {
                                                    marginTop: "50px",
                                                }
                                                }}
                                            >
                                                <MenuItem onClick={handleClose} className= {classes.setting} >
                                                    <Typography onClick={handleOpenDialog} variant= 'body1' style={{fontSize: '16px', fontFamily:'PoppinsVN-400,serif', textAlign: 'left', fontWeight: 'bold',color: 'rgba(0, 0, 0, 0.6)',margin:'0px'}}>
                                                        Chỉnh sửa bài viết
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} className= {classes.setting} >
                                                    <Typography onClick={deletePost} variant= 'body1' style={{fontSize: '16px', fontFamily:'PoppinsVN-400,serif', textAlign: 'left', fontWeight: 'bold',color: 'rgba(0, 0, 0, 0.6)',margin:'0px'}}>
                                                        Chuyển vào thùng rác
                                                    </Typography>
                                                </MenuItem>
                                                
                                            </Menu>
                                        </Grid>
                                    </div>
                                    
                                    <div style={{width:'100%'}}>
                                        <div className='post'>
                                            <Typography variant='h2' className={classes.post_content} > 
                                                {post.title.toString()}
                                            </Typography>
                                                    
                                            <Typography variant= 'body1' className={classes.body_text}>
                                                {post.content.toString()}
                                            </Typography>
                                            <div>
                                                {parse(post.text_editor_content.toString())}
                                                {/* {console.log(post.text_editor_content.toString())} */}
                                            </div>
                                        </div>    
                                        <div className='react_section'>
                                            <Typography variant='body2' style={{display:'inline-block', marginRight:'15px'}}>
                                                    {auth.uid ? (
                                                        <IconButton onClick={handleLike} >
                                                            {like
                                                            ? <FavoriteIcon className="icon" style={{fill:'#1F1F63'}} />
                                                            : <FavoriteBorderIcon className="icon"  />
                                                            }
                                                        </IconButton>
                                                    )
                                                    : (
                                                        <IconButton onClick={handleLikeNotAuth} >
                                                            <FavoriteBorderIcon className="icon"  />
                                                        </IconButton>
                                                    )
                                                    }
                                                    {post.likes.length} reactions
                                            </Typography>
                                            <Typography variant='body2' style={{display:'inline-block'}}>
                                                <IconButton disabled={true}>
                                                    <ChatBubbleOutlineIcon  className="icon"/>
                                                </IconButton>
                                                {post.comments.length} comments
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>       
                            </div>
                        </Paper>
                    <Paper elevation={2}>
                        <div className={classes.comment_container}>
                            <Typography variant='body1' className={classes.comment_heading}>
                                Bình luận
                            </Typography>
                            <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                                <FormControl fullWidth>
                                <CustomizedInput
                                    required
                                    label="Viết bình luận của bạn ..."
                                    name="comment"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={inputValues.comment}
                                    onChange={(e) => handleChange(e)}
                                />
                                </FormControl>
                                <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={openAlert}
                                autoHideDuration={5000}
                                onClose={handleCloseAlert}
                                action={
                                    <>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseAlert}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                    </>
                                }
                                >
                                <Alert onClose={handleCloseAlert} severity={submissionStatus.status}>
                                    {submissionStatus.message}
                                </Alert>
                                </Snackbar>
                            </form>
                            {post.comments && post.comments.map(comment => {
                                return(
                                    <Paper elevation={2} className={classes.comment_tag}>
                                
                                        <Grid className={classes.comment}>
                                            
                                            <div style={{display:'flex'}}>
                                                <div  className={classes.ava}>
                                                    <Avatar src={comment.user_image} alt="post_owner_ava" />
                                                </div>
                                                <div style={{paddingLeft:'10px'}} className={classes.post_heading}>
                                                    <Typography variant='body1' style={{fontSize:'16px'}}>
                                                        {comment.user_name}
                                                    </Typography>          
                                                </div>
                                            </div>
                                            <Typography variant= 'body1' className={classes.body_text} >
                                                {comment.message}
                                            </Typography>
                                            
                                        </Grid>
                                    </Paper>            
                                )
                            })}
                            
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item md={3} className={classes.right_side}>
                        <Paper elevation={2} className={classes.container}>
                            <div style = {{backgroundColor: '#222',borderRadius: '10px 10px 0px 0px',paddingTop:'15px'}}>
                                <div className={classes.wrapper}>
                                    <img className="blurred" src={post.authorPhotoURL} alt="" />
                                    <img className="cover" src={post.authorPhotoURL} alt="" />
                                </div>
                                <Typography variant='h2' className={classes.heading} style={{color:'#fff',textAlign:'center',fontSize: '24px!important'}}>
                                    {post.authorName}
                                </Typography>
                            </div>
                            <div className={classes.user_data}>
                                {/* <Typography variant='subtitle1' className={classes.user_subtitle}>
                                    I'm the boss of under-18s.
                                </Typography> */}
                                <div>
                                    <Typography variant='body1' className={classes.user_heading} >
                                        Work
                                    </Typography>
                                    <Typography variant='subtitle1' className={classes.user_subtitle}>
                                        I'm a full-stack developer.
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant='body1' className={classes.user_heading} >
                                        Nơi ở hiện tại
                                    </Typography>
                                    <Typography variant='subtitle1' className={classes.user_subtitle}>
                                        Hanoi
                                    </Typography>
                                </div>
                            </div>
                            
                        </Paper>
                    </Grid>
                </Grid>
                
                {/* POP UP UPDATE FORM */}
                <Dialog fullScreen  open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleCloseDialog} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                    <UpdateBlog oldPost={post} postId={id} handleCloseDialog={handleCloseDialog}></UpdateBlog>
                </Dialog>
            </div>
        <Footer/>
        </>
        )
    } else {
        return <Loader></Loader>
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id ;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null ;
    return {
        post: post,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (post,postId) => dispatch(updatePost(post,postId)),
        likePost: (postId) => dispatch(likePost(postId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
        commentPost: (postId,comment) => dispatch(commentPost(postId,comment)),
    }
  }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostView)
