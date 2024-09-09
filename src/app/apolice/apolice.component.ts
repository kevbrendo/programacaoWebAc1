import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {

  formData = {
    name: '',
    genero: '',
    idade: 0,
    valorAuto: 0
  };

  apolice: number = 0;

  calculatePolicy(): void {
    const { genero, idade, valorAuto } = this.formData;

    if (genero === 'male' && idade <= 25) {
      this.apolice = valorAuto * 0.15;
    } else if (genero === 'male' && idade > 25) {
      this.apolice = valorAuto * 0.10; 
    } else if (genero === 'female') {
      this.apolice = valorAuto * 0.08;
    } else {
      this.apolice = 0;
    }
  }
}
