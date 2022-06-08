import {addNewMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../../hok/WithAuthRedirect";

class DialogsContainer extends React.Component {

    onAddNewMessage() {
        this.props.addNewMessage();
    }

    changeMessage(e) {
        let text = e.target.value;
        console.log(this.props.updateNewMessage(text))
    }

    render() {
        return <>
            {<Dialogs
                newMessageText={this.props.newMessageText}
                dialogsData={this.props.dialogsData}
                messagesData={this.props.messagesData}
                onAddNewMessage={this.onAddNewMessage}
                changeMessage={this.changeMessage}
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


let AuthRedirectComponent = WithAuthRedirect(DialogsContainer);


export default connect(mapStateToProps, {addNewMessage, updateNewMessage})(AuthRedirectComponent);
