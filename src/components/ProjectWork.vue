<template>
  <div>
    <h4>Check Out My Projects</h4>
    <div v-for="project in PROFILE.PROJECTS" :key="project" class="m-5">
      <article
        :class="[`${project.style}`]"
        class="dark:dark-mode md:block lg:flex justify-center align-center lg:p-20 relative rounded-md border-2 shadow-lg border-gray-300 dark:border-white"
      >
        <!-- Image -->

        <div
          v-if="project.left"
          class="md:block lg:flex md:w-full lg:w-1/2 rounded-xl align-center"
        >
          <div class="mx-auto text-center text-2xl text-white">
            <img
              :src="require(`@/assets/projects/${project.img}`)"
              class="object-cover hover:scale-110"
            />
          </div>
        </div>

        <div class="align-center md:w-full lg:w-1/2">
          <!-- Description  -->
          <div className="p-2 border-b-2 text-left">
            <h6>
              {{ project.description }}
            </h6>
          </div>

          <!-- Tech stack used  -->
          <div class="flex flex-wrap items-center">
            <div v-for="tech in project.technologies" :key="tech">
              <span class="border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                {{ tech.name }}
              </span>
            </div>
          </div>

          <!-- Links  -->
          <div className="flex flex-wrap items-center rounded-b-xl border-t-2">
            <button
              className="border-2 border-gray-600 rounded-2xl text-white shadow-sm p-1 px-2 m-2 bg-white  hover:scale-110"
            >
              <a :href="`${project.live}`" target="_blank">
                <img
                  :src="require(`@/assets/icons/external-link.png`)"
                  class="object-cover h-5 w-5"
              /></a>
            </button>
            <button
              className="border-2 border-gray-600 rounded-2xl  shadow-sm p-1 px-2 m-2 bg-white  hover:scale-110"
            >
              <a :href="`${project.github}`" target="_blank">
                <img
                  :src="require(`@/assets/icons/github-dark.png`)"
                  class="object-cover h-5 w-5"
                />
              </a>
            </button>
          </div>
        </div>

        <div
          v-if="!project.left"
          class="md:block lg:flex md:w-full lg:w-1/2 rounded-xl align-center"
        >
          <div class="mx-auto text-center text-2xl text-white">
            <img
              :src="require(`@/assets/projects/${project.img}`)"
              class="object-cover hover:scale-110"
            />
          </div>
        </div>
      </article>
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
