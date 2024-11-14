import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Province} from "../../modules/sidenav-right/first-tab-content/settings-filter.model";

@Injectable({
    providedIn: 'root',
})
export class IranStatesService {

    private baseUrl = 'http://localhost:3000/';
    private baseUrlFa = 'https://iran-locations-api.ir/api/v1/fa/';
    private baseUrlEn = 'https://iran-locations-api.ir/api/v1/en/';

    constructor(private http: HttpClient) {
    }

    getProvinces(): Observable<any> {
        return this.http.get<Province[]>(`${this.baseUrlEn}states`);
    }

    getProvinceById(id: number): Observable<any> {
        return this.http.get<Province>(`${this.baseUrlEn}states?id=${id}`);
    }

    getProvinceByName(name: string): Observable<any> {
        return this.http.get<Province>(`${this.baseUrlEn}states?state=${name}`);
    }

    getCities(): Observable<any> {
        return this.http.get<any>(`${this.baseUrlEn}cities`);
    }

    getCitiesByName(city: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrlEn}cities?city=${city}`);
    }

    getCitiesByStateName(state: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrlEn}cities?state=${state}`);
    }

    getCitiesByStateId(stateId: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrlEn}cities?state_id=${stateId}`);
    }
}
