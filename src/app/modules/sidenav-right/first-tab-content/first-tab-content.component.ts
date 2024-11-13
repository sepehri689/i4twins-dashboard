import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {commonFilters, Province} from "./settings-filter.model";
import {SettingsFilterService} from "./settings-filter.service";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-first-tab-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatSelectionList,
    MatListOption,
    MatExpansionPanelHeader,
    MatFormField,
      MatLabel,
    FormsModule,
    MatInput,
    MatIconButton,
    MatError,
    MatSlideToggle,
  ],
  templateUrl: './first-tab-content.component.html',
  styleUrl: './first-tab-content.component.scss'
})
export class FirstTabContentComponent implements OnInit, OnDestroy {
@Input() categories: string[] = [];
@Input() provinces: Province[] = [];
@Input() selectedCategories: FormControl = new FormControl([]);
@Input() selectedProvinces: FormControl = new FormControl([]);
@Input() selectedPriceRange: string | null = null;
@Input() selectedRating: string | null = null;
@Input() selectedAvailability: string | null = null;
@Output() filtersChanged = new EventEmitter<any>();

  commonFilters = commonFilters;
  filterValue: string = '';
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
      priceRange: this.selectedPriceRange,
      rating: this.selectedRating,
      availability: this.selectedAvailability,
    };

    this.filtersChanged.emit(filters);
    this.settingsFilterService.setFilterState(filters);
  }

  applyFilter(): Province[] {
    if (!this.filterValue) return this.provinces;

    return this.provinces.filter(province => {
      return province.name.includes(this.filterValue.trim());
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
    this.settingsFilterService.filterState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      if (state) {
        this.selectedCategories.setValue(state.categories);
        this.selectedProvinces.setValue(state.provinces);
        this.selectedPriceRange = state.priceRange;
        this.selectedRating = state.rating;
        this.selectedAvailability = state.availability;
      }
    });
  }

}
