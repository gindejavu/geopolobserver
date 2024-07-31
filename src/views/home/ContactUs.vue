<script setup lang="ts" name="HomeView">
import { ElMessage } from 'element-plus'

const copyToClipboard = () => {
  const email = 'geopolobserver.c@gmail.com' // 邮箱内容
  navigator.clipboard.writeText(email).then(
    () => {
      ElMessage.success({
        message: 'Email copied to clipboard!',
        type: 'success'
      })
    },
    () => {
      ElMessage.error({
        message: '复制邮箱失败',
        type: 'error'
      })
    }
  )
}
</script>
<template>
  <div class="home_view">
    <div class="child_top">
      <div class="bg">
        <div class="child_top_title">Contact Us</div>
      </div>
    </div>
    <div class="container">
      <div class="OurStoryArticle">
        <div class="OurStoryArticlegap">
          <div class="OurStoryArticle_text">
            GPOR is an online platform focused on global geopolitics and
            international affairs, providing in-depth analysis, expert
            commentary and data support designed to help readers understand
            complex international dynamics. The platform presents users with the
            latest developments and trends in current geopolitics through
            detailed analytical articles, expert insights, feature reports and
            data visualization tools. In addition, Geopol Observer ensures that
            readers are informed of the latest global developments and
            participate in discussions through up-to-date news content and
            interactive community features. Applying this model to your project
            can create a highly professional and real-time geopolitical
            information platform by providing expert analysis, bringing together
            expert views, presenting key data, and facilitating reader
            interaction.
          </div>
          <div class="OurStoryArticle_text_big">
            This is our email:
            <span
              style="color: #3a5dae; cursor: pointer"
              @click="copyToClipboard"
              >geopolobserver.c@gmail.com</span
            >
            <div
              @click="copyToClipboard"
              style="
                display: flex;
                justify-content: center;
                align-items: center;

                cursor: pointer;
              "
            >
              <svg
                t="1722422355545"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4817"
                id="mx_n_1722422355546"
                width="26"
                height="26"
              >
                <path
                  d="M890.197333 41.984H347.178667C296.832 41.984 256 81.194667 256 129.536v75.861333h86.016V156.928c0-16.128 13.610667-29.184 30.378667-29.184h492.16c16.768 0 30.378667 13.056 30.378666 29.184v539.349333c0 7.68-3.2 15.061333-8.96 20.437334a30.378667 30.378667 0 0 1-21.461333 8.149333H733.866667v85.12h156.245333c50.133333 0 90.88-38.826667 91.178667-86.954667V129.536C981.333333 81.194667 940.501333 41.984 890.197333 41.984z"
                  fill="#3a5dae"
                  p-id="4818"
                ></path>
                <path
                  d="M676.864 214.016H133.845333C83.498667 214.016 42.666667 253.226667 42.666667 301.568v75.861333h86.016V328.96c0-16.128 13.610667-29.184 30.378666-29.184h492.16c16.768 0 30.378667 13.056 30.378667 29.184v539.349333c0 7.68-3.2 15.061333-8.96 20.437334a30.378667 30.378667 0 0 1-21.461333 8.149333H520.533333v85.12h156.245334c50.133333 0 90.88-38.826667 91.178666-86.954667V301.568c0.042667-48.341333-40.789333-87.552-91.093333-87.552z"
                  fill="#3a5dae"
                  p-id="4819"
                ></path>
                <path
                  d="M42.709333 301.568v593.493333c0.298667 48.128 41.045333 86.954667 91.178667 86.954667H546.133333v-85.12H159.445333a30.378667 30.378667 0 0 1-21.461333-8.149333 27.946667 27.946667 0 0 1-8.96-20.437334V328.96c0-16.128 13.610667-29.184 30.378667-29.184h492.16c16.768 0 30.378667 13.056 30.378666 29.184v48.469333H768V301.568c0-48.341333-40.832-87.552-91.178667-87.552H133.802667c-50.304 0-91.136 39.210667-91.093334 87.552z"
                  fill="#3a5dae"
                  p-id="4820"
                ></path>
                <path
                  d="M256 384.682667h298.666667a42.666667 42.666667 0 0 1 0 85.333333H256a42.666667 42.666667 0 0 1 0-85.333333zM256 555.349333h298.666667a42.666667 42.666667 0 0 1 0 85.333334H256a42.666667 42.666667 0 0 1 0-85.333334zM256 726.016h298.666667a42.666667 42.666667 0 0 1 0 85.333333H256a42.666667 42.666667 0 0 1 0-85.333333z"
                  fill="#3a5dae"
                  p-id="4821"
                ></path>
              </svg>
            </div>
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
      background: url('@/assets/images/2601722421303_.pic.jpg') no-repeat center
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
    font-size: 23px;
    font-weight: 400;
    line-height: 151%;
    color: #69727d;

    .OurStoryArticle {
      padding: 70px 20px 90px 20px;
    }

    .OurStoryArticle_text_big {
      margin-top: 20px;
      font-family: 'Source Serif Pro', Sans-serif;
      font-size: 30px;
      font-weight: 700;
      line-height: 31px;
      display: flex;
      align-items: center;
      gap: 10px;
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
