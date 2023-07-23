/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { ProductT } from 'src/app/entities/product.type';
import { Subscription } from 'rxjs';

@Component({
  imports: [CommonModule, MatChipsModule, MatTableModule],
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  public displayedColumns: Array<string> = [
    'id',
    'productCode',
    'productName',
    'categoryId',
    'quantityInStock',
  ];

  public products: Array<ProductT> | undefined = undefined;

  public productsSubscription!: Subscription;

  public errorMessage: string | undefined = undefined;

  public constructor(private readonly productsService: ProductsService) {}

  public ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe({
      error: (error: string): void => {
        this.errorMessage = error;
      },
      next: (products: Array<ProductT>): void => {
        this.products = products;
      },
    });
  }

  public ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  }
}
