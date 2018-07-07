import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html'
})
export class AdminHeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor() {
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
