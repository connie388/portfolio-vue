<template>
  <div
    class="bg-slate-800 flex h-screen w-full place-content-center items-center"
  >
    <div id="location-box" class="box">
      <div class="flex justify-center align-center">
        <p>Hi, I'm</p>
        <h2>{{ PROFILE.NAME }}</h2>
      </div>
    </div>
    <div id="desc-box" class="box">
      <div class="flex-wrap">
        <div>{{ PROFILE.INTRO }}</div>
      </div>
    </div>
    <div id="profile-box" class="box">
      <div>
        <div class="flex justify-center align-center">
          <img
            :src="require(`@/assets/icons/location.png`)"
            class="object-fit h-5 w-5"
          />
          <p>
            {{ PROFILE.LOCATION }}
          </p>
        </div>
      </div>
    </div>

    <div id="checkout-box" class="box">
      <router-link :to="{ path: '/Homepage' }">
        <button class="btn-primary box">Skip Animation</button>
      </router-link>
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
<style scoped>
.box {
  position: relative;
  width: 150px;
  height: 150px;
  animation-name: example;
  animation-duration: 3s;
}

#profile-box {
  position: relative;
  background-color: #e7feff;
  animation-delay: 2s;
}
#location-box {
  background-color: #ace5ee;
  animation-direction: reverse;
}
#desc-box {
  background-color: #f0f8ff;
  animation-iteration-count: 2;
  animation-direction: alternate;
}
#checkout-box {
  background-color: #87ceeb;
  animation-direction: reverse;
}

@keyframes example {
  0% {
    background-color: #87ceeb;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: #f0f8ff;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: #e7feff;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: #ace5ee;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: #87ceeb;
    left: 0px;
    top: 0px;
  }
}
</style>
