(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9458],{78705:function(e,t,n){var r=n(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},92102:function(e,t,n){var r=n(92632);e.exports={MDXRenderer:r}},92632:function(e,t,n){var r=n(3515),a=n(861),i=n(38416),l=n(7071),o=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=n(67294),s=n(64983).mdx,p=n(76948).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=l(e,o),c=p(t),d=m.useMemo((function(){if(!n)return null;var e=u({React:m,mdx:s},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(i)))}),[n,t]);return m.createElement(d,u({},i))}},25679:function(e,t,n){"use strict";var r=n(63366),a=n(67294),i=n(93723),l=["childImageSharp","extension","publicURL","alt"];t.Z=function(e){var t=e.childImageSharp,n=e.extension,o=e.publicURL,c=e.alt,u=(0,r.Z)(e,l);return t||"svg"!==n?a.createElement(i.G,Object.assign({image:t.gatsbyImageData},u,{alt:c})):a.createElement("div",{className:"old-gatsby-image-wrapper"},a.createElement("img",{src:o,alt:c}))}},33754:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(1597),i=n(51174),l=n.n(i),o=n(64423).default.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin-bottom: 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 1.5rem;\n                img{\n                    padding-left: 1rem;\n                    width: 3rem;\n                    filter: invert(",");\n\n                }\n            }\n        }\n        \n        .feature-image{\n            /* margin: 2rem auto; */\n            object-fit: contain;\n            justify-content: center; \n            \n            img{\n                max-height: 25rem;\n                /* max-width: 31rem; */\n                display: block;\n                margin-left: auto; \n                margin-right: auto; \n            }   \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;\n            align-items: center;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"],(function(e){return e.theme.meshInterfaceLogoFilter})),c=n(25679),u=n(46319),m=function(e,t){return r.createElement(r.Fragment,null,t?r.createElement(a.Link,{to:"/community/members/"+l()(e.name)},r.createElement("span",null,e.name)):r.createElement("span",null,e.name))},s=function(e){var t=e.category,n=e.title,i=e.img,s=e.feedlink,p=e.subtitle,d=e.author,g=e.thumbnail,M=e.superscript,f=e.date,y=!1;d&&(y=(0,a.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==d.name})));return r.createElement(o,null,r.createElement("div",{className:"page-header"},g&&r.createElement("div",{className:"feature-image"},r.createElement(c.Z,Object.assign({},g,{imgStyle:{objectFit:"contain"},alt:n}))),r.createElement("h1",{className:"page-title"},n,"  ",r.createElement("sup",{className:"supscript"},M),i&&s&&r.createElement("a",{href:s,target:"_blank",rel:"noreferrer"}," ",r.createElement("img",{src:i,alt:"RSS Feed"})," ")," "),p&&r.createElement("h3",null,p),t&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:t},r.createElement(a.Link,{to:"/blog/category/"+l()(t)},r.createElement("span",null,t)))),d&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),"Layer5 Team"===d.name?r.createElement("p",null,r.createElement("img",{src:u.Z,alt:"Layer5",width:"85"})," Team"):r.createElement("p",null,m(d,y)))),f&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,f)))),!t&&d&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,m(d,y)),f&&r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,f)))))}},37028:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(67294),a=n(64423),i=n(26052),l=n(9357),o=n(63941),c=n(42308),u=n(35085),m=n(38001),s=n(92102),p=a.default.div.withConfig({displayName:"LabSinglePageWrapperstyle__LabSinglePageWrapper",componentId:"sc-1dm41xm-0"})(["\n    margin-bottom: 4rem;\n\tdisplay: block;\n\n\t.backBtn {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\tmargin-top: 5rem;\n\t\tmargin-left: 5rem;\n\t\tfont-weight: 600;\n\t\ta {\n\t\t\tdisplay: flex;\n\t\t    color: ",";\n\t\t    &:hover{\n\t\t        color: ",";\n\t\t\t}\n\t\t\t\n\t\t\th4 {\n\t\t\t\tline-height: 1.75rem;\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\tfont-size: 1.75rem;\n\t\t\t}\n\t\t}\n\t\t\n\t}\n    .join-community {\n        margin: 5rem 0rem;\n    }\n    .join-community_text-and_button {\n\t\tmargin: 0 4rem; \n        text-align: center;\n        h1{\n            margin-top: 1rem;\n        }\n        p{\n            margin: auto;\n            margin-top: 1rem;\n        }\n        button{\n            margin-top: 1.5rem;\n        }\n    }\n\t@media screen and (max-width: 992px) {\n\t\t.backBtn {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 25rem) {\n\t\t.backBtn {\n\t\t\tleft: 0rem;\n\t\t}\n\t}\n\t.cardContent {\n\t\tmargin: 0 5rem;\n\t}\n\t#katacoda-scenario {\n\t\tmin-height: 45rem;\n\t}\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.linkColor})),d=n(78705),g=n(1597),M=n(33754),f=n(63689),y=function(e){var t=e.frontmatter,n=e.body;return r.useEffect((function(){if(void 0!==typeof window){var e=document.createElement("script");return e.setAttribute("src","//katacoda.com/embed.js"),document.body.appendChild(e),function(){document.body.removeChild(e)}}}),[]),r.createElement(p,null,r.createElement("div",{className:"backBtn"},r.createElement(g.Link,{to:"/learn/service-mesh-labs"},r.createElement(d.O,null),r.createElement("h4",null," All Labs"))),r.createElement(M.Z,{title:t.title}),r.createElement("div",{className:"cardContent"},r.createElement(s.MDXRenderer,null,n)),r.createElement("div",{className:"join-community"},r.createElement("div",{className:"join-community_text-and_button"},r.createElement("h1",null,"Use Service Mesh Patterns"),r.createElement("p",null,"Service mesh patterns help you get the most out of any service mesh. Each pattern can be used as a template and is customizable."),r.createElement(f.default,{primary:!0,title:"Visit Service Mesh Patterns website",url:"https://service-mesh-patterns.github.io/service-mesh-patterns/",external:"true"}))))},I=function(e){var t=e.data,n=(0,r.useState)(),s=n[0],p=n[1];return r.createElement(a.ThemeProvider,{theme:"dark"===s?m.k:m.Z},r.createElement(i.Z,null,r.createElement(u.Z,null),r.createElement(l.Z,{title:t.mdx.frontmatter.title}),r.createElement(o.Z,{theme:s,themeSetter:function(e){p(e)}}),r.createElement(y,{frontmatter:t.mdx.frontmatter,body:t.mdx.body}),r.createElement(c.default,null)))}},51174:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},46319:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYuOSA5My43OCI+PHRpdGxlPmxheWVyNS1ncmF5LW5vLXRyaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIxMzUuODQgMCA5OC4zMyA5My43OCAxMTkuNzIgOTMuNzggMTQ1LjIyIDI4LjE0IDE2My4zOSA3NS4wMyAxMzIuMjIgNzUuMDMgMTI1LjIyIDkzLjc4IDE5Mi4xMSA5My43OCAxNTQuNTkgMCAxMzUuODQgMCIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMjE4LjU4IDMyLjgzIDE5NS4xNCAwIDE3MS42OSAwIDIwOS4yIDU2LjI3IDIwOS4yIDkzLjc4IDIyNy45NiA5My43OCAyMjcuOTYgNTYuMjcgMjY1LjQ3IDAgMjQyLjMyIDAgMjE4LjU4IDMyLjgzIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMuNTYgMTQuNzcgMjczLjU2IDE4Ljc2IDI3My41NiAzNy41MSAyNzMuNTYgNjAuMzkgMjczLjU2IDkzLjc4IDM2Mi40NiA5My43OCAzNjIuNDYgNzUuMDMgMjkyLjMyIDc1LjAzIDI5Mi4zMiA2MC4zOSAyOTIuMzIgNTYuMjcgMzQ2LjIxIDU2LjI3IDM0Ni4yMSAzNy41MSAyOTIuMzIgMzcuNTEgMjkyLjMyIDE4Ljc2IDM2Mi40NiAxOC43NiAzNjIuNDYgMCAyNzMuNTYgMCAyNzMuNTYgMTQuNzciIHN0eWxlPSJmaWxsOiMzYzQ5NGYiLz48cGF0aCBkPSJNMzkyLjkyLDE3Ljg4SDQ0MVYzNy4zOUgzOTguMTJsLjE4LDE3Ljg4aDEyLjg3bDM0LDM4LjUxaDIzLjE2bC0zNC0zOC41MWgxMy4yN2ExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlYxNC41N0ExNC41NywxNC41NywwLDAsMCw0NDcuNTksMGgtNzNWOTMuNzhoMTguNzZaIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9IjUzNi42MSIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTc2LjksNTkuOTNWNTIuNTVjMC04LjQ4LTcuMTQtMTUuMzYtMTUuOTQtMTUuMzZoLTU5LjZWMzIuMzRINDc5LjU0djIxaDc1LjU0djYuNTdaIiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBvbHlnb24gaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBwb2ludHM9IjUwMS4zNiAyNi41MiA1MDEuMzYgMTcuNzkgNTMwLjU4IDE3Ljc5IDUzMC41OCAwIDQ3OS41NCAwIDQ3OS41NCAyNi41MiA1MDEuMzYgMjYuNTIiIHN0eWxlPSJmaWxsOiNhMGFhYWEiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik01NTUuMDgsNjUuNjRWNzZINTI1Ljg2VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIgc3R5bGU9ImZpbGw6I2EwYWFhYSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTQ5OS42MSw2Ni42MVY3NmgyMC4yMlY5My43OGgtMjZjLTguMzEsMC0xNS02LjQ4LTE1LTE0LjQ4VjY2LjYxWiIgc3R5bGU9ImZpbGw6IzgyOGM4YyIvPjwvc3ZnPg=="},63405:function(e,t,n){var r=n(73897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var r=n(6015),a=n(69617);function i(t,n,l){return a()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},38416:function(e,t,n){var r=n(64062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},69617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(63405),a=n(79498),i=n(86116),l=n(42281);e.exports=function(e){return r(e)||a(e)||i(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},95036:function(e,t,n){var r=n(18698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},64062:function(e,t,n){var r=n(18698).default,a=n(95036);e.exports=function(e){var t=a(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-lab-single-js-aaaeaa2b7482686094b7.js.map