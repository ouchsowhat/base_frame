
<template>
  <!--内容区域，包括左侧抽屉菜单（split-pane），分割线（split-pane-gutter），右侧内容区域（split-pane-item）-->
  <div class="split-pane" @mousemove="dragMove" @mouseup="dragEnd" @mouseleave="dragEnd" :class="{ 'is-dragging': dragging }">
     <div class="split-pane-item" :style="{ width: splitLeft }">
      <slot name="left"></slot>
    </div>
    <div class="split-pane-gutter" @mousedown="dragStart" :style="{ width: gutter + 'px' }">
      <a @mousedown="click" v-bind:class="arrayClass"></a>
    </div>
    <div class="split-pane-item" :style="{ width: splitRight }">
      <slot name="right"></slot>
    </div> 
  </div>
</template>

<script>
export default {
  name: "splitpane",
  data() {
    return {
      gutter: 5,
      split: 20,
      dragging: false,
      savesplit: 0,
      isExpand: true
    }
  },
  computed: {
    splitLeft: function () {
      console.log(this.$store.getters.slideWidth)
      
      return `calc(${this.split}% - ${this.gutter}px)`
    },
    splitRight: function () {
      return `calc(${100 - this.split}% - ${this.gutter}px)`
    },
    arrayClass: function () {
      if (this.isExpand == true)
        return "split-expand";
      return "split-collapse";
    },
    storewidh: function () {
      return this.$store.getters.slideWidth;
    }
  },
  watch: {
    storewidh(val,old) {
      console.log("监听宽度变化" + val)
      if (val !== undefined) {
        this.split = val;
      }
    }
  },
  methods: {
    dragStart(e) {
      this.dragging = true
      this.startX = e.pageX
      this.startSplit = this.split
    },
    dragMove(e) {
      if (this.dragging) {
        const dx = e.pageX - this.startX
        const totalWidth = this.$el.offsetWidth
        this.split = this.startSplit + ~~(dx / totalWidth * 100)
      }
    },
    dragEnd() {
      this.dragging = false
    },
    click() {
      if (this.isExpand == false || this.split == 0) {
        if (this.split == 0) {
          this.split = 20;
        } else {
          this.split = this.savesplit;
        }
        this.isExpand = true;
      } else {
        this.savesplit = this.split;
        this.split = 0;
        this.isExpand = false;
      }
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.split-pane {
  height: 100%
}

.split-pane-item,
.split-pane-gutter {
  float: left;
  height: 100%;
}

.split-pane-gutter {
  background: rgb(224, 224, 224);
  cursor: ew-resize;
  position: relative;
  z-index: 999;
}

.split-pane-gutter a {
  display: block;
  height: 58px;
  width: 21px;
  position: absolute;
  top: 45%;
  left: 4px;
  cursor: pointer;
  background-image: url(../assets/splitter-arrow.png)
}

.split-expand {
  background-position: 0px 0px;
}

.split-collapse {
  background-position: -44px 0px;
}

.is-dragging {
  cursor: ew-resize;
}
</style>
