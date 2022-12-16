<template>
  <router-view v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" appear>
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

  created() {
    setTimeout(() => this.$router.push({ path: "/Homepage" }), 4000);
  },
};
</script>
<style>
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
