<template>
  <router-view v-slot="{ Component, route }">
    <Transition :name="route.meta.transition">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script>
import { Transition } from "vue";

export default {
  components: {
    Transition,
  },
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
