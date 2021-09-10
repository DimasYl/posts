import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {PostType} from "./PostList";

type PostFormPropsType = {
    create: (newPost: PostType) => void
}

const PostForm: React.FC<PostFormPropsType> = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e: any) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),  ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый инпут*/}
            <MyInput
                value={post.title}
                type="text"
                placeholder='Название поста'
                onChange={(e: any) => setPost({...post, title: e.target.value})}/>
            {/*Неуправляемый инпут*/}
            <MyInput
                type="text"
                value={post.body}
                onChange={(e: any) => setPost({...post, body: e.target.value})}
                placeholder='Описание поста'
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;