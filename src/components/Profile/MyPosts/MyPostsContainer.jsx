import { addPostCreator } from '../../../redux/posts-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (textPost) => {
            dispatch(addPostCreator(textPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;