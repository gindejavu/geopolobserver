<script setup lang="ts" name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">POLICY ANALYSIS</div>
      </div>
    </div>
    <div class="container">
      <div class="WhatWeDoyArticle">
        <div class="WhatWeDoy_title">politics first</div>
        <div class="WhatWeDoyArticle_text_biggap">
          <div class="WhatWeDoyArticle_text_big">Political risk advisory</div>
          <div class="WhatWeDoyArticle_text">
            <p>
              Our ability to combine leading political expertise with timely and
              actionable insight for clients is at the core of our value.
            </p>
            <p>
              EAIR analysts leverage deep country and thematic expertise with
              quantitative methodologies to forecast fast-moving risks and
              opportunities. Clients turn to our high-caliber expertise and
              geopolitical foresight to make major business and investment
              decisions around the world.
            </p>
            <p>
              We get to know our clients’ unique interests and concerns. We go
              beyond generic approaches to
              <span class="text_bold"
                >generate value for our clients through direct interaction with
                our analysts.</span
              >
              EAIR analysts work in real time with clients to connect the dots
              between politics and markets and business outcomes. The
              relationship between our clients and analysts is deep, enduring,
              and profitable.
            </p>
            <p>
              What distinguishes EAIR advisory is the unfettered access our
              clients have to analysts—the world’s foremost experts on politics
              and geopolitical risk. We offer impactful, custom advisory with
              in-person meetings, custom briefings, one-on-one video
              conferences, individual phone, email and secure portal
              communication.
            </p>
            <p>We also offer:</p>
            <div>
              <li>Tailored, high-impact executive workshops</li>
              <li>Global, regional, and sector briefings</li>
              <li>Speaking engagements and macro strategy conversations</li>
            </div>
            <p>
              EAIR country and sector expertise is anchored by deep local
              knowledge and global in breadth, spanning Africa, Asia, Eurasia,
              Europe, Latin America, the Middle East, and North America. Our
              analysts also examine global political patterns and transnational
              issues such as trade, international security risk, structural
              reform, populism, cybersecurity, energy and commodities, and
              global health.
            </p>
            <p>
              Our unparalleled
              <span class="text_bold"
                >suite of country, regional, and sector research</span
              >
              gives our clients a leading edge on critical global political and
              industry developments. Our research is delivered daily, customized
              to client needs, and supported by regular conference calls.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.text_bold {
  font-weight: 600;
}
.WhatWeDoy_title {
  font-size: 110px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 80px;
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
      background: url('@/assets/images/PolicyAnalysis.jpg') no-repeat center
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
.WhatWeDoyArticle_text_biggap {
  display: flex;
  flex-direction: column;
  gap: 40px;
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

  .home_view {
    .child_top {
      .bg {
        height: 420px;
        .child_top_title {
          font-size: 48px;
          margin-left: 20%;
          margin-bottom: 50px;
        }
      }
    }
    .container {
      font-size: 18px;

      .WhatWeDoyArticle {
        padding: 40px 15px 90px 15px;
      }
      .WhatWeDoyArticle_text {
        gap: 10px;
        line-height: 155%;
      }
      .WhatWeDoyArticle_text_big {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
