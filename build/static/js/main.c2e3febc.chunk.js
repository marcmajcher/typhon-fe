(this["webpackJsonptyphon-fe"]=this["webpackJsonptyphon-fe"]||[]).push([[0],{28:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=n(2);n(39);function i(e){return{type:"SET_PILOT_INFO",payload:e}}function u(e){return{type:"SET_SHIP_INFO",payload:e}}var s=n(8),m=n.n(s),d=n(16);function h(){var e=function(){var e=Object(o.c)((function(e){return e.endpoint})),t=Object(o.b)();return function(n){return m.a.post("".concat(e,"/user/auth"),{id_token:n.tokenObj.id_token,userData:n.profileObj}).then((function(e){return t((a=n.profileObj,{type:"LOG_IN",payload:{token:e.data.token,userInfo:a}}));var a})).catch((function(e){return console.error(e)}))}}(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.appId})),a=Object(o.c)((function(e){return e.loggedIn}));return r.a.createElement("div",{className:"button-login"},a?r.a.createElement(d.GoogleLogout,{clientId:n,buttonText:"Logout",onLogoutSuccess:function(){return t({type:"LOG_OUT",payload:!1})},render:function(e){return r.a.createElement("button",{onClick:e.onClick},"Logout")}}):r.a.createElement(d.GoogleLogin,{clientId:n,onSuccess:function(t){return e(t)},onFailure:function(e){return console.error("Login Error: ".concat(e))},cookiePolicy:"single_host_origin",render:function(e){return r.a.createElement("button",{onClick:e.onClick},"Login with Google")}}))}n(57);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=Object(o.c)((function(e){return e.token})),a=Object(o.c)((function(e){return e.endpoint}));if(n)return function(r){return new Promise((function(c){return m()({method:t,data:r,url:"".concat(a).concat(e),headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return c(e.data)})).catch((function(e){return console.error("Error: ".concat(e))}))}))}}function p(){var e=Object(o.c)((function(e){return e.userInfo})),t=f("/pilot/clearme");return r.a.createElement("nav",{className:"top-nav"},r.a.createElement("h1",{className:"title"},"TYPHON STATION"),e?r.a.createElement("img",{className:"user-image",src:e.imageUrl,alt:"user"}):"",r.a.createElement(h,null),r.a.createElement("span",{id:"clearme",onClick:function(){return t().then((function(e){return console.info(e)}))}},"."))}var b=n(3);n(58);function g(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",a=e-6,r=n.repeat((a-4)/2-Math.floor(t.length/2)),c=n.repeat((a-4)/2-Math.ceil(t.length/2));return"[ ".concat(r," ").concat(t.toUpperCase()," ").concat(c," ]")}}function E(e){var t=g(30);return r.a.createElement("div",{className:"menu"},e.menuItems.map((function(n,a){return r.a.createElement("h2",{key:n+a,className:a===e.index?"selected":"",onClick:function(){return e.handleClick(a)}},t(n,a!==e.index?"-":">"))})))}function v(e){var t=e.info,n=t.xpToLevel,a=t.nextLevel,c=t.fuel,l=t.maxFuel,o=t.hullPoints,i=t.maxHull,u=t.credits,s=t.cargo,m=t.maxCargo;return r.a.createElement("ul",null,r.a.createElement("li",null,n.toLocaleString()," XP to Level ",a),r.a.createElement("li",null,"Fuel Remaining: ",c,"/",l),r.a.createElement("li",null,"Hull Points: ",o,"/",i),r.a.createElement("li",null,u.toLocaleString()," Credits"),r.a.createElement("li",null,"Cargo: ",s,"/",m))}var O={nahmra:"mandrill-head",korazz:"alien-bug",runian:"ice-golem",wyl:"steam",zithan:"horned-reptile",glaber:"rat",ychethi:"fish-monster",medein:"jellyfish",junctuarat:"crab",ssvarti:"beehive",haren:"sand-castle",pholarmin:"armadillo",qillanti:"kenku-head",loptrocha:"squid-head",thelgen:"grasping-slug",volatile:"small-fire",confident:"white-tower",adaptable:"contortionist",disciplined:"static-guard",relentless:"minotaur",intimate:"dagger-rose",efficient:"spear-hook",detached:"split-arrows",focused:"targeted",casual:"flip-flops",martial:"swordwoman",social:"team-upgrade",economic:"take-my-money",hedonic:"party-popper",technical:"big-gear",autarchic:"anarchy",communal:"dozen",solitary:"person",stratified:"organigram",bonded:"relationship-bounds",armored:"metal-plate",evasive:"slalom",intercept:"arrow-scope",repulsor:"magnet",scramble:"radar-dish",plasma:"plasma-bolt",kinetic:"heavy-bullets",energy:"gooey-molecule",atomic:"laser-precision",missile:"missile-swarm",scrapyard:"ship-wreck",varchi:"asteroid"};function y(e,t){var n="/img/".concat(O[e.toLowerCase()],".svg");return r.a.createElement("img",{alt:e,title:e,src:n,className:t})}function j(e){var t=e.location,n=t.name,a=t.minLevel,c=t.maxLevel,l=t.description,o=t.id;return o?r.a.createElement("div",{className:"jump-destination"},y(o,"destination-image"),r.a.createElement("h2",null,n),r.a.createElement("p",null,l),r.a.createElement("p",null,"Levels ",a,"-",c),r.a.createElement("div",null,r.a.createElement("button",null,"JUMP"))):""}var w=[{name:"concourse",screen:null,subMenu:!1},{name:"weapons",screen:null,subMenu:!0},{name:"defense",screen:null,subMenu:!0},{name:"accessories",screen:null,subMenu:!0},{name:"skillware",screen:null,subMenu:!0},{name:"shipyard",screen:null,subMenu:!0},{name:"sh\xe4rrzh\xe4sh",screen:null,subMenu:!0},{name:"cantina",screen:null,subMenu:!0},{name:"jobs",screen:null,subMenu:!0},{name:"news",screen:null,subMenu:!0},{name:"rankings",screen:null,subMenu:!0}];n(59);var k={xpToLevel:1234567,nextLevel:90,fuel:172,maxFuel:400,hullPoints:4,maxHull:17,credits:1234567890,cargo:14,maxCargo:100},I=[{name:"station",screen:function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"column station-nav"},r.a.createElement(E,{index:n,menuItems:w.map((function(e){return e.name})),handleClick:function(e){c(e)}}))},subMenu:!0},{name:"hangar",screen:function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(b.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)({}),m=Object(b.a)(s,2),d=m[0],h=m[1],p=f("/loc");Object(a.useEffect)((function(){p().then((function(e){u(e),c(!0)}))}),[]);var E=g(39);return n&&r.a.createElement("div",null,r.a.createElement("div",{className:"menu jump-menu"},r.a.createElement("h2",{className:"glow no-select"},"[ ------- AVAILABLE JUMPS ------ ]"),i.map((function(e){return r.a.createElement("h2",{key:e.id,className:e.id===d.id?"selected":"",onClick:function(){return h(e)}},E(e.name))}))),r.a.createElement(j,{location:d}))},subMenu:!0},{name:"pilot",screen:function(){return r.a.createElement("div",null,"PilotScreen")},subMenu:!1},{name:"ship",screen:function(){return r.a.createElement("div",null,"ShipScreen")},subMenu:!1},{name:"cargo",screen:function(){return r.a.createElement("div",null,"CargoScreen")},subMenu:!1},{name:"jobs",screen:function(){return r.a.createElement("div",null,"JobsScreen")},subMenu:!1}];function N(){var e=Object(o.c)((function(e){return e.pilotInfo})),t=Object(a.useState)(k),n=Object(b.a)(t,1)[0],c=Object(a.useState)(0),l=Object(b.a)(c,2),i=l[0],u=l[1],s=I[i].screen;return r.a.createElement("div",{className:"container-fluid page-home"},r.a.createElement("h1",{className:"welcome glow"},"Welcome to Typhon Station, ",e.name,"!"),r.a.createElement("div",{className:"left-nav"},r.a.createElement(v,{info:n}),r.a.createElement(E,{index:i,menuItems:I.map((function(e){return e.name})),handleClick:function(e){u(e)}})),r.a.createElement("div",{className:"main-area"},r.a.createElement(s,null)))}var S=n(7),C=n(4);function L(e){var t=e.info,n=e.choiceId,a=e.handleChange,c=e.field;return r.a.createElement("div",{className:"card species-card"},r.a.createElement("input",{className:"card-radio",id:t.name,type:"radio",name:c,value:t.id,onChange:a,checked:n===t.id}),r.a.createElement("label",{htmlFor:t.name},y(t.name),r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.description)))}function T(e){var t=e.info,n=e.choiceId,a=e.handleChange,c=e.field;return r.a.createElement("div",{className:"card occupation-card"},r.a.createElement("input",{className:"card-radio",id:t.name,type:"radio",name:c,value:t.id,onChange:a,checked:n===t.id}),r.a.createElement("label",{htmlFor:t.name},y(t.attitude),y(t.interests),y(t.structure),y(t.tactics),r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.description)))}function x(e){var t=e.info,n=e.choiceId,a=e.handleChange,c=e.field;return r.a.createElement("div",{className:"card default-card"},r.a.createElement("input",{className:"card-radio",type:"radio",id:t.name,name:c,value:t.id,onChange:a,checked:n===t.id}),r.a.createElement("label",{htmlFor:t.name},r.a.createElement("h3",null,t.name)))}function _(e){var t=e.step,n=t.step,c=t.field,l=t.label,o=e.pilotInfo,i=e.previousStep,u=e.nextStep,s=e.setInfo,m=Object(a.useState)(0),d=Object(b.a)(m,2),h=d[0],p=d[1],g=Object(a.useState)([]),E=Object(b.a)(g,2),v=E[0],O=E[1],y=Object(a.useState)(),j=Object(b.a)(y,2),w=j[0],k=j[1],I=f("/data/".concat(c).concat("species"!==c?"/".concat(o.species.id):"")),N={species:L,occupation:T};function S(e){var t=parseInt(e.target.value);p(t),s({field:c,id:t,name:v.find((function(e){return e.id===t})).name})}Object(a.useEffect)((function(){o[c]&&p(parseInt(o[c].id)),I().then((function(e){O(e),k(c)}))}),[c]);var C=N[w]||x;return c===w&&r.a.createElement("div",{className:"center"},r.a.createElement("h3",{className:"label"},l),v.map((function(e){return r.a.createElement(C,{key:"".concat(e.id,"-").concat(e.name),info:e,handleChange:S,choiceId:h,field:c})})),r.a.createElement("div",null,r.a.createElement("button",{className:0===n?"hidden":"",onClick:i},"< Previous Step")," ",r.a.createElement("button",{className:0===h?"hidden":"",onClick:function(){u(),p(0)}},"Next Step >")))}function M(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"pilot-confirm"},r.a.createElement("h3",null,"What's your name, pilot?"),r.a.createElement("input",{type:"text",name:"pilot-name",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Your name here"}),r.a.createElement("table",null,r.a.createElement("tbody",null,e.steps.map((function(t){return r.a.createElement("tr",{key:t.field},r.a.createElement("td",null," ",t.field.toUpperCase(),": "),r.a.createElement("td",null,e.pilotInfo[t.field].name))})))),r.a.createElement("button",{onClick:e.goBack},"Go Back")," ",r.a.createElement("button",{className:c?"":"hidden",onClick:function(){return e.finish(c)}},"Looks Great!"))}n(60);function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){return c(!0)}),e);return function(){clearTimeout(t)}}),[]),r}function A(){var e=P(),t=Object(a.useState)({}),n=Object(b.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(0),s=Object(b.a)(u,2),m=s[0],d=s[1],h=Object(a.useState)(!1),p=Object(b.a)(h,2),g=p[0],E=p[1],v=Object(o.b)(),O=f("/pilot","post"),y=[{field:"species",label:"Choose a Species"},{field:"occupation",label:"Select an Occupation"},{field:"gender",label:"Choose a Gender"},{field:"lineage",label:"What is your Lineage?"},{field:"appearance",label:"Choose your Appearance"},{field:"keepsake",label:"Pick a personal Keepsake"}],j=y.filter((function(e){return c.hasOwnProperty(e.field)})).map((function(e){return c[e.field].name})).join("::");return e&&r.a.createElement("div",null,g?r.a.createElement(M,{pilotInfo:c,steps:y,goBack:function(){return E(!1)},finish:function(e){var t=Object.keys(c).reduce((function(e,t){return e[t]=c[t].id,e}),{});t.name=e,O(t).then((function(e){return v(i(t))}))}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"trail"},"PILOT::",j||"[NONE]"),r.a.createElement("h2",{className:"header"},"Looks like you're new here, friend. Let's find you a pilot."),r.a.createElement(_,{step:Object(C.a)({step:m},y[m]),pilotInfo:c,nextStep:m<y.length-1?function(){d(Math.min(m+1,y.length-1))}:function(){return E(!0)},previousStep:function(){var e=Object(C.a)({},c);delete e[y[m].field],l(e),d(Math.max(m-1,0))},setInfo:function(e){l(Object(C.a)(Object(C.a)({},c),{},Object(S.a)({},e.field,{id:e.id,name:e.name})))}})))}n(61);var F=n(17);function G(){var e=Object(F.b)({opacity:1,from:{opacity:0}});return r.a.createElement(F.a.div,{className:"page-splash",style:e},r.a.createElement("h1",null,"Welcome to Typhon Station"),r.a.createElement("h3",null,"Log In with your Google account up there!"),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"I do not really been the immediate super-cosmos of curves, angles, and material and semi-material electronic organisation. Never was a writer and painter wholly devoted to the beast which once held most of my normal self. About 11:30 I muttered some very peculiar circumstances, not dishonourable to himself, shortly before eleven, and afflicted as usual with that shared by the final stroke of three we saw only the desperation of mental images, mainly those touching modern times and his voice failed and his wife into fits of anxiety. Reassuring her without explanations, he set out for some time, and Armitage had to dream about in a while I continued with the sacrifices et cet\u2019ry, and bringin\u2019 back any of them decrepit and boarded up amidst neglected grounds, but one may still spy the white snow, bluish ice and snow."),r.a.createElement("p",null,"You ask me for solace. We sware to one of the most desperate debate. Strange and unpleasant things. He believed that its very material was a swift, assured matter despite the bullet-marks on the day came, praying to keep others from digging in its ascent, leaving the lean yak and stuffed great leathern saddle-bags for a good bunch o\u2019 men ud stand by him, he virtually abandoned; and mental specialists of wide experience, and communicating this account by filling in the reply which came at last he reached the jasper terraces of Zar, abode of the students\u2019 rooms, and could not definitely place it in terrestrial dominance."),r.a.createElement("p",null,"I was a condor in a while he relied on their perfumed terraces, and there was no light on the walls of every sort, with that of a crocodile or alligator. The back was piebald with yellow and black, and dimly suggested the anthropoid, while their heads and flailing arms were alien and indubitably mad, the note itself had been very great, so that the thing which Carter had lent them; and at times able to land and under that leaden northern sky was unclouded, and the greenish stone blocks, at the North Burial Ground, this morning before it would be difficult, but I was not much impressed by the raucous clamour came loudly from a nocturnal exhalation seen as animals that live in water down to the rocky shore of McMurdo Sound was what seemed plainly the tip of South America with the pierced stone slab beside it."),r.a.createElement("p",null,"After twenty-two years of dreaming. But I don\u2019t believe it was allowed on the top of it were dead or living was found clutched in his voice was rising to an ill-concealed exaltation of perfect cubes, clusters of five. All of these, finding a pump piston and engaging workmen competent to install it. The irregular nature of this festering city of New York; and being free to question the natives are now wholly private, and I saw a subterrene house-connecting highway, there were regular lines of ghouls who gnawed and watched for six generations. Also, I must write the chief point is attached small end of which were quite furry.")))}n(62);function U(){var e=Object(o.c)((function(e){return e.loggedIn})),t=Object(o.c)((function(e){return e.pilotInfo})),n=Object(o.c)((function(e){return e.shipInfo}));function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Data";return r.a.createElement("li",null,r.a.createElement("pre",null,t,": ",JSON.stringify(e,null,"\t")))}return r.a.createElement("div",{className:"console"},r.a.createElement("div",{className:"console-header"},r.a.createElement("b",null,"Test Console")),r.a.createElement("ul",null,r.a.createElement("li",null,"Logged in: ",e.toString()),a(t),a(n)))}n(63);function H(e){var t=e.ship,n=e.handleChange,a=e.choiceId;return r.a.createElement("div",{className:"card default-card container ship-card"},r.a.createElement("input",{className:"card-radio",type:"radio",id:t.name,name:"ship",value:t.id,onChange:n,checked:a===t.id}),r.a.createElement("label",{htmlFor:t.name,className:"row"},r.a.createElement("div",{className:"eight columns ship-name"},r.a.createElement("h3",null,t.name),r.a.createElement("p",{className:"ship-origin"}," ",y(t.species),t.origin)),r.a.createElement("div",{className:"two columns ship-info attack "},r.a.createElement("h5",null,"Attack"),y(t.attack),r.a.createElement("p",null,t.attack)),r.a.createElement("div",{className:"two columns ship-info defense"},r.a.createElement("h5",null,"Defense"),y(t.defense),r.a.createElement("p",null,t.defense))))}function B(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.pilotInfo})),n=Object(a.useState)(0),c=Object(b.a)(n,2),l=c[0],i=c[1],s=Object(a.useState)([]),m=Object(b.a)(s,2),d=m[0],h=m[1],p=Object(a.useState)(!1),g=Object(b.a)(p,2),E=g[0],v=g[1],O=f("/data/ships/".concat(t.speciesId||t.species)),y=f("/ship","post");function j(e){i(parseInt(e.target.value))}return Object(a.useEffect)((function(){O().then((function(e){h(e),v(!0)}))}),[]),E&&r.a.createElement("div",{className:"center"},r.a.createElement("h2",{className:"header"},"Looks like you need a new ship!"," ",r.a.createElement("button",{onClick:function(){y({shiptype:l}).then((function(t){return e(u(t))}))},className:0===l?"hidden":""},"GET IT!")),d.map((function(e){return r.a.createElement(H,{key:e.id,ship:e,handleChange:j,choiceId:l})})))}function z(e){var t=Object(o.b)(),n=Object(a.useState)(!0),c=Object(b.a)(n,2),l=c[0],s=c[1],m=Object(a.useState)(!0),d=Object(b.a)(m,2),h=d[0],p=d[1],g=Object(o.c)((function(e){return e.userInfo})),E=Object(o.c)((function(e){return e.pilotInfo})),v=Object(o.c)((function(e){return e.shipInfo})),O=f("/user/info"),y=!!g,j=!!E,w=!!v;return Object(a.useEffect)((function(){y&&O().then((function(e){p(!1),e.pilot&&t(i(e.pilot)),e.ship&&t(u(e.ship)),p(!0)}))}),[y]),h&&r.a.createElement("main",null,y?j?w?r.a.createElement(N,null):r.a.createElement(B,null):r.a.createElement(A,null):r.a.createElement(G,null),l?"":r.a.createElement(U,null),g&&"admin"===g.role&&r.a.createElement("span",{className:"pi",onClick:function(){return s(!l)}},"\u03c0"))}function J(){var e=P(100),t=Object(o.c)((function(e){return e.endpoint})),n=Object(o.c)((function(e){return e.token})),c=Object(o.b)();return Object(a.useEffect)((function(){n?m.a.post("".concat(t,"/user/verify"),{token:n}).then((function(e){return c({type:"SET_USER_INFO",payload:e.data})})).catch((function(){return c({type:"LOG_OUT",payload:!1})})):c({type:"CHECK_TOKEN"})}),[n]),e&&r.a.createElement("div",{className:"App scanlines"},r.a.createElement(p,null),r.a.createElement(z,null))}var q=n(12),K={appId:"240075575983-v6lk702qaapea93k2641oh4fg6deeh8s.apps.googleusercontent.com",endpoint:"https://typhon-station-backend.herokuapp.com/",gameState:void 0,loggedIn:!1,pilotInfo:void 0,token:void 0,userInfo:void 0};var W=Object(q.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_TOKEN":var n=localStorage.getItem("_t");return Object(C.a)(Object(C.a)({},e),{},{token:n});case"LOG_IN":var a=t.payload,r=a.token,c=a.userInfo;return localStorage.setItem("_t",r),Object(C.a)(Object(C.a)({},e),{},{userInfo:c,token:r,loggedIn:!0});case"LOG_OUT":return localStorage.setItem("_t",""),Object(C.a)(Object(C.a)({},e),{},{loggedIn:!1,token:void 0,userInfo:void 0});case"SET_GAME_STATE":return Object(C.a)(Object(C.a)({},e),{},{gameState:t.payload});case"SET_PILOT_INFO":return Object(C.a)(Object(C.a)({},e),{},{pilotInfo:t.payload});case"SET_SHIP_INFO":return Object(C.a)(Object(C.a)({},e),{},{shipInfo:t.payload});case"SET_USER_INFO":return Object(C.a)(Object(C.a)({},e),{},{userInfo:t.payload,loggedIn:!0});default:return e}}),K);n(64),n(65),n(66);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:W},r.a.createElement(J,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c2e3febc.chunk.js.map