import {connect} from "react-redux";
import {
    followAC,
    setNewCurrentPageAC,
    setToggleIsFetching,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setNewCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=>{dispatch(followAC(userId))},
        unfollow: (userId)=>{dispatch(unfollowAC(userId))},
        setUsers: (users)=>{dispatch(setUsersAC(users))},
        setNewCurrentPage: (neCurrentPage)=>{dispatch(setNewCurrentPageAC(neCurrentPage))},
        setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))},
        toggleIsFetching: (isToggle)=>{dispatch(setToggleIsFetching(isToggle))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
