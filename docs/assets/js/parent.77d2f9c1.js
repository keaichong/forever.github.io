(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["parent"],{"135b":function(n,t,a){"use strict";a.r(t);var s=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"parent"},[a("son",{attrs:{name:n.name,age:n.age,sex:n.sex,city:n.city,test:n.test,myvalue:n.inputval},on:{grandson:n.getGrandson,grandson1:n.getGrandson1,myinput:function(t){return n.inputval=t}}}),a("div",[n._v("inputval:"+n._s(n.inputval))]),a("div",[n._v("grandsonval:"+n._s(n.grandsonval))]),a("div",[n._v("grandsonval1:"+n._s(n.grandsonval1))])],1)},e=[],o=(a("b0c0"),function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"son"},[a("div",[n._v("city:"+n._s(n.city))]),a("p",[n._v("sonattrs:"+n._s(n.$attrs))]),a("p",[n._v("sonprops:"+n._s(n.$props))]),a("input",{attrs:{type:"text"},domProps:{value:n.myvalue},on:{input:n.inputval}}),a("p",[n._v("value is :"+n._s(n.datavalue))]),a("grand-son",n._g(n._b({},"grand-son",n.$attrs,!1),n.$listeners))],1)}),r=[],i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"grandson"},[a("div",[n._v("name:"+n._s(n.name))]),a("div",[n._v("sex:"+n._s(n.sex))]),a("div",[n._v("age:"+n._s(n.age))]),a("div",[n._v("我是grandsonattrs:"+n._s(n.$attrs))]),a("div",[n._v("我是grandsonprops:"+n._s(n.$props))]),a("div",[n._v("inject:"+n._s(n.parent))]),a("button",{on:{click:n.setEmit}},[n._v("点我传值")])])},u=[],l={props:["name","sex","age","city"],inheritAttrs:!0,inject:["parent"],data:function(){return{msg:"我是grandson的值",msg1:"我是grandson1得得得的值"}},methods:{setEmit:function(){this.$emit("grandson",this.msg),this.$emit("grandson1",this.msg1)}}},v=l,d=(a("d232"),a("2877")),c=Object(d["a"])(v,i,u,!1,null,"7e162a2f",null),g=c.exports,p={model:{prop:"myvalue",event:"myinput"},props:["city","myvalue"],data:function(){return{datavalue:this.value}},inheritAttrs:!1,components:{grandSon:g},computed:{},methods:{inputval:function(n){this.datavalue=n.target.value,this.$emit("myinput",this.datavalue)}}},m=p,_=Object(d["a"])(m,o,r,!1,null,null,null),f=_.exports,h={provide:function(){return{parent:"父组件的值"}},data:function(){return{name:"张三",age:"18岁",sex:"男人",test:"测试",city:"重庆",grandsonval:"",grandsonval1:"",inputval:"inputval"}},components:{son:f},methods:{getGrandson:function(n){this.grandsonval=n},getGrandson1:function(n){this.grandsonval1=n}},mounted:function(){var n=this;setTimeout((function(){n.grandsonval="定时器触发了",n.name="张三变成王五了"}),3e3)},watch:{grandsonObj:{handler:function(n,t){n.grandsonval!==t.grandsonval&&console.log("grandsonval改变了"),n.grandsonval1!==t.grandsonval1&&console.log("grandsonval1的值改改改改改变了")}}},computed:{grandsonObj:function(){var n=this.grandsonval,t=this.grandsonval1;return{grandsonval:n,grandsonval1:t}}}},y=h,b=Object(d["a"])(y,s,e,!1,null,null,null);t["default"]=b.exports},"9a65":function(n,t,a){},b0c0:function(n,t,a){var s=a("83ab"),e=a("9bf2").f,o=Function.prototype,r=o.toString,i=/^\s*function ([^ (]*)/,u="name";s&&!(u in o)&&e(o,u,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(n){return""}}})},d232:function(n,t,a){"use strict";var s=a("9a65"),e=a.n(s);e.a}}]);
//# sourceMappingURL=parent.77d2f9c1.js.map