import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPost, PostEnum } from '@core';
import { PostService } from '@services';
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
    private postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getDifferentPosts(PostEnum.Blog);
  }
}
