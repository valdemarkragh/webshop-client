<template>
    <div class="container-fluid main-bg bg-dark px-0">
        <Navbar />
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useCartStore } from "./store/cartStore";
import { useCookies } from "vue3-cookies";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
    name: "App",
    components: { Navbar },
    setup() {
        const cartStore = useCartStore();
        const { cookies } = useCookies();

        onMounted(() => {
            let cartId = cookies.get("cartId");
            if (!cartId) {
                const uniqueId = Date.now().toString();
                cookies.set("cartId", uniqueId);
                cartId = uniqueId;
            }
            cartStore.getCart(cartId);
        });
    },
});
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

html {
    margin: 0;
}

.cursor-pointer {
    cursor: pointer;
}

.main-bg {
    min-height: 100vh;
}
</style>
