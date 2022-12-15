<template>
  <div>
    <!-- In this version, different skill type buttons are displayed and users can select the skill types -->
    <h4>Check Out My Skills</h4>
    <div
      class="flex justify-center align-center text-xs md:text-sm font-bold text-black mt-5"
    >
      <div class="w-4/5">
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-1">
          <div class="w-30" v-for="skill in PROFILE.SKILLS" :key="skill">
            <button
              class="btn"
              :class="{
                selected: selected[skill.name],
                unselected: !selected[skill.name],
              }"
              @click="
                selected[skill.name] = !selected[skill.name];
                toggle = !toggle;
              "
            >
              {{ skill.name }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <SkillList :selected="selected" :toggle="toggle" />
  </div>
</template>

<script>
import { PROFILE } from "@/data/data";
import SkillList from "./SkillList";

export default {
  components: {
    SkillList,
  },
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
      toggle: false,
      selected: {
        DATABASES: true,
        FRAMEWORKS: true,
        TOOLS: true,
        LANGUAGES: true,
      },
    };
  },
};
</script>
