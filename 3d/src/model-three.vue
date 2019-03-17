<script>
import { ObjectLoader } from 'three'
import mixin from './model-mixin.vue'

export default {
    name: 'model-three',
    mixins: [ mixin ],
    data() {

        const loader = new ObjectLoader();
        loader.setCrossOrigin( this.crossOrigin );
        //console.log('loader___',loader);

        return {
            loader
        }
    }
}
</script>
