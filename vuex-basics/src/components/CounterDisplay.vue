<template>
  <div>
    Count is {{ sharedState.counter }}
  </div>
</template>

<script>

import store from '../store';

export default {
  data () { // Vue Magic
    return {
      // Estado compartilhado
      sharedState: store.state,
    }
  }
}
</script>


