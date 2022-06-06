import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            friendsData: state.navbarFriendsMenu.friendsData,
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {

        }
    )
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer;


