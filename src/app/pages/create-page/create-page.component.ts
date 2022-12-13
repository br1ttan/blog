import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost, PostService } from '@features/post';
import { Subject, takeUntil } from 'rxjs';
import { localPost, POST_ARRAY } from './post.array';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePageComponent implements OnInit
 , OnDestroy 
{
  
  private destroy$ = new Subject();
  private fileInput!: string | ArrayBuffer | null;
  public form!: FormGroup;
  public items: localPost[] = POST_ARRAY;
  public selectedItem: localPost = this.items[1];

  constructor(
    private readonly postService: PostService
  ) {}
  
  public ngOnInit(): void {
    this.initFormGroup();
  }
  
  private initFormGroup(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    })
  }

  public onSubmitButtonClick(): void {
    if (this.form.invalid) return;

    const post: IPost = {
      author: this.form.value.author,
      date: new Date(),
      text: this.form.value.text,
      title: this.form.value.title,
      selectedPost: this.selectedItem,
      image: this.fileInput,
    }

    this.postService.send(post, this.selectedItem.post)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        console.log(post)
        this.form.reset();
      })
  }

  public getImageFromFileReader(fileInput: HTMLInputElement, event: Event): void {

      const target: any = event.target as HTMLInputElement;
      const selectedFile = target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(selectedFile)
      reader.onloadend = () => {
        this.fileInput = reader.result;
        console.log(reader.result)
      } 
  }
  
  public onItemSelected(item: localPost): void {
    this.selectedItem = item;
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
