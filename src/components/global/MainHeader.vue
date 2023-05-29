<template>
  <button class="burger-button" @click="toggleSide">
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      class="dh di c6 cf"
    >
      <path
        d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"
      ></path>
    </svg>
  </button>
  <SideHeader @close="toggleSide" :sideHeader="sideHeader">
    <div class="sideMenu">
      <div class="sideMenu-content">
        <div class="sideMenu-body">
          <div class="sideMenu-body-top">
            <div class="sideMenu-body-top-img">
              <img
                src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1685420181&amp;Signature=d4wz6RW72xzm9mTzduAQQBnMak-Kbk93s1s26ZMEkny0WfMbf68EPfGmlxrO3-vQSorb2NuzjRM1VcxDLDdVvhL~rtQK5lCEycNNImoe2bubfq9fPio8ctr~qPboOVxmNflYDyYWUH~00w4H-xDhKEOnSLbB58YN2PgsviJXnzelRhWLGifI6Vd7rnB23kMShOG2EoRVFNHW-77yo6FBB2l3oR89jk6Gdv1VBf-u5KsaCJf-hX106zU6M~1p-74o6rkKrj1eOXp5nzsk1G1Jvp11byJ7DzLvapt1WvZ8F15yavhehkR10TvV5zLQ3xC~RzH5INTdFDyUiQBKJERtRA__&amp;Key-Pair-Id=K36LFL06Z5BT10"
                alt=""
              />
            </div>
            <div class="spacer--16"></div>
            <div class="sideMenu-body-top-content">
              <div class="sideMenu-body-top-content-name">Thomas</div>
              <div class="sideMenu-body-top-content-setting">
                Gérer le compte
              </div>
            </div>
          </div>
          <div class="sideMenu-body-mid">
            <ul>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="ca cb cc cd"
                >
                  <path
                    d="M4.5 2.833v18.333l4.583-2.5 2.917 2.5 2.917-2.5 4.583 2.5V2.833h-15zM16.167 9.5H7.833V7h8.334v2.5z"
                  ></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Commandes</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="ca cb cc cd"
                >
                  <path
                    d="M17 3c-2.2 0-3.8 1.2-5 2.5C10.8 4.3 9.2 3 7 3 3.5 3 1 5.9 1 9.5c0 1.8.7 3.4 2 4.5l9 8.5 9-8.5c1.2-1.2 2-2.7 2-4.5C23 5.9 20.5 3 17 3z"
                  ></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Favoris</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="ca cb cc cd"
                >
                  <path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3z"></path>
                  ,
                  <path d="M1 4v4h7.12l3 3h1.76l3-3H23V4H1z"></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Wallet</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="ca cb cc cd"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7.833c-.667 0-1.334.166-1.917.5L6.5 4.749C8 3.583 9.917 2.916 12 2.916s4 .667 5.5 1.833l-3.583 3.584a3.871 3.871 0 00-1.917-.5zm3.666 6.083c.334-.583.5-1.25.5-1.917 0-.666-.166-1.333-.5-1.916l3.584-3.584c1.166 1.5 1.833 3.417 1.833 5.5 0 2.084-.666 4-1.833 5.5l-3.584-3.583zm-1.75 1.75c-.583.333-1.25.5-1.916.5a3.872 3.872 0 01-1.917-.5L6.5 19.25c1.5 1.167 3.417 1.834 5.5 1.834s4-.667 5.5-1.834l-3.583-3.583zM2.834 12c0-2.083.667-4 1.834-5.5l3.583 3.584c-.333.583-.5 1.25-.5 1.916 0 .667.167 1.334.5 1.917L4.667 17.5C3.5 16 2.833 14.083 2.833 12z"
                  ></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Aide</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="ca cb cc cd"
                >
                  <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Promotions</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 25"
                  class="ca cb cc cd"
                >
                  <g clip-path="url(#clip0_3824:18756)">
                    <path
                      d="M5.12 9.15a5.2 5.2 0 01-1.77-1.22L1.5 11c.61.465 2.05 1 2.05 1a9.489 9.489 0 003.43.62 8.32 8.32 0 003.33-.66 7.66 7.66 0 002.71-1.87V22.5h3v-20h-3v1A7.09 7.09 0 0112.6 6a5.8 5.8 0 01-1.21 1.93 5.48 5.48 0 01-1.8 1.25 5.7 5.7 0 01-2.19.43 5.93 5.93 0 01-2.28-.46z"
                    ></path>
                    <path
                      d="M12 23.5a11 11 0 110-22 11 11 0 010 22zm0-19a8 8 0 100 16 8 8 0 000-16z"
                    ></path>
                    <path
                      d="M5.12 9.15a5.2 5.2 0 01-1.77-1.22L1.5 11c.61.465 2.05 1 2.05 1a9.489 9.489 0 003.43.62 8.32 8.32 0 003.33-.66 7.66 7.66 0 002.71-1.87V22.5h3v-20h-3v1A7.09 7.09 0 0112.6 6a5.8 5.8 0 01-1.21 1.93 5.48 5.48 0 01-1.8 1.25 5.7 5.7 0 01-2.19.43 5.93 5.93 0 01-2.28-.46z"
                    ></path>
                    <path
                      d="M12 23.5a11 11 0 110-22 11 11 0 010 22zm0-19a8 8 0 100 16 8 8 0 000-16z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3824:18756">
                      <path
                        transform="translate(0 .5)"
                        d="M0 0h24v24H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <div class="spacer--16"></div>
                <p>Uber One</p>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 20 20"
                  class="ca cb cc cd"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.875 0c.7 0 1.342.267 1.825.708L10 1.892 11.3.708A2.698 2.698 0 0113.125 0a2.714 2.714 0 012.709 2.708 2.74 2.74 0 01-.425 1.459h2.925V10H11.25V4.167h-2.5V10H1.667V4.167h2.925a2.74 2.74 0 01-.425-1.459A2.714 2.714 0 016.875 0zM8.75 12.5H1.667v5.833H8.75V12.5zm2.5 5.833h7.084V12.5H11.25v5.833z"
                  ></path>
                </svg>
                <div class="spacer--16"></div>
                <p>Invitez des amis</p>
              </li>
            </ul>
          </div>
          <div class="sideMenu-body-bot">
            <button>Déconnexion</button>
          </div>
        </div>
        <hr class="divider" />
        <div class="sideMenu-foot">
          <div class="sideMenu-foot-top">
            <a href="">Créez un compte professionnel</a>
            <a href="">Ajoutez votre restaurant</a>
            <a href="">Devenez coursier-partenaire</a>
          </div>
          <div class="sideMenu-foot-mid">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg"
              alt=""
            />
            <div class="spacer--16"></div>
            <p>Plus de fonctionnalités dans l'application.</p>
          </div>
          <div class="sideMenu-foot-bot">
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="cs f0 cc cd"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"
                ></path>
              </svg>
              <div class="spacer--8"></div>
              iPhone
            </a>
            <div class="spacer--8"></div>
            <a href="">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                class="cs f0 cc cd"
              >
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z"
                  ></path>
                  <path
                    d="M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z"
                  ></path>
                </g>
              </svg>
              <div class="spacer--8"></div>
              Android
            </a>
          </div>
        </div>
      </div>
    </div>
  </SideHeader>
  <div class="spacer--32"></div>
  <img
    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
    alt="logo"
  />
  <div class="spacer--40"></div>
  <div class="switch-button">
    <input class="switch-button-checkbox" type="checkbox" />
    <label class="switch-button-label" for=""
      ><span class="switch-button-label-span">Livraison</span></label
    >
  </div>
  <div class="spacer--16"></div>
  <button type="button" @click="toggleModal" class="adress">
    <div class="icon">
      <svg
        width="16px"
        height="24px"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Livrer à l'adresse"
        role="img"
        focusable="false"
      >
        <path
          d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
          fill="#000000"
        ></path>
      </svg>
    </div>
    <div class="adress--delivery">11 Rue de Rayssac</div>
    <span> • </span>
    <div class="delivery-time">Maintenant</div>
  </button>
  <AdressModal @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <h2>Détails de la livraison</h2>
      <div class="modal-content-body">
        <div class="modal-content-body-item">
          <div class="modal-content-body-item-icon">
            <svg
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="modal-content-body-item-content f">
            <div>11 Rue de Rayssac</div>
            <div>Albi</div>
          </div>
          <button class="modal-content-body-item-button">Modifier</button>
        </div>
        <div class="modal-content-body-item">
          <div class="modal-content-body-item-icon">
            <svg
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Date"
              role="img"
              focusable="false"
            >
              <path
                d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="modal-content-body-item-content f">
            <div>Maintenant</div>
          </div>
          <button class="modal-content-body-item-button">Planifier</button>
        </div>
      </div>
    </div>
  </AdressModal>
  <div class="spacer--64"></div>
