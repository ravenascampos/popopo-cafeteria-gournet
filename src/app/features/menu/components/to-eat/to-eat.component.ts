import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-to-eat',
  templateUrl: './to-eat.component.html',
  styleUrls: ['./to-eat.component.scss'],
})
export class ToEatComponent implements OnInit {
  @Input()
  toEat!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.toEat = this.productsService.getProductsByType('comer');
  }
}
