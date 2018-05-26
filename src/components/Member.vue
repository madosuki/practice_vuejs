<template>
  <div>
    <h1> User Page </h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: {
    id: {
      default: 0
    },
    text: {
      default: 'None'
    }
  },
  data: function () {
    return {
      id: this.id,
      text: this.id + '様、ようこそお越し下さりました。'
    }
  },
  watch: {
    id: function () {
      console.log(this.id)
    }
  }
}
</script>
