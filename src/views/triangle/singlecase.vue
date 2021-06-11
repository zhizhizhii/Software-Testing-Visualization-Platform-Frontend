<template>
  <div class="single-case">
    <el-form
      class="single-form"
      :label-position="labelPosition"
      label-width="400px"
      :model="formLabelAlign"
    >
      <el-form-item label="第一条边的值">
        <el-input v-model="formLabelAlign.A"></el-input>
      </el-form-item>
      <el-form-item label="第二条边的值">
        <el-input v-model="formLabelAlign.B"></el-input>
      </el-form-item>
      <el-form-item label="第三条边的值">
        <el-input v-model="formLabelAlign.C"></el-input>
      </el-form-item>
      <el-form-item label="程序预期输出">
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
import { testtriangle } from "@/api/triangletest.js";
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
          A: "",
          B: "",
          C: "",
          expectation: ""
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
        id:"TS1",
        A:this.formLabelAlign.A,
        B:this.formLabelAlign.B,
        C:this.formLabelAlign.C,
        expectation:this.formLabelAlign.expectation,
      }
      let data = {

        triangle_test_list:[formdata],
      }
      testtriangle(data).then((res)=>{
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
