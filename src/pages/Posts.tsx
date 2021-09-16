import React, {useEffect, useState} from 'react';
import PostServise from '../api/Postservise';
import PostList, {PostType} from "../components/PostList";
import { useFetching } from '../hooks/useFetching';
import {usePosts} from "../hooks/usePosts";
import { getPageCount } from '../utils/pages';
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/myModal/MyModal";
import PostFilter from "../components/PostFilter";
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';


function Posts() {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
