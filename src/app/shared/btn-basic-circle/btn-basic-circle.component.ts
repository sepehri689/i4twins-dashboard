import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-btn-basic-circle',
    templateUrl: './btn-basic-circle.component.html',
    styleUrl: './btn-basic-circle.component.scss',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
})
export class BtnBasicCircleComponent {
    @Input() icon?: boolean;
    @Input() text?: boolean;
    @Input() height?: string;
    @Input() width?: string;
    @Input() type?: string = 'button';
    @Input() color?: string | null;
    @Input() disabled?: boolean;
}
