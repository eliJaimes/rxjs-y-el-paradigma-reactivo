/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { catchError, combineLatest, EMPTY, map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductCategoriesService } from 'src/app/services/productCategories.service';
import { ProductCategoryT } from 'src/app/entities/productCategory.type';
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
  /* TODO: replace the categoryId column with the name of the related category */

  public displayedColumns: Array<string> = [
    'id',
    'productCode',
    'productName',
    'category',
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

  public productsWithCategory$: Observable<Array<ProductT>> = combineLatest([
    this.products$,
    this.productCategoriesService.productCategories$,
  ]).pipe(
    map(
      ([products, productCategories]: [
        Array<ProductT>,
        Array<ProductCategoryT>
      ]): Array<ProductT> =>
        products.map(
          (product: ProductT): ProductT => ({
            ...product,
            category: productCategories.find(
              (productCategory: ProductCategoryT): boolean =>
                productCategory.id === product.categoryId
            )?.name,
          })
        )
    )
  );

  public errorMessage: string | undefined = undefined;

  public constructor(
    private readonly productsService: ProductsService,
    private readonly productCategoriesService: ProductCategoriesService
  ) {}
}
