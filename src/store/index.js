import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: 'チーム名',
        message2: 'チーム名',
        threePoint: 0,
        threePoint2: 0,
        twoPoint: 0,
        twoPoint2: 0,
        onePoint: 0,
        onePoint2: 0,
    },
    getters: {
        message(state){
            return state.message
        },
        message2(state){
            return state.message2
        }
    },
    mutations: {
        setMessage(state,payload){
            state.message=payload.message
        },
        setMessage2(state,payload2){
            state.message2=payload2.message2
        },
        increment: function(state) {
            state.threePoint+=3
        },
        increment3: function(state){
            state.threePoint2+=3
        },
        increment1: function(state) {
            state.twoPoint+=2
        },
        increment4: function(state){
            state.twoPoint2+=2
        },
        increment2: function(state){
            state.onePoint+=1
        },
        increment5: function(state){
            state.onePoint2+=1
        }
    },
    actions:{
        doUpdate({ commit },message){
            commit('setMessage',{ message })
        },
        doUpdate2({ commit },message2){
            commit('setMessage2',{ message2 })
        }
    }
})
