<template>
    <div class="bg-dark text-light text-center p-2">
        <div>Counter Value: {{ counter }}</div>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Increment
        </button>
        <button class="btn btn-secondary" v-on:click="generateError">
            Generate Error
        </button>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
const counter_base = ref(0);
const generate_error = ref(false);
const generateError = () => {
    generate_error.value = true;
};
const counter = computed(() => {
    if (generate_error.value) {
        throw "My Component Error";
    } else {
        return counter_base.value;
    }
});
const handleClick = () => counter_base.value++;
</script>
