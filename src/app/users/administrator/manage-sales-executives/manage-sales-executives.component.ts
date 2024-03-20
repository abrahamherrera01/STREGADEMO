import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddManagerComponent } from '../components/add-manager/add-manager.component';

export interface Manager {
  name: string;
  age: number;  
  email: string;
}

const ELEMENT_DATA1: Manager[] = [
  { name: 'Hydrogen', age: 12, email: 'H282@gmail.com'},
  { name: 'Helium', age: 42, email: 'He282@gmail.com'},
  { name: 'Lithium', age: 62, email: 'Li282@gmail.com'},
  { name: 'Beryllium', age: 92, email: 'Be282@gmail.com'},
  { name: 'Boron', age: 12, email: 'B282@gmail.com'},  
];
const ELEMENT_DATA2: Manager[] = [  
  { name: 'Carbon', age: 12, email: 'C282@gmail.com'},
  { name: 'Nitrogen', age: 17, email: 'N282@gmail.com'},
  { name: 'Oxygen', age: 14, email: 'O282@gmail.com'},
  { name: 'Fluorine', age: 14, email: 'F282@gmail.com'},
  { name: 'Neon', age: 22, email: 'Ne282@gmail.com'},
];
@Component({
  selector: 'app-manage-sales-executives',
  templateUrl: './manage-sales-executives.component.html',
  styleUrls: ['./manage-sales-executives.component.css']
})
export class ManageSalesExecutivesComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Administrar ejecutivos de ventas' }
  ];

  displayedColumns: string[] = ['add', 'nombre', 'edad', 'email'];
  managersToBeAssigned: string[] = ['add', 'nombre', 'edad', 'email', 'actualizar', 'eliminar'];
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;

  constructor(
    private elementRef: ElementRef,
    private dialog: MatDialog
  ) { }

  addSaleExecutiveOrUpdate( manager_id:number|null = null ){
    if( manager_id === null ){
      // animación al dar click 
      const button = this.elementRef.nativeElement.querySelector('.add_manager');
      button.classList.remove('animate__rubberBand');
      void button.offsetWidth;
      button.classList.add('animate__rubberBand');
      // fin animación al dar click    
    }    

    const dialogRef = this.dialog.open(AddManagerComponent, {
      data: { manager_id:manager_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
    });
  }

  deleteManager() {
    Swal.fire({
      title: "¿Está seguro de que quieres eliminar este registro?",      
      showCancelButton: true,
      confirmButtonText: "Eliminar",      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Registro eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Ocurrió un error", "", "info");
      }
    });
  }
}
