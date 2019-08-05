// Контейнерная компонента

import { sendMessage, updateNewMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.userData.users,
        messages: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (currentMessage) => {
            dispatch(updateNewMessage(currentMessage))
        },
        onSendMessage: () => {
            dispatch(sendMessage())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;