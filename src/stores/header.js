import { defineStore } from 'pinia'

const useHeaderStore = defineStore('header', {
  state: () =>({
      activeIndex: 0,
    }),
  actions: {}
})

export default useHeaderStore