import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {
  public data$ = this.postService.getByType(PostEnum.Review);

  constructor(
    private readonly postService: PostService,
    private readonly router: Router
  ) { }

  public handleNavigate(data: IPost): void {
    this.router.navigateByUrl(`${data.post}/${RouteEnum.Details}/${data.id}`);
  }
}
