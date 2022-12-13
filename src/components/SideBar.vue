<template>
  <div>
    <ul class="invisible md:visible">
      <li v-for="media in socialMedia" :key="media">
        <a :href="`${media.link}`" target="_blank">
          <!-- data-popover-target="popover-default"
        data-popover-placement="left"
      > -->
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
          <div v-if="media.name" class="rotate-90 w-8">
            {{ media.name }}
          </div></a
        >
        <!-- https://flowbite.com/docs/components/popover/ -->
        <!-- add popup explaination -->
        <!-- <div
        data-popover
        id="popover-default"
        role="tooltip"
        class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div class="px-3 py-2">
          <p>{{ media.desc }}</p>
        </div>
        <div data-popper-arrow></div>
      </div> -->
      </li>
    </ul>
    <div class="invisible md:visible vl"></div>
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
<style>
ul {
  position: absolute;
  display: flex;
  right: 0;
  flex-direction: column !important;
  gap: 1rem;
  top: 100px;
  margin-right: 0;
}
.vl {
  border-right: 2px solid gray;
  height: 400px;
  position: relative;
  right: 18px;
  top: 25rem;
}
</style>
