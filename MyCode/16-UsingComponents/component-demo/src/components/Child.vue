<template>
    <div class="bg-primary text-white text-center m-2 p-2 h6">
        {{message}}
        <div class="form-group m-1 text-start">
        <label>{{labelText}}</label>
        <input v-model="message" class="form-control" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    labelText: String,
    initialValue: String
})
const message = ref(props.initialValue)
</script>
