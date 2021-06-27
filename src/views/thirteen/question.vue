<template>
    <div>
        <span style="font-size:18px;"><b>&nbsp;第十三题</b></span>
      <div style="font-size:12px;">
        
      <p >一销售系统，如果销售员的年销售额大于200万RMB且请假天数不超过10天的情况下，现金到帐大于等于60%，则佣金（提成）系数为7，即佣金值为销售额除以佣金系数；现金到帐小于60%，佣金不予计算。所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。</p>
       <p> 根据题意设计流程图并设计测试用例实现白盒测试（White Box Test）的1）语句覆盖，2）判断覆盖，3）条件覆盖，4）判断—条件覆盖，5）条件组合覆盖（测试用例及覆盖表示要清晰）。</p>

  
 
</div>
<img src="./1.png"/>
<p>或者</p>
<img src="./2.png"/>
<p style="margin-top:50px;">语句覆盖：</p>
<p>无条件语句的序列作为一个节点，对所有节点进行覆盖</p>
<p>图一：</p>
<p>TC1: a b c d e f</p>
<p>TC2: a g h j f</p>
<p>图二：</p>
<p>TC: a b c e f g i</p>
<p style="margin-top:50px;">判断覆盖：</p>
<p>statement testing 要求覆盖所有节点，decision test 要求覆盖所有分支</p>
<p>图一：</p>
<p>TC1: a b c e f</p>
<p>TC2: a b d e f</p>
<p>TC3: a g h j f</p>
<p>TC2: a g i j f</p>
<p>图二：</p>
<p>TC1: a h i</p>
<p>TC2: a b d g i</p>
<p>TC3: a b c f g i</p>
<p>TC4: a b c e g i</p>
<img src="./13.png"/>
<p style="margin-top:50px;">条件覆盖：</p>
<p>条件覆盖：要使得每个判断中的每个条件的可能取值至少满足一次。上例中第一个判断应考虑到 a=true，a=false，b=true，b=false，g=true，g=false，所以上例中可以设计测试用例满足下列条件: </p>
<p>测试用例：</p>
<p>TC1: 销售额：100万RMB；请假天数：9天；现金到账：50%；</p>
<p>a g h j f</p>
<p>TC2：销售额：100万RMB；请假天数：11天；现金到账：90%； </p>
<p>a g i j f</p>
<p>TC3: 销售额：300万RMB；请假天数：9天；现金到账：70%；</p>
<p>a b c e f</p>
<p style="margin-top:50px;">判断——条件覆盖：</p>
<p>判断——条件覆盖：一个判定中的每个条件的所有可能结果至少执行一次，并且每个判断本身的所有可 能结果至少执行一次。</p>
<p>TC1:销售额：400万RMB；请假天数：9天；现金到账：80%；</p>
<p>a b c e f</p>
<p>TC2:销售额：300万RMB；请假天数：8天；现金到账：50%； </p>
<p>a b d e f</p>
<p>TC3:100万RMB；请假天数：11天；现金到账：70%； </p>
<p>a g h j f</p>
<p>TC4:100万RMB；请假天数：12天；现金到账：90%； </p>
<p>a g i j f</p>
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