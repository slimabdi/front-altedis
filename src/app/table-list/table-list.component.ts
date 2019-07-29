import { Component, OnInit } from '@angular/core';
import { ConsultantService } from "../consultant.service";
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  error: string = '';
  products: any;
  constructor(private consulting: ConsultantService) { }

  ngOnInit() {
    this.consulting
    .getList()
    .subscribe(
        data => {this.products= data; 
        console.log(this.products)},
        error => {
          this.error = error.error.message;
          console.log(this.error)
          localStorage.removeItem('session');
        }
    );
  }

}
