// 管理分类导航的数据
import { defineStore } from 'pinia'
let useHomeStore = defineStore('home', {
  state: () => ({
    test: '我是测试数据',
    sharedData: '',
  }),
  actions: {
    updateSharedData(newData: string) {
      this.sharedData = newData;
    },
  },
  getters: {}
})
export default useHomeStore

