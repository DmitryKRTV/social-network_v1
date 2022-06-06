import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return (
        {
            profile: state.profile,
            newPostText: state.profile.newPostText,
            postsData: state.profile.postsData,
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: ()=>{dispatch(addPostActionCreator());},
            updateNewPostText: (text)=>{dispatch(updateNewPostTextActionCreator(text));}
        }
    )
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;