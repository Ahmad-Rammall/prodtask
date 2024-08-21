import { Component } from '@angular/core';
import { FakeStoreService } from '../../services/FakeStoreService/fake-store.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private fakeStoreService: FakeStoreService) {}

  fetchProducts() {
    this.fakeStoreService.get().subscribe({
      next: (data) => {
        console.log(data);
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
