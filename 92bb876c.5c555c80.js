(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(88)),c={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},i={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Create Full Stack (CFS) generates a boilerplate Todo app for you, integrating the tools you select (view demo). It provides the glue between the libraries and frameworks. No more stitching together random blog posts guessing about best practices. Build scalable applications on a solid foundation. CFS works on macOS, and Linux.",source:"@site/docs/getting_started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/getting_started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Libraries and Frameworks",permalink:"/docs/libraries_and_frameworks"},next:{title:"Folder Structure",permalink:"/docs/folder_structure"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run",id:"run",children:[]},{value:"Development URLs",id:"development-urls",children:[]},{value:"Setup VSCode (recommended IDE/Editor)",id:"setup-vscode-recommended-ideeditor",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create Full Stack (CFS) generates a boilerplate Todo app for you, integrating the tools you select (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://demo-full-stack.com/"}),"view demo"),"). It provides the glue between the libraries and frameworks. No more stitching together random blog posts guessing about best practices. Build scalable applications on a solid foundation. CFS works on macOS, and Linux."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://yarnpkg.com/getting-started/install#global-install"}),"Yarn")," >= v1.12.0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"Docker")," >= 1.25.5"),Object(o.b)("li",{parentName:"ul"},"Node >= v12.10",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can use ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tj/n"}),"n")," to switch Node versions")))),Object(o.b)("p",null,"Check versions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn --version\ndocker-compose --version\nnode --version\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"CFS support for ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," will be added when ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.npmjs.org/post/626173315965468672/npm-v7-series-beta-release-and-semver-major"}),"npm v7")," is stable, which contains the required ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/npm/rfcs/blob/latest/accepted/0026-workspaces.md"}),"workspaces feature"),"."))),Object(o.b)("h2",{id:"run"},"Run"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn create full-stack my-full-stack\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Follow the instructions generated in ",Object(o.b)("inlineCode",{parentName:"strong"},"my-full-stack/development.html")," to complete the setup.")," Then try spinning up the full stack locally."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-full-stack\nyarn start\n")),Object(o.b)("h2",{id:"development-urls"},"Development URLs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," brings up the development stack locally. The following URLs are available if the given services are selected."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"web: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(o.b)("li",{parentName:"ul"},"mobile (expo devtools): ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:19002"}),"http://localhost:19002")),Object(o.b)("li",{parentName:"ul"},"backend (hasura): ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8080/v1/graphql"}),"http://localhost:8080/v1/graphql")),Object(o.b)("li",{parentName:"ul"},"backend (apollo-server-express): ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8080/graphql"}),"http://localhost:8080/graphql"))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/auth"}),"auth")," is enabled, expect:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"A redirect to your ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://auth0.com/docs/universal-login"}),"Auth0 login page")," from web"),Object(o.b)("li",{parentName:"ul"},"An authorization error from the backend APIs")))),Object(o.b)("h2",{id:"setup-vscode-recommended-ideeditor"},"Setup ",Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://code.visualstudio.com/"}),"VSCode")," (recommended IDE/Editor)"),Object(o.b)("p",null,"When opening the project in VSCode, click on the dialog to install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions"}),"recommended extensions")," which automatically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Format on save"),Object(o.b)("li",{parentName:"ul"},"Lint on save"),Object(o.b)("li",{parentName:"ul"},"Understand Dockerfiles"),Object(o.b)("li",{parentName:"ul"},"Spellcheck")))}b.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);