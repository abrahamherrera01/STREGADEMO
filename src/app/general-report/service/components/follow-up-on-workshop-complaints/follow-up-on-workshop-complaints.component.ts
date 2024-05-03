import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-follow-up-on-workshop-complaints',
  templateUrl: './follow-up-on-workshop-complaints.component.html',
  styleUrls: ['./follow-up-on-workshop-complaints.component.css']
})
export class FollowUpOnWorkshopComplaintsComponent {
  show:boolean = false;
  untraceables!:StackedHorizontalBarData;
  constructor(
    private _serviceService:ServiceService
  ){        
    this.initGraphic();
  }

  initGraphic():void {
    this._serviceService.getCustomerComplaintsByTypeAreaWorkshop().subscribe({
      next:({code, status, data}) => {
        if( code == 200 && status == 'success' ){
          this.untraceables = {    
            title: '',
            width: '100%',
            height: '540px',
            text_color: '#000',
            graphic: {
              categories: [ 
                'Nueva falla despues de la reparación',
                'Falla persisitente',
                'Daño generado en servicio',
                'Demora en diagnostico',
                'Demora en reparación/mantenimiento',
                'Fallo en diagnostico',
              ].reverse(),      
              series: [        
                {
                  name: '',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: false,  // Aquí ocultas las etiquetas de la serie        
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data: [+data.diagnosticFailure, +data.delayRepairMaintenance, +data.delayDiagnosis, +data.damageGeneratedService, +data.persistentFailure,+data.workshopNewFailAfterReparation]
                },
              ]        
            }
          } 
          this.show = true;          
        }
      }
    })         
  }
}
