<template>
<div>
    <div id='head'>
        <img src='../assets/chara_photo08.gif' id='chara'>
        <h1 class='name'>中野梓</h1>
    </div>
    <p>あずにゃんにゃん</p>
    <div id='list'>
        <ol>
            <li class='nyan' v-for='(item, index) in items' :key='index'>
                {{item.text}}
            </li>
        </ol>
        <ol>
            <li v-for='l in list'>
              <router-link :to='{name: "detail", params: {id: l.id}}'>
                {{ l.name }}
              </router-link>
            </li>
        </ol>
        <button v-on:click='Counter'>Increment here.</button>
        <button @click='Decrement'>Decrement here.</button>
        <button @click='Save'>Save Count value</button>
        <button @click='SetValue'>Set Previous value</button>
        <p>{{ count }}</p>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Azunyan',
  data: function () {
    return {
      test: 'あずにゃんにゃん',
      items: [
        {text: '平沢唯'},
        {text: '秋山澪'},
        {text: '田井中律'},
        {text: '琴吹紬'},
        {text: '中野梓'}
      ]
    }
  },
  props: ['value', 'id', 'index', 'text', 'item', 'Azunyan'],
  methods: {
    Nyan: () => {
      console.log('Nya-n')
    },

    ...mapActions({
      Counter: 'increment',
      Decrement: 'decrement',
      Save: 'savecount',
      SetValue: 'setcount'})
  },
  computed: {
    ...mapGetters(['list', 'count'])
  }
}
</script>

<style scoped>
div#head {
  background-image: url('../assets/bunbougu_kokuban.png');
  background-repeat: no-repeat;
  width: 735px;
  height: 525px;
}

img#chara {
    float: left;
}

#list {
    float: left;
}

h1.name {
    font-family: 'TanukiMagic';
    color: #FFFFFF;
    opacity: 0.5;
    float: left;
    margin-top: 100px;
}
</style>
