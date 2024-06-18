<script setup lang="ts" name="HomeView"></script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">Our Values</div>
      </div>
    </div>
    <div class="container">
      <div class="OurValuesArticle">
        <div class="OurValuesArticle_text1" style="margin-bottom: 45px">
          At EAIR, our mission is to provide the tools and understanding needed
          in a world where politics drives disruption. We put
          <span class="text_bold">politics first</span> for our clients, and we
          aspire to be the leading place people come to find out about the
          world. This requires us to maintain a company culture that puts
          <span class="text_bold"> people first. </span> We are committed to
          fostering an environment that is inclusive, empowering and
          globally-minded. We firmly believe that diversity in gender, race,
          ethnicity, sexual orientation, cultural background, religion,
          disability and age brings ideas and perspectives to the table that
          make our analysis stronger for our clients and make our company a
          better place to work for our people. Our leadership team is committed
          to embedding diversity and inclusion into everything we do and how we
          lead.
        </div>
        <div class="OurValuesArticle_title">OUR VALUES</div>
        <div class="OurValuesArticle_text2">
          <p>
            we are endlessly <span class="text_bold">curious</span> about how
            the world works. and doesn’t.
          </p>

          <p>
            <span class="text_bold">independence</span> and
            <span class="text_bold">rigor</span> define our work.
          </p>

          <p>
            we’re <span class="text_bold">irreverent.</span> authentic and
            direct but never mean.
          </p>

          <p>
            we are intellectually <span class="text_bold">fearless</span> and
            <span class="text_bold">creative</span> for our clients and
            ourselves.
          </p>
          <p>
            we <span class="text_bold">care.</span> a lot. about the work and
            the people who do it.
          </p>
        </div>
        <div class="OurValuesArticle_title">OUR VALUES</div>

        <div style="display: flex; flex-direction: column; gap: 45px">
          <div class="OurValuesArticle_text_big">Agenda-free point of view</div>
          <div class="OurValuesArticle_text">
            We provide actionable analysis that is free of bias.
          </div>

          <div class="OurValuesArticle_text_big">Conviction</div>
          <div class="OurValuesArticle_text">
            We stand firmly behind our views.
          </div>

          <div class="OurValuesArticle_text_big">Progress</div>
          <div class="OurValuesArticle_text">
            We build on our successes and learn from our mistakes to continually
            improve our product.
          </div>

          <div class="OurValuesArticle_text_big">Transformational impact</div>
          <div class="OurValuesArticle_text">
            We offer insights that deepen people’s understanding of the market
            implications of politics, transforming the way they think about
            their most important decisions.
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
      background: url('@/assets/images/OurValues.jpg') no-repeat center center;
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

    .OurValuesArticle {
      padding: 60px 20px 90px 20px;
    }
    .OurValuesArticle_title {
      text-align: center;
      color: #6832c5;
      font-family: 'Aldrich', Sans-serif;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 50px;
    }
    .OurValuesArticle_text2 {
      display: flex;
      flex-direction: column;
      gap: 45px;
    }
    .OurValuesArticle_text_big {
      color: #3a5dae;
      font-family: 'Source Serif Pro', Sans-serif;
      font-size: 27px;
      font-weight: 700;
      line-height: 31px;
    }
  }

  .text_bold {
    font-weight: 600;
  }
}
</style>
