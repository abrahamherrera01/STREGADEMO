import { Component } from '@angular/core';
import { CustomerserviceService } from './services/customerservice.service';
import { Customer, CustomerInterface } from 'src/interfaces/customer-interface';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

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
  public firstPage: number = 1;

  public palabra_busqueda:string = '';
  public palabra_vin:string = '';

  public show: boolean = false;
  public displayName: string = '';
  public displayVin: string = '';
  public isName: boolean = false;
  public isVin: boolean = false;
  public messageNotFound: boolean = false;
  public baseUrl:string = environment.baseUrl+'/api/getImage/';   

  constructor(
    private CustomerserviceServices: CustomerserviceService
    ) { }

  ngOnInit(): void {
    // this.CustomerserviceServices.getCustomers(this.page).subscribe((data:CustomerInterface) => {
    //   this.customers = data.data.data; 
    //   this.totalPages = data.data.last_page;
    //   this.firstPage = data.data.current_page;
    // });
  }

  search(palabra:string, search = ''){

    if (palabra !== '' && search === 'name') {
      this.isVin = true;
      this.isName = false;
    }else{
      if ( palabra !== '' && search === 'vin') {
        this.isName = true;
      }else{
        this.isVin = false;
        this.isName = false;
      }
    }

    if (palabra == '') {
      this.show = false;
      this.messageNotFound = false;
    }else {
      const apiCall = [
        this.CustomerserviceServices.getCustomers(this.firstPage, palabra )
      ];
      forkJoin(apiCall)
       .subscribe(([data]) => {
         this.customers = data.data.data; 
         this.totalPages = data.data.last_page;
         this.page = this.firstPage;
         if (this.customers.length !== 0) {
          this.messageNotFound = false;
         }else{
          this.messageNotFound = true;
         }
       });
       this.show = true;
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
