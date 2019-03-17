<template>
    <demo-block :vue-code="code" :html-code="htmlCode">
        <template slot="preview">
            <model-collada :backgroundAlpha="0"
                @on-load="onLoad"
                :rotation="rotation"
                src="static/models/collada/elf/elf.dae"></model-collada>
            <div class="example-loading" v-show="loading"></div>
        </template>
    </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block';
import ModelCollada from '../../src/model-collada.vue'

const code = ``

const htmlCode = ``

export default {
    name: 'demo-collada',
    data() {
        return {
            code,
            htmlCode,
            loading: true,
            rotation: {
                x: -Math.PI / 2,
                y: 0,
                z: 0
            }
        }
    },
    methods: {
        onLoad() {
            this.loading = false;
        }
    },
    components: {
        ModelCollada,
        DemoBlock
    }
}
</script>
