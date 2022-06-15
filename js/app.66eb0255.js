(function(){"use strict";var o={297:function(o,t,e){var n=e(963),s=e(252);function i(o,t,e,n,i,a){const d=(0,s.up)("TodoView");return(0,s.wg)(),(0,s.j4)(d)}const a=o=>((0,s.dD)("data-v-7f476b13"),o=o(),(0,s.Cn)(),o),d={class:"p-todo-view"},c=a((()=>(0,s._)("h1",null,"TODO-LIST",-1)));function u(o,t,e,n,i,a){const u=(0,s.up)("TodoForm"),r=(0,s.up)("TodoLists");return(0,s.wg)(),(0,s.iD)("div",d,[c,(0,s.Wm)(u),(0,s.Wm)(r)])}const r=o=>((0,s.dD)("data-v-0bdef02e"),o=o(),(0,s.Cn)(),o),l={class:"p-todo-list"},p=r((()=>(0,s._)("li",{class:"c-todo-list-title"},[(0,s._)("div",null,"タスク名"),(0,s._)("div",null,"締め切り日"),(0,s._)("div",null,"削除")],-1)));function f(o,t,e,n,i,a){const d=(0,s.up)("TodoRow");return(0,s.wg)(),(0,s.iD)("ul",l,[p,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.$store.getters.getAllTodos,(t=>((0,s.wg)(),(0,s.j4)(d,{class:"c-todo-row",key:t.id,todo:t,onClickIcon:o.clickIcon},null,8,["todo","onClickIcon"])))),128))])}var m=e(577);const v={class:"p-todo-row"},h={class:"c-todo-name"},b={class:"c-todo-deadLine"};function w(o,t,e,n,i,a){const d=(0,s.up)("BaseIcon");return(0,s.wg)(),(0,s.iD)("li",v,[(0,s._)("div",h,(0,m.zw)(o.todo.name),1),(0,s._)("div",b,(0,m.zw)(o.todo.deadLine),1),(0,s.Wm)(d,{class:"c-cancel-icon",iconClass:"fa-solid fa-rectangle-xmark",onClick:o.clickIcon},null,8,["onClick"])])}function g(o,t,e,n,i,a){return(0,s.wg)(),(0,s.iD)("i",{class:(0,m.C_)(o.iconClass)},null,2)}var D=(0,s.aZ)({props:{iconClass:{type:String}}}),T=e(744);const _=(0,T.Z)(D,[["render",g]]);var I=_,k=(0,s.aZ)({name:"TodoList",components:{BaseIcon:I},props:{todo:{type:Object}},methods:{clickIcon(){this.$emit("clickIcon",this.todo)}}});const y=(0,T.Z)(k,[["render",w],["__scopeId","data-v-ec2cb4b4"]]);var L=y,O=(0,s.aZ)({name:"TodoList",components:{TodoRow:L},methods:{clickIcon(o){this.$store.commit("deleteTodo",o.id)}}});const Z=(0,T.Z)(O,[["render",f],["__scopeId","data-v-0bdef02e"]]);var B=Z;const C=(0,s.Uk)("タスク名"),N=(0,s.Uk)("締め切り日"),V=(0,s.Uk)("新規作成");function j(o,t,e,i,a,d){const c=(0,s.up)("BaseInput"),u=(0,s.up)("BaseButton");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:t[0]||(t[0]=(0,n.iM)(((...t)=>o.submitNewTodo&&o.submitNewTodo(...t)),["prevent"])),class:"p-todo-form"},[(0,s.Wm)(c,{type:o.text,value:o.todoName,placeholder:"タスク名を入力してください",onInputValue:o.inputName},{before:(0,s.w5)((()=>[C])),_:1},8,["type","value","onInputValue"]),(0,s.Wm)(c,{type:"datetime-local",value:o.todoDeadLine,onInputValue:o.inputDeadLine},{before:(0,s.w5)((()=>[N])),_:1},8,["value","onInputValue"]),(0,s.Wm)(u,{hasSubmit:!0},{default:(0,s.w5)((()=>[V])),_:1})],32)}const S=["type"];function W(o,t,e,n,i,a){return(0,s.wg)(),(0,s.iD)("button",{type:o.hasSubmit?"submit":null,onClick:t[0]||(t[0]=t=>o.hasFunction?o.clickButton:null),class:"c-base-button"},[(0,s.WI)(o.$slots,"default",{},void 0,!0)],8,S)}var $=(0,s.aZ)({props:{hasSubmit:{type:Boolean,default:!1},hasFunction:{type:Boolean,default:!1}},methods:{clickButton(){this.$emit("clickButton")}}});const x=(0,T.Z)($,[["render",W],["__scopeId","data-v-5890ecfe"]]);var F=x;const A={class:"c-base-input-label"},U=["type","value","placeholder"];function z(o,t,e,n,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,m.C_)(["p-base-input",{focus:o.focus}])},[(0,s._)("label",A,[(0,s.WI)(o.$slots,"before",{},void 0,!0),(0,s._)("input",{class:"c-base-input",type:o.type,value:o.value,placeholder:o.placeholder,onInput:t[0]||(t[0]=(...t)=>o.inputValue&&o.inputValue(...t)),onFocus:t[1]||(t[1]=(...t)=>o.focusOn&&o.focusOn(...t)),onBlur:t[2]||(t[2]=(...t)=>o.focusOut&&o.focusOut(...t))},null,40,U)])],2)}var M=(0,s.aZ)({data(){return{focus:!1}},props:{type:String,value:String,placeholder:String},methods:{inputValue(o){const t=o.target;this.$emit("inputValue",t.value)},focusOn(){this.focus=!0},focusOut(){this.focus=!1}}});const P=(0,T.Z)(M,[["render",z],["__scopeId","data-v-61e4e62d"]]);var R=P,E=(0,s.aZ)({components:{BaseButton:F,BaseInput:R},data(){return{todoName:"",todoDeadLine:""}},methods:{submitNewTodo(){if(this.checkNewTodo){const o=this.todoDeadLine.replace("T"," ").replaceAll("-","/");this.$store.commit("addTodo",{name:this.todoName,deadLine:o}),this.todoName="",this.todoDeadLine=""}else alert("タスク名、締め切り日のどちらも入力してください。")},inputName(o){this.todoName=o},inputDeadLine(o){this.todoDeadLine=o}},computed:{checkNewTodo(){return!(!this.todoName||!this.todoDeadLine)}}});const H=(0,T.Z)(E,[["render",j],["__scopeId","data-v-19001e2e"]]);var K=H,Y=(0,s.aZ)({name:"TodoList",components:{TodoLists:B,TodoForm:K}});const q=(0,T.Z)(Y,[["render",u],["__scopeId","data-v-7f476b13"]]);var G=q,J=(0,s.aZ)({name:"App",components:{TodoView:G}});const Q=(0,T.Z)(J,[["render",i]]);var X=Q,oo=e(907),to=(0,oo.MT)({state:{todos:[{id:0,name:"todo1",deadLine:"2022/06/15 20:33",isDone:!1},{id:1,name:"todo2",deadLine:"2022/06/15 20:33",isDone:!1},{id:2,name:"todo3",deadLine:"2022/06/15 20:33",isDone:!0}]},getters:{getAllTodos(o){return o.todos},getDoneTodos(o){return o.todos.filter((o=>o.isDone))},getNotDoneTodos(o){return o.todos.filter((o=>!o.isDone))}},mutations:{addTodo(o,t){const e=o.todos.map((o=>o.id)),n=e.reduce(((o,t)=>o<t?t:o));console.log(n);const s={id:n,name:t.name,deadLine:t.deadLine,isDone:!1};o.todos.push(s)},updateIsDone(o,t){o.todos=o.todos.map((o=>(o.id===t&&(o.isDone=!o.isDone),o)))},deleteTodo(o,t){o.todos=o.todos.filter((o=>o.id!==t))}},actions:{},modules:{}});(0,n.ri)(X).use(to).mount("#app")}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return o[n](i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,n,s,i){if(!n){var a=1/0;for(r=0;r<o.length;r++){n=o[r][0],s=o[r][1],i=o[r][2];for(var d=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(o){return e.O[o](n[c])}))?n.splice(c--,1):(d=!1,i<a&&(a=i));if(d){o.splice(r--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var r=o.length;r>0&&o[r-1][2]>i;r--)o[r]=o[r-1];o[r]=[n,s,i]}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var s,i,a=n[0],d=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==o[t]}))){for(s in d)e.o(d,s)&&(e.m[s]=d[s]);if(c)var r=c(e)}for(t&&t(n);u<a.length;u++)i=a[u],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(r)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(297)}));n=e.O(n)})();
//# sourceMappingURL=app.66eb0255.js.map