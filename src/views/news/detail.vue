<script setup lang="ts" name="HomeView">
import { News } from '@/api/news'
import { ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id

const detailData = ref()
const Detail = async () => {
  const res = await News({ id })
  console.log('List', res.data.data.fields)
  if (res.data.code == 0) {
    detailData.value = res.data.data.fields
  } else {
    ElMessage.error(res.data.data.message)
  }
}
onMounted(() => {
  Detail()
})
</script>
<template>
  <div class="home_view" v-if="detailData">
    <div class="child_top">
      <div
        class="bg"
        :style="{ backgroundImage: 'url(' + detailData.thumbnail + ')' }"
      >
        <div class="child_top_title"></div>
      </div>
    </div>
    <div class="container">
      <div class="detail_title">{{ detailData.headline }}</div>
      <div class="detail_lastModified">{{ detailData.lastModified }}</div>
      <div class="detail_trailText">{{ detailData.trailText }}</div>
      <div class="detail_body" v-html="detailData.body"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home_view {
  //   background: #f1f7f4;
  background: radial-gradient(
    114.24% 84.24% at 82.02% 22%,
    #cdf6e1 0%,
    #f1f7f4 100%
  );
  //   C8F6DF
  .child_top {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg {
      max-width: 1720px;
      width: 100%;
      background: no-repeat;
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
    margin-bottom: 20px;
    word-break: break-word;
    font-family: GuardianTextEgyptian, 'Guardian Text Egyptian Web', Georgia,
      serif;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    font-style: normal;
    --source-text-decoration-thickness: 2px;
    color: #69727d;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 15px;

    padding: 0 30px;
    margin-top: 50px;
    .detail_title {
      color: #6832c5;
      font-family: 'GH Guardian Headline', 'Guardian Egyptian Web', Georgia,
        serif;
      font-size: 30px;
      line-height: 1.15;
      font-weight: 500;
      font-style: normal;
      --source-text-decoration-thickness: 4px;
    }
    .detail_lastModified {
      font-size: 16px;
    }
    .detail_trailText {
      font-family: 'GH Guardian Headline', 'Guardian Egyptian Web', Georgia,
        serif;
      font-size: 24px;
      line-height: 1.15;
      font-weight: 500;
      font-style: normal;
      --source-text-decoration-thickness: 3px;
    }
  }
}
@media (max-width: 840px) {
  .home_view {
    .child_top {
      .bg {
        height: 420px;
      }
    }
    .container {
      font-size: 14px;
      line-height: 121%;
      gap: 10px;
      margin-bottom: 40px;
      .detail_title {
        font-size: 26px;
      }
      .detail_lastModified {
        font-size: 13px;
      }
      .detail_trailText {
        font-size: 20px;
      }
    }
  }
}
</style>
