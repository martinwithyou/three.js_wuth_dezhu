<template>
    <demo-block>
        <template slot="preview">
            <model-three 
                :backgroundAlpha="bgAlpha"
                :backgroundColor="bgColor"
                :position="position"
                :rotation="rotation"
                :cameraPosition="cameraPosition"
                :cameraRotation="cameraRotation"
                :controllable="controllable"
                :gammaOutput="gammaOutput"
                :crossOrigin="crossOrigin"
                :lights="lights"
                :width="width"
                @on-load="onLoad"
                @on-mousemove="onMouseMove"
                @on-click="onMouseClick"
                src="static/models/json/scene.json">
            </model-three>
            <div class="example-loading" v-show="loading"></div>
        </template>
    </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block';
import ModelThree from '../../src/model-three.vue'

const code = ``

const htmlCode = ``

export default {
    name: 'demo-basic',
    data() {
        return {
            code,
            htmlCode,
            loading: true,
            bgColor: 'pink',
            bgAlpha: 0.5,
            controllable:true,
            gammaOutput:true,
            crossOrigin:"use-credentials"
        }
    },
    methods: {
        onLoad(event){
            console.log(event);
            this.loading = false;
        },
        rotate(){
            requestAnimationFrame( this.rotate );
            this.rotation.z += 0.01;
        },
        onMouseClick(event){
             console.log(event);
             this.$store.state.author = `
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        这是一个人像,
                                        `
        },
        onMouseMove( event ) {

            //console.log( event );

            if ( !event ) {

                if ( this.intersected ) {
                    this.intersected.material.color.setStyle( 'rgba(256,256,256,0)' );
                }

                this.intersected = null;
                return;
            }

            this.intersected = event.object;
            this.intersected.material.color.setStyle( 'rgba(256,0,0,0.1)' );
        }
    },
    components: {
        ModelThree,
        DemoBlock
    },
    computed: {
      rotation () {
        return this.$store.state.rotation
      },
      lights(){
          return this.$store.state.lights
      },
      scale(){
          return this.$store.state.scale
      },
      width(){
          return this.$store.state.width
      },
      position(){
          return this.$store.state.position
      },
      cameraPosition(){
            console.log("this.$store.state.cameraPosition",this.$store.state.cameraPosition)
            return this.$store.state.cameraPosition;
        },
        cameraRotation(){
            console.log("this.$store.state.cameraRotation",this.$store.state.cameraRotation)
            return this.$store.state.cameraRotation;
        }


    }
}
</script>
