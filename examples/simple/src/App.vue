<template>
  <div>
    <vue-convert-model v-model="text" :converter="upperCase">
      <textarea
        ref="input"
        class="input2"> </textarea>
    </vue-convert-model>
  </div>
</template>


<script>
  import VueConvertModel from '../../../src'

  export default {

    components: {
      VueConvertModel,
    },

    data() {
      return {
        original: '',
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

<style lang="scss">
  #app {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    text-align: center;
  }

  label {
    font-size: 12px;
    font-family: sans-serif;
    width: 100%;
  }

  .input2 {
    width: 100%;
    margin-top: 10px;
    resize: none;
    background: #eee;
    border: #aaa solid 1px;
    border-radius: 3px;
    font-size: 20px;
  }


</style>

