/* ••[1]••••••••••••••••••••••••• productCategories.service.ts •••••••••••••••••••••••••••••• */

import { catchError, Observable } from 'rxjs';
import { HandleErrorService } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategoriesData } from '../data/productCategories.data';
import { ProductCategoryT } from '../entities/productCategory.type';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesService {
  private productCategoriesUrl: string = ProductCategoriesData.url;

  public productCategories$: Observable<Array<ProductCategoryT>> =
    this.httpClient
      .get<Array<ProductCategoryT>>(this.productCategoriesUrl)
      .pipe(catchError(this.handleErrorService.handleError));

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly handleErrorService: HandleErrorService
  ) {}
}
