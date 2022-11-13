"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[5354],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,h=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8141:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const o={slug:"why-develop-surfboard",title:"Why develop Surfboard",authors:["surfboard"],tags:["surfboard"]},i=void 0,l={permalink:"/blog/why-develop-surfboard",editUrl:"https://github.com/getsurfboard/manual/edit/main/blog/2022-04-06-why-develop-surfboard.mdx",source:"@site/blog/2022-04-06-why-develop-surfboard.mdx",title:"Why develop Surfboard",description:"Before",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"surfboard",permalink:"/blog/tags/surfboard"}],readingTime:2.04,hasTruncateMarker:!1,authors:[{name:"Surfboard",title:"Developer of Surfboard",url:"https://t.me/getsurfboard",imageURL:"https://github.com/getsurfboard.png",key:"surfboard"}],frontMatter:{slug:"why-develop-surfboard",title:"Why develop Surfboard",authors:["surfboard"],tags:["surfboard"]}},s={authorsImageUrls:[void 0]},u=[{value:"Before",id:"before",level:3},{value:"First Version",id:"first-version",level:3},{value:"Inspiration",id:"inspiration",level:3},{value:"Nowadays",id:"nowadays",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"before"},"Before"),(0,a.kt)("p",null,"In the beginning, I was a loyal user of ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.github.shadowsocks"},"Shadowsocks"),", and I used the app almost 24 hours a day, enjoying the freedom to browse the Internet without being locked into a circle that others have set up for you."),(0,a.kt)("p",null,"One day, I found that when Shadowsocks is turned on, all UDP packets sent by the device will be discarded (I believe that shadowsocks no longer has this problem). This results in that I need to manually close shadowsocks every time before playing the game, and after the game is over, I need to manually open shadowsocks again. This is indeed a little inconvenient."),(0,a.kt)("h3",{id:"first-version"},"First Version"),(0,a.kt)("p",null,"So, an idea came to my mind, why not make a VPN application according to my own needs? Thus, the first version of the simple application was born, which I named 'SS_NG', inspired by 'Shadowsocks + Next Generation'. Its user interface and functionality are simple and crude, but it does exactly what it needs to do: forward traffic using the shadowsocks protocol and avoid blocking UDP traffic. It soon replaced the Shadowsocks app on my device as the 24/7 VPN app on my device."),(0,a.kt)("h3",{id:"inspiration"},"Inspiration"),(0,a.kt)("p",null,"Later, I bought a MacBook Pro and an iPhone and started using the Surge app. Since I started using Surge, I have been impressed by this app, Surge has the following advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Beautifully designed"),(0,a.kt)("li",{parentName:"ul"},"Lots of features"),(0,a.kt)("li",{parentName:"ul"},"Stable and smooth"),(0,a.kt)("li",{parentName:"ul"},"Well-tailored configuration rules"),(0,a.kt)("li",{parentName:"ul"},"Multi-platform support"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Although a large number of excellent similar applications have emerged on the iOS platform, in my opinion, Surge is still the best VPN application for Apple platform in my opinion."),(0,a.kt)("h3",{id:"nowadays"},"Nowadays"),(0,a.kt)("p",null,"Later, my mobile device was switched back to the Android platform again, but the Android platform did not have a VPN application compatible with the Surge configuration, so I picked up the old SS_NG project and rebuilt it according to the design idea of \u200b\u200bSurge. , the new application has the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compatible with Surge's configuration format"),(0,a.kt)("li",{parentName:"ul"},"Rich chart/record viewing function"),(0,a.kt)("li",{parentName:"ul"},"Support remote node group/rule group/agent group switching"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"I named it 'Surfboard', the first three letters are the same as Surge, and the surfboard is also related to surfing the Internet. At the same time, this application is no longer a private entertainment project of mine, but a public application product that can be used by all users who want to surf freely."))}d.isMDXComponent=!0}}]);