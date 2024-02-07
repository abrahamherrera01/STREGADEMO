import { Component } from '@angular/core';
import { CustomerserviceService } from './services/customerservice.service';
import { Customer, CustomerInterface } from 'src/interfaces/customer-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StregaDemo';
 
  customers: Customer[] = [];
  totalPages:any ="";

  previousbutton  = false;
  nextbutton=false

  page=1

  public palabra_busqueda:string = '';

  constructor(public CustomerserviceServices: CustomerserviceService) { }

  ngOnInit(): void {
    this.CustomerserviceServices.getCustomers(this.page).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = data.data.last_page;
    });
  }

  search(palabra:string){
     this.CustomerserviceServices.getCustomers(this.page,palabra ).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = data.data.last_page;
    });
  }

 
  next(){
    this.previousbutton  = true;
    //aqui falta probar el de next xd
    if(this.page == this.totalPages){
      this.nextbutton  = true;
    }
    this.page = this.page + 1;
    this.CustomerserviceServices.getCustomers(this.page).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = data.data.last_page;
    });
   }

   previous(){
    if(this.page == 1){
      this.previousbutton  = false;
    }
    this.page = this.page - 1;
    this.CustomerserviceServices.getCustomers(this.page).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = data.data.last_page;
    });
   }
}
