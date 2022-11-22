import { PostEnum } from "@core";

export interface localPost {
    post: PostEnum,
    postName: string
}

export const POST_ARRAY: localPost[] = [
    {
        post: PostEnum.Digest,
        postName: 'Новини'
    },
    {
        post: PostEnum.Review,
        postName: 'Обзори'
    },
    {
        post: PostEnum.Blog,
        postName: 'Блог'
    },
]
