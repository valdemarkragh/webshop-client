import { CartType } from "./../types/index";
import { defineStore } from "pinia";
import { apiUrl, fetchData } from "@/utils";

interface CartStoreState {
    cart: CartType | null;
}

export const useCartStore = defineStore("cartStore", {
    state: () =>
        ({
            cart: null,
        } as CartStoreState),
    actions: {
        async getCart(cartId: string) {
            const cart = await fetchData<CartType>(
                `${apiUrl}/cart?cmd=fetch&cartid=${cartId}`
            );

            this.cart = cart;
            return cart;
        },
        async addProduct(
            id: string,
            quantity: number,
            cartId: string
        ): Promise<CartType> {
            const cart = await fetchData<CartType>(
                `${apiUrl}/cart?cmd=add&productid=${id}&quantity=${quantity}&cartid=${cartId}`
            );

            this.cart = cart;
            return cart;
        },
        async clearCart(cartId: string) {
            const cart = await fetchData<CartType>(
                `${apiUrl}/cart?cmd=clear&cartid=${cartId}`
            );

            this.cart = cart;
            return cart;
        },
    },
});
