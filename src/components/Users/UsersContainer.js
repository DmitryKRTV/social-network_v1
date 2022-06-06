import {connect} from "react-redux";
import {followAC, setNewCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=>{dispatch(followAC(userId))},
        unfollow: (userId)=>{dispatch(unfollowAC(userId))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        setNewCurrentPage: (neCurrentPage)=>{dispatch(setNewCurrentPageAC(neCurrentPage))},
        setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
