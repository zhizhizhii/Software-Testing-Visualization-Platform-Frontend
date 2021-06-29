<template>
    <div>
        <span style="font-size:24px;"><b>&nbsp;第二题</b></span>
      <div style="font-size:16px;">
        
      <p >在一销售管理系统中，其中的一个模块负责对公司员工进行年终考评。相关描述如下：</p>
       <p> 考评综合考虑职工在公司工作时间长短（计年）、每年请假的次数（不能超过20天，20天以上，包括20天，则免于年终考评）、员工在公司的级别（分1，2，3，4，5个级别）及本年度的销售总额，考评的结果最高以5分计，公司成立于2000年初，该软件的设计使用周期到2025年底，请回答下列问题：</p>
<p>(1)	用基本边界值的测试方法，一共有多少测试用例；最坏情况边界值有多少测试用例。</p>
<p>(2)	根据健壮的边界值测试法，写出“工作时间长短”为非正常值情况下的测试用例。</p>
  
  <p>（1）用基本边界值的测试方法，一共有4n+1即17个测试用例；最坏情况边界值有5^n即625个测试用例</p>
  <p style="margin-top:100px;font-size:20px;">(2)符合要求的测试用例如下：</p>
</div>

<img src="./2.png"/>



    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {
        
         }
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