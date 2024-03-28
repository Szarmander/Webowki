import {useQuery} from "@tanstack/react-query";
import {Comment} from "../types"

export const getComments = async (id: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
}

export const useComments = (id: string) => {
    return useQuery<Comment>({queryKey: ['comments', id], queryFn: () => getComments(id)})
}