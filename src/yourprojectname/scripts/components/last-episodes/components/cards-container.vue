<template>
    <div class="cards-container">
        <div class="nav">
            <ul class="menu">
                <li v-on:click="menuHandler($event)" v-for="menuItem in menuItens" :key="menuItem.id" class="menu-item" :data-type="menuItem.type">{{menuItem.title}}</li>
            </ul>
        </div>
        <div class="cards-row">
            <div class="cards-row-container">
                <slot name="cards"/>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
  name: "cards-container",
  data() {
      return{
          menuItens: [
          {
              id: 1,
              type: "all",
              title: "All"
              },
          {
              id: 2,
              type: "dev",
              title: "Dev"
              },
          {
              id: 3,
              type: "design",
              title: "Design"
            },
            {
                id: 4,
                type: "project",
                title: "Project Management"
            }
         ]
      };
      
  },
  methods: {
      isMobile(){
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              this.hideItens();
        }else{
            this.showItens();
        }
      },
      menuHandler(event){
          this.activeSelected(event.target.getAttribute("data-type"));
          this.navEffects(event.target);
      },
      activeSelected(type){
          const allCards = document.querySelectorAll(".cards-row .card");

          allCards.forEach( item => {
              item.classList.add("hide");
          });

          allCards.forEach( item => {
                  if(type !== "all"){
                      setTimeout(() => {
                          item.getAttribute("type").includes(type) && item.classList.remove("hide");
                      },300);
                    
              }else{
                  setTimeout(() => {item.classList.remove("hide");},300);
              }
          });

          
      },
      navEffects(item){
          document.querySelectorAll(".menu-item").forEach( menuItem => menuItem.classList.remove("active"));
          item.classList.add("active");
      },
      hideItens(){
          document.querySelector(".cards-container .nav").classList.add("hide");
          //document.querySelector(".section-title-effect").classList.add("hide");
      },
      showItens(){
          document.querySelector(".cards-container .nav").classList.remove("hide");
          //document.querySelector(".section-title-effect").classList.remove("hide");
      }, 
  },
  mounted(){
        this.isMobile();
        window.addEventListener("resize", this.isMobile);
    },
    beforeDestroy() {         
        window.removeEventListener("resize", this.isMobile);     
    }, 
    beforeUpdate() { 
        this.isMobile();
    }
};
</script>