import { Directive, HostListener } from "@angular/core";
import { SidebarVisibilityService } from "../services/sidebar-visibility.service";
import { SidebarVisibilityState } from "../states";

@Directive({
    selector: '[resize]'
})
export class WindowResizeDirective {
    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent) {
        const target = event.target as Window;

        if (target.outerWidth <= 1230) {
            this.visibilityService.set(false);
            return;
        }
    }

    constructor(
        private readonly visibilityService: SidebarVisibilityService
    ) {
        this.visibilityService.set(true);
    }
}
