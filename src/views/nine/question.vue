<template>
    <div>
        <span style="font-size:24px;"><b>&nbsp;第九题</b></span>
      <div style="font-size:16px;">
        
      <p >构建ATM系统的state transition diagram, 利用state transition testing方法将其转换成transition tree，而后基于transition tree的路径设计测试用例，要考虑robustness。</p>

  
  <p style="margin-top:100px;font-size:20px;">状态图绘制：</p>
  <img style="width:60%;height:60%;" src="./1.png"/>
   <p style="margin-top:100px;font-size:20px;">State Transition ：</p>
   <img style="width:60%;height:60%;" src="./2.png"/>
   <p style="margin-top:100px;font-size:20px;">用例设计 ：</p>
    <p>根据如上state transition ，我们可以抽取出12个测试用例，具体内容如下。</p>
    <p>1.初始状态->空闲->读卡->空闲</p>
    <p>2.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->查询余额->选择服务类型</p>
    <p>3.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->查询余额->结束状态</p>
    <p>4.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->存款->选择服务类型。</p>
    <p>5.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->存款->结束状态</p>
    <p>6.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->取款->选择服务类型</p>
    <p>7.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->取款->结束状态</p>
    <p>8.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->取款->余额不足->选择服务类型</p>
    <p>9.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->选择服务类型->取款->余额不足->结束状态</p>
    <p>10.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->等待第二次PIN输入->选择服务类型</p>
    <p>11.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->等待第二次PIN输入->等待第三次PIN输入->选择服务类型</p>
    <p>12.初始状态->空闲->读卡->客户操作状态->等待第一次PIN输入->等待第二次PIN输入->等待第三次PIN输入->吞卡->结束状态</p>
</div>




    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style scoped lang="less">


</style>