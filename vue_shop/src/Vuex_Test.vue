<template>
  <div>
    <div class="top">
      <a-input
        placeholder="请输入任务"
        class="my_ipt"
        :value="inputValue"
        @change="handleInput"
      />
      <a-button type="primary" @click="addItem">添加事项</a-button>
    </div>
    <a-list bordered :data-source="list" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox
          :checked="item.done"
          @change="
            e => {
              cbStateChanged(e, item.id)
            }
          "
          >{{ item.info }}</a-checkbox
        >
        <!-- 删除链接 -->
        <a slot="actions" @click="deleteItem(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <span>{{ unDoneLength }}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button
            :type="viewKey === 'all' ? 'primary' : 'default'"
            @click="changeList('all')"
            >全部</a-button
          >
          <a-button
            :type="viewKey === 'undo' ? 'primary' : 'default'"
            @click="changeList('undo')"
            >未完成</a-button
          >
          <a-button
            :type="viewKey === 'do' ? 'primary' : 'default'"
            @click="changeList('do')"
            >已完成</a-button
          >
        </a-button-group>
        <a @click="clearDone">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'vuexDemo',
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength'])
  },
  data() {
    return {}
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },
    // 添加
    addItem() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空！')
      }
      this.$store.commit('addItem')
    },
    // 删除
    deleteItem(id) {
      this.$store.commit('removeItem', id)
    },
    // 状态改变
    cbStateChanged(e, id) {
      console.log(e.target)
      const param = {
        id: id,
        done: e.target.done
      }
      this.$store.commit('changeStatus', param)
    },
    // 清除已完成
    clearDone() {
      this.$store.commit('clearDone')
    },
    // 按钮tab切换
    changeList(key) {
      this.$store.commit('changeViewKey', key)
    }
  }
}
</script>

<style>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
