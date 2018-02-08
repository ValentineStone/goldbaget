export default {
  props: ['value'],
  data() { return { model: this.value } },
  watch: {
    model: {
      handler(_model) {
        this.$emit('input', _model)
      }, deep: true
    },
    value: {
      handler(_value) {
        if (this.model !== _value)
          this.model = _value
      }, deep: true
    }
  }
}