import React, {useMemo, useState} from 'react';
import './App.css';
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'a-Javascript', body: 'z-description'},
        {id: 2, title: 'b-Javascript 2', body: 'x-description'},
        {id: 3, title: 'c-Javascript 3', body: 'y-description'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPost = useMemo(()=>{
        console.log('прошла перерисовка')
        if(filter.sort){
            // @ts-ignore
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
            return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query,sortedPost])

    const createPost = (newPost: PostType) => {
        // @ts-ignore
        setPosts([...posts, newPost])
    }

    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm  create={createPost} />
            <hr style={{margin: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
                 <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>



        </div>
    );
}

export default App;
