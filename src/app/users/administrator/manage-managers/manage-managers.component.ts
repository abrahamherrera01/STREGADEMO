import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddManagerComponent } from '../components/add-manager/add-manager.component';

@Component({
  selector: 'app-manage-managers',
  templateUrl: './manage-managers.component.html',
  styleUrls: ['./manage-managers.component.css']
})
export class ManageManagersComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Administrar gestores' }
  ];

  constructor(
    private elementRef: ElementRef,
    private dialog: MatDialog
  ) { }

  addManager() {
    // animación al dar click 
    const button = this.elementRef.nativeElement.querySelector('.animate__rubberBand');
    button.classList.remove('animate__rubberBand');
    void button.offsetWidth;
    button.classList.add('animate__rubberBand');
    // fin animación al dar click    

    const dialogRef = this.dialog.open(AddManagerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
    });
  }
}
