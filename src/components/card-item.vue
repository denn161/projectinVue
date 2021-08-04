<template>
  <li class="card__item" >
     <span class="products__name">{{product.name}}</span>
         <img class="products__img" :src= "product.img">
         <span class="products__price">{{product.price.toLocaleString()}} ₽ </span>
         <button 
         class="btn"
         @click= "addToCart">
         Add to Cart</button>   
  </li>
  

</template>

<script>

export default {
  name: 'Card Item',
  props: {
    product:{
      type: Object,
       default(){
         return {}
       }
    }
  },

  methods:{
    // dataSendtoParent(){
    //    this.$emit('sendIdinCart',this.product.id)

    // }
    addToCart(){
      this.$emit('addToCart',this.product)
    }
  }
 
}
</script>

<style scoped>

.card__item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px;
    background-color: var(--color-item);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    }
    .btn{
     border: 1px solid transparent;
    display: inline-block;
    cursor: pointer;
    padding: var(--spacing-small) var(--spacing-large);
    border-radius: var(--border-radius);
    color: var(--color-unaccent);
    text-transform: capitalize;
    font-weight: 700;
    transition: all 0.3s;
    }

    .btn:hover{
    border: 1px solid transparent;
    background-color: lime;
    color: #fff;  
} 

.products__img{
    display: block;
    height: 270px;
    object-fit: contain;
    width: 100%; 
    margin-top: var(--spacing-medium);   
   }

   .products__name{
    font-size: 20px;
    font-weight: 700;
    text-align:left;
    color: var(--color-unaccent);
    
}

.products__price{
  color:var(--color-unaccent);
  font-weight: 700;
  font-size: 24px;
  margin-top: 15px;
  

}



</style>
