<template>
    <div class="examples">
        <div class="examples-header">
            <a class="title">工巨箱<span>cloud</span></a>
            <a class="github">
                <Button type="primary" size="small" icon="md-megaphone">预览</Button>
                <Button type="primary" size="small" icon="ios-folder-open" >保存数据</Button>
                <Button type="primary" size="small" icon="ios-globe">查看</Button>
                <Button size="small" icon="el-icon-share">返回首页</Button>
            </a>
        </div>
        <div class="examples-content">
            <ul class="examples-menu">
                <div class="tab">
                    <Tabs value="name1" >
                        <TabPane label="材料" name="name1" icon="md-film">
                            <div class="panel-body">
                                <div class="panel-head">| 材料列表</div>
                                    <RadioGroup 
                                        v-model="vertical" 
                                        vertical 
                                        class="group-checkbox"
                                        @on-change="handleMetrial()"
                                        >
                                        <span>
                                            <Radio label="0">
                                                <span>木质</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="x">
                                                <span>金属</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="y">
                                                <span>塑料</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="z">
                                                <span>玻璃</span>
                                            </Radio>
                                        </span>
                                    
                                    </RadioGroup>
                            </div>
                            <div class="panel-body" >
                                <div class="panel-head">| 预设材质球</div>
                            </div>
                            <div class="panel-body panel-body-metial" >
                                <div class="panel-head">| 材质调整</div>
                                    <div class="light-details light-details-metrial">
                                        <div class="light-details-head">大小</div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left-m">
                                                    金属质感
                                               </div>
                                               <div class="light-details-color-right-m">
                                                   <Slider v-model="value7" @on-change="left"></Slider>
                                               </div>
                                            </div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left-m">
                                                    平滑度
                                               </div>
                                               <div class="light-details-color-right-m">
                                                   <Slider v-model="value8" @on-change="right"></Slider>
                                               </div>
                                            </div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left-m">
                                                    不透明度
                                               </div>
                                               <div class="light-details-color-right-m">
                                                   <Slider v-model="value8" @on-change="right"></Slider>
                                               </div>
                                            </div>
                                    </div>
                            </div>
                            <div class="panel-body" >
                                <div class="panel-head">| 着色方式</div>
                                    <Tabs type="card">
                                        <TabPane label="平面">平面</TabPane>
                                        <TabPane label="光滑组">光滑组</TabPane>
                                    </Tabs>
                            </div>
                        </TabPane>
                        <TabPane label="照明" name="name2" icon="ios-bulb" >
                                <div class="panel-body panel-body-height" >
                                    <div class="panel-head" >| 灯光</div>
                                        <RadioGroup 
                                        v-model="light" 
                                        light 
                                        class="group-checkbox"
                                        @on-change="handleLight"
                                        >
                                            <CheckboxGroup v-model="fruit" @on-change="checkAllGroupChange">
                                                <p class="tab-head">
                                                    <Checkbox label="PointLight" >点光源</Checkbox>
                                                </p>
                                                <p class="tab-head">
                                                    <Checkbox label="DirectionalLight" >平行光</Checkbox>
                                                </p>
                                                <p class="tab-head">
                                                    <Checkbox label="HemisphereLight" >球光</Checkbox>
                                                </p>
                                                <p class="tab-head">
                                                    <Checkbox label="SpotLight" >聚光灯</Checkbox>
                                                </p>
                                            </CheckboxGroup>
                                        </RadioGroup>
                                </div>
                                <div class="panel-body panel-body-height-more">
                                    <div class="panel-head" >| 环境</div>
                                    <div class="light-details">
                                            <div class="light-details-head">光源</div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    基色
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value1" @on-change="showVlue()"></Slider>
                                               </div>
                                            </div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    亮度
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value2" @on-change="showVlue2()"></Slider>
                                               </div>
                                            </div>
                                    </div>
                                    <div class="light-details">
                                        <div class="light-details-head">阴影</div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    平滑度
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value3" @on-change="showShadow()"></Slider>
                                               </div>
                                            </div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    透明度
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value4" @on-change="showShadow2()"></Slider>
                                               </div>
                                            </div>
                                    </div>
                                    <div class="light-details">
                                        <div class="light-details-head">位移</div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    左移
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value5" @on-change="big()"></Slider>
                                               </div>
                                            </div>
                                            <div class="light-details-color">
                                               <div class="light-details-color-left">
                                                    后退
                                               </div>
                                               <div class="light-details-color-right">
                                                   <Slider v-model="value6" @on-change="width()"></Slider>
                                               </div>
                                            </div>
                                    </div>
                                </div>
                        </TabPane>
                        <TabPane label="动作" name="name3" icon="ios-american-football">
                                <div class="panel-body group-radio" >
                                    <div class="panel-head">| 默认动作</div>
                                    <RadioGroup 
                                        v-model="vertical" 
                                        vertical 
                                        class="group-checkbox"
                                        @on-change="handleClick()"
                                        >
                                        <span>
                                            <Radio label="0">
                                                <span>无旋转</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="x">
                                                <span>x轴旋转</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="y">
                                                <span>y轴旋转</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="z">
                                                <span>z轴旋转</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="back">
                                                <span>背面</span>
                                            </Radio>
                                        </span>
                                        <span>
                                            <Radio label="side">
                                                <span>侧面</span>
                                            </Radio>
                                        </span>
                                    </RadioGroup>
                                </div>
                                <div class="panel-body" >
                                    <div class="panel-head">| 局部动作</div>
                                    <p class="panel-part">{{author}}</p>
                                </div>
                                <div class="panel-body" >
                                    <div class="panel-head">| 注释</div>
                                    <p class="panel-part">注释内容1</p>
                                    <p class="panel-part">注释内容2</p>
                                    <router-link to="demo-basic">basic</router-link>
                                    <router-link to="demo-rotate">rotate</router-link>
                                    <router-link to="demo-background">background</router-link>
                                    <router-link to="demo-event">mousemove</router-link>
                                    <router-link to="demo-basic">JSON Model (.json)</router-link>
                                    <router-link to="demo-obj">OBJ Model (.obj)</router-link>
                                    <router-link to="demo-obj-mtl">OBJ + MTL (.obj + .mtl)</router-link>
                                    <router-link to="demo-stl">STL Model (.stl)</router-link>
                                    <router-link to="demo-collada">Collada Model (.dae)</router-link>
                                    <router-link to="demo-ply">PLY Model (.ply)</router-link>
                                    <router-link to="demo-gltf">glTF Model (.gltf)</router-link>  
                                </div>                                               
                        </TabPane>
                    </Tabs>
                </div>
            </ul>
            <div class="examples-pages">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    data() {
        return {
            loading: true,
            bgColor: 'pink',
            bgAlpha: 0.5,
            vertical: '0',
            value:'name3',
            light:"HemisphereLight",
            value1:20,
            value2:50,
            value3:50,
            value4:50,
            value5:30,
            value6:70,
            value7:30,
            value8:70,
            fruit:[
                "HemisphereLight",
                "PointLight",
                "SpotLight",
                "DirectionalLight"
            ]
        }
    },
    methods: {
        checkAllGroupChange (data) {
                data.map((item)=>{
                    if(item === "AmbientLight"){
                        console.log(data);
                        this.light_change_AmbientLight(); 
                    }
                    if(item === "PointLight"){
                        console.log(data);
                        this.light_change_PointLight();
                    }
                    if(item === "SpotLight"){
                        console.log(data);
                        this.light_change_SpotLight();
                    }
                    if(item === "DirectionalLight"){
                        console.log(data);
                        this.light_change_DirectionalLight();
                    }
                    if(item === "HemisphereLight"){
                        this.light_change_HemisphereLight();
                    }

                })
        },
        onLoad() {
            this.loading = false;
            console.log('this___',this,ModelThree)
        },
        handleMetrial(){
            console.log('this.vertical',this.vertical);
        },
        handleClick() {
        console.log('this.vertical',this.vertical);
            if(this.vertical === '0'){
                this.rotate_0();
            }
            if(this.vertical === 'x'){
                this.rotate_x();
            }
            if(this.vertical === 'y'){
                this.rotate_y();
            }
            if(this.vertical === 'z'){
                this.rotate_z();
            }
            if(this.vertical === 'back'){
                this.rotate_back();
            }
            if(this.vertical === 'side'){
                this.rotate_side();
            }
        },
        inputPhone(){
            console.log(this.vertical); 
        },
        rotate_0() {
            this.$store.state.rotation.x = 0;
            this.$store.state.rotation.y = 0;
            this.$store.state.rotation.z = 0;
        },
        rotate_x() {
            this.$store.state.rotation.x = -Math.PI / 2;
            this.$store.state.rotation.y = 0;
            this.$store.state.rotation.z = 0;
        },
        rotate_y() {
            this.$store.state.rotation.x = 0;
            this.$store.state.rotation.y = -Math.PI / 2;
            this.$store.state.rotation.z = 0;
        },
        rotate_z() {
            this.$store.state.rotation.x = 0;
            this.$store.state.rotation.y = 0;
            this.$store.state.rotation.z = -Math.PI / 2;
        },
        rotate_back() {
            this.$store.state.rotation.x = 0;
            this.$store.state.rotation.y = -Math.PI;
            this.$store.state.rotation.z = 0;
        },
         rotate_side() {
            this.$store.state.rotation.x = 0;
            this.$store.state.rotation.y = -Math.PI/3;
            this.$store.state.rotation.z = 0;
        },
        handleLight(){
            if(this.light === 'HemisphereLight'){
                this.light_change_HemisphereLight();
            }
            if(this.light === 'DirectionalLight'){
                this.light_change_DirectionalLight();
            }
        },
        getOriginLight(){
            this.$store.state.lights=[];
        },
        light_change_HemisphereLight(){
            this.getOriginLight();
            this.$store.state.lights.push(
                {
                  type: 'HemisphereLight',
                  position: { x: 0, y: 1, z: 0 },
                  skyColor: 0xaaaaff,
                  groundColor: 0x806060,
                  intensity: 0.2
                }
            )
        },
        light_change_DirectionalLight(){
            this.getOriginLight();
            this.$store.state.lights.push(
                {
                  type: 'DirectionalLight',
                  position: { x: 1, y: 1, z: 1 },
                  color: 0xffffff,
                  intensity: 0.2
                } 
            )
               
        },
        light_change_PointLight(){
            this.getOriginLight();
            this.$store.state.lights.push(
                {
                  type: 'PointLight',
                  position: { x: 1, y: 1, z: 1 },
                  color: 0xffffff,
                  intensity: 0.2
                } 
            )
               
        },
        light_change_SpotLight(){
            this.getOriginLight();
            this.$store.state.lights.push(
                {
                  type: 'SpotLight',
                  position: { x: 1, y: 1, z: 1 },
                  color: 0xffffff,
                  intensity: 0.2
                } 
            )
               
        },
        light_change_AmbientLight(){
            this.getOriginLight();
            this.$store.state.lights.push(
                {
                  type: 'AmbientLight',
                  position: { x: 1, y: 1, z: 1 },
                  color: 0xffffff,
                  intensity: 0.2
                } 
            )
               
        },
        showVlue(){
            this.$store.state.lights[0].intensity =this.value1/100;
        },
        showVlue2(){
            this.$store.state.lights[0].intensity =this.value2/95;
        },
        showShadow(){
            this.$store.state.lights[0].intensity =this.value3/90;
        },
        showShadow2(){
            this.$store.state.lights[0].intensity =this.value4/85;
        },
        addColor(){
            console.log("value1_",this.fruit);
            this.$store.state.lights[0].intensity =this.value1/100;
        },
        big(){
            this.$store.state.position.x += this.value5/100;
        },
        width(){
            this.$store.state.position.z += -this.value6/100;
        },        
        left(){
            console.log(this.value7);
            this.$store.state.cameraPosition.x += this.value7*10;
            console.log(this.$store.state.cameraPosition);
        },
        right(){
            console.log(this.value8);
            this.$store.state.cameraRotation.x += this.value8*10;
            console.log(this.$store.state.cameraRotation.x)
        }

    },
    computed: {
      author () {
        return this.$store.state.author
      }
    }
}
</script>


















































