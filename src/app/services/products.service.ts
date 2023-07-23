/* ••[1]••••••••••••••••••••••••• products.service.ts •••••••••••••••••••••••••••••• */

import { catchError, Observable } from 'rxjs';
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

  public products$: Observable<Array<ProductT>> = this.httpClient
    .get<Array<ProductT>>(this.productsUrl)
    .pipe(catchError(this.handleErrorService.handleError));

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly handleErrorService: HandleErrorService
  ) {}
}