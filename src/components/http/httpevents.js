import Vue from 'vue'
export const httpevents = new Vue()

httpevents.$on('notify',function(params){
    this.$notify.error({
          title: params.title,
          message: params.text
        });
})