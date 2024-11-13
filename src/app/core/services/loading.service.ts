import { Injectable, ApplicationRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = false;

  constructor(private appRef: ApplicationRef) {}

  startLoading() {
    this.isLoading = true;
    this.triggerChangeDetection();
  }

  stopLoading() {
    this.isLoading = false;
    this.triggerChangeDetection();
  }

  startLoadingAsync(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.isLoading = true;
      this.triggerChangeDetection();
      resolve();
    });
  }

  private triggerChangeDetection() {
    this.appRef.tick();
  }
}
