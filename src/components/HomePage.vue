<template>
  <NavigationBar />
  <div class="light-mode dark:dark-mode">
    <div id="about" class="p-5 md:p-20">
      <AboutMe />
    </div>

    <div id="skill" class="p-5 md:p-20">
      <SkillPage />
    </div>
    <div id="project" class="p-5 md:p-20">
      <ProjectWork />
    </div>
    <div id="contact" class="p-5 md:p-20">
      <ContactPage />
    </div>
  </div>
</template>

<script>
import { PROFILE } from "@/data/data";
import NavigationBar from "./NavigationBar.vue";
import AboutMe from "./AboutMe";
import SkillPage from "./SkillPage";
import ProjectWork from "./ProjectWork";
import ContactPage from "./ContactPage";

export default {
  components: {
    NavigationBar,
    AboutMe,
    SkillPage,
    ProjectWork,
    ContactPage,
  },
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
    };
  },
};
</script>
