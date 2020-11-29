import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    subTotal: null,
    tax: null,
    grandTotal: null,
    product: {}
  },
  getters: {
    getProduct: state => { state.product }
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.unshift(payload)
    },
    removeProduct(state, payload) {
      const index = state.cart.indexOf(payload)
      
      state.cart.splice(index, 1)
    },
    storeProduct(state) {
      const parsed = JSON.stringify(state.cart)
      localStorage.setItem('cart', parsed)
    },
    viewProduct(state, product) {
      state.product = product
    },
    getLocalStorage(state) {
      if (localStorage.getItem('cart')) {
        try {
          state.cart = JSON.parse(localStorage.getItem('cart'))
        } catch (error) {
          localStorage.removeItem('cart')
        }
      }
    },
    calcSubTotal(state) {
      if (state.cart.length == 1) {
        state.cart.forEach((product) => {
          state.subTotal = product.price * product.qty
        })
      } else if (state.cart.length >= 1) {
        var total = state.cart.reduce((a,b) => {
          return a + (b.price * b.qty)
        }, 0)

        state.subTotal = total
      }
    },
    calcGrandTotal(state) {
      var tax = state.subTotal * 12 / 100
      state.grandTotal = state.subTotal + tax
      state.tax = tax
    }
  },
  actions: {
    setProduct: ({commit}) => {
      commit('viewProduct', product.id)
    }
  },
  modules: {
  }
})
