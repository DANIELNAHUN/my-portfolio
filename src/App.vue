<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
#app{
  background-color: #0B2C3D;
  color: #EFF1F3;
}
</style>
