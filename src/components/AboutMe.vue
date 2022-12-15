<template>
  <div class="flex h-screen w-full place-content-center items-center">
    <div class="block">
      <h4>About Me</h4>
      <div>
        <div class="md:block lg:flex">
          <div class="md:w-full flex justify-center align-center lg:w-1/3">
            <img
              class="object-cover h-48 w-48 animate-fade-in-right"
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
