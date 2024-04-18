import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent { 
  show:boolean = false; 
  selectedIndex: number = 7;

  selectIndex(index: number) {
    this.show = false;
    this.selectedIndex = index;    
  }  

  toggleShow() {
    this.selectedIndex = -1; 
    this.show = !this.show;
  }
}
