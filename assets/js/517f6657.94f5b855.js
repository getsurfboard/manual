"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[5946],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,s=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:2},i="#!MANAGED-CONFIG",l={unversionedId:"profile-format/managed_config",id:"profile-format/managed_config",title:"#!MANAGED-CONFIG",description:"!MANAGED-CONFIG`",source:"@site/docs/profile-format/managed_config.md",sourceDirName:"profile-format",slug:"/profile-format/managed_config",permalink:"/docs/profile-format/managed_config",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/managed_config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"// Comment",permalink:"/docs/profile-format/comment"},next:{title:"dns-server",permalink:"/docs/profile-format/general/dns_server"}},p={},c=[{value:"Param",id:"param",level:2}],m={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"managed-config"},(0,a.yg)("inlineCode",{parentName:"h1"},"#!MANAGED-CONFIG")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true\n")),(0,a.yg)("p",null,"Managed config can be used to define an update url for current profile.\nProfile with managed config defined be can updated automatically in the background"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Managed config must be defined in the first line of the profile")),(0,a.yg)("h2",{id:"param"},"Param"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"interval"),": profile interval update time",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"format: number"),(0,a.yg)("li",{parentName:"ul"},"unit: second"),(0,a.yg)("li",{parentName:"ul"},"minimum value: 900 (15 minutes)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"strict"),": profile that have not been updated within the specified time are not allowed to be used",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"format: boolean")))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Currently Surfboard will ignore ",(0,a.yg)("inlineCode",{parentName:"p"},"strict")," param definition and treat it like ",(0,a.yg)("inlineCode",{parentName:"p"},"false"))))}f.isMDXComponent=!0}}]);