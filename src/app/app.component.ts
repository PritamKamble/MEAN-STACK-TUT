import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  price = 0;

  products = [
    { name: 'test', price: 300 },
    { name: 'test', price: 302 },
    { name: 'test', price: 304 },
    { name: 'test', price: 306 },
  ];

  add() {
    this.products.push({ name: this.name, price: this.price });
    this.name = '';
    this.price = 0;
  }

  edit(product) {
    this.name = product.name;
    this.price = product.price;
  }
}
