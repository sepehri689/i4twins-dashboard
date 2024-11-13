import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    sizeOfDevice: { [key: string]: boolean } = {};
    private screenWidthSubject = new Subject<{ [key: string]: boolean }>();
    screenWidth$ = this.screenWidthSubject.asObservable();

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .subscribe((result) => {
                if (result.matches) {
                    this.sizeOfDevice = {
                        isXSmall: result.breakpoints[Breakpoints.XSmall] || false,
                        isSmall: result.breakpoints[Breakpoints.Small] || false,
                        isMedium: result.breakpoints[Breakpoints.Medium] || false,
                        isLarge: result.breakpoints[Breakpoints.Large] || false,
                        isXLarge: result.breakpoints[Breakpoints.XLarge] || false,
                    };
                    this.screenWidthSubject.next(this.sizeOfDevice);
                }
            });
    }

    initial_condition() {
        return this.sizeOfDevice;
    }
}
