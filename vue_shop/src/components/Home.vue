<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header class="el_header">
      <div>
        <img src="../assets/logo.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'" class="el_aside">
        <div class="toggle_button" @click="toggle">|||</div>
        <el-menu
          default-active="2"
          class="el_menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333741"
          text-color="#fff"
          active-text-color="#409eff"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.id"
              v-for="subItem in item.subList"
              :key="subItem.id"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边区 -->
      <el-main class="el_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单
      menuList: [
        {
          id: '1',
          name: '用户管理',
          subList: [
            {
              id: 'user',
              name: '用户管理'
            },
            {
              id: 'vuex',
              name: 'Vuex基础学习'
            },
            {
              id: 'vuex_demo',
              name: 'vuex实战学习'
            }
          ]
        },
        {
          id: '2',
          name: '权限控制',
          subList: [
            {
              id: 'rights',
              name: '权限列表'
            },
            {
              id: 'roles',
              name: '角色列表'
            },
            {
              id: '32',
              name: '权限控制3'
            }
          ]
        },
        {
          id: '3',
          name: '角色管理',
          subList: [
            {
              id: 'roles',
              name: '哈哈哈1'
            },
            {
              id: '23',
              name: '哈哈哈2'
            },
            {
              id: '33',
              name: '哈哈哈3'
            }
          ]
        }
      ],
      iconsList: {},
      isCollapse: false
    }
  },
  created() {
    // 网络请求
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 菜单展开折叠
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
.home_container {
  height: 100%;
}
.el_header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20;
}
.el_header div {
  display: flex;
  align-items: center;
}
.el_header div span {
  margin-left: 15px;
}
.el_aside {
  background-color: #333744;
}
.el-aside .el_menu {
  border-right: none;
}
.el_main {
  background-color: #eaedf1;
}
.el_header img {
  width: 50px;
  height: 50px;
}
.toggle_button {
  background-color: #4a500c;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
