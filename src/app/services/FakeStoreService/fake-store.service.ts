import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  constructor(private httpClient: HttpClient) {}

  // get all products
  get<T>(): Observable<T> {
    return this.httpClient.get<T>(
      'https://fakestoreapi.com/products'
    ) as Observable<T>;
  }
}
