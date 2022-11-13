"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[4887],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var a=r(3117),n=(r(7294),r(3905));const l={sidebar_position:1},o="Fallback",i={unversionedId:"profile-format/proxygroup/fallback",id:"profile-format/proxygroup/fallback",title:"Fallback",description:"A group of proxies with a test url in it, just like Auto select group.",source:"@site/docs/profile-format/proxygroup/fallback.md",sourceDirName:"profile-format/proxygroup",slug:"/profile-format/proxygroup/fallback",permalink:"/docs/profile-format/proxygroup/fallback",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxygroup/fallback.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auto select",permalink:"/docs/profile-format/proxygroup/auto"},next:{title:"Load balance",permalink:"/docs/profile-format/proxygroup/load-balance"}},p={},u=[{value:"Sample",id:"sample",level:2},{value:"Profile sample",id:"profile-sample",level:3},{value:"Policy path sample",id:"policy-path-sample",level:3},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fallback"},"Fallback"),(0,n.kt)("p",null,"A group of proxies with a test url in it, just like ",(0,n.kt)("a",{parentName:"p",href:"./auto"},"Auto select")," group."),(0,n.kt)("p",null,"Unlike auto select group, the selection change will take effect immediately as long as any proxy test succeeds."),(0,n.kt)("p",null,"Therefore, proxies order is critical in a fallback group, you should put better proxies first."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Fallback group selection can not be changed manually")),(0,n.kt)("h2",{id:"sample"},"Sample"),(0,n.kt)("h3",{id:"profile-sample"},"Profile sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"[Proxy Group]\nFallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5\n\n[Rule]\n# traffic match 'www.google.com' will be redirect through AutoTestGroup's selected proxy\nDOMAIN, www.google.com, FallbackGroup\n")),(0,n.kt)("h3",{id:"policy-path-sample"},"Policy path sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"ProxyHTTP = http, 1.2.3.4, 443, username, password\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\nProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false\n")),(0,n.kt)("p",null,"Just like ",(0,n.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy"},"[Proxy]")," Section definition but without section header in it."),(0,n.kt)("p",null,"Use policy path can separate proxies and rules definition, and reduce profile complexity. "),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"{group name} = fallback, {proxies, ...}, {policy-path}, {policy-regex-filter}, {url}, {interval}, {timeout}, {hidden}, include-all-proxies = {include-all-proxies}\n")),(0,n.kt)("h2",{id:"param"},"Param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"name of group, will be used like a key to the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proxies"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of proxy name defined in ",(0,n.kt)("inlineCode",{parentName:"td"},"[Proxy]")," section, divided by comma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"policy-path"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of proxy defined in url content",(0,n.kt)("br",null),"Content format will be presented below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"policy-regex-filter"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Usable if policy-path defined.",(0,n.kt)("br",null),"A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"http scheme url"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Test url which is used by HTTP HEAD request.",(0,n.kt)("br",null),"If url is not defined, '",(0,n.kt)("a",{href:"/docs/profile-format/general/proxy_test_url"},"proxy-test-url"),"' defined in ",(0,n.kt)("inlineCode",{parentName:"td"},"[General]")," section will be used.",(0,n.kt)("br",null),"If 'proxy-test-url' is not defined either, '",(0,n.kt)("a",{parentName:"td",href:"http://www.gstatic.com/generate_204'"},"http://www.gstatic.com/generate_204'")," will be used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Unit: seconds, define test trigger intervals. Default value: 600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Unit: seconds",(0,n.kt)("br",null),"Test exceed this maximum allowed duration will be treated as failure.",(0,n.kt)("br",null),"Default value: 5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hidden"),(0,n.kt)("td",{parentName:"tr",align:null},"true",(0,n.kt)("br",null),"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to display this proxy group in user interface, even set to false, this group will still take effect.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"include-all-proxies"),(0,n.kt)("td",{parentName:"tr",align:null},"true",(0,n.kt)("br",null),"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Include all proxies defined in whole profile, can be used with ",(0,n.kt)("inlineCode",{parentName:"td"},"policy-regex-filter")," to filter some of the proxies")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Only ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," scheme url is allowed as test url, ",(0,n.kt)("strong",{parentName:"p"},"HTTPS")," and any other types of scheme url will not be supported.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"{proxies} and {policy-path} can be used together in the same proxy group")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can use a profile url as policy path url, only proxies defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"[Proxy]")," section will be used")))}d.isMDXComponent=!0}}]);