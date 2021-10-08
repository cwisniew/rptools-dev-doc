"use strict";(self.webpackChunkmaptool_dev_doc=self.webpackChunkmaptool_dev_doc||[]).push([[790],{46490:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return m},assets:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),l=a(63366),i=(a(67294),a(3905)),s=["components"],o={slug:"lib-token-uri",title:"Lib:Tokens URI access",authors:["craigw"],tags:["MapTool","lib:tokens","MapTool 1.10"]},r=void 0,m={permalink:"/blog/lib-token-uri",editUrl:"https://github.com/cwisniew/rptools-dev-doc/edit/main/blog/2021-10-02-lib-token-uri/index.mdx",source:"@site/blog/2021-10-02-lib-token-uri/index.mdx",title:"Lib:Tokens URI access",description:"Issues with HTML/CSS/JavaScript Prior to MapTool 1.10",date:"2021-10-02T00:00:00.000Z",formattedDate:"October 2, 2021",tags:[{label:"MapTool",permalink:"/blog/tags/map-tool"},{label:"lib:tokens",permalink:"/blog/tags/lib-tokens"},{label:"MapTool 1.10",permalink:"/blog/tags/map-tool-1-10"}],readingTime:4.19,truncated:!1,authors:[{name:"Craig Wisniewski",title:"MapTool Architect / Lead Developer",url:"https://github.com/cwisniew",key:"craigw"}],nextItem:{title:"Player Databases",permalink:"/blog/player-databases"}},p={authorsImageUrls:[void 0]},c=[{value:"Issues with HTML/CSS/JavaScript Prior to MapTool 1.10",id:"issues-with-htmlcssjavascript-prior-to-maptool-110",children:[]},{value:"Changes in MapTool 1.10",id:"changes-in-maptool-110",children:[{value:"Allowing URI access",id:"allowing-uri-access",children:[]},{value:"Macro functions",id:"macro-functions",children:[]},{value:"Uses for lib:// URIs",id:"uses-for-lib-uris",children:[]},{value:"Relative paths",id:"relative-paths",children:[]}]}],u={toc:c};function d(e){var t=e.components,o=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"issues-with-htmlcssjavascript-prior-to-maptool-110"},"Issues with HTML/CSS/JavaScript Prior to MapTool 1.10"),(0,i.kt)("p",null,"Prior to MapTool 1.10 creating HTML pages is unnecessary cumbersome.\nTo create HTML dialogs, frames, and overlays you use the following roll options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[frame(): { } ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[frame5(): { } ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[dialog(): { } ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[dialog5(): { } ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[overlay(): { } ]"))),(0,i.kt)("p",null,"The HTML is included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]")," which means it has to processed by the MTScript parser. This has both benefits and drawbacks.\nThe main benefit is that you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]")," to execute MTScript elements as a form of templating the HTML, for example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[frame("test): {\n    [r: getName() ]\n}]\n')),(0,i.kt)("p",null,"The major drawback is that everything included must be able to pass through the MTScript parser, often this will not be the case especially where CSS or JavaScript are concerned.\nYou can work around this problem by using macros functions to fetch text from macro, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[frame5("test"): {\n    [r: getMacroCommand(number(getMacroIndexes("test/test.html"))) ]\n}]\n')),(0,i.kt)("h2",{id:"changes-in-maptool-110"},"Changes in MapTool 1.10"),(0,i.kt)("p",null,"In MapTool 1.10 there is a change that allows you to access properties and macros on Lib:Tokens via a URI of the form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lib://",(0,i.kt)("em",{parentName:"li"},"<","token name",">"),"/macro/",(0,i.kt)("em",{parentName:"li"},"<","macro name",">")),(0,i.kt)("li",{parentName:"ul"},"lib://",(0,i.kt)("em",{parentName:"li"},"<","token name",">"),"/property/",(0,i.kt)("em",{parentName:"li"},"<","property name",">"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default the text fetched using the URI is cached, if you make changes to the content it will not be reflected until you restart MapTool. To work around this you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib=false")," query string as show in examples later on in this post."))),(0,i.kt)("p",null,"Where ",(0,i.kt)("em",{parentName:"p"},"<","token name",">")," is the name of the Lib:Token after the Lib: prefix, for example Lib:HTMLTest would be HTMLTest"),(0,i.kt)("h3",{id:"allowing-uri-access"},"Allowing URI access"),(0,i.kt)("p",null,'There are no special requirements on ownership for the Lib:Token, to allow URI access to Lib:Token properties and macros, anyone will be able to access these values via a URI if the "Allow URI Access" flag needs is set, you can do this via the edit token dialog.\n',(0,i.kt)("img",{alt:"Allow URI access",src:a(4774).Z})),(0,i.kt)("p",null,"or the ",(0,i.kt)("inlineCode",{parentName:"p"},"setAllowsURIAccess()")," macro function."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Reserved names")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("details",null,(0,i.kt)("summary",null,'Some names are reserved for future internal usage and you will not be able set the "Allows URI Access" flags on Lib:Tokens'," "),(0,i.kt)("div",null,"Reserved names are: Lib tokens with the following names (after the lib: part)",(0,i.kt)("ul",null,(0,i.kt)("li",null," rptools "),(0,i.kt)("li",null," maptool "),(0,i.kt)("li",null," maptools (because people often call it maptools) "),(0,i.kt)("li",null," internal "),(0,i.kt)("li",null," builtin "),(0,i.kt)("li",null," standard ")),"Lib tokens starting with the following names (after the lib: part)",(0,i.kt)("ul",null,(0,i.kt)("li",null," rptools. "),(0,i.kt)("li",null," maptool. "),(0,i.kt)("li",null," maptools. (because people often call it maptools) "),(0,i.kt)("li",null," tokentool. "),(0,i.kt)("li",null," net.rptools. "),(0,i.kt)("li",null," internal. "),(0,i.kt)("li",null," _ "),(0,i.kt)("li",null," builtin. "),(0,i.kt)("li",null," standard. "),(0,i.kt)("li",null," . ")))))),(0,i.kt)("h3",{id:"macro-functions"},"Macro functions"),(0,i.kt)("p",null,'Two new MTScript functions have been added that allow you to set or get the "Allows URI access" flag for a token. These can only be run from a trusted macro.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAllowsURIAccess([<token name>], [<map name>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAllowsURIAccess(<0|1>, [<token name>, [<map name>])"))),(0,i.kt)("h3",{id:"uses-for-lib-uris"},"Uses for lib:// URIs"),(0,i.kt)("p",null,"Lib:// URIs are useful for both CSS and JavaScript inclusion in HTML files, creating frames/dialogs/overlays with HTML, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"js.evalURI()")," MTScript functions."),(0,i.kt)("h4",{id:"including-javascript-and-css-in-html-using-a-lib-uri"},"Including JavaScript and CSS in HTML using a lib:// URI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <link\n      rel="stylesheet"\n      href="lib://HTMLTest/macro/test/test.css?cachelib=false"\n    />\n  </head>\n  <body>\n    <h1>This is a test</h1>\n    <div id="test1" />\n    <script src="lib://HTMLTest/macro/test/test.js?cachelib=false"><\/script>\n    <img src="asset://87f4e9bfa4f1f3db250b57b3599fa4e9" />\n  </body>\n</html>\n')),(0,i.kt)("p",null,"This will include CSS from the macro called test/test.css and the JavaScript from a macro called test/test.js on the Lib:HTMLTest token."),(0,i.kt)("h4",{id:"creating-framesdialogsoverlays-using-a-lib-uri"},"Creating frames/dialogs/overlays using a lib:// URI"),(0,i.kt)("p",null,"There are also new MTScript functions that allow you to create frames/dialogs/overlays by passing a lib:// URI which contains the HTML.\nThese are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.dialog(<dialog name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.dialog5(<dialog name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.frame(<frame name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.frame5(<frame name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.overlay(<overlay name>, <libURI>, [<options>])"))),(0,i.kt)("p",null,'The optional "options" argument contains the same arguments and format as the frame/dialog/overlay ',(0,i.kt)("a",{parentName:"p",href:"https://wiki.rptools.info/index.php/frame5_%28roll_option%29"},"roll options")),(0,i.kt)("h3",{id:"relative-paths"},"Relative paths"),(0,i.kt)("p",null,"When using the following functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.dialog5(<dialog name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.frame5(<frame name>, <libURI>, [<options>])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html.overlay(<overlay name>, <libURI>, [<options>])"))),(0,i.kt)("p",null,"The URLs in the HTML file can also be specified using relative paths, for example\nGiven "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Relative paths macros",src:a(26878).Z})),(0,i.kt)("p",null,"If the HTML is loaded from ",(0,i.kt)("inlineCode",{parentName:"p"},"test/test.html")," you can use relative paths for the other macros as below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n    <link rel="stylesheet" href="./test.css?cachelib=false">\n</head>\n<body>\n    <h1>This is a test</h1>\n    <div id=\'test1\'/>\n    <script>\n        document.getElementById(\'test1\').innerHTML = \'...This is a test!\';\n    <\/script>\n    <script src="./test.js?cachelib=false"><\/script>\n    <img src="asset://87f4e9bfa4f1f3db250b57b3599fa4e9"/>\n    <a href="./test2.html">test2</a>\n</body>\n')),(0,i.kt)("p",null,"This will even work for hyperlink navigation as seen in the link to ",(0,i.kt)("inlineCode",{parentName:"p"},"./test2.htlm")," aboove"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Relative Path Navigation Example",src:a(31876).Z})),(0,i.kt)("h4",{id:"running-javascript-from-a-lib-uri"},"Running JavaScript from a lib:// URI"),(0,i.kt)("p",null,"In addition to being able to include JavaScript in HTML via the ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag, lib:// URIs can be used to execute JavaScript via the ",(0,i.kt)("inlineCode",{parentName:"p"},"js.evalUI()"),"macro function."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"js.evalURI(<namespace>, <libURI>, [arg1, ... argN])"))),(0,i.kt)("p",null,"Where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"<","namespace",">")," is the namespace of the JavaScript context to run the script in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"<","libURI",">")," is the lib:// URI to fetch the JavasScript from."),(0,i.kt)("li",{parentName:"ul"},"[arg1, ... argN]"," is a comma-separated list of arguments to be passed to the script")))}d.isMDXComponent=!0},4774:function(e,t,a){t.Z=a.p+"assets/images/allow-uri-access-1372842f2232a8148e58124a73a4d872.png"},31876:function(e,t,a){t.Z=a.p+"assets/images/relative-path-example-6ac3231c2ab1ad2846cf2994705e9859.gif"},26878:function(e,t){t.Z="data:image/png;base64,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"}}]);