</template>

<script>
import { ref } from "vue";
import AdressModal from "./AdressModal.vue";
import SideHeader from "./SideHeader.vue";
export default {
  name: "MainHeader",
  components: { AdressModal, SideHeader },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      if (modalActive.value === true) {
        document.body.style.position = "";
        modalActive.value = !modalActive.value;
      } else {
        document.body.style.position = "fixed";
        modalActive.value = !modalActive.value;
      }
    };

    const sideHeader = ref(true);

    const toggleSide = () => {
      if (sideHeader.value === true) {
        document.body.style.position = "";
        sideHeader.value = !sideHeader.value;
      } else {
        document.body.style.position = "fixed";
        sideHeader.value = !sideHeader.value;
      }
    };

    return { modalActive, toggleModal, sideHeader, toggleSide };
  },
};
</script>

<style lang="scss">
.modal-content {
  &-body {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    font-size: 14px;
    width: 458px;

    &-item {
      display: flex;
      flex-direction: row;
      padding: 0.5rem;

      &:first-child {
        border-bottom: 1px solid #eee;
      }

      &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1rem;

        &:first-child > div {
          font-weight: 700;
        }
      }

      &-button {
        background: #eee;
        border: none;
        border-radius: 50px;
        color: black;
        padding: 0 0.8rem;
        cursor: pointer;

        &:hover {
          background: #e0e0e0;
        }
      }

      &-icon {
        width: 30px;
        height: 30px;
        padding: 10px;
      }
    }
  }
}

