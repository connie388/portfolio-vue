<template>
  <div>
    <ul
      class="absolute flex right-0 flex-col gap-4 top-24 mr-0 invisible md:visible"
    >
      <li v-for="media in socialMedia" :key="media">
        <a :href="`${media.link}`" target="_blank">
          <img
            v-if="!isDark && media.icon"
            :src="require(`@/assets/icons/${media.icon}`)"
            class="object-cover h-8 w-8"
          />
          <img
            v-if="isDark && media.icondark"
            :src="require(`@/assets/icons/${media.icondark}`)"
            class="object-cover h-8 w-8"
          />
          <div
            v-if="media.name"
            class="rotate-90 w-8 text-black dark:text-white"
          >
            {{ media.name }}
          </div></a
        >
      </li>
    </ul>
    <!-- <div
      class="invisible md:visible border-r-2 border-black dark:border-white h-72 relative top-[26rem] right-4"
    ></div> -->
  </div>
</template>
<script>
import { PROFILE } from "@/data/data";

export default {
  props: ["isDark", "socialMedia"],
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
    };
  },
};
</script>
