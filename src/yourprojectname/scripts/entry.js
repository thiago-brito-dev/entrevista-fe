import Vue from "vue";

// Import Components
//import HireMePlease from "./components/hire-me-please/hire-me-please.vue";

import LastEpisodes from "./components/last-episodes/last-episodes.vue";
import LastEpisodesTitle from "./components/last-episodes/components/last-episode-title.vue";
import CardContainer from "./components/last-episodes/components/cards-container.vue";
import Card from "./components/last-episodes/components/card.vue";
import ViewMoreBtn from "./components/last-episodes/components/view-more-btn.vue";


// Vue Declaration for Components
//Vue.component(HireMePlease.name, HireMePlease);
Vue.component(LastEpisodes.name, LastEpisodes);
Vue.component(LastEpisodesTitle.name, LastEpisodesTitle);
Vue.component(CardContainer.name, CardContainer);
Vue.component(Card.name, Card);
Vue.component(ViewMoreBtn.name, ViewMoreBtn);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
