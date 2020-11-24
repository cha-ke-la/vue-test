<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate (cb) {
      const task = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())
      console.log(task)
      Promise.all(task)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>