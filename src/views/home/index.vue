<script setup lang="ts" name="HomeView">
import { ref } from 'vue'
import arrow from '@/assets/svgs/Arrow.svg'
import { ElMessage } from 'element-plus'
const checked = ref(false)
const input = ref('')
const select = ref('')
const Partners_top_content_item = ref([
  '/src/assets/images/Partners_top_content1.png',
  '/src/assets/images/Partners_top_content2.png',
  '/src/assets/images/Partners_top_content3.png',
  '/src/assets/images/Partners_top_content4.png',
  '/src/assets/images/Partners_top_content5.png',
  '/src/assets/images/Partners_top_content6.png'
])

const inputButtonClick = () => {
  console.log(input.value)
  if (!checked.value) {
    ElMessage.error(
      'Please read, understand and agree to the Privacy Policy and Terms of Use'
    )
  }
  if (input.value.trim() === '') {
    ElMessage.error('Please enter your email')
  }
}
</script>
<template>
  <div class="home_view">
    <div class="container">
      <div class="top_Tariffs">
        <div class="top_Tariffs_left">
          <div class="top_Tariffs_left_title">
            The Three Legged Stool:
            <span>Tariffs, Security, Subsidies.</span>
            Will US Strategy for China Competition Work?
          </div>
          <div class="top_Tariffs_left_button_f">
            <div class="top_Tariffs_left_button">Learn More</div>
            <div class="top_Tariffs_left_button">Contact Us</div>
          </div>
        </div>
        <div class="top_Tariffs_right">
          <img src="@/assets/images/top_Tariffs_right.png" alt="" />
        </div>
      </div>
      <div class="Our_Beloved_Partners">
        <div class="Our_Beloved_Partners_top">
          <div class="Partners_top_title">OUR BELOVED PARTNERS</div>
          <div class="Partners_top_content">
            <div
              class="Partners_top_content_item"
              v-for="(item, index) in Partners_top_content_item"
              :key="index"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </div>
        <div class="Our_Beloved_Partners_bottom">
          <div class="Partners_bottom_title">SUBSCRIBE TO EAIR WEEKLY</div>
          <div class="Partners_bottom_search">
            <div class="Partners_bottom_search_text">
              Sign up now for EAIR weekly, the newsletter for anyone interested
              in global politics, published by EAIR Media.
            </div>
            <div class="Partners_bottom_search_input">
              <el-input v-model="input" placeholder="Email">
                <template #append>
                  <img
                    v-if="input.trim() !== ''"
                    src="@/assets/svgs/off.svg"
                    alt=""
                    @click="input = ''"
                    style="cursor: pointer"
                  />
                  <div class="input_button" @click="inputButtonClick">
                    Subscribe
                  </div>
                </template>
              </el-input>
            </div>

            <el-checkbox
              v-model="checked"
              label="I have read, understand and consent to the Privacy Policy and Terms of Use, including the transfer of my personal data to the United States from my country of residence (if different)."
              size="large"
            />
          </div>
        </div>
      </div>
      <div class="Top_Risks">
        <div class="Top_Risks_left">
          <div class="hexagon">
            <img class="img1" src="@/assets/images/Top_Risks_left1.png" />
          </div>
          <div class="s_hexagon_img">
            <img src="@/assets/images/Top_Risks_left_star1.png" alt="" />
          </div>
          <div class="s_hexagon_img">
            <img src="@/assets/images/Top_Risks_left_star.png" alt="" />
          </div>

          <div class="s_hexagon_img">
            <img src="@/assets/images/Top_Risks_left_star.png" alt="" />
          </div>
        </div>
        <div class="Top_Risks_right">
          <div class="Top_Risks_right_title">TOP RISKS 2024</div>
          <div class="Top_Risks_right_text">LATEST FROM EAIR GROUP:</div>
          <div class="op_Risks_right_botton">
            Read The Risks <img :src="arrow" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home_view {
  background: #f1f7f4;
  .container {
    .top_Tariffs {
      background: radial-gradient(
        34.24% 64.24% at 32.02% 60%,
        #f9fae4e1 50%,
        #f1f7f4 100%
      );
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 99px 0;
      .top_Tariffs_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 836px;
        flex-shrink: 0;
        gap: 21px;
        .top_Tariffs_left_title {
          color: #141414;
          font-family: Poppins;
          font-size: 60px;
          font-style: normal;
          font-weight: 400;
          line-height: 149.303%; /* 89.582px */
          & > span {
            color: #141414;
            font-family: Poppins;
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: 149.303%;
          }
        }
        .top_Tariffs_left_button_f {
          display: flex;
          justify-content: start;
          gap: 27px;
          .top_Tariffs_left_button {
            cursor: pointer;

            width: 202px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-radius: 54px;
            background: #6832c5;
            color: #fff;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 95.255%; /* 19.051px */
            transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1)); /* 对图片进行移动和缩放 */
            transition: 0.2s linear; /* 过渡效果 */
            &:hover {
              --_t: 1.02;
              box-shadow: #6832c57a 0px 1px 16px 0px;
            }
            &:nth-child(2) {
              background: #141414;
              &:hover {
                box-shadow: rgba(16, 16, 16, 0.559) 0px 1px 16px 0px;
              }
            }
          }
        }
      }
      .top_Tariffs_right {
        width: 691px;
        height: 691px;
        flex-shrink: 0;
        border-radius: 220px;
        border: 2px solid #000;
      }
    }
    .Our_Beloved_Partners {
      background: #141414;
      .Our_Beloved_Partners_top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 75px 82px 82px 82px;
        .Partners_top_title {
          color: #fff;
          font-family: Marsek;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 149.303%; /* 59.721px */
          text-transform: capitalize;
        }
        .Partners_top_content {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 51px;
        }
        border-bottom: 2px solid #fff;
      }
      .Our_Beloved_Partners_bottom {
        padding: 84px 82px 82px 82px;

        .Partners_bottom_title {
          display: flex;
          justify-content: center;
          color: #fff;
          font-family: Marsek;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 149.303%; /* 59.721px */
          text-transform: capitalize;
          margin-bottom: 70px;
        }
        .Partners_bottom_search {
          display: flex;
          flex-direction: column;
          gap: 30px;
          .Partners_bottom_search_text {
            color: #fff;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 149.303%; /* 29.861px */
            text-transform: capitalize;
          }
          .Partners_bottom_search_input {
            width: 100%;
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            .el-input {
              width: 100%;
              max-width: 100% !important;
              height: 65px;
              border-radius: 18px !important;
              background: #fff;

              :deep(.el-input__wrapper) {
                box-shadow: none;
                padding: 0 30px;
                border-radius: 16px !important;
              }
              :deep(.el-input__inner) {
                color: #000;
                background: #fff;

                font-family: Poppins;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 95.255%; /* 19.051px */
              }
              :deep(.el-input-group__append) {
                padding: 0;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                background: none;
              }
              .input_button {
                margin-left: 14px;
                cursor: pointer;
                width: 300px;
                height: 65px;
                flex-shrink: 0;
                border-radius: 16px;
                background: #6832c5;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-family: Poppins;
                font-size: 20px;
                font-style: normal;
                font-weight: 600;
                line-height: 95.255%; /* 19.051px */
              }
            }
          }
          .el-checkbox {
            // color: #fff;
            --el-checkbox-text-color: #fff;
            --el-checkbox-checked-text-color: #fff; // 选中时的文字颜色
            align-items: start;

            :deep(.el-checkbox__input) {
              margin-top: 4px;
              width: 21px;
              height: 21px;
              flex-shrink: 0;
              border-radius: 4px;
              background: #fff;
            }
            :deep(.is-checked) {
              --el-checkbox-checked-bg-color: #6832c5;
              --el-checkbox-checked-input-border-color: #6832c5;
            }
            :deep(.el-checkbox__inner) {
              width: 21px;
              height: 21px;
              flex-shrink: 0;
              border-radius: 4px;
              display: flex;

              &::after {
                height: 11px;
                left: 6px;
                width: 5px;
              }
            }
            :deep(.el-checkbox__label) {
              max-width: 1481px;

              font-family: Poppins;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 149.303%; /* 29.861px */
              text-transform: capitalize;
              // 换行
              white-space: wrap;
            }
          }
        }
      }
    }
    .Top_Risks {
      // padding: 133px 82px 180px 40px;
      height: 987px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      // border-radius: 1265px;
      background: #f1f7f4;
      background: radial-gradient(
        54.24% 44.24% at 82.02% 40%,
        #f9fae4 0%,
        #f1f7f4 100%
      );

      .Top_Risks_left {
        position: relative;

        .hexagon {
          width: 660px;
          height: 660px;
          background: url('@/assets/images/Top_Risks_left_star_big.png')
            no-repeat;
          background-size: contain;
        }
        .s_hexagon_img {
          position: absolute;
          top: 0;
          width: 251px;
          height: 251px;
          background: url('@/assets/images/Top_Risks_left4.png') no-repeat;
          background-size: cover;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .s_hexagon_img:nth-child(2) {
          left: -108px;
          top: 192px;
          background: url('@/assets/images/Top_Risks_left3.png') no-repeat;
          background-size: cover;
        }
        .s_hexagon_img:nth-child(3) {
          left: 0px;
          top: 383px;
          background: url('@/assets/images/Top_Risks_left2.png') no-repeat;
          background-size: cover;
        }

        .img1 {
          width: 660px;
          // position: absolute;

          // z-index: 2;
        }
      }

      .Top_Risks_right {
        .Top_Risks_right_title {
          color: #000;
          font-family: Marsek;
          font-size: 60px;
          font-style: normal;
          font-weight: 400;
          line-height: 149.303%; /* 89.582px */
          text-transform: capitalize;
        }
        .Top_Risks_right_text {
          color: #000;
          font-family: Marsek;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 149.303%; /* 59.721px */
          text-transform: capitalize;
          margin-top: 21px;
          margin-bottom: 57px;
        }
        .op_Risks_right_botton {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          gap: 22px;
          width: 300px;
          height: 65px;
          flex-shrink: 0;
          border-radius: 16px;
          background: #6832c5;
          color: #fff;
          font-family: Poppins;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 95.255%; /* 19.051px */
          transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1)); /* 对图片进行移动和缩放 */
          transition: 0.2s linear; /* 过渡效果 */
          &:hover {
            --_t: 1.02;
            box-shadow: #6832c57a 0px 1px 16px 0px;
          }
        }
      }
    }
  }
}
</style>
