import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
