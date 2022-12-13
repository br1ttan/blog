import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SidebarVisibilityState } from "../states";

@Injectable({
    providedIn: 'root'
})
export class SidebarVisibilityService {
    public get data$(): Observable<boolean | null> {
        return this.visibilityState.data$;
    }

    constructor(
        private readonly visibilityState: SidebarVisibilityState
    ) {}

    public set(boolean: boolean) {
        this.visibilityState.set(boolean);
    }
}
