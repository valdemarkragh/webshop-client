<template>
    <nav class="navbar navbar-dark bg-dark mb-3 shadow">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="position-relative" v-auto-animate>
                <BIconCart class="text-white" />
                <div
                    class="cart-counter bg-white d-flex align-items-center justify-content-center"
                >
                    <span class="text-dark fw-bold">{{ cartCounter }}</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { BIconCart } from "bootstrap-icons-vue";
import { useCartStore } from "@/store/cartStore";

export default defineComponent({
    name: "Navbar",
    components: { BIconCart },
    setup() {
        const cartStore = useCartStore();

        const cartCounter = computed(() => {
            if (cartStore.cart?.products) {
                return cartStore.cart.products.reduce((sum, product) => {
                    return (sum += product.quantity);
                }, 0);
            }

            return 0;
        });

        return { cartCounter };
    },
});
</script>

<style scoped>
.cart-counter {
    position: absolute;
    top: -8px;
    right: -10px;
    font-size: 9px;
    padding: 10px;
    color: #fff;
    border-radius: 50%;
    width: 15px;
    height: 15px;
}
</style>
