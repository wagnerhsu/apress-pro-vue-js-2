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
                    true-value="bg-primary"
                    false-value="bg-info"
                />
                Dark Color
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const dataValue = ref("bg-info");
</script>
