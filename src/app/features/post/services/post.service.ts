import { Injectable } from "@angular/core";
import { filter, map, Observable, toArray } from "rxjs";
import { PostApi } from "../api";
import { IPost, PostType } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private readonly postApi: PostApi
    ) { }
    
    public send(post: IPost, postType: PostType): Observable<IPost> {
        return this.postApi.send(post, postType)
            .pipe(
                map((response: any) => {
                    return {
                        ...post,
                        id: response.name,
                        date: new Date(post.date),
                    }
                }));
    }

    public getByType(postType: PostType): Observable<IPost[]> {
        return this.postApi.getByType(postType)
            .pipe(
                filter(response => response !== null),
                map((response: { [key: string]: any }) => {
                    return Object
                        .keys(response)
                        .map(key => ({
                            ...response[key],
                            id: key,
                            date: new Date(response[key].date)
                        }))
            }));
    }

    public getByTypeAndId(postType: PostType, id: string | number): Observable<IPost> {
        return this.postApi.getByTypeAndId(postType, id);
    }

    public getAll(): Observable<IPost[]> {
        return this.postApi.getAll();
    }
}
