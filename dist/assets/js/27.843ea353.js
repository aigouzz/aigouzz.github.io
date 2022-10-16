(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{319:function(t,a,s){t.exports=s.p+"assets/img/react3-1.0f729280.png"},320:function(t,a,s){t.exports=s.p+"assets/img/react3-2.b6f5182f.png"},501:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("font",{staticStyle:{"font-size":"36px"}},[t._v("React生命周期的不同阶段，对应方法")])],1),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("在以前文章 (opens new window)中，我们了解到生命周期定义")]),t._v(" "),a("p",[t._v("生命周期（Life Cycle）的概念应用很广泛，特别是在经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”（Cradle-to-Grave）的整个过程")]),t._v(" "),a("p",[t._v("跟Vue一样，React整个组件生命周期包括从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程")]),t._v(" "),a("h2",{attrs:{id:"二、流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、流程"}},[t._v("#")]),t._v(" 二、流程")]),t._v(" "),a("p",[t._v("这里主要讲述react16.4之后的生命周期，可以分成三个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("创建阶段")]),t._v(" "),a("li",[t._v("更新阶段")]),t._v(" "),a("li",[t._v("卸载阶段")])]),t._v(" "),a("h3",{attrs:{id:"创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),a("p",[t._v("创建阶段主要分成了以下几个生命周期方法：")]),t._v(" "),a("ul",[a("li",[t._v("constructor")]),t._v(" "),a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidMount")])]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("实例过程中自动调用的方法，在方法内部通过super关键字获取来自父组件的props")]),t._v(" "),a("p",[t._v("在该方法中，通常的操作为初始化state状态或者在this上挂载方法")]),t._v(" "),a("h3",{attrs:{id:"getderivedstatefromprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),a("p",[t._v("该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例")]),t._v(" "),a("p",[t._v("执行时机：组件创建和更新阶段，不论是props变化还是state变化，也会调用")]),t._v(" "),a("p",[t._v("在每次render方法前调用，第一个参数为即将更新的props，第二个参数为上一个状态的state，可以比较props 和 state来加一些限制条件，防止无用的state更新")]),t._v(" "),a("p",[t._v("该方法需要返回一个新的对象作为新的state或者返回null表示state状态不需要更新")]),t._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("类组件必须实现的方法，用于渲染DOM结构，可以访问组件state与prop属性")]),t._v(" "),a("p",[t._v("注意： 不要在 render 里面 setState, 否则会触发死循环导致内存崩溃")]),t._v(" "),a("h3",{attrs:{id:"componentdidmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),a("p",[t._v("组件挂载到真实DOM节点后执行，其在render方法之后执行")]),t._v(" "),a("p",[t._v("此方法多用于执行一些数据获取，事件监听等操作")]),t._v(" "),a("h3",{attrs:{id:"更新阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段")]),t._v(" "),a("p",[t._v("该阶段的函数主要为如下方法：")]),t._v(" "),a("ul",[a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("getSnapshotBeforeUpdate")]),t._v(" "),a("li",[t._v("componentDidUpdate")])]),t._v(" "),a("h3",{attrs:{id:"getderivedstatefromprops-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops-2"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),a("p",[t._v("该方法介绍同上")]),t._v(" "),a("h3",{attrs:{id:"shouldcomponentupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate"}},[t._v("#")]),t._v(" shouldComponentUpdate")]),t._v(" "),a("p",[t._v("用于告知组件本身基于当前的props和state是否需要重新渲染组件，默认情况返回true")]),t._v(" "),a("p",[t._v("执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否")]),t._v(" "),a("p",[t._v("一般情况，不建议在该周期方法中进行深层比较，会影响效率")]),t._v(" "),a("p",[t._v("同时也不能调用setState，否则会导致无限循环调用更新")]),t._v(" "),a("h3",{attrs:{id:"render-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-2"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("介绍如上")]),t._v(" "),a("h3",{attrs:{id:"getsnapshotbeforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),a("p",[t._v("该周期函数在render后执行，执行之时DOM元素还没有被更新")]),t._v(" "),a("p",[t._v("该方法返回的一个Snapshot值，作为componentDidUpdate第三个参数传入")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSnapshotBeforeUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#enter getSnapshotBeforeUpdate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#enter componentDidUpdate snapshot = '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态")]),t._v(" "),a("h3",{attrs:{id:"componentdidupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),a("p",[t._v("执行时机：组件更新结束后触发")]),t._v(" "),a("p",[t._v("在该方法中，可以根据前后的props和state的变化做相应的操作，如获取数据，修改DOM样式等")]),t._v(" "),a("h3",{attrs:{id:"卸载阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载阶段"}},[t._v("#")]),t._v(" 卸载阶段")]),t._v(" "),a("h3",{attrs:{id:"componentwillunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount")]),t._v(" "),a("p",[t._v("此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等")]),t._v(" "),a("p",[t._v("一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建")]),t._v(" "),a("h2",{attrs:{id:"三、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),a("p",[t._v("新版生命周期整体流程如下图所示：")]),t._v(" "),a("img",{attrs:{src:s(319)}}),t._v(" "),a("p",[t._v("旧的生命周期流程图如下：")]),t._v(" "),a("img",{attrs:{src:s(320)}}),t._v(" "),a("p",[t._v("通过两个图的对比，可以发现新版的生命周期减少了以下三种方法：")]),t._v(" "),a("ul",[a("li",[t._v("componentWillMount")]),t._v(" "),a("li",[t._v("componentWillReceiveProps")]),t._v(" "),a("li",[t._v("componentWillUpdate\n其实这三个方法仍然存在，只是在前者加上了UNSAFE_前缀，如UNSAFE_componentWillMount，并不像字面意思那样表示不安全，而是表示这些生命周期的代码可能在未来的 react版本可能废除")])]),t._v(" "),a("p",[t._v("同时也新增了两个生命周期函数：")]),t._v(" "),a("ul",[a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("getSnapshotBeforeUpdate")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/pomelovico/keep/issues/23")]),t._v(" "),a("li",[t._v("https://segmentfault.com/a/1190000020268993")])])])}),[],!1,null,null,null);a.default=r.exports}}]);