import{a as A}from"./chunk-OVC3DMTA.js";import{b as T,d as W,h as $,m as z,o as j,p as B}from"./chunk-LVWXCXKS.js";import{b as U}from"./chunk-C2EJXMHL.js";import{Bb as V,Ga as h,Gb as D,Ib as k,Ja as i,Ka as P,Ua as M,Wa as r,Ya as _,_a as f,ab as O,bb as x,cb as n,db as o,eb as b,fc as E,ga as w,ib as v,jb as g,kb as y,oc as F,pa as C,qa as u,tb as p,ub as m,wc as d,xb as S,yb as N,zb as I}from"./chunk-FTKO67MO.js";var R=(a,e)=>e._id;function q(a,e){if(a&1){let t=v();n(0,"svg-icon-sprite",7),g("click",function(){C(t);let l=y();return u(l.clearInput())}),o()}a&2&&(_("imgClear"),r("src","images/sprite.svg#icon-cross-small-converted")("width","18px"))}function G(a,e){if(a&1&&(n(0,"li",9),b(1,"img",11),n(2,"h3",12),p(3),o(),n(4,"p",13),p(5),o(),n(6,"div",14)(7,"p",15),p(8),D(9,"date"),o(),n(10,"a",16),p(11,"Read more"),o()()()),a&2){let t=e.$implicit;i(),r("src",t.imgUrl,h),i(2),m(t.title),i(2),m(t.text),i(3),m(k(9,5,t.date,"dd/MM/yyyy")),i(2),r("href",t.url,h)}}var L=class a{constructor(e){this.store=e}newsData$;news=[];searchValue="";pages={page:1,totalPages:1};ngOnInit(){this.newsData$=this.store.select(U),this.newsData$.subscribe(e=>{console.log(e),e.results.length||this.store.dispatch(d({page:this.pages.page,search:this.searchValue})),this.news=e.results,this.pages.page=e.page,this.pages.totalPages=e.totalPages})}handleInput(){this.store.dispatch(d({page:this.pages.page,search:this.searchValue})),console.log({page:this.pages.page,search:this.searchValue})}clearInput(){this.searchValue=""}handlePage(e){this.pages.page=e,this.store.dispatch(d({page:this.pages.page,search:this.searchValue}))}static \u0275fac=function(t){return new(t||a)(P(F))};static \u0275cmp=w({type:a,selectors:[["app-news-page"]],standalone:!0,features:[V],decls:13,vars:7,consts:[[1,"news"],[1,"container","wrapper"],[1,"titleWrapper"],[1,"title"],[1,"serchWrapper"],["type","text","placeholder","Search",1,"search",3,"ngModelChange","ngModel"],[3,"src","width","class"],[3,"click","src","width"],[1,"list"],[1,"item"],[3,"newPage","data$"],["alt","news cover",1,"img",3,"src"],[1,"label"],[1,"text"],[1,"itemBottom"],[1,"date"],["target","_blank",1,"link",3,"href"]],template:function(t,s){t&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4,"News"),o(),n(5,"div",4)(6,"input",5),I("ngModelChange",function(c){return N(s.searchValue,c)||(s.searchValue=c),c}),o(),M(7,q,1,4,"svg-icon-sprite",6),n(8,"svg-icon-sprite",7),g("click",function(){return s.handleInput()}),o()()(),n(9,"ul",8),O(10,G,12,8,"li",9,R),o(),n(12,"app-pagination",10),g("newPage",function(c){return s.handlePage(c)}),o()()()),t&2&&(i(6),S("ngModel",s.searchValue),i(),f(s.searchValue!==""?7:-1),i(),_("imgSearch"),r("src","images/sprite.svg#icon-search-conv")("width","18px"),i(2),x(s.news),i(2),r("data$",s.newsData$))},dependencies:[B,j,z,T,W,$,E,A],styles:[".news[_ngcontent-%COMP%]{margin-top:80px}.news[_ngcontent-%COMP%]   .container.wrapper[_ngcontent-%COMP%]{padding-left:31px;padding-right:31px}.news[_ngcontent-%COMP%]   .titleWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:54px;line-height:1;font-weight:700;letter-spacing:-.03em;margin-bottom:60px}.news[_ngcontent-%COMP%]   .serchWrapper[_ngcontent-%COMP%]{position:relative;width:230px;height:48px}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:30px;border:1px solid rgba(38,38,38,.15);padding:14px;font-size:16px;line-height:1.25;font-weight:500;letter-spacing:-.03em;outline:none}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::placeholder{color:#26262680}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:focus{border-color:#f6b83d}.news[_ngcontent-%COMP%]   .imgSearch[_ngcontent-%COMP%]{position:absolute;top:15px;right:14px;cursor:pointer}.news[_ngcontent-%COMP%]   .imgClear[_ngcontent-%COMP%]{position:absolute;top:15px;right:34px;cursor:pointer}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:35px;row-gap:40px;justify-content:center;margin-bottom:60px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:361px;height:476px;padding-bottom:28px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:226px;width:100%;border-radius:15px;margin-bottom:28px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.03em;margin-bottom:14px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{letter-spacing:-.02em}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .itemBottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:auto}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{letter-spacing:-.02em;color:#26262680}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#f6b83d;transition:color .1s linear}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:#f9b020}"]})};export{L as NewsPageComponent};
