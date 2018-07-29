<template>
    <div>
        <h2 class="sub-header">demo List</h2>
        <table>
            <tr>
                <td colspan="3">
                    学号:<input type="text" v-model="id">
                    <input type="text" v-model="updateName">
                    <input type="button" value="新增" @click="add">
                    <input type="button" value="确认修改" @click="subUpdate">
                </td>
            </tr>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item, index) in dataList" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td><a href="#" @click.prevent="update(item.id)">修改</a> <a href="javascript:void(0)" @click.prevent="del(item.id)">删除</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王二" },
        { id: 4, name: "小红" }
      ],
      id: '',
      updateName: ''
    };
  },
  methods: {
    del(id) {
        this.dataList.forEach((item,index)=>{
            if(item.id === id){
                this.dataList.splice(index, 1);
            }
        })
    },
    update(id) {
        this.dataList.forEach((item,index)=>{
            if(item.id === id){
                this.id = item.id
                this.updateName = item.name 
            }
        })
    },
    subUpdate() {
        if(this.updateName){
            this.dataList.forEach((item,index)=>{
                if(item.id === this.id){
                    this.id = item.id;
                    item.name = this.updateName
                }
            })
            this.id = '';
            this.updateName =  ''
        }
    },
    add() {
        if(this.id && this.updateName){
            var newObj = {};
            newObj.id = this.id;
            newObj.name = this.updateName;
            this.dataList.push(newObj);
            this.id = '';
            this.updateName =  ''
        }else{
            alert('内容任一项均不能为空!')
        }
    }
  }
};
</script>

<style>
    table {
        border: 1px solid #000;
        border-collapse: collapse;
        width: 800px;
        margin: 0 auto;
        text-align: center;
    }

    th {
        background-color: #0094f0;
        text-align: center;
    }

    th,td {
        border: 1px solid #000;
        height: 30px;
    }
</style>
