<template>
    <div class="container">
        <div class="row">
            <div
                class="col-12 col-md-6 col-lg-3"
                v-for="product in productStore.products"
                :key="product.id"
            >
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/ProductCard.vue";
import { useCartStore } from "@/store/cartStore";

export default defineComponent({
    name: "Home",
    components: { ProductCard },
    setup() {
        const productStore = useProductStore();
        const cartStore = useCartStore();

        onMounted(() => {
            productStore.getProducts();
        });

        const clearCart = () => {
            if (!cartStore.cart) return;

            cartStore.clearCart(cartStore.cart?.id);
        };

        return { productStore, clearCart };
    },
});
</script>
