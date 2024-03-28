import { Component, OnInit } from '@angular/core';

interface UserData {
  id: number;
  name: string;
  email: string;
  phone1: string;
  phone2: string;
  attempts: number;
}

@Component({
  selector: 'app-leads-or-wallet',
  templateUrl: './leads-or-wallet.component.html',
  styleUrls: ['./leads-or-wallet.component.css']
})
export class LeadsOrWalletComponent implements OnInit {  
    data: UserData[] = [];
    paginatedData: UserData[] = [];
    currentPage = 1;
    pageSize = 10;
    pages: number[] = [];
  
    constructor() { }
  
    ngOnInit(): void {
      // Generar datos de ejemplo
      for (let i = 1; i <= 35; i++) {
        this.data.push({
          id: i,
          name: `Usuario ${i}`,
          email: `usuario${i}@example.com`,
          phone1: `123-456-${i}`,
          phone2: `789-012-${i}`,
          attempts: Math.round(Math.random() * 10)
        });
      }
  
      this.updatePagination();
    }
  
    updatePagination() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      this.paginatedData = this.data.slice(startIndex, startIndex + this.pageSize);
  
      const totalPages = Math.ceil(this.data.length / this.pageSize);
      this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    setCurrentPage(page: number) {
      this.currentPage = page;
      this.updatePagination();
    }
  
    startProcess(user: UserData) {
      console.log('Comenzar proceso para:', user);
    }

    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePagination();
      }
    }
    
    goToNextPage() {
      const totalPages = Math.ceil(this.data.length / this.pageSize);
      if (this.currentPage < totalPages) {
        this.currentPage++;
        this.updatePagination();
      }
    }
}