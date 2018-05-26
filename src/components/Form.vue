<template>
<div>
  <router-link to='/'>Return Top</router-link>
  <form @submit.prevent='submit' method='post' accept-charset='UTF-8'>
    <div class='form'>
    <p >英数字で入力してください。</p>
    <input type='text' v-model='id' placeholder='IDをここに入力してください'></input>
    </div>
    <div class='form'>
    <p>32文字までです</p>
    <input type='text' v-model='pass' placeholder='パスワードを入力してください'></input>
    </div>
    <div class='form'>
    <button type='submit' name='action' value='send'>送信</button>
    </div>
    <p id='text'>{{text}}</p>
  </form>
</div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      id: '',
      pass: '',
      text: this.text
    }
  },
  props: {
    'text': {
      type: String,
      default: 'None'
    }
  },
  methods: {
    submit () {
      let axios = require('axios')
      axios.post('/test', {id: this.id, pass: this.pass})
        .then(res => {
          this.text = res.data.name + '様、ようこそいらっしゃいませ。'
          console.log(res)
        })
        .catch(err => {
          console.log('error {}', err)
        })
    }
  }
}
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
}

.form {
  display: block;
}

</style>
