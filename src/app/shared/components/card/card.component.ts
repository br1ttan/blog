import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PostEnum } from '@core';
import { IPost } from '@features/post';

@Component({
  selector: 'card [data]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() 
  public data!: IPost;
  
  @Output() 
  public clickEmitter = new EventEmitter<Event>();
}
