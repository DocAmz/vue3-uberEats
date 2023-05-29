<template>
  <div class="row">
    <div class="row--wrapper">
        <TemplateCard v-for="(card, index) in available_rest" :data_rest="card" :key="index"/>
    </div>
  </div>
  <div class="spacer--40"></div>
</template>

<script>
// import ----------------------
import TemplateCard from './TemplateCard.vue';

export default {
    name: "CardRow",
    components: {
        TemplateCard
    },
    props: {
      available_rest: Array
    }
}
</script>

<style lang="scss">

.row {
 padding: 0 1rem;
 width: 100%;
 margin-bottom: 1rem;

 &--wrapper{
    display: flex;
    justify-content: space-between;
 }
}

</style>