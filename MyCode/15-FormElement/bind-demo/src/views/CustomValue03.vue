<template>
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="dataValue">
            <div>Value: {{ dataValue }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
                <input
                    type="checkbox"
                    class="form-check-input"
                    v-model="dataValue"
                    v-bind:true-value="darkColor"
                    v-bind:false-value="lightColor"
                />
                Dark Color
            </label>
        </div>
        <div class="form-group m-2 p-2 bg-secondary">
            <label>Color</label>
            <select v-model="dataValue" class="form-control">
                <option v-bind:value="darkColor">Dark Color</option>
                <option v-bind:value="lightColor">Light Color</option>
            </select>
        </div>
        <div class="form-check-inline m-2">
            <label class="form-check-label">
                <input
                    type="radio"
                    class="form-check-input"
                    v-model="dataValue"
                    v-bind:value="darkColor"
                />
                Dark Color
            </label>
        </div>
        <div class="form-check-inline m-2">
            <label class="form-check-label">
                <input
                    type="radio"
                    class="form-check-input"
                    v-model="dataValue"
                    v-bind:value="lightColor"
                />
                Light Color
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const darkColor = ref("bg-primary");
const lightColor = ref("bg-info");
const dataValue = ref("bg-info");
</script>
