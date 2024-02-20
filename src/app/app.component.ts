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
  totalPages!:number;

  previousbutton  = false;
  nextbutton=false

  public page:number = 1;
  public firstPage: number = 0;

  public palabra_busqueda:string = '';

  constructor(
    private CustomerserviceServices: CustomerserviceService
    ) { }

  ngOnInit(): void {
    this.CustomerserviceServices.getCustomers(this.page).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = data.data.last_page;
      this.firstPage = data.data.current_page;
    });
  }

  search(palabra:string){
    if (palabra == '') {
      console.log('Entra');
      this.CustomerserviceServices.getCustomers(this.firstPage).subscribe((data:CustomerInterface) => {
        this.customers = data.data.data; 
        this.totalPages = data.data.last_page;
        this.page = this.firstPage;
      });
    }else {
      this.CustomerserviceServices.getCustomers(this.firstPage, palabra )
       .subscribe((data:CustomerInterface) => {
         this.customers = data.data.data; 
         this.totalPages = data.data.last_page;
         this.page = this.firstPage;
       });
    }
  }

 
  next(){
    this.previousbutton  = true;
    if(this.page == this.totalPages){
      this.nextbutton  = false;
      return;
    }
    this.page = this.page + 1;
    this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = this.totalPages;
    });
   }

   previous(){
    if(this.page == 1){
      this.previousbutton  = false;
      return;
    }
    this.page = this.page - 1;
    this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda).subscribe((data:CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = this.totalPages;
    });
   }
}
