import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-btn-flat',
    templateUrl: './btn-flat.component.html',
    styleUrl: './btn-flat.component.css',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
})
export class BtnFlatComponent {
    @Input() rightIcon?: boolean;
    @Input() text: boolean = true;
    @Input() leftIcon?: boolean;
    @Input() height?: string;
    @Input() width?: string;
    @Input() borderRadius?: string = '0';
    @Input() type?: string = 'button';
    @Input() disabled?: boolean;
}
