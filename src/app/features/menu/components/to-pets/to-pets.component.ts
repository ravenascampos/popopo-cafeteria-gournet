import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-to-pets',
  templateUrl: './to-pets.component.html',
  styleUrls: ['./to-pets.component.scss'],
})
export class ToPetsComponent implements OnInit {
  @Input()
  toPet!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.toPet = this.productsService.getProductsByType('pets');
  }
}
