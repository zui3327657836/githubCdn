(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1b051236":"1b2ca3ae","chunk-bff5e1b6":"1974237c","chunk-ef50f85a":"ba409376"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-1b051236":1,"chunk-bff5e1b6":1,"chunk-ef50f85a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1b051236":"1cae7f72","chunk-bff5e1b6":"be88ee57","chunk-ef50f85a":"9e1562c0"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.$route.meta.noHeader?e._e():r("live-header"),r("keep-alive",[e.$route.meta.keepAlive?r("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():r("router-view")],1)},o=[],i=(r("1ead"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"live-header"},[n("div",{staticClass:"live-header-logo",on:{click:e.gotoIndex}},[n("img",{attrs:{src:r("9d64")}})]),n("div",{staticClass:"live-header-center"},[e._m(0),n("Input",{attrs:{placeholder:"输入相关的直播信息"},model:{value:e.searchInfo,callback:function(t){e.searchInfo=t},expression:"searchInfo"}}),n("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.setRoomList({keyword:e.searchInfo})}}},[e._v("搜索")])],1),n("div",{staticClass:"live-header-right"},[e.currentUser.id?n("Dropdown",[n("section",{staticClass:"live-header-right-user"},[n("div",{staticClass:"live-header-right-user-avatar"},[n("img",{attrs:{src:e.currentUser.avatar}})]),n("div",{staticClass:"live-header-right-user-name"},[n("div",[e._v(e._s(e.currentUser.name))])])]),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[n("div",{on:{click:e.gotoUserCenter}},[e._v("个人中心")])]),n("DropdownItem",[n("div",{on:{click:e.userLogout}},[e._v("退出登录")])])],1)],1):n("section",{staticClass:"live-header-right-user"},[n("div",{staticClass:"live-header-right-user-loginbtn",on:{click:function(t){e.loginPopupShow=!0}}},[e._v(" 登录/注册 ")])])],1),n("section",[n("Modal",{attrs:{width:"350px","mask-closable":!1,"footer-hide":!0,transfer:!1},model:{value:e.loginPopupShow,callback:function(t){e.loginPopupShow=t},expression:"loginPopupShow"}},[n("Tabs",[n("TabPane",{attrs:{label:"登录"}},[n("Input",{staticStyle:{margin:"10px 0"},attrs:{name:"account",prefix:"ios-contact",placeholder:"请输入账号",type:"text"},model:{value:e.loginData.account,callback:function(t){e.$set(e.loginData,"account",t)},expression:"loginData.account"}}),n("Input",{staticStyle:{margin:"10px 0"},attrs:{name:"password",prefix:"ios-contact",placeholder:"请输入密码",type:"password"},model:{value:e.loginData.password,callback:function(t){e.$set(e.loginData,"password",t)},expression:"loginData.password"}}),n("div",{staticStyle:{"margin-top":"30px"},attrs:{align:"right"}},[n("Button",{attrs:{type:"primary"},on:{click:e.userLogin}},[e._v("登录")])],1)],1),n("TabPane",{attrs:{label:"注册"}},[n("Form",{ref:"registerData",attrs:{model:e.registerData,rules:e.ruleRegistValidate,"label-width":60}},[n("FormItem",{attrs:{label:"昵称",prop:"name"}},[n("Input",{attrs:{placeholder:"请输入昵称"},model:{value:e.registerData.name,callback:function(t){e.$set(e.registerData,"name",t)},expression:"registerData.name"}})],1),n("FormItem",{attrs:{label:"邮箱",prop:"email"}},[n("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.registerData.email,callback:function(t){e.$set(e.registerData,"email",t)},expression:"registerData.email"}})],1),n("FormItem",{attrs:{label:"密码",prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.registerData.password,callback:function(t){e.$set(e.registerData,"password",t)},expression:"registerData.password"}})],1)],1),n("div",{attrs:{align:"right"}},[n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.userRegister("registerData")}}},[e._v("注册")])],1)],1)],1)],1)],1)])}),s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"live-header-center-list"},[r("div",{staticClass:"live-header-center-item"},[e._v("直播")]),r("div",{staticClass:"live-header-center-item"},[e._v("分类")]),r("div",{staticClass:"live-header-center-item"},[e._v("赛事")]),r("div",{staticClass:"live-header-center-item"},[e._v("视频")])])}],u=(r("96cf"),r("1da1")),c=r("5530"),l=r("2f62"),d={name:"liveHeader",data:function(){return{searchInfo:"",loginData:{account:"",password:""},registerData:{name:"",email:"",password:""},ruleRegistValidate:{name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{type:"string",min:6,max:20,message:"密码长度为6~20",trigger:"blur"}]},loginPopupShow:!1}},computed:Object(c["a"])({},Object(l["d"])({currentUser:function(e){return e.user.currentUser},token:function(e){return e.user.token}})),mounted:function(){},created:function(){this.getUserInfo()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["b"])(["setRoomList"])),Object(l["c"])(["updateRoomList","updateCurrentUser","updateToken"])),{},{gotoIndex:function(){this.$router.push({path:"/index"})},getUserInfo:function(){var e=this;this.$api.userApi.getUserInfo().then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateCurrentUser(r.data);case 2:e.loginPopupShow=!1,e.$Message.success({background:!1,content:"登录成功"}),console.log(e.currentUser);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},userLogin:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("userLogin -> this.loginData",e.loginData),t.next=3,e.$api.userApi.userLogin(e.loginData).then((function(t){if(200===t.code){var r=t.data;localStorage.setItem("living_token",r),e.updateToken()}}));case 3:e.getUserInfo();case 4:case"end":return t.stop()}}),t)})))()},userLogout:function(){localStorage.setItem("living_token",""),this.updateToken(),this.updateCurrentUser({}),this.$Message.error({background:!1,content:"退出登录"})},userRegister:function(e){var t=this;console.log("userRegister -> this.$refs[name]",this.$refs[e]),this.$refs[e].validate((function(e){if(e){var r=Object(c["a"])(Object(c["a"])({},t.registerData),{},{age:18});t.$api.userApi.addUser(r).then((function(e){console.log("userRegister -> res",e),t.$Message.success("注册成功")})).catch((function(e){t.$Message.error("注册失败")}))}else t.$Message.error("验证失败!")}))},gotoUserCenter:function(){this.$router.push({path:"/userCenter"})}})},p=d,f=(r("9ee9"),r("2877")),g=Object(f["a"])(p,i,s,!1,null,"143ca35d",null),m=g.exports,h={name:"app",components:{liveHeader:m}},v=h,b=(r("7c55"),Object(f["a"])(v,a,o,!1,null,null,null)),w=b.exports,k=(r("d3b7"),r("8c4f")),y=Object({NODE_ENV:"production",BASE_URL:"/"}),O="development"===y.NODE_ENV?"http://localhost":"https://www.example.com",R={env:y.NODE_ENV,mode:y.VUE_APP_CURRENTMODE,webUrl:"electron"===y.VUE_APP_CURRENTMODE?"".concat(O,":8512"):"/webserve",socketUrl:{barrage:"development"===y.NODE_ENV?"".concat(O,":8511/barrage"):"".concat(O,"/barrage")},livingUrl:"development"===y.NODE_ENV?"".concat(O,":8000/live"):"".concat(O,"/live/live")},U=R;n["default"].use(k["a"]);var _=new k["a"]({mode:"electron"===U.mode?"hash":"history",routes:[{path:"/",redirect:{name:"index"}},{path:"/index",name:"index",meta:{noHeader:!1},component:function(){return r.e("chunk-1b051236").then(r.bind(null,"3636"))}},{path:"/room",name:"room",meta:{noHeader:!1},component:function(){return r.e("chunk-bff5e1b6").then(r.bind(null,"a010"))}},{path:"/userCenter",name:"userCenter",meta:{noHeader:!1},component:function(){return r.e("chunk-ef50f85a").then(r.bind(null,"1ec0"))}}]}),x=r("d4ec"),D=r("bee2"),j=(r("ac1f"),r("5319"),r("bc3a")),C=r.n(j),E=(r("4328"),C.a.create({}));E.defaults.headers.post["Content-Type"]="application/json",E.interceptors.request.use(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=localStorage.getItem("living_token"),r&&(t.headers.authorization=decodeURI(r)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),E.interceptors.response.use((function(e){if(e.data.code)switch(e.data.code){case 1002:store.state.isLogin=!1,router.replace({path:"login",query:{redirect:router.currentRoute.fullPath}})}return e}),(function(e){return Promise.reject(e)}));var I=E,L=function(){function e(){Object(x["a"])(this,e)}return Object(D["a"])(e,[{key:"getRoomList",value:function(e){return e&&e.type?I.get("".concat(U.webUrl,"/livingRoom/roomListByType"),{params:e}).then((function(e){return e.data.data})):I.get("".concat(U.webUrl,"/livingRoom/roomList"),{params:e}).then((function(e){return e.data.data}))}},{key:"getRoomDetail",value:function(e){return I.get("".concat(U.webUrl,"/livingRoom/roomDetail"),{params:e}).then((function(e){return e.data.data}))}},{key:"getRoomDetailByUserId",value:function(e){return I.get("".concat(U.webUrl,"/livingRoom/roomDetailByUserId"),{params:e}).then((function(e){return e.data.data}))}},{key:"addRoom",value:function(e){return I.get("".concat(U.webUrl,"/livingRoom/addRoom"),e).then((function(e){return e.data}))}},{key:"editRoom",value:function(e){return I.post("".concat(U.webUrl,"/livingRoom/editRoom"),e).then((function(e){return e.data}))}}]),e}(),$=new L,P=$,S=function(){function e(){Object(x["a"])(this,e)}return Object(D["a"])(e,[{key:"userLogin",value:function(e){return I.post("".concat(U.webUrl,"/users/login"),e).then((function(e){return e.data}))}},{key:"getUserInfo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LNsKeo69KLCuGrbNg0nlg2jwQDQub28C";return I.get("".concat(U.webUrl,"/users/getUserInfo"),{params:{id:e}}).then((function(e){return e.data}))}},{key:"addUser",value:function(e){return I.post("".concat(U.webUrl,"/users/addUser"),e).then((function(e){return e.data}))}}]),e}(),M=new S,N=M,T={livingRoomApi:P,userApi:N},A=T,B={roomList:[]},V={setRoomList:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,A.livingRoomApi.getRoomList(t);case 3:a=r.sent,n("updateRoomList",a);case 5:case"end":return r.stop()}}),r)})))()}},q={updateRoomList:function(e,t){e.roomList=t}},H={},F={namespace:"livingRoom",state:B,actions:V,mutations:q,getters:H},J={currentUser:{},token:""},K={},Q={updateCurrentUser:function(e,t){e.currentUser=t},updateToken:function(e){e.token=localStorage.getItem("living_token")}},z={},G={state:J,actions:K,mutations:Q,getters:z},W=r("a7fe"),X={barrageMsgList:[]},Y={},Z={pushbarrageMsgList:function(e,t){e.barrageMsgList.push(t)},unshiftbarrageMsgList:function(e){e.barrageMsgList.unshift()}},ee={},te={state:X,actions:Y,mutations:Z,getters:ee};n["default"].use(l["a"]);var re=new l["a"].Store({modules:{room:F,user:G,barrage:te}}),ne=r("f825"),ae=r.n(ne),oe=(r("f8ce"),r("8055")(U.socketUrl.barrage));console.log("socketBarrage",oe),console.log("baseEnv",U),console.log("baseEnv.socketUrl.barrage",U.socketUrl.barrage);var ie=function(){function e(){Object(x["a"])(this,e)}return Object(D["a"])(e,[{key:"joinRoom",value:function(e){oe.emit("JOINROOM",e)}},{key:"leaveRoom",value:function(e){oe.emit("LEAVEROOM",e)}},{key:"roomChat",value:function(e){oe.emit("ROOMCHAT",e)}}]),e}(),se=new ie;console.log("store",re),n["default"].use(ae.a),n["default"].config.productionTip=!1,n["default"].prototype.$baseEnv=U,n["default"].prototype.$commonFunc=W["a"],n["default"].prototype.$api=A,n["default"].prototype.$sockBarrage=se,n["default"].prototype.$socketBarrage=oe,new n["default"]({router:_,store:re,render:function(e){return e(w)}}).$mount("#app")},"5ba8":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("5ba8"),a=r.n(n);a.a},"9d64":function(e,t,r){e.exports=r.p+"img/logo.01a55425.png"},"9ee9":function(e,t,r){"use strict";var n=r("bb84"),a=r.n(n);a.a},a7fe:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("c975"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("841c"),r("1276");var n=r("d4ec"),a=r("bee2"),o=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"getCode",value:function(e){for(var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],r="",n=0;n<e;n++){var a=parseInt(62*Math.random());r+=t[a]}return r}},{key:"getUrlParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?decodeURI(r[2]):null}},{key:"getUrlParams",value:function(){var e=window.location.search;console.log(window.location),e=e.substring(1);var t={};if(e.indexOf("&")>-1){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].split("=");t[n[0]]=n[1]}}else e=e.split("="),t[e[0]]=e[1];return t}},{key:"myQueue",value:function(){var e=[];this.list=function(){return e},this.enqueue=function(t){e.push(t)},this.dequeue=function(t){e.shift()},this.front=function(){return e[0]},this.end=function(){return e[e.length-1]},this.isEmpty=function(){return 0===e.length},this.size=function(){return e.length},this.print=function(){console.log(e.toString())}}}]),e}(),i=new o},bb84:function(e,t,r){}});