<style>
* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
}

ul, ol, li {
    list-style: none;
}

a {
    color: #657180;
    text-decoration: none;
}

html, body, .examples {
    width: 100%;
    height: 100%;
    color: #657180;
}

body {
    background: #eee;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                 "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
                 SimSun, sans-serif;
    background: #fff;
}

.examples-header {
    position: absolute;
    top: 0;
    width: 100%;
    background: #f3f6fb;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    border-bottom: solid 1px #dfe2e7;
    padding: 15px 15px 15px 30px;
    line-height: 20px;
}

.examples-header .title {
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
}

.examples-header .github {
    color: #39f;
    display: inline-block;
    font-size: 12px;
    float: right;
}

.examples-content {
    width: 100%;
    height: 100%;
    padding-top: 63px;
    overflow: hidden;
}

.examples-menu {
    float: right;
    /* padding-top:20px; */
    width: 300px;
    height: 100%;
    border-right: solid 1px #dfe2e7;
    padding: 10px 0px;
    overflow:scroll;
}

.examples-menu .examples-menu-item {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
}

.examples-menu .examples-menu-item > a {
    display: block;
    width: 100%;
    height: 100%;
}

.examples-menu .examples-menu-title {
    display: block;
    width: 100%;
    padding: 6px 0;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
}

