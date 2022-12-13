<template>
  <div>
    <h4>Check Out My Skills</h4>
    <div
      class="flex justify-center align-center text-sm font-bold text-black mt-5"
    >
      <div class="w-3/5">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-1">
          <div class="w-30" v-for="skill in PROFILE.SKILLS" :key="skill">
            <button
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
<style scoped>
div button {
  transition-duration: 0.4s;
  border-radius: 5px;
  min-width: 30px;
}
.selected {
  background-color: lightblue;
}

.unselected {
  background-color: white;
}

.selected:hover,
.unselected:hover {
  background-color: aquamarine;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
