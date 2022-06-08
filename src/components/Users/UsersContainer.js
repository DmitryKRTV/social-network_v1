import {connect} from "react-redux";
import {
    follow,
    setNewCurrentPage,
    unfollow, toggleIsFollowingProgress, getUsers,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hok/WithAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setNewCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           users={this.props.users}
                                                           toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                                                           followingInProgress={this.props.followingInProgress}
            />}

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId)=>{dispatch(followAC(userId))},
//         unfollow: (userId)=>{dispatch(unfollowAC(userId))},
//         setUsers: (users)=>{dispatch(setUsersAC(users))},
//         setNewCurrentPage: (neCurrentPage)=>{dispatch(setNewCurrentPageAC(neCurrentPage))},
//         setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))},
//         toggleIsFetching: (isToggle)=>{dispatch(setToggleIsFetchingAC(isToggle))},
//     }
// }

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setNewCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    }),
    WithAuthRedirect,
)(UsersContainer)

