<template>
  <div class="file">
    <el-button type="primary" plain @click="outExe">生成模板</el-button>
    
    <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple
  :file-list="fileList"
  :http-request="getFile"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </div>
</template>

<script>
import printExe from '@/excel/outexe.js'
import axios from 'axios'
export default{
  name:'ExcelFile',
  components:{},
  props:{},
  data(){
    return {
      fileList:[],
    }
  },
  computed:{},
  watch:{},
  created(){},
  mounted(){},
  methods:{
    getFile(item){
      let formData = new FormData();
      formData.append("file",item.file);
      let config = {'Content-Type': 'multipart/form-data'};
      console.log(item);
      const request = axios.create({
    baseURL:'http://localhost:5000'
})
request({
  method:'POST',
  config,
  data:formData,
  responseType: 'blob',
  url:'/api/triangle/upload',
}).then((res)=>{
   let url = window.URL.createObjectURL(new Blob([res.data]))
   let a = document.createElement('a')
   a.style.display = 'none'
   a.href = url;
   a.setAttribute('download','1.xls');
   document.body.appendChild(a)
   a.click()
   document.body.removeChild(a);
   window.URL.revokeObjectURL(url);
   console.log("下载完成");
  console.log(res);
}).catch(function (error) {
                console.log(error);
            })

    },





    handleSuccess(response, file, fileList){
      //console.log(response);
      const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); 
      const a= document.createElement("a")
      a.href = URL.createObjectURL(blob)
      a.download = "fileName.xls" // 这里填保存成的文件名
      a.click()
      URL.revokeObjectURL(a.href)
      a.remove();
    },
    outExe(){
        this.$confirm("此操作将导出excel文件, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      let tHeader = [
  "测试用例编号",
  "第一条边的值（a）",
  "第二条边的值（b）",
  "第三条边的值（c）",
  "程序预期输出",
  "实际输出",
  "程序运行信息",
  "测试结果",
  "测试时间"
];
const filterVal = [
      "id",
      "A",
      "B",
      "C",
      "expectation",
      "actual",
      "info",
      "test_result",
      "test_time"
];
const example = [
  {
    "id":"TS1",
    "A":3,
    "B":4,
    "C":5,
    "expectation":"一般三角形"
  }
]
console.log(printExe);
      printExe('判断三角形问题模板',tHeader,filterVal,example);
    })
    .catch(() => {});
    }
  }
}
</script>

<style scoped>
.upload-demo{
  width:80%;
  margin-top:20px;
}
</style>
