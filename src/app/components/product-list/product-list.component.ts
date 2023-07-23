/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { catchError, EMPTY, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { ProductT } from 'src/app/entities/product.type';

@Component({
  imports: [CommonModule, MatTableModule],
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  public displayedColumns: Array<string> = [
    'id',
    'productCode',
    'productName',
    'categoryId',
    'quantityInStock',
  ];

  public products$: Observable<Array<ProductT>> | undefined = undefined;

  public errorMessage: string | undefined = undefined;

  public constructor(private readonly productsService: ProductsService) {}

  /* TODO: handle possible errors from products service */

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts().pipe(
      catchError((error: string): Observable<never> => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
