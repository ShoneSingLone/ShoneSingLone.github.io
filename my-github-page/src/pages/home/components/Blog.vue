<template>
  <div class="container">
    <template v-for="blog in blogList">
      <panel-card :blog="blog" />
    </template>
  </div>
</template>

<script>
import PanelBlogCard from "./PanelBlogCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Blog",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["blogList"])
  },
  methods: {
    ...mapActions(["getBlogList"]),
    showBlog(blog) {
      console.log(blog);
    }
  },
  components: {
    "panel-card": PanelBlogCard
  },
  mounted() {
    console.log("Blog mounted", this.data);
    console.log("Blog.vue mounted");
    this.getBlogList();
  },
  activated() {
    console.log("Blog.vue activated");
    // window.blogVue = this;
    // console.log(this.data);
  },
  beforeRouteEnter(to, from, next) {
    console.log("Blog.vue beforeRouteEnter");
    next(vue => {});
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Blog.vue beforeRouteUpdate");
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log("Blog.vue beforeRouteLeave");
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
