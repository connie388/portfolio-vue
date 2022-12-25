<template>
  <div>
    <!-- User can click skip animation and directly go to home page -->
    <router-link :to="{ path: '/Homepage' }">
      <div
        class="bg-slate-800 flex w-full justify-center text-yellow-100 text-2xl"
      >
        <img
          :src="require(`@/assets/icons/lightning-arrow.png`)"
          class="object-cover h-8 w-8 hover:scale-110"
        />
        Skip Animation
      </div>
    </router-link>
    <!-- Animation: spinned, and then hidetext -->
    <div
      class="bg-slate-800 flex h-screen w-full place-content-center items-center"
    >
      <div>
        <!-- to spin from vertical to horizontal -->
        <div class="block spinned">
          <div class="flex justify-center align-center hidetext">
            <div>
              <svg
                id="text1"
                class="rotate-90 w-[300px] xxxs:w-[350px] xxs:w-[550px] h-[64px]"
              >
                <!-- text1Dashed: to create a drawing effect  -->
                <!-- d="M 90 40 ....." is to draw the Welcome letter -->
                <path
                  class="text1Dashed"
                  fill="none"
                  stroke="#F0E68C"
                  stroke-width="5"
                  d="M 90 40 l 20 0 M
          50 25 l 10 25 l 10 -25 l 10 25 l 10 -25 
          
           l 25 0  l -25 0 l 0 25, l 30
          0   
          M 130, 20
          l 0 40
          l 25 0
   
            
           M 180,25
             C 140, 25 140, 50, 200,50
               C 180, 50 180, 25, 200,25


                 C 220, 25 220, 50, 200,50

                 M220, 50
                  l 10 -25 l 10 25 l 10 -25 l 10 25

              l 25 0
       
         
           l -25 0
           l 0 -35
           l 25 0
           M 255 40
           l 20 0"
                />
              </svg>
            </div>
          </div>

          <!-- create an enlarge effect in the letter C and its own spin effect -->
          <div
            id="icon"
            class="flex justify-center align-center mt-20 iconspinned"
          >
            <img
              :src="require(`@/assets/icons/c.svg`)"
              class="object-fit hover:scale-110 enlarged"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* Run following in concole to find stroke-dasharray number, in this case 707 */
/* document.querySelector("#text1 path").getTotalLength() */
.text1Dashed {
  stroke-dasharray: 707;
  animation: text1dash 8s ease-in-out forwards infinite;
}

@keyframes text1dash {
  0% {
    stroke-dashoffset: 707;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.enlarged {
  animation: enlarge 8s ease-in-out forwards infinite;
}

@keyframes enlarge {
  to {
    width: 60px;
  }
  from {
    width: 10px;
  }
}

.hidetext {
  animation: hide ease-in-out 5s forwards;
  animation-delay: 4s;
}
@keyframes hide {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.spinned {
  animation: spin 1000ms linear forwards infinite;
  animation-delay: 4s;
  animation-iteration-count: 0.75;
}

.iconspinned {
  animation: spin 1000ms linear forwards infinite;
  animation-delay: 4s;
  animation-iteration-count: 1.25;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
