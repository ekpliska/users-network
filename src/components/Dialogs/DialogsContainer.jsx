// Контейнерная компонента

import { sendMessage, updateNewMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);