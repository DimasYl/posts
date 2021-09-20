import React from 'react';
import {PostType} from "./PostList";
import MyButton from './UI/button/MyButton';
import {useHistory} from "react-router-dom";


export type PostItemPropsType = {
    post: PostType
    removePost: (post: PostType) => void
}

const PostItem: React.FC<PostItemPropsType> = ({post, removePost}) => {
    const router = useHistory()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => {removePost(post)}}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;