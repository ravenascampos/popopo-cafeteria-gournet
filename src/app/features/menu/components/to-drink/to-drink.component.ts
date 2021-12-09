import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-to-drink',
  templateUrl: './to-drink.component.html',
  styleUrls: ['./to-drink.component.scss'],
})
export class ToDrinkComponent implements OnInit {
  @Input()
  toDrink!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.toDrink = this.productsService.getProductsByType('beber');
  }
}
