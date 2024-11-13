import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {CommonModule, Location} from "@angular/common";
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatAnchor, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {FooterComponent} from "../../core/footer/footer.component";

@Component({
    selector: 'app-dashboard-main',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbar,
        MatToolbarRow,
        RouterLink,
        MatIconAnchor,
        MatAnchor,
        MatDivider,
        MatIconButton,
        FooterComponent,
        RouterOutlet,
    ],
    templateUrl: './dashboard-main.component.html',
    styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent {

}
