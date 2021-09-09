import React from 'react';
import PostItem from "./PostItem";

export type PostType = {
    id: number,
    title: string,
    body: string
}
export type PostListPropsType = {
    posts: Array<PostType>,
    title: string
}

const PostList:React.FC<PostListPropsType> = ({posts, title}) => {
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
    {posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    )
};

export default PostList;