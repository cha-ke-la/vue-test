<template>
  <div class="form-item">
      <label v-if="label">{{label}}</label>
      <slot></slot>
      <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import Scheam from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: String,
    prop: String
  },
  data () {
    return {
      error: ''
    }
  },
  mounted () {
    this.$on('validate', this.validate.bind(this))
  },
  methods: {
    validate () {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const des = {
        [this.prop]: rules
      }
      console.log(des, value)
      const scheam = new Scheam(des)
      return scheam.validate({[this.prop]: value}, errors => {
        console.log(errors)
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style>

</style>