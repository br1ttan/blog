import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RouteEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponseComponent {
  public posts: IPost[] = [];

  private postSearch = combineLatest({
    paramTitle: this.activatedRoute.params.pipe((
      map((data) => data['query'])
    )),
    posts: this.postService.getAll()
  })
  .subscribe(({ paramTitle, posts }) => {
    const arr: IPost[] = [];
  console.log(posts)
    for (let values of Object.values(posts)) {
      arr.push(...Object.values(values).filter((post) => (
        post.title.toLowerCase().includes(paramTitle)))
    )};
  
    this.posts = arr;
    this.changeDetector.detectChanges();
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly postService: PostService,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  public handleNavigate(data: IPost): void {
    console.log(data)
    this.router.navigateByUrl(`${data.post}/${data.post}/${data.id}`);
  }
}
