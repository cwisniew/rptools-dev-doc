"use strict";(self.webpackChunkmaptool_dev_doc=self.webpackChunkmaptool_dev_doc||[]).push([[5707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={slug:"add-on-libraries-old",title:"MapTool Add-On Libraries (Old)",authors:["craigw"],tags:["MapTool","MapTool 1.11","Libraries"]},s=void 0,c={permalink:"/blog/add-on-libraries-old",editUrl:"https://github.com/cwisniew/rptools-dev-doc/edit/main/blog/2021-10-19-add-on-libraries-old/index.mdx",source:"@site/blog/2021-10-19-add-on-libraries-old/index.mdx",title:"MapTool Add-On Libraries (Old)",description:"Note: This post describes a work in progress so details may change due to feedback. This is also",date:"2021-10-19T00:00:00.000Z",formattedDate:"October 19, 2021",tags:[{label:"MapTool",permalink:"/blog/tags/map-tool"},{label:"MapTool 1.11",permalink:"/blog/tags/map-tool-1-11"},{label:"Libraries",permalink:"/blog/tags/libraries"}],readingTime:4.825,truncated:!1,authors:[{name:"Craig Wisniewski",title:"MapTool Architect / Lead Developer",url:"https://github.com/cwisniew",key:"craigw"}],prevItem:{title:"MapTool Add-On Libraries",permalink:"/blog/add-on-libraries"},nextItem:{title:"Lib:Tokens URI access",permalink:"/blog/lib-token-uri"}},p={authorsImageUrls:[void 0]},d=[{value:"Format of add-on library files",id:"format-of-add-on-library-files",children:[]},{value:"format of the configuration file",id:"format-of-the-configuration-file",children:[]},{value:"MTScript macros",id:"mtscript-macros",children:[{value:"mts_properties.json file",id:"mts_propertiesjson-file",children:[]}]},{value:"public/ directory",id:"public-directory",children:[]},{value:"New MTScript functions",id:"new-mtscript-functions",children:[]},{value:"Things not yet implemented but will be (so dont create issues for these or I will just close them)",id:"things-not-yet-implemented-but-will-be-so-dont-create-issues-for-these-or-i-will-just-close-them",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This post describes a work in progress so details may change due to feedback. This is also\nthe reason that the documentation is a bit sparse. Before creating any issues check the bottom of the\npost for things still to be implemented. Also the current code doesn't do much checking for the format\nof the config/property files this will be improved."),(0,a.kt)("h1",{id:"add-on-libraries"},"Add-On Libraries"),(0,a.kt)("p",null,"MapTool 1.11 introduces add-on libraries which are intended to be an easier\nto work with replacement for Lib:Tokens while also offering a lot more functionality.\nLib:Tokens will still function the way that they currently do in MapTool 1.11 and future\nversions, but will not be getting a lot of the new features that add-on libraries will have,\nso it is recommended that framework developers transition to add-on libraries if supporting\nMapTool 1.11 and above."),(0,a.kt)("p",null,"I have a very sparse and contrived add-on library I have been using for testing available at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cwisniew/test-maptool-add-on-lib"},"test-maptool-add-on-lib")),(0,a.kt)("h2",{id:"format-of-add-on-library-files"},"Format of add-on library files"),(0,a.kt)("p",null,"Add-On libraries can be shared in a .mtlib file. This file is a zip file with a specific\nstructure and content. You can import these libraries with the File -> Import Add-On Library menu option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"library.json            <-- Configuration information for the add-on library\nmts_properties.json     <-- Properties for macro script functions in library\nlibrary/                <-- Content of the library\nlibrary/public          <-- Content of the library acessable via `lib:// URI`\nlibrary/mtscript        <-- MTSCript files\nlibrary/mtscript/public <-- MTSCript files that can be called via `[macro(): ]` outside of the library.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"library/public is only exposed via lib:// URI if ",(0,a.kt)("inlineCode",{parentName:"li"},"allowsUriAccess")," is set (see configuration file)"),(0,a.kt)("li",{parentName:"ul"},"MTScript macros must all end with the file extension .mts to be recognised."),(0,a.kt)("li",{parentName:"ul"},"Only MTScript files in ",(0,a.kt)("inlineCode",{parentName:"li"},"content/mtscript/public")," can be called using ",(0,a.kt)("inlineCode",{parentName:"li"},"[macro():]")," from outside of the add-on")),(0,a.kt)("h2",{id:"format-of-the-configuration-file"},"format of the configuration file"),(0,a.kt)("p",null,"The library.json configuration file is a json file with the following structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test-library",\n  "version": "1.0.0",\n  "website": "www.rptools.net",\n  "gitUrl": "github.com/RPTools/test-library",\n  "authors": [ "RPTools Team" ],\n  "license": "GPL 3.0",\n  "namespace": "net.rptools.maptool.test-library",\n  "description": "My new test library for stuff",\n  "shortDescription": "test library",\n  "allowsUriAccess": true\n}\n')),(0,a.kt)("h2",{id:"mtscript-macros"},"MTScript macros"),(0,a.kt)("p",null,"The name of the file becomes that macroname for ",(0,a.kt)("inlineCode",{parentName:"p"},"[macro(): ]")," the namespace of the add-on library\nis used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," portion.  For example:"),(0,a.kt)("p",null,"Add-On libraries support both public and private macro functions. Public macro functions must\nreside in the mtscript/public and can be called from anywhere (chat, other add-ons, lib:tokens, macro buttons).\nYou can call them using the following syntax\n",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("mtscript1@net.rptools.maptool.test-library")]')," executes MTScript macro in the file\n",(0,a.kt)("inlineCode",{parentName:"p"},"content/mtscript/public/mtscript1.mts"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'The "public/" is ommited from the macro name when calling it.\nYou can also use subdirectories to organise your macros and would call them like\n','[macro("subdir/script@net.rptools.maptool.test-library")]'))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@this")," shorthand can also be used for calling a macro from within the same add-on, similar to how it works\nfor lib:Tokens. For example\n",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("mtscript2@this")]')),(0,a.kt)("p",null,'Macro script files that are not in the "public/" directory can only be called from within the add-on itself.\nGiven a library with the namespace ',(0,a.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," with the following files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mtsscript/func1.mts\nmtsscript/public/func2.mts\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'[macro("func1@net.mylib.addon")]')," can be called from anywhere, but ",(0,a.kt)("inlineCode",{parentName:"p"},'[macro("func2@net.mylib.addon")]'),"\ncan only be called from a macro that is on the ",(0,a.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," add-on."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'Since the "public/" is not required, if you have to files with the same name excluding the "public/" part, for example\nmtscript/public/funct1.mts\nmtscript/funct1.mts'),(0,a.kt)("p",{parentName:"div"},"Then only the one in public/ will be able to be executed, you will not be able to call the other macro"))),(0,a.kt)("p",null,"The above works not just with `",(0,a.kt)("inlineCode",{parentName:"p"},"[macro():]"),"  but the other places you would expect it to as well such as\ndefineFunction() for user defined functions and macro links."),(0,a.kt)("h3",{id:"mts_propertiesjson-file"},"mts_properties.json file"),(0,a.kt)("p",null,"The mts_properties.json file contains property information about macro scripts, it is not required and currrently\nonly allows you to set properties used in macro links."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "properties": [ \n    {\n      "filename": "public/auto_exec.mts",\n      "autoExecute": true,\n      "description": "Auto executable macro link"\n    },\n    {\n      "filename": "public/myUDF.mts",\n      "description": "My Test UDF in a drop in lib."\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"filename is the path of the file for the MacroScript function (excluding mtscript/)."),(0,a.kt)("li",{parentName:"ul"},"autoExecute determines if a macro link created for this macro will be auto executable or not."),(0,a.kt)("li",{parentName:"ul"},"description is the description that will appear in the UDF listing, unlike Lib:Token this is just a plain string and not evaluated if it contains ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("h2",{id:"public-directory"},"public/ directory"),(0,a.kt)("p",null,"The contents of this directory are exposed as a lib:// URI  as long as the allowsUriAccess is set to true in the configuration file.\nThe public directory part of the filename is discared, for example\npublic/myhttml.html -> lib://net.myaddons.addon1/myhtml.html"),(0,a.kt)("p",null,'You an add images to this directory and use src="lib://" in image tags in HTML.\nIt will eventually work with audio (probably aleady does but I haven\'t tested it yet so not claining it will yet :) )'),(0,a.kt)("h2",{id:"new-mtscript-functions"},"New MTScript functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"library.listAddOnLibraries()            Lists the add on libraries"),(0,a.kt)("li",{parentName:"ul"},"library.getInfo(namespace)              Gets information about a library (either add on or lib:token)"),(0,a.kt)("li",{parentName:"ul"},"library.listTokenLibraries(namespace)   Lists the Lib:tokens in the campaign"),(0,a.kt)("li",{parentName:"ul"},"library.getContents(namespace)          Lists the contents of a library (trusted)"),(0,a.kt)("li",{parentName:"ul"},"library.removeAddOn(namepsace)          Removes an add-on (trusted) (used for testing only, probably wont make it into release)"),(0,a.kt)("li",{parentName:"ul"},"library.removeAllAddOns()               Removes all add-ons (trusted) (used for testing only, probably wont make it into release)")),(0,a.kt)("h2",{id:"things-not-yet-implemented-but-will-be-so-dont-create-issues-for-these-or-i-will-just-close-them"},"Things not yet implemented but will be (so dont create issues for these or I will just close them)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"libProperty acces, including listing, setting, gettting"),(0,a.kt)("li",{parentName:"ul"},"No UI yet "),(0,a.kt)("li",{parentName:"ul"},"No onCampaignLoad etc events yet."),(0,a.kt)("li",{parentName:"ul"},"There is currenlty no way to access files not in public/ or mtscript/"),(0,a.kt)("li",{parentName:"ul"},"Many file types like text/markdown etc are allowed in the library but the functions to use them dont yet exist"),(0,a.kt)("li",{parentName:"ul"},"Expanding of JavaScript API which will make this much more useful will be part of another change.")))}u.isMDXComponent=!0}}]);