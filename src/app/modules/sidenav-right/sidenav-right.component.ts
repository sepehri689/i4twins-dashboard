import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabContent, MatTabGroup} from "@angular/material/tabs";
import {FirstTabContentComponent} from "./first-tab-content/first-tab-content.component";
import {FormControl} from "@angular/forms";
import {commonFilters, Province} from "./first-tab-content/settings-filter.model";
import {CommonModule} from "@angular/common";
import {SettingsFilterService} from "./first-tab-content/settings-filter.service";
import {catchError, of, Subject, takeUntil, tap} from "rxjs";
import {IranStatesService} from "../../core/services/iran-states.service";

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
export class SidenavRightComponent implements OnInit{
  categories: string[] = [];
  provinces: Province[] = [];
  selectedCategories: FormControl = new FormControl([]);
  selectedProvinces: FormControl = new FormControl([]);
  selectedCylinderHead: string | null = null;
  selectedEngineBlock: string | null = null;
  selectedCoolingSystem: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
      private settingsFilterService: SettingsFilterService,
      private iranStatesService: IranStatesService,
  ) {
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProvinces();
  }

  loadCategories(): void {
    this.categories = Object.values(commonFilters).map(category => category.title);;
  }

  loadProvinces(): void {
    this.iranStatesService.getProvinces().pipe(
        takeUntil(this.destroy$),
        tap((data: Province[]) => {
          this.provinces = data;
        }),
        catchError(error => {
          return of([])
        })
    ).subscribe();
  }

  onFiltersChanged(filters: any): void {
    this.applyFilterState(filters);
    this.settingsFilterService.setFilterState(filters);
  }

    ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private applyFilterState(state: any): void {
    this.selectedCategories.setValue(state.categories || []);
    this.selectedProvinces.setValue(state.provinces || []);
    this.selectedCylinderHead = state.cylinderHead;
    this.selectedEngineBlock = state.engineBlock;
    this.selectedCoolingSystem = state.coolingSystem;
  }

}
