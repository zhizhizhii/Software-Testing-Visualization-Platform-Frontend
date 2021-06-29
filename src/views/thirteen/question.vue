<template>
    <div>
        <span style="font-size:24px;"><b>&nbsp;第十三题</b></span>
      <div style="font-size:16px;">
        
      <p >一销售系统，如果销售员的年销售额大于200万RMB且请假天数不超过10天的情况下，现金到帐大于等于60%，则佣金（提成）系数为7，即佣金值为销售额除以佣金系数；现金到帐小于60%，佣金不予计算。所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。</p>
       <p> 根据题意设计流程图并设计测试用例实现白盒测试（White Box Test）的1）语句覆盖，2）判断覆盖，3）条件覆盖，4）判断—条件覆盖，5）条件组合覆盖（测试用例及覆盖表示要清晰）。</p>

  
 
</div>
<img src="./13.png"/>
<p style="margin-top:50px;">语句覆盖：</p>
<p>无条件语句的序列作为一个节点，对所有节点进行覆盖</p>
<p>TC1:  acdfjk</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：60%；</p>
<p>TC2:  acdgk</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：55%；</p>
<p>TC3:  aceijk</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：90%；</p>
<p>TC4:  acehjk</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：80%；</p>
<p style="margin-top:50px;">判断覆盖：</p>
<p>每个判断的真分支和假分支都至少经历一次</p>
<p>TC1:  acdfjk</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：60%；</p>
<p>TC2:  acdgk</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：55%；</p>
<p>TC3:  aceijk</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：90%；</p>
<p>TC4:  acehjk</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：80%；</p>
<p>TC5: ab</p>
<p>销售额：-10万RMB；请假天数：-9天；现金到账：-10%；</p>

<p style="margin-top:50px;">条件覆盖：</p>
<p>要使得每个判断中的每个条件的可能取值至少满足一次。</p>
<el-table
      :data="questionData"
      style="width: 60%;font-size:12px;"
      >
      <el-table-column
        prop="con"
        label="条件"
        width="140"
        align="center">
      </el-table-column>
      <el-table-column
        prop="t"
        label="真"
        width="240"
        align="center">
      </el-table-column>
      <el-table-column
        prop="f"
        label="假"
        align="center">
      </el-table-column>
    </el-table>

<p>测试用例：</p>
<p>TC1:  F1 T2 T3 F4 F5 F6 F7</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：50%；</p>
<p>TC2： F1 F2 F3 T4 F5 F6 F7</p>
<p>销售额：100万RMB；请假天数：11天；现金到账：90%；</p>
<p>TC3:  T1 T2 T3 F4 F5 F6 F7</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：70%；</p>
<p>TC4:  F1 T2 T3 F4 T5 T6 T7</p>
<p>销售额：-10万RMB；请假天数：-9天；现金到账：-70%；</p>

<p style="margin-top:50px;">判断——条件覆盖：</p>
<p>一个判定中的每个条件的所有可能结果至少执行一次，并且每个判断本身的所有可 能结果至少执行一次。</p>
<p>TC1:  T1 T2 T3 T4 F5 F6 F7</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：60%；</p>
<p>TC2:  T1 T2 T3 F4 F5 F6 F7</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：55%;</p>
<p>TC3:  F1 T2 F3 T4 F5 F6 F7</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：90%；</p>
<p>TC4:  F1 T2 T3 T4 F5 F6 F7</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：80%;</p>
<p>TC5: F1 F2 T3 F4 T5 T6 T7</p>
<p>销售额：-10万RMB；请假天数：11天；现金到账：-10%;</p>


<p style="margin-top:50px;">条件——组合覆盖：</p>
<p>一个判定中的每个条件的所有可能结果至少执行一次，并且每个判断本身的所有可 能结果至少执行一次。</p>
<img src="./132.png"/>
<p>TC1:  T1 T2 T3 T4 F5 F6 F7   覆盖组合号：1，8，14</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：60%；</p>
<p>TC2:  T1 T2 T3 F4 F5 F6 F7  覆盖组合号：1，8，13</p>
<p>销售额：300万RMB；请假天数：9天；现金到账：55%；</p>
<p>TC3:  F1 T2 F3 T4 F5 F6 F7  覆盖组合号：1，10，15</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：90%；</p>
<p>TC4:  F1 T2 T3 T4 F5 F6 F7  覆盖组合号：1，11，12</p>
<p>销售额：100万RMB；请假天数：9天；现金到账：80%；</p>
<p>TC5:  T1 F2 T3 T4 F5 F6 F7  覆盖组合号：1，9，12</p>
<p>销售额：300万RMB；请假天数：11天；现金到账：80%;</p>
<p>TC6: F1 F2 T3 F4 T5 T6 T7  覆盖组合号：5，11，13</p>
<p>销售额：-10万RMB；请假天数：-11天；现金到账：-10%；</p>
<p>TC7: F1 F2 T3 F4 T5 F6 T7  覆盖组合号：2，11，13</p>
<p>销售额：-10万RMB；请假天数：11天；现金到账：-10%；</p>
<p>TC8: F1 T2 T3 F4 T5 F6 F7  覆盖组合号：3，10，13</p>
<p>销售额：100万RMB；请假天数：-11天；现金到账：-10%；</p>
<p>TC9: F1 F2 T3 F4 T5 T6 F7  覆盖组合号：4，11，13</p>
<p>销售额：100万RMB；请假天数：11天；现金到账：-10%；</p>
    </div>



</template>

<script>

export default {
  name: "SalesQuestion",
  components: {},
  props: {},
  data() {
    return {
      questionData:[{
          con:"销售额>2000000",
          t:"T1",
          f:"F1",
        },{
          con:"请假天数<=10 ",
          t:"T2",
          f:"F2",
        },
        {
          con:"现金到账<=0.85",
          t:"T3",
          f:"F3",
        },
        {
          con:"现金到账>=0.6",
          t:"T4",
          f:"F4",
        },
        {
          con:"销售额<0",
          t:"T5",
          f:"F5",
        },
        {
          con:"请假天数<0",
          t:"T6",
          f:"F6",
        },
        {
          con:"现金到账<0",
          t:"T7",
          f:"F7",
        },]
        
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