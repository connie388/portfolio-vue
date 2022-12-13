<template>
  <div>
    <h4>Check Out My Skills</h4>
    <div v-for="skill in PROFILE.SKILLS" :key="skill">
      <div class="flex flex-col">
        <div class="container mx-auto px-5 py-10">
          <div
            class="relative rounded-md border-2 border-gray-300 dark:border-white"
          >
            <div
              class="m-3 grid xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4"
            >
              <div
                v-for="skilltype in PROFILE[skill.name]"
                :key="skilltype"
                class="flex justify-center items-center"
              >
                <a :href="`${skilltype.link}`" target="_blank" class="flex">
                  <span
                    class="relative rounded-full bg-sky-100 hover:bg-sky-300 dark:bg-white dark:hover:bg-yellow-300 p-4 mb-1"
                  >
                    <img
                      :src="require(`@/assets/icons/${skilltype.img}`)"
                      class="object-fit h-10 w-10"
                    />
                    <!-- <p class="text-xs">
                      {{ skilltype.title }}
                    </p> -->
                  </span>
                </a>
              </div>
            </div>
            <!-- refer to stackoverflow tailwind-css-align-text-in-center-of-border-on-element -->
            <h2
              class="absolute flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span class="bg-gray-200 text-black font-bold px-2 text-sm">
                {{ skill.name }}</span
              >
            </h2>
          </div>
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
