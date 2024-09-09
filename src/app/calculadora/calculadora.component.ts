import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  operacao: string = '';
  resultado: number = 0;

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado
          = this.numero1 * this.numero2;
        break;
      case '/':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          alert('Divisão por zero não é permitida.');
        }
        break;
      default:
        alert('Operação inválida.');
    }
  }
}
