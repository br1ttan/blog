import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
