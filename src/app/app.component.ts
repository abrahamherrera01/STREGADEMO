import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from './services/customerservice.service';
import { Customer, CustomerInterface } from 'src/interfaces/customer-interface';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    const lastSearch = localStorage.getItem('last_search');
    if (lastSearch) {
      this.lastSearch = lastSearch;
      this.search(lastSearch);
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
      forkJoin(apiCall)
        .subscribe(([data]) => {
          this.customers = data.data.data; 
          this.totalPages = data.data.last_page;
          this.page = this.firstPage;
          if (this.customers.length !== 0) {
            this.messageNotFound = false;
          } else {
            this.messageNotFound = true;
          }
        });
      this.show = true;
    }
  }

  next() {
    this.previousbutton = true;
    if (this.page == this.totalPages) {
      this.nextbutton = false;
      return;
    }
    this.page = this.page + 1;
    this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda).subscribe((data: CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = this.totalPages;
    });
  }

  previous() {
    if (this.page == 1) {
      this.previousbutton = false;
      return;
    }
    this.page = this.page - 1;
    this.CustomerserviceServices.getCustomers(this.page, this.palabra_busqueda).subscribe((data: CustomerInterface) => {
      this.customers = data.data.data; 
      this.totalPages = this.totalPages;
    });
  }
}
