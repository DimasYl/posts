import React from 'react';
import PostItem from "./PostItem";

export type PostType = {
    id: number,
    title: string,
    body: string
}
export type PostListPropsType = {
    posts: Array<PostType>,
    title: string,
    removePost: (post: PostType) => void
}

const PostList: React.FC<PostListPropsType> = ({posts, title, removePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => <PostItem number={index + 1}
                                                  key={post.id} post={post} removePost={removePost}/>)}
        </div>
    )
};

export default PostList;