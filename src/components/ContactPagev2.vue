<template>
  <div>
    <h4>Get In Touch</h4>
    <div class="flex w-full place-content-center items-center">
      <div>
        <div class="md:block lg:flex">
          <!-- <div class="flex justify-center align-center animate-bounce">
            <img
              :src="require(`@/assets/icons/arrow.png`)"
              class="object-cover h-8 w-8 hover:scale-110"
            />
          </div> -->
          <div
            class="md:w-full flex justify-center align-center lg:w-80 animate-fade-in-right"
          >
            <div
              class="hover:cursor-auto relative w-full lg:w-80 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card"
            >
              <div
                class="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0"
              >
                <div v-for="media in PROFILE.SOCIALMEDIA" :key="media">
                  <img
                    v-if="media.icondark && media.showcontact"
                    :src="require(`@/assets/icons/${media.icondark}`)"
                    class="object-cover h-8 w-8 hover:scale-110"
                  />
                </div>
              </div>

              <div
                class="absolute inset-0 w-full h-full flex justify-center items-center specialeffect z-10 card-back"
              >
                <div class="block text-left">
                  <div class="text-yellow-300 flex">
                    <div>Share Positive Affirmations</div>
                    <img
                      :src="require(`@/assets/icons/star.png`)"
                      class="object-cover h-8 w-8 hover:scale-110"
                    />
                  </div>
                  <div v-for="media in PROFILE.SOCIALMEDIA" :key="media">
                    <div v-if="media.showcontact">
                      {{ media.link }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="md:w-full md:p-5 text-justify lg:m-5 animate-fade-in-left mt-5"
          >
            Whether you have a question, want a quick chat, or just want to say
            hi, you can find me on social media or you can email me at
            {{ PROFILE.EMAIL }}. I will try my best to get back to you.

            <div class="btn-primary">
              <a :href="`mailto:${PROFILE.EMAIL}`" target="_blank" class="flex">
                <img
                  :src="require(`@/assets/icons/hand.png`)"
                  class="object-cover h-8 w-8 hover:scale-110 animate-waving"
                />
                <div class="ml-5">Say Hello</div>
              </a>
            </div>
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
