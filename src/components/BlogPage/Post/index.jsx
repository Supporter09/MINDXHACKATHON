import React from 'react'
import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import Loader from '../../widgets/Loader'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import parse from 'html-react-parser'

const useStyles = makeStyles((theme) => ({
    post_link: {
        "& > a":{
            textDecoration: 'none',
            transition: '0,3s',
            color: '#000',
            '&:hover, &:active': {
                textDecoration: 'none',
                color:'#1F1F63'
            },
        },
        
    },
    post_container: {
        
        marginTop: theme.spacing(2),
        backgroundColor: '#fff',
        borderRadius: '10px',
        border: '1px solid #CBCBCB',
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
        "& > a":{
            textDecoration: 'none',
            transition: '0,3s',
            color: '#000',
            '&:hover, &:active': {
                textDecoration: 'none',
                color:'#1F1F63'
            },
        },
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
    post_owner: {
        padding: theme.spacing(2),
        '& > .ava': {
            display: 'flex',
            alignContent: 'center',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        '& > div > img': {
            borderRadius: '50% !important',
            height: '50px',
            width: '50px',
            overflow: 'hidden',
            verticalAlign: 'center',
        },
        '& > div > p, .post': {
            textAlign: 'left',
            margin: '0px'
        },
        '& > div > .post': {
            paddingTop: theme.spacing(1),
        },
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
            color: 'rgba(0, 0, 0, 0.4)',
            fontFamily: 'PoppinsVN-400, serif'
        },
        '& > div > .react_section > p > .icon': {
            color: 'rgba(0, 0, 0, 1)',
            marginRight: theme.spacing(1)
        },
    },
    postImage: {
        width: '100%',
        height: '100%',
        minHeight: '400px',
        backgroundColor: 'transparent',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1F1F63',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px 10px 0px 0px'
    }
}))

function Post(props) {
    const classes = useStyles()
    const {auth} = props;
    const data = props.data;
    const date = data.createdAt.toDate().toDateString()
    const postView = props.post_view
    return (
            <div className={classes.post_container}>
               {data.photoURL.toString().length <= 0
                    ? (
                        <></>
                    )
                    : (
                        <div className={classes.postImage} style={{backgroundImage: `url(${data.photoURL.toString()})`,}}>
                        </div> 
                    )
               }
                <Grid container className={classes.post_owner}>
                    <div className="ava" className={classes.post_link}>
                        <Link to={'/profile/'+data.authorId}>
                            <Avatar src={data.authorPhotoURL.toString()} alt="post_owner_ava" />
                        </Link>
                    </div>
                    <div style={{paddingLeft:'10px'}} >
                        
                            <Typography variant='body1' className={classes.post_link} style={{fontSize:'16px'}}>
                                <Link to={'/profile/'+data.authorId}>
                                    {data.authorName}
                                </Link>
                            </Typography>
                        
                        {postView
                        ? (
                            <Typography variant='body2' style={{fontFamily:'PoppinsVN-500,serif', fontWeight: 'bold', paddingTop:'2px', color: 'rgba(0, 0, 0, 0.5)', fontSize:'13px'}}>
                                {date} 
                            </Typography>
                        )
                        : (
                            
                                <Typography variant='body2' className={classes.post_link} style={{fontFamily:'PoppinsVN-500,serif', fontWeight: 'bold', paddingTop:'2px', color: 'rgba(0, 0, 0, 0.5)', fontSize:'13px'}}>
                                    <Link to={`./post/${data.id.toString()}`} >    
                                        {date} 
                                    </Link>
                                </Typography>
                             
                        )
                        }
 
                    </div>
                        {postView 
                        ? (
                            <div style={{width:'100%'}}>
                                <div className='post'>
                                    <a href={`./post/${data.id.toString()}`} className={classes.post_link}>
                                        <Typography variant='h2' className={classes.post_content} > 
                                            {data.title.toString()}
                                        </Typography>
                                    </a>
                                        <Typography variant= 'body1' style={{fontSize: '16px', fontFamily:'PoppinsVN-400,serif', textAlign: 'left', fontWeight: 'bold',color: 'rgba(0, 0, 0, 0.6)'}}>
                                            {data.content.toString()}
                                        </Typography>
                                    <div className={classes.hash_tag_container}>
                                        {data.hashTags && data.hashTags.map((item)=>{
                                            return (
                                                <Typography variant='body1' className={classes.hash_tag}>
                                                    {item.toString()}
                                                </Typography>
                                            )
                                        })}
                                    </div>
                                </div>    
                            </div>
                            )
                        : (
                            <div style={{paddingLeft:'48px',width:'100%'}}>
                                <div className='post'>
                                    
                                        <Typography variant='h2' className={classes.post_content}> 
                                            <Link to={`./post/${data.id.toString()}`} className={classes.post_link}>
                                                {data.title}
                                            </Link>
                                        </Typography>
                                        <div className={classes.hash_tag_container}>
                                            {data.hashTags && data.hashTags.map((item)=>{
                                                return (
                                                    <Typography variant='body1' className={classes.hash_tag}>
                                                        {item.toString()}
                                                    </Typography>
                                                )
                                            })}
                                        </div>
                                    
                                </div>    
                                <div className='react_section'>
                                    <Typography variant='body2' style={{display:'inline-block', marginRight:'15px'}}>
                                        <FavoriteBorderIcon className="icon"/>
                                        {data.likes.length} reactions
                                    </Typography>
                                    <Typography variant='body2' style={{display:'inline-block'}}>
                                        <ChatBubbleOutlineIcon className="icon"/>
                                        {data.comments.length} comments
                                    </Typography>
                                </div>
                            </div>
                        )
                        }
                </Grid>       
            </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(Post)