"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[5637],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),s=o,m=f["".concat(p,".").concat(s)]||f[s]||y[s]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},416:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const i={sidebar_position:0},a="Direct",c={unversionedId:"profile-format/proxy/built-in-proxy/direct",id:"profile-format/proxy/built-in-proxy/direct",title:"Direct",description:"Traffic match Direct proxy will be sent directly, without any redirection or modification.",source:"@site/docs/profile-format/proxy/built-in-proxy/direct.md",sourceDirName:"profile-format/proxy/built-in-proxy",slug:"/profile-format/proxy/built-in-proxy/direct",permalink:"/docs/profile-format/proxy/built-in-proxy/direct",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxy/built-in-proxy/direct.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"[Proxy]",permalink:"/docs/profile-format/proxy/"},next:{title:"Reject",permalink:"/docs/profile-format/proxy/built-in-proxy/reject"}},p={},l=[],u={toc:l},f="wrapper";function y(e){let{components:r,...t}=e;return(0,o.yg)(f,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"direct"},"Direct"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ini",metastring:'title="Rule sample combined with direct proxy"',title:'"Rule',sample:!0,combined:!0,with:!0,direct:!0,'proxy"':!0},"DOMAIN,www.apple.com,DIRECT\n")),(0,o.yg)("p",null,"Traffic match Direct proxy will be sent directly, without any redirection or modification."))}y.isMDXComponent=!0}}]);