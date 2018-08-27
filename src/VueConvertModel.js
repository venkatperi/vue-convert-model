// Copyright 2017, Venkat Peri.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'vue-convert-model',

  props: {
    value: { required: false },

    converter: {
      type: Function,
      default: x => x,
    },
  },

  data: vm => ({
    convertedValue: vm.value,
  }),

  computed: {
    proxy: {
      get() {
        return this.convertedValue
      },
      set( val ) {
        this.convertedValue = this.converter( val )
        this.$emit( 'input', this.convertedValue )
      },
    },
  },

  watch: {
    value( x ) {
      this.convertedValue = this.converter( x )
    },

    proxy( x ) {
      this.$el.value = x
    },
  },

  mounted() {
    this.$el.addEventListener( 'input', this.onInput )
  },

  beforeDestroy() {
    this.$el.removeEventListener( 'input', this.onInput )
  },

  methods: {
    onInput( e ) {
      this.proxy = e.target.value
    },
  },

  render() {
    return this.$slots.default[0]
  },
}


