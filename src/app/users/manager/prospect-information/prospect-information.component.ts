import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLeadInformationComponent } from '../components/update-lead-information/update-lead-information.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prospect-information',
  templateUrl: './prospect-information.component.html',
  styleUrls: ['./prospect-information.component.css']
})
export class ProspectInformationComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/manager/dashboard' },    
    { text: 'Mis leads', link: '/manager/dashboard/my-leads' },
    { text: 'Información del prospecto' }
  ];

  loading:boolean = false;  
  attemptLinked: string = '';
  linkAttemptFailed:string = ''

  constructor(
    private elementRef: ElementRef,
    private dialog: MatDialog
  ) { 
    
  }

  updateLead() {        
    // animación al dar click 
    const button = this.elementRef.nativeElement.querySelector('.update');
    button.classList.remove('animate__rubberBand');
    void button.offsetWidth;
    button.classList.add('animate__rubberBand');
    // fin animación al dar click        

    const dialogRef = this.dialog.open(UpdateLeadInformationComponent, {      
      maxHeight: '80vh',
      data: { 
        prospect_id: 2        
      },
      panelClass: ['animate__animated', 'animate__pulse']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
    });
  }
  
  callAttemptWasSuccessfullyLinked(event: any) {
    console.log('Intento vinculado correctamente:', this.attemptLinked);
    // Aquí puedes realizar acciones adicionales según la selección
  }

  reasonForNotBeingAbleToContact(event: any) {
    console.log('Intento vinculado correctamente:', this.linkAttemptFailed);
    // Aquí puedes realizar acciones adicionales según la selección
  }
}
