import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IPost, PostType } from "@core";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private readonly dataBaseUrl = 'https://ng-blog-e0cec-default-rtdb.europe-west1.firebasedatabase.app/';

    constructor(
        private readonly http: HttpClient
    ) { }

    public sendPost(post: IPost, postType: PostType): Observable<IPost> {
        return this.http.post(`${this.dataBaseUrl}/${postType}.json`, post)
            .pipe(
                map((response: any) => {
                    return {
                        ...post,
                        id: response.name,
                        date: new Date(post.date),
                    }
                }));
    }

    public getDifferentPosts(postType: PostType): Observable<IPost[]> {
        return this.http.get<IPost>(`${this.dataBaseUrl}${postType}.json`)
            .pipe(map((response: { [key: string]: any }) => {
                return Object
                    .keys(response)
                    .map(key => ({
                        ...response[key],
                        id: key,
                        date: new Date(response[key].date)
                    }))
            }));
    }

    public getPostById(postType: PostType, id: string | number): Observable<IPost> {
        return this.http.get<IPost>(`${this.dataBaseUrl}${postType}/${id}.json`);
    }

    public getFilteredPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.dataBaseUrl}.json`)
    }
}
