import Vue from 'vue'
import httpuihelper from './httpuihelper.vue'
import axios from 'axios'
import { httpevents } from './httpevents.js'
import { configConst } from '../../configConst.js'
export default {
    install: function(vue, options) {
        //注册组件
        Vue.component('httpuihelper', httpuihelper)

        vue.prototype.$http = this;
        console.log("注册全局的通信拦截器");
        // 注册全局的通信拦截器
        axios.interceptors.response.use(this.loadSucess, this.loadError);
        console.log("设置通讯的默认属性");
        // 设置所有的通信协议类型
        //  axios.defaults.withCredentials = false;
        axios.defaults.baseURL = configConst.base_url;
    },
    get: function(url, parameter) {
        return axios.get(url, parameter);
    },
    post: function(url, parameter) {
        return axios["post"](url, parameter);
    },
    put:function(url,parameter){
      return axios["put"](url,parameter);  
    },
    delete: function(url, parameter){
        return axios.delete(url, parameter);
    },
    loadSucess: function(response) { //连接没有错误，请继续执行，可以在这里过滤返回的特定类型，比如error特性，然后统一相应
        if (response.status != 200) {
            httpevents.$emit('notify', { //统一的错误请求处理
                title: 'HTTP请求错误',
                text: response.statusText,
                type: "error"
            });
            return Promise.reject(response.statusText);
        } else if (response.data.errCode === 0) {
            return response.data;
        } else {
            httpevents.$emit('notify', { //统一的错误请求处理
                title: 'HTTP请求错误',
                text: response.data.errMsg,
                type: "error"
            });
            return Promise.reject(response.data.errMsg);
        }
    },
    loadError: function(error) {
        httpevents.$emit('notify', { //统一的错误请求处理
            title: 'HTTP请求错误',
            text: error.message,
            type: "error"
        });
        return Promise.reject(error);
    }
};