import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
