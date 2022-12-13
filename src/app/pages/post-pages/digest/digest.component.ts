import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digest',
  templateUrl: './digest.component.html',
  styleUrls: ['./digest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigestComponent implements OnInit {
  public data$!: Observable<IPost[]>;
  public subPage = PostEnum.Digest;

  constructor(
    private readonly postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getByType(PostEnum.Digest);
  }
}
