(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(88)),i={id:"troubleshooting",title:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"EADDRINUSE, Address already in use",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/troubleshooting.md",version:"current",sidebar:"someSidebar",previous:{title:"Migrations",permalink:"/docs/migrations"}},l=[{value:"EADDRINUSE, Address already in use",id:"eaddrinuse-address-already-in-use",children:[]},{value:"Hooks can only be called inside the body of a function component",id:"hooks-can-only-be-called-inside-the-body-of-a-function-component",children:[]},{value:"Auth0 login hangs on Android virtual device",id:"auth0-login-hangs-on-android-virtual-device",children:[]},{value:"FatalError: relation &quot;todos&quot; already exists",id:"fatalerror-relation-todos-already-exists",children:[]},{value:"pulumi:providers: no resource plugin found in the workspace or on your $PATH, install the plugin",id:"pulumiproviders-no-resource-plugin-found-in-the-workspace-or-on-your-path-install-the-plugin",children:[]},{value:"Something is already running on port 3000",id:"something-is-already-running-on-port-3000",children:[]},{value:"Can&#39;t connect to AWS Fargate service",id:"cant-connect-to-aws-fargate-service",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"eaddrinuse-address-already-in-use"},"EADDRINUSE, Address already in use"),Object(o.b)("p",null,"Kill all node processes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pkill node\n")),Object(o.b)("h2",{id:"hooks-can-only-be-called-inside-the-body-of-a-function-component"},"Hooks can only be called inside the body of a function component"),Object(o.b)("p",null,"React in both ",Object(o.b)("inlineCode",{parentName:"p"},"packages/mobile/package.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"packages/web/package.json")," need to be the same version since they're shared in Yarn Workspaces (unless you add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/blog/2018/02/15/nohoist/"}),"nohoist"),")."),Object(o.b)("h2",{id:"auth0-login-hangs-on-android-virtual-device"},"Auth0 login hangs on Android virtual device"),Object(o.b)("p",null,"Your Android virtual device (AVD) must use Android 11. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/expo/expo/issues/9845"}),"expo/issues/9845")),Object(o.b)("h2",{id:"fatalerror-relation-todos-already-exists"},'FatalError: relation \\"todos\\" already exists'),Object(o.b)("p",null,"Reset your docker Postgres volume. This wipes any existing data."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker rm <project name>_postgres_1\ndocker volume rm <project name>_db_data\n")),Object(o.b)("h2",{id:"pulumiproviders-no-resource-plugin-found-in-the-workspace-or-on-your-path-install-the-plugin"},"pulumi:providers: no resource plugin found in the workspace or on your \\$PATH, install the plugin"),Object(o.b)("p",null,"This can occur locally or in continuous deployment (CD) with GitHub actions."),Object(o.b)("p",null,"If locally, run the command in the error message to install the plugin."),Object(o.b)("p",null,"If on GitHub actions, you must setup and deploy the production stack locally first before GitHub actions can deploy. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pulumi/pulumi/issues/2097"}),"pulumi/issues/2097")),Object(o.b)("p",null,"To deploy the production stack run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd packages/pulumi-aws\npulumi stack select production\npulumi up\n")),Object(o.b)("h2",{id:"something-is-already-running-on-port-3000"},"Something is already running on port 3000"),Object(o.b)("p",null,"Check which service is running on the port."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo lsof -i tcp:3000\n")),Object(o.b)("p",null,"Kill it (ex. node)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pkill node\n")),Object(o.b)("h2",{id:"cant-connect-to-aws-fargate-service"},"Can't connect to AWS Fargate service"),Object(o.b)("p",null,"If either of the following URLs returns an empty response:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hasura backend: ",Object(o.b)("inlineCode",{parentName:"li"},"https://hasura.[YOUR DOMAIN].com/v1/graphql")),Object(o.b)("li",{parentName:"ul"},"Apollo Server Express backend: ",Object(o.b)("inlineCode",{parentName:"li"},"https://server.[YOUR DOMAIN].com/graphql"))),Object(o.b)("p",null,"Refresh Fargate and the associated listener and target group. To do that, comment out the Fargate resource in ",Object(o.b)("inlineCode",{parentName:"p"},"packages/pulumi-aws/index.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'--- a/packages/pulumi-aws/index.ts\n+++ b/packages/pulumi-aws/index.ts\n@@ -33,18 +33,18 @@ const { connectionString } = new Rds("server-db", {\ndbUsername,\ndbPassword,\n});\n-new Fargate(path.basename(serverPath), {\n\n- certificateArn,\n- domain: serverDomain,\n- image: awsx.ecs.Image.fromDockerBuild("image", {\n- context: "../..",\n- dockerfile: `${serverPath}/Dockerfile`,\n- }),\n- env: {\n- DATABASE_URL: connectionString,\n- CORS_ORIGIN: webUrl,\n- },\n  -});\n  +// new Fargate(path.basename(serverPath), {\n  +// certificateArn,\n  +// domain: serverDomain,\n  +// image: awsx.ecs.Image.fromDockerBuild("image", {\n  +// context: "../..",\n  +// dockerfile: `${serverPath}/Dockerfile`,\n  +// }),\n  +// env: {\n  +// DATABASE_URL: connectionString,\n  +// CORS_ORIGIN: webUrl,\n  +// },\n  +// });\n')),Object(o.b)("p",null,"Then run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pulumi up --yes\n")),Object(o.b)("p",null,"Undo the changes above in ",Object(o.b)("inlineCode",{parentName:"p"},"packages/pulumi-aws/index.ts")," then again run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pulumi up --yes\n")))}u.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);