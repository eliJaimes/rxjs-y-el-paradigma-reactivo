/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { catchError, combineLatest, EMPTY, map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ProductCategoriesService } from 'src/app/services/productCategories.service';
import { ProductCategoryT } from 'src/app/entities/productCategory.type';
import { ProductsService } from 'src/app/services/products.service';
import { ProductT } from 'src/app/entities/product.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatSelectModule, MatTableModule],
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  /* TODO: add a filter to display products of certain category */

  public displayedColumns: Array<string> = [
    'id',
    'productCode',
    'productName',
    'category',
    'quantityInStock',
    'price',
  ];

  public selectedCategoryId: number | undefined = undefined;

  public productCategories$: Observable<Array<ProductCategoryT>> =
    this.productCategoriesService.productCategories$;

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
    this.productCategories$,
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

  public productsFilteredByCategory$: Observable<Array<ProductT>> =
    this.productsWithCategory$.pipe(
      map(
        (products: Array<ProductT>): Array<ProductT> =>
          products.filter((product: ProductT): boolean =>
            this.selectedCategoryId
              ? product.categoryId === this.selectedCategoryId
              : true
          )
      )
    );

  public errorMessage: string | undefined = undefined;

  public constructor(
    private readonly productsService: ProductsService,
    private readonly productCategoriesService: ProductCategoriesService
  ) {}

  public selectedCategoryIdChange(event: MatSelectChange): void {
    console.log('%c\nselectedCategoryIdChange', 'color: SpringGreen');
    console.log('event: ', event);

    this.selectedCategoryId = +event.value;
  }
}
