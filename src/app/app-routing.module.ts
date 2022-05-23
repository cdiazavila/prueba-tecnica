import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaApuestasComponent } from './components/lista-apuestas/lista-apuestas.component';

const routes: Routes = [
  {path:'',redirectTo: 'inicio',pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'lista',component:ListaApuestasComponent},
  {path:'lista/:id', component:ListaApuestasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
