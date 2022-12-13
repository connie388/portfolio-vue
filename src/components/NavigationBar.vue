<template>
  <div id="divfix">
    <!-- refer to https://larainfo.com/blogs/vue-3-responsive-navbar-menu-with-tailwind-css-example -->
    <nav class="flex-wrap bg-slate-800 dark:bg-yellow-400 p-6 md:h-10 md:p-2">
      <button
        @click="showMenu = !showMenu"
        type="button"
        class="float-right flex md:hidden text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>

      <!-- if showMenu  or screen size is "md", display menu "flex" -->
      <div :class="showMenu ? 'flex' : 'hidden'" class="flex md:flex">
        <div class="w-full block flex-grow md:items-center md:w-auto">
          <div class="block md:flex-grow">
            <button
              @click="isDark = !isDark"
              class="block md:inline-block md:mt-0 mr-4 menu-hover menu-font text-left md:float-left"
            >
              <div class="flex justify-center align-center">
                <span
                  :class="{
                    nightsky: isDark === true,
                    clearsky: isDark === false,
                  }"
                  class="flex align-center justify-center border border-blue-500 rounded-2xl px-2"
                >
                  <span
                    :class="{ nightsky: isDark === true }"
                    class="flex align-center justify-center rounded-2xl"
                  >
                    <img
                      :src="require(`@/assets/icons/dark.png`)"
                      alt="Dark Mode"
                      class="w-6 h-5"
                      :class="{ hide: isDark === false }"
                    />
                  </span>
                  <span
                    :class="{ clearsky: isDark === false }"
                    class="flex align-center justify-center rounded-2xl"
                  >
                    <img
                      :src="require(`@/assets/icons/light.png`)"
                      alt="Light Mode"
                      class="w-6 h-5"
                      :class="{ hide: isDark === true }"
                    />
                  </span>
                </span>
              </div>
            </button>

            <router-link
              :to="{ name: 'Homepage', hash: '#about' }"
              @click="currentLink = `About`"
              class="block md:inline-block md:mt-0 mr-4 menu-hover menu-font text-center"
              :class="{
                active: currentLink === 'About',
                whitefont: currentLink !== 'About' && isDark === false,
                inactive: currentLink !== 'About' && isDark === true,
              }"
            >
              About
            </router-link>

            <router-link
              :to="{ name: 'Homepage', hash: '#skill' }"
              @click="currentLink = `Skills`"
              class="block md:inline-block md:mt-0 mr-4 menu-hover menu-font text-center"
              :class="{
                active: currentLink === 'Skills',
                whitefont: currentLink !== 'Skills' && isDark === false,
                inactive: currentLink !== 'Skills' && isDark === true,
              }"
            >
              Skills
            </router-link>
            <router-link
              :to="{ name: 'Homepage', hash: '#project' }"
              @click="currentLink = `Projects`"
              class="block md:inline-block md:mt-0 mr-4 menu-hover menu-font text-center"
              :class="{
                active: currentLink === `Projects`,
                whitefont: currentLink !== 'Projects' && isDark === false,
                inactive: currentLink !== 'Projects' && isDark === true,
              }"
            >
              Projects
            </router-link>
            <router-link
              :to="{ name: 'Homepage', hash: '#contact' }"
              @click="currentLink = `Contact`"
              class="block md:inline-block md:mt-0 mr-4 menu-hover menu-font text-center"
              :class="{
                active: currentLink === 'Contact',
                whitefont: currentLink !== 'Contact' && isDark === false,
                inactive: currentLink !== 'Contact' && isDark === true,
              }"
            >
              Contact
            </router-link>
            <!-- refer to https://v1.tailwindcss.com/components/buttons download button -->
            <a
              href="./pdf-test.pdf"
              target="_blank"
              class="block md:inline-block md:mt-0 mr-4"
            >
              <button
                class="rounded inline-flex items-center menu-font menu-hover text-center"
              >
                <span
                  :class="{
                    whitefont: isDark === false,
                    inactive: isDark === true,
                  }"
                  >Resume</span
                >
                <!-- <img
                  :src="require(`@/assets/icons/download.png`)"
                  class="object-fit h-6 w-6 bg-white"
                /> -->
              </button></a
            >
          </div>
        </div>
      </div>
    </nav>
    <SideBar :isDark="isDark" :socialMedia="PROFILE.SOCIALMEDIA" />
  </div>
</template>
<script>
import { PROFILE } from "@/data/data";
import { ref, watch } from "vue";
import SideBar from "./SideBar";

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
    };
  },

  setup() {
    let showMenu = ref(false);
    const isDark = ref(false);
    let currentLink = ref("About");
    watch(isDark, (val) => {
      val
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    });

    return {
      showMenu,
      isDark,
      currentLink,
    };
  },
};
</script>
<style>
.active {
  color: green;
}
.whitefont {
  color: white;
}
.inactive {
  color: rgb(148 163 184);
}
.clearsky {
  background-color: skyblue;
}
.nightsky {
  background-color: blue;
}
.hide {
  opacity: 0;
}

#divfix {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 3000;
  width: 100%;
  height: 10%;
}
</style>
