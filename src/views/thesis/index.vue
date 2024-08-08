<script setup lang="ts" name="HomeView">
import { ThesisApi } from '@/api/thesis'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'

const ThesisData = ref()
const GetThesis = async () => {
  const res = await ThesisApi()

  if (res.data.code == 0) {
    ThesisData.value = res.data.data.paper_list
    console.log('re s', res.data)
  } else {
    ElMessage.error('Failed to get thesis')
  }
}
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  GetThesis()
  loading.value = false
})

const handleClick = (url: string) => {
  window.open(url, '_blank')
}
</script>
<template>
  <div v-loading.fullscreen.lock="loading" v-if="ThesisData" class="home_view">
    <div>
      <div class="child_top">
        <div class="bg">
          <div class="child_top_title">Academic Paper</div>
        </div>
      </div>
      <div class="container">
        <div class="thesis" v-for="(item, index) in ThesisData" :key="index">
          <div class="thesis_title">
            {{ item.title }}
          </div>
          <div class="author">
            {{ item.author }}
          </div>
          <div class="thesis_description">
            {{ item.desc }}
          </div>

          <div class="thesis_url">
            <!-- <a :href="item.url">Read the original</a> -->
            <div
              style="color: #6832c5; text-decoration: underline"
              @click="handleClick(item.url)"
            >
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
      background: url('@/assets/images/6441723024982_.pic_hd.jpg') no-repeat
        center center;
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
    .thesis {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .thesis_title {
      color: #6832c5;
      color: rgba(0, 0, 0);
      font-family: Marsek;
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 149.303%; /* 59.721px */
    }
    .author {
      display: flex;
      gap: 10px;
      font-size: 17px;
      color: #00a1df;
    }
    .thesis_url {
      margin-top: 10px;
      font-size: 18px;
      a {
        text-decoration: underline !important; // 下划线
        color: #6832c5;
        //鼠标变小手
      }
      cursor: pointer;
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
      .thesis {
        display: flex;
        gap: 8px;
      }
      .thesis_title {
        font-size: 22px;
        line-height: 121%;
      }
      .author {
        gap: 0px;
        font-size: 12px;
      }
      .thesis_url {
        margin-top: 2px;
        font-size: 14px;
      }
    }
  }
}
</style>
