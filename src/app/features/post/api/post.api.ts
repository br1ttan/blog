import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, Observable, toArray } from "rxjs";
import { environment } from "src/environments/environment";
import { IPost, PostType } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class PostApi {
    private readonly dataBase = environment.dataBase;

    constructor(
        private readonly http: HttpClient
    ) { }

    public send(post: IPost): Observable<IPost> {
        return this.http.post<IPost>(`${this.dataBase}/${post.post}.json`, post);
    }

    public getByType(postType: PostType): Observable<IPost> {
        return this.http.get<IPost>(`${this.dataBase}/${postType}.json`);
    }

    public getByTypeAndId(postType: PostType, id: string | number): Observable<IPost> {
        return this.http.get<IPost>(`${this.dataBase}/${postType}/${id}.json`);
    }

    public getAll(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.dataBase}/.json`);
    }
}
