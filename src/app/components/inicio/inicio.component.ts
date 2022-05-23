import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaPartidos:any;

  constructor(private apiServicio: ServiciosService) {
    this.apiServicio.getPartidos().subscribe(data=>{
      this.listaPartidos=data
      console.log(this.listaPartidos);
      console.log(data[0].markets[0].selections[0].name)
    })
   }

  ngOnInit(): void {
  }

}
