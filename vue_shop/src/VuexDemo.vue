<template>
  <div id="vuexDemo">
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/vuexDemo/Addition'
import Subtraction from './components/vuexDemo/Subtraction'

export default {
  name: 'vuexDemo',
  data() {
    return {}
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style></style>
