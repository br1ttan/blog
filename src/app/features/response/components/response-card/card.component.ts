import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPost } from '@features/post';

@Component({
  selector: 'response-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  public data!: IPost;
}
