<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: {{ name }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <div class="form-group">
                <label>Selected Names</label>
                <select class="form-control" v-model="name">
                    <option value="all">Everyone</option>
                    <option v-for="n in allNames" :key="n" :value="n">
                        Just {{ n }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
const allNames = ref(["Bob", "Alice", "Joe"]);
</script>
