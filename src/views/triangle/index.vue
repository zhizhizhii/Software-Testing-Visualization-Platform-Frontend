<template>
    <el-card id="main-card" style="height:100%" shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <TriangleQuestion />
        </el-tab-pane>

        <el-tab-pane class="main-container" label="系统测试用例测试" name="second">
          <SystemTest />
        </el-tab-pane>

        <el-tab-pane  label="单测试用例输入" name="third">
          <SingleCase />
        </el-tab-pane>

        <el-tab-pane label="测试用例文件处理" name="fourth">
          <ExcelFile />
        </el-tab-pane>
      </el-tabs>
    </el-card>
</template>

<script>
import TriangleQuestion from "./question";
import SystemTest from "./systemtest";
import SingleCase from "./singlecase";
import ExcelFile from "./excelfile";

export default {
  name: "Triangle",
  components: { 
    TriangleQuestion,
    SystemTest,
    SingleCase,
    ExcelFile
  },
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {
    handleClick(){

    },
    

  },
};

</script>

<style scoped lang="less">

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
  width: 500px;
  margin-top: 10px;
}
.box-card {
  padding: 0;
}
.single-form{
  width:600px;
  top:50%;
  left:50%;
}
.main-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
}
.main-table{
  height: 100%;
  display: flex;
  align-items: center;
}

</style>