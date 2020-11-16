<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandle1">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'vuexDemo',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub']),
    btnHandle1() {
      this.sub()
    }
  }
}
</script>

<style></style>
