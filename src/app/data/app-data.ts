/* ••[1]••••••••••••••••••••••••• app-data.ts •••••••••••••••••••••••••••••• */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductsData } from './products.data';
import { ProductT } from 'src/app/entities/product.type';

export class AppData implements InMemoryDbService {
  public createDb(): {
    products: Array<ProductT>;
  } {
    const products: Array<ProductT> = ProductsData.products;

    return { products };
  }
}
