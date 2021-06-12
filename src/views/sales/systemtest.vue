<template>
  <div class="system-test">
    <div class="main-header">
      <el-select v-model="value" placeholder="请选择测试方法">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="button-group">
        <el-button
          class="main-button"
          type="success"
          plain
          @click="doTest"
          :loading="loading"
          >进行测试<i class="el-icon-upload el-icon--right"></i
        ></el-button>
        <el-button
          @click="reset(value)"
          class="reset-button"
          type="warning"
          plain
          >重置</el-button
        >
      </div>
    </div>

    <el-divider content-position="right">测试用例</el-divider>

    <div class="main-table">
      <el-table
        :data="tableData"
        :height="tableHeight"
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
          prop="M"
          label="销售的主机数量M（台）"
          width="240"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="I"
          label="销售的显示器数量I（台）"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="P"
          label="销售的外设数量P（套）"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="predict"
          label="预计状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="pre_amount"
          label="预计销售额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="pre_earn"
          label="预计佣金"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="S"
          label="实际状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="A"
          label="实际销售额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="E"
          label="实际佣金"
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
import mock_1_json from "@/mock/sales/sales_mock.json";
import { testsales } from "@/api/salestest.js";
export default {
  name: "SystemTest",
  components: {},
  props: ["parentHeight"],
  data() {
    return {
      options: [{ value: "1", label: "边界值法" }],
      value: "1",
      tableData: [],
      loading: false,
      classState: [],
    };
  },
  computed: {
    tableHeight() {
      return this.parentHeight - 260 > 650 ? 650 : this.parentHeight - 260;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.reset(newVal);
      },
      immediate: false,
    },
  },
  created() {},
  mounted() {
    this.initTableData(mock_1_json);
  },
  methods: {
    initTableData(json) {
      this.classState = [];
      this.tableData = [];
      json.forEach((element) => {
        let newData = {};
        for (let key in element) {
          newData[key] = element[key];
        }
        newData["A"] = "";
        newData["S"] = "";
        newData["E"] = "";
        newData["state"] = null;
        this.tableData.push(newData);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      return this.classState[rowIndex];
    },
    doTest() {
      let newData = {
        sales_test_list: mock_1_json,
      };
      const _this = this;
      this.loading = true;
      testsales(newData)
        .then((res) => {
          _this.tableData.forEach((item, index) => {
            let responseObject = res.data.test_result[index];
            item.A = responseObject.amount;
            item.S = responseObject.actual;
            item.E = responseObject.earn;
            item.state = item.A == item.pre_amount ? true : false;
            item.time = responseObject.test_time;
            _this.classState[index] = item["state"]
              ? "success-row"
              : "error-row";
          });
          this.$message({
            message: "测试成功",
            type: "success",
          });
          _this.loading = false;
        })
        .catch((err) => {
          _this.$message.error("Server Error");
          _this.loading = false;
        });
    },
    reset(value) {
      if (value === "1") {
        this.json = mock_1_json;
        this.initTableData(mock_1_json);
      } else if (value === "2") {
        this.json = mock_2_json;
        this.initTableData(mock_2_json);
      } else {
        this.json = mock_3_json;
        this.initTableData(mock_3_json);
      }
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
.main-button {
  width: 500px;
  margin-top: 10px;
}
.reset-button {
  width: 200px;
  margin-top: 10px;
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
