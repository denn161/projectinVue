<template>
  <div class="container">
     <vHeader/>

    <keep-alive>
 <router-view></router-view>
    </keep-alive>
   

      <!-- <Card/>  
      <Basket v-if= "CART.length"
        :cart_data= "CART"
      
      />     -->
   
  </div>
</template> 

<script>
// import Card from "./Cart.vue"
// import Basket from './Basket.vue'

import  vHeader from './loyuts/v-header.vue'

export default {
  name: 'container',
  components: {
     vHeader
     
  },
  data:()=>({     

  }),

  props: {},
 
  }


</script>


<style scoped>





</style>
