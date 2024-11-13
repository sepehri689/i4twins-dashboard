import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FirstTabContentComponent} from "../sidenav-right/first-tab-content/first-tab-content.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {SidenavRightComponent} from "../sidenav-right/sidenav-right.component";
import {BtnFlatComponent} from "../../shared/btn-flat/btn-flat.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatIconAnchor} from "@angular/material/button";
import {commonFilters, Province} from "../sidenav-right/first-tab-content/settings-filter.model";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {BtnBasicCircleComponent} from "../../shared/btn-basic-circle/btn-basic-circle.component";
import {BtnStrokedComponent} from "../../shared/btn-stroked/btn-stroked.component";

@Component({
    selector: 'app-settings-bottom-sheet',
    standalone: true,
    imports: [
        CommonModule,
        FirstTabContentComponent,
        MatTab,
        MatTabGroup,
        SidenavRightComponent,
        BtnFlatComponent,
        MatToolbar,
        MatIconAnchor,
        MatAccordion,
        MatExpansionPanelTitle,
        MatExpansionPanelHeader,
        MatExpansionPanel,
        MatListOption,
        MatSelectionList,
        ReactiveFormsModule,
        FormsModule,
        BtnBasicCircleComponent,
        BtnStrokedComponent
    ],
    templateUrl: './settings-bottom-sheet.component.html',
    styleUrl: './settings-bottom-sheet.component.scss'
})
export class SettingsBottomSheetComponent {

    constructor(
        private bottomSheetRef: MatBottomSheetRef<SettingsBottomSheetComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) {}

    close(): void {
        this.bottomSheetRef.dismiss();
    }
}
