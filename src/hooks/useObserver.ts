import {useEffect, useRef} from "react";

export const useObserver = (ref: any, canLoad: boolean, isLoading: any, callback: Function) => {
    const observer = useRef<IntersectionObserver>()

    useEffect(() => {
        if (isLoading) return
        //     if(observer.current) {
        //     observer.current.disconnect();
        // }
        var cb = function (entries: any) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        if (observer.current) {
            observer.current = new IntersectionObserver(cb);
        }
        if (observer.current) {
            observer.current.observe(ref.current)
        }
    }, [isLoading])
}