import{Cc as de,E as re,Ea as V,Fc as ue,Ga as le,H as ne,Oa as he,Q as J,Rc as fe,Z as se,a as U,b as ee,ba as ie,d as S,da as w,g as C,ga as T,ia as g,ja as m,q as te,r as X,ra as oe,ta as ae,ua as ce,v as x}from"./chunk-7JSXSHIC.js";var k=class{},B=class{},b=class r{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let s=t.slice(0,n),o=s.toLowerCase(),i=t.slice(n+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.setHeaderEntries(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new r;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let s=(e.op==="a"?this.headers.get(t):void 0)||[];s.push(...n),this.headers.set(t,s);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let i=this.headers.get(t);if(!i)return;i=i.filter(h=>o.indexOf(h)===-1),i.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}break}}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=e.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var W=class{encodeKey(e){return pe(e)}encodeValue(e){return pe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Me(r,e){let t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,h]=o==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,o)),e.decodeValue(s.slice(o+1))],a=t.get(i)||[];a.push(h),t.set(i,a)}),t}var De=/%(\d[a-f0-9])/gi,xe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function pe(r){return encodeURIComponent(r).replace(De,(e,t)=>xe[t]??e)}function _(r){return`${r}`}var P=class r{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new W,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Me(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let n=e.fromObject[t],s=Array.isArray(n)?n.map(_):[_(n)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(n=>{let s=e[n];Array.isArray(s)?s.forEach(o=>{t.push({param:n,value:o,op:"a"})}):t.push({param:n,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new r({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(_(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],s=n.indexOf(_(e.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var q=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Fe(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ye(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function me(r){return typeof Blob<"u"&&r instanceof Blob}function ge(r){return typeof FormData<"u"&&r instanceof FormData}function ke(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var F=class r{constructor(e,t,n,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Fe(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new b,this.context??=new q,!this.params)this.params=new P,this.urlWithParams=t;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=t;else{let h=t.indexOf("?"),a=h===-1?"?":h<t.length-1?"&":"";this.urlWithParams=t+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ye(this.body)||me(this.body)||ge(this.body)||ke(this.body)?this.body:this.body instanceof P?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ge(this.body)?null:me(this.body)?this.body.type||null:ye(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof P?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,n=e.url||this.url,s=e.responseType||this.responseType,o=e.transferCache??this.transferCache,i=e.body!==void 0?e.body:this.body,h=e.withCredentials??this.withCredentials,a=e.reportProgress??this.reportProgress,f=e.headers||this.headers,p=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(f=Object.keys(e.setHeaders).reduce((N,d)=>N.set(d,e.setHeaders[d]),f)),e.setParams&&(p=Object.keys(e.setParams).reduce((N,d)=>N.set(d,e.setParams[d]),p)),new r(t,n,i,{params:p,headers:f,context:y,reportProgress:a,responseType:s,withCredentials:h,transferCache:o})}},R=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(R||{}),L=class{constructor(e,t=200,n="OK"){this.headers=e.headers||new b,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},z=class r extends L{constructor(e={}){super(e),this.type=R.ResponseHeader}clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},j=class r extends L{constructor(e={}){super(e),this.type=R.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},E=class extends L{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Ee=200,Le=204;function G(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Z=(()=>{class r{constructor(t){this.handler=t}request(t,n,s={}){let o;if(t instanceof F)o=t;else{let a;s.headers instanceof b?a=s.headers:a=new b(s.headers);let f;s.params&&(s.params instanceof P?f=s.params:f=new P({fromObject:s.params})),o=new F(t,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=X(o).pipe(ne(a=>this.handler.handle(a)));if(t instanceof F||s.observe==="events")return i;let h=i.pipe(re(a=>a instanceof j));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe(x(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe(x(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return h.pipe(x(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new P().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,s={}){return this.request("PATCH",t,G(s,n))}post(t,n,s={}){return this.request("POST",t,G(s,n))}put(t,n,s={}){return this.request("PUT",t,G(s,n))}static{this.\u0275fac=function(n){return new(n||r)(g(k))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})(),je=/^\)\]\}',?\n/,Ue="X-Request-URL";function Te(r){if(r.url)return r.url;let e=Ue.toLocaleLowerCase();return r.headers.get(e)}var _e=(()=>{class r{constructor(){this.fetchImpl=m(K,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=m(le)}handle(t){return new C(n=>{let s=new AbortController;return this.doRequest(t,s.signal,n).then(Y,o=>n.error(new E({error:o}))),()=>s.abort()})}doRequest(t,n,s){return S(this,null,function*(){let o=this.createRequestInit(t),i;try{let d=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,U({signal:n},o)));Be(d),s.next({type:R.Sent}),i=yield d}catch(d){s.error(new E({error:d,status:d.status??0,statusText:d.statusText,url:t.urlWithParams,headers:d.headers}));return}let h=new b(i.headers),a=i.statusText,f=Te(i)??t.urlWithParams,p=i.status,y=null;if(t.reportProgress&&s.next(new z({headers:h,status:p,statusText:a,url:f})),i.body){let d=i.headers.get("content-length"),I=[],c=i.body.getReader(),l=0,v,A,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>S(this,null,function*(){for(;;){let{done:O,value:D}=yield c.read();if(O)break;if(I.push(D),l+=D.length,t.reportProgress){A=t.responseType==="text"?(A??"")+(v??=new TextDecoder).decode(D,{stream:!0}):void 0;let H=()=>s.next({type:R.DownloadProgress,total:d?+d:void 0,loaded:l,partialText:A});u?u.run(H):H()}}}));let M=this.concatChunks(I,l);try{let O=i.headers.get("Content-Type")??"";y=this.parseBody(t,M,O)}catch(O){s.error(new E({error:O,headers:new b(i.headers),status:i.status,statusText:i.statusText,url:Te(i)??t.urlWithParams}));return}}p===0&&(p=y?Ee:0),p>=200&&p<300?(s.next(new j({body:y,headers:h,status:p,statusText:a,url:f})),s.complete()):s.error(new E({error:y,headers:h,status:p,statusText:a,url:f}))})}parseBody(t,n,s){switch(t.responseType){case"json":let o=new TextDecoder().decode(n).replace(je,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((o,i)=>n[o]=i.join(",")),t.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let o=t.detectContentTypeHeader();o!==null&&(n["Content-Type"]=o)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:s}}concatChunks(t,n){let s=new Uint8Array(n),o=0;for(let i of t)s.set(i,o),o+=i.length;return s}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})(),K=class{};function Y(){}function Be(r){r.then(Y,Y)}function Pe(r,e){return e(r)}function ze(r,e){return(t,n)=>e.intercept(t,{handle:s=>r(s,n)})}function $e(r,e,t){return(n,s)=>ce(t,()=>e(n,o=>r(o,s)))}var Se=new T(""),Q=new T(""),Ce=new T(""),Re=new T("",{providedIn:"root",factory:()=>!0});function Xe(){let r=null;return(e,t)=>{r===null&&(r=(m(Se,{optional:!0})??[]).reduceRight(ze,Pe));let n=m(V);if(m(Re)){let o=n.add();return r(e,t).pipe(J(()=>n.remove(o)))}else return r(e,t)}}var be=(()=>{class r extends k{constructor(t,n){super(),this.backend=t,this.injector=n,this.chain=null,this.pendingTasks=m(V),this.contributeToStability=m(Re)}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Q),...this.injector.get(Ce,[])]));this.chain=n.reduceRight((s,o)=>$e(s,o,this.injector),Pe)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(J(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}static{this.\u0275fac=function(n){return new(n||r)(g(B),g(ae))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})();var Je=/^\)\]\}',?\n/;function Ve(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var ve=(()=>{class r{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new ie(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?te(n.\u0275loadImpl()):X(null)).pipe(se(()=>new C(o=>{let i=n.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((c,l)=>i.setRequestHeader(c,l.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&i.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();i.responseType=c!=="json"?c:"text"}let h=t.serializeBody(),a=null,f=()=>{if(a!==null)return a;let c=i.statusText||"OK",l=new b(i.getAllResponseHeaders()),v=Ve(i)||t.url;return a=new z({headers:l,status:i.status,statusText:c,url:v}),a},p=()=>{let{headers:c,status:l,statusText:v,url:A}=f(),u=null;l!==Le&&(u=typeof i.response>"u"?i.responseText:i.response),l===0&&(l=u?Ee:0);let M=l>=200&&l<300;if(t.responseType==="json"&&typeof u=="string"){let O=u;u=u.replace(Je,"");try{u=u!==""?JSON.parse(u):null}catch(D){u=O,M&&(M=!1,u={error:D,text:u})}}M?(o.next(new j({body:u,headers:c,status:l,statusText:v,url:A||void 0})),o.complete()):o.error(new E({error:u,headers:c,status:l,statusText:v,url:A||void 0}))},y=c=>{let{url:l}=f(),v=new E({error:c,status:i.status||0,statusText:i.statusText||"Unknown Error",url:l||void 0});o.error(v)},N=!1,d=c=>{N||(o.next(f()),N=!0);let l={type:R.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),t.responseType==="text"&&i.responseText&&(l.partialText=i.responseText),o.next(l)},I=c=>{let l={type:R.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),o.next(l)};return i.addEventListener("load",p),i.addEventListener("error",y),i.addEventListener("timeout",y),i.addEventListener("abort",y),t.reportProgress&&(i.addEventListener("progress",d),h!==null&&i.upload&&i.upload.addEventListener("progress",I)),i.send(h),o.next({type:R.Sent}),()=>{i.removeEventListener("error",y),i.removeEventListener("abort",y),i.removeEventListener("load",p),i.removeEventListener("timeout",y),t.reportProgress&&(i.removeEventListener("progress",d),h!==null&&i.upload&&i.upload.removeEventListener("progress",I)),i.readyState!==i.DONE&&i.abort()}})))}static{this.\u0275fac=function(n){return new(n||r)(g(fe))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})(),Ne=new T(""),Ge="XSRF-TOKEN",We=new T("",{providedIn:"root",factory:()=>Ge}),qe="X-XSRF-TOKEN",Ke=new T("",{providedIn:"root",factory:()=>qe}),$=class{},Ye=(()=>{class r{constructor(t,n,s){this.doc=t,this.platform=n,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ue(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(n){return new(n||r)(g(de),g(he),g(We))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})();function Ze(r,e){let t=r.url.toLowerCase();if(!m(Ne)||r.method==="GET"||r.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(r);let n=m($).getToken(),s=m(Ke);return n!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,n)})),e(r)}var Oe=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(Oe||{});function Qe(r,e){return{\u0275kind:r,\u0275providers:e}}function Et(...r){let e=[Z,ve,be,{provide:k,useExisting:be},{provide:B,useFactory:()=>m(_e,{optional:!0})??m(ve)},{provide:Q,useValue:Ze,multi:!0},{provide:Ne,useValue:!0},{provide:$,useClass:Ye}];for(let t of r)e.push(...t.\u0275providers);return oe(e)}var we=new T("");function Pt(){return Qe(Oe.LegacyInterceptors,[{provide:we,useFactory:Xe},{provide:Q,useExisting:we,multi:!0}])}var Ae=class r{constructor(e){this.http=e}api="https://petlove.b.goit.study/api";getFriends(){return this.http.get(`${this.api}/friends/`)}getNews(e,t){return this.http.get(`${this.api}/news`,{params:{page:e,keyword:t}})}getPets(e,t){let n=ee(U({},t),{page:e});return this.http.get(`${this.api}/notices`,{params:n})}getPet(e){return this.http.get(`${this.api}/notices/${e}`)}getCategory(){return this.http.get(`${this.api}/notices/categories`)}getGender(){return this.http.get(`${this.api}/notices/sex`)}getSpecies(){return this.http.get(`${this.api}/notices/species`)}getLocations(){return this.http.get(`${this.api}/cities/locations`)}cloudName="dzs583axq";uploadPreset="image_preset";setAvatar(e){console.log(e);let t=new FormData;t.append("file",e),t.append("upload_preset",this.uploadPreset);let n=`https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;return this.http.post(n,t)}addToFav(e){return this.http.post(`${this.api}/notices/favorites/add/${e}`,e)}removeFromFav(e){return this.http.delete(`${this.api}/notices/favorites/remove/${e}`)}addNewPet(e){return console.log("service",e),this.http.post(`${this.api}/users/current/pets/add`,e)}removePet(e){return this.http.delete(`${this.api}/users/current/pets/remove/${e}`)}static \u0275fac=function(t){return new(t||r)(g(Z))};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})};export{Z as a,Se as b,Et as c,Pt as d,Ae as e};
