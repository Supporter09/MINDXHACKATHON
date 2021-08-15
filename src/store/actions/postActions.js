export const createPost = (post) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        const profile = getState().firebase.profile;

        firestore
        .collection('posts')
        .add({
            ...post,
            authorName: profile.publicname,
            authorId: authorId,
            authorPhotoURL: profile.user_ava,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type:'CREATE_POST', post });
        }).catch((err)=>{
            dispatch({ type:'CREATE_POST_ERROR', err });
        })
    }
}

export const deletePost = (postId) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore
        .collection('posts')
        .doc(postId)
        .delete().then(() => {
            dispatch({ type:'DELETE_POST_SUCCESS' });
        }).catch((error) => {
            dispatch({ type:'DELETE_POST_FAIL', error });
        });
    } 
}

export const updatePost = (post,postId) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        const profile = getState().firebase.profile;
    
        firestore
        .collection('posts')
        .doc(postId)
        .update({
            ...post,
            authorName: profile.publicname,
            authorId: authorId,
            authorPhotoURL: profile.user_ava,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'UPDATE_SUCCESS'})
        }).catch((error) => {
            dispatch({type:'UPDATE_ERROR',error})
        })
    } 
}

export const likePost = (postId) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        const posts = getState().firestore.ordered.posts
        let result = []
        for (let index = 0; index < posts.length; index++) {
            if(posts[index].id == postId){

                let likes = posts[index].likes
                if(likes == 0 || likes == []){
                    result = [authorId]
                }else{
                    if(likes.includes(authorId)){
                        const error="YOU ARE ALREADY LIKES THIS POST"
                        dispatch({type:'LIKE_ERROR',error})
                    }else{
                        result = [
                            ...likes,
                            authorId
                        ]
                    } 
                }
            }   
        }
        firestore
        .collection('posts')
        .doc(postId)
        .update({
            likes: result
        }).then(() => {
            dispatch({type:'LIKE_SUCCESS'})
        }).catch((error) => {
            dispatch({type:'LIKE_ERROR',error})
        })
    } 
}

export const unlikePost = (postId) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        const posts = getState().firestore.ordered.posts
        let result = []

        for (let index = 0; index < posts.length; index++) {
            if(posts[index].id == postId){
                let likes = posts[index].likes
                result = likes
            }   
        }
        firestore
        .collection('posts')
        .doc(postId)
        .update({
            likes: result.filter(like => like !== authorId)
        }).then(() => {
            dispatch({type:'LIKE_SUCCESS'})
        }).catch((error) => {
            dispatch({type:'LIKE_ERROR',error})
        })
    } 
}

export const commentPost = (postId,comment) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        const posts = getState().firestore.ordered.posts
        let result = []
        for (let index = 0; index < posts.length; index++) {
            console.log(posts[index].id )
            if(posts[index].id == postId){
                console.log("FOUND FOUND")
                let comments = posts[index].comments
                if( comments == []){
                    result = [comment]
                }else{
                    result = [
                        ...comments,
                        comment
                    ]
                }
            }   
        }
        firestore
        .collection('posts')
        .doc(postId)
        .update({
            comments: result
        }).then(() => {
            dispatch({type:'COMMENT_SUCCESS'})
        }).catch((error) => {
            dispatch({type:'COMMENT_ERROR',error})
        })
    } 
}