import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  products: Array<Product> = [];

  filteredProducts: Array<Product> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
  }

  getToEat(event: any) {
    let element = document.getElementById('toEat');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  getToDrink(event: any) {
    let element = document.getElementById('toDrink');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  getToPet(event: any) {
    let element = document.getElementById('toPet');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  getProductsByName(event: any) {
    const value = event.target.value;
    const filteredProducts = this.products.filter(
      (product) => product.name.toUpperCase().search(value.toUpperCase()) > -1
    );
    this.filteredProducts = filteredProducts;
    console.log(filteredProducts);
  }
}
