import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () =>({
      isLogin: false,
      userInfo: {}
    }),
  actions: {}
})

export default useMainStore