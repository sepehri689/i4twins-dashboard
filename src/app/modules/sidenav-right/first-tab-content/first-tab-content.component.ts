import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, provideZoneChangeDetection} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {commonFilters, Province} from "./settings-filter.model";
import {SettingsFilterService} from "./settings-filter.service";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatError, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {BtnBasicCircleComponent} from "../../../shared/btn-basic-circle/btn-basic-circle.component";

@Component({
    selector: 'app-first-tab-content',
    standalone: true,
    templateUrl: './first-tab-content.component.html',
    styleUrl: './first-tab-content.component.scss',
    imports: [
        CommonModule,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatSelectionList,
        MatListOption,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatLabel,
        MatInputModule,
        MatError,
        MatIconButton,
        MatSlideToggle,
        BtnBasicCircleComponent,
    ],
})
export class FirstTabContentComponent implements OnInit, OnDestroy {
    @Input() categories: string[] = [];
    @Input() provinces: Province[] = [];
    @Input() selectedCategories: FormControl = new FormControl([]);
    @Input() selectedProvinces: FormControl = new FormControl([]);
    @Input() selectedCylinderHead: string | null = null;
    @Input() selectedEngineBlock: string | null = null;
    @Input() selectedCoolingSystem: string | null = null;
    @Output() filtersChanged = new EventEmitter<any>();

    filterValue: string = '';
    collapsedHeight: string = '3.2rem';
    expandedHeight: string = '3.6rem';
    commonFilters = commonFilters;
    private destroy$ = new Subject<void>();

    constructor(
        private settingsFilterService: SettingsFilterService,
    ) {
    }

    ngOnInit() {
        this.manageFilterServiceSubscription();
    }

    emitFilters() {
        const filters = {
            categories: this.selectedCategories.value,
            provinces: this.selectedProvinces.value,
            cylinderHead: this.selectedCylinderHead,
            engineBlock: this.selectedEngineBlock,
            coolingSystem: this.selectedCoolingSystem,
        };

        this.filtersChanged.emit(filters);
        this.settingsFilterService.setFilterState(filters);
    }

    applyFilter(): Province[] {
        if (!this.filterValue) return this.provinces;

        return this.provinces.filter(province => {
            return province.name.toLowerCase().includes(this.filterValue.trim());
        });
    }

    resetSearchInput() {
        this.filterValue = '';
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private manageFilterServiceSubscription(): void {
        this.settingsFilterService.filterState$
            .pipe(takeUntil(this.destroy$))
            .subscribe(state => {
                if (state) {
                    this.selectedCategories.setValue(state.categories);
                    this.selectedProvinces.setValue(state.provinces);
                    this.selectedCylinderHead = state.cylinderHead;
                    this.selectedEngineBlock = state.engineBlock;
                    this.selectedCoolingSystem = state.coolingSystem;
                }
            });
    }
}
