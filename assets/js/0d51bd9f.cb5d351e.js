"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[2958],{5680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>d});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=s(a),m=n,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return a?r.createElement(d,i(i({ref:t},y),{},{components:a})):r.createElement(d,i({ref:t},y))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const l={sidebar_position:3},i="VMESS",o={unversionedId:"profile-format/proxy/external-proxy/vmess",id:"profile-format/proxy/external-proxy/vmess",title:"VMESS",description:"Protocol standard",source:"@site/docs/profile-format/proxy/external-proxy/vmess.md",sourceDirName:"profile-format/proxy/external-proxy",slug:"/profile-format/proxy/external-proxy/vmess",permalink:"/docs/profile-format/proxy/external-proxy/vmess",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxy/external-proxy/vmess.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shadowsocks",permalink:"/docs/profile-format/proxy/external-proxy/shadowsocks"},next:{title:"Trojan",permalink:"/docs/profile-format/proxy/external-proxy/trojan"}},p={},s=[{value:"Protocol standard",id:"protocol-standard",level:2},{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2},{value:"Params",id:"params",level:2}],y={toc:s},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"vmess"},"VMESS"),(0,n.yg)("h2",{id:"protocol-standard"},"Protocol standard"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.v2fly.org/en_US/developer/protocols/vmess.html"},"https://www.v2fly.org/en_US/developer/protocols/vmess.html")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.v2fly.org/config/protocols/vmess.html#vmess-md5-%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF-%E7%8E%B7%E6%B1%A1%E6%9C%BA%E5%88%B6"},"https://www.v2fly.org/config/protocols/vmess.html#vmess-md5-%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF-%E7%8E%B7%E6%B1%A1%E6%9C%BA%E5%88%B6")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"https://en.wikipedia.org/wiki/Universally_unique_identifier")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"https://en.wikipedia.org/wiki/Transport_Layer_Security")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Server_Name_Indication"},"https://en.wikipedia.org/wiki/Server_Name_Indication"))),(0,n.yg)("h2",{id:"sample"},"Sample"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini"},"ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true\n")),(0,n.yg)("h2",{id:"format"},"Format"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ini"},"{proxy name} = vmess, {server}, {port}, {username}, {udp-relay}, {ws}, {tls}, {ws-path}, {ws-headers}, {skip-cert-verify}, {sni}, {vmess-aead}\n")),(0,n.yg)("h2",{id:"params"},"Params"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.yg)("th",{parentName:"tr",align:null},"Note"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"proxy name"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"server"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Support domain and ip format")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"port"),(0,n.yg)("td",{parentName:"tr",align:null},"0 - 65535"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"username"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"UUID format")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"udp-relay"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ws"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tls"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ws-path"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: /",(0,n.yg)("br",null),"usable only when ws set to true")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ws-headers"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Value format: ",(0,n.yg)("code",null,"Header-1:value-1","|","Header-2:value-2"),(0,n.yg)("br",null),"Key and value is divided by colon",(0,n.yg)("br",null),"Entries are divided by vertical bar",(0,n.yg)("br",null),"Usable only when ws set to true")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"skip-cert-verify"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Usable if tls is true",(0,n.yg)("br",null),"set to true if proxy doesn't have a valid TLS certificate")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"sni"),(0,n.yg)("td",{parentName:"tr",align:null},"-"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Usable if tls is true",(0,n.yg)("br",null),"definition is unnecessary when the SNI value is the same as the host value")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"vmess-aead"),(0,n.yg)("td",{parentName:"tr",align:null},"true",(0,n.yg)("br",null),"false"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Default value: true")))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"vmess-aead")," is still an unconfirmed standard of Surge profile format, format may be changed in the future")))}u.isMDXComponent=!0}}]);