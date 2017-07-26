//对用户状态的管理
import axios from 'axios'
const state = {
    user: {
        name: "user-name",
        token: "user-token"
    }
}

const getters = {
    token: state => {
        return state.user.token;
    }
}

const mutations = {
    login(state, user) {
        state.user.name = user.name;
        state.user.token = user.token;
        //这里，设置了axios的全局对象
        axios.defaults.headers.common['token'] = user.token;
        console.log(axios.defaults.headers.common['token'])
    },
    logout(state) {
        axios.defaults.headers.common['token'] = "";
    }
}

export default {
    state,
    getters,
    mutations
}