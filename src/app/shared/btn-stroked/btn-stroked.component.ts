import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-btn-stroked',
    templateUrl: './btn-stroked.component.html',
    styleUrl: './btn-stroked.component.css',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
})
export class BtnStrokedComponent {
    @Input() rightIcon?: boolean;
    @Input() text: boolean = true;
    @Input() leftIcon?: boolean;
    @Input() height?: string;
    @Input() borderRadius?: string = '0';
    @Input() type?: string = 'button';
    @Input() disabled?: boolean;
}
