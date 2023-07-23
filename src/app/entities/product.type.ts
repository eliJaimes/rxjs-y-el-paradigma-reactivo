/* ••[1]••••••••••••••••••••••••• product.type.ts •••••••••••••••••••••••••••••• */

export type ProductT = {
  categoryId?: number;
  description?: string;
  id: number;
  price?: number;
  productCode?: string;
  productName: string;
  quantityInStock?: number;
  searchKey?: Array<string>;
  supplierIds?: Array<number>;
};
