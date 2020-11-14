<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>

      <!-- 角色列表区域 -->
      <el-table :data="rolesList" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdBottom', i1 === 0 ? 'bdTop' : '']"
              v-for="(item1, i1) in scope.row.children"
              :key="item1.id"
            >
              <!-- 一级权限 -->
              <el-col :span="5">
                <el-tag>{{ item1.autName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级权限和三级权限 -->
              <el-col :span="19"></el-col>
            </el-row>
            {{ scope.row }}
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el_icon_edit">编辑</el-button>
            <el-button type="danger" icon="el_icon_delete">删除</el-button>
            <el-button
              type="warning"
              icon="el_icon_setting"
              @click="showRightsDialog"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分配权限弹框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-tree
        :data="rightsData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        show-checkbox
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created() {
    this.getRolesListData()
  },
  data() {
    return {
      dialogVisible: false,
      // 所有角色数据
      rolesList: [
        {
          id: 30,
          roleName: '主管',
          roleDesc: '技术负责人',
          children: [
            {
              id: 101,
              autName: '商品管理',
              path: null,
              children: [
                {
                  id: 101,
                  autName: '商品列表',
                  path: null
                }
              ]
            },
            {
              id: 102,
              autName: '商品管理2',
              path: null,
              children: [
                {
                  id: 101,
                  autName: '商品列表2',
                  path: null
                }
              ]
            },
            {
              id: 103,
              autName: '商品管理3',
              path: null,
              children: [
                {
                  id: 101,
                  autName: '商品列表2',
                  path: null
                }
              ]
            }
          ]
        }
      ],
      rightsData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    getRolesListData() {
      this.$message.success('获取角色列表成功')
    },
    showRightsDialog() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.el-tag {
  margin: 7px;
}
.bdTop {
  border-top: 1px solid lightgray;
}
.bdBottom {
  border-bottom: 1px solid lightgray;
}
</style>
