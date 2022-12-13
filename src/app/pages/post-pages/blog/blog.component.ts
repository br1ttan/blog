import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  public data$!: Observable<IPost[]>;
  public subPage = PostEnum.Blog;

  constructor(
    private readonly postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getByType(PostEnum.Blog);
  }
}
