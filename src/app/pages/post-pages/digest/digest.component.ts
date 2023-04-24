import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { IPost, PostService } from '@features/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digest',
  templateUrl: './digest.component.html',
  styleUrls: ['./digest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigestComponent {
  public data$ = this.postService.getByType(PostEnum.Digest);

  constructor(
    private readonly postService: PostService,
    private readonly router: Router
  ) { }

  public handleNavigate(data: IPost): void {
    this.router.navigateByUrl(`${data.post}/${RouteEnum.Details}/${data.id}`);
  }
}
