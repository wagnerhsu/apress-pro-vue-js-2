<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Selected Cities: {{ cities }}</div>
        </div>
        <select multiple class="form-control" v-model="cities">
            <option v-for="city in cityNames" v-bind:key="city">
                {{ city }}
            </option>
        </select>
        <div class="text-center">
            <button v-on:click="reset" class="btn btn-info">Reset</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const cityNames = ref(["London", "New York", "Paris", "Berlin"]);
const cities = ref([]);
const reset = () => {
    cities.value = [];
};
</script>
