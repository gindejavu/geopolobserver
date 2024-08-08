<script setup lang="ts" name="HomeView">
const handleClick = (url: string) => {
  window.open(url, '_blank')
}
</script>
<template>
  <div class="home_view">
    <div>
      <div class="child_top">
        <div class="bg">
          <div class="child_top_title">Geopolitical Books</div>
        </div>
      </div>
      <div class="container">
        <div
          class="news"
          @click="
            handleClick(
              'https://www.amazon.it/Wokeismo-culture-oicofobia-minacce-civilt%C3%A0/dp/8833374815/ref=sr_1_4?sr=8-4'
            )
          "
        >
          <div class="book_left" style="width: 100px; height: 150px">
            <img src="@/assets/images/b1.jpg" alt="" />
          </div>
          <div class="book_right">
            <div style="display: flex; flex-direction: column; gap: 30px">
              <div
                style="
                  color: #000033;
                  font-family: Montserrat;
                  font-weight: 500;
                  font-size: 14px;
                "
              >
                BOOK&nbsp;
              </div>

              <div>
                <div class="book_title">
                  <div
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin-bottom: 10px;
                    "
                  >
                    Wokeism, cancel culture, oikophobia. Three threats to our
                    civilization
                  </div>
                </div>
                <div class="time">
                  <em>
                    <span style="color: #0093d0"
                      >a cura di Emanuele Mastrangelo&nbsp;&nbsp;</span
                    >
                  </em>
                  <span
                    style="
                      font-family: Work Sans;
                      font-weight: 500;
                      color: #4a4e57;
                    "
                    >febbraio 2024&nbsp;</span
                  >
                </div>
              </div>
            </div>

            <div>
              <span style="color: #000033; font-size: 16px">TOPICS:&nbsp;</span
              ><span style="color: #4a4e57; font-size: 16px" class="xhx"
                >Woke, cancel culture, guerra culturale
              </span>
            </div>
          </div>
        </div>

        <div
          class="news"
          @click="
            handleClick(
              'https://www.amazon.it/Lattualit%C3%A0-del-sovranismo-pandemia-guerra/dp/8833373606/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=28GEYYR09UKGA&keywords=l%27attualit%C3%A0+del+sovranismo&qid=1653571419&s=books&sprefix=l+attualit%C3%A0+del+sovranismo%2Cstripbooks%2C124&sr=1-1'
            )
          "
        >
          <div class="book_left" style="width: 100px; height: 150px">
            <img src="@/assets/images/b2.jpg" alt="" />
          </div>
          <div class="book_right">
            <div style="display: flex; flex-direction: column; gap: 30px">
              <div
                style="
                  color: #000033;
                  font-family: Montserrat;
                  font-weight: 500;
                  font-size: 14px;
                "
              >
                BOOK&nbsp;
              </div>

              <div>
                <div class="book_title">
                  <div
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin-bottom: 10px;
                    "
                  >
                    Topicality of sovereignism. Between pandemic and war
                  </div>
                </div>
                <div class="time">
                  <em>
                    <span style="color: #0093d0"
                      >edited by Daniele Scalea&nbsp;&nbsp;</span
                    >
                  </em>
                  <span
                    style="
                      font-family: Work Sans;
                      font-weight: 500;
                      color: #4a4e57;
                    "
                    >May 2022</span
                  >
                </div>
              </div>
            </div>

            <div>
              <span style="color: #000033; font-size: 16px">TOPICS:&nbsp;</span
              ><span style="color: #4a4e57; font-size: 16px" class="xhx"
                >Sovereigntism, Right, Political Philosophy
              </span>
            </div>
          </div>
        </div>

        <div
          class="news"
          @click="
            handleClick(
              'https://www.amazon.it/Trump-contro-tutti-LAmerica-lOccidente/dp/8833371867'
            )
          "
        >
          <div class="book_left" style="width: 100px; height: 150px">
            <img src="@/assets/images/b3.jpg" alt="" />
          </div>
          <div class="book_right">
            <div style="display: flex; flex-direction: column; gap: 30px">
              <div
                style="
                  color: #000033;
                  font-family: Montserrat;
                  font-weight: 500;
                  font-size: 14px;
                "
              >
                BOOK&nbsp;
              </div>

              <div>
                <div class="book_title">
                  <div
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin-bottom: 10px;
                    "
                  >
                    Trump vs. everyone. America (and the West) at the crossroads
                  </div>
                </div>
                <div class="time">
                  <em>
                    <span style="color: #0093d0"
                      >Stefano Graziosi and Daniele Scalea&nbsp;&nbsp;</span
                    >
                  </em>
                  <span
                    style="
                      font-family: Work Sans;
                      font-weight: 500;
                      color: #4a4e57;
                    "
                    >Sept. 2020&nbsp;</span
                  >
                </div>
              </div>
            </div>

            <div>
              <span style="color: #000033; font-size: 16px">TOPICS:&nbsp;</span
              ><span style="color: #4a4e57; font-size: 16px" class="xhx"
                >USA, Political philosophy, International politics
              </span>
            </div>
          </div>
        </div>

        <div
          class="news"
          @click="handleClick('https://www.amazon.it/gp/product/8833371093')"
        >
          <div class="book_left" style="width: 100px; height: 150px">
            <img src="@/assets/images/b4.jpg" alt="" />
          </div>
          <div class="book_right">
            <div style="display: flex; flex-direction: column; gap: 30px">
              <div
                style="
                  color: #000033;
                  font-family: Montserrat;
                  font-weight: 500;
                  font-size: 14px;
                "
              >
                BOOK&nbsp;
              </div>

              <div>
                <div class="book_title">
                  <div
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin-bottom: 10px;
                    "
                  >
                    Immigration: the reasons of the populists
                  </div>
                </div>
                <div class="time">
                  <em>
                    <span style="color: #0093d0"
                      >Daniele Scalea&nbsp;&nbsp;</span
                    >
                  </em>
                  <span
                    style="
                      font-family: Work Sans;
                      font-weight: 500;
                      color: #4a4e57;
                    "
                    >March 2019&nbsp;</span
                  >
                </div>
              </div>
            </div>

            <div style="display: flex">
              <span style="color: #000033; font-size: 16px">TOPICS:&nbsp;</span
              ><span style="color: #4a4e57; font-size: 16px" class="xhx">
                Immigration, Demography, Economy, Security, Political philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.xhx {
  text-decoration: underline;
  color: #000033;
  font-size: 16px;
}
a {
  //下划线
  text-decoration: underline;
  color: #000033;
  font-size: 16px;
}
.book_left {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
      background: url('@/assets/images/book.jpg') no-repeat center center;
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
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 44px;
    margin-top: 50px;
    padding-bottom: 50px;
    .news {
      display: flex;
      color: #000033;
      font-size: 16px;
      gap: 20px;
      &:hover {
        // background: #000;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.5);
        //过渡

        transition: all 0.3s ease-in-out;
      }
      transition: all 0.3s ease-in-out;
      padding: 15px;
    }
    .book_right {
      display: flex;
      flex-direction: column;
      gap: 30px;
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
      .news {
        display: flex;
        gap: 8px;
      }
    }
  }
}
</style>
