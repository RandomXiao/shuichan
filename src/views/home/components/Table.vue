<template>
  <div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" size="mini">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="type" label="品种"></el-table-column>
        <el-table-column label="操作">
          <div slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="input">
      <div class="intro">
        <span>基地简介</span>
      </div>
      <div class="content">
        <el-input type="textarea" :rows="5" size="mini" placeholder="请输入内容" v-model="textarea"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }
  },
  name: 'Table',
  data() {
    return {
      textarea: '',
      tableData: [
        {
          id: '1',
          type: '草鱼'
        },
        {
          id: '2',
          type: '青鱼'
        },
        {
          id: '3',
          type: '罗非鱼'
        },
        {
          id: '4',
          type: '泥鳅'
        }
      ]
    }
  }
}
</script>

<style  scoped>
.table {
  margin: 0 auto;
  width: 540px;
}

.content {
  margin-top: 10px;
  width: 100%;
}

.input {
  margin-top: 25px;
}
</style>