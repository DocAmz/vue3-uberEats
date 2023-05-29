<template>
  <transition name="modal-animation">
    <div class="modal" v-show="modalActive">
      <transition name="modal-animation-inner">
        <div class="modal-inner" v-show="modalActive">
          <div class="icon-close" @click="close">
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
                d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <!-- Modal content -->

          <slot />
          <button @click="close" type="button" class="modal-button">
            Terminé
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AdressModal",
  props: ["modalActive"],
  setup(prop, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    background: #fff;
    padding: 1rem;

    .icon-close {
      background: #fff;
      cursor: pointer;
      width: 24px;
      height: 24px;
      padding: 4px;
      border-radius: 500px;
      transition: all 0.5s;

      &:hover {
        background: #eee;
      }
    }
  }

  &-button {
    border-width: 0;
    background-color: #000;
    color: #fff;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #1f1f1f;
    }
  }
}
</style>