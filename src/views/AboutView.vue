<template>
  <v-container>
    <v-card width="100%">
      <v-card-title>
        {{ me.shortname }}
      </v-card-title>
      <v-card-subtitle>
        Full Stack Developer
      </v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ me.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ me.phone }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ me.address }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "about",
  created(){
    this.$store.dispatch("getMe");
  },
  computed:{
    me(){
      return this.$store.state.me;
    } 
  },
  data() {
    return {
      title: "Index Page",
    };
  },
};
</script>
