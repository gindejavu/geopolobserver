<script setup lang="ts" name="HomeView">
import { ref } from 'vue'

const handleClick = (url: string) => {
  window.open(url, '_blank')
}

const data = ref([
  {
    link: 'https://www.amazon.it/Geopolitics-Short-Introduction-Klaus-Dodds/dp/0198830769/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.o8FHCiXwu-H-bEn2ooAe6rCwkchD5-KMG2rqwcJv2ecjmvd7hD9wgIePWqcTSm65jUbv7ZCprsd9qfCrOQXRWLRB24spiFskC58H7yHxKPsebiUqK3dt6DjBtc57sfgK-aawrDcNd83js0ABCsHEVztz8tbO9rApze-AXlbSOH-_U_xFnDPRIYOTu8GEATNn0LOHTxa6d1YiBsdEgoQh49hfJo2lKXTobfd2t1lEKq0.FKrQlsiVSgirCXRoLfAo47pWUXKF92-cfk59mgy3vr8&dib_tag=se&keywords=geopolitics&qid=1723194436&s=books&sr=1-1',
    imgUrl: 'https://m.media-amazon.com/images/I/71ed5o3UFGL._SY466_.jpg',
    title: 'Geopolitics: A Very Short Introduction: A Very Short Introducton',
    author: 'Klaus Dodds',
    time: 'July 25, 2019',
    topics: ['Geopolitics', 'International politics']
  },
  {
    link: 'https://www.amazon.it/Return-Great-Powers-Russia-China/dp/0593474139/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.o8FHCiXwu-H-bEn2ooAe6rCwkchD5-KMG2rqwcJv2ecjmvd7hD9wgIePWqcTSm65jUbv7ZCprsd9qfCrOQXRWLRB24spiFskC58H7yHxKPsebiUqK3dt6DjBtc57sfgK-aawrDcNd83js0ABCsHEVztz8tbO9rApze-AXlbSOH-_U_xFnDPRIYOTu8GEATNn0LOHTxa6d1YiBsdEgoQh49hfJo2lKXTobfd2t1lEKq0.FKrQlsiVSgirCXRoLfAo47pWUXKF92-cfk59mgy3vr8&dib_tag=se&keywords=geopolitics&qid=1723195289&s=books&sr=1-3',
    imgUrl: 'https://m.media-amazon.com/images/I/716uGntAb4L._SY466_.jpg',
    title: 'The Return of Great Powers: Russia, China, and the Next World War',
    author: 'Jim Sciutto',
    time: '12 marzo 2024',
    topics: ['Geopolitics']
  },
  {
    link: 'https://www.amazon.it/Geopolitica-digitale-competizione-globale-controllo/dp/8829023795/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.o8FHCiXwu-H-bEn2ooAe6rCwkchD5-KMG2rqwcJv2ecjmvd7hD9wgIePWqcTSm65jUbv7ZCprsd9qfCrOQXRWLRB24spiFskC58H7yHxKPsebiUqK3dt6DjBtc57sfgK-aawrDcNd83js0ABCsHEVztz8tbO9rApze-AXlbSOH-_U_xFnDPRIYOTu8GEATNn0LOHTxa6d1YiBsdEgoQh49hfJo2lKXTobfd2t1lEKq0.FKrQlsiVSgirCXRoLfAo47pWUXKF92-cfk59mgy3vr8&dib_tag=se&keywords=geopolitics&qid=1723195289&s=books&sr=1-4',
    imgUrl: 'https://m.media-amazon.com/images/I/71L-eu82oiL._SY466_.jpg',
    title:
      'Geopolitica digitale. La competizione globale per il controllo della Rete ',
    author: 'Antonio Deruda',
    time: '22 marzo 2024',
    topics: ['Geopolitics', 'International politics']
  },
  {
    link: 'https://www.amazon.it/Geopolitics-Emotion-Cultures-Humiliation-Reshaping/dp/1847924239/ref=sr_1_5?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.o8FHCiXwu-H-bEn2ooAe6rCwkchD5-KMG2rqwcJv2ecjmvd7hD9wgIePWqcTSm65jUbv7ZCprsd9qfCrOQXRWLRB24spiFskC58H7yHxKPsebiUqK3dt6DjBtc57sfgK-aawrDcNd83js0ABCsHEVztz8tbO9rApze-AXlbSOH-_U_xFnDPRIYOTu8GEATNn0LOHTxa6d1YiBsdEgoQh49hfJo2lKXTobfd2t1lEKq0.FKrQlsiVSgirCXRoLfAo47pWUXKF92-cfk59mgy3vr8&dib_tag=se&keywords=geopolitics&qid=1723195289&s=books&sr=1-5',
    imgUrl: 'https://m.media-amazon.com/images/I/91FfclMyNkL._SY466_.jpg',
    title:
      'The Geopolitics of Emotion: How Cultures of Fear, Humiliation and Hope are Reshaping the World',
    author: 'Dominique Moisi',
    time: '4 luglio 2016',
    topics: ['Geopolitics']
  }
])
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
          v-for="item in data"
          :key="item.link"
          @click="handleClick(item.link)"
        >
          <div class="book_left" style="width: 100px">
            <img :src="item.imgUrl" alt="" />
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
                    {{ item.title }}
                  </div>
                </div>
                <div class="time">
                  <em>
                    <span style="color: #0093d0"
                      >{{ item.author }}&nbsp;&nbsp;</span
                    >
                  </em>
                  <span
                    style="
                      font-family: Work Sans;
                      font-weight: 500;
                      color: #4a4e57;
                    "
                    >{{ item.time }}&nbsp;</span
                  >
                </div>
              </div>
            </div>

            <div>
              <span style="color: #000033; font-size: 16px">TOPICS:&nbsp;</span
              ><span
                style="color: #4a4e57; font-size: 16px"
                class="xhx"
                v-for="topic in item.topics"
                :key="topic"
              >
                {{ topic }}
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
  margin-right: 10px;
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
