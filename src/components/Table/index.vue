<template>
  <div>
    <el-table :data="tableData" border fit style="width: 90%">
      <template v-for="(item,index) in colums">
        <el-table-column
          v-if="item.id === 'text'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>

        <el-table-column v-else :key="index" :label="item.label">
          <template>
            <el-button
              v-for="item1 in item.list"
              :key="item1.prop"
              size="mini"
              :type="item1.type"
            >{{ item1.name }}</el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',

  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    colums: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>