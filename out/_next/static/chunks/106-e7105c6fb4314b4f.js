(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{2639:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var r=n(6042),a=n(9396),o=n(5893),i=n(7294),s=n(2512),l=n(1163),c=n(7568),u=n(797),d=n(655),p=n(9473),m=n(4129),f=(n(8233),n(2222)),g=n(9299);function h(e){var t=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=new Image;t.src=e,t.onload=function(){return r(t)}}),[e]),n}(e);return(0,i.useMemo)((function(){if(!t)return null;var e=document.createElement("canvas");e.width=t.height,e.height=t.width;var n=e.getContext("2d");return n.translate(e.width/2,e.height/2),n.rotate(90*Math.PI/180),n.drawImage(t,-t.width/2,-t.height/2),e.toDataURL()}),[t])}g.GlobalWorkerOptions.workerSrc="/pdf.worker.js";var x="/images/corrupted.png";function v(e,t){return e((0,m.uH)(t.EMPTY_FILE.message)),e((0,m.tQ)("ERR_EMPTY_FILE")),x}var j=function(){var e=(0,c.Z)((function(e,t,n,r,a,o){var i,s,l,c,u,p,m,f;return(0,d.__generator)(this,(function(d){switch(d.label){case 0:return i=e.size,"",l="fr"===r?"fr-FR":""==r?"en":r,s=new Intl.NumberFormat(l,{notation:"compact",style:"unit",unit:"byte",unitDisplay:"narrow"}).format(i),c=s,e.size?[3,1]:(v(a,o),[3,7]);case 1:return d.trys.push([1,6,,7]),"image/jpeg"!==e.type&&"image/png"!==e.type?[3,3]:((u=new Image).src=URL.createObjectURL(e),[4,new Promise((function(e){u.onload=function(){c+=" - ".concat(u.width," x ").concat(u.height),e()}}))]);case 2:return d.sent(),[3,5];case 3:return"application/pdf"!==e.type?[3,5]:(p=URL.createObjectURL(e),[4,(0,g.getDocument)(p).promise]);case 4:m=d.sent(),f=m.numPages||0,c+=" - ".concat("ar"===r&&1===f?"":f+" ").concat(f>1?t:n),URL.revokeObjectURL(p),e.size||v(a,o),d.label=5;case 5:return[3,7];case 6:return d.sent(),e.size||v(a,o),[3,7];case 7:return[2,c]}}))}));return function(t,n,r,a,o,i){return e.apply(this,arguments)}}();function b(e,t,n){return w.apply(this,arguments)}function w(){return(w=(0,c.Z)((function(e,t,n){var r,a,o,i,s;return(0,d.__generator)(this,(function(l){switch(l.label){case 0:return r=URL.createObjectURL(e),e.size?[3,1]:[2,v(t,n)];case 1:return l.trys.push([1,5,,6]),[4,(0,g.getDocument)(r).promise];case 2:return[4,l.sent().getPage(1)];case 3:if(a=l.sent(),1.5,o=a.getViewport({scale:1.5}),i=document.createElement("canvas"),!(s=i.getContext("2d")))throw new Error("Canvas context not available.");return i.height=o.height,i.width=o.width,[4,a.render({canvasContext:s,viewport:o}).promise];case 4:return l.sent(),[2,i.toDataURL()];case 5:return l.sent(),t((0,m.uH)(n.FILE_CORRUPT.message)),[2,x];case 6:return[2]}}))}))).apply(this,arguments)}var N=function(e,t){return".jpg"===e||t.asPath.includes("merge-pdf")};var E=function(e,t,n,r){for(var a=function(e){var a,l=o[e]||null;t=t.replace(".","").toUpperCase();var c=(null===(a=l.name.split(".")[1])||void 0===a?void 0:a.toUpperCase())||"",u=["ppt","pptx","doc","docx","xls","xlsx","html","htm","jpg","pdf"];if(!l||!l.name)return r((0,m.uH)(n.FILE_CORRUPT.message)),{v:!1};if(!l.type)return console.log(l),r((0,m.uH)(n.NOT_SUPPORTED_TYPE.message)),{v:!1};if(!i.includes(l.type)||!u.includes(c.toLowerCase())){console.log("file => ",u,c.toLowerCase(),u.includes(c.toLowerCase()));var d=n.NOT_SUPPORTED_TYPE.types[t]||n.NOT_SUPPORTED_TYPE.message;return r((0,m.uH)(d)),{v:!1}}if(l.size>s)return r((0,m.uH)(n.FILE_TOO_LARGE.message)),{v:!1};if(!l.size)return console.log("file.size",l.size),r((0,m.uH)(n.EMPTY_FILE.message)),r((0,m.tQ)("ERR_EMPTY_FILE")),{v:!1};if(l.type.startsWith("image/")){var p=new FileReader;return p.readAsDataURL(l),p.onload=function(){var e=new Image;e.src=p.result,e.onerror=function(){return r((0,m.uH)(n.INVALID_IMAGE_DATA.message)),!1}},{v:!0}}},o=Array.from(e),i=["application/pdf","text/html","image/jpeg","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint","application/vnd.ms-excel"],s=52428800,l=0;l<o.length;l++){var c=a(l);if("object"===(0,f.Z)(c))return c.v}return!0},_=n(6968),y=n(8354),R=function(e){var t=e.index,n=e.imageUrls,r=e.setImageUrls,a=e.extension,s=e.errors,l=n[t],c=h(l.imageUrl),d=((0,p.v9)((function(e){return e.tool})),(0,p.I0)()),f=(0,i.useState)([]),g=f[0],x=f[1];(0,i.useCallback)((function(){if(c){var e=(0,u.Z)(n);e[t].imageUrl=c,r(e)}}),[t,n,r,c]);return(0,i.useEffect)((function(){var e=document.querySelector(".upload-btn input");e&&x(Array.from(e.files))}),[]),(0,o.jsx)("div",{className:"action-div d-flex ".concat(".html"==a?"justify-content-end":"justify-content-between"),children:(0,o.jsx)("button",{className:"btn btn-light",onClick:function(){var e=(0,u.Z)(n);e.splice(t,1);g.filter((function(e){return e.name!==l.file.name}));E(g,a,s,d)&&d((0,m.Aj)()),r(e),console.log(g)},children:(0,o.jsx)(y.Z,{className:"icon hero-icon"})})})},T=n(7891),U=function(e){var t=e.imageUrls,n=e.index,i=e.setImageUrls,s=e.provided,l=e.toolTipSizes,c=e.extension,u=e.errors;return(0,o.jsxs)("div",(0,a.Z)((0,r.Z)({className:"drag-element-img","data-tooltip-id":"image_tooltip_".concat(n),"data-tooltip-content":l[n],"data-tooltip-place":"top"},s.dragHandleProps),{children:[(0,o.jsx)(R,{extension:c,imageUrls:t,index:n,setImageUrls:i,errors:u}),(0,o.jsx)("bdi",{children:(0,o.jsx)(T.u,{id:"image_tooltip_".concat(n)})}),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("img",{className:"img-fluid-custom object-fit-cover border rounded",src:t[n].imageUrl,alt:"Selected file ".concat(n),draggable:!1})}),(0,o.jsx)("p",{className:"text-center",children:t[n].file.name})]}))},F=function(e){var t=e.index,n=e.imageUrl,i=e.imageUrls,s=e.file,l=e.toolTipSizes,c=e.isDraggable,u=e.provided,d=e.errors,p=e.extension,m=e.setImageUrls;return(0,o.jsxs)("div",(0,a.Z)((0,r.Z)({className:"card item","data-tooltip-id":"item-tooltip-".concat(t),"data-tooltip-content":l[t],"data-tooltip-place":"top"},c?u.dragHandleProps:{}),{children:[(0,o.jsx)("bdi",{children:(0,o.jsx)(T.u,{id:"item-tooltip-".concat(t)})}),(0,o.jsx)(R,{extension:p,imageUrls:i,setImageUrls:m,index:t,errors:d}),(0,o.jsxs)("div",{className:"card-body d-flex flex-column",children:[(0,o.jsx)("img",{className:"img-fluid-custom object-fit-contain rounded item-img",src:n,alt:"Selected file ".concat(t),draggable:!1}),(0,o.jsx)("p",{className:"text-center",children:s.name})]})]}))},P=n(5948),I=function(e){e.store;var t=e.errors,n=e.extension,i=e.imageUrls,s=e.setImageUrls,c=e.toolTipSizes,u=(e.setToolTipSizes,(0,l.useRouter)());(0,p.I0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(P.Z5,{onDragEnd:function(e){e.destination&&N(n,u)},children:(0,o.jsx)(P.bK,{droppableId:"imageUrls",direction:"horizontal",children:function(e,l){return(0,o.jsxs)("div",(0,a.Z)((0,r.Z)({className:"display-file ".concat(l.isDraggingOver?"dragging-over":"")},e.droppableProps),{ref:e.innerRef,children:[i.map((function(e,l){var d=e.file,p=e.imageUrl;return(0,o.jsx)(P._l,{draggableId:d.name,index:l,isDragDisabled:!N(n,u),children:function(e,m){return(0,o.jsx)("div",(0,a.Z)((0,r.Z)({},e.draggableProps),{ref:e.innerRef,className:"drag-element ".concat(m.isDragging?"dragging":""),style:(0,r.Z)({},e.draggableProps.style),children:".jpg"===n?(0,o.jsx)(U,{imageUrls:i,index:l,provided:e,setImageUrls:s,toolTipSizes:c,extension:n,errors:t}):(0,o.jsx)(F,{extension:n,file:d,imageUrl:p,imageUrls:i,index:l,isDraggable:N(n,u),provided:e,setImageUrls:s,snapshot:m,toolTipSizes:c,errors:t})}))}},d.name)})),e.placeholder]}))}})})})},L=function(e){var t=e.loader_text;return(0,o.jsxs)("div",{className:"loader d-flex justify-content-center align-items-center",children:[(0,o.jsx)(_.Z,{as:"span",animation:"grow",role:"status","aria-hidden":"true"})," ",t]})},Z=function(e){var t=e.extension,n=e.pages,r=e.page,a=e.lang,s=e.errors,f=e.edit_page,g=e.fileInput,h=(0,p.I0)(),x=(0,i.useState)([]),v=x[0],w=x[1],N=(0,i.useState)(!0),_=N[0],y=N[1],R=(0,i.useState)([]),T=R[0],U=R[1],F=[],P=(0,p.v9)((function(e){return e.tool})),Z=((0,l.useRouter)(),g.current);Z&&(F=Array.from(Z.files)),(0,i.useEffect)((function(){0==F.length&&Z&&(F=Array.from(Z.files));var e=E(F,t,s,h);"ERR_EMPTY_FILE"==P.errorCode&&F.length>0&&h((0,m.Aj)()),(e||F.length>0&&"ERR_EMPTY_FILE"==P.errorCode)&&h((0,m.Aj)());F.length>2&&h((0,m.uH)(s.MAX_FILES_EXCEEDED.message));var o=!0,i=F.map((function(e){return j(e,n,r,a,h,s)}));Promise.all(i).then((function(e){U(e)}));var l=function(){var e=(0,c.Z)((function(){var e,n,r,a,i;return(0,d.__generator)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,4,5,6]),y(!0),t&&".pdf"===t?(e=[],n=F.map(function(){var t=(0,c.Z)((function(t){var n;return(0,d.__generator)(this,(function(r){switch(r.label){case 0:return[4,b(t,h,s)];case 1:return n=r.sent(),e.push({file:t,imageUrl:n}),[2]}}))}));return function(e){return t.apply(this,arguments)}}()),[4,Promise.all(n)]):[3,2];case 1:return l.sent(),o&&w((0,u.Z)(e)),[3,3];case 2:t&&".jpg"!==t?(r=[],F.forEach((function(e){var n=e.size?function(e){switch(e){case".docx":return"/images/word.png";case".html":return"/images/html.png";case".pptx":return"/images/powerpoint.png";case".xlsx":return"/images/excel.png";default:return"images/pdf.png"}}(t):"/images/corrupted.png";r.push({file:e,imageUrl:n})})),o&&w((0,u.Z)(r))):t&&".jpg"===t&&(a=[],F.forEach((function(e){var t=new FileReader;t.onload=function(t){var n=t.target.result;a.push({file:e,imageUrl:n}),o&&w((0,u.Z)(a))},t.readAsDataURL(e)}))),l.label=3;case 3:return[3,6];case 4:return i=l.sent(),console.error("Error processing files:",i),[3,6];case 5:return y(!1),[7];case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return l(),function(){o=!1}}),[t,P.rerender]);return(0,o.jsx)(o.Fragment,{children:_?(0,o.jsx)(L,{loader_text:f.loader_text}):(0,o.jsx)(I,{errors:s,extension:t,store:P,imageUrls:v,setImageUrls:w,setToolTipSizes:U,toolTipSizes:T})})},S=n(5001),D=function(e){var t=e.state;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"error-element alert alert-danger text-center mt-3",role:"alert",children:[(0,o.jsx)(S.Z,{className:"w-5 h-5 hide-on-ltr",viewBox:"0 0 22 22"})," ",(0,o.jsx)("bdi",{className:"d-inline-flex",children:t.errorMessage})," ",(0,o.jsx)(S.Z,{className:"w-5 h-5 hide-on-rtl",viewBox:"0 0 22 22"})]})})},C=n(4635),k=function(e){var t=e.extension,n=e.submitBtn,r=e.edit_page,a=e.pages,s=e.page,c=e.lang,u=e.errors,d=e.fileInput,f=function(e){var t=e.k;return(0,o.jsxs)("button",{className:"submit-btn btn btn-lg text-white position-relative overflow-hidden ".concat(t),onClick:function(){U((0,m.xc)(!0)),N(!1),n.current&&n.current.click()},disabled:E.errorMessage.length>0,children:[(0,o.jsx)("bdi",{children:r.action_buttons[t.replace(/-/g,"_")]})," "," ",E.isSubmitted?(0,o.jsx)(_.Z,{as:"span",animation:"grow",role:"status","aria-hidden":"true"}):null]})},g=(0,i.useState)(!0),h=g[0],x=g[1],v=function(){return x(!0)},j=function(){return x(!1)},b=(0,i.useState)(!1),w=b[0],N=b[1],E=(0,p.v9)((function(e){return e.tool})),y=(0,i.useState)([]),R=y[0],T=y[1];(0,i.useEffect)((function(){var e=d.current;return e&&T(Array.from(e.files)),h&&U((0,m.Aj)()),"ERR_EMPTY_FILE"==E.errorCode&&R.length>0&&U((0,m.Aj)()),window.addEventListener("online",v),window.addEventListener("offline",j),function(){window.removeEventListener("online",v),window.removeEventListener("offline",j)}}),[]);var U=(0,p.I0)(),F=(0,l.useRouter)().asPath.replace(/^\/[a-z]{2}\//,"").replace(/^\//,"");return(0,o.jsxs)("aside",{className:"edit-page ".concat(E.showTool?"d-none":""),children:[(0,o.jsxs)("section",{className:"edit-area",children:[(0,o.jsx)(Z,{extension:t,pages:a,page:s,lang:c,errors:u,edit_page:r,fileInput:d}),E.showErrorMessage?(0,o.jsx)(D,{state:E}):null,(0,o.jsx)("button",{className:"gear-button btn btn-light",onClick:function(){N(!w)},children:(0,o.jsx)(C.Z,{className:"w-6 h-6 me-2 gear-icon"})})]}),(0,o.jsxs)("section",{className:"options".concat(w?" expanded":""),children:[(0,o.jsx)("h5",{className:"text-uppercase",children:(0,o.jsx)("bdi",{children:r.edit_page_titles[F.replace(/-/g,"_")]})}),(0,o.jsx)(f,{k:F})]})]})},M=n(6154),A=function(){var e=(0,c.Z)((function(e,t,n,r,a,o,i){var s,l,c,u,p,f,g,h,x,v,j,b,w,N,E;return(0,d.__generator)(this,(function(n){switch(n.label){case 0:if(e.preventDefault(),a((0,m.xc)(!0)),!(c=t.current.files))return[2];for(u=new FormData,p=0;p<c.length;p++)u.append("files",c[p]);if(f="/".concat(o.endpoint),console.log("endpoint is => ",o.endpoint),o.errorMessage)return[2];u.append("compress_amount",String(o.compressPdf)),g=null===(s=c[0])||void 0===s||null===(l=s.name)||void 0===l?void 0:l.split(".").slice(0,-1).join("."),h={"application/zip":{outputFileMimeType:"application/zip",outputFileName:"PDFEquips.zip"},"application/pdf":{outputFileMimeType:"application/pdf",outputFileName:"".concat(g,".pdf")},"application/msword":{outputFileMimeType:"application/msword",outputFileName:"".concat(g,".docx")},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{outputFileMimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",outputFileName:"".concat(g,".docx")},"application/vnd.ms-excel":{outputFileMimeType:"application/vnd.ms-excel",outputFileName:"".concat(g,".xlsx")},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{outputFileMimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",outputFileName:"".concat(g,".xlsx")},"application/vnd.ms-powerpoint":{outputFileMimeType:"application/vnd.ms-powerpoint",outputFileName:"".concat(g,".pptx")},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{outputFileMimeType:"application/vnd.openxmlformats-officedocument.presentationml.presentation",outputFileName:"".concat(g,".pptx")}},n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,M.Z.post(f,u)];case 2:if(x=n.sent(),v=x.data.type||x.headers["content-type"],j=h[v]||{outputFileMimeType:v,outputFileName:""},b=j.outputFileMimeType,w=j.outputFileName,console.log("response type => ",v),console.log("response => ",x),function(e,t,n,r){var a,o=[];o.push(e.data);var i=URL.createObjectURL(new Blob(o,{type:t}));r&&r.current&&(r.current.setAttribute("download",n),r.current.href=i),null===(a=r.current)||void 0===a||a.click()}(x,b,w,r),200!==x.status)throw new Error("HTTP error! status: ".concat(x.status));return a((0,m.Aj)()),a((0,m.xc)(!1)),[3,5];case 3:return N=n.sent(),console.log(N),"ERR_NETWORK"===N.code?(a((0,m.uH)(i.ERR_NETWORK.message)),[2]):(null===(E=N.response)||void 0===E||E.data.text().then((function(e){var t=JSON.parse(e);console.error(t);var n=i[t.error],r=n?n.message:i.UNKNOWN_ERROR.message;a((0,m.uH)(r)),a((0,m.tQ)(t.error)),a((0,m.xc)(!1))})),a((0,m.xc)(!1)),[3,5]);case 4:return a((0,m.xc)(!1)),[7];case 5:return[2]}}))}));return function(t,n,r,a,o,i,s){return e.apply(this,arguments)}}(),z=n(2914),O=n(4051),H=n(1555),Y=n(5005),W=function(e){var t=e.content,n=e.web2pdftool,r=(0,i.useState)(""),a=r[0],s=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"display-3 text-center",children:(0,o.jsx)("bdi",{children:t.title})}),(0,o.jsx)("p",{className:"lead text-center",children:(0,o.jsx)("bdi",{children:t.description})}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(z.Z,{onSubmit:function(e){e.preventDefault(),console.log("Converting PDF from URL: ".concat(a))},children:(0,o.jsxs)(O.Z,{children:[(0,o.jsx)(H.Z,{xs:9,sm:10,md:11,lg:11,className:"p-0",children:(0,o.jsx)(z.Z.Group,{className:"form-group-lg w-100",children:(0,o.jsx)("input",{type:"url",id:"pdfFile",className:"form-control custom-input",placeholder:n.placeholder,style:{width:"100%"},value:a,onChange:function(e){s(e.target.value)},required:!0})})}),(0,o.jsx)(H.Z,{xs:3,sm:2,md:1,lg:1,className:"p-0",children:(0,o.jsx)(Y.Z,{type:"submit",children:n.submit_btn})})]})})})]})},B=n(9534),G=n(5299),K=function(){var e=(0,i.useState)("# hello world"),t=e[0],s=e[1],l=(0,i.useState)(null),c=l[0],u=l[1];return(0,i.useEffect)((function(){Promise.all([n.e(281),n.e(981)]).then(n.bind(n,4981)).then((function(e){u(e.default),n.e(266).then(n.t.bind(n,7422,23)),n.e(305).then(n.t.bind(n,5305,23))})).catch((function(e){console.error("Failed to load AceEditor",e)}))}),[]),(0,o.jsxs)("div",{className:"md-2pdf",children:[c&&(0,o.jsx)(c,{className:"textarea",mode:"markdown",theme:"github",name:"markdown-editor",fontSize:"16px",value:t,onChange:function(e){s(e)},editorProps:{$blockScrolling:!0},width:"100%",height:"100%",setOptions:{useWorker:!1,showLineNumbers:!0}}),(0,o.jsx)("div",{className:"react-markdown-container",children:(0,o.jsx)(G.D,{children:t,components:{code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,s=(0,B.Z)(e,["node","inline","className","children"]),l=/language-(\w+)/.exec(n||"");return!t&&l?(0,o.jsx)("div",{children:"test"}):(0,o.jsx)("code",(0,a.Z)((0,r.Z)({},s),{className:n,children:i}))}}})})]})},q=function(e){var t,n,c=e.data,u=e.tools,d=e.lang,f=e.errors,g=e.edit_page,h=e.pages,x=e.page,v=e.web2pdftool,j=(0,p.v9)((function(e){return e.tool})),b=(0,p.I0)(),w=(0,i.useState)(!1),N=w[0],_=w[1],y=(0,i.useRef)(null),R=(0,i.useRef)(null),T=(0,i.useRef)(null),U=(0,l.useRouter)(),F=null,P=U.asPath.replace(/^\/[a-z]{2}\//,"").replace(/^\//,""),I=(0,i.useCallback)((function(e){b((0,m.Fi)())}),[]),L=(0,s.uI)({onDrop:I}),Z=L.getRootProps,S=(L.getInputProps,L.isDragActive),C=j.showTool&&(null===(t=j.errorMessage)||void 0===t?void 0:t.length)>0,M=(0,i.useState)([]),z=M[0],O=M[1],H=y.current;return(0,i.useEffect)((function(){console.log(P),H&&O(Array.from(H.files));var e=function(e){e.preventDefault()};return b((0,m.gO)(P)),document.addEventListener("dragover",e),document.addEventListener("click",(function(e){return e.preventDefault()})),"ERR_EMPTY_FILE"==j.errorCode&&z.length>0&&b((0,m.Aj)()),function(){clearInterval(n),document.removeEventListener("dragover",e)}}),[N,j.rerender]),(0,o.jsx)(o.Fragment,{children:"web-to-pdf"===P?(0,o.jsx)(W,{content:c,web2pdftool:v}):"markdown-to-pdf"===P?(0,o.jsx)(K,{}):(0,o.jsxs)("div",(0,a.Z)((0,r.Z)({className:"tools-page container-fluid position-relative"},j.showTool&&Z()),{onClick:function(e){e.preventDefault()},children:[S&&(0,o.jsx)("div",{className:"overlay display-4",children:u.drop_files}),(0,o.jsxs)("div",{className:"text-center ".concat(C?"d-flex":""," flex-column tools ").concat(j.showTool?"":"d-none"),children:[(0,o.jsx)("h2",{className:"display-3",children:(0,o.jsx)("bdi",{children:c.title})}),(0,o.jsx)("p",{className:"lead",children:(0,o.jsx)("bdi",{children:c.description})}),(0,o.jsxs)("form",{onClick:function(e){e.stopPropagation()},onSubmit:function(e){return A(e,y,c,T,b,j,f)},method:"POST",encType:"multipart/form-data",children:[(0,o.jsxs)("div",{className:"upload-btn btn btn-lg text-white position-relative overflow-hidden ".concat(P),onClick:function(e){e.stopPropagation()},role:"button",children:["ar"==d?(0,o.jsxs)("bdi",{children:[u.select," ",u.files,(0,o.jsx)("span",{className:"text-uppercase",children:c.type.replace(".","")})," "]}):(0,o.jsxs)("bdi",{children:[u.select," ",(0,o.jsx)("span",{className:"text-uppercase",children:c.type.replace(".","")})," ",u.files]}),(0,o.jsx)("input",{type:"file",name:"files",accept:{".pdf":".pdf, .PDF",".pptx":".pptx, .ppt",".docx":".docx, .doc",".xlsx":".xlsx, .xls",".jpg":".jpg, .jpeg",".html":".html, .htm"}[c.type],multiple:!0,ref:y,className:"position-absolute file-input",onClick:function(e){e.stopPropagation(),_(!0)},onChange:function(e){var t;!function(e,t,n,r){var a,o=(null===(a=e.target)||void 0===a?void 0:a.files)||null,i=E(o,n,r,t);t((0,m.Fi)()),i&&t((0,m.Aj)())}(e,b,c.type,f),b((0,m.T2)()),((F=null===(t=e.target)||void 0===t?void 0:t.files)&&F.length>0||z.length>0)&&b((0,m.Aj)())}})]}),(0,o.jsx)("a",{href:"",className:"d-none",ref:T,download:"__output.pdf"}),(0,o.jsx)("button",{type:"submit",ref:R,className:"d-none",children:"submit"})]}),(0,o.jsx)("p",{children:u.or_drop}),j.showErrorMessage&&N?(0,o.jsx)(D,{state:j}):null]}),(0,o.jsx)(k,{extension:c.type,submitBtn:R,edit_page:g,pages:h,page:x,lang:d,errors:f,fileInput:y})]}))})}},3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){}}]);