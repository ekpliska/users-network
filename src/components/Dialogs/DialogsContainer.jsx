// Контейнерная компонента

import { sendMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        users: state.userData.users,
        messages: state.dialogsPage.messages,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (messageValue) => {
            dispatch(sendMessage(messageValue))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);