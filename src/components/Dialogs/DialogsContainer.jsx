// Контейнерная компонента

import { sendMessage, updateNewMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

const mapStateToProps = (state) => {
    return {
        users: state.userData.users,
        messages: state.dialogsPage.messages,
        newDialogMessage: state.dialogsPage.newDialogMessage,
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

const AuthRedirect = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);

export default DialogsContainer;