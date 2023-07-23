/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { ProductT } from 'src/app/entities/product.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatTableModule],
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  public displayedColumns: Array<string> = [
    'id',
    'productCode',
    'productName',
    'categoryId',
    'quantityInStock',
    'price',
  ];

  public products$: Observable<Array<ProductT>> =
    this.productsService.products$.pipe(
      map(
        (products: Array<ProductT>): Array<ProductT> =>
          products.map(
            (product: ProductT): ProductT => ({
              ...product,
              price: product.price ? +(product.price * 1.5).toFixed(2) : 0,
            })
          )
      ),
      catchError((error: string): Observable<never> => {
        this.errorMessage = error;
        return EMPTY;
      })
    );

  public errorMessage: string | undefined = undefined;

  public constructor(private readonly productsService: ProductsService) {}
}
