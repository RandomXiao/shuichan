<template>
  <div class="dashboard-container">
    <div class="dashboard-head">
      <content-head :header="header" />
    </div>
    <div class="data-border">
      <div class="data-form">
        <edit-content />
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import EditContent from './components/EditContent'
import Table from './components/Table'
import ContentHead from '@/components/ContentHead/index'

export default {
  name: 'Home',
  components: { EditContent, Table, ContentHead },
  data() {
    return {
      header: '基地信息'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    width: 1100px;

    // border: 1px solid #121212;
  }
  &-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    line-height: 16px;
    // background-color: blue;
  }
}
.data-border {
  width: 100%;
  border: 1px solid blue;
}

.data-form {
  width: 550px;
  margin: 10px auto;
}

.boder {
  height: 150px;
  margin-top: 10px;
  border: 1px solid red;
}
</style>
