export const state = () => ({
  sortBy: 'По умолчанию',
  products: [
    {
      id: '0',
      name: 'Наименование товара',
      desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
      price: 10000,
    }
  ]
})

export const mutations = {

  addProduct(state, product) {
    state.products.unshift(product)
  },

  addProductsList(state, productsList) {
    state.products = productsList
  },

  removeProduct(state, id) {
    const productToRemove = state.products.find((el) => {
      return el.id === id
    })

    const productIndex = state.products.indexOf(productToRemove)
    state.products.splice(productIndex, 1)
    localStorage.setItem('products', JSON.stringify(state.products))
  },

  sortByMinPrice(state) {
    state.sortBy = 'По возрастанию'
    state.products.sort((a, b) => {
      return a.price < b.price ? -1 : 1
    })
  },

  sortByMaxPrice(state) {
    state.sortBy = 'По убыванию'
    state.products.sort((a, b) => {
      return a.price > b.price ? -1 : 1
    })
  },

  sortByTitle(state) {
    state.sortBy = 'По наименованию'
    state.products.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  },
}

export const getters = {
  getAllProducts: (state) => state.products,
}
