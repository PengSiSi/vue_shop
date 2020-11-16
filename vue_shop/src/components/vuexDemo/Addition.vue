<template>
  <div>
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button @click="btnHandle">+</button>
    <button @click="btnHandle1">+</button>
    <button @click="btnHandle2">+</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vuexDemo',
  methods: {
    btnHandle() {
      // this.$store.commit('add')
      this.$store.commit('addN', 3)
    },
    btnHandle1() {
      this.$store.dispatch('addSync')
    },
    ...mapActions(['addSync']),
    ...mapGetters(['showNum']),
    btnHandle2() {
      this.addSync()
    }
  }
}
</script>

<style></style>
