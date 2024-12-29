"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[9840],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:9},i="test-timeout",l={unversionedId:"profile-format/general/test_timeout",id:"profile-format/general/test_timeout",title:"test-timeout",description:"Timeout used for all connectivity test",source:"@site/docs/profile-format/general/test_timeout.md",sourceDirName:"profile-format/general",slug:"/profile-format/general/test_timeout",permalink:"/docs/profile-format/general/test_timeout",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/general/test_timeout.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"udp-policy-not-supported-behaviour",permalink:"/docs/profile-format/general/udp_policy_not_supported_behaviour"},next:{title:"[Host]",permalink:"/docs/profile-format/host/"}},u={},p=[{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"test-timeout"},(0,o.yg)("inlineCode",{parentName:"h1"},"test-timeout")),(0,o.yg)("p",null,"Timeout used for all connectivity test"),(0,o.yg)("p",null,"Unit: Seconds"),(0,o.yg)("p",null,"Default value: 5"),(0,o.yg)("h2",{id:"sample"},"Sample"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ini"},"test-timeout = 3\n")),(0,o.yg)("h2",{id:"format"},"Format"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ini"},"test-timeout = {timeout in seconds}\n")))}m.isMDXComponent=!0}}]);