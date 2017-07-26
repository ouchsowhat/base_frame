
<template>
  
</template>

<script>
// 这里是所有HTTP请求的代理.目前的主要的作用是增加额外的属性，例如token等
import axios from 'axios'

import { httpevents } from './httpevents.js'


export default {
    name: 'httpadapter',
    data() { return {} },
    methods: {
        notify: function (data) {
           this.$notify(data);
        }
    },
    mounted() {
       
    }, created() {
        //注册事件
        httpevents.$on('notify', event => {
            this.get(event.url, event.params);
        });
        
    }
}
</script>

<style lang="scss">

</style>
