"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[5759],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||y[s]||l;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const l={sidebar_position:5},o="Subnet",i={unversionedId:"profile-format/rule/subnet",id:"profile-format/rule/subnet",title:"Subnet",description:"Sample",source:"@site/docs/profile-format/rule/subnet.md",sourceDirName:"profile-format/rule",slug:"/profile-format/rule/subnet",permalink:"/docs/profile-format/rule/subnet",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/rule/subnet.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Domain Set",permalink:"/docs/profile-format/rule/domainset"},next:{title:"Misc",permalink:"/docs/profile-format/rule/misc"}},p={},u=[{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],m={toc:u},c="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"subnet"},"Subnet"),(0,a.yg)("h2",{id:"sample"},"Sample"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"SUBNET,SSID:CMCC,REJECT\nSUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT\nSUBNET,ROUTER:192.168.1.1,DIRECT\nSUBNET,TYPE:WIFI,DIRECT\nSUBNET,TYPE:WIRED,DIRECT\nSUBNET,TYPE:CELLULAR,SelectGroup\nSUBNET,MCCMNC:100-200,DIRECT\n")),(0,a.yg)("h2",{id:"format"},"Format"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ini"},"SUBNET,{type}:{value},{target proxy}\n")),(0,a.yg)("h2",{id:"param"},"Param"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Value"),(0,a.yg)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.yg)("th",{parentName:"tr",align:null},"Note"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"type"),(0,a.yg)("td",{parentName:"tr",align:null},"SSID",(0,a.yg)("br",null),"BSSID",(0,a.yg)("br",null),"ROUTER",(0,a.yg)("br",null),"TYPE",(0,a.yg)("br",null),"MCCMNC"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"SSID and BSSID require GPS permission on most newer android devices")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"value"),(0,a.yg)("td",{parentName:"tr",align:null},"SSID: ssid name",(0,a.yg)("br",null),"BSSID: bssid value(MAC address)",(0,a.yg)("br",null),"ROUTER: gateway ip",(0,a.yg)("br",null),"TYPE: WIFI/WIRED/CELLULAR",(0,a.yg)("br",null),"MCCMNC: {mcc}-{mnc}"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"ROUTER rule will only take effect under wifi or wired network")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"target proxy"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"Specified proxy or proxy group must existed in profile")))),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"MCC and MNC value can be query in ",(0,a.yg)("a",{parentName:"p",href:"https://mcc-mnc-list.com/list"},"https://mcc-mnc-list.com/list"))))}y.isMDXComponent=!0}}]);