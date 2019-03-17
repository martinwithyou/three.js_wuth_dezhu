<template>
    <demo-block :vue-code="code" :html-code="htmlCode">
        <template slot="preview">
            <model-gltf :backgroundAlpha="0"
                @on-load="onLoad"
                :rotation="rotation"
                src="static/models/gltf/Duck/glTF/Duck.gltf"></model-gltf>
            <div class="example-loading" v-show="loading"></div>
        </template>
    </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block';
import ModelGltf from '../../src/model-gltf.vue'

const code = ``
const htmlCode = ``

export default {
    name: 'demo-gltf',
    data() {
        return {
            code,
            htmlCode,
            loading: true,
            rotation: {
                x: 0,
                y: 0,
                z: 0,
            },
        }
    },
    methods: {
        onLoad() {
            this.loading = false;
            this.rotate();
        },
        rotate() {
            requestAnimationFrame( this.rotate );
            this.rotation.y += 0.05;
        }
    },
    components: {
        ModelGltf,
        DemoBlock
    }
}
</script>
