import { Component, OnInit } from '@angular/core';
import { Customer, CustomerInterface } from 'src/interfaces/customer-interface';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { NgForm, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  title = 'StregaDemo';
  customers: any[] = [];
  totalPages!: number;
  previousbutton = false;
  nextbutton = false;
  page = 1;
  firstPage = 1;
  palabra_busqueda = '';
  palabra_vin = '';
  show = false;
  displayName = '';
  displayVin = '';
  isName = false;
  isVin = false;
  messageNotFound = false;
  baseUrl = environment.baseUrl+'/api/getImage/';
  lastSearch: string = ''; 
  
  public form!:NgForm;
  constructor(private CustomerserviceServices: CustomerserviceService) { }


  onSubmit(form: NgForm){
        this.form=form;
        this.page = 1;
        this.CustomerserviceServices.getCustomers(this.page,form.value).subscribe(
          (data) => { 
            console.log(data.data.data);
            this.customers = data.data.data; 
            this.totalPages = data.data.last_page;
           }              
        );     
        if(this.customers.length ==0 ){
          this.messageNotFound =true;
        }
        else{
          this.messageNotFound =false;
          this.show = true;
        }
   }


  ngOnInit(): void {
 
  }


  next() {
    this.previousbutton = true;
    if (this.page == this.totalPages ) {
     
      this.nextbutton = false;
      return;
    }
    this.page = this.page + 1;
    const apiCall = [
      this.CustomerserviceServices.getCustomers(this.page,this.form.value)
    ];
    forkJoin(apiCall).subscribe(
      {
        next: ([data]) => {
          this.customers = data.data.data; 
          this.totalPages = this.totalPages;
          if (this.customers.length !== 0) {
            this.messageNotFound = false;
          } else {
            this.messageNotFound = true;
          }
          this.show = true;
        },
        error: (error) => {
          console.log(error);
        }
      }        
    );
  }



  
  previous() {
    if (this.page == 1) {
      this.previousbutton = false;
      return;
    }
    this.page = this.page - 1;
    const apiCall = [
      this.CustomerserviceServices.getCustomers(this.page,this.form.value)
    ];
    forkJoin(apiCall).subscribe(
      {
        next: ([data]) => {
          this.customers = data.data.data; 
          this.totalPages = this.totalPages;
          if (this.customers.length !== 0) {
            this.messageNotFound = false;
          } else {
            this.messageNotFound = true;
          }
          this.show = true;
        },
        error: (error) => {
          console.log(error);
        }
      }        
    );

  }

}

