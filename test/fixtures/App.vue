<template>
  <vue-convert-model v-model="text" :converter="upperCase">
    <textarea
      class="input2"> </textarea>
  </vue-convert-model>
</template>


<!--suppress JSUnusedGlobalSymbols -->
<script>
  import VueConvertModel from '../../src'

  export default {
    name: 'App',

    components: {
      VueConvertModel,
    },

    data() {
      return {
        text: '',
      }
    },

    methods: {
      upperCase( x ) {
        return (x || '').toUpperCase()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .input2 {
    width: 300px;
  }
</style>

