<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
    <vxe-table :data="tableData">
      <vxe-column type="seq" title="Seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="address" title="Address"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const tableData = ref([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
    ])
    return {
      tableData
    }
  },
}
</script>
