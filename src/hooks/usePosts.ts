import {useMemo} from "react";
import {PostType} from "../components/PostList";

export const useSortedPosts = (posts: Array<PostType>, sort: string) => {
    return useMemo(() => {
        console.log('прошла перерисовка')
        if (sort) {
            // @ts-ignore
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
}

export const usePosts = (posts: Array<PostType>, sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter((post: PostType) => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}