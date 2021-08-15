import React, {useState, useEffect} from 'react';
import { Grid,  
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LeftSide from '../LeftSide'
import RightSide from '../RightSide'
import Post from '../Post';
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    blog_body: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(4),
        display:'flex',
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
        fontSize:'28px !important'
    },
    container: {
        background: '#FFFFFF',
        border: '1px solid rgba(203, 203, 203, 0.8)',
        borderRadius: '10px',
        // width: '100%',
        // maxWidth: '360px',
    },
    left_side: {
        paddingRight: theme.spacing(2),
        padding: theme.spacing(2,0)
    },
    right_side: {
        paddingLeft: theme.spacing(2),
        padding: theme.spacing(2,0)
    }
}))


function Blog(props) {
    const classes = useStyles();
    // Redux
    const {posts, auth} = props;

    const filterPost = () =>{

    }

    return (
        <>
            <Grid container className={classes.blog_body}> 
                {/* <Grid item md={3} className={classes.left_side}>
                    <LeftSide></LeftSide>
                </Grid> */}
                
                <Grid item md={6}>
                    <div className={classes.post}>
                        {posts && posts.map((post)=> {
                            return (
                                <Post data = {post} key={post.id} post_view={false}></Post>
                            )
                        })}
                    </div>
                </Grid>
                {/* <Grid item md={3} className={classes.right_side}>
                    <RightSide></RightSide>
                </Grid> */}
            </Grid>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['posts'])
)(Blog)