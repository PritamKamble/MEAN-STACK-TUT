import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;

  @Output() test = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onProductClick() {
    console.log('clicked');
    this.test.emit(this.product);
  }

}
