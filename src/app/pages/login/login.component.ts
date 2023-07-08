import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   // Diseños  Inputs  
   inputNormalLabel: any = "block  pb-[.1em] text-xs font-normal text-bluew-900 dark:text-white";
   inputNormalIn: any = "bg-white h-8 border border-blue-900 outline-none text-blue-900 text-sm  rounded focus:ring-blue-800 focus:border-blue-700 block w-full p-[1.5%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-blue-100 border-blue-100 ";
 
  isLoading : boolean = false;
  sms_loading : any = "Procesando... ";
  base64Image: string | ArrayBuffer | null = null;
  nombre : any;
  metod : any;
  cantidad: any;
  imagen_view : boolean = false;
  constructor(    
    private router: Router,
    
    

  ) {

  }
  onFileSelected(event: any): void {
    this.isLoading = true;
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
  
    reader.onload = () => {
      const base64Image: string | ArrayBuffer | null = reader.result;
      this.base64Image = reader.result;
      // Aquí puedes realizar acciones adicionales con la imagen en base64
      console.log(base64Image);
      this.imagen_view = true;
      this.isLoading = false;
    };
  
    reader.readAsDataURL(file);
  }
  
  cancel_View_image(value : any) {
    this.imagen_view = value;
  }



  search (){
    const data = {
      imagen : this.base64Image, 
      nombre : this.nombre,
      metod : this.metod,
      cantidad : this.cantidad
    }
    sessionStorage.setItem('metodSearch', JSON.stringify(data));
    this.router.navigate(["/searchs"])
  }
}
