<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import BindDemo from "./components/BindDemo.vue";
import TwoWayBind from "./components/TwoWayBind.vue";
import BindWithVModel from "./components/BindWithVModel.vue";
import BindArray from "./components/BindArray.vue";
import BindSelect from "./components/BindSelect.vue";
</script>

<template>
    <header>
        <img
            alt="Vue logo"
            class="logo"
            src="./assets/logo.svg"
            width="125"
            height="125"
        />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>
    </header>

    <main>
        <TheWelcome />
    </main>
    <BindDemo />
    <TwoWayBind />
    <BindWithVModel />
    <BindArray />
    <BindSelect />
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
