 <template>
  <div class="base-date">
    <el-form ref="form" :model="form" label-width="130px" label-position="left" size="mini">
      <el-form-item label="基地名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="地区">
        <!-- <v-distpicker
          :province="user.xtrysf"
          :city="user.xtrycs"
          :area="user.xtrycs"
          hide-area
          @province="onChangeProvince"
          @city="onChangeCity"
          
        ></v-distpicker>-->
        <v-distpicker></v-distpicker>
      </el-form-item>

      <el-form-item label="详细地址">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="规模">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="法人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="基地负责人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="联系电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="主营">
        <el-select v-model="form.region" placeholder="--">
          <el-option label="泥鳅" value="niqiu"></el-option>
          <el-option label="草鱼" value="caoyu"></el-option>
          <el-option label="罗非鱼" value="luofeiyu"></el-option>
          <el-option label="青鱼" value="qingyu"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'

export default {
  name: 'EditContent',
  components: {
    VDistpicker
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },

    onChangeProvince(data) {
      this.user.xtrysf = data.value
    },
    onChangeCity(data) {
      this.user.xtrycs = data.value
    }
  }
}
</script>

<style  scoped>
.base-date {
  margin: 0 auto;
  margin-top: 10px;
  width: 500px;
  /* border: 1px solid pink; */
}

.distpicker-address-wrapper label select {
  padding: 0;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
</style>