<template >
  <div>
    <template v-if="isEdit==true">
      <content-head :header="header" />
      <Table class="table" :table-data="tableData" :colums="colums" />
      <PageNum />
    </template>

    <template v-else>
      11111
      <button @click="hardlerEdit">返回</button>
    </template>
  </div>
</template>

<script>
import Table from '@/components/Table/index'
import ContentHead from '@/components/ContentHead/index'
import PageNum from '@/components/PageNum/PageNum'

export default {
  area: 'Pond',
  components: {
    Table,
    ContentHead,
    PageNum
  },
  methods: {
    hardlerEdit() {
      this.isEdit = true
    }
  },
  data() {
    return {
      isEdit: false,
      header: '片区信息',
      tableData: [
        {
          id: '1',
          area: 'A区',
          water: ' 22',
          type: '碳水',
          master: '陈大条',
          remark: '露天池塘'
        },
        {
          id: '2',
          area: 'A区',
          water: ' 22',
          type: '碳水',
          master: '陈大条',
          remark: '露天池塘'
        },
        {
          id: '3',
          area: 'A区',
          water: ' 22',
          type: '碳水',
          master: '陈大条',
          remark: '露天池塘'
        },
        {
          id: '4',
          area: 'A区',
          water: ' 22',
          type: '碳水',
          master: '陈大条',
          remark: '露天池塘'
        }
      ],
      colums: [
        {
          id: 'text',
          prop: 'id',
          label: '序号'
        },
        {
          id: 'text',
          prop: 'area',
          label: '片区'
        },
        {
          id: 'text',
          prop: 'water',
          label: '水域面积'
        },
        {
          id: 'text',
          prop: 'type',
          label: '类型'
        },
        {
          id: 'text',
          prop: 'master',
          label: '负责人'
        },
        {
          id: 'text',
          prop: 'remark',
          label: '备注'
        },
        {
          id: 'button',
          prop: 'opra',
          label: '操作',
          list: [
            {
              prop: 'edit',
              name: '编辑',
              type: ''
            },
            {
              prop: 'delete',
              name: '删除',
              type: 'danger'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.table {
  margin-left: 35px;
}
</style>
