<template>
  <button @click.prevent="activate">+1</button>
</template>

<script>
export default {
  methods: {
    activate () {
      this.$dispatch('button-pressed');
    }
  }
}
</script>
