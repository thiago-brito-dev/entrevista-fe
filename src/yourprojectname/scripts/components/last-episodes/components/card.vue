<template>
    <div :class="['card', type]">
      <div class="card-content">
        <p class="card-title">{{ titleCard }}</p>
        <p class="card-name">{{ nameCard }}</p>
        <p class="card-jobTitle">{{ jobTitleCard }}</p>
      </div>
      <div class="card-footer">
        <div class="play-btn">
          <button :aria-label="btnAriaLabel"><img :src="playBtnImage" alt="Play"></button>
        </div>
        <div class="duration">
          <p class="time">1h45min</p>
        </div>
      </div>
    </div>  
    
</template>

<script>

export default {
  name: "card",
  data(){
    return {
      playBtnImage: "../../../../images/play-btn.svg",
      btnAriaLabel: "Play button"
    };
  },
  props: {
  	titleCard: {
      type: String,
  	},
  	nameCard: {
      type: String,
  	},
  	jobTitleCard: {
      type: String,
    },
    cardType: {
      type: String
    }
  }
};
</script>