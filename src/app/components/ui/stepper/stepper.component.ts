import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent {
  @Input() currentStep = 1;
  @Input() totalSteps = 3;

  get progressPercent(): number {
    if (this.totalSteps <= 0) return 0;
    return Math.min((this.currentStep / this.totalSteps) * 100, 100);
  }
}
