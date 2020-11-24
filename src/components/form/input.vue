<template>
  <input :type="type" :value="value" @input="handleChange" v-bind="$attrs">
</template>

<script>
export default {
  props: {
      type: {
        default: 'text',
        type: String
      },
      value: {
          default: '',
          type: String
      }
  },
  data () {
      return  {

      }
  },
  methods: {
      handleChange (e) {
        this.$emit('input', e.target.value)
        this.$parent.$emit('validate')
      }
  }

}
</script>

<style>

</style>