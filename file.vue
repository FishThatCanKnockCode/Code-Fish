<template>
  <el-upload
  class="upload-demo"
  ref="upload"
  action="https://www.baidu.com"
  multiple
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false"
  :before-upload="beforeUpload"
  :on-change="handleChange"
  :show-file-list="false"
  >
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <!-- <input ref="text" class="text" type="text"> -->
  <div ref="text" class="div"></div>
  <div slot="tip" class="el-upload__tip div">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

</template>

<script>
  export default {
    data() {
      return {
        fileList: [
          
        ]
      };
    },
    methods: {
      /**
       * 文件列表变化监听
       */
      handleChange(file,fileList){
        /* 上传列表 */
        // if(file.raw.type!="image/png"&&file.raw.type!="image/jpeg")
        // fileList.pop()
        
        /* 只显示一项 */
        if(file.raw.type=="image/png"||file.raw.type=="image/jpeg")
          fileList[0] = file;
        if(fileList.length>=2)
          fileList.pop()

        console.log(file)
        this.$refs.text.innerHTML = fileList[0].name
      },
      /**
       * 提交按钮触发函数
       */
      submitUpload() {
        console.log('上传')
        this.$refs.upload.submit();
      },
      /**
       * 文件删除时后触发事件
       * file：删除的文件
       * fileList：剩余的文件列表
       */
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      /**
       * 文件上传前触发函数
       * 与 auto-upload=true 一起使用才会有效果
       * 返回 false 或者返回 Promise 且被 reject，则停止上传。
       */
      beforeUpload(file){
        console.log(file)
        return false
      }
    }
  }
</script>

<style scoped lang="scss">
  .text{
    margin-left: 100px;
  }
  .div{
    margin: 0;
    display: inline-block;
    margin-left: 20px;
    border: 1px solid #ccc;
    height: 30px;
    width: 200px;
    vertical-align: bottom
  }
</style>
