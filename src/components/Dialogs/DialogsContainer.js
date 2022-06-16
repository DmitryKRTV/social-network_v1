import {addNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../../hok/WithAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {


    render() {
        return <>
            {<Dialogs
                addNewMessage = {this.props.addNewMessage}
                newMessageText={this.props.newMessageText}
                dialogsData={this.props.dialogsData}
                messagesData={this.props.messagesData}
                isAuth={this.props.isAuth}
            />}
        </>
    }
}

const mapStateToProps = (state) => {
    return ({
        newMessageText: state.dialogs.newMessageText,
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
    })
}


export default compose(
    connect(mapStateToProps, {addNewMessage}),
    WithAuthRedirect,
)(Dialogs)
