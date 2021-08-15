const initState = {
    authError: null
}

const authReducer = (state = initState ,action) => {
    switch( action.type ){
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: 'Login failed'
            }
        case "LOGIN_SUCCESS":
            console.log("login success")
            return{
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("SIGNOUT SUCCESS")
            return state
        case  "SIGNUP_SUCCESS":
            console.log("Signup success")
            return {
                ...state, 
                authError: null
            }
        case  "SIGNUP_ERROR":
            console.log("Signup success")
            return {
                ...state, 
                authError: action.err.message
            }
        case "UPDATE_SUCCESS":
            console.log("Update Success")
            return state
        case "UPDATE_ERROR":
            console.log("Update Error")
            return {
                ...state,
                updateError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer