"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[7348],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=m(n),s=o,d=f["".concat(c,".").concat(s)]||f[s]||p[s]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_position:1},a="// Comment",l={unversionedId:"profile-format/comment",id:"profile-format/comment",title:"// Comment",description:"Currently only following comment format is supported:",source:"@site/docs/profile-format/comment.md",sourceDirName:"profile-format",slug:"/profile-format/comment",permalink:"/docs/profile-format/comment",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/comment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/profile-format/overview"},next:{title:"#!MANAGED-CONFIG",permalink:"/docs/profile-format/managed_config"}},c={},m=[{value:"Line begin with <code>;</code>",id:"line-begin-with-",level:3},{value:"Line begin with <code>//</code>",id:"line-begin-with--1",level:3},{value:"Line begin with <code>#</code>",id:"line-begin-with--2",level:3},{value:"Comment at the end of the line",id:"comment-at-the-end-of-the-line",level:3}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-comment"},(0,o.kt)("inlineCode",{parentName:"h1"},"// Comment")),(0,o.kt)("p",null,"Currently only following comment format is supported:"),(0,o.kt)("h3",{id:"line-begin-with-"},"Line begin with ",(0,o.kt)("inlineCode",{parentName:"h3"},";")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},";this is a comment\n")),(0,o.kt)("h3",{id:"line-begin-with--1"},"Line begin with ",(0,o.kt)("inlineCode",{parentName:"h3"},"//")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"// this is also a comment\n")),(0,o.kt)("h3",{id:"line-begin-with--2"},"Line begin with ",(0,o.kt)("inlineCode",{parentName:"h3"},"#")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# comment again\n")),(0,o.kt)("h3",{id:"comment-at-the-end-of-the-line"},"Comment at the end of the line"),(0,o.kt)("p",null,"You can also add comment to the end of the line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"http-listen = 0.0.0.0:1234 // don't use port number less than 1024\n")))}p.isMDXComponent=!0}}]);