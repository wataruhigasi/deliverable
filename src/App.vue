<template>
    <div id="app">
        <Timer10></Timer10>
        <Timer2></Timer2>

        <!--チームA-->
        <p>{{ message }}</p>
        <EditForm/>
        <p><button v-on:click="increment()">threePoint</button>
    <h1>{{ threePoint }}</h1>
        <p><button v-on:click="increment1()">twoPoint</button>
    <h1>{{ twoPoint }}</h1>    
        <p><button v-on:click="increment2()">onePoint</button>
    <h1>{{ onePoint }}</h1>
    <p>スコアボード</p>
    <h1>{{ threePoint+twoPoint+onePoint }}</h1>

        <!--チームB-->
        <p>{{ message2 }}</p>
        <EditForm2/>
        <p><button v-on:click="increment3()">threePoint</button>
    <h1>{{ threePoint2 }}</h1>
        <p><button v-on:click="increment4()">twoPoint</button>
    <h1>{{ twoPoint2 }}</h1>
        <p><button v-on:click="increment5()">onePoint</button>
    <h1>{{ onePoint2 }}</h1>
    <p>スコアボード</p>
    <h1>{{ threePoint2+twoPoint2+onePoint2 }}</h1>

        <Add></Add>
        <Index></Index>
    
    </div>
</template>



<script>

import EditForm from '@/components/EditForm.vue'
import EditForm2 from '@/components/EditForm2.vue'
import Timer10 from './components/Timer10.vue'
import Timer2 from './components/Timer2.vue'
import Add from './components/winorlose/Add.vue'
import Index from './components/winorlose/Index.vue'


export default {
    name: 'app',
    components: {
        EditForm,
        EditForm2,
        Timer10,
        Timer2,
        Add,
        Index
    },
    methods: {
        increment : function(){
            this.$store.commit('increment') 
        },
        increment1 : function(){
            this.$store.commit('increment1')
        },
        increment2 : function(){
            this.$store.commit('increment2')
        },
        increment3 : function(){
            this.$store.commit('increment3')
        },
        increment4 : function(){
            this.$store.commit('increment4')
        },
        increment5 : function(){
            this.$store.commit('increment5')
        }
    },
    computed:{
        message(){
            return this.$store.getters.message
        },
        message2(){
            return this.$store.getters.message2
        },
        threePoint : function(){
            return this.$store.state.threePoint
        },
        twoPoint : function(){
            return this.$store.state.twoPoint
        },
        onePoint : function(){
            return this.$store.state.onePoint
        },
        threePoint2 : function(){
            return this.$store.state.threePoint2
        },
        twoPoint2 : function(){
            return this.$store.state.twoPoint2
        },
        onePoint2 : function(){
            return this.$store.state.onePoint2
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #e74e12;
    margin-top: 64px;
}

html {
    height:100%;
    background:#05FBFF
}

</style>