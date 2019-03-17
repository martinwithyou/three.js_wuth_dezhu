import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'go go boy',
    rotation: {
        x: 0,
        y: 0,
        z: 0,
    },
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    lights:[
      {
        type: 'HemisphereLight',
        position: { x: 0, y: 1, z: 0 },
        skyColor: 0xaaaaff,
        groundColor: 0x806060,
        intensity: 0.2
      }
    ],
    width:10000,
    scale: {
      x: 1,
      y: 1,
      z: 1,
    },
    cameraRotation:{
      x:100,
      y:1000,
      z:100
    },
    cameraPosition:{
      x:0,
      y:0,
      z:0
    }
     
 
  }
})

export default store