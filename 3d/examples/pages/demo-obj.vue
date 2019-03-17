<template>
    <demo-block :vue-code="code" :html-code="htmlCode">
        <template slot="preview">
            <model-obj :backgroundAlpha="0"
                @on-load="onLoad"
                src="static/models/obj/male02/male02.obj"></model-obj>
            <div class="example-loading" v-show="loading"></div>
        </template>
    </demo-block>
</template>

<script>
import DemoBlock from '../components/demo-block';
import ModelObj from '../../src/model-obj.vue'

const code = ``
const htmlCode = ``

export default {
    name: 'demo-obj',
    data() {
        return {
            code,
            htmlCode,
            loading: true
        }
    },
    methods: {
        onLoad() {
            this.loading = false;
        }
    },
    components: {
        ModelObj,
        DemoBlock
    },
    computed:{

    }
}
</script>