<template>
  <div class="body">
    <div class="are-left">
      <p>{{header}}</p>
    </div>
    <div class="are-right">
      <el-button type="primary" icon="el-icon-edit" @click="handleClick"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHead',
  props: {
    header: String
  }
}
</script>

<style  scoped>
.body {
  width: 100%;
  height: 42px;
  margin: 10px auto;
  /* background-color: pink; */
}

.are-left {
  float: left;
  margin-left: 20px;
}

.are-right {
  float: right;
  margin-right: 80px;
}
</style>