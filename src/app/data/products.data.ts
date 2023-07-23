/* ••[1]••••••••••••••••••••••••• products.data.ts •••••••••••••••••••••••••••••• */

import { ProductT } from 'src/app/entities/product.type';

export class ProductsData {
  public static url: string = 'api/products';

  public static products: Array<ProductT> = [
    {
      categoryId: 1,
      description: 'Leaf rake with 48-inch wooden handle',
      id: 1,
      price: 19.95,
      productCode: 'GDN-0011',
      productName: 'Leaf Rake',
      quantityInStock: 15,
      supplierIds: [1, 2],
    },
    {
      categoryId: 1,
      description: '15 gallon capacity rolling garden cart',
      id: 2,
      price: 32.99,
      productCode: 'GDN-0023',
      productName: 'Garden Cart',
      quantityInStock: 2,
      supplierIds: [3, 4],
    },
    {
      categoryId: 3,
      description: 'Curved claw steel hammer',
      id: 5,
      price: 8.9,
      productCode: 'TBX-0048',
      productName: 'Hammer',
      quantityInStock: 8,
      supplierIds: [5, 6],
    },
    {
      categoryId: 3,
      description: '15-inch steel blade hand saw',
      id: 8,
      price: 11.55,
      productCode: 'TBX-0022',
      productName: 'Saw',
      quantityInStock: 6,
      supplierIds: [7, 8],
    },
    {
      categoryId: 5,
      description: 'Standard two-button video game controller',
      id: 10,
      price: 35.95,
      productCode: 'GMG-0042',
      productName: 'Video Game Controller',
      quantityInStock: 12,
      supplierIds: [9, 10],
    },
    {
      categoryId: 5,
      description: 'Doll from the 1960s',
      id: 13,
      price: 675.0,
      productCode: 'GMG-0001',
      productName: 'Chatty Cathy (no suppliers)',
      quantityInStock: 0,
    },
  ];
}
