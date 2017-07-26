import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import user from './modules/user'
import config from './modules/config'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        ui,
        user,
        config
    },
    //strict: debug,
    //plugins: debug ? [createLogger()] : [],
    getters: {
        slidebarExpand(state) {
            if (ui.state.slidebar.expand) return true;
            return false;
        },
        slideWidth: state => {
            return ui.state.slidebar.width;
        }
    },

    mutations:{
        
    }
})