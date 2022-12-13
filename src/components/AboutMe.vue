<template>
  <div class="flex h-screen w-full place-content-center items-center">
    <div
      class="lg:m-20 lg:p-20 md:m-15 md:p-15 sm:m-10 sm:p-10 m-5 p-5 rounded-md border-2 shadow-lg border-gray-300 dark:border-white"
    >
      <div class="md:block lg:flex">
        <div class="md:w-full flex justify-center align-center lg:w-1/3">
          <img
            class="object-cover h-48 w-48"
            :src="require(`@/assets/images/${PROFILE.IMAGE_URL}`)"
            alt="Personal Photo"
          />
        </div>
        <div class="md:w-full lg:w-2/3 text-left m-5">
          {{ PROFILE.DESCRIPTION }}
        </div>
      </div>
    </div>
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
