import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from 'ngx-os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private readonly themeService: ThemeService
  ) { }

  public ngOnInit(): void {
    this.themeService.apply('win10');

    const appliedTheme = this.themeService.applied;
    const appliedTheme$ = this.themeService.applied$;
  }
}
