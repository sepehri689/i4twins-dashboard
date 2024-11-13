import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-btn-basic',
    templateUrl: './btn-basic.component.html',
    styleUrl: './btn-basic.component.css',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
})
export class BtnBasicComponent {
    @Input() rightIcon?: boolean;
    @Input() text: boolean = true;
    @Input() leftIcon?: boolean;
    @Input() height?: string;
    @Input() borderRadius?: string = '0';
    @Input() type?: string = 'button';
    @Input() disabled?: boolean;
}
