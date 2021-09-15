import React, {useEffect, useState} from 'react';
import './App.css';
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostServise from "./api/Postservise";
import Loader from "./components/UI/loader/Loader";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts().then(r => r)
    }, [])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async ()=>{
            const posts = await PostServise.getAll()
            setPosts(posts)
            setIsPostsLoading(false)
        },3000)

    }


    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <div className={'block'}><Loader/></div>
                : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            }

        </div>
    );
}

export default App;
