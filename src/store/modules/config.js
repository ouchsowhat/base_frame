//对配置信息的管理
import axios from "axios"

import httpadapter from '../../components/http/httpAdapterPlugin.js'

const state = {
    config: {}
}

const getters = {
    baseLayers: state => {
        return state.config.baseLayers;
    },
    mineLayers: state => {
        return state.config.mineLayers;
    },
    otherLayers: state => {
        return state.config.otherLayers;
    }
}

const mutations = {
    setconfig(state, config) {
        console.log(config);
        state.config = config;
    }
}
const actions = {
    initilize(context) {
        console.log(httpadapter);
        httpadapter.get("/api/Global/configer", { a: 111 }).then(function(data) {
            console.log(data);
            context.commit('setconfig', data);

        }).catch(function(error) {

        });
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}