.sideMenu {
  width: 300px;
  height: 100vh;
  background: #fff;

  &-content {
    color: #000000;
    padding: 1.3rem;
  }

  &-body {
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      &-img {
        width: 48px;
        height: 48px;
        border-radius: 500px;
        overflow: hidden;

        & > img {
          width: 48px;
          height: 48px;
        }
      }

      &-content {
        &-name {
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
        }

        &-setting {
          color: #048848;
          font-size: 14px;
          font-weight: 500;
          line-height: 16px;
        }
      }
    }

    &-mid > ul {
      list-style: none;
      padding: 0;
      margin: 0;

      & li {
        display: flex;
        flex-direction: row;
        padding-top: 24px;
        align-items: center;

        & svg {
          width: 20px;
          height: 20px;
        }

        & p {
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          margin: 0;
        }
      }
    }

    &-bot {
      padding-top: 24px;
      display: flex;
      flex-direction: row;

      button {
        color: rgb(107, 107, 107);
        padding: 12px 0px;
        font-size: 16px;
        font-weight: 500;
        border: 0;
        background: none;
      }
    }
  }

  &-foot {
    padding: 0.6rem 0;

    &-top {
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        margin: 12px 0px;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        color: #000000;

        &:visited {
          color: #000000;
        }
      }
    }

    &-mid {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 14px;

      img {
        border-radius: 15%;
        width: 56px;
        height: 56px;
      }

      p {
        line-height: 20px;
        font-size: 16px;
        font-weight: 500;
        margin: 0;
      }
    }

    &-bot {
      margin-top: 16px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;

      a {
        color: #000000;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        border-radius: 500px;
        background: #eeeeee;
        padding: 12px;

        svg {
          height: 16px;
          width: 16px;
          fill: #000;
        }
      }
    }
  }
}

img {
  width: 146px;
  height: 24px;
}

.burger-button {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  border-width: 0;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
}

.adress {
  padding: 4px 12px;
  height: 48px;
  width: 260px;
  border-radius: 500px;
  line-height: 16px;
  font-size: 14px;
  background: #eeeeee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: #000000;
  border: none;

  .icon {
    height: 24px;
    width: 16px;
  }

  .adress--delivery {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .delivery-time {
    white-space: nowrap;
  }
}

.search-bar {
  display: flex;
  background-color: #eee;
  width: 560px;
  border-radius: 500px;

  .search-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px 8px;
    font-size: 16px;
    color: #000000;
  }

  input {
    width: 100%;
    outline: none;
    background-color: rgb(238, 238, 238);
    padding: 0;
    border: 0;
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
  }
}

.switch-button {
  background: #eee;
  border-radius: 30px;
  height: 48px;
  overflow: hidden;
  width: 120px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: black;
  position: relative;
  padding: 4px 150px 4px 4px;

  &:before {
    content: "A emporter";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(146px);
      transition: transform 300ms linear;
    }

    & + .switch-button-label {
      position: relative;
      padding: 15px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: #fff;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}

.divider {
  margin: 12px -24px;
  background-color: rgb(226, 226, 226);
  border: none;
  height: 1px;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
}
</style>