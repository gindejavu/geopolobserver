<script lang="ts" setup>
import router from '@/router'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia'

const drawer = ref(false)
const pageList = [
  { id: 'pagelist0', to: '/', name: 'HOME' },
  { id: 'pagelist1', to: '/what-we-do', name: 'WHAT WE DO' },
  { id: 'pagelist2', to: '/our-story', name: 'OUR STORY' },
  { id: 'pagelist3', to: '/our-values', name: 'OUR VALUES' }
]

const bbboxitem = ref([
  {
    id: 'bbbox_item0',
    name: 'Policy Analysis',
    to: '/policy-analysis'
  },
  {
    id: 'bbbox_item1',
    name: 'Policy Advisory',
    to: '/policy-advisory'
  },
  {
    id: 'bbbox_item2',
    name: 'Communications Strategy',
    to: '/communications-strategy'
  }
])
const navigationStore = useNavigationStore()
const { pageItemWidth, distanceToLeft } = storeToRefs(navigationStore)

const goUrl = (to: string) => {
  let pageIndexValue = pageList.findIndex(item => item.to === to)
  if (pageIndexValue !== -1) {
    const element = document.getElementById(pageList[pageIndexValue].id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const parentRect = (
        document.getElementById('link_list435') as any
      ).getBoundingClientRect()
      navigationStore.updateNavigationState(
        rect.width,
        rect.left - parentRect.left
      )
    }
  }
}

onMounted(() => {
  window.addEventListener('resize', updatedWidth)

  const path = window.location.pathname
  goUrl(path)
  toggleBox()
})
onUnmounted(() => {
  window.removeEventListener('resize', updatedWidth)
})

onBeforeRouteUpdate(to => {
  goUrl(to.path)
})

const clickPage = (index: number) => {
  bbboxClickBoo.value = false

  const element = document.getElementById(pageList[index].id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const parentRect = (
      document.getElementById('link_list435') as any
    ).getBoundingClientRect()
    navigationStore.updateNavigationState(
      rect.width,
      rect.left - parentRect.left
    )
  }
}
const bbboxClickBoo = ref(false)
const bbboxEnter = (id: string) => {
  if (id === 'pagelist1') {
    bbboxClickBoo.value = true
  }
  console.log('bbboxEnter', bbboxClickBoo.value)
}
const pageItemWidth1 = ref(0)
const toggleBox = async () => {
  const element = document.getElementById(pageList[1].id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const parentRect = (
      document.getElementById('link_list435') as any
    ).getBoundingClientRect()
    navigationStore.updateNavigationState(
      rect.width,
      rect.left - parentRect.left
    )
    console.log('navigationStore', pageItemWidth.value)
    pageItemWidth1.value = pageItemWidth.value
    console.log('navigationStore1', pageItemWidth1.value)
  }
}

const width = ref(window.innerWidth)
window.onresize = () => {
  // 监听窗口大小变化
  width.value = window.innerWidth
}
const updatedWidth = function () {
  width.value = window.innerWidth
}

