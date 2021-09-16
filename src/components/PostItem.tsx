import React from 'react';
import {PostType} from "./PostList";
import MyButton from './UI/button/MyButton';


export type PostItemPropsType = {
    post: PostType
    removePost: (post: PostType) => void
}

const PostItem: React.FC<PostItemPropsType> = ({post, removePost}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => {removePost(post)}}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;