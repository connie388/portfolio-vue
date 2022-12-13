<template>
  <div>
    <div class="flex flex-col">
      <div class="container mx-auto px-5 py-10">
        <div
          class="relative rounded-md border-2 border-gray-300 dark:border-white p-10 grid xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4"
        >
          <div v-for="skill in selectedList" :key="skill">
            <a :href="`${skill.link}`" target="_blank" class="flex">
              <span
                class="relative rounded-full bg-sky-100 hover:bg-sky-300 dark:bg-white dark:hover:bg-yellow-300 p-4 mb-1"
              >
                <img
                  :src="require(`@/assets/icons/${skill.img}`)"
                  class="object-fit h-10 w-10"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PROFILE } from "@/data/data";

export default {
  props: ["selected", "toggle"],
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
      selectedList: [],
    };
  },

  created() {
    // watch the props to fetch the data again
    this.$watch(
      () => this.toggle,
      () => {
        this.selectedList = [];
        PROFILE.SKILLS.forEach((skill) => {
          if (this.selected[skill.name]) {
            this.selectedList = [...this.selectedList, ...PROFILE[skill.name]];
          }
        });
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
};
</script>
