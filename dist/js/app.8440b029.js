(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,b=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0004":function(e,t,a){},"07ee":function(e,t,a){var n={"./abby-smoke.png":"8a84","./model1.jpg":"1256","./model2.jpg":"fb48","./model3.jpg":"f30d","./model4.jpg":"1561","./model5.jpg":"ef24","./model6.jpg":"3731","./model7.jpg":"f75a"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="07ee"},"0b9c":function(e,t,a){e.exports=a.p+"img/abby-model.38c19ee2.jpg"},1115:function(e,t,a){"use strict";a("4ab6")},1256:function(e,t,a){e.exports=a.p+"img/model1.c2a01a7b.jpg"},1561:function(e,t,a){e.exports=a.p+"img/model4.f52b6579.jpg"},2453:function(e,t,a){e.exports=a.p+"img/IMG5785.494a59ce.jpg"},2534:function(e,t,a){},"2d78":function(e,t,a){},3731:function(e,t,a){e.exports=a.p+"img/model6.b2c91e3e.jpg"},3898:function(e,t,a){e.exports=a.p+"img/abby-connect.26889125.jpg"},"3b6a":function(e,t,a){"use strict";a("8c9f")},4272:function(e,t,a){"use strict";a("4aef")},"4a7c":function(e,t,a){e.exports=a.p+"img/abby-smoke2.c783ca7b.png"},"4ab6":function(e,t,a){},"4aef":function(e,t,a){},"4c87":function(e,t,a){"use strict";a("2d78")},"4fe7":function(e,t,a){"use strict";a("2534")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function o(e,t,a,o,r,i){var c=Object(n["G"])("AppNavbar"),s=Object(n["G"])("router-view");return Object(n["y"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(c),Object(n["j"])(s)],64)}var r={class:"nav-menu nav-menu-one"},i=Object(n["i"])("X"),c=Object(n["i"])("About"),s=Object(n["i"])("Schedule"),l={class:"nav-menu nav-menu-two"},d=Object(n["i"])("Connect"),u=Object(n["i"])("Media");function b(e,t,a,o,b,h){var p=Object(n["G"])("router-link");return Object(n["y"])(),Object(n["f"])("div",{class:"navigation-container",style:Object(n["q"])("--text-color: "+this.navbarColors[this.$route.path])},[Object(n["g"])("ul",r,[Object(n["g"])("li",null,[Object(n["j"])(p,{to:{path:"/"},class:"home-icon"},{default:Object(n["M"])((function(){return[i]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(p,{to:{path:"about"}},{default:Object(n["M"])((function(){return[c]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(p,{to:{path:"schedule"}},{default:Object(n["M"])((function(){return[s]})),_:1})])]),Object(n["g"])("ul",l,[Object(n["g"])("li",null,[Object(n["j"])(p,{to:{path:"contact"}},{default:Object(n["M"])((function(){return[d]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(p,{to:{path:"media"}},{default:Object(n["M"])((function(){return[u]})),_:1})])])],4)}var h={name:"AppNavbar",data:function(){return{navbarColors:{"/":"#191E23","/about":"#D3D0CB","/schedule":"#191E23","/contact":"#D3D0CB","/media":"#D3D0CB","/performer":"#D3D0CB","/athlete":"#D3D0CB","/model":"#D3D0CB"}}}},p=(a("d61a"),a("6b0d")),m=a.n(p);const f=m()(h,[["render",b],["__scopeId","data-v-9cad8c3a"]]);var g=f,v={name:"App",components:{AppNavbar:g},data:function(){return{}}};a("4fe7");const j=m()(v,[["render",o]]);var y=j,w=a("6c02"),O=function(e){return Object(n["B"])("data-v-3bc9c0b1"),e=e(),Object(n["z"])(),e},M={class:"mainvisual"},C={class:"main-image"},k={class:"name-container"},I=O((function(){return Object(n["g"])("h2",{class:"name-script"},"abagael cheng",-1)})),x=O((function(){return Object(n["g"])("h1",{class:"name"},"Abagael Cheng",-1)})),S={class:"titles"},A=Object(n["i"])("Performer"),B=Object(n["i"])("Athlete"),_=Object(n["i"])("Model");function G(e,t){var a=Object(n["G"])("router-link");return Object(n["y"])(),Object(n["f"])("div",M,[Object(n["g"])("div",C,[Object(n["g"])("div",k,[I,x,Object(n["g"])("h3",S,[Object(n["j"])(a,{to:{path:"performer"}},{default:Object(n["M"])((function(){return[A]})),_:1}),Object(n["j"])(a,{to:{path:"athlete"}},{default:Object(n["M"])((function(){return[B]})),_:1}),Object(n["j"])(a,{to:{path:"model"}},{default:Object(n["M"])((function(){return[_]})),_:1})])])])])}a("4c87");const T={},N=m()(T,[["render",G],["__scopeId","data-v-3bc9c0b1"]]);var D=N,L=(a("b0c0"),a("a4d3"),a("e01a"),{class:"about-page"}),E={class:"slide-container"},P={class:"about-image__wrapper"},Y=["src"],F={class:"about-content__wrapper"},z={style:{"border-bottom":"1px solid #ddd"}},H=Object(n["i"])("."),V=["innerHTML"],q=["innerHTML"];function J(e,t,o,r,i,c){var s=Object(n["G"])("swiper-slide"),l=Object(n["G"])("swiper");return Object(n["y"])(),Object(n["f"])("div",L,[Object(n["j"])(l,{modules:r.modules,"slides-per-view":1,pagination:{clickable:!0},"space-between":50,onSwiper:r.onSwiper,onSlideChange:c.onSlideChange},{default:Object(n["M"])((function(){return[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["E"])(e.sections,(function(t,o){return Object(n["y"])(),Object(n["d"])(s,{key:t.name,class:Object(n["p"])(["slide","slide-".concat(t.name)])},{default:Object(n["M"])((function(){return[Object(n["g"])("div",E,[Object(n["g"])("div",P,[Object(n["g"])("img",{src:a("7584")("./"+e.photos[o]),class:"about-image"},null,8,Y)]),Object(n["g"])("div",F,[Object(n["g"])("h2",null,[Object(n["i"])(Object(n["I"])(t.statement),1),Object(n["g"])("span",z,Object(n["I"])(t.name),1),H]),t.description?(Object(n["y"])(),Object(n["f"])("p",{key:0,innerHTML:t.description},null,8,V)):(Object(n["y"])(),Object(n["f"])("p",{key:1,innerHTML:t.blurb,class:"push-middle"},null,8,q))])])]})),_:2},1032,["class"])})),128))]})),_:1},8,["modules","onSwiper","onSlideChange"])])}var K=a("4da1"),W=a("8349"),U=(a("e25d"),a("41fa"),a("583f"),a("a1bf"),a("b658")),R={name:"About",components:{Swiper:W["a"],SwiperSlide:W["b"]},data:function(){return{sections:U,sectionList:["performer","athlete","model"],sectionIdx:0,photos:["abby-smoke2.png","abby-smoke2.png","abby-smoke2.png"]}},methods:{onSlideChange:function(){console.log("slide change")},handleScroll:function(){console.log("side scroll")}},setup:function(){var e=function(e){console.log(e)};return{onSwiper:e,modules:[K["a"],K["b"]]}},created:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}};a("f16f");const X=m()(R,[["render",J]]);var $=X,Q=(a("99af"),a("9911"),function(e){return Object(n["B"])("data-v-7523b00a"),e=e(),Object(n["z"])(),e}),Z={class:"schedule-page"},ee=Q((function(){return Object(n["g"])("div",{class:"schedule-image"},null,-1)})),te={class:"schedule-content"},ae=Q((function(){return Object(n["g"])("h2",{class:"schedule-title"},"Upcoming events",-1)})),ne={class:"event-container"},oe={class:"event-date"},re={class:"event-details"},ie={key:0,class:"event-link"},ce=["href"];function se(e,t,a,o,r,i){return Object(n["y"])(),Object(n["f"])("div",Z,[ee,Object(n["g"])("div",te,[ae,(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["E"])(e.events,(function(e,t){return Object(n["y"])(),Object(n["f"])("div",{key:"".concat(e.name).concat(t),class:"schedule-container"},[Object(n["g"])("div",ne,[Object(n["g"])("div",oe,[Object(n["g"])("h3",null,Object(n["I"])(e.date.month),1),Object(n["g"])("h4",null,Object(n["I"])(e.date.day),1)]),Object(n["g"])("div",re,[Object(n["g"])("h3",null,Object(n["I"])(e.title),1),Object(n["g"])("h4",null,Object(n["I"])(e.venue),1),Object(n["g"])("h4",null,Object(n["I"])(e.city)+", "+Object(n["I"])(e.state),1)]),e.link?(Object(n["y"])(),Object(n["f"])("div",ie,[Object(n["g"])("button",null,[Object(n["g"])("a",{href:e.link,target:"_blank"},"Tickets",8,ce)])])):Object(n["e"])("",!0)])])})),128))])])}var le=a("c565"),de={name:"Schedule",data:function(){return{events:le}}};a("4272");const ue=m()(de,[["render",se],["__scopeId","data-v-7523b00a"]]);var be=ue,he=function(e){return Object(n["B"])("data-v-6aa6b9eb"),e=e(),Object(n["z"])(),e},pe={class:"media-page"},me={class:"media-container"},fe=he((function(){return Object(n["g"])("div",{class:"video-container"},[Object(n["g"])("div",{class:"video"},[Object(n["g"])("iframe",{src:"https://www.youtube.com/embed/P3qtLIw8-Jc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),Object(n["g"])("div",{class:"video"},[Object(n["g"])("iframe",{src:"https://www.youtube.com/embed/yw3xI2Ivfx0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),Object(n["g"])("div",{class:"video"},[Object(n["g"])("iframe",{src:"https://www.youtube.com/embed/kAq7bQmjkp0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1)})),ge={style:{height:"100$"}},ve=["src"];function je(e,t,o,r,i,c){var s=Object(n["G"])("masonry-wall");return Object(n["y"])(),Object(n["f"])("div",pe,[Object(n["g"])("div",me,[fe,Object(n["j"])(s,{items:e.images,"ssr-columns":1,"column-width":300,gap:16},{default:Object(n["M"])((function(e){var t=e.item;return[Object(n["g"])("div",ge,[Object(n["g"])("img",{class:"masonry-image",src:a("fa0e")("./".concat(t))},null,8,ve)])]})),_:1},8,["items"])])])}var ye={name:"Media",data:function(){return{images:["IMG5786.jpg","IMG3539.jpg","gallery1.jpg","IMG5781.jpg","IMG5785.jpg"]}}};a("c025");const we=m()(ye,[["render",je],["__scopeId","data-v-6aa6b9eb"]]);var Oe=we,Me={class:"contact-page"},Ce=Object(n["h"])('<div class="contact-image" data-v-f58ddc04></div><div class="contact-content" data-v-f58ddc04><div class="title" data-v-f58ddc04><h2 data-v-f58ddc04>Connect</h2></div><form class="connect__form" data-v-f58ddc04><div class="container" data-v-f58ddc04><div class="row" data-v-f58ddc04><div class="six columns" data-v-f58ddc04><input placeholder="Name" data-v-f58ddc04></div><div class="six columns" data-v-f58ddc04><input placeholder="Email" data-v-f58ddc04></div></div><div class="row" data-v-f58ddc04><div class="twelve columns" data-v-f58ddc04><textarea placeholder="Message" data-v-f58ddc04></textarea></div></div><div class="row submit" data-v-f58ddc04><div class="one column" data-v-f58ddc04><button data-v-f58ddc04> Connect with me </button></div></div></div></form></div>',2),ke=[Ce];function Ie(e,t,a,o,r,i){return Object(n["y"])(),Object(n["f"])("div",Me,ke)}var xe={name:"Contact",data:function(){return{}},methods:{}};a("6b56");const Se=m()(xe,[["render",Ie],["__scopeId","data-v-f58ddc04"]]);var Ae=Se,Be={class:"performer-page"},_e={class:"performer-image__wrapper"},Ge=["src"],Te=Object(n["h"])("<p data-v-747da468> East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her role in social justice and performance art to be one and the same: that of a storyteller. She works towards deepening relationships within and between communities by engaging audiences with relatable narratives and centering collaboration in her productions.<br data-v-747da468><br data-v-747da468>During the 2021-22 season, she will appear as Chocholka the Hen and the Blue Dragonfly in Janáček&#39;s <em data-v-747da468>The Cunning Little Vixen</em>, at Bard College Conservatory of Music, directed by Doug Fitch. Previous season highlights include a debut as Monica in Menotti&#39;s <em data-v-747da468>The Medium</em> at Oberlin Conservatory; performing in Handel&#39;s <em data-v-747da468>Ariodante</em> as Dalinda, conducted by Miah Im; and taking on the role of Fraulein Kost in Kandor&#39;s <em data-v-747da468>Cabaret</em>, directed by Paul Moser.<br data-v-747da468><br data-v-747da468>Ms. Cheng curates her own productions as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique narratives. This discovery began with her degree recital, <em data-v-747da468>Giving her a voice</em>, at Oberlin Conservatory, the purpose of which was to promote and celebrate women composers, featuring only works by Clara Schumann, Alma Mahler, Lili Boulanger, and Libby Larsen. Furthermore, this project sought to bring the audience&#39;s attention to local women-owned businesses in the town of Oberlin, in order to materially support women in their community. During the pandemic, she produced her own recital, <em data-v-747da468>Spirals</em>, at the Greenwich House Music School, which was developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production demonstrates the journey of creating one&#39;s own sense of closure, exploring how the work of healing can generate a new and empowered sense of self.<br data-v-747da468><br data-v-747da468>Ms. Cheng&#39;s particular interest in contemporary music has led her to work closely with up-and-coming composers. As part of the collaborative effort in <em data-v-747da468>Spirals</em>, she premiered an original work for electronics and voice by composer Kari Watson called <em data-v-747da468>Facing Shadows</em>, with text by Ms. Cheng&#39;s aunt about their shared experience of societal shaming of women&#39;s bodies. Ms. Cheng combines her connection to contemporary music with that of the Baroque genre. Consequently, concert highlights include Bach&#39;s Cantata BWV 147, “Herz und Mund und Tat und Leben,” with the Bard Baroque Ensemble, conducted by Renée Anne Louprette; Vessel by Kati Agócs, with the Oberlin Sinfonietta, conducted by Timothy Weiss; and the soprano solo and mezzo solo of Bach&#39;s Cantata BWV 150, “Nach dir, Herr, verlanget mich,” conducted by Jana Ballard.<br data-v-747da468><br data-v-747da468>A New York City-based artist, Ms. Cheng holds a Bachelor of Music in Vocal Performance and a Bachelor of Arts in Mathematics from Oberlin College &amp; Conservatory. She is currently pursuing her Master&#39;s degree in the Graduate Vocal Arts Program at Bard College Conservatory of Music, where she studies under the tutelage of Stephanie Blythe, Kayo Iwama, Erika Switzer, and Lucy Fitz Gibbon. </p>",1);function Ne(e,t,o,r,i,c){return Object(n["y"])(),Object(n["f"])("div",Be,[Object(n["g"])("div",_e,[Object(n["g"])("img",{src:a("2453"),class:"performer-image"},null,8,Ge)]),Te])}var De={name:"Performer",data:function(){return{}}};a("fefc");const Le=m()(De,[["render",Ne],["__scopeId","data-v-747da468"]]);var Ee=Le,Pe=function(e){return Object(n["B"])("data-v-26202b94"),e=e(),Object(n["z"])(),e},Ye={class:"athlete-page"},Fe=Pe((function(){return Object(n["g"])("div",{class:"athlete-image__wrapper"},[Object(n["g"])("div",{class:"video"},[Object(n["g"])("iframe",{width:"100%",height:"600",src:"https://www.youtube.com/embed/IDgolhcyBqE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1)})),ze=Pe((function(){return Object(n["g"])("p",null," Abby started playing ultimate in NYC and went on to play with and captain the Oberlin College Preying Manti, who won the 2019 D-III National title (the first athletic national title in Oberlin's history). In the club division, Abby has played with NY BENT and XIST. Abby played on the USA U24 National Women's Team in 2019, and she received the 2020 Donovan Award. She currently plays for Bard College Big Bird. Abby is looking forward to her second season with NY Gridlock in 2022! ",-1)})),He=[Fe,ze];function Ve(e,t,a,o,r,i){return Object(n["y"])(),Object(n["f"])("div",Ye,He)}var qe={name:"Athlete",data:function(){return{}}};a("1115");const Je=m()(qe,[["render",Ve],["__scopeId","data-v-26202b94"]]);var Ke=Je,We={class:"model-page"},Ue={style:{height:"100$"}},Re=["src"];function Xe(e,t,o,r,i,c){var s=Object(n["G"])("masonry-wall");return Object(n["y"])(),Object(n["f"])("div",We,[Object(n["j"])(s,{items:e.images,"ssr-columns":1,"column-width":300,gap:16},{default:Object(n["M"])((function(e){var t=e.item;return[Object(n["g"])("div",Ue,[Object(n["g"])("img",{class:"masonry-image",src:a("07ee")("./".concat(t))},null,8,Re)])]})),_:1},8,["items"])])}var $e={name:"Model",data:function(){return{images:["abby-smoke.png","model1.jpg","model2.jpg","model3.jpg","model4.jpg","model5.jpg","model6.jpg","model7.jpg"]}}};a("3b6a");const Qe=m()($e,[["render",Xe],["__scopeId","data-v-2b2c3012"]]);var Ze=Qe,et=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:$},{path:"/schedule",name:"Schedule",component:be},{path:"/media",name:"Media",component:Oe},{path:"/contact",name:"Contact",component:Ae},{path:"/performer",name:"Performer",component:Ee},{path:"/athlete",name:"Athlete",component:Ke},{path:"/model",name:"Model",component:Ze}],tt=Object(w["a"])({history:Object(w["b"])(),routes:et}),at=tt,nt=a("7c87"),ot=Object(n["c"])(y);ot.use(nt["a"]),ot.use(at),ot.mount("#app")},5703:function(e,t,a){},"5d08":function(e,t,a){e.exports=a.p+"img/IMG5781.d1053ed4.jpg"},"6b56":function(e,t,a){"use strict";a("5703")},"73eb":function(e,t,a){},7584:function(e,t,a){var n={"./IMG5785.jpg":"2453","./abby-athlete.jpg":"cb71","./abby-connect.jpg":"3898","./abby-model.jpg":"0b9c","./abby-schedule.jpg":"cf11","./abby-smoke2.png":"4a7c","./acxmc.png":"cc9c","./gallery/IMG3539.jpg":"8865","./gallery/IMG5781.jpg":"5d08","./gallery/IMG5785.jpg":"a683","./gallery/IMG5786.jpg":"e536","./gallery/gallery1.jpg":"a0de","./model/abby-smoke.png":"8a84","./model/model1.jpg":"1256","./model/model2.jpg":"fb48","./model/model3.jpg":"f30d","./model/model4.jpg":"1561","./model/model5.jpg":"ef24","./model/model6.jpg":"3731","./model/model7.jpg":"f75a"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="7584"},7706:function(e,t,a){},"7b80":function(e,t,a){},8865:function(e,t,a){e.exports=a.p+"img/IMG3539.0e2da845.jpg"},"8a84":function(e,t,a){e.exports=a.p+"img/abby-smoke.5b8b09ed.png"},"8c9f":function(e,t,a){},a0de:function(e,t,a){e.exports=a.p+"img/gallery1.0c560e93.jpg"},a683:function(e,t,a){e.exports=a.p+"img/IMG5785.494a59ce.jpg"},b658:function(e){e.exports=JSON.parse('[{"name":"performer","statement":"I am a ","blurb":"I am an artist striving to break the boundaries of classical singing and bring social activism to the forefront of my work. I see my role in social justice and performance to be one and the same: that of a storyteller.","description":"East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her role in social justice and performance art to be one and the same: that of a storyteller. She works towards deepening relationships within and between communities by engaging audiences with relatable narratives and centering collaboration in her productions.<br /><br />Ms. Cheng curates her own productions as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique narratives. During the pandemic, she produced her own recital, <em>Spirals</em>, at the Greenwich House Music School, which was developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production demonstrates the journey of creating one\'s own sense of closure, exploring how the work of healing can generate a new and empowered sense of self. As part of this collaborative effort, she premiered an original work by composer Kari Watson, <em>Facing Shadows</em>, with text by Ms. Cheng\'s aunt.<br /><br />A New York City-based artist, Ms. Cheng holds a Bachelor of Music in Vocal Performance and a Bachelor of Arts in Mathematics from Oberlin College & Conservatory. She is currently pursuing her Master’s degree in the Graduate Vocal Arts Program at Bard College Conservatory of Music, where she studies under the tutelage of Stephanie Blythe, Kayo Iwama, Erika Switzer, and Lucy Fitz Gibbon.","detailed":"East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her role in social justice and performance art to be one and the same: that of a storyteller. She works towards deepening relationships within and between communities by engaging audiences with relatable narratives and centering collaboration in her productions.<br /><br />During the 2021-22 season, she will appear as Chocholka the Hen and the Blue Dragonfly in Janáček\'s <em>The Cunning Little Vixen</em>, at Bard College Conservatory of Music, directed by Doug Fitch. Previous season highlights include a debut as Monica in Menotti\'s <em>The Medium</em> at Oberlin Conservatory; performing in Handel\'s <em>Ariodante</em> as Dalinda, conducted by Miah Im; and taking on the role of Fraulein Kost in Kandor\'s <em>Cabaret</em>, directed by Paul Moser.<br /><br />Ms. Cheng curates her own productions as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique narratives. This discovery began with her degree recital, <em>Giving her a voice</em>, at Oberlin Conservatory, the purpose of which was to promote and celebrate women composers, featuring only works by Clara Schumann, Alma Mahler, Lili Boulanger, and Libby Larsen. Furthermore, this project sought to bring the audience\'s attention to local women-owned businesses in the town of Oberlin, in order to materially support women in their community. During the pandemic, she produced her own recital, <em>Spirals</em>, at the Greenwich House Music School, which was developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production demonstrates the journey of creating one\'s own sense of closure, exploring how the work of healing can generate a new and empowered sense of self.<br /><br />Ms. Cheng\'s particular interest in contemporary music has led her to work closely with up-and-coming composers. As part of the collaborative effort in <em>Spirals</em>, she premiered an original work for electronics and voice by composer Kari Watson called <em>Facing Shadows</em>, with text by Ms. Cheng\'s aunt about their shared experience of societal shaming of women\'s bodies. Ms. Cheng combines her connection to contemporary music with that of the Baroque genre. Consequently, concert highlights include Bach\'s Cantata BWV 147, “Herz und Mund und Tat und Leben,” with the Bard Baroque Ensemble, conducted by Renée Anne Louprette; Vessel by Kati Agócs, with the Oberlin Sinfonietta, conducted by Timothy Weiss; and the soprano solo and mezzo solo of Bach\'s Cantata BWV 150, “Nach dir, Herr, verlanget mich,” conducted by Jana Ballard.<br /><br />A New York City-based artist, Ms. Cheng holds a Bachelor of Music in Vocal Performance and a Bachelor of Arts in Mathematics from Oberlin College & Conservatory. She is currently pursuing her Master\'s degree in the Graduate Vocal Arts Program at Bard College Conservatory of Music, where she studies under the tutelage of Stephanie Blythe, Kayo Iwama, Erika Switzer, and Lucy Fitz Gibbon."},{"name":"athlete","statement":"I am an ","blurb":"I am an ultimate frisbee player and leader, who finds joy in working towards success through teamwork. I seek to foster communities where female, non-binary, and genderqueer athletes can feel empowered in this sport.","description":"","detailed":"Abby started playing ultimate in NYC and went on to play with and captain the Oberlin College Preying Manti, who won the 2019 D-III National title (the first athletic national title in Oberlin\'s history). In the club division, Abby has played with NY BENT and XIST. Abby played on the USA U24 National Women\'s Team in 2019, and she received the 2020 Donovan Award. She currently plays for Bard College Big Bird. Abby is looking forward to her second season with NY Gridlock in 2022!"},{"name":"model","statement":"I am a ","blurb":"I am a freelance model.","description":""}]')},c025:function(e,t,a){"use strict";a("7b80")},c565:function(e){e.exports=JSON.parse('[{"title":"Beauty Intolerable","date":{"day":"27","month":"April","year":"2022"},"venue":"FDR Library\'s Wallace Center","city":"New York","state":"NY"},{"title":"Continuing Evolution: Yiddish Folk Song Today","date":{"day":"18","month":"May","year":"2022"},"venue":"YIVO Institute for Jewish Research","city":"New York","state":"NY","link":"https://www.yivo.org/FolksongFestival2"},{"title":"The Final Veil","date":{"day":"14","month":"July","year":"2022"},"additionaldates":[{"day":"15","month":"July","year":"2022"},{"day":"16","month":"July","year":"2022"},{"day":"17","month":"July","year":"2022"}],"venue":"Nancy Manocherian\'s The Cell Theatre","city":"New York","state":"NY","link":"https://www.thefinalveilopera.com/"}]')},cb71:function(e,t,a){e.exports=a.p+"img/abby-athlete.ed4093b5.jpg"},cc9c:function(e,t,a){e.exports=a.p+"img/acxmc.e419b311.png"},cf11:function(e,t,a){e.exports=a.p+"img/abby-schedule.30a63030.jpg"},d61a:function(e,t,a){"use strict";a("0004")},e536:function(e,t,a){e.exports=a.p+"img/IMG5786.d5664d3c.jpg"},ef24:function(e,t,a){e.exports=a.p+"img/model5.46b436c3.jpg"},f16f:function(e,t,a){"use strict";a("7706")},f30d:function(e,t,a){e.exports=a.p+"img/model3.63dd8039.jpg"},f75a:function(e,t,a){e.exports=a.p+"img/model7.1dcdf2ce.jpg"},fa0e:function(e,t,a){var n={"./IMG3539.jpg":"8865","./IMG5781.jpg":"5d08","./IMG5785.jpg":"a683","./IMG5786.jpg":"e536","./gallery1.jpg":"a0de"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="fa0e"},fb48:function(e,t,a){e.exports=a.p+"img/model2.8d135a87.jpg"},fefc:function(e,t,a){"use strict";a("73eb")}});
//# sourceMappingURL=app.8440b029.js.map