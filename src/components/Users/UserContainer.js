import Users from './Users';
import { connect } from 'react-redux';
import { followAction, unFollowAction, setUsers } from '../../redux/user-list-reducer';

const mapStateToProps = (state) => {
    console.log(state.userListPage);
    
    return {
        users: state.userListPage.users,
        isLoading: state.userListPage.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followClick: (userId) => dispatch(followAction(userId)),
        unFollowClick: (userId) => dispatch(unFollowAction(userId)),
        allUsers: (users) => dispatch(setUsers(users))
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;