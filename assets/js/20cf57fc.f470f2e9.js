"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[408],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,d=m["".concat(l,".").concat(s)]||m[s]||f[s]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_position:1},a="Reject",p={unversionedId:"profile-format/proxy/built-in-proxy/reject",id:"profile-format/proxy/built-in-proxy/reject",title:"Reject",description:"Traffic match Reject proxy will not be sent:",source:"@site/docs/profile-format/proxy/built-in-proxy/reject.md",sourceDirName:"profile-format/proxy/built-in-proxy",slug:"/profile-format/proxy/built-in-proxy/reject",permalink:"/docs/profile-format/proxy/built-in-proxy/reject",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxy/built-in-proxy/reject.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Direct",permalink:"/docs/profile-format/proxy/built-in-proxy/direct"},next:{title:"HTTP/HTTPS",permalink:"/docs/profile-format/proxy/external-proxy/http"}},l={},c=[],u={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reject"},"Reject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="Rule sample combined with reject proxy"',title:'"Rule',sample:!0,combined:!0,with:!0,reject:!0,'proxy"':!0},"DOMAIN,www.google.com,REJECT\n")),(0,o.kt)("p",null,"Traffic match Reject proxy will not be sent:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For UDP and ICMP traffic, packets will be dropped."),(0,o.kt)("li",{parentName:"ul"},"For TCP traffic, a TCP Reset will be triggered.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Surfboard is also compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"REJECT-TINYGIF")," as built-in proxy,\nbut will handle it like ",(0,o.kt)("inlineCode",{parentName:"p"},"REJECT")," because Android platform do not support MITM."),(0,o.kt)("p",{parentName:"admonition"},"For more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/faq#mitm"},"FAQ"))))}f.isMDXComponent=!0}}]);