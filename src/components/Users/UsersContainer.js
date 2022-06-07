import {connect} from "react-redux";
import {
    follow,
    setNewCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow, toggleIsFollowingProgress,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setNewCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        });
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setNewCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
})(UsersContainer);
