import { Component, Input } from '@angular/core';
import { LoadCsv } from '../../interfaces/load-csv.interface';

@Component({
  selector: 'app-load-csv',
  templateUrl: './load-csv.component.html',
  styleUrls: ['./load-csv.component.css']
})
export class LoadCsvComponent {
  @Input() data!: LoadCsv;

  loading:boolean = false;

  onFileSelected(event: any) {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      console.log('Archivo seleccionado:', selectedFile);      
    }
  }
}
