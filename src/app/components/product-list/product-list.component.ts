/* ••[1]••••••••••••••••••••••••• product-list.component.ts •••••••••••••••••••••••••••••• */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductT } from 'src/app/entities/product.type';

@Component({
  imports: [CommonModule, MatChipsModule, MatTableModule],
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

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
