import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  public data$ = this.postService.getByType(PostEnum.Blog);

  constructor(
    private readonly postService: PostService,
    private readonly router: Router
  ) { }

  public handleNavigate(data: IPost): void {
    this.router.navigateByUrl(`${data.post}/${RouteEnum.Details}/${data.id}`);
  }
}
