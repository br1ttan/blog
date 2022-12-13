import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost, PostService } from '@features/post';
import { BehaviorSubject, map, Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponseComponent implements OnInit {
  public posts$ = new BehaviorSubject<IPost | null>(null);

  public get posts(): Observable<IPost | null> {
    return this.posts$.asObservable();
  }

  public set setPosts(data: IPost | null) {
    this.posts$.next(data);
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initPosts();
  }

  public initPosts(): void {
    this.postService.getAll()
      .subscribe((result) => this.searchPosts(result));
  }

  private searchPosts(posts: IPost[]): void {
    const arr: any[] = [];

    const mappedPosts = Object.keys(posts)
      .map((result: any) => posts[result]);

    for (let i = 0; i < mappedPosts.length; i++) {
      const everyPost: any = Object.values(mappedPosts[i])[0];

      arr.push(everyPost);
    }

    this.activatedRoute.params
      .pipe(
        map((param) => arr.find((value: any) => value.title.match(param['query']))),
      )
      .subscribe((result: IPost) => this.setPosts = result)

    this.changeDetector.markForCheck();
  }
}
