import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

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
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>
            Посты не найдены
        </h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} removePost={removePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
};

export default PostList;