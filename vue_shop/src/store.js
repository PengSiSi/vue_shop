import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    // 所有任务列表
    list: [],
    // 输入框默认
    inputValue: 'aaa',
    // 下一个id
    maxId: 5,
    // 默认选中状态
    viewKey: 'all'
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    initList(state, list) {
      state.list = list
    },
    // inputValue赋值
    setInputValue(state, val) {
      state.inputValue = val
    },
    // 添加；列表
    addItem(state) {
      const obj = {
        id: state.maxId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.maxId++
      state.inputValue = ''
    },
    // 删除列表
    removeItem(state, id) {
      // 根据id查找对应项索引
      const i = state.list.findIndex(x => x.id === id)
      // 根据索引，删除元素
      if (i !== -1) {
        state.list.splice(i, 1)
      }
    },
    // 修改状态
    changeStatus(state, param) {
      const i = state.list.findIndex(x => x.id === param.id)
      if (i !== -1) {
        state.list(i).done = param.done
      }
    },
    // 清除done
    clearDone(state) {
      state.list = state.list.findIndex(x => x.done === false)
    },
    // tab切换
    changeViewKey(state, key) {
      state.viewKey = key
    }
  },
  actions: {
    addSync(context) {
      // 在actions中不能修改state中的数据
      // 必须通过context.commit()触发某个mutation才行
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    getList(context) {
      axios.post('./assets/json/list.json').then(({data}) => {
        console.log(data)
        context.commit('initList', data)
      })
    }
  },
  getters: {
    showNum(state) {
      return '当前最新的数据是[' + state.count + ']'
    },
    // 统计未完成的任务条数
    unDoneLength(state) {
      const length = state.list.filter(x => x.done === false).length
      return length
    }
  }
})
