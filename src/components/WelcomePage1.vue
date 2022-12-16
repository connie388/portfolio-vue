<template>
  <div
    class="bg-slate-800 flex h-screen w-full place-content-center items-center"
  >
    <div>
      <div class="block">
        <div class="flex rotate-90">
          <svg id="text1" style="width: 110pt; height: 40pt">
            <path
              class="text1Dashed"
              fill="none"
              stroke="#F0E68C"
              stroke-width="5"
              d="M
          50 25 l 10 25 l 10 -25 l 10 25 l 10 -25 M 125 25 l -25 0 l 0 25, l 25
          0 M 100 40 l 20 0    M 135 25
           l 0 25, 
           l 25 0 "
            />
          </svg>
          <router-link :to="{ path: '/Homepage' }">
            <img
              :src="require(`@/assets/icons/lightning-arrow.png`)"
              class="object-fit h-10 w-10 hover:scale-110 animate-waving"
            />
          </router-link>
        </div>
        <svg id="text2" style="width: 100%; height: 40pt">
          <path
            class="text2Dashed"
            fill="none"
            stroke="#F0E68C"
            stroke-width="5"
            d="M 50,25
             C 10, 25 10, 50, 50,50
              M 80,25
               C 60, 25 60, 50, 80,50
                M 80,25
                 C 100, 25 100, 50, 80,50
                 M110, 50
                  l 10 -25 l 10 25 l 10 -25 l 10 25
                 M 190 25
           l -25 0
           l  0 25, 
           l 25 0
           M 165 40
           l 20 0
           "
          />
        </svg>

        <div class="flex justify-center align-center mt-10">
          <!-- <img
            :src="require(`@/assets/icons/k.svg`)"
            class="object-fit h-10 w-10 hover:scale-110 animate-waving"
          /> -->
          <img
            :src="require(`@/assets/icons/c.svg`)"
            class="object-fit h-10 w-10 hover:scale-110 animate-waving"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.text1Dashed {
  stroke-dasharray: 253;
  animation: text1dash 3s linear forwards infinite;
}

.text2Dashed {
  stroke-dasharray: 360;
  animation-delay: 2s;
  animation: text2dash 3s linear forwards infinite;
}

@keyframes text1dash {
  0% {
    stroke-dashoffset: 253;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes text2dash {
  0% {
    stroke-dashoffset: 360;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
