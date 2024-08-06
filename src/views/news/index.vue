<script setup lang="ts" name="HomeView">
import { List, News } from '@/api/news'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
const data = reactive({
  country: 'us',
  apiKey: 'c841f41ff46747aea7040e0b6cf14ebe',
  pageSize: 100,
  page: 1
})
const news = ref()
const GetNews = async () => {
  const res = await List()
  console.log('List', res.data.data.articles)
  if (res.data.code == 0) {
    news.value = res.data.data.articles
  } else {
    ElMessage.error('Failed to get news')
  }
}
const RouterDetail = (id: string) => {
  router.push({
    path: '/news/detail',
    query: {
      id
    }
  })
}
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  GetNews()
  loading.value = false
})
</script>
<template>
  <div v-loading.fullscreen.lock="loading" v-if="news" class="home_view">
    <div>
      <div class="child_top">
        <div class="bg">
          <div class="child_top_title">Current News</div>
        </div>
      </div>
      <div class="container">
        <div class="news" v-for="(item, index) in news" :key="index">
          <div class="news_title">
            {{ item.webTitle }}
          </div>
          <div class="assemble">
            <!-- <div class="news_author" v-if="item.author">
              author : {{ item.author }}
            </div>
            <span v-if="item.author">|</span> -->
            <div class="news_webPublicationDate">
              {{ item.webPublicationDate }}
            </div>
          </div>
          <div class="news_description">
            {{ item.trailText }}
          </div>
          <!-- <div class="news_content" v-html="item.content"></div> -->
          <div class="news_url">
            <div class="news_url" @click="RouterDetail(item.id)">
              Read the original
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home_view {
  background: #f1f7f4;
  .child_top {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg {
      max-width: 1720px;
      width: 100%;
      background: url('@/assets/images/2941722852588_.pic.jpg') no-repeat center
        center;
      background-size: cover;
      height: 700px;
      display: flex;
      align-items: end;
      position: relative; /* 添加 position: relative; 以便伪元素可以相对于 .bg 定位 */
      box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.5);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 400px; /* 阴影的高度 */
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0)
        ); /* 从底部到顶部的渐变 */
        pointer-events: none; /* 确保阴影层不影响点击事件 */
      }

      .child_top_title {
        position: absolute;
        z-index: 1;
        font-size: 59px;
        margin-left: 240px;
        margin-bottom: 60px;
        color: #6832c5;
      }
    }
  }
  .container {
    font-family: 'Source Serif Pro', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 151%;
    color: #69727d;
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 0 44px;
    margin-top: 50px;
    padding-bottom: 50px;
    .news {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .news_content {
      color: #181818;
    }
    .news_title {
      color: #6832c5;
      color: rgba(0, 0, 0);
      font-family: Marsek;
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 149.303%; /* 59.721px */
    }
    .assemble {
      display: flex;
      gap: 10px;
      font-size: 17px;
      color: #00a1df;
    }
    .news_url {
      margin-top: 5px;
      font-size: 18px;
      text-decoration: underline; // 去掉下划线
      color: #6832c5;
    }
  }
}
@media (max-width: 840px) {
  .home_view {
    .child_top {
      .bg {
        height: 420px;
        .child_top_title {
          font-size: 49px;
          margin-left: 60px;
        }
      }
    }
    .container {
      font-size: 16px;
      line-height: 121%;
      gap: 18px;
      .news {
        display: flex;
        gap: 8px;
      }
      .news_title {
        font-size: 22px;
        line-height: 121%;
      }
      .assemble {
        gap: 0px;
        font-size: 12px;
      }
      .news_url {
        margin-top: 2px;
        font-size: 14px;
      }
    }
  }
}
</style>
