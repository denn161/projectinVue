<template>
 
<ul class="basket__list">
     <div class="container">
       <router-link :to="{name:'Catalog'}">
      
     <div class="basket-btn">
      Back to Catalog
    </div>
      
    </router-link>  
   <p class="error__text" v-if="!cart_data.length">В данный момент корзина пуста 
       The are no products in cart...
   </p>  
    
    <basketItem 
    v-for="(item,idx) in cart_data"
    :key="item.id" 
    :cart_item_data="item"
    @deleteFromBasket= "deleteFromBasket(idx)"
    @incrementItem= "increment(idx)"
    @dicrementItem = "dicrement(idx)"
     /> 
     <div v-if="cart_data.length" class="basket__total-summ">
         <p>Total Summ in Basket</p>
         <p>{{cartTotalSumm}} P</p>
     </div>

    </div>
</ul>

    
</template>


<script>

import basketItem from './basket-item.vue'
import {mapActions} from 'vuex'

export default {
    components:{
        basketItem,
    },
    props:{
        cart_data:{
            type:Array,
            default(){
                return []
            }
        }
    },
    computed:{
       cartTotalSumm(){

           const result = []
           if(this.cart_data.length){
             this.cart_data.forEach(item=>{
               result.push(item.price*item.quantity);
           })

           return result.reduce((pov,item)=>{
                return pov+item;             
           },0)

           }         
      
       }


    },
    methods:{
        ...mapActions(['DELETE_FROM_CART','DECREMENT_CART_ITEM','INCREMENT_CART_ITEM']),
        deleteFromBasket(idx){
         this.DELETE_FROM_CART(idx);
           
        },
        increment(idx){
            this.INCREMENT_CART_ITEM(idx);

        },
        dicrement(idx){
            this.DECREMENT_CART_ITEM(idx);

        },

    }
 
}
</script>

<style scoped>

.container{
    max-width:930px;
    margin: 0 auto;
    padding: 15px;
}

.basket__list{
    z-index: 101;
    list-style: none;
   
    /* flex-direction: column;
    align-items:center;  
    justify-content:space-between; */
    background-color:var(--color-unaccent);
    overflow:auto;
    position:relative;
    width: 100%;
    height:100vh;
  

}

.basket__total-summ{
    width:300px;
    height:156px;
    position:absolute;
    top: 50%;
    right:40px;
    transform:translateY(-50%);
    background-color: rgb(122, 172, 122,.7);
    display:flex;
    justify-content:center;
    align-items:center; 
    flex-direction: column;
    color: #fff;
    font-size: 24px;

}

.error__text{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:lime;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    width: 417px;
    height: 200px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
}

.basket__list a{
      display:block;
     color: black;
     text-decoration: none;
}
.basket-btn{
  position:absolute;
  right:40px;
  top:30px;
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