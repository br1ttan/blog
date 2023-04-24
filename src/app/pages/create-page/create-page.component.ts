import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost, PostService, PostType } from '@features/post';
import { Subject, takeUntil } from 'rxjs';
import { localPosts, POST_ARRAY } from './post.array';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePageComponent implements OnDestroy {
  public form = new FormGroup({
    title: new FormControl(null, Validators.required),
    text: new FormControl(null, Validators.required),
    author: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required),
  });

  public items: localPosts[] = POST_ARRAY;
  public selectedItem = this.items[1];

  private fileInput!: string | ArrayBuffer | null;
  private _destroy$ = new Subject();

  constructor(
    private readonly postService: PostService
  ) {}

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  
  public onSubmitButtonClick(): void {
    if (this.form.invalid) return;

    this.postService.send({
      author: this.form.value.author!,
      date: new Date(),
      text: this.form.value.text!,
      title: this.form.value.title!,
      selectedPost: this.selectedItem!,
      image: this.fileInput,
      post: this.selectedItem.post
    })

    this.form.reset();
  }

  public getImageFromFileReader(event: Event): void {
      const fileReader = new FileReader();
      const target = event.target as HTMLInputElement;
      const selectedFile = target.files?.[0];

      if (selectedFile) {
        fileReader.readAsDataURL(selectedFile)

        fileReader.onloadend = () => {
          this.fileInput = fileReader.result;
        } 
      }
  }
  
  public onItemSelected(item: localPosts): void {
    this.selectedItem = item;
  }
}
