<template>
  <BasicForm></BasicForm>
  <TextField></TextField>
  <RadioCheckbox></RadioCheckbox>
  <RadioComponent></RadioComponent>
  <SelectComponent></SelectComponent>
  <ModelModifier></ModelModifier>
  <ArrayBinding></ArrayBinding>
  <CustomValue></CustomValue>
</template>

<script>
import BasicForm from './components/BasicForm.vue';
import TextField from './components/TextField.vue';
import RadioCheckbox from './components/RadioCheckbox.vue';
import RadioComponent from './components/RadioComponent.vue';
import SelectComponent from './components/SelectComponent.vue';
import ModelModifier from './components/ModelModifier.vue';
import ArrayBinding from './components/ArrayBinding.vue';
import CustomValue from './components/CustomValue.vue';

export default {
  name: 'App',
  components: {
    BasicForm,
    TextField,
    RadioCheckbox,
    RadioComponent,
    SelectComponent,
    ModelModifier,
    ArrayBinding,
    CustomValue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
