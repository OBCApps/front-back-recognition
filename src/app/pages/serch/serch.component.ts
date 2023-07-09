import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent {
  metodoBusqueda: any;
  imagen: any;
  nombre: any;
  resultados: any[] = []
  tiempoEjecicion: any = 0
  isLoading: boolean = false;
  sms_loading: any = "Procesando";
  constructor(
    private router: Router,
    private searchServiceService: SearchServiceService,


  ) {

  }
  ngOnInit() {
    // Estate - 1
    this.get_search_option()

  }

  get_search_option() {
    this.isLoading = true;
    const dataLocal = JSON.parse(sessionStorage.getItem('metodSearch')!);

    this.imagen = dataLocal.imagen;
    this.metodoBusqueda = dataLocal.metod;
    this.nombre = dataLocal.nombre;


    if (this.metodoBusqueda == "KNN priority queue") {
      const data = {
        "imagen": this.imagen.split('base64')[1],
        "cantidad": parseInt(dataLocal.cantidad)
      }

      this.searchServiceService.search_secuencial_pq(data).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.resultados = data?.data
          this.tiempoEjecicion = data?.execution_time

          console.log("BUSQUEDA", this.resultados);
        }, err => {
          this.isLoading = false;
          alert(err)
        }
      )
    } else if (this.metodoBusqueda == "Search by Range") {
      const data = {
        "imagen": this.imagen.split('base64')[1],
        "cantidad": parseInt(dataLocal.cantidad),
        "radio" : 5
      }
      this.searchServiceService.Search_by_Range(data).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.resultados = data?.data
          this.tiempoEjecicion = data?.execution_time

          console.log("BUSQUEDA", this.resultados);
        }, err => {
          this.isLoading = false;
          alert(err)
        }
      )
    }
    else if (this.metodoBusqueda == "Rtree of all Window") {
      const data = {
        "imagen": this.imagen.split('base64')[1],
        "cantidad": parseInt(dataLocal.cantidad),
        "radio" : 5
      }
      this.searchServiceService.Rtree_of_all_Window(data).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.resultados = data?.data
          this.tiempoEjecicion = data?.execution_time

          console.log("BUSQUEDA", this.resultados);
        }, err => {
          this.isLoading = false;
          alert(err)
        }
      )
    }
    else if (this.metodoBusqueda == "KNN - Rtree") {
      const data = {
        "imagen": this.imagen.split('base64')[1],
        "cantidad": parseInt(dataLocal.cantidad),
        "radio" : 5
      }
      this.searchServiceService.KNN__Rtree(data).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.resultados = data?.data
          this.tiempoEjecicion = data?.execution_time

          console.log("BUSQUEDA", this.resultados);
        }, err => {
          this.isLoading = false;
          alert(err)
        }
      )
    }
    else if (this.metodoBusqueda == "KNN - Rtree - Hight") {
      const data = {
        "imagen": this.imagen.split('base64')[1],
        "cantidad": parseInt(dataLocal.cantidad),
        "radio" : 5
      }
      this.searchServiceService.KNN__Rtree(data).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.resultados = data?.data
          this.tiempoEjecicion = data?.execution_time

          console.log("BUSQUEDA", this.resultados);
        }, err => {
          this.isLoading = false;
          alert(err)
        }
      )
    }
    
  }



  flagCargando: boolean = false;

  datos_historial_academico = [
    {
      title: "FECHA DE INGRESO",
      sol: "12"
    },
    {
      title: "PERIODO ACADEMICO",
      sol: "12"
    },
    {
      title: "PROMEDIO",
      sol: "12"
    },
    {
      title: "CURSO 1",
      sol: "12"
    },
    {
      title: "CURSO 2",
      sol: "12"
    },
    {
      title: "CURSO 3",
      sol: "12"
    },
    {
      title: "CURSO 4",
      sol: "12"
    },
    {
      title: "CURSO 5",
      sol: "12"
    },
    {
      title: "CURSO 6",
      sol: "12"
    },
    {
      title: "CURSO 7",
      sol: "12"
    },
    {
      title: "CURSO 7",
      sol: "12"
    },
    {
      title: "CURSO 7",
      sol: "12"
    }
  ];

  inputNormalLabel: any = "block pb-[.1em] text-[.6em]  lg:text-[.7em] font-thin dark:text-white leading-3";
  inputNormalIn: any = "bg-white h-7 2xl:h-9  border border-gray-400 outline-none text-gray-400 text-sm  rounded focus:ring-blue-800 focus:border-blue-700 block w-full p-[1.5%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-blue-100 border-blue-100 ";




}
