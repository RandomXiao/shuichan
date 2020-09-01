<template>
  <div class="block">
    <el-pagination :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'PageNum'
}
</script>