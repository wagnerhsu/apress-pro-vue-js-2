<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: {{ name }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <div class="form-check" v-for="n in allNames" v-bind:key="n">
                <input
                    class="form-check-input"
                    type="radio"
                    v-model="name"
                    :value="n"
                />
                <label class="form-check-label">{{ n }}</label>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
const allNames = ref(["Bob", "Alice", "Joe"]);
</script>
