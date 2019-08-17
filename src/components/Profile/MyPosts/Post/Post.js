import React from 'react';
import stylePost from './Post.module.css';

const Post = (props) => {
    return (
        <div className={stylePost.post}>
            <div className={stylePost.item}>
                {props.message}
            </div>
            <span>Like: {props.likeCount}</span>
        </div>
    )
}

export default Post;