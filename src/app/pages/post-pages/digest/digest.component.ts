import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPost, PostEnum } from '@core';
import { PostService } from '@services';
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
    private postService: PostService
  ) { }

  public ngOnInit(): void {
    this.data$ = this.postService.getDifferentPosts(PostEnum.Digest);
  }
}
