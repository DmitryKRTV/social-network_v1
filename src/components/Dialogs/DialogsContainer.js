import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return (
        {
            newMessageText: state.dialogs.newMessageText,
            dialogsData: state.dialogs.dialogsData,
            messagesData: state.dialogs.messagesData,
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addNewMessage: ()=>{dispatch(addMessageActionCreator())},
            onMessageChange: (text)=>{dispatch(updateNewMessageTextActionCreator(text))},
        }
    )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;