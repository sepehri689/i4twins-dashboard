import { Component } from '@angular/core';
import {MatTab, MatTabContent, MatTabGroup} from "@angular/material/tabs";
import {FirstTabContentComponent} from "./first-tab-content/first-tab-content.component";
import {FormControl} from "@angular/forms";
import {Province} from "./first-tab-content/settings-filter.model";
import {CommonModule} from "@angular/common";
import {SettingsFilterService} from "./first-tab-content/settings-filter.service";

@Component({
  selector: 'app-sidenav-right',
  standalone: true,
  imports: [
      CommonModule,
    MatTabGroup,
    MatTab,
    MatTabContent,
    FirstTabContentComponent
  ],
  templateUrl: './sidenav-right.component.html',
  styleUrl: './sidenav-right.component.scss'
})
export class SidenavRightComponent {
  categories: string[] = [];
  provinces: Province[] = [];
  selectedCategories: FormControl = new FormControl([]);
  selectedProvinces: FormControl = new FormControl([]);
  selectedPriceRange: string | null = null;
  selectedRating: string | null = null;
  selectedAvailability: string | null = null;

  constructor(
      private settingsFilterService: SettingsFilterService,
  ) {
  }

  private applyFilterState(state: any): void {
    this.selectedCategories.setValue(state.categories || []);
    this.selectedProvinces.setValue(state.provinces || []);
    this.selectedPriceRange = state.priceRange;
    this.selectedRating = state.rating;
    this.selectedAvailability = state.availability;
  }

  onFiltersChanged(filters: any): void {
    this.applyFilterState(filters);
    this.settingsFilterService.setFilterState(filters);
  }

}
