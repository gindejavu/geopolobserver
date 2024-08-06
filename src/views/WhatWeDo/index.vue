<script setup lang="ts" name="HomeView">
import { ref } from 'vue'

const WhatWeDoyArticle_icon = ref([
  {
    src: '/src/assets/svgs/TheEarth.svg',
    text: 'POLICY ANALYSIS'
  },
  {
    src: '/src/assets/svgs/idea.svg',
    text: 'POLITICAL ADVISORY'
  },
  {
    src: '/src/assets/svgs/Barchart.svg',
    text: 'COMMUNICATIONS STRATEGY'
  },
  {
    src: '/src/assets/svgs/Brokenline.svg',
    text: 'POLITICAL TECHNOLOGY'
  }
])
</script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">what we do</div>
      </div>
    </div>
    <div class="container">
      <div class="WhatWeDoyArticle">
        <div class="WhatWeDoy_title">politics first</div>
        <div class="WhatWeDoyArticle_text_biggap">
          <div class="WhatWeDoyArticle_text_big">
            Figuring out how politics affects your business is what we do— all
            day, every day.
          </div>
          <div class="WhatWeDoyArticle_text">
            GPOR provides the marketplace with a comprehensive and integrated
            set of political risk solutions. Our clients range from macro hedge
            funds to institutional investors, from family businesses to the
            world’s largest multinational corporations. What they all share is a
            desire to better manage the risks and opportunities that flow from
            politics.
          </div>

          <div class="WhatWeDoyArticle_text">
            We take a structured approach to understanding these challenges. We
            provide our clients with both qualitative and quantitative tools to
            anticipate and manage political risks, and to profit from them. Our
            multi-faceted approach allows us to adapt to the rapidly evolving
            world of geopolitics.
          </div>
          <div class="WhatWeDoyArticle_text">
            Our diverse set of GPOR Group capabilities include:
          </div>
        </div>
        <div
          class="WhatWeDoyArticle_icons"
          v-for="(item, index) in WhatWeDoyArticle_icon"
          :key="index"
        >
          <div class="WhatWeDoyArticle_icon">
            <img :src="item.src" alt="" />
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.WhatWeDoyArticle_text_biggap {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.WhatWeDoy_title {
  font-size: 110px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 80px;
}

.WhatWeDoyArticle_icon {
  display: flex;
  gap: 20px;
  margin-top: 25px;

  color: #00a1df;
  font-family: 'Aldrich', Sans-serif;
  font-size: 20px;
  text-transform: uppercase;
}
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
      background: url('@/assets/images/whatWeDo.jpg') no-repeat center center;
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
        z-index: 2;
        font-size: 59px;
        margin-left: 240px;
        margin-bottom: 60px;
        color: #6832c5;
      }
    }
  }
  .container {
    font-family: 'Source Serif Pro', Sans-serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 151%;
    color: #69727d;

    .WhatWeDoyArticle {
      padding: 70px 20px 90px 20px;
    }

    .WhatWeDoyArticle_text_big {
      color: #6832c5;
      font-family: 'Source Serif Pro', Sans-serif;
      font-size: 35px;
      font-weight: 700;
      line-height: 31px;
    }
  }
}

@media (max-width: 840px) {
  .WhatWeDoyArticle_text_biggap {
    gap: 20px;
  }
  .WhatWeDoy_title {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .WhatWeDoyArticle_icon {
    gap: 15px;
    margin-top: 25px;
    font-size: 16px;
  }
  .home_view {
    .child_top {
      .bg {
        height: 420px;

        .child_top_title {
          font-size: 48px;
          margin-left: 12%;
          margin-bottom: 50px;
        }
      }
    }
    .container {
      font-size: 18px;

      .WhatWeDoyArticle {
        padding: 40px 15px 90px 15px;
      }

      .WhatWeDoyArticle_text_big {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
