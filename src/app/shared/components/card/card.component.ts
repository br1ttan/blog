import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPost, PostEnum, RouteEnum } from '@core';

@Component({
  selector: 'card [data][subPage]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  public data!: IPost;

  @Input()
  public subPage!: PostEnum;
  
  constructor(
    private readonly router: Router
  ) {}

  public navigateToDetailPage(post: IPost, subPage: PostEnum): void {
    this.router.navigateByUrl(`${subPage}/${RouteEnum.Details}/${post.id}`);
  }
}
