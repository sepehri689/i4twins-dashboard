import { Component } from '@angular/core';
import {FirstTabContentComponent} from "../sidenav-right/first-tab-content/first-tab-content.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {SidenavRightComponent} from "../sidenav-right/sidenav-right.component";

@Component({
  selector: 'app-settings-bottom-sheet',
  standalone: true,
  imports: [
    FirstTabContentComponent,
    MatTab,
    MatTabGroup,
    SidenavRightComponent
  ],
  templateUrl: './settings-bottom-sheet.component.html',
  styleUrl: './settings-bottom-sheet.component.scss'
})
export class SettingsBottomSheetComponent {
}
