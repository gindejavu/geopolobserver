<script setup lang="ts" name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">COMMUNICATIONS STRATEGY</div>
      </div>
    </div>
    <div class="container">
      <div class="WhatWeDoyArticle">
        <div class="WhatWeDoy_title">politics first</div>
        <div>
          <div class="WhatWeDoy_titlegap">
            <div class="WhatWeDoyArticle_text_big">Geopolitical Advisory</div>
            <div class="WhatWeDoyArticle_text">
              <p>
                Our geopolitical advisory consultancy specializes in providing
                strategic insights and analysis to help businesses navigate the
                complex political landscape of the East Asian region. We
                understand that geopolitical factors play a crucial role in
                shaping market dynamics, investment decisions, and operational
                strategies in this dynamic region.
              </p>
              <p>
                Through our team of, regional experts, and strategic advisors,
                we offer comprehensive market and political strategy
                communications tailored to your specific needs.
              </p>
            </div>
          </div>
          <div style="display: flex; justify-content: center">
            <img src="@/assets/images/communc.png" alt="" />
          </div>
          <div class="WhatWeDoyArticle_text_biggpa">
            <div class="WhatWeDoyArticle_text_big">
              Scenario Planning and Forecasting
            </div>
            <p>
              GPOR conducts in-depth assessments of the geopolitical risks and
              opportunities in the East Asian markets you operate in or plan to
              enter. Our analysis covers political instability, regulatory
              changes, trade tensions, and other factors that could impact your
              business. This enables you to make informed decisions and mitigate
              potential risks.
            </p>
            <p>
              Our experts leverage their deep understanding of the region’s
              political dynamics to develop realistic scenarios and forecasts.
              We help you anticipate potential shifts in the geopolitical
              landscape and proactively adapt your strategies accordingly. This
              forward-looking approach ensures your business remains resilient
              and agile in the face of uncertainty.
            </p>
            <p>
              Drawing from our extensive network of regional experts and
              policymakers, we provide strategic advisory services to help you
              navigate the complex web of political relationships and
              stakeholder interests in East Asia. Our advisors work closely with
              you to develop tailored strategies that align with your business
              objectives while considering the region’s unique geopolitical
              dynamics.
            </p>
          </div>
          <div class="WhatWeDoyArticle_text_biggpa">
            <div class="WhatWeDoyArticle_text_big">Geopolitical Monitoring</div>
            <p>
              GPOR continuously monitors and analyzes geopolitical developments,
              trends, and events in the East Asian region. We provide regular
              reports and briefings to keep you informed about the latest
              developments and their potential impact on your business
              operations and strategies. This real-time intelligence enables you
              to stay ahead of the curve and make timely decisions.
            </p>
            <p>
              By leveraging our expertise in geopolitical analysis and strategic
              communications, we empower businesses to navigate the intricate
              political landscape of the East Asian region with confidence. Our
              services help you mitigate risks, seize opportunities, and develop
              strategies that align with the region’s unique geopolitical
              dynamics, ensuring long-term success and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.WhatWeDoyArticle_text_biggpa {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 60px;
}
.WhatWeDoy_titlegap {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 80px;
}
.text_bold {
  font-weight: 600;
}
.WhatWeDoy_title {
  font-size: 110px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 90px;
}

.home_view {
  background: #f1f7f4;
  .child_top {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(180deg, #ffffff1a 25%, #000000 67%);

    .bg {
      max-width: 1720px;
      width: 100%;
      background: url("@/assets/images/CommunicationsStrategy.jpg") no-repeat
        top center;
      background-size: cover;
      height: 700px;
      display: flex;
      align-items: end;
      position: relative; /* 添加 position: relative; 以便伪元素可以相对于 .bg 定位 */
      box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.5);

      &::after {
        content: "";
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
    font-family: "Source Serif Pro", Sans-serif;
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
      font-family: "Source Serif Pro", Sans-serif;
      font-size: 35px;
      font-weight: 700;
      line-height: 31px;
    }
  }
}

@media (max-width: 840px) {
  .WhatWeDoyArticle_text_biggpa {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px;
  }

  .WhatWeDoy_titlegap {
    gap: 20px;
    margin-bottom: 30px;
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
          font-size: 36px;
          margin-left: 1%;
          margin-bottom: 50px;
        }
      }
    }
    .container {
      font-size: 18px;

      .WhatWeDoyArticle {
        padding: 40px 15px 90px 15px;
        .WhatWeDoyArticle_text {
          gap: 20px;
        }
      }

      .WhatWeDoyArticle_text_big {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
