import {ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient} from "@angular/common/http";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {appearance: 'outline'},
        },
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    ],
};
