export interface ProductType {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartType {
    id: string;
    products: Array<ProductType>;
    price: number;
}
