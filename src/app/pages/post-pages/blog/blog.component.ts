import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPost, PostEnum } from '@core';
import { PostService } from '@services';
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
    private postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getDifferentPosts(PostEnum.Blog);
  }
}
