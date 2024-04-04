import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {  

  sections:boolean[] = [
    true, false
  ];
  datos:any[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.detectSectionPosition('section1', 0);
      this.detectSectionPosition('section2', 1);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.detectSectionPosition('section1', 0);
    this.detectSectionPosition('section2', 1);
  }

  detectSectionPosition(id:string, index:number): void {    
    const sectionElement = document.getElementById(id);        

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;        

    if (sectionElement) {
      const sectionPosition = sectionElement.offsetTop; 

           
      if(id != 'section1'){
        this.datos.push({
          id, scrollPosition, windowHeight, sectionPosition
        });         
      }  
      
      if( scrollPosition >= (sectionPosition - 10) ){        
        this.sections[index] = true;        
        if(id != 'section1'){
          this.datos.push({
            id, scrollPosition, windowHeight, sectionPosition
          }); 
          alert(id)
          console.log( this.datos );
        }        
      } 
      if( windowHeight >= (sectionPosition * 0.7) ){
        this.sections[index] = true;
      }
    }
  }
}
