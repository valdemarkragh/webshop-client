import { ProductType } from "./../types/index";
import { defineStore } from "pinia";
import { apiUrl } from "@/utils";

interface ProductStoreState {
    products: Array<ProductType> | null;
    product: ProductType | null;
}

export const useProductStore = defineStore("productStore", {
    state: () =>
        ({
            products: null,
            product: null,
        } as ProductStoreState),
    actions: {
        async getProducts() {
            const res = await fetch(`${apiUrl}/product?cmd=fetchall`);
            const data = await res.json();
            this.products = data as Array<ProductType>;
        },
        async getProduct(id: string) {
            const res = await fetch(
                `${apiUrl}/product?cmd=fetch&productid=${id}`
            );
            const data = await res.json();

            this.product = data as ProductType;
        },
    },
});
