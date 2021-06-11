<template>
  <div class="single-case">
    <el-form
      class="single-form"
      :label-position="labelPosition"
      label-width="400px"
      :model="formLabelAlign"
    >
      <el-form-item label="年份">
        <el-input v-model="formLabelAlign.year"></el-input>
      </el-form-item>
      <el-form-item label="月份">
        <el-input v-model="formLabelAlign.month"></el-input>
      </el-form-item>
      <el-form-item label="天数">
        <el-input v-model="formLabelAlign.day"></el-input>
      </el-form-item>
      <el-form-item label="每月的电话总费用预期输出">
        <el-input v-model="formLabelAlign.expectation"></el-input>
      </el-form-item>
    </el-form>
          <el-button
        class="main-button"
        type="success"
        plain
        @click="doTest"
        :loading="loading"
        >进行测试<i class="el-icon-upload el-icon--right"></i
      ></el-button>
        <div>
    <span>实际输出：{{actual}}</span>
    <el-divider direction="vertical"></el-divider>
    <span>运行信息：{{info}}</span>
    <el-divider direction="vertical"></el-divider>
  </div>
  </div>
</template>

<script>

import { testcalendar } from "@/api/calendartest.js";

export default {
  name: "SingleCase",
  components: {},
  props: {},
  data() {
    return {
      actual:"",
      info:"",
      labelPosition: 'right',
        formLabelAlign: {
          year: 0,
          month: 0,
          day: 0,
          expectation:0,
        }, 
        date:"",
        loading:false,

    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    doTest(){
      let formdata = {
        id: "TS1",
        year: this.formLabelAlign.year,
        month: this.formLabelAlign.month,
        day:this.formLabelAlign.day,
        expectation: this.formLabelAlign.expectation,
      }
      let data = {
        calendar_test_list:[formdata],
      }
      testcalendar(data).then((res)=>{
        this.actual = res.data.test_result[0].actual;
        this.info = res.data.test_result[0].info;
      })

    }
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.main-form {
  margin-top: 10px;
}
.main-button {
  width:100%;

}
.box-card {
  padding: 0;
}
.single-form{
  width:600px;
  top:50%;
  left:50%;
}
</style>
