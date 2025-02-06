<template>
  <v-container class="container-grid">
    <div class="section">Header</div>
    <div class="section">
      About Me
      <AboutView />    
    </div>
    <div class="section">Navigation</div>
    <div class="section">Ads</div>
    <div class="section">Main</div>
    <div class="section">Footer</div>
  </v-container>
</template>

<script>
import MeViewVue from './MeView.vue'
import AboutView from './AboutView.vue';
  export default {
    name: 'Home',

    components: {
      MeViewVue, AboutView
    },
  }
</script>

<style lang="scss" scoped>
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 1fr 100px;
  gap: 10px 10px;
  height: 100%;
  width: 100%;
}
.section{
  border: 1px solid black;
}

.section:nth-child(1),
.section:nth-child(6) {
  grid-column: 1 / -1;
}

.section:nth-child(2) {
  grid-row: 2 / 4;
  grid-column: 1 / 4;
}

.section:nth-child(3) {
  grid-column: 4 / 10;
}

.section:nth-child(4) {
  grid-row: 2 / 4;
  grid-column: 10 / 13;
}

.section:nth-child(5) {
  grid-column: 4 / 10;
  grid-row: 3 / 4;
}
</style>