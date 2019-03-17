<template>
    <demo-block :vue-code="code" :html-code="htmlCode">
        <template slot="preview">
            <model-obj :backgroundAlpha="0"
                ref="model"
                @on-load="onLoad"
                @on-mousemove="onMouseMove"
                src="static/models/obj/male02/male02.obj"></model-obj>
            <div class="example-loading" v-show="loading"></div>
        </template>
    </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block';
import ModelObj from '../../src/model-obj.vue';

const code = ``

const htmlCode = ``

export default {
    name: 'demo-event',
    data() {
        return {
            code,
            htmlCode,
            loading: true,
            intersected: null
        }
    },
    methods: {
        onLoad() {
            this.loading = false;
        },
        onMouseMove( event ) {

            console.log( event );

            if ( !event ) {

                if ( this.intersected ) {
                    this.intersected.material.color.setStyle( 'pink' );
                    this.intersected.material.opacity=0.4;
                }

                this.intersected = null;
                return;
            }

            this.intersected = event.object;
            this.intersected.material.color.setStyle( 'orange' );
            this.intersected.material.opacity= 0.4 ;
        }
    },
    components: {
        ModelObj,
        DemoBlock
    }
}
</script>
