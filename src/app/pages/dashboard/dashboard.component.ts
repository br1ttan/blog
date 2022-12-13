import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  public data$!: Observable<IPost[]>;
  public subPage = PostEnum.Blog;

  constructor(
    private readonly postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getByType(PostEnum.Blog);
  }
}