const selectType = ref(false)
const blockSelect = () => {
  selectType.value = !selectType.value
  document.addEventListener('wheel', event => {
    event.preventDefault()
  })
  // // 禁止滚动
  // if (document.body.style.overflow != 'hidden') {
  //   document.body.style.overflow = 'hidden'
  // } else {
  //   document.body.style.overflow = 'auto'
  // }
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <router-link class="pageItem" @click="clickPage(0)" to="/">
        <img v-if="width > 1140" src="@/assets/svgs/Logo.svg" alt="" />
        <img v-else src="@/assets/svgs/Logo_P.svg" alt="" />
        <!-- <div class="logo">Geopolobserver</div> -->
        <!-- <div class="logo">GEOPOLOBSERVER</div> -->
      </router-link>

      <div class="right" v-if="width > 1140">
        <div class="link_list" id="link_list435">
          <div
            v-for="(item, index) in pageList"
            @click="clickPage(index)"
            :key="index"
            @mouseenter="bbboxEnter(item.id)"
            @mouseleave="bbboxClickBoo = false"
          >
            <router-link class="pageTitle" :id="item.id" :to="item.to">
              <div class="pageItem" ref="isBoxV">
                {{ item.name }}
                <img
                  v-if="item.id == 'pagelist1'"
                  src="@/assets/svgs/DownArrow.svg"
                  alt=""
                />
              </div>
            </router-link>
          </div>
          <i
            class="btnling"
            :style="{
              left: `${distanceToLeft + pageItemWidth / 2 - 8}px`
            }"
          ></i>
          <div
            @mouseenter="bbboxClickBoo = true"
            @mouseleave="bbboxClickBoo = false"
            class="bbbox"
            :class="bbboxClickBoo ? 'bbbox_item_hover' : ''"
            :style="{
              left: `${pageItemWidth1 - pageItemWidth1 / 3}px`
            }"
          >
            <div
              v-for="(item, index) in bbboxitem"
              :key="index"
              class="border_bbbox"
            >
              <router-link class="bbbox_item" :to="item.to">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="top_button">SUBSCRIBE</div>
      </div>

      <img
        class="list_caption_image"
        src="@/assets/svgs/list_caption.svg"
        alt=""
        v-if="width < 1140"
        @click="blockSelect"
      />
      <el-drawer
        v-model="selectType"
        :lock-scroll="false"
        z-index="10000"
        size="100%"
      >
        <div
          class="drawerpageItem"
          v-for="(item, index) in pageList"
          :key="index"
        >
          <router-link
            v-if="index !== 1"
            @click="selectType = false"
            class="drawerpageTitle"
            :to="item.to"
          >
            {{ item.name }}
          </router-link>
          <el-collapse v-if="index == 1" class="collapse">
            <el-collapse-item title="WHAT WE DO">
              <router-link
                class="collapse_item"
                :to="item.to"
                @click="selectType = false"
              >
                What We Do
              </router-link>
              <div v-for="(item, index) in bbboxitem" :key="index">
                <router-link
                  class="collapse_item"
                  :to="item.to"
                  @click="selectType = false"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-drawer>
    </div>
  </nav>
</template>

<style scoped lang="less">
.collapse_item {
  margin-left: 15px;
  color: rgba(27, 27, 27, 0.725);
  font-family: Marsek;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  display: block;
  width: 100%;
}
.collapse {
  width: 100%;
  border: none;
  --el-collapse-border-color: none;
  --el-collapse-header-font-size: 20px;
  --el-collapse-header-text-color: #1b1b1b;
  :deep(.el-collapse-item__header) {
    color: #1b1b1b !important;
    font-family: Marsek;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.drawerpageItem {
  cursor: pointer;
  // background: #000;
  display: flex;
  flex-direction: column;
}
.drawerpageTitle {
  width: 100%;
  color: #1b1b1b;
  font-family: Marsek;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px 0;
}

.logo {
  color: #1b1b1b;
  font-family: Marsek;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.list_caption_image {
  width: 40px;
  height: 40px;
}
.bbbox {
  position: absolute;
  top: 175px;
  background: #eef5f1;
  transition: 0.2s linear;
  transform: translateY(100px);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  opacity: 0;
  .border_bbbox:nth-child(2) {
    border-bottom: 1px dashed #5416b852;
    border-top: 1px dashed #5416b852;
  }
  .bbbox_item {
    padding: 0 20px;
    cursor: pointer;
    width: 220px;
    height: 76px;
    display: flex;
    align-items: center;
    color: #1b1b1b;
    font-family: Marsek;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  z-index: -100;
}
.bbbox_item_hover {
  z-index: 100;
  transform: translateY(0px);
  transition: 0.5s linear;
  opacity: 1;
}
.app-topnav {
  height: 176px;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: #f1f7f4;
  padding: 0 54px;
  .container {
    height: 175px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link_list {
      display: flex;
      gap: 77px;
      align-items: center;
      position: relative;
    }

    .pageItem {
      height: 175px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 5px;
    }

    .btnling {
      background-color: #6832c5;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 30px;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }

    .pageTitle {
      color: #1b1b1b;
      font-family: Marsek;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
.top_button {
  cursor: pointer;
  width: 202px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 54px;
  background: #6832c5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 95.255%;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.02);
    box-shadow: #6832c57a 0px 1px 16px 0px;
  }
}
.right {
  display: flex;
  align-items: center;
  gap: 84px;
  margin-left: 20px;
}

@media (max-width: 1430px) {
  .link_list {
    gap: 30px !important;
  }
  .right {
    gap: 40px !important;
  }
}
@media (max-width: 1230px) {
  .link_list {
    gap: 30px !important;
  }
  .right {
    gap: 20px !important;
  }
}
@media (max-width: 840px) {
  .app-topnav {
    height: 106px;
    padding: 0 0px;
    .container {
      height: 103px;
      padding: 0 20px;
    }
  }
}
</style>
