import React, {useRef, useState} from 'react';
import './App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Javascript 2', body: 'description'},
        {id: 3, title: 'Javascript 3', body: 'description'},
    ])
    const [title, setTitle] = useState('abra')
    const bodyInputRef = useRef()

    const addNewPost = (e: any) => {
        e.preventDefault()
        console.log(title)
        // @ts-ignore
        console.log(bodyInputRef.current.value)
    }
    return (
        <div className="App">
            <form>
                {/*Управляемый инпут*/}
                <MyInput
                    value={title}
                    type="text"
                    placeholder='Название поста'
                    onChange={(e: any) => setTitle(e.target.value)}/>
                {/*Неуправляемый инпут*/}
                <MyInput
                    type="text"
                    placeholder='Описание поста'
                    ref={bodyInputRef}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title='Посты про JS'/>
        </div>
    );
}

export default App;
