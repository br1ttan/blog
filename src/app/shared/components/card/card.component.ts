import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostEnum, RouteEnum } from '@core';
import { IPost } from '@features/post';

@Component({
  selector: 'card [data][subPage]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input()
  public data!: IPost;

  @Input()
  public subPage!: PostEnum;
  
  constructor(
    private readonly router: Router
  ) {}
  
  public ngOnInit(): void {
    console.log(this.data)
  }
    
  public navigateToDetailPage(post: IPost, subPage: PostEnum): void {
    this.router.navigateByUrl(`${subPage}/${RouteEnum.Details}/${post.id}`);
  }
}
