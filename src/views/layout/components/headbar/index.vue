<template>
  <el-header class="header">
    <div>
      <i class="el-icon-s-fold" @click="changeCollapse"></i>
      <span>软件测试平台</span>
    </div>

    <el-dropdown>
      <div class="avatar-bar">
        <el-avatar
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          shape="square"
          :size="40"
          class="avatar"
        ></el-avatar>
        <span>欢迎来到软件测试平台!</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="onLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: "HeadBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeCollapse() {
      this.$emit("changeCollapse", 0);
    },
    onLogout() {
      this.$confirm("是否确认退出？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          window.localStorage.removeItem("user");
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "退出登录成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    margin-right: 10px;
  }
}
</style>