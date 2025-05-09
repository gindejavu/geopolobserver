<script lang="ts" setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia'

const navigationStore = useNavigationStore()
const { activePage } = storeToRefs(navigationStore)
const route = useRoute()

const pageList = [
  { id: 'pagelist0', to: '/', name: 'HOME' },
  { id: 'pagelist1', to: '/what-we-do', name: 'WHAT WE DO' },
  { id: 'pagelist2', to: '/our-story', name: 'OUR STORY' },
  { id: 'pagelist3', to: '/our-values', name: 'OUR VALUES' },
  { id: 'pagelist4', to: '/news', name: 'NEWS' },
  { id: 'pagelist5', to: '/thesis', name: 'LEARN' }
]

const bbboxitem = ref([
  {
    id: 'bbbox_item0',
    name: 'Policy Analysis',
    to: '/policy-analysis',
    parent: 1
  },
  {
    id: 'bbbox_item1',
    name: 'Policy Advisory',
    to: '/policy-advisory',
    parent: 1
  },
  {
    id: 'bbbox_item2',
    name: 'Communications Strategy',
    to: '/communications-strategy',
    parent: 1
  }
])
const bbboxitem1 = ref([
  { id: 'pagelist0', to: '/what-we-do', name: 'WHAT WE DO', parent: 1 },
  {
    id: 'bbbox_item1',
    name: 'Policy Analysis',
    to: '/policy-analysis',
    parent: 1
  },
  {
    id: 'bbbox_item2',
    name: 'Policy Advisory',
    to: '/policy-advisory',
    parent: 1
  },
  {
    id: 'bbbox_item3',
    name: 'Communications Strategy',
    to: '/communications-strategy',
    parent: 1
  }
])

const learnItem = ref([
  { id: 'learn_item0', name: 'THESIS', to: '/thesis', parent: 5 },
  { id: 'learn_item1', name: 'BOOKS', to: '/books', parent: 5 }
])

const setActivePageFromRoute = (route: any) => {
  navigationStore.setActivePageByPath(route.path)
}

onMounted(() => {
  setActivePageFromRoute(route)
})

watch(route, () => {
  setActivePageFromRoute(route)
})

const clickPage = (index: number, parentIndex?: number) => {
  if (parentIndex !== undefined) {
    navigationStore.setActivePage(parentIndex)
  } else {
    navigationStore.setActivePage(index)
  }
}

const bbboxClickBoo = ref(false)
const bbboxClickBoo1 = ref(false)
const bbboxLeft = ref(0)
const bbbox1Left = ref(0)

const bbboxEnter = (id: string) => {
  if (id === 'pagelist1') {
    bbboxClickBoo.value = true
  }
  if (id === 'pagelist5') {
    bbboxClickBoo1.value = true
  }
}

const bbboxmMouseleave = () => {
  bbboxClickBoo.value = false
  bbboxClickBoo1.value = false
}

const width = ref(window.innerWidth)
window.onresize = () => {
  width.value = window.innerWidth
}

const updatedWidth = function () {
  width.value = window.innerWidth
  updateBoxPosition()
}

const updateBoxPosition = () => {
  const whatWeDoElement = document.getElementById(pageList[1].id)
  const learnElement = document.getElementById(pageList[5].id)

  if (whatWeDoElement) {
    const whatWeDoRect = whatWeDoElement.getBoundingClientRect()
    const parentRect = (
      document.getElementById('link_list435') as any
    ).getBoundingClientRect()
    bbboxLeft.value = whatWeDoRect.left - parentRect.left - 25
  }

  if (learnElement) {
    const learnRect = learnElement.getBoundingClientRect()
    const parentRect = (
      document.getElementById('link_list435') as any
    ).getBoundingClientRect()
    bbbox1Left.value = learnRect.left - parentRect.left - 50
  }
}

onMounted(() => {
  window.addEventListener('resize', updatedWidth)
  updateBoxPosition()
})

onUnmounted(() => {
  window.removeEventListener('resize', updatedWidth)
})

const selectType = ref(false)
const blockSelect = () => {
  selectType.value = !selectType.value
  document.addEventListener('wheel', event => {
    event.preventDefault()
  })
}
</script>

