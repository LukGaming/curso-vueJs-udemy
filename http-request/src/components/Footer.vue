<template>
  <div>
    <v-footer dark padless >
      <v-card class="flex" flat tile >
        <v-card-title class="teal">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
</style>
