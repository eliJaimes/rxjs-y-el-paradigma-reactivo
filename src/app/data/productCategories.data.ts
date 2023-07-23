/* ••[1]••••••••••••••••••••••••• productCategories.data.ts •••••••••••••••••••••••••••••• */

import { ProductCategoryT } from '../entities/productCategory.type';

export class ProductCategoriesData {
  public static url: string = 'api/productCategories';

  public static productCategories: Array<ProductCategoryT> = [
    {
      id: 1,
      name: 'Garden',
    },
    {
      id: 3,
      name: 'Toolbox',
    },
    {
      id: 5,
      name: 'Gaming',
    },
  ];
}
