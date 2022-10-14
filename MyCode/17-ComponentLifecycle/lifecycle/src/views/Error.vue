<template>
    <div class="bg-danger text-white text-center h3 p-2" v-if="error.occurred">
        An Error Has Occurred
        <h4>Error : "{{ error.error }}" ({{ error.source }})</h4>
    </div>
    <div v-else class="bg-primary text-white m-2 p-2">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="checked" />
            <label>Checkbox</label>
        </div>
        Checked Value: {{ checked }}
        <div class="bg-info p-2" v-if="checked">
            <message-display></message-display>
        </div>
    </div>
</template>
<script setup lang="ts">
import MessageDisplay from "./MessageDisplay.vue";
import { ref, reactive, onErrorCaptured, onMounted } from "vue";
const checked = ref(true);
const names = ref([]);
const error = reactive({
    occurred: false,
    error: "",
    source: "",
});
onErrorCaptured((e: string, component: any, source: string) => {
    error.occurred = true;
    error.error = e;
    error.source = source;
    return false;
});
onMounted(() => {
    console.log("onMounted");
});
</script>
