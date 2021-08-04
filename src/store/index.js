import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    searchValue:'',
  },
  mutations: {
    SET_PRODUCTS_TO_STATE:(state, products)=> {
      state.products = products.data;
    },
    SET_CART: (state, product)=>{
      if (state.cart.length) {
        let flag = false;
        state.cart.map(item => {
          if (item.id === product.id) {
            flag = true;
            item.quantity++;
          }

        })
        if (!flag) {
            state.cart.push(product)
        }
        
      }
      else {
        state.cart.push(product)
      }       
      
    },
    DELETE: (state, idx) => {
      state.cart.splice(idx, 1);
    },
    INCREMENT: (state, idx) => {
      state.cart[idx].quantity++;
    },
    DICREMENT: (state, idx) => {
      if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity--;
      }
      else {
        return;
      }      
    },
    SEARCH_PRODUCT: (state, value) => {
      
      state.searchValue = value;
        
    },

  },
  actions: {
   async GETProductsFromApi({ commit }) {
      return await axios(`https://gist.githubusercontent.com/denn161/832d9defe062faa86327717a5e83e50a/raw/3f45fed09143fa7e1ab28d7c5a3c8b89acf23733/products`, {
        method: 'GET',
        
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products);
           console.log(products.data)
        })
        .catch(error => {
          console.log(error)
          return error
      })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART',product)     
      
    },
    DELETE_FROM_CART({ commit }, idx) {
      commit('DELETE', idx);
      
    },
    DECREMENT_CART_ITEM({ commit },idx) {
      commit('DICREMENT',idx)
      
    },
    INCREMENT_CART_ITEM({ commit },idx) {
      commit('INCREMENT',idx)
      
    },
    SET_SEARCH({ commit }, value) {
      commit('SEARCH_PRODUCT',value)
    }
   
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    SEARCH(state) {
      return state.searchValue;
    }
    
  }
 
})
