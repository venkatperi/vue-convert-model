# vue-resize-on-event

![npm](https://img.shields.io/npm/v/vue-resize-on-event.svg) 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

VueJS renderless component that wraps a component with a model (e.g. `input` or `textarea`) and transforms data to/from the underlying component's model with a given conversion function.
 
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
    <textarea>
    </textarea>
  </vue-convert-model>
</template>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
