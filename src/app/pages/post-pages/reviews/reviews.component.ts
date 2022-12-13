import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent implements OnInit {
  public data$!: Observable<IPost[]>;
  public subPage = PostEnum.Review;

  constructor(
    private readonly postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getByType(PostEnum.Review);
  }
}
