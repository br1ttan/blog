import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPost, PostEnum } from '@core';
import { PostService } from '@services';
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
    private postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getDifferentPosts(PostEnum.Review);
  }
}
