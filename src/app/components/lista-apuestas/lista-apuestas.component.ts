import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
@Component({
  selector: 'app-lista-apuestas',
  templateUrl: './lista-apuestas.component.html',
  styleUrls: ['./lista-apuestas.component.css']
})
export class ListaApuestasComponent implements OnInit {
  id: string;
  equipos1: any;
  equipo2: any;
  precio1: any;
  precio2: any;
  jugador: any;
  precioJugador: any;
  constructor(private apiservicio: ServiciosService, private aRouter: ActivatedRoute, private router: Router) {
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
    this.equipos1 = "";
    this.equipo2 = "";
    this.precio1 = 0;
    this.precio2 = 0;
    console.log(this.id)
    this.apiservicio.getPartido(this.id).subscribe(data => {
      console.log(data)

      for (let index = 0; index < 2; index++) {
        for (let index2 = 0; index2 < 2; index2++) {
          if (data[index].markets[0].selections[index2].id === this.id) {

            localStorage.setItem('equipo' + index, (data[index].markets[0].selections[index2].name));
            localStorage.setItem('precio' + index, (data[index].markets[0].selections[index2].price));

          }


        }
      }
      for (let index3 = 0; index3 < 3; index3++) {
        if (data[0].markets[1].selections[index3].id === this.id) {
          console.log(data[0].markets[1].selections[index3].name)
          localStorage.setItem('jugador', data[0].markets[1].selections[index3].name);
          localStorage.setItem('precioJugador', data[0].markets[1].selections[index3].price);
        }

      }

    })


  }

  mostrarPartidos() {

    this.equipos1 = localStorage.getItem('equipo0')
    this.equipo2 = localStorage.getItem('equipo1')
    this.precio1 = localStorage.getItem('precio0')
    this.precio2 = localStorage.getItem('precio1')

    this.jugador = localStorage.getItem('jugador');
    this.precioJugador = localStorage.getItem('precioJugador');
  }

  aprobar(): boolean {

    if (this.equipos1 != null) {
      return true;
    }
    else {
      return false;
    }
  }

  aprobarE2(): boolean {

    if (this.equipo2 != null) {
      return true;
    }
    else {
      return false;
    }
  }

  
  aprobarJugador(): boolean {

    if (this.jugador!= null) {
      return true;
    }
    else {
      return false;
    }
  }

  // metodo para eliminar una a puesta 

  eliminarE1() {
    localStorage.removeItem("equipo0");
    localStorage.removeItem("precio0")
    
  }

  eliminarE2() {
    localStorage.removeItem("equipo1");
    localStorage.removeItem("precio1")
 
  }
  eliminarJugador() {
    localStorage.removeItem("jugador");
    localStorage.removeItem("precioJugador")
 
  }
  ngOnInit(): void {
    this.mostrarPartidos();
    this.aprobar();
    this.aprobarE2()
    this.eliminarJugador();

  }

}
