<template>
  <ul class="card__list">

      <router-link class="basket-btn" :to="{name:'Basket',params:{cart_data:CART}}">      
    
        Basket:{{CART.length}}    
      
    </router-link> 

      <cardItem
       v-for= "product in filteredProducts"
       :key=  "product.id"
       :product= "product"
       @addToCart= "addToCart"       
       />
       
  </ul>
</template>

<script>
import cardItem from "./card-item.vue"
import {mapActions,mapGetters} from 'vuex'


export default {
  name: 'Card',
  components: {
    cardItem
  }, 
  data:()=>({  

  }),
  props: {},

  computed:{
    ...mapGetters(['PRODUCTS','CART','SEARCH']), 

    filteredProducts() {
      let value = this.SEARCH;
       if(value){   
     return this.PRODUCTS.filter((item)=>{
          return  item.name.toLowerCase().includes(value.toLowerCase());
          });        
       }  

            return this.PRODUCTS          
      },
  }, 

  methods:{
     ...mapActions(['GETProductsFromApi','ADD_TO_CART']),

   addToCart(data){
      this.ADD_TO_CART(data);
    },
  
  },  
  mounted(){
     this.GETProductsFromApi()
      // setTimeout(function(){
      //      location.reload()
      //    },4000);
    
  }
 
}
</script>

<style scoped>

.card__list{
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
   grid-gap:45px;
   list-style: none;
   margin: var(--spacing-large) auto;
   width: 80%;  
   max-width: 1230px;
    margin-top:30px;
    padding:115px 15px;
    margin: 0 auto;
}

.basket-btn{
  position:fixed;
  right:40px;
  top:120px;
  display:block;
  color: black;
  text-decoration: none;
   border:1px solid transparent;
   border-radius:8px;
   padding:10px;
   cursor:pointer;
   transition:background 0.3s;
   font-weight: 700;

}

.basket-btn:hover{
  border:1px solid transparent;
  background-color: lime;
  color:#fff; 
}



</style>
