import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-sale',
  templateUrl: './principal-sale.component.html',
  styleUrls: ['./principal-sale.component.css']
})
export class PrincipalSaleComponent {
  show:boolean = false; 
  selectedIndex: number = 0;

  selectIndex(index: number) {
    this.show = false;
    this.selectedIndex = index;    
  }  

  toggleShow() {
    this.selectedIndex = -1; 
    this.show = !this.show;
  }
}
