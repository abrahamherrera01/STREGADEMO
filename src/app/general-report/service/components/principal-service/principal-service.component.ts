import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-service',
  templateUrl: './principal-service.component.html',
  styleUrls: ['./principal-service.component.css']
})
export class PrincipalServiceComponent {
  show:boolean = false; 
  selectedIndex: number = 1;

  selectIndex(index: number) {
    this.show = false;
    this.selectedIndex = index;    
  }  

  toggleShow() {
    this.selectedIndex = -1; 
    this.show = !this.show;
  }
}
