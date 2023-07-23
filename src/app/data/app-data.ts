/* ••[1]••••••••••••••••••••••••• app-data.ts •••••••••••••••••••••••••••••• */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductCategoriesData } from './productCategories.data';
import { ProductCategoryT } from '../entities/productCategory.type';
import { ProductsData } from './products.data';
import { ProductT } from 'src/app/entities/product.type';

export class AppData implements InMemoryDbService {
  public createDb(): {
    productCategories: Array<ProductCategoryT>;
    products: Array<ProductT>;
  } {
    const productCategories: Array<ProductCategoryT> =
      ProductCategoriesData.productCategories;
    const products: Array<ProductT> = ProductsData.products;

    return { productCategories, products };
  }
}
