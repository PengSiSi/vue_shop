<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <!-- 搜索添加区 -->
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="queryInfo.query"
            clearable
            @clear="getUserList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addUser">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="userStateChange()"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250px">
        <template slot-scope="">
          <el-button type="primary" size="mini">修改</el-button>
          <el-button type="primary" size="mini">删除</el-button>
          <el-tooltip
            class="item"
            effect="dark"
            content="分配角色"
            placement="top-start"
          >
            <el-button type="primary" size="mini">分配</el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      @close="closeDialog"
    >
      <el-form
        ref="addFormRef"
        :model="addForm"
        label-width="70px"
        :rules="formRules"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addForm.tel"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserRequest">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pageSize: 2
      },
      dialogVisible: false,
      addForm: {
        name: '',
        password: '',
        email: '',
        tel: ''
      },
      userList: [
        {
          id: '0',
          name: '超级管理员0'
        },
        {
          id: '1',
          name: '超级管理员1'
        },
        {
          id: '2',
          name: '超级管理员2'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '1小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '2小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '3小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '4小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      total: 0,
      formRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {},
    handleSizeChange(newSize) {
      console.log(newSize)
      this.queryInfo.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    userStateChange() {},
    addUser() {
      this.dialogVisible = true
    },
    // 关闭弹出框的输入信息
    closeDialog() {
      this.$refs.addFormRef.resetFields()
    },
    // 添加用户
    addUserRequest() {
      this.$refs.addFormRef.validate(valid => {
        console.log(valite)
        if (!valid) return
        // 网络请求
      })
    }
  }
}
</script>

<style scoped>
.el-table {
  margin-top: 10px;
}
</style>
