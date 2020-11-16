// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import less from 'less'
import {Form, FormItem, Input, Button, Select, Message, Container, Header,
        Aside, Main, Menu, MenuItem, Submenu, MenuItemGroup,
        Breadcrumb, BreadcrumbItem, Card, Row, Col, Table, TableColumn,
        Tooltip, Switch, Pagination, Dialog, Tag, Tree} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Antd)
Vue.use(less)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
