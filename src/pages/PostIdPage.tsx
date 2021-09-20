import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../api/Postservise";
import Loader from "../components/UI/loader/Loader";

type ComType = {
    email: string
    body: string
}

const PostIdPage = () => {
    const params = useParams<{id: string}>()
    const [post, setPost] = useState({id:'', title:''})
    const [comments, setComments] = useState<Array<ComType>>([])

    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostServise.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching( async () => {
        const response = await PostServise.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        // @ts-ignore
        fetchPostById().then(r => r)
        // @ts-ignore
        fetchComments().then(r => r)
    }, [])


    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии к посту</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                    <div style={{marginTop: 15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;