<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Selected Cities: {{ cities }}</div>
        </div>
        <div class="form-check m-2" v-for="city in cityNames" v-bind:key="city">
            <label class="form-check-label">
                <input
                    type="checkbox"
                    class="form-check-input"
                    v-model="cities"
                    v-bind:value="city"
                />
                {{ city }}
            </label>
        </div>
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
