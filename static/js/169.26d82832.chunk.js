"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[169],{9036:function(n,e,t){t.d(e,{Z:function(){return _}});var r,a,i,c,u,o,s,p=t(7689),d=t(168),m=t(1087),f=t(6444),l=(0,f.ZP)(m.rU)(r||(r=(0,d.Z)(["\n    text-decoration: none;\n    color: #fff;\n"]))),h=f.ZP.li(a||(a=(0,d.Z)(["\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);\n    background-color: RGBA(0, 0, 0, 1);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n    &:hover {\n    transform: scale(1.02);\n    }\n\n    @media screen and (max-width: 480px) {\n    width: 80%;\n    }\n"]))),g=f.ZP.p(i||(i=(0,d.Z)(["\n    font-size: 20px;\n    margin-bottom: 5px;\n"]))),x=f.ZP.div(c||(c=(0,d.Z)(["\n    padding: 10px;\n"]))),v=f.ZP.img(u||(u=(0,d.Z)(["\n    display: block;\n    max-width: 100%;\n"]))),Z=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],y=t(184),b=function(n){var e=Object.values(n),t=[];return Z.forEach((function(n){e[0].includes(n.id)&&t.push(n.name)})),(0,y.jsx)(w,{children:t.slice(0,2).join(", ")+", Other"})},w=f.ZP.span(o||(o=(0,d.Z)(["\n    color: #ff6b01;\n"]))),k=function(n){var e=n.itemData,t=e.poster_path,r=e.title,a=e.genre_ids;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{children:[(0,y.jsx)(v,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",alt:""}),(0,y.jsxs)(x,{children:[(0,y.jsx)(g,{children:r}),(0,y.jsx)(b,{genresId:a})]})]})})},j=f.ZP.ul(s||(s=(0,d.Z)(["\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1em;\n    list-style: none;\n\n    @media screen and (max-width: 480px) {\n        grid-template-columns: repeat(1, 1fr);\n        justify-items: center;\n    }\n"]))),_=function(n){var e=n.data,t=(0,p.TH)();return(0,y.jsx)(j,{children:e.map((function(n){return(0,y.jsx)(l,{to:"/movies/".concat(n.id),state:{from:t},children:(0,y.jsx)(k,{itemData:n})},n.id)}))})}},5169:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(9439),a=t(2791),i=t(9036),c=t(6611),u=t(2601),o=t(184),s=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1];return(0,a.useEffect)((function(){c.Zn().then((function(n){u.Loading.circle({svgColor:"#ff6b01"}),s(n)})).finally((function(){u.Loading.remove()}))}),[]),(0,o.jsx)(i.Z,{data:t})}},6611:function(n,e,t){t.d(e,{Hx:function(){return l},Li:function(){return p},Zn:function(){return o},lu:function(){return m},xc:function(){return g}});var r=t(5861),a=t(7757),i=t.n(a),c=t(3263),u="41fd8802ca4c37bec04d22336b2830f1";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/popular?api_key=".concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=169.26d82832.chunk.js.map