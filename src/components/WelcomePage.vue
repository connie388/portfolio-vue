<template>
  <div
    class="bg-slate-800 flex h-screen w-full place-content-center items-center"
  >
    <div>
      <div class="block">
        <div class="flex justify-center align-center">
          <div class="rotate-90">
            <svg id="text1" style="width: 400pt; height: 40pt">
              <path
                class="text1Dashed"
                fill="none"
                stroke="#F0E68C"
                stroke-width="5"
                d="M
          50 25 l 10 25 l 10 -25 l 10 25 l 10 -25 
          
          M 125 25 l -25 0 l 0 25, l 25
          0 M 100 40 l 20 0    
          
          M 135 25
           l 0 25, 
           l 25 0 
           
           M 200,25
             C 160, 25 160, 50, 200,50
              M 230,25
               C 210, 25 210, 50, 230,50
                M 230,25
                 C 250, 25 250, 50, 230,50
                 M260, 50
                  l 10 -25 l 10 25 l 10 -25 l 10 25
                 M 340 25
           l -25 0
           l  0 25, 
           l 25 0
           M 315 40
           l 20 0"
              />
            </svg>
          </div>
        </div>

        <div id="icon" class="flex justify-center align-center mt-20">
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
/* Run following in concole to find stroke-dasharray */
/* document.querySelector("#text1 path").getTotalLength() */
.text1Dashed {
  stroke-dasharray: 613;
  animation: text1dash 8s ease-in-out forwards infinite;
}

@keyframes text1dash {
  0% {
    stroke-dashoffset: 613;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
