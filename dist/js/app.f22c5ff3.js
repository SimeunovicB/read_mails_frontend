(function(e){function t(t){for(var c,o,a=t[0],s=t[1],l=t[2],u=0,b=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(c=!1)}c&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},i=[];function o(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bf0972a1"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=o(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+i+")",l.name="ChunkLoadError",l.type=c,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0447":function(e,t,n){"use strict";n("7b33")},"07a3":function(e,t,n){"use strict";n("e9a6")},1396:function(e,t,n){},"1af4":function(e,t,n){"use strict";n("439d")},2958:function(e,t,n){},"439d":function(e,t,n){},4465:function(e,t,n){"use strict";n("6fe3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"app"},i={class:"topnav"},o=Object(c["i"])("Calculator"),a=Object(c["i"])("Bookings"),s=Object(c["i"])("Leads"),l=Object(c["i"])("Edit"),u=Object(c["i"])("Logout"),d=Object(c["i"])("Login"),b=Object(c["i"])("Register"),p=Object(c["i"])("Users"),j={class:"card"};function O(e,t,n,O,g,f){var m=Object(c["z"])("router-link"),v=Object(c["z"])("router-view");return Object(c["u"])(),Object(c["f"])("div",r,[Object(c["g"])("div",i,[Object(c["j"])(m,{to:"#calculator",style:Object(c["q"])({"background-color":"CALCULATOR"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[0]||(t[0]=function(e){return g.navigation="CALCULATOR"})},{default:Object(c["F"])((function(){return[o]})),_:1},8,["style"]),Object(c["j"])(m,{to:"#bookings",style:Object(c["q"])({"background-color":"BOOKINGS"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[1]||(t[1]=function(e){return g.navigation="BOOKINGS"})},{default:Object(c["F"])((function(){return[a]})),_:1},8,["style"]),f.loggedIn?(Object(c["u"])(),Object(c["d"])(m,{key:0,to:"/leads",style:Object(c["q"])({"background-color":"LEADS"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[2]||(t[2]=function(e){return g.navigation="LEADS"})},{default:Object(c["F"])((function(){return[s]})),_:1},8,["style"])):Object(c["e"])("",!0),Object(c["j"])(m,{to:"#edit",style:Object(c["q"])({"background-color":"EDIT"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[3]||(t[3]=function(e){return g.navigation="EDIT"})},{default:Object(c["F"])((function(){return[l]})),_:1},8,["style"]),f.loggedIn?(Object(c["u"])(),Object(c["d"])(m,{key:1,to:"",style:Object(c["q"])({"background-color":"LOGOUT"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[4]||(t[4]=function(e){return f.logout()})},{default:Object(c["F"])((function(){return[u]})),_:1},8,["style"])):Object(c["e"])("",!0),f.loggedIn?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["d"])(m,{key:2,to:"/",style:Object(c["q"])({"background-color":"LOGIN"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[5]||(t[5]=function(e){return g.navigation="LOGIN"})},{default:Object(c["F"])((function(){return[d]})),_:1},8,["style"])),f.loggedIn?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["d"])(m,{key:3,to:"/register",style:Object(c["q"])({"background-color":"REGISTER"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[6]||(t[6]=function(e){return g.navigation="REGISTER"})},{default:Object(c["F"])((function(){return[b]})),_:1},8,["style"])),f.isAdmin?(Object(c["u"])(),Object(c["d"])(m,{key:4,to:"/users",style:Object(c["q"])({"background-color":"USERS"==g.navigation?"#297b99":"rgb(8, 8, 41)"}),onClick:t[7]||(t[7]=function(e){return g.navigation="USERS"})},{default:Object(c["F"])((function(){return[p]})),_:1},8,["style"])):Object(c["e"])("",!0)]),Object(c["g"])("div",j,[Object(c["j"])(v)])])}var g=n("1da1"),f=(n("96cf"),n("d3b7"),n("ac1f"),n("5319"),{name:"App",components:{},data:function(){return{navigation:"",auth:!1}},computed:{loggedIn:function(){return this.$store.state.authenticated},isAdmin:function(){return this.$store.state.administrator}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/read/mail",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t.prev=2,t.next=5,fetch("http://127.0.0.1:8000/api/user",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:return n=t.sent,t.next=8,n.json();case 8:c=t.sent,console.log(c),200==n.status?(e.$store.dispatch("setAuth",!0),c.is_superuser?e.$store.dispatch("setAdmin",!0):e.$store.dispatch("setAdmin",!1)):(e.$store.dispatch("setAuth",!1),e.$store.dispatch("setAdmin",!1)),t.next=19;break;case 13:return t.prev=13,t.t0=t["catch"](2),t.next=17,e.$store.dispatch("setAuth",!1);case 17:return t.next=19,e.$store.dispatch("setAdmin",!1);case 19:case"end":return t.stop()}}),t,null,[[2,13]])})))()},methods:{logout:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(t){console.log(t),200==t.status&&(e.$router.replace("/"),e.$store.dispatch("setAuth",!1),e.$store.dispatch("setAdmin",!1))})).catch((function(t){console.log(t),e.errorMessage=t}));case 2:case"end":return t.stop()}}),t)})))()},deliAuth:function(){this.auth=this.$store.state.authenticated}}}),m=(n("1af4"),n("6b0d")),v=n.n(m);const h=v()(f,[["render",O]]);var y=h,w=(n("3ca3"),n("ddb0"),n("6c02")),k={class:"login"},L={class:"loginForm"},T={key:0,class:"alert-danger"},A={show:"",class:"d-flex justify-content-center"},B={key:1,class:"loginTitle"},N={class:"input-container ic1"},C=Object(c["g"])("div",{class:"cut cut-short"},null,-1),x=Object(c["g"])("label",{for:"email",class:"placeholder"},"Email",-1),_={class:"input-container ic2"},E=Object(c["g"])("div",{class:"cut cut-short"},null,-1),S=Object(c["g"])("label",{for:"password",class:"placeholder"},"Password",-1);function P(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",k,[Object(c["g"])("div",L,[""!=i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",T,[Object(c["g"])("div",A,Object(c["B"])(i.errorMessage),1)])):Object(c["e"])("",!0),""==i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",B,"Login")):Object(c["e"])("",!0),Object(c["g"])("div",N,[Object(c["G"])(Object(c["g"])("input",{id:"email",class:"input",type:"email",placeholder:" ","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.email=e})},null,512),[[c["D"],i.form.email]]),C,x]),Object(c["g"])("div",_,[Object(c["G"])(Object(c["g"])("input",{id:"password",class:"input",type:"password",placeholder:" ","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.password=e})},null,512),[[c["D"],i.form.password]]),E,S]),Object(c["g"])("button",{type:"text",class:"submit",onClick:t[2]||(t[2]=function(e){return o.login()})},"Login")])])}var D=n("bc3a"),R=n.n(D),F={name:"Login",data:function(){return{form:{email:"",password:""},errorMessage:""}},methods:{login:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.form.email,c=e.form.password,t.prev=2,t.next=5,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:n,password:c})}).then((function(t){if(200===t.status)return e.$store.dispatch("setAuth",!0),void e.$router.replace("/leads");e.$store.dispatch("setAuth",!1),e.errorMessage="Wrong credentials!"})).catch((function(t){console.log(t),e.errorMessage=t}));case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.next=11,e.$store.dispatch("setAuth",!1);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})))()},test:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:R()({method:"GET",headers:{"Content-Type":"application/json"},withCredentials:!0,url:"api/test"}).then((function(e){console.log(e.data)}));case 1:case"end":return e.stop()}}),e)})))()}}};n("9ee0");const I=v()(F,[["render",P]]);var U=I,M={class:"register"},G={class:"registerForm"},$={key:0,class:"alert-danger"},V={show:"",class:"d-flex justify-content-center"},q={key:1,class:"registerTitle"},H={class:"input-container ic1"},z=Object(c["g"])("div",{class:"cut"},null,-1),J=Object(c["g"])("label",{for:"firstname",class:"placeholder"},"First name",-1),Y={class:"input-container ic2"},W=Object(c["g"])("div",{class:"cut"},null,-1),K=Object(c["g"])("label",{for:"lastname",class:"placeholder"},"Last name",-1),Q={class:"input-container ic2"},X=Object(c["g"])("div",{class:"cut cut-short"},null,-1),Z=Object(c["g"])("label",{for:"email",class:"placeholder"},"Email",-1),ee={class:"input-container ic2"},te=Object(c["g"])("div",{class:"cut cut-short"},null,-1),ne=Object(c["g"])("label",{for:"phoneNumber",class:"placeholder"},"Phone number",-1),ce={class:"input-container ic2"},re=Object(c["g"])("div",{class:"cut cut-short"},null,-1),ie=Object(c["g"])("label",{for:"password",class:"placeholder"},"Password",-1),oe={class:"input-container ic2"},ae=Object(c["g"])("div",{class:"cut cut-short"},null,-1),se=Object(c["g"])("label",{for:"confirmPassword",class:"placeholder"},"Confirm password",-1);function le(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",M,[Object(c["g"])("div",G,[""!=i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",$,[Object(c["g"])("div",V,Object(c["B"])(i.errorMessage),1)])):Object(c["e"])("",!0),""==i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",q,"Welcome!")):Object(c["e"])("",!0),Object(c["g"])("div",H,[Object(c["G"])(Object(c["g"])("input",{id:"firstname",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.firstName=e})},null,512),[[c["D"],i.form.firstName]]),z,J]),Object(c["g"])("div",Y,[Object(c["G"])(Object(c["g"])("input",{id:"lastname",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.lastName=e})},null,512),[[c["D"],i.form.lastName]]),W,K]),Object(c["g"])("div",Q,[Object(c["G"])(Object(c["g"])("input",{id:"email",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.email=e})},null,512),[[c["D"],i.form.email]]),X,Z]),Object(c["g"])("div",ee,[Object(c["G"])(Object(c["g"])("input",{id:"phoneNumber",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.phoneNumber=e})},null,512),[[c["D"],i.form.phoneNumber]]),te,ne]),Object(c["g"])("div",ce,[Object(c["G"])(Object(c["g"])("input",{id:"password",class:"input",type:"password",placeholder:" ","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.password=e})},null,512),[[c["D"],i.form.password]]),re,ie]),Object(c["g"])("div",oe,[Object(c["G"])(Object(c["g"])("input",{id:"confirmPassword",class:"input",type:"password",placeholder:" ","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.form.confirmPassword=e})},null,512),[[c["D"],i.form.confirmPassword]]),ae,se]),Object(c["g"])("button",{type:"text",class:"submit",onClick:t[6]||(t[6]=function(e){return o.register()})},"Register")])])}var ue={name:"Register",data:function(){return{form:{firstName:"",lastName:"",email:"",phoneNumber:"",password:"",confirmPassword:""},errorMessage:""}},methods:{register:function(){var e=this,t=this.form,n=t.firstName,c=t.lastName,r=t.email,i=t.phoneNumber,o=t.password;this.form.password!==this.form.confirmPassword?this.errorMessage="Passwords are not matching!":R()({method:"post",url:"api/register",data:{firstName:n,lastName:c,email:r,phoneNumber:i,password:o,is_active:!1}}).then((function(t){200!==t.status?e.errorMessage="Error occured while registering!":e.$router.replace("/")})).catch((function(t){console.log(t),e.errorMessage="Error occured while registering!"}))}}};n("c138");const de=v()(ue,[["render",le]]);var be=de,pe={class:"leads"},je={class:"lead"},Oe={class:"row"},ge={key:0,class:"agent"},fe=Object(c["i"])(" Agent: "),me={key:1},ve=Object(c["g"])("b",null,"Unclaimed",-1),he=[ve],ye={class:"timeChanged"},we={class:"row"},ke={class:"notesChat"},Le=["onClick"],Te={key:0,class:"notesDiv"},Ae={class:"noteTitle"},Be={class:"noteTime"},Ne={class:"noteSender"},Ce={class:"row"},xe=Object(c["g"])("div",null,"Follow-up: Not set",-1),_e={class:"priorityButtonsLead"},Ee={class:"tooltipLead"},Se=Object(c["g"])("span",{class:"tooltiptextLead"},"No priority",-1),Pe={class:"tooltipLead"},De=Object(c["g"])("span",{class:"tooltiptextLead"},"Bad lead",-1),Re={class:"tooltipLead"},Fe=Object(c["g"])("span",{class:"tooltiptextLead"},"Future lead",-1),Ie={class:"tooltipLead"},Ue=Object(c["g"])("span",{class:"tooltiptextLead"},"Hot lead",-1),Me={class:"tooltipLead"},Ge=Object(c["g"])("span",{class:"tooltiptextLead"},"Potential lead",-1),$e={class:"tooltipLead"},Ve=Object(c["g"])("span",{class:"tooltiptextLead"},"Booked lead",-1),qe={class:"lower"},He={class:"leadId"},ze=["onClick"],Je={class:"name"},Ye={class:"phoneNumber"},We={class:"entireLocation"},Ke={class:"location"},Qe={class:"oneLocation"},Xe={class:"oneLocation"},Ze={class:"oneLocation"},et=Object(c["g"])("div",{class:"arrow"},null,-1),tt={class:"location"},nt={class:"oneLocation"},ct={class:"oneLocation"},rt={class:"oneLocation"},it=Object(c["h"])('<div class="arrows"><div class="oneArrow"></div><div class="threeArrows"><div class="oneArrow differArrows"></div><div class="oneArrow differArrows"></div><div class="oneArrow differArrows"></div></div></div>',1),ot={key:0},at=["onClick"],st={key:1},lt=["onClick"],ut={key:0,class:"fallingInfo"},dt={class:"fallingColumn"},bt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Name:")],-1),pt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Email:")],-1),jt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Phone:")],-1),Ot=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Time created:")],-1),gt={class:"fallingColumn"},ft=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Vehicle:")],-1),mt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Misc:")],-1),vt={class:"fallingColumn"},ht=Object(c["g"])("div",null,[Object(c["g"])("b",null,"From:")],-1),yt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"To:")],-1),wt=Object(c["g"])("div",null,[Object(c["g"])("b",null,"Move date:")],-1);function kt(e,t,n,r,i,o){var a=Object(c["z"])("Pagination"),s=Object(c["z"])("LeadsTypeAndSearch"),l=Object(c["z"])("DateAndPriority");return Object(c["u"])(),Object(c["f"])("div",pe,[Object(c["j"])(a),Object(c["j"])(s),Object(c["j"])(l),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(i.leads,(function(n){return Object(c["u"])(),Object(c["f"])("div",{key:n.id},[Object(c["g"])("div",je,[Object(c["g"])("div",{class:Object(c["p"])(n.agent?"claimedLead":"unclaimedLead")},[Object(c["g"])("div",Oe,[n.agent?(Object(c["u"])(),Object(c["f"])("div",ge,[fe,Object(c["g"])("b",null,Object(c["B"])(n.agent.firstName)+" "+Object(c["B"])(n.agent.lastName),1)])):(Object(c["u"])(),Object(c["f"])("div",me,he)),Object(c["g"])("div",ye,"Changed: "+Object(c["B"])(n.last_changed),1)]),Object(c["g"])("div",we,[Object(c["g"])("div",null,"Move date: "+Object(c["B"])(n.estimated_ship_date),1),Object(c["g"])("div",ke,[Object(c["g"])("button",{class:"notes",onClick:function(e){return o.notes(n)}},"Notes",8,Le),n.notes_active?(Object(c["u"])(),Object(c["f"])("div",Te,[Object(c["g"])("div",Ae,[Object(c["g"])("div",null,"Notes for Lead #"+Object(c["B"])(n.id),1)]),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(n.note_set,(function(e){return Object(c["u"])(),Object(c["f"])("div",{key:e.id,class:"notesFor"},[Object(c["g"])("div",Be,Object(c["B"])(e.time),1),Object(c["g"])("div",Ne,[Object(c["g"])("b",null,Object(c["B"])(e.sender.firstName)+" "+Object(c["B"])(e.sender.lastName)+":",1),Object(c["i"])(" "+Object(c["B"])(e.message),1)])])})),128))])):Object(c["e"])("",!0)])]),Object(c["g"])("div",Ce,[Object(c["g"])("div",null,"Priority: "+Object(c["B"])(n.priority),1),xe]),Object(c["g"])("div",_e,[Object(c["g"])("div",Ee,[Object(c["g"])("button",{class:"priorityLead priorityOneLead",onClick:t[0]||(t[0]=function(t){return e.priorityFilter="No priority"})}),Se]),Object(c["g"])("div",Pe,[Object(c["g"])("button",{class:"priorityLead priorityTwoLead",onClick:t[1]||(t[1]=function(t){return e.priorityFilter="Bad lead"})}),De]),Object(c["g"])("div",Re,[Object(c["g"])("button",{class:"priorityLead priorityThreeLead",onClick:t[2]||(t[2]=function(t){return e.priorityFilter="Future lead"})}),Fe]),Object(c["g"])("div",Ie,[Object(c["g"])("button",{class:"priorityLead priorityFourLead",onClick:t[3]||(t[3]=function(t){return e.priorityFilter="Hot lead"})}),Ue]),Object(c["g"])("div",Me,[Object(c["g"])("button",{class:"priorityLead priorityFiveLead",onClick:t[4]||(t[4]=function(t){return e.priorityFilter="Booked lead"})}),Ge]),Object(c["g"])("div",$e,[Object(c["g"])("button",{class:"priorityLead prioritySixLead",onClick:t[5]||(t[5]=function(t){return e.priorityFilter="Booked lead"})}),Ve])])],2),Object(c["g"])("div",qe,[Object(c["g"])("div",He,[Object(c["g"])("div",null,Object(c["B"])(n.id),1)]),Object(c["g"])("div",null,[Object(c["g"])("button",{class:Object(c["p"])(n.active?"plus-button rotate":"plus-button"),onClick:function(e){return n.active=!n.active}},null,10,ze)]),Object(c["g"])("div",Je,Object(c["B"])(n.first_name)+" "+Object(c["B"])(n.last_name),1),Object(c["g"])("div",null,[Object(c["g"])("button",Ye,Object(c["B"])(n.phone),1)]),Object(c["g"])("div",null,Object(c["B"])(n.phone_number),1),Object(c["g"])("div",We,[Object(c["g"])("div",Ke,[Object(c["g"])("div",Qe,Object(c["B"])(n.pickup_city)+",",1),Object(c["g"])("div",Xe,Object(c["B"])(n.pickup_state_code),1),Object(c["g"])("div",Ze,"("+Object(c["B"])(n.pickup_zip)+")",1)]),et,Object(c["g"])("div",tt,[Object(c["g"])("div",nt,Object(c["B"])(n.dropoff_city)+",",1),Object(c["g"])("div",ct,Object(c["B"])(n.dropoff_state_code)+",",1),Object(c["g"])("div",rt,"("+Object(c["B"])(n.dropoff_zip)+")",1)])]),it,Object(c["g"])("div",null,"Created "+Object(c["B"])(n.time_created),1),n.agent?(Object(c["u"])(),Object(c["f"])("div",st,[Object(c["g"])("button",{class:"claimed",onClick:function(e){return o.claimLead(n)}},"Reclaim",8,lt)])):(Object(c["u"])(),Object(c["f"])("div",ot,[Object(c["g"])("button",{class:"claim",onClick:function(e){return o.claimLead(n)}},"Claim",8,at)]))]),n.active?(Object(c["u"])(),Object(c["f"])("div",ut,[Object(c["g"])("div",dt,[bt,Object(c["g"])("div",null,Object(c["B"])(n.first_name)+" "+Object(c["B"])(n.last_name),1),pt,Object(c["g"])("div",null,Object(c["B"])(n.email),1),jt,Object(c["g"])("div",null,Object(c["B"])(n.phone),1),Ot,Object(c["g"])("div",null,Object(c["B"])(n.time_created),1)]),Object(c["g"])("div",gt,[ft,Object(c["g"])("div",null,Object(c["B"])(n.make1)+" "+Object(c["B"])(n.model1)+" "+Object(c["B"])(n.year1)+" ("+Object(c["B"])(n.vehicle_type_id1)+") ",1),mt,Object(c["g"])("div",null,"Car condition: "+Object(c["B"])(n.vehicle_runs),1),Object(c["g"])("div",null,"Carrier type: "+Object(c["B"])(n.ship_via_id),1)]),Object(c["g"])("div",vt,[ht,Object(c["g"])("div",null,Object(c["B"])(n.pickup_city)+", "+Object(c["B"])(n.pickup_state_code)+" ("+Object(c["B"])(n.pickup_zip)+") ",1),yt,Object(c["g"])("div",null,Object(c["B"])(n.dropoff_city)+", "+Object(c["B"])(n.dropoff_state_code)+" ("+Object(c["B"])(n.dropoff_zip),1),wt,Object(c["g"])("div",null,Object(c["B"])(n.estimated_ship_date),1)])])):Object(c["e"])("",!0)])])})),128))])}var Lt={class:"pagination"},Tt=Object(c["g"])("button",{id:"previous",class:"paginationBtn"},"Previous page",-1),At=Object(c["g"])("span",null,[Object(c["g"])("label",null,"Page "),Object(c["g"])("input",{id:"pageInput",type:"number"})],-1),Bt=Object(c["g"])("button",{id:"next",class:"paginationBtn"},"Next page",-1),Nt=[Tt,At,Bt];function Ct(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",Lt,Nt)}var xt={name:"Pagination"};n("07a3");const _t=v()(xt,[["render",Ct]]);var Et=_t,St={class:"typesAndSearch"},Pt={class:"types"},Dt=Object(c["g"])("div",{class:"search"},[Object(c["g"])("label",null,"Search: "),Object(c["g"])("input",{id:"searchInput",type:"text"})],-1);function Rt(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",St,[Object(c["g"])("div",Pt,[Object(c["g"])("button",{class:"btn",style:Object(c["q"])({"background-color":"TARGET LEADS"==i.activeBtn?"#297b99":"white",color:"TARGET LEADS"==i.activeBtn?"white":"black"}),onClick:t[0]||(t[0]=function(e){return o.buttonOne()})}," Target Leads ",4),Object(c["g"])("button",{class:"btn",style:Object(c["q"])({"background-color":"ALL LEADS"==i.activeBtn?"#297b99":"white",color:"ALL LEADS"==i.activeBtn?"white":"black"}),onClick:t[1]||(t[1]=function(e){return o.buttonTwo()})}," All leads ",4),Object(c["g"])("button",{class:"btn",style:Object(c["q"])({"background-color":"MY LEADS"==i.activeBtn?"#297b99":"white",color:"MY LEADS"==i.activeBtn?"white":"black"}),onClick:t[2]||(t[2]=function(e){return o.buttonThree()})}," My leads ",4),Object(c["g"])("button",{class:"btn",style:Object(c["q"])({"background-color":"SORT BY SHIPPING DATE"==i.activeBtn?"#297b99":"white",color:"SORT BY SHIPPING DATE"==i.activeBtn?"white":"black"}),onClick:t[3]||(t[3]=function(e){return o.buttonFour()})}," Sort by shipping date ",4),Object(c["g"])("button",{class:"btn",style:Object(c["q"])({"background-color":"UNCLAIMED"==i.activeBtn?"#297b99":"white",color:"UNCLAIMED"==i.activeBtn?"white":"black"}),onClick:t[4]||(t[4]=function(e){return o.buttonFive()})}," Unclaimed ",4)]),Dt])}var Ft={name:"LeadsTypeAndSearch",data:function(){return{activeBtn:"NONE"}},methods:{buttonOne:function(){this.activeBtn="TARGET LEADS"},buttonTwo:function(){this.activeBtn="ALL LEADS"},buttonThree:function(){this.activeBtn="MY LEADS"},buttonFour:function(){this.activeBtn="SORT BY SHIPPING DATE"},buttonFive:function(){this.activeBtn="UNCLAIMED"}}};n("4465");const It=v()(Ft,[["render",Rt]]);var Ut=It,Mt={class:"dateAndPriorityComponent"},Gt={class:"btnAndPriorities"},$t=Object(c["g"])("button",{class:"btn"},"Date range",-1),Vt={class:"priorityDiv"},qt={class:"priorityButtons"},Ht={class:"tooltip"},zt=Object(c["g"])("span",{class:"tooltiptext"},"All",-1),Jt={class:"tooltip"},Yt=Object(c["g"])("span",{class:"tooltiptext"},"No priority",-1),Wt={class:"tooltip"},Kt=Object(c["g"])("span",{class:"tooltiptext"},"Bad lead",-1),Qt={class:"tooltip"},Xt=Object(c["g"])("span",{class:"tooltiptext"},"Future lead",-1),Zt={class:"tooltip"},en=Object(c["g"])("span",{class:"tooltiptext"},"Hot lead",-1),tn={class:"tooltip"},nn=Object(c["g"])("span",{class:"tooltiptext"},"Potential lead",-1),cn={class:"tooltip"},rn=Object(c["g"])("span",{class:"tooltiptext"},"Booked lead",-1),on={class:"datedate"},an={class:"dates"},sn=Object(c["g"])("label",null,"Range start:",-1),ln=Object(c["g"])("div",{class:"dates"},[Object(c["g"])("label",null,"Range end:"),Object(c["g"])("input",{class:"date",type:"date",placeholder:"from"})],-1);function un(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",Mt,[Object(c["g"])("div",Gt,[$t,Object(c["g"])("div",Vt,[Object(c["g"])("label",null,"Priority filter: "+Object(c["B"])(i.priorityFilter),1),Object(c["g"])("div",qt,[Object(c["g"])("div",Ht,[Object(c["g"])("button",{class:"priority priorityOne",onClick:t[0]||(t[0]=function(e){return i.priorityFilter="All"})}),zt]),Object(c["g"])("div",Jt,[Object(c["g"])("button",{class:"priority priorityTwo",onClick:t[1]||(t[1]=function(e){return i.priorityFilter="No priority"})}),Yt]),Object(c["g"])("div",Wt,[Object(c["g"])("button",{class:"priority priorityThree",onClick:t[2]||(t[2]=function(e){return i.priorityFilter="Bad lead"})}),Kt]),Object(c["g"])("div",Qt,[Object(c["g"])("button",{class:"priority priorityFour",onClick:t[3]||(t[3]=function(e){return i.priorityFilter="Future lead"})}),Xt]),Object(c["g"])("div",Zt,[Object(c["g"])("button",{class:"priority priorityFive",onClick:t[4]||(t[4]=function(e){return i.priorityFilter="Hot lead"})}),en]),Object(c["g"])("div",tn,[Object(c["g"])("button",{class:"priority prioritySix",onClick:t[5]||(t[5]=function(e){return i.priorityFilter="Potential lead"})}),nn]),Object(c["g"])("div",cn,[Object(c["g"])("button",{class:"priority prioritySeven",onClick:t[6]||(t[6]=function(e){return i.priorityFilter="Booked lead"})}),rn])])])]),Object(c["g"])("div",on,[Object(c["g"])("div",an,[sn,Object(c["G"])(Object(c["g"])("input",{class:"date",type:"date","onUpdate:modelValue":t[7]||(t[7]=function(e){return i.selected=e})},null,512),[[c["D"],i.selected]])]),ln])])}var dn={name:"DateAndPriority",components:{},data:function(){return{priorityFilter:"None",selected:"date",proba:"ide gas"}}};n("d3be");const bn=v()(dn,[["render",un]]);var pn=bn,jn={name:"Leads",components:{Pagination:Et,LeadsTypeAndSearch:Ut,DateAndPriority:pn},data:function(){return{leads:[],auth:!1,noteText:""}},computed:{getId:function(){return this.$store.state.id}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,c,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://127.0.0.1:8000/api/user",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,console.log(c),console.log("ID ",c.id),200==n.status?(e.$store.dispatch("setId",c.id),c.is_superuser?e.$store.dispatch("setAdmin",!0):e.$store.dispatch("setAdmin",!1)):e.$store.dispatch("setAdmin",!1),t.next=16;break;case 12:return t.prev=12,t.t0=t["catch"](0),t.next=16,e.$store.dispatch("setAdmin",!1);case 16:return t.next=18,fetch("http://127.0.0.1:8000/api/leads",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 18:return r=t.sent,t.next=21,r.json();case 21:i=t.sent,e.leads=i;case 23:case"end":return t.stop()}}),t,null,[[0,12]])})))()},methods:{test:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/test",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,console.log(t),console.log(t.data),e.next=7,t.json();case 7:n=e.sent,console.log(n),console.log("IDE CONTENT",n);case 10:case"end":return e.stop()}}),e)})))()},claimLead:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var c,r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.id,r=t.$store.state.id,n.next=4,fetch("http://127.0.0.1:8000/api/lead/claim",{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({idLead:c,idUser:r})});case 4:return i=n.sent,n.next=7,i.json();case 7:o=n.sent,200==i.status&&(console.log("CONTENT ",o),console.log("PRE ",t.leads),t.leads=o,console.log("POSLE ",t.leads));case 9:case"end":return n.stop()}}),n)})))()},notes:function(e){console.log("notes");var t=!1;for(var n in!1===e.notes_active&&(t=!0),this.leads)this.leads[n].notes_active=!1;!0===t&&(e.notes_active=!0),this.noteText=""},addNote:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var c,r,i,o,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.$store.state.id,r=t.noteText,n.next=4,fetch("http://127.0.0.1:8000/api/note/",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({sender:c,message:r,lead:e})});case 4:return i=n.sent,n.next=7,i.json();case 7:for(a in o=n.sent,console.log("CONTENT ",o),t.leads)t.leads[a].id==e&&(console.log("LEAD ",t.leads[a]),console.log("NOTES ",t.leads[a].note_set),s={sender:"neki",message:"por",time:"time",lead:e},t.leads[a].note_set.push(s));case 10:case"end":return n.stop()}}),n)})))()}}};n("b241");const On=v()(jn,[["render",kt]]);var gn=On,fn={class:"register"},mn={class:"registerForm"},vn={key:0,class:"alert-danger"},hn={show:"",class:"d-flex justify-content-center"},yn={key:1,class:"registerTitle"},wn={class:"input-container ic1"},kn=Object(c["g"])("div",{class:"cut"},null,-1),Ln=Object(c["g"])("label",{for:"firstname",class:"placeholder"},"First name",-1),Tn={class:"input-container ic2"},An=Object(c["g"])("div",{class:"cut"},null,-1),Bn=Object(c["g"])("label",{for:"lastname",class:"placeholder"},"Last name",-1),Nn={class:"input-container ic2"},Cn=Object(c["g"])("div",{class:"cut cut-short"},null,-1),xn=Object(c["g"])("label",{for:"email",class:"placeholder"},"Email",-1),_n={class:"input-container ic2"},En=Object(c["g"])("div",{class:"cut cut-short"},null,-1),Sn=Object(c["g"])("label",{for:"phoneNumber",class:"placeholder"},"Phone number",-1),Pn={class:"input-container ic2"},Dn=Object(c["g"])("div",{class:"cut cut-short"},null,-1),Rn=Object(c["g"])("label",{for:"password",class:"placeholder"},"Password",-1),Fn={class:"input-container ic2"},In=Object(c["g"])("div",{class:"cut cut-short"},null,-1),Un=Object(c["g"])("label",{for:"confirmPassword",class:"placeholder"},"Confirm password",-1);function Mn(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",fn,[Object(c["g"])("div",mn,[""!=i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",vn,[Object(c["g"])("div",hn,Object(c["B"])(i.errorMessage),1)])):Object(c["e"])("",!0),""==i.errorMessage?(Object(c["u"])(),Object(c["f"])("div",yn,"Welcome!")):Object(c["e"])("",!0),Object(c["g"])("div",wn,[Object(c["G"])(Object(c["g"])("input",{id:"firstname",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.firstName=e})},null,512),[[c["D"],i.form.firstName]]),kn,Ln]),Object(c["g"])("div",Tn,[Object(c["G"])(Object(c["g"])("input",{id:"lastname",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.lastName=e})},null,512),[[c["D"],i.form.lastName]]),An,Bn]),Object(c["g"])("div",Nn,[Object(c["G"])(Object(c["g"])("input",{id:"email",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.email=e})},null,512),[[c["D"],i.form.email]]),Cn,xn]),Object(c["g"])("div",_n,[Object(c["G"])(Object(c["g"])("input",{id:"phoneNumber",class:"input",type:"text",placeholder:" ","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.phoneNumber=e})},null,512),[[c["D"],i.form.phoneNumber]]),En,Sn]),Object(c["g"])("div",Pn,[Object(c["G"])(Object(c["g"])("input",{id:"password",class:"input",type:"password",placeholder:" ","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.password=e})},null,512),[[c["D"],i.form.password]]),Dn,Rn]),Object(c["g"])("div",Fn,[Object(c["G"])(Object(c["g"])("input",{id:"confirmPassword",class:"input",type:"password",placeholder:" ","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.form.confirmPassword=e})},null,512),[[c["D"],i.form.confirmPassword]]),In,Un]),Object(c["g"])("button",{type:"text",class:"submit",onClick:t[6]||(t[6]=function(e){return o.register()})},"Register")])])}var Gn={name:"Register",data:function(){return{form:{firstName:"",lastName:"",email:"",phoneNumber:"",password:"",confirmPassword:""},errorMessage:""}},methods:{register:function(){var e=this;console.log("registracija"),this.form.password===this.form.confirmPassword?R()({method:"post",url:"api/register/admin",data:{firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,phoneNumber:this.form.phoneNumber,password:this.form.password,is_superuser:!0}}).then((function(t){200==t.status?e.$router.replace("/"):e.errorMessage="Error occured while registering!"})).catch((function(t){console.log(t),e.errorMessage="Error occured while registering!"})):this.errorMessage="Passwords are not matching!"}}};n("eee3");const $n=v()(Gn,[["render",Mn]]);var Vn=$n,qn={class:"parent"},Hn={class:"users"},zn=Object(c["g"])("h2",{class:"usersHeader"},"Users",-1),Jn={class:"userItem"},Yn={class:"labele"},Wn=Object(c["g"])("div",{class:"label"},"Name:",-1),Kn={class:"label"},Qn={class:"labele"},Xn=Object(c["g"])("div",{class:"label"},"Email:",-1),Zn={class:"label"},ec={class:"labele"},tc={key:0},nc=["onClick"],cc={key:1},rc=["onClick"];function ic(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",qn,[Object(c["g"])("div",Hn,[zn,(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(i.users,(function(e){return Object(c["u"])(),Object(c["f"])("div",{class:"usersList",key:e.id},[Object(c["g"])("div",Jn,[Object(c["g"])("div",Yn,[Wn,Object(c["g"])("div",Kn,Object(c["B"])(e.firstName)+" "+Object(c["B"])(e.lastName),1)]),Object(c["g"])("div",Qn,[Xn,Object(c["g"])("div",Zn,Object(c["B"])(e.email),1)]),Object(c["g"])("div",ec,[e.is_active?(Object(c["u"])(),Object(c["f"])("div",tc,[Object(c["g"])("button",{class:"deactBtn",onClick:function(t){return o.changeUserActivity(e.email)}}," Deactivate user ",8,nc)])):(Object(c["u"])(),Object(c["f"])("div",cc,[Object(c["g"])("button",{class:"actBtn",onClick:function(t){return o.changeUserActivity(e.email)}}," Activate user ",8,rc)]))])])])})),128))])])}var oc={name:"Users",data:function(){return{users:[]}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/users",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,console.log(c),e.users=c;case 8:case"end":return t.stop()}}),t)})))()},methods:{changeUserActivity:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var c,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,fetch("http://127.0.0.1:8000/api/user/activity",{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e})});case 3:return c=n.sent,n.next=6,c.json();case 6:if(r=n.sent,console.log("content ",r),200==c.status)for(i in t.users)t.users[i].email==e&&(t.users[i].is_active=!t.users[i].is_active);case 9:case"end":return n.stop()}}),n)})))()}}};n("f672");const ac=v()(oc,[["render",ic]]);var sc=ac,lc={class:"mainDivss"},uc=Object(c["g"])("div",{class:"notesDivss"},[Object(c["g"])("div",null,"NOTES DIV")],-1),dc=[uc];function bc(e,t,n,r,i,o){return Object(c["u"])(),Object(c["f"])("div",lc,dc)}var pc={name:"Notes",data:function(){return{}}};n("0447");const jc=v()(pc,[["render",bc]]);var Oc=jc,gc=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"Login",component:U},{path:"/register",name:"Register",component:be},{path:"/fdskl3r203rj9fjdk42fj0kd52dfkj342fdkfj2",nsmr:"AdminRegister",component:Vn},{path:"/leads",name:"Leads",component:gn},{path:"/users",name:"Users",component:sc},{path:"/notes",name:"Notes",component:Oc}],fc=Object(w["a"])({history:Object(w["b"])("/"),routes:gc}),mc=fc,vc=n("5502"),hc=Object(vc["a"])({state:{authenticated:!1,administrator:!1,id:null,leads:null},mutations:{SET_AUTH:function(e,t){return e.authenticated=t},SET_ADMIN:function(e,t){return e.administrator=t},SET_ID:function(e,t){return e.id=t},SET_LEADS:function(e,t){return e.leads=t}},actions:{setAuth:function(e,t){var n=e.commit;return n("SET_AUTH",t)},setAdmin:function(e,t){var n=e.commit;return n("SET_ADMIN",t)},setId:function(e,t){var n=e.commit;return n("SET_ID",t)},setLeads:function(e,t){var n=e.commit;return n("SET_LEADS",t)}},getters:{loggedIn:function(e){return e.authenticated},isAdmin:function(e){return e.administrator},getId:function(e){return e.id},getLeads:function(e){return e.leads}},modules:{}});R.a.defaults.baseURL="http://localhost:8000/",Object(c["c"])(y).use(hc).use(mc).mount("#app")},"58db":function(e,t,n){},"5dd8":function(e,t,n){},6050:function(e,t,n){},"6fe3":function(e,t,n){},"7b33":function(e,t,n){},"9ee0":function(e,t,n){"use strict";n("1396")},b241:function(e,t,n){"use strict";n("6050")},c138:function(e,t,n){"use strict";n("58db")},c480:function(e,t,n){},d3be:function(e,t,n){"use strict";n("5dd8")},e9a6:function(e,t,n){},eee3:function(e,t,n){"use strict";n("c480")},f672:function(e,t,n){"use strict";n("2958")}});
//# sourceMappingURL=app.f22c5ff3.js.map