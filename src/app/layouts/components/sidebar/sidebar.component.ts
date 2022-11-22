import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteEnum } from '@core';
import { SIDEBAR_ITEM_ARRAY } from './sidebar-item.array';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public readonly sidebarItemArray = SIDEBAR_ITEM_ARRAY;

  constructor(
    private readonly router: Router
  ) {}
  
  public routeToSelectedRouteName(routeName: RouteEnum): void {
    this.router.navigateByUrl(`/${routeName}`);
  }

}
