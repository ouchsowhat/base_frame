//对界面ui状态的管理
const state = {
    slidebar: {
        expand: true,
        width: 20
    }
}

const getters = {
    isExpand: state => {
        return state.slidebar.expand;
    }

}

const mutations = {
    expand(state, width) {
        state.slidebar.width = width;
        console.log(state.slidebar.width);
        state.slidebar.expand = true;
    },
    collapse(state) {
        state.slidebar.expand = false;
    }
}

export default {
    state,
    getters,
    mutations
}