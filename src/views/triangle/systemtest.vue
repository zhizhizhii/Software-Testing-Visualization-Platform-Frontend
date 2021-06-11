<template>
  <div class="system-test">
    <div class="main-header">
      <el-select v-model="value" placeholder="请选择测试方法" >
        <!-- @change="changeRole($event,scope)" -->
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!-- <div class="data-text">测试中日期取2021年5月（共31天）</div> -->
      <el-button
        class="main-button"
        type="success"
        plain
        @click="doTest"
        :loading="loading"
        >进行测试<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </div>

    <el-divider content-position="left">测试用例</el-divider>

    <div class="main-table">
      <el-table
        :data="tableData"
        max-height="500"
        border
        style="width: 100%"
        v-loading="loading"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="id"
          label="测试用例编号"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="A"
          label="第一条边的值（a）"
          
          align="center"
        ></el-table-column>
        <el-table-column
          prop="B"
          label="第二条边的值（b）"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="C"
          label="第三条边的值（c）"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="expectation"
          label="程序预期输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="actual"
          label="程序实际输出"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="info"
          label="程序运行信息"
          align="center"
        ></el-table-column>
        <el-table-column prop="state" label="测试结果" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.state == true" class="icon-svg">
              <i class="el-icon-check"></i><span>测试通过</span>
            </div>
            <div v-if="scope.row.state == false" class="icon-svg">
              <i class="el-icon-close"></i><span>测试未通过</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="测试时间"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import mock_1_json from "@/mock/triangle/triangle_mock_1.json";
import mock_2_json from "@/mock/triangle/triangle_mock_2.json";
import { testtriangle } from "@/api/triangletest.js";
export default {
  name: "SystemTest",
  components: {},
  props: {},
  data() {
    return {
      options: [
        {value: "1",label: "边界值法",},
        {value: "2",label: "等价类法",}
      ],
      value: "1",
      tableData: [],
      loading: false,
      classState: [],
      inputData:{
        triangle_test_list: mock_1_json,
      }

    };
  },
  computed: {},
  watch: {
    value:{
      handler(newVal,oldVal){
        console.log(newVal);
        if(newVal === "1"){
          this.initTableData(mock_1_json);
          this.inputData={
        triangle_test_list: mock_1_json,
      };
        }
        else if(newVal === "2"){
          this.initTableData(mock_2_json);
          this.inputData={
        triangle_test_list: mock_2_json,
      };
        }
      },
      immediate:false,
    }
  },
  created() {},
  mounted() {
    this.initTableData(mock_1_json);
  },
  methods: {
    initTableData(json){
      this.tableData = [];
      json.forEach((element) => {
      let newData = {};
      for (let key in element) {
        newData[key] = element[key];
      }
      newData["actual"] = "";
      newData["info"] = "";
      newData["state"] = null;
      this.tableData.push(newData);
    });
    },
    tableRowClassName({ row, rowIndex }) {
      return this.classState[rowIndex];
    },
    doTest() {
      //  change newData's structure

      console.log(this.inputData);
      const _this = this;
      this.loading = true;
      testtriangle(this.inputData)
        .then( 
          res => {
            _this.tableData.forEach((item, index) => {
              let responseObject = res.data.test_result[index];
              item.actual = responseObject.actual;
              item.info = responseObject.info;
              item.state = item.expectation == item.actual ? true : false;

            _this.classState[index] = item["state"]
              ? "success-row"
              : "error-row";
          });
          _this.loading = false;
        })

        .catch((err) => {
          console.log(err);
          _this.loading = false;
        });
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .el-table .error-row {
  background: #fff0f0;
}
/deep/ .el-table .success-row {
  background-color: #f7fff9;
}
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
