<template>
  <div class="last-episodes" ref="last">
    <Title />
  </div>
</template>

<script>
import Title from "./components/last-episode-title.vue";
//import Card from "./components/card.vue";

export default {
  name: "last-episodes",
  components: {
      Title,
      //Card
  }
};
</script>
