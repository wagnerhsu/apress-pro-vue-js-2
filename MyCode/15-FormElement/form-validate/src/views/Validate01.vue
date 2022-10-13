<template>
    <div class="container-fluid">
        <div class="bg-danger text-white my-2 p-2" v-if="errors">
            <h5>The following problems have been found:</h5>
            <ul>
                <template v-for="errors in validationErrors">
                    <li v-for="error in errors" v-bind:key="error">
                        {{ error }}
                    </li>
                </template>
            </ul>
        </div>
        <div class="bg-primary text-white my-2 p-2">
            Name: {{ name }}, Category: {{ category }}, Price: {{ price }}
        </div>
        <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Category</label>
                <input v-model="category" class="form-control" />
            </div>
            <div class="form-group">
                <label>Price</label>
                <input
                    type="number"
                    v-model.number="price"
                    class="form-control"
                />
            </div>
            <div class="text-center">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";

import validation from "../validationRule";
const name = ref("");
const category = ref("");
const price = ref(0);
const validationErrors = reactive(new Map());

const errors = computed(() => {
    return validationErrors.size > 0;
});
const validate = (propertyName: string, value: string) => {
    let errors: string[] = [];
    Object(validation)[propertyName].forEach((v: any) => {
        if (!v.validator(value)) {
            errors.push(v.message);
        }
    });
    if (errors.length > 0) {
        console.log(propertyName, value, errors);
        validationErrors.set(propertyName, errors);
    } else {
        validationErrors.delete(propertyName);
    }
};

const validateAll = () => {
    validate("name", name.value);
    validate("category", category.value);
    validate("price", price.value.toString());
    return errors;
};
const handleSubmit = () => {
    if (validateAll())
        console.log(
            `FORM SUBMITTED: ${name.value} ${category.value} ` +
                ` ${price.value}`
        );
};
</script>
