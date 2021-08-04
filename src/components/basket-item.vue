<template>

<li class="basket__item">
    <div class="basket__item-img">
 <img class="item__img" :src= "cart_item_data.img" alt="photo">
    </div>
    <div class="basket__item-info">
        <p class="basket__item-name">{{cart_item_data.name}}</p>
          <p class="basket__item-price">{{cart_item_data.price.toLocaleString()}} P</p>
         
    </div>   
      <div class="basket__item-quantity">
          <p>Qty</p>
          <span>
              <span class="current" @click="incrementItem">+</span>
        {{cart_item_data.quantity}}
               <span class="current" @click="dicrementItem">-</span>
          </span>
        </div>
    <button @click= "deleteFromBasket" class="basket__item-btn">Delete</button>    
</li>
    
</template>





<script>



export default {
    props:{
        cart_item_data:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
           
        deleteFromBasket(){
            this.$emit('deleteFromBasket');
        },
        dicrementItem(){
            this.$emit('dicrementItem');

        },
        incrementItem(){
            this.$emit('incrementItem');

        }

    },

    mounted(){
        this.$set(this.cart_item_data,'quantity',1);
        
    }
 
}
</script>

<style >
.basket__item{
   display:flex;
   /* flex-direction: column; */
   justify-content:space-around;
   align-items:center;
   margin:30px; 
   width: 50%;
   /* min-height:300px; */
   background-color:#fff;
   box-shadow:var(--box-shadow)
    }
    .basket__item-name{
        font-size:14px;
        text-align: center;
        max-width: 174px;
      
    }
    .basket__item-price{
        text-align: center;
        margin: 15px 0;
       
    }
.basket__item-btn{
    display: block;
    background-color:transparent;
    border: none;
    color: black;
    padding:5px;
    font-weight: 700;
    margin-bottom: 20px;    
}

 .basket__item-img{
     padding: 10px;
 }


.item__img{
    display:block;
    max-width: 50px;
    height:150px;
    object-fit: contain;
   
}

.basket__item-quantity{
    text-align: center;
}
 .basket__item-btn{
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

    .basket__item-btn:hover{
    border: 1px solid transparent;
    background-color: lime;
    color: #fff;  
} 

.current{
    cursor: pointer;
    display: inline-block;
    border: 1px solid lime;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: bisque;
    color: darkred;
}



</style>