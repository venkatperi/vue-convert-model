# vue-convert-model

![npm](https://img.shields.io/npm/v/vue-convert-model.svg)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

`vue-convert-model` is a [Vue](www.vuejs.org) component that transforms data to/from a child component's model.

`vue-convert-model` accepts a converter function and exposes a vue model (`value` property & `input` event). Data sent to the model (via `value`) is transformed with the converter function before it is sent to the child component. User input (via the `input` event) sent to the child component is similarly transformed before it is emitted by `vue-convert-model`.

`vue-convert-model` is a [renderless](https://adamwathan.me/renderless-components-in-vuejs/) component.

# Installation

```
npm install --save vue-convert-model
```

# Example

Include the component:

```javascript
import Vue from 'vue'
import VueConvertModel from 'vue-convert-model'

export default {
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
```


## Usage

```html
<template>
  <vue-convert-model v-model="text" :converter="upperCase">
    <textarea> <-- note: model available through its parent -->
    </textarea>
  </vue-convert-model>
</template>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
