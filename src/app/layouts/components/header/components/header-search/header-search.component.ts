import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteEnum } from '@core';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent {
  public value: string = '';

  constructor(
    private readonly router: Router 
  ) { }

  public onEnterKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.router.navigateByUrl(`${RouteEnum.Search}/${this.value}`);
    }
  }
}

