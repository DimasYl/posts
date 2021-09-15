import {useMemo} from "react";

export const useSortedPosts = (posts: any, sort: any) => {
    const sortedPost = useMemo(() => {
        console.log('прошла перерисовка')
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPost
}

export const usePosts = (posts: any, sort: any, query: any) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post: any) => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}