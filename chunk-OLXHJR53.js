import{a as R}from"./chunk-7MALALZR.js";import{b as W,d as j,h as z,m as B,o as F,p as U}from"./chunk-7MMK6W5F.js";import{E as L,f as A,l as d}from"./chunk-NGTGSHR3.js";import{$b as I,Ab as x,Cb as b,Db as v,Eb as n,Fb as o,Gb as y,Kb as S,Mb as g,Mc as T,Nb as N,Wb as p,Xb as m,_ as u,_b as D,ab as h,ac as V,cc as k,db as i,eb as f,hc as E,j as w,jc as $,na as C,sb as O,ub as r,xa as P,ya as M,yb as _}from"./chunk-7JSXSHIC.js";var G=(a,e)=>e._id;function H(a,e){if(a&1){let t=S();n(0,"svg-icon-sprite",7),g("click",function(){P(t);let l=N();return M(l.clearInput())}),o()}a&2&&(_("imgClear"),r("src","images/sprite.svg#icon-cross-small-converted")("width","18px"))}function J(a,e){if(a&1&&(n(0,"li",9),y(1,"img",11),n(2,"h3",12),p(3),o(),n(4,"p",13),p(5),o(),n(6,"div",14)(7,"p",15),p(8),E(9,"date"),o(),n(10,"a",16),p(11,"Read more"),o()()()),a&2){let t=e.$implicit;i(),r("src",t.imgUrl,h),i(2),m(t.title),i(2),m(t.text),i(3),m($(9,5,t.date,"dd/MM/yyyy")),i(2),r("href",t.url,h)}}var q=class a{constructor(e){this.store=e}onDestroy$=new w;newsData$;news=[];searchValue="";pages={page:1,totalPages:1};ngOnInit(){this.newsData$=this.store.select(L),this.newsData$.pipe(u(this.onDestroy$)).subscribe(e=>{e.results.length||this.store.dispatch(d({page:this.pages.page,search:this.searchValue})),this.news=e.results,this.pages.page=e.page,this.pages.totalPages=e.totalPages})}handleInput(){this.store.dispatch(d({page:this.pages.page,search:this.searchValue})),console.log({page:this.pages.page,search:this.searchValue})}clearInput(){this.searchValue=""}handlePage(e){this.pages.page=e,this.store.dispatch(d({page:this.pages.page,search:this.searchValue}))}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}static \u0275fac=function(t){return new(t||a)(f(A))};static \u0275cmp=C({type:a,selectors:[["app-news-page"]],standalone:!0,features:[k],decls:13,vars:7,consts:[[1,"news"],[1,"container","wrapper"],[1,"titleWrapper"],[1,"title"],[1,"serchWrapper"],["type","text","placeholder","Search",1,"search",3,"ngModelChange","ngModel"],[3,"src","width","class"],[3,"click","src","width"],[1,"list"],[1,"item"],[3,"newPage","data$"],["alt","news cover",1,"img",3,"src"],[1,"label"],[1,"text"],[1,"itemBottom"],[1,"date"],["target","_blank",1,"link",3,"href"]],template:function(t,s){t&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4,"News"),o(),n(5,"div",4)(6,"input",5),V("ngModelChange",function(c){return I(s.searchValue,c)||(s.searchValue=c),c}),o(),O(7,H,1,4,"svg-icon-sprite",6),n(8,"svg-icon-sprite",7),g("click",function(){return s.handleInput()}),o()()(),n(9,"ul",8),b(10,J,12,8,"li",9,G),o(),n(12,"app-pagination",10),g("newPage",function(c){return s.handlePage(c)}),o()()()),t&2&&(i(6),D("ngModel",s.searchValue),i(),x(s.searchValue!==""?7:-1),i(),_("imgSearch"),r("src","images/sprite.svg#icon-search-conv")("width","18px"),i(2),v(s.news),i(2),r("data$",s.newsData$))},dependencies:[U,F,B,W,j,z,T,R],styles:[".news[_ngcontent-%COMP%]{margin-top:80px}.news[_ngcontent-%COMP%]   .container.wrapper[_ngcontent-%COMP%]{padding-left:31px;padding-right:31px}.news[_ngcontent-%COMP%]   .titleWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:54px;line-height:1;font-weight:700;letter-spacing:-.03em;margin-bottom:60px}.news[_ngcontent-%COMP%]   .serchWrapper[_ngcontent-%COMP%]{position:relative;width:230px;height:48px}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:30px;border:1px solid rgba(38,38,38,.15);padding:14px;font-size:16px;line-height:1.25;font-weight:500;letter-spacing:-.03em;outline:none}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::placeholder{color:#26262680}.news[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:focus{border-color:#f6b83d}.news[_ngcontent-%COMP%]   .imgSearch[_ngcontent-%COMP%]{position:absolute;top:15px;right:14px;cursor:pointer}.news[_ngcontent-%COMP%]   .imgClear[_ngcontent-%COMP%]{position:absolute;top:15px;right:34px;cursor:pointer}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:35px;row-gap:40px;justify-content:center;margin-bottom:60px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:361px;height:476px;padding-bottom:28px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:226px;width:100%;border-radius:15px;margin-bottom:28px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.03em;margin-bottom:14px}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{letter-spacing:-.02em}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .itemBottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:auto}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{letter-spacing:-.02em;color:#26262680}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#f6b83d;transition:color .1s linear}.news[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:#f9b020}"]})};export{q as NewsPageComponent};
