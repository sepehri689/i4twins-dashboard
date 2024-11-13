import {AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild,} from '@angular/core';
import {filter, map, mergeMap, Observable, Subject, takeUntil} from 'rxjs';
import {CommonModule, Location, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatAnchor, MatButton, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatBadge} from "@angular/material/badge";

import {BreakpointService} from '../services/breakpoints.service';
import {navData, navLinks} from './nav-links.model';
import {BtnBasicComponent} from "../../shared/btn-basic/btn-basic.component";
import {SidenavRightComponent} from "../../modules/sidenav-right/sidenav-right.component";
import {FooterComponent} from "../footer/footer.component";
import {SettingsBottomSheetComponent} from "../../modules/settings-bottom-sheet/settings-bottom-sheet.component";
import {Province} from "../../modules/sidenav-right/first-tab-content/settings-filter.model";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrl: './top-nav.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        MatSidenavContainer,
        MatSidenav,
        MatToolbar,
        MatNavList,
        MatDivider,
        RouterLink,
        MatListItem,
        MatIconAnchor,
        MatBadge,
        MatIconButton,
        RouterOutlet,
        NgOptimizedImage,
        MatButton,
        BtnBasicComponent,
        MatAnchor,
        SidenavRightComponent,
        FooterComponent,
        MatSidenavContent,
        SettingsBottomSheetComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopNavComponent implements OnInit {

    @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
    @ViewChild('rightSidenav') rightSidenav!: MatSidenav;
    @ViewChild('sidenavContent') sidenavContent!: MatSidenavContent;

    // isLoggedIn$!: Observable<boolean>;
    // userId!: number;

    showFooter$: Observable<boolean>;

    // categories: string[] = [];
    // provinces: Province[] = [];
    // selectedCategories: FormControl = new FormControl([]);
    // selectedProvinces: FormControl = new FormControl([]);
    // selectedPriceRange: string | null = null;
    // selectedRating: string | null = null;
    // selectedAvailability: string | null = null;

    isEn: boolean = true;
    isScrolled: boolean = false;
    sizeOfDevice: any;
    currentRoute: string | undefined;
    protected readonly navLinks = navLinks;
    protected readonly navData = navData;
    private destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private breakpointService: BreakpointService,
        private cdr: ChangeDetectorRef,
        private _bottomSheet: MatBottomSheet,
    ) {
        this.sizeOfDevice = breakpointService.initial_condition();
        this.showFooter$ = this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(this.findFinalChild),
            mergeMap((route) => route.data),
            map(data => data.hasOwnProperty('showFooter') ? data['showFooter'] : true),
        );
    }

    get isDesktop(): boolean {
        return this.sizeOfDevice['isLarge'] || this.sizeOfDevice['isXLarge'] || this.sizeOfDevice['isMedium'];
    }

    get isXSmall(): boolean {
        return this.sizeOfDevice['isXSmall'];
    }

    get isMobile(): boolean {
        return this.sizeOfDevice['isXSmall'] || this.sizeOfDevice['isSmall'];
    }

    ngOnInit(): void {
        window.addEventListener('scroll', this.onScroll.bind(this), {passive: true});
        this.trackScreenWidthChange();
        this.trackRouterEvents();
    }

    isRouteMatching(route: string): boolean {
        const routePattern = new RegExp(`^${route}(?:\/[0-9a-fA-F-]+)?$`);
        return routePattern.test(<string>this.currentRoute);
    }

    toggleLanguage(): void {
        this.isEn = !this.isEn;
    }

    openSettingsBottomSheet(): void {
    //     const settingsData = {
    //         categories: this.categories,
    //         provinces: this.provinces,
    //         selectedCategories: this.selectedCategories.value,
    //         selectedProvinces: this.selectedProvinces.value,
    //         selectedPriceRange: this.selectedPriceRange,
    //         selectedRating: this.selectedRating,
    //         selectedAvailability: this.selectedAvailability
    //     };

        this._bottomSheet.open(SettingsBottomSheetComponent, {
            restoreFocus: true,
        });
    }

    goBack(): void {
        const urlMap = new Map<string, string>([['', '']]);
        const navigateToUrl = urlMap.get(this.router.url);

        if (navigateToUrl) {
            this.router.navigate([navigateToUrl]).then();
        } else {
            this.location.back();
        }
    }

    onScroll(event: Event) {
        this.isScrolled = window.scrollY > 0;
    }

    // private applyFilters(filters: any): void {
    //     this.selectedCategories.setValue(filters.categories);
    //     this.selectedProvinces.setValue(filters.provinces);
    //     this.selectedPriceRange = filters.priceRange;
    //     this.selectedRating = filters.rating;
    //     this.selectedAvailability = filters.availability;
    // }

    private trackScreenWidthChange(): void {
        this.breakpointService.screenWidth$.pipe(takeUntil(this.destroy$))
            .subscribe((size) => {
                this.sizeOfDevice = size;
                this.cdr.detectChanges();
            });
    }

    private trackRouterEvents(): void {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.currentRoute = this.router.url;
            });
    }

    private findFinalChild(route: ActivatedRoute): ActivatedRoute {
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }

}
