import { PostEnum } from "@core";
import { PostType } from "@features/post";

export interface localPosts {
    readonly post: PostType,
    readonly postName: string
}

export const POST_ARRAY: localPosts[] = [
    {
        post: 'digest',
        postName: 'Новини'
    },
    {
        post: 'review',
        postName: 'Обзори'
    },
    {
        post: 'blog',
        postName: 'Блог'
    },
]
