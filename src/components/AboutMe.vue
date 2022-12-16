<template>
  <div class="flex h-screen w-full place-content-center items-center">
    <div class="block">
      <h4>About Me</h4>
      <div>
        <div class="md:block lg:flex">
          <div class="md:w-full flex justify-center align-center lg:w-1/3">
            <img
              class="object-cover h-48 w-48 fade-in-image"
              :src="require(`@/assets/images/${PROFILE.IMAGE_URL}`)"
              alt="Personal Photo"
            />
          </div>

          <div
            class="md:w-full lg:w-2/3 text-justify mt-5 animate-fade-in-left"
          >
            {{ PROFILE.DESCRIPTION }}
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { PROFILE } from "@/data/data";

export default {
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
    };
  },
};
</script>
<style scoped>
.fade-in-image {
  animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
