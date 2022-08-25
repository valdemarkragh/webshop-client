<template>
    <div class="card">
        <img class="product-image" :src="getProductImage(product.image)" />
        <div class="card-body">
            <span class="text-capitalize">{{ product.name }}</span>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <button
                class="btn btn-primary btn-sm"
                @click="addProduct(product.id)"
            >
                Add product
            </button>
            <input
                class="form-control product-quantity text-center"
                type="number"
                v-model="quantity"
                min="1"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { ProductType } from "@/types";
import { defineComponent, ref } from "vue";
import { useCartStore } from "@/store/cartStore";

export default defineComponent({
    name: "ProductCard",
    props: {
        product: {
            type: Object as () => ProductType,
            required: true,
        },
    },
    setup() {
        const quantity = ref(1);
        const cartStore = useCartStore();

        const getProductImage = (imageName: string) => {
            return `/images/${imageName}`;
        };

        const addProduct = (id: string) => {
            if (!cartStore.cart) return;

            cartStore
                .addProduct(id, quantity.value, cartStore.cart.id)
                .then((cart) => {
                    console.log(cart);
                    cartStore.cart = cart;
                });
        };

        return { quantity, getProductImage, addProduct };
    },
});
</script>

<style scoped>
.product-image {
    height: 200px;
    object-fit: contain;
}

.product-quantity {
    width: 50px;
}

.product-quantity::-webkit-outer-spin-button,
.product-quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
.product-quantity {
    -moz-appearance: textfield;
}
</style>
