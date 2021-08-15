import {auth, firestore} from '../../utils/firebase.js'
export const signIn = (credentials) => {
    return ( dispatch, getState, {getFirebase}) => {
        // const firebase = getFirebase();
        auth.signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
        )
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        });
    }
}

export const signOut = (credentials) => {
    return ( dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return ( dispatch, getState, {getFirebase}) => {
        auth.createUserWithEmailAndPassword(
            newUser.email, 
            newUser.password
        ).then((res)=>{
            console.log(newUser)
            return firestore.collection('users').doc(res.user.uid).set({
                user_ava: "https://images.unsplash.com/photo-1627343914645-30c843de8d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                fullname: newUser.fullName,
                publicname: newUser.publicName,
                jobs: "",
                live: "",
                joinDate: new Date(),
                posts: {},
            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: "SIGNUP_ERROR", err})
        })
    }
}


export const updateProfile = (newData) => {
    return ( dispatch, getState, {getFirebase}) => {
        const authorId = getState().firebase.auth.uid
        console.log(newData)
        firestore.collection("users").doc(authorId).update({
            user_ava: newData.photoURL,
            fullname: newData.fullName,
            publicname: newData.nickname,
            jobs: newData.jobs,
            live: newData.live
        }).then(() => {
            dispatch({type:'UPDATE_SUCCESS'})
        }).catch((err) => {
            dispatch({type:'UPDATE_ERROR',err})
        })
    }
}