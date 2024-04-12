import { Component } from '@angular/core';
import { AdviserInterface } from 'src/app/graphics/interfaces/adviser.interface';

@Component({
  selector: 'app-performance-and-main-incidents-by-advisor',
  templateUrl: './performance-and-main-incidents-by-advisor.component.html',
  styleUrls: ['./performance-and-main-incidents-by-advisor.component.css']
})
export class PerformanceAndMainIncidentsByAdvisorComponent {

 
  public leads!: boolean;
  public wallet!: boolean;

  public advisersData: AdviserInterface[] = [
    {
      picture:"",
      name: "Calixto Romero Marco Antonio",
      leadsAssigned: 1,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 1,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 28,
      walletSurveyed: 25,
      walletValidity: 89,
      csiWallet: 96,
      walletIncons: 0,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 0,
      leads: true,  
      wallet: false,  
      activeTab: 'leads' 

    },
    {
      picture:"",
      name: "Chacon Orozco Gabriel",
      leadsAssigned: 2,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 2,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 37,
      walletSurveyed: 31,
      walletValidity: 84,
      csiWallet: 94,
      walletIncons: 1,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 2,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "Aguilar Alonso Miguel Angel Eleazar",
      leadsAssigned: 4,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 4,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 22,
      walletSurveyed: 20,
      walletValidity: 91,
      csiWallet: 85,
      walletIncons: 0,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 0,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "De Botton Orue Flor Susana",
      leadsAssigned: 4,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 4,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 22,
      walletSurveyed: 20,
      walletValidity: 91,
      csiWallet: 85,
      walletIncons: 0,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 0,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "Marcial Osorio Alberto",
      leadsAssigned: 2,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 2,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 22,
      walletSurveyed: 17,
      walletValidity: 77,
      csiWallet: 94,
      walletIncons: 0,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 0,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "Marquez Acosta Hector Alberto",
      leadsAssigned: 2,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 2,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 13,
      walletSurveyed: 11,
      walletValidity: 85,
      csiWallet: 82,
      walletIncons: 0,
      localizables: 0,
      walletComplaints: 0,
      walletRequests: 0,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "Romero Ceron Marcos",
      leadsAssigned: 2,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 2,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 21,
      walletSurveyed: 17,
      walletValidity: 81,
      csiWallet: 100,
      walletIncons: 1,
      localizables: 1,
      walletComplaints: 0,
      walletRequests: 2,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    },
    {
      picture:"",
      name: "Flores Vera Cirilo Guadalupe",
      leadsAssigned: 0,
      leadsSurveyed: 0,
      percentageSurveyed: 0,
      leadsInconsCRM: 0,
      leadsComplaints: 0,
      leadsRequests: 0,
      csiLeads: "N/A",
      walletIncoming: 29,
      walletSurveyed: 24,
      walletValidity: 83,
      csiWallet: 88,
      walletIncons: 0,
      localizables: 0,
      walletComplaints: 0,
      walletRequests: 1,
      leads: true,  
      wallet: false, 
      activeTab: 'leads' 
    }
  ];
 

  public selectedAdviser: AdviserInterface | null = null;

  activeTabs: { [key: number]: string } = {}; // Objeto para realizar un seguimiento del botón activo para cada asesor



  show(adviser: AdviserInterface, type: string) {
    adviser.activeTab = type; // Actualizar el estado del tab activo del asesor
    
    
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
  
 }
