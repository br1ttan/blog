import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost, PostType } from '@core';
import { PostService } from '@services';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailsComponent implements OnInit {
  public post$!: Observable<IPost>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getPostData();
  }
  
  private getPostData(): void {
    let firstParam = this.activatedRoute.snapshot.parent?.url[0].path as PostType;
    this.post$ = this.activatedRoute.params
    .pipe(switchMap((params: Params) => {
      return this.postService.getPostById(firstParam, params['id']);
    }))
  }
}
