(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(34),c=a.n(n),i=(a(42),a(16)),o=a(4),u=a.n(o),l=a(14),p=a(6),v=a(7),j=a(9),h=a(8),d=a(17),b=(a(44),a(0)),m=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={newMovieName:""},e.handleOnChange=function(t){var a=t.target.value;e.setState({newMovieName:a})},e.handleKeyPress=function(t){(t.key="Enter")&&e.props.setMovies(e.state.newMovieName)},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:"logo.svg",alt:""})}),Object(b.jsx)("div",{className:"search-btn",children:Object(b.jsx)("input",{className:"search-movies",type:"text",placeholder:"Search Your Movies !!",value:this.state.newMovieName,onChange:this.handleOnChange,onKeyPress:this.handleKeyPress})}),Object(b.jsxs)("div",{className:"header-links",children:[Object(b.jsx)("div",{className:"header-link",children:Object(b.jsx)(d.b,{to:"/",children:"Home"})}),Object(b.jsx)("div",{className:"header-link",children:Object(b.jsx)(d.b,{to:"/fav",children:"Favourites"})})]})]})}}]),a}(s.Component),O="https://api.themoviedb.org/3",f="8ed127c2c49019165f16ef18b5bb5d86",g="https://image.tmdb.org/t/p/w500",x=(a(51),a(15)),y=a.n(x),k=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={detailedMovieObj:{}},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(O,"/movie/").concat(this.props.movie.id,"?api_key=").concat(f));case 2:t=e.sent,a=t.data,s=g+a.poster_path,this.setState({detailedMovieObj:Object(i.a)(Object(i.a)({},a),{},{poster_path:s})});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.movie,t=e.poster_path,a=e.title,s=e.vote_average,r=g+t;return Object(b.jsxs)("div",{className:"movie-item",children:[Object(b.jsx)("div",{className:"movie-poster",children:Object(b.jsx)(d.b,{to:{pathname:"/moviepage",state:this.state.detailedMovieObj},children:Object(b.jsx)("img",{src:r,alt:""})})}),Object(b.jsxs)("div",{className:"movie-info",children:[Object(b.jsx)("div",{className:"movie-title",children:a}),Object(b.jsxs)("div",{className:"movie-rating",children:[s," IMDB"]})]})]})}}]),a}(s.Component),N=(a(69),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"movies",children:this.props.movies.map((function(e){return Object(b.jsx)(k,{movie:e},e.id)}))})}}]),a}(s.Component)),w=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"pagination justify-content-center",children:[1==this.props.currPage?Object(b.jsx)("li",{className:"page-item disabled",children:Object(b.jsx)("a",{className:"page-link","aria-disabled":"true",children:"Previous"})}):Object(b.jsx)("li",{className:"page-item",onClick:this.props.previousPage,children:Object(b.jsx)("a",{className:"page-link",children:"Previous"})}),this.props.pages.map((function(t){return t==e.props.currPage?Object(b.jsx)("li",{className:"page-item active",children:Object(b.jsx)("a",{className:"page-link",href:"#",children:t})}):Object(b.jsx)("li",{className:"page-item",onClick:function(){e.props.setPage(t)},children:Object(b.jsx)("a",{className:"page-link",href:"#",children:t})})})),this.props.currPage==this.props.pages.length?Object(b.jsx)("li",{className:"page-item disabled",children:Object(b.jsx)("a",{className:"page-link","aria-disabled":"true",children:"Next"})}):Object(b.jsx)("li",{className:"page-item",onClick:this.props.nextPage,children:Object(b.jsx)("a",{className:"page-link",children:"Next"})})]})})}}]),a}(s.Component),P=a(2),M=(a(70),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(b.jsx)(N,{movies:this.props.favMovie})}}]),a}(s.Component)),_=(a(71),a(23)),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={videoObj:{}},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("".concat(O,"/movie/").concat(this.props.location.state.id,"/videos?api_key=").concat(f,"&language=en-US"));case 2:t=e.sent,a=t.data.results.filter((function(e){return"Trailer"==e.type&&"YouTube"==e.site})),this.setState({videoObj:a[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.location.state,a=t.title,s=t.tagline,r=t.vote_average,n=t.poster_path,c=t.overview;return Object(b.jsxs)("div",{className:"movie-page",children:[Object(b.jsx)("div",{className:"movie-page-poster",children:Object(b.jsx)("img",{src:n,alt:""})}),Object(b.jsxs)("div",{className:"movie-page-details",children:[Object(b.jsxs)("div",{className:"movie-title-info",children:[Object(b.jsxs)("h1",{children:[a," ",Object(b.jsx)("br",{})," IMDB : ",r]}),Object(b.jsx)("button",{type:"button",class:"btn btn-warning",onClick:function(){e.props.updateFav(e.props.location.state)},children:"Add To Fav"}),Object(b.jsxs)("span",{children:["  ",s]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:c})]}),Object(b.jsx)("div",{className:"movie-trailer",children:this.state.videoObj?Object(b.jsx)(_.a,{videoId:this.state.videoObj.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):Object(b.jsx)(_.a,{})})]})]})}}]),a}(s.Component),D=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={moviesData:[],currentMovie:"avengers",pages:[],fav:[],currPage:1},e.setMovies=function(){var t=Object(l.a)(u.a.mark((function t(a){var s,r,n,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(O+"/search/movie",{params:{api_key:f,page:1,query:a}});case 2:for(s=t.sent,r=s.data.results.slice(0,10),n=s.data.total_pages,c=[],i=1;i<=n;i++)c.push(i);e.setState({moviesData:r,currentMovie:a,pages:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.nextPage=Object(l.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(O+"/search/movie",{params:{api_key:f,page:e.state.currPage+1,query:e.state.currentMovie}});case 2:a=t.sent,console.log(a),s=a.data.results.slice(0,10),e.setState({moviesData:s,currPage:e.state.currPage+1});case 6:case"end":return t.stop()}}),t)}))),e.previousPage=Object(l.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(O+"/search/movie",{params:{api_key:f,page:e.state.currPage-1,query:e.state.currentMovie}});case 2:a=t.sent,console.log(a),s=a.data.results.slice(0,10),e.setState({moviesData:s,currPage:e.state.currPage-1});case 6:case"end":return t.stop()}}),t)}))),e.setPage=function(){var t=Object(l.a)(u.a.mark((function t(a){var s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(O+"/search/movie",{params:{api_key:f,page:a,query:e.state.currentMovie}});case 2:s=t.sent,console.log(s),r=s.data.results.slice(0,10),e.setState({moviesData:r,currPage:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateFav=function(){var t=Object(l.a)(u.a.mark((function t(a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.state.fav,0==s.filter((function(e){return e==a})).length&&(s.push(a),e.setState({fav:s}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,s,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(O+"/search/movie",{params:{api_key:f,page:1,query:this.state.currentMovie}});case 2:for(t=e.sent,a=t.data.results,s=t.data.total_pages,r=[],n=0;n<=s;n++)r.push(n);this.setState({moviesData:a,pages:r});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{setMovies:this.setMovies}),Object(b.jsxs)("switch",{children:[Object(b.jsx)(P.a,{path:"/",exact:!0,children:this.state.moviesData.length?Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)(N,{movies:this.state.moviesData}),Object(b.jsx)(w,{pages:this.state.pages,currPage:this.state.currPage,nextPage:this.nextPage,previousPage:this.previousPage,setPage:this.setPage})]}):Object(b.jsx)("h1",{children:"Oops No Movies Found !"})}),Object(b.jsx)(P.a,{path:"/fav",render:function(t){return Object(b.jsx)(M,Object(i.a)(Object(i.a)({},t),{},{favMovie:e.state.fav}))}}),Object(b.jsx)(P.a,{path:"/moviepage",render:function(t){return Object(b.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{updateFav:e.updateFav,favMovie:e.state.fav}))},exact:!0})]})]})})}}]),a}(s.Component);c.a.render(Object(b.jsx)(D,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.3028a3cb.chunk.js.map