# vue-resize-on-event

![npm](https://img.shields.io/npm/v/vue-resize-on-event.svg) 
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

VueJS renderless component that wraps a component with a model (e.g. `input` or `textarea`) and transforms data to/from the underlying component's model with a given conversion function.
 
# Installation

```
npm install --save vue-convert-model
```

# Example

Include the module for the [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input) event to register the custom directive `v-resize-on-input`:

```javascript
import Vue from 'vue'
import VueResizeOnEvent from 'vue-resize-on-event'

export default {
   mixins: [
     VueResizeOnEvent( 'input' ), //registers directive v-resize-on-input
   ],

   data() {
     return {
       text: '',
     }
   },
 }
```


## Usage

Add attribute `v-resize-on-input` to a `textarea` element to have it resize automatically when its value is changed interactively.

```html
<template>
  <div>
    <textarea
      v-model="text"
      v-resize-on-input>
    </textarea>
  </div>
</template>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
