# my-github-page

## 说明

  这是个人博客首页（也可以理解为portfolio）。
  之前用的三驾马车直接开跑，有点累。故，准备利用Vue全家桶重新构造一个。用Markdown书写blog，然后经过加工处理成能放在GitHub Page上直接展示的文件。
  外观，整体上参考MaterialDesign给的Template-[portfolio](https://getmdl.io/templates/portfolio/index.html)，用Bootstrap实现。

## 开发环境

### webpack管理多个单页应用。

说来惭愧，还不太熟悉webpack，暂时就不弄了。这个主要是考虑到在Vue全家桶之下，可以在不同的域作多页的细分以及增量开发（后台加一个链接新页面就可以上线）。 ~~以后来优化吧。~~

## 流水记事

 目前，主要就portfolio和blog两个大的模块。
 主要考虑的是组件： 同页的组件和跨页的组件。 参考Vue所提及slot的用法。
 我觉得我还是需要jQuery的（没什么根据），所以需要掌握Vue的插件的用法[插件](https://cn.vuejs.org/v2/guide/plugins.html?#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6)

这段代码就是给Vue原型链添加jQuery属性，可以在实例中引用。

```js
export default function plugin(Vue, jQuery) {

  if (plugin.installed) {
    return;
  }
  plugin.installed = true;

  if (!jQuery) {
    console.error('You have to install jQuery');
    return;
  }

  Vue.jQuery = jQuery;

  Object.defineProperties(Vue.prototype, {

    jQuery: {
      get: function get() {
        return jQuery;
      }
    },

    $jq: {
      get: function get() {
        return jQuery;
      }
    }
  });
}
...
Vue.use(plugin,jQuery);
```

### 响应式设计

一般使用媒体查询（media query），但是这里Vue是数据驱动视图，所以引入Vuex（早晚都要用的）用来管理显示状态mainState。用于管理响应式的视图。window resize 当然需要 Debouncing and Throttling。有空再学习一下lodash的debounce。这里参考《高程3》的代码段：

```js
//据说《高程3》里的throttle应该是debounce
function debounce(method,context){
  clearTimeout(method.id);
  method.id = setTimeout(function(){
    method.call(context);
  },500);
}
```

我最开始使用jQuery一把梭，

```js
  beforeCreate: function() {
    function debounce(method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(function() {
        method.call(context);
      }, 500);
    }
    function consoleWindow(e) {
      console.dir(e);
      console.log(
        "outerHeight: ",
        window.outerHeight,
        "outerWidth: ",
        window.outerWidth
      );
      // if (window.matchMedia("(max-width: 415px)").matches) {
      // } else {
      // }
    }
    (function(vue, $) {
      $(window)
        .on("resize.mobile", function(e) {
          debounce(consoleWindow);
        })
        .trigger("resize.mobile");
    })(this, this.jQuery);
  },
```

但是在Vue当中好似有更合适的角色来完成这件事：watch。
~~以后来优化吧。~~

![布局](./read-me/layout.jpg)

- 利用《CSS揭秘》提示的flex方式完成stichy-footer。
- 利用Vue响应式的特点完成Nav active样式的切换。以数组机构组织导航数据，比较当前active的序号是否匹配而决定是否添加`.active`样式。因click事件改变当前activeAnchor。

## ~~以后来优化吧。~~

- 前端的路由跳转后会重新渲染，可以细分那些模块是不需要这样处理。
- 2018年4月12日13:59:51为何同样的模块，App.vue container经过路由之后宽度就不是100%了？目前是添加了width:100%在style中......应该是媒体查询，不应该用widt：100%；(还是 container 和row的嵌套关系，最开始是将row放在父元素，改为子元素自己决定，父元素作为容器是最好的)

## 关于博文的来源

1. 最开始是打算在location完成博文的处理，最终形成直接可读取的json文件。但是不仅繁琐，而且太依赖本地的构建，并不灵活。所以目前正试图利用Github的API直接读取字符串，在浏览器端进行分析处理。

[一篇文章搞定Github API 调用 (v3）](https://segmentfault.com/a/1190000015144126)
[利用 github pages 与 github api 搭建博客](https://github.com/eyasliu/blog/issues/2)
[GitHub API](https://developer.github.com/v3/repos/#get)
