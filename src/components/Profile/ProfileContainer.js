import React from 'react';
import Profile from "./Profile";
import {connect, useDispatch} from "react-redux";
import {getProfileThunkCreator, getStatsThunk, updateStatsThunk} from "../../redux/profileReducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        let dispatch = useDispatch();
        return (
            <Component
                {...props}
                router={{location, navigate, params, dispatch}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userIdFromProps = this.props.router.params.userId
        if (!userIdFromProps) userIdFromProps = 24342;
        this.props.router.dispatch(getProfileThunkCreator(userIdFromProps))
        this.props.getStatsThunk(userIdFromProps);
    }

    render() {

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status,
});



let withUrlDataContainerComponent = withRouter(withRouter(ProfileContainer));

export default connect(mapStateToProps, {getProfileThunkCreator, getStatsThunk, updateStatsThunk})(withUrlDataContainerComponent);