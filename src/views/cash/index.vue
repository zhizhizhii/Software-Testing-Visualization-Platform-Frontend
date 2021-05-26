<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <CashQuestion />
        </el-tab-pane>

        <el-tab-pane label="系统测试用例测试" name="second">
          <el-select v-model="value" placeholder="请选择测试方法">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          测试中日期取2021年5月（31天）
        </el-tab-pane>

        <el-tab-pane  label="单测试用例输入" name="third">

                      <el-form class="single-form" :label-position="labelPosition" label-width="400px" :model="formLabelAlign">
  <el-form-item label="本月的通话分钟数X（分钟）">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="本年度至本月的累计未按时缴费的次数Y（次）">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="每月的电话总费用预期输出">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
  <div class="block">
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="选择月">
    </el-date-picker>
  </div>

        </el-tab-pane>
        <el-tab-pane label="测试用例文件处理" name="fourth"></el-tab-pane>
      </el-tabs>
    </el-card>

    <div class="main-form" v-if="isFirst">
      <el-table
        :data="tableData"
        height="350"
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
        >
        </el-table-column>
        <el-table-column
          prop="X"
          label="本月的通话分钟数X（分钟）"
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="Y"
          label="本年度至本月的累计未按时缴费的次数Y（次）"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="expectation"
          label="每月的电话总费用预期输出"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="actual" label="每月的电话总费用实际输出" align="center">
        </el-table-column>
        
        <el-table-column prop="info" label="程序运行信息" align="center">
        </el-table-column>
        
        <el-table-column prop="state" label="测试结果" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.state == true " class="icon-svg">
              <i class="el-icon-check"></i>
              测试通过
            </div>
            <div v-if="scope.row.state == false" class="icon-svg">
              <i class="el-icon-close"></i>
              测试未通过
            </div>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <el-button class="main-button" @click="doTest" :loading="loading"
      >进行测试<i class="el-icon-upload el-icon--right"></i
    ></el-button>





    
  </div>
</template>

<script>
import data from "@/mock/cash_mock.json";
import { testcash } from "@/api/cashtest.js";
import CashQuestion from "./question";
export default {
  name: "Cash",
  components: { CashQuestion },
  props: {},
  data() {
    return {
      options: [
        {value: "选项1",label: "最坏情况边界分析",},
        {value: "选项2",label: "基本边界值分析",},
        {value: "选项3",label: "基本边界值分析",},
        {value: "选项4",label: "基本边界值分析",},
        {value: "选项5",label: "基本边界值分析",},
      ],
      value: "选项1",
      tableData: [],
      loading: false,
      classState: [],
      stateflag: false,
      activeName: "first",
      isFirst:true,
      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    data.forEach((element) => {
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
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (this.stateflag == false) return "1";
      else return this.classState[rowIndex];
    },
    doTest() {
      let newData = {
        year: "2021",
        month: "12",
        cash_test_list: data,
      };
      const _this = this;
      this.loading = true;
      testcash(newData)
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
          _this.stateflag = true;
          _this.loading = false;
        })

        .catch((err) => {
          console.log(err);
          _this.loading = false;
        });
    },
    handleClick(tab, event) {
      this.isFirst = tab.name == 'second' ? true : false;
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
  width: 100%;
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
.block{

}
</style>