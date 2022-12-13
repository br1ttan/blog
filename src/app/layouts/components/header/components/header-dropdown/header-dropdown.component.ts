import { ChangeDetectionStrategy, Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { filter, fromEvent } from 'rxjs';

@Component({
  selector: 'header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDropdownComponent implements OnDestroy {
  public isListActivated = false;
  private readonly nodeName = 'HEADER-DROPDOWN';

  private checkClickOnClosestNodeName$ = fromEvent(document.body, 'click')
  .pipe(
    filter((event: any) => (
      this.isListActivated && !event.target.closest(this.nodeName)
    ))
  ).subscribe(() => {
    this.isListActivated = false;

    this.changeDetector.markForCheck();
  })

  constructor(
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  public toggleListMenu(): void {
    this.isListActivated = !this.isListActivated;
  }
  
  public ngOnDestroy(): void {
    this.checkClickOnClosestNodeName$.unsubscribe();
  }
}
