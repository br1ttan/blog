import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  public data$ = this.postService.getByType(PostEnum.Blog);

  constructor(
    private readonly postService: PostService,
    private readonly router: Router
  ) { }

  public handleNavigate(data: IPost): void {
    this.router.navigateByUrl(`${data.post}/${RouteEnum.Details}/${data.id}`);
  }
}