<template>
  <nav class="app-topnav">
    <div style="margin: 0 auto; max-width: 1728px">
      <div class="ContactUs">
        EMail: <span>geopolobserver.c@gmail.com</span>
      </div>
    </div>
    <div class="container">
      <router-link
        style="height: 100%; margin-top: 60px"
        @click="clickPage(0)"
        to="/"
        class="Logo_a"
      >
        <img v-if="width > 840" src="@/assets/svgs/Logo.svg" alt="" />
        <img v-else src="@/assets/svgs/Logo_P.svg" alt="" />
      </router-link>

      <div class="right" v-if="width > 1240">
        <div class="link_list" id="link_list435">
          <div
            v-for="(item, index) in pageList"
            @click="clickPage(index)"
            :key="index"
            @mouseenter="bbboxEnter(item.id)"
            @mouseleave="bbboxmMouseleave"
            :id="item.id"
          >
            <router-link class="pageTitle" :to="item.to">
              <div
                class="pageItem"
                :style="{ color: activePage === index ? '#6832c5' : '#1b1b1b' }"
              >
                {{ item.name }}
                <img
                  v-if="item.id === 'pagelist1' || item.id === 'pagelist5'"
                  src="@/assets/svgs/DownArrow.svg"
                  alt=""
                />
              </div>
            </router-link>
          </div>

          <div
            @mouseenter="bbboxClickBoo = true"
            @mouseleave="bbboxClickBoo = false"
            class="bbbox"
            :class="bbboxClickBoo ? 'bbbox_item_hover' : ''"
            :style="{ left: `${bbboxLeft}px` }"
          >
            <div
              v-for="(item, index) in bbboxitem"
              :key="index"
              class="border_bbbox"
              @click="clickPage(index, item.parent)"
            >
              <router-link
                class="bbbox_item"
                :to="item.to"
                :style="{
                  color: route.path === item.to ? '#6832c5' : '#1b1b1b'
                }"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <div
            @mouseenter="bbboxClickBoo1 = true"
            @mouseleave="bbboxClickBoo1 = false"
            class="bbbox bbbox_1"
            :class="bbboxClickBoo1 ? 'bbbox_item_hover' : ''"
            :style="{ left: `${bbbox1Left}px` }"
          >
            <div
              v-for="(item, index) in learnItem"
              :key="index"
              class="border_bbbox"
              @click="clickPage(index, item.parent)"
            >
              <router-link
                class="bbbox_item"
                :to="item.to"
                :style="{
                  color: route.path === item.to ? '#6832c5' : '#1b1b1b'
                }"
              >
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
        v-if="width < 1240"
        @click="blockSelect"
      />
      <el-drawer v-model="selectType" :lock-scroll="false" size="100%">
        <div
          class="drawerpageItem"
          v-for="(item, index) in pageList"
          :key="index"
        >
          <router-link
            v-if="index !== 1 && index !== 5"
            @click="selectType = false"
            class="drawerpageTitle"
            :to="item.to"
            :style="{ color: activePage === index ? '#6832c5' : '#1b1b1b' }"
          >
            {{ item.name }}
          </router-link>
          <el-collapse v-if="index == 1" class="collapse">
            <el-collapse-item title="WHAT WE DO">
              <!-- <router-link
                class="collapse_item"
                :to="item.to"
                @click="selectType = false"
                :style="{ color: activePage === index ? '#6832c5' : '#1b1b1b' }"
              >
                What We Do
              </router-link> -->
              <div v-for="(item, index) in bbboxitem1" :key="index">
                <router-link
                  class="collapse_item"
                  :to="item.to"
                  @click="selectType = false"
                  :style="{
                    color: route.path === item.to ? '#6832c5' : '#1b1b1b'
                  }"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-if="index == 5" class="collapse">
            <el-collapse-item title="LEARN">
              <div v-for="(item, index) in learnItem" :key="index">
                <router-link
                  class="collapse_item"
                  :to="item.to"
                  @click="selectType = false"
                  :style="{
                    color: route.path === item.to ? '#6832c5' : '#1b1b1b'
                  }"
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
.pageTitle {
  color: #6832c5; // 设置紫色
}
.Logo_a {
  width: 400px;
  margin-top: 76px !important;
}
.ContactUs {
  width: 100%;
  font-family: Marsek;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 20px;
  color: #000;
  display: flex;
  justify-content: end;
  padding: 0 25px;
  span {
    color: #6832c5;
  }
}
:deep(.el-drawer__header) {
  margin-bottom: 0 !important;
}
:deep(.el-drawer__body) {
  padding: 0px 20px !important;
}
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

.list_caption_image {
  width: 30px;
  height: 30px;
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
.bbbox_1 {
  .border_bbbox:nth-child(2) {
    border-bottom: none !important;
    border-top: 1px dashed #5416b852;
  }
}
.bbbox_item_hover {
  z-index: 100;
  transform: translateY(0px);
  transition: 0.5s linear;
  opacity: 1;
}
.app-topnav {
  height: 230px;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: #f1f7f4;
  padding: 0 44px;
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
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #6832c5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 94.255%;
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

@media (max-width: 1734px) {
  .app-topnav {
    padding: 0 0px;
    .container {
      padding: 0 20px;
    }
  }
  .link_list {
    gap: 40px !important;
  }
  .right {
    gap: 30px !important;
  }
}
@media (max-width: 1446px) {
  .app-topnav {
    padding: 0 0px;
    .container {
      padding: 0 20px;
    }
  }
  .link_list {
    gap: 30px !important;
  }
  .right {
    gap: 40px !important;
  }
  .top_button {
    width: 166px;
    height: 45px;
    font-weight: 400;
  }
}
@media (max-width: 1410px) {
  .Logo_a {
    width: 400px;
    margin-top: 76px !important;
  }
  .app-topnav {
    padding: 0 0px;
    .container {
      padding: 0 20px;
    }
  }
  .link_list {
    gap: 25px !important;
  }
  .pageTitle {
    font-size: 16px !important;
  }
  .pageItem {
    img {
      width: 16px;
    }
  }
  .top_button {
    width: 166px;
    height: 36px;
    font-weight: 400;
    font-size: 18px;
  }
  .Logo_a {
    width: 300px;
    margin-top: 90px !important;
  }
  .right {
    gap: 20px !important;
  }
}
@media (max-width: 1340px) {
  .link_list {
    gap: 30px !important;
  }
  .right {
    gap: 20px !important;
  }
}
@media (max-width: 1300px) {
  .Logo_a {
    width: 300px;
    margin-top: 90px !important;
  }
  .link_list {
    gap: 30px !important;
    font-size: 20px;
  }
  .right {
    gap: 20px !important;
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
  .Logo_a {
    width: 200px;
    margin-top: 40px !important;
  }
  .app-topnav {
    height: 186px;
    padding: 0 0px;
    .container {
      height: 80px;
      padding: 0 20px;
    }
    .ContactUs {
      font-weight: 500;
      font-size: 20px;
    }
  }
}
</style>
