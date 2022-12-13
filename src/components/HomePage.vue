<template>
  <div>
    <NavigationBar />
    <div class="light-mode dark:dark-mode">
      <div id="about" class="p-5 md:p-20">
        <AboutMe />
      </div>
      <div id="skill" class="p-5 md:p-20">
        <SkillPagev2 />
      </div>
      <div id="project" class="p-5 md:p-20">
        <ProjectWork />
      </div>
      <div id="contact" class="p-5 md:p-20">
        <ContactPage />
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE } from "@/data/data";
import NavigationBar from "./NavigationBar.vue";
import AboutMe from "./AboutMe";
import SkillPagev2 from "./SkillPagev2";
import ProjectWork from "./ProjectWork";
import ContactPage from "./ContactPage";

export default {
  components: {
    NavigationBar,
    AboutMe,
    SkillPagev2,
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
