import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../types/products';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  constructor(private httpClient: HttpClient) {}

  // get all products
  get(): Observable<Product[]> {
    return this.httpClient.get(
      'https://fakestoreapi.com/products'
    ) as Observable<Product[]>;
  }
}
