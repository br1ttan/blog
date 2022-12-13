import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost, PostService, PostType } from '@features/post';
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
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getPostData();
  }
  
  private getPostData(): void {
    let firstParam = this.activatedRoute.snapshot.parent?.url[0].path as PostType;
    
    this.post$ = this.activatedRoute.params
    .pipe(
      switchMap((params) => {
        return this.postService.getByTypeAndId(firstParam, params['id']);
    }))
  }
}
