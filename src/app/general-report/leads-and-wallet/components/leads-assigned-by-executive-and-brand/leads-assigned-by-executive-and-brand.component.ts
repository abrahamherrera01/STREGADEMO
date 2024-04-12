import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-leads-assigned-by-executive-and-brand',
  templateUrl: './leads-assigned-by-executive-and-brand.component.html',
  styleUrls: ['./leads-assigned-by-executive-and-brand.component.css']
})
export class LeadsAssignedByExecutiveAndBrandComponent {
  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['1998, 17%', '9725, 83%'];
    
    this.leadIncidents = {    
      title: '',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        categories: [          
          'Maria Ailin Carolina Herrera Hernandez',
          'Juan Luis Ayala Valdez',
          'Rebeca Lopez Rodriguez',
          'Kevin Jesus Rojas Navarrete',
          'Sergio Saul Trujillo Sanchez Lorena Flores Arroyo',
          'Ramon Uribe Villegas Alan Cruz Pacheco Jimenez',
          'Miguel Moreno Israel Rojas Lazcano',
          'Gonzalo Quintana Morales',
          'Pablo Ruiz Herrera',
          'Erick Christian Rasgado Marroquin Yovana Barquera Cardoso',
          'Raul Ramirez',
          'Alejandra Leticia Mendoza Marquez',
          'Miguel Angel Peralta Vazquez Armando Santander Colin',
          'Enrique Guillermo Garduño Maldonado Shamanta Yanin Jorge Rodriguez',
          'Mario Alberto Lopez Soto Victor Velazquez',
          'Sergio Ortega Herrero Blanca Merari Vega lozada',
          'Mariana Diaz',
          'Ernesto Barrera Osorio',
          'Norberto Remos Valdez',
          'Jorge Fernando Rojas Rosas',
          'Eduardo Martinez',
          'Luis Escamilla Morgado',
          'Raul Rojas Navarrete Antonio Ángeles Hernández',
          'Francisco Javier Mejia Carlos Calva',
          'Emanuel Martinez'
        ],      
        series: [
          {
            name: 'BMW',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,               
            },
            emphasis: {
              focus: 'series'
            },
            data: [5, 12, 8, 17, 23, 10, 3, 6, 15, 19, 20, 9, 14, 22, 4, 11, 7, 18, 1, 16, 13, 24, 2, 21, 25]
          },
          {
            name: 'MINI',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series'
            },
            data: [18, 9, 3, 20, 14, 5, 12, 24, 22, 10, 16, 6, 13, 2, 7, 15, 19, 4, 11, 1, 23, 8, 17, 21, 25]
          },
          {
            name: 'MOTO',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series'
            },
            data: [14, 8, 19, 5, 22, 7, 9, 20, 12, 16, 3, 25, 6, 10, 4, 23, 17, 13, 18, 1, 15, 11, 2, 21, 24]
          },
          {
            name: 'SEMINUEVO',
            type: 'bar',
            stack: 'total',
            label: {
              show: true             
            },
            emphasis: {
              focus: 'series'
            },
            data: [10, 21, 8, 19, 2, 5, 12, 16, 23, 6, 13, 4, 7, 25, 14, 9, 18, 15, 1, 17, 20, 11, 22, 24, 3]
          },        
        ]
      }
    }        
  }
}
