import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    activePage: -1,  // 记录当前高亮的主页面索引
    parentPage: -1   // 记录当前高亮的父页面索引
  }),
  actions: {
    setActivePage(index: number) {
      this.activePage = index
      this.parentPage = -1
    },
    setActivePageByPath(path: string) {
      const pageList = [
        { to: '/' },
        { to: '/what-we-do' },
        { to: '/our-story' },
        { to: '/our-values' },
        { to: '/news' },
        { to: '/thesis' }
      ]
      const bbboxItems = [
        { to: '/policy-analysis', parent: 1 },
        { to: '/policy-advisory', parent: 1 },
        { to: '/communications-strategy', parent: 1 }
      ]
      const learnItems = [
        { to: '/thesis', parent: 5 },
        { to: '/books', parent: 5 }
      ]

      // Check if the path matches any main page
      const pageIndex = pageList.findIndex(page => page.to === path)
      if (pageIndex !== -1) {
        this.activePage = pageIndex
        this.parentPage = -1
      } else {
        // Check if the path matches any subpage
        const bbboxIndex = bbboxItems.findIndex(item => item.to === path)
        if (bbboxIndex !== -1) {
          this.activePage = bbboxItems[bbboxIndex].parent
          this.parentPage = this.activePage
        } else {
          const learnIndex = learnItems.findIndex(item => item.to === path)
          if (learnIndex !== -1) {
            this.activePage = learnItems[learnIndex].parent
            this.parentPage = this.activePage
          } else {
            this.activePage = -1
            this.parentPage = -1
          }
        }
      }
    }
  }
})
