<script lang="ts" setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
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

onMounted(() => {
  navigationStore.setActivePageByPath(route.path)
  window.addEventListener('resize', updatedWidth)
  window.addEventListener('scroll', scrollHandler)
})

watch(route, () => {
  navigationStore.setActivePageByPath(route.path)
  scrollToTop()
})

const scrollHandler = () => {
  isVisible.value =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const isVisible = ref(false)

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatedWidth)
  window.removeEventListener('scroll', scrollHandler)
})

const width = ref(window.innerWidth)
const updatedWidth = () => {
  width.value = window.innerWidth
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <router-link
        style="height: 100%; padding-top: 10px"
        to="/"
        class="Logo_a"
      >
        <img v-if="width > 840" src="@/assets/svgs/Logo.svg" alt="" />
        <img v-else src="@/assets/svgs/Logo_P.svg" alt="" />
      </router-link>

      <div class="right" v-if="width > 1240">
        <div class="link_list" id="link_list435">
          <div v-for="(item, index) in pageList" :key="index">
            <router-link class="pageTitle" :id="item.id" :to="item.to">
              <div
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
        </div>
      </div>
      <div @click="scrollToTop" class="scroll-to-top-button">
        <img src="@/assets/svgs/Hexagonal_graph.svg" alt="" />
      </div>
    </div>
  </nav>
</template>
<style scoped lang="less">
.Logo_a {
  width: 400px;
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
  height: 128px;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: #f1f7f4;
  padding: 0 44px;
  .container {
    border-top: 1px solid #000;
    height: 128px;
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
@media (max-width: 1465px) {
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
@media (max-width: 1415px) {
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
    margin-top: 20px;
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
  .Logo_a {
    margin-top: 0px;
  }
  .link_list {
    gap: 30px !important;
  }
  .right {
    gap: 20px !important;
  }
  .app-topnav {
    height: 90px;
    padding: 0 0px;
    .container {
      display: flex;
      align-items: center;
      height: 90px;
      padding: 0 20px;
    }
  }
}
@media (max-width: 840px) {
  .Logo_a {
    width: 200px;
  }
  .app-topnav {
    height: 70px;
    padding: 0 0px;
    .container {
      display: flex;
      align-items: center;
      height: 70px;
      padding: 0 20px;
    }
    .ContactUs {
      font-weight: 500;
      font-size: 20px;
    }
  }
}
</style>
