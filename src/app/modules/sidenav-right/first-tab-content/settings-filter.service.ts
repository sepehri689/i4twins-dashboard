import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingsFilterService {
    private filterState = new BehaviorSubject(this.loadFilterState());

    filterState$ = this.filterState.asObservable();

    setFilterState(state: any) {
        this.filterState.next(state);
        localStorage.setItem('filterState', JSON.stringify(state));
    }

    private loadFilterState() {
        const state = localStorage.getItem('filterState');
        return state ? JSON.parse(state) : {
            categories: [],
            provinces: [],
            priceRange: null,
            rating: null,
            availability: null
        };
    }
}
