<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-table :data="rightsData" border stripe>
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="权限名称" prop="name"> </el-table-column>
        <el-table-column label="路径" prop="path"> </el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">标签一</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'"
              >标签二</el-tag
            >
            <el-tag type="info" v-else>标签三</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    getRightList()
  },
  data() {
    return {
      rightsData: [
        {
          id: '101',
          name: '商品管理',
          level: '0',
          pid: 0,
          path: null
        },
        {
          id: '102',
          name: '订单管理',
          level: '1',
          pid: 0,
          path: null
        }
      ]
    }
  },
  methods: {
    // 查询权限列表
    getRightList() {}
  }
}
</script>

<style scoped></style>
