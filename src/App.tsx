import React, {useState} from 'react';
import './App.css';
import PostList, {PostType} from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'a-Javascript', body: 'z-description'},
        {id: 2, title: 'b-Javascript 2', body: 'x-description'},
        {id: 3, title: 'c-Javascript 3', body: 'y-description'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    // const bodyInputRef = useRef()
    const createPost = (newPost: PostType) => {
        // @ts-ignore
        setPosts([...posts, newPost])
    }

    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort: any) => {
        setSelectedSort(sort)
        // @ts-ignore
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm  create={createPost} />
            <div>
                <hr style={{margin: '15px'}}/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList removePost={removePost} posts={posts} title='Посты про JS'/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
