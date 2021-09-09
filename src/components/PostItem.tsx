import React from 'react';
import {PostType} from "./PostList";


export type PostItemPropsType = {
    post: PostType
}

const PostItem: React.FC<PostItemPropsType> = ({post}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;