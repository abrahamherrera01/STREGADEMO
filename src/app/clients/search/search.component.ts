import { Component, OnInit } from '@angular/core';
import { Customer, CustomerInterface } from 'src/interfaces/customer-interface';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
import { CustomerserviceService } from 'src/app/services/customerservice.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  title = 'StregaDemo';
  customers: Customer[] = [];
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
  
  constructor(private CustomerserviceServices: CustomerserviceService) { }

  ngOnInit(): void {
    const last = localStorage.getItem('last_search');
    console.log(last);
    if (last) {
      this.lastSearch = last;
 
      this.search(last);
    }
  }

  search(palabra: string, search = '') {
    if (palabra !== '') {
      localStorage.setItem('last_search', palabra);
      this.lastSearch = palabra;
    }

    if (palabra !== '' && search === 'name') {
      this.isVin = true;
      this.isName = false;
    } else {
      if (palabra !== '' && search === 'vin') {
        this.isName = true;
      } else {
        this.isVin = false;
        this.isName = false;
      }
    }

    if (palabra == '') {
      this.show = false;
      this.messageNotFound = false;
    } else {
      const apiCall = [
        this.CustomerserviceServices.getCustomers(this.firstPage, palabra)
      ];
      
 
      forkJoin(apiCall).subscribe(
        {
          next: ([data]) => {
            this.customers = data.data.data; 
            this.totalPages = data.data.last_page;
            this.page = this.firstPage;
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

  next() {
    this.previousbutton = true;
    if (this.page == this.totalPages) {
      this.nextbutton = false;
      return;
    }
    this.page = this.page + 1;
    const apiCall = [
      this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda)
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
      this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda)
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

