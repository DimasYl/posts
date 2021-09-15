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
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    let pagesArray = getPagesArray(totalPages)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page)
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        // @ts-ignore
        fetchPosts().then(res => res)
    }, [page])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page: number) => {
        setPage(page)
        // @ts-ignore

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
            {postError &&
            <h1>Произошла ошибка </h1>
            }
            {isPostsLoading
                ? <div className={'block'}><Loader/></div>
                : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            }
            <div className='page__wrapper'>
                {pagesArray.map(p => {
                    return <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>
                })}
            </div>


        </div>
    );
}

export default App;
