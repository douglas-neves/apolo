<template>
  <div>
    Count is {{ count }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  events: {
    increment () {
      this.count++;
    }
  }
}
</script>
