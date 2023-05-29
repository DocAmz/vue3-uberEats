<template>
  <transition name="side-animation">
    <div class="side" v-show="sideHeader" @click="close">
      <transition name="side-animation-inner">
        <div class="side-inner" v-show="sideHeader">
          <!-- Side content -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SideHeader",
  props: ["sideHeader"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style lang="scss">
.side {
  position: absolute;
  z-index: 99999;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);

  &-inner {
    position: absolute;
    z-index: 999999;
    top: 0;
    width: 300px;
    height: 100vh;
    background: #fff;
  }
}
</style>