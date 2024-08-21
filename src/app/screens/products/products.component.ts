import { Component } from '@angular/core';
import { FakeStoreService } from '../../services/FakeStoreService/fake-store.service';
import { ProductCardComponent } from '../../components/ProductComponents/product-card/product-card.component';
import { Product } from '../../../types/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private fakeStoreService: FakeStoreService) {}

  products: Product[] = [];
  fetchProducts() {
    this.fakeStoreService.get().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }
}
