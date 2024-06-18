<script setup lang="ts" name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">Our Story</div>
      </div>
    </div>
    <div class="container">
      <div class="OurStoryArticle">
        <div class="OurStoryArticlegap">
          <div class="OurStoryArticle_text_big">A Contrarian Voice</div>
          <div class="OurStoryArticle_text">
            Founded in 2015 by a team of seasoned political scientists and
            regional experts, EAIR was born out of a conviction that
            conventional wisdom often fails to capture the nuances and
            undercurrents driving events in this pivotal part of the world.
            Rejecting the mainstream narratives, EAIR vows to offer insightful
            and unconventional analysis that challenges the status quo and sheds
            light on the hidden forces at play. From a modest office in Hong
            Kong, the firm’s founders set out to build a team of analysts with
            deep cultural understanding, linguistic expertise, and a willingness
            to question long-held assumptions. Their mission was to provide
            clients with a unique vantage point, one that went beyond the
            headlines and delved into the complex interplay of history,
            ideology, and power dynamics that shapes the region’s geopolitical
            landscape.
          </div>

          <div class="OurStoryArticle_text_big">
            Navigating the Complexities of East Asia
          </div>
          <div class="OurStoryArticle_text">
            As EAIR has grown, so has its reputation for delivering incisive
            analysis that often ran counter to prevailing narratives. Whether
            examining the intricate web of alliances and rivalries in the South
            China Sea, the shifting sands of domestic politics in Japan and
            South Korea, or the long-term implications of China’s rise, EAIR
            reports are prized for their intellectual rigor and unconventional
            thinking.The firm’s analysts were not afraid to challenge
            conventional wisdom, often offering contrarian perspectives that
            forced clients to rethink their assumptions. Their reports delve
            into the cultural and historical contexts that underpinned political
            decisions, shedding light on the hidden motivations and unspoken
            agendas that drive events in the region.
          </div>

          <div class="OurStoryArticle_text_big">
            A Trusted Voice in Uncertain Times
          </div>
          <div class="OurStoryArticle_text">
            Over the years, EAIR has established itself as a trusted voice in an
            increasingly uncertain world. Its client base has expanded to
            include multinational corporations, governments, and international
            organizations, all seeking to navigate the complex geopolitical
            landscape of East Asia.The firm’s success can be attributed to its
            unwavering commitment to intellectual honesty, its deep
            understanding of the region’s cultural and historical nuances, and
            its willingness to challenge conventional thinking. In an era of
            rapid change and shifting power dynamics, EAIR has become a beacon
            of insight, offering a unique perspective that helps clients make
            informed decisions and stay ahead of the curve. Today, with offices
            in key cities across the Asia-Pacific, EAIR remains true to its
            founding principles, providing insightful and unconventional
            analysis that illuminates the hidden forces shaping the future of
            East Asia.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.OurStoryArticlegap {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
      background: url('@/assets/images/OurStory.jpg') no-repeat center center;
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
    font-size: 23px;
    font-weight: 400;
    line-height: 151%;
    color: #69727d;

    .OurStoryArticle {
      padding: 70px 20px 90px 20px;
    }

    .OurStoryArticle_text_big {
      margin-top: 20px;
      color: #3a5dae;
      font-family: 'Source Serif Pro', Sans-serif;
      font-size: 35px;
      font-weight: 700;
      line-height: 31px;
    }
  }
}
@media (max-width: 840px) {
  .OurStoryArticlegap {
    gap: 15px;
  }
  .home_view {
    .child_top {
      .bg {
        height: 420px;
        .child_top_title {
          font-size: 48px;
          margin-left: 24%;
          margin-bottom: 50px;
        }
      }
    }
    .container {
      font-size: 18px;
      line-height: 151%;

      .OurStoryArticle {
        padding: 40px 15px 90px 15px;
      }

      .OurStoryArticle_text_big {
        margin-top: 20px;

        font-size: 30px;
      }
    }
  }
}
</style>
