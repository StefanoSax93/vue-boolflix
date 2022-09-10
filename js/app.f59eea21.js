(function(){"use strict";var t={806:function(t,e,r){var n=r(144),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column h-100"},[r("TheHeader"),r("LoaderPage"),r("TheMain")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-shrink-0 bg-dark p-3"},[n("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between align-items-center gap-4"},[n("img",{staticClass:"logo",attrs:{src:r(688),alt:""}}),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cerca un film o una serie TV"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchMovies.apply(null,arguments)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:t.searchMovies}},[t._v("Cerca")])])])])},a=[],l=r(669),c=r.n(l);const u=n.Z.observable({moviesList:[],seriesList:[],clicked:!1,loading:!1});function d(t,e){u.loading=!0,c().get("https://api.themoviedb.org/3/search/"+e,{params:{api_key:"5199994b52f8293fde21362444fcd134",query:t,language:"it-IT"}}).then((t=>{"movie"===e?u.moviesList=t.data.results:"tv"===e&&(u.seriesList=t.data.results),console.log(u.moviesList),console.log(u.seriesList),setTimeout((()=>{u.clicked=!0}),1e3),u.loading=!1})).catch((()=>{alert("A causa di un errore l'operazione non è andata a buon fine")}))}var v={name:"TheHeader",data(){return{searchText:""}},methods:{searchMovies(){d(this.searchText,"movie"),d(this.searchText,"tv"),this.searchText=""}}},p=v,f=r(1),g=(0,f.Z)(p,o,a,!1,null,"4d55197b",null),_=g.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-grow-1 bg-secondary overflow-auto"},[r("div",{staticClass:"container p-5"},[r("div",{staticClass:"text-uppercase text-center text-danger mb-5 display-2 fw-bold"},[t._v("film")]),r("div",{staticClass:"d-flex flex-wrap gap-5 justify-content-center"},t._l(t.moviesList,(function(t){return r("div",{key:t.id},[r("StampCard",{attrs:{product:t}})],1)})),0),0===t.moviesList.length&&t.clicked()?r("div",[r("div",{staticClass:"alert alert-warning text-dark fw-bold"},[t._v("Nessun risultato trovato")])]):t._e()]),r("div",{staticClass:"py-3 bg-dark"}),r("div",{staticClass:"container p-5"},[r("div",{staticClass:"text-uppercase text-center text-danger mb-5 display-2 fw-bold"},[t._v("serie tv")]),r("div",{staticClass:"d-flex flex-wrap gap-5 justify-content-center"},t._l(t.seriesList,(function(t){return r("div",{key:t.id},[r("StampCard",{attrs:{product:t}})],1)})),0),0===t.seriesList.length&&t.clicked()?r("div",[r("div",{staticClass:"alert alert-warning text-dark fw-bold"},[t._v("Nessun risultato trovato")])]):t._e()])])},h=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.product.title?r("div",{staticClass:"mb-3 w-100 position-relative poster",on:{"~mouseover":function(e){return t.getActors("movie",t.product.id)}}},[r("img",{staticClass:"rounded",attrs:{src:"http://image.tmdb.org/t/p/w342/"+t.product.poster_path,alt:""},on:{error:t.onImgError}}),r("div",{staticClass:"card-overlay text-white p-3 overflow-auto rounded"},[r("div",[r("strong",[t._v("Titolo:")]),t._v(" "+t._s(t.product.title))]),r("div",[r("strong",[t._v("Titolo originale:")]),t._v(" "+t._s(t.product.original_title))]),r("div",[r("strong",[t._v("Lingua:")]),t._v(" "),r("lang-flag",{staticClass:"rounded",attrs:{iso:t.product.original_language}})],1),r("div",[r("strong",[t._v("Voto:")]),t._l(5,(function(e){return r("span",{key:e,staticClass:"ms-2"},[r("i",{staticClass:"fa-solid fa-star text-secondary",class:{"text-warning":e<=t.transformVote(t.product.vote_average)}})])}))],2),t.product.overview?r("div",[r("strong",[t._v("Overview:")]),t._v(" "+t._s(t.product.overview))]):r("div",[r("strong",[t._v("Overview:")]),t._v(" Non disponibile")]),r("div",[t._m(0),t._l(t.actorsList,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+", ")])}))],2),r("div",[t._m(1),t._l(t.genresList,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+", ")])}))],2)])]):t.product.original_name?r("div",{staticClass:"mb-3 w-100 position-relative poster",on:{"~mouseover":function(e){return t.getActors("tv",t.product.id)}}},[r("img",{attrs:{src:"http://image.tmdb.org/t/p/w342/"+t.product.poster_path,alt:""},on:{error:t.onImgError}}),r("div",{staticClass:"card-overlay text-white p-3 overflow-auto"},[r("div",[r("strong",[t._v("Titolo:")]),t._v(" "+t._s(t.product.name))]),r("div",[r("strong",[t._v("Titolo originale:")]),t._v(" "+t._s(t.product.original_name))]),r("div",[r("strong",[t._v("Lingua:")]),t._v(" "),r("lang-flag",{staticClass:"rounded",attrs:{iso:t.product.original_language}})],1),r("div",[r("strong",[t._v("Voto:")]),t._l(5,(function(e){return r("span",{key:e,staticClass:"ms-2"},[r("i",{staticClass:"fa-solid fa-star text-secondary",class:{"text-warning":e<=t.transformVote(t.product.vote_average)}})])}))],2),t.product.overview?r("div",[r("strong",[t._v("Overview:")]),t._v(" "+t._s(t.product.overview))]):r("div",[r("strong",[t._v("Overview:")]),t._v(" Non disponibile")]),r("div",[t._m(2),t._l(t.actorsList,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+", ")])}))],2),r("div",[t._m(3),t._l(t.genresList,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+", ")])}))],2)])]):t._e()])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("strong",[t._v("Cast:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("strong",[t._v("Generi:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("strong",[t._v("Cast:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("strong",[t._v("Generi:")])])}],y=r(53),w={name:"StampCard",components:{LangFlag:y.Z},data(){return{actorsList:[],genresList:[]}},props:{product:Object},methods:{transformVote(t){return Math.ceil(t/2)},onImgError(t){t.target.src="img/imgError.png"},getActors(t,e){c().get("https://api.themoviedb.org/3/"+t+"/"+e+"/credits?&api_key=5199994b52f8293fde21362444fcd134").then((t=>{this.actorsList=[],this.actorsList=t.data.cast.slice(0,5),console.log(this.actorsList)})),c().get("https://api.themoviedb.org/3/"+t+"/"+e+"?&api_key=5199994b52f8293fde21362444fcd134&language=it-IT").then((t=>{this.genresList=[],this.genresList=t.data.genres,console.log(this.genresList)}))}}},C=w,k=(0,f.Z)(C,b,x,!1,null,null,null),L=k.exports,T={name:"TheMain",components:{StampCard:L},methods:{clicked(){return u.clicked}},computed:{moviesList(){return u.moviesList},seriesList(){return u.seriesList}}},O=T,E=(0,f.Z)(O,m,h,!1,null,null,null),j=E.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{staticClass:"loader bg-secondary text-white"},[r("div",{staticClass:"spinner-border"})]):t._e()},M=[],$={computed:{loading(){return u.loading}}},S=$,P=(0,f.Z)(S,Z,M,!1,null,null,null),V=P.exports,A={name:"App",components:{TheHeader:_,TheMain:j,LoaderPage:V}},I=A,N=(0,f.Z)(I,i,s,!1,null,null,null),H=N.exports;r(244);n.Z.component("lang-flag",y.Z),n.Z.config.productionTip=!1,new n.Z({render:t=>t(H)}).$mount("#app")},688:function(t,e,r){t.exports=r.p+"img/logo.a5285dc6.png"}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,s){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/vue-boolflix/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,o=n[0],a=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var u=l(r)}for(e&&e(n);c<o.length;c++)s=o[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},n=self["webpackChunkvue_boolflix"]=self["webpackChunkvue_boolflix"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(806)}));n=r.O(n)})();
//# sourceMappingURL=app.f59eea21.js.map