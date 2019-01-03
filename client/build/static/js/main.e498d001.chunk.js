(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.30ecb1de.svg"},40:function(e,t,a){e.exports=a.p+"static/media/info_graphic.6505b75f.svg"},46:function(e,t,a){e.exports=a(78)},75:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(13),r=a.n(s),o=a(3),i=a(4),c=a(6),m=a(5),u=a(7),p=a(81),d=a(80),h=a(16),f=a(10),g=(a(62),a(79)),v=a(18),b=a.n(v),E=a(40),k=a.n(E);function y(){return l.a.createElement("div",{className:"col-lg-6 content-left"},l.a.createElement("div",{className:"content-left-wrapper"},l.a.createElement(g.a,{to:"/",id:"logo"},l.a.createElement("img",{src:b.a,alt:"",width:"49",height:"35"}),l.a.createElement("h1",{className:"title title-light"},"Buxtons Upload")),l.a.createElement("div",{id:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.buxtons.net/",target:"blank"},l.a.createElement("i",{className:"fas fa-home"}))))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{src:k.a,alt:"",className:"img-fluid"})),l.a.createElement("h2",null,"Upload Images & Files",l.a.createElement("br",null),"Quickly & Easily"),l.a.createElement("p",null,"Share images and files with us. "),l.a.createElement("a",{href:"https://www.buxtons.net/",target:"blank",className:"btn_1 rounded"},"Home Page"),l.a.createElement("a",{href:"https://tawk.to/chat/58d3b6c7f7bbaa72709c2047/default",target:"blank",className:"btn_1 rounded"},"Stuck?")),l.a.createElement("div",{className:"copy"},"All Rights Reserved. Buxtons Ltd.")))}var w=a(14),N=a(15);function x(){var e=Object(w.a)(["\n  display: ",";\n  align-items: center;\n\n  span {\n    margin: ",";\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background: ",";\n\n    &:nth-child(1) {\n      animation: "," 1s ease-in-out infinite;\n    }\n\n    &:nth-child(2) {\n      animation: "," 1s ease-in-out 0.33s infinite;\n    }\n\n    &:nth-child(3) {\n      animation: "," 1s ease-in-out 0.66s infinite;\n    }\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(w.a)(["\n  0%, 75%, 100% {\n    transform: translateY(0px)\n  } \n  25% {\n    transform: translateY(-10px)\n  }\n"]);return O=function(){return e},e}var S=Object(N.b)(O()),j=N.a.div(x(),function(e){return e.loading?"flex":"none"},function(e){return e.spaceBetween?"0 ".concat(e.spaceBetween,"px"):"0 10px"},function(e){return e.width?"".concat(e.width,"px"):"20px"},function(e){return e.height?"".concat(e.height,"px"):"20px"},function(e){return e.pColor?e.pColor:"#555"},S,S,S),I=function(e){return l.a.createElement(j,e,l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))};I.defaultProps={width:20,height:20,pColor:"#555",loading:!0,spaceBetween:10};var T=I;function _(){var e=Object(w.a)(["\n        display: flex;\n        width: 100%;\n        align-items: center;\n        flex-wrap: wrap;\n        justify-content: space-evenly;\n      "]);return _=function(){return e},e}var L=new Headers({"Access-Control-Allow-Origin":"*"}),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1},a.toastId=[],a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.refs.formInput.files.length<1)this.refs.formInput.click();else if(this.refs.formInput.files.length>this.props.FILES_LIMIT)this.notify("fileLimit","\u270b You can upload ".concat(this.props.FILES_LIMIT," files ot once"));else{for(var a=this.refs.formInput.files,n=1e6*this.props.MAX_FILE_SIZE_MB,l=0;l<a.length;l++){var s=a[l];if(s.size>=n)return this.notify("fileSize","\ud83d\uded1 File ".concat(s.name," exceeds a size limit. Currently we support files no bigger than ").concat(this.props.MAX_FILE_SIZE_MB," mb.")),this.refs.formInput.value="",void this.filesChanged()}var r=new FormData(this.refs.form);this.setState({loading:!0}),this.refs.formInput.value="",this.filesChanged(),fetch("".concat(this.props.API_ROOT,"/upload"),{method:"POST",headers:L,body:r}).then(function(e){return e.json()}).then(function(e){t.props.addLinks(e),t.setState({loading:!1})}).catch(function(e){console.error(e),t.setState({loading:!1}),alert(e.name+": "+e.message)})}}},{key:"filesChanged",value:function(){var e=this.refs.formInput.files.length;this.refs.inputText.innerHTML=e>0?"You have selected ".concat(e," file(s)."):"Drag your files here or click in this area."}},{key:"notify",value:function(e,t){f.toast.isActive(this.toastId[e])||(this.toastId[e]=f.toast.error(t,{position:f.toast.POSITION.TOP_CENTER}))}},{key:"renderButton",value:function(){if(this.state.loading){var e=N.a.div(_());return l.a.createElement(e,null,l.a.createElement(T,{pColor:"#434bdf",height:15,width:15}))}return l.a.createElement("button",{ref:"formSubmit",className:"btn_1 rounded",type:"submit"},"Upload")}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("form",{ref:"form",onSubmit:this.submit.bind(this),id:"form-upload",className:"upload-form",method:"post",encType:"multipart/form-data"},l.a.createElement("input",{ref:"formInput",onChange:this.filesChanged.bind(this),id:"form-input",type:"file",name:"somefiles",multiple:!0}),l.a.createElement("p",{ref:"inputText"},"Drag your files here or click in this area."),this.renderButton()))}}]),t}(n.Component),A=a(43),B=a.n(A),M=a(32);function P(e){navigator.clipboard?navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)}):function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}var H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={displayCopyText:!1},a.timeout=null,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"openInNewTab",value:function(e){window.open(e,"_blank").focus()}},{key:"linkClicked",value:function(e){var t=this;P(e),this.setState({displayCopyText:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){return t.setState({displayCopyText:!1})},1e3)}},{key:"render",value:function(){var e=this;return this.props.noLinks?l.a.createElement("div",{className:"card"},l.a.createElement("p",null,"Upload some files!"),l.a.createElement("div",{className:"placeholder"},l.a.createElement("img",{className:"icon-preview",src:"https://image.flaticon.com/icons/svg/1055/1055646.svg",alt:""}))):l.a.createElement(M.Motion,{defaultStyle:{x:this.props.defaultOpacity},style:{x:Object(M.spring)(1)}},function(t){return l.a.createElement("div",{className:"card",style:{opacity:"".concat(t.x)}},l.a.createElement("p",null,e.props.text),l.a.createElement("div",{className:"placeholder",onClick:function(){return e.linkClicked(e.props.link)}},l.a.createElement("img",{className:e.props.className||"icon-preview",src:e.props.imageSrc,alt:""})),l.a.createElement("div",{className:"card-btns"},l.a.createElement("div",{onClick:function(){return e.linkClicked(e.props.link)},className:"btn_1 card-btn"},l.a.createElement("i",{className:"fas fa-copy"}),e.state.displayCopyText?" Copied":""),l.a.createElement("div",{onClick:function(){return e.openInNewTab(e.props.link)},className:"btn_1 card-btn"},l.a.createElement("i",{className:"fas fa-file-download"}))))})}}]),t}(n.Component);var D=function(e){return l.a.createElement("div",{className:"row justify-content-md-center mb-4"},l.a.createElement("center",null,e.links.length>0?e.links.map(function(t,a){var n,s,r,o=t.split(".").pop(),i=function(e){var t=e.toLowerCase(),a={pdf:"https://image.flaticon.com/icons/svg/337/337946.svg",doc:"https://image.flaticon.com/icons/svg/337/337932.svg",docx:"https://image.flaticon.com/icons/svg/337/337932.svg",xls:"https://image.flaticon.com/icons/svg/337/337958.svg",xlsx:"https://image.flaticon.com/icons/svg/337/337958.svg",ppt:"https://image.flaticon.com/icons/svg/337/337949.svg",pptx:"https://image.flaticon.com/icons/svg/337/337949.svg",jpg:"https://image.flaticon.com/icons/svg/337/337940.svg",jpeg:"https://image.flaticon.com/icons/svg/337/337940.svg",png:"https://image.flaticon.com/icons/svg/337/337948.svg",svg:"https://image.flaticon.com/icons/svg/337/337954.svg",gif:"https://image.flaticon.com/icons/svg/337/337936.svg",cad:"https://image.flaticon.com/icons/svg/337/337926.svg",eps:"https://image.flaticon.com/icons/svg/337/337933.svg",bmp:"https://image.flaticon.com/icons/svg/337/337925.svg",zip:"https://image.flaticon.com/icons/svg/337/337960.svg",html:"https://image.flaticon.com/icons/svg/337/337937.svg",xml:"https://image.flaticon.com/icons/svg/337/337959.svg",css:"https://image.flaticon.com/icons/svg/337/337928.svg",txt:"https://image.flaticon.com/icons/svg/337/337956.svg",sql:"https://image.flaticon.com/icons/svg/337/337953.svg",php:"https://image.flaticon.com/icons/svg/337/337947.svg",js:"https://image.flaticon.com/icons/svg/337/337941.svg",jsx:"https://image.flaticon.com/icons/svg/337/337941.svg",mp3:"https://image.flaticon.com/icons/svg/337/337944.svg",psd:"https://image.flaticon.com/icons/svg/337/337951.svg",ai:"https://image.flaticon.com/icons/svg/337/337923.svg",tif:"https://image.flaticon.com/icons/svg/337/337955.svg",tiff:"https://image.flaticon.com/icons/svg/337/337955.svg",avi:"https://image.flaticon.com/icons/svg/337/337924.svg",mov:"https://image.flaticon.com/icons/svg/337/337943.svg",cdr:"https://image.flaticon.com/icons/svg/337/337927.svg",raw:"https://image.flaticon.com/icons/svg/337/337952.svg",iso:"https://image.flaticon.com/icons/svg/337/337939.svg",mpg:"https://image.flaticon.com/icons/svg/337/337945.svg",wmv:"https://image.flaticon.com/icons/svg/337/337957.svg",flv:"https://image.flaticon.com/icons/svg/337/337935.svg",dll:"https://image.flaticon.com/icons/svg/337/337930.svg",midi:"https://image.flaticon.com/icons/svg/337/337942.svg",dat:"https://image.flaticon.com/icons/svg/337/337929.svg",indd:"https://image.flaticon.com/icons/svg/337/337938.svg",aac:"https://image.flaticon.com/icons/svg/337/337922.svg",dmg:"https://image.flaticon.com/icons/svg/337/337931.svg","3ds":"https://image.flaticon.com/icons/svg/337/337921.svg",fla:"https://image.flaticon.com/icons/svg/337/337934.svg"};return["png","jpg","jpeg","svg"].includes(t),a[t]?a[t]:"https://image.flaticon.com/icons/svg/136/136509.svg"}(o),c=t.split("/").pop();return n=c.length>15?c.split(".")[0].substring(0,10)+"... ."+o:c,i?(s="icon-preview",r=i):(s="img-preview",r=t),l.a.createElement(H,{key:B()(),link:t,text:n,imageSrc:r,className:s,defaultOpacity:e.added>a?0:1})}):l.a.createElement(H,{noLinks:!0}),l.a.createElement("br",null),e.allLinksBtn?l.a.createElement(g.a,{to:"/links",className:"btn_1"},"View all links"):""))},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={currentBlockText:"1",currentBlockStat:"10",totalText:"10",totalStat:"100"},a.currentBlockStatPrev="0",a.totalStatPrev="0",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchRepoInfo()}},{key:"fetchRepoInfo",value:function(){var e=this;fetch("".concat(this.props.API_ROOT,"/stats"),{method:"POST"}).then(function(e){return e.json()}).then(function(t){var a=Math.floor(80*t.currentBlockSize/(1e3*t.maxBlockSizeMB))+20;e.setState(Object(h.a)({},e.state,{currentBlockText:t.currentBlock,currentBlockStat:a,totalText:t.totalUploaded/1e3})),console.log("Got blocks stats",t)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"block-stats"},l.a.createElement("div",{className:"stats-outer"},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":this.statecurrentBlockStat,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(this.state.currentBlockStat,"%")}},l.a.createElement("p",null,"Current block:"),l.a.createElement("p",null,this.state.currentBlockText)))),l.a.createElement("div",{className:"stats-outer"},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.totalStat,"%")},"aria-valuenow":this.state.totalStat,"aria-valuemin":"0","aria-valuemax":"100"},l.a.createElement("p",null,"Total uploaded:"),l.a.createElement("p",{id:"totalText"},this.state.totalText),l.a.createElement("p",null,"mb")))))}}]),t}(n.Component);function F(){return l.a.createElement("header",{className:"header-user"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 header-left-col"},l.a.createElement("p",null,"Welcome back, user")),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{id:"social"},l.a.createElement(g.a,{to:"/"},l.a.createElement("p",{style:{marginRight:"5px"}},"Account"),l.a.createElement("i",{className:"fas fa-user"})))))))}function G(){var e=JSON.parse(localStorage.getItem("links"));return e||(e=[]),e}var U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={links:[],recentLinks:[],lastAddedAmount:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.lastAddedAmount===t.lastAddedAmount}},{key:"componentWillMount",value:function(){this.localLinksToState()}},{key:"saveToLocal",value:function(e){var t=JSON.stringify(e);localStorage.setItem("links",t)}},{key:"localLinksToState",value:function(){var e=G().reverse(),t=e.slice(0,3);this.setState({links:e,recentLinks:t})}},{key:"addLinks",value:function(e){this.setState({lastAddedAmount:e.length});var t=G().concat(e);this.saveToLocal(t),this.localLinksToState(),this.setState({lastAddedAmount:0})}},{key:"render",value:function(){var e=this.props.settings,t=e.FILES_LIMIT,a=e.MAX_FILE_SIZE_MB,n=e.API_ROOT;return l.a.createElement("div",{className:"col-lg-6 content-right"},this.state.recentLinks.length?l.a.createElement(F,null):"",l.a.createElement(C,{addLinks:this.addLinks.bind(this),FILES_LIMIT:t,MAX_FILE_SIZE_MB:a,API_ROOT:n}),l.a.createElement(D,{links:this.state.recentLinks,allLinksBtn:this.state.links>this.state.recentLinks,added:this.state.lastAddedAmount}),l.a.createElement(R,{API_ROOT:n}))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={settings:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e,t=(e=window.location.origin).includes("localhost")?"http://localhost:4000":"https://morejust.store"===e?"https://morejust.herokuapp.com":e;this.setState({settings:Object(h.a)({},this.state.settings,{API_ROOT:t})}),this.fetchInitialInfo(t)}},{key:"fetchInitialInfo",value:function(e){var t=this;fetch("".concat(e,"/initialInfo"),{method:"POST"}).then(function(e){return e.json()}).then(function(e){t.setState({settings:Object(h.a)({},t.state.settings,e)}),console.log("SetUp initial settings",t.state.settings)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid full-height"},l.a.createElement("div",{className:"row row-height"},l.a.createElement(y,null),l.a.createElement(U,{settings:this.state.settings}),l.a.createElement(f.ToastContainer,{transition:f.Zoom,hideProgressBar:!0,newestOnTop:!0,draggable:!1,pauseOnHover:!1})))}}]),t}(n.Component),q=a(33),Y=a.n(q);a(75);function J(){return l.a.createElement("header",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 header-left-col"},l.a.createElement(g.a,{to:"/"},l.a.createElement("img",{src:b.a,alt:"",width:"49",height:"35"}),l.a.createElement("h1",{className:"title"},"More Just Store"))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{id:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/morejust/store",target:"blank"},l.a.createElement("i",{className:"fab fa-github"})))))))))}function Z(){return l.a.createElement("footer",{className:"clearfix"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"\xa9 2018 More Just Store"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.a,{to:"/",className:"animated_link"},"Home")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/docs",className:"animated_link"},"Docs")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/morejust/store",target:"blank",className:"animated_link"},"GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"#product-hunt",target:"blank",className:"animated_link"},"Product Hunt")))))}var X=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Y.a.highlightAll()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(J,null),l.a.createElement("main",{role:"main",className:"container"},l.a.createElement("h2",{className:"mt-5"},"Installation"),l.a.createElement("p",{className:"lead"},"Here is step-by-step guide on how to create your own Free & Unlimited Cloud Storage."),l.a.createElement("span",{className:"h6",role:"img","aria-label":"First"},"1\ufe0f\u20e3"),l.a.createElement("p",{style:{display:"inline"}},l.a.createElement("span",{className:"h5 bold"},"Create GitHub token")),l.a.createElement("ul",{style:{marginLeft:"22px",marginTop:"10px"}},l.a.createElement("li",null,"1. Register on GitHub and go to ",l.a.createElement("a",{href:"https://github.com/settings/tokens/new",target:"blank"},"Settings -> Developer Settings -> Personal Access Tokens -> Generate new token")),l.a.createElement("br",null),l.a.createElement("li",null,"2. Give it a random name, select public repo and scroll below and smash Generate. You don't have to add any additional rights if you want to store your files on public repositories."),l.a.createElement("br",null),l.a.createElement("img",{className:"shadow doc-img",src:"https://raw.githubusercontent.com/morejust/orgb1/ee1ec84391449b16ed643d3b629b6f0b/Screenshot%202018-12-27%20at%2014.40.19.png",alt:""}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"3. Copy generated GitHub token and go to the next part: Deployment.")),l.a.createElement("span",{className:"h6",role:"img","aria-label":"Second"},"2\ufe0f\u20e3"),l.a.createElement("p",{style:{display:"inline"}},l.a.createElement("span",{className:"h5 bold"},"Deployment on Heroku")),l.a.createElement("ul",{style:{marginLeft:"22px",marginTop:"10px"}},l.a.createElement("li",null,"Heroku allows to create free small machines and deploy from GitHub in one click. You will need to have a Heroku account to proceed, so please ",l.a.createElement("a",{href:"https://signup.heroku.com/login",target:"blank"},"register"),"."),l.a.createElement("br",null),l.a.createElement("li",null,"1. Press the button below to deploy with one click"),l.a.createElement("br",null),l.a.createElement("a",{style:{marginLeft:"22px"},href:"https://heroku.com/deploy?template=https://github.com/morejust/store/tree/heroku-deploy",target:"blank"},l.a.createElement("img",{src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"2. Choose any app name you like."),l.a.createElement("br",null),l.a.createElement("img",{src:"https://raw.githubusercontent.com/morejust/orgb1/1c5eff2238a0abcf387205626bf804f2/Create-heroku.png",alt:"",className:"shadow doc-img"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"3. Click the ",l.a.createElement("span",{className:"bold"},"'Manage App'")," at the bottom of the page."),l.a.createElement("br",null),l.a.createElement("li",null,"4. Click ",l.a.createElement("span",{className:"bold"},"'Settings'")," and ",l.a.createElement("span",{className:"bold"},"'Reveal Config Vars'"),"."),l.a.createElement("br",null),l.a.createElement("li",null,"5. Set the key to ",l.a.createElement("span",{className:"bold"},"GITHUB_TOKEN")," and the ",l.a.createElement("span",{className:"bold"},l.a.createElement("i",null,"value"))," to the generated on the previous steps GitHub token."),l.a.createElement("br",null),l.a.createElement("img",{src:"https://raw.githubusercontent.com/morejust/orgb1/c9cbc1a17746e52d1accb9d14e0f9b8b/Screenshot%202018-12-26%20at%2002.20.27.png",alt:"",className:"shadow doc-img"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"6. Smash 'Open app' and enjoy!")),l.a.createElement("iframe",{style:{marginLeft:"22px"},className:"shadow",width:"560",height:"315",src:"https://www.youtube.com/embed/Srz5RMnDv6s",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube Video Installation"}),l.a.createElement("hr",null),l.a.createElement("h2",{className:"mt-5"},"Optional Environment Variables"),l.a.createElement("p",{className:"lead"},"Here is the list of all possible config variables that can be changed."),l.a.createElement("p",null,"Except ",l.a.createElement("span",{className:"bold"},"GITHUB_TOKEN")," that is required and was set earlier. ",l.a.createElement("br",null),l.a.createElement("br",null)," If you decide to use this config variables, you should specify them as environment variables."),l.a.createElement("ul",{style:{marginLeft:"22px",marginTop:"10px"}},l.a.createElement("li",null,"1. ",l.a.createElement("span",{className:"bold"},"BLOCK_SIZE_MB")," - max block (github repo) size. Default value = 1000"),l.a.createElement("br",null),l.a.createElement("li",null,"2. ",l.a.createElement("span",{className:"bold"},"MAX_FILE_SIZE_MB")," - max file size that can be uploaded. Default value = 100"),l.a.createElement("br",null),l.a.createElement("li",null,"3. ",l.a.createElement("span",{className:"bold"},"ORGANIZATION_NAME")," - used to create blocks in the organization Github account, not in your private account. Default value - not set."),l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("h2",{className:"mt-5"},"API Endpoints"),l.a.createElement("p",{className:"lead"},"There is an API Endpoint ",l.a.createElement("code",null,"POST /file")," which can be used to upload files from anywhere outside our app."),l.a.createElement("p",null,"This Endpoint receives only a ",l.a.createElement("code",null,"SINGLE")," file, so in order to upload more than 1 file - use ",l.a.createElement("code",null,"for")," loop"),l.a.createElement("p",{style:{marginBottom:"10px"}},"Node.JS example:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-js"},V.node)),l.a.createElement("br",null),l.a.createElement("p",{style:{marginBottom:"10px"}},"Python example:"),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-python"},V.python)),l.a.createElement("br",null),l.a.createElement("p",null,"Back to ",l.a.createElement(g.a,{to:"/"},"the main page")," to use service online.")),l.a.createElement(Z,null))}}]),t}(n.Component),V={node:"const request = require('request');\nconst fs = require('fs');\nconst path = require('path');\n\n// const API_URL = 'http://localhost:4000/file'; // Local EndPoint\nconst API_URL = 'https://morejust.herokuapp.com/file';\n\nvar r = request.post(API_URL, function optionalCallback (err, httpResp, fileLink) {\nif (err) {\n  return console.error('Upload failed:', err);\n}\nconsole.log('Upload successful! Link:', fileLink);\n});\nvar form = r.form();\n\n// To load file from current folder\nform.append('file', fs.createReadStream(path.join(__dirname, 'image.png')));\n\n// To load file anywhere from computer\n// form.append('file', fs.createReadStream('/Users/viktorkirillov/Documents/GitHub/store/image.png'));\n",python:"import requests\n\n# url = 'http://localhost:4000/file' #Local EndPoint\nurl = 'https://morejust.herokuapp.com/file'\n\n# To load file from current folder\nfiles = {'file': open('image.png', 'rb')}\n\n# To load file amywhere from computer\n# files = {'file': open('/Users/viktorkirillov/Documents/GitHub/store/image.png', 'rb')}\n\nr = requests.post(url, files=files)\nprint(r.text)\n"};function W(){var e=G().reverse();return l.a.createElement("div",null,l.a.createElement(J,null),l.a.createElement("main",{role:"main",className:"container"},l.a.createElement("h3",{className:"mt-3 mb-4"},"Your files:"),l.a.createElement(D,{links:e})),l.a.createElement(Z,null))}Y.a.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/i,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};var K=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refs.ym.innerHTML='\n    \x3c!-- Yandex.Metrika counter --\x3e\n    <script type="text/javascript" >\n       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n       ym(51443497, "init", {\n            id:51443497,\n            clickmap:true,\n            trackLinks:true,\n            accurateTrackBounce:true,\n            webvisor:true\n       });\n    <\/script>\n    <noscript><div><img src="https://mc.yandex.ru/watch/51443497" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\n    \x3c!-- /Yandex.Metrika counter --\x3e\n    '}},{key:"render",value:function(){return l.a.createElement(p.a,{basename:""},l.a.createElement("div",null,l.a.createElement("div",{ref:"ym"}),l.a.createElement(d.a,{path:"/",exact:!0,component:z}),l.a.createElement(d.a,{path:"/docs",exact:!0,component:X}),l.a.createElement(d.a,{path:"/links",exact:!0,component:W})))}}]),t}(n.Component);r.a.render(l.a.createElement(K,null),document.querySelector("#root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.e498d001.chunk.js.map
