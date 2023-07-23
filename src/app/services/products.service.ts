/* ••[1]••••••••••••••••••••••••• products.service.ts •••••••••••••••••••••••••••••• */

import { catchError, Observable, tap } from 'rxjs';
import { HandleErrorService } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsData } from '../data/products.data';
import { ProductT } from '../entities/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = ProductsData.url;

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly handleErrorService: HandleErrorService
  ) {}

  public getProducts(): Observable<Array<ProductT>> {
    return this.httpClient.get<Array<ProductT>>(this.productsUrl).pipe(
      tap((_products: Array<ProductT>): void => {
        console.log('Products: ', JSON.stringify(_products));
      }),
      catchError(this.handleErrorService.handleError)
    );
  }
}
