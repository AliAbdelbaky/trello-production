(function(){var e={2706:function(e,t,s){"use strict";var r={};s.r(r),s.d(r,{actions:function(){return ie},getters:function(){return oe},mutations:function(){return ae},namespaced:function(){return re},state:function(){return ne}});var n={};s.r(n),s.d(n,{actions:function(){return ce},mutations:function(){return de},namespaced:function(){return ue},state:function(){return le}});var a={};s.r(a),s.d(a,{actions:function(){return he},getters:function(){return fe},mutations:function(){return ge},namespaced:function(){return me},state:function(){return pe}});var i={};s.r(i),s.d(i,{actions:function(){return Te},getters:function(){return ke},mutations:function(){return we},namespaced:function(){return Se},state:function(){return Ee}});var o=s(9242),u=s(3396);function l(e,t,s,r,n,a){const i=(0,u.up)("layout-view-vue");return(0,u.wg)(),(0,u.j4)(i)}function d(e,t,s,r,n,a){const i=(0,u.up)("ToolbarVue"),l=(0,u.up)("SidebarVue"),d=(0,u.up)("BaseLoading");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(i),"login"!==this.$route.name?((0,u.wg)(),(0,u.j4)(l,{key:0})):(0,u.kq)("",!0),(0,u.Wm)(o.uT,null,{default:(0,u.w5)((()=>[(0,u.Wm)(d)])),_:1})],64)}var c=s(7139);const m={key:0,class:"toolbar"},p={class:"content"},g={class:"tooltips"},h={class:"user-info"},f={class:"user-info-img-container"},_=["src","alt"],v={class:"user-info-desc"},b={class:"user-name"},S={class:"user-title"},E={class:"logout-button"};function w(e,t,s,r,n,a){const i=(0,u.up)("BaseIcon"),o=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)("div",{class:(0,c.C_)(["wrapper",[e.SidebarModule.isActive,e.SidebarModule.isPhoneClass,"login"==this.$route.name?"full-w":""]])},["login"!==this.$route.name?((0,u.wg)(),(0,u.iD)("nav",m,[(0,u._)("div",p,[(0,u._)("div",g,[(0,u._)("div",h,[(0,u._)("div",f,[(0,u._)("img",{src:e.UserModule.user.img,alt:e.UserModule.user.name},null,8,_)]),(0,u._)("div",v,[(0,u._)("div",b,(0,c.zw)(e.UserModule.user.name),1),(0,u._)("div",S,(0,c.zw)(e.UserModule.user.title),1)])]),(0,u._)("div",{class:"theme-toggler",onClick:t[0]||(t[0]=(...e)=>a.toggleTheme&&a.toggleTheme(...e))},[e.ThemeModule.lightTheme?((0,u.wg)(),(0,u.j4)(i,{key:0,name:"sun"})):((0,u.wg)(),(0,u.j4)(i,{key:1,name:"moon"}))]),(0,u._)("div",E,[(0,u._)("button",{onClick:t[1]||(t[1]=(...e)=>a.logout&&a.logout(...e))},[(0,u.Wm)(i,{name:"power",width:"100%",height:"100%"})])])]),(0,u._)("button",{class:"sidebar-toggler",onClick:t[2]||(t[2]=(...e)=>a.initSidebarTheme&&a.initSidebarTheme(...e))},[(0,u.Wm)(i,{name:"align-justify"})])])])):(0,u.kq)("",!0),(0,u.Wm)(o)],2)}var T=s(65),k={computed:{...(0,T.rn)(["ThemeModule","SidebarModule","UserModule"])},methods:{toggleTheme(){this.$store.dispatch("ThemeModule/toggleTheme")},initSidebarTheme(){this.$store.dispatch("SidebarModule/toggleSidebar")},logout(){this.$store.dispatch("UserModule/logout"),this.$router.push({name:"login"})}}},y=s(89);const M=(0,y.Z)(k,[["render",w]]);var A=M;const O={class:"img_container"},I=["src","alt"],C=(0,u._)("hr",null,null,-1),U={class:"nav-items"},D={class:"logout-button"},L=(0,u.Uk)(" logout ");function q(e,t,s,r,n,a){const i=(0,u.up)("BaseIcon"),o=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",{class:(0,c.C_)(["sidebar",[e.SidebarModule.isActive,e.SidebarModule.isPhoneClass]]),ref:"sidebar"},[(0,u._)("div",O,[(0,u._)("img",{src:e.UserModule.user.img,alt:e.UserModule.user.name},null,8,I),C]),(0,u._)("ul",U,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(r.navLinks,((e,t)=>((0,u.wg)(),(0,u.iD)("li",{class:"nav-link",key:t},[(0,u.Wm)(o,{to:{name:`${e.name}`}},{default:(0,u.w5)((()=>[(0,u.Uk)((0,c.zw)(e.title)+" ",1),e.icon?((0,u.wg)(),(0,u.j4)(i,{key:0,width:"70px",name:e.icon},null,8,["name"])):((0,u.wg)(),(0,u.j4)(i,{key:1,width:"70px",name:"users"}))])),_:2},1032,["to"])])))),128))]),(0,u._)("div",D,[(0,u._)("button",{onClick:t[0]||(t[0]=(...e)=>a.logout&&a.logout(...e))},[L,(0,u.Wm)(i,{name:"power",width:"70px"})])])],2),(0,u._)("div",{class:(0,c.C_)(["sidebar-overlay",e.SidebarModule.sidebarOpened&&e.SidebarModule.isPhone?"active":""]),onClick:t[1]||(t[1]=e=>this.$store.dispatch("SidebarModule/toggleSidebar"))},null,2)],64)}var H=s(4870),N={setup(){const e=(0,H.iH)([{name:"board",title:"board",icon:"clipboard"},{name:"setting",title:"setting",icon:"settings"}]);return{navLinks:e}},computed:(0,T.rn)(["SidebarModule","UserModule"]),methods:{toggleSidebar(){const e=this.$refs.sidebar;setTimeout((()=>{if(this.SidebarModule.isPhone)return!1;e.addEventListener("mouseenter",(()=>{this.$store.dispatch("SidebarModule/toggleSidebar")})),e.addEventListener("mouseleave",(()=>{this.$store.dispatch("SidebarModule/toggleSidebar")}))}),1e3)},logout(){this.$store.dispatch("UserModule/logout"),this.$router.push({name:"login"})}},mounted(){this.toggleSidebar()}};const P=(0,y.Z)(N,[["render",q]]);var x=P,W={components:{ToolbarVue:A,SidebarVue:x}};const j=(0,y.Z)(W,[["render",d],["__scopeId","data-v-6d4f5f24"]]);var $=j,R={components:{LayoutViewVue:$},mounted(){this.$store.dispatch("ThemeModule/initTheme"),this.$store.dispatch("SidebarModule/initSidebarTheme")}};const V=(0,y.Z)(R,[["render",l]]);var F=V,B=s(4609),G=s.n(B),Z=s(8420),K=s.n(Z),J=s(8125),z=s(8321),Y=s(7749);J.vI.add(z.mRB);var Q=Y.GN;function X(){return Math.random().toString(16).slice(2)}const ee=e=>{e.subscribe(((e,t)=>{localStorage.setItem("boards",JSON.stringify(t.BoardModule.board)),localStorage.setItem("user",JSON.stringify(t.UserModule.user)),localStorage.setItem("users",JSON.stringify(t.UserModule.users))}))};var te={name:"workshop",columns:[{name:"todo",tasks:[{description:"",name:"first task",id:X(),userAssigned:null},{description:"culpa officiis! Temporibus maiores vitae veniam dolores eaque, et neque nulla, debitis unde sunt perspiciatis harum nemo voluptatum dolore aperiam.",name:"second task",id:X(),userAssigned:null},{description:"",name:"and thrid",id:X(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:X(),userAssigned:null}]},{name:"done",tasks:[{description:"",name:"first task",id:X(),userAssigned:null}]},{name:"doing",tasks:[{description:"",name:"first task",id:X(),userAssigned:null}]},{name:"testing",tasks:[{description:"",name:"first task",id:X(),userAssigned:null}]}]};const se=JSON.parse(localStorage.getItem("boards"))||te,re=!0,ne={board:se,signleTask:{}},ae={SET_SINGLE_TASK(e,t){e.signleTask=t},ADD_TASK(e,{tasks:t,name:s}){t.push({name:s,id:X(),description:""})},ADD_COLUMN(e,t){e.board.columns.push({name:t,tasks:[]})},REMOVE_TASK(e,{taskIndex:t,columnIndex:s}){e.board.columns[s].tasks.splice(t,1)},UPDATE_TASK(e,{task:t,key:s,value:r}){t[s]=r},MOVE_TASK(e,{fromTasks:t,toTasks:s,taskIndex:r,toTaskIndex:n}){const a=t.splice(r,1)[0];s.splice(n,0,a)},MOVE_COLUMN(e,{fromColumnIndex:t,toColumnIndex:s}){const r=e.board.columns,n=r.splice(t,1)[0];r.splice(s,0,n)}},ie={async setSingleTask({commit:e,getters:t},s){let r=await t.getTask(s);e("SET_SINGLE_TASK",r)}},oe={getTask(e){return t=>{for(const s of e.board.columns)for(const e of s.tasks)if(e.id===t)return e}}},ue=!0,le={lightTheme:!0},de={SET_THEME(e,t){let s=document.querySelector("body");e.lightTheme=t,t?(s.classList.add("light-theme"),s.classList.remove("dark-theme"),localStorage.setItem("theme","light-theme")):(s.classList.add("dark-theme"),s.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme"))},TOGGLE_THEME(e){let t=document.querySelector("body");e.lightTheme=!e.lightTheme,e.lightTheme?(t.classList.add("light-theme"),t.classList.remove("dark-theme"),localStorage.setItem("theme","light-theme")):(t.classList.remove("light-theme"),t.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))}},ce={initTheme({commit:e}){let t=localStorage.getItem("theme")||"light-theme";e("SET_THEME","light-theme"==t)},toggleTheme({commit:e}){e("TOGGLE_THEME")}},me=!0,pe={sidebarOpened:!1,sidebarOver:!1,isPhone:!1,isActive:"",isPhoneClass:""},ge={TOGGLE_SIDEBAR(e){e.sidebarOpened=!e.sidebarOpened},SET_PHONE_THEME(e,t){e.isPhone=t},SET_PHONE_CLASS(e,t){e.isPhoneClass=t},SET_ACTIVE_CLASS(e,t){e.isActive=t},SET_OVER_THEME(e,t){e.sidebarOver=t}},he={toggleSidebar({commit:e,getters:t}){e("TOGGLE_SIDEBAR"),e("SET_ACTIVE_CLASS",t.isActive)},initSidebarTheme({commit:e,state:t,getters:s}){let r=document.documentElement.clientWidth;r<=850?(e("SET_PHONE_THEME",!0),e("SET_OVER_THEME",!0),e("SET_PHONE_CLASS",s.isPhone)):(e("SET_PHONE_THEME",!1),e("SET_OVER_THEME",!1),e("SET_PHONE_CLASS",s.isPhone)),window.addEventListener("resize",(()=>{let r=document.documentElement.clientWidth;r<=850?(e("SET_PHONE_THEME",!0),e("SET_OVER_THEME",!0),e("SET_PHONE_CLASS",s.isPhone),t.sidebarOpened=!1,e("SET_ACTIVE_CLASS",s.isActive)):(e("SET_PHONE_THEME",!1),e("SET_OVER_THEME",!1),e("SET_PHONE_CLASS",s.isPhone))}))}},fe={isActive:e=>e.sidebarOver?e.sidebarOpened?"sidebar-visible-over":"":e.sidebarOpened?"sidebar-visible":"",isPhone:e=>e.isPhone?"sidebar-over":""},_e={id:X(),name:"",title:"",img:"@/assets/user-img.png",password:"",authenticated:!1},ve=JSON.parse(localStorage.getItem("user"))||_e,be=JSON.parse(localStorage.getItem("users"))||[],Se=!0,Ee={user:ve,users:be,authenticated:!0},we={SET_USER_DATA(e,t){e.user=t},REMOVE_AUTH(e,t){e.user=t},ADD_USERS(e,t){e.users.push(t)},DELETE_USER(e,t){e.users.splice(t,1)}},Te={registerNewUser({commit:e,getters:t},s){t.isUser(s)?(e("SET_USER_DATA",s),t.userIndex(s)&&(e("DELETE_USER",t.userIndex(s)),e("ADD_USERS",s))):(e("SET_USER_DATA",s),e("ADD_USERS",s))},logout({commit:e}){const t={id:X(),name:"",title:"",img:"@/assets/user-img.png",password:"",authenticated:!1};e("REMOVE_AUTH",t)},login({commit:e,state:t},s){t.users?t.users.forEach((t=>{s.username===t.username&&s.password===t.password&&(e("SET_USER_DATA",t),console.log(t))})):xt.push({name:"register"})}},ke={isAuthenticated:e=>e.user.authenticated,isUser:e=>t=>e.users.find((e=>e.username===t.username)),userIndex:e=>t=>e.users.findIndex((e=>e.id==t.id))};var ye=(0,T.MT)({plugins:[ee],state:{loading:!0,name:""},mutations:{REVRESE_LOADING(e,{val:t,name:s}){e.loading=t,e.name=s}},actions:{},modules:{BoardModule:r,ThemeModule:n,SidebarModule:a,UserModule:i}});const Me=e=>((0,u.dD)("data-v-344fee3f"),e=e(),(0,u.Cn)(),e),Ae={class:"auth-form"},Oe=Me((()=>(0,u._)("h1",{class:"title"},"hello.",-1))),Ie={class:"form-group"},Ce=Me((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid username ",-1))),Ue={class:"form-group"},De=Me((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid password ",-1))),Le={class:"form-group"},qe=["disabled"],He=(0,u.Uk)(" Go ! "),Ne={key:0,class:"loading"},Pe=Me((()=>(0,u._)("div",{class:"lds-ring"},[(0,u._)("div"),(0,u._)("div"),(0,u._)("div"),(0,u._)("div")],-1))),xe=[Pe],We={class:"go-to"},je=(0,u.Uk)(" Don't Have An Account? "),$e=(0,u.Uk)(" Signup ");function Re(e,t,s,r,n,a){const i=(0,u.up)("vee-field"),o=(0,u.up)("ErrorMessage"),l=(0,u.up)("BaseIcon"),d=(0,u.up)("router-link"),c=(0,u.up)("vee-form");return(0,u.wg)(),(0,u.iD)("section",Ae,[(0,u.Wm)(c,{"validation-schema":n.schema,onSubmit:a.submit},{default:(0,u.w5)((()=>[Oe,(0,u._)("div",Ie,[(0,u.Wm)(i,{type:"text",autocomplete:"off",id:"username",name:"username",placeholder:"Username *",required:"required"}),(0,u.Wm)(o,{class:"error_msg",name:"username"},{default:(0,u.w5)((()=>[Ce])),_:1})]),(0,u._)("div",Ue,[(0,u.Wm)(i,{type:n.pass_type?"password":"text",placeholder:"Password *",autocomplete:"off",id:"password",name:"password",required:"required"},null,8,["type"]),(0,u._)("div",{class:"show-pass",onClick:t[0]||(t[0]=e=>n.pass_type=!n.pass_type)},[n.pass_type?((0,u.wg)(),(0,u.j4)(l,{key:0,name:"eye"})):((0,u.wg)(),(0,u.j4)(l,{key:1,name:"eye-off"}))]),(0,u.Wm)(o,{class:"error_msg",name:"password"},{default:(0,u.w5)((()=>[De])),_:1})]),(0,u._)("div",Le,[(0,u._)("button",{type:"submit",disabled:!a.isFormValid},[He,n.req__submitions?((0,u.wg)(),(0,u.iD)("div",Ne,xe)):(0,u.kq)("",!0)],8,qe),(0,u._)("div",We,[je,(0,u.Wm)(d,{to:{name:"register"}},{default:(0,u.w5)((()=>[$e])),_:1})])])])),_:1},8,["validation-schema","onSubmit"])])}var Ve={data(){return{pass_type:!0,req__submitions:!1,schema:{username:"required|min:3|max:30",password:"required|min:3|max:100"}}},computed:{isFormValid(){return!Object.keys(this.schema).some((e=>this.schema[e].invalid))}},methods:{submit(e){console.log(e),this.req__submitions=!0,this.$store.dispatch("UserModule/login",e).then((()=>{this.$router.push({name:"board"}),setTimeout((()=>{this.req__submitions=!1}),1e3)}))}}};const Fe=(0,y.Z)(Ve,[["render",Re],["__scopeId","data-v-344fee3f"]]);var Be=Fe;const Ge=e=>((0,u.dD)("data-v-81b81178"),e=e(),(0,u.Cn)(),e),Ze={class:"auth-form"},Ke=Ge((()=>(0,u._)("h1",{class:"title"},"hello.",-1))),Je={class:"form-group"},ze={class:"label-name",for:"img"},Ye={style:{display:"flex",margin:"10px"}},Qe={key:1},Xe=Ge((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid image ",-1))),et={class:"form-group"},tt=Ge((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid name ",-1))),st={class:"form-group"},rt=Ge((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid title ",-1))),nt={class:"form-group"},at=Ge((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid username ",-1))),it={class:"form-group"},ot=Ge((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid password ",-1))),ut={class:"form-group"},lt=["disabled"],dt=(0,u.Uk)(" Go ! "),ct={key:0,class:"loading"},mt=Ge((()=>(0,u._)("div",{class:"lds-ring"},[(0,u._)("div"),(0,u._)("div"),(0,u._)("div"),(0,u._)("div")],-1))),pt=[mt],gt={class:"go-to"},ht=(0,u.Uk)(" Already Have An Account? "),ft=(0,u.Uk)(" Login ");function _t(e,t,s,r,n,a){const i=(0,u.up)("BaseIcon"),o=(0,u.up)("vee-field"),l=(0,u.up)("ErrorMessage"),d=(0,u.up)("router-link"),c=(0,u.up)("vee-form");return(0,u.wg)(),(0,u.iD)("section",Ze,[(0,u.Wm)(c,{"validation-schema":n.schema,onSubmit:a.submit},{default:(0,u.w5)((()=>[Ke,(0,u._)("div",Je,[(0,u._)("label",ze,[(0,u.Wm)(i,{name:"camera"}),(0,u._)("span",Ye,[n.img?((0,u.wg)(),(0,u.j4)(i,{key:0,name:"check"})):((0,u.wg)(),(0,u.iD)("span",Qe,"upload img"))])]),(0,u.Wm)(o,{accept:"image/png, image/jpeg",onChange:a.choseImgFile,type:"file",autocomplete:"off",id:"img",name:"img",required:"required"},null,8,["onChange"]),(0,u.Wm)(l,{class:"error_msg",name:"img"},{default:(0,u.w5)((()=>[Xe])),_:1})]),(0,u._)("div",et,[(0,u.Wm)(o,{placeholder:"Name *",required:"required",type:"text",autocomplete:"off",id:"name",name:"name"}),(0,u.Wm)(l,{class:"error_msg",name:"name"},{default:(0,u.w5)((()=>[tt])),_:1})]),(0,u._)("div",st,[(0,u.Wm)(o,{placeholder:"Title *",required:"required",type:"text",autocomplete:"off",id:"title",name:"title"}),(0,u.Wm)(l,{class:"error_msg",name:"title"},{default:(0,u.w5)((()=>[rt])),_:1})]),(0,u._)("div",nt,[(0,u.Wm)(o,{type:"text",autocomplete:"off",id:"username",name:"username",placeholder:"Username *",required:"required"}),(0,u.Wm)(l,{class:"error_msg",name:"username"},{default:(0,u.w5)((()=>[at])),_:1})]),(0,u._)("div",it,[(0,u.Wm)(o,{type:n.pass_type?"password":"text",placeholder:"Password *",autocomplete:"off",id:"password",name:"password",required:"required"},null,8,["type"]),(0,u._)("div",{class:"show-pass",onClick:t[0]||(t[0]=e=>n.pass_type=!n.pass_type)},[n.pass_type?((0,u.wg)(),(0,u.j4)(i,{key:0,name:"eye"})):((0,u.wg)(),(0,u.j4)(i,{key:1,name:"eye-off"}))]),(0,u.Wm)(l,{class:"error_msg",name:"password"},{default:(0,u.w5)((()=>[ot])),_:1})]),(0,u._)("div",ut,[(0,u._)("button",{type:"submit",disabled:!a.isFormValid},[dt,n.req__submitions?((0,u.wg)(),(0,u.iD)("div",ct,pt)):(0,u.kq)("",!0)],8,lt),(0,u._)("div",gt,[ht,(0,u.Wm)(d,{to:{name:"login"}},{default:(0,u.w5)((()=>[ft])),_:1})])])])),_:1},8,["validation-schema","onSubmit"])])}var vt={data(){return{pass_type:!0,req__submitions:!1,img:"",schema:{name:"required|min:3|max:20|alpha_spaces",username:"required|min:3|max:30",title:"required|min:3|max:20",img:"required",password:"required|min:3|max:100"}}},computed:{isFormValid(){return!Object.keys(this.schema).some((e=>this.schema[e].invalid))}},methods:{submit(e){const t={...e,img:this.img,authenticated:!0,id:X()};this.req__submitions=!0,this.$store.dispatch("UserModule/registerNewUser",t).then((()=>{this.$router.push({name:"board"}),setTimeout((()=>{this.req__submitions=!1}),1e3)}))},choseImgFile(e){const t=e.target.files[0];if(t){const e=new FileReader;e.onload=()=>{const t=e.result;this.img=t},e.readAsDataURL(t)}}}};const bt=(0,y.Z)(vt,[["render",_t],["__scopeId","data-v-81b81178"]]);var St=bt;const Et=e=>((0,u.dD)("data-v-e3c85fd0"),e=e(),(0,u.Cn)(),e),wt={class:"content"},Tt={class:"img-container"},kt=["src"],yt=["src"],Mt={class:"form-group"},At={class:"label-name",for:"img"},Ot=Et((()=>(0,u._)("span",null,"new one ?",-1))),It=Et((()=>(0,u._)("span",{class:"err_msg"}," Please enter a valid image ",-1))),Ct={class:"pop-bottom"};function Ut(e,t,s,r,n,a){const i=(0,u.up)("BaseIcon"),l=(0,u.up)("vee-field"),d=(0,u.up)("ErrorMessage"),c=(0,u.up)("vee-form");return(0,u.wg)(),(0,u.iD)("div",{class:"user-popup",onClick:t[2]||(t[2]=(0,o.iM)((e=>a.close("close")),["self"]))},[(0,u._)("div",wt,[(0,u._)("div",Tt,[n.choseImgFile?((0,u.wg)(),(0,u.iD)("img",{key:0,src:n.choseImgFile},null,8,kt)):((0,u.wg)(),(0,u.iD)("img",{key:1,src:e.UserModule.user.img},null,8,yt))]),(0,u.Wm)(c,{"validation-schema":n.schema,onSubmit:a.submit},{default:(0,u.w5)((()=>[(0,u._)("div",Mt,[(0,u._)("label",At,[Ot,(0,u.Wm)(i,{name:"camera"})]),(0,u.Wm)(l,{accept:"image/png, image/jpeg",type:"file",autocomplete:"off",id:"img",name:"imgForm",required:"required",onChange:a.viewImg},null,8,["onChange"]),(0,u.Wm)(d,{class:"error_msg",name:"imgForm"},{default:(0,u.w5)((()=>[It])),_:1})]),(0,u._)("div",Ct,[(0,u._)("button",{onClick:t[0]||(t[0]=e=>a.close("close"))},"close"),(0,u._)("button",{type:"submit",onClick:t[1]||(t[1]=e=>a.close("save"))},"save")])])),_:1},8,["validation-schema","onSubmit"])])])}var Dt={props:["id"],data(){return{choseImgFile:"",schema:{imgForm:"required"}}},computed:{userPopup(){return"userimg"===this.$route.name},...(0,T.rn)(["UserModule"])},methods:{close(e){switch(e){case"close":this.$router.push({name:"setting"});break;case"save":this.submit();break;default:break}},submit(e){if(this.choseImgFile){const e={...this.UserModule.user,img:this.choseImgFile};this.$store.dispatch("UserModule/registerNewUser",e).then((()=>{this.$router.push({name:"setting"})}))}},viewImg(e){const t=e.target.files[0];if(t){const e=new FileReader;e.onload=()=>{const t=e.result;this.choseImgFile=t},e.readAsDataURL(t)}}}};const Lt=(0,y.Z)(Dt,[["render",Ut],["__scopeId","data-v-e3c85fd0"]]);var qt=Lt,Ht=s(2483);const Nt=[{path:"/login",name:"login",component:Be},{path:"/register",name:"register",component:St},{path:"/",name:"board",component:()=>s.e(976).then(s.bind(s,6976)),meta:{requiresAuth:!0},children:[{path:"task/:id",name:"task",props:!0,component:()=>s.e(362).then(s.bind(s,7362)),beforeEnter:(e,t,s)=>{ye.dispatch("BoardModule/setSingleTask",e.params.id).then((()=>{const t=ye.state.BoardModule.signleTask;e.params.task=t,s()})).catch((e=>alert(`error is ${e}`)))}}]},{path:"/settings",name:"setting",component:()=>s.e(418).then(s.bind(s,3418)),meta:{requiresAuth:!0},children:[{path:"image/:id",name:"userimg",props:!0,component:qt}]}],Pt=(0,Ht.p7)({history:(0,Ht.PO)("/"),routes:Nt});Pt.beforeEach(((e,t,s)=>{const r=JSON.parse(localStorage.getItem("user")).authenticated;ye.commit("REVRESE_LOADING",{val:!0,name:ye.state.UserModule.user.name}),e.matched.some((e=>e.meta.requiresAuth))&&!r?s({name:"login"}):!e.matched.some((e=>e.meta.requiresAuth))&&r&&s({name:"board"}),s()})),Pt.afterEach((()=>{setTimeout((()=>{ye.commit("REVRESE_LOADING",{val:!1,name:ye.state.UserModule.user.name})}),10)}));var xt=Pt,Wt=s(5708),jt=s(3990),$t={install(e){e.component("VeeForm",Wt.l0),e.component("VeeField",Wt.gN),e.component("ErrorMessage",Wt.Bc),(0,Wt.aH)("required",jt.C1),(0,Wt.aH)("min",jt.VV),(0,Wt.aH)("max",jt.Fp),(0,Wt.aH)("alpha_spaces",jt.Kj),(0,Wt.aH)("email",jt.Do),(0,Wt.aH)("min_value",jt.Gd),(0,Wt.aH)("max_value",jt.JC),(0,Wt.aH)("confirmed",jt.GU),(0,Wt.aH)("excluded",jt.Y2),(0,Wt.jQ)({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!0,validateOnModelUpdate:!0})}};s(8556);const Rt=(0,o.ri)(F);Rt.component("AppIcon",Q);const Vt=s(9674);Vt.keys().forEach((e=>{const t=Vt(e),s=G()(K()(e.replace(/^\.\/(.*)\.\w+$/,"$1")));Rt.component(s,t.default||t)})),Rt.use(ye).use($t).use(xt).mount("#app")},2435:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var r=s(3396),n=s(7139);function a(e,t,s,a,i,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{type:"button",class:(0,n.C_)(["button",o.typeClasses])},[(0,r.WI)(e.$slots,"default")],2)])}var i={props:{type:{type:String}},computed:{typeClasses(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},o=s(89);const u=(0,o.Z)(i,[["render",a]]);var l=u},72:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var r=s(3396);const n={class:"icon-wrapper"},a=["innerHTML"];function i(e,t,s,i,o,u){return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",{class:"icon",innerHTML:u.svg},null,8,a),(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var o=s(8164),u=s.n(o),l={name:"BaseIcon",props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}},computed:{svg(){return u().icons[this.name].toSvg({class:"icon",width:this.width,height:this.height})}}},d=s(89);const c=(0,d.Z)(l,[["render",i],["__scopeId","data-v-61b7413f"]]);var m=c},6316:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(3396),n=s(7139);const a=e=>((0,r.dD)("data-v-c01fa11a"),e=e(),(0,r.Cn)(),e),i={key:0,class:"loading-component"},o={class:"title"},u=(0,r.Uk)(" just few seconds .. "),l={key:1},d=a((()=>(0,r._)("div",{class:"lds-roller"},[(0,r._)("div"),(0,r._)("div"),(0,r._)("div"),(0,r._)("div"),(0,r._)("div"),(0,r._)("div"),(0,r._)("div"),(0,r._)("div")],-1)));function c(e,t,s,a,c,m){return m.isLoading?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("h1",o,[m.isLogin?((0,r.wg)(),(0,r.iD)("span",l,"please wait ..")):((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[u,(0,r._)("span",null,(0,n.zw)(m.userName),1)],64))]),d])):(0,r.kq)("",!0)}var m=s(65),p={computed:{...(0,m.rn)(["UserModule"]),isLoading(){return this.$store.state.loading},isLogin(){return"login"===this.$route.name},userName(){return this.$store.state.name}}},g=s(89);const h=(0,g.Z)(p,[["render",c],["__scopeId","data-v-c01fa11a"]]);var f=h},617:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var r=s(3396),n=s(7139);const a={class:"notify-popup"};function i(e,t,s,i,o,u){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("p",null,(0,n.zw)(s.type)+" saved successfully ♥",1)])}var o={props:{type:{type:String,default:"data"}}},u=s(89);const l=(0,u.Z)(o,[["render",i],["__scopeId","data-v-1fbfef65"]]);var d=l},9674:function(e,t,s){var r={"./BaseButton.vue":2435,"./BaseIcon.vue":72,"./BaseLoading.vue":6316,"./BaseNotify.vue":617};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=9674}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],a=e[d][2];for(var o=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{362:"b75bc751",418:"4c8d82cb",976:"51c26e80"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+"."+{362:"c60721b4",418:"a9931665"}[e]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="trello-app:";s.l=function(r,n,a,i){if(e[r])e[r].push(n);else{var o,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){o=c;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+a),o.src=r),e[r]=[n];var m=function(t,s){o.onerror=o.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(s)})),t)return t(s)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e=function(e,t,s,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var n=s[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=function(r){return new Promise((function(n,a){var i=s.miniCssF(r),o=s.p+i;if(t(i,o))return n();e(r,o,n,a)}))},n={143:0};s.f.miniCss=function(e,t){var s={362:1,418:1};n[e]?t.push(n[e]):0!==n[e]&&s[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};s.f.j=function(t,r){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(s,r){n=e[t]=[s,r]}));r.push(n[2]=a);var i=s.p+s.u(t),o=new Error,u=function(r){if(s.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}};s.l(i,u,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(u)var d=u(s)}for(t&&t(r);l<i.length;l++)a=i[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},r=self["webpackChunktrello_app"]=self["webpackChunktrello_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(2706)}));r=s.O(r)})();
//# sourceMappingURL=app.f249741e.js.map