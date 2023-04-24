export interface IPost {
    id?: string,
    image: string | ArrayBuffer | null,
    title: string,
    text: string,
    author: string,
    date: Date | string,
    selectedPost: unknown,
    post: PostType
}

export type PostType = 'blog' | 'review' | 'digest';
