<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Data Value: {{ dataValue }}</div>
            <div>Other Value: {{ otherValue || "(Empty)" }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <div class="form-check">
                <label class="form-check-label">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="dataValue"
                    />
                    Data Value
                </label>
            </div>
        </div>
        <div class="bg-primary m-2 p-2">
            <input type="text" class="form-control" v-model="otherValue" />
        </div>
        <div class="text-center m-2">
            <button class="btn btn-secondary" v-on:click="reset">Reset</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const dataValue = ref(false);
const otherValue = ref("");

const reset = () => {
    dataValue.value = false;
    otherValue.value = "";
};
</script>
