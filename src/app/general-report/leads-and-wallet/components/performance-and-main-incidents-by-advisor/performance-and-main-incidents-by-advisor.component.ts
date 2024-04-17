import { Component } from '@angular/core';
import { AdviserInterface } from 'src/app/graphics/interfaces/adviser.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-performance-and-main-incidents-by-advisor',
  templateUrl: './performance-and-main-incidents-by-advisor.component.html',
  styleUrls: ['./performance-and-main-incidents-by-advisor.component.css']
})
export class PerformanceAndMainIncidentsByAdvisorComponent {

 
  public leads!: boolean;
  public wallet!: boolean;
  public advisersData!: any[];

  constructor(private getDetailByExecutive:GeneralReportService){

   this.getDetails();
    
  }
 

  public selectedAdviser: AdviserInterface | null = null;

  activeTabs: { [key: number]: string } = {};  



  show(adviser: AdviserInterface, type: string) {
     
    
    if(type === "wallet") {
      adviser.wallet = true;
      adviser.leads = false;
    }
    if(type === "leads") {
      adviser.wallet = false;
      adviser.leads = true;
    }
  }

  selectAdviser(adviser: AdviserInterface) {
    this.selectedAdviser = adviser;
  }


  getDetails(){
    this. getDetailByExecutive.getDetailByExecutive().subscribe(
      {
        next: ({ code, status, data}) => {
  
          if (code === 200 && status === 'success') {



            console.log(data.detailsExecutives[0])
        
            this.advisersData=data.detailsExecutives
  
          
          }
        },
  
        error: (error) => {
          console.error('Error:' + error);               
        }
      }        
    );
  }









  
 }