.examples-menu .examples-menu-item:hover > a {
    color: #39f;
}

.examples-pages {
    height: 100%;
    overflow: hidden;
}

.example-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}
.example-loading::before {
    content: '';
    border-radius: 100%;
    margin: 2px;
    border: 3px solid #20a0ff;
    border-bottom-color: transparent;
    height: 36px;
    width: 36px;
    display: inline-block;
    animation: loading-rotate .75s 0s linear infinite;
    vertical-align: middle;
}

.example-loading::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
}

@keyframes loading-rotate{
    0% {
        transform: rotate(0) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(.6);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
}
.panel-body{
    width:100%;
    height:200px;
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    background: #ffffff;
    margin-top:0px;
}
.panel-head{
    width:100%;
    height:40px;
    background: #d9d9d9;
    line-height:40px;
    color:#333333;
    padding-left:10px; 
}
.tab-head{
    margin-bottom: 20px;
}
.tab{
    width:100%;
    height:300px;
    background:#ffffff;
}
.panel-part{
    margin-top:20px;
    padding-left:20px;
}
.group-checkbox{
    padding-top:20px;
    padding-left:20px;
}
.group-radio{
    height:300px;
}
.light-details{
    width:80%;
    height:150px;
    border:1px solid #d9d9d9;
    margin-left:10%;
    margin-top:20px;
}
.light-details-head{
    width:100%;
    height:40px;
    border-bottom:1px solid #d9d9d9;
    background: #f2f2f2;
    line-height: 40px;
    padding-left:20px; 
    margin-bottom: 10px;
}
.panel-body-height{
    height:250px;
}
.panel-body-height-more{
    height:600px;
}
.light-details-color{
    width:100%;
}
.light-details-color-left{
    float:left;
    width:20%;
    height:36px;
    line-height:36px;
    padding-left:5px;
}
.light-details-color-right{
    float:right;
    width:80%;
}
.panel-body-metial{
    height:350px;
}
.light-details-metrial{
    height:200px;
}
.light-details-color-left-m{
    width:80px;
    float:left;
    padding-left:5px;
}
.light-details-color-right-m{
    width:150px;
    float:left;
}
</style>
