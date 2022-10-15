(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{282:function(l,n,i){"use strict";i.r(n);var v=i(10),e=Object(v.a)({},(function(){var l=this,n=l._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[n("h3",{attrs:{id:"json-stringify的几个用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify的几个用法"}},[l._v("#")]),l._v(" JSON.stringify的几个用法")]),l._v(" "),n("ul",[n("li",[l._v("JSON.stringify(value[, replacer [, space]])")])]),l._v(" "),n("p",[l._v("value：(必须) 可以是任意值")]),l._v(" "),n("p",[l._v("replacer：(可选) 函数 (key, value) => {} 序列化过程中都要经过函数处理")]),l._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[l._v("    数组：只有包含在这个数组中属性名才会序列化到JSON字符串中\n\n    null or 没有：序列化所有\n")])])]),n("p",[l._v("space：(可选) 指定缩进用的空白字符串")]),l._v(" "),n("ul",[n("li",[l._v("9个特性\n"),n("ul",[n("li",[l._v("no1\n"),n("ul",[n("li",[l._v("undefined、任意的函数以及symbol值，出现在非数组对象的属性值中时在序列化过程中会被忽略略")]),l._v(" "),n("li",[l._v("undefined、任意的函数以及symbol值出现在数组中时会被转换成 null")]),l._v(" "),n("li",[l._v("undefined、任意的函数以及symbol值被单独转换时，会返回 undefined")])])]),l._v(" "),n("li",[l._v("no2\n"),n("ul",[n("li",[l._v("布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值")])])]),l._v(" "),n("li",[l._v("no3\n"),n("ul",[n("li",[l._v("所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们")])])]),l._v(" "),n("li",[l._v("no4\n"),n("ul",[n("li",[l._v("NaN 和 Infinity 格式的数值及 null 都会被当做 null")])])]),l._v(" "),n("li",[l._v("no5\n"),n("ul",[n("li",[l._v("转换值如果有 toJSON() 方法，该方法定义什么值将被序列化")])])]),l._v(" "),n("li",[l._v("no6\n"),n("ul",[n("li",[l._v("Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理")])])]),l._v(" "),n("li",[l._v("no7\n"),n("ul",[n("li",[l._v("对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误")])])]),l._v(" "),n("li",[l._v("no8\n"),n("ul",[n("li",[l._v("其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性")])])]),l._v(" "),n("li",[l._v("no9\n"),n("ul",[n("li",[l._v("当尝试去转换 BigInt 类型的值会抛出错误")])])])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);