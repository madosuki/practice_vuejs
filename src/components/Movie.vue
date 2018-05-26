<template>
<div id='top'>
  <div id='tilelogo'>
    <img src='static/title.png' id='logo'>
  </div>
  <div id='video'>
    <p id='checked'></p>
    <video id='player' controls></video>
  </div>
</div>
</template>

<script>
export default {
  name: 'Movie',
  metaInfo: {
    title: 'Video Test'
  },
  methods: {
  },
  mounted: function () {
    this.$nextTick(() => {
      const checkUA = window.navigator.userAgent.toLowerCase()

      let videosrc = 'static/hls/stream/avc.m3u8'
      if (checkUA.indexOf('safari') !== -1 && checkUA.indexOf('chrome') === -1) {
        videosrc = 'static/movies/hevc.m3u8'
      } else {
        let child = document.getElementById('logo')
        let parent = child.parentNode
        parent.removeChild(child)

        let css = document.getElementById('top')
        css.style.color = 'red'

        let item = document.createElement('h1')
        const text = document.createTextNode('This browser don\'t supported HEVC.')
        item.appendChild(text)
        item.id = 'title'

        parent.insertBefore(item, parent.childNodes[0])
      }

      let Hls = require('hls.js')
      if (Hls.isSupported()) {
        let video = document.getElementById('player')
        let hls = new Hls()
        hls.loadSource(videosrc)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play()
        })
      } else {
        const checked = document.getElementById('checked')
        checked.innerHTML = 'This browser don\'t supported by hls.js.'
      }
    })
  }
}
</script>

<style scoped>

#top {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1em;
}

h1 {
  color: red;
}

video#player {
    width: 100%;
    max-height: 600px;
}

</style>
