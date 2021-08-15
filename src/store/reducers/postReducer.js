const initState = {
    posts: [
        {id:1,title: 'helloe', content: 'Ad laboris aute esse esse dolore commodo consectetur do ut.'},
        {id:2,title: 'helloe', content: 'Ad laboris aute esse esse dolore commodo consectetur do ut.'},
        {id:3,title: 'helloe', content: 'Ad laboris aute esse esse dolore commodo consectetur do ut.'}
    ]
}
 
const postReducer = (state= initState ,action) => {
    switch(action.type){
        case 'CREATE_POST': 
            console.log('created post', action.post);
            return state;
        case 'CREATE_POST_ERROR':
            console.log("Create post error ", action.err);
            return state;
        case 'DELETE_POST_SUCCESS':
            console.log("DELETE_POST_SUCCESS")
            return state
        case "DELETE_POST_FAIL":
            console.log("DELETE_POST_FAIL");
            return{
                state,
                postError: action.error.message
            }
        case "UPDATE_SUCCESS":
            console.log("UPDATE_SUCCESS")
            return state
        case "UPDATE_ERROR":
            console.log("UPDATE_ERROR")
            return{
                state,
                postError: action.error.message
            }
        case "LIKE_SUCCESS":
            console.log("LIKE_SUCCESS")
            return state
        case "LIKE_ERROR":
            console.log("LIKE_ERROR")
            return{
                state,
                postError: action.error.message
            }
        case "COMMENT_SUCCESS":
            console.log("COMMENT_SUCCESS")
            return state
        case "COMMENT_ERROR":
            console.log("COMMENT_ERROR")
            return{
                state,
                postError: action.error.message
            }
        default:
            return state;
    }
}

export default postReducer