<template>
  <div>
    <el-card shadow="hover">
      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="问题描述" name="first">
          <SalesQuestion />
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
  <el-form-item label="销售的主机数量M（台）">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="销售的显示器数量I（台）">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="销售的外设数量P（套）">
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
          prop="M"
          label="销售的主机数量M（台）"
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="I"
          label="销售的显示器数量I（台）"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="P"
          label="销售的外设数量P（套）"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="actual" label="预计状态" align="center">
        </el-table-column>
        
        <el-table-column prop="amount" label="预计销售额A（元）" align="center">
        </el-table-column>
        
        <el-table-column prop="earn" label="预估佣金E（元）" align="center">
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
import data from "@/mock/sales_mock.json";
import { testsale } from "@/api/saletest.js";
import SalesQuestion from "./question";
export default {
  name: "sales",
  components: { SalesQuestion },
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
      newData["amount"] = "";
      newData["earn"] = "";
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
      testsale(newData)
        .then( 
          res => {
            _this.tableData.forEach((item, index) => {
              let responseObject = res.data.test_result[index];
              item.actual = responseObject.actual;
              item.amount = responseObject.amount;
              item.earn = responseObject.earn;
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