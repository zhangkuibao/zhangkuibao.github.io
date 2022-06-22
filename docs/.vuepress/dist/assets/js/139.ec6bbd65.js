(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{793:function(t,e,a){"use strict";a.r(e);var n=a(12),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"判断方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断方法"}},[t._v("#")]),t._v(" 判断方法")]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" ===")]),t._v(" "),a("ol",[a("li",[t._v("类型不同时为 false")]),t._v(" "),a("li",[t._v("NaN 与任何值都不全等，包括它自己，即一方为 NaN 时为 false")]),t._v(" "),a("li",[t._v("对于非数值而言该值只与自身全等")]),t._v(" "),a("li",[t._v("对于数值：浮点数 0 不分正负，即 "),a("code",[t._v("+0 === -0")]),t._v("成立")])]),t._v(" "),a("h4",{attrs:{id:"全等算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全等算法"}},[t._v("#")]),t._v(" 全等算法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("If Type(x) is different from Type(y), return false.\nIf Type(x) is Undefined, return true.\nIf Type(x) is Null, return true.\nIf Type(x) is Number, then\n    If x is NaN, return false.\n    If y is NaN, return false.\n    If x is the same Number value as y, return true.\n    If x is +0 and y is −0, return true.\n    If x is −0 and y is +0, return true.\n    Return false.\nIf Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false.\nIf Type(x) is Boolean, return true if x and y are both true or both false; otherwise, return false.\nReturn true if x and y refer to the same object. Otherwise, return false.\n")])])]),a("h4",{attrs:{id:"特殊值比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊值比较"}},[t._v("#")]),t._v(" 特殊值比较")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")]),t._v(" ==")]),t._v(" "),a("ol",[a("li",[t._v("比较前将两个比较的值转换为同一类型，转换后的比较方式等同于 ===")]),t._v(" "),a("li",[t._v("相等操作符满足交换律（左右双方调换不会影响最终结果）")])]),t._v(" "),a("p",[t._v("相等操作符对于不同类型的值，进行的比较如下图所示(行为比较值 A，列为比较值 B)：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th"),t._v(" "),a("th",[t._v("B")]),t._v(" "),a("th"),t._v(" "),a("th"),t._v(" "),a("th"),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[a("strong",[t._v("Undefined")])]),t._v(" "),a("td",[a("strong",[t._v("Null")])]),t._v(" "),a("td",[a("strong",[t._v("Number")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[a("strong",[t._v("Boolean")])]),t._v(" "),a("td",[a("strong",[t._v("Object")])])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("A")])]),t._v(" "),a("td",[a("strong",[t._v("Undefined")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("IsFalsy(B)")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[a("strong",[t._v("Null")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("IsFalsy(B)")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[a("strong",[t._v("Number")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("A === B")])]),t._v(" "),a("td",[a("code",[t._v("A === ToNumber(B)")])]),t._v(" "),a("td",[a("code",[t._v("A=== ToNumber(B)")])]),t._v(" "),a("td",[a("code",[t._v("A== ToPrimitive(B)")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("ToNumber(A) === B")])]),t._v(" "),a("td",[a("code",[t._v("A === B")])]),t._v(" "),a("td",[a("code",[t._v("ToNumber(A) === ToNumber(B)")])]),t._v(" "),a("td",[a("code",[t._v("ToPrimitive(B) == A")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[a("strong",[t._v("Boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[a("code",[t._v("ToNumber(A) === B")])]),t._v(" "),a("td",[a("code",[t._v("ToNumber(A) === ToNumber(B)")])]),t._v(" "),a("td",[a("code",[t._v("A === B")])]),t._v(" "),a("td",[t._v("ToNumber(A) == ToPrimitive(B)")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[a("strong",[t._v("Object")])]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[a("code",[t._v("ToPrimitive(A) == B")])]),t._v(" "),a("td",[a("code",[t._v("ToPrimitive(A) == B")])]),t._v(" "),a("td",[t._v("ToPrimitive(A) == ToNumber(B)")]),t._v(" "),a("td",[a("code",[t._v("A === B")])])])])]),t._v(" "),a("p",[a("code",[t._v("ToNumber(A)")]),t._v(" 尝试在比较前将参数 A 转换为数字")]),t._v(" "),a("p",[a("code",[t._v("ToPrimitive(A)")]),t._v("通过尝试调用 A 的"),a("code",[t._v("A.toString()")]),t._v(" 和 "),a("code",[t._v("A.valueOf()")]),t._v(" 方法，将参数 A 转换为原始值（Primitive）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h3",{attrs:{id:"object-is"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-is"}},[t._v("#")]),t._v(" Object.is()")]),t._v(" "),a("p",[t._v("行为与 "),a("code",[t._v("===")]),t._v(" 相同，但是对于 NaN 和-0 和+0 进行特殊处理")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h2",{attrs:{id:"三种比较方式对不同值的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种比较方式对不同值的处理"}},[t._v("#")]),t._v(" 三种比较方式对不同值的处理")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("==")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("===")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Object.is")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('"foo"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"foo"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('"0"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('"17"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[1,2]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"1,2"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('new String("foo")')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"foo"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('{ foo: "bar" }')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('{ foo: "bar" }')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('new String("foo")')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('new String("foo")')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('"foo"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])]),t._v(" "),a("h2",{attrs:{id:"规范中的相等、严格相等以及同值相等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范中的相等、严格相等以及同值相等"}},[t._v("#")]),t._v(" 规范中的相等、严格相等以及同值相等")]),t._v(" "),a("p",[t._v("在 ES5 中， "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("==")]),a("OutboundLink")],1),t._v(" 相等在 "),a("a",{attrs:{href:"https://ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 11.9.3, The Abstract Equality Algorithm"),a("OutboundLink")],1),t._v("； "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("===")]),a("OutboundLink")],1),t._v(" 相等在 "),a("a",{attrs:{href:"https://ecma-international.org/ecma-262/5.1/#sec-11.9.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("11.9.6, The Strict Equality Algorithm"),a("OutboundLink")],1),t._v("。（请参考这两个链接，他们很简洁易懂。提示：请先阅读严格相等的算法）ES5 也提供了 same-value 相等， "),a("a",{attrs:{href:"https://ecma-international.org/ecma-262/5.1/#sec-9.12",target:"_blank",rel:"noopener noreferrer"}},[t._v("Section 9.12, The SameValue Algorithm"),a("OutboundLink")],1),t._v(" ，用在 JS 引擎内部。除了 11.9.6.4 和 9.12.4 在处理数字上的不同外，它基本和严格相等算法相同。ES6 简单地通过 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Object.is")]),a("OutboundLink")],1),t._v(" 暴露了这个算法。")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("ol",[a("li",[t._v("全等操作符的结果更容易预测，并且因为没有隐式转换，全等比较的操作会更快。")]),t._v(" "),a("li",[t._v("=== 是 == 的子集")])])])}),[],!1,null,null,null);e.default=s.exports}}]);