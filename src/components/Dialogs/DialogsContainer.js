import {addNewMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";

class DialogsContainer extends React.Component {

    onAddNewMessage () {
        this.props.addNewMessage();
    }

    changeMessage(e) {
        let text = e.target.value;
        this.props.updateNewMessage(text);
    }

    render() {
        return <>
            <Dialogs
                newMessageText={this.props.newMessageText}
                dialogsData={this.props.dialogsData}
                messagesData={this.props.messagesData}
                onAddNewMessage={this.onAddNewMessage}
                changeMessage={this.changeMessage}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return (
        {
            newMessageText: state.dialogs.newMessageText,
            dialogsData: state.dialogs.dialogsData,
            messagesData: state.dialogs.messagesData,
        }
    )
}


export default DialogsContainer = connect(mapStateToProps, {
    addNewMessage,
    updateNewMessage,
})(DialogsContainer);
