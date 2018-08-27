import Vue from 'vue'
import App from '../fixtures/App'

describe( 'VueConvertModel component', () => {
  const Constructor = Vue.extend( App )
  let root = undefined
  let vm = undefined
  let textarea = undefined

  before( () => {
    root = new Constructor()
    root.$mount()
    vm = root.$children[0]
    textarea = vm.$el
  } )

  it( 'tag is vue-convert-model', () => {
    expect( vm.$options.name ).to.equal( 'vue-convert-model' )
  } )

} )
