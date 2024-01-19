import { Product } from "./productModel";
import { Address } from "./userModel";

export class Order{
    id!: number;
    userId!: number;
    sellerId!: number;
    product!: Product;
    deliveryAddress!: Address;
    contact!: number;
    dateTime!: string;
}