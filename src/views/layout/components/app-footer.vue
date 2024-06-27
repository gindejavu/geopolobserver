<script lang="ts" setup>
import router from '@/router'
import { onBeforeUnmount, onMounted, ref } from 'vue'
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
  const path = window.location.pathname
  goUrl(path)
})

// 监听路由变化
onBeforeRouteUpdate(to => {
  goUrl(to.path)
})

const clickPage = (index: number) => {
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
    scrollToTop()
  }
}

const scrollHandler = () => {
  isVisible.value =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const isVisible = ref(false)

onMounted(() => {
  window.addEventListener('resize', updatedWidth)
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatedWidth)

  window.removeEventListener('scroll', scrollHandler)
})

const width = ref(window.innerWidth)
window.onresize = () => {
  // 监听窗口大小变化
  width.value = window.innerWidth
}
const updatedWidth = function () {
  width.value = window.innerWidth
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <router-link
        style="height: 100%; padding-top: 10px"
        @click="clickPage(0)"
        to="/"
      >
        <img v-if="width > 1140" src="@/assets/svgs/Logo.svg" alt="" />
        <img v-else src="@/assets/svgs/Logo_P.svg" alt="" />

        <!-- <div class="logo">Geopolobserver</div> -->
      </router-link>

      <div class="right" v-if="width > 1140">
        <div class="link_list" id="link_list435">
          <div
            v-for="(item, index) in pageList"
            @click="clickPage(index)"
            :key="index"
          >
            <router-link class="pageTitle" :id="item.id" :to="item.to">
              <div class="pageItem">
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
        </div>
      </div>
      <div @click="scrollToTop" class="scroll-to-top-button">
        <img src="@/assets/svgs/Hexagonal_graph.svg" alt="" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="less">
.logo {
  color: #1b1b1b;
  font-family: Marsek;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.scroll-to-top-button {
  position: absolute;
  bottom: 100px;
  right: 80px;
  width: 76px;
  aspect-ratio: 1.1625; /* 宽高比例缩放 */
  border-radius: 25px;
  // 旋转

  object-fit: cover; /* 保持图片原有比例, 会有剪切*/
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);

  background: #6832c5;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1))
    rotate(30deg); /* 对图片进行移动和缩放 */
  transition: 0.2s linear; /* 过渡效果 */
  &:hover {
    --_t: 1.1;
  }
  img {
    width: 25px;
    transform: rotate(-30deg);
    height: 25px;
  }
}

.app-topnav {
  height: 138px;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: #f1f7f4;
  padding: 0 54px;
  .container {
    border-top: 1px solid #000;
    height: 138px;
    display: flex;
    align-items: center;
    gap: 244px;

    .link_list {
      display: flex;
      gap: 77px;
      align-items: center;
      position: relative;
    }

    .pageItem {
      height: 100px;
      display: flex;
      align-items: center;
      cursor: pointer;
      flex-shrink: 0;
    }

    .btnling {
      background-color: #6832c5;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0px;
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

@media (max-width: 1430px) {
  .container {
    gap: 160px !important;
  }
  .link_list {
    gap: 30px !important;
  }
}
@media (max-width: 1230px) {
  .container {
    gap: 60px !important;
  }
  .link_list {
    gap: 30px !important;
  }
}
@media (max-width: 840px) {
  .app-topnav {
    height: 78px;
    padding: 0 0px;
    .container {
      display: flex;
      align-items: center;
      height: 78px;
      padding: 0 20px;
    }
  }
  .scroll-to-top-button {
    position: absolute;
    bottom: 52px;
    right: 30px;
    width: 56px;
    aspect-ratio: 1.1625; /* 宽高比例缩放 */
    border-radius: 0px;
    // 旋转

    object-fit: cover; /* 保持图片原有比例, 会有剪切*/
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);

    background: #6832c5;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1))
      rotate(30deg); /* 对图片进行移动和缩放 */
    transition: 0.2s linear; /* 过渡效果 */
    &:hover {
      --_t: 1.1;
    }
    img {
      width: 20px;
      transform: rotate(-30deg);
      height: 20px;
    }
  }
}
</style>
