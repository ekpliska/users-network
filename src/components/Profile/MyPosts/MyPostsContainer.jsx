import { addPostCreator, updateNewPosts } from '../../../redux/posts-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log('state', state);
    
    return {
        posts: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updatePosts: (currentText) => {
            dispatch(updateNewPosts(currentText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;