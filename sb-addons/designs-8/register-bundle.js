try{
var Xo=Object.defineProperty;var w=(r,e)=>()=>(r&&(e=r(r=0)),e);var Yt=(r,e)=>{for(var t in e)Xo(r,t,{get:e[t],enumerable:!0})};var d=w(()=>{});var g,p=w(()=>{g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var h=w(()=>{});var Gi,Xi,qi,Zt,Ki,Ji,Qi,es,ts,rs,os,ns,is,ss,Gt,as,ls,cs,us,ds,ps,hs,fs,Te,ms,Oe,gs,vs,re,ys,bs,xs,_s,I,ws,$s,Ss,Xt,Es,As,Cs,ks,Ps,Ms,Ts,Os,Ns,Rs,Bs,qt,js,Ls,Is,Hs,Fs,Us,zs,Ds,Vs,Ys,Ws,Zs,Gs,Xs,qs,Ks,Js,z=w(()=>{d();p();h();Gi=__STORYBOOKCOMPONENTS__,{A:Xi,ActionBar:qi,AddonPanel:Zt,Badge:Ki,Bar:Ji,Blockquote:Qi,Button:es,ClipboardCode:ts,Code:rs,DL:os,Div:ns,DocumentWrapper:is,ErrorFormatter:ss,FlexBar:Gt,Form:as,H1:ls,H2:cs,H3:us,H4:ds,H5:ps,H6:hs,HR:fs,IconButton:Te,IconButtonSkeleton:ms,Icons:Oe,Img:gs,LI:vs,Link:re,ListItem:ys,Loader:bs,OL:xs,P:_s,Placeholder:I,Pre:ws,ResetWrapper:$s,ScrollArea:Ss,Separator:Xt,Spaced:Es,Span:As,StorybookIcon:Cs,StorybookLogo:ks,Symbols:Ps,SyntaxHighlighter:Ms,TT:Ts,TabBar:Os,TabButton:Ns,TabWrapper:Rs,Table:Bs,Tabs:qt,TabsState:js,TooltipLinkList:Ls,TooltipMessage:Is,TooltipNote:Hs,UL:Fs,WithTooltip:Us,WithTooltipPure:zs,Zoom:Ds,codeCommon:Vs,components:Ys,createCopyToClipboardFunction:Ws,getStoryHref:Zs,icons:Gs,interleaveSeparators:Xs,nameSpaceClassNames:qs,resetComponents:Ks,withReset:Js}=__STORYBOOKCOMPONENTS__});var oa,na,ia,sa,aa,la,ca,ua,da,pa,ha,fa,O,ma,ga,va,ya,f,ba,xa,_a,wa,$a,Sa,Ea,L=w(()=>{d();p();h();oa=__STORYBOOKTHEMING__,{CacheProvider:na,ClassNames:ia,Global:sa,ThemeProvider:aa,background:la,color:ca,convert:ua,create:da,createCache:pa,createGlobal:ha,createReset:fa,css:O,darken:ma,ensure:ga,ignoreSsrWarning:va,isPropValid:ya,jsx:f,keyframes:ba,lighten:xa,styled:_a,themes:wa,typography:$a,useTheme:Sa,withTheme:Ea}=__STORYBOOKTHEMING__});var Re={};Yt(Re,{Children:()=>Jo,Component:()=>rt,Fragment:()=>E,Profiler:()=>Qo,PureComponent:()=>en,StrictMode:()=>tn,Suspense:()=>ot,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>rn,cloneElement:()=>on,createContext:()=>nn,createElement:()=>sn,createFactory:()=>an,createRef:()=>ln,default:()=>Ko,forwardRef:()=>cn,isValidElement:()=>un,lazy:()=>nt,memo:()=>dn,useCallback:()=>H,useContext:()=>pn,useDebugValue:()=>hn,useEffect:()=>N,useImperativeHandle:()=>fn,useLayoutEffect:()=>mn,useMemo:()=>Z,useReducer:()=>gn,useRef:()=>vn,useState:()=>M,version:()=>yn});var Ko,Jo,rt,E,Qo,en,tn,ot,rn,on,nn,sn,an,ln,cn,un,nt,dn,H,pn,hn,N,fn,mn,Z,gn,vn,M,yn,R=w(()=>{d();p();h();Ko=__REACT__,{Children:Jo,Component:rt,Fragment:E,Profiler:Qo,PureComponent:en,StrictMode:tn,Suspense:ot,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:rn,cloneElement:on,createContext:nn,createElement:sn,createFactory:an,createRef:ln,forwardRef:cn,isValidElement:un,lazy:nt,memo:dn,useCallback:H,useContext:pn,useDebugValue:hn,useEffect:N,useImperativeHandle:fn,useLayoutEffect:mn,useMemo:Z,useReducer:gn,useRef:vn,useState:M,version:yn}=__REACT__});var st,ce,xn,_n,wn,Kt,Jt,Qt,Be=w(()=>{d();p();h();R();L();z();st=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},ce=function(r){var e=r.config,t=r.defer,o=t===void 0?!1:t,n=M(o?void 0:e.url),i=n[0],s=n[1],c=M(!1),a=c[0],l=c[1];return N(function(){if(o){var u=requestAnimationFrame(function(){s(e.url)});return function(){return cancelAnimationFrame(u)}}},[o,e.url]),N(function(){l(!1)},[i]),f("div",{css:xn},!a&&f(I,{css:_n},"Loading..."),f("iframe",{css:wn,src:i,allowFullScreen:e.allowFullscreen,onLoad:function(){return l(!0)}}))},xn=O(Kt||(Kt=st([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`]))),_n=O(Jt||(Jt=st([`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`],[`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`]))),wn=O(Qt||(Qt=st([`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`],[`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`])))});var at,$n,er,lt=w(()=>{d();p();h();R();L();Be();at=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,$n=function(r){return at.test(r)},er=function(r){var e=r.config,t=Z(function(){var o=$n(e.url);if(!o)return console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e;var n=e.embedHost||location.hostname,i="https://www.figma.com/embed?embed_host=".concat(n,"&url=").concat(e.url);return{url:i,allowFullscreen:e.allowFullscreen}},[e.url,e.allowFullscreen,e.embedHost]);return f(ce,{defer:!0,config:t})}});var je,Le,dt,vr,ve,yr,B,pt,Ie,ht=w(()=>{d();p();h();je=window,Le=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),vr=new WeakMap,ve=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Le&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=vr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&vr.set(t,e))}return e}toString(){return this.cssText}},yr=r=>new ve(typeof r=="string"?r:r+"",void 0,dt),B=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new ve(t,r,dt)},pt=(r,e)=>{Le?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),n=je.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,r.appendChild(o)})},Ie=Le?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return yr(t)})(r):r});var ft,He,br,On,xr,gt,_r,mt,vt,G,Fe=w(()=>{d();p();h();ht();ht();He=window,br=He.trustedTypes,On=br?br.emptyScript:"",xr=He.reactiveElementPolyfillSupport,gt={toAttribute(r,e){switch(e){case Boolean:r=r?On:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},_r=(r,e)=>e!==r&&(e==e||r==r),mt={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:_r},vt="finalized",G=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let n=this._$Ep(o,t);n!==void 0&&(this._$Ev.set(n,o),e.push(n))}),e}static createProperty(e,t=mt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){let i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||mt}static finalize(){if(this.hasOwnProperty(vt))return!1;this[vt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of o)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let n of o)t.unshift(Ie(n))}else e!==void 0&&t.push(Ie(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=mt){var n;let i=this.constructor._$Ep(e,o);if(i!==void 0&&o.reflect===!0){let s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:gt).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var o;let n=this.constructor,i=n._$Ev.get(e);if(i!==void 0&&this._$El!==i){let s=n.getPropertyOptions(i),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:gt;this._$El=i,this[i]=c.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||_r)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};G[vt]=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},xr?.({ReactiveElement:G}),((ft=He.reactiveElementVersions)!==null&&ft!==void 0?ft:He.reactiveElementVersions=[]).push("1.6.2")});function Nr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return wr!==void 0?wr.createHTML(e):e}function pe(r,e,t=r,o){var n,i,s,c;if(e===X)return e;let a=o!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[o]:t._$Cl,l=xe(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,t,o)),o!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[o]=a:t._$Cl=a),a!==void 0&&(e=pe(r,a._$AS(r,e.values),a,o)),e}var yt,Ue,de,wr,xt,K,Pr,Nn,ie,be,xe,Mr,Rn,bt,ye,$r,Sr,oe,Er,Ar,Tr,Or,S,j,X,k,Cr,ne,Bn,_e,_t,we,he,wt,jn,$t,St,Et,kr,Rr,$e=w(()=>{d();p();h();Ue=window,de=Ue.trustedTypes,wr=de?de.createPolicy("lit-html",{createHTML:r=>r}):void 0,xt="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Pr="?"+K,Nn=`<${Pr}>`,ie=document,be=()=>ie.createComment(""),xe=r=>r===null||typeof r!="object"&&typeof r!="function",Mr=Array.isArray,Rn=r=>Mr(r)||typeof r?.[Symbol.iterator]=="function",bt=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$r=/-->/g,Sr=/>/g,oe=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,Ar=/"/g,Tr=/^(?:script|style|textarea|title)$/i,Or=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),S=Or(1),j=Or(2),X=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Cr=new WeakMap,ne=ie.createTreeWalker(ie,129,null,!1);Bn=(r,e)=>{let t=r.length-1,o=[],n,i=e===2?"<svg>":"",s=ye;for(let c=0;c<t;c++){let a=r[c],l,u,m=-1,x=0;for(;x<a.length&&(s.lastIndex=x,u=s.exec(a),u!==null);)x=s.lastIndex,s===ye?u[1]==="!--"?s=$r:u[1]!==void 0?s=Sr:u[2]!==void 0?(Tr.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=oe):u[3]!==void 0&&(s=oe):s===oe?u[0]===">"?(s=n??ye,m=-1):u[1]===void 0?m=-2:(m=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?oe:u[3]==='"'?Ar:Er):s===Ar||s===Er?s=oe:s===$r||s===Sr?s=ye:(s=oe,n=void 0);let _=s===oe&&r[c+1].startsWith("/>")?" ":"";i+=s===ye?a+Nn:m>=0?(o.push(l),a.slice(0,m)+xt+a.slice(m)+K+_):a+K+(m===-2?(o.push(void 0),c):_)}return[Nr(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),o]},_e=class r{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,s=0,c=e.length-1,a=this.parts,[l,u]=Bn(e,t);if(this.el=r.createElement(l,o),ne.currentNode=this.el.content,t===2){let m=this.el.content,x=m.firstChild;x.remove(),m.append(...x.childNodes)}for(;(n=ne.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let m=[];for(let x of n.getAttributeNames())if(x.endsWith(xt)||x.startsWith(K)){let _=u[s++];if(m.push(x),_!==void 0){let b=n.getAttribute(_.toLowerCase()+xt).split(K),$=/([.?@])?(.*)/.exec(_);a.push({type:1,index:i,name:$[2],strings:b,ctor:$[1]==="."?wt:$[1]==="?"?$t:$[1]==="@"?St:he})}else a.push({type:6,index:i})}for(let x of m)n.removeAttribute(x)}if(Tr.test(n.tagName)){let m=n.textContent.split(K),x=m.length-1;if(x>0){n.textContent=de?de.emptyScript:"";for(let _=0;_<x;_++)n.append(m[_],be()),ne.nextNode(),a.push({type:2,index:++i});n.append(m[x],be())}}}else if(n.nodeType===8)if(n.data===Pr)a.push({type:2,index:i});else{let m=-1;for(;(m=n.data.indexOf(K,m+1))!==-1;)a.push({type:7,index:i}),m+=K.length-1}i++}}static createElement(e,t){let o=ie.createElement("template");return o.innerHTML=e,o}};_t=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:n}=this._$AD,i=((t=e?.creationScope)!==null&&t!==void 0?t:ie).importNode(o,!0);ne.currentNode=i;let s=ne.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new we(s,s.nextSibling,this,e):l.type===1?u=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(u=new Et(s,this,e)),this._$AV.push(u),l=n[++a]}c!==l?.index&&(s=ne.nextNode(),c++)}return ne.currentNode=ie,i}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},we=class r{constructor(e,t,o,n){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=(i=n?.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),xe(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Rn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.$(ie.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=_e.createElement(Nr(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.v(o);else{let s=new _t(i,this),c=s.u(this.options);s.v(o),this.$(c),this._$AH=s}}_$AC(e){let t=Cr.get(e.strings);return t===void 0&&Cr.set(e.strings,t=new _e(e)),t}T(e){Mr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let i of e)n===t.length?t.push(o=new r(this.k(be()),this.k(be()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},he=class{constructor(e,t,o,n,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){let i=this.strings,s=!1;if(i===void 0)e=pe(this,e,t,0),s=!xe(e)||e!==this._$AH&&e!==X,s&&(this._$AH=e);else{let c=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=pe(this,c[o+a],t,a),l===X&&(l=this._$AH[a]),s||(s=!xe(l)||l!==this._$AH[a]),l===k?e=k:e!==k&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wt=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},jn=de?de.emptyScript:"",$t=class extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,jn):this.element.removeAttribute(this.name)}},St=class extends he{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=(o=pe(this,e,t,0))!==null&&o!==void 0?o:k)===X)return;let n=this._$AH,i=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==k&&(n===k||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Et=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},kr=Ue.litHtmlPolyfillSupport;kr?.(_e,we),((yt=Ue.litHtmlVersions)!==null&&yt!==void 0?yt:Ue.litHtmlVersions=[]).push("2.7.5");Rr=(r,e,t)=>{var o,n;let i=(o=t?.renderBefore)!==null&&o!==void 0?o:e,s=i._$litPart$;if(s===void 0){let c=(n=t?.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new we(e.insertBefore(be(),c),c,void 0,t??{})}return s._$AI(r),s}});var At,Ct,D,Br,jr=w(()=>{d();p();h();Fe();Fe();$e();$e();D=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return X}};D.finalized=!0,D._$litElement$=!0,(At=globalThis.litElementHydrateSupport)===null||At===void 0||At.call(globalThis,{LitElement:D});Br=globalThis.litElementPolyfillSupport;Br?.({LitElement:D});((Ct=globalThis.litElementVersions)!==null&&Ct!==void 0?Ct:globalThis.litElementVersions=[]).push("3.3.2")});var Lr=w(()=>{d();p();h();});var V=w(()=>{d();p();h();Fe();$e();jr();Lr()});var Ir=w(()=>{d();p();h();});function P(r){return(e,t)=>t!==void 0?In(r,e,t):Ln(r,e)}var Ln,In,kt=w(()=>{d();p();h();Ln=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},In=(r,e,t)=>{e.constructor.createProperty(t,r)}});var Hr=w(()=>{d();p();h();kt();});var se=w(()=>{d();p();h();});var Fr=w(()=>{d();p();h();se();});var Ur=w(()=>{d();p();h();se();});var zr=w(()=>{d();p();h();se();});var Dr=w(()=>{d();p();h();se();});var Pt,Su,Mt=w(()=>{d();p();h();se();Su=((Pt=window.HTMLSlotElement)===null||Pt===void 0?void 0:Pt.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var Vr=w(()=>{d();p();h();se();Mt();});var fe=w(()=>{d();p();h();Ir();kt();Hr();Fr();Ur();zr();Dr();Mt();Vr()});var q,Yr,ze=w(()=>{d();p();h();V();q=({title:r,children:e})=>S`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${r}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Yr=B`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var Wr,Zr,De,Gr=w(()=>{d();p();h();Wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zr=r=>(...e)=>({_$litDirective$:r,values:e}),De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var Xr,Hn,ae,qr=w(()=>{d();p();h();$e();Gr();Xr="important",Hn=" !"+Xr,ae=Zr(class extends De{constructor(r){var e;if(super(r),r.type!==Wr.ATTRIBUTE||r.name!=="style"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{let o=r[t];return o==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(r,[e]){let{style:t}=r.element;if(this.ut===void 0){this.ut=new Set;for(let o in e)this.ut.add(o);return this.render(e)}this.ut.forEach(o=>{e[o]==null&&(this.ut.delete(o),o.includes("-")?t.removeProperty(o):t[o]="")});for(let o in e){let n=e[o];if(n!=null){this.ut.add(o);let i=typeof n=="string"&&n.endsWith(Hn);o.includes("-")||i?t.setProperty(o,i?n.slice(0,-11):n,i?Xr:""):t[o]=n}}return X}})});var Ve=w(()=>{d();p();h();qr()});function Kr(r){return{top:r.y,right:r.x+r.width,bottom:r.y+r.height,left:r.x}}function Qr(r,e){let t=Kr(r),o=Kr(e),n=!(t.top>o.bottom||t.bottom<o.top),i=!(t.left>o.right||t.right<o.left);if(i&&n){let u={x:(Math.max(t.left,o.left)+Math.min(t.right,o.right))/2,y:(Math.max(t.top,o.top)+Math.min(t.bottom,o.bottom))/2};return[{points:[{x:t.left,y:u.y},{x:o.left,y:u.y}]},{points:[{x:t.right,y:u.y},{x:o.right,y:u.y}]},{points:[{y:t.top,x:u.x},{y:o.top,x:u.x}]},{points:[{y:t.bottom,x:u.x},{y:o.bottom,x:u.x}]}]}let s=t.left>o.right,c=t.top>o.bottom,a={x:r.x+r.width/2,y:r.y+r.height/2};return[i?null:{points:[{x:s?t.left:t.right,y:a.y},{x:s?o.right:o.left,y:a.y}],bisector:n?void 0:[{x:s?o.right:o.left,y:a.y},{x:s?o.right:o.left,y:c?o.bottom:o.top}]},n?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?o.bottom:o.top,x:a.x}],bisector:i?void 0:[{y:c?o.bottom:o.top,x:a.x},{y:c?o.bottom:o.top,x:s?o.right:o.left}]}].filter(u=>!!u)}function Ee(r){return Math.round(r*100)/100}function Ye(r,e){return[...Jr(r),...Jr(e)]}function Jr(r){return r?r instanceof Array?r:[r]:[]}var Ae=w(()=>{d();p();h()});var Fn,eo,to=w(()=>{d();p();h();fe();Fn=function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},eo=r=>{class e extends r{constructor(...o){super(...o),this.selectedNode=null}updated(o){super.updated(o),o.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return Fn([P({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function We(r){return r.touches.length===0||r.touches.length>2}function Un(r,e){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}var ro,oo=w(()=>{d();p();h();ro=r=>class extends r{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",o=>{We(o)||(o.preventDefault(),this.previousTouches=o.touches)}),this.addEventListener("touchend",o=>{We(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",o=>{We(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",o=>{if(We(o))return;let n=Array.from(this.previousTouches||[]),i=Array.from(o.touches);if(this.previousTouches=o.touches,!(i.length!==n.length||!i.every(s=>n.some(c=>c.identifier===s.identifier)))){if(i.length===1){this.onTouchPan({x:i[0].pageX-n[0].pageX,y:i[0].pageY-n[0].pageY});return}this.onTouchPinch(Un({x:i[0].pageX,y:i[0].pageY},{x:n[0].pageX,y:n[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var Ce,Y,no,io,so=w(()=>{d();p();h();fe();oo();Ce=function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},Y=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},no=function(r,e,t){if(!e.has(r))throw new TypeError("attempted to set private field on non-instance");return e.set(r,t),t},io=r=>{var e,t,o,n,i;class s extends ro(r){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(u,m)=>{this.panX+=u/this.scale/window.devicePixelRatio,this.panY+=m/this.scale/window.devicePixelRatio}),o.set(this,u=>{u.code==="Space"&&!Y(this,e)&&(no(this,e,!0),document.body.style.cursor="grab")}),n.set(this,u=>{u.code==="Space"&&Y(this,e)&&(no(this,e,!1),document.body.style.cursor="auto")}),i.set(this,()=>{document.addEventListener("keyup",Y(this,n)),document.addEventListener("keydown",Y(this,o))}),this.addEventListener("wheel",u=>{if(this.isMovable)if(u.preventDefault(),u.ctrlKey){let{deltaY:m}=u;u.deltaMode===1&&(m*=15);let x=this.scale;this.scale*=1-m/((1e3-this.zoomSpeed)*.5);let _=u.offsetX-this.offsetWidth/2,b=u.offsetY-this.offsetHeight/2;this.panX+=_/this.scale-_/x,this.panY+=b/this.scale-b/x}else{let m=this.panSpeed*.002;this.panX-=u.deltaX*m/this.scale,this.panY-=u.deltaY*m/this.scale}},{passive:!1});let l=1;this.addEventListener("gesturestart",u=>{u.preventDefault(),l=this.scale}),this.addEventListener("gesturechange",u=>{let m=u;m.preventDefault(),this.scale=l*m.scale}),this.addEventListener("pointermove",u=>{u.buttons&4&&(u.preventDefault(),Y(this,t).call(this,u.movementX,u.movementY))}),Y(this,i).call(this),this.onmousedown=()=>{Y(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:u,movementY:m})=>{Y(this,t).call(this,u,m)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",Y(this,n)),document.removeEventListener("keydown",Y(this,o)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,Ce([P({attribute:!1})],s.prototype,"panX",void 0),Ce([P({attribute:!1})],s.prototype,"panY",void 0),Ce([P({attribute:!1})],s.prototype,"scale",void 0),Ce([P({type:Number,attribute:"zoom-speed"})],s.prototype,"zoomSpeed",void 0),Ce([P({type:Number,attribute:"pan-speed"})],s.prototype,"panSpeed",void 0),s}});var zn,Dn,ao,lo,co,uo=w(()=>{d();p();h();V();Ve();Ae();zn=({guide:r,reverseScale:e})=>{let t=Math.abs(r.points[0].x-r.points[1].x),o=Math.abs(r.points[0].y-r.points[1].y);return t===0&&o===0?null:j`
    <line
      class="distance-line"
      x1=${r.points[0].x}
      y1=${r.points[0].y}
      x2=${r.points[1].x}
      y2=${r.points[1].y}
    />

    ${r.bisector&&j`
        <line
          class="distance-line"
          x1=${r.bisector[0].x}
          y1=${r.bisector[0].y}
          x2=${r.bisector[1].x}
          y2=${r.bisector[1].y}
          style=${ae({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Dn=({guide:r,reverseScale:e,fontSize:t})=>{let o=Math.abs(r.points[0].x-r.points[1].x),n=Math.abs(r.points[0].y-r.points[1].y);if(o===0&&n===0)return null;let i=Ee(Math.max(o,n)).toString(10),s=i.length*t*.5,c=t*.25,a=t*.25,l=t*.5,u=o>n?(r.points[0].x+r.points[1].x)/2-s/2:r.points[0].x,m=o>n?r.points[0].y:(r.points[0].y+r.points[1].y)/2-t/2,x=[`scale(${e})`,o>n?`translate(0, ${c+a})`:`translate(${c+l}, 0)`].join(" "),_=u+s/2,b=m+t/2,$=o>n?`${_} ${m}`:`${u} ${b}`;return j`
    <g class="distance-tooltip">
      <rect
        x=${u-l}
        y=${m-a}
        rx="2"
        width=${s+l*2}
        height=${t+a*2}
        transform=${x}
        transform-origin=${$}
        stroke="none"
      />

      <text
        x=${_}
        y=${m+t-a/2}
        text-anchor="middle"
        transform=${x}
        transform-origin=${$}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${i}
      </text>
    </g>
  `},ao=new Map,lo=({node:r,distanceTo:e,reverseScale:t,fontSize:o})=>{let n=r.id+`
`+e.id,i=ao.get(n);return i||(i=Qr(r.absoluteBoundingBox,e.absoluteBoundingBox),ao.set(n,i)),[...i.map(s=>zn({guide:s,reverseScale:t})),...i.map(s=>Dn({guide:s,reverseScale:t,fontSize:o}))]},co=B`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var po,Ot,ho,fo,mo,Nt=w(()=>{d();p();h();V();po=({onClick:r=()=>{}})=>j`
  <svg @click=${r} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ot=({onClick:r=()=>{}})=>j`
  <svg @click=${r} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,ho=()=>j`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,fo=()=>j`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,mo=()=>j`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var me,Yn,Rt,Ze,go,Wn,Bt,vo=w(()=>{d();p();h();me=r=>r.a===0?"transparent":r.a<1?`rgba(${go(r).join(", ")}, ${r.a.toFixed(2)})`:Wn(r),Yn=r=>new Rt(r).cssColor,Rt=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let o=this.floatToPercent(this.colors[t].position);return e+" "+o})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>me(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let o=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(o).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Ze=class{constructor(e){var t,o,n;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((o=e.background)===null||o===void 0?void 0:o[0].color);this.background=me(s)}let i=(n=e.fills)===null||n===void 0?void 0:n[0];if(i&&i.visible!==!1&&(e.type==="TEXT"?this.color=me(i.color):i.type.includes("GRADIENT")?this.backgroundImage=Yn(i):i.type==="SOLID"&&(this.background=me(i.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=me(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:c,color:a}=e.effects[0];this.boxShadowColor=me(a),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Bt).join(`
`)}},go=r=>[Math.trunc(255*r.r),Math.trunc(255*r.g),Math.trunc(255*r.b)],Wn=r=>{let[e,t,o]=go(r);return"#"+((1<<24)+(e<<16)+(t<<8)+o).toString(16).slice(1)},Bt=({property:r,value:e})=>`${r}: ${e};`});var Zn,jt,yo,Gn,Xn,bo,xo=w(()=>{d();p();h();V();Nt();vo();Zn=function(r,e,t,o){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function c(u){try{l(o.next(u))}catch(m){s(m)}}function a(u){try{l(o.throw(u))}catch(m){s(m)}}function l(u){u.done?i(u.value):n(u.value).then(c,a)}l((o=o.apply(r,e||[])).next())})},jt=r=>Zn(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(r)}),yo=({node:r,onClose:e})=>{if(!r)return null;let t=new Ze(r),o=n=>n.stopPropagation();return S`
    <div
      class="inspector-view"
      @click=${o}
      @wheel=${o}
      @keydown=${o}
      @keyup=${o}
      @pointermove=${o}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${r.name}</h4>
          ${po({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?S`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?S`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&S`<p class="inspector-property">
              ${ho()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&S`<p class="inspector-property">
              ${fo()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${r.characters?S`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Ot({onClick:()=>jt(r.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${r.characters}
            </p>
          </div>`:null}
      ${Gn(t)}
    </div>
  `},Gn=r=>{let e=()=>jt(r.getStyleSheet()),t=r.getStyles();return S`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Ot({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(Xn)}
    </div>
  </div>`},Xn=r=>{let{property:e,value:t,color:o}=r,n=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":n=S`<span
        class="color-preview"
        style="background-color: ${o}"
      ></span>`;break;case"background-image":n=S`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return S`<div class="css-property" @click=${()=>jt(Bt(r))}>
    <span>${e}:</span>${n}<span class="css-value">${t}</span>;</span>
  </div>`},bo=B`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var Lt,_o,wo,$o=w(()=>{d();p();h();V();Ve();Ae();Lt=({node:r,selected:e=!1,computedThickness:t,onClick:o})=>{let{x:n,y:i,width:s,height:c}=r.absoluteBoundingBox,a="cornerRadius"in r&&r.cornerRadius?{topLeft:r.cornerRadius,topRight:r.cornerRadius,bottomRight:r.cornerRadius,bottomLeft:r.cornerRadius}:"rectangleCornerRadii"in r&&r.rectangleCornerRadii?{topLeft:r.rectangleCornerRadii[0],topRight:r.rectangleCornerRadii[1],bottomRight:r.rectangleCornerRadii[2],bottomLeft:r.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},l=t/2,u=(b,$)=>`M${b},${$}`,m=(b,$)=>`L${b},${$}`,x=(b,$,C)=>`A${b},${b} 0 0 1 ${$},${C}`,_=[u(a.topLeft+l,l),m(s-a.topRight,l),x(a.topRight-l,s-l,a.topRight),m(s-l,c-a.bottomRight),x(a.bottomRight-l,s-a.bottomRight,c-l),m(a.bottomLeft,c-l),x(a.bottomLeft-l,l,c-a.bottomLeft),m(l,a.topLeft),x(a.topLeft-l,a.topLeft,l),"Z"].join(" ");return j`
    <path
      class="guide"
      d=${_}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${n}, ${i})"
      ?data-selected=${e}
      @click=${o}
    />
  `},_o=({nodeSize:{x:r,y:e,width:t,height:o},offsetX:n,offsetY:i,reverseScale:s})=>{let c={top:`${i+e+o}px`,left:`${n+r+t/2}px`,transform:`translateX(-50%) scale(${s}) translateY(0.25em)`};return S`
    <div class="tooltip" style="${ae(c)}">
      ${Ee(t)} x ${Ee(o)}
    </div>
  `},wo=B`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var Jn,So,Eo,Ao=w(()=>{d();p();h();Jn=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],So=r=>(typeof r=="object"?r:new Date(r)).getTime(),Eo=(r,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let n=So(e)-So(r),i=Math.abs(n);for(let s of Jn)if(i>=s.gte){let c=Math.round(Math.abs(n)/s.divisor),a=n<0,l=s.unit;return l?t.format(a?c:-c,l):s.text}}});var Co,ko,Po=w(()=>{d();p();h();V();Nt();Ao();Co=B`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,ko=r=>{if(!r||!r.link||r.link===void 0||r.link==="undefined")return null;let{link:e,timestamp:t,fileName:o}=r;return S`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${mo()} </span>
    <span class="figma-footer--title"> ${o} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Eo(t)}
    </span>
  </a>`}});function ei(r){let e=[],t=[],o=[],n=[];for(let c of r.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;let{x:a,y:l,width:u,height:m}=c.absoluteBoundingBox;e.push(a),t.push(a+u),o.push(l),n.push(l+m)}let i=Math.min(...e),s=Math.min(...o);return{x:i,y:s,width:Math.abs(Math.max(...t)-i),height:Math.abs(Math.min(...n)-s)}}function ti(r,e){let t=e.map(n=>{if(!("effects"in n))return{top:n.absoluteBoundingBox.y,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x};let i=n.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),s=n.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...i,...s.map(a=>a.top)),right:Math.max(0,...i,...s.map(a=>a.right)),bottom:Math.max(0,...i,...s.map(a=>a.bottom)),left:Math.max(0,...i,...s.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-c.top,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width+c.right,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height+c.bottom,left:n.absoluteBoundingBox.x-c.left}}),o={top:Math.min(...t.map(n=>n.top)),right:Math.max(...t.map(n=>n.right)),bottom:Math.max(...t.map(n=>n.bottom)),left:Math.min(...t.map(n=>n.left))};return{top:r.absoluteBoundingBox.y-o.top,right:o.right-r.absoluteBoundingBox.x-r.absoluteBoundingBox.width,bottom:o.bottom-r.absoluteBoundingBox.y-r.absoluteBoundingBox.height,left:r.absoluteBoundingBox.x-o.left}}function Ge(r,e=0){return"absoluteBoundingBox"in r?!("children"in r)||r.children.length===0?[Object.assign(Object.assign({},r),{depth:e})]:[Object.assign(Object.assign({},r),{depth:e}),...r.children.map(t=>Ge(t,e+1)).flat()]:r.children.map(t=>Ge(t,e+1)).flat()}var Mo,F,It,Xe,Ht=w(()=>{d();p();h();V();fe();Ve();Ae();to();so();uo();xo();ze();$o();Po();Mo=function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},F=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},It=function(r,e,t){if(!e.has(r))throw new TypeError("attempted to set private field on non-instance");return e.set(r,t),t},Xe=r=>{var e,t,o,n,i;class s extends eo(io(r)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),o.set(this,void 0),n.set(this,l=>u=>{u.preventDefault(),u.stopPropagation(),this.selectedNode=l}),i.set(this,l=>{var u,m;return(m=(u=F(this,o))===null||u===void 0?void 0:u.find(x=>x.id===l))!==null&&m!==void 0?m:null})}static get styles(){let a=super.styles;return Ye(a,[B`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,wo,Yr,co,bo,Co])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!F(this,e)||!F(this,o)?q({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?q({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?q({title:"Error",children:this.error}):this.error;let a=F(this,e),l=1/this.scale,u=`calc(var(--guide-thickness) * ${l})`,m=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),x=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return S`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([_,b])=>{var $;let C=F(this,i).call(this,_);if(!C||!("absoluteBoundingBox"in C)||!(!(($=F(this,t))===null||$===void 0)&&$[C.id]))return null;let A=F(this,t)[C.id];return S`
                <img class="rendered-image" src="${b}"
                style=${ae({top:`${C.absoluteBoundingBox.y-a.y}px`,left:`${C.absoluteBoundingBox.x-a.x}px`,marginTop:`${-A.top}px`,marginLeft:`${-A.left}px`,width:C.absoluteBoundingBox.width+A.left+A.right+"px",height:C.absoluteBoundingBox.height+A.top+A.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&_o({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:l})}
            ${j`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${ae({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:u})}
            >
              ${this.selectedNode&&Lt({node:this.selectedNode,selected:!0,computedThickness:m*l})}

              ${F(this,o).map(_=>{var b;return _.id===((b=this.selectedNode)===null||b===void 0?void 0:b.id)?null:j`
                  <g>
                    ${Lt({node:_,computedThickness:m*l,onClick:F(this,n).call(this,_)})}
                    ${this.selectedNode&&lo({node:_,distanceTo:this.selectedNode,reverseScale:l,fontSize:x})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${yo({node:this.selectedNode,onClose:this.deselectNode})}
          ${ko(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");It(this,e,a.type==="CANVAS"?ei(a):a.absoluteBoundingBox),It(this,o,Ge(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(F(this,i)).filter(l=>!!l);It(this,t,a.reduce((l,u)=>"absoluteBoundingBox"in u?Object.assign(Object.assign({},l),{[u.id]:ti(u,Ge(u))}):l,{})),this.requestUpdate()}resetZoom(){if(F(this,e)){let{width:a,height:l}=F(this,e),{width:u,height:m}=this.getBoundingClientRect(),x=u/(a+this.zoomMargin*2),_=m/(l+this.zoomMargin*2);this.scale=Math.min(x,_,1)}}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,Mo([P({type:Number,attribute:"zoom-margin"})],s.prototype,"zoomMargin",void 0),Mo([P({type:String,attribute:"link"})],s.prototype,"link",void 0),s}});var To,J,Oo=w(()=>{d();p();h();V();fe();ze();Ht();To=function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},J=class extends Xe(D){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return q({title:"Parameter error",children:S`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return q({title:"Parameter Error",children:S`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};To([P({type:Object})],J.prototype,"nodes",void 0);To([P({type:String,attribute:"rendered-image"})],J.prototype,"renderedImage",void 0)});var No,Ft,qe,Ut,Q,Ro=w(()=>{d();p();h();V();fe();ze();Ht();Ae();No=function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},Ft=function(r,e){if(!e.has(r))throw new TypeError("attempted to get private field on non-instance");return e.get(r)},Q=class extends Xe(D){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,qe.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Ut.set(this,e=>{var t,o;let n=e.currentTarget;this.selectedPage=(o=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(i=>i.id===n.value))!==null&&o!==void 0?o:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return q({title:"Parameter error",children:S`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Ye(super.styles,[B`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return S`
      <div class="controls">
        <select @change=${Ft(this,Ut)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>S`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Ft(this,qe).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Ft(this,qe).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};qe=new WeakMap,Ut=new WeakMap;No([P({type:Object,attribute:"document-node"})],Q.prototype,"documentNode",void 0);No([P({type:Object,attribute:"rendered-images"})],Q.prototype,"renderedImages",void 0)});var Bo=w(()=>{d();p();h();Oo();Ro();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",Q);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",J)});function Ke(r=window.React,e,t,o,n){let i,s,c;if(e===void 0){let _=r;({tagName:s,elementClass:c,events:o,displayName:n}=_),i=_.react}else i=r,c=t,s=e;let a=i.Component,l=i.createElement,u=new Set(Object.keys(o??{}));class m extends a{constructor(){super(...arguments),this.o=null}t(b){if(this.o!==null)for(let $ in this.i)oi(this.o,$,this.props[$],b?b[$]:void 0,o)}componentDidMount(){this.t()}componentDidUpdate(b){this.t(b)}render(){let{_$Gl:b,...$}=this.props;this.h!==b&&(this.u=A=>{b!==null&&((U,ge)=>{typeof U=="function"?U(ge):U.current=ge})(b,A),this.o=A,this.h=b}),this.i={};let C={ref:this.u};for(let[A,U]of Object.entries($))ri.has(A)?C[A==="className"?"class":A]=U:u.has(A)||A in c.prototype?this.i[A]=U:C[A]=U;return l(s,C)}}m.displayName=n??c.name;let x=i.forwardRef((_,b)=>l(m,{..._,_$Gl:b},_?.children));return x.displayName=m.displayName,x}var ri,jo,oi,Lo=w(()=>{d();p();h();ri=new Set(["children","localName","ref","style","className"]),jo=new WeakMap,oi=(r,e,t,o,n)=>{let i=n?.[e];i===void 0||t===o?t==null&&e in HTMLElement.prototype?r.removeAttribute(e):r[e]=t:((s,c,a)=>{let l=jo.get(s);l===void 0&&jo.set(s,l=new Map);let u=l.get(c);a!==void 0?u===void 0?(l.set(c,u={handleEvent:a}),s.addEventListener(c,u)):u.handleEvent=a:u!==void 0&&(l.delete(c),s.removeEventListener(c,u))})(r,i,t)}});var Io=w(()=>{d();p();h();Lo()});var Ho,Fo,Uo=w(()=>{d();p();h();Bo();Io();R();Ho=Ke(Re,"figspec-frame-viewer",J,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),Fo=Ke(Re,"figspec-file-viewer",Q,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})});var Wo={};Yt(Wo,{Figspec:()=>Vo,default:()=>li});function Je(r){return r.status!==200?Promise.reject(r.statusText):r.json()}function ai(r){var e;if(r.accessToken)return r.accessToken;try{return(e=g.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&e!==void 0?e:null}catch{return null}}function Yo(r){return"absoluteBoundingBox"in r?[r]:!r.children||r.children.length===0?[]:r.children.map(Yo).reduce(function(e,t){return e.concat(t)},[])}var ni,Qe,ii,si,zo,Vo,li,Do,Zo=w(()=>{d();p();h();R();Uo();z();L();lt();ni=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},Qe=function(){return Qe=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Qe.apply(this,arguments)},ii=function(r,e,t,o){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function c(u){try{l(o.next(u))}catch(m){s(m)}}function a(u){try{l(o.throw(u))}catch(m){s(m)}}function l(u){u.done?i(u.value):n(u.value).then(c,a)}l((o=o.apply(r,e||[])).next())})},si=function(r,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(l){return function(u){return a([l,u])}}function a(l){if(o)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(t=0)),t;)try{if(o=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(u){l=[6,u],n=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},zo=O(Do||(Do=ni([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));Vo=function(r){var e=r.config,t=M({state:"loading"}),o=t[0],n=t[1],i=function(s){return ii(void 0,void 0,void 0,function(){var c,a,l,u,m,x,_,b,$,C,A,U,ge,Vt,ee;return si(this,function(te){switch(te.label){case 0:n({state:"loading"}),te.label=1;case 1:if(te.trys.push([1,6,,7]),c=e.url.match(at),!c)throw new Error(e.url+" is not a valid Figma URL.");if(a=c[3],l=new URL(e.url),u=l.searchParams.get("node-id"),m=ai(e),!m)throw new Error("Personal Access Token is required.");return x={"X-FIGMA-TOKEN":m},_=new URL("https://api.figma.com/v1/files/".concat(a)),b=new URL("https://api.figma.com/v1/images/".concat(a)),b.searchParams.set("format","svg"),u?[3,4]:[4,fetch(_.href,{headers:x,signal:s}).then(function(W){return Je(W)})];case 2:return $=te.sent(),C=Yo($.document),b.searchParams.set("ids",C.map(function(W){return W.id}).join(",")),[4,fetch(b.href,{headers:x,signal:s}).then(function(W){return Je(W)})];case 3:return A=te.sent(),n({state:"fetched",value:{type:"file",props:{documentNode:$,renderedImages:A.images,link:e.url}}}),[2];case 4:return _.pathname+="/nodes",_.searchParams.set("ids",u),b.searchParams.set("ids",u),[4,Promise.all([fetch(_.href,{headers:x,signal:s}).then(function(W){return Je(W)}),fetch(b.href,{headers:x,signal:s}).then(function(W){return Je(W)})])];case 5:return U=te.sent(),ge=U[0],Vt=U[1],n({state:"fetched",value:{type:"frame",props:{nodes:ge,renderedImage:Object.values(Vt.images)[0],link:e.url}}}),[3,7];case 6:return ee=te.sent(),ee instanceof DOMException&&ee.code===DOMException.ABORT_ERR?[2]:(console.error(ee),n({state:"failed",error:ee instanceof Error?ee.message:String(ee)}),[3,7]);case 7:return[2]}})})};switch(N(function(){var s=!1,c=function(){s=!0},a=new AbortController;return i(a.signal).then(c,c),function(){s||a.abort()}},[e.url]),o.state){case"loading":return f(I,null,f(E,null,"Loading Figma file..."));case"failed":return f(I,null,f(E,null,"Failed to load Figma file"),f(E,null,o.error));case"fetched":return o.value.type==="file"?f(Fo,Qe({css:zo},o.value.props)):f(Ho,Qe({css:zo},o.value.props))}},li=Vo});d();p();h();d();p();h();d();p();h();d();p();h();var vi=__STORYBOOKAPI__,{ActiveTabs:yi,Consumer:bi,ManagerContext:xi,Provider:_i,addons:Pe,combineParameters:wi,controlOrMetaKey:$i,controlOrMetaSymbol:Si,eventMatchesShortcut:Ei,eventToShortcut:Ai,isMacLike:Ci,isShortcutTaken:ki,keyToSymbol:Pi,merge:Mi,mockChannel:Ti,optionOrAltSymbol:Oi,shortcutMatchesShortcut:Ni,shortcutToHumanString:Ri,types:et,useAddonState:Bi,useArgTypes:ji,useArgs:Li,useChannel:Ii,useGlobalTypes:Hi,useGlobals:Fi,useParameter:Me,useSharedState:Ui,useStoryPrepared:zi,useStorybookApi:Di,useStorybookState:Wt}=__STORYBOOKAPI__;z();L();d();p();h();var Ne="STORYBOOK_ADDON_DESIGNS",tt=Ne+"/panel",Ma={UpdateConfig:Ne+"/update_config"},le="design";d();p();h();R();z();L();var bn=function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o[i]=n[i])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}}(),it=function(r){bn(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.state={hasError:!1},t}return e.getDerivedStateFromError=function(t){return{hasError:!0,error:t}},e.prototype.componentDidCatch=function(t,o){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(t),console.log("--- React Component Stack ---"),console.error(o.componentStack),console.groupEnd()},e.prototype.render=function(){return this.state.hasError?f(I,null,f(E,null,"Failed to render addon UI"),f(E,null,f("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),f("pre",null,String(this.state.error)),f("p",null,"See console log for more details. To clear the error state, please reload the page."," ",f(re,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children},e}(rt);d();p();h();R();L();d();p();h();R();L();z();lt();Be();d();p();h();R();L();z();d();p();h();R();L();d();p();h();R();var tr=function(r,e,t){if(t||arguments.length===2)for(var o=0,n=e.length,i;o<n;o++)(i||!(o in e))&&(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return r.concat(i||Array.prototype.slice.call(e))},rr=function(r,e){var t=M([0,0]),o=t[0],n=t[1],i=M(!1),s=i[0],c=i[1],a=H(function(b){b.button===0&&(n([b.screenX,b.screenY]),c(!0))},[c,n]),l=H(function(b){var $=b.touches[0];n([$.screenX,$.screenY]),c(!0)},[c,n]),u=H(function(b){s&&n(function($){return r([b[0]-$[0],b[1]-$[1]]),b})},tr([n,s],e,!0)),m=H(function(b){var $=b.screenX,C=b.screenY;u([$,C])},[u]),x=H(function(b){var $=b.touches[0],C=$.screenX,A=$.screenY;u([C,A])},tr([n,s],e,!0)),_=H(function(){n([0,0]),c(!1)},[c,n]);return{onMouseDown:a,onMouseMove:m,onMouseUp:_,onMouseLeave:_,onTouchStart:l,onTouchMove:x,onTouchCancel:_,onTouchEnd:_}};var ir=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},ct=function(){return ct=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ct.apply(this,arguments)},sr=function(r){var e=r.children,t=r.className,o=r.style,n=r.defaultValue,i=r.value,s=r.onChange,c=M([0,0]),a=c[0],l=c[1];N(function(){l(n||i||[0,0])},[n]);var u=rr(function(x){s&&s(x),l(function(_){return[_[0]+x[0],_[1]+x[1]]})},[l,s]),m=Z(function(){var x=i||a;return{transform:"translate(".concat(x[0],"px, ").concat(x[1],"px)")}},[i,a]);return f("div",ct({css:Sn,className:t,style:o},u),f("div",{css:En,style:m},e))};var Sn=O(or||(or=ir([`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`],[`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`]))),En=O(nr||(nr=ir([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`]))),or,nr;d();p();h();R();L();z();var ar=function(r){var e=r.onZoomIn,t=r.onZoomOut,o=r.onReset;return f(E,null,f(Te,{onClick:e},f(Oe,{icon:"zoom"})),f(Te,{onClick:t},f(Oe,{icon:"zoomout"})),f(Te,{onClick:o},f(Oe,{icon:"zoomreset"})))};d();p();h();R();var lr=function(r,e){var t=M(1),o=t[0],n=t[1];N(function(){n(r)},e);var i=H(function(){n(function(a){return a+.1})},[n]),s=H(function(){n(function(a){return Math.max(a-.1,.1)})},[n]),c=H(function(){n(1)},[n]);return{scale:o,zoomIn:i,zoomOut:s,resetZoom:c}};var ut=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},pr=function(r){var e=r.config,t=lr(e.scale||1,[e.scale]),o=Z(function(){return{transform:"scale(".concat(t.scale,")")}},[t.scale]);return f("div",{css:An},f(Gt,{border:!0},f(E,{key:"left"},f("p",null,f("b",null,"Image")),f(Xt,null),f(ar,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),f(sr,{css:Cn,defaultValue:e.offset},f("img",{css:kn,src:e.url,style:o})))};var An=O(cr||(cr=ut([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`]))),Cn=O(ur||(ur=ut([`
  flex-grow: 1;
`],[`
  flex-grow: 1;
`]))),kn=O(dr||(dr=ut([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`]))),cr,ur,dr;d();p();h();L();z();var Pn=function(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r},fr=function(r){var e,t,o,n=r.config;return f("div",{css:Mn},f(re,{cancel:!1,href:n.url,target:(e=n.target)!==null&&e!==void 0?e:"_blank",rel:(t=n.rel)!==null&&t!==void 0?t:"noopener",withArrow:(o=n.showArrow)!==null&&o!==void 0?o:!0},n.label||n.url))};var Mn=O(hr||(hr=Pn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),hr;d();p();h();z();L();R();Be();var ue=function(){return ue=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},ue.apply(this,arguments)},Tn=function(r){if(r.protocol!=="https:")return{valid:!1,error:f(E,null,"Expected HTTPS link, received ",f("code",null,r.protocol),".")};if(r.hostname!=="www.sketch.com")return{valid:!1,error:f(E,null,"Expected a hostname ",f("code",null,"www.sketch.com"),", received"," ",f("code",null,r.hostname))};var e=f(E,null,"Expected pathname ",f("code",null,"/s/<string>/a/<string>"),", received"," ",f("code",null,r.pathname),"."),t=r.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:r.href,offscreen:!1}};var o=t[0],n=t[1],i=t[2],s=t[3];return o!=="s"||!n||i!=="a"||!s?{valid:!1,error:e}:{valid:!0,data:{url:"https://www.sketch.com/embed/s/".concat(n,"/a/").concat(s),offscreen:!1}}},mr=function(r){var e=r.config,t=Z(function(){var o=Tn(new URL(e.url));return o.valid?ue(ue({},o),{data:ue(ue({},e),o.data)}):o},[e]);return t.valid?f(ce,{defer:!0,config:t.data}):f(I,null,f(E,null,"Invalid Sketch URL"),f(E,null,t.error))};d();p();h();R();L();z();var gr=function(r){var e=r.tabs,t=r.deps,o=t===void 0?[]:t,n=M(e[0].id),i=n[0],s=n[1];return N(function(){s(e[0].id)},o),f(qt,{absolute:!0,selected:i,actions:{onSelect:s}},e.map(function(c){return f("div",{key:c.id,id:c.id,title:c.name},c.offscreen||i===c.id?c.content:null)}))};var T=function(){return T=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},T.apply(this,arguments)},ci=function(r,e,t){if(t||arguments.length===2)for(var o=0,n=e.length,i;o<n;o++)(i||!(o in e))&&(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return r.concat(i||Array.prototype.slice.call(e))},ui=nt(function(){return Promise.resolve().then(()=>(Zo(),Wo))}),Go=function(r){var e=r.config;if(!e||"length"in e&&e.length===0)return f(I,null,f(E,null,"No designs found"),f(E,null,"Learn how to"," ",f(re,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=ci([],e instanceof Array?e:[e],!0).map(function(o){var n,i,s={id:JSON.stringify(o),name:o.name||((n=o.type)===null||n===void 0?void 0:n.toUpperCase())||"ERROR",offscreen:(i=o.offscreen)!==null&&i!==void 0?i:!0};switch(o.type){case"iframe":return T(T({},s),{content:f(ce,{config:o})});case"figma":return T(T({},s),{content:f(er,{config:o}),offscreen:!1});case"sketch":return T(T({},s),{content:f(mr,{config:o})});case"figspec":case"experimental-figspec":return o.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),T(T({},s),{content:f(ot,{fallback:"Preparing Figspec viewer..."},f(ui,{config:o})),offscreen:!1});case"image":return T(T({},s),{content:f(pr,{config:o})});case"link":return T(T({},s),{content:f(fr,{config:o})})}return T(T({},s),{content:f(I,null,f(E,null,"Invalid config type"),f(E,null,"Config type you set is not supported. Please choose one from"," ",f(re,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return t.length===1?f("div",null,t[0].content):f(gr,{tabs:t,deps:[e]})};var zt=function(r){var e=r.active,t=Wt(),o=Me(le),n=M(e),i=n[0],s=n[1];return N(function(){s(e)},[o]),N(function(){e&&s(!0)},[e]),i?f(Go,{key:t.storyId,config:o}):null};var ke="Design";function Dt(r){Pe.register(Ne,function(e){var t=function(){var o=Me(le);return o?Array.isArray(o)?o.length>0?"".concat(ke," (").concat(o.length,")"):ke:(o.name||ke)+" (1)":ke};r==="tab"?Pe.add(tt,{title:ke,render:function(o){var n=o.active,i=o.key;return n?f(it,{key:i},f(zt,{active:!0})):f("noscript",{key:i})},type:et.TAB,paramKey:le,route:function(o){var n=o.storyId;return"/design/".concat(n)},match:function(o){var n=o.viewMode;return n==="design"}}):Pe.add(tt,{type:et.PANEL,title:t,paramKey:le,render:function(o){var n=o.active;return f(Zt,{active:!!n},f(it,null,f(zt,{active:!!n})))}})})}Dt("panel");
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
