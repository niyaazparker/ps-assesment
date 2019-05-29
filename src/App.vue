<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap" rel="stylesheet"> 
    
    <tophead />
    <main>
      <div class='container page-wrapper' id="main">
        <subhead />
          <slider />
      </div>
      <router-view/>
    </main>
    <bottomfoot />
  </div>
</template>




<script>
import tophead from '@/components/header.vue'
import bottomfoot from '@/components/footer.vue'
import subhead from '@/components/subhead.vue'
import slider from '@/components/slider.vue'

export default {
  name:'default',
  components: {
    tophead,
    bottomfoot,
    subhead,
    slider
    
  }
}

</script>

<style lang="scss">
  @import "./styles/global.scss";
 </style>
