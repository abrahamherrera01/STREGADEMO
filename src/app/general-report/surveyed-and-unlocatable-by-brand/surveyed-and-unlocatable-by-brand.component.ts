import { Component } from '@angular/core';

@Component({
  selector: 'app-surveyed-and-unlocatable-by-brand',
  templateUrl: './surveyed-and-unlocatable-by-brand.component.html',
  styleUrls: ['./surveyed-and-unlocatable-by-brand.component.css']
})
export class SurveyedAndUnlocatableByBrandComponent {
  percentages:string[] =[];
  data!:any;

  constructor(){    
    this.percentages = ['1998, 17%', '9725, 83%'];
    
    this.data = {    
      title: '',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
      }
    }        
  }
}
