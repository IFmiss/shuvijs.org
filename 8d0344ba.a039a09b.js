(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),c=n(9),r=(n(0),n(145)),s={id:"getting-started",title:"\u5feb\u901f\u4e0a\u624b"},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}],b={id:"getting-started",title:"\u5feb\u901f\u4e0a\u624b",description:"## \u4ecb\u7ecd",source:"@site/../docs/getting-started.md",permalink:"/shuvijs.org/docs/getting-started",editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/website/../docs/getting-started.md",sidebar:"docs",next:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/shuvijs.org/docs/directory-structure"}},l={rightToc:i,metadata:b},d="wrapper";function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(r.b)("p",null,"shuvi \u662f\u524d\u7aef\u5e94\u7528\u5f00\u53d1\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6574\u5408\u4e86\u73b0\u4ee3\u5de5\u5177\u94fe\uff0c\u4e13\u6ce8\u4e8e\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c\u548c\u6548\u7387\u3002"),Object(r.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(r.b)("p",null,"\u521b\u5efa\u9879\u76ee"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mkdir my-app & cd my-app\nnpm init -y\n")),Object(r.b)("p",null,"\u5b89\u88c5 shuvi"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install shuvi@beta\n")),Object(r.b)("p",null,"\u521b\u5efa ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages")," \u76ee\u5f55, \u5e76\u751f\u6210\u4e00\u4e2a hello world \u9875\u9762"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mkdir -p src/pages\ncat <<EOF >> /src/pages/index.js\nexport default () => <div>hello, world</div>\nEOF\n")),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," \u79cd\u6dfb\u52a0\u811a\u672c"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev": "shuvi dev",\n    "build": "shuvi build",\n    "serve": "shuvi serve"\n  }\n}\n')),Object(r.b)("p",null,"\u542f\u52a8\u9879\u76ee"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run dev\n")))}p.isMDXComponent=!0}}]);