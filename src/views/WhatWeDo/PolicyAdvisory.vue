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
        <div class="child_top_title">GEOOLITICAL ADVISORY</div>
      </div>
    </div>
    <div class="container">
      <div class="WhatWeDoyArticle">
        <div style="display: flex; flex-direction: column; gap: 50px">
          <div class="WhatWeDoy_title">Management consulting</div>
          <div style="display: flex; flex-direction: column; gap: 40px">
            <div class="WhatWeDoyArticle_text_big">Geopolitical Advisory</div>
            <div class="WhatWeDoyArticle_text">
              Geopolitics has never been more critical to the performance of
              markets, sectors, and companies. As leaders navigate decisions
              around growth strategies, cost optimization, investment
              allocations, and entering or exiting markets, geopolitics
              introduces wild cards that can make or break even the most
              well-crafted plans. EAIR Group provides independent geopolitical
              advisory by tapping into a global network of leading experts and
              unconventional thinkers across disciplines. Our dedicated project
              teams deliver in-depth analysis and foresight that traditional
              in-house teams cannot match.
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 40px">
            <div class="WhatWeDoyArticle_text_big">Key Advisory Services</div>
            <div class="WhatWeDoyArticle_text">
              <p>
                Strategy and Planning Support: We incorporate geopolitical
                scenarios into strategic planning processes, quantifying impacts
                on market opportunities, competitive dynamics, and operational
                risks. Our analysis connects geopolitical dots to tangible
                business implications.
              </p>
              <p>
                Future Trends and Foresight: Boards and leadership teams need to
                balance present performance with future positioning. EAIR
                filters and prioritizes emerging global trends, identifying
                those most relevant to clients’ long-term strategies and
                investments.
              </p>
              <p>
                Deal Diligence: For cross-border transactions, we assess
                political factors impacting deal feasibility, valuation,
                investor treatment, the target’s operating environment, and
                repatriation risks.
              </p>
              <p>
                Risk Monitoring: We tie specific geopolitical risks to
                performance drivers, developing tailored metrics for continuous
                risk awareness. Our monitoring keeps clients ahead of potential
                disruptions.EAIR’s geopolitical advisory leverages our diverse
                team’s multidisciplinary expertise combined with insights from
                an unmatched network of unconventional thinkers across academia,
                intelligence, policymaking, and more. This allows us to
                challenge assumptions and reframe risks through unique lenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.WhatWeDoy_title {
  color: #6832c5;
  font-family: 'Source Serif Pro', Sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 31px;
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
      background: url('@/assets/images/PolicyAdvisory.jpg') no-repeat center
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
    line-height: 29px;
    color: #69727d;

    .WhatWeDoyArticle {
      padding: 70px 20px 90px 20px;
    }
    .WhatWeDoyArticle_text {
      display: flex;

      flex-direction: column;
      gap: 40px;
      line-height: 155%;

      font-family: 'Source Serif Pro', Sans-serif;
      font-size: 23px;
      font-weight: 400;
    }

    .WhatWeDoyArticle_text_big {
      color: #000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      font-size: 35px;
      font-weight: 700;
      line-height: 31px;
    }
  }
}
</style>
