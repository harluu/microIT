import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  standalone: false,
  templateUrl: './cal.component.html',
  styleUrl: './cal.component.css'
})
export class CalComponent {


  num1: number = 0;
  num2: number = 0;
  result: number | null = null;

  calculate(operation: string): void {
    switch (operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
    }
  }
}
