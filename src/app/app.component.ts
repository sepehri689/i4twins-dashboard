import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TopNavComponent} from "./core/top-nav/top-nav.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports:[
    CommonModule,
    TopNavComponent,
  ]
})
export class AppComponent {
}
