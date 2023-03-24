import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function create(name:string, price:number, description:string, image:string): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rowData: any; // Declare rowData to store the response data
  name!: string;
  price!: number;
  description!: string;
  image!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRowData(1);
    console.log(this.rowData);
    console.log(this.name,this.price,this.description,this.image)
    create(this.name,this.price,this.description,this.image)
  }

  getRowData(id: number) {
    const url = `http://localhost:9080/api/listings/${id}`;
    this.http.get(url).subscribe(data => {
      this.rowData = data; // Store the response data in the rowData variable
      this.name = (data as { name: string }).name;
      this.price = (data as { price: number }).price;
      this.description = (data as { description: string }).description;
      this.image = (data as { image: string }).image;
    });
  }
}
