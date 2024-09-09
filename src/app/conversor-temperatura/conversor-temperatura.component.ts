import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {

  celsius: number = 0; 
  fahrenheit: number = 0; 
  kelvin: number = 0; 

  convertTemperature(): void {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
      this.kelvin = this.celsius + 273.15;
    }
  }
}
