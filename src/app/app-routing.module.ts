import { NgModule } from '@angular/core';
import { ApoliceComponent } from './apolice/apolice.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { IMCComponent } from './imc/imc.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'apolice', component: ApoliceComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'calcularMedia', component: CalcularMediaComponent},
  {path: 'conversorTemperatura', component: ConversorTemperaturaComponent},
  {path: 'imc', component: IMCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
