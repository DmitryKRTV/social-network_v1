import {addPost} from "../../../redux/profileReducer";
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


export default connect(mapStateToProps, {addPost})(MyPosts)
