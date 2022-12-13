import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'post-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent { }
