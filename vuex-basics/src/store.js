// Só um objeto constante
// export default {
//   state: {
//     counter: 0
//   }
// }

// Tentando centralizar o estado | STUCK -> VUEX
var store = {
  state: {
    counter: 0
  },
  increment: function () {
    console.log('---');
    if (store.state.counter < 100) {
      store.state.counter += 1;
    }
  },
  reset: function () {
    store.state.counter = 0;
  }
}

export